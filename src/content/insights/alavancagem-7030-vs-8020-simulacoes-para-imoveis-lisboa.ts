import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'alavancagem-7030-vs-8020-simulacoes-para-imoveis-lisboa',
  title: 'Alavancagem 70/30 vs 80/20: simulações para imóveis Lisboa 2026',
  description:
    'Comparativo detalhado entre alavancagem 70/30 e 80/20 em imóveis de Lisboa: rentabilidade, risco de cash flow e impacto fiscal em 2026, com simulações reais.',
  category: 'Investimento',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-29',
  updated_at: '2026-04-29',
  excerpt:
    'A escolha entre alavancagem 70/30 e 80/20 em imóveis de Lisboa em 2026 define a rentabilidade do capital próprio e o perfil de risco ao longo de todo o ciclo de investimento.',
  image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350${UNSPLASH_PARAMS}',
  tags: [
    'alavancagem imobiliária Lisboa 2026',
    'simulação crédito habitação investimento',
    'LTV 80 imóveis Portugal',
    'rentabilidade capital próprio imobiliário',
    'financiamento reabilitação urbana Lisboa',
  ],
  tldr: [
    'Com LTV 80%, a rentabilidade do capital próprio (ROE) num imóvel em Lisboa pode superar 9–11% ao ano, mas o serviço da dívida consome mais cash flow mensal e eleva o risco em cenários de subida de taxa.',
    'Com LTV 70%, o ROE situa-se tipicamente entre 7–9% ao ano, com maior margem de segurança e menor exposição a stress de taxa — adequado a perfis mais conservadores ou a ciclos de mercado incertos.',
    'A diferença de 10 pontos percentuais no financiamento implica, num imóvel de 400 000 € em Lisboa, mais 40 000 € de capital próprio comprometido e uma prestação mensal cerca de 180–220 € inferior.',
    'O imposto sobre mais-valias e a dedutibilidade de juros ao abrigo do Código do IRS condicionam o retorno líquido final — o cenário fiscal tem de ser modelado antes da decisão de estrutura.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-29',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'A alavancagem é a variável que mais amplifica o retorno num investimento imobiliário — e a que mais amplifica a perda quando o mercado corrige. Em Lisboa, onde os preços por metro quadrado em zonas como a Misericórdia ou o Príncipe Real superam os 6 500 €/m², a escolha entre financiar 70% ou 80% do valor não é apenas técnica: é estratégica.',
    },
    {
      type: 'paragraph',
      content:
        'Este artigo apresenta simulações concretas para imóveis de investimento em Lisboa em 2026, comparando dois rácios de alavancagem — LTV 70% e LTV 80% — nos seus efeitos sobre o cash flow mensal, a rentabilidade do capital próprio e o risco em cenários adversos. Os valores baseiam-se em condições de mercado vigentes e em pressupostos explicitados ao longo do texto.',
    },
    {
      type: 'heading2',
      content: 'O que significa LTV 70% e LTV 80% num imóvel de Lisboa?',
    },
    {
      type: 'paragraph',
      content:
        'LTV (Loan-to-Value) é o rácio entre o montante financiado e o valor do imóvel. Um LTV de 80% significa que o banco financia 80% e o investidor aporta 20% de capital próprio; um LTV de 70% implica 30% de capitais próprios. Para imóveis destinados a investimento (não habitação própria permanente), os bancos portugueses têm operado, desde as recomendações macroprudenciais do Banco de Portugal, com LTV máximo de 80% — e com LTV de 70% para imóveis que não sejam habitação permanente do mutuário.',
    },
    {
      type: 'paragraph',
      content:
        'Na prática, muitos investidores que adquirem para arrendamento ou para valorização e revenda têm acesso a LTV entre 65% e 75%, dependendo da instituição e do perfil financeiro. O LTV 80% fica reservado, em regra, a habitação própria permanente.',
    },
    {
      type: 'heading2',
      content: 'Quais os pressupostos das simulações para Lisboa 2026?',
    },
    {
      type: 'paragraph',
      content:
        'As simulações abaixo usam um imóvel de referência situado num bairro histórico de Lisboa — tipicamente Alfama, Santa Maria Maior ou Misericórdia — com as seguintes características: valor de aquisição de 400 000 €, área útil de 85 m², após reabilitação com potencial de arrendamento de longa duração a 1 800 €/mês ou venda a 490 000 €.',
    },
    {
      type: 'list',
      content: [
        'Valor de aquisição: 400 000 € (inclui custos de transação — IMT, IS, registo).',
        'Custos de reabilitação estimados: 60 000 € (integrados no financiamento apenas quando o banco aceita crédito para obras; caso contrário, capital próprio).',
        'Taxa de juro referência: Euribor 12 meses + spread de 1,3%, com Euribor projetada a 2,75% para 2026.',
        'Prazo de empréstimo: 30 anos, prestações constantes em regime de anuidades (sistema francês).',
        'Rendimento bruto de arrendamento: 1 800 €/mês (yield bruta ~5,4% sobre os 400 000 €).',
        'Taxa de desocupação estimada: 5% ao ano (equivalente a ~3 semanas por ano).',
        'Despesas de gestão, condomínio e manutenção: 8% do rendimento bruto anual.',
      ],
    },
    {
      type: 'table',
      content: {
        headers: [
          'Parâmetro',
          'Cenário LTV 70%',
          'Cenário LTV 80%',
        ],
        rows: [
          ['Valor do imóvel', '400 000 €', '400 000 €'],
          ['Montante financiado', '280 000 €', '320 000 €'],
          ['Capital próprio', '120 000 €', '80 000 €'],
          ['Taxa efetiva estimada (2026)', '4,05%', '4,05%'],
          ['Prestação mensal (30 anos)', '~1 340 €', '~1 532 €'],
          ['Cash flow mensal líquido (arrendamento)', '+~218 €', '+~26 €'],
          ['ROE anual estimado (arrendamento)', '~7,8%', '~10,2%'],
          ['Ponto de break-even (yield bruta mínima)', '4,0%', '4,6%'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Como se compara a rentabilidade do capital próprio entre os dois cenários?',
    },
    {
      type: 'paragraph',
      content:
        'O ROE — retorno sobre o capital próprio — é o indicador central para o investidor alavancado, porque mede o rendimento face ao capital que realmente saiu do seu bolso. Com LTV 80%, comprometer 80 000 € para gerar um cash flow anual líquido de ~312 € mensais após despesas resulta num ROE de arrendamento de ~10,2%. Com LTV 70%, comprometer 120 000 € para gerar ~218 €/mês líquidos corresponde a ~7,8% de ROE.',
    },
    {
      type: 'paragraph',
      content:
        'Estes valores referem-se exclusivamente ao componente de arrendamento. Se o investidor incluir a valorização esperada do imóvel — Lisboa registou valorização média anual de 5–7% em imóveis reabilitados em zonas históricas entre 2022 e 2025, segundo dados do INE e das principais plataformas de transação — o ROE total sobre um horizonte de 5 anos sobe para 14–18% em LTV 80% e para 11–14% em LTV 70%.',
    },
    {
      type: 'heading3',
      content: 'O efeito de alavancagem funciona nos dois sentidos',
    },
    {
      type: 'paragraph',
      content:
        'Se o imóvel desvalorizar 10% — cenário pouco provável em Lisboa histórica mas não impossível em contexto de subida abrupta de taxas ou abrandamento económico — a perda sobre o capital próprio é de 50 000 € em LTV 80% (62,5% do capital comprometido) e de 40 000 € em LTV 70% (33% do capital comprometido). A alavancagem amplifica a perda na mesma proporção em que amplifica o ganho.',
    },
    {
      type: 'heading2',
      content: 'Qual o impacto de uma subida de taxa de 100 pontos base em cada cenário?',
    },
    {
      type: 'paragraph',
      content:
        'Com a Euribor variável, um aumento de 1 ponto percentual na taxa de referência traduz-se num acréscimo de ~233 €/mês na prestação do cenário LTV 80% e de ~204 €/mês no LTV 70%. No cenário LTV 80%, isso elimina praticamente todo o cash flow positivo de arrendamento (~26 €/mês iniciais) e coloca o investimento em território de cash flow negativo.',
    },
    {
      type: 'list',
      content: [
        'LTV 70%: com +100 bps na Euribor, cash flow mensal passa de +218 € para +14 € — ainda positivo, com margem residual.',
        'LTV 80%: com +100 bps na Euribor, cash flow mensal passa de +26 € para −207 € — o investidor passa a subscrever mensalmente o imóvel.',
        'Para neutralizar o risco de taxa, considerar fixar taxa ou contratar cap de taxa de juro — instrumentos disponíveis na maioria dos bancos portugueses para crédito a investimento.',
        'Uma reserva de liquidez equivalente a 6 prestações é recomendável em qualquer dos cenários, mas especialmente no LTV 80%.',
      ],
    },
    {
      type: 'quote',
      content:
        'Nos projetos que acompanhamos em Lisboa, o LTV 80% justifica-se quando o investidor tem liquidez complementar para absorver 12–18 meses de cash flow negativo em stress. Sem essa almofada, o LTV 70% protege o retorno real — porque evita a venda forçada no pior momento do ciclo.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de carteira 2024–2025, 120 projetos analisados',
      },
    },
    {
      type: 'heading2',
      content: 'Como a fiscalidade condiciona o retorno líquido em cada estrutura?',
    },
    {
      type: 'paragraph',
      content:
        'Em Portugal, os rendimentos de arrendamento são tributados em IRS na categoria F, com taxa autónoma de 28% (ou englobamento, se mais favorável). Os juros do empréstimo são dedutíveis ao rendimento bruto de arrendamento nos termos do artigo 41.º do Código do IRS — o que cria uma vantagem fiscal direta para o investidor alavancado face ao investidor com capital próprio total.',
    },
    {
      type: 'paragraph',
      content:
        'Com LTV 80% e uma taxa efetiva de 4,05%, os juros pagos no primeiro ano ascendem a ~12 950 €. Estes juros reduzem a base tributável da categoria F, o que representa uma poupança fiscal de ~3 626 € (28% × 12 950 €) face a um investimento sem dívida. No cenário LTV 70%, os juros do primeiro ano totalizam ~11 340 €, com poupança fiscal de ~3 175 €.',
    },
    {
      type: 'heading3',
      content: 'Mais-valias na revenda: o prazo de detenção é decisivo',
    },
    {
      type: 'paragraph',
      content:
        'As mais-valias imobiliárias em Portugal são tributadas a 50% do ganho a englobamento (para residentes) ou a taxas autónomas específicas, conforme o regime aplicável e as alterações introduzidas pelo Orçamento do Estado. Para imóveis adquiridos e reabilitados em Áreas de Reabilitação Urbana (ARU), podem existir isenções ou reduções — verifique o enquadramento junto da Autoridade Tributária ou de um contabilista certificado, pois as condições são específicas a cada caso.',
    },
    {
      type: 'heading2',
      content: 'Cenário de revenda: como se compara o retorno total em 5 anos?',
    },
    {
      type: 'paragraph',
      content:
        'Assumindo valorização do imóvel de 22% em 5 anos (conservador face à média histórica de Lisboa em zonas reabilitadas) e venda a 488 000 €, o ganho bruto de capital é de 88 000 €. O cash flow acumulado de arrendamento líquido (após juros, despesas e impostos) será de ~13 100 € no LTV 70% e de ~1 600 € no LTV 80%. O retorno total sobre capital próprio em 5 anos é de ~84% no LTV 80% e de ~68% no LTV 70% — mas o risco percorrido para chegar ao LTV 80% foi significativamente maior.',
    },
    {
      type: 'table',
      content: {
        headers: [
          'Componente de retorno (5 anos)',
          'LTV 70% — 120 000 € CP',
          'LTV 80% — 80 000 € CP',
        ],
        rows: [
          ['Ganho de capital bruto (venda a 488 000 €)', '88 000 €', '88 000 €'],
          ['Cash flow arrendamento acumulado (líquido)', '~13 100 €', '~1 600 €'],
          ['Capital reembolsado na amortização (5 anos)', '~18 200 €', '~20 800 €'],
          ['Retorno total estimado sobre capital próprio', '~68%', '~84%'],
          ['ROE anualizado equivalente', '~11,0%', '~13,0%'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Que perfil de investidor se adequa a cada estrutura?',
    },
    {
      type: 'paragraph',
      content:
        'O LTV 70% é adequado para investidores que prioritizam estabilidade de cash flow, têm horizonte de longo prazo (7+ anos), ou operam num ciclo de mercado onde as taxas de juro apresentam volatilidade não desprezável. É também a estrutura preferível quando o imóvel tem maior exposição a períodos de vazio ou quando a reabilitação implica obra pesada com cronograma incerto.',
    },
    {
      type: 'paragraph',
      content:
        'O LTV 80% adequa-se a investidores com liquidez complementar robusta, horizonte mais curto orientado para a mais-valia (3–5 anos), alta convicção na valorização do ativo e capacidade de absorver cash flow negativo em cenários de stress de taxa. Em imóveis de Alfama ou Bairro Alto com potencial de revalorização pós-obra superior a 25%, o maior ROE pode justificar o risco acrescido.',
    },
    {
      type: 'list',
      content: [
        'LTV 70%: cash flow mais estável, menor risco de rutura em stress de taxa, adequado a estratégias de rendimento de longo prazo.',
        'LTV 80%: ROE mais elevado, maior exposição a ciclos de taxa e de mercado, exige liquidez de reserva de pelo menos 6–12 prestações.',
        'Em ambos os cenários, a qualidade do ativo e a microlocalização determinam a yield e a liquidez de saída — a estrutura de financiamento amplifica, não substitui, a qualidade do imóvel.',
        'O acesso efetivo a LTV 80% em imóveis de investimento (não habitação própria permanente) depende da política de crédito de cada banco e das recomendações vigentes do Banco de Portugal.',
      ],
    },
    {
      type: 'callout',
      content:
        'Na HABTA, estruturamos cada operação com base numa análise conjunta da alavancagem, do cash flow esperado e do cenário fiscal antes de qualquer compromisso de capital. Uma estrutura mal calibrada pode transformar um bom imóvel num investimento com retorno líquido abaixo do custo de oportunidade — mesmo que o mercado se comporte favoravelmente.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se está a estruturar um investimento em imóveis em Lisboa em 2026 e quer modelar a alavancagem ideal para o seu perfil de risco e objetivos de retorno, a nossa equipa está disponível para uma análise personalizada — consulte os nossos <a href="/servicos">serviços</a> ou explore o <a href="/portfolio">portefólio</a> de projetos em curso. Para aprofundar o enquadramento, recomendamos também a leitura do <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a> e do artigo sobre os <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">cinco pilares para avaliar um projeto de reabilitação urbana</a>. Subscreva a newsletter para receber simulações e análises de mercado diretamente na sua caixa de correio.',
    },
  ],
  faq: [
    {
      q: 'Qual o LTV máximo disponível para investimento imobiliário em Portugal em 2026?',
      a: 'Para imóveis que não sejam habitação própria permanente, os bancos portugueses operam tipicamente com LTV entre 65% e 75%, por recomendação macroprudencial do Banco de Portugal. O LTV de 80% está reservado, em regra, à habitação própria permanente.',
    },
    {
      q: 'Os juros do crédito para investimento imobiliário são dedutíveis em IRS?',
      a: 'Sim. Os juros suportados com empréstimos para a obtenção de rendimentos de arrendamento são dedutíveis ao rendimento bruto da categoria F, nos termos do artigo 41.º do Código do IRS, reduzindo a base tributável.',
    },
    {
      q: 'O que é o ROE num investimento imobiliário alavancado?',
      a: 'ROE (Return on Equity) mede o retorno gerado face ao capital próprio investido. Com LTV 80% num imóvel de 400 000 € em Lisboa, o capital próprio é 80 000 € — o ROE é calculado sobre esse valor, não sobre o preço total do imóvel.',
    },
    {
      q: 'Como proteger o cash flow em caso de subida da Euribor?',
      a: 'Contratar taxa fixa, um cap de taxa de juro ou manter uma reserva de liquidez equivalente a 6–12 prestações são as principais formas de proteção. Em LTV 80%, um acréscimo de 100 bps na Euribor pode inverter o cash flow de arrendamento para negativo.',
    },
    {
      q: 'Vale a pena usar LTV 80% em imóveis para reabilitação em Lisboa?',
      a: 'Depende do horizonte, da liquidez disponível e da convicção na valorização do ativo. Em zonas com forte potencial de revalorização (Alfama, Misericórdia), o ROE mais elevado pode justificar o risco, desde que exista almofada de liquidez para suportar stress de taxa.',
    },
    {
      q: 'Como é tributada a mais-valia na venda de um imóvel reabilitado em Lisboa?',
      a: 'Em Portugal, as mais-valias imobiliárias de residentes são tributadas em IRS, com 50% do ganho sujeito a englobamento. Em imóveis em ARU pode haver benefícios fiscais — as condições exatas dependem do regime vigente e devem ser verificadas junto da Autoridade Tributária.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. As simulações apresentadas baseiam-se em pressupostos explicitados e em condições de mercado vigentes na data de publicação; valores reais variam com a política de crédito de cada banco, as condições do imóvel e a situação fiscal individual. Consulte profissionais qualificados antes de decisões concretas de financiamento ou investimento.',
};
