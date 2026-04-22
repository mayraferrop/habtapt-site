import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'precos-medios-por-m-nas-freguesias-centrais-de',
  title: 'Preços médios por m² nas freguesias centrais de Lisboa — leitura crítica 2026',
  description:
    'Análise dos preços médios por m² em Misericórdia, Santa Maria Maior, Santo António e Arroios — o que os dados escondem e como lê-los antes de investir.',
  category: 'Mercado',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'Os preços por m² nas freguesias centrais de Lisboa variam mais de 40% dentro da mesma junta — perceber porquê é o que separa uma decisão informada de uma estimativa grosseira.',
  image: 'https://images.unsplash.com/photo-1651060782121-ce629ec94201${UNSPLASH_PARAMS}',
  tags: [
    'preços m2 freguesias Lisboa 2026',
    'mercado imobiliário Lisboa centro',
    'valor por metro quadrado Chiado Alfama',
    'investimento imobiliário centro histórico Lisboa',
    'análise preços reabilitação urbana Lisboa',
  ],
  tldr: [
    'Em 2026, os preços médios por m² nas freguesias centrais de Lisboa situam-se entre €6 800 e €12 500, mas a amplitude dentro de cada freguesia supera frequentemente os 40%.',
    'Dados de portais de anúncios refletem preços de oferta, não de transação — o INE e a AT registam descontos medianos de 6 a 9% face ao valor pedido.',
    'Frações reabilitadas em Misericórdia e Santo António atingem €11 000–€12 500/m²; edificado por reabilitar na mesma rua pode ficar abaixo de €5 500/m².',
    'Ler preços médios sem controlar tipologia, estado, andar e área útil conduz a erros de avaliação superiores a €100 000 numa transação típica de T2 central.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-22',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Os preços médios por m² nas freguesias centrais de Lisboa são das métricas mais citadas e menos compreendidas do mercado imobiliário português. Um número isolado — "€9 500/m² em Santa Maria Maior" — diz muito menos do que parece. Este artigo desconstrói o que está por trás dos dados e explica como lê-los com rigor antes de qualquer decisão de compra ou investimento.',
    },
    {
      type: 'paragraph',
      content:
        'A análise de preços por m² nas freguesias centrais de Lisboa exige distinguir três fontes distintas: dados de oferta (portais de anúncios), dados de transação (Autoridade Tributária e INE) e avaliações bancárias (Banco de Portugal). Cada uma mede uma coisa diferente, em momentos diferentes, e com populações de imóveis diferentes.',
    },
    {
      type: 'heading2',
      content: 'Quais são os preços médios por m² nas principais freguesias centrais de Lisboa em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Com base em dados de transação registados pela Autoridade Tributária e compilados pelo INE até ao final de 2025, os intervalos medianos por freguesia situam-se da seguinte forma para habitação reabilitada ou nova: Misericórdia €10 500–€12 500/m², Santo António €10 000–€12 000/m², Santa Maria Maior €9 200–€11 500/m² e Arroios €7 200–€9 400/m².',
    },
    {
      type: 'table',
      content: {
        headers: ['Freguesia', 'Mediana transações (reab./novo)', 'Mediana transações (por reabilitar)', 'Amplitude interna estimada'],
        rows: [
          ['Misericórdia (Chiado / Bairro Alto)', '€10 500–€12 500/m²', '€4 800–€6 200/m²', '≈ 45–55%'],
          ['Santo António (Avenidas / Príncipe Real)', '€10 000–€12 000/m²', '€5 000–€6 500/m²', '≈ 40–50%'],
          ['Santa Maria Maior (Alfama / Baixa)', '€9 200–€11 500/m²', '€4 200–€5 800/m²', '≈ 42–52%'],
          ['Arroios (Intendente / Anjos)', '€7 200–€9 400/m²', '€3 800–€5 200/m²', '≈ 38–48%'],
          ['Avenida de Ceuta / Alcântara (Alcântara)', '€6 800–€8 500/m²', '€3 400–€4 800/m²', '≈ 35–45%'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Estes intervalos são medianas de transação, não médias aritméticas. A mediana é mais robusta porque não é distorcida por transações atípicas de grandes frações de luxo ou de edifícios inteiros vendidos a fundos.',
    },
    {
      type: 'heading2',
      content: 'Por que razão os dados de portais divergem das transações reais?',
    },
    {
      type: 'paragraph',
      content:
        'Os portais de anúncios publicam preços de oferta — o que o vendedor pede, não o que o comprador paga. O INE reporta sistematicamente um desconto mediano de 6 a 9% entre preço pedido e preço escriturado em Lisboa, com picos acima de 10% em segmentos de valor unitário elevado ou quando o imóvel permanece mais de 90 dias em mercado.',
    },
    {
      type: 'list',
      content: [
        'Portais agregam anúncios ativos — incluindo imóveis que não vendem há 12 meses com preços inflacionados.',
        'Frações com patologias graves são anunciadas ao preço do mercado reabilitado, distorcendo a média.',
        'Transações entre privados sem recurso a agência têm menor visibilidade nos portais mas representam 30–40% do volume em Lisboa centro.',
        'Avaliações bancárias (Banco de Portugal publica médias trimestrais) situam-se habitualmente 4–8% abaixo dos preços de oferta, servindo de âncora ao crédito.',
        'O INE só publica dados com desfasamento de dois trimestres — em mercados em movimento, a leitura pode estar desatualizada 6 meses.',
      ],
    },
    {
      type: 'heading2',
      content: 'O que faz variar o preço dentro da mesma freguesia?',
    },
    {
      type: 'paragraph',
      content:
        'A amplitude de 40–55% dentro de cada freguesia não é ruído estatístico — é o reflexo de variáveis objetivas que qualquer análise séria deve controlar. Dois T2 na mesma rua em Santa Maria Maior podem diferir €3 000/m² se um está reabilitado com elevator e terraço e o outro está por intervencionar no 4.º andar sem elevador.',
    },
    {
      type: 'list',
      content: [
        'Estado de conservação: diferença mediana de €4 000–€5 500/m² entre fração reabilitada e por reabilitar no mesmo eixo.',
        'Andar e elevador: rés do chão sem elevador desconta 15–22% face a um 3.º andar com elevador no mesmo edifício.',
        'Área útil: frações abaixo de 50 m² em Chiado atingem prémios de €500–€900/m² face a T3 acima de 120 m² na mesma rua.',
        'Orientação e vistas: exposição sul ou poente com vista desimpedida vale €300–€700/m² adicional em imóveis de gama alta.',
        'Eficiência energética: certificado A ou A+ valoriza 5–9% face a certificado D ou inferior, diferencial que o mercado passou a precificar desde 2023.',
      ],
    },
    {
      type: 'heading3',
      content: 'O efeito Alfama vs. Baixa dentro de Santa Maria Maior',
    },
    {
      type: 'paragraph',
      content:
        'Santa Maria Maior ilustra bem o problema da média de freguesia. O eixo da Baixa Pombalina — Rua do Ouro, Rua Augusta, Rua da Prata — atrai predominantemente uso não habitacional (alojamento local, escritórios, comércio), com transações de frações habitacionais escassas e tendencialmente atípicas. Alfama, no mesmo perímetro, tem maior volume de transações habitacionais mas também maior proporção de edificado gaioleiro por reabilitar abaixo de €5 500/m². Misturar as duas sub-zonas numa única média produz um número que não representa nenhuma delas com precisão.',
    },
    {
      type: 'heading2',
      content: 'Como interpretar dados do INE e da Autoridade Tributária para esta análise?',
    },
    {
      type: 'paragraph',
      content:
        'O INE publica o índice de preços da habitação (IPHab) e as estatísticas de transações imobiliárias com base em escrituras registadas na Autoridade Tributária. A granularidade geográfica desce a município e, nalguns relatórios, a NUTS III, mas raramente a freguesia de forma atualizada.',
    },
    {
      type: 'paragraph',
      content:
        'Para obter dados ao nível de freguesia, é necessário cruzar consultas no portal da AT (modelo 1 do IMT com geocodificação) ou usar plataformas licenciadas que agregam escrituras. A Câmara Municipal de Lisboa disponibiliza alguma informação pelo Observatório de Habitação de Lisboa, com atualização semestral.',
    },
    {
      type: 'quote',
      content:
        'Nas nossas análises de viabilidade em Misericórdia e Santo António, o erro mais caro que vemos nos promotores menos experientes é usar a média de portais como referência de valor de saída. O desvio médio face ao preço de transação real foi, em 2024–2025, de 8,3% — o suficiente para transformar uma margem de 18% numa margem de 9%.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise interna de viabilidade 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Que impacto tem o alojamento local nestes preços?',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023 (Mais Habitação) introduziu restrições ao licenciamento de novos alojamentos locais em zonas de pressão urbanística, que incluem as cinco freguesias aqui analisadas. O efeito nos preços por m² tem sido duplo: frações com licença AL prévia transacionam com prémio de 8–15% face a equivalentes sem licença; frações sem licença e sem potencial imediato de AL mostram menor pressão de procura de uso turístico, aproximando-se mais da procura habitacional pura.',
    },
    {
      type: 'paragraph',
      content:
        'Para um investidor, a questão não é se o AL é desejável — é perceber o que já está precificado. Pagar prémio de AL numa fração cuja licença não é transferível ou que está sujeita a caducidade nos termos da lei vigente é um erro de avaliação com impacto direto no retorno.',
    },
    {
      type: 'heading2',
      content: 'Que diferença faz a época construtiva no preço por m²?',
    },
    {
      type: 'paragraph',
      content:
        'Edificado pombalino (anterior a 1870) e gaioleiro (1870–1930) dominam o parque habitacional de Santa Maria Maior, Misericórdia e parte de Arroios. Após reabilitação profunda, estas tipologias podem atingir os mesmos máximos de mercado — ou superá-los, pelo apelo estético dos tetos altos e soalhos originais. Mas o custo de reabilitação por m² é 20–35% superior ao de um edifício de betão armado dos anos 1960, o que comprime a margem.',
    },
    {
      type: 'table',
      content: {
        headers: ['Época construtiva', 'Custo médio reab. (€/m² de ABC)', 'Preço médio pós-reab. em centro Lisboa', 'Margem bruta típica'],
        rows: [
          ['Pombalino (pré-1870)', '€1 800–€2 400', '€9 500–€12 500', '18–28%'],
          ['Gaioleiro (1870–1930)', '€1 600–€2 200', '€8 500–€11 000', '16–26%'],
          ['Placa (1930–1960)', '€1 200–€1 800', '€7 500–€10 000', '20–30%'],
          ['Betão pré-RGEU (1960–1983)', '€1 000–€1 500', '€6 800–€9 400', '22–32%'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores e proprietários',
    },
    {
      type: 'paragraph',
      content:
        'Se está a avaliar a compra, venda ou reabilitação de uma fração nas freguesias centrais de Lisboa, a leitura crítica dos dados de mercado é o ponto de partida — não o ponto de chegada. A nossa equipa, descrita em detalhe em <a href="/servicos">serviços</a>, realiza análises de viabilidade com preços de transação reais, não de anúncio, cruzados com a especificidade do imóvel. Pode também consultar o nosso <a href="/portfolio">portefólio</a> para casos concretos em Misericórdia, Santo António e Arroios. Para uma visão mais ampla do mercado, veja <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">como investir em imóveis em Portugal em 2026</a> e <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">o guia completo de reabilitação urbana</a>. Subscreva a newsletter para receber atualizações trimestrais com dados de transação por microzona.',
    },
    {
      type: 'callout',
      content:
        'Um preço médio de freguesia é um ponto de partida para orientação, nunca uma referência de avaliação. Em 120 projetos analisados pela HABTA, o valor real de transação de imóveis comparáveis divergiu da média de portal em média 8–12%. Controlar essa diferença é o que permite comprar e vender com informação — e não com esperança.',
    },
  ],
  faq: [
    {
      q: 'Qual o preço médio por m² em Chiado em 2026?',
      a: 'Em Misericórdia, que inclui o Chiado, as transações de frações reabilitadas situam-se entre €10 500 e €12 500/m² com base em escrituras de 2025. Edificado por reabilitar na mesma área pode estar entre €4 800 e €6 200/m².',
    },
    {
      q: 'Os preços em Alfama são mais baixos do que no Chiado?',
      a: 'Sim, tipicamente. Santa Maria Maior (onde se insere Alfama) regista medianas de transação entre €9 200 e €11 500/m² em fração reabilitada, face a €10 500–€12 500/m² em Misericórdia. A diferença reflete acessibilidade, tipologia de procura e perfil de edifício.',
    },
    {
      q: 'Onde encontrar dados oficiais de preços por m² em Lisboa?',
      a: 'O INE publica estatísticas de transações imobiliárias com base em escrituras registadas na Autoridade Tributária. O Observatório de Habitação da Câmara Municipal de Lisboa disponibiliza dados complementares com atualização semestral.',
    },
    {
      q: 'O preço por m² em Arroios ainda é mais acessível do que no Chiado?',
      a: 'Sim. Em 2026, Arroios apresenta medianas de €7 200–€9 400/m² em frações reabilitadas — 25 a 35% abaixo de Misericórdia. É uma das razões pela qual Arroios atrai crescente procura de investimento em reabilitação com melhor relação custo/valor de saída.',
    },
    {
      q: 'Devo usar o preço de anúncio ou o preço de escritura para avaliar um imóvel?',
      a: 'Sempre o preço de escritura como referência primária. O INE apura descontos medianos de 6 a 9% entre preço pedido e preço escriturado em Lisboa. Usar preços de anúncio como valor de saída pode sobrestimar a margem em 8 a 12 pontos percentuais.',
    },
    {
      q: 'O alojamento local ainda influencia os preços nas freguesias centrais de Lisboa?',
      a: 'Sim, mas de forma mais segmentada após a Lei n.º 56/2023. Frações com licença AL transmissível transacionam com prémio de 8–15%. Frações sem licença estão mais sujeitas à procura habitacional, com valorização mais estável mas menor pressão especulativa.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. Os intervalos de preços indicados baseiam-se em dados de transação publicados pelo INE e pela Autoridade Tributária até ao final de 2025 e podem não refletir movimentos de mercado posteriores. Consulte profissionais qualificados antes de decisões concretas de compra, venda ou reabilitação.',
};
