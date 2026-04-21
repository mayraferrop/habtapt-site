#!/usr/bin/env node
// Gera 1 artigo novo em src/content/insights/ via API Anthropic.
// Usado pelo workflow daily-insight.yml e pode correr localmente:
//   ANTHROPIC_API_KEY=... node .github/scripts/publish-insight.mjs

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src/content/insights');
const BACKLOG = path.join(CONTENT_DIR, '_topics-backlog.md');
const ALL_TS = path.join(CONTENT_DIR, '_all.ts');
const TEMPLATE = path.join(CONTENT_DIR, 'cinco-pilares-avaliar-reabilitacao-urbana.ts');
const MODEL = process.env.INSIGHT_MODEL || 'claude-sonnet-4-6';

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

const backlogRaw = fs.readFileSync(BACKLOG, 'utf8');
const pendingMatch = backlogRaw.match(/^- \[ \] (.+)$/m);
if (!pendingMatch) {
  console.log('Sem tópicos pendentes no backlog. A sair.');
  process.exit(0);
}
const topic = pendingMatch[1].trim();
const slug = slugify(topic);
const camelName = toCamelCase(slug);
const filePath = path.join(CONTENT_DIR, `${slug}.ts`);

if (fs.existsSync(filePath)) fail(`Ficheiro já existe: ${filePath}. Marque o tópico [x] ou escolha outro.`);

const template = fs.readFileSync(TEMPLATE, 'utf8');
const today = new Date().toISOString().slice(0, 10);

const systemPrompt = `És um redator técnico especializado em imobiliário premium para a HABTA (reabilitação urbana em Portugal).
Produzes APENAS o conteúdo de um ficheiro TypeScript, dentro de <file>...</file>. Sem prosa, sem markdown fora das tags.
Idioma: português europeu (pt-PT). Tom profissional, claro, orientado a investidores. Sem emojis, sem placeholders, sem comentários JSX.`;

const userPrompt = `Gera o ficheiro ${slug}.ts para este tópico:
"${topic}"

Data de hoje: ${today}

Segue EXATAMENTE o mesmo shape do template abaixo (imports, exports, campos), mas com conteúdo novo adaptado ao tópico.

<template>
${template}
</template>

Regras:
- id = "${slug}"
- date = "${today}", updated_at = "${today}"
- author = "HABTA", authorRole = "Equipa de Investimento"
- category = escolhe UM de: 'Investimento' | 'Regulamentação' | 'Sustentabilidade' | 'Mercado' (o mais adequado ao tópico)
- Os imports e a linha \`const visual = categoryVisuals['<Categoria>'];\` usam a categoria que escolheres
- icon, iconColor, gradient = visual.icon / visual.iconColor / visual.gradient
- readTime entre "5 min" e "9 min"
- excerpt: 1 frase, ~25 palavras
- tags: 3 a 6 strings relevantes em pt-PT
- contentBlocks: 12 a 18 blocos mistos (callout, heading2, heading3, paragraph, list) totalizando 600-900 palavras
- Pelo menos 1 callout, 3+ heading2, 1+ list
- Conteúdo evergreen — evita números específicos (taxas, preços, % de juro) que fiquem desatualizados
- Brand: HABTA é premium, experiente, criteriosa; fala em "nós" quando ilustra metodologia

Devolve apenas:
<file>
<conteúdo integral do ficheiro .ts>
</file>`;

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
    max_tokens: 6000,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  }),
});

if (!resp.ok) {
  const errText = await resp.text();
  fail(`Anthropic API ${resp.status}: ${errText}`);
}

const data = await resp.json();
const text = (data.content || []).map((b) => (b.type === 'text' ? b.text : '')).join('');
const fileMatch = text.match(/<file>([\s\S]*?)<\/file>/);
if (!fileMatch) {
  console.error('Resposta da API (sem <file> tags):');
  console.error(text.slice(0, 2000));
  fail('Resposta não continha <file>...</file>.');
}

const fileContent = fileMatch[1].trim() + '\n';

const mustContain = [
  'import',
  './_categories',
  './types',
  `id: '${slug}'`,
  'contentBlocks',
  'InsightArticle',
];
for (const needle of mustContain) {
  if (!fileContent.includes(needle)) fail(`Conteúdo gerado não inclui "${needle}".`);
}

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log(`[publish-insight] Escrito: ${filePath}`);

const allTsLines = fs.readFileSync(ALL_TS, 'utf8').split('\n');
let lastArticleImportIdx = -1;
for (let i = 0; i < allTsLines.length; i++) {
  if (allTsLines[i].startsWith('import { article as ')) lastArticleImportIdx = i;
}
if (lastArticleImportIdx === -1) fail('Não encontrei linha de import article as ... em _all.ts');

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
if (updatedAllTs === allTsWithImport) fail('Não consegui atualizar o array articles em _all.ts');
fs.writeFileSync(ALL_TS, updatedAllTs, 'utf8');
console.log('[publish-insight] _all.ts atualizado.');

const updatedBacklog = backlogRaw.replace(`- [ ] ${topic}`, `- [x] ${topic}`);
fs.writeFileSync(BACKLOG, updatedBacklog, 'utf8');
console.log('[publish-insight] Backlog marcado como publicado.');

try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
} catch {
  console.error('[publish-insight] Type-check falhou. A reverter.');
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  execSync(`git checkout -- ${ALL_TS} ${BACKLOG}`);
  fail('Type-check falhou, mudanças revertidas.');
}

fs.writeFileSync('.tmp-insight-slug', slug, 'utf8');
fs.writeFileSync('.tmp-insight-topic', topic, 'utf8');
console.log(`[publish-insight] Sucesso: ${slug}`);
