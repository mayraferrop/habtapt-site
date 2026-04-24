import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'fatores-de-risco-no-mercado-imobiliario-portugues-em-2026',
  title: 'Fatores de risco no mercado imobiliário português em 2026',
  description:
    'Os principais riscos que afetam o mercado imobiliário em Portugal em 2026 — taxas de juro, regulação, liquidez e pressão fiscal — e como mitigá-los antes de investir.',
  category: 'Mercado',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-24',
  updated_at: '2026-04-24',
  excerpt:
    'Conhecer os fatores de risco no mercado imobiliário português em 2026 é o primeiro passo para proteger capital e manter retornos consistentes.',
  image: 'https://images.unsplash.com/photo-1651060782121-ce629ec94201${UNSPLASH_PARAMS}',
  tags: [
    'riscos mercado imobiliário Portugal 2026',
    'investimento imobiliário Lisboa riscos',
    'taxas de juro imobiliário Portugal',
    'regulação arrendamento Portugal 2026',
    'liquidez imóveis Portugal',
  ],
  tldr: [
    'As taxas Euribor, ainda acima de 2,5% em abril de 2026, continuam a comprimir a capacidade de financiamento e a afetar yields líquidas em Lisboa e Porto.',
    'O enquadramento regulatório do arrendamento em Portugal permanece volátil: a Lei n.º 56/2023 (Mais Habitação) introduziu restrições ao AL e limites de atualização que ainda pesam no mercado.',
    'O risco de liquidez é frequentemente subestimado: em segmentos acima de 1 M€, o tempo médio de absorção em Lisboa ultrapassa 6 meses fora de zonas prime.',
    'A pressão fiscal sobre mais-valias imobiliárias e IMI adicional (AIMI) para carteiras acima de 600 000 € pode reduzir o retorno anualizado em 1,5 a 3 pontos percentuais.',
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
        'O mercado imobiliário português encerrou 2025 com transações acima dos 27 mil milhões de euros, mas 2026 apresenta um perfil de risco diferente do de 2022 ou 2023. As variáveis macroeconómicas, regulatórias e fiscais combinam-se de forma que exige análise cuidadosa antes de qualquer decisão de alocação de capital.',
    },
    {
      type: 'paragraph',
      content:
        'Os fatores de risco no mercado imobiliário português em 2026 não são novos na sua natureza, mas a sua intensidade e simultaneidade distinguem este ciclo. Identificar cada risco, quantificá-lo e perceber como mitiga-lo é o que separa investidores com retornos consistentes de quem descobre os problemas apenas após a escritura.',
    },
    {
      type: 'heading2',
      content: 'Qual é o principal risco macroeconómico para o imobiliário em Portugal em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'O custo do financiamento continua a ser o risco macro dominante. A Euribor a 12 meses fixou-se em torno de 2,6% em abril de 2026, após a trajetória descendente iniciada pelo BCE em 2024. Ainda assim, o spread médio dos bancos portugueses em crédito habitação situa-se entre 1,0% e 1,4%, o que resulta em taxas efetivas anuais de 3,6% a 4,0% — o dobro do que muitos investidores incluíram nos seus modelos em 2021.',
    },
    {
      type: 'paragraph',
      content:
        'Para projetos alavancados a 60–70% do valor de aquisição, uma variação de 50 pontos base na Euribor altera o custo anual de financiamento em cerca de 0,3% do capital total investido. Em projetos de 18 a 24 meses, o impacto acumulado é relevante e pode eroder a margem bruta projetada em 1 a 2 pontos percentuais.',
    },
    {
      type: 'heading2',
      content: 'Como afeta a regulação do arrendamento o retorno esperado?',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023 (Mais Habitação) introduziu restrições significativas ao alojamento local (AL) em zonas de contenção, suspendeu novas licenças AL em Lisboa e Porto e estabeleceu limites à atualização de rendas em contratos anteriores a 2022. O efeito sobre yields de arrendamento foi imediato: em freguesias como Misericórdia e Santa Maria Maior, em Lisboa, a yield bruta média comprimiu 0,4 a 0,6 pontos percentuais entre 2023 e 2025.',
    },
    {
      type: 'list',
      content: [
        'Suspensão de novas licenças de alojamento local em zonas de contenção definidas pelos municípios de Lisboa e Porto.',
        'Limitação da atualização de rendas em contratos celebrados antes de 2022 ao coeficiente publicado anualmente pelo INE.',
        'Obrigação de comunicação de contratos de arrendamento à Autoridade Tributária no prazo de 30 dias.',
        'Possibilidade de os municípios aplicarem taxas municipais de AL até 25% da taxa de base.',
        'Incerteza quanto a alterações legislativas adicionais — o risco de nova regulação mantém-se elevado.',
      ],
    },
    {
      type: 'heading2',
      content: 'Que riscos fiscais pesam sobre carteiras imobiliárias acima de 600 000 €?',
    },
    {
      type: 'paragraph',
      content:
        'O Adicional ao IMI (AIMI) incide sobre o valor patrimonial tributário (VPT) agregado de imóveis pertencentes a pessoas singulares acima de 600 000 € e a pessoas coletivas acima de zero. A taxa para pessoas coletivas é de 0,4% sobre o VPT total da carteira, o que em carteiras de reabilitação com VPT médio elevado representa um custo fixo anual não desprezável.',
    },
    {
      type: 'paragraph',
      content:
        'As mais-valias imobiliárias realizadas por pessoas singulares residentes ficam sujeitas a IRS sobre 50% da mais-valia, com a taxa marginal que pode atingir 48% mais sobretaxa. Para não residentes da UE/EEE, a taxa autónoma de 28% aplica-se sobre a totalidade da mais-valia. A reinvestimento em habitação própria permanente pode excluir a mais-valia de tributação, mas as condições são restritivas.',
    },
    {
      type: 'table',
      content: {
        headers: ['Perfil do investidor', 'Tributação de mais-valias', 'AIMI aplicável', 'Nota'],
        rows: [
          ['Singular residente', 'IRS sobre 50% da MV (taxa marginal até 53%)', 'Sim, acima de 600 000 € VPT', 'Reinvestimento pode excluir tributação'],
          ['Singular não residente (UE/EEE)', '28% autónomo sobre 50% da MV', 'Não aplicável', 'Regime de equiparação a residente possível'],
          ['Singular não residente (outros)', '28% autónomo sobre totalidade da MV', 'Não aplicável', 'Sem benefício de coeficiente de desvalorização monetária'],
          ['Pessoa coletiva residente', 'IRC à taxa geral (21%) sobre MV', '0,4% sobre VPT total', 'Dedução de encargos financeiros condicionada'],
          ['Fundo de Investimento Imobiliário', 'Regime fiscal específico (artigo 22.º EBF)', 'Isento', 'Sujeito a regras de distribuição e resgate'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'O risco de liquidez é subestimado no mercado português?',
    },
    {
      type: 'paragraph',
      content:
        'Sim, de forma sistemática. A liquidez do mercado imobiliário português é assimétrica por segmento de preço. Abaixo de 400 000 € em Lisboa e do Porto, o tempo médio de absorção situa-se entre 30 e 60 dias para imóveis bem posicionados. Acima de 1 milhão de euros, o mesmo indicador ultrapassa 6 meses fora de zonas prime como o Chiado, Príncipe Real ou Foz do Douro.',
    },
    {
      type: 'paragraph',
      content:
        'Este desfasamento é crítico em projetos de reabilitação financiados com crédito de curto prazo: se a venda demora mais do que o previsto, os encargos financeiros acumulam e a margem corrói-se. Um modelo de saída com cenário pessimista de 9 meses de absorção é o mínimo prudente acima de 800 000 €.',
    },
    {
      type: 'heading3',
      content: 'Liquidez por tipologia e zona — referências de 2025–2026',
    },
    {
      type: 'list',
      content: [
        'T1 e T2 reabilitados em Bonfim (Porto): absorção média de 25–40 dias em 2025.',
        'T3 acima de 600 000 € em Cascais e Estoril: absorção média de 90–150 dias.',
        'Moradias acima de 1,5 M€ em zonas não prime de Lisboa: absorção superior a 8 meses.',
        'Frações de escritórios para conversão habitacional: mercado com profundidade limitada fora do CBD de Lisboa.',
        'Imóveis com licença de AL em zonas de contenção: desconto de transação estimado de 8–15% face a equivalentes sem restrição.',
      ],
    },
    {
      type: 'quote',
      content:
        'O risco de liquidez raramente aparece nos modelos de retorno — aparece apenas quando o mercado não absorve ao preço esperado. Em 2025, vimos projetos sólidos a sofrer pressão de margem exclusivamente por prazos de venda que superaram o previsto em 4 a 5 meses.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise interna de carteira 2025–2026',
      },
    },
    {
      type: 'heading2',
      content: 'Que riscos estruturais e de construção persistem em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'O mercado da construção em Portugal mantém pressão sobre custos e prazos. O índice de custos de construção publicado pelo INE registou um aumento acumulado de cerca de 22% entre 2021 e 2025, com materiais como aço e isolamentos a liderar. Em 2026, a estabilização é parcial: os custos de mão de obra continuam a subir acima da inflação geral, sobretudo em Lisboa e no Algarve.',
    },
    {
      type: 'list',
      content: [
        'Escassez de empreiteiros especializados em edificado antigo com alvará IMPIC adequado e agenda disponível.',
        'Derrapagens de prazo superiores a 20% do cronograma inicial são comuns em obras de reabilitação profunda.',
        'Materiais com prazos de entrega alargados (caixilharia de alumínio à medida, elevadores, sistemas AVAC) podem atrasar o fecho de obra em 6 a 12 semanas.',
        'A obrigatoriedade de certificado energético mínimo B- para imóveis com fundos de eficiência energética europeus implica custos adicionais em edifícios pré-1960.',
        'Licenciamentos em Lisboa e Porto: em 2025, o prazo médio para licenças de obra completa foi de 7 a 11 meses.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como o risco cambial e o perfil do comprador estrangeiro afetam o mercado em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Portugal continua a receber procura imobiliária de compradores estrangeiros — britanicos, americanos, brasileiros e cidadãos do Médio Oriente representam quota relevante nas zonas prime. A extinção do Visto Gold para imóveis residenciais, decretada em 2023, retirou um catalisador de procura institucional, mas o mercado de habitação premium mantém-se sustentado por migração de nómadas digitais e residência não habitual (RNH) — regime que, após a reforma de 2024, se mantém com ajustamentos.',
    },
    {
      type: 'paragraph',
      content:
        'O risco cambial é relevante para investidores com capital em dólares ou libras: a valorização do euro face a estas divisas em 2025 reduziu o poder de compra real destes segmentos em 7 a 12%. Uma depreciação adicional pode comprimir a procura no segmento de 500 000 € a 1,5 M€ onde este perfil de comprador é dominante.',
    },
    {
      type: 'heading2',
      content: 'Como mitigar os principais riscos antes de investir?',
    },
    {
      type: 'paragraph',
      content:
        'A mitigação de risco começa na fase de análise, não na gestão de problemas já instalados. Cada fator de risco identificado acima tem mecanismos específicos de controlo que devem estar integrados no modelo de investimento desde o primeiro momento.',
    },
    {
      type: 'list',
      content: [
        'Taxa de juro: usar financiamento de taxa fixa ou cap de taxa quando possível; modelar cenário com Euribor +100bp acima do spot atual.',
        'Risco regulatório: confirmar zonamento AL e licença antes da promessa; incluir cláusula resolutiva para alteração de uso.',
        'Risco fiscal: calcular AIMI e mais-valias líquidas no modelo base, não como nota de rodapé; consultar a Autoridade Tributária em casos complexos.',
        'Liquidez: definir estratégia de saída alternativa (arrendamento premium vs. venda) antes de fechar a aquisição.',
        'Construção: contratar empreiteiro com alvará IMPIC verificado; impor reserva técnica de 10–15% em edificado anterior a 1970.',
        'Mercado externo: diversificar perfil de comprador alvo; não depender exclusivamente de procura não residente em segmentos acima de 800 000 €.',
      ],
    },
    {
      type: 'callout',
      content:
        'Nenhum destes riscos é, isoladamente, impeditivo de bons retornos. O que transforma risco em perda é a ausência de identificação antecipada e de plano de contingência. Na HABTA, cada análise de viabilidade inclui uma matriz de risco explícita com impacto quantificado e medida de mitigação associada.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores que operam em Portugal em 2026',
    },
    {
      type: 'paragraph',
      content:
        'Se está a avaliar uma posição no mercado imobiliário português e quer perceber como estes fatores de risco se aplicam ao seu caso concreto, a nossa equipa, detalhada em <a href="/servicos">serviços</a>, pode realizar uma análise de viabilidade com matriz de risco integrada. Para contexto adicional, consulte também o nosso <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a> e a análise sobre <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">reabilitação urbana em Portugal</a>. Pode ainda subscrever a nossa newsletter para receber análises de mercado com periodicidade mensal.',
    },
  ],
  faq: [
    {
      q: 'Quais são os maiores riscos no mercado imobiliário português em 2026?',
      a: 'Os principais riscos são o custo de financiamento (Euribor ainda acima de 2,5%), a volatilidade regulatória no arrendamento e AL, o risco de liquidez em segmentos acima de 800 000 € e a pressão fiscal sobre mais-valias e AIMI. A combinação simultânea destes fatores é o que distingue 2026 de ciclos anteriores.',
    },
    {
      q: 'O Adicional ao IMI (AIMI) aplica-se a todos os investidores em Portugal?',
      a: 'O AIMI incide sobre pessoas singulares com VPT agregado acima de 600 000 € e sobre pessoas coletivas sem limiar mínimo, à taxa de 0,4% sobre o total do VPT. Fundos de investimento imobiliário constituídos nos termos da lei portuguesa estão isentos de AIMI.',
    },
    {
      q: 'A extinção do Visto Gold residencial afetou muito o mercado em 2026?',
      a: 'O impacto foi sentido sobretudo no segmento entre 500 000 € e 1 M€, onde a procura asiática era relevante. A procura de americanos, brasileiros e nómadas digitais compensou parcialmente, mas o mercado acima de 1 M€ fora de zonas prime registou maior tempo de absorção.',
    },
    {
      q: 'Como se calcula o impacto da Euribor no retorno de um projeto de reabilitação?',
      a: 'Para um projeto alavancado a 65% com financiamento de 18 meses, cada 50bp de variação na Euribor representa cerca de 0,3% do capital total em custo adicional. Num projeto com margem bruta de 18%, este impacto pode eroder 1,5 a 2 pontos percentuais de rentabilidade anualizada.',
    },
    {
      q: 'A Lei Mais Habitação proíbe completamente o alojamento local em Lisboa?',
      a: 'Não proíbe imóveis existentes com licença AL válida, mas suspendeu a emissão de novas licenças em zonas de contenção definidas pela Câmara Municipal de Lisboa. Imóveis com licença AL já emitida mantêm-na, salvo alteração posterior das condições de exercício.',
    },
    {
      q: 'Vale a pena investir em imóveis em Portugal apesar dos riscos em 2026?',
      a: 'Depende do perfil, prazo e capacidade de mitigação. Projetos de reabilitação em zonas com procura estrutural em Lisboa, Porto e Cascais continuam a oferecer retornos de 8 a 14% anuais brutos, mas exigem análise rigorosa de cada fator de risco antes da decisão de investimento.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. Os dados de mercado e referências legais refletem a informação disponível em abril de 2026 e estão sujeitos a alteração legislativa ou de política monetária. Consulte profissionais qualificados antes de decisões concretas de investimento imobiliário.',
};
