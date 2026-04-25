import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'compradores-estrangeiros-perfis-e-impacto-nos-precos',
  title: 'Compradores estrangeiros em Portugal: perfis e impacto nos preços 2026',
  description:
    'Quem são os compradores estrangeiros em Portugal, de onde vêm e como influenciam os preços em Lisboa, Porto e Cascais — dados e análise para 2026.',
  category: 'Mercado',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-25',
  updated_at: '2026-04-25',
  excerpt:
    'Os compradores estrangeiros representam uma fatia crescente das transações imobiliárias em Portugal e exercem uma pressão ascendente nos preços de segmentos específicos de Lisboa, Porto e Cascais.',
  image: 'https://images.unsplash.com/photo-1651060782121-ce629ec94201${UNSPLASH_PARAMS}',
  tags: [
    'compradores estrangeiros Portugal imobiliário',
    'impacto preços imóveis Lisboa 2026',
    'investimento estrangeiro imobiliário Porto',
    'mercado imobiliário Portugal não residentes',
    'golden visa alternativas Portugal 2026',
  ],
  tldr: [
    'Os não residentes representaram cerca de 10–12% das transações imobiliárias em Portugal em 2024–2025, concentradas em Lisboa, Cascais e no Algarve.',
    'Os perfis dominantes são franceses, britânicos, americanos e brasileiros, com ticket médio 35–55% acima do comprador nacional no mesmo segmento.',
    'A extinção do Golden Visa residencial (Lei n.º 56/2023) deslocou procura estrangeira para imóveis de valor unitário superior a €500 000 em centros urbanos.',
    'Bairros como Príncipe Real, Chiado e Boavista registam prémios de preço de 20–40% face a zonas comparáveis com menor exposição a compradores internacionais.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-25',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'O comprador estrangeiro não é um fenómeno homogéneo. Há pelo menos cinco perfis distintos a operar simultaneamente no mercado português — cada um com motivações, orçamentos e preferências geográficas diferentes. Compreender quem compra, e porquê, é o primeiro passo para interpretar o que está a acontecer aos preços.',
    },
    {
      type: 'paragraph',
      content:
        'O impacto dos compradores estrangeiros nos preços imobiliários em Portugal é um dos temas mais debatidos — e mais mal compreendidos — do mercado nacional. A realidade é segmentada: em certas ruas do Chiado ou de Cascais, a procura internacional é determinante para o patamar de preços; noutras zonas da Grande Lisboa ou do Porto, o comprador estrangeiro tem presença residual.',
    },
    {
      type: 'heading2',
      content: 'Qual é o peso real dos compradores estrangeiros no mercado português?',
    },
    {
      type: 'paragraph',
      content:
        'Segundo dados do INE e da Autoridade Tributária, os não residentes e estrangeiros representaram entre 10% e 12% das transações imobiliárias em Portugal continental em 2024. Em valor transacionado, o peso sobe para 16–20% porque o ticket médio deste segmento é consistentemente superior ao do comprador nacional.',
    },
    {
      type: 'paragraph',
      content:
        'Em concelhos específicos, os rácios são muito mais expressivos. Em Cascais e Sintra, estima-se que 25–30% das transações de imóveis acima de €600 000 envolvam compradores com morada fiscal no estrangeiro. No centro histórico de Lisboa — Misericórdia, Santa Maria Maior — a proporção pode aproximar-se de 35% nas tipologias T2 e T3 reabilitados.',
    },
    {
      type: 'heading2',
      content: 'Quais são os perfis dominantes de compradores estrangeiros em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'A procura internacional não é monolítica. A análise da nossa equipa, sustentada em 120 análises de viabilidade que envolveram comparáveis de mercado com compradores não residentes, identifica cinco perfis com comportamentos de compra claramente distintos.',
    },
    {
      type: 'table',
      content: {
        headers: ['Perfil', 'Origem principal', 'Ticket médio', 'Motivação dominante', 'Zonas preferidas'],
        rows: [
          ['Residente ativo', 'França, Reino Unido, Alemanha', '€350 000–€600 000', 'Residência principal / qualidade de vida', 'Cascais, Estoril, Parede, Carcavelos'],
          ['Investidor de rendimento', 'EUA, Canadá, Brasil', '€400 000–€900 000', 'Retorno por arrendamento de médio-longo prazo', 'Chiado, Bonfim, Cedofeita, Baixa do Porto'],
          ['Comprador de segunda habitação', 'Reino Unido, Países Baixos, Suíça', '€300 000–€550 000', 'Uso sazonal / férias prolongadas', 'Algarve, Cascais, Sintra'],
          ['Investidor patrimonial', 'Médio Oriente, Ásia, América Latina', '€800 000–€3 000 000', 'Preservação de capital / diversificação', 'Príncipe Real, Lapa, Foz do Douro'],
          ['Nómada digital / early retiree', 'EUA, Reino Unido, Norte da Europa', '€250 000–€450 000', 'Residência fiscal favorável, custo de vida', 'Mouraria, Bonfim, Baixa, Alfama'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'O perfil americano: o mais dinâmico desde 2023',
    },
    {
      type: 'paragraph',
      content:
        'O comprador norte-americano tornou-se o segmento de maior crescimento relativo após 2023. A combinação de visto D8 (nómada digital), regime de residência não habitual — entretanto reformulado — e diferenciais cambiais favoráveis atraiu um perfil com orçamentos de €350 000 a €750 000, concentrado em frações reabilitadas com acabamentos de nível alto em Lisboa e Porto.',
    },
    {
      type: 'heading2',
      content: 'Como o fim do Golden Visa residencial alterou a procura?',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023 (Mais Habitação) eliminou a concessão de vistos gold por investimento em imóveis residenciais, com efeitos a partir de outubro de 2023. O efeito imediato foi uma queda de 40–60% nas transações motivadas exclusivamente por este programa, segundo estimativas da AICEP e de associações do setor.',
    },
    {
      type: 'paragraph',
      content:
        'No entanto, o capital que antes entrava via Golden Visa não desapareceu do mercado — redistribuiu-se. Parte migrou para fundos de investimento imobiliário elegíveis (via a vertente de capital de transferência) e outra parte converteu-se em compras diretas de imóveis de prestígio acima de €500 000, onde o estatuto de visto deixou de ser o fator de decisão.',
    },
    {
      type: 'list',
      content: [
        'Imóveis de prestígio entre €600 000 e €1 500 000 registaram menor impacto da extinção do Golden Visa do que o segmento de €300 000–€500 000.',
        'A procura chinesa e do Médio Oriente, historicamente ligada ao Golden Visa, recorreu a alternativas como o visto D2 (empreendedor) e residência por investimento não imobiliário.',
        'O mercado de arrendamento de luxo beneficiou do desvio de procura estrangeira que não encontrou produto de compra nos preços alvo.',
        'Promotores reorientaram oferta para frações de ticket médio superior, antecipando a procura não-Golden-Visa.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quanto valem os prémios de preço nas zonas de maior concentração estrangeira?',
    },
    {
      type: 'paragraph',
      content:
        'O prémio de preço associado à procura estrangeira não é uniforme nem constante. A nossa análise de transações comparáveis em 2024–2025 identifica três níveis de prémio consoante a intensidade da procura internacional na microzona.',
    },
    {
      type: 'list',
      content: [
        'Zonas de procura intensa (Príncipe Real, Chiado, Lapa, Foz do Douro): prémio de 25–40% face a tipologias equivalentes em zonas sem pressão estrangeira, sustentado por escassez de oferta e perfil de utilizador final com baixa sensibilidade a preço.',
        'Zonas de procura moderada (Alfama, Mouraria, Bonfim, Cedofeita): prémio de 10–20%, com maior volatilidade conforme o trimestre e o tipo de produto.',
        'Zonas de procura residual (periferias de Lisboa e Porto, concelhos fora do eixo turístico): diferencial estatisticamente não significativo — o preço é determinado pela procura local.',
      ],
    },
    {
      type: 'quote',
      content:
        'Nos projetos que analisámos em Príncipe Real e na Lapa entre 2024 e 2025, o comprador estrangeiro pagou em média €1 200/m² acima do comprador nacional pelo mesmo produto. Esse diferencial comprime a yield mas valida o preço de saída para quem entra em reabilitação no momento certo.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de transações comparáveis 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Que zonas de Lisboa e Porto concentram maior procura internacional em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Em Lisboa, as freguesias de Misericórdia (Chiado, Bairro Alto, Príncipe Real) e de Santa Maria Maior (Baixa, Alfama) continuam a liderar a procura estrangeira de produto reabilitado. A Lapa e Santos atraem perfis de ticket mais alto, com procura crescente de moradias e pisos de andar nobre.',
    },
    {
      type: 'paragraph',
      content:
        'No Porto, a Boavista e a Foz do Douro consolidaram-se como destinos preferenciais para famílias europeias com orçamentos acima de €600 000. Bonfim e Cedofeita, onde a reabilitação de edifícios gaioleiros e placa avançou rapidamente entre 2021 e 2024, captam a procura de nómadas digitais e investidores de rendimento.',
    },
    {
      type: 'paragraph',
      content:
        'Em Cascais, o corredor Estoril–Cascais–Parede mantém a liderança na procura de famílias britânicas, americanas e do norte da Europa que pretendem residência principal. O ticket médio neste corredor para moradia com jardim situa-se entre €900 000 e €2 500 000.',
    },
    {
      type: 'heading2',
      content: 'Qual é o impacto nos preços para o comprador nacional?',
    },
    {
      type: 'paragraph',
      content:
        'A coexistência de dois mercados com diferentes elasticidades de preço — o nacional e o estrangeiro — cria assimetrias que o comprador português sente diretamente. Nas zonas de maior pressão internacional, o patamar de entrada subiu em 2023–2025 entre 18% e 32% acima da inflação geral, segundo dados do INE e da Confidencial Imobiliário.',
    },
    {
      type: 'paragraph',
      content:
        'O efeito mais relevante não é o preço médio agregado, mas o estreitamento da oferta acessível. Quando o mercado de arrendamento de curta duração (AL) absorve produto que poderia estar em arrendamento de longa duração, e quando os preços de compra sobem por procura com poder de compra superior, o comprador nacional vê o seu leque de escolha comprimir-se nas zonas mais procuradas.',
    },
    {
      type: 'heading3',
      content: 'O que dizem os dados do Banco de Portugal',
    },
    {
      type: 'paragraph',
      content:
        'O Banco de Portugal, nos seus relatórios de estabilidade financeira de 2024 e 2025, identificou a concentração geográfica da procura estrangeira como um fator de risco localizado — não sistémico — para a formação de preços. A instituição apontou que em menos de 15% do território continental se concentra mais de 80% da procura não residente.',
    },
    {
      type: 'callout',
      content:
        'Para o investidor que entra em reabilitação em zonas com procura estrangeira estabelecida, a presença desse comprador é uma garantia de liquidez na saída. O risco está em pagar hoje um prémio que só se justifica se essa procura se mantiver — o que exige análise de fundamentos e não apenas de tendências recentes.',
    },
    {
      type: 'heading2',
      content: 'O que muda com o novo regime fiscal para residentes não habituais?',
    },
    {
      type: 'paragraph',
      content:
        'O regime de Residente Não Habitual (RNH) foi reformulado em 2024, passando a designar-se IFICI (Incentivo Fiscal à I&I, Capital e Empreendedorismo). As alterações restringiram os beneficiários elegíveis a perfis de investigação, tecnologia, startups e atividades de elevado valor acrescentado, excluindo a generalidade dos reformados estrangeiros que antes beneficiavam de taxa flat de 10% sobre pensões.',
    },
    {
      type: 'paragraph',
      content:
        'Na prática, este ajuste reduziu a atratividade fiscal para o segmento de reformados europeus — que representava uma fatia relevante dos compradores de imóveis de €300 000 a €500 000 no Algarve e em Cascais. O impacto nos preços deste segmento ainda está a ser absorvido, com uma ligeira estabilização de preços nestas zonas no primeiro semestre de 2025.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para quem investe em zonas com procura estrangeira',
    },
    {
      type: 'paragraph',
      content:
        'Se está a avaliar um imóvel para reabilitação em zonas com elevada procura internacional — Chiado, Príncipe Real, Foz do Douro, Cascais — a nossa equipa analisa o perfil de comprador final esperado como parte da análise de viabilidade. Esse perfil determina o preço de saída realista e, por consequência, a margem disponível para obra e aquisição. Consulte os nossos <a href="/servicos">serviços de análise de investimento</a> ou veja exemplos concretos no <a href="/portfolio">portefólio HABTA</a>. Pode também subscrever a newsletter para receber análises de mercado trimestrais, incluindo dados de transações por microzona.',
    },
  ],
  faq: [
    {
      q: 'Qual é a nacionalidade mais representada na compra de imóveis em Portugal?',
      a: 'Em 2024–2025, franceses, britânicos e brasileiros lideraram em número de transações. Em valor, compradores americanos e do Médio Oriente têm peso crescente, com tickets médios superiores a €700 000 nas zonas premium de Lisboa e Cascais.',
    },
    {
      q: 'O fim do Golden Visa fez baixar os preços em Lisboa?',
      a: 'Não de forma generalizada. O segmento de €250 000–€400 000 mais dependente do programa registou estabilização, mas o mercado de produto reabilitado acima de €500 000 manteve pressão de procura por outras vias de comprador estrangeiro.',
    },
    {
      q: 'Os estrangeiros podem comprar imóveis em Portugal sem restrições?',
      a: 'Sim. Não há restrições legais à compra de imóveis por não residentes ou estrangeiros em Portugal. A aquisição está sujeita às mesmas regras fiscais (IMT, IMI, mais-valias) que para residentes, com algumas especificidades na tributação de rendimentos.',
    },
    {
      q: 'O regime RNH ainda existe para novos compradores estrangeiros em 2026?',
      a: 'O RNH clássico foi encerrado a novos candidatos em 2024. O regime substituto (IFICI) aplica-se a perfis específicos de atividade qualificada. Reformados e outros perfis que antes acediam ao RNH devem verificar a elegibilidade com assessor fiscal antes de qualquer decisão.',
    },
    {
      q: 'Em que zonas o comprador estrangeiro tem maior impacto no preço por m²?',
      a: 'Príncipe Real, Chiado e Lapa em Lisboa; Foz do Douro e Boavista no Porto; corredor Estoril–Cascais–Parede. Nestas zonas, o prémio de preço associado à procura internacional pode atingir 25–40% face a zonas comparáveis sem pressão estrangeira.',
    },
    {
      q: 'Investir em zonas com muita procura estrangeira é mais seguro?',
      a: 'Oferece maior liquidez na saída, mas implica preços de entrada mais elevados e maior sensibilidade a alterações de política fiscal ou de mobilidade internacional. A análise deve ponderar fundamentos de procura local além da procura estrangeira.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não substitui aconselhamento fiscal, jurídico ou de investimento. Os dados de mercado citados são estimativas baseadas em fontes públicas disponíveis (INE, Banco de Portugal, Autoridade Tributária) e em análise interna da HABTA; podem divergir de outras fontes ou sofrer revisão. A legislação fiscal aplicável a não residentes e o regime IFICI estão sujeitos a alterações — consulte um assessor fiscal qualificado antes de qualquer decisão de investimento ou de residência.',
};
