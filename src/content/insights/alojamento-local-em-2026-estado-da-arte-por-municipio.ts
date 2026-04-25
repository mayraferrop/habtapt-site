import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'alojamento-local-em-2026-estado-da-arte-por-municipio',
  title: 'Alojamento local em 2026: estado da arte por município',
  description:
    'Regras, quotas e suspensões de alojamento local em Portugal em 2026 — município a município. O que mudou com a Lei n.º 56/2023 e o que esperar a seguir.',
  category: 'Regulamentação',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Jurídica',
  date: '2026-04-25',
  updated_at: '2026-04-25',
  excerpt:
    'O regime do alojamento local em Portugal varia hoje município a município — perceba o que está em vigor em Lisboa, Porto e Cascais antes de investir ou registar.',
  image: 'https://images.unsplash.com/photo-1721244654394-36a7bc2da288${UNSPLASH_PARAMS}',
  tags: [
    'alojamento local Portugal 2026',
    'regulamentação alojamento local Lisboa',
    'suspensão alojamento local Porto',
    'Mais Habitação alojamento local',
    'licença alojamento local 2026',
  ],
  tldr: [
    'A Lei n.º 56/2023 (Mais Habitação) introduziu quotas municipais, taxas de sustentabilidade e suspensão de novos registos em zonas de pressão — Lisboa e Porto incluídas.',
    'Em Lisboa, a emissão de novos registos de AL em frações autónomas em AUGI e zonas de contenção está suspensa desde outubro de 2023; reavaliações ocorrem de 2 em 2 anos.',
    'No Porto, a câmara delimitou zonas de contenção cobrindo Bonfim, Cedofeita e parte da Baixa; fora dessas zonas, os registos continuam possíveis com condicionamentos.',
    'Em Cascais, não há suspensão generalizada em 2026, mas o município aplica a taxa de sustentabilidade de 15% sobre as dormidas e exige notificação prévia à condominialidade.',
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
        'O alojamento local em Portugal entrou em 2026 num período de estabilização regulatória — mas essa estabilização é profundamente assimétrica. O que é permitido em Cascais pode estar suspenso em Alfama. Antes de adquirir, registar ou renovar, o enquadramento municipal concreto é o primeiro passo obrigatório.',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023, conhecida como «Mais Habitação», redesenhou o regime do alojamento local em Portugal ao introduzir três instrumentos novos: zonas de contenção com capacidade para suspender registos, taxas de sustentabilidade sobre dormidas e um mecanismo de reavaliação obrigatória de 2 em 2 anos. O impacto varia radicalmente conforme o município e, dentro de cada município, conforme a zona.',
    },
    {
      type: 'heading2',
      content: 'O que mudou com a Lei n.º 56/2023 no alojamento local?',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023 alterou o Decreto-Lei n.º 128/2014 em pontos estruturais. Os municípios passaram a poder declarar zonas de contenção onde a emissão de novos registos de alojamento local é suspensa. A suspensão é reavaliada a cada dois anos e pode ser levantada se os indicadores de pressão habitacional melhorarem. Simultaneamente, foi introduzida uma taxa de sustentabilidade calculada por dormida, com receita consignada a fundos municipais de habitação acessível.',
    },
    {
      type: 'list',
      content: [
        'Suspensão de novos registos em frações autónomas em zonas de contenção declaradas pelos municípios.',
        'Taxa de sustentabilidade de 15% sobre o valor das dormidas nas zonas de pressão — obrigação do operador.',
        'Reavaliação obrigatória de todos os registos existentes em zonas de contenção a cada 2 anos.',
        'Eliminação da transmissão automática do registo AL em atos de compra e venda — o registo cessa com a transmissão.',
        'Reforço dos poderes de fiscalização das câmaras municipais, com coimas até 4.000 € por infração.',
      ],
    },
    {
      type: 'heading2',
      content: 'Qual é o estado do alojamento local em Lisboa em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Em Lisboa, a Câmara Municipal suspendeu a emissão de novos registos de AL em frações autónomas na totalidade do município desde outubro de 2023. A suspensão abrange as freguesias históricas — Alfama, Santa Maria Maior, Misericórdia, Santo António — e estende-se às restantes 24 freguesias da cidade. Os registos existentes à data da suspensão mantêm-se válidos, mas não são transmissíveis.',
    },
    {
      type: 'paragraph',
      content:
        'A primeira reavaliação obrigatória ocorreu no primeiro trimestre de 2025. A Câmara Municipal de Lisboa manteve a suspensão com base nos indicadores do INE e do Observatório de Habitação, que apontavam para uma taxa de esforço média das famílias lisboetas acima de 38% do rendimento disponível. A próxima reavaliação está agendada para o primeiro trimestre de 2027.',
    },
    {
      type: 'heading3',
      content: 'Exceções ao bloqueio em Lisboa',
    },
    {
      type: 'list',
      content: [
        'Moradia unifamiliar (vivenda): não sujeita a suspensão — pode registar-se como AL independentemente da zona.',
        'Estabelecimentos de hospedagem (hostels, hotéis): regimes distintos, fora do âmbito do AL de fração autónoma.',
        'Imóveis em processo de reabilitação qualificada com licença de obra emitida antes de outubro de 2023: isenção transitória até conclusão e vistoria.',
        'Quintas e turismo rural fora do perímetro urbano: não abrangidos pela suspensão municipal.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como está o alojamento local no Porto em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'No Porto, a câmara optou por um modelo de contenção parcial em vez de suspensão total. Foram delimitadas zonas de contenção cobrindo as freguesias de Bonfim, Cedofeita, Massarelos e parte da Baixa — áreas onde a densidade de AL atingia, em 2023, mais de 15% do parque habitacional total segundo dados da Porto Vivo, SRU. Fora dessas zonas, os registos são possíveis, mas sujeitos a condicionamentos adicionais.',
    },
    {
      type: 'table',
      content: {
        headers: ['Município / Zona', 'Situação em 2026', 'Taxa de sustentabilidade', 'Reavaliação prevista'],
        rows: [
          ['Lisboa — todas as freguesias', 'Suspensão total de novos registos em fração autónoma', '15% por dormida', 'T1 2027'],
          ['Porto — zonas de contenção (Bonfim, Cedofeita, Baixa)', 'Suspensão de novos registos em fração autónoma', '15% por dormida', 'T2 2027'],
          ['Porto — restantes zonas', 'Registos permitidos com notificação ao condomínio', '15% por dormida', 'T2 2027'],
          ['Cascais — todo o município', 'Sem suspensão; registos permitidos com condicionamentos', '15% por dormida', 'T3 2027'],
          ['Sintra — zonas históricas', 'Contenção parcial em Sintra Vila e Colares', '15% por dormida', 'T4 2026'],
          ['Comporta / Grândola', 'Sem suspensão; registo livre mediante RNAL', '15% por dormida', '2027'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Cascais mantém o alojamento local aberto — com que condições?',
    },
    {
      type: 'paragraph',
      content:
        'Cascais não declarou zonas de contenção em 2026, tornando-se um dos poucos concelhos da Área Metropolitana de Lisboa onde o registo de AL em fração autónoma continua acessível. A câmara municipal exige, contudo, notificação prévia ao condomínio — com prazo de oposição de 30 dias — e a taxa de sustentabilidade de 15% sobre as dormidas aplica-se na totalidade do concelho.',
    },
    {
      type: 'paragraph',
      content:
        'Nas freguesias de Estoril e Cascais-Estoril, a pressão turística tem crescido e a câmara sinalizou, no relatório de revisão do PDM de 2025, que poderá declarar zonas de contenção parciais caso a densidade de AL supere 12% do parque habitacional. Esse limiar não foi atingido à data desta publicação.',
    },
    {
      type: 'heading2',
      content: 'O que significa a não-transmissibilidade do registo AL para quem compra?',
    },
    {
      type: 'paragraph',
      content:
        'Esta é a alteração com maior impacto para investidores. Desde a Lei n.º 56/2023, o registo de alojamento local caduca automaticamente com a transmissão da propriedade — seja por compra e venda, doação ou herança. O comprador não herda o registo; tem de requerer um novo. Mas em municípios com suspensão, esse novo registo não pode ser emitido.',
    },
    {
      type: 'quote',
      content:
        'Analisámos em 2025 mais de trinta propostas de aquisição onde o valor de venda era justificado, pelo vendedor, com o rendimento de AL existente. Em todos os casos em Lisboa, esse rendimento não era transferível. O comprador adquiria um imóvel residencial a preço de AL — uma diferença de valorização que pode atingir 20 a 35% por metro quadrado.',
      source: {
        name: 'Equipa Jurídica HABTA',
        role: 'Análise de due diligence 2025',
      },
    },
    {
      type: 'heading2',
      content: 'Como se calcula e cobra a taxa de sustentabilidade?',
    },
    {
      type: 'paragraph',
      content:
        'A taxa de sustentabilidade incide sobre o valor de cada dormida praticada pelo estabelecimento de AL. A taxa base é de 15%, aplicada pelo município sobre a receita declarada pelo operador. O operador é responsável pela liquidação trimestral junto da câmara municipal da localização do imóvel. O não cumprimento configura infração contraordenacional com coima até 4.000 €.',
    },
    {
      type: 'list',
      content: [
        'Base de incidência: valor bruto das dormidas, sem deduções de comissões de plataforma.',
        'Periodicidade de declaração e pagamento: trimestral, nos 30 dias seguintes ao fim do trimestre.',
        'Entidade recetora: câmara municipal da localização — não a Autoridade Tributária.',
        'Afetação da receita: obrigatoriamente consignada a fundo municipal de habitação acessível.',
        'Isenção: não existe isenção por dimensão ou receita do operador; aplica-se igualmente a operadores individuais e empresas.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais os municípios fora de Lisboa e Porto com maior restrição em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Para além de Lisboa e Porto, outros municípios declararam zonas de contenção parciais com impacto relevante para investidores. Sintra aplicou contenção nas zonas históricas de Sintra Vila e Colares. Óbidos — cujo centro histórico tem uma densidade turística anormalmente elevada para a sua dimensão — suspendeu novos registos em fração autónoma dentro das muralhas. Lagos e Albufeira, no Algarve, declararam zonas de contenção sazonais que operam entre março e novembro.',
    },
    {
      type: 'heading3',
      content: 'Municípios sem contenção declarada (situação à data)',
    },
    {
      type: 'list',
      content: [
        'Cascais: sem suspensão, com taxa de sustentabilidade e notificação ao condomínio.',
        'Setúbal: sem zonas de contenção declaradas — registo mediante RNAL padrão.',
        'Évora: sem suspensão no centro histórico, mas câmara em processo de revisão do PDM com possível declaração em 2026.',
        'Grândola / Comporta: sem suspensão; zona de elevado apetite de investimento com baixa densidade de AL.',
        'Braga: sem contenção; cidade universitária com perfil de AL distinto do turístico costeiro.',
      ],
    },
    {
      type: 'heading2',
      content: 'O que verificar antes de registar ou adquirir um AL em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'A análise pré-decisão tem de cobrir pelo menos seis vetores. A fiscalização do IMPIC intensificou-se desde 2024 e as plataformas digitais são obrigadas a reportar dados de operadores ao Fisco trimestralmente — o risco de incumprimento não declarado aumentou significativamente.',
    },
    {
      type: 'list',
      content: [
        'Confirmar se o município e a freguesia concreta têm zona de contenção declarada — consultar o portal da câmara e o Balcão do Empreendedor (ePortugal).',
        'Verificar se o registo existente é transmissível ou caduca com a escritura — pedido de informação escrita ao RNAL (Registo Nacional de Alojamento Local).',
        'Consultar o título constitutivo da propriedade horizontal para identificar possível proibição de AL votada em assembleia de condóminos.',
        'Calcular o impacto da taxa de sustentabilidade de 15% no rendimento líquido projetado.',
        'Verificar enquadramento fiscal: IRS categoria B (regime simplificado ou contabilidade organizada) ou tributação autónoma em sede de IRC se via sociedade.',
        'Confirmar conformidade técnica com os requisitos do DL n.º 128/2014 atualizado: extintores, plantas, livro de reclamações, seguro de responsabilidade civil.',
      ],
    },
    {
      type: 'callout',
      content:
        'Um registo de AL em zona de contenção de Lisboa pode valer zero para um comprador novo — mesmo que o imóvel esteja a gerar rendimento no momento da venda. Esta distinção entre valor de AL do atual proprietário e valor de AL transferível ao comprador é o equívoco mais caro que identificamos nas análises que fazemos para os nossos parceiros.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para proprietários e investidores',
    },
    {
      type: 'paragraph',
      content:
        'Se está a ponderar adquirir, registar ou transmitir um imóvel com vocação para alojamento local em Portugal, a nossa equipa jurídica, descrita em <a href="/servicos">serviços</a>, realiza análises de viabilidade que cobrem o enquadramento municipal atual, a transmissibilidade do registo e o impacto fiscal da taxa de sustentabilidade. Pode também consultar o nosso <a href="/portfolio">portefólio</a> para exemplos de projetos onde o enquadramento AL foi validado antes da aquisição. Para acompanhar as reavaliações municipais previstas para 2027, subscreva a nossa newsletter — publicamos uma actualização sempre que um município altera o estatuto das suas zonas de contenção.',
    },
  ],
  faq: [
    {
      q: 'Posso registar um novo AL em Lisboa em 2026?',
      a: 'Não, para frações autónomas. A Câmara Municipal de Lisboa mantém a suspensão de novos registos em frações autónomas desde outubro de 2023, com reavaliação prevista para o primeiro trimestre de 2027. Moradias unifamiliares são exceção.',
    },
    {
      q: 'O registo de AL transfere-se quando compro um imóvel?',
      a: 'Não. Desde a Lei n.º 56/2023, o registo de alojamento local caduca automaticamente com qualquer transmissão de propriedade. O comprador tem de requerer um novo registo — o que em zonas de contenção não é possível.',
    },
    {
      q: 'Qual é a taxa de sustentabilidade do alojamento local em 2026?',
      a: 'A taxa é de 15% sobre o valor bruto das dormidas, paga trimestralmente pelo operador à câmara municipal da localização do imóvel. Não existe isenção por volume de negócios ou dimensão do operador.',
    },
    {
      q: 'O Porto tem suspensão total de novos registos de AL?',
      a: 'Não total. O Porto tem zonas de contenção declaradas em Bonfim, Cedofeita, Massarelos e parte da Baixa. Fora dessas zonas, o registo de AL em fração autónoma é possível, com notificação ao condomínio.',
    },
    {
      q: 'Um condomínio pode proibir o alojamento local no edifício?',
      a: 'Sim. Desde a Lei n.º 56/2023, a assembleia de condóminos pode, por maioria simples dos votos representativos do valor total do prédio, opor-se ao exercício de AL em frações autónomas. A oposição é registada no RNAL.',
    },
    {
      q: 'Cascais permite alojamento local sem restrições em 2026?',
      a: 'Cascais permite o registo de AL em frações autónomas, mas exige notificação prévia ao condomínio com prazo de oposição de 30 dias e aplica a taxa de sustentabilidade de 15%. Não foram declaradas zonas de contenção até abril de 2026.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. O regime do alojamento local em Portugal está sujeito a alterações municipais frequentes, incluindo declarações e levantamentos de zonas de contenção. As situações descritas correspondem ao estado da arte em abril de 2026 e podem ter sido alteradas posteriormente. Consulte profissionais qualificados antes de decisões concretas.',
};
