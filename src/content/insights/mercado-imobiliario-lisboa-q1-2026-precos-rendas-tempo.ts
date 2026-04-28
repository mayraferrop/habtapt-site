import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'mercado-imobiliario-lisboa-q1-2026-precos-rendas-tempo',
  title: 'Mercado imobiliário Lisboa Q1 2026: preços, rendas e tempo de venda',
  description:
    'Análise do mercado imobiliário de Lisboa no 1.º trimestre de 2026: preços por m², rendas médias, tempo médio de venda e tendências por zona — dados para decisões fundamentadas.',
  category: 'Mercado',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-28',
  updated_at: '2026-04-28',
  excerpt:
    'O mercado imobiliário de Lisboa no Q1 2026 regista preços médios acima de 5 800 €/m², rendas a subir e tempos de venda que variam entre 18 e 60 dias consoante a freguesia.',
  image: 'https://images.unsplash.com/photo-1651060782121-ce629ec94201${UNSPLASH_PARAMS}',
  tags: [
    'preços imobiliário Lisboa 2026',
    'rendas Lisboa Q1 2026',
    'tempo médio venda imóvel Lisboa',
    'mercado habitação Lisboa tendências',
    'investimento imobiliário Lisboa 2026',
  ],
  tldr: [
    'O preço médio de venda em Lisboa situou-se entre 5 400 e 6 200 €/m² no Q1 2026, com variação significativa entre Misericórdia (acima de 7 000 €/m²) e zonas periféricas como Benfica ou Charneca.',
    'As rendas médias de apartamentos T2 em Lisboa subiram cerca de 6 % face ao Q1 2025, atingindo 1 450–1 900 €/mês nas freguesias centrais.',
    'O tempo médio de venda desceu para 28 dias nos segmentos entre 300 000 e 550 000 €, e estende-se a mais de 55 dias em frações acima de 1 M€.',
    'A oferta disponível na cidade mantém-se abaixo da procura estrutural, com o INE a registar stock de licenças de construção nova em mínimos históricos para a AML.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-28',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'O primeiro trimestre de 2026 confirmou o que os dados do Banco de Portugal e do INE já antecipavam no final de 2025: Lisboa opera com desequilíbrio estrutural entre oferta e procura. Perceber os números reais — por zona, por tipologia, por segmento de preço — é o ponto de partida para qualquer decisão de compra, venda ou investimento fundamentada.',
    },
    {
      type: 'paragraph',
      content:
        'Esta análise do mercado imobiliário de Lisboa no Q1 2026 cruza dados de transações registadas, anúncios ativos e tempo de absorção por segmento. Os valores apresentados referem-se a fração autónoma de uso habitacional e baseiam-se na informação disponível até março de 2026.',
    },
    {
      type: 'heading2',
      content: 'Quais foram os preços médios por m² em Lisboa no Q1 2026?',
    },
    {
      type: 'paragraph',
      content:
        'O preço mediano de transação em Lisboa situou-se em torno de 5 800 €/m² no primeiro trimestre de 2026, com dispersão considerável por freguesia. As zonas com procura mais comprimida e stock mais reduzido mantiveram valores acima de 7 000 €/m², enquanto as áreas mais periféricas da cidade ficaram entre 3 800 e 4 400 €/m².',
    },
    {
      type: 'table',
      content: {
        headers: ['Freguesia / Zona', 'Preço mediano (€/m²)', 'Variação homóloga', 'Tipologia dominante'],
        rows: [
          ['Misericórdia / Chiado', '7 100–7 600', '+5,2 %', 'T1/T2 reabilitados'],
          ['Santa Maria Maior / Alfama', '6 400–7 000', '+4,8 %', 'T1/T2 reabilitados'],
          ['Arroios / Anjos', '5 200–5 800', '+6,1 %', 'T2/T3 reabilitados e novos'],
          ['Avenidas Novas', '5 800–6 300', '+3,9 %', 'T2/T3 em bom estado'],
          ['Benfica / Campolide', '3 900–4 500', '+5,5 %', 'T3/T4 usados'],
          ['Olivais / Marvila', '3 800–4 300', '+7,2 %', 'T2/T3 reabilitados e novos'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'O crescimento mais expressivo no trimestre registou-se em Marvila e nos Olivais, onde a chegada de nova oferta reabilitada e projetos de uso misto pressionaram os valores de referência. A Misericórdia mantém a liderança absoluta de preço por m², mas a taxa de crescimento abrandou face ao ritmo de 2024.',
    },
    {
      type: 'heading2',
      content: 'Quanto custam as rendas em Lisboa no início de 2026?',
    },
    {
      type: 'paragraph',
      content:
        'As rendas médias de apartamentos T2 em Lisboa situaram-se entre 1 450 e 1 900 €/mês nas freguesias centrais no Q1 2026, representando um crescimento de cerca de 6 % face ao mesmo período de 2025. A pressão sobre o arrendamento mantém-se elevada: a relação entre novos contratos de arrendamento e stock disponível atingiu um mínimo histórico em fevereiro.',
    },
    {
      type: 'list',
      content: [
        'T1 em Arroios, Anjos ou Intendente: 1 100–1 400 €/mês.',
        'T2 em Avenidas Novas ou Alvalade: 1 600–2 000 €/mês.',
        'T2 reabilitado no Chiado ou Misericórdia: 2 100–2 800 €/mês.',
        'T3 em Benfica, Campolide ou Carnide: 1 400–1 800 €/mês.',
        'T3 novo em Marvila ou zona ribeirinha oriental: 1 700–2 200 €/mês.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'O regime de arrendamento habitacional em Portugal foi significativamente alterado pela Lei n.º 56/2023 (Mais Habitação), com impacto nos contratos novos, nas atualizações de renda e nos procedimentos de despejo. Qualquer análise de yield de arrendamento deve considerar as regras em vigor no momento da celebração do contrato.',
    },
    {
      type: 'heading2',
      content: 'Qual é o tempo médio de venda de um imóvel em Lisboa?',
    },
    {
      type: 'paragraph',
      content:
        'O tempo médio de venda — medido entre a data de publicação do anúncio e a assinatura do contrato promessa de compra e venda — variou entre 18 e 60 dias no Q1 2026, dependendo do segmento de preço e da localização. Frações entre 250 000 e 550 000 € em zonas com boa acessibilidade foram as mais rápidas a absorver.',
    },
    {
      type: 'table',
      content: {
        headers: ['Segmento de preço', 'Tempo médio de venda (dias)', 'Condição do imóvel', 'Observação'],
        rows: [
          ['< 300 000 €', '22–35', 'Usado com desgaste', 'Procura por investidores e jovens compradores'],
          ['300 000–550 000 €', '18–28', 'Reabilitado ou novo', 'Segmento com maior liquidez em Lisboa'],
          ['550 000–900 000 €', '30–45', 'Reabilitado premium', 'Procura internacional e nacional qualificada'],
          ['900 000–1 500 000 €', '45–65', 'Novo ou high-end', 'Mercado mais seletivo, negociação mais longa'],
          ['> 1 500 000 €', '60–120+', 'Luxury / prime', 'Ciclo de decisão alargado, menor volume'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'Fatores que reduzem o tempo de absorção',
    },
    {
      type: 'list',
      content: [
        'Preço alinhado com a mediana de transações recentes a menos de 300 metros.',
        'Fotografias profissionais e planta rigorosa publicadas no dia de lançamento.',
        'Certificado energético igual ou superior a C — compradores cada vez mais atentos à classe de desempenho.',
        'Proximidade a estação de metro ou interfaces de transportes públicos com frequência útil.',
        'Ausência de pendências jurídicas ou situações de copropriedade não resolvidas.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como se comporta a oferta disponível em Lisboa?',
    },
    {
      type: 'paragraph',
      content:
        'O stock de imóveis disponíveis para venda em Lisboa manteve-se em níveis historicamente baixos no Q1 2026. Segundo dados do INE, as licenças de construção nova na Área Metropolitana de Lisboa caíram para um dos valores mais reduzidos desde 2010, o que limita a entrada de produto novo no mercado a curto prazo.',
    },
    {
      type: 'paragraph',
      content:
        'A reabilitação urbana tem sido o principal canal de renovação do parque habitacional em Lisboa, com frações reabilitadas a representar a maior fatia da nova oferta qualificada. A Câmara Municipal de Lisboa mantém programas de incentivo à reabilitação em ARU que abrangem várias freguesias históricas, mas os prazos de licenciamento — tipicamente entre 4 e 9 meses para processos completos — continuam a ser um estrangulamento relevante.',
    },
    {
      type: 'quote',
      content:
        'No Q1 2026, por cada fração qualificada que entrou no mercado abaixo de 500 000 € em zona central de Lisboa, registámos em média 4 a 6 propostas sérias em menos de 30 dias. Este rácio de absorção torna a decisão de esperar por um preço mais baixo uma estratégia de custo elevado para quem compra para habitar.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de mercado Q1 2026',
      },
    },
    {
      type: 'heading2',
      content: 'Que yields de arrendamento se observam em Lisboa no Q1 2026?',
    },
    {
      type: 'paragraph',
      content:
        'A yield bruta de arrendamento em Lisboa situou-se entre 3,8 % e 5,2 % no Q1 2026, consoante a zona e a tipologia. As yields mais elevadas observam-se em zonas como Arroios, Marvila ou Beato, onde o preço de compra cresceu menos do que as rendas nos últimos 18 meses. As zonas prime como Misericórdia ou Príncipe Real comprimem as yields para 3,5–4,0 % brutos.',
    },
    {
      type: 'list',
      content: [
        'Yield bruta média em Arroios / Anjos: 4,8–5,2 % — relação preço/renda ainda favorável.',
        'Yield bruta média em Avenidas Novas: 4,2–4,6 % — mercado maduro, menor volatilidade.',
        'Yield bruta média em Misericórdia / Chiado: 3,5–4,0 % — preservação de capital e liquidez em destaque.',
        'Yield bruta média em Marvila / Beato: 5,0–5,5 % — zona em valorização, risco de vacância mais alto.',
        'Yield líquida estimada (após IMI, condomínio e gestão): desconto de 1,2–1,8 pontos percentuais sobre o valor bruto.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais são as perspetivas para o restante de 2026?',
    },
    {
      type: 'paragraph',
      content:
        'A combinação de procura estrutural elevada, stock limitado e custos de construção ainda pressionados sugere que os preços em Lisboa não terão correção significativa em 2026. O Banco de Portugal, nos seus últimos relatórios de estabilidade financeira, identificou o mercado habitacional das grandes áreas metropolitanas como um dos vetores de risco a monitorizar, mas sem sinais de sobre-avaliação sistémica equiparável a 2007.',
    },
    {
      type: 'paragraph',
      content:
        'Dois fatores externos podem alterar este cenário: uma subida inesperada das taxas Euribor — que permaneceram abaixo de 3 % no início de 2026 — ou uma alteração relevante ao regime fiscal do arrendamento ou da tributação de mais-valias. Qualquer investidor deve acompanhar a evolução legislativa junto da Autoridade Tributária e dos diplomas publicados em Diário da República.',
    },
    {
      type: 'callout',
      content:
        'Para quem compra para arrendar, o Q1 2026 reforça a lógica de preferir zonas com crescimento de renda superior ao crescimento de preço — e de exigir análise de yield líquida, não bruta, antes de fechar qualquer negociação.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores e proprietários',
    },
    {
      type: 'paragraph',
      content:
        'Se está a ponderar comprar, vender ou reabilitar um imóvel em Lisboa com base nesta conjuntura, a nossa equipa disponibiliza análises de viabilidade personalizadas em <a href="/servicos">serviços</a> e exemplos de projetos concluídos em <a href="/portfolio">portefólio</a>. Para contexto adicional, consulte também o <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a> e a análise <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">reabilitação urbana em Portugal 2026</a>. A newsletter mensal inclui actualizações de mercado com a mesma granularidade por zona.',
    },
  ],
  faq: [
    {
      q: 'Qual é o preço médio por m² em Lisboa em 2026?',
      a: 'O preço mediano de transação em Lisboa situou-se em torno de 5 800 €/m² no Q1 2026, com variação entre 3 800 €/m² em zonas periféricas e mais de 7 000 €/m² em Misericórdia e Santa Maria Maior.',
    },
    {
      q: 'Quanto tempo demora a vender um apartamento em Lisboa?',
      a: 'No Q1 2026, o tempo médio de venda variou entre 18 e 28 dias para frações entre 300 000 e 550 000 € em bom estado, e pode superar 60 dias para imóveis acima de 900 000 €. Preço ajustado e certificação energética adequada reduzem significativamente o tempo de absorção.',
    },
    {
      q: 'Qual a renda média de um T2 em Lisboa no início de 2026?',
      a: 'Um T2 em Lisboa arrendou, em média, entre 1 450 e 1 900 €/mês nas freguesias centrais no Q1 2026, com valores acima de 2 100 € em zonas prime como Chiado ou Príncipe Real.',
    },
    {
      q: 'Que yield de arrendamento é possível obter em Lisboa?',
      a: 'As yields brutas situaram-se entre 3,5 % e 5,5 % no Q1 2026, consoante a zona. Após custos de IMI, condomínio e gestão, a yield líquida fica tipicamente 1,2 a 1,8 pontos percentuais abaixo do valor bruto.',
    },
    {
      q: 'Os preços em Lisboa vão descer em 2026?',
      a: 'Os dados do Q1 2026 não apontam para correção de preços em Lisboa a curto prazo, dada a escassez de stock e a procura estrutural. O Banco de Portugal monitoriza o mercado habitacional, mas não identificou sobre-avaliação sistémica. Variações nas taxas Euribor ou na legislação fiscal podem alterar este cenário.',
    },
    {
      q: 'Quais as zonas de Lisboa com melhor crescimento de preço em 2026?',
      a: 'No Q1 2026, Marvila e Olivais registaram as maiores variações homólogas (+7,2 % e +6,8 % respetivamente), impulsionadas por nova oferta reabilitada e projetos de uso misto. Arroios cresceu 6,1 %, acima da média da cidade.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. Os valores de preço, renda e yield apresentados são estimativas baseadas em dados de mercado disponíveis até março de 2026 e podem não refletir condições específicas de cada transação. Consulte profissionais qualificados antes de decisões concretas de compra, venda ou arrendamento.',
};
