import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'financiamento-hipotecario-para-reabilitacao-em-portugal-o-que',
  title: 'Financiamento hipotecário para reabilitação em Portugal 2026',
  description:
    'O que os bancos analisam antes de aprovar crédito para reabilitação em Portugal: rácio LTV, viabilidade de obra, garantias e documentação exigida.',
  category: 'Investimento',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-23',
  updated_at: '2026-04-23',
  excerpt:
    'Antes de pedir crédito hipotecário para reabilitação em Portugal, convém perceber exactamente o que os bancos avaliam — e onde a maioria dos pedidos falha.',
  image: 'https://images.unsplash.com/photo-1541323035148-3b6d6b990e1e${UNSPLASH_PARAMS}',
  tags: [
    'crédito hipotecário reabilitação Portugal',
    'financiamento obra reabilitação Lisboa',
    'LTV imóveis antigos Portugal',
    'banco aprova reabilitação 2026',
    'garantias crédito habitação reabilitação',
  ],
  tldr: [
    'Os bancos portugueses financiam reabilitação com LTV entre 70% e 80% sobre o valor pós-obra — não sobre o preço de aquisição bruto.',
    'A documentação técnica da obra (memória descritiva, orçamento detalhado, alvará do empreiteiro) é obrigatória e determina o montante aprovado.',
    'O Banco de Portugal limita o DSTI a 35–50% dos rendimentos líquidos; este rácio inclui todos os créditos activos do mutuário.',
    'Em Lisboa e Porto, spreads para reabilitação situam-se tipicamente entre 1,1% e 2,0% acima da Euribor, consoante o perfil do mutuário e o risco do imóvel.',
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
        'O financiamento hipotecário para reabilitação em Portugal funciona de forma diferente do crédito habitação convencional. O imóvel está degradado, o valor actual é baixo e a obra ainda não começou — três factores que alteram completamente a lógica de risco do banco. Conhecer essa lógica é o que separa um pedido aprovado de meses perdidos em burocracia.',
    },
    {
      type: 'paragraph',
      content:
        'O crédito hipotecário para reabilitação em Portugal assenta num princípio simples: o banco financia o imóvel que o projecto vai criar, não o imóvel degradado que existe hoje. Esta distinção tem implicações directas na avaliação, no montante aprovado e nos documentos exigidos.',
    },
    {
      type: 'heading2',
      content: 'Como os bancos calculam o LTV em imóveis para reabilitação?',
    },
    {
      type: 'paragraph',
      content:
        'O rácio Loan-to-Value (LTV) é calculado sobre o valor estimado do imóvel após conclusão das obras — o chamado "valor pós-obra" ou "valor de mercado projectado". A maioria dos bancos portugueses aplica um LTV máximo de 80% neste valor, o que significa que o mutuário precisa de capitais próprios que cubram, no mínimo, os 20% restantes mais a totalidade dos custos de obra não financiados.',
    },
    {
      type: 'paragraph',
      content:
        'Na prática, quando um imóvel em Alfama vale 150 000 € no estado actual e o projecto prevê uma reabilitação profunda que o levará a 350 000 €, o banco pode financiar até 280 000 € — mas apenas se o perfil do mutuário e a viabilidade da obra o justificarem. O dossier técnico é que sustenta esse valor projectado.',
    },
    {
      type: 'heading2',
      content: 'Que documentação técnica é obrigatória no pedido?',
    },
    {
      type: 'paragraph',
      content:
        'A documentação técnica é o pilar mais frequentemente subestimado pelos investidores que pedem crédito para reabilitação. Sem ela, o banco não consegue avaliar o risco de obra — e não aprova. Os documentos exigidos variam ligeiramente entre instituições, mas o núcleo é consistente.',
    },
    {
      type: 'list',
      content: [
        'Memória descritiva e justificativa do projecto de arquitectura, assinada por arquitecto inscrito na Ordem dos Arquitectos.',
        'Mapa de trabalhos e orçamento detalhado por capítulos, com custo total de obra especificado.',
        'Alvará de empreiteiro em vigor, emitido pelo IMPIC, adequado à classe e categoria das obras previstas.',
        'Licença de obra ou comprovativo de admissão de comunicação prévia pela câmara municipal competente.',
        'Caderneta predial actualizada e certidão de teor do registo predial (menos de 6 meses).',
        'Avaliação bancária realizada por perito aprovado pelo Banco de Portugal, que inclui estimativa de valor pós-obra.',
      ],
    },
    {
      type: 'heading3',
      content: 'O papel da avaliação bancária em imóveis degradados',
    },
    {
      type: 'paragraph',
      content:
        'A avaliação bancária em imóveis para reabilitação é mais complexa do que numa habitação pronta. O perito tem de emitir dois valores: o valor actual do imóvel e o valor prospectivo após obra. Este segundo valor baseia-se nas transacções de imóveis comparáveis já reabilitados na mesma zona e no orçamento apresentado. Discrepâncias entre o orçamento do empreiteiro e o custo de obra estimado pelo perito são frequentes — e quando surgem, o banco financia o valor mais baixo.',
    },
    {
      type: 'heading2',
      content: 'O que é o DSTI e como condiciona o montante aprovado?',
    },
    {
      type: 'paragraph',
      content:
        'O Debt Service-to-Income (DSTI) é o rácio entre os encargos mensais com todos os créditos activos e o rendimento líquido do mutuário. O Banco de Portugal fixou limites macroprudenciais que as instituições de crédito devem respeitar: DSTI máximo de 35% para maturidades superiores a 30 anos e de 50% nos restantes casos.',
    },
    {
      type: 'paragraph',
      content:
        'Este rácio inclui não só a prestação do novo crédito para reabilitação, mas também cartões de crédito, crédito automóvel, crédito pessoal e eventuais hipotecas existentes. Investidores com portefólios de crédito activo chegam frequentemente ao limite de DSTI antes de esgotar o LTV disponível.',
    },
    {
      type: 'table',
      content: {
        headers: ['Perfil do mutuário', 'LTV típico aprovado', 'Spread habitual (Euribor +)', 'DSTI máximo aplicável'],
        rows: [
          ['Particular — habitação própria e permanente', '80%', '1,1% – 1,5%', '50%'],
          ['Particular — segunda habitação / investimento', '70% – 75%', '1,4% – 1,9%', '35% – 50%'],
          ['Empresa (SPV / sociedade imobiliária)', '65% – 70%', '1,6% – 2,2%', 'Avaliação caso a caso'],
          ['Non-resident / Golden Visa (se aplicável)', '60% – 70%', '1,8% – 2,5%', 'Avaliação caso a caso'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Quais os tipos de financiamento disponíveis para obras de reabilitação?',
    },
    {
      type: 'paragraph',
      content:
        'O mercado bancário português oferece três estruturas principais para financiar reabilitação. A escolha depende do timing entre a aquisição e o início de obra, da capacidade de autofinanciamento e do perfil fiscal do investidor.',
    },
    {
      type: 'list',
      content: [
        'Crédito hipotecário com verba para obras incluída: o banco liberta o capital de aquisição na escritura e a verba de obra em tranches, à medida que a obra avança e mediante vistorias de fiscalização.',
        'Crédito de aquisição + crédito de obras separado: dois contratos distintos, o segundo garantido por hipoteca sobre o imóvel adquirido; mais flexível mas envolve custos de constituição duplos.',
        'Financiamento de promoção imobiliária: dirigido a empresas e promotores; montantes mais elevados, prazo de obra até 36 meses, reembolso previsto após venda ou refinanciamento; spreads habitualmente superiores a 2,0%.',
      ],
    },
    {
      type: 'quote',
      content:
        'O erro mais comum que vemos em pedidos de crédito para reabilitação é apresentar um orçamento de obra sem mapa de trabalhos detalhado. O banco não financia uma estimativa — financia um projecto. Sem o detalhe por capítulos, o processo fica parado na avaliação durante semanas.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de dossiers de financiamento 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Que garantias adicionais os bancos exigem em reabilitação?',
    },
    {
      type: 'paragraph',
      content:
        'Além da hipoteca sobre o imóvel, os bancos aplicam frequentemente garantias complementares quando o risco de obra é percepcionado como elevado — sobretudo em imóveis pré-1930 ou em intervenções de reabilitação profunda.',
    },
    {
      type: 'list',
      content: [
        'Seguro de vida vinculado ao capital em dívida, com o banco como beneficiário preferencial.',
        'Seguro multirriscos de obra e de imóvel, activo desde a data de escritura.',
        'Fiança pessoal de sócio-gerente quando o mutuário é uma sociedade com histórico inferior a 3 anos.',
        'Penhor de saldo de conta de obra, bloqueando os fundos libertados pelo banco até validação de cada tranche.',
        'Em alguns bancos, relatório de fiscalização independente obrigatório como condição de libertação de tranches.',
      ],
    },
    {
      type: 'heading2',
      content: 'Há incentivos fiscais que afectam a estrutura do financiamento?',
    },
    {
      type: 'paragraph',
      content:
        'Sim. Em Áreas de Reabilitação Urbana (ARU), as obras de reabilitação qualificada beneficiam de IVA reduzido a 6% nos termos do Código do IVA e do regime jurídico da reabilitação urbana (DL n.º 307/2009, com as alterações introduzidas pela Lei n.º 32/2012 e actualizações subsequentes). Esta redução diminui o custo efectivo de obra e, consequentemente, o montante de financiamento necessário.',
    },
    {
      type: 'paragraph',
      content:
        'A isenção temporária de IMI e a redução de IMT em ARU — habitualmente concedidas pelas câmaras municipais ao abrigo dos estatutos dos benefícios fiscais — reduzem os encargos nos primeiros anos pós-reabilitação, melhorando a cobertura do serviço de dívida. Em Lisboa, a Câmara Municipal tem procedimentos próprios para reconhecimento de reabilitação qualificada; no Porto, a Porto Vivo, SRU é a entidade de referência.',
    },
    {
      type: 'heading2',
      content: 'Quanto tempo demora a aprovação de crédito para reabilitação?',
    },
    {
      type: 'paragraph',
      content:
        'O prazo médio de aprovação situa-se entre 3 e 8 semanas para dossiers completos. Dossiers com documentação técnica incompleta, avaliações contestadas ou imóveis com registo predial desactualizado podem ultrapassar os 3 meses. A variável mais controlável pelo investidor é a qualidade do dossier entregue na primeira instrução.',
    },
    {
      type: 'heading3',
      content: 'Pontos que atrasam sistematicamente a aprovação',
    },
    {
      type: 'list',
      content: [
        'Divergência entre a área registada na caderneta predial e a área real — frequente em edifícios pombalinos e gaioleiros.',
        'Ónus ou hipotecas anteriores não cancelados no registo predial, mesmo que a dívida esteja liquidada.',
        'Orçamento de obra sem discriminação por capítulo (estrutura, impermeabilização, acabamentos, instalações).',
        'Alvará de empreiteiro com categoria insuficiente face à envergadura das obras declaradas.',
        'Imóvel em processo de licenciamento ainda não concluído — alguns bancos exigem licença emitida antes de aprovação final.',
      ],
    },
    {
      type: 'heading2',
      content: 'Próximos passos para estruturar o seu financiamento',
    },
    {
      type: 'paragraph',
      content:
        'Se está a preparar um pedido de crédito hipotecário para reabilitação em Lisboa, Porto ou Cascais, a equipa da HABTA pode ajudá-lo a estruturar o dossier técnico e a antecipar os critérios de cada instituição — veja os nossos <a href="/servicos">serviços de acompanhamento a investidores</a> ou consulte o <a href="/portfolio">portefólio de projectos já executados</a> para perceber a dimensão de intervenção que financiamos. Para aprofundar o enquadramento fiscal, leia também o nosso artigo sobre <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">reabilitação urbana em Portugal — guia completo 2026</a> e <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">os cinco pilares para avaliar um projecto antes de investir</a>. Subscreva a newsletter para receber análises de mercado mensais sem custo.',
    },
  ],
  faq: [
    {
      q: 'Os bancos financiam 100% do custo de reabilitação em Portugal?',
      a: 'Não. O financiamento máximo situa-se em 80% do valor pós-obra para habitação própria e 70–75% para investimento. O mutuário tem sempre de assegurar capitais próprios para cobrir a diferença e, habitualmente, parte dos custos de obra.',
    },
    {
      q: 'Qual é o prazo máximo de um crédito hipotecário para reabilitação?',
      a: 'Para particulares, o prazo máximo é 40 anos, com limite de idade de 75 anos à data de vencimento, nos termos das recomendações do Banco de Portugal. Para empresas, os prazos são negociados caso a caso, habitualmente entre 15 e 25 anos.',
    },
    {
      q: 'É possível incluir o custo de obra no mesmo crédito da aquisição?',
      a: 'Sim. A maioria dos bancos portugueses oferece produtos que combinam verba de aquisição e verba de obras num único contrato hipotecário. A verba de obras é libertada em tranches, mediante vistorias à evolução da empreitada, o que reduz o risco para ambas as partes.',
    },
    {
      q: 'O que acontece se a obra derrapar no orçamento e for necessário mais financiamento?',
      a: 'O banco não está obrigado a aumentar o montante aprovado. O investidor deve constituir uma reserva técnica própria — recomendamos ≥10% do orçamento de obra em imóveis pré-1970. Renegociar um crédito em curso implica nova instrução e nova avaliação, com custos associados.',
    },
    {
      q: 'Um não-residente pode obter crédito hipotecário para reabilitação em Portugal?',
      a: 'Pode, mas as condições são mais restritivas: LTV máximo de 60–70%, documentação de rendimentos apostilada e, frequentemente, spread adicional de 0,3–0,5 pontos percentuais face a residentes. Alguns bancos exigem conta domiciliada como condição de aprovação.',
    },
    {
      q: 'O IVA a 6% na obra de reabilitação é automático ou precisa de ser solicitado?',
      a: 'Não é automático. Exige que o imóvel esteja em ARU reconhecida, que a obra seja de reabilitação qualificada nos termos do regime jurídico aplicável e que o empreiteiro aplique a taxa reduzida com base em declaração do dono de obra. A câmara municipal competente é a entidade que valida o enquadramento.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não substitui aconselhamento fiscal, jurídico ou financeiro personalizado. As condições de crédito, rácios e prazos indicados reflectem práticas de mercado observadas em 2025–2026 e podem variar por instituição, perfil do mutuário e evolução regulatória. Consulte o seu banco e profissionais qualificados antes de decisões concretas de investimento ou financiamento.',
};
