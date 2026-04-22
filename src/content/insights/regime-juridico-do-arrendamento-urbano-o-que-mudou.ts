import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Regulamentação'];

export const article: InsightArticle = {
  id: 'regime-juridico-do-arrendamento-urbano-o-que-mudou',
  title: 'Regime jurídico do arrendamento urbano em Portugal: o que mudou em 2026',
  description:
    'Das alterações da Lei Mais Habitação ao NRAU: o que mudou no arrendamento urbano e como cada alteração afeta rendimentos, prazos e estratégia dos investidores imobiliários em Portugal.',
  category: 'Regulamentação',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Jurídica',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'O regime jurídico do arrendamento urbano em Portugal foi alterado substancialmente pela Lei Mais Habitação e revisões subsequentes — estas são as implicações práticas para investidores.',
  image: 'https://images.unsplash.com/photo-1721244653652-268631ec049a${UNSPLASH_PARAMS}',
  tags: [
    'regime jurídico arrendamento urbano Portugal',
    'NRAU alterações 2026',
    'Lei Mais Habitação investidores',
    'arrendamento habitacional Lisboa',
    'rentabilidade arrendamento Portugal',
  ],
  tldr: [
    'A Lei n.º 56/2023 (Mais Habitação) introduziu limites à atualização de rendas, novos prazos mínimos e restrições ao Alojamento Local — afetando diretamente a rentabilidade de carteiras em Lisboa e Porto.',
    'Os contratos celebrados após outubro de 2023 estão sujeitos a renovação automática em condições mais restritivas, com prazo mínimo de 1 ano para habitação permanente.',
    'O coeficiente de atualização de rendas fixado pelo INE para 2026 é de 2,16% — aplicável a contratos com mais de 1 ano na data-aniversário.',
    'Senhorios com imóveis devolutos há mais de 2 anos em municípios de pressão urbanística podem ser abrangidos por regimes de arrendamento coercivo — mecanismo introduzido pela Mais Habitação.',
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
        'O arrendamento urbano em Portugal atravessou a maior revisão legislativa da última década. Entre o Novo Regime do Arrendamento Urbano (NRAU), consagrado na Lei n.º 6/2006, e as alterações introduzidas pela Lei n.º 56/2023 — conhecida como Mais Habitação — o quadro legal mudou em dimensões que afetam diretamente o retorno de qualquer carteira de arrendamento. Este artigo analisa o que mudou, o que se mantém e o que os investidores precisam de saber antes de alugar ou adquirir imóveis para rendimento em Portugal.',
    },
    {
      type: 'heading2',
      content: 'O que é o NRAU e qual é o seu estado atual?',
    },
    {
      type: 'paragraph',
      content:
        'O Novo Regime do Arrendamento Urbano, aprovado pela Lei n.º 6/2006, constitui o quadro base do arrendamento habitacional e não habitacional em Portugal. Desde então, foi alterado por múltiplos diplomas — em 2012, 2017, 2019 e, mais significativamente, em 2023. O texto vigente em 2026 incorpora todas estas camadas e só pode ser lido à luz das revisões acumuladas.',
    },
    {
      type: 'paragraph',
      content:
        'Para contratos de arrendamento habitacional celebrados após 13 de fevereiro de 2006, o NRAU prevê prazo mínimo de 1 ano, renovação automática e mecanismo de atualização de rendas vinculado ao coeficiente publicado anualmente pelo Instituto Nacional de Estatística (INE). Contratos anteriores a esta data seguem regimes transitórios específicos com proteções reforçadas para arrendatários.',
    },
    {
      type: 'heading2',
      content: 'O que mudou com a Lei Mais Habitação (Lei n.º 56/2023)?',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023, publicada em outubro de 2023, alterou o NRAU, o Código do IMI, o regime do Alojamento Local e vários outros diplomas conexos. As suas alterações mais impactantes para investidores distribuem-se por quatro eixos: limites à atualização de rendas, novos prazos contratuais, restrições ao Alojamento Local e mecanismo de arrendamento coercivo.',
    },
    {
      type: 'list',
      content: [
        'Limite extraordinário à atualização de rendas: a subida máxima ficou temporariamente condicionada a 2% para contratos com renda base inferior a 1.750 €/mês, afetando a maioria dos contratos habitacionais em vigor.',
        'Prazo mínimo para contratos de habitação permanente: 1 ano obrigatório, com renovação automática por igual período salvo oposição fundamentada do senhorio.',
        'Oposição à renovação pelo senhorio: passou a exigir comunicação com 240 dias de antecedência (antes eram 120 dias em muitos casos), reduzindo a flexibilidade de saída.',
        'Alojamento Local em frações de condomínio: possibilidade de os condóminos, em assembleia, votarem a suspensão de novas licenças — com maioria de dois terços.',
        'Arrendamento coercivo: municípios de pressão urbanística (incluindo Lisboa, Porto e 25 outros) podem acionar o mecanismo para imóveis habitacionais devolutos há mais de 2 anos.',
      ],
    },
    {
      type: 'heading2',
      content: 'Qual é o coeficiente de atualização de rendas para 2026?',
    },
    {
      type: 'paragraph',
      content:
        'O INE publica anualmente o coeficiente de atualização de rendas com base na variação do Índice de Preços no Consumidor (IPC) sem habitação. Para 2026, o coeficiente fixado é de 2,16%, aplicável a contratos com 1 ou mais anos de vigência na respetiva data-aniversário. A atualização não é automática — o senhorio deve comunicar ao arrendatário, por escrito, com antecedência mínima de 30 dias.',
    },
    {
      type: 'table',
      content: {
        headers: ['Ano', 'Coeficiente INE', 'Observações'],
        rows: [
          ['2022', '1,02%', 'Pré-Mais Habitação; mercado em aceleração pós-pandemia'],
          ['2023', '6,94%', 'Pico inflacionário; regime de teto de 2% imposto por diploma transitório'],
          ['2024', '6,94% (teto 2%)', 'Teto de 2% mantido para a maioria dos contratos por medida de emergência'],
          ['2025', '3,29%', 'Coeficiente pleno aplicável; pressão sobre rendas antigas com valor base baixo'],
          ['2026', '2,16%', 'Abrandamento; contratos celebrados após 2023 têm renda de mercado como base'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'Como calcular a nova renda após atualização',
    },
    {
      type: 'paragraph',
      content:
        'A fórmula é simples: Renda nova = Renda atual × (1 + coeficiente). Para uma renda de 900 €/mês, a atualização de 2,16% resulta numa renda de 919,44 €/mês — uma diferença de 19,44 € mensais ou 233 € anuais. Em carteiras com dezenas de frações, o impacto agrega de forma significativa.',
    },
    {
      type: 'heading2',
      content: 'O mecanismo de arrendamento coercivo afeta investidores privados?',
    },
    {
      type: 'paragraph',
      content:
        'Sim, potencialmente. O arrendamento coercivo, previsto na Lei n.º 56/2023 e regulamentado em portaria subsequente, permite às câmaras municipais dos 27 municípios de pressão urbanística — entre os quais Lisboa, Porto, Cascais, Sintra, Loures e Braga — celebrar contratos de arrendamento em nome de proprietários de imóveis habitacionais devolutos há mais de 2 anos, sem necessidade de consentimento prévio, mediante uma renda fixada administrativamente.',
    },
    {
      type: 'paragraph',
      content:
        'O regime tem sido pouco aplicado na prática, mas a sua existência altera o perfil de risco de imóveis mantidos desocupados por razões especulativas ou de reabilitação demorada. Para evitar a qualificação como devoluto, o proprietário deve demonstrar que o imóvel está em obras devidamente licenciadas, em comercialização ativa ou a aguardar decisão de licenciamento junto do município.',
    },
    {
      type: 'heading2',
      content: 'O que mudou nos contratos de arrendamento não habitacional?',
    },
    {
      type: 'paragraph',
      content:
        'Os contratos não habitacionais — lojas, escritórios, armazéns — conservam maior liberdade negocial. O prazo mínimo legal é de 1 ano, mas as partes podem acordar prazos superiores ou cláusulas de renovação distintas. A atualização de renda segue o coeficiente INE salvo acordo diferente. A Mais Habitação não introduziu tetos específicos para o segmento não habitacional.',
    },
    {
      type: 'list',
      content: [
        'Prazo mínimo: 1 ano, salvo acordo em contrário para atividades sazonais devidamente justificadas.',
        'Oposição à renovação: comunicação com 240 dias de antecedência para contratos com 3 ou mais anos de duração.',
        'Transmissão do arrendamento em caso de trespasse: mantém-se a obrigatoriedade de comunicação ao senhorio no prazo de 15 dias.',
        'Direito de preferência do arrendatário: aplica-se em caso de venda do locado, com prazo de exercício de 30 dias após notificação.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais são as implicações fiscais para senhorios em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'As rendas auferidas por pessoas singulares tributam como categoria F de IRS, à taxa especial de 28%, salvo opção pelo englobamento. A Mais Habitação criou incentivos à redução voluntária de rendas e à celebração de contratos de arrendamento acessível: a taxa de IRS pode descer para 25%, 15% ou até 0% consoante o desconto aplicado face às rendas máximas do Programa de Arrendamento Acessível (PAA).',
    },
    {
      type: 'quote',
      content:
        'Na nossa análise de carteiras, um contrato de arrendamento acessível com desconto de 20% face ao PAA permite reduzir a taxa de IRS sobre rendas de 28% para 15% — o que, numa renda de 1.200 €/mês, equivale a uma poupança fiscal anual de cerca de 1.872 €, parcialmente compensando o desconto concedido.',
      source: {
        name: 'Equipa Jurídica HABTA',
        role: 'Análise de otimização fiscal de carteiras, 2025–2026',
      },
    },
    {
      type: 'heading2',
      content: 'O que mudou no Alojamento Local e como afeta a estratégia de investimento?',
    },
    {
      type: 'paragraph',
      content:
        'A Lei n.º 56/2023 suspendeu a emissão de novas licenças de Alojamento Local (AL) em frações autónomas em zonas de contenção — designadamente em grande parte de Lisboa (incluindo freguesias como Misericórdia, Santa Maria Maior e Santo António) e em várias zonas do Porto. Licenças existentes mantêm-se, mas a renovação passou a ser quinquenal e sujeita a avaliação camarária.',
    },
    {
      type: 'paragraph',
      content:
        'Para novos projetos de reabilitação em Lisboa ou Porto, a estratégia de exit via AL deixou de ser viável em muitas localizações. Os investidores que adquiriram imóveis com base em projeções de rendimento de AL devem rever os cenários de retorno com base em arrendamento habitacional de médio-longo prazo ou uso próprio.',
    },
    {
      type: 'list',
      content: [
        'Verificar o zonamento de contenção/saturação do município antes de qualquer aquisição com objetivo de AL.',
        'Considerar o arrendamento habitacional de 3 a 5 anos como cenário base para projetos em Lisboa e Porto.',
        'Avaliar o impacto da tributação autónoma de 35% sobre rendimentos de AL em sede de IRS ou IRC.',
        'Confirmar se o regulamento de condomínio — e a assembleia de condóminos — admite ou limita o uso de AL na fração.',
      ],
    },
    {
      type: 'heading2',
      content: 'Próximos passos para investidores com carteiras de arrendamento',
    },
    {
      type: 'paragraph',
      content:
        'O quadro legal do arrendamento urbano em Portugal está mais complexo do que em qualquer ponto anterior desta década. Investidores com carteiras existentes devem auditar cada contrato quanto a prazo, coeficiente de atualização aplicável e enquadramento fiscal. Para novas aquisições, a estratégia de arrendamento deve ser definida antes da escritura — não depois.',
    },
    {
      type: 'paragraph',
      content:
        'A equipa da HABTA, descrita em detalhe em <a href="/servicos">serviços</a>, realiza análises de viabilidade que integram o enquadramento legal vigente com projeções de rendimento ajustadas ao coeficiente de atualização e aos incentivos fiscais disponíveis. Pode também consultar o nosso <a href="/portfolio">portefólio</a> de projetos em curso ou ver como abordamos o tema em <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">reabilitação urbana em Portugal: guia 2026</a> e em <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">como investir em imóveis em Portugal</a>. Para análises regulatórias futuras, subscreva a newsletter.',
    },
    {
      type: 'callout',
      content:
        'A legislação do arrendamento mudou — mas a lógica do bom investimento mantém-se: adquirir bem, enquadrar corretamente e gerir com disciplina. Quem integrar as alterações do NRAU e da Lei Mais Habitação na sua análise encontrará oportunidades que quem as ignora transformará em litígios.',
    },
  ],
  faq: [
    {
      q: 'Qual é o prazo mínimo de um contrato de arrendamento habitacional em 2026?',
      a: 'O prazo mínimo legal é de 1 ano para habitação permanente, nos termos do NRAU com as alterações da Lei n.º 56/2023. O contrato renova-se automaticamente por igual período salvo oposição do senhorio comunicada com 240 dias de antecedência.',
    },
    {
      q: 'O coeficiente de atualização de rendas de 2,16% é obrigatório ou opcional?',
      a: 'É o máximo legal aplicável em 2026. O senhorio pode aplicar uma atualização inferior ou não atualizar. A não comunicação nos 30 dias anteriores à data-aniversário implica a perda do direito à atualização nesse ano.',
    },
    {
      q: 'O que é o arrendamento coercivo e a quem se aplica?',
      a: 'É um mecanismo da Lei n.º 56/2023 que permite às câmaras dos 27 municípios de pressão urbanística arrendar imóveis habitacionais devolutos há mais de 2 anos sem consentimento do proprietário. Imóveis em obras licenciadas estão excluídos.',
    },
    {
      q: 'Posso ainda licenciar Alojamento Local numa fração em Lisboa?',
      a: 'Depende da freguesia. Em zonas de contenção como Misericórdia, Santa Maria Maior e Santo António, a emissão de novas licenças está suspensa desde outubro de 2023. Fora dessas zonas, o licenciamento mantém-se possível, mas sujeito a condicionantes camarárias.',
    },
    {
      q: 'Que taxa de IRS se aplica às rendas recebidas por um particular em 2026?',
      a: 'A taxa especial é de 28%, tributando como categoria F de IRS. Com contratos de arrendamento acessível com desconto ≥20% face ao Programa de Arrendamento Acessível, a taxa pode ser reduzida para 15% ou valores inferiores.',
    },
    {
      q: 'O senhorio pode opor-se à renovação do contrato para vender o imóvel?',
      a: 'Pode, mas com restrições. Nos termos do NRAU atualizado, a oposição à renovação para uso próprio ou de descendentes exige comunicação com 240 dias de antecedência e o arrendatário tem direito a preferência em caso de venda posterior no prazo de 3 anos.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento jurídico, fiscal ou de investimento. A legislação do arrendamento urbano em Portugal é objeto de alterações frequentes; os dados e referências legais indicados refletem o quadro vigente à data de publicação e podem ter sofrido atualizações posteriores. Consulte um advogado, solicitador ou consultor fiscal qualificado antes de tomar decisões concretas sobre contratos de arrendamento ou aquisição de imóveis para rendimento.',
};
