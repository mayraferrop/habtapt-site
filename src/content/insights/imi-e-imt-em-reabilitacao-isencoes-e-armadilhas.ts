import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'imi-e-imt-em-reabilitacao-isencoes-e-armadilhas',
  title: 'IMI e IMT em reabilitação urbana: isenções e armadilhas em 2026',
  description:
    'Perceba quais as isenções de IMI e IMT disponíveis em reabilitação urbana em Portugal, os requisitos exatos e os erros que anulam os benefícios fiscais.',
  category: 'Regulamentação',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Jurídica',
  date: '2026-04-23',
  updated_at: '2026-04-23',
  excerpt:
    'As isenções de IMI e IMT em reabilitação urbana podem representar poupanças significativas, mas exigem cumprimento rigoroso de requisitos legais que muitos investidores desconhecem.',
  image: 'https://images.unsplash.com/photo-1721244653652-268631ec049a${UNSPLASH_PARAMS}',
  tags: [
    'isenção IMI reabilitação urbana Portugal',
    'IMT reabilitação ARU Lisboa 2026',
    'benefícios fiscais imóveis antigos Portugal',
    'regime fiscal reabilitação urbana 2026',
    'IVA 6% obras reabilitação Portugal',
  ],
  tldr: [
    'Imóveis em Áreas de Reabilitação Urbana (ARU) podem beneficiar de isenção de IMI por 3 anos (prorrogável a 5) e isenção de IMT na primeira transmissão após reabilitação qualificada.',
    'A isenção de IMT não é automática — exige reconhecimento prévio de "reabilitação qualificada" pela câmara municipal, com critérios de desempenho energético e estrutural definidos no DL n.º 53/2014.',
    'O erro mais comum é adquirir o imóvel antes de confirmar se está dentro de uma ARU delimitada e aprovada pelo município, o que invalida qualquer benefício fiscal subsequente.',
    'Em Lisboa e Porto, a conjugação de isenção de IMI, IMT e IVA a 6% em obras pode reduzir a carga fiscal total do projeto em 15% a 22% face a um imóvel equivalente fora de ARU.',
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
        'As isenções de IMI e IMT em reabilitação urbana existem há mais de uma década em Portugal — mas continuam a ser mal compreendidas. Investidores perdem benefícios fiscais relevantes por erros processuais que poderiam ter sido evitados numa fase de due diligence. Este artigo detalha o que está disponível, como aceder e onde o regime falha na prática.',
    },
    {
      type: 'paragraph',
      content:
        'O regime fiscal de reabilitação urbana em Portugal assenta em três pilares: isenção de IMI, isenção de IMT e IVA reduzido a 6% em obras. Os três estão interligados, mas funcionam de forma independente — cumprir os requisitos para um não garante automaticamente os outros. A base legal principal é o Estatuto dos Benefícios Fiscais (EBF), artigos 45.º e 46.º, conjugado com o DL n.º 53/2014 que estabelece o regime excecional de reabilitação de edifícios.',
    },
    {
      type: 'heading2',
      content: 'O que é exatamente a isenção de IMI em reabilitação urbana?',
    },
    {
      type: 'paragraph',
      content:
        'A isenção de IMI aplica-se a imóveis reabilitados localizados em Áreas de Reabilitação Urbana (ARU) e abrange 3 anos a contar do ano seguinte ao da emissão da licença de utilização após obras. Este prazo pode ser prorrogado por mais 2 anos, totalizando 5 anos de isenção, mediante deliberação da assembleia municipal.',
    },
    {
      type: 'paragraph',
      content:
        'Para imóveis arrendados no âmbito do regime de arrendamento apoiado ou de reabilitação para arrendamento acessível, o EBF prevê condições mais favoráveis. A isenção aplica-se ao prédio na sua totalidade — incluindo frações autónomas — desde que a intervenção abranja o edifício como um todo.',
    },
    {
      type: 'list',
      content: [
        'O imóvel tem de estar dentro de ARU formalmente delimitada e publicada em Diário da República.',
        'A reabilitação tem de ser reconhecida como "reabilitação qualificada" pela entidade gestora da ARU.',
        'O pedido de isenção de IMI é apresentado na Autoridade Tributária e Aduaneira (AT) após emissão da licença de utilização.',
        'O prazo base de isenção é de 3 anos, prorrogável a 5 por deliberação municipal.',
        'Imóveis com usos mistos podem ter apenas a componente habitacional isenta, dependendo da leitura camarária.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como funciona a isenção de IMT e quando se aplica?',
    },
    {
      type: 'paragraph',
      content:
        'A isenção de IMT em reabilitação urbana, prevista no artigo 45.º do EBF, aplica-se à primeira transmissão onerosa do imóvel após a conclusão das obras de reabilitação qualificada. Significa que o comprador final — e não o promotor — beneficia da isenção, o que tem impacto direto no preço de venda e na atratividade comercial do projeto.',
    },
    {
      type: 'paragraph',
      content:
        'Para que a isenção seja reconhecida, a câmara municipal competente tem de emitir declaração comprovativa de que a reabilitação cumpre os critérios técnicos do DL n.º 53/2014. Sem este documento, o notário aplica IMT à taxa normal — e o benefício perde-se sem possibilidade de reembolso posterior.',
    },
    {
      type: 'table',
      content: {
        headers: ['Imposto', 'Benefício disponível', 'Quem beneficia', 'Requisito-chave', 'Base legal'],
        rows: [
          ['IMI', 'Isenção 3 anos (até 5)', 'Proprietário / promotor', 'Reabilitação qualificada em ARU', 'EBF art.º 45.º'],
          ['IMT', 'Isenção na 1.ª transmissão', 'Comprador final', 'Declaração municipal de reabilitação qualificada', 'EBF art.º 45.º'],
          ['IVA em obras', 'Taxa de 6% (em vez de 23%)', 'Promotor / dono de obra', 'Empreitada de reabilitação em imóvel >2 anos', 'CIVA Lista I, verba 2.23'],
          ['Mais-Valias IRS', 'Taxa reduzida de 5%', 'Pessoa singular vendedora', 'Arrendamento habitacional por ≥5 anos após obra', 'EBF art.º 71.º'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'O que é reabilitação qualificada e por que é determinante?',
    },
    {
      type: 'paragraph',
      content:
        'O conceito de "reabilitação qualificada" é o ponto de articulação de todo o regime fiscal. Sem este reconhecimento, nenhuma das isenções de IMI ou IMT é aplicável. O DL n.º 53/2014 define os critérios: a intervenção tem de elevar pelo menos dois níveis o estado de conservação do edifício e cumprir requisitos mínimos de desempenho energético.',
    },
    {
      type: 'list',
      content: [
        'O edifício deve estar em estado de conservação "médio", "mau" ou "péssimo" antes da intervenção — verificado por vistoria técnica.',
        'Após as obras, o imóvel tem de atingir nível de conservação "bom" ou "excelente".',
        'O desempenho energético pós-reabilitação deve cumprir os requisitos do SCE (Sistema de Certificação Energética) em vigor.',
        'A avaliação é feita pela câmara municipal ou pela SRU (Sociedade de Reabilitação Urbana) competente — como a Porto Vivo, SRU no Porto.',
        'O reconhecimento tem carácter discricionário: dois projetos semelhantes em municípios diferentes podem ter resultados distintos.',
      ],
    },
    {
      type: 'heading3',
      content: 'Diferença entre estado de conservação e reabilitação qualificada',
    },
    {
      type: 'paragraph',
      content:
        'O estado de conservação é avaliado segundo a Portaria n.º 1192-B/2006 (e atualizações), numa escala de 1 a 5 (excelente a péssimo). A reabilitação qualificada exige uma progressão mínima de dois níveis nessa escala. Um edifício em estado "médio" (nível 3) que seja reabilitado para "bom" (nível 2) cumpre o critério. Um edifício já em bom estado não pode beneficiar desta via — o que exclui muitos imóveis de segmentos premium que já foram intervencionados.',
    },
    {
      type: 'heading2',
      content: 'Quais são as armadilhas mais frequentes que anulam os benefícios fiscais?',
    },
    {
      type: 'paragraph',
      content:
        'Na prática, a maioria das situações em que os benefícios ficais são perdidos resulta de erros processuais evitáveis. A due diligence fiscal deve acontecer antes da promessa de compra, não depois.',
    },
    {
      type: 'list',
      content: [
        'Adquirir o imóvel sem confirmar se está dentro de ARU delimitada e em vigor — ARUs podem ser revogadas ou alteradas.',
        'Iniciar obras sem solicitar o reconhecimento prévio de reabilitação qualificada à câmara municipal, tornando a declaração final impossível.',
        'Contratar empreiteiro sem separar claramente os trabalhos elegíveis para IVA de 6% dos trabalhos a 23%, gerando risco em inspeções tributárias.',
        'Não apresentar o pedido de isenção de IMI à AT no prazo correto após emissão da licença de utilização — a AT não aplica a isenção retroativamente de forma automática.',
        'Confundir isenção de IMI durante a obra (aplicável noutros regimes) com a isenção pós-reabilitação do EBF, que tem requisitos distintos.',
        'Vender o imóvel antes de obter a declaração de reabilitação qualificada, privando o comprador da isenção de IMT e reduzindo o valor de mercado.',
      ],
    },
    {
      type: 'quote',
      content:
        'Nos projetos que analisamos em Lisboa e Porto, a isenção de IMT não reconhecida à data da escritura representa, em média, entre 5.000 € e 18.000 € de custo adicional para o comprador — um valor que erode a margem do promotor quando este tenta compensar comercialmente a desvantagem.',
      source: {
        name: 'Equipa Jurídica HABTA',
        role: 'Análise de viabilidade de projetos 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Como se processa o IVA a 6% em obras de reabilitação?',
    },
    {
      type: 'paragraph',
      content:
        'A taxa reduzida de IVA de 6% em empreitadas de reabilitação está prevista na verba 2.23 da Lista I anexa ao Código do IVA. Aplica-se a obras de reabilitação realizadas em imóveis com mais de dois anos de existência e que se destinem a habitação. A taxa reduzida aplica-se à mão de obra e a materiais incorporados na obra, desde que não excedam 50% do valor total da empreitada.',
    },
    {
      type: 'paragraph',
      content:
        'Para obras fora de ARU, o critério de elegibilidade é a antiguidade do imóvel (mais de dois anos) e a finalidade habitacional. Para obras em ARU com reconhecimento de reabilitação qualificada, o âmbito de aplicação do IVA reduzido é mais amplo e inclui trabalhos em partes comuns e edifícios mistos.',
    },
    {
      type: 'heading3',
      content: 'O que não beneficia da taxa de 6%',
    },
    {
      type: 'list',
      content: [
        'Equipamentos e eletrodomésticos, mesmo que instalados durante a obra.',
        'Materiais que excedam 50% do valor da empreitada — a taxa de 23% aplica-se ao excesso.',
        'Obras em imóveis com menos de dois anos de construção.',
        'Trabalhos de construção nova integrados numa empreitada de reabilitação — devem ser separados contratualmente.',
        'Projetos de arquitetura e engenharia (honorários profissionais), que ficam sempre a 23%.',
      ],
    },
    {
      type: 'heading2',
      content: 'ARU em Lisboa, Porto e Cascais: o que muda na prática?',
    },
    {
      type: 'paragraph',
      content:
        'A delimitação de ARUs varia significativamente entre municípios e até dentro do mesmo município. Em Lisboa, zonas como Alfama, Mouraria, Intendente e Misericórdia estão cobertas por ARUs consolidadas, com entidade gestora ativa. No Porto, a Porto Vivo, SRU gere as ARUs do centro histórico incluindo Bonfim e parte de Cedofeita. Em Cascais, as ARUs existentes cobrem núcleos históricos como Cascais vila e Estoril.',
    },
    {
      type: 'paragraph',
      content:
        'A existência de ARU é condição necessária mas não suficiente. A entidade gestora tem de estar operacional e o imóvel tem de se enquadrar nos objetivos da Operação de Reabilitação Urbana (ORU) aprovada. Municipios com ARUs delimitadas mas sem ORU aprovada ou com ORU expirada não garantem acesso aos benefícios fiscais.',
    },
    {
      type: 'callout',
      content:
        'Na HABTA, a confirmação do estatuto de ARU e da elegibilidade para reabilitação qualificada é feita antes da apresentação de qualquer proposta de aquisição. Esta verificação demora, em regra, 5 a 10 dias úteis e pode poupar meses de trabalho num projeto inviável do ponto de vista fiscal.',
    },
    {
      type: 'heading2',
      content: 'Quanto valem realmente os benefícios fiscais num projeto típico?',
    },
    {
      type: 'paragraph',
      content:
        'Para concretizar a dimensão dos benefícios, considere um imóvel em estado de conservação mau adquirido por 350.000 € em ARU de Lisboa, com obras de reabilitação de 180.000 € e venda após reabilitação por 620.000 €.',
    },
    {
      type: 'table',
      content: {
        headers: ['Benefício fiscal', 'Cenário sem ARU / sem qualificação', 'Cenário com ARU e reabilitação qualificada', 'Poupança estimada'],
        rows: [
          ['IMT na aquisição (promotor)', 'IMT normal s/ isenção: ~21.350 €', 'IMT normal (aquisição pelo promotor não isenta)', '0 € (isenção só na 1.ª transmissão ao comprador)'],
          ['IMT na venda (comprador)', '6,5% sobre 620.000 €: ~40.300 €', 'Isenção total com declaração de qualificação', '~40.300 €'],
          ['IMI durante 3 anos', '~3.500 €/ano × 3 = 10.500 €', 'Isenção por 3 anos', '~10.500 €'],
          ['IVA em obras (180.000 €)', '23% = 41.400 € (se aplicável)', '6% = 10.800 €', '~30.600 €'],
          ['Total estimado', '—', '—', '~81.400 € de poupança fiscal'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Os valores acima são estimativas ilustrativas baseadas em taxas vigentes em 2026 e pressupostos simplificados. A poupança real varia com o VPT do imóvel, a taxa de IMI municipal, a natureza exata das obras e a elegibilidade de cada componente para IVA reduzido. Consulte sempre um fiscal ou advogado antes de quantificar benefícios para decisões de investimento.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos: como estruturar a due diligence fiscal antes da promessa',
    },
    {
      type: 'paragraph',
      content:
        'A sequência correta é: (1) confirmar a localização dentro de ARU ativa com ORU aprovada; (2) solicitar informação prévia à câmara sobre elegibilidade para reabilitação qualificada; (3) incluir na CPCV cláusula suspensiva condicionada ao reconhecimento de reabilitação qualificada; (4) contratar empreiteiro com separação clara de trabalhos por taxa de IVA; (5) apresentar pedido de isenção de IMI à AT após emissão da licença de utilização. Para uma análise do seu projeto específico, a nossa equipa jurídica está disponível através de <a href="/servicos">serviços</a> ou pode consultar o nosso <a href="/portfolio">portefólio</a> para exemplos de projetos estruturados neste enquadramento. Veja também o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a> e o artigo sobre <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">cinco pilares para avaliar um projeto de reabilitação</a>.',
    },
  ],
  faq: [
    {
      q: 'A isenção de IMT aplica-se ao promotor ou ao comprador final?',
      a: 'Ao comprador final, na primeira transmissão onerosa do imóvel após reabilitação qualificada. O promotor não beneficia de isenção de IMT na aquisição — apenas o comprador na venda pós-reabilitação, mediante declaração municipal de qualificação.',
    },
    {
      q: 'Como confirmar se um imóvel está dentro de uma ARU ativa?',
      a: 'Cada câmara municipal publica a delimitação das ARUs no Portal Geográfico e no Diário da República. Em Lisboa, consulta-se a CML; no Porto, a Porto Vivo, SRU. A confirmação deve incluir verificação de que a ORU associada está aprovada e em vigor.',
    },
    {
      q: 'Quanto tempo dura a isenção de IMI em reabilitação urbana?',
      a: 'O prazo base é de 3 anos a contar do ano seguinte à emissão da licença de utilização após obras. Pode ser prorrogado por mais 2 anos, até 5 anos no total, mediante deliberação da assembleia municipal do município onde o imóvel se localiza.',
    },
    {
      q: 'O IVA de 6% aplica-se a todas as obras de reabilitação?',
      a: 'Não. Aplica-se a empreitadas em imóveis com mais de dois anos destinados a habitação, desde que os materiais não excedam 50% do valor da empreitada. Equipamentos, honorários de projeto e construção nova dentro da empreitada ficam sujeitos a 23%.',
    },
    {
      q: 'É possível perder a isenção de IMI depois de atribuída?',
      a: 'Sim. Se o imóvel mudar de uso para fins não habitacionais ou se verificar incumprimento das condições que fundaram o reconhecimento de reabilitação qualificada, a câmara municipal pode revogar o estatuto e a Autoridade Tributária cessar a isenção.',
    },
    {
      q: 'Um imóvel em Cascais pode beneficiar das mesmas isenções que em Lisboa?',
      a: 'Pode, desde que esteja dentro de uma ARU delimitada pelo município de Cascais com ORU aprovada e que a intervenção seja reconhecida como reabilitação qualificada. O regime legal é nacional, mas a aplicação prática depende das políticas e recursos de cada município.',
    },
  ],
  disclaimer:
    'Este artigo é informativo e não constitui aconselhamento fiscal, jurídico ou de investimento. O regime de benefícios fiscais em reabilitação urbana está sujeito a alterações legislativas e a interpretações municipais que podem diferir dos exemplos apresentados. Os valores indicados são estimativas ilustrativas. Consulte um advogado ou fiscal qualificado antes de tomar decisões concretas de aquisição ou estruturação de projetos.',
};
