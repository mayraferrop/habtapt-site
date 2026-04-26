import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'como-funciona-a-partilha-de-capital-em-clubes',
  title: 'Partilha de capital em clubes de investidores imobiliários em Portugal 2026',
  description:
    'Como funciona a partilha de capital em clubes de investidores imobiliários: estruturas jurídicas, divisão de lucros, direitos de voto e riscos a conhecer antes de entrar.',
  category: 'Investimento',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-26',
  updated_at: '2026-04-26',
  excerpt:
    'A partilha de capital em clubes de investidores imobiliários permite aceder a projetos de maior dimensão com capital fracionado, mas exige compreender a estrutura jurídica, os direitos de cada sócio e a fiscalidade aplicável em Portugal.',
  image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350${UNSPLASH_PARAMS}',
  tags: [
    'clube de investidores imobiliários Portugal',
    'partilha de capital imobiliário Lisboa',
    'co-investimento imobiliário 2026',
    'SPE imobiliária Portugal',
    'yield co-investimento reabilitação urbana',
  ],
  tldr: [
    'Num clube de investimento imobiliário, cada membro detém uma percentagem do capital da veículo jurídico — normalmente uma SPE (Sociedade de Propósito Específico) — proporcional ao montante subscrito.',
    'A partilha de lucros ocorre em dois momentos: rendimento corrente (arrendamento) e mais-valia na saída, ambos tributados de forma distinta em sede de IRC ou IRS, consoante a estrutura.',
    'O ticket mínimo em clubes privados em Portugal situa-se tipicamente entre 25 000 € e 100 000 €, com horizontes de investimento de 3 a 7 anos e retornos alvo de 8 % a 14 % ao ano.',
    'Antes de subscrever, verifique o pacto social, as cláusulas de saída antecipada, a política de distribuição e se o gestor está registado no CMVM ou no IMPIC conforme aplicável.',
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
        'Os clubes de investimento imobiliário tornaram-se uma das formas mais procuradas de aceder ao mercado de reabilitação urbana em Portugal com capital fracionado. Mas "clube" é um rótulo informal — por baixo existe sempre uma estrutura jurídica, um conjunto de direitos e obrigações, e uma lógica de partilha de capital que precisa de ser entendida antes de qualquer compromisso.',
    },
    {
      type: 'paragraph',
      content:
        'A partilha de capital em clubes de investidores imobiliários assenta num princípio simples: vários investidores reúnem capital numa estrutura comum para adquirir, reabilitar ou explorar imóveis que individualmente não conseguiriam ou não desejariam suportar na totalidade. O que muda de clube para clube é a forma jurídica, a divisão de poder de decisão, a política de distribuição de resultados e os mecanismos de saída.',
    },
    {
      type: 'heading2',
      content: 'Que estruturas jurídicas suportam um clube de investimento imobiliário?',
    },
    {
      type: 'paragraph',
      content:
        'Em Portugal, os clubes de investimento imobiliário privados operam principalmente através de três formas: Sociedade por Quotas (Lda.), Sociedade Anónima (S.A.) constituída como Sociedade de Propósito Específico (SPE) ou, em projetos de maior dimensão, um Fundo de Investimento Imobiliário Fechado regulado pela CMVM nos termos do Regime Geral dos Organismos de Investimento Coletivo (Lei n.º 16/2015 e atualizações).',
    },
    {
      type: 'table',
      content: {
        headers: ['Estrutura', 'Regulação', 'Ticket mínimo típico', 'Adequação'],
        rows: [
          ['Sociedade por Quotas (SPE)', 'Código das Sociedades Comerciais', '25 000 € – 50 000 €', 'Clubes pequenos, 3–8 sócios'],
          ['Sociedade Anónima (SPE)', 'Código das Sociedades Comerciais', '50 000 € – 100 000 €', 'Clubes médios, maior liquidez acionista'],
          ['Fundo Imobiliário Fechado', 'CMVM / Lei n.º 16/2015', '100 000 € +', 'Clubes profissionais, >10 participantes'],
          ['Contrato de co-investimento', 'Código Civil / contratual', 'Variável', 'Estruturas ad hoc, menor formalidade'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'A escolha da forma jurídica tem impacto direto na fiscalidade, na transmissibilidade das participações, no nível de reporte obrigatório e na proteção de cada investidor. Uma Lda. com pacto social bem redigido pode ser suficiente para um clube de cinco sócios num projeto de reabilitação em Cedofeita, no Porto. Um clube com quinze investidores e ativos dispersos por Lisboa e Cascais beneficia de maior formalidade.',
    },
    {
      type: 'heading2',
      content: 'Como se calcula a participação de cada investidor no capital?',
    },
    {
      type: 'paragraph',
      content:
        'A percentagem de capital detida por cada membro é proporcional ao montante subscrito face ao capital total do veículo. Se o clube angaria 2 000 000 € e um investidor entra com 200 000 €, detém 10 % do capital — e, salvo estipulação em contrário no pacto social, 10 % dos resultados distribuídos e 10 % dos votos em assembleia.',
    },
    {
      type: 'list',
      content: [
        'Capital subscrito: montante comprometido por cada investidor no momento da constituição ou abertura de período de subscrição.',
        'Capital realizado: montante efetivamente transferido — pode diferir do subscrito em chamadas de capital faseadas.',
        'Participação económica: direito a lucros e mais-valias, geralmente proporcional ao capital realizado.',
        'Participação política: direito de voto em assembleia — pode ser igual à económica ou diferenciada (ações de voto duplo, quotas preferenciais).',
        'Carried interest: percentagem adicional de lucro atribuída ao gestor do clube acima de um retorno mínimo (hurdle rate), tipicamente 8 % ao ano.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como funciona a distribuição de lucros e mais-valias?',
    },
    {
      type: 'paragraph',
      content:
        'Os clubes imobiliários geram retorno em dois momentos distintos: rendimento corrente durante o período de detenção do ativo — proveniente de arrendamento ou de atividade hoteleira — e mais-valia gerada na venda do imóvel no final do ciclo de investimento.',
    },
    {
      type: 'paragraph',
      content:
        'A política de distribuição é fixada nos documentos constitutivos. Clubes orientados para rendimento distribuem trimestralmente ou semestralmente, após dedução de custos operacionais e de gestão. Clubes orientados para valorização retêm os excedentes e distribuem no momento da saída, maximizando o reinvestimento interno ao longo do ciclo.',
    },
    {
      type: 'quote',
      content:
        'Num clube de reabilitação com ciclo de 4 anos e distribuição diferida, a diferença entre receber rendimentos anuais e reinvesti-los pode representar 1,5 a 2,5 pontos percentuais no retorno final anualizado — um impacto que muitos investidores não quantificam quando comparam propostas.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de estruturação de clubes 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Qual é a fiscalidade da partilha de capital em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'A fiscalidade depende da forma jurídica do veículo e da natureza do investidor. Num veículo sujeito a IRC, os resultados são tributados na esfera da sociedade (taxa geral de 21 % em 2026, com derramas municipais variáveis) antes de qualquer distribuição. Os dividendos recebidos por pessoas singulares residentes em Portugal ficam sujeitos a IRS à taxa liberatória de 28 % — ou englobamento, se mais favorável.',
    },
    {
      type: 'list',
      content: [
        'IRC sobre lucros da SPE: 21 % (taxa estadual) + derrama municipal de até 1,5 % em Lisboa e Porto.',
        'Dividendos distribuídos a sócios pessoas singulares: IRS à taxa liberatória de 28 % ou englobamento opcional.',
        'Mais-valias na venda de quota ou ação por pessoa singular: IRS a 28 % sobre a mais-valia líquida, com possibilidade de exclusão parcial em reinvestimento (art.º 10.º do CIRS).',
        'Em fundos imobiliários fechados regulados pela CMVM, aplica-se regime especial previsto no EBF (Estatuto dos Benefícios Fiscais) — confirmar com a sociedade gestora.',
        'Investidores não residentes: tributação na fonte a 25 % ou taxa reduzida por Convenção para Evitar a Dupla Tributação, conforme país de residência.',
      ],
    },
    {
      type: 'heading3',
      content: 'IVA em operações do clube',
    },
    {
      type: 'paragraph',
      content:
        'As operações do veículo com imóveis — aquisição, reabilitação, arrendamento — têm enquadramento próprio em sede de IVA. Obras de reabilitação em Áreas de Reabilitação Urbana (ARU) podem beneficiar de IVA reduzido a 6 %, nos termos do Decreto-Lei n.º 53/2014 e atualizações, o que melhora a equação de custos do clube. O arrendamento habitacional é isento de IVA; o arrendamento comercial admite opção pela tributação.',
    },
    {
      type: 'heading2',
      content: 'Quais são os direitos e poderes de cada co-investidor?',
    },
    {
      type: 'paragraph',
      content:
        'Os direitos de cada membro do clube são determinados pelo pacto social ou regulamento interno do veículo — não pelo rótulo "clube". Um investidor com 5 % do capital pode ter direito de veto sobre decisões estratégicas se o pacto o previr, ou pode ser simplesmente um sócio minority sem influência real nas decisões de gestão.',
    },
    {
      type: 'list',
      content: [
        'Direito à informação: acesso a relatórios de gestão, contas e avaliações periódicas do ativo.',
        'Direito de voto: presença em assembleia e peso do voto na aprovação de contas, distribuição de resultados e decisões extraordinárias.',
        'Direito de preferência: possibilidade de adquirir participação de outro sócio antes de esta ser cedida a terceiros.',
        'Direitos de saída: cláusulas de drag-along (arrastar sócios minority numa venda) e tag-along (acompanhar uma venda liderada pela maioria).',
        'Direito de controlo sobre o gestor: condições para substituição do gestor ou do administrador do veículo por maioria qualificada.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como funciona a saída antecipada de um clube?',
    },
    {
      type: 'paragraph',
      content:
        'A saída antecipada é uma das cláusulas mais ignoradas pelos investidores e uma das mais relevantes na prática. Em veículos fechados — a norma nos clubes imobiliários —, não existe liquidez garantida antes do prazo de desinvestimento. A cessão de quota ou ação a terceiro requer acordo dos outros sócios e, quase sempre, avaliação prévia do ativo.',
    },
    {
      type: 'paragraph',
      content:
        'Alguns clubes preveem janelas de liquidez periódicas, tipicamente anuais, em que o veículo ou os restantes sócios podem adquirir a participação pelo valor patrimonial líquido (NAV) apurado nessa data. Outros não preveem qualquer mecanismo — o investidor fica vinculado até ao desinvestimento final, que em projetos de reabilitação em Lisboa ou Cascais pode durar entre 3 e 7 anos.',
    },
    {
      type: 'heading2',
      content: 'Que riscos específicos decorrem da estrutura de partilha de capital?',
    },
    {
      type: 'paragraph',
      content:
        'A co-propriedade num veículo comum cria riscos que o investimento direto e individual não tem. O risco de governação — decisões tomadas por maioria com as quais o investidor discorda — é o mais frequente em conflitos internos de clubes.',
    },
    {
      type: 'list',
      content: [
        'Risco de diluição: chamadas de capital adicionais a que um sócio não responde podem diluir a sua participação se o pacto social o permitir.',
        'Risco de concentração de poder: um sócio maioritário pode controlar as decisões de gestão, desinvestimento e distribuição.',
        'Risco de conflito de interesses: o gestor do clube pode ter interesses próprios no imóvel ou nas prestações de serviços ao veículo.',
        'Risco de avaliação: o valor atribuído ao ativo nas distribuições intermédias pode divergir do valor de mercado real.',
        'Risco jurídico: pactos sociais mal redigidos criam ambiguidade sobre direitos de saída, preferência e imputação de perdas.',
      ],
    },
    {
      type: 'heading3',
      content: 'O papel do IMPIC e da CMVM na supervisão',
    },
    {
      type: 'paragraph',
      content:
        'A intermediação de investimento imobiliário em Portugal está sujeita a registo no IMPIC (Instituto dos Mercados Públicos, do Imobiliário e da Construção) quando envolve atividade de mediação imobiliária. Quando o veículo é um fundo ou produto financeiro, a supervisão recai sobre a CMVM. Verificar o registo do operador nestas entidades é uma diligência mínima antes de subscrever qualquer clube.',
    },
    {
      type: 'callout',
      content:
        'Na HABTA, quando estruturamos co-investimentos, o pacto social e o regulamento de gestão são redigidos antes de qualquer angariação de capital. A transparência na divisão de direitos, na política de distribuição e nos mecanismos de saída não é um detalhe — é a condição para que a relação entre co-investidores se mantenha coerente durante todo o ciclo do projeto.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para co-investidores em Portugal',
    },
    {
      type: 'paragraph',
      content:
        'Se está a ponderar entrar num clube de investimento imobiliário — ou a constituir um —, comece por rever o pacto social com um advogado especializado em direito societário e imobiliário, valide o enquadramento fiscal com um contabilista certificado e verifique o registo do gestor no IMPIC ou na CMVM. A nossa equipa, detalhada em <a href="/servicos">serviços</a> e com casos reais em <a href="/portfolio">portefólio</a>, está disponível para uma conversa inicial sobre estruturação de co-investimento em reabilitação urbana em Lisboa, Porto e Cascais. Para aprofundar o contexto de mercado, consulte também o <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a>. Pode ainda subscrever a newsletter para análises periódicas de estruturação e mercado.',
    },
  ],
  faq: [
    {
      q: 'Qual é o ticket mínimo para entrar num clube de investimento imobiliário em Portugal?',
      a: 'Em clubes privados, o ticket mínimo situa-se tipicamente entre 25 000 € e 100 000 €, dependendo da dimensão do projeto e da estrutura jurídica. Fundos imobiliários fechados regulados pela CMVM exigem habitualmente 100 000 € ou mais por participante.',
    },
    {
      q: 'Como são tributados os lucros de um clube imobiliário em Portugal?',
      a: 'Numa SPE sujeita a IRC, os lucros são tributados a 21 % mais derrama municipal antes da distribuição. Os dividendos recebidos por sócios pessoas singulares ficam sujeitos a IRS à taxa de 28 % ou englobamento, se mais favorável. A fiscalidade específica varia com a estrutura e o perfil do investidor.',
    },
    {
      q: 'Posso sair de um clube imobiliário antes do prazo acordado?',
      a: 'Depende do pacto social. A maioria dos clubes imobiliários são veículos fechados sem liquidez garantida antes do desinvestimento final. Alguns preveem janelas de liquidez anuais ao NAV. Leia as cláusulas de saída antes de subscrever — a ausência de mecanismo de saída é frequente e vinculativa.',
    },
    {
      q: 'O gestor do clube tem de estar registado numa entidade supervisora?',
      a: 'Sim. Se o gestor exerce atividade de mediação imobiliária, deve estar registado no IMPIC. Se o veículo é classificado como produto financeiro ou fundo, a gestora necessita de autorização da CMVM. Verificar este registo é uma diligência mínima antes de qualquer compromisso.',
    },
    {
      q: 'O que é o carried interest e como afeta o meu retorno?',
      a: 'O carried interest é a percentagem de lucro adicional paga ao gestor quando o retorno supera um mínimo acordado (hurdle rate), geralmente 8 % ao ano. Um carried interest de 20 % acima do hurdle reduz o retorno líquido do investidor — quantifique o impacto nos cenários base antes de assinar.',
    },
    {
      q: 'Qual a diferença entre uma SPE e um fundo imobiliário fechado para um clube?',
      a: 'Uma SPE (Lda. ou S.A.) é mais simples e económica de constituir, mas tem menos supervisão externa e menor liquidez. Um fundo imobiliário fechado regulado pela CMVM oferece maior proteção ao investidor e reporte obrigatório, mas exige gestora licenciada e custos de compliance superiores.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. A fiscalidade e a regulação de clubes de investimento imobiliário em Portugal estão sujeitas a alterações legislativas; os valores e taxas indicados referem-se ao quadro vigente em abril de 2026. Consulte advogado, contabilista certificado e, quando aplicável, entidade supervisora antes de qualquer decisão de investimento.',
};
