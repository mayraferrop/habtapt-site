import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'materiais-reciclados-em-reabilitacao-o-que-realmente-vale',
  title: 'Materiais reciclados em reabilitação: o que vale a pena em 2026',
  description:
    'Quais os materiais reciclados que trazem retorno real em reabilitação urbana em Portugal — custos, desempenho, certificações e casos onde a opção sustentável é também a mais rentável.',
  category: 'Sustentabilidade',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Sustentabilidade',
  date: '2026-04-23',
  updated_at: '2026-04-23',
  excerpt:
    'Nem todo o material reciclado melhora o desempenho ou a margem de um projeto de reabilitação — este guia distingue o que realmente vale da retórica verde.',
  image: 'https://images.unsplash.com/photo-1693517596637-8190ac7afc0e${UNSPLASH_PARAMS}',
  tags: [
    'materiais reciclados reabilitação urbana Portugal',
    'sustentabilidade construção Lisboa',
    'isolamento térmico reciclado reabilitação',
    'economia circular imobiliário 2026',
    'certificação ambiental imóveis Portugal',
  ],
  tldr: [
    'Isolamento com lã de rocha reciclada e aglomerado de cortiça reciclada reduz custos de aquecimento/arrefecimento em 25–40% face a edifícios pré-1983 sem intervenção.',
    'Betão com agregados reciclados certificados pode representar poupanças de 8–15% no custo de estrutura, desde que cumpra a NP EN 206 e o projeto estrutural o admita.',
    'Madeira de demolição certificada (classe FSC Recycled ou equivalente) é viável em pavimentos e revestimentos interiores, mas exige rastreabilidade documental para obra licenciada.',
    'Em Lisboa, projetos com materiais de baixo carbono integrados podem aceder a incentivos municipais e pontuação adicional em avaliações BREEAM/LEED, aumentando o valor de venda até 6%.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-23',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'A pressão para construir de forma mais sustentável chegou ao imobiliário português com uma velocidade que superou a capacidade do setor de distinguir o que tem substância técnica do que é apenas posicionamento de marketing. Este artigo foca-se no que realmente vale a pena: materiais reciclados com desempenho comprovado, viabilidade em obra licenciada e impacto positivo no valor do ativo.',
    },
    {
      type: 'paragraph',
      content:
        'A utilização de materiais reciclados em reabilitação urbana em Portugal não é uma tendência passageira — é uma resposta a requisitos regulatórios crescentes, nomeadamente os objetivos de economia circular da Estratégia de Longo Prazo para a Renovação dos Edifícios (ELPRE) e as metas de descarbonização do setor da construção para 2030. A questão prática é outra: quais os materiais que justificam a escolha técnica e financeira num projeto real?',
    },
    {
      type: 'heading2',
      content: 'O que torna um material reciclado viável em obra de reabilitação?',
    },
    {
      type: 'paragraph',
      content:
        'Um material reciclado é viável quando cumpre simultaneamente três condições: tem especificação técnica verificável (norma europeia ou portuguesa aplicável), é aceite pelo projeto de licenciamento da câmara municipal competente e o seu custo total — incluindo aplicação e eventual menor durabilidade — é competitivo face ao equivalente virgem.',
    },
    {
      type: 'list',
      content: [
        'Conformidade com normas EN ou NP aplicáveis à função construtiva (estrutura, isolamento, revestimento).',
        'Rastreabilidade documental — declaração do fabricante, certificado de origem, declaração ambiental de produto (DAP).',
        'Compatibilidade com o sistema construtivo existente, sobretudo em edifícios pombalinos e gaioleiros.',
        'Aprovação explícita no caderno de encargos e aceitação pelo empreiteiro com alvará adequado.',
        'Disponibilidade em Portugal continental — alguns produtos certificados têm lead times de 8–14 semanas em importação.',
      ],
    },
    {
      type: 'heading2',
      content: 'Isolamento térmico reciclado: onde está o maior retorno?',
    },
    {
      type: 'paragraph',
      content:
        'O isolamento é a categoria onde materiais reciclados oferecem o melhor rácio desempenho/custo em reabilitação. A lã de rocha reciclada (com conteúdo reciclado pós-industrial de 16–30%), o aglomerado de cortiça expandida (subproduto do processo corticeiro) e o isolamento de celulose projetada (produzido a partir de papel reciclado) têm desempenho térmico equivalente ao produto virgem e são amplamente utilizados em obras licenciadas em Lisboa e no Porto.',
    },
    {
      type: 'paragraph',
      content:
        'Em edifícios anteriores a 1983 — ano de entrada em vigor do RGEU revisto com requisitos térmicos — a ausência total de isolamento é a norma. Uma intervenção de isolamento de fachada com aglomerado de cortiça reciclada de 60 mm pode reduzir as necessidades de energia útil para aquecimento em 30–40%, conforme simulações em projetos de certificação energética realizados pela nossa equipa entre 2023 e 2025.',
    },
    {
      type: 'table',
      content: {
        headers: ['Material reciclado', 'Aplicação típica', 'Conteúdo reciclado', 'Poupança estimada vs. sem isolamento'],
        rows: [
          ['Aglomerado de cortiça expandida', 'Isolamento de fachada e cobertura', '100% subproduto corticeiro', '28–38% energia útil aquecimento'],
          ['Lã de rocha reciclada', 'Isolamento de paredes interiores e cobertura', '16–30% reciclado pós-industrial', '22–32% energia útil aquecimento'],
          ['Celulose projetada', 'Isolamento de desvãos e pavimentos elevados', '80–85% papel reciclado', '20–30% energia útil aquecimento'],
          ['EPS reciclado (poliestireno)', 'ETICS em fachada — uso condicionado em ARU', '20–40% reciclado pós-consumo', '25–35% energia útil aquecimento'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'Restrições em zonas históricas de Lisboa e Porto',
    },
    {
      type: 'paragraph',
      content:
        'Em zonas de proteção patrimonial — Alfama, Mouraria, Bairro Alto, Baixa Pombalina em Lisboa; Ribeira e Bonfim no Porto — os sistemas de isolamento pelo exterior (ETICS) estão frequentemente vedados por regulamento de imagem urbana. Nestes casos, o isolamento pelo interior com materiais de baixa espessura e alta eficiência, como painéis de aerogel reciclado ou cortiça em placa, é a via tecnicamente viável, embora com custo por m² 35–60% superior ao ETICS convencional.',
    },
    {
      type: 'heading2',
      content: 'Betão com agregados reciclados: quando é admissível?',
    },
    {
      type: 'paragraph',
      content:
        'O betão com agregados reciclados de betão (ARC) está normalizado pela NP EN 206 e pelo Guia para a Utilização de Agregados Reciclados Grossos em Betões de Ligantes Hidráulicos do LNEC. A sua utilização em elementos estruturais está condicionada à classe de exposição e à resistência exigida — em elementos de betão armado de classe de exposição XC1 ou XC2, a substituição parcial de agregado natural por reciclado até 20–30% é tecnicamente admissível com ensaios de caracterização.',
    },
    {
      type: 'paragraph',
      content:
        'Em reabilitação, o ARC aplica-se com maior facilidade em enchimentos, contrapisos e elementos não estruturais, onde a substituição pode atingir 50–100% e representar poupanças de 10–18% no custo do material. Para lajes e vigas, o projetista estrutural e o dono de obra devem ponderar a variabilidade de desempenho lote a lote — um fornecedor com controlo de qualidade certificado é indispensável.',
    },
    {
      type: 'heading2',
      content: 'Madeira de demolição certificada: vale a pena o esforço documental?',
    },
    {
      type: 'paragraph',
      content:
        'A madeira recuperada de demolição é um dos materiais com maior valor estético e técnico em reabilitação de habitação premium — e um dos mais exigentes em termos de rastreabilidade. Para ser aceite em obra licenciada, deve ter certificação FSC Recycled ou equivalente, laudo de estado fitossanitário (ausência de insetos xilófagos e fungos) e declaração de conformidade com a classe de resistência mecânica exigida no projeto.',
    },
    {
      type: 'quote',
      content:
        'Em projetos de habitação premium em Chiado e Misericórdia, a utilização de soalho de madeira de demolição certificada aumentou o valor de venda percebido em 3–5% face a pavimentos laminados equivalentes — mas o processo de sourcing e certificação acrescentou 6–8 semanas ao prazo de obra.',
      source: {
        name: 'Equipa de Sustentabilidade HABTA',
        role: 'Análise de projetos 2023–2025',
      },
    },
    {
      type: 'paragraph',
      content:
        'A equipa da HABTA só recomenda madeira de demolição em projetos com prazo de obra superior a 12 meses e onde o posicionamento de mercado justifica o custo adicional de certificação. Em projetos de rotação rápida ou em tipologias de rendimento médio, o rácio esforço/retorno não se justifica.',
    },
    {
      type: 'heading2',
      content: 'Que materiais reciclados não valem a pena — ainda?',
    },
    {
      type: 'paragraph',
      content:
        'Nem tudo o que se apresenta como "reciclado" ou "sustentável" tem desempenho adequado para reabilitação em Portugal. Alguns produtos ainda em fase de desenvolvimento ou sem cadeia de fornecimento estável no mercado nacional merecem cautela.',
    },
    {
      type: 'list',
      content: [
        'Tintas com pigmentos reciclados de baixa qualidade: variabilidade de cor entre lotes dificulta a uniformidade em fachadas — risco estético e de relicenciamento.',
        'Painéis de isolamento de resíduos têxteis sem DAP publicada: desempenho térmico variável e sem dados de durabilidade validados para o clima português.',
        'Argamassas com resíduos de vidro moído sem especificação técnica: podem introduzir reações álcali-sílica em contacto com cimento Portland — patologia de longo prazo.',
        'Produtos importados sem homologação LNEC ou equivalente europeu: aceitação em processo de licenciamento camarário é incerta e pode atrasar a obra.',
      ],
    },
    {
      type: 'heading2',
      content: 'Certificações ambientais: impactam o valor de venda em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'A certificação BREEAM Very Good ou LEED Gold começa a ser pedida por compradores institucionais e por fundos de investimento imobiliário que operam em Lisboa e no Porto. Em habitação residencial de segmento médio-alto, o prémio de valor é ainda modesto — entre 3% e 6% — mas a velocidade de absorção de mercado é consistentemente superior à de unidades sem certificação equivalente.',
    },
    {
      type: 'paragraph',
      content:
        'O uso de materiais reciclados com DAP contribui diretamente para créditos em sistemas BREEAM e LEED, reduzindo o custo total de certificação. O IMPIC publica orientações sobre requisitos de sustentabilidade aplicáveis a obras financiadas com fundos europeus — um enquadramento relevante para projetos de maior escala.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se está a desenvolver um projeto de reabilitação e quer perceber quais os materiais reciclados adequados ao seu edificado, localização e posicionamento de mercado, a nossa equipa técnica está disponível para uma análise preliminar — consulte os nossos <a href="/servicos">serviços</a> ou o <a href="/portfolio">portefólio</a> de projetos concluídos. Para o enquadramento regulatório completo, leia também o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a> e <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">os cinco pilares para avaliar um projeto de reabilitação</a>. Pode subscrever a newsletter para receber análises técnicas futuras.',
    },
    {
      type: 'callout',
      content:
        'A sustentabilidade em reabilitação não é um custo adicional quando é integrada desde a fase de projeto. Os materiais reciclados com melhor desempenho — cortiça, lã de rocha reciclada, ARC em elementos não estruturais — são hoje competitivos em custo e superiores em impacto ambiental documentável. A diferença está na especificação técnica rigorosa e na rastreabilidade documental.',
    },
  ],
  faq: [
    {
      q: 'O isolamento de cortiça reciclada é aceite em obras licenciadas em Lisboa?',
      a: 'Sim. O aglomerado de cortiça expandida tem norma europeia aplicável e é amplamente aceite em projetos licenciados pela CML. Em zonas de proteção patrimonial, aplica-se pelo interior — verificar sempre com o projeto de arquitetura aprovado.',
    },
    {
      q: 'Betão com agregados reciclados pode usar-se em elementos estruturais?',
      a: 'Pode, com condicionantes. A NP EN 206 e o guia LNEC admitem substituição parcial até 20–30% em classes de exposição XC1/XC2. Exige ensaios de caracterização por lote e validação do projetista estrutural responsável.',
    },
    {
      q: 'Quanto custa mais um projeto com materiais reciclados certificados?',
      a: 'Depende do material. Isolamentos reciclados têm custo equivalente ou 5–10% superior ao produto virgem. Madeira de demolição certificada pode custar 20–35% mais, mas acrescenta valor de venda percebido em segmentos premium.',
    },
    {
      q: 'Materiais reciclados contribuem para certificação BREEAM ou LEED?',
      a: 'Sim. Materiais com Declaração Ambiental de Produto (DAP) e conteúdo reciclado verificável contribuem para créditos nas categorias "Materials" de BREEAM e LEED, reduzindo o custo total de certificação do projeto.',
    },
    {
      q: 'Onde encontrar fornecedores de materiais reciclados certificados em Portugal?',
      a: 'O IMPIC e as associações setoriais como a ATIC e a APCOR publicam listas de fabricantes com certificação. Para betão com ARC, o LNEC mantém registos de fornecedores com controlo de qualidade validado.',
    },
    {
      q: 'A utilização de materiais reciclados dá acesso a incentivos fiscais em Portugal?',
      a: 'Não diretamente, em 2026. Mas projetos com componente de sustentabilidade documentada têm acesso facilitado a financiamento europeu (PRR, Portugal 2030) e a incentivos municipais em Lisboa e no Porto para reabilitação de baixo carbono.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não substitui aconselhamento técnico, ambiental ou jurídico personalizado. Dados de desempenho e poupanças são estimativas baseadas em projetos da HABTA e em normas vigentes à data de publicação — variam conforme o edifício, o clima local e o fornecedor. Consulte profissionais qualificados antes de decisões de projeto ou investimento.',
};
