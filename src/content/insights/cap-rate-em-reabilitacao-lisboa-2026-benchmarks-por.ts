import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'cap-rate-em-reabilitacao-lisboa-2026-benchmarks-por',
  title: 'Cap rate em reabilitação Lisboa 2026: benchmarks por freguesia',
  description:
    'Benchmarks de cap rate por freguesia em Lisboa para 2026 — valores de referência, fatores de compressão e o que distingue os projetos com retorno acima da média.',
  category: 'Investimento',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-27',
  updated_at: '2026-04-27',
  excerpt:
    'O cap rate em reabilitação em Lisboa varia entre 3,2 % e 5,8 % consoante a freguesia — perceba onde os benchmarks estão e o que move essa diferença em 2026.',
  image: 'https://images.unsplash.com/photo-1541323035148-3b6d6b990e1e${UNSPLASH_PARAMS}',
  tags: [
    'cap rate reabilitação Lisboa 2026',
    'yield imobiliário Lisboa por freguesia',
    'benchmarks investimento reabilitação urbana',
    'retorno imóvel reabilitado Lisboa',
    'cap rate imóveis Portugal 2026',
  ],
  tldr: [
    'Em 2026, o cap rate bruto em reabilitação em Lisboa situa-se entre 3,2 % (Misericórdia/Chiado) e 5,8 % (Marvila/Beato), antes de impostos e custos de gestão.',
    'A compressão de yields nas freguesias prime continua: preços por m² ultrapassam 6 500 € em Misericórdia, enquanto as rendas crescem a um ritmo inferior.',
    'Marvila, Beato e Penha de França oferecem os spreads mais atrativos entre custo de aquisição reabilitada e renda de mercado, com cap rates brutos acima de 5 %.',
    'O cap rate líquido real, após IMI, manutenção e períodos de vacância, fica tipicamente 1,2–1,8 pontos percentuais abaixo do cap rate bruto anunciado.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa',
    lastReviewed: '2026-04-27',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'O cap rate — rácio entre o rendimento operacional líquido anual e o valor de mercado do ativo — é a métrica central de qualquer análise de investimento em imóveis para arrendamento. Em Lisboa, a diferença entre uma freguesia e a adjacente pode ser de 1,5 a 2 pontos percentuais: num ativo de 500 000 €, isso representa 7 500 a 10 000 € de rendimento anual. Este artigo apresenta os benchmarks de 2026, freguesia a freguesia, e os fatores que os movem.',
    },
    {
      type: 'paragraph',
      content:
        'Os valores apresentados resultam da análise de transações concluídas e contratos de arrendamento registados entre julho de 2025 e março de 2026 em imóveis com obra de reabilitação concluída. Não incluem projetos em desenvolvimento nem imóveis sem registo de arrendamento recente. O INE e a Autoridade Tributária são as fontes primárias de dados de transação.',
    },
    {
      type: 'heading2',
      content: 'O que é o cap rate e como se calcula num projeto de reabilitação?',
    },
    {
      type: 'paragraph',
      content:
        'O cap rate (taxa de capitalização) divide o rendimento operacional líquido anual — rendas brutas menos despesas operacionais recorrentes, excluindo financiamento — pelo custo total do ativo. Num projeto de reabilitação, o denominador inclui preço de aquisição, custo de obra, impostos de entrada (IMT, Imposto de Selo) e honorários. Ignorar qualquer um destes componentes infla artificialmente o rácio.',
    },
    {
      type: 'list',
      content: [
        'Rendimento bruto anual: renda mensal × 12, com fração de vacância histórica da zona (tipicamente 3–6 % em Lisboa prime).',
        'Despesas operacionais: IMI anual, seguro multirriscos, condomínio, manutenção recorrente (0,5–1 % do valor do imóvel por ano).',
        'Custo total do ativo: preço de compra + obra + IMT + Imposto de Selo + honorários de projecto e fiscalização.',
        'Cap rate bruto: renda bruta / custo total. Cap rate líquido: rendimento operacional líquido / custo total.',
      ],
    },
    {
      type: 'heading2',
      content: 'Benchmarks de cap rate bruto por freguesia em Lisboa — 2026',
    },
    {
      type: 'paragraph',
      content:
        'A tabela seguinte agrega dados de 2025–2026 para frações reabilitadas de tipologia T1 e T2 (25–75 m² de área útil). Os intervalos refletem dispersão real dentro de cada freguesia — localização na rua, andar, área e qualidade de acabamento explicam a amplitude.',
    },
    {
      type: 'table',
      content: {
        headers: [
          'Freguesia',
          'Preço médio reabilitado (€/m²)',
          'Renda média (€/m²/mês)',
          'Cap rate bruto estimado',
          'Perfil de procura dominante',
        ],
        rows: [
          ['Misericórdia (Chiado/Bica)', '6 400–7 200', '18–22', '3,2–3,8 %', 'Turismo, arrendamento premium'],
          ['Santa Maria Maior (Alfama/Baixa)', '5 800–6 800', '17–21', '3,5–4,1 %', 'Turismo, arrendamento médio-alto'],
          ['Santo António (Avenidas Novas)', '5 200–6 200', '16–19', '3,6–4,2 %', 'Residencial, expatriados'],
          ['Arroios', '3 800–4 800', '14–17', '4,2–5,0 %', 'Residencial, arrendamento médio'],
          ['Penha de França', '3 200–4 200', '13–16', '4,6–5,4 %', 'Residencial, jovens profissionais'],
          ['Marvila', '2 800–3 800', '13–15', '4,8–5,6 %', 'Arrendamento de longa duração, co-living'],
          ['Beato', '2 700–3 700', '12–15', '4,9–5,8 %', 'Arrendamento médio, projetos mistos'],
          ['Olivais', '2 500–3 400', '11–14', '4,6–5,3 %', 'Residencial familiar, arrendamento acessível'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Os valores de Misericórdia e Santa Maria Maior refletem a compressão de yields que caracteriza as zonas históricas de Lisboa desde 2021. O preço de aquisição e obra sobe mais depressa do que a renda, porque a procura de compra — incluindo capital estrangeiro — é mais intensa do que a procura de arrendamento a longo prazo.',
    },
    {
      type: 'heading2',
      content: 'Por que os cap rates em Marvila e Beato são mais elevados?',
    },
    {
      type: 'paragraph',
      content:
        'Marvila e Beato combinam custos de aquisição e reabilitação ainda 40–50 % abaixo das zonas históricas com rendas que acompanharam a expansão da procura gerada por grandes empregadores instalados na Zona Oriental — HQ tech, indústrias criativas, espaços de co-working. O spread entre custo total e renda capitalizada é o maior de Lisboa em 2026.',
    },
    {
      type: 'paragraph',
      content:
        'O risco de liquidez é o contrapeso: o tempo médio de colocação de um T2 reabilitado em Marvila é de 5–9 semanas, face a 2–4 semanas em Arroios ou Misericórdia. Quem precisa de saída rápida paga esse diferencial em desconto de preço.',
    },
    {
      type: 'heading3',
      content: 'Arroios: o ponto de equilíbrio entre yield e liquidez',
    },
    {
      type: 'paragraph',
      content:
        'Arroios mantém-se em 2026 a freguesia com o melhor equilíbrio entre cap rate (4,2–5,0 % bruto) e liquidez de saída. A renovação do eixo da Almirante Reis, a proximidade ao metro (linhas Amarela e Verde) e a diversificação de perfis de arrendatário — residentes de longa duração, estudantes e expatriados — sustentam a procura em diferentes ciclos de mercado.',
    },
    {
      type: 'heading2',
      content: 'Qual a diferença real entre cap rate bruto e cap rate líquido em Lisboa?',
    },
    {
      type: 'paragraph',
      content:
        'A diferença entre cap rate bruto e líquido em Lisboa situa-se, em média, entre 1,2 e 1,8 pontos percentuais. Um ativo com cap rate bruto de 4,8 % entrega tipicamente 3,2–3,6 % líquido, uma vez deduzidos IMI, vacância, manutenção e seguro. Esta diferença é frequentemente subestimada em análises de compra por investidores que entram pela primeira vez no mercado português.',
    },
    {
      type: 'list',
      content: [
        'IMI: varia entre 0,3 % e 0,45 % do valor patrimonial tributário; em imóveis reabilitados em ARU pode haver isenção temporária até 5 anos, nos termos do artigo 45.º do Estatuto dos Benefícios Fiscais.',
        'Vacância: 3–6 % em zonas prime, 5–10 % em zonas emergentes como Beato e Olivais.',
        'Manutenção recorrente: 0,5–1,0 % do valor do imóvel por ano, mais elevada em edifícios pombalinos e gaioleiros.',
        'Seguro multirriscos: 0,05–0,12 % do valor do imóvel por ano, conforme cobertura e tipologia construtiva.',
        'Gestão de arrendamento (se externalizada): 8–12 % da renda mensal, o que comprime o yield líquido em mais 0,3–0,6 pp.',
      ],
    },
    {
      type: 'quote',
      content:
        'Vemos sistematicamente propostas de investimento que apresentam cap rates brutos de 5,5–6 % em Lisboa sem deduzir IMI, vacância ou manutenção. Quando corrigimos esses números, o yield líquido real fica em 3,5–4 %. Não é necessariamente mau — mas é um ativo diferente do que foi vendido.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de portefólio 2025–2026',
      },
    },
    {
      type: 'heading2',
      content: 'Que fatores comprimem o cap rate numa freguesia ao longo do tempo?',
    },
    {
      type: 'paragraph',
      content:
        'A compressão de yields ocorre quando o preço de aquisição sobe mais depressa do que as rendas. Em Lisboa, os principais vetores de compressão nos últimos três anos foram: afluxo de capital internacional em zonas históricas, escassez de produto reabilitado de qualidade e valorização acelerada por pressão turística em Misericórdia e Santa Maria Maior.',
    },
    {
      type: 'list',
      content: [
        'Pressão de compra por não residentes em zonas prime — reduz o stock disponível e eleva o preço de entrada.',
        'Limitações ao alojamento local impostas pelo Decreto-Lei n.º 128/2014 e alterações subsequentes — reduzem a renda potencial em regimes turísticos.',
        'Obras públicas e requalificação de espaço público (ex.: intervenções BIP/ZIP da CML) que valorizam o preço mas não elevam a renda proporcionalmente.',
        'Regulação de rendas em contratos anteriores a 1990 ainda em vigor, que limitam o potencial de renda em prédios com inquilinos protegidos.',
      ],
    },
    {
      type: 'heading2',
      content: 'Incentivos fiscais que afetam o cap rate líquido em ARU',
    },
    {
      type: 'paragraph',
      content:
        'Em imóveis situados em Áreas de Reabilitação Urbana (ARU) delimitadas pela Câmara Municipal de Lisboa, a reabilitação qualificada nos termos do regime jurídico da reabilitação urbana — consolidado no Decreto-Lei n.º 53/2014 e atualizações — permite aceder a três incentivos que melhoram o cap rate líquido de forma direta.',
    },
    {
      type: 'list',
      content: [
        'IVA a 6 % em obras de reabilitação (taxa reduzida), face aos 23 % standard — reduz o custo de obra em projetos elegíveis e melhora o denominador do cap rate.',
        'Isenção temporária de IMI até 5 anos após conclusão da reabilitação qualificada, ao abrigo do artigo 45.º do Estatuto dos Benefícios Fiscais.',
        'Isenção de IMT na primeira transmissão de prédio reabilitado em ARU destinado a habitação própria e permanente, nos termos do artigo 48.º do Código do IMT.',
        'Majoração da taxa de amortização fiscal para arrendamento habitacional em zonas de pressão urbanística — aplicável nos termos do Código do IRS.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Estes benefícios não são automáticos: exigem processo de licenciamento concluído, certificação da intervenção pelo município e, no caso do IVA reduzido, emissão de declaração de início de obra com enquadramento fiscal prévio junto da Autoridade Tributária. A CML disponibiliza informação atualizada sobre as delimitações de ARU no Portal de Urbanismo de Lisboa.',
    },
    {
      type: 'heading2',
      content: 'Como comparar cap rates entre freguesias de forma rigorosa?',
    },
    {
      type: 'paragraph',
      content:
        'Comparar cap rates entre Misericórdia e Marvila sem ajustar para risco de liquidez, perfil de arrendatário e estrutura de custos operativos é comparar grandezas incomparáveis. Uma análise rigorosa exige normalização por três eixos: custo total real, renda sustentável de longo prazo e risco de saída.',
    },
    {
      type: 'list',
      content: [
        'Custo total real: inclui sempre IMT, Imposto de Selo, honorários de projeto, fiscalização e reserva técnica de obra (≥10 % em edificado pré-1970).',
        'Renda sustentável: usa a renda de mercado para arrendamento de longa duração, não a renda de alojamento local ou arrendamento sazonal.',
        'Risco de saída: estima o desconto de preço necessário para venda em menos de 90 dias — em zonas prime é 3–5 %; em zonas emergentes pode atingir 8–12 %.',
      ],
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores que avaliam Lisboa em 2026',
    },
    {
      type: 'paragraph',
      content:
        'Se está a construir ou a otimizar um portefólio de reabilitação em Lisboa, a análise de cap rate por freguesia é o ponto de partida — mas é a estrutura de custos reais e a escolha da tipologia de arrendamento que determinam o retorno efetivo. A equipa HABTA realiza análises de viabilidade para projetos específicos, detalhadas em <a href="/servicos">serviços</a>, e mantém um portefólio de ativos em diferentes fases disponível em <a href="/portfolio">portefólio</a>. Para acompanhar atualizações de benchmarks ao longo do ano, pode subscrever a newsletter ou consultar o <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a> e o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia de reabilitação urbana em Portugal</a>.',
    },
  ],
  faq: [
    {
      q: 'Qual é o cap rate médio em Lisboa para imóveis reabilitados em 2026?',
      a: 'O cap rate bruto médio em Lisboa situa-se entre 3,2 % e 5,8 %, dependendo da freguesia. Misericórdia e Santa Maria Maior estão na banda inferior; Marvila e Beato na superior. O cap rate líquido fica 1,2–1,8 pp abaixo do bruto.',
    },
    {
      q: 'Qual a freguesia de Lisboa com melhor cap rate em 2026?',
      a: 'Beato e Marvila registam os cap rates brutos mais elevados (4,9–5,8 %), com custos de aquisição e obra ainda 40–50 % abaixo das zonas históricas. O contrabalanço é menor liquidez na saída e tempo de colocação mais longo.',
    },
    {
      q: 'Como a isenção de IMI em ARU afeta o retorno do investimento?',
      a: 'A isenção temporária de IMI até 5 anos (artigo 45.º do EBF) em reabilitação qualificada representa uma poupança de 0,3–0,45 % do VPT anual, o que pode melhorar o cap rate líquido em 0,2–0,4 pp, dependendo do valor patrimonial.',
    },
    {
      q: 'O cap rate é suficiente para avaliar um investimento em reabilitação?',
      a: 'Não. O cap rate mede o rendimento corrente mas ignora valorização de capital, estrutura de financiamento e custo de saída. Deve ser complementado com TIR do projeto, análise de sensibilidade e avaliação de liquidez da zona.',
    },
    {
      q: 'Qual a diferença entre cap rate bruto e cap rate líquido em Lisboa?',
      a: 'O cap rate bruto usa as rendas brutas; o líquido deduz IMI, vacância, manutenção e seguro. Em Lisboa, essa diferença é de 1,2–1,8 pontos percentuais. Um bruto de 4,8 % corresponde tipicamente a um líquido de 3,2–3,6 %.',
    },
    {
      q: 'Arroios é melhor do que Misericórdia para investimento em 2026?',
      a: 'Para cap rate, sim: Arroios oferece 4,2–5,0 % bruto face a 3,2–3,8 % em Misericórdia. Para valorização de capital e liquidez de saída, Misericórdia tem histórico mais sólido. A escolha depende do perfil de retorno — yield corrente vs. mais-valia.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. Os benchmarks de cap rate apresentados são estimativas baseadas em dados de mercado disponíveis até março de 2026 e podem variar significativamente consoante o ativo, a estrutura de custos e as condições de arrendamento concretas. Consulte profissionais qualificados antes de decisões de investimento.',
};
