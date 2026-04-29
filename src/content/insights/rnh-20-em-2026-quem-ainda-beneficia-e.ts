import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'rnh-20-em-2026-quem-ainda-beneficia-e',
  title: 'RNH 2.0 em 2026: quem ainda beneficia e quem não',
  description:
    'O regime IFICI substituiu o RNH clássico. Saiba quem pode candidatar-se em 2026, quais as taxas aplicáveis e que perfis ficaram excluídos pela reforma de 2024.',
  category: 'Regulamentação',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Jurídica',
  date: '2026-04-29',
  updated_at: '2026-04-29',
  excerpt:
    'O regime fiscal IFICI — sucessor do RNH 2.0 — define em 2026 beneficiários elegíveis, taxas e condições de acesso que todo o investidor ou residente qualificado deve conhecer antes de se instalar em Portugal.',
  image: 'https://images.unsplash.com/photo-1721244653652-268631ec049a${UNSPLASH_PARAMS}',
  tags: [
    'RNH 2.0 Portugal 2026',
    'IFICI regime fiscal não habitual',
    'residência fiscal Portugal investidores',
    'imposto IRS taxa especial 20%',
    'benefícios fiscais expatriados Portugal',
  ],
  tldr: [
    'O RNH clássico encerrou candidaturas em 31 de dezembro de 2023; o IFICI (Lei n.º 82-A/2014 com redação do OE 2024) é o regime vigente em 2026 para novos residentes.',
    'A taxa de IRS sobre rendimentos de trabalho dependente e independente em atividades elegíveis é de 20%, aplicável por 10 anos consecutivos.',
    'Estão excluídos cidadãos que tenham sido residentes fiscais em Portugal em qualquer dos 5 anos anteriores ao pedido — o critério era de 5 anos no RNH clássico mas mantém-se no IFICI.',
    'Os rendimentos de fonte estrangeira não estão automaticamente isentos no IFICI; a isenção depende da natureza do rendimento e de convenção de dupla tributação aplicável.',
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
        'O RNH 2.0 — oficialmente designado IFICI, Incentivo Fiscal à Investigação Científica e Inovação — entrou em vigor em 2024 com regras substancialmente diferentes do regime anterior. Em 2026, muitos investidores e profissionais qualificados ainda chegam a Portugal com expetativas baseadas no RNH clássico. As diferenças são materiais e o desconhecimento custa dinheiro.',
    },
    {
      type: 'paragraph',
      content:
        'O regime fiscal para residentes não habituais vigorou em Portugal entre 2009 e 2023, atraindo dezenas de milhar de residentes de elevado valor acrescentado. A sua extinção para novos candidatos, decidida no Orçamento do Estado para 2024 (Lei n.º 24-D/2022 revogou disposições relevantes; o OE 2024 criou o IFICI), gerou confusão considerável sobre o que subsiste e para quem.',
    },
    {
      type: 'heading2',
      content: 'O que é o IFICI e em que difere do RNH clássico?',
    },
    {
      type: 'paragraph',
      content:
        'O IFICI — Incentivo Fiscal à Investigação Científica e Inovação — é o regime que substituiu o RNH a partir de 1 de janeiro de 2024. A taxa especial de IRS de 20% sobre rendimentos de trabalho dependente (categoria A) e de trabalho independente (categoria B) em atividades elegíveis mantém-se, mas o universo de beneficiários foi redefinido e estreitado.',
    },
    {
      type: 'table',
      content: {
        headers: ['Critério', 'RNH clássico (até 2023)', 'IFICI / RNH 2.0 (2024–2026)'],
        rows: [
          ['Período de não residência prévia', '5 anos anteriores', '5 anos anteriores (mantido)'],
          ['Taxa sobre rendimentos elegíveis (A e B)', '20%', '20%'],
          ['Duração do benefício', '10 anos', '10 anos'],
          ['Rendimentos estrangeiros — isenção automática', 'Sim (em certas categorias)', 'Não automática; depende de CDT e natureza'],
          ['Atividades elegíveis', 'Lista ampla (high value added)', 'Lista restrita (I&D, startups, ensino superior, tech)'],
          ['Pensionistas', 'Elegíveis (10% após 2020)', 'Excluídos do IFICI'],
          ['Nómadas digitais', 'Elegíveis via visto D8', 'Elegíveis se atividade constar da lista IFICI'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Quem é elegível para o IFICI em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'A elegibilidade exige o cumprimento simultâneo de três condições: tornar-se residente fiscal em Portugal em 2026, não ter sido residente em Portugal nos cinco anos civis anteriores ao pedido, e exercer uma atividade que conste da lista aprovada em portaria ministerial.',
    },
    {
      type: 'list',
      content: [
        'Investigadores e docentes em entidades de ensino superior reconhecidas pelo Ministério da Ciência.',
        'Profissionais de tecnologias de informação em empresas com estatuto de startup certificado pelo IAPMEI.',
        'Quadros qualificados em centros de I&D reconhecidos pela FCT — Fundação para a Ciência e a Tecnologia.',
        'Profissionais com funções de direção ou especialização em empresas exportadoras com mais de 50% de volume de negócios externo.',
        'Trabalhadores recrutados ao abrigo de programas de atração de talento qualificado promovidos pelo AICEP.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'A lista é consideravelmente mais restrita do que a que vigorava no RNH clássico até 2023, onde bastava o exercício de uma atividade de "elevado valor acrescentado" de uma lista alargada que incluía engenheiros, arquitetos, gestores, profissionais de saúde e outros. Em 2026, quem não se encaixa nas categorias IFICI não tem acesso ao benefício de 20%.',
    },
    {
      type: 'heading2',
      content: 'Quem ficou excluído pelo RNH 2.0?',
    },
    {
      type: 'paragraph',
      content:
        'A exclusão mais relevante, do ponto de vista do volume de beneficiários anteriores, é a dos pensionistas. O regime de tributação de pensões estrangeiras a 10% — introduzido em 2020 em resposta a críticas de Estados como a Finlândia e a Suécia — foi eliminado com o IFICI.',
    },
    {
      type: 'list',
      content: [
        'Pensionistas de fonte estrangeira: sem taxa reduzida disponível no IFICI.',
        'Rendimentos de capital e mais-valias de fonte estrangeira: a isenção que existia no RNH clássico não é replicada de forma automática.',
        'Profissionais liberais em atividades fora da lista IFICI (arquitetos, médicos, advogados em prática privada, etc.).',
        'Gestores e consultores sem vínculo a entidade certificada ou exportadora elegível.',
        'Cidadãos que tenham sido residentes fiscais em Portugal em qualquer dos 5 anos civis anteriores ao pedido — independentemente do motivo da residência anterior.',
      ],
    },
    {
      type: 'heading3',
      content: 'O caso dos ex-beneficiários RNH ainda em curso',
    },
    {
      type: 'paragraph',
      content:
        'Quem foi registado como residente não habitual até 31 de dezembro de 2023 e está dentro do período de 10 anos mantém o regime clássico até ao seu termo. Não há revogação retroativa. Em 2026, estima-se que residam em Portugal entre 40 000 a 50 000 beneficiários ainda ao abrigo do RNH clássico, cujos estatutos expirarão progressivamente até 2033.',
    },
    {
      type: 'heading2',
      content: 'Como funciona a tributação dos rendimentos estrangeiros em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'No IFICI, os rendimentos de fonte estrangeira não estão isentos por defeito. A tributação depende da natureza do rendimento e da existência de Convenção para Evitar a Dupla Tributação (CDT) entre Portugal e o país da fonte. Portugal tem CDTs celebradas com mais de 80 países, mas as condições variam.',
    },
    {
      type: 'list',
      content: [
        'Rendimentos de trabalho dependente de fonte estrangeira: tributados em Portugal à taxa de 20% se a atividade for elegível IFICI; sujeitos a crédito de imposto pago no estrangeiro conforme CDT.',
        'Dividendos e juros de fonte estrangeira: tributados às taxas gerais do IRS (28% para dividendos, 28% para juros) — sem isenção IFICI.',
        'Mais-valias de imóveis no estrangeiro: tributadas em Portugal conforme regras gerais; isenção só se a CDT atribuir competência exclusiva ao Estado da fonte.',
        'Pensões de fonte estrangeira: tributadas às taxas progressivas gerais do IRS — sem regime especial IFICI.',
      ],
    },
    {
      type: 'quote',
      content:
        'A diferença prática entre o RNH clássico e o IFICI para um investidor com rendimentos mistos — salário, dividendos e rendas estrangeiras — pode representar uma carga fiscal adicional de 8 a 15 pontos percentuais sobre o rendimento total, consoante a composição da carteira. O planeamento antes da mudança de residência é decisivo.',
      source: {
        name: 'Equipa Jurídica HABTA',
        role: 'Análise fiscal interna, 1.º trimestre 2026',
      },
    },
    {
      type: 'heading2',
      content: 'Como se faz o pedido de registo IFICI em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'O pedido deve ser submetido à Autoridade Tributária e Aduaneira (AT) até 31 de março do ano seguinte ao da instalação em Portugal como residente fiscal. Quem se tornou residente em 2025 tem até 31 de março de 2026 para submeter. Quem se tornar residente em 2026 terá até 31 de março de 2027.',
    },
    {
      type: 'list',
      content: [
        'Submissão do pedido através do Portal das Finanças (portal AT), com autenticação por Chave Móvel Digital ou NIF + senha.',
        'Comprovativo de residência fiscal em Portugal: contrato de arrendamento, escritura, ou declaração de início de atividade.',
        'Declaração emitida pela entidade empregadora ou pelo IAPMEI/FCT a confirmar o exercício de atividade elegível.',
        'Certidão ou declaração de residência fiscal no estrangeiro nos cinco anos anteriores, emitida pela administração fiscal do país de origem.',
        'Após aprovação, o estatuto é inscrito no cadastro fiscal e aplicável a rendimentos do próprio ano de inscrição.',
      ],
    },
    {
      type: 'heading2',
      content: 'Qual o impacto no mercado imobiliário de Lisboa e Cascais?',
    },
    {
      type: 'paragraph',
      content:
        'A restrição do universo elegível reduziu o fluxo de novos candidatos RNH/IFICI, mas não travou a procura de residência qualificada em zonas como Cascais, Estoril, Parede e nos bairros históricos de Lisboa — Misericórdia, Chiado, Príncipe Real. A maioria dos compradores internacionais nestes microperímetros em 2026 são profissionais de tecnologia ou I&D elegíveis para o IFICI, ou ex-RNH a completar o seu período de 10 anos.',
    },
    {
      type: 'paragraph',
      content:
        'O INE registou em 2025 que as transações com compradores de NIF atribuído nos últimos três anos representaram 18% do volume transacionado em concelhos litorais de alta valorização. A correlação com incentivos fiscais de atração de talento permanece estatisticamente relevante, ainda que o IFICI tenha um universo mais estreito do que o RNH clássico.',
    },
    {
      type: 'heading2',
      content: 'O IFICI continuará disponível após 2026?',
    },
    {
      type: 'paragraph',
      content:
        'A continuidade do IFICI está sujeita a revisão orçamental anual. O OE 2025 manteve o regime sem alterações estruturais. Para 2027, o debate político em torno da habitação e da pressão sobre o mercado de arrendamento em Lisboa e no Porto mantém aberta a hipótese de novas restrições ou ajustes. A Autoridade Tributária tem monitorizado os fluxos de candidaturas desde 2024.',
    },
    {
      type: 'callout',
      content:
        'Para investidores que pretendam instalar-se em Portugal em 2026 e avaliem o IFICI como parte da estratégia, o conselho da nossa equipa é claro: validar a elegibilidade da atividade concreta com um advogado fiscalista antes de qualquer decisão de aquisição ou arrendamento. A elegibilidade não é automática nem presumível por analogia com o RNH clássico.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para quem avalia residência fiscal em Portugal',
    },
    {
      type: 'paragraph',
      content:
        'Se está a equacionar a mudança de residência fiscal para Portugal em 2026 e quer compreender o impacto do IFICI na sua situação concreta — incluindo a articulação com a aquisição ou arrendamento de imóvel — a nossa equipa está disponível para uma análise inicial em <a href="/servicos">serviços</a>. Para o enquadramento imobiliário complementar, consulte também o <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">guia completo de investimento imobiliário em Portugal 2026</a> e o nosso <a href="/portfolio">portefólio</a> de projetos em Lisboa, Porto e Cascais. A subscrição da newsletter garante acesso prioritário a atualizações regulatórias.',
    },
  ],
  faq: [
    {
      q: 'O RNH clássico ainda existe em 2026?',
      a: 'Não para novos candidatos. O RNH clássico encerrou candidaturas em 31 de dezembro de 2023. Quem se registou até essa data mantém o estatuto pelo período restante dos 10 anos. Novos residentes em 2026 só podem candidatar-se ao IFICI.',
    },
    {
      q: 'Qual a taxa de IRS no IFICI em 2026?',
      a: 'A taxa especial é de 20% sobre rendimentos de trabalho dependente (categoria A) e independente (categoria B) provenientes de atividades elegíveis constantes da lista aprovada por portaria. Rendimentos de outras categorias são tributados às taxas gerais.',
    },
    {
      q: 'Os pensionistas podem beneficiar do IFICI?',
      a: 'Não. O IFICI não prevê regime especial para pensionistas. A taxa de 10% sobre pensões estrangeiras que vigorou entre 2020 e 2023 foi eliminada. Pensionistas que se tornem residentes em 2026 são tributados às taxas progressivas gerais do IRS.',
    },
    {
      q: 'Quais os documentos necessários para pedir o IFICI à AT?',
      a: 'São exigidos: comprovativo de residência em Portugal, certidão de não residência nos 5 anos anteriores emitida pela administração fiscal estrangeira, e declaração da entidade empregadora ou organismo certificador confirmando o exercício de atividade elegível.',
    },
    {
      q: 'Um nómada digital pode candidatar-se ao IFICI?',
      a: 'Pode, se a atividade concreta constar da lista IFICI aprovada por portaria — tipicamente funções de tecnologia ou I&D. O simples facto de trabalhar remotamente para empresa estrangeira não é suficiente sem enquadramento na lista de atividades elegíveis.',
    },
    {
      q: 'O IFICI isenta rendimentos de dividendos estrangeiros?',
      a: 'Não automaticamente. Dividendos de fonte estrangeira são tributados à taxa liberatória de 28% no IRS em Portugal. Só há isenção se a CDT com o país da fonte atribuir competência tributária exclusiva a esse país e o rendimento tiver sido tributado na fonte.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. O regime IFICI está sujeito a alterações legislativas anuais via Orçamento do Estado; os dados referem-se à legislação em vigor em abril de 2026. Consulte um advogado fiscalista ou contabilista certificado antes de tomar decisões de residência ou investimento.',
};
