import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'o-mapa-do-investimento-que-cidades-portuguesas-crescem',
  title: 'Que cidades portuguesas crescem para investimento em 2026',
  description:
    'Lisboa, Porto, Cascais e mercados emergentes como Braga e Setúbal: análise comparativa dos fatores que impulsionam a valorização imobiliária em Portugal em 2026.',
  category: 'Mercado',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-23',
  updated_at: '2026-04-23',
  excerpt:
    'Um mapa atualizado dos mercados imobiliários portugueses com maior potencial de valorização em 2026 — e os fatores estruturais que sustentam cada cidade.',
  image: 'https://images.unsplash.com/photo-1688297483354-3057315926a1${UNSPLASH_PARAMS}',
  tags: [
    'mercado imobiliário Portugal 2026',
    'cidades portuguesas investimento imobiliário',
    'valorização imóveis Lisboa Porto',
    'mercados emergentes imobiliário Portugal',
    'onde investir em imóveis Portugal',
  ],
  tldr: [
    'Lisboa e Porto lideram em volume e liquidez, com preços médios acima de 4 500 €/m² e 3 200 €/m² respetivamente, mas as yields líquidas comprimiram-se para 3–4%.',
    'Braga, Setúbal e a Área Metropolitana do Porto (Matosinhos, Maia) oferecem yields de 5–6% e crescimento de preços de dois dígitos nos últimos 24 meses.',
    'Os três motores de crescimento partilhados são: chegada de população ativa (nacional e estrangeira), défice de oferta nova e melhoria de infraestruturas de transporte.',
    'Cascais mantém-se o mercado premium do Arco Atlântico, com procura internacional sustentada e escassez de licenças novas em frente-mar.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-23',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Portugal tem mais de 300 municípios, mas o investimento imobiliário relevante concentra-se em menos de 20. Perceber quais crescem — e porquê — é o primeiro filtro de qualquer análise séria. Este artigo mapeia os mercados com maior dinâmica em 2026, com dados de transações, yields estimadas e os fatores estruturais que sustentam cada um.',
    },
    {
      type: 'paragraph',
      content:
        'O mercado imobiliário português não é homogéneo. Enquanto algumas cidades registaram valorização acumulada superior a 40% entre 2021 e 2025 (fonte: INE, Índice de Preços da Habitação), outras estagnaram ou perderam atratividade. A diferença reside em três variáveis: dinâmica demográfica, défice de oferta e acessibilidade a infraestruturas.',
    },
    {
      type: 'heading2',
      content: 'Lisboa ainda lidera — mas o mercado tornou-se seletivo',
    },
    {
      type: 'paragraph',
      content:
        'Lisboa permanece o mercado de maior liquidez e profundidade em Portugal. O preço médio por metro quadrado na capital superou os 4 500 €/m² em transações registadas pelo INE no final de 2025, com bairros como o Chiado, a Misericórdia e o Príncipe Real a negociar entre 6 000 €/m² e 8 500 €/m² em frações reabilitadas.',
    },
    {
      type: 'paragraph',
      content:
        'A compressão de yield é real: arrendamentos de longa duração em Lisboa situam-se, na generalidade, entre 3,0% e 4,2% líquidos após encargos. Quem procura retornos acima de 5% tem de orientar a procura para freguesias menos centrais — Benfica, Olivais, Marvila — ou para tipologias específicas como coliving e habitação para estudantes.',
    },
    {
      type: 'heading2',
      content: 'O Porto mantém crescimento estrutural — onde se concentra o valor?',
    },
    {
      type: 'paragraph',
      content:
        'O Porto ultrapassou os 3 200 €/m² de média municipal em 2025, com Cedofeita, Bonfim e Miragaia a liderar em tipologias reabilitadas. A dinâmica é suportada por três fatores: crescimento do turismo urbano, chegada de nómadas digitais e expansão da base tecnológica local.',
    },
    {
      type: 'paragraph',
      content:
        'A Porto Vivo, SRU tem mantido uma agenda ativa de reabilitação no centro histórico, criando zonas com enquadramento fiscal favorável (ARU). Fora do centro, o Bonfim e Campanhã concentram a maioria dos projetos de reabilitação com melhor rácio custo de entrada / valorização esperada — precisamente porque os preços de aquisição ainda não acompanharam o crescimento do Chiado portuense.',
    },
    {
      type: 'heading2',
      content: 'Cascais: mercado premium com escassez de oferta nova',
    },
    {
      type: 'paragraph',
      content:
        'Cascais é o mercado de referência para investidores que combinam residência e rendimento. Os preços em Cascais-vila, Estoril e São João do Estoril situam-se entre 5 000 €/m² e 9 000 €/m² para produto de qualidade, sustentados por procura internacional (britânicos, franceses, brasileiros de alta renda) e pelo Plano Diretor Municipal que restringe construção nova em frente-mar.',
    },
    {
      type: 'paragraph',
      content:
        'A yield de arrendamento é inferior à média nacional (2,5–3,5%), mas a valorização de capital compensou historicamente. Entre 2020 e 2025, o preço mediano em Cascais cresceu aproximadamente 38%, segundo dados de transações registados pelo INE.',
    },
    {
      type: 'heading2',
      content: 'Braga: o mercado de maior surpresa positiva dos últimos três anos',
    },
    {
      type: 'paragraph',
      content:
        'Braga tornou-se o caso de estudo mais citado em análises de mercado imobiliário português. Entre 2022 e 2025, o preço mediano de transação cresceu cerca de 52%, impulsionado por três vetores: crescimento da Universidade do Minho (mais de 22 000 estudantes), instalação de empresas tecnológicas internacionais e migração interna de Lisboa e Porto em busca de custo de vida inferior.',
    },
    {
      type: 'list',
      content: [
        'Preço médio em Braga cidade: aproximadamente 2 100 €/m² (2025), com potencial de convergência para os 2 600–2 800 €/m² no médio prazo.',
        'Yield bruta em arrendamento de longa duração: 5,5–6,5%, acima da média das duas grandes cidades.',
        'Défice de oferta nova na tipologia T1/T2 para estudantes e jovens profissionais.',
        'Crescimento demográfico positivo — uma das poucas cidades do interior com saldo migratório líquido positivo nos últimos cinco anos.',
        'Enquadramento municipal favorável com ARU delimitadas no centro histórico.',
      ],
    },
    {
      type: 'heading2',
      content: 'Área Metropolitana do Porto: Matosinhos e Maia em destaque',
    },
    {
      type: 'paragraph',
      content:
        'Matosinhos consolidou-se como alternativa ao Porto para quem procura qualidade de vida, proximidade ao mar e preços ainda 20–25% abaixo dos bairros equivalentes do Porto. O Metro do Porto conecta Matosinhos Sul ao centro em menos de 15 minutos, fator decisivo para arrendatários e compradores.',
    },
    {
      type: 'paragraph',
      content:
        'A Maia beneficia da proximidade ao Aeroporto Francisco Sá Carneiro e da localização de hubs logísticos e industriais, criando procura específica para habitação de segmento médio para trabalhadores qualificados. Os preços médios rondavam os 1 900–2 200 €/m² em 2025, com yields acima de 5,5%.',
    },
    {
      type: 'heading3',
      content: 'Fatores que diferenciam os municípios em crescimento',
    },
    {
      type: 'list',
      content: [
        'Saldo demográfico positivo — municípios que atraem população ativa comprimem a oferta disponível.',
        'Investimento público em infraestruturas de mobilidade: metro, ferrovia, via rápida.',
        'Presença de ensino superior com capacidade de atração nacional e internacional.',
        'Base empresarial diversificada — dependência excessiva do turismo cria volatilidade.',
        'Municípios com PDM atualizado e licenciamento previsível reduzem o risco de execução.',
        'Existência de ARU delimitadas com incentivos fiscais operacionais.',
      ],
    },
    {
      type: 'heading2',
      content: 'Setúbal e a Margem Sul: mercado a observar em 2026',
    },
    {
      type: 'paragraph',
      content:
        'A Área Metropolitana de Lisboa Sul — Almada, Setúbal, Barreiro — permanece subavaliada face à margem norte. O Barreiro e o Montijo beneficiam da proximidade a Lisboa através da travessia do Tejo, e a eventual conclusão da ligação ferroviária ao Aeroporto Humberto Delgado pode alterar substancialmente a atratividade da margem sul nos próximos cinco anos.',
    },
    {
      type: 'paragraph',
      content:
        'Almada, em particular a Cova da Piedade e o Pragal, regista yields brutas entre 5,8% e 7,0%, tornando-se uma opção para investidores dispostos a aceitar menor liquidez imediata em troca de retorno corrente mais elevado.',
    },
    {
      type: 'table',
      content: {
        headers: ['Mercado', 'Preço médio (€/m²)', 'Yield bruta estimada', 'Crescimento 2021–2025', 'Perfil de risco'],
        rows: [
          ['Lisboa (centro)', '4 500 – 8 500', '3,0 – 4,2%', '+38%', 'Baixo risco, liquidez alta'],
          ['Porto (Bonfim/Cedofeita)', '3 000 – 4 800', '3,8 – 5,0%', '+42%', 'Baixo-médio, crescimento estável'],
          ['Cascais', '5 000 – 9 000', '2,5 – 3,5%', '+38%', 'Baixo, procura internacional'],
          ['Braga', '1 900 – 2 500', '5,5 – 6,5%', '+52%', 'Médio, crescimento acelerado'],
          ['Matosinhos', '2 200 – 3 200', '4,5 – 5,8%', '+36%', 'Baixo-médio, proximidade ao Porto'],
          ['Almada / Margem Sul', '1 800 – 2 800', '5,8 – 7,0%', '+29%', 'Médio, menor liquidez'],
        ],
      },
    },
    {
      type: 'quote',
      content:
        'Os mercados que mais crescem não são necessariamente os mais caros — são os que combinam défice de oferta com chegada de população ativa. Braga e Matosinhos partilham esse perfil com Lisboa de há dez anos. A diferença é que ainda têm espaço para convergência de preços.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de mercado Q1 2026',
      },
    },
    {
      type: 'heading2',
      content: 'Que riscos sistémicos podem travar o crescimento?',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023 (Mais Habitação) introduziu restrições ao alojamento local e mecanismos de controlo de rendas que alteraram os cálculos de rentabilidade em vários mercados. Investidores com estratégia de arrendamento de curta duração devem verificar o estado do registo municipal de AL e os limites de licenças por freguesia antes de avançar.',
    },
    {
      type: 'paragraph',
      content:
        'A subida das taxas de juro entre 2022 e 2024 comprimiu a acessibilidade de compradores financiados, mas a descida gradual da Euribor em 2025 reativou a procura. O Banco de Portugal acompanha de perto os rácios de endividamento das famílias, e qualquer nova restrição macroprudencial afetaria primeiro os mercados mais alavancados.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores',
    },
    {
      type: 'paragraph',
      content:
        'Se está a definir uma estratégia de alocação geográfica e quer perceber qual o mercado mais adequado ao seu perfil de retorno e risco, a nossa equipa de investimento, descrita em <a href="/servicos">serviços</a>, realiza análises comparativas por cidade, tipologia e horizonte temporal. Pode também consultar o nosso <a href="/portfolio">portefólio</a> para ver projetos ativos em Lisboa, Porto e Cascais. Para aprofundar, leia o <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a> e a análise sobre <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">reabilitação urbana em Portugal</a>. Subscreva a newsletter para receber atualizações de mercado mensais.',
    },
  ],
  faq: [
    {
      q: 'Qual a cidade portuguesa com melhor yield imobiliária em 2026?',
      a: 'Braga e Almada oferecem as yields brutas mais elevadas, entre 5,5% e 7,0%. Lisboa e Cascais comprimiram para 2,5–4,2%, mas compensam em liquidez e valorização de capital historicamente mais estável.',
    },
    {
      q: 'Lisboa ainda vale a pena para investimento imobiliário?',
      a: 'Sim, mas a seleção é crítica. O valor acrescido está em reabilitação de qualidade em microlocalizações específicas — Bairro Alto, Intendente, Marvila — e em tipologias com défice de oferta como T1 de uso misto ou habitação para estudantes.',
    },
    {
      q: 'Porque cresceu Braga mais do que a média nacional?',
      a: 'Combinação de três fatores: expansão do ensino superior (mais de 22 000 estudantes), instalação de empresas tecnológicas internacionais e migração interna de Lisboa e Porto. O défice de oferta nova amplificou o crescimento de preços.',
    },
    {
      q: 'O que mudou no alojamento local após a Lei Mais Habitação?',
      a: 'A Lei n.º 56/2023 suspendeu novas licenças de AL em zonas de pressão urbanística e criou mecanismos de controlo de rendas. Investidores com estratégia de AL devem verificar o estado do registo e os limites por freguesia antes de qualquer aquisição.',
    },
    {
      q: 'Vale a pena investir na Margem Sul de Lisboa?',
      a: 'A Margem Sul oferece yields superiores (5,8–7,0%) a preços de entrada mais baixos, mas com menor liquidez. Almada e o Montijo são as apostas mais sustentadas, especialmente se a nova travessia ferroviária do Tejo avançar conforme previsto.',
    },
    {
      q: 'Onde estão as ARU mais ativas em Portugal?',
      a: 'Lisboa (CML), Porto (Porto Vivo, SRU), Braga, Coimbra e Guimarães têm as ARU mais operacionais com incentivos fiscais ativos — IVA a 6% em obras qualificadas e isenções temporárias de IMI. Cada câmara publica a delimitação atualizada no seu portal.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. Os valores de preço e yield indicados são estimativas baseadas em dados de mercado disponíveis até à data de publicação e podem não refletir condições específicas de cada imóvel ou transação. Consulte profissionais qualificados antes de decisões concretas de investimento.',
};
