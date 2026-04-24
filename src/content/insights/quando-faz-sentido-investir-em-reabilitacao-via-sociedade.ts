import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'quando-faz-sentido-investir-em-reabilitacao-via-sociedade',
  title: 'Reabilitação via sociedade ou nome próprio? Como decidir em 2026',
  description:
    'Investir em reabilitação via sociedade ou em nome próprio tem implicações fiscais e operacionais distintas em Portugal. Saiba quando cada via protege mais o seu retorno.',
  category: 'Investimento',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-24',
  updated_at: '2026-04-24',
  excerpt:
    'Investir em reabilitação urbana em Portugal via sociedade ou em nome próprio determina fiscalidade, responsabilidade e escalabilidade — a escolha certa depende do perfil e volume de investimento.',
  image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350${UNSPLASH_PARAMS}',
  tags: [
    'investimento reabilitação urbana Portugal',
    'sociedade vs nome próprio imóveis',
    'fiscalidade imobiliária Portugal 2026',
    'IRC versus IRS imóveis reabilitação',
    'estrutura societária investimento imobiliário',
  ],
  tldr: [
    'Em nome próprio, os rendimentos de arrendamento tributam a 25% (taxa especial) ou englobamento; mais-valias de venda a 50% do ganho, sujeitas a taxas progressivas até 48%.',
    'Via sociedade (IRC), a taxa nominal é 21%, podendo baixar a 17% nos primeiros 50 000 € de lucro tributável para PMEs; as mais-valias de imóveis integram o resultado fiscal sem agravamento autónomo.',
    'A via societária torna-se vantajosa a partir de volumes de investimento acima de 300 000–400 000 € e/ou quando se reinvestem lucros — a distribuição de dividendos acrescenta 28% de retenção.',
    'Custos de constituição e contabilidade organizada obrigatória (mínimo ~1 500–2 500 €/ano) oneram estruturas pequenas; abaixo de um imóvel isolado, o nome próprio é frequentemente mais eficiente.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-24',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'A pergunta surge em quase todas as conversas iniciais com investidores: "devo comprar em nome próprio ou constituir uma sociedade?" A resposta não é universal — depende do volume de investimento, do horizonte temporal, da intenção de escalar e de como o investidor planeia extrair rendimento. Este artigo estrutura os critérios que usamos na HABTA para orientar essa decisão.',
    },
    {
      type: 'paragraph',
      content:
        'Investir em reabilitação via sociedade ou em nome próprio não é apenas uma questão fiscal. Envolve responsabilidade patrimonial, acesso a financiamento, custos operacionais e flexibilidade de saída. Analisar cada variável em separado é o que permite fazer uma escolha fundada.',
    },
    {
      type: 'heading2',
      content: 'Como funciona a tributação em nome próprio em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'Quando uma pessoa singular arrendou imóveis reabilitados, os rendimentos prediais ficam sujeitos a uma taxa especial de IRS de 25% — ou 5% se o imóvel estiver em ARU e a reabilitação for qualificada, nos termos do Estatuto dos Benefícios Fiscais. O investidor pode alternativamente optar pelo englobamento, o que pode ser desvantajoso para quem já se encontra no escalão de 45% ou 48%.',
    },
    {
      type: 'paragraph',
      content:
        'Nas mais-valias de venda, o regime em nome próprio é o mais penalizante: 50% do ganho é excluído, mas os restantes 50% integram o rendimento coletável e são tributados pelas taxas progressivas de IRS, que chegam a 48% acrescidas da taxa adicional de solidariedade de 2,5% para rendimentos superiores a 80 000 €. Um ganho bruto de 200 000 € pode gerar uma carga fiscal efectiva próxima de 25–30% sobre o valor total da mais-valia.',
    },
    {
      type: 'heading2',
      content: 'Qual é a carga fiscal efectiva via sociedade (IRC)?',
    },
    {
      type: 'paragraph',
      content:
        'Uma sociedade por quotas ou sociedade anónima em Portugal paga IRC à taxa nominal de 21%. As PMEs qualificadas beneficiam de uma taxa reduzida de 17% sobre os primeiros 50 000 € de lucro tributável. As mais-valias imobiliárias integram o resultado líquido do exercício sem agravamento autónomo específico, ao contrário do regime de IRS.',
    },
    {
      type: 'table',
      content: {
        headers: ['Variável', 'Nome próprio (IRS)', 'Sociedade (IRC)'],
        rows: [
          ['Rendimentos de arrendamento', '25% (taxa especial) ou englobamento', '21% sobre lucro (17% até 50 k€ para PME)'],
          ['Mais-valias de venda', '50% do ganho × taxas progressivas até 48%', 'Integram resultado fiscal à taxa de 21%'],
          ['Distribuição de rendimento', 'Direta, sem retenção adicional', 'Dividendos sujeitos a 28% de retenção na fonte'],
          ['Reinvestimento de lucros', 'Não aplicável — tributação no ano do rendimento', 'Retido na sociedade até distribuição — diferimento fiscal'],
          ['Responsabilidade patrimonial', 'Ilimitada (todo o património pessoal)', 'Limitada ao capital social da sociedade'],
          ['Custos de estrutura anuais', 'Baixos (declaração de IRS)', '1 500–2 500 € mínimo (contabilidade organizada, TOC)'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'A partir de que volume de investimento compensa criar uma sociedade?',
    },
    {
      type: 'paragraph',
      content:
        'A análise que fazemos na HABTA indica que, para um único imóvel com valor de aquisição abaixo de 250 000–300 000 € e sem intenção de reinvestir sistematicamente os resultados, o nome próprio é quase sempre mais eficiente. Os custos fixos de uma estrutura societária — contabilidade organizada obrigatória, Técnico Oficial de Contas, depósito de contas na Conservatória — rondam 1 500 a 2 500 € por ano e erodem a margem de projetos mais pequenos.',
    },
    {
      type: 'paragraph',
      content:
        'A partir de dois ou mais imóveis em reabilitação simultânea, ou sempre que o investidor planeia reter os resultados para financiar operações seguintes, a sociedade começa a pagar-se. O diferimento fiscal — não pagar IRS pelo arrendamento enquanto o resultado permanece na sociedade — é uma das vantagens mais concretas para quem está em fase de crescimento de portefólio.',
    },
    {
      type: 'heading3',
      content: 'O efeito do diferimento fiscal na rentabilidade acumulada',
    },
    {
      type: 'paragraph',
      content:
        'Um investidor que retém 80 000 € de resultado líquido numa sociedade e os reinveste em nova operação paga IRC sobre esse valor (≈16 800 €) apenas quando distribui dividendos. Em nome próprio, o mesmo rendimento predial de 80 000 € englobado num escalão elevado pode gerar uma carga de IRS de 35 000–40 000 €, reduzindo o capital disponível para reinvestimento em quase metade.',
    },
    {
      type: 'heading2',
      content: 'Quais os riscos da via societária que os investidores subestimam?',
    },
    {
      type: 'paragraph',
      content:
        'O maior risco não é fiscal — é operacional. Uma sociedade implica escrituração completa, obrigações declarativas periódicas (IES, declaração de IRC, IVA se aplicável), e a impossibilidade de misturar despesas pessoais com despesas da sociedade sem consequências fiscais sérias. A Autoridade Tributária e Aduaneira tem escrutinado crescentemente esta fronteira em sociedades imobiliárias de sócio único.',
    },
    {
      type: 'list',
      content: [
        'Tributação autónoma de 35% sobre despesas não documentadas e 5–10% sobre ajudas de custo acima dos limites legais.',
        'Derrama municipal até 1,5% sobre o lucro tributável, variável por município (Lisboa cobra 1,5%; alguns municípios de Cascais cobram taxas inferiores).',
        'Dissolução e liquidação da sociedade geram mais-valias tributáveis para o sócio em IRS — saída não é isenta.',
        'Financiamento bancário pode ser mais exigente para sociedades sem histórico de resultados.',
        'IMT e Imposto do Selo pagos na aquisição são os mesmos independentemente da estrutura — não há isenção pelo facto de ser pessoa coletiva.',
      ],
    },
    {
      type: 'heading2',
      content: 'Que tipo de sociedade usar — Lda., SA ou outra estrutura?',
    },
    {
      type: 'paragraph',
      content:
        'Para a maioria dos investidores em reabilitação com portefólios até cinco imóveis, a sociedade por quotas (Lda.) é suficiente: capital social mínimo de 1 € (embora recomendemos €5 000–10 000 para credibilidade junto de financiadores), constituição rápida via Empresa na Hora e gestão simplificada. A sociedade anónima justifica-se quando há múltiplos investidores, necessidade de emissão de títulos ou estruturas de co-investimento formais.',
    },
    {
      type: 'paragraph',
      content:
        'Estruturas de SICAFI (Sociedade de Investimento e Capital de Risco Imobiliário) ou Fundos de Investimento Imobiliário são relevantes para portefólios acima de 5–10 M€ e requerem autorização da CMVM. Fora desse universo, a Lda. é a forma mais eficiente para a generalidade dos projetos de reabilitação urbana em Lisboa, Porto ou Cascais.',
    },
    {
      type: 'quote',
      content:
        'Nos projetos que acompanhamos em Alfama e no Bonfim, a decisão entre nome próprio e sociedade raramente é só fiscal. Investidores que planeiam dois ou mais projetos nos próximos 36 meses quase sempre saem melhor com uma estrutura societária — o diferimento do IRS sobre arrendamento representa, em média, mais 18–22% de capital disponível para reinvestimento face ao nome próprio no mesmo escalão.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de portefólio 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Como os benefícios fiscais de ARU se aplicam a cada estrutura?',
    },
    {
      type: 'paragraph',
      content:
        'Os incentivos fiscais das Áreas de Reabilitação Urbana constam do Estatuto dos Benefícios Fiscais (EBF) e do regime jurídico da reabilitação urbana (DL n.º 307/2009, com as alterações subsequentes). Tanto pessoas singulares como sociedades podem beneficiar de isenção ou redução de IMI durante 3 anos (renovável por mais 5) e de isenção de IMT na primeira transmissão após reabilitação qualificada.',
    },
    {
      type: 'list',
      content: [
        'IVA a 6% nas empreitadas de reabilitação em ARU aplica-se independentemente de ser nome próprio ou sociedade — a taxa reduzida é da obra, não do promotor.',
        'A isenção de IMT na venda após reabilitação qualificada exige certificação pela câmara municipal — em Lisboa, a CML emite declaração de reconhecimento da intervenção.',
        'A isenção de IMI de 3 anos (+ 5 renováveis) em ARU depende de requerimento dirigido ao serviço de finanças após conclusão das obras.',
        'Em nome próprio, a taxa de IRS de 5% sobre rendimentos prediais de arrendamento habitacional em ARU (art.º 71.º do EBF) é significativamente mais favorável do que a taxa geral de 25%.',
        'Sociedades que realizem mais-valias em imóveis em ARU não beneficiam de taxa especial de IRC — o ganho integra o resultado normal à taxa de 21%.',
      ],
    },
    {
      type: 'heading2',
      content: 'Próximos passos: como estruturar a sua decisão',
    },
    {
      type: 'paragraph',
      content:
        'Antes de constituir qualquer estrutura, recomendamos uma análise financeira que compare os dois cenários com os valores reais do projeto: preço de aquisição, custo de obra, valor estimado de venda ou renda, e horizonte temporal. A nossa equipa, descrita em <a href="/servicos">serviços</a>, faz esta análise de viabilidade como parte do processo de acompanhamento de investimento. Pode também consultar o nosso <a href="/portfolio">portefólio</a> para exemplos de estruturação concreta. Para aprofundar o enquadramento fiscal, veja o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a> e <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">como investir em imóveis em Portugal</a>. Subscreva a newsletter para receber atualizações sempre que a legislação ou as condições de mercado mudem.',
    },
  ],
  faq: [
    {
      q: 'Vale a pena criar uma sociedade para comprar um único imóvel para reabilitar?',
      a: 'Para um único imóvel abaixo de 300 000 €, o nome próprio é geralmente mais eficiente: os custos fixos de uma sociedade (1 500–2 500 €/ano) erodem a margem e só se justificam quando há intenção de escalar ou reinvestir os lucros sistematicamente.',
    },
    {
      q: 'Qual a taxa de IRC que uma sociedade imobiliária paga em Portugal em 2026?',
      a: 'A taxa geral de IRC é 21%. PMEs qualificadas pagam 17% sobre os primeiros 50 000 € de lucro tributável. Acresce derrama municipal até 1,5%, variável por município. Dividendos distribuídos ao sócio ficam sujeitos a retenção de 28%.',
    },
    {
      q: 'As isenções de IMT em ARU aplicam-se a sociedades comerciais?',
      a: 'Sim. As isenções de IMT na primeira transmissão após reabilitação qualificada em ARU, previstas no Estatuto dos Benefícios Fiscais, aplicam-se tanto a pessoas singulares como a pessoas coletivas, desde que cumpridos os requisitos de intervenção qualificada.',
    },
    {
      q: 'Posso transferir imóveis que já tenho em nome próprio para uma sociedade?',
      a: 'Sim, mas a transferência configura uma transmissão onerosa sujeita a IMT e Imposto do Selo, e pode gerar mais-valias tributáveis em IRS no momento da entrada. A reestruturação exige análise fiscal prévia para evitar custos superiores ao benefício esperado.',
    },
    {
      q: 'O financiamento bancário é mais difícil para sociedades do que para particulares?',
      a: 'Depende do histórico. Sociedades sem resultados demonstrados nos primeiros 1–2 anos têm mais dificuldade de acesso a crédito hipotecário. Os bancos exigem frequentemente garantia pessoal dos sócios, o que dilui a separação de responsabilidade patrimonial.',
    },
    {
      q: 'Qual a diferença fiscal entre arrendar e vender através de uma sociedade?',
      a: 'No arrendamento, as rendas são receita da sociedade e tributam em IRC após dedução de custos. Na venda, a mais-valia integra o resultado fiscal do mesmo exercício à taxa de 21%, sem benefício de exclusão de 50% que existe no IRS para pessoas singulares.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. A fiscalidade imobiliária em Portugal está sujeita a alterações legislativas; os valores e taxas mencionados refletem o enquadramento vigente em abril de 2026 e podem não estar atualizados para datas futuras. Consulte um Técnico Oficial de Contas ou advogado fiscalista qualificado antes de tomar decisões concretas de estruturação patrimonial.',
};
