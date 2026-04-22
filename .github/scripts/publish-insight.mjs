#!/usr/bin/env node
// Gera 1 artigo por cada categoria (4 no total) em src/content/insights/ via API Anthropic.
// Usado pelo workflow daily-insight.yml e pode correr localmente:
//   ANTHROPIC_API_KEY=... node .github/scripts/publish-insight.mjs
//
// Variáveis de ambiente:
//   ANTHROPIC_API_KEY — obrigatório
//   INSIGHT_MODEL     — opcional (default: claude-sonnet-4-6)
//   INSIGHT_CATEGORY  — opcional (default: todas as 4). Valores aceites:
//                       'Investimento' | 'Regulamentação' | 'Sustentabilidade' | 'Mercado'
//                       ou 'all' (todas, uma por categoria)

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src/content/insights');
const BACKLOG = path.join(CONTENT_DIR, '_topics-backlog.md');
const ALL_TS = path.join(CONTENT_DIR, '_all.ts');
const CATEGORIES = path.join(CONTENT_DIR, '_categories.ts');
const TEMPLATE = path.join(CONTENT_DIR, 'cinco-pilares-avaliar-reabilitacao-urbana.ts');
const MODEL = process.env.INSIGHT_MODEL || 'claude-sonnet-4-6';

const VALID_CATEGORIES = ['Investimento', 'Regulamentação', 'Sustentabilidade', 'Mercado'];

// Secções do backlog → categoria de artigo
const SECTION_TO_CATEGORY = {
  'Investimento': 'Investimento',
  'Reabilitação e obra': 'Investimento',
  'Regulamentação': 'Regulamentação',
  'Mercado': 'Mercado',
  'Sustentabilidade': 'Sustentabilidade',
  'Due diligence / processos': 'Regulamentação',
  'Processos HABTA (case-oriented)': 'Investimento',
};

function fail(msg, code = 1) {
  console.error(`::error::${msg}`);
  process.exit(code);
}

if (!process.env.ANTHROPIC_API_KEY) fail('ANTHROPIC_API_KEY não está definida.');

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 8)
    .join('-')
    .replace(/-+/g, '-');
}

