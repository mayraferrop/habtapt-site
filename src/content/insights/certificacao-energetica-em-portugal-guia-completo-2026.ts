import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'certificacao-energetica-em-portugal-guia-completo-2026',
  title: 'Certificação energética em Portugal: guia completo 2026',
  description:
    'Um guia prático sobre a certificação energética de imóveis em Portugal em 2026 — classes A+ a F, cálculo, peritos qualificados, custo, validade, impacto no valor de mercado e caminho para classificação A.',
  category: 'Sustentabilidade',
  readTime: '17 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Reabilitação Sustentável',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'Classes, cálculo, validade, impacto no valor de mercado e o que muda com a nova EPBD — o guia HABTA para entender a certificação energética de imóveis em Portugal em 2026 sem ruído.',
  image: 'https://images.unsplash.com/photo-1556983852-43bf21186b2a?w=1600&q=80&auto=format&fit=crop',
  tags: [
    'certificação energética Portugal 2026',
    'classe energética A+',
    'SCE Sistema Certificação Energética',
    'DL 118/2013',
    'EPBD IV',
    'valor de mercado classe energética',
    'perito qualificado ADENE',
    'eficiência energética imóveis Portugal',
    'descarbonização edificado Portugal',
    'reabilitação energética',
  ],
  tldr: [
    'A certificação energética é obrigatória na venda e arrendamento de praticamente todos os imóveis em Portugal desde 2013, com validade de 10 anos.',
    'Classes variam de A+ (mais eficiente) a F (menos eficiente); a classe é calculada por perito qualificado inscrito na ADENE.',
    'Em 2026, o preço médio de uma certificação oscila entre 120 € (T1/T2) e 300 € (T4+), consoante a complexidade.',
    'Estudos mostram um prémio de preço de 8 a 15 por cento para imóveis classe A/A+ face a imóveis classe D/E comparáveis.',
    'A EPBD IV (transposta até 2026) obriga à descarbonização progressiva do edificado — imóveis classe F/G terão limites de transação a partir de 2030.',
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
        'Em 2026 a certificação energética deixou de ser um papel que se pendura na parede para cumprir obrigação legal. Passou a ser um fator real de preço, de velocidade de venda e, cada vez mais, de viabilidade regulamentar. Este guia consolida o essencial — sem jargão técnico desnecessário.',
    },
    {
      type: 'paragraph',
      content:
        'A certificação energética de um imóvel em Portugal é o documento que atesta, de forma padronizada, o desempenho energético da unidade — quanta energia consome para aquecimento, arrefecimento, águas quentes sanitárias e iluminação, expressa numa escala de A+ (mais eficiente) a F (menos eficiente). O sistema chama-se Sistema de Certificação Energética dos Edifícios (SCE), é regulado pelo Decreto-Lei n.º 118/2013 (e atualizações subsequentes) e administrado pela ADENE, a Agência para a Energia.',
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, a certificação deixou de ser apenas uma formalidade administrativa. Cruzam-se três dinâmicas que a tornaram relevante para o investidor: a regulamentação europeia (EPBD IV) a exigir descarbonização acelerada do edificado, a crescente sensibilidade do mercado ao custo energético e a diferença mensurável de preço entre imóveis bem e mal classificados. Este guia organiza o essencial — o que é, como se calcula, quanto custa, quanto vale e o que muda nos próximos anos.',
    },
    {
      type: 'paragraph',
      content:
        'Se está a avaliar um projeto de reabilitação, leia também o nosso <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">Guia da reabilitação urbana em Portugal 2026</a> e os <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">Cinco pilares para avaliar uma reabilitação</a>. Em específico sobre eficiência, detalhamos as opções operacionais em <a href="/blog/eficiencia-energetica-em-imoveis-reabilitados-guia-2026">Eficiência energética em imóveis reabilitados</a>.',
    },
    {
      type: 'heading2',
      content: 'O que é a certificação energética (SCE)',
    },
    {
      type: 'paragraph',
      content:
        'O Sistema de Certificação Energética dos Edifícios (SCE) é o quadro legal que obriga à avaliação do desempenho energético dos edifícios em Portugal. Aplica-se a edifícios novos, a grandes reabilitações e, desde 2013, a qualquer venda ou arrendamento de imóveis residenciais ou de serviços. O objetivo é duplo: dar ao comprador ou inquilino informação transparente sobre o consumo esperado do imóvel, e orientar o parque edificado nacional no sentido da descarbonização.',
    },
    {
      type: 'paragraph',
      content:
        'O documento emitido é o Certificado Energético, identificado por um número único. Para além da classe (de A+ a F), indica as necessidades anuais de energia do imóvel, as principais causas da classificação obtida e, talvez o mais útil na prática, medidas de melhoria com indicação do payback típico. É um documento público — qualquer interessado pode consultar o certificado de um imóvel no Portal SCE.',
    },
    {
      type: 'heading2',
      content: 'As classes energéticas explicadas',
    },
    {
      type: 'paragraph',
      content:
        'A escala vai de A+ a F, com uma lógica baseada no rácio entre as necessidades de energia do imóvel e uma referência padrão (RNT — Rácio de classe energética). Quanto menor o rácio, melhor o desempenho. A tabela abaixo resume as classes em 2026 e o que significa cada uma em termos práticos.',
    },
    {
      type: 'table',
      content: {
        headers: ['Classe', 'Rácio (RNT)', 'Desempenho típico'],
        rows: [
          ['A+', '≤ 0,25', 'Excecional — edifício passivo ou quase'],
          ['A', '≤ 0,50', 'Muito bom — típico de nova construção atual'],
          ['B', '≤ 0,75', 'Bom — reabilitação bem executada'],
          ['B-', '≤ 1,00', 'Regular / mediano — reabilitação parcial'],
          ['C', '≤ 1,50', 'Mínimo aceitável — envolvente envelhecida'],
          ['D', '≤ 2,00', 'Fraco — sem intervenção energética'],
          ['E', '≤ 2,50', 'Mau — consumo elevado, conforto limitado'],
          ['F', '> 2,50', 'Muito mau — prioridade a reabilitação energética'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Para contextualizar: a construção nova em Portugal, ao abrigo do REH (Regulamento de Desempenho Energético dos Edifícios de Habitação) em vigor, tem de obter no mínimo classe B-. Muitos projetos recentes obtêm classe A ou A+ com relativa facilidade, sobretudo quando incluem sistemas AQS com bomba de calor e fotovoltaico. Imóveis anteriores a 1990, sem intervenção, situam-se tipicamente em D/E ou mesmo F.',
    },
    {
      type: 'heading2',
      content: 'Como é calculada a classe',
    },
    {
      type: 'paragraph',
      content:
        'A classe energética resulta de um modelo de cálculo padronizado que considera quatro dimensões principais: necessidades anuais de energia para aquecimento (Nic), arrefecimento (Nvc), águas quentes sanitárias (Nac) e, em edifícios de serviços, iluminação e ventilação mecânica (Ntc). O perito qualificado recolhe em visita ao imóvel as características construtivas (envolvente, vãos, inércia térmica), os sistemas (equipamentos de AVAC, AQS, eventuais fontes renováveis) e calcula o RNT usando as ferramentas oficiais.',
    },
    {
      type: 'paragraph',
      content:
        'É um modelo normativo, não uma medição de consumo real. Isso tem implicações importantes: duas famílias diferentes no mesmo imóvel vão ter faturas de energia distintas consoante hábitos de uso, mas a classe energética é a mesma. Por outro lado, permite comparabilidade estrita entre imóveis — o que é o seu propósito.',
    },
    {
      type: 'heading2',
      content: 'Quem emite — os peritos qualificados ADENE',
    },
    {
      type: 'paragraph',
      content:
        'Apenas peritos qualificados inscritos na ADENE podem emitir certificados energéticos em Portugal. Existem três tipos de peritos (PQ I, PQ II e PQ III), consoante o tipo de edifício. Para residencial, o PQ I é suficiente; para edifícios de serviços de grande dimensão, é necessário PQ II ou PQ III.',
    },
    {
      type: 'paragraph',
      content:
        'A relação com o perito é direta — o proprietário contrata, o perito visita, faz o cálculo e submete o certificado no Portal SCE. Em 2026, há vários milhares de peritos ativos em Portugal, com concorrência saudável, particularmente em Lisboa, Porto e Cascais. Recomenda-se validar a inscrição no Portal SCE antes de contratar.',
    },
    {
      type: 'heading2',
      content: 'Quanto custa e quanto demora',
    },
    {
      type: 'paragraph',
      content:
        'O preço de uma certificação energética em 2026 depende da tipologia, da complexidade construtiva e da região. Para unidades residenciais em meio urbano, as ordens de grandeza típicas.',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipologia', 'Preço típico 2026', 'Prazo médio'],
        rows: [
          ['T0 / T1', '120–180 €', '3 a 7 dias'],
          ['T2 / T3', '150–220 €', '3 a 7 dias'],
          ['T4 e superior', '200–350 €', '5 a 10 dias'],
          ['Moradia isolada', '250–500 €', '7 a 14 dias'],
          ['Edifício de serviços pequeno', '500–1.500 €', '2 a 4 semanas'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Aos preços acrescem encargos do Portal SCE (taxa de registo variável, tipicamente 30-60 €) e eventuais custos de deslocação em imóveis fora dos principais centros. O pagamento mais barato costuma não ser o melhor indicador de qualidade — um bom perito identifica medidas de melhoria concretas e úteis, para além do cálculo obrigatório.',
    },
    {
      type: 'heading2',
      content: 'Quando é obrigatória',
    },
    {
      type: 'paragraph',
      content:
        'A certificação energética é obrigatória em Portugal nas seguintes situações:',
    },
    {
      type: 'list',
      content: [
        '<strong>Venda de imóvel</strong> — certificado válido tem de constar na promessa e na escritura; o comprador não assina sem ele.',
        '<strong>Arrendamento</strong> — incluindo renovações; o contrato exige referência ao certificado.',
        '<strong>Construção nova</strong> — o certificado emite-se na conclusão da obra e antes da utilização.',
        '<strong>Grande reabilitação</strong> — quando a intervenção abrange mais de 25% do valor do edifício ou envolve alterações estruturais relevantes, é necessário recertificar.',
        '<strong>Promoção e publicidade</strong> — anúncios imobiliários devem indicar a classe energética desde 2013.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Existem exceções limitadas: imóveis monumentais classificados com restrições patrimoniais absolutas que impeçam qualquer intervenção de melhoria energética, imóveis para demolição, e edifícios de reduzida dimensão (≤ 50 m²) em determinadas condições. Na prática, para 95% dos imóveis de investimento, a certificação é obrigatória.',
    },
    {
      type: 'heading2',
      content: 'Validade e renovação',
    },
    {
      type: 'paragraph',
      content:
        'Um certificado energético em Portugal é válido por 10 anos desde a emissão, para edifícios de habitação, e por 6 ou 8 anos para edifícios de serviços, consoante a dimensão e tipologia. Findo o prazo, é necessário emitir novo certificado antes de qualquer operação (venda ou arrendamento). Se o imóvel foi objeto de intervenção relevante que altere o desempenho, a recertificação pode ser exigida antes do prazo, particularmente em sede de grande reabilitação.',
    },
    {
      type: 'paragraph',
      content:
        'Um certificado emitido em 2016 estará, em 2026, próximo do fim de validade. Para quem pondera colocar um imóvel à venda em 2026-2027 com certificado de 2016, o caminho inteligente é: primeiro verificar se alguma intervenção entretanto (substituição de janelas, caldeira, isolamento) permite subir a classe; só depois emitir o novo certificado. Um PQ experiente pode ser um bom consultor informal nesta decisão.',
    },
    {
      type: 'heading2',
      content: 'O impacto real no valor de mercado',
    },
    {
      type: 'paragraph',
      content:
        'Esta é a questão mais relevante para o investidor: a classe energética afeta o valor de transação? A resposta em 2026 é sim, e de forma crescente. Estudos internacionais (nomeadamente o RICS Europe, 2024) apontam prémios entre 7 e 15 por cento para imóveis classe A/A+ face a imóveis comparáveis classe D/E, no mercado europeu. Em Portugal, estudos do ISEG/ADENE apontam diferenças comparáveis — com ampliação nos últimos anos à medida que o tema entra no radar do comprador.',
    },
    {
      type: 'paragraph',
      content:
        'A natureza deste prémio é dupla. Primeiro, há a componente de custo operacional — uma classe A poupa tipicamente 50-70 por cento em energia face a uma classe D, o que se traduz em 500-1.500 € anuais de fatura evitada num T2/T3 médio. Segundo, há a componente de risco regulamentar — imóveis D/E/F têm o tempo a correr contra si, com exigências regulamentares europeias apertar-se na próxima década.',
    },
    {
      type: 'table',
      content: {
        headers: ['Comparação', 'Prémio médio de preço', 'Razão principal'],
        rows: [
          ['Classe A/A+ vs C', '+5 a +10%', 'Conforto + poupança energia'],
          ['Classe A/A+ vs D/E', '+8 a +15%', 'Conforto + poupança + compliance futuro'],
          ['Classe B vs D/E', '+3 a +8%', 'Poupança energia'],
          ['Classe D/E vs F', 'Sem prémio — F penaliza -5 a -10%', 'Risco regulatório'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'O que muda com a EPBD IV',
    },
    {
      type: 'paragraph',
      content:
        'A Diretiva Europeia sobre o Desempenho Energético dos Edifícios (EPBD IV), aprovada em 2024 e em transposição nacional em 2025-2026, muda a lógica estrutural do mercado. Quatro pontos críticos para quem investe em Portugal:',
    },
    {
      type: 'list',
      content: [
        '<strong>Metas de classe mínima para vendas</strong> — Estados-membros têm de definir classe energética mínima para venda/arrendamento, com ampliação progressiva até 2030-2033.',
        '<strong>Renovation wave obrigatório para F/G</strong> — imóveis das piores classes terão obrigação de melhoria até classe mínima definida, em prazos definidos.',
        '<strong>Descarbonização total dos sistemas até 2040</strong> — proibição progressiva de equipamentos fósseis (caldeiras a gás) em nova instalação e substituição.',
        '<strong>Obrigatoriedade de fotovoltaico em edifícios novos e grandes reabilitações</strong> — progressiva, com exceções para edifícios históricos.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Para o investidor isto significa, de forma prática, que comprar imóveis classe F ou G em 2026 sem plano de melhoria é aceitar um risco regulatório crescente nos próximos 5-10 anos. Por outro lado, é também onde podem surgir as melhores oportunidades — quem compra bem e reabilita com método fica com um ativo em conformidade e valorizado.',
    },
    {
      type: 'callout',
      content:
        'A EPBD IV não é um compromisso ambiental abstrato — é um calendário regulamentar com impacto direto no valor de transação. Um imóvel classe F comprado em 2026 sem plano claro de melhoria pode ver a liquidez comprimir-se a partir de 2030-2032.',
    },
    {
      type: 'heading2',
      content: 'Como melhorar uma classificação',
    },
    {
      type: 'paragraph',
      content:
        'Subir uma classe energética é quase sempre possível, mas nem todas as intervenções têm o mesmo retorno. A ordem de prioridades, com payback típico:',
    },
    {
      type: 'table',
      content: {
        headers: ['Intervenção', 'Impacto na classe', 'Payback típico'],
        rows: [
          ['Substituir janelas antigas por vidros duplos eficientes', '+1 classe típica', '8–15 anos'],
          ['Isolar cobertura / terraço', '+0,5 a +1 classe', '5–10 anos'],
          ['Isolar paredes exteriores (ETICS / interior)', '+1 a +2 classes', '10–20 anos'],
          ['Substituir caldeira a gás por bomba de calor', '+0,5 a +1,5 classe', '8–12 anos'],
          ['Instalar solar térmico para AQS', '+0,5 classe', '6–10 anos'],
          ['Instalar fotovoltaico autoconsumo', '+1 classe (efeito em RNT)', '8–12 anos'],
          ['LED em iluminação e eletrodomésticos A+++', 'Pequeno (<0,3 classe)', '2–4 anos'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Na prática, uma reabilitação bem planeada que combine isolamento de envolvente, janelas eficientes e bomba de calor pode levar um imóvel classe D para classe A com investimento de 25-40 mil euros num T2/T3. Detalhamos este caminho operacional em <a href="/blog/eficiencia-energetica-em-imoveis-reabilitados-guia-2026">Eficiência energética em imóveis reabilitados: guia 2026</a> e em <a href="/blog/reabilitacao-sustentavel-em-portugal-materiais-sistemas-2026">Reabilitação sustentável em Portugal</a>.',
    },
    {
      type: 'heading2',
      content: 'Erros comuns de quem certifica',
    },
    {
      type: 'list',
      content: [
        '<strong>Pedir o certificado demasiado cedo na obra</strong> — antes da conclusão de sistemas. Resulta em classe inferior à final.',
        '<strong>Não informar o perito de sistemas renováveis instalados</strong> — solar térmico e fotovoltaico têm de ser documentados para contribuírem para a classe.',
        '<strong>Ignorar as medidas de melhoria sugeridas no certificado</strong> — são intencionalmente práticas e com payback.',
        '<strong>Escolher o perito só pelo preço</strong> — um perito que não visita o imóvel com atenção pode classificá-lo abaixo do potencial real.',
        '<strong>Não renovar o certificado antes de colocar à venda</strong> — imóvel sem certificado válido pode atrasar a escritura semanas.',
      ],
    },
    {
      type: 'quote',
      content:
        'Em 2026 um certificado energético deixou de ser um papel e passou a ser um dos ativos do imóvel. Quem investe em reabilitação e não projeta a classe alvo antes da obra está a deixar valor em cima da mesa.',
      source: {
        name: 'Equipa de Reabilitação Sustentável HABTA',
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
        'A HABTA integra planeamento energético desde o primeiro dia dos projetos de reabilitação. Trabalhamos com peritos qualificados de confiança, desenhamos medidas de melhoria por ordem de payback, e confirmamos a classe alvo antes da intervenção — não depois. Se tem um imóvel com classe baixa e quer entender o que é possível, explore os nossos <a href="/servicos">serviços</a>, veja projetos reais no <a href="/portfolio">portefólio</a> ou contacte a equipa a partir da página de <a href="/contacto">contacto</a>.',
    },
  ],
  faq: [
    {
      q: 'A certificação energética é mesmo obrigatória para vender?',
      a: 'Sim. Desde 2013 que a venda de qualquer imóvel em Portugal exige certificado energético válido. Tem de constar na promessa, na escritura e deve ser referido na publicidade. Sem certificado, o notário não lavra a escritura. As únicas exceções são edifícios monumentais com restrições patrimoniais absolutas e imóveis muito pequenos em condições muito específicas.',
    },
    {
      q: 'Quanto custa certificar energeticamente um apartamento em 2026?',
      a: 'Para tipologias T1 a T3 em meio urbano, o preço típico é 150-220 euros, mais a taxa do Portal SCE (30-60 euros). Moradias isoladas ou tipologias grandes (T4+) situam-se entre 250 e 500 euros. Edifícios de serviços variam muito com a dimensão. Sempre que possível, peça duas cotações e valide a inscrição do perito no Portal SCE da ADENE.',
    },
    {
      q: 'Quanto tempo demora a obter o certificado?',
      a: 'Entre 3 e 14 dias úteis no residencial, consoante a complexidade e a disponibilidade do perito. O processo envolve: visita ao imóvel (1-2 horas), recolha de dados técnicos (envolvente, sistemas), cálculo e emissão no Portal SCE. Em momentos de procura intensa (início da primavera, pré-verão) os prazos podem alongar-se; agende com margem.',
    },
    {
      q: 'Um certificado emitido há 8 anos ainda vale?',
      a: 'Sim, se não excedeu os 10 anos de validade no residencial. Mas, em 2026, um certificado de 2016 está a poucos anos do fim de validade. Se planeia vender em 2026-2027, vale a pena considerar emitir novo certificado, particularmente se entretanto o imóvel teve melhorias energéticas — pode subir de classe e beneficiar o preço de transação.',
    },
    {
      q: 'Qual é o impacto real da classe energética no preço de venda?',
      a: 'Estudos recentes apontam prémios de 7 a 15 por cento para classe A/A+ face a classe D/E em produto comparável no mercado europeu — com Portugal a convergir para esta referência. O efeito é mais forte quando a classe A é genuína (envolvente + sistemas + renováveis) do que quando é obtida por atalho (apenas fotovoltaico). O mercado está cada vez mais atento ao detalhe.',
    },
    {
      q: 'Consigo levar um imóvel de classe D para classe A?',
      a: 'Sim, é possível na maioria dos imóveis. A combinação típica é isolamento de cobertura e paredes exteriores, substituição de janelas, instalação de bomba de calor para AQS/aquecimento e fotovoltaico para autoconsumo. Investimento indicativo num T2/T3: 25-40 mil euros. Em reabilitação completa em ARU com IVA a 6% e incentivos "Edifícios+ Sustentáveis", o payback pode ser materialmente inferior ao que parece à primeira vista.',
    },
    {
      q: 'O que muda em Portugal com a EPBD IV?',
      a: 'A nova diretiva europeia obriga a classes energéticas mínimas para transação em prazos progressivos (tipicamente 2030-2033 para as piores classes), à descarbonização dos sistemas até 2040 e à instalação de fotovoltaico em edifícios novos e grandes reabilitações. Portugal está a transpor a diretiva em 2025-2026. Para quem compra classe F/G em 2026, existe risco regulamentar crescente que exige plano de reabilitação claro no horizonte do investimento.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento técnico ou regulamentar personalizado. As classes energéticas, metodologias de cálculo e prazos regulamentares podem alterar-se por decisão legislativa ou por transposição da EPBD IV. Para decisões concretas, consulte um perito qualificado inscrito na ADENE.',
};
