import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Mercado'];

export const article: InsightArticle = {
  id: 'mercado-imobiliario-portugal-2026-analise-completa',
  title: 'Mercado imobiliário em Portugal 2026: análise completa, tendências e preços',
  description:
    'Uma análise estruturada do mercado imobiliário português em 2026 — panorama macro, preços por zona, dinâmica de oferta e procura, comparação europeia, tendências para investidores e implicações práticas para decisões em Lisboa, Porto e Cascais.',
  category: 'Mercado',
  readTime: '18 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investigação',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'Raio-x do mercado imobiliário português em 2026: preço/m² por zona, dinâmica macro, comparação europeia e o que isto significa para quem decide investir em Lisboa, Porto ou Cascais.',
  image: 'https://images.unsplash.com/photo-1528913775512-624d24b27b96?w=1600&q=80&auto=format&fit=crop',
  tags: [
    'mercado imobiliário Portugal 2026',
    'preços imóveis Lisboa Porto',
    'tendências imobiliário Portugal',
    'yield imobiliário Portugal',
    'Cascais imóveis',
    'valorização imóveis Portugal',
    'análise mercado habitação',
  ],
  tldr: [
    'O mercado imobiliário português em 2026 continua em expansão moderada, com preços médios a subir abaixo da média da última década — entrou numa fase de maturidade.',
    'Lisboa e Porto mantêm preços premium por m² mas os eixos alternativos (Setúbal, Coimbra, Aveiro) crescem acima da média nacional.',
    'A procura estrutural — falta de oferta qualificada, migração para centros urbanos, turismo residencial — continua robusta.',
    'Taxa de juro estabilizada abre janela para refinanciamentos e reequilíbrio do mercado de crédito habitação.',
    'Para investidores: a era das valorizações fáceis acabou; a vantagem está hoje em microlocalização, produto diferenciado e execução disciplinada.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Portugal continental',
    lastReviewed: '2026-04-22',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Analisar o mercado imobiliário em Portugal em 2026 exige separar ruído de sinal. Este guia consolida o que observamos na prática com o que os dados públicos (INE, Confidencial Imobiliário, BCE, OCDE) confirmam — sem hype, sem alarmismo.',
    },
    {
      type: 'paragraph',
      content:
        'O imobiliário português em 2026 não é o mercado acelerado de 2017-2021 nem o mercado travado que alguns anunciaram no fim de 2023. É um mercado em maturidade, com dinâmicas mais diferenciadas por zona, por segmento e por tipologia. Este artigo oferece uma análise estruturada do que está a acontecer — e, sobretudo, do que importa para quem está a decidir hoje.',
    },
    {
      type: 'heading2',
      content: '1. Panorama macro — o enquadramento que condiciona tudo',
    },
    {
      type: 'paragraph',
      content:
        'Cinco variáveis macroeconómicas condicionam o mercado imobiliário em 2026. Todas elas se moveram significativamente nos últimos dois anos.',
    },
    {
      type: 'list',
      content: [
        '<strong>Taxa de juro BCE</strong>: estabilização após ciclo de descida; Euribor a 12 meses em patamar historicamente médio, permitindo retomar crédito habitação em condições racionais.',
        '<strong>Inflação</strong>: ancorada perto de 2%, sem surpresas significativas; custos de construção ainda elevados mas a estabilizar.',
        '<strong>Rendimento disponível</strong>: crescimento real dos salários modesto; mantém-se desafio de acessibilidade à habitação, sobretudo jovens.',
        '<strong>Migração</strong>: saldo migratório positivo; Portugal continua a atrair residentes internacionais, embora com perfil diferente do ciclo do Golden Visa.',
        '<strong>Turismo</strong>: recuperação sustentada, com AL regulado em zonas saturadas; pressão sobre parque habitacional urbano permanece.',
      ],
    },
    {
      type: 'heading2',
      content: '2. Preços médios por zona em 2026',
    },
    {
      type: 'paragraph',
      content:
        'Os valores abaixo são médias indicativas baseadas em análise de transações recentes e dados públicos. Um imóvel específico pode afastar-se significativamente destes valores por razões objetivas (estado, andar, vista, tipologia exata).',
    },
    {
      type: 'table',
      content: {
        headers: ['Zona', 'Preço médio €/m² (2026)', 'Yield bruto típico'],
        rows: [
          ['Lisboa — zonas prime (Avenidas Novas, Príncipe Real)', '6000–9000', '3,5–4,5%'],
          ['Lisboa — zonas emergentes (Arroios, Beato, Marvila)', '4000–6000', '4,5–6%'],
          ['Porto — centro histórico e Cedofeita', '3500–5500', '4–5,5%'],
          ['Porto — Bonfim, Aldoar, Matosinhos', '2500–4000', '5–6,5%'],
          ['Cascais — centro e bairros premium', '5500–8500', '3–4%'],
          ['Setúbal / Coimbra / Aveiro', '1800–2800', '5,5–7,5%'],
          ['Interior / eixos alternativos', '800–1600', '6–9% (menor liquidez)'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Os yields brutos são indicativos e não consideram custos operacionais. O yield líquido real, depois de IMI, condomínio, seguros, manutenção e desocupação, situa-se tipicamente 30 a 40 por cento abaixo do bruto.',
    },
    {
      type: 'heading2',
      content: '3. Dinâmica de oferta e procura — onde está o desequilíbrio',
    },
    {
      type: 'paragraph',
      content:
        'O grande tema estrutural do mercado português continua a ser o desequilíbrio entre oferta qualificada e procura. A nova construção permanece abaixo do necessário para absorver a procura urbana, e o parque edificado antigo precisa de reabilitação em escala superior à taxa de execução atual.',
    },
    {
      type: 'paragraph',
      content:
        'Em Lisboa e Porto, a oferta de T2 e T3 reabilitados em zonas centrais continua escassa face à procura. Isso sustenta preços e reduz o risco de correções bruscas em produto bem posicionado. Em contrapartida, o segmento de luxo em zonas saturadas mostra sinais de absorção mais lenta — vendas exigem paciência e preço realista.',
    },
    {
      type: 'heading2',
      content: '4. Comparação com outros mercados europeus',
    },
    {
      type: 'paragraph',
      content:
        'Portugal continua relativamente barato face a capitais europeias comparáveis. Uma nota de cautela: preço absoluto baixo não significa retorno alto — os yields líquidos em Portugal estão em linha com a média da Europa Ocidental, e o custo de vida local não é o de uma economia periférica.',
    },
    {
      type: 'table',
      content: {
        headers: ['Cidade', '€/m² centro (indicativo)', 'Yield bruto típico'],
        rows: [
          ['Lisboa (zona prime)', '6000–9000', '3,5–4,5%'],
          ['Madrid (zona prime)', '7000–10000', '3,5–4,5%'],
          ['Barcelona (zona prime)', '6500–9500', '3,5–5%'],
          ['Paris (zona prime)', '11000–16000', '2,5–3,5%'],
          ['Berlim (zona prime)', '7500–10500', '2,5–3,5%'],
          ['Amesterdão (zona prime)', '8500–12000', '3–4%'],
        ],
      },
    },
    {
      type: 'heading2',
      content: '5. Tendências para investidores em 2026',
    },
    {
      type: 'list',
      content: [
        '<strong>Microlocalização vale mais do que zona</strong>: rua, exposição e vista movem 10-20% do valor final em produto equivalente.',
        '<strong>Produto diferenciado prémium resiste melhor</strong>: reabilitações com acabamentos cuidados e boa eficiência energética absorvem mais rápido.',
        '<strong>Segmento médio é o mais competitivo</strong>: muita oferta, procura forte mas seletiva; exige preço realista e produto sem defeitos óbvios.',
        '<strong>Eixos alternativos ganham relevância</strong>: Setúbal, Coimbra e Aveiro com melhor binómio preço/yield, embora com liquidez inferior.',
        '<strong>Custos de construção estabilizaram</strong>: permite novamente orçamentar com confiança, embora em patamar superior ao pré-2022.',
      ],
    },
    {
      type: 'quote',
      content:
        'O mercado português em 2026 premia quem compra com critério e executa com disciplina. O operador médio pode ganhar dinheiro, o operador bom distingue-se, o operador amador perde. A margem de erro é menor do que era, mas o upside para quem faz bem continua real.',
      source: {
        name: 'Equipa de Investigação HABTA',
        role: 'Análise interna',
      },
    },
    {
      type: 'heading2',
      content: '6. Riscos de mercado em 2026',
    },
    {
      type: 'list',
      content: [
        '<strong>Alteração fiscal</strong>: qualquer mudança no regime de mais-valias ou IMT muda materialmente o retorno líquido.',
        '<strong>Endurecimento regulatório em AL</strong>: municípios podem expandir zonas de contenção; projetos baseados exclusivamente em AL ficam mais expostos.',
        '<strong>Disrupção macro</strong>: choque inflacionista ou geopolítico pode travar momentaneamente a procura internacional.',
        '<strong>Saturação em segmentos específicos</strong>: luxo em zonas já saturadas vende mais devagar; ajustar preço é parte do jogo.',
        '<strong>Execução</strong>: o risco mais consistente; cronograma e orçamento escorregar de forma sistemática é mais perigoso que qualquer variável macro.',
      ],
    },
    {
      type: 'heading2',
      content: '7. O que isto significa para quem está a decidir hoje',
    },
    {
      type: 'paragraph',
      content:
        'Se está a considerar entrar ou escalar em imobiliário português em 2026, três princípios emergem consistentemente dos projetos que vemos entregar resultados: comprar disciplinado, operar com método e manter reserva técnica. O resto — localização, segmento, tipologia — são decisões táticas que dependem do perfil e dos objetivos específicos.',
    },
    {
      type: 'paragraph',
      content:
        'Para aprofundar aspetos operacionais, recomendamos os guias complementares: <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">Investir em imóveis em Portugal — guia completo 2026</a>, <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">Cinco pilares para avaliar uma reabilitação</a> e <a href="/blog/como-calcular-o-roi-real-de-um-projeto">Como calcular o ROI real de um projeto</a>.',
    },
    {
      type: 'heading2',
      content: 'Como a HABTA pode ajudar',
    },
    {
      type: 'paragraph',
      content:
        'A HABTA analisa o mercado imobiliário português com foco operacional — não para publicar números, mas para decidir onde alocar capital. Se quer uma leitura aplicada ao seu caso, fale connosco via <a href="/servicos">serviços</a> ou explore o <a href="/portfolio">portefólio</a>.',
    },
  ],
  faq: [
    {
      q: 'Os preços dos imóveis em Portugal vão continuar a subir em 2026?',
      a: 'Os fundamentos estruturais — défice de oferta qualificada, migração urbana, turismo sustentado — continuam a suportar os preços. A valorização esperada é mais moderada do que na década passada e mais diferenciada por zona e segmento. Valorizações fáceis em qualquer produto acabaram; produto certo em zona certa ainda valoriza.',
    },
    {
      q: 'Vale a pena comprar agora ou esperar por correção?',
      a: 'Não há sinais claros de correção generalizada em 2026. Produto bem comprado, em boa microlocalização e a preço justo, continua a fazer sentido. Esperar por correção é apostar contra a tendência estrutural — historicamente mais caro do que entrar com critério agora.',
    },
    {
      q: 'Qual é a melhor cidade para investir em imóveis em Portugal em 2026?',
      a: 'Depende do perfil. Lisboa tem maior liquidez e diversidade; Porto oferece melhor binómio preço/yield; Cascais é o mercado prémium com turista de longa duração; eixos alternativos como Setúbal e Coimbra têm yields superiores mas liquidez inferior. A escolha deve refletir horizonte e apetite por gestão operacional.',
    },
    {
      q: 'Os yields em Portugal são competitivos face a outros mercados europeus?',
      a: 'Sim, em geral estão em linha com ou acima da média das principais cidades da Europa Ocidental. Cidades como Paris e Amesterdão têm yields estruturalmente inferiores. Lisboa e Porto oferecem relação risco/retorno competitiva para quem executa com disciplina.',
    },
    {
      q: 'Como é que o fim do Golden Visa afetou o mercado?',
      a: 'O impacto foi sobretudo no segmento de luxo e em perfil de investidor puramente especulativo. O mercado absorveu o ajuste — a procura internacional mudou de natureza (mais residência efetiva) sem colapsar. Em 2026 o mercado está menos dependente deste fator e mais baseado em fundamentos estruturais.',
    },
    {
      q: 'Quanto tempo se leva a vender um imóvel em Portugal em 2026?',
      a: 'Em produto bem precificado e em zona prime ou zona emergente, 2-5 meses é típico. Em produto de luxo em zona saturada, 6-12 meses é realista. Em produto mal posicionado ou sobrevalorizado, pode prolongar-se indefinidamente — e o tempo em mercado penaliza preço final.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento de investimento. Os valores apresentados são indicativos e baseados em análise de dados públicos à data de revisão. Condições de mercado podem variar rapidamente; consulte profissionais qualificados antes de decisões concretas.',
};
