import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'areas-de-reabilitacao-urbana-aru-como-confirmar-se',
  title: 'ARU em Portugal 2026: como confirmar se o seu imóvel está incluído',
  description:
    'Guia prático para verificar se um imóvel está dentro de uma Área de Reabilitação Urbana em Lisboa, Porto ou Cascais — e que incentivos fiscais decorrem dessa inclusão.',
  category: 'Regulamentação',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Jurídica',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'Confirmar se um imóvel está dentro de uma Área de Reabilitação Urbana é o primeiro passo para aceder a IVA de 6% em obras e isenções de IMI e IMT em Portugal.',
  image: 'https://images.unsplash.com/photo-1721244653652-268631ec049a${UNSPLASH_PARAMS}',
  tags: [
    'área de reabilitação urbana Portugal',
    'ARU Lisboa Porto 2026',
    'IVA 6% obras reabilitação',
    'isenção IMI IMT ARU',
    'como verificar ARU imóvel',
  ],
  tldr: [
    'As ARU são delimitadas por cada município e publicadas em Diário da República; a confirmação faz-se gratuitamente no portal da câmara ou da SRU respetiva.',
    'Imóveis em ARU podem beneficiar de IVA reduzido a 6% em obras, isenção de IMT na aquisição e isenção temporária de IMI até 3 anos, mediante requisitos específicos.',
    'Em Lisboa, a CML disponibiliza consulta georreferenciada em habitar.lisboa.pt; no Porto, a Porto Vivo, SRU mantém o mapa de ARU atualizado em portovivosru.pt.',
    'A inclusão numa ARU não garante benefícios automáticos — é necessário que a intervenção constitua reabilitação qualificada nos termos do DL n.º 53/2014 e legislação subsequente.',
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
        'Saber se um imóvel está dentro de uma Área de Reabilitação Urbana (ARU) é a primeira verificação que qualquer investidor ou proprietário deve fazer antes de avançar para obras ou negociação de compra. A diferença entre estar dentro ou fora pode representar dezenas de milhares de euros em poupança fiscal — ou em custos desnecessariamente assumidos.',
    },
    {
      type: 'paragraph',
      content:
        'As Áreas de Reabilitação Urbana são instrumentos de política urbana criados pelo regime jurídico da reabilitação urbana, aprovado pelo DL n.º 307/2009 e posteriormente revisto pelo DL n.º 53/2014. Cada município delimita as suas ARU por deliberação de assembleia municipal, publicada em Diário da República. A delimitação é, por isso, variável: muda de cidade para cidade, de freguesia para freguesia e, por vezes, até entre trechos da mesma rua.',
    },
    {
      type: 'heading2',
      content: 'O que é, concretamente, uma Área de Reabilitação Urbana?',
    },
    {
      type: 'paragraph',
      content:
        'Uma ARU é um perímetro geográfico delimitado por instrumento de gestão territorial em que o município reconhece a necessidade de reabilitação do edificado ou dos espaços urbanos. A delimitação habilita os proprietários a aceder a um conjunto de benefícios fiscais e simplificações de licenciamento que não existem fora desse perímetro.',
    },
    {
      type: 'paragraph',
      content:
        'Dentro de uma ARU, as câmaras municipais podem ainda criar Unidades de Intervenção (UI) com programas de ação específicos, incluindo parcerias público-privadas, operações de reabilitação sistemáticas e apoios complementares a fundo perdido provenientes de fundos europeus.',
    },
    {
      type: 'heading2',
      content: 'Como confirmar se o imóvel está dentro de uma ARU?',
    },
    {
      type: 'paragraph',
      content:
        'A verificação é gratuita e pode ser feita por qualquer pessoa, sem necessidade de advogado ou técnico especializado. Existem três formas principais, por ordem crescente de fiabilidade.',
    },
    {
      type: 'list',
      content: [
        'Consulta georreferenciada online: a maioria das câmaras disponibiliza um portal SIG (Sistema de Informação Geográfica) onde se introduz a morada ou a referência cadastral e o sistema indica se a parcela está dentro de uma ARU delimitada.',
        'Pesquisa no Diário da República: as deliberações de delimitação e revisão de ARU são publicadas em Diário da República, Série II. Procura pelo nome do município e pela expressão "área de reabilitação urbana" em dre.pt.',
        'Certidão urbanística municipal: o pedido formal de informação prévia ou certidão de localização junto dos serviços de urbanismo da câmara indica o enquadramento da parcela em ARU e em qualquer outro plano ou servidão aplicável.',
      ],
    },
    {
      type: 'heading3',
      content: 'Portais específicos por município',
    },
    {
      type: 'table',
      content: {
        headers: ['Município', 'Entidade responsável', 'Portal de consulta', 'Cobertura típica de ARU'],
        rows: [
          ['Lisboa', 'CML — Departamento de Reabilitação Urbana', 'habitar.lisboa.pt + SIG Lisboa', 'Alfama, Mouraria, Chiado, Belém, Intendente, entre outros'],
          ['Porto', 'Porto Vivo, SRU', 'portovivosru.pt', 'Baixa, Bonfim, Cedofeita, Miragaia, Vitória, entre outros'],
          ['Cascais', 'CMC — Divisão de Reabilitação Urbana', 'cascais.pt (SIG municipal)', 'Cascais vila, Estoril, Parede (consultar delimitação vigente)'],
          ['Outros municípios', 'Câmara municipal respetiva', 'Portal municipal ou balcão de urbanismo', 'Variável — verificar deliberação publicada em DR'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Quando o portal online não for conclusivo — situação que ocorre em municípios com cartografia menos atualizada —, o caminho mais seguro é o pedido formal de certidão urbanística. Em Lisboa e Porto, a resposta ao pedido demora tipicamente 10 a 20 dias úteis e tem custo inferior a 100 €.',
    },
    {
      type: 'heading2',
      content: 'Que benefícios fiscais decorrem da inclusão numa ARU?',
    },
    {
      type: 'paragraph',
      content:
        'A inclusão numa ARU é condição necessária mas não suficiente para aceder aos benefícios fiscais. A intervenção a realizar tem de preencher requisitos adicionais definidos na legislação aplicável, designadamente o cumprimento de critérios de reabilitação qualificada.',
    },
    {
      type: 'list',
      content: [
        'IVA a 6% nas empreitadas de reabilitação: aplica-se às obras de reabilitação em imóveis com mais de 30 anos ou localizados em ARU, nos termos da verba 2.23 da Lista I anexa ao Código do IVA. A taxa reduzida não se aplica a materiais fornecidos separadamente da empreitada.',
        'Isenção de IMT na aquisição: a compra de imóvel em ARU para reabilitação pode beneficiar de isenção de IMT, sujeita a reconhecimento pelo município e cumprimento de prazo de início de obras (geralmente 3 anos após aquisição).',
        'Isenção temporária de IMI: os imóveis objeto de reabilitação em ARU podem ficar isentos de IMI por um período de 3 anos, renovável uma vez por mais 5 anos em casos de desempenho energético comprovado — nos termos do EBF (Estatuto dos Benefícios Fiscais).',
        'Benefícios em IRS para proprietários: rendimentos prediais de imóveis reabilitados em ARU arrendados a preço moderado podem beneficiar de taxas reduzidas, sujeitas a condições do programa Arrendamento Acessível ou equivalente.',
      ],
    },
    {
      type: 'quote',
      content:
        'Na nossa experiência de análise de mais de 120 projetos, os benefícios fiscais em ARU representam, em média, uma poupança equivalente a 8–14% do custo total de reabilitação — um impacto direto no retorno que não deve ser ignorado na fase de viabilidade.',
      source: {
        name: 'Equipa Jurídica HABTA',
        role: 'Análise interna de viabilidade 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'O que significa "reabilitação qualificada" para efeitos de benefícios?',
    },
    {
      type: 'paragraph',
      content:
        'Reabilitação qualificada é um conceito técnico-legal que distingue uma intervenção de manutenção corrente de uma reabilitação que cumpre os requisitos mínimos de desempenho energético e segurança estrutural definidos no regime jurídico aplicável. Não basta substituir tetos falsos ou pintar fachadas.',
    },
    {
      type: 'paragraph',
      content:
        'Para que uma intervenção seja reconhecida como reabilitação qualificada, é necessário obter certificado de reabilitação urbana emitido pelo município, que atesta que o imóvel — no estado anterior — apresentava condições de insalubridade, insegurança ou vetustez, e que a intervenção cumpriu os requisitos mínimos de desempenho energético definidos no RCCTE ou no SCE em vigor.',
    },
    {
      type: 'list',
      content: [
        'O imóvel deve ter, no mínimo, 30 anos de construção ou estar localizado em ARU.',
        'A intervenção deve melhorar o nível de desempenho energético em pelo menos dois níveis (ex.: de E para C), de acordo com certificação SCE emitida por perito qualificado.',
        'A segurança estrutural do imóvel reabilitado deve cumprir as exigências regulamentares aplicadas a edifícios novos, salvo exceções tecnicamente fundamentadas em edifícios classificados.',
        'O município emite o certificado após vistoria final, comparando o estado anterior (certificado pelo relatório de estado de conservação) com o resultado da intervenção.',
      ],
    },
    {
      type: 'heading2',
      content: 'Que documentos recolher para confirmar e documentar o enquadramento em ARU?',
    },
    {
      type: 'paragraph',
      content:
        'A confirmação informal via portal SIG serve para uma primeira triagem. Para efeitos de due diligence antes de uma aquisição ou de pedido de benefícios fiscais, o conjunto documental necessário é mais robusto.',
    },
    {
      type: 'list',
      content: [
        'Certidão urbanística ou declaração municipal confirmando a inserção do imóvel em ARU (atualizada, com data de emissão inferior a 6 meses).',
        'Cópia da deliberação de delimitação da ARU publicada em Diário da República, com o mapa de perímetro georreferenciado.',
        'Caderneta predial urbana atualizada, para confirmar a identificação matricial correta do imóvel.',
        'Registo predial atualizado (certidão de teor permanente), confirmando que o imóvel não está onerado com servidões ou ónus que condicionem a reabilitação.',
        'Relatório do estado de conservação do imóvel, emitido por técnico habilitado, para fundamentar o pedido de benefícios fiscais junto da Autoridade Tributária e Aduaneira (AT).',
      ],
    },
    {
      type: 'heading2',
      content: 'Existem diferenças relevantes entre Lisboa e Porto na delimitação de ARU?',
    },
    {
      type: 'paragraph',
      content:
        'Sim, e as diferenças são materialmente relevantes para o investidor. Lisboa tem uma estrutura de ARU historicamente mais fragmentada, com delimitações por unidades de intervenção específicas, algumas geridas pela GEBALIS ou pela EMEL no quadro de operações municipais. O Porto, através da Porto Vivo, SRU, tem uma ARU central mais ampla e homogénea, cobrindo as 5 freguesias históricas do centro, o que facilita o enquadramento.',
    },
    {
      type: 'paragraph',
      content:
        'Em Cascais, a delimitação de ARU inclui os núcleos históricos de Cascais vila e Estoril, mas a cobertura é mais restrita do que nos municípios do Porto e Lisboa. A verificação caso a caso é indispensável, particularmente para imóveis em Parede ou Carcavelos, onde o enquadramento não é uniforme.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos: como a HABTA pode ajudar',
    },
    {
      type: 'paragraph',
      content:
        'A verificação do enquadramento em ARU é a primeira etapa — mas a viabilidade de um investimento de reabilitação depende de cruzar esse enquadramento com o estado do imóvel, o orçamento de obra, o potencial de valorização e o modelo fiscal mais eficiente. A nossa equipa, descrita em /servicos, acompanha este processo desde a due diligence inicial até à obtenção do certificado de reabilitação urbana. Se está a analisar um imóvel concreto em Lisboa, Porto ou Cascais, pode contactar-nos diretamente ou consultar os projetos desenvolvidos em /portfolio.',
    },
    {
      type: 'callout',
      content:
        'Confirmar o enquadramento em ARU demora menos de 30 minutos com os portais certos. Não o fazer antes de uma promessa de compra pode custar vários meses de benefícios fiscais e dezenas de milhares de euros em IVA e impostos pagos a mais. A verificação é gratuita — o erro de a omitir não é.',
    },
  ],
  faq: [
    {
      q: 'Como sei se a minha rua está dentro de uma ARU em Lisboa?',
      a: 'Consulte o portal SIG Lisboa (sig.cm-lisboa.pt) ou habitar.lisboa.pt, introduzindo a morada. O sistema indica o enquadramento da parcela em ARU. Para confirmação formal, peça certidão urbanística à CML — tem custo inferior a 100 € e resposta em 10 a 20 dias úteis.',
    },
    {
      q: 'A inclusão numa ARU garante IVA a 6% em todas as obras?',
      a: 'Não automaticamente. A taxa reduzida de IVA aplica-se a empreitadas de reabilitação em imóveis com mais de 30 anos ou em ARU, mas exige que a intervenção seja qualificada como reabilitação e que o IVA seja faturado sobre a empreitada, não sobre materiais adquiridos separadamente.',
    },
    {
      q: 'Posso pedir isenção de IMT se comprar um imóvel em ARU para reabilitar?',
      a: 'Sim, mas a isenção deve ser reconhecida pelo município antes ou no momento da aquisição. Exige compromisso de início de obras dentro de 3 anos e posterior certificação da reabilitação qualificada. A Autoridade Tributária pode revogar o benefício se os prazos não forem cumpridos.',
    },
    {
      q: 'Durante quanto tempo dura a isenção de IMI para imóveis reabilitados em ARU?',
      a: 'O Estatuto dos Benefícios Fiscais prevê isenção de IMI por 3 anos após a conclusão da reabilitação, renovável por mais 5 anos se o imóvel atingir nível de desempenho energético A ou A+. A renovação é automática mediante apresentação do certificado energético à AT.',
    },
    {
      q: 'A Porto Vivo, SRU ainda existe e gere as ARU do Porto?',
      a: 'Sim. A Porto Vivo, SRU — Sociedade de Reabilitação Urbana da Baixa Portuense — é a entidade gestora das ARU do centro histórico do Porto. Disponibiliza informação sobre a delimitação e os programas de apoio em portovivosru.pt e em balcão presencial no Largo do Prior do Crato.',
    },
    {
      q: 'O que acontece se o imóvel ficar fora da ARU por revisão do perímetro?',
      a: 'Os benefícios fiscais já concedidos não são revogados retroativamente. Obras iniciadas ou licenciadas durante o período em que o imóvel estava em ARU mantêm os benefícios. Novas intervenções após saída do perímetro perdem o enquadramento, salvo outras disposições legais aplicáveis.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. Os benefícios fiscais associados às ARU dependem do cumprimento de requisitos legais específicos, da deliberação municipal vigente e da legislação aplicável na data da operação. Consulte profissionais qualificados — advogado, fiscalista e técnico habilitado — antes de tomar decisões concretas de aquisição ou reabilitação.',
};