function toCamelCase(s) {
  return s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function pickPoolImage(categoryName, seed) {
  const src = fs.readFileSync(CATEGORIES, 'utf8');
  const blockRegex = new RegExp(
    String.raw`${categoryName}\s*:\s*\{[\s\S]*?imagePool\s*:\s*\[([\s\S]*?)\]`,
  );
  const m = src.match(blockRegex);
  if (!m) return undefined;
  const urls = Array.from(m[1].matchAll(/`([^`]+)`|'([^']+)'|"([^"]+)"/g))
    .map((x) => x[1] || x[2] || x[3])
    .filter(Boolean);
  if (urls.length === 0) return undefined;
  return urls[hashString(seed) % urls.length];
}

// Parse backlog: retorna pending = [{ topic, section, category }]
function parsePendingTopics(raw) {
  const pending = [];
  let currentSection = null;
  for (const line of raw.split('\n')) {
    const sectionMatch = line.match(/^##\s+(.+)$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      continue;
    }
    const topicMatch = line.match(/^- \[ \] (.+)$/);
    if (topicMatch && currentSection) {
      const suggestedCategory = SECTION_TO_CATEGORY[currentSection] || 'Investimento';
      pending.push({
        topic: topicMatch[1].trim(),
        section: currentSection,
        suggestedCategory,
      });
    }
  }
  return pending;
}

// Lê _all.ts e retorna a categoria do último artigo publicado (ou null)
function getLastPublishedCategory() {
  const allTs = fs.readFileSync(ALL_TS, 'utf8');
  const importLines = Array.from(
    allTs.matchAll(/^import\s+\{\s*article\s+as\s+\w+\s*\}\s+from\s+'\.\/([^']+)'/gm),
  ).map((m) => m[1]);
  if (importLines.length === 0) return null;
  const lastSlug = importLines[importLines.length - 1];
  try {
    const lastFile = fs.readFileSync(path.join(CONTENT_DIR, `${lastSlug}.ts`), 'utf8');
    const catMatch = lastFile.match(/category:\s*'([^']+)'/);
    return catMatch ? catMatch[1] : null;
  } catch {
    return null;
  }
}

function pickTopicForCategory(targetCategory, usedSlugs) {
  const backlogRaw = fs.readFileSync(BACKLOG, 'utf8');
  const pending = parsePendingTopics(backlogRaw);
  const forCat = pending.filter(
    (p) => p.suggestedCategory === targetCategory && !usedSlugs.has(slugify(p.topic)),
  );
  return forCat[0] || null;
}

async function publishOne(chosen) {
  const topic = chosen.topic;
  const suggestedCategory = chosen.suggestedCategory;
  let slug = slugify(topic);
  let camelName = toCamelCase(slug);
  let filePath = path.join(CONTENT_DIR, `${slug}.ts`);
  const today = new Date().toISOString().slice(0, 10);
  const currentYear = new Date().getFullYear();
  const template = fs.readFileSync(TEMPLATE, 'utf8');

  if (fs.existsSync(filePath)) {
    console.warn(
      `::warning::Ficheiro já existe, a saltar: ${filePath}. Marca o tópico [x] ou escolha outro.`,
    );
    return null;
  }

const systemPrompt = `És um redator sénior de conteúdo técnico para a HABTA — uma empresa premium de reabilitação urbana e investimento imobiliário em Portugal (Lisboa, Porto, Cascais).

Público-alvo: investidores sofisticados, proprietários, profissionais do setor. Conteúdo YMYL (Your Money Your Life): informação sobre investimento e fiscalidade tem impacto real. Exige rigor, verificabilidade e tom conservador.

Escreves em português europeu (pt-PT) impecável. Nunca uses português do Brasil. O output é EXCLUSIVAMENTE o ficheiro TypeScript dentro de <file>...</file>, sem prosa fora das tags, sem markdown, sem emojis, sem comentários JSX.

Os artigos que produzes têm de ranquear em 1º lugar no Google Portugal e ser citados por AI Overviews, ChatGPT Search e Perplexity. Para isso respeitas estritamente o guião SEO/AEO/GEO que é dado no prompt.`;

const userPrompt = `Gera o ficheiro ${slug}.ts para este tópico:
"${topic}"

Secção do backlog: "${chosen.section}"
Categoria sugerida (respeita, a menos que claramente desajustada): ${suggestedCategory}

Data de hoje: ${today}
Ano corrente para referência: ${currentYear}

Usa o template abaixo como referência de SHAPE (imports, campos, tipos de bloco). Replica EXATAMENTE a estrutura e os tipos — inclusive 'quote' e 'table' — mas com conteúdo novo adaptado ao tópico.

<template>
${template}
</template>

────────────────────────────────
GUIÃO SEO/AEO/GEO OBRIGATÓRIO
────────────────────────────────

A. METADADOS E HEADERS (Google)
1. \`title\`: 50–65 caracteres. Inclui a focus keyword + modificador geográfico (Lisboa/Portugal/Porto) ou temporal (${currentYear}) quando o tópico for legal, fiscal ou de mercado. Claro, descritivo, sem clickbait.
2. \`description\`: 150–160 caracteres. Inclui a focus keyword, resume o valor concreto e termina com uma insinuação de benefício (sem exclamações).
3. \`excerpt\`: 1 frase de 20–28 palavras, contém a focus keyword ou variação semântica próxima.
4. \`tags\`: 4–6 strings long-tail (ex.: "ROI reabilitação Lisboa", "IMT isenção jovens ${currentYear}"), nunca genéricas de 1 palavra.
5. \`category\`: um de ${JSON.stringify(VALID_CATEGORIES)}.
6. \`readTime\`: "5 min" a "9 min", proporcional ao alvo de 1400–1700 palavras.

B. FOCUS KEYWORD (SEO clássico)
7. Identifica uma focus keyword realista para Portugal (ex.: "yield líquido reabilitação Lisboa"). Usa-a ou uma variação próxima no:
   - \`title\`
   - \`excerpt\`
   - primeiro parágrafo do \`contentBlocks\`
   - pelo menos 1 \`heading2\`
   Sem keyword stuffing — varia com sinónimos e termos semanticamente relacionados.

C. TL;DR (AEO — Answer Engine Optimization)
8. Campo \`tldr\`: 3–4 bullets que respondem diretamente à query principal. Cada bullet 15–30 palavras, com um facto ou número concreto. É a secção mais citada por AI Overviews — trata-a como a resposta curta e extraível.

D. E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
9. Campo \`trustSignals\`: preenche SEMPRE com:
   - \`yearsExperience\`: 15 (experiência acumulada da equipa HABTA)
   - \`projectsReviewed\`: 120 (análises de viabilidade acumuladas)
   - \`geoScope\`: "Lisboa, Porto e Cascais" (ou subconjunto se o tópico for específico)
   - \`lastReviewed\`: "${today}"
10. \`author\`: "HABTA". \`authorRole\`: escolhe o mais adequado de "Equipa de Investimento" | "Equipa Técnica" | "Equipa Jurídica" | "Equipa de Sustentabilidade" consoante o tópico.

E. ESTRUTURA DE CONTEÚDO (AEO + leitura humana)
11. \`contentBlocks\`: 14–20 blocos, totalizando **1400–1700 palavras**.
12. **5 a 8 heading2 em formato pergunta** quando o tópico permitir (ex.: "Quanto tempo demora o licenciamento em Lisboa?"). Sob cada H2, a primeira frase responde diretamente à pergunta em 40–60 palavras.
13. Obrigatórios na composição dos blocos:
    - ≥1 \`callout\` (abertura ou fecho com insight forte)
    - ≥3 \`heading2\`
    - ≥1 \`heading3\`
    - ≥2 \`list\` (listas são altamente extraíveis por AI)
    - ≥1 \`quote\` com \`source: { name, role }\` — quote atribuído à "Equipa de Investimento HABTA" ou similar, com um insight concreto/numérico
    - ≥1 \`table\` com \`content: { headers: string[], rows: string[][] }\` — exemplos: comparativo de cenários, comparativo de tipologias/épocas, matriz de custos
14. Parágrafos curtos (2–4 frases, máx 60 palavras). Headings descritivos (nunca "Introdução"/"Conclusão").

F. DADOS E AUTORIDADE (GEO + YMYL)
15. Inclui pelo menos **5 dados quantitativos concretos** (percentuais, prazos, intervalos de preço, nº de projetos, datas). Para Portugal, usa unidades e léxico corretos (€, m², ano civil, DL n.º X/ANO).
16. Cita ≥1 peça de legislação ou norma portuguesa específica quando relevante (ex.: "DL n.º 53/2014", "Código do IMT art.º X", "RGEU", "RJUE", "Mais Habitação Lei n.º 56/2023"). Se não tiveres a certeza da referência exata, usa linguagem condicional ("no regime jurídico aplicável", "nos termos da legislação em vigor") — nunca inventes números de decreto.
17. Menciona ≥1 entidade pública nomeada (Câmara Municipal de Lisboa / Porto Vivo, SRU / IMPIC / Banco de Portugal / INE / Autoridade Tributária) quando pertinente.
18. Quando o tópico beneficiar de especificidade geográfica, menciona ≥1 freguesia ou município concreto (Alfama, Misericórdia, Chiado, Cedofeita, Bonfim, Baixa, Parede, Estoril, etc.).

G. LINKS INTERNOS E CTA
19. Pelo menos um bloco \`paragraph\` menciona "/portfolio" ou "/servicos" de forma natural, em contexto (ex.: "a nossa equipa, descrita em /servicos, ..."). Conta para internal linking.
20. Termina com um H2 "Próximos passos" (ou equivalente específico do tópico) e um paragraph com chamada à ação — análise, newsletter, contacto.

H. FAQ (AEO — FAQPage schema)
21. Campo \`faq\`: 4–6 objetos \`{ q, a }\` que respondem perguntas do tipo "People Also Ask" em pt-PT. Pergunta em 5–12 palavras; resposta em 30–55 palavras, auto-contida, extraível.

I. DISCLAIMER (YMYL Trust)
22. Campo \`disclaimer\`: 1 frase padrão adaptada — "Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. [Pequena nota específica ao tópico.] Consulte profissionais qualificados antes de decisões concretas."

J. LÉXICO pt-PT (nunca pt-BR)
23. Proibido: "banheiro" (usa "casa de banho"), "aluguel" (usa "arrendamento"), "reforma" (usa "reabilitação"), "ônibus" (usa "autocarro"), "caminhão" (usa "camião"), gerúndios brasileiros ("estou fazendo"), "time" no sentido de equipa (usa "equipa"), "celular" (usa "telemóvel"), "grama" (usa "relva" quando planta, "grama" ok para unidade).
24. Revê ortografia obsessivamente — "erodem" (nunca "errodem"), "acrescem", "corroem", "pré-1970" com hífen, "fração autónoma", "área bruta de construção".

K. ANTI-FILLER (evitar padrão de conteúdo IA)
25. Proibidas as seguintes fórmulas:
    - "num mercado em constante mudança / dinâmico / em evolução"
    - "é importante notar que..."
    - "como mencionado anteriormente..."
    - "em suma", "para concluir", "concluindo"
    - "no mundo do imobiliário..."
    - "a chave é..." / "o segredo é..."
    - afirmações vagas sem âmbito ("muitas vezes", "frequentemente", "geralmente" sem quantificar)
26. Cada parágrafo deve acrescentar informação verificável. Se um parágrafo não sobreviveria à pergunta "e então, concretamente?", corta-o.

L. IMAGEM
27. NÃO incluas o campo \`image\` — é injetado automaticamente depois pelo script a partir do \`imagePool\` da categoria.

────────────────────────────────
FORMATO FINAL
────────────────────────────────

Devolves APENAS:
<file>
<conteúdo integral do ficheiro .ts, pronto a gravar>
</file>

O ficheiro deve importar exatamente:
  import { categoryVisuals } from './_categories';
  import type { InsightArticle } from './types';

E exportar:
  export const article: InsightArticle = { ... };

Com todos os campos obrigatórios: id, title, description, category, readTime, icon, iconColor, gradient, author, authorRole, date, updated_at, excerpt, tags, tldr, trustSignals, contentBlocks, faq, disclaimer.`;

console.log(`[publish-insight] Tópico: "${topic}"`);
console.log(`[publish-insight] Slug: ${slug}`);
console.log(`[publish-insight] Model: ${MODEL}`);

const resp = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: MODEL,
    max_tokens: 12000,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  }),
});

