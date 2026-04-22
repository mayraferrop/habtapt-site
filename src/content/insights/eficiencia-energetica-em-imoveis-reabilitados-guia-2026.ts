import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'eficiencia-energetica-em-imoveis-reabilitados-guia-2026',
  title: 'Eficiência energética em imóveis reabilitados: guia operacional 2026',
  description:
    'Um guia operacional sobre eficiência energética em imóveis reabilitados em Portugal em 2026 — envolvente, janelas, sistemas AVAC, AQS, fotovoltaico, ventilação, com ordem de prioridades, custos e payback realista.',
  category: 'Sustentabilidade',
  readTime: '16 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Técnica',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'Envolvente, janelas, AVAC, AQS, ventilação e fotovoltaico — o guia HABTA para definir, em 2026, a ordem certa de intervenções de eficiência energética num imóvel reabilitado, com payback realista.',
  image: 'https://images.unsplash.com/photo-1693517596637-8190ac7afc0e?w=1600&q=80&auto=format&fit=crop',
  tags: [
    'eficiência energética Portugal 2026',
    'isolamento térmico edifícios',
    'bomba de calor residencial',
    'janelas eficientes Portugal',
    'fotovoltaico autoconsumo',
    'ventilação mecânica VMC',
    'classe A certificação energética',
    'reabilitação energética',
    'envolvente edifícios Portugal',
    'payback eficiência energética',
  ],
  tldr: [
    'A eficiência energética em reabilitação faz-se pela ordem certa: envolvente primeiro, depois vãos, depois sistemas, por último fotovoltaico.',
    'A envolvente (paredes, cobertura, pavimento) representa 40-55 por cento das perdas térmicas; intervenção aqui tem o melhor retorno estrutural.',
    'Janelas eficientes com vidro duplo low-e têm payback típico 8-15 anos; custo instalação 2026 entre 400 e 900 €/m² consoante complexidade.',
    'Bomba de calor ar-água substitui caldeira a gás com 40-65% menos consumo; payback típico 8-12 anos; obrigatório para classe A em 2026.',
    'Fotovoltaico autoconsumo é o investimento final, não o primeiro: melhora a classe mas não substitui uma envolvente fraca.',
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
        'A eficiência energética numa reabilitação não é uma coleção de intervenções. É uma sequência de decisões, por ordem de impacto e de interdependência. Saltar a ordem certa custa dinheiro — muito frequentemente, mais dinheiro do que o custo total da intervenção mal feita.',
    },
    {
      type: 'paragraph',
      content:
        'Um imóvel classe E em 2026 pode ser transformado em classe A com investimento entre 22 e 42 mil euros num T2/T3 típico em Portugal. Mas o mesmo investimento pode deixá-lo em classe B se as decisões forem tomadas pela ordem errada — por exemplo, instalar fotovoltaico antes de isolar. Este guia foca exclusivamente a componente operacional: o que fazer, por que ordem, quanto custa e qual o payback realista em 2026.',
    },
    {
      type: 'paragraph',
      content:
        'Complementa os nossos guias sobre <a href="/blog/certificacao-energetica-em-portugal-guia-completo-2026">Certificação energética em Portugal</a> e <a href="/blog/reabilitacao-sustentavel-em-portugal-materiais-sistemas-2026">Reabilitação sustentável: materiais, sistemas e certificações</a>. Se está a planear uma intervenção completa, veja também o nosso <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">Guia da reabilitação urbana em Portugal</a>.',
    },
    {
      type: 'heading2',
      content: 'A hierarquia certa das intervenções',
    },
    {
      type: 'paragraph',
      content:
        'A lei fundamental da eficiência energética em reabilitação: primeiro reduzir as necessidades, depois equipar bem, depois produzir energia. Em linguagem prática: envolvente antes de sistemas, sistemas antes de fotovoltaico. Violar esta ordem significa sobredimensionar sistemas que vão trabalhar a compensar perdas estruturais desnecessárias.',
    },
    {
      type: 'paragraph',
      content:
        'A sequência operacional que funciona:',
    },
    {
      type: 'list',
      content: [
        '<strong>1. Envolvente opaca</strong> — isolar paredes, cobertura, pavimento conforme aplicável.',
        '<strong>2. Vãos envidraçados</strong> — janelas eficientes com sombreamento correto.',
        '<strong>3. Ventilação</strong> — idealmente mecânica com recuperação de calor (VMC DF).',
        '<strong>4. AQS</strong> — bomba de calor, solar térmico ou combinação.',
        '<strong>5. Aquecimento e arrefecimento</strong> — bomba de calor ar-água, piso radiante, split-ducts.',
        '<strong>6. Iluminação e gestão</strong> — LED, eletrodomésticos A+++, controlo inteligente.',
        '<strong>7. Fotovoltaico autoconsumo</strong> — dimensionado ao consumo real, não teórico.',
      ],
    },
    {
      type: 'heading2',
      content: '1. Envolvente — onde está a maior parte das perdas',
    },
    {
      type: 'paragraph',
      content:
        'Em edifícios portugueses pré-1990, a envolvente é tipicamente responsável por 40-55 por cento das perdas térmicas. Paredes exteriores em pedra/tijolo sem isolamento, cobertura sem mais do que telha e forro, pavimento diretamente sobre zona não aquecida — todos contribuem. A intervenção na envolvente não melhora "só" o conforto; reduz a carga térmica de projeto dos sistemas em 30-50 por cento, permitindo equipamentos menores, mais eficientes e mais baratos.',
    },
    {
      type: 'heading3',
      content: 'Isolamento de paredes exteriores — ETICS vs interior',
    },
    {
      type: 'paragraph',
      content:
        'Existem duas opções principais para isolar paredes exteriores em reabilitação. ETICS (External Thermal Insulation Composite System) aplica isolamento pelo exterior com revestimento final; melhor performance térmica, elimina pontes térmicas, preserva inércia interior. Isolamento interior aplica-se pelo interior (placa isolante + placa de gesso cartonado); mais rápido e barato, mas reduz área útil e não elimina pontes térmicas. Em zonas históricas com restrições patrimoniais de fachada, o interior é frequentemente obrigatório.',
    },
    {
      type: 'table',
      content: {
        headers: ['Solução', 'Custo 2026 (€/m² parede)', 'Impacto', 'Adequado para'],
        rows: [
          ['ETICS EPS 80-100 mm', '45–75', '-40 a -55% perdas', 'Edifícios sem restrição patrimonial'],
          ['ETICS cortiça 60-80 mm', '65–95', '-35 a -50% perdas', 'Edifícios com requisito ambiental'],
          ['Isolamento interior fibra madeira 60 mm', '55–85', '-30 a -45% perdas', 'Edifícios históricos'],
          ['Isolamento interior EPS 50 mm', '35–55', '-25 a -40% perdas', 'Solução económica'],
          ['Sistema caixa de ar (isolamento 40 mm)', '25–40', '-15 a -25% perdas', 'Paredes duplas existentes'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'Isolamento de coberturas',
    },
    {
      type: 'paragraph',
      content:
        'A cobertura é frequentemente a maior fonte isolada de perdas térmicas em edifícios antigos. A intervenção é relativamente simples e tem excelente retorno. Soluções típicas 2026:',
    },
    {
      type: 'list',
      content: [
        '<strong>Cobertura inclinada com desvão habitável</strong> — isolamento na vertente (fibra madeira, cortiça ou lã mineral 100-140 mm); custo 25-45 €/m².',
        '<strong>Cobertura inclinada com desvão não habitável</strong> — isolamento horizontal sobre o forro; solução mais barata (15-28 €/m²) e frequentemente mais eficiente.',
        '<strong>Cobertura plana / terraço</strong> — isolamento em cobertura invertida (cortiça ICB ou XPS 80-100 mm); custo 40-70 €/m² instalado.',
      ],
    },
    {
      type: 'heading3',
      content: 'Isolamento de pavimentos sobre zonas não aquecidas',
    },
    {
      type: 'paragraph',
      content:
        'Pavimentos sobre garagens, caves ou zonas exteriores podem representar 10-15% das perdas e são frequentemente esquecidos. Intervenção típica: aplicação de isolamento pelo teto da zona não aquecida (30-60 mm de EPS, lã mineral ou cortiça). Custo 18-35 €/m². Impacto real no conforto do piso acima.',
    },
    {
      type: 'heading2',
      content: '2. Janelas — a equação de vão',
    },
    {
      type: 'paragraph',
      content:
        'As janelas têm tripla função térmica: isolamento, controlo solar e estanquidade. Uma caixilharia antiga em madeira com vidro simples tem coeficiente U típico de 4,5-6,0 W/m²·K; uma caixilharia moderna com vidro duplo low-e argon varia entre 1,1 e 1,8 W/m²·K — uma redução de 3 a 5 vezes nas perdas por vão.',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipo caixilharia + vidro', 'Coef. U (W/m²·K)', 'Custo 2026 (€/m² vão)'],
        rows: [
          ['Alumínio s/ RPT + vidro simples', '5,5–6,5', '250–400 (substituição)'],
          ['Alumínio c/ RPT + vidro duplo', '1,8–2,5', '350–550'],
          ['Madeira lamelada + vidro duplo low-e', '1,4–1,8', '550–900'],
          ['PVC + vidro duplo low-e argon', '1,2–1,6', '400–700'],
          ['Madeira-alumínio + vidro triplo low-e', '0,9–1,2', '700–1.200'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Pontos de atenção. Primeiro, em edifícios históricos pode haver restrição patrimonial ao desenho da caixilharia — é frequente ter de manter madeira com vidro interior suplementar (solução composta). Segundo, a instalação é crítica: uma janela excelente mal instalada tem pior performance do que uma janela mediana bem instalada. Terceiro, sombreamento exterior (estores, portadas, toldos) é complementar essencial para conforto de verão — particularmente em orientação poente e sul em Portugal.',
    },
    {
      type: 'heading2',
      content: '3. Ventilação — o ponto esquecido',
    },
    {
      type: 'paragraph',
      content:
        'Num edifício bem isolado e com janelas estanques, a ventilação passa a ser um ponto crítico. Sem ventilação adequada, o CO2 acumula, a humidade sobe e o risco de bolor aumenta. Há três opções principais:',
    },
    {
      type: 'list',
      content: [
        '<strong>Ventilação natural controlada</strong> — abertura de janelas com disciplina; baixo custo, mas perde energia em invernos frios e verões quentes.',
        '<strong>Ventilação mecânica simples fluxo (VMC SF)</strong> — extratores nas zonas húmidas (WC, cozinha) com admissão pelas aberturas higroreguláveis; custo 600-1.500 €.',
        '<strong>Ventilação mecânica dupla fluxo com recuperação de calor (VMC DF)</strong> — insuflação e extração mecânicas com permutador de calor; recupera 80-90% do calor do ar extraído; custo 2.500-5.500 € em T2/T3 consoante complexidade.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Para edifícios em reabilitação com isolamento melhorado, VMC DF é a solução recomendada — particularmente se o objetivo é classe energética A. O recuperador de calor pode reduzir em 30-40% as necessidades de aquecimento face a ventilação natural.',
    },
    {
      type: 'heading2',
      content: '4. Águas Quentes Sanitárias (AQS)',
    },
    {
      type: 'paragraph',
      content:
        'O AQS representa tipicamente 15-25 por cento do consumo energético de um imóvel residencial. Três opções dominam em 2026:',
    },
    {
      type: 'table',
      content: {
        headers: ['Solução AQS', 'Investimento T2/T3', 'Payback típico'],
        rows: [
          ['Bomba de calor dedicada AQS (termoacumulador)', '1.800–3.200 €', '5–8 anos'],
          ['Solar térmico 2-3 m² + apoio elétrico/gás', '3.200–5.500 €', '6–10 anos'],
          ['Solar térmico + bomba de calor combinada', '5.500–9.500 €', '7–11 anos'],
          ['Bomba de calor ar-água AVAC+AQS integrada', 'Parte do custo AVAC', '—'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, o caminho mais eficiente é frequentemente integrar AQS com o sistema AVAC numa bomba de calor ar-água centralizada. Evita duplicação de equipamentos e permite dimensionamento conjunto. Em apartamentos com exposição solar, um coletor térmico de 2-3 m² como pré-aquecimento continua a entregar excelente payback.',
    },
    {
      type: 'heading2',
      content: '5. Aquecimento e arrefecimento',
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, a bomba de calor ar-água é o sistema dominante em reabilitação residencial bem executada em Portugal. Oferece aquecimento, arrefecimento e AQS a partir de eletricidade, com COP (Coefficient of Performance) entre 3,0 e 4,5 consoante condições. Os sistemas de distribuição:',
    },
    {
      type: 'list',
      content: [
        '<strong>Piso radiante hidráulico</strong> — conforto superior, trabalho em baixa temperatura (30-35 °C), ideal com bomba de calor; custo 45-75 €/m² instalado.',
        '<strong>Radiadores de baixa temperatura</strong> — substituição de radiadores antigos por unidades dimensionadas para 45-55 °C; custo 350-600 € por radiador + tubagem.',
        '<strong>Split-ducts (ar condicionado central)</strong> — vantagem em edifícios com tetos rebaixáveis; fornece aquecimento e arrefecimento; custo 3.500-6.500 € para T2/T3.',
        '<strong>Multi-splits</strong> — solução modular; aceitável em reabilitação mais ligeira; custo 2.500-5.000 € para T2/T3.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Custo típico total do sistema AVAC em reabilitação T2/T3: entre 7.500 e 14.500 euros com bomba de calor ar-água + distribuição. Payback operacional típico: 8-12 anos face a caldeira a gás + AC convencional.',
    },
    {
      type: 'heading2',
      content: '6. Iluminação e eletrodomésticos',
    },
    {
      type: 'paragraph',
      content:
        'Parte frequentemente subestimada. Troca completa para iluminação LED num T2/T3 custa 400-900 euros e reduz consumo de iluminação em 70-85 por cento. Eletrodomésticos classe A+++ (máquinas de lavar, frigorífico, placa indução) têm premium de preço modesto face a classes inferiores mas reduzem significativamente o consumo total. Contribuição para classe energética é menor, mas relevante para consumo real e fatura mensal.',
    },
    {
      type: 'heading2',
      content: '7. Fotovoltaico autoconsumo — o passo final',
    },
    {
      type: 'paragraph',
      content:
        'O fotovoltaico só faz sentido como passo final, depois de reduzir as necessidades: um sistema bem dimensionado produz energia cujo valor é maximizado quando o edifício consome pouco. Instalar fotovoltaico num edifício sem isolamento é equivalente a instalar torneiras de alta vazão num edifício com fugas — mais produção só para compensar perdas evitáveis.',
    },
    {
      type: 'table',
      content: {
        headers: ['Sistema fotovoltaico', 'Custo 2026', 'Produção anual (Lisboa)', 'Payback'],
        rows: [
          ['3 kWp monofásico residencial', '4.000–6.500 €', '~4.500 kWh', '7–10 anos'],
          ['5 kWp monofásico residencial', '6.000–9.500 €', '~7.500 kWh', '8–11 anos'],
          ['6,9 kWp trifásico (máximo doméstico)', '8.500–13.000 €', '~10.400 kWh', '9–12 anos'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, o regime de autoconsumo com injeção do excedente na rede continua a ser a solução padrão. Para apartamentos sem cobertura própria, as Comunidades de Energia Renovável permitem partilhar produção entre vizinhos — solução mais recente mas com maturidade crescente.',
    },
    {
      type: 'heading2',
      content: 'Caso operacional integrado: T2 em Lisboa',
    },
    {
      type: 'paragraph',
      content:
        'Exemplo representativo. T2 de 85 m² em Lisboa, construção 1950, classe energética inicial E. Plano operacional completo pela ordem correta:',
    },
    {
      type: 'table',
      content: {
        headers: ['Fase', 'Intervenção', 'Investimento'],
        rows: [
          ['1', 'Isolamento interior paredes (fibra madeira 50 mm)', '5.800 €'],
          ['1', 'Isolamento cobertura (cortiça 100 mm)', '2.700 €'],
          ['2', '7 vãos novos madeira-alumínio vidro duplo low-e', '10.500 €'],
          ['3', 'VMC dupla fluxo com recuperação', '3.800 €'],
          ['4 + 5', 'Bomba calor ar-água 5 kW + piso radiante WC/cozinha + radiadores BT', '10.200 €'],
          ['6', 'Iluminação LED completa + placa indução', '1.400 €'],
          ['7', 'Fotovoltaico 3 kWp autoconsumo', '5.200 €'],
          ['', 'TOTAL (sem IVA)', '39.600 €'],
          ['', 'Classe final esperada', 'A'],
          ['', 'Poupança operacional anual vs referência', '~1.400 €'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Aplicando IVA a 6% em ARU (em vez de 23%) e aproveitando o programa Edifícios+ Sustentáveis quando aplicável, o custo líquido pode comprimir-se para 26-30 mil euros. O payback financeiro puro situa-se em 20-25 anos; incluindo o prémio de valor no mercado (8-12% sobre valor do imóvel), o payback efetivo desce para 8-12 anos.',
    },
    {
      type: 'callout',
      content:
        'A decisão de eficiência energética em reabilitação raramente tem payback financeiro puro no curto prazo. O retorno vem de três fontes combinadas: poupança operacional, prémio de valor de mercado, e preservação de liquidez futura face a endurecimento regulatório.',
    },
    {
      type: 'heading2',
      content: 'Ordem de prioridades em orçamento apertado',
    },
    {
      type: 'paragraph',
      content:
        'Nem todos os projetos têm orçamento para intervenção completa. Para quem tem de escolher, por ordem de impacto por euro:',
    },
    {
      type: 'list',
      content: [
        '<strong>Primeiro:</strong> isolamento de cobertura (quando aplicável — muito alto impacto/custo).',
        '<strong>Segundo:</strong> substituição de caldeira antiga ou termoacumulador elétrico por bomba de calor.',
        '<strong>Terceiro:</strong> janelas novas com vidro duplo low-e.',
        '<strong>Quarto:</strong> isolamento de paredes exteriores.',
        '<strong>Quinto:</strong> fotovoltaico 3-5 kWp autoconsumo.',
        '<strong>Sexto:</strong> VMC dupla fluxo.',
        '<strong>Último (mas rápido):</strong> LED, eletrodomésticos eficientes.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Esta lista é indicativa — em edifícios específicos a ordem muda consoante estado inicial. Uma auditoria energética prévia (500-1.500 €) identifica rapidamente os pontos de maior retorno para o imóvel em causa.',
    },
    {
      type: 'quote',
      content:
        'A lei da reabilitação energética eficiente: reduza primeiro, equipe depois, produza por último. Violar esta ordem é a forma mais fiável de gastar muito e obter pouco.',
      source: {
        name: 'Equipa Técnica HABTA',
        role: 'Prática interna',
      },
    },
    {
      type: 'heading2',
      content: 'Erros operacionais comuns',
    },
    {
      type: 'list',
      content: [
        '<strong>Instalar fotovoltaico num edifício sem isolamento</strong> — produção excedente em horas de baixo consumo, sistema sobredimensionado face ao consumo real reduzido.',
        '<strong>Trocar janelas sem tratar caixas de estore</strong> — as caixas são frequentemente pontes térmicas piores que as próprias janelas antigas.',
        '<strong>Isolamento sem barreira pára-vapor correta</strong> — risco de condensação intersticial e patologia.',
        '<strong>Bomba de calor subdimensionada para o edifício sem isolar</strong> — trabalha ao limite, COP desce, equipamento dura menos.',
        '<strong>Piso radiante sem isolamento inferior</strong> — até 30% do calor pode dissipar-se para a laje, em vez de aquecer o espaço.',
        '<strong>Ignorar pontes térmicas em varandas e lajes</strong> — criam zonas frias interiores, com risco de humidade localizada.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como a HABTA pode ajudar',
    },
    {
      type: 'paragraph',
      content:
        'A HABTA dimensiona intervenções de eficiência energética por ordem e escala, integradas no projeto de reabilitação global. Não vemos eficiência como um apêndice — vemos como um pilar de decisão ao nível da arquitetura, do orçamento e da estratégia de saída. Explore os nossos <a href="/servicos">serviços</a>, veja projetos reais no <a href="/portfolio">portefólio</a> ou contacte a equipa a partir da página de <a href="/contacto">contacto</a>.',
    },
  ],
  faq: [
    {
      q: 'Qual é a intervenção de eficiência energética com melhor retorno?',
      a: 'Depende do estado inicial do imóvel, mas nas reabilitações típicas o isolamento da cobertura costuma ter o melhor rácio retorno/custo, seguido da substituição de caldeira antiga por bomba de calor. Janelas eficientes vêm em terceiro. A ordem certa é: reduzir necessidades (envolvente) antes de instalar sistemas eficientes.',
    },
    {
      q: 'Vale a pena instalar fotovoltaico se o meu imóvel não está isolado?',
      a: 'Não é a melhor ordem. Um sistema fotovoltaico produz energia — se o edifício está a consumir muito por falta de isolamento, continua a consumir muito depois. Primeiro reduza necessidades (isolamento, janelas, bomba de calor), depois dimensione o fotovoltaico ao consumo já eficientizado. Inverter a ordem resulta em sobredimensionamento do PV e subutilização.',
    },
    {
      q: 'Quanto custa levar um imóvel de classe E para classe A?',
      a: 'Num T2/T3 urbano típico em Portugal em 2026, entre 22 e 42 mil euros (sem IVA) para a intervenção completa. Com IVA a 6% em ARU e programas de apoio (Edifícios+ Sustentáveis) ativos, o custo líquido pode comprimir-se 25-40 por cento. O retorno vem da poupança operacional (40-65% menos energia), do prémio de preço (8-12% sobre valor do imóvel) e da preservação de liquidez futura face a regulação.',
    },
    {
      q: 'Posso isolar paredes exteriores num edifício pombalino?',
      a: 'Pelo exterior, geralmente não — as fachadas de edifícios protegidos têm restrições patrimoniais. Pelo interior, sim: fibra de madeira ou cortiça 40-60 mm colocadas sobre a parede existente, com barreira pára-vapor e placa de acabamento. Reduz área útil em ~4-6 cm por parede, mas melhora significativamente a classe energética e o conforto.',
    },
    {
      q: 'A bomba de calor aguenta o frio do inverno português?',
      a: 'Sim. As bombas de calor ar-água modernas mantêm COP superior a 2,5 mesmo com temperaturas exteriores de 0-5 °C (condições típicas do Porto/Lisboa em invernos frios). Para zonas serranas muito frias (interior norte ou Beiras altas) pode ser necessário apoio elétrico em dias muito frios. Para Lisboa, Porto e Cascais, a bomba de calor é solução completa e eficiente.',
    },
    {
      q: 'Piso radiante ou radiadores — o que escolher em reabilitação?',
      a: 'Piso radiante oferece conforto superior e funciona em baixa temperatura (ideal com bomba de calor), mas exige obra significativa (enchimento do piso, acabamento novo). Radiadores de baixa temperatura dimensionados corretamente são uma alternativa mais rápida e mais barata, com conforto quase equivalente. Solução frequente e equilibrada: piso radiante em WC e cozinha, radiadores BT no resto.',
    },
    {
      q: 'Como sei se a minha reabilitação vai conseguir classe A?',
      a: 'Antes da obra, peça simulação a um perito qualificado em certificação energética com o projeto de reabilitação detalhado. O perito calcula a classe esperada com base nas medidas previstas. É prática standard em projetos bem geridos. Se o alvo for classe A, o projeto pode ajustar-se ainda em papel — muito mais barato do que corrigir em obra.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento técnico ou regulamentar personalizado. Valores de custo, payback e características de sistemas são indicativos e variam com projeto, fornecedor e região. Para dimensionamento e escolha concreta de soluções, consulte técnicos especializados e peritos qualificados em certificação energética.',
};
