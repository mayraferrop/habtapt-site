import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'bombas-de-calor-em-reabilitacao-custos-retorno-e',
  title: 'Bombas de calor em reabilitação: custos, retorno e fornecedores em Portugal 2026',
  description:
    'Guia completo sobre bombas de calor em reabilitação urbana em Portugal: custos de instalação, retorno esperado, apoios disponíveis e principais fornecedores — para tomar decisões informadas.',
  category: 'Sustentabilidade',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Sustentabilidade',
  date: '2026-04-27',
  updated_at: '2026-04-27',
  excerpt:
    'Integrar uma bomba de calor numa reabilitação em Portugal pode reduzir a fatura energética em 40–65% e melhorar a classe no certificado, mas os custos e o retorno variam significativamente por tipologia de edifício.',
  image: 'https://images.unsplash.com/photo-1565599573128-ae3ef5c9f478${UNSPLASH_PARAMS}',
  tags: [
    'bomba de calor reabilitação Portugal',
    'eficiência energética edifício antigo Lisboa',
    'certificado energético reabilitação 2026',
    'custos bomba de calor Portugal',
    'apoios eficiência energética habitação',
  ],
  tldr: [
    'Uma bomba de calor ar-água para apartamento T2–T3 em Lisboa custa entre 4 500 € e 9 000 € instalada, com retorno simples de 6 a 11 anos dependendo da tarifa e do isolamento existente.',
    'O programa Casa Eficiente e o Fundo Ambiental oferecem apoios de 30–50% do investimento em eficiência energética para habitação permanente — não se aplicam automaticamente a arrendamento turístico.',
    'A bomba de calor pode fazer subir 1–2 classes no certificado energético, o que valoriza diretamente o imóvel entre 5% e 12% segundo análises de transações na Grande Lisboa.',
    'Em edifícios Pombalinos e Gaioleiros, a integração exige estudo acústico e reforço de potência elétrica — custos ocultos que erodem o retorno se não forem orçamentados à partida.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-27',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'A bomba de calor passou de solução nicho a elemento central em projetos de reabilitação em Portugal. Com a Diretiva Europeia de Desempenho Energético dos Edifícios (EPBD reformulada) a forçar a mão nos edifícios de pior desempenho, saber quanto custa, quanto rende e quem instala bem faz a diferença entre uma reabilitação que valoriza e uma que apenas aparenta modernidade.',
    },
    {
      type: 'paragraph',
      content:
        'As bombas de calor em reabilitação urbana não são todas iguais. O tipo de sistema — ar-ar, ar-água ou geotérmica —, a tipologia do edifício e o nível de isolamento pré-existente determinam o custo real, o desempenho energético e, por extensão, o retorno do investimento. Este artigo analisa cada variável de forma concreta.',
    },
    {
      type: 'heading2',
      content: 'Que tipos de bomba de calor se aplicam a edifícios reabilitados em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'Existem três famílias de equipamentos com aplicação prática em reabilitação urbana portuguesa. A escolha depende da área do imóvel, do sistema de distribuição de calor existente e do orçamento disponível. A solução mais instalada em apartamentos urbanos é a bomba de calor ar-água acoplada a unidades de pavimento ou ventilo-convectores.',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipo', 'Aplicação típica', 'COP médio', 'Custo instalado (€)', 'Adequação à reabilitação'],
        rows: [
          ['Ar-ar (split / multi-split)', 'Apartamentos T1–T3, sem sistema hidráulico', '3,0–4,5', '1 500–4 500', 'Alta — instalação simples, obra mínima'],
          ['Ar-água (aerotérmica)', 'Apartamentos T2+ com radiadoras ou FCU', '2,8–4,2', '4 500–9 000', 'Média — requer rede hidráulica adaptada'],
          ['Ar-água + AQS integrado', 'Moradias e frações com dep. de água quente', '3,0–4,5', '5 500–11 000', 'Alta — substitui caldeira e esquentador'],
          ['Geotérmica', 'Moradias com espaço para sondas', '4,0–6,0', '12 000–25 000', 'Baixa — raramente viável em apartamentos'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'Quanto custa instalar uma bomba de calor numa reabilitação em Lisboa ou Porto?',
    },
    {
      type: 'paragraph',
      content:
        'O custo varia com o tipo de sistema, a área aquecida e o estado da rede elétrica do edifício. Em apartamentos T2 e T3 na Grande Lisboa e no Porto, os valores mais frequentes situam-se entre 4 500 € e 9 000 € para sistemas ar-água completos, incluindo equipamento, mão de obra e adequação elétrica. Abaixo dos 4 000 € fique atento à qualidade do instalador.',
    },
    {
      type: 'list',
      content: [
        'Equipamento principal (unidade exterior + interior): 2 000–5 500 € dependendo da marca e capacidade.',
        'Mão de obra de instalação e comissionamento: 800–1 800 € em Lisboa e Porto.',
        'Adequação da rede elétrica (reforço de circuito dedicado): 300–700 €.',
        'Estudo acústico obrigatório em edifícios em ARU ou zonas históricas: 200–400 €.',
        'Substituição ou adaptação de terminais (radiadoras vs. FCU vs. piso radiante): 1 500–4 000 € adicional.',
        'Certificação energética pós-obra para atualizar o certificado: 200–450 €.',
      ],
    },
    {
      type: 'heading3',
      content: 'Custos ocultos em edifícios Pombalinos e Gaioleiros',
    },
    {
      type: 'paragraph',
      content:
        'Nos bairros históricos de Lisboa — Alfama, Mouraria, Bairro Alto, Misericórdia — muitos edifícios Pombalinos e Gaioleiros têm paredes de alvenaria sem isolamento e infraestrutura elétrica monofásica com capacidade insuficiente. O reforço da potência contratada à E-Redes pode demorar 30–90 dias e acrescer 500–1 200 € ao orçamento. Subestimar este passo é o erro mais frequente.',
    },
    {
      type: 'heading2',
      content: 'Qual é o retorno esperado e em quanto tempo se recupera o investimento?',
    },
    {
      type: 'paragraph',
      content:
        'O retorno de uma bomba de calor ar-água num apartamento bem isolado em Portugal situa-se tipicamente entre 6 e 11 anos em retorno simples, com poupanças anuais de 400–900 € face a um sistema de aquecimento a gás. O intervalo é largo porque depende de três fatores: a tarifa de eletricidade contratada, o COP real do equipamento e — sobretudo — o nível de isolamento da envolvente.',
    },
    {
      type: 'quote',
      content:
        'Em projetos de reabilitação que acompanhámos em Lisboa e Cascais, a bomba de calor com isolamento de fachada simultâneo reduz a fatura energética em 55–65% e recupera o investimento combinado 3 anos mais cedo do que a bomba isolada. O isolamento é o multiplicador.',
      source: {
        name: 'Equipa de Sustentabilidade HABTA',
        role: 'Análise de portfólio 2024–2025',
      },
    },
    {
      type: 'paragraph',
      content:
        'Para uma estimativa rápida: um apartamento T3 em Lisboa com aquecimento a gás paga tipicamente 900–1 400 € por ano em energia para climatização e AQS. Com bomba de calor ar-água e coeficiente de desempenho de 3,5, esse custo desce para 350–600 €. A poupança anual de 500–800 € amortiza um investimento de 6 000 € em 7,5 a 12 anos sem contar com apoios.',
    },
    {
      type: 'heading2',
      content: 'Que apoios financeiros existem em Portugal em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Os principais mecanismos de apoio à eficiência energética em habitação em Portugal em 2026 são o programa Casa Eficiente, gerido pelo Fundo Ambiental sob tutela da Agência Portuguesa do Ambiente (APA), e as linhas de crédito bonificado disponibilizadas por banca aderente. Os apoios chegam a cobrir 30–50% do investimento elegível, mas têm condições de acesso específicas.',
    },
    {
      type: 'list',
      content: [
        'Casa Eficiente (Fundo Ambiental / APA): subsídio de 30–50% para equipamentos com classe A ou superior, para habitação própria e permanente. Candidatura via portal do Fundo Ambiental.',
        'Benefício fiscal: dedução em IRS de 30% das despesas com eficiência energética, com teto de 1 000 € anuais (verificar limites atualizados no Código do IRS).',
        'IVA a 6% em obras de reabilitação em ARU: aplica-se à instalação quando integrada numa empreitada de reabilitação qualificada, nos termos da legislação em vigor.',
        'PRR / Fundo de Eficiência Energética: linhas específicas para arrendamento acessível e cooperativas de habitação — consultar IHRU.',
        'Crédito bonificado habitação verde: oferecido por CGD, Santander e BPI com spreads reduzidos para imóveis com certificado A ou A+.',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Os apoios não se acumulam automaticamente — é necessário verificar a compatibilidade de cada linha com o uso final do imóvel (habitação própria, arrendamento de longa duração, arrendamento turístico). Alojamento local e arrendamento turístico estão excluídos dos principais programas de subsídio direto.',
    },
    {
      type: 'heading2',
      content: 'Como a bomba de calor afeta o certificado energético e o valor do imóvel?',
    },
    {
      type: 'paragraph',
      content:
        'A instalação de uma bomba de calor, especialmente quando combinada com isolamento da envolvente, pode fazer subir 1 a 2 classes no certificado energético emitido pela ADENE. Passar de classe F ou E para classe C ou B+ tem um impacto direto e mensurável no valor de mercado do imóvel.',
    },
    {
      type: 'paragraph',
      content:
        'Análises de transações na Grande Lisboa entre 2023 e 2025 indicam que imóveis com certificado B ou superior transacionam com um prémio de 5% a 12% face a imóveis equivalentes com certificado D ou inferior. Em Cascais e no Estoril, onde o segmento premium é dominante, esse prémio pode aproximar-se dos 15% em frações acima dos 500 000 €.',
    },
    {
      type: 'heading2',
      content: 'Quais são os principais fornecedores de bombas de calor em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'O mercado português de bombas de calor para reabilitação é dominado por marcas europeias e asiáticas com rede de assistência técnica estabelecida. A escolha do fornecedor deve ponderar a disponibilidade de peças, o prazo de garantia real e a cobertura de assistência pós-venda no distrito da obra.',
    },
    {
      type: 'list',
      content: [
        'Daikin (Japão / EU): líder de mercado em Portugal, com rede de instaladores certificados em Lisboa, Porto e Algarve. Sistemas ar-ar e ar-água com garantia de 5 anos em peças.',
        'Mitsubishi Electric: forte em sistemas multi-split e ar-água Ecodan. Assistência técnica distribuída por todo o território continental.',
        'Bosch Termotecnologia (produção em Aveiro): vantagem logística e de serviço em Portugal. Linha Compress bem adaptada a reabilitação.',
        'Viessmann: referência em sistemas de alta eficiência para imóveis de gama alta. Rede de instaladores certificados mais concentrada nas áreas metropolitanas.',
        'Ariston / Chaffoteaux: forte penetração no segmento de AQS integrado, com equipamentos mais acessíveis para reabilitação de menor orçamento.',
        'Hitachi / LG / Samsung: crescente quota no segmento ar-ar multi-split; assistência pós-venda a confirmar caso a caso.',
      ],
    },
    {
      type: 'heading3',
      content: 'Como avaliar um instalador antes de adjudicar?',
    },
    {
      type: 'paragraph',
      content:
        'O instalador deve ter alvará de construção emitido pelo IMPIC, certificação específica para fluidos frigorigénios (F-Gas, regulamento UE n.º 517/2014) e comprovativo de instalações anteriores em edifícios de tipologia semelhante. Peça sempre três referências verificáveis e o relatório de comissionamento da última instalação.',
    },
    {
      type: 'heading2',
      content: 'O que considerar antes de instalar em edifício em propriedade horizontal?',
    },
    {
      type: 'paragraph',
      content:
        'Em apartamentos em propriedade horizontal, a instalação de unidade exterior em fachada ou cobertura requer autorização da assembleia de condóminos, nos termos do Código Civil e do Regime da Propriedade Horizontal. A recusa tem de ser fundamentada, mas a ausência de deliberação pode atrasar a obra vários meses.',
    },
    {
      type: 'list',
      content: [
        'Confirmar no regulamento de condomínio se há restrições à instalação de equipamentos em fachada ou terraço.',
        'Apresentar estudo acústico prévio à assembleia — reduz objeções e agiliza aprovação.',
        'Em edifícios classificados ou em zona de proteção de imóvel classificado, a instalação exterior exige parecer da DGPC ou da câmara municipal.',
        'Verificar se a cobertura tem capacidade estrutural para o peso da unidade exterior — relevante em Gaioleiros.',
        'Prever ligação elétrica independente por fração para contagem individual de consumos.',
      ],
    },
    {
      type: 'callout',
      content:
        'Na HABTA, qualquer projeto de reabilitação que inclua bomba de calor começa com uma auditoria energética prévia e termina com a atualização do certificado ADENE. Não adjudicamos instalação sem estudo acústico e sem confirmar a capacidade da rede elétrica do edifício — são os dois pontos que mais frequentemente geram custos não previstos.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos: como integrar uma bomba de calor no seu projeto de reabilitação',
    },
    {
      type: 'paragraph',
      content:
        'Se está a planear uma reabilitação em Lisboa, Porto ou Cascais e quer perceber se uma bomba de calor melhora o retorno do seu projeto, a nossa equipa técnica, descrita em <a href="/servicos">serviços</a>, faz a análise de viabilidade energética e financeira antes da adjudicação de obra. Pode ver exemplos de projetos concluídos em <a href="/portfolio">portfólio</a>. Para aprofundar o tema regulatório, consulte o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a>. Subscreva a newsletter para receber atualizações sobre apoios financeiros assim que abram novas candidaturas.',
    },
  ],
  faq: [
    {
      q: 'Qual é o custo médio de uma bomba de calor instalada num T3 em Lisboa?',
      a: 'Entre 5 500 € e 9 000 € para um sistema ar-água completo, incluindo equipamento, mão de obra e adequação elétrica. O valor sobe 1 500–4 000 € se for necessário substituir os terminais de distribuição de calor existentes.',
    },
    {
      q: 'A bomba de calor é elegível para apoios do Fundo Ambiental em 2026?',
      a: 'Sim, para habitação própria e permanente. O programa Casa Eficiente cobre 30–50% do investimento em equipamentos classe A ou superior. Arrendamento turístico e alojamento local estão excluídos. Candidatura via portal do Fundo Ambiental / APA.',
    },
    {
      q: 'Em quantos anos se recupera o investimento numa bomba de calor em Portugal?',
      a: 'Entre 6 e 11 anos em retorno simples, sem apoios. Com subsídio de 40% e isolamento simultâneo da envolvente, o prazo pode descer para 4–6 anos. O COP do equipamento e a tarifa de eletricidade contratada são as variáveis com maior impacto.',
    },
    {
      q: 'Preciso de autorização do condomínio para instalar uma bomba de calor?',
      a: 'Sim, para qualquer unidade exterior em fachada ou cobertura comum. A assembleia de condóminos deve deliberar por maioria simples. Em edifícios classificados ou em zona de proteção, acresce parecer da DGPC ou câmara municipal.',
    },
    {
      q: 'A bomba de calor melhora o certificado energético do imóvel?',
      a: 'Pode subir 1–2 classes quando combinada com isolamento da envolvente. A atualização do certificado é feita por perito qualificado ADENE pós-obra e é obrigatória para venda ou arrendamento de longa duração.',
    },
    {
      q: 'Qual a diferença entre bomba de calor ar-ar e ar-água numa reabilitação?',
      a: 'A ar-ar (split) aquece e arrefece o ar diretamente e é mais barata de instalar. A ar-água produz também água quente para radiadores, FCU ou piso radiante e integra AQS — mais adequada a reabilitações completas onde se substitui toda a instalação de climatização.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento técnico, fiscal ou de investimento. Custos, prazos e apoios indicados são estimativas de mercado válidas à data de publicação e podem variar por equipamento, instalador, município e evolução dos programas de apoio. Consulte um perito qualificado e os organismos competentes antes de tomar decisões concretas.',
};
