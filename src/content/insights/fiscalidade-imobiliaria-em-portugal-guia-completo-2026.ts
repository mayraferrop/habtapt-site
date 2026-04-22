import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'fiscalidade-imobiliaria-em-portugal-guia-completo-2026',
  title: 'Fiscalidade imobiliária em Portugal: guia completo 2026',
  description:
    'Um guia prático sobre a fiscalidade do investimento imobiliário em Portugal em 2026 — IMT, IMI, AIMI, IVA em obras, mais-valias, rendas, benefícios fiscais em ARU e estruturação via pessoa singular ou sociedade.',
  category: 'Regulamentação',
  readTime: '21 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Fiscal e Jurídica',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'IMT, IMI, AIMI, IVA, mais-valias, IRS F e benefícios em ARU — o guia HABTA para entender, em 2026, a fiscalidade que move (ou destrói) a rentabilidade de um investimento imobiliário em Portugal.',
  image: 'https://images.unsplash.com/photo-1712696779652-dfca8766c5f8?w=1600&q=80&auto=format&fit=crop',
  tags: [
    'fiscalidade imobiliária Portugal 2026',
    'IMT Portugal 2026',
    'IMI Portugal',
    'AIMI',
    'IVA obras reabilitação',
    'mais-valias imobiliárias IRS',
    'benefícios fiscais ARU',
    'IRS categoria F',
    'arrendamento duradouro IRS',
    'RNH 2.0 IFICI',
  ],
  tldr: [
    'A fiscalidade move mais retorno no imobiliário português do que a maioria dos investidores assume — um bom planeamento vale tanto como uma boa compra.',
    'IMT é progressivo e pode chegar a 7,5%; IMI municipal oscila entre 0,3% e 0,45%; AIMI agrava patrimónios acima de 600 mil euros.',
    'IVA em obras de reabilitação em ARU passa de 23% para 6% quando cumpre os critérios de reabilitação qualificada — é o maior benefício prático em 2026.',
    'Mais-valias em IRS tributam 50% do ganho à taxa marginal (residentes) ou 28% flat (não residentes); reinvestimento em habitação própria permanente continua a neutralizar imposto.',
    'Pessoa singular vs sociedade: não há resposta universal — depende de volume, horizonte e perfil fiscal do investidor.',
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
        'A fiscalidade imobiliária portuguesa parece intimidante à distância — seis impostos diferentes, uma dúzia de isenções, regimes especiais para ARU e não residentes. Na prática, quem investe com método percebe que estes pontos fiscais são os que mais movem retorno real. Este guia consolida o essencial de 2026, sem floreados.',
    },
    {
      type: 'paragraph',
      content:
        'Depois de acompanhar mais de cem projetos de investimento em imóveis em Portugal, uma conclusão impõe-se: a diferença entre um bom e um mau ano de retorno cabe frequentemente dentro do capítulo fiscal. Um imóvel comprado em Área de Reabilitação Urbana com IVA a 6%, isenção temporária de IMI e planeamento cuidado de mais-valias pode entregar 3 a 5 pontos percentuais adicionais face a exatamente o mesmo imóvel fora do perímetro. Não é magia — é enquadramento.',
    },
    {
      type: 'paragraph',
      content:
        'Este guia organiza o essencial da fiscalidade imobiliária em Portugal em 2026, pensado para quem investe e não para quem faz teoria. Cobrimos os seis impostos que realmente mexem com o retorno (IMT, IMI, AIMI, IVA, IRS mais-valias e IRS categoria F), os benefícios fiscais em ARU, a questão da estruturação (pessoa singular vs sociedade) e o que muda com o IFICI — o sucessor do RNH. No final, três cenários práticos e os erros que custam mais caro.',
    },
    {
      type: 'paragraph',
      content:
        'Se está a considerar investir em Portugal, leia também o nosso <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">Guia completo para investir em imóveis em Portugal 2026</a>, o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">Guia da reabilitação urbana em Portugal</a> e a peça sobre <a href="/blog/areas-de-reabilitacao-urbana-aru-como-confirmar-se">como confirmar se um imóvel está dentro de uma ARU</a>.',
    },
    {
      type: 'heading2',
      content: 'A base fiscal do investimento imobiliário em Portugal',
    },
    {
      type: 'paragraph',
      content:
        'Três momentos fiscais organizam a vida de qualquer imóvel investimento em Portugal: compra, detenção e saída. Na compra paga-se IMT e imposto de selo. Na detenção paga-se IMI anualmente, eventualmente AIMI, e pagam-se impostos sobre rendimentos (IRS categoria F ou IRC, consoante a estrutura). Na saída tributam-se mais-valias — com ou sem possibilidade de reinvestimento. Em paralelo, o IVA aparece em obras e pode ser reduzido a 6% em contexto de reabilitação urbana qualificada.',
    },
    {
      type: 'paragraph',
      content:
        'Cada um destes pontos admite isenções, reduções e regimes especiais — particularmente para imóveis localizados em Áreas de Reabilitação Urbana (ARU). Por isso o planeamento fiscal deve começar antes da escritura, não depois: alterar a estrutura já a meio do projeto é quase sempre caro, tardio ou impossível.',
    },
    {
      type: 'heading2',
      content: '1. IMT — o imposto da compra',
    },
    {
      type: 'paragraph',
      content:
        'O Imposto Municipal sobre Transmissões Onerosas de Imóveis (IMT) incide no momento da compra. É progressivo, calculado por escalões sobre o valor que constar da escritura (ou sobre o Valor Patrimonial Tributário, se superior). Varia conforme o imóvel seja para habitação própria e permanente, habitação secundária, comercial ou terreno para construção — e as taxas aplicáveis em 2026 mantêm a estrutura progressiva com atualização anual dos escalões.',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipo de imóvel', 'Valor de compra', 'Taxa IMT (ordem de grandeza)'],
        rows: [
          ['Habitação própria e permanente', 'Até ~105 mil €', '0%'],
          ['Habitação própria e permanente', '~105 mil–1 milhão €', '2% a 7% progressivo'],
          ['Habitação própria e permanente', '> 1 milhão €', '7,5% taxa única sobre o excedente'],
          ['Habitação secundária / investimento', 'Qualquer valor', '1% a 7,5% progressivo'],
          ['Prédio urbano comercial / serviços', 'Qualquer valor', '6,5% taxa única'],
          ['Terrenos para construção', 'Qualquer valor', '5% taxa única (em regra)'],
          ['Prédios rústicos', 'Qualquer valor', '5% taxa única'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Os escalões de IMT são atualizados anualmente — os valores acima são referência qualitativa de 2026. Para um cálculo exato no seu caso concreto, confirme os escalões publicados para o ano fiscal em que pretende escriturar. A diferença entre ficar dois mil euros abaixo ou acima de um escalão pode valer vários milhares de euros em imposto.',
    },
    {
      type: 'heading3',
      content: 'Isenção de IMT em reabilitação urbana',
    },
    {
      type: 'paragraph',
      content:
        'Um dos incentivos mais fortes em 2026: imóveis adquiridos para reabilitação em Áreas de Reabilitação Urbana podem beneficiar de isenção temporária de IMT, desde que a intervenção cumpra os critérios de reabilitação qualificada do regime jurídico. A isenção é tipicamente concedida por um período de anos e sujeita a confirmação posterior pelo município. Em projetos de fix-and-flip bem enquadrados, esta isenção pode representar 5 a 7 por cento do valor da compra — diretamente somados à margem.',
    },
    {
      type: 'heading2',
      content: '2. IMI — o imposto anual de detenção',
    },
    {
      type: 'paragraph',
      content:
        'O Imposto Municipal sobre Imóveis (IMI) é pago anualmente sobre o Valor Patrimonial Tributário (VPT) inscrito nas Finanças. A taxa é definida por cada município dentro do intervalo legal — tipicamente entre 0,3% e 0,45% para prédios urbanos avaliados ao abrigo do Código do IMI, e 0,8% para rústicos. Em Lisboa e no Porto, em 2026, a prática tem sido taxar perto do mínimo do intervalo urbano.',
    },
    {
      type: 'paragraph',
      content:
        'O IMI tem uma particularidade que muitos investidores ignoram: o VPT está frequentemente desatualizado. Um imóvel comprado hoje por 600 mil euros pode ter um VPT inscrito de 220 mil. Após a compra, quando o imóvel entra em obra ou muda de classificação, pode ocorrer uma reavaliação do VPT — e o IMI dos anos seguintes subir proporcionalmente. Vale a pena pedir um simulador fiscal antes da compra para antecipar este efeito.',
    },
    {
      type: 'heading3',
      content: 'Isenção temporária de IMI em imóveis reabilitados',
    },
    {
      type: 'paragraph',
      content:
        'Um imóvel reabilitado em ARU que cumpra os critérios de reabilitação qualificada pode beneficiar de isenção temporária de IMI — em regra por três anos, prorrogáveis por mais dois em determinadas condições. Esta isenção é particularmente relevante para projetos buy-to-let: preserva 100% do yield bruto durante o período de isenção e pode valer entre 4 e 7 mil euros ao longo do período para um imóvel de gama média.',
    },
    {
      type: 'heading2',
      content: '3. AIMI — o adicional para patrimónios maiores',
    },
    {
      type: 'paragraph',
      content:
        'O Adicional ao IMI (AIMI) entra em cena quando o valor somado dos VPT de todos os prédios urbanos habitacionais e terrenos para construção detidos por uma mesma pessoa (ou sociedade) ultrapassa determinado limiar. Em 2026, o desenho mantém-se: pessoa singular tem dedução de 600 mil euros ao valor tributável; casal em regime fiscal conjunto beneficia de dedução dupla. Acima dessa dedução, aplica-se uma taxa progressiva entre 0,7% e 1,5% consoante o valor patrimonial.',
    },
    {
      type: 'table',
      content: {
        headers: ['Situação', 'Dedução', 'Taxa AIMI'],
        rows: [
          ['Pessoa singular', '600 mil € ao VPT agregado', '0,7% até 1 milhão; 1,0% acima de 1 milhão; 1,5% > 2 milhões'],
          ['Casal (declaração conjunta)', '1,2 milhões € ao VPT agregado', 'Mesmas taxas progressivas'],
          ['Pessoa coletiva', 'Sem dedução', '0,4% (regra geral) sobre VPT urbano habitacional'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'O AIMI afeta sobretudo investidores com vários imóveis em nome próprio. Para volumes relevantes, a estruturação via sociedade de investimento pode fazer sentido — mas troca-se AIMI pelo regime de IRC, que tem lógica totalmente diferente. É uma conta concreta, não uma regra genérica.',
    },
    {
      type: 'heading2',
      content: '4. IVA em obras — o salto de 23% para 6% em ARU',
    },
    {
      type: 'paragraph',
      content:
        'O IVA em obras de reabilitação é, em 2026, o maior benefício fiscal prático do imobiliário português. A regra geral é 23%, a taxa normal. Mas em obras realizadas em imóveis localizados em Área de Reabilitação Urbana (ARU) e que cumpram os requisitos de reabilitação qualificada — ou seja, intervenção que melhora em pelo menos dois níveis o estado de conservação do imóvel, nos termos do regime jurídico — a taxa aplicável é a taxa reduzida de 6%.',
    },
    {
      type: 'paragraph',
      content:
        'Na prática, num projeto típico de reabilitação com 150 mil euros de obra (materiais + mão de obra), a diferença entre 23% e 6% representa 25.500 euros de IVA poupado — mais do que o custo total da fiscalização independente e dos honorários de projeto juntos. Esta é a razão pela qual confirmar o enquadramento em ARU é o primeiro passo de qualquer análise — o assunto que tratamos em detalhe em <a href="/blog/areas-de-reabilitacao-urbana-aru-como-confirmar-se">ARU: como confirmar se o seu imóvel está incluído</a>.',
    },
    {
      type: 'callout',
      content:
        'A taxa reduzida de 6% não é automática. Exige faturação correta pelo empreiteiro (com referência expressa ao regime de reabilitação qualificada), documentação de enquadramento em ARU e, em alguns casos, pedido formal de reconhecimento junto da Autoridade Tributária. Não assuma o benefício sem validar o procedimento.',
    },
    {
      type: 'heading2',
      content: '5. Mais-valias em IRS — o que se paga na saída',
    },
    {
      type: 'paragraph',
      content:
        'As mais-valias imobiliárias em Portugal são tributadas em sede de IRS categoria G. A regra geral para residentes: 50% do ganho (valor de venda menos valor de aquisição corrigido pela inflação, menos custos documentados) é considerado rendimento tributável e soma aos restantes rendimentos do sujeito passivo, sendo tributado à taxa marginal do escalão aplicável. Para não residentes, a tributação é feita a 28% flat sobre a totalidade da mais-valia.',
    },
    {
      type: 'table',
      content: {
        headers: ['Situação', 'Base tributável', 'Taxa aplicável'],
        rows: [
          ['Residente — imóvel de investimento', '50% da mais-valia', 'Taxa marginal IRS (até 53%)'],
          ['Residente — reinvestimento em HPP', '0% (se cumprir prazo e montante)', 'Isenção'],
          ['Não residente UE/EEE', '50% da mais-valia (opção)', 'Taxas IRS englobamento'],
          ['Não residente fora UE/EEE', '100% da mais-valia', '28% flat'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'Reinvestimento em habitação própria e permanente',
    },
    {
      type: 'paragraph',
      content:
        'Para residentes, a mais-valia proveniente da venda de habitação própria e permanente (HPP) pode ser totalmente isenta se o valor de realização for reinvestido, dentro do prazo legal, na aquisição, construção ou beneficiação de outra HPP. Este regime mantém-se em 2026 e continua a ser um instrumento poderoso de planeamento patrimonial para famílias que trocam de casa ao longo da vida.',
    },
    {
      type: 'heading3',
      content: 'Correção monetária — muitas vezes esquecida',
    },
    {
      type: 'paragraph',
      content:
        'Ao calcular a mais-valia, o valor de aquisição é corrigido por um coeficiente de desvalorização monetária publicado anualmente. Num imóvel comprado há 15 anos, este fator pode reduzir a base tributável em 15 a 25 por cento — um ganho fiscal automático muitas vezes ignorado por quem vende sem apoio contabilístico.',
    },
    {
      type: 'heading2',
      content: '6. Rendas e IRS categoria F',
    },
    {
      type: 'paragraph',
      content:
        'Os rendimentos de arrendamento são tributados em IRS categoria F. A taxa por defeito é 28% flat sobre o rendimento líquido (rendas menos encargos deduzíveis: IMI, condomínio, seguros, obras de manutenção). O contribuinte pode optar pelo englobamento — somar as rendas aos restantes rendimentos e tributar à taxa marginal — quando essa opção for fiscalmente mais favorável (tipicamente para contribuintes com baixo rendimento global).',
    },
    {
      type: 'heading3',
      content: 'Arrendamento duradouro: incentivo à longa duração',
    },
    {
      type: 'paragraph',
      content:
        'O regime fiscal do arrendamento duradouro prevê taxas reduzidas em função da duração contratada. Para contratos com duração igual ou superior a 5 anos a taxa pode baixar relevantemente face aos 28% base; para contratos entre 10 e 20 anos, a redução aprofunda-se. É um incentivo real à estabilidade residencial e, do lado do senhorio, pode gerar entre 3 e 8 pontos percentuais de yield líquido adicional comparado com o contrato curto tradicional. Para investidores buy-to-let orientados ao longo prazo, é um dos pontos mais relevantes de 2026.',
    },
    {
      type: 'heading2',
      content: '7. Benefícios fiscais em ARU — o pacote consolidado',
    },
    {
      type: 'paragraph',
      content:
        'Áreas de Reabilitação Urbana concentram o maior pacote de benefícios fiscais do imobiliário português. Reunimos os principais num quadro único, para referência operacional.',
    },
    {
      type: 'table',
      content: {
        headers: ['Imposto', 'Benefício potencial em ARU', 'Condição'],
        rows: [
          ['IVA em obras', '23% → 6%', 'Reabilitação qualificada (melhoria ≥2 níveis de estado de conservação)'],
          ['IMT na compra', 'Isenção temporária', 'Compra para reabilitação + conclusão do projeto dentro do prazo'],
          ['IMI na detenção', 'Isenção 3 a 5 anos', 'Imóvel efetivamente reabilitado e certificado'],
          ['Mais-valias (venda)', 'Tributação a 5% (opção)', 'Obra concluída + reinvestimento em 3 anos (regime específico)'],
          ['IRS rendas', 'Taxa reduzida', 'Arrendamento após reabilitação, com regime aplicável'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Repare: cada benefício tem condições específicas, prazos e documentação obrigatória. Não se aplicam automaticamente nem todos a todos os projetos. O diferenciador, na prática, é ter um consultor fiscal especializado antes da escritura para mapear quais benefícios fazem sentido pedir e quais exigem decisões estruturais (como o tipo de entidade adquirente).',
    },
    {
      type: 'heading2',
      content: '8. Pessoa singular vs sociedade — a decisão estrutural',
    },
    {
      type: 'paragraph',
      content:
        'A pergunta "devo comprar em nome próprio ou em sociedade?" é uma das mais recorrentes — e mais mal respondidas. Não existe resposta universal. Depende do volume do portefólio, do horizonte do projeto, do país de residência fiscal e da tese de saída.',
    },
    {
      type: 'table',
      content: {
        headers: ['Fator', 'Pessoa singular', 'Sociedade (Lda)'],
        rows: [
          ['Tributação mais-valias', '50% da mais-valia × taxa marginal', 'IRC 21% (+ derramas) sobre lucro'],
          ['Dedução de encargos', 'Limitada (categoria F ou G)', 'Ampla (qualquer custo relacionado ao objeto)'],
          ['AIMI', 'Incide após 600 mil € VPT', 'Sem dedução; 0,4% sobre VPT urbano habitacional'],
          ['Custos de constituição / manutenção', 'Nulos', '~1.500–3.000 €/ano (contabilista + fiscal)'],
          ['IVA em obras', 'Aplicável ao empreiteiro direto', 'Possibilidade de dedução em atividades sujeitas'],
          ['Distribuição de lucros / dividendos', 'N/A', '28% (IRS sobre dividendos do sócio)'],
          ['Sucessão / planeamento patrimonial', 'Herança direta', 'Transmissão de quotas — mais flexível'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Regra prática que usamos: em volumes abaixo de dois ou três imóveis com horizonte buy-and-hold, pessoa singular costuma ser mais eficiente. Acima disso, ou em operação de desenvolvimento / reabilitação com várias unidades, a sociedade permite dedução plena de custos, encapsulamento de risco, e maior flexibilidade de planeamento — mesmo que implique custo administrativo fixo adicional.',
    },
    {
      type: 'heading2',
      content: '9. RNH 2.0 / IFICI — o que mudou',
    },
    {
      type: 'paragraph',
      content:
        'O regime dos Residentes Não Habituais (RNH) foi substituído em 2024 pelo Incentivo Fiscal à Investigação Científica e Inovação (IFICI), frequentemente referido como RNH 2.0. Em 2026, o regime está em pleno vigor. Para efeitos imobiliários, as alterações são relevantes mas muitas vezes mal compreendidas.',
    },
    {
      type: 'paragraph',
      content:
        'Em síntese: o antigo RNH oferecia um pacote amplo de isenções e taxas reduzidas a novos residentes fiscais em Portugal, independentemente da profissão. O IFICI manteve a ideia central de atrair talento mas restringiu o escopo a atividades consideradas de alto valor acrescentado, tipicamente ligadas a investigação científica, desenvolvimento tecnológico e determinadas áreas estratégicas. Não é um regime "imobiliário" — é um regime para o perfil fiscal do adquirente, que pode ter ou não impacto material nas contas de um investimento imobiliário.',
    },
    {
      type: 'paragraph',
      content:
        'Para um investidor estrangeiro que pondere mudar residência para Portugal, o enquadramento IFICI deve ser analisado caso a caso — antes da mudança, não depois. Para investidores que permaneçam não residentes, o regime IFICI não se aplica e as regras gerais de IRS não residente (28% flat sobre rendas e mais-valias) continuam a valer.',
    },
    {
      type: 'heading2',
      content: 'Três cenários práticos',
    },
    {
      type: 'paragraph',
      content:
        'Para mostrar o efeito agregado da fiscalidade, três exemplos simplificados. Os números são ilustrativos — valores reais dependem de município, VPT, taxas específicas e enquadramento exato.',
    },
    {
      type: 'heading3',
      content: 'Cenário A — Flip em ARU de Lisboa',
    },
    {
      type: 'paragraph',
      content:
        'Compra: 450 mil €. Obra: 180 mil €. Venda: 820 mil €. Sem ARU: paga IMT ~24 mil €, IVA obras ~41 mil €, mais-valias ~44 mil €. Custos fiscais totais: ~109 mil €. Em ARU com reabilitação qualificada: isenção IMT (+24 mil €), IVA a 6% (+30 mil € poupados), mais-valias em regime especial (-20 mil €). Custos fiscais totais: ~35 mil €. Diferença: 74 mil € a favor do projeto em ARU — mais de 12 pontos percentuais de TIR no período.',
    },
    {
      type: 'heading3',
      content: 'Cenário B — Buy-to-let em Cascais',
    },
    {
      type: 'paragraph',
      content:
        'Compra: 700 mil €. Renda bruta anual: 30 mil €. Sem ARU, em nome próprio: IMT ~28 mil € entrada, IMI ~1.200 €/ano, IRS categoria F 28% sobre rendas líquidas (~6.500 €/ano). Yield líquido ~3,2%. Em ARU com reabilitação qualificada + arrendamento duradouro 10+ anos: IMT isento, IMI isento 3 anos, IRS F taxa reduzida (~4.000 €/ano). Yield líquido ~4,1% nos primeiros anos. Em 10 anos, diferença fiscal acumulada: ~45-60 mil €.',
    },
    {
      type: 'heading3',
      content: 'Cenário C — Portefólio de 5 imóveis',
    },
    {
      type: 'paragraph',
      content:
        'VPT agregado em nome próprio: 2,5 milhões €. AIMI anual (pessoa singular): ~18 mil €/ano. Em sociedade, sobre o mesmo VPT: AIMI ~10 mil €/ano. Custo de contabilidade adicional: ~2.500 €/ano. Saldo líquido a favor da sociedade: ~5.500 €/ano, antes mesmo de contar com a maior dedução de custos. Para portefólios desta dimensão, a sociedade torna-se claramente mais eficiente.',
    },
    {
      type: 'heading2',
      content: 'Erros fiscais que custam caro',
    },
    {
      type: 'list',
      content: [
        '<strong>Descobrir a fiscalidade depois da compra.</strong> Decisões estruturais (ARU, nome próprio vs sociedade, tipo de empréstimo) têm de ser tomadas antes da escritura.',
        '<strong>Assumir o IVA a 6% sem validar.</strong> Se a obra não cumprir critérios de reabilitação qualificada ou o empreiteiro não faturar corretamente, perde-se o benefício mesmo em ARU.',
        '<strong>Não pedir reconhecimento formal do município.</strong> Alguns benefícios (IMI, IMT) exigem comunicação formal e ato expresso — não são automáticos.',
        '<strong>Calcular mais-valias sem correção monetária.</strong> Num imóvel detido há 10+ anos pode representar poupança fiscal relevante.',
        '<strong>Subestimar o impacto do AIMI em patrimónios médios.</strong> Com três imóveis centrais, já se toca facilmente no limiar.',
        '<strong>Misturar habitação própria e investimento na mesma estrutura.</strong> Depois é quase impossível otimizar sem custos de migração.',
      ],
    },
    {
      type: 'quote',
      content:
        'Em imobiliário, o melhor contabilista é aquele que é chamado antes da escritura e não na véspera do IRS. A maior parte das oportunidades fiscais perde-se por falta de tempo, não por falta de conhecimento técnico.',
      source: {
        name: 'Equipa Fiscal HABTA',
        role: 'Prática interna',
      },
    },
    {
      type: 'heading2',
      content: 'Como a HABTA pode ajudar',
    },
    {
      type: 'paragraph',
      content:
        'A HABTA trabalha projeto a projeto com consultores fiscais especializados em imobiliário português. Em cada operação, antes da escritura, validamos o enquadramento em ARU, simulamos IMT/IMI, identificamos benefícios aplicáveis, desenhamos a estrutura (singular ou sociedade) e documentamos o plano fiscal até à saída. Explore os nossos <a href="/servicos">serviços</a> ou veja projetos reais no <a href="/portfolio">portefólio</a>. Para uma conversa inicial sem compromisso, contacte a equipa a partir da página de <a href="/contacto">contacto</a>.',
    },
  ],
  faq: [
    {
      q: 'Quanto vou pagar de IMT ao comprar um imóvel em Portugal em 2026?',
      a: 'Depende do valor de compra e da finalidade. Para habitação própria e permanente, o IMT é progressivo e arranca em 0% até ~105 mil euros, subindo por escalões até um máximo de 7,5% para valores acima de 1 milhão de euros. Para habitação secundária ou investimento, a taxa é também progressiva mas sem tramo isento. Num imóvel de investimento de 500 mil euros, o IMT costuma situar-se entre 5 e 6 por cento — cerca de 25 a 30 mil euros.',
    },
    {
      q: 'O IVA nas obras de reabilitação reduz automaticamente para 6%?',
      a: 'Não. A taxa reduzida de 6% aplica-se a obras realizadas em imóveis localizados em Área de Reabilitação Urbana que cumpram os critérios de reabilitação qualificada — em regra, intervenção que melhora em pelo menos dois níveis o estado de conservação. Exige faturação correta pelo empreiteiro e documentação de enquadramento. Sem estes cuidados, aplica-se a taxa normal de 23%.',
    },
    {
      q: 'Como funciona a isenção de IMI em ARU?',
      a: 'Imóveis efetivamente reabilitados em ARU, que cumpram os critérios do regime jurídico de reabilitação qualificada e sejam certificados como tal pelo município, podem beneficiar de isenção temporária de IMI — em regra três anos, prorrogáveis por mais dois em determinadas condições. A isenção tem de ser formalmente reconhecida; não é automática.',
    },
    {
      q: 'Como se calculam as mais-valias imobiliárias em IRS?',
      a: 'Em regra, mais-valia = valor de realização (venda) − valor de aquisição corrigido pela inflação − custos documentados com a compra, obras e venda. Para residentes em imóvel de investimento, 50% desta mais-valia soma aos restantes rendimentos e é tributada à taxa marginal do IRS. Para não residentes fora da UE, aplica-se 28% flat sobre a totalidade. Reinvestimento em habitação própria permanente pode neutralizar o imposto.',
    },
    {
      q: 'O AIMI aplica-se a mim?',
      a: 'Aplica-se se o valor patrimonial tributário agregado de todos os seus prédios urbanos habitacionais e terrenos para construção em Portugal ultrapassar 600 mil euros (pessoa singular) ou 1,2 milhões de euros (casal em declaração conjunta). Abaixo deste patamar, não há AIMI. Acima, a taxa oscila entre 0,7% e 1,5% consoante o valor patrimonial. Para sociedades não há dedução e a taxa é 0,4%.',
    },
    {
      q: 'Devo comprar em nome próprio ou através de uma sociedade?',
      a: 'Depende do volume, horizonte e perfil fiscal. Para um ou dois imóveis com estratégia buy-and-hold, pessoa singular costuma ser mais eficiente. Para portefólios de três ou mais imóveis, operações de reabilitação com várias unidades, ou investidores com horizonte de 15+ anos e planeamento sucessório relevante, a sociedade tende a compensar apesar do custo administrativo fixo. A decisão deve ser tomada antes da primeira compra — mudar depois é caro.',
    },
    {
      q: 'O regime RNH ainda existe?',
      a: 'O antigo Residente Não Habitual (RNH) foi substituído em 2024 pelo IFICI (Incentivo Fiscal à Investigação Científica e Inovação), por vezes chamado RNH 2.0. O âmbito está mais restrito — foca-se em atividades de alto valor acrescentado, investigação e inovação. Para investidores imobiliários puros, o IFICI não se aplica automaticamente; deve ser analisado caso a caso antes da mudança de residência.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou financeiro personalizado. Valores, escalões, taxas e regimes aqui descritos são indicativos e podem alterar-se por decisão legislativa ou orçamental. Confirme sempre os valores aplicáveis ao seu caso com um contabilista certificado ou advogado especializado em fiscalidade imobiliária.',
};
