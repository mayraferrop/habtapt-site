import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'yield-comparado-portugal-vs-espanha-italia-e-grecia',
  title: 'Yield imobiliário comparado: Portugal, Espanha, Itália e Grécia 2026',
  description:
    'Análise comparativa dos yields brutos e líquidos em Portugal, Espanha, Itália e Grécia — com dados de 2026, carga fiscal e riscos de mercado para investidores.',
  category: 'Mercado',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-26',
  updated_at: '2026-04-26',
  excerpt:
    'O yield líquido do imobiliário residencial varia significativamente entre Portugal, Espanha, Itália e Grécia — perceber porquê é essencial antes de alocar capital no Sul da Europa.',
  image: 'https://images.unsplash.com/photo-1688297483354-3057315926a1${UNSPLASH_PARAMS}',
  tags: [
    'yield imobiliário Portugal 2026',
    'comparativo investimento imobiliário sul europa',
    'rentabilidade arrendamento Lisboa Porto',
    'yield bruto vs líquido imóveis',
    'mercado imobiliário Portugal Espanha Grécia',
  ],
  tldr: [
    'Em 2026, os yields brutos no imobiliário residencial rondam 4,5–6,0% em Lisboa, 4,0–5,5% em Madrid/Barcelona, 3,5–5,0% em Milão/Roma e 5,5–8,0% em Atenas.',
    'O yield líquido em Portugal cai tipicamente 1,5–2,0 pontos percentuais face ao bruto, depois de IRS sobre rendimentos prediais (28%), condomínio, IMI e manutenção.',
    'A Grécia oferece os yields brutos mais altos do grupo, mas exige prémio de risco adicional pela menor liquidez, instabilidade regulatória histórica e custos de transação elevados.',
    'Portugal distingue-se pela estabilidade jurídica, procura turística estrutural e acesso ao mercado de arrendamento de médio-longo prazo — fatores que sustentam o yield ajustado ao risco.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-26',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Quando um investidor compara yields entre países do Sul da Europa, o número bruto raramente diz o suficiente. A diferença entre um yield de 6% em Atenas e um de 5% em Lisboa pode inverter-se completamente depois de impostos, custos de transação, liquidez de saída e prémio de risco regulatório. Este artigo desagrega cada componente para que a comparação seja honesta.',
    },
    {
      type: 'paragraph',
      content:
        'O yield imobiliário — rácio entre a renda anual e o preço de aquisição — é o ponto de partida para qualquer análise comparativa entre mercados. Mas o número bruto mascara diferenças estruturais na fiscalidade, nos custos de transação, na liquidez e na volatilidade regulatória de cada país. Em 2026, Portugal, Espanha, Itália e Grécia apresentam perfis de retorno distintos que merecem análise desagregada.',
    },
    {
      type: 'heading2',
      content: 'Quais são os yields brutos típicos em cada mercado em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Os yields brutos no segmento residencial variam entre mercados primários e secundários dentro de cada país. Lisboa e Porto posicionam-se entre 4,5% e 6,0% brutos, com os valores mais altos nos bairros emergentes do Porto como Bonfim e Campanhã. Madrid e Barcelona situam-se entre 4,0% e 5,5%, pressionados pelo controlo de rendas em vigor na Catalunha desde 2023.',
    },
    {
      type: 'table',
      content: {
        headers: ['Mercado / Cidade', 'Yield bruto típico 2026', 'Yield líquido estimado', 'Nota de risco'],
        rows: [
          ['Lisboa (centro histórico)', '4,5%–5,5%', '3,0%–3,8%', 'Liquidez alta, regulação estável'],
          ['Porto (Bonfim / Campanhã)', '5,0%–6,0%', '3,4%–4,2%', 'Valorização acelerada, menos liquidez de saída'],
          ['Madrid', '4,0%–5,0%', '2,8%–3,6%', 'Mercado profundo, regulação municipal variável'],
          ['Barcelona', '3,8%–4,8%', '2,5%–3,3%', 'Controlo de rendas ativo, risco político elevado'],
          ['Milão', '3,5%–4,5%', '2,4%–3,2%', 'Mercado premium, procura corporativa estável'],
          ['Roma', '3,8%–5,0%', '2,6%–3,5%', 'Mercado heterogéneo, elevada oferta em arrendamento'],
          ['Atenas (centro / Koukaki)', '5,5%–8,0%', '3,5%–5,5%', 'Yields altos, liquidez baixa, risco regulatório'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Estes intervalos baseiam-se em transações de frações autónomas com área entre 60 e 120 m², em estado intermédio a reabilitado, arrendadas a preço de mercado sem desconto de ocupação. Imóveis fora destas condições podem desviar-se materialmente dos valores indicados.',
    },
    {
      type: 'heading2',
      content: 'Como a fiscalidade corrói o yield em Portugal face aos outros países?',
    },
    {
      type: 'paragraph',
      content:
        'Em Portugal, os rendimentos prediais de pessoas singulares estão sujeitos a uma taxa autónoma de 28% de IRS, aplicável sobre o valor de renda deduzido de certas despesas. Acresce o IMI, cujas taxas variam entre 0,3% e 0,45% do valor patrimonial tributário nos municípios de Lisboa e Porto — a Câmara Municipal de Lisboa fixou 0,3% para habitação em 2025–2026.',
    },
    {
      type: 'list',
      content: [
        'IRS sobre rendimentos prediais: taxa autónoma de 28% (ou englobamento se mais favorável) sobre rendas líquidas de despesas dedutíveis.',
        'IMI anual: 0,3%–0,45% do VPT em zonas urbanas; agrava para imóveis devolutos ou em zonas de pressão urbanística.',
        'Condomínio e manutenção: tipicamente 1,0%–1,5% do valor do imóvel por ano em edifícios com serviços.',
        'Seguro multirriscos obrigatório: 0,1%–0,2% do valor do imóvel por ano.',
        'Resultado: a passagem do yield bruto ao líquido implica, em regra, uma erosão de 1,5–2,0 pontos percentuais em Portugal.',
      ],
    },
    {
      type: 'heading2',
      content: 'A Espanha oferece vantagem fiscal sobre Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'Em Espanha, os rendimentos de arrendamento para pessoas singulares são tributados como rendimento geral às taxas progressivas do IRPF (entre 19% e 47%), mas com uma dedução de 60% sobre o rendimento líquido em contratos de habitação permanente — o que pode tornar a tributação efetiva inferior à portuguesa para imóveis com rendas moderadas. Porém, a supressão desta dedução em Barcelona para imóveis em zonas tensionadas, anunciada em 2024, altera o cálculo em vários mercados.',
    },
    {
      type: 'paragraph',
      content:
        'O IBI (equivalente ao IMI) em Madrid situa-se entre 0,4% e 0,6% do valor cadastral, geralmente inferior ao valor de mercado. Os custos de transação em Espanha (ITP ou IVA, mais AJD) rondam 8%–10% do preço, semelhantes a Portugal nos 6%–8% (IMT + IS + registo).',
    },
    {
      type: 'heading2',
      content: 'O que distingue o mercado italiano em termos de rentabilidade?',
    },
    {
      type: 'paragraph',
      content:
        'Itália oferece o regime de "cedolare secca" — uma taxa fixa de 21% sobre rendimentos de arrendamento residencial, ou 10% em contratos a preços controlados. Este mecanismo, vigente desde 2011, simplifica a tributação e pode tornar a carga fiscal em Milão competitiva face a Lisboa para perfis de rendimento mais elevado.',
    },
    {
      type: 'paragraph',
      content:
        'No entanto, os yields brutos em Milão (3,5%–4,5%) são os mais baixos do grupo, reflexo de preços de aquisição elevados em zonas como Brera ou Porta Romana. Roma apresenta maior amplitude (3,8%–5,0%) com liquidez mais variável por bairro. O processo de despejo em Itália pode demorar 12–36 meses em tribunal, um risco operacional relevante para o investidor individual.',
    },
    {
      type: 'heading3',
      content: 'Custos de transação em Itália',
    },
    {
      type: 'list',
      content: [
        'Imposto de registo (Imposta di Registro): 9% do valor cadastral para segunda habitação comprada por particular.',
        'IVA em alternativa ao imposto de registo: 10% para imóveis não de luxo em compra a promotor.',
        'Honorários de notário e registo: tipicamente 1,5%–2,5% do valor de compra.',
        'Total de custos de entrada: 10%–12% para não-residentes — penalização relevante face a Portugal.',
      ],
    },
    {
      type: 'heading2',
      content: 'A Grécia justifica o prémio de risco face ao yield mais alto?',
    },
    {
      type: 'paragraph',
      content:
        'Atenas apresenta os yields brutos mais elevados do grupo — entre 5,5% e 8,0% no centro e em bairros como Koukaki e Exarcheia — mas o prémio de risco é estrutural. A liquidez do mercado secundário é significativamente inferior à de Lisboa ou Madrid: o volume de transações em Atenas representa menos de um terço do equivalente lisboeta em proporção do stock habitacional.',
    },
    {
      type: 'quote',
      content:
        'Um yield bruto de 7% em Atenas e de 5% em Lisboa não são comparáveis sem ajustar para a liquidez de saída, o prazo médio de despejo e a volatilidade regulatória histórica. O investidor que não faz essa correção está a comparar números, não retornos.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise comparativa de mercados do Sul da Europa, 2026',
      },
    },
    {
      type: 'paragraph',
      content:
        'A tributação grega sobre rendimentos de arrendamento aplica taxas progressivas de 15% (até 12.000 €/ano), 35% (12.001–35.000 €) e 45% (acima de 35.000 €). Para a maioria dos investidores com rendas anuais abaixo de 12.000 €, a taxa de 15% é atrativa — mas os custos notariais e de registo em transações imobiliárias gregas rondam os 3%–5%, a que acrescem honorários de advogado obrigatórios por lei.',
    },
    {
      type: 'heading2',
      content: 'Qual o yield ajustado ao risco mais favorável em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Ajustar o yield ao risco exige incorporar quatro variáveis: liquidez de saída, estabilidade regulatória, custo médio de um processo de despejo e profundidade do mercado de arrendamento. Portugal apresenta vantagens estruturais em todas estas dimensões face à Grécia e em liquidez face a Itália, enquanto perde para Espanha na amplitude de mercado mas ganha em previsibilidade legal.',
    },
    {
      type: 'table',
      content: {
        headers: ['País', 'Liquidez (1–5)', 'Estabilidade regulatória (1–5)', 'Prazo médio de despejo', 'Custos de transação'],
        rows: [
          ['Portugal', '4', '4', '4–8 meses (via julgado de paz ou tribunal)', '6%–8% do preço'],
          ['Espanha', '5', '3 (variável por região)', '6–18 meses (Catalunha até 24 m.)', '8%–10% do preço'],
          ['Itália', '3', '3', '12–36 meses (tribunal civil)', '10%–12% do preço'],
          ['Grécia', '2', '3', '8–18 meses', '3%–5% do preço'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Lisboa e Porto mantêm atração para o investidor internacional?',
    },
    {
      type: 'paragraph',
      content:
        'Sim — e por razões que vão além do yield bruto. A procura de arrendamento em Lisboa e Porto é sustentada por três vetores estruturais: o turismo urbano de média e longa estadia (superior a 30 dias), a relocalização de trabalhadores de empresas tecnológicas e financeiras com escritórios em Portugal, e o crescimento do segmento de estudantes internacionais em universidades como a Nova SBE em Carcavelos e o ISCTE em Lisboa.',
    },
    {
      type: 'paragraph',
      content:
        'Em Cascais, Parede e Estoril, a procura de famílias expatriadas sustenta arrendamentos de longa duração com tickets acima da média da Grande Lisboa, com yields brutos entre 3,8% e 5,2% em moradias e apartamentos de tipologia T3–T4. A Autoridade Tributária tem intensificado a verificação das obrigações declarativas de proprietários com rendimentos prediais, o que reforça a necessidade de estruturação fiscal prévia.',
    },
    {
      type: 'list',
      content: [
        'Frações reabilitadas em ARU de Lisboa (Alfama, Mouraria, Misericórdia) beneficiam de isenção temporária de IMI por até 5 anos, nos termos do regime jurídico da reabilitação urbana.',
        'Arrendamento acessível com rendas abaixo do limite municipal confere redução de IRS de 2 a 5 pontos percentuais sobre a taxa autónoma de 28%, nos termos da Lei n.º 12/2019 e atualizações subsequentes.',
        'Contratos de arrendamento habitacional com prazo igual ou superior a 5 anos têm tratamento fiscal mais favorável do que os contratos de curta duração.',
        'O Programa de Arrendamento Acessível (PAA), gerido pelo IHRU, garante renda ao proprietário durante a vigência do contrato — mecanismo relevante para reduzir o risco de vacância.',
      ],
    },
    {
      type: 'callout',
      content:
        'Para um investidor com horizonte de 7–10 anos e perfil de capital preservation, Portugal oferece em 2026 o melhor rácio entre yield líquido ajustado ao risco e liquidez de saída no conjunto dos quatro mercados analisados. A Grécia pode superar em yield bruto; nenhum dos outros supera em combinação de liquidez, estabilidade jurídica e procura estrutural.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores a comparar mercados',
    },
    {
      type: 'paragraph',
      content:
        'Se está a ponderar uma alocação imobiliária no Sul da Europa e quer comparar cenários concretos com base no seu perfil de risco e horizonte temporal, a nossa equipa está disponível para uma análise de viabilidade personalizada através da secção <a href="/servicos">serviços</a> ou com base em projetos ativos no nosso <a href="/portfolio">portefólio</a>. Para aprofundar o contexto português, consulte também o <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a> e a análise sobre <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">reabilitação urbana em Portugal</a>. Pode subscrever a newsletter para receber atualizações comparativas de mercado.',
    },
  ],
  faq: [
    {
      q: 'Qual o yield líquido médio no arrendamento em Lisboa em 2026?',
      a: 'Em Lisboa, o yield líquido situa-se entre 3,0% e 3,8% em frações residenciais no centro histórico, após dedução de IRS (28%), IMI, condomínio e manutenção. Imóveis reabilitados em ARU com isenção de IMI podem aproximar-se dos 4%.',
    },
    {
      q: 'A Grécia é mais rentável do que Portugal para investir em imobiliário?',
      a: 'Em yield bruto, sim — Atenas pode atingir 8%. Mas o yield ajustado ao risco é inferior: liquidez baixa, prazos de despejo de 8–18 meses e menor profundidade de mercado reduzem o retorno efetivo para o investidor não local.',
    },
    {
      q: 'Como funciona a dedução fiscal no arrendamento em Espanha?',
      a: 'Em Espanha, os proprietários podem deduzir 60% do rendimento líquido de arrendamento habitacional permanente para efeitos de IRPF. Em zonas tensionadas com controlo de rendas, como Barcelona, esta dedução pode ser condicionada ou eliminada por legislação regional.',
    },
    {
      q: 'O regime de cedolare secca em Itália é acessível a estrangeiros?',
      a: 'Sim, qualquer proprietário — residente ou não residente — pode optar pela cedolare secca (21% ou 10%) em contratos de arrendamento residencial em Itália, desde que o imóvel seja classificado como habitação e o arrendatário seja pessoa singular.',
    },
    {
      q: 'Quais os custos de transação a considerar em Portugal na compra para arrendamento?',
      a: 'Em Portugal, os custos de aquisição incluem IMT (variável por valor e finalidade), Imposto do Selo (0,8% do preço), registo e notário. No total, rondam 6%–8% do preço de compra para habitação destinada a arrendamento por pessoa singular.',
    },
    {
      q: 'O arrendamento de curta duração (Alojamento Local) melhora o yield em Portugal?',
      a: 'O AL pode elevar o yield bruto para 7%–10% em Lisboa em zonas turísticas, mas exige licença municipal, gestão operacional intensiva e enquadramento no regime de IRS categoria B. Os custos operacionais reduzem o yield líquido para 4%–6%, com maior volatilidade.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. Os yields e taxas indicados são estimativas de mercado com base em dados disponíveis em abril de 2026 e podem variar por imóvel, localização, regime contratual e alterações legislativas posteriores. Consulte profissionais qualificados antes de decisões concretas de investimento.',
};