if (!resp.ok) {
  const errText = await resp.text();
  throw new Error(`Anthropic API ${resp.status}: ${errText}`);
}

const data = await resp.json();
const text = (data.content || []).map((b) => (b.type === 'text' ? b.text : '')).join('');
const fileMatch = text.match(/<file>([\s\S]*?)<\/file>/);
if (!fileMatch) {
  console.error('Resposta da API (sem <file> tags):');
  console.error(text.slice(0, 2000));
  throw new Error('Resposta não continha <file>...</file>.');
}

let fileContent = fileMatch[1].trim() + '\n';

// Se o modelo gerou id: '...' diferente do slug calculado, alinhar slug/caminho ao id real.
const idMatch = fileContent.match(/id:\s*'([^']+)'/);
if (!idMatch) throw new Error("Conteúdo gerado não tem id: '...'.");
const generatedId = idMatch[1];
if (generatedId !== slug) {
  console.warn(
    `[publish-insight] id gerado "${generatedId}" difere do slug calculado "${slug}". A usar id gerado.`,
  );
  slug = generatedId;
  camelName = toCamelCase(slug);
  filePath = path.join(CONTENT_DIR, `${slug}.ts`);
  if (fs.existsSync(filePath)) {
    console.warn(`::warning::Ficheiro já existe para id "${slug}". A saltar.`);
    return null;
  }
}

