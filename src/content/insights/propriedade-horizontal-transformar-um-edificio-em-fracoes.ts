import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'propriedade-horizontal-transformar-um-edificio-em-fracoes',
  title: 'Propriedade horizontal: transformar um edifício em frações em Portugal',
  description:
    'Como constituir propriedade horizontal em Portugal: requisitos legais, escritura, registo predial, custos e prazos — guia prático para proprietários e investidores.',
  category: 'Regulamentação',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Jurídica',
  date: '2026-04-26',
  updated_at: '2026-04-26',
  excerpt:
    'Constituir propriedade horizontal transforma um edifício inteiro em frações autónomas independentes — um passo jurídico indispensável para vender, arrendar ou financiar unidades separadas em Portugal.',
  image: 'https://images.unsplash.com/photo-1712696779652-dfca8766c5f8${UNSPLASH_PARAMS}',
  tags: [
    'propriedade horizontal Portugal 2026',
    'constituição frações autónomas Lisboa',
    'escritura propriedade horizontal custos',
    'registo predial frações edificio',
    'reabilitação urbana licenciamento frações',
  ],
  tldr: [
    'A propriedade horizontal divide um edifício em frações autónomas com matrícula predial independente, permitindo vender, hipotecar ou arrendar cada unidade separadamente.',
    'O processo exige licença de utilização por fração, escritura pública de constituição e registo na Conservatória — normalmente entre 3 a 6 meses em Lisboa.',
    'A permilagem de cada fração define a quota de encargos comuns; erros no cálculo têm implicações fiscais e condominiais duradouras.',
    'Em Áreas de Reabilitação Urbana, a constituição de propriedade horizontal após reabilitação qualificada pode beneficiar de isenção de IMT e IMI temporária, nos termos do Estatuto dos Benefícios Fiscais.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-26',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Transformar um edifício inteiro em frações autónomas é uma das operações jurídicas com maior impacto no valor de um imóvel em Portugal. Feita corretamente, desbloqueia vendas parceladas, financiamento fração a fração e arrendamentos independentes. Feita com erros, cria litígios condominiais e bloqueios no registo que podem durar anos.',
    },
    {
      type: 'paragraph',
      content:
        'A propriedade horizontal é o regime jurídico que permite que diferentes partes de um edifício — frações autónomas — pertençam a proprietários distintos, mantendo partes comuns sob gestão coletiva. Em Portugal, o regime está previsto nos artigos 1414.º a 1438.º-A do Código Civil e é complementado pelo Regime Jurídico da Urbanização e Edificação (RJUE, aprovado pelo DL n.º 555/99, com sucessivas alterações).',
    },
    {
      type: 'heading2',
      content: 'O que é uma fração autónoma e o que a distingue de uma parte comum?',
    },
    {
      type: 'paragraph',
      content:
        'Uma fração autónoma é uma unidade com saída independente para uma parte comum do edifício ou para a via pública, suscetível de utilização independente e com descrição própria no registo predial. Partes comuns — escadas, cobertura, fachadas, instalações gerais — pertencem a todos os condóminos na proporção da respetiva permilagem.',
    },
    {
      type: 'list',
      content: [
        'Fração autónoma: apartamento, loja, garagem box, arrecadação com acesso independente.',
        'Parte comum obrigatória: estrutura do edifício, cobertura, fachadas, caixas de escadas, instalações de uso coletivo.',
        'Parte comum por afetação: jardim, sala de condomínio, terraço acessível a todos os condóminos.',
        'Partes comuns de uso exclusivo: varandas, terraços de cobertura afetos a uma fração específica.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais são os requisitos legais para constituir propriedade horizontal?',
    },
    {
      type: 'paragraph',
      content:
        'Para que um edifício possa ser objeto de propriedade horizontal, o artigo 1415.º do Código Civil exige que as frações sejam distintas e isoladas entre si, com saída própria para parte comum ou para a via pública. Na prática, isso traduz-se em requisitos urbanísticos e técnicos que a câmara municipal verifica antes de emitir as licenças de utilização individuais.',
    },
    {
      type: 'list',
      content: [
        'Cada fração deve ter acesso autónomo — porta privativa para corredor comum ou para o exterior.',
        'O edifício deve dispor de licença de construção ou título equivalente regularizador.',
        'Cada fração requer licença de utilização individual, emitida pela câmara municipal competente.',
        'O título constitutivo deve identificar cada fração por letra (A, B, C…), valor relativo em permilagem e fim a que se destina.',
        'O regulamento do condomínio pode ser incluído no título constitutivo ou elaborado separadamente.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como se elabora o título constitutivo de propriedade horizontal?',
    },
    {
      type: 'paragraph',
      content:
        'O título constitutivo é o documento que juridicamente cria as frações. Pode ser estabelecido por escritura pública, por testamento ou, nos casos previstos na lei, por decisão judicial. Na esmagadora maioria das operações imobiliárias, opta-se pela escritura pública lavrada em cartório notarial.',
    },
    {
      type: 'paragraph',
      content:
        'O título deve conter a descrição de cada fração (localização, área bruta privativa, área bruta dependente, fim), o valor relativo em permilagem em relação ao edifício total e, opcionalmente, o regulamento do condomínio. A permilagem não é arbitrária: deve refletir o valor relativo de cada fração tendo em conta a área, a localização no edifício e o uso previsto.',
    },
    {
      type: 'table',
      content: {
        headers: ['Elemento do título constitutivo', 'Obrigatório?', 'Observações'],
        rows: [
          ['Identificação do prédio (artigo matricial, descrição predial)', 'Sim', 'Deve estar atualizado no registo predial antes da escritura'],
          ['Descrição de cada fração por letra e localização', 'Sim', 'Ex.: Fração A — 1.º andar esquerdo, habitação, 87 m² de área bruta privativa'],
          ['Valor relativo em permilagem', 'Sim', 'Base de repartição de encargos comuns e votos em assembleia'],
          ['Fim a que se destina cada fração', 'Sim', 'Habitação, comércio, serviços, garagem — com impacto fiscal e de uso'],
          ['Regulamento do condomínio', 'Não (recomendado)', 'Se ausente, aplicam-se supletivamente as regras do Código Civil'],
          ['Identificação de partes comuns de uso exclusivo', 'Quando aplicável', 'Ex.: terraço de cobertura afeto à fração C'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'Como calcular a permilagem de cada fração',
    },
    {
      type: 'paragraph',
      content:
        'A permilagem é calculada com base no valor relativo de cada fração em relação ao edifício, ponderando a área bruta privativa, a área bruta dependente (arrecadações, varandas), o andar, a orientação e o uso. Uma fração de comércio no rés-do-chão pode ter permilagem diferente de um apartamento com a mesma área no terceiro andar, se o valor de mercado relativo assim o justificar. O cálculo deve ser validado por técnico habilitado e suportado por relatório fundamentado.',
    },
    {
      type: 'heading2',
      content: 'Qual é o processo passo a passo para constituir propriedade horizontal?',
    },
    {
      type: 'paragraph',
      content:
        'O processo divide-se em quatro fases principais: preparação documental, obtenção de licenças de utilização por fração, escritura notarial e registo predial. Em Lisboa, o prazo total situa-se tipicamente entre 3 e 6 meses quando toda a documentação está em ordem.',
    },
    {
      type: 'list',
      content: [
        '1.ª fase — Preparação: reunir o processo camarário do edifício, certificado energético por fração (SCE), planta de cada fração com áreas calculadas por técnico habilitado, caderneta predial urbana atualizada.',
        '2.ª fase — Licenças de utilização: requerer à câmara municipal a emissão de licença de utilização individual para cada fração; em Lisboa, o pedido é feito no SIMPLIS (portal da CML); prazo médio de 30 a 90 dias úteis.',
        '3.ª fase — Escritura pública: lavrada em cartório notarial, com base no título constitutivo preparado previamente; exige certidão do registo predial atualizada e comprovativo de pagamento de IMI.',
        '4.ª fase — Registo predial: após escritura, submissão do registo na Conservatória competente (ou online via predial online); cria uma descrição predial autónoma para cada fração no registo predial.',
        '5.ª fase — Atualização matricial: comunicação à Autoridade Tributária e Aduaneira para abertura de artigo matricial independente para cada fração, com avaliação patrimonial individual.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais são os custos de constituir propriedade horizontal em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'Os custos variam com o número de frações, o valor patrimonial tributário do edifício e os honorários dos profissionais envolvidos. A tabela seguinte indica os encargos típicos para um edifício com 4 a 8 frações em Lisboa ou Porto.',
    },
    {
      type: 'table',
      content: {
        headers: ['Encargo', 'Valor indicativo', 'Quem cobra'],
        rows: [
          ['Certificados energéticos (por fração)', '150–350 € cada', 'Técnico perito qualificado SCE'],
          ['Honorários de arquiteto/engenheiro (plantas e cálculo de permilagem)', '500–1500 €', 'Técnico habilitado (RJUE)'],
          ['Escritura pública de constituição', '300–700 €', 'Cartório notarial (tabela livre)'],
          ['Registo predial (por fração)', '225–300 € aprox.', 'Conservatória do Registo Predial'],
          ['IMT (se houver transmissão simultânea)', 'Variável por fração', 'Autoridade Tributária e Aduaneira'],
          ['Imposto de Selo sobre escritura', '0,8% do valor do ato', 'Autoridade Tributária e Aduaneira'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Para um edifício com 6 frações em Lisboa, o custo total do processo de constituição de propriedade horizontal — excluindo eventuais transmissões — situa-se habitualmente entre 5.000 e 10.000 €, incluindo honorários técnicos, notariado e registo. Este valor não inclui obras nem licenciamento de construção prévio.',
    },
    {
      type: 'heading2',
      content: 'Que benefícios fiscais existem após a constituição em Área de Reabilitação Urbana?',
    },
    {
      type: 'paragraph',
      content:
        'Quando a propriedade horizontal resulta de uma operação de reabilitação urbana qualificada em Área de Reabilitação Urbana (ARU), os benefícios previstos no Estatuto dos Benefícios Fiscais (EBF) podem incluir isenção de IMT na primeira transmissão de cada fração e isenção de IMI por período de 3 a 5 anos, renovável. Para aceder a estes benefícios, a intervenção deve cumprir os requisitos de reabilitação qualificada definidos no regime jurídico aplicável.',
    },
    {
      type: 'list',
      content: [
        'Isenção de IMT na primeira transmissão onerosa de cada fração reabilitada em ARU (artigo 45.º do EBF).',
        'Isenção de IMI por 3 anos, prorrogável por mais 5, para prédios urbanos reabilitados em ARU (artigo 45.º do EBF).',
        'IVA à taxa de 6% nas empreitadas de reabilitação de imóveis com mais de 30 anos ou localizados em ARU (Lista I anexa ao CIVA).',
        'Dedução em IRS de 30% das despesas suportadas com reabilitação, até €500 por ano (artigo 71.º do EBF), aplicável a imóveis arrendados.',
      ],
    },
    {
      type: 'quote',
      content:
        'Nos projetos que acompanhámos em Alfama e na Misericórdia entre 2023 e 2025, a constituição de propriedade horizontal após reabilitação qualificada permitiu, em média, uma valorização de 18–24% face ao valor do edifício unitário — resultado direto da liquidez que a parcelização confere ao ativo.',
      source: {
        name: 'Equipa Jurídica HABTA',
        role: 'Análise de projetos 2023–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Que erros comprometem o processo e como evitá-los?',
    },
    {
      type: 'paragraph',
      content:
        'Os erros mais frequentes ocorrem na fase de preparação documental e no cálculo da permilagem. Um título constitutivo mal redigido é difícil e oneroso de corrigir depois do registo, exigindo escritura de retificação com nova intervenção notarial e novos emolumentos de registo.',
    },
    {
      type: 'list',
      content: [
        'Permilagem calculada sem suporte técnico fundamentado — gera contestações em assembleias de condóminos.',
        'Frações com áreas que não coincidem com as da licença de utilização — bloqueia o registo predial.',
        'Certificados energéticos emitidos antes das obras estarem concluídas — inválidos para efeitos de escritura.',
        'Omissão de partes comuns de uso exclusivo no título — cria litígios sobre varandas e terraços.',
        'Constituição de propriedade horizontal antes da licença de utilização estar emitida — escritura tecnicamente possível mas arriscada se as licenças não forem concedidas.',
        'Não comunicar a constituição à Autoridade Tributária — mantém a tributação como prédio unitário e atrasa benefícios fiscais por fração.',
      ],
    },
    {
      type: 'callout',
      content:
        'Na HABTA, a constituição de propriedade horizontal é tratada como uma operação jurídica autónoma do processo de reabilitação — com advogado especializado em direito imobiliário, técnico habilitado para cálculo de permilagem e coordenação direta com o cartório e a conservatória. A sequência certa poupa meses de bloqueios administrativos.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se está a planear transformar um edifício em frações autónomas em Lisboa, Porto ou Cascais, a nossa equipa jurídica, descrita em <a href="/servicos">serviços</a>, pode acompanhar o processo desde a due diligence documental até ao registo predial das frações. Consulte também o nosso <a href="/portfolio">portefólio</a> para exemplos de operações concluídas. Para o contexto legal mais amplo, veja o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a> e o artigo sobre <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">cinco pilares para avaliar um projeto de reabilitação</a>. Subscreva a newsletter para atualizações regulatórias e análises de mercado.',
    },
  ],
  faq: [
    {
      q: 'É possível constituir propriedade horizontal num edifício sem obras?',
      a: 'Sim, desde que as frações já sejam física e juridicamente distintas e cada uma disponha de licença de utilização válida. O processo é documental, mas o edifício deve cumprir os requisitos técnicos de independência entre frações exigidos pelo Código Civil e pelo RJUE.',
    },
    {
      q: 'Qual é a diferença entre propriedade horizontal e propriedade em comum?',
      a: 'Na propriedade em comum (compropriedade), vários titulares detêm quotas indivisas sobre o mesmo bem. Na propriedade horizontal, cada condómino tem propriedade exclusiva sobre a sua fração e propriedade coletiva nas partes comuns — as frações têm matrícula predial independente.',
    },
    {
      q: 'O regulamento do condomínio é obrigatório no título constitutivo?',
      a: 'Não é legalmente obrigatório incluí-lo no título constitutivo. Se omitido, aplicam-se supletivamente as regras do Código Civil. Porém, é fortemente recomendado, sobretudo em edifícios mistos (habitação e comércio), para regular horários, uso de partes comuns e repartição de despesas específicas.',
    },
    {
      q: 'A câmara municipal tem de aprovar a constituição de propriedade horizontal?',
      a: 'A câmara não aprova o título constitutivo diretamente, mas emite as licenças de utilização por fração, sem as quais a escritura fica fragilizada. Em edifícios anteriores a 1951, pode ser possível dispensar licença de utilização mediante declaração camarária, mas a situação deve ser verificada caso a caso.',
    },
    {
      q: 'Pode alterar-se a permilagem depois de constituída a propriedade horizontal?',
      a: 'Sim, mas requer escritura de modificação do título constitutivo com acordo unânime de todos os condóminos, nova submissão a registo predial e atualização matricial. É um processo oneroso — razão pela qual o cálculo inicial deve ser feito com rigor técnico e jurídico.',
    },
    {
      q: 'Quais são os impostos devidos na constituição de propriedade horizontal sem transmissão?',
      a: 'Se não houver transmissão de propriedade, não há IMT. Incide Imposto de Selo sobre o valor do ato à taxa de 0,8%. Há ainda emolumentos notariais e de registo predial por fração. Após a constituição, cada fração passa a ter avaliação patrimonial e IMI individuais.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não substitui aconselhamento fiscal, jurídico ou técnico personalizado. Os valores, prazos e referências legais indicados são orientativos e podem variar consoante o município, o imóvel e as alterações legislativas posteriores à data de publicação. Consulte advogado, notário e técnico habilitado antes de iniciar o processo de constituição de propriedade horizontal.',
};
