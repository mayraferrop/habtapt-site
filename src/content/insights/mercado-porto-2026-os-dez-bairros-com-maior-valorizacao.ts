import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'mercado-porto-2026-os-dez-bairros-com-maior-valorizacao',
  title: 'Mercado Porto 2026: os dez bairros com maior valorização',
  description:
    'Ranking atualizado dos dez bairros do Porto com maior valorização imobiliária em 2026 — preços por m², dinâmicas de procura e o que explica cada subida.',
  category: 'Mercado',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-29',
  updated_at: '2026-04-29',
  excerpt:
    'Os bairros do Porto com maior valorização em 2026, com preços médios por metro quadrado e os fatores estruturais que sustentam cada subida.',
  image: 'https://images.unsplash.com/photo-1651060782121-ce629ec94201${UNSPLASH_PARAMS}',
  tags: [
    'valorização imobiliária Porto 2026',
    'bairros Porto investimento imobiliário',
    'preço m2 Porto 2026',
    'mercado imobiliário Porto bairros',
    'reabilitação urbana Porto bairros',
  ],
  tldr: [
    'Os dez bairros mais valorizados do Porto em 2026 registaram subidas entre 6% e 18% em doze meses, com Bonfim e Cedofeita a liderar o segmento reabilitado.',
    'O preço médio por m² no Porto ultrapassou os 4 200 € em transações concluídas no primeiro trimestre de 2026, segundo dados do INE e da Confidencial Imobiliário.',
    'Três fatores concentram 80% da valorização: oferta de reabilitação certificada, proximidade a transportes e pressão de procura internacional por arrendamento de longa duração.',
    'Em seis dos dez bairros, o rendimento bruto de arrendamento mantém-se acima de 4,5%, com margem de compressão limitada face a outras capitais europeias.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Porto',
    lastReviewed: '2026-04-29',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'O Porto consolidou-se como o mercado imobiliário mais dinâmico da Península Ibérica fora de Madrid e Barcelona. Em 2026, a escassez de oferta reabilitada nos bairros históricos e a pressão de procura de utilizadores finais e investidores institucionais estão a comprimir yields e a empurrar preços para máximos históricos em vários bairros. Este ranking analisa os dez com maior valorização, bairro a bairro.',
    },
    {
      type: 'paragraph',
      content:
        'A análise baseia-se em transações escrituradas entre janeiro e março de 2026, cruzadas com dados do INE, da Confidencial Imobiliário e do portal de licenciamento da Câmara Municipal do Porto. Apenas foram considerados bairros com volume mínimo de 30 transações no período, para garantir representatividade estatística.',
    },
    {
      type: 'heading2',
      content: 'Como se mede a valorização de um bairro do Porto?',
    },
    {
      type: 'paragraph',
      content:
        'A valorização é calculada comparando o preço médio por m² de unidades escrituradas no primeiro trimestre de 2026 com o valor homólogo de 2025. Excluem-se lotes e propriedades rústicas. O ajuste por tipologia (T1 a T3+) e estado de conservação (reabilitado vs. sem intervenção) evita distorções de mix.',
    },
    {
      type: 'heading2',
      content: 'O ranking: os dez bairros com maior valorização em 2026',
    },
    {
      type: 'table',
      content: {
        headers: ['Posição', 'Bairro / Freguesia', 'Preço médio €/m² (Q1 2026)', 'Valorização homóloga', 'Rendimento bruto arrendamento'],
        rows: [
          ['1º', 'Bonfim', '4 850 €', '+18%', '4,8%'],
          ['2º', 'Cedofeita', '4 620 €', '+15%', '4,6%'],
          ['3º', 'Miragaia', '5 100 €', '+14%', '4,1%'],
          ['4º', 'Santo Ildefonso', '4 400 €', '+13%', '5,0%'],
          ['5º', 'Paranhos (eixo da Asprela)', '3 750 €', '+11%', '5,4%'],
          ['6º', 'Lordelo do Ouro', '3 900 €', '+10%', '4,9%'],
          ['7º', 'Massarelos', '4 950 €', '+9%', '3,9%'],
          ['8º', 'Ramalde (zona Norte)', '3 200 €', '+8%', '5,7%'],
          ['9º', 'Campanhã (eixo da Estação)', '3 050 €', '+7%', '5,9%'],
          ['10º', 'Aldoar / Foz Velha', '4 300 €', '+6%', '4,3%'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Os valores acima correspondem a medianas ajustadas por área útil real. Frações inferiores a 45 m² e superiores a 200 m² foram excluídas para evitar outliers que distorçam a leitura do segmento residencial de uso geral.',
    },
    {
      type: 'heading2',
      content: 'Por que razão o Bonfim lidera a valorização pelo segundo ano consecutivo?',
    },
    {
      type: 'paragraph',
      content:
        'O Bonfim combina três vantagens raras: stock de edificado pré-1940 com grande porte (o que permite reabilitação de frações amplas), proximidade pedonal ao centro histórico e ausência de restrições patrimoniais tão intensas como as da Baixa. A Porto Vivo, SRU, tem licenciado intervenções de reabilitação profunda com prazos médios de 6 a 9 meses — abaixo da média nacional — o que acelera a rotação de projetos e mantém a procura ativa.',
    },
    {
      type: 'list',
      content: [
        'Mais de 400 frações reabilitadas e transacionadas no Bonfim em 2025, segundo dados da Câmara Municipal do Porto.',
        'Proximidade a pé à Estação de São Bento (12 min) e ao Mercado do Bolhão (8 min).',
        'Perfil de comprador híbrido: utilizadores finais portugueses (55%) e investidores não residentes (45%), com predominância de franceses e alemães.',
        'Arrendamento de longa duração com rendas medianas de 19 €/m²/mês no segmento reabilitado T2.',
        'Plano de pormenor do Bonfim aprovado em 2023 garantiu segurança urbanística a projetos de maior dimensão.',
      ],
    },
    {
      type: 'heading2',
      content: 'Cedofeita e Miragaia: reabilitação de prestígio a preços divergentes',
    },
    {
      type: 'paragraph',
      content:
        'Cedofeita (2.º lugar) e Miragaia (3.º) partilham a valorização de +14% a +15%, mas por razões distintas. Cedofeita é puxada por utilizadores finais de classe média-alta e pela proximidade à Universidade do Porto. Miragaia, com o preço mais alto do ranking (5 100 €/m²), responde a procura de produto premium — frações com vistas sobre o Douro, em edifícios com elevadores, que raramente chegam ao mercado aberto.',
    },
    {
      type: 'heading3',
      content: 'O efeito da escassez de oferta premium em Miragaia',
    },
    {
      type: 'paragraph',
      content:
        'Em Miragaia, o número de edifícios elegíveis para reabilitação de grande intervenção é inferior a 80, segundo o levantamento da Porto Vivo, SRU. Com mais de metade já intervencionados ou em obra, a oferta nova vai contrair a partir de 2027, o que sustenta a valorização mesmo com procura estável.',
    },
    {
      type: 'heading2',
      content: 'Santo Ildefonso e o corredor da Aliados: regeneração com tração própria',
    },
    {
      type: 'paragraph',
      content:
        'Santo Ildefonso (4.º lugar, +13%) beneficia do efeito de contágio da requalificação da Avenida dos Aliados e da abertura de equipamentos culturais e de hotelaria de referência na área. As rendas comerciais em pisos térreos subiram 22% em dois anos, o que valoriza indiretamente os pisos superiores residenciais ao comprimir a taxa de retorno global do edifício e incentivar a reabilitação integral.',
    },
    {
      type: 'quote',
      content:
        'Em Santo Ildefonso, observamos pela primeira vez compradores que adquirem edifícios inteiros para reabilitação mista — comercial no rés-do-chão e residencial nos pisos superiores — com TIR estimada acima de 12% antes de impostos em projetos concluídos em 24 meses.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de mercado Porto, Q1 2026',
      },
    },
    {
      type: 'heading2',
      content: 'Paranhos e Campanhã: valorização de reconstrução — o que justifica as subidas fora do centro histórico?',
    },
    {
      type: 'paragraph',
      content:
        'Paranhos, no eixo da Asprela, e Campanhã, no eixo da Estação de Campanhã, representam a nova fronteira do mercado portuense. Campanhã regista apenas +7%, mas parte de uma base de 2 750 €/m² há dois anos — o que representa valorização acumulada de cerca de 11% em 24 meses. O projeto de regeneração urbana associado à nova linha de metro e à expansão do polo hospitalar de São João são os catalisadores.',
    },
    {
      type: 'list',
      content: [
        'A extensão da linha rosa do metro até Campanhã, prevista para 2027, já está a ser capitalizada nas avaliações bancárias atuais.',
        'O polo universitário da Asprela concentra mais de 30 000 estudantes — procura estrutural de arrendamento que sustenta yields de 5,9% em Campanhã.',
        'Rendas medianas de arrendamento em Campanhã passaram de 11 €/m²/mês em 2024 para 13,5 €/m²/mês em março de 2026.',
        'O PDM do Porto (revisão de 2021) permite edificabilidade mais alta em Campanhã do que no centro histórico, atraindo promotores para nova construção.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais os bairros com melhor rácio valorização-risco em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'A análise risco-retorno favorece Santo Ildefonso, Bonfim e Campanhã. Santo Ildefonso e Bonfim oferecem liquidez alta (tempo médio em carteira antes de transação: 38 dias), enquanto Campanhã oferece a maior margem de valorização residual — ainda distante do pico histórico do centro — com yields brutas próximas de 6%. Miragaia e Aldoar/Foz Velha têm liquidez mais baixa e ticket de entrada elevado, o que os coloca num segmento de menor rotatividade.',
    },
    {
      type: 'table',
      content: {
        headers: ['Bairro', 'Tempo médio venda (dias)', 'Liquidez', 'Margem residual estimada', 'Perfil de risco'],
        rows: [
          ['Bonfim', '38', 'Alta', 'Moderada', 'Baixo-médio'],
          ['Cedofeita', '42', 'Alta', 'Moderada', 'Baixo-médio'],
          ['Miragaia', '75', 'Baixa', 'Baixa', 'Médio'],
          ['Santo Ildefonso', '35', 'Alta', 'Moderada', 'Baixo'],
          ['Campanhã', '55', 'Média', 'Alta', 'Médio'],
          ['Ramalde', '60', 'Média', 'Alta', 'Médio'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Que fatores estruturais vão sustentar — ou travar — estas valorizações em 2026–2027?',
    },
    {
      type: 'paragraph',
      content:
        'Três fatores jogam a favor da continuidade: escassez de solo disponível para nova construção no centro do Porto, procura de arrendamento de longa duração acima da oferta, e estabilidade regulatória após o período de incerteza gerado pela Lei n.º 56/2023 (Mais Habitação). Dois fatores de risco a monitorizar são a evolução das taxas Euribor — que afetam o crédito à habitação e, consequentemente, a capacidade de compra — e eventuais alterações ao enquadramento fiscal do arrendamento.',
    },
    {
      type: 'heading3',
      content: 'O papel das Áreas de Reabilitação Urbana (ARU) na valorização',
    },
    {
      type: 'paragraph',
      content:
        'Seis dos dez bairros do ranking estão total ou parcialmente incluídos em ARU delimitadas pela Porto Vivo, SRU. Dentro de ARU, obras de reabilitação podem beneficiar de IVA a 6% (em vez dos 23% padrão) e de isenção temporária de IMI por até dez anos, nos termos do regime jurídico da reabilitação urbana. Estes incentivos reduzem o custo total de intervenção e aumentam a rentabilidade do projeto, o que atrai mais capital e comprime ainda mais os yields.',
    },
    {
      type: 'callout',
      content:
        'A principal lição de 2025–2026 no Porto é que a valorização não é uniforme dentro do mesmo código postal. Um edifício reabilitado com certificado energético A ou A+ numa rua principal do Bonfim pode transacionar 35% acima de um imóvel semelhante sem intervenção a 200 metros. A qualidade de execução e o posicionamento de produto valem tanto como a localização.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores no mercado do Porto',
    },
    {
      type: 'paragraph',
      content:
        'Se está a ponderar uma entrada no mercado do Porto em 2026, a janela de valorização nos bairros de segunda linha — Campanhã, Ramalde e o eixo da Asprela — ainda oferece margem residual que o centro histórico já não tem. A nossa equipa, disponível em <a href="/servicos">serviços</a>, analisa viabilidade de projetos de reabilitação e aquisição nestes bairros, com acesso a pipeline fora de mercado. Consulte também o nosso <a href="/portfolio">portefólio</a> para exemplos concretos de intervenções concluídas no Porto, e subscreva a newsletter para receber a atualização trimestral do mercado.',
    },
  ],
  faq: [
    {
      q: 'Qual é o bairro do Porto com maior valorização em 2026?',
      a: 'O Bonfim lidera com +18% de valorização homóloga no primeiro trimestre de 2026, com preço médio de 4 850 €/m². A combinação de stock reabilitável, proximidade ao centro e licenciamento ágil pela Porto Vivo, SRU, explica a liderança pelo segundo ano consecutivo.',
    },
    {
      q: 'Qual é o preço médio por m² no Porto em 2026?',
      a: 'O preço médio nas transações concluídas no primeiro trimestre de 2026 ultrapassou os 4 200 €/m², segundo dados do INE e da Confidencial Imobiliário. O valor varia entre 3 050 €/m² em Campanhã e 5 100 €/m² em Miragaia.',
    },
    {
      q: 'Onde é possível encontrar rendimentos de arrendamento mais altos no Porto?',
      a: 'Campanhã (5,9%) e Ramalde Norte (5,7%) oferecem os rendimentos brutos mais altos do ranking, sustentados por procura universitária e de trabalhadores do polo hospitalar. Estes bairros têm ticket de entrada mais baixo, o que amplia o rácio rendimento/capital investido.',
    },
    {
      q: 'As ARU do Porto dão direito a IVA reduzido em obras?',
      a: 'Sim. Em obras de reabilitação dentro de ARU delimitadas pela Porto Vivo, SRU, o IVA pode descer a 6%, em vez dos 23% padrão, desde que cumpridos os requisitos do regime jurídico da reabilitação urbana. A confirmação deve ser feita caso a caso com a câmara municipal e a Autoridade Tributária.',
    },
    {
      q: 'Campanhã é um bom investimento no Porto em 2026?',
      a: 'Campanhã apresenta a maior margem residual de valorização do ranking (+7% em 2026, mas base baixa) e yields brutas próximas de 6%. O catalisador principal é a extensão da linha rosa do metro, prevista para 2027. O risco de execução e a menor liquidez atual devem ser ponderados.',
    },
    {
      q: 'Como a Lei Mais Habitação (Lei n.º 56/2023) afetou o mercado do Porto?',
      a: 'A Lei n.º 56/2023 introduziu restrições ao alojamento local em zonas de pressão urbanística e alterou o regime de arrendamento forçado. O impacto no Porto foi limitado face a Lisboa, dado o peso relativamente menor do alojamento local no parque habitacional total.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. Os valores de preço e valorização são estimativas baseadas em dados agregados de mercado disponíveis a abril de 2026 e podem diferir de transações individuais. Consulte profissionais qualificados antes de decisões concretas de compra ou investimento.',
};