const mustContain = [
  'import',
  './_categories',
  './types',
  'contentBlocks',
  'InsightArticle',
  'tldr',
  'trustSignals',
  'faq',
  'disclaimer',
];
for (const needle of mustContain) {
  if (!fileContent.includes(needle)) throw new Error(`Conteúdo gerado não inclui "${needle}".`);
}

const categoryMatch = fileContent.match(/category:\s*'([^']+)'/);
if (!categoryMatch) throw new Error("Conteúdo gerado não tem category: '...'.");
const chosenCategory = categoryMatch[1];
if (!VALID_CATEGORIES.includes(chosenCategory)) {
  throw new Error(`Categoria inválida: ${chosenCategory}. Válidas: ${VALID_CATEGORIES.join(', ')}.`);
}
const poolImage = pickPoolImage(chosenCategory, slug);
if (poolImage) {
  const hasImage = /\bimage\s*:\s*(?:'[^']*'|"[^"]*"|`[^`]*`)/.test(fileContent);
  if (hasImage) {
    fileContent = fileContent.replace(
      /\bimage\s*:\s*(?:'[^']*'|"[^"]*"|`[^`]*`)/,
      `image: '${poolImage}'`,
    );
    console.log(`[publish-insight] Imagem substituída por pool ${chosenCategory}: ${poolImage}`);
  } else {
    fileContent = fileContent.replace(
      /(excerpt:\s*(?:'[^']*'|"[^"]*"|`[^`]*`)\s*,\s*\n)/,
      `$1  image: '${poolImage}',\n`,
    );
    console.log(`[publish-insight] Imagem injetada de pool ${chosenCategory}: ${poolImage}`);
  }
}

// Computar todas as alterações em memória antes de escrever em disco.
const allTsLines = fs.readFileSync(ALL_TS, 'utf8').split('\n');
let lastArticleImportIdx = -1;
for (let i = 0; i < allTsLines.length; i++) {
  if (allTsLines[i].startsWith('import { article as ')) lastArticleImportIdx = i;
}
if (lastArticleImportIdx === -1) throw new Error('Não encontrei linha de import article as ... em _all.ts');

const newImportLine = `import { article as ${camelName} } from './${slug}';`;
allTsLines.splice(lastArticleImportIdx + 1, 0, newImportLine);

const allTsWithImport = allTsLines.join('\n');
const updatedAllTs = allTsWithImport.replace(
  /const\s+articles:\s*InsightArticle\[\]\s*=\s*\[([^\]]*)\];/,
  (_, body) => {
    const entries = body
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    entries.push(camelName);
    return `const articles: InsightArticle[] = [${entries.join(', ')}];`;
  },
);
if (updatedAllTs === allTsWithImport) throw new Error('Não consegui atualizar o array articles em _all.ts');

