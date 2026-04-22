import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'reabilitacao-urbana-em-portugal-guia-completo-2026',
  title: 'Reabilitação urbana em Portugal: guia completo e atualizado para 2026',
  description:
    'Um guia completo sobre reabilitação urbana em Portugal em 2026 — enquadramento legal (DL 53/2014, RJUE, RGEU), tipos de intervenção, ARU e ORU, incentivos fiscais, processo camarário, riscos e checklist operacional.',
  category: 'Regulamentação',
  readTime: '20 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Técnica',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'O guia de referência HABTA sobre reabilitação urbana em Portugal em 2026 — do enquadramento legal às armadilhas de obra, com o que importa para tomar decisões de investimento.',
  image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80&auto=format&fit=crop',
  tags: [
    'reabilitação urbana Portugal 2026',
    'DL 53/2014',
    'ARU Lisboa Porto',
    'reabilitação qualificada',
    'IVA 6% obras reabilitação',
    'isenção IMI IMT reabilitação',
    'RJUE licenciamento',
    'RGEU Portugal',
  ],
  tldr: [
    'Reabilitação urbana em Portugal assenta em três diplomas-chave: DL 53/2014 (regime jurídico), RJUE (urbanização e edificação) e RGEU (regulamento geral).',
    'O estatuto de "reabilitação qualificada" é o que dá acesso a IVA de 6% e isenções temporárias de IMI/IMT — exige melhoria de 2 níveis de desempenho energético ou classe final A/B.',
    'Nem toda intervenção em imóvel antigo é reabilitação: troca estética não qualifica, melhoria estrutural + desempenho sim.',
    'ARU é delimitação territorial; ORU é a operação dentro da ARU com incentivos ativos. Confirmar sempre ambos antes de contar com benefícios.',
    'Prazos reais de licenciamento em 2026: comunicação prévia 30–60 dias úteis; licença completa 4–10 meses consoante o município.',
  ],
  trustSignals: {
    projectsReviewed: 80,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-22',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Reabilitar um edifício em Portugal é um exercício técnico, legal e financeiro em simultâneo. Este guia consolida o essencial que um investidor ou promotor precisa saber em 2026 para decidir e executar com critério.',
    },
    {
      type: 'paragraph',
      content:
        'A reabilitação urbana tornou-se uma das principais alavancas de valor no imobiliário português. O enquadramento legal é genericamente favorável — há incentivos fiscais robustos, processos simplificados em certos casos e ambição pública clara de recuperar parque edificado. Mas a operação diária está cheia de armadilhas: documentação desalinhada, interpretações diferentes entre câmaras, surpresas de obra, prazos que escorregam. Este guia prepara para o cenário real.',
    },
    {
      type: 'paragraph',
      content:
        'Se já conhece os fundamentos, use esta peça como referência. Os temas adjacentes são aprofundados em <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">Cinco pilares para avaliar um projeto de reabilitação</a>, <a href="/blog/areas-de-reabilitacao-urbana-aru-como-confirmar-se">como confirmar se o seu imóvel está em ARU</a> e <a href="/blog/como-calcular-o-roi-real-de-um-projeto">como calcular o ROI real de um projeto</a>.',
    },
    {
      type: 'heading2',
      content: '1. Enquadramento legal em 2026 — os diplomas que importam',
    },
    {
      type: 'paragraph',
      content:
        'A base legal da reabilitação urbana em Portugal está dispersa mas é coerente. Três diplomas principais estruturam a prática.',
    },
    {
      type: 'table',
      content: {
        headers: ['Diploma', 'O que regula', 'Por que importa ao investidor'],
        rows: [
          ['DL n.º 53/2014 (e atualizações)', 'Regime jurídico da reabilitação urbana', 'Define "reabilitação qualificada" — condição para IVA 6% e isenções fiscais'],
          ['RJUE (DL 555/99 e posteriores)', 'Urbanização e edificação — licenças e comunicações prévias', 'Define tipo de pedido, prazos e requisitos documentais'],
          ['RGEU (DL 38382/51 e atualizações)', 'Regulamento geral das edificações urbanas', 'Normas técnicas de construção, segurança, ventilação, iluminação'],
          ['Regulamento Municipal do Urbanismo', 'Especificidades de cada município', 'Taxas, exigências específicas, interpretação local'],
          ['PDM (Plano Diretor Municipal)', 'Uso do solo, cérceas, afetações', 'Determina o que se pode fazer em cada parcela'],
        ],
      },
    },
    {
      type: 'heading2',
      content: '2. ARU e ORU — a diferença prática que custa caro ignorar',
    },
    {
      type: 'paragraph',
      content:
        'Área de Reabilitação Urbana (ARU) é a delimitação territorial aprovada pela câmara municipal. Operação de Reabilitação Urbana (ORU) é o instrumento que ativa os benefícios dentro daquela ARU — define objetivos, prazos e acesso a apoios. Um imóvel pode estar em ARU mas não ter ORU ativa, e nesse caso a tabela de incentivos não se aplica automaticamente.',
    },
    {
      type: 'paragraph',
      content:
        'O método de confirmação — consulta ao Portal Geográfico, ao sítio da câmara municipal e ao edital da ORU — está detalhado em <a href="/blog/areas-de-reabilitacao-urbana-aru-como-confirmar-se">ARU em Portugal 2026: como confirmar se o seu imóvel está incluído</a>.',
    },
    {
      type: 'heading2',
      content: '3. Tipos de intervenção — do ligeiro à reabilitação profunda',
    },
    {
      type: 'paragraph',
      content:
        'Nem toda obra em edifício antigo qualifica como reabilitação para efeitos legais e fiscais. A classificação depende da natureza e profundidade da intervenção.',
    },
    {
      type: 'list',
      content: [
        '<strong>Conservação</strong>: trabalhos de manutenção — pintura, reparação pontual. Regime simplificado, mas sem benefícios fiscais relevantes.',
        '<strong>Alteração</strong>: modificação de parte do edifício sem afetar a estrutura. Comunicação prévia em muitos casos.',
        '<strong>Reconstrução</strong>: refazer edifício mantendo fachadas ou volumetria. Licença de obra normalmente exigida.',
        '<strong>Ampliação</strong>: aumento de área bruta ou cércea. Exige conformidade com PDM e licença de obra.',
        '<strong>Reabilitação qualificada</strong>: intervenção que melhora significativamente o desempenho funcional e energético. Dá acesso aos principais incentivos.',
      ],
    },
    {
      type: 'callout',
      content:
        'Para uma intervenção se qualificar como "reabilitação qualificada" (e acionar IVA 6%, isenções fiscais), tipicamente é necessário subir pelo menos dois níveis de classe de desempenho energético ou atingir A/B, cumprir requisitos de segurança estrutural e proteção sísmica. Os termos exatos constam do DL 53/2014 e atualizações posteriores — confirmar na versão vigente à data do projeto.',
    },
    {
      type: 'heading2',
      content: '4. Incentivos fiscais em 2026 — o que está ativo',
    },
    {
      type: 'table',
      content: {
        headers: ['Incentivo', 'Aplicação', 'Condição'],
        rows: [
          ['IVA reduzido a 6%', 'Empreitadas de reabilitação em imóveis em ARU', 'Reabilitação qualificada conforme DL 53/2014'],
          ['Isenção IMI (3–5 anos)', 'Imóveis reabilitados em ARU', 'Finalização da obra e certificação; renovável condicionalmente'],
          ['Isenção IMT', 'Primeira transmissão após reabilitação', 'Imóvel afeto a habitação; dentro de ARU'],
          ['Mais-valias IRS 0% reinvestimento', 'Pessoas singulares residentes', 'Reinvestimento em HPP dentro dos prazos legais'],
          ['IRC taxa reduzida', 'Entidades em zonas de baixa densidade', 'Condicionada ao regime aplicável à data'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Os benefícios fiscais não são automáticos — exigem candidatura formal, documentação completa e muitas vezes decisão favorável da câmara municipal. Contar com eles antes da confirmação é um erro que vimos repetir-se.',
    },
    {
      type: 'heading2',
      content: '5. Processo camarário — prazos reais em 2026',
    },
    {
      type: 'paragraph',
      content:
        'Um dos maiores fatores de escorregamento em projetos de reabilitação em Portugal é o licenciamento camarário. Prazos legais são referência, mas a realidade operacional varia muito entre municípios.',
    },
    {
      type: 'list',
      content: [
        '<strong>Comunicação prévia</strong> (intervenções de menor impacto): 30–60 dias úteis tipicamente. Em alguns municípios resolve em 2-3 semanas; noutros arrasta-se.',
        '<strong>Licença de obra</strong> completa: 4–10 meses em ARU, mais longo em zonas históricas sensíveis.',
        '<strong>Pedido de informação prévia (PIP)</strong>: 30 dias úteis por lei; útil para validar viabilidade antes de investir em projeto completo.',
        '<strong>Licença de utilização</strong> após obra: 30 dias úteis; na prática pode demorar 2-4 meses.',
      ],
    },
    {
      type: 'heading2',
      content: '6. Fornecedores e contratos — o pilar operacional',
    },
    {
      type: 'paragraph',
      content:
        'Um projeto de reabilitação vive ou morre na execução. A escolha de arquiteto, engenheiro e empreiteiro — e a qualidade dos contratos — determina se os números do modelo financeiro chegam à realidade.',
    },
    {
      type: 'list',
      content: [
        '<strong>Arquiteto</strong>: experiência documentada em edificado antigo do mesmo tipo (pombalino, gaioleiro, placa, betão).',
        '<strong>Engenheiro civil / estruturas</strong>: preferencialmente independente do arquiteto para garantir escrutínio.',
        '<strong>Empreiteiro</strong>: alvará adequado à dimensão, histórico verificável, seguros em dia.',
        '<strong>Fiscalização</strong>: figura independente da empreitada, com relatórios semanais e autoridade para parar trabalhos mal executados.',
        '<strong>Contrato</strong>: preço global com mapa de trabalhos detalhado; marcos de pagamento por entrega concreta, nunca por calendário cego.',
      ],
    },
    {
      type: 'quote',
      content:
        'Em reabilitação, o preço mais barato costuma ser o mais caro. A diferença entre um orçamento 15% mais alto e um orçamento mínimo absorve-se no primeiro derrapagem de obra — e os baratos derrapam sempre.',
      source: {
        name: 'Equipa Técnica HABTA',
        role: 'Prática interna',
      },
    },
    {
      type: 'heading2',
      content: '7. Riscos específicos por tipologia construtiva',
    },
    {
      type: 'paragraph',
      content:
        'A tipologia construtiva determina os riscos. Um edifício pombalino tem problemas diferentes de um placa dos anos 1950 ou de um betão armado pré-RGEU. A peritagem deve ser feita por alguém que compreende a época do edifício.',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipologia', 'Época', 'Riscos típicos'],
        rows: [
          ['Pombalino', '1755–1870', 'Degradação da gaiola de madeira, humidade ascensional, xilófagos'],
          ['Gaioleiro', '1870–1930', 'Paredes sem gaiola, instabilidade sísmica, instalações vetustas'],
          ['Placa', '1930–1960', 'Armaduras corroídas, fissuração em lajes, infiltrações'],
          ['Betão armado pré-RGEU', '1960–1983', 'Baixa durabilidade, pontes térmicas, falta de isolamento'],
          ['Betão armado pós-RGEU', '1983+', 'Geralmente mais robusto, mas atenção a betão afetado por ASR em certos lotes'],
        ],
      },
    },
    {
      type: 'heading2',
      content: '8. Passo a passo do projeto de reabilitação',
    },
    {
      type: 'list',
      content: [
        '<strong>Due diligence inicial</strong>: peritagem estrutural independente, verificação de ARU/ORU, consulta ao processo camarário.',
        '<strong>Estudo de viabilidade</strong>: modelo financeiro em três cenários, prazo de licenciamento realista, reserva técnica ≥10%.',
        '<strong>Projeto de arquitetura</strong>: com ganhos de eficiência energética desenhados para qualificar como reabilitação qualificada.',
        '<strong>Projetos de especialidades</strong>: estruturas, térmico, acústico, hidráulico, elétrico, gás.',
        '<strong>Licenciamento</strong>: comunicação prévia ou licença conforme a natureza da intervenção.',
        '<strong>Concurso de empreitada</strong>: pelo menos 3 propostas, análise técnica antes da financeira.',
        '<strong>Execução</strong>: fiscalização independente, reuniões semanais, marcos de pagamento por entrega.',
        '<strong>Certificações e licença de utilização</strong>: certificado energético, telas finais, entrega formal.',
        '<strong>Venda ou arrendamento</strong>: ativação dos benefícios fiscais (isenção IMI pós-reabilitação, por exemplo).',
      ],
    },
    {
      type: 'heading2',
      content: 'Erros comuns em reabilitação em Portugal',
    },
    {
      type: 'list',
      content: [
        'Assumir IVA de 6% sem validar o enquadramento como reabilitação qualificada — pode acabar a pagar 23%.',
        'Avançar sem peritagem estrutural independente em edifícios pré-1970.',
        'Confiar nos prazos legais de licenciamento sem buffer para o ritmo real do município.',
        'Contrato por administração direta sem teto — risco sério de orçamento descontrolado.',
        'Comprar sem validar se existe ORU ativa a cobrir a parcela.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como a HABTA pode ajudar',
    },
    {
      type: 'paragraph',
      content:
        'Se está a planear um projeto de reabilitação urbana em Portugal, a HABTA pode apoiar desde a due diligence técnica à execução. A nossa equipa tem experiência em Lisboa, Porto e Cascais, em diferentes tipologias construtivas. Explore os nossos <a href="/servicos">serviços</a> ou analise o <a href="/portfolio">portefólio</a> de projetos concluídos.',
    },
  ],
  faq: [
    {
      q: 'O que é exatamente "reabilitação qualificada" em Portugal?',
      a: 'É a categoria definida no DL n.º 53/2014 e posteriores atualizações que exige intervenção com ganho significativo de desempenho funcional e energético. Tipicamente requer melhorar pelo menos dois níveis na classe energética ou atingir A/B, cumprir requisitos estruturais e de segurança. É a condição que desbloqueia o IVA reduzido a 6% e as isenções de IMI/IMT.',
    },
    {
      q: 'Preciso sempre de licença de obra para reabilitar em Portugal?',
      a: 'Não. Obras de conservação e algumas alterações podem fazer-se via comunicação prévia, com ciclo muito mais curto. Intervenções estruturais, alterações de fachada, alterações de uso ou ampliações exigem licença de obra. A classificação correta do pedido é essencial para não atrasar o projeto.',
    },
    {
      q: 'Quanto custa licenciar uma obra de reabilitação em Lisboa em 2026?',
      a: 'Depende da área e da natureza. Para referência, uma comunicação prévia pode custar algumas centenas de euros em taxas municipais; uma licença de obra completa ronda 1500–4000 € em taxas municipais para um edifício residencial médio, além dos honorários dos técnicos (arquiteto, engenheiros) que tipicamente representam 6–10% do custo da obra.',
    },
    {
      q: 'Posso perder os benefícios fiscais se vender rápido demais após a reabilitação?',
      a: 'As isenções de IMT e IMI estão condicionadas à afetação correta e prazos definidos. Vender antes do período mínimo pode implicar perder os benefícios e ter de regularizar imposto devido. Estruturar a saída alinhada aos prazos legais é parte integrante do plano financeiro.',
    },
    {
      q: 'Qual é o prazo realista de um projeto de reabilitação completo em Portugal?',
      a: 'Para uma reabilitação profunda de um edifício médio em Lisboa ou Porto: licenciamento 4–10 meses, obra 8–14 meses, comercialização 2–6 meses. Prazo total típico 14–30 meses. Cronograma mais curto existe, mas exige muita preparação prévia e municípios bem organizados.',
    },
    {
      q: 'Qual é a diferença entre reabilitação e reconstrução em Portugal?',
      a: 'Reabilitação preserva o edifício existente e melhora-o. Reconstrução implica demolir e refazer, mantendo tipicamente fachadas ou volumetria. Fiscalmente a reconstrução pode ter enquadramento diferente; em ARU, a reconstrução cumprindo certos critérios ainda pode aceder a benefícios, mas a análise é caso a caso.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não substitui aconselhamento técnico, fiscal ou jurídico personalizado. Valores e prazos são indicativos e variam por município, tipologia e projeto específico. Consulte sempre profissionais qualificados.',
};
