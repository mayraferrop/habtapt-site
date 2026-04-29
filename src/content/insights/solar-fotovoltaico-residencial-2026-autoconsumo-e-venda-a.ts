import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'solar-fotovoltaico-residencial-2026-autoconsumo-e-venda-a',
  title: 'Solar fotovoltaico residencial em Portugal 2026: autoconsumo e venda à rede',
  description:
    'Guia atualizado sobre painéis solares residenciais em Portugal: tarifas de injeção, prazos de licenciamento, apoios disponíveis e retorno esperado em 2026.',
  category: 'Sustentabilidade',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Sustentabilidade',
  date: '2026-04-29',
  updated_at: '2026-04-29',
  excerpt:
    'Em 2026, instalar painéis solares fotovoltaicos residenciais em Portugal permite reduzir a fatura em até 70% e injetar excedentes na rede com remuneração regulada.',
  image: 'https://images.unsplash.com/photo-1556983852-43bf21186b2a${UNSPLASH_PARAMS}',
  tags: [
    'painéis solares residenciais Portugal 2026',
    'autoconsumo fotovoltaico Lisboa',
    'venda energia rede elétrica Portugal',
    'apoios painéis solares SERUP',
    'retorno investimento solar residencial',
  ],
  tldr: [
    'Em 2026, um sistema fotovoltaico residencial de 5 kWp custa entre 6 500 € e 9 500 € em Portugal e tem um período de retorno típico de 6 a 9 anos, dependendo do consumo e da tarifa.',
    'A venda de excedentes à rede é remunerada à tarifa de mercado spot com correção trimestral pela ERSE — em 2025 oscilou entre 55 €/MWh e 95 €/MWh.',
    'O licenciamento de sistemas de autoconsumo até 1 MW faz-se via SERUP (portal da DGEG) com registo simplificado; obras em edifícios em ARU requerem validação prévia da câmara.',
    'O Programa Sol 2030 e o Fundo Ambiental disponibilizam apoios a fundo perdido até 30% do investimento para habitação própria permanente, sujeitos a cabimentação.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-29',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Portugal tem uma das maiores irradiâncias solares da Europa Ocidental — Lisboa recebe cerca de 2 800 horas de sol por ano, mais do dobro de Berlim. Em 2026, a conjugação de preços de instalação em queda, tarifas de eletricidade elevadas e apoios públicos torna o fotovoltaico residencial um dos raros investimentos em habitação com retorno mensurável a menos de uma década.',
    },
    {
      type: 'paragraph',
      content:
        'O solar fotovoltaico residencial em Portugal assenta em dois pilares económicos: autoconsumo — a energia produzida que se usa diretamente, evitando compra à rede — e venda de excedentes, que remunera o que sobra após o consumo doméstico. A proporção entre os dois determina a rentabilidade do sistema e deve orientar o dimensionamento antes de contratar qualquer instalador.',
    },
    {
      type: 'heading2',
      content: 'Quanto custa instalar painéis solares numa habitação em Portugal em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, o custo médio de instalação "chiave in mano" (equipamento, estrutura, inversor, cablagem e registo SERUP) situa-se entre 1 200 € e 1 800 € por kWp instalado, consoante a complexidade da cobertura e a localização. Um sistema de 5 kWp — adequado para uma moradia ou apartamento T3 com consumo anual de 4 000–5 500 kWh — custa tipicamente entre 6 500 € e 9 500 €.',
    },
    {
      type: 'table',
      content: {
        headers: ['Dimensão do sistema', 'Perfil de habitação', 'Custo indicativo (€)', 'Produção anual estimada (kWh)', 'Período de retorno típico'],
        rows: [
          ['3 kWp', 'Apartamento T2, Lisboa', '4 200–5 400', '4 200–4 800', '7–9 anos'],
          ['5 kWp', 'Moradia T3, Cascais', '6 500–9 500', '7 000–8 000', '6–8 anos'],
          ['8 kWp', 'Moradia T4 com piscina, Sintra', '10 000–14 500', '11 200–12 800', '7–9 anos'],
          ['10 kWp', 'Moradia ampla com VE, Porto', '13 000–18 000', '14 000–16 000', '6–8 anos'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Estes valores não incluem baterias de armazenamento. Adicionar um sistema de bateria de 5–10 kWh acrescenta 3 000–6 000 € e melhora a taxa de autoconsumo de 30–45% para 70–85%, o que pode encurtar o retorno quando a tarifa noturna é baixa mas a diurna elevada.',
    },
    {
      type: 'heading2',
      content: 'Como funciona a venda de excedentes à rede elétrica em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'Os excedentes de produção são injetados na rede e remunerados nos termos do Decreto-Lei n.º 15/2022 e da regulamentação da ERSE em vigor. A remuneração é calculada com base no preço médio do mercado ibérico (MIBEL) com fator de correção trimestral — em 2025 situou-se entre 55 €/MWh e 95 €/MWh, ou seja, 5,5 a 9,5 cêntimos por kWh injetado.',
    },
    {
      type: 'paragraph',
      content:
        'Este valor é substancialmente inferior ao preço de compra de eletricidade da rede (cerca de 22–28 cêntimos/kWh em tarifa doméstica normal em 2026). Por isso, o princípio económico fundamental é: autoconsumir primeiro, injetar depois. Cada kWh autoconsumido vale o dobro ou mais de um kWh vendido.',
    },
    {
      type: 'list',
      content: [
        'A remuneração de excedentes não é garantida por tarifa fixa — depende das cotações do MIBEL, revistas trimestralmente pela ERSE.',
        'O contrato de venda é celebrado com o comercializador de último recurso ou com o comercializador do consumidor, conforme opção.',
        'A energia injetada é medida por contador bidirecional instalado pela distribuidora (E-REDES ou EDP Distribuição), sem custo para o produtor.',
        'Os rendimentos da venda estão sujeitos a IRS, categoria B (rendimentos empresariais e profissionais) ou categoria F, consoante o enquadramento — consulte um contabilista certificado.',
        'Sistemas até 1 MW ficam isentos de licença prévia e enquadram-se no regime simplificado de registo SERUP.',
      ],
    },
    {
      type: 'heading2',
      content: 'Qual é o processo de licenciamento e registo em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'O registo de unidades de produção para autoconsumo (UPAC) até 1 MW é feito exclusivamente através do SERUP — Sistema Eletrónico de Registo de Unidades de Produção, gerido pela DGEG. O processo é digital, sem deslocações, e divide-se em duas fases: registo de instalação e certificado de exploração.',
    },
    {
      type: 'list',
      content: [
        'Fase 1 — Registo de instalação: submissão de projeto simplificado, planta de localização e ficha técnica do equipamento. Prazo de análise: 20 dias úteis.',
        'Fase 2 — Pedido de ligação à rede: após o registo, a distribuidora (E-REDES) instala ou reprograma o contador bidirecional. Prazo: até 30 dias úteis.',
        'Fase 3 — Certificado de exploração: emitido após inspeção de instalação elétrica por entidade inspetora acreditada pelo IMPIC.',
        'Em edifícios classificados ou em Áreas de Reabilitação Urbana (ARU), como Alfama ou Bairro Alto em Lisboa, a câmara municipal pode exigir autorização prévia para alteração da cobertura — consultar a CML antes de contratar.',
        'Condomínios em regime de propriedade horizontal podem instalar sistemas coletivos ao abrigo do regime de autoconsumo coletivo, com repartição de benefícios definida em assembleia.',
      ],
    },
    {
      type: 'heading3',
      content: 'Documentação mínima para submeter o registo SERUP',
    },
    {
      type: 'list',
      content: [
        'Termo de responsabilidade assinado por instalador com alvará ITED/IEBT válido.',
        'Ficha técnica do painel fotovoltaico e do inversor (marca, modelo, potência, certificação CE).',
        'Diagrama unifilar da instalação elétrica.',
        'Planta de localização e foto aérea com indicação da cobertura.',
        'NIF do requerente e referência do ponto de entrega (CPE) da instalação de consumo.',
      ],
    },
    {
      type: 'heading2',
      content: 'Que apoios financeiros existem para painéis solares residenciais em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, os principais instrumentos de apoio a fundo perdido para fotovoltaico residencial em Portugal são o Programa Sol 2030, gerido pelo Fundo Ambiental, e as linhas de eficiência energética do PRR (Plano de Recuperação e Resiliência). O apoio máximo é de 30% do investimento elegível para habitação própria permanente, com teto de 3 000 € por fogo.',
    },
    {
      type: 'paragraph',
      content:
        'A cabimentação é anual e os fundos esgotam-se por ordem de candidatura. Em 2025, as candidaturas ao Fundo Ambiental encerraram antes do prazo previsto. Para 2026, recomenda-se candidatar assim que as portarias de abertura forem publicadas em Diário da República — o Fundo Ambiental publica avisos no seu sítio oficial.',
    },
    {
      type: 'table',
      content: {
        headers: ['Programa', 'Entidade gestora', 'Apoio máximo', 'Condição principal', 'Estado em 2026'],
        rows: [
          ['Sol 2030', 'Fundo Ambiental', '30% / máx. 3 000 €', 'Habitação própria permanente', 'Candidaturas abertas por aviso'],
          ['PRR — Eficiência Energética', 'ADENE / SRU', 'Variável por aviso', 'Edifícios com EPC D ou inferior', 'Consultar avisos ativos'],
          ['IVA reduzido a 6%', 'Autoridade Tributária', 'Redução de IVA na instalação', 'Habitação própria (não serviços)', 'Vigor — verificar enquadramento'],
          ['Crédito verde bancário', 'CGD, BPI, Santander, etc.', 'Taxa bonificada ~1–2%', 'Projeto com certificado energético', 'Disponível — condições variam'],
        ],
      },
    },
    {
      type: 'quote',
      content:
        'Nos projetos de reabilitação que acompanhamos em Lisboa e Cascais, a integração de fotovoltaico na fase de obra reduz o custo de instalação em 15 a 25% face a uma instalação posterior — e permite optimizar a estrutura da cobertura para carga e orientação dos painéis desde o início.',
      source: {
        name: 'Equipa de Sustentabilidade HABTA',
        role: 'Análise de projetos 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Como calcular o retorno do investimento solar na sua habitação?',
    },
    {
      type: 'paragraph',
      content:
        'O retorno depende de quatro variáveis: custo de instalação, taxa de autoconsumo, tarifa de eletricidade evitada e remuneração de excedentes. Uma folha de cálculo simples permite estimar o payback sem ferramentas externas.',
    },
    {
      type: 'list',
      content: [
        'Poupança anual por autoconsumo = kWh autoconsumidos × tarifa de compra (€/kWh). Exemplo: 3 500 kWh × 0,25 € = 875 €/ano.',
        'Receita anual de excedentes = kWh injetados × tarifa MIBEL trimestral média. Exemplo: 2 000 kWh × 0,07 € = 140 €/ano.',
        'Poupança total anual = 875 + 140 = 1 015 €/ano (antes de impostos sobre receita de venda).',
        'Payback simples = custo de instalação líquido de apoios ÷ poupança total anual. Exemplo: 7 000 € ÷ 1 015 € ≈ 6,9 anos.',
        'O TIR (taxa interna de rentabilidade) a 25 anos, com degradação anual de 0,5% nos painéis, situa-se tipicamente entre 8% e 14% em Portugal.',
      ],
    },
    {
      type: 'heading2',
      content: 'Fotovoltaico em condomínios: o que mudou com o autoconsumo coletivo?',
    },
    {
      type: 'paragraph',
      content:
        'O Decreto-Lei n.º 15/2022 consolidou o regime de autoconsumo coletivo, permitindo que vários consumidores num mesmo edifício ou conjunto de edifícios partilhem a produção de uma instalação comum. A repartição da energia é definida em assembleia de condóminos e inscrita no registo SERUP.',
    },
    {
      type: 'paragraph',
      content:
        'Em edifícios de apartamentos em Lisboa ou Porto, a cobertura é frequentemente o único espaço viável. Um sistema de 20–30 kWp pode cobrir 40–60% das necessidades das partes comuns (elevadores, iluminação, bomba de calor central) e, se a potência sobrar, abastecer frações autónomas com coeficientes acordados. A assembleia de condóminos tem de aprovar por maioria qualificada a instalação e o regulamento de repartição.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para avançar com o seu projeto solar',
    },
    {
      type: 'paragraph',
      content:
        'Se está a planear uma reabilitação ou já é proprietário e quer avaliar a viabilidade técnica e económica de um sistema fotovoltaico, a equipa HABTA integra esta análise nos projetos que acompanha — consulte os nossos <a href="/servicos">serviços de reabilitação e sustentabilidade</a> ou veja exemplos concretos no <a href="/portfolio">portefólio</a>. Para aprofundar o tema da eficiência energética em contexto de investimento imobiliário, leia também o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a>. Subscreva a nossa newsletter para receber atualizações sobre apoios e legislação assim que forem publicadas.',
    },
  ],
  faq: [
    {
      q: 'Preciso de licença da câmara para instalar painéis solares em casa?',
      a: 'Na generalidade dos casos, não — o registo SERUP junto da DGEG é suficiente. Exceção: edifícios classificados, em zonas históricas ou em ARU, onde a câmara municipal pode exigir autorização prévia de alteração da cobertura antes do registo.',
    },
    {
      q: 'Quanto recebo por cada kWh que vendo à rede elétrica em Portugal?',
      a: 'A remuneração varia trimestralmente com o mercado MIBEL. Em 2025 oscilou entre 5,5 e 9,5 cêntimos por kWh — significativamente abaixo dos 22–28 cêntimos que se paga para comprar eletricidade da rede em tarifa doméstica.',
    },
    {
      q: 'Os rendimentos da venda de energia solar são tributados em IRS?',
      a: 'Sim. Os rendimentos de injeção na rede são tributáveis, geralmente como rendimentos da categoria B (atividade empresarial e profissional) ou categoria F, dependendo do enquadramento. Consulte um contabilista certificado para a situação concreta.',
    },
    {
      q: 'Vale a pena adicionar baterias ao sistema fotovoltaico residencial?',
      a: 'Depende do perfil de consumo. Baterias de 5–10 kWh aumentam a taxa de autoconsumo de 35–45% para 70–85%, mas acrescentam 3 000–6 000 € ao investimento. O retorno incremental justifica-se sobretudo quando a diferença entre tarifa de pico e de vazio é elevada.',
    },
    {
      q: 'Posso instalar painéis solares num apartamento em Lisboa?',
      a: 'Sim, se for proprietário da cobertura ou se o condomínio aprovar em assembleia. O regime de autoconsumo coletivo (DL n.º 15/2022) permite partilhar a produção entre frações autónomas de um mesmo edifício, incluindo repartição configurável por fração.',
    },
    {
      q: 'Qual é a vida útil dos painéis fotovoltaicos e como afeta o retorno?',
      a: 'Os painéis modernos garantem contratualmente 80–90% da potência nominal ao fim de 25 anos, com degradação anual de 0,4–0,7%. O inversor requer substituição ao fim de 10–15 anos (custo indicativo: 800–1 500 €), que deve ser incluído no cálculo de retorno.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. Os valores de custo, tarifas, apoios e prazos são indicativos e sujeitos a alteração por parte da ERSE, DGEG, Fundo Ambiental e demais entidades competentes. Verifique sempre a legislação em vigor e consulte profissionais qualificados antes de decisões concretas.',
};