const currentBacklog = fs.readFileSync(BACKLOG, 'utf8');
const updatedBacklog = currentBacklog.replace(`- [ ] ${topic}`, `- [x] ${topic}`);
if (updatedBacklog === currentBacklog) {
  console.warn(`::warning::Não encontrei "- [ ] ${topic}" no backlog para marcar — provavelmente já publicado.`);
}

// Tudo validado — escrever ao disco em bloco.
fs.writeFileSync(filePath, fileContent, 'utf8');
console.log(`[publish-insight] Escrito: ${filePath}`);
fs.writeFileSync(ALL_TS, updatedAllTs, 'utf8');
console.log('[publish-insight] _all.ts atualizado.');
fs.writeFileSync(BACKLOG, updatedBacklog, 'utf8');
console.log('[publish-insight] Backlog marcado como publicado.');

  return { slug, topic, filePath, category: chosenCategory };
}

async function main() {
  const singleCategory = process.env.INSIGHT_CATEGORY;
  const targetCategories = singleCategory && singleCategory !== 'all'
    ? [singleCategory]
    : VALID_CATEGORIES;

  if (singleCategory && singleCategory !== 'all' && !VALID_CATEGORIES.includes(singleCategory)) {
    fail(`INSIGHT_CATEGORY inválida: ${singleCategory}. Válidas: ${VALID_CATEGORIES.join(', ')} ou 'all'.`);
  }

  console.log(`[publish-insight] Categorias-alvo: ${targetCategories.join(', ')}`);

  const results = [];
  const usedSlugs = new Set();

  for (const cat of targetCategories) {
    const chosen = pickTopicForCategory(cat, usedSlugs);
    if (!chosen) {
      console.warn(`::warning::Sem tópicos pendentes para categoria "${cat}". A saltar.`);
      continue;
    }
    console.log(`\n[publish-insight] === Categoria: ${cat} ===`);
    try {
      const r = await publishOne(chosen);
      if (r) {
        results.push(r);
        usedSlugs.add(r.slug);
      }
    } catch (err) {
      console.error(`::error::Falha a publicar para categoria "${cat}": ${err.message || err}`);
    }
  }

  if (results.length === 0) {
    console.log('[publish-insight] Nenhum artigo publicado.');
    process.exit(0);
  }

  console.log(`\n[publish-insight] Type-check final sobre ${results.length} artigo(s)...`);
  try {
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
  } catch {
    console.error('[publish-insight] Type-check falhou. A reverter todos os artigos.');
    for (const r of results) {
      if (fs.existsSync(r.filePath)) fs.unlinkSync(r.filePath);
    }
    execSync(`git checkout -- ${ALL_TS} ${BACKLOG}`);
    fail('Type-check falhou, mudanças revertidas.');
  }

  fs.writeFileSync('.tmp-insight-slugs', results.map((r) => r.slug).join('\n'), 'utf8');
  fs.writeFileSync('.tmp-insight-topics', results.map((r) => r.topic).join('\n'), 'utf8');
  console.log(`\n[publish-insight] Sucesso: ${results.length} artigo(s) publicado(s):`);
  for (const r of results) console.log(`  - [${r.category}] ${r.slug}`);
}

main().catch((err) => fail(err.message || String(err)));
