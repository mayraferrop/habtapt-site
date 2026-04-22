import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'yield-bruto-vs-yield-liquido-o-que-os-investidores-confundem-em-portugal',
  title: 'Yield bruto vs yield líquido: o que os investidores confundem em Portugal',
  description:
    'Yield bruto e yield líquido são conceitos distintos com impacto real no retorno imobiliário. Perceba as diferenças, os custos que erode a rentabilidade e como calcular corretamente em Portugal.',
  category: 'Investimento',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'A diferença entre yield bruto e yield líquido em Portugal pode chegar a 2,5 pontos percentuais — e ignorá-la é um dos erros mais frequentes em imobiliário de rendimento.',
  image: 'https://images.unsplash.com/photo-1501080254287-69204825cf5f${UNSPLASH_PARAMS}',
  tags: [
    'yield líquido imobiliário Portugal',
    'rentabilidade arrendamento Lisboa',
    'calcular yield imóvel Porto',
    'fiscalidade rendas Portugal 2026',
    'retorno investimento imobiliário Portugal',
  ],
  tldr: [
    'O yield bruto divide a renda anual pelo preço de compra; o yield líquido desconta IMI, condomínio, seguros, manutenção e IRS/IRC — a diferença típica em Lisboa é de 1,8 a 2,5 pontos percentuais.',
    'Em Portugal, rendimentos de arrendamento habitacional estão sujeitos a uma taxa liberatória de 25 % em IRS (regime geral) ou podem beneficiar de taxas reduzidas ao abrigo do regime de arrendamento acessível.',
    'Um imóvel com yield bruto de 5,5 % em Alfama pode apresentar yield líquido abaixo de 3,2 % depois de fiscalidade, vazio e custos recorrentes — tornando a análise bruta enganosa.',
    'A análise correta inclui também a taxa de capitalização (cap rate) e o retorno total, que combina rendimento com valorização de capital ao longo do período de detenção.',
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
        'A confusão entre yield bruto e yield líquido é um dos erros de análise mais frequentes entre investidores imobiliários em Portugal. Um imóvel apresentado com "yield de 6 %" quase nunca entrega esse número ao proprietário — e a diferença não é cosmética: pode representar mais de 30 % do rendimento efetivo.',
    },
    {
      type: 'paragraph',
      content:
        'Este artigo explica como calcular yield bruto e yield líquido de forma rigorosa no contexto português, quais os custos que as análises comerciais sistematicamente omitem e como evitar decisões de investimento assentes em números que não correspondem ao rendimento real.',
    },
    {
      type: 'heading2',
      content: 'O que é o yield bruto e como se calcula?',
    },
    {
      type: 'paragraph',
      content:
        'O yield bruto é o rácio mais simples de rentabilidade imobiliária: divide a renda anual bruta (sem qualquer dedução) pelo preço total de aquisição do imóvel. Se um apartamento custou 300 000 € e gera 1 250 € mensais de renda, o yield bruto é (1 250 × 12) / 300 000 = 5,0 %.',
    },
    {
      type: 'paragraph',
      content:
        'O problema deste indicador é que não reflete nenhuma das obrigações reais do proprietário. Serve como métrica de triagem rápida para comparar imóveis numa fase inicial — mas nunca como base de decisão final. Em muitos anúncios e propostas comerciais em Portugal, o yield apresentado é sempre o bruto, o que cria uma ilusão de rentabilidade.',
    },
    {
      type: 'heading2',
      content: 'O que é o yield líquido e o que deduz em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'O yield líquido desconta ao rendimento bruto todos os encargos efetivos do proprietário antes de calcular o rácio. Em Portugal, esses encargos incluem impostos, custos de posse e provisionamento para vazio e manutenção.',
    },
    {
      type: 'list',
      content: [
        'IMI (Imposto Municipal sobre Imóveis): entre 0,3 % e 0,45 % do valor patrimonial tributário (VPT) para habitação urbana, variando por município.',
        'IRS sobre rendas: taxa liberatória de 25 % sobre os rendimentos da categoria F, aplicável a pessoas singulares no regime geral; taxas reduzidas (entre 5 % e 15 %) disponíveis ao abrigo do regime de arrendamento acessível.',
        'Condomínio: nas frações em prédios constituídos em propriedade horizontal, os encargos de condomínio mensais são da responsabilidade do proprietário quando não contratualmente transferidos.',
        'Seguro multiriscos-habitação: obrigatório em imóveis com financiamento e recomendado em todos os casos; custo anual médio de 150–400 € conforme cobertura e localização.',
        'Manutenção e pequenas reparações: provisão técnica recomendada de 0,5 %–1 % do valor do imóvel por ano, especialmente em edificado pré-1970.',
        'Taxa de vazio: estimativa de períodos sem inquilino entre contratos; em Lisboa situa-se entre 3 % e 6 % ao ano em imóveis de mercado livre.',
        'Custos de gestão: se recorrer a empresa de gestão de arrendamento, as comissões em Portugal variam tipicamente entre 8 % e 12 % da renda mensal.',
      ],
    },
    {
      type: 'heading2',
      content: 'Qual a diferença real entre yield bruto e líquido em Lisboa e Porto?',
    },
    {
      type: 'paragraph',
      content:
        'Com base em imóveis analisados pela equipa HABTA em 2025 e 2026, a diferença entre yield bruto e yield líquido em Lisboa situa-se entre 1,8 e 2,5 pontos percentuais, dependendo do perfil fiscal do investidor e da estrutura de encargos. No Porto, a compressão é ligeiramente menor — entre 1,5 e 2,2 p.p. — dada a estrutura de VPT historicamente mais baixa.',
    },
    {
      type: 'table',
      content: {
        headers: ['Cenário', 'Renda anual bruta', 'Encargos totais estimados', 'Yield bruto', 'Yield líquido'],
        rows: [
          ['T2 Alfama, Lisboa — 320 000 €', '17 600 €', '7 040 €', '5,5 %', '3,3 %'],
          ['T1 Bonfim, Porto — 180 000 €', '9 720 €', '3 499 €', '5,4 %', '3,5 %'],
          ['T2 Cascais centro — 420 000 €', '21 000 €', '7 770 €', '5,0 %', '3,2 %'],
          ['T3 Misericórdia, Lisboa — 550 000 €', '25 300 €', '9 614 €', '4,6 %', '2,8 %'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Os valores acima consideram: IRS à taxa liberatória de 25 %, IMI a 0,3 % do VPT, condomínio de 80 €/mês, seguro de 250 €/ano, vazio de 4 % e manutenção de 0,6 % do valor do imóvel. Não incluem gestão externa. São estimativas ilustrativas — cada imóvel exige cálculo específico.',
    },
    {
      type: 'heading2',
      content: 'Como a fiscalidade portuguesa erode o rendimento de arrendamento?',
    },
    {
      type: 'paragraph',
      content:
        'Em Portugal, os rendimentos de arrendamento habitacional auferidos por pessoas singulares são tributados na categoria F do IRS. A taxa liberatória geral é de 25 %, aplicada sobre o valor ilíquido das rendas recebidas. Esta taxa desce progressivamente para imóveis integrados no regime de arrendamento acessível — regulado nos termos da legislação vigente — podendo chegar a 5 % para contratos com rendas 50 % abaixo do valor de referência de mercado.',
    },
    {
      type: 'paragraph',
      content:
        'Para investidores que detêm imóveis em nome de pessoa coletiva (sociedade), o rendimento de arrendamento é tributado em IRC à taxa geral de 21 % (mais derramas municipais e estadual conforme o lucro tributável). Esta estrutura pode ser vantajosa ou desvantajosa conforme o volume de imóveis, o nível de endividamento e a estratégia de saída — e não existe resposta universal.',
    },
    {
      type: 'heading3',
      content: 'Despesas dedutíveis que muitos investidores desconhecem',
    },
    {
      type: 'list',
      content: [
        'IMI pago no ano a que respeitam as rendas é dedutível ao rendimento da categoria F.',
        'Despesas de condomínio e obras de conservação do imóvel arrendado são dedutíveis, desde que devidamente documentadas com fatura com NIF.',
        'Juros de empréstimos contraídos para aquisição do imóvel arrendado são dedutíveis ao rendimento líquido da categoria F.',
        'Prémios de seguros de incêndio e multirriscos relativos ao imóvel arrendado são igualmente dedutíveis.',
        'Quotizações para associações de senhorios e honorários de advogado relacionados com contratos de arrendamento têm enquadramento dedutível.',
      ],
    },
    {
      type: 'quote',
      content:
        'Num T2 em Lisboa adquirido a 300 000 €, a diferença entre calcular o rendimento com e sem dedução das despesas elegíveis pode representar uma poupança fiscal de 600 a 1 200 € por ano — o equivalente a um mês de renda que muitos proprietários simplesmente deixam na Autoridade Tributária por desconhecimento.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise interna 2025–2026',
      },
    },
    {
      type: 'heading2',
      content: 'Cap rate, yield e retorno total: como se relacionam?',
    },
    {
      type: 'paragraph',
      content:
        'O yield líquido é um dos três indicadores que devem ser lidos em conjunto numa análise de investimento imobiliário. O cap rate (taxa de capitalização) é calculado antes de qualquer estrutura de financiamento, dividindo o resultado operacional líquido (NOI) pelo valor de mercado do ativo — serve para comparar imóveis independentemente de como são financiados.',
    },
    {
      type: 'paragraph',
      content:
        'O retorno total acrescenta à componente de rendimento (yield líquido) a valorização de capital estimada durante o período de detenção. Em Lisboa, a valorização média anual do edificado reabilitado em zonas históricas situou-se entre 3,5 % e 5,5 % ao ano entre 2019 e 2025, segundo dados do INE e da Câmara Municipal de Lisboa. Um imóvel com yield líquido de 3,2 % mas valorização anual de 4,5 % oferece retorno total próximo de 7,7 % — uma perspetiva muito diferente da que a análise de rendimento isolada transmite.',
    },
    {
      type: 'heading2',
      content: 'Que yield líquido é razoável esperar em Portugal em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Em Lisboa, yields líquidos entre 2,8 % e 3,8 % são o intervalo realista para imóveis habitacionais de qualidade em zonas consolidadas como Príncipe Real, Chiado ou Estrela. Em zonas de maior pressão de valorização — Alfama, Mouraria, Intendente — a compressão de yield líquido para 2,5 %–3,2 % é compensada pela perspetiva de mais-valias.',
    },
    {
      type: 'paragraph',
      content:
        'No Porto, especialmente em Cedofeita e no Bonfim, yields líquidos de 3,5 %–4,2 % são ainda alcançáveis em imóveis reabilitados de qualidade intermédia. Em Cascais, Estoril e Parede, a procura de arrendamento de média e longa duração por expatriados suporta rendas mais estáveis, mas os preços de aquisição já pressionam o yield líquido para a faixa dos 2,8 %–3,5 %.',
    },
    {
      type: 'heading2',
      content: 'Como calcular o yield líquido do seu imóvel passo a passo',
    },
    {
      type: 'list',
      content: [
        '1. Calcule a renda anual bruta: renda mensal contratada × 12.',
        '2. Estime o vazio anual: aplique 3 %–6 % à renda anual bruta conforme a zona e histórico.',
        '3. Apure os encargos recorrentes: IMI + condomínio + seguros + manutenção provisionada.',
        '4. Calcule o rendimento tributável: renda recebida menos despesas dedutíveis elegíveis.',
        '5. Aplique a taxa de IRS ou IRC aplicável ao seu perfil e estrutura de detenção.',
        '6. Divida o resultado líquido final pelo preço total de aquisição (incluindo IMT, Imposto de Selo e escritura).',
        '7. Compare com o custo de capital — se financiar, o yield líquido deve superar a taxa de juro do crédito após imposto.',
      ],
    },
    {
      type: 'callout',
      content:
        'Na HABTA, nenhuma análise de investimento avança apenas com yield bruto. O modelo interno calcula sistematicamente o yield líquido em três cenários (conservador, base e otimista) e cruza o resultado com o cap rate e o retorno total projetado a 5 e a 10 anos. É esta disciplina que diferencia uma decisão informada de uma aposta.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se quer aplicar esta metodologia a um imóvel concreto — seja em Lisboa, Porto ou Cascais — a nossa equipa está disponível para uma análise de rentabilidade detalhada. Consulte os nossos <a href="/servicos">serviços</a> ou veja os projetos disponíveis no <a href="/portfolio">portefólio</a>. Para aprofundar, recomendamos também <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">os cinco pilares para avaliar um projeto de reabilitação urbana</a> e o <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a>. Pode subscrever a newsletter para receber análises futuras diretamente na sua caixa de correio.',
    },
  ],
  faq: [
    {
      q: 'Qual a diferença entre yield bruto e yield líquido em Portugal?',
      a: 'O yield bruto divide a renda anual pelo preço de compra sem qualquer dedução. O yield líquido desconta IMI, condomínio, seguros, manutenção, vazio e fiscalidade. Em Lisboa, a diferença típica é de 1,8 a 2,5 pontos percentuais.',
    },
    {
      q: 'Que taxa de IRS se aplica às rendas em Portugal em 2026?',
      a: 'Rendimentos de arrendamento habitacional (categoria F) estão sujeitos a taxa liberatória de 25 % no regime geral. Contratos ao abrigo do regime de arrendamento acessível beneficiam de taxas reduzidas, entre 5 % e 15 %, conforme o desconto aplicado à renda de referência.',
    },
    {
      q: 'O IMI é dedutível ao rendimento de arrendamento em Portugal?',
      a: 'Sim. O IMI pago no ano a que respeitam as rendas é dedutível ao rendimento líquido da categoria F em IRS, tal como despesas de condomínio, obras de conservação, seguros e juros de empréstimo para aquisição do imóvel arrendado.',
    },
    {
      q: 'Que yield líquido é razoável esperar num T2 em Lisboa em 2026?',
      a: 'Em zonas consolidadas de Lisboa (Chiado, Estrela, Príncipe Real), um T2 reabilitado oferece tipicamente yield líquido entre 2,8 % e 3,6 %. Zonas em apreciação como Mouraria ou Intendente podem apresentar yields ligeiramente inferiores, compensados por maior valorização de capital.',
    },
    {
      q: 'Vale a pena deter imóveis em empresa para otimizar o yield líquido?',
      a: 'Depende do volume de imóveis, do nível de endividamento e da estratégia de saída. A taxa de IRC é de 21 % mas permite deduções operacionais mais amplas. Recomenda-se análise caso a caso com contabilista ou fiscalista especializado em imobiliário.',
    },
    {
      q: 'O que é o cap rate e como difere do yield líquido?',
      a: 'O cap rate divide o resultado operacional líquido (NOI) pelo valor de mercado do ativo, independentemente de financiamento. O yield líquido considera a estrutura fiscal do investidor. O cap rate serve para comparar ativos; o yield líquido mede o retorno efetivo para o proprietário.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. Os valores e taxas indicados são estimativas ilustrativas referentes a 2026 e podem variar por imóvel, município e perfil fiscal do investidor. A legislação fiscal portuguesa pode ser alterada. Consulte profissionais qualificados antes de decisões concretas de investimento ou estruturação fiscal.',
};
