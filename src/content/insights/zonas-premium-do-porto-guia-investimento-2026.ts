import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'zonas-premium-do-porto-guia-investimento-2026',
  title: 'Zonas premium do Porto: guia de investimento 2026',
  description:
    'Um guia prático sobre as zonas premium do Porto para investimento imobiliário em 2026 — Baixa, Ribeira, Cedofeita, Boavista, Foz do Douro, Bonfim, Gaia. Preço por m², perfis de procura, tipologias e perspetivas.',
  category: 'Mercado',
  readTime: '18 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Análise de Mercado',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'Baixa, Ribeira, Cedofeita, Boavista, Foz do Douro, Bonfim e a margem sul do Douro — um mapa operacional das zonas premium do Porto em 2026, com preços por m², perfis de procura e perspetivas.',
  image: 'https://images.unsplash.com/photo-1762068305260-d6298b6822ea?w=1600&q=80&auto=format&fit=crop',
  tags: [
    'zonas premium Porto 2026',
    'melhores bairros Porto investimento',
    'preço por m² Porto',
    'Foz do Douro investimento',
    'Boavista Porto',
    'Cedofeita imóveis',
    'Ribeira Porto',
    'Bonfim Porto',
    'Vila Nova de Gaia investimento',
    'Baixa Porto investimento',
  ],
  tldr: [
    'O Porto tem três perímetros premium distintos: eixo histórico UNESCO (Baixa, Ribeira, Miragaia), eixo moderno residencial (Boavista, Foz do Douro) e eixo lifestyle (Cedofeita, Carlos Alberto).',
    'Preços por m² úteis em 2026 oscilam entre 3.500 e 8.500 € nas zonas prime; picos até 10.000-11.000 € em produto muito seletivo na Foz e Avenida da Boavista.',
    'O Porto continua a oferecer 25-35 por cento de desconto face a Lisboa em zonas equivalentes — a vantagem está a comprimir-se mas ainda é material.',
    'Gaia (Vila Nova) tem tido tração forte como mercado alternativo ao Porto centro, particularmente no eixo ribeirinho e Vilar do Paraíso.',
    'Bonfim, Campanhã e partes de Cedofeita periférica são as zonas emergentes com maior potencial — e também maior risco.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Porto e Vila Nova de Gaia (12 freguesias analisadas)',
    lastReviewed: '2026-04-22',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'O Porto ganhou maturidade como mercado de investimento imobiliário na última década, mas continua subestimado por quem apenas conhece Lisboa. Este guia organiza em 2026 as zonas que funcionam, os preços realistas e as oportunidades que ainda existem fora do radar consensual.',
    },
    {
      type: 'paragraph',
      content:
        'Falar de "Porto" como mercado único é um erro. Na prática, há três Portos para o investidor imobiliário em 2026. O Porto histórico UNESCO — Baixa, Ribeira, Miragaia, São Bento — é o mais internacional, com lógica de preços próxima (embora inferior) a zonas equivalentes de Lisboa. O Porto residencial premium — Boavista, Foz do Douro, Massarelos — tem dinâmica residencial clássica, com procura nacional e expatriada de alto rendimento. O Porto lifestyle — Cedofeita, Carlos Alberto, Bonfim — é o equivalente do Bairro Alto/Príncipe Real em escala mais compacta e com ritmo de transformação distinto.',
    },
    {
      type: 'paragraph',
      content:
        'Este guia assenta em mais de cem projetos analisados no Grande Porto nos últimos anos, cruzando dados públicos (Confidencial Imobiliário, INE), observação direta em terreno e transações acompanhadas. É um mapa operacional — útil para decidir, não para sonhar. Complementa o nosso <a href="/blog/zonas-premium-de-lisboa-guia-investimento-2026">guia equivalente de Lisboa</a> e articula-se com o <a href="/blog/mercado-imobiliario-portugal-2026-analise-completa">guia do mercado imobiliário português em 2026</a>.',
    },
    {
      type: 'heading2',
      content: 'O Porto em 2026 — contexto e tese',
    },
    {
      type: 'paragraph',
      content:
        'Três dinâmicas estruturais sustentam o investimento imobiliário no Porto em 2026. Primeiro, um ciclo de reabilitação urbana intenso na última década deixou stock qualificado mas ainda não esgotou o potencial: há edifícios por intervencionar em zonas centrais, particularmente em Cedofeita periférica, Bonfim e eixo Campanhã. Segundo, a procura internacional diversificou — menos peso do Reino Unido e Irlanda, mais peso de Brasil, Espanha, França e, crescentemente, Estados Unidos. Terceiro, o Porto mantém uma vantagem estrutural de preço face a Lisboa em zonas comparáveis — ordem de 25 a 35 por cento — que continua a atrair capital que considera Lisboa sobrepreço.',
    },
    {
      type: 'paragraph',
      content:
        'A tese crítica: a vantagem de preço sobre Lisboa está a comprimir-se, mas em 2026 ainda não desapareceu. Para quem procura melhor relação preço/qualidade em zona urbana de referência, o Porto continua a apresentar argumentos fortes.',
    },
    {
      type: 'heading2',
      content: 'Panorama de preços por zona em 2026',
    },
    {
      type: 'paragraph',
      content:
        'Medianas indicativas para apartamentos em bom estado, área útil, produto representativo. Picos e fundos afastam-se destes valores em função de vista, andar, estado e outros fatores de microlocalização.',
    },
    {
      type: 'table',
      content: {
        headers: ['Zona', 'Preço/m² útil típico (2026)', 'Perfil'],
        rows: [
          ['Foz do Douro (oeste)', '5.500–9.000 €', 'Prime residencial premium'],
          ['Avenida da Boavista / Massarelos', '5.000–8.000 €', 'Prime moderno empresarial'],
          ['Baixa / Sé (UNESCO)', '4.500–7.500 €', 'Prime histórico internacional'],
          ['Ribeira / Miragaia', '4.000–7.000 €', 'Prime histórico UNESCO'],
          ['Cedofeita / Carlos Alberto', '4.000–6.500 €', 'Prime lifestyle'],
          ['Foz do Douro (este) / Nevogilde', '4.500–7.500 €', 'Residencial premium clássico'],
          ['Bonfim', '3.500–5.500 €', 'Emergente valorizado'],
          ['Cedofeita periférica / Lapa', '3.500–5.500 €', 'Residencial em valorização'],
          ['Vila Nova de Gaia — ribeirinha', '4.000–6.500 €', 'Moderno alternativo'],
          ['Vila Nova de Gaia — Vilar do Paraíso/Valadares', '3.000–5.000 €', 'Residencial familiar'],
          ['Campanhã', '3.000–4.500 €', 'Frontier emergente'],
          ['Antas / Paranhos', '3.500–5.000 €', 'Residencial tradicional'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Comparando com Lisboa: o núcleo UNESCO do Porto está tipicamente 35-45 por cento abaixo do Chiado. Foz do Douro está 25-35 por cento abaixo de Lapa/Estrela. Cedofeita negoceia a patamares equivalentes a Arroios com diferença pequena. Boavista compara-se razoavelmente com Avenidas Novas com desconto médio de 20 por cento.',
    },
    {
      type: 'heading2',
      content: 'As zonas prime em detalhe',
    },
    {
      type: 'heading3',
      content: 'Foz do Douro — o prime residencial premium',
    },
    {
      type: 'paragraph',
      content:
        'Freguesias de Foz do Douro, Nevogilde e Lordelo do Ouro. É a zona residencial mais desejada do Porto, com combinação rara: proximidade ao oceano e ao rio, baixa densidade urbana, qualidade arquitetónica elevada em eixos específicos (Avenida do Brasil, Rua do Ouro, zona da Marginal), escolas internacionais, e uma escala humana que Lisboa não consegue replicar em nenhuma zona semelhante. Tipologias dominantes: 80-250 m², com presença significativa de apartamentos de luxo, vivendas e projetos de promoção recente.',
    },
    {
      type: 'paragraph',
      content:
        'Perfil de comprador: família portuguesa de elevado poder de compra, expatriado com filhos em idade escolar (escolas internacionais próximas), comprador brasileiro em segunda residência. Yields buy-to-let modestos (3-4,5 por cento) mas preservação de capital e valorização sólida. A sub-zona Foz oeste (mais próxima ao mar) tem tipicamente prémio de 10-15 por cento face a Foz este.',
    },
    {
      type: 'heading3',
      content: 'Avenida da Boavista e eixo Massarelos — o prime moderno',
    },
    {
      type: 'paragraph',
      content:
        'Avenida da Boavista é o eixo empresarial e residencial moderno do Porto, com oferta significativa de apartamentos de gama alta em prédios dos anos 1990-2010, frequentemente com áreas generosas, parqueamento próprio e amenidades (piscina, ginásio). A proximidade à Casa da Música, Parque da Cidade e eixo comercial dá-lhe uma qualidade funcional que agrada ao executivo português e expatriado. A freguesia de Massarelos (parte) e partes de Lordelo do Ouro completam este mapa moderno.',
    },
    {
      type: 'paragraph',
      content:
        'Tipologias dominantes: T2 a T5 de gama média-alta, com áreas entre 90 e 250 m². Liquidez de saída alta para produto T3/T4 bem construído. Yields brutos: 4-5 por cento em buy-to-let. Perfil de comprador: profissional português de rendimento alto, empresário, família expatriada.',
    },
    {
      type: 'heading3',
      content: 'Baixa e Sé — o núcleo histórico internacional',
    },
    {
      type: 'paragraph',
      content:
        'Freguesia de União das Freguesias do Centro Histórico e adjacências. O Porto histórico UNESCO concentra a maior densidade de produto de reabilitação premium dos últimos anos. Ruas como Flores, Mouzinho da Silveira, Galerias de Paris e Cardosas viram intervenções estruturantes que puxaram valores para patamares elevados. Tipologias: 40 a 150 m² em prédios com elevador instalado (raro), pombalinos e gaioleiros reabilitados, muitos duplex pelo tratamento dos últimos pisos.',
    },
    {
      type: 'paragraph',
      content:
        'Perfil de comprador: estrangeiro não residente em segunda habitação, investidor buy-to-let (média e curta duração), e portuguesas de rendimento alto em primeira residência de dimensão reduzida. Liquidez alta em 2026 — embora com mais exigência de comprador informado do que há cinco anos.',
    },
    {
      type: 'heading3',
      content: 'Ribeira e Miragaia — o histórico com identidade',
    },
    {
      type: 'paragraph',
      content:
        'Ribeira tem o maior peso simbólico do Porto, mas o investimento direto exige cuidados particulares: densidade turística elevada, acessos difíceis, prédios com estrutura medieval a romana, restrições patrimoniais rigorosas. Miragaia é mais tranquila e tem tido valorização consistente, com freguesia desejável e com arquitectura interessante. Tipologias: apartamentos 35-100 m², muitos em prédios pequenos e com desafios técnicos relevantes.',
    },
    {
      type: 'paragraph',
      content:
        'Para investidor preparado em reabilitação qualificada e com perfil para gestão de AL/MLD em zona turística, são zonas com boa margem operacional. Para investidor buy-to-let clássico de longa duração, há opções melhores noutras zonas do Porto.',
    },
    {
      type: 'heading3',
      content: 'Cedofeita e Carlos Alberto — o prime lifestyle',
    },
    {
      type: 'paragraph',
      content:
        'Freguesia de Cedofeita. Zona equivalente em lógica ao Príncipe Real em Lisboa, em escala mais compacta. Elevada densidade de comércio independente, galerias de arte, restauração de qualidade, comunidade criativa. Três microzonas a distinguir: Cedofeita clássica (próxima à Casa da Música e Clérigos) com preços mais altos; Carlos Alberto e eixo Piolho de valorização consistente; Cedofeita periférica (norte) com mais potencial em 2026 mas menos consolidada.',
    },
    {
      type: 'paragraph',
      content:
        'Tipologias: 50-130 m² em prédios do séc. XIX e início do XX, muitos reabilitados na última década. Yields brutos buy-to-let: 4,5-6 por cento. Liquidez de saída alta. Procura por produto bem reabilitado é alta e o diferencial entre produto com acabamentos premium e produto médio é claro.',
    },
    {
      type: 'heading2',
      content: 'As zonas emergentes a considerar',
    },
    {
      type: 'heading3',
      content: 'Bonfim — o emergente com maior tração',
    },
    {
      type: 'paragraph',
      content:
        'Freguesia de Bonfim. Depois de uma década a ser esquecida, o Bonfim entrou claramente no radar entre 2020 e 2025 e consolidou-se como a zona emergente principal do Porto em 2026. Proximidade à Baixa, arquitetura diversificada (desde prédios burgueses até edifícios pós-1940), densidade de serviços, transportes razoáveis. Valorização forte mas ainda com margem — particularmente em ruas menos centrais e em edifícios por reabilitar. Tipologias: 50-120 m², muitos com espaço exterior pequeno.',
    },
    {
      type: 'paragraph',
      content:
        'Perfil adequado: investidor que gosta de comprar antes de o preço estar consolidado, com horizonte 5-8 anos, capacidade de selecionar rua e edifício com cuidado. Yields brutos atingíveis: 5-7 por cento. Liquidez razoável mas ainda não ao nível de Cedofeita.',
    },
    {
      type: 'heading3',
      content: 'Campanhã — o frontier',
    },
    {
      type: 'paragraph',
      content:
        'Freguesia de Campanhã. O equivalente portuense de Marvila/Beato — antigas zonas industriais ribeirinhas em transformação, com densidade de terreno disponível e expetativa de transformação urbana nos próximos 5-15 anos. Proximidade à Estação de Campanhã (hub ferroviário nacional) é um argumento estrutural forte. Preço de entrada dos mais baixos da cidade intramuros.',
    },
    {
      type: 'paragraph',
      content:
        'Perfil adequado: investidor com horizonte 7-12 anos, tolerância a oscilação e a prazos longos de maturação urbanística, apetite por produto a preço de entrada muito baixo. TIRs potenciais elevadas mas risco real de horizonte longo de materialização.',
    },
    {
      type: 'heading3',
      content: 'Vila Nova de Gaia — o mercado complementar',
    },
    {
      type: 'paragraph',
      content:
        'Gaia deixou de ser a "margem sul" para se tornar um mercado autónomo com dinâmica própria. Dois eixos a distinguir. Primeiro, o eixo ribeirinho (freguesia de Santa Marinha e proximidade) — face à Ribeira, com vista sobre o rio e proximidade às caves; este eixo tem tido transformação intensa com promoção recente de apartamentos premium e oferta hoteleira. Preços aproximam-se dos da Ribeira do Porto. Segundo, zonas residenciais familiares como Vilar do Paraíso, Canidelo e Valadares — com oferta de produto novo T3/T4 com áreas generosas, parqueamento e proximidade à praia, preços 30-40 por cento abaixo da Foz do Douro.',
    },
    {
      type: 'paragraph',
      content:
        'Para investidor buy-to-let familiar, Gaia tem frequentemente melhor relação preço/qualidade do que zonas equivalentes do Porto. Para especulação e valorização rápida, o eixo ribeirinho tem dinâmica comparável ao Porto com menos concorrência de capital.',
    },
    {
      type: 'heading2',
      content: 'Microlocalização no Porto — o que olhar',
    },
    {
      type: 'paragraph',
      content:
        'Tal como em Lisboa, a rua importa frequentemente mais do que a zona. Particularidades do Porto a considerar:',
    },
    {
      type: 'list',
      content: [
        '<strong>Declives</strong> — a topografia do Porto é acidentada; ruas com declive forte têm impacto real na atratividade residencial.',
        '<strong>Exposição solar</strong> — com clima mais chuvoso do que Lisboa, a exposição sul é ainda mais valorizada.',
        '<strong>Vista sobre o rio ou mar</strong> — na Foz, vista mar vale 15-25 por cento; na Baixa/Ribeira/Gaia, vista rio/caves vale 20-30 por cento.',
        '<strong>Estacionamento</strong> — no Porto histórico, a falta de parqueamento é um problema mais acentuado do que em Lisboa e penaliza mais o valor.',
        '<strong>Densidade turística ponderada</strong> — algumas ruas da Baixa têm tal densidade AL que o produto residencial de longa duração fica penalizado.',
      ],
    },
    {
      type: 'heading2',
      content: 'Tipologias que funcionam no Porto em 2026',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipologia', 'Procura 2026', 'Zonas alvo'],
        rows: [
          ['T0 / Studio 25-40 m²', 'Alta em AL / MLD', 'Baixa, Sé, Ribeira, Cedofeita'],
          ['T1 40-65 m²', 'Muito alta', 'Transversal; pico em Cedofeita, Bonfim'],
          ['T2 65-100 m²', 'Alta', 'Transversal; Foz, Cedofeita, Bonfim, Gaia'],
          ['T3 95-140 m²', 'Alta (famílias)', 'Foz, Boavista, Gaia (Vilar/Canidelo)'],
          ['T4+ 140+ m²', 'Seletiva', 'Foz, Boavista, Antas'],
          ['Apartamento com terraço / jardim', 'Muito alta', 'Toda a cidade — prémio 10-20 %'],
          ['Apartamento com vista rio/mar', 'Muito alta', 'Foz, Baixa, Ribeira, Gaia ribeirinha'],
        ],
      },
    },
    {
      type: 'quote',
      content:
        'O Porto continua a ser o mercado onde encontramos a melhor relação preço/qualidade de Portugal em 2026. A vantagem sobre Lisboa já não é o que era, mas ainda compensa — para quem sabe escolher a rua e não se limita ao óbvio.',
      source: {
        name: 'Equipa de Análise de Mercado HABTA',
        role: 'Prática interna',
      },
    },
    {
      type: 'heading2',
      content: 'Zonas a evitar (ou abordar com cuidado)',
    },
    {
      type: 'list',
      content: [
        '<strong>Zonas exclusivamente dependentes de turismo curto</strong> — particularmente em Ribeira muito central; regulação pode alterar viabilidade.',
        '<strong>Edifícios em ruas muito inclinadas sem elevador</strong> — no Porto, a limitação é ainda mais material do que em Lisboa.',
        '<strong>Produto excessivamente pequeno em zonas periféricas</strong> — T0 em zonas fora do núcleo urbano tem liquidez limitada.',
        '<strong>Prédios em zonas com problemas de reabilitação estrutural</strong> — alguns conjuntos históricos têm questões de fundações e humidade que tornam a reabilitação economicamente inviável.',
        '<strong>Produto novo em promoções mal desenhadas</strong> — há projetos recentes com falta de luz natural ou áreas pouco funcionais que perdem valor rapidamente.',
      ],
    },
    {
      type: 'heading2',
      content: 'Perspetivas 2026-2028',
    },
    {
      type: 'paragraph',
      content:
        'Três tendências que esperamos consolidar-se no Porto nos próximos 24-36 meses. Primeiro, continuação da compressão do diferencial de preços face a Lisboa — expectável que o desconto médio passe de 30 para 25 por cento em zonas equivalentes. Segundo, valorização mais intensa em Bonfim e partes de Cedofeita periférica à medida que o stock de reabilitação se reduz nas zonas consolidadas. Terceiro, peso crescente de Gaia como mercado paralelo — particularmente no eixo ribeirinho e em segmento familiar de gama média.',
    },
    {
      type: 'paragraph',
      content:
        'O que não esperamos: crescimentos anuais de 10-15 por cento como entre 2017-2022. O mercado do Porto entrou em patamares que tornam esse crescimento improvável. Esperamos, sim, 3-5 por cento/ano nas zonas consolidadas e 5-8 por cento em zonas emergentes escolhidas com critério.',
    },
    {
      type: 'heading2',
      content: 'Como a HABTA pode ajudar',
    },
    {
      type: 'paragraph',
      content:
        'A HABTA acompanha projetos de investimento e reabilitação no Grande Porto com presença ativa em Baixa, Cedofeita, Bonfim, Foz e Gaia. Para quem quer entrar no mercado com método, oferecemos análise de microlocalização, sourcing, due diligence técnica e fiscal, execução de reabilitação e estratégia de saída. Explore os nossos <a href="/servicos">serviços</a>, veja projetos reais no <a href="/portfolio">portefólio</a> ou fale connosco a partir da página de <a href="/contacto">contacto</a>.',
    },
  ],
  faq: [
    {
      q: 'Qual é a melhor zona do Porto para investir em 2026?',
      a: 'Depende do perfil. Para preservação de capital e liquidez, Foz do Douro e Avenida da Boavista. Para melhor relação risco/retorno em buy-to-let urbano, Cedofeita. Para retorno agressivo em emergente, Bonfim. Para mercado familiar com boa relação preço/qualidade, Gaia (Vilar do Paraíso, Canidelo) ou Avenida da Boavista. Para frontier com horizonte longo, Campanhã.',
    },
    {
      q: 'Quanto custa um apartamento na Foz do Douro em 2026?',
      a: 'Um T2 ou T3 em bom estado num prédio representativo da Foz oeste situa-se tipicamente entre 5.500 e 9.000 euros por metro quadrado útil. Um T3 de 120 m² comodamente entra nos 700-900 mil euros. Vivendas e apartamentos com vista direta sobre o mar podem entrar em patamares significativamente superiores.',
    },
    {
      q: 'O Porto continua mais barato do que Lisboa em 2026?',
      a: 'Sim, mas o diferencial comprimiu-se. Em zonas equivalentes, o Porto continua a negociar cerca de 25-35 por cento abaixo de Lisboa — abaixo dos 40-50 por cento de há 5 anos. Em zonas muito específicas (Foz vs Avenida, Baixa Porto vs Chiado), o desconto pode ser superior ou inferior dependendo do produto concreto. Continua a ser uma vantagem estrutural material.',
    },
    {
      q: 'Vale a pena investir em Vila Nova de Gaia?',
      a: 'Sim, com critério. A margem sul do Douro deixou de ser um mercado de reserva para ser um mercado com dinâmica própria. O eixo ribeirinho tem apreciação rápida e produto premium consolidado. Zonas residenciais familiares (Vilar do Paraíso, Canidelo) oferecem melhor relação preço/qualidade para famílias comparado a Foz ou Boavista. A qualidade de infraestrutura e proximidade ao Porto tornam Gaia uma alternativa séria, não um substituto de baixa qualidade.',
    },
    {
      q: 'Que yields brutos de arrendamento são realistas no Porto em 2026?',
      a: 'Zonas prime (Foz, Boavista, Baixa): 3,5-5%. Cedofeita e Carlos Alberto: 4,5-6%. Bonfim: 5-6,5%. Gaia (consoante zona): 4-6%. Campanhã: 5-7%. Estes são yields brutos — os líquidos (após IMI, condomínio, manutenção, vacância, impostos) costumam ficar 30-40 por cento abaixo.',
    },
    {
      q: 'Onde estão as melhores oportunidades de reabilitação qualificada no Porto?',
      a: 'Predominantemente em Baixa/Sé, Miragaia, partes de Cedofeita, Bonfim e zona histórica de Gaia (Santa Marinha). Todas têm ARU ativas e edifício histórico com potencial de intervenção qualificada. A combinação de isenções fiscais (IVA a 6%, isenção temporária IMI) com valorização pela via da reabilitação gera frequentemente TIRs acima de 12-15 por cento em projetos bem executados. Detalhamos o processo em <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">Cinco pilares para avaliar reabilitação urbana</a>.',
    },
  ],
  disclaimer:
    'Os preços por m² e yields apresentados são medianas indicativas baseadas em dados públicos (Confidencial Imobiliário, INE) e em transações observadas pela HABTA. Valores reais variam significativamente conforme rua, estado, vista, andar e outras características específicas. Para decisões concretas, exija avaliação independente e análise de microlocalização.',
};
