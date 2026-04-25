import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'isolamento-termico-em-edificios-pombalinos-limitacoes-e-solucoes',
  title: 'Isolamento térmico em edifícios pombalinos: limitações e soluções',
  description:
    'Como melhorar o desempenho térmico de edifícios pombalinos em Lisboa respeitando a estrutura de gaiola e as restrições patrimoniais — opções técnicas, custos e incentivos disponíveis.',
  category: 'Sustentabilidade',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Sustentabilidade',
  date: '2026-04-25',
  updated_at: '2026-04-25',
  excerpt:
    'Isolar termicamente um edifício pombalino é tecnicamente possível, mas exige soluções adaptadas à gaiola de madeira e às exigências patrimoniais dos centros históricos de Lisboa.',
  image: 'https://images.unsplash.com/photo-1693517596637-8190ac7afc0e${UNSPLASH_PARAMS}',
  tags: [
    'isolamento térmico edifícios pombalinos Lisboa',
    'reabilitação energética centro histórico',
    'eficiência energética imóveis antigos Portugal',
    'isolamento interior paredes pombalinas',
    'certificação energética reabilitação Lisboa',
  ],
  tldr: [
    'O isolamento pelo exterior (ETICS) está geralmente vedado em fachadas classificadas ou em ARU com proteção patrimonial — a solução dominante é o isolamento pelo interior com lã mineral ou aglomerado de cortiça expandida.',
    'Em edifícios pombalinos, espessuras de isolamento de 40–60 mm de cortiça ou lã de rocha reduzem as perdas térmicas nas paredes em 50–65%, mas implicam perda de área útil de 3–5 cm por parede.',
    'O programa Casa Eficiente 2050 e os incentivos do PRR permitem financiar até 85% das obras de eficiência energética em edifícios anteriores a 1960, incluindo janelas, cobertura e isolamento.',
    'A Câmara Municipal de Lisboa exige, nas zonas de proteção de imóveis classificados, parecer prévio da DGPC para qualquer alteração de fachada — o prazo médio de resposta é de 30 a 60 dias.',
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
        'Os edifícios pombalinos da Baixa, Mouraria e Alfama respondem por uma fração significativa do parque habitacional mais antigo de Lisboa. Construídos entre 1755 e 1870 com a gaiola de madeira que os tornou célebres pela resiliência sísmica, carecem quase todos de qualquer forma de isolamento térmico. Melhorar o seu desempenho energético é possível — mas exige soluções diferentes das que se aplicam a um edifício corrente de betão.',
    },
    {
      type: 'paragraph',
      content:
        'A ausência de isolamento térmico em edifícios pombalinos não é um descuido: o conceito de envolvente isolada simplesmente não existia na época de construção. As paredes exteriores combinam alvenaria de pedra, tijolo e elementos da gaiola de madeira — uma composição que conduz calor e frio com relativa facilidade e que não admite os mesmos tratamentos que uma parede de pano duplo de tijolo furado.',
    },
    {
      type: 'heading2',
      content: 'Por que razão o isolamento pelo exterior é geralmente inviável?',
    },
    {
      type: 'paragraph',
      content:
        'O sistema ETICS (External Thermal Insulation Composite System) é a solução mais eficiente e económica em novos edifícios ou em reabilitações sem restrições patrimoniais. Numa fachada pombalina classificada ou inserida em zona de proteção, a sua aplicação está regra geral vedada: a Direção-Geral do Património Cultural (DGPC) e a Câmara Municipal de Lisboa não autorizam a alteração da textura, cor e perfil das fachadas históricas.',
    },
    {
      type: 'list',
      content: [
        'Fachadas em zonas de proteção de imóveis classificados requerem parecer prévio da DGPC, nos termos da Lei n.º 107/2001 (Lei do Património Cultural).',
        'O ETICS altera a espessura exterior da fachada em 80–120 mm, o que modifica o perfil da rua e as molduras de vãos — inaceitável em contexto classificado.',
        'Em alguns imóveis, a própria pedra de lioz ou o reboco de cal à vista fazem parte da identidade construtiva reconhecida no processo camarário.',
        'A Câmara Municipal de Lisboa publicou orientações técnicas específicas para reabilitação em ARU históricas que condicionam acabamentos exteriores.',
      ],
    },
    {
      type: 'heading2',
      content: 'Qual é a alternativa técnica mais utilizada?',
    },
    {
      type: 'paragraph',
      content:
        'O isolamento pelo interior — contra-fachada — é a solução dominante em edifícios pombalinos. Consiste em criar uma parede interior independente, separada da fachada por uma câmara-de-ar mínima (≥2 cm) que previne a condensação intersticial, e preenchida com material isolante. A câmara-de-ar é essencial para não criar ponte hídrica com a gaiola de madeira.',
    },
    {
      type: 'paragraph',
      content:
        'Os materiais mais usados em contexto pombalino são a lã mineral (lã de rocha ou lã de vidro) em espessuras de 40–60 mm, o aglomerado de cortiça expandida (ICB) entre 40 e 80 mm, e, em casos de espaço muito reduzido, painéis de aerogel com 20–30 mm. Cada solução tem implicações distintas no coeficiente de transmissão térmica (valor U), no custo por m² e na perda de área útil.',
    },
    {
      type: 'table',
      content: {
        headers: ['Material isolante', 'Espessura típica', 'Valor U resultante (W/m²·K)', 'Custo indicativo (€/m²)', 'Perda de área útil'],
        rows: [
          ['Lã de rocha', '40–60 mm', '0,45–0,60', '25–40', '6–8 cm com revestimento'],
          ['Cortiça expandida (ICB)', '40–80 mm', '0,35–0,55', '35–60', '6–10 cm com revestimento'],
          ['Painel de aerogel', '20–30 mm', '0,30–0,45', '90–140', '3–5 cm com revestimento'],
          ['Lã de vidro', '40–60 mm', '0,48–0,65', '20–35', '6–8 cm com revestimento'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'Compatibilidade com a gaiola de madeira',
    },
    {
      type: 'paragraph',
      content:
        'A gaiola pombalina é a estrutura resistente sísmica do edifício. Qualquer solução de isolamento pelo interior deve ser projetada para não introduzir cargas adicionais nos elementos de madeira nem criar barreiras à respiração da parede. Os isolantes higroscópicos, como a cortiça e a lã de rocha sem barreira de vapor rígida, são preferíveis por permitirem a difusão de vapor e reduzir o risco de condensação junto às peças de madeira.',
    },
    {
      type: 'heading2',
      content: 'Como tratar a cobertura e os pavimentos?',
    },
    {
      type: 'paragraph',
      content:
        'As perdas térmicas num edifício pombalino típico não se limitam às paredes. A cobertura não isolada pode representar 25–35% das perdas totais de calor, e os pavimentos sobre espaços não aquecidos (lojas ou garagens) contribuem com outros 10–15%. Nestas duas componentes, a intervenção é geralmente menos condicionada por restrições patrimoniais.',
    },
    {
      type: 'list',
      content: [
        'Coberturas com desvão visitável: isolamento sobre a laje de esteira com mantas de lã mineral de 100–140 mm é a solução mais acessível, sem toque na estrutura de asnas.',
        'Coberturas inclinadas sem desvão: isolamento projetado entre as varas, usando cortiça ou espuma de poliuretano de baixa densidade, compatível com o suporte de madeira.',
        'Coberturas planas (terraços): membrana impermeável com isolamento XPS sob lajeta flutuante, solução aprovada em ARU desde que não altere a cota final do edifício.',
        'Pavimentos sobre lojas ou espaços não aquecidos: projeção de cortiça ou espuma PUR pelo interior do teto da loja, evitando intervenção no soalho de madeira do piso superior.',
      ],
    },
    {
      type: 'heading2',
      content: 'Janelas e caixilharias: onde se perdem mais 20–30% de energia?',
    },
    {
      type: 'paragraph',
      content:
        'As caixilharias de madeira originais dos edifícios pombalinos têm, quando degradadas, valores U de 4,5–5,5 W/m²·K — muito acima do limite de 2,4 W/m²·K exigido pelo Regulamento de Desempenho Energético dos Edifícios de Habitação (REH, DL n.º 101-D/2020). A substituição ou o reforço é, por isso, uma das intervenções com maior retorno energético.',
    },
    {
      type: 'paragraph',
      content:
        'Nas zonas históricas de Lisboa, a Câmara Municipal aceita a substituição de caixilharia por perfis de madeira pintada ou, em alguns casos, alumínio com corte térmico de cor compatível, desde que o perfil exterior reproduza as dimensões e proporções dos originais. A introdução de vidro duplo com câmara de 12–16 mm baixa o valor U da janela para 1,4–1,8 W/m²·K — uma melhoria de 60–70%.',
    },
    {
      type: 'quote',
      content:
        'Nos projetos pombalinos que acompanhamos em Alfama e na Mouraria, a substituição de caixilharia e o isolamento da cobertura são invariavelmente as duas intervenções com melhor rácio custo-eficiência: em conjunto, representam 40–50% da melhoria na classe energética com menos de 30% do orçamento total de reabilitação.',
      source: {
        name: 'Equipa de Sustentabilidade HABTA',
        role: 'Análise de projetos 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Que incentivos financeiros existem em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, o financiamento para eficiência energética em edifícios anteriores a 1960 articula-se principalmente em três instrumentos: o programa Casa Eficiente 2050 (financiamento até 85% do custo elegível), os fundos PRR canalizados através do IFRRU 2020 (empréstimos bonificados com juros abaixo de mercado) e o IVA reduzido a 6% em obras de reabilitação em Áreas de Reabilitação Urbana, nos termos do regime jurídico da reabilitação urbana em vigor.',
    },
    {
      type: 'list',
      content: [
        'Casa Eficiente 2050: cobre isolamento, caixilharia, cobertura e sistemas de climatização eficientes; elegível para proprietários e condomínios com fração anterior a 1960.',
        'IFRRU 2020: linha de crédito do IHRU com taxa bonificada para reabilitação integral, incluindo componente energética; limite de 300 000 € por operação.',
        'IVA a 6%: aplica-se a empreitadas de reabilitação em ARU, mediante confirmação municipal; não é automático — exige declaração de enquadramento emitida pela câmara.',
        'Dedução IRS em sede de mais-valias: melhorias documentadas com fatura com NIF do imóvel são dedutíveis ao valor de aquisição para efeitos de mais-valias, reduzindo a base tributável.',
      ],
    },
    {
      type: 'heading2',
      content: 'Que classe energética é atingível após intervenção?',
    },
    {
      type: 'paragraph',
      content:
        'Um edifício pombalino não intervencionado classifica-se tipicamente entre F e G no certificado energético SCE (Sistema de Certificação Energética dos Edifícios, gerido pela ADENE). Com isolamento de paredes pelo interior, substituição de caixilharia e isolamento de cobertura, é realista atingir a classe C ou D. A classe B exige intervenção adicional em sistemas de climatização e, por vezes, ventilação mecânica controlada.',
    },
    {
      type: 'paragraph',
      content:
        'Para efeitos de arrendamento ou venda, a melhoria da classe energética tem impacto direto no valor de mercado: estudos do INE e da Confidencial Imobiliário indicam que frações com classe C ou superior transacionam com prémio de 8–14% face a equivalentes com classe E ou inferior, no mesmo microperímetro em Lisboa.',
    },
    {
      type: 'heading2',
      content: 'Como gerir a humidade numa parede isolada pelo interior?',
    },
    {
      type: 'paragraph',
      content:
        'A principal patologia associada ao isolamento pelo interior em paredes de pedra é a condensação intersticial: ao isolar pelo interior, a zona fria desloca-se para a face interior da parede externa, podendo acumular humidade se não houver controlo de vapor. A solução passa por uma barreira de vapor bem executada do lado quente do isolante — mas em paredes de pedra húmidas, essa barreira pode aprisionar humidade ascensional.',
    },
    {
      type: 'list',
      content: [
        'Antes de isolar, tratar a humidade ascensional por injeção de silicones hidrofugantes ou por sistema eletro-osmótico, conforme o grau de infestação.',
        'Usar isolantes higroscópicos (cortiça ICB, lã de rocha sem película de alumínio) que permitam a difusão de vapor e não aprisionem humidade nas peças de madeira da gaiola.',
        'Manter câmara-de-ar ventilada de pelo menos 2 cm entre a fachada e o isolante para facilitar a secagem em períodos de chuva intensa.',
        'Monitorizar humidade relativa interior após a obra: valores acima de 65% de forma persistente indicam que o sistema não está a funcionar corretamente.',
      ],
    },
    {
      type: 'callout',
      content:
        'O isolamento térmico de um edifício pombalino não é uma obra de série. Cada imóvel tem uma composição de parede diferente, um nível de humidade diferente e restrições patrimoniais específicas. Investir num projeto de especialidade antes da obra — com engenheiro especializado em física das construções antigas — evita patologias que podem ser mais caras do que a própria obra de isolamento.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se tem um edifício pombalino em Lisboa — na Baixa, em Alfama, na Mouraria ou no Chiado — e pretende avaliar a viabilidade técnica e financeira de uma intervenção de eficiência energética, a nossa equipa, descrita em <a href="/servicos">serviços</a>, pode acompanhar o processo desde o diagnóstico até ao certificado energético pós-obra. Consulte também o nosso <a href="/portfolio">portefólio</a> para exemplos de projetos concluídos e veja o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a> para o enquadramento legal e fiscal desta tipologia de intervenção. Para análises futuras, subscreva a newsletter.',
    },
  ],
  faq: [
    {
      q: 'Posso aplicar ETICS numa fachada pombalina classificada?',
      a: 'Regra geral, não. A DGPC e a Câmara Municipal de Lisboa não autorizam a aplicação de ETICS em fachadas de imóveis classificados ou em zonas de proteção, pois altera o perfil, textura e cor da fachada histórica. A alternativa é o isolamento pelo interior.',
    },
    {
      q: 'Quanto custa isolar pelo interior um apartamento pombalino de T2?',
      a: 'Um T2 com cerca de 80 m² de área útil e 40–50 m² de paredes externas tem um custo indicativo de 3 500 a 8 000 € para isolamento das paredes pelo interior, dependendo do material e das condições de acesso, fora obra de revestimento final.',
    },
    {
      q: 'O isolamento interior reduz a área do apartamento?',
      a: 'Sim. Cada parede exterior isolada perde 6 a 10 cm de profundidade interior, incluindo o isolante e o revestimento. Num T2 com quatro fachadas, a perda total de área útil pode ser de 1,5 a 3 m².',
    },
    {
      q: 'O IVA reduzido a 6% aplica-se a obras de isolamento em Lisboa?',
      a: 'Aplica-se quando o imóvel está em Área de Reabilitação Urbana (ARU) e a obra cumpre os requisitos do regime jurídico da reabilitação urbana. É necessária declaração de enquadramento emitida pela Câmara Municipal de Lisboa — não é automático.',
    },
    {
      q: 'Que profissional deve projetar o isolamento num edifício pombalino?',
      a: 'Um engenheiro civil ou arquiteto com experiência comprovada em física das construções históricas. O projeto deve incluir análise higrotérmica das paredes e ser compatível com as exigências patrimoniais da DGPC e da câmara municipal.',
    },
    {
      q: 'A melhoria da classe energética valoriza o imóvel para venda?',
      a: 'Sim. Dados do INE e da Confidencial Imobiliário indicam um prémio de 8 a 14% no preço de transação para frações com classe C ou superior face a equivalentes com classe E ou F no mesmo bairro de Lisboa.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento técnico, fiscal ou jurídico. Os valores de custo, desempenho térmico e incentivos indicados são estimativas baseadas em projetos realizados e em legislação vigente à data de publicação — podem variar consoante o imóvel, o município e a data de candidatura. Consulte profissionais qualificados antes de iniciar qualquer intervenção.',
};
