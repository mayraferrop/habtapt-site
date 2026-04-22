import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'certificacao-energetica-passos-concretos-para-passar-de-d',
  title: 'Certificação energética: como passar de D para B em Portugal (2026)',
  description:
    'Guia técnico com os passos concretos para melhorar a classe energética de D para B num imóvel em Portugal — obras, custos, apoios e impacto no valor de mercado.',
  category: 'Sustentabilidade',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Sustentabilidade',
  date: '2026-04-22',
  updated_at: '2026-04-22',
  excerpt:
    'Melhorar a certificação energética de D para B exige um diagnóstico rigoroso, intervenções sequenciadas e apoios disponíveis — este guia detalha cada passo em Portugal.',
  image: 'https://images.unsplash.com/photo-1556983852-43bf21186b2a${UNSPLASH_PARAMS}',
  tags: [
    'certificação energética Portugal 2026',
    'melhorar classe energética imóvel',
    'eficiência energética reabilitação Lisboa',
    'SCE certificado energético obras',
    'apoios eficiência energética Portugal',
  ],
  tldr: [
    'Passar de classe D para B requer tipicamente isolamento de envolvente, substituição de sistema de climatização e instalação de painéis solares térmicos ou fotovoltaicos — investimento médio entre 15 000 € e 35 000 € para uma fração T2/T3.',
    'O SCE (Sistema de Certificação Energética) obriga a certificado válido na venda e arrendamento; imóveis com classe B+ ou superior valorizam 6–12% face a equivalentes em classe D, segundo análises de mercado em Lisboa e Porto.',
    'O programa Casa Eficiente e as linhas de crédito bonificado do Banco de Portugal permitem financiar até 85% das obras de eficiência, com taxa máxima de 2,5% ao ano em 2026 nos programas em vigor.',
    'A sequência correta é: auditoria energética → diagnóstico SCE → obras por prioridade de retorno → nova certificação. Saltar a auditoria inicial é o erro que mais frequentemente invalida apoios públicos.',
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
        'A classe energética de um imóvel deixou de ser um detalhe burocrático. Em 2026, compradores e arrendatários em Lisboa, Porto e Cascais rejeitam ativamente frações abaixo de classe C — e os bancos começaram a aplicar condições de crédito mais favoráveis a imóveis A ou B. Saber como passar de D para B, com que obras e com que investimento, é hoje uma decisão de gestão patrimonial.',
    },
    {
      type: 'paragraph',
      content:
        'A certificação energética em Portugal é regulada pelo SCE — Sistema de Certificação Energética dos Edifícios — transposto pelo Decreto-Lei n.º 101-D/2020, que alinha a legislação nacional com a Diretiva Europeia de Desempenho Energético dos Edifícios (EPBD). O certificado classifica o imóvel de A+ a F com base no consumo de energia primária calculado por perito qualificado e registado na ADENE (Agência para a Energia).',
    },
    {
      type: 'heading2',
      content: 'O que significa passar de D para B em termos energéticos?',
    },
    {
      type: 'paragraph',
      content:
        'A classe D corresponde a um imóvel com consumo de energia primária entre 150 e 250 kWh/m².ano, enquanto a classe B exige descer abaixo de 100 kWh/m².ano. A diferença não é cosmética: representa uma redução de 40–60% nas necessidades de aquecimento, arrefecimento e produção de água quente sanitária.',
    },
    {
      type: 'paragraph',
      content:
        'Em termos práticos, num apartamento T3 de 110 m² em Lisboa, isto significa poupar entre 900 € e 1 400 € por ano em energia, dependendo da tarifa e do padrão de utilização. O impacto acumula-se significativamente num horizonte de 10 anos.',
    },
    {
      type: 'heading2',
      content: 'Como funciona a auditoria energética inicial?',
    },
    {
      type: 'paragraph',
      content:
        'A auditoria energética é o passo zero — sem ela, qualquer intervenção arrisca atacar os sintomas errados. O perito SCE, registado na ADENE, visita o imóvel, analisa as características construtivas, os sistemas existentes e os consumos históricos, e calcula as perdas energéticas por componente.',
    },
    {
      type: 'list',
      content: [
        'Avaliação da envolvente opaca: paredes exteriores, cobertura, pavimento sobre espaço não aquecido.',
        'Análise de vãos envidraçados: tipo de caixilharia, vidro simples ou duplo, existência de proteção solar.',
        'Diagnóstico dos sistemas de climatização: equipamento de aquecimento, arrefecimento e ventilação.',
        'Avaliação do sistema de preparação de água quente sanitária (AQS): caldeira, esquentador, termoacumulador.',
        'Identificação de pontes térmicas lineares e superficiais nas ligações estruturais.',
        'Medição de infiltrações de ar não controladas (caixilharias, rodapés, contornos de caixa de estore).',
      ],
    },
    {
      type: 'paragraph',
      content:
        'O custo de uma auditoria energética completa para apartamento em Portugal situa-se tipicamente entre 300 € e 700 €. Para moradias unifamiliares acima de 200 m², pode atingir 1 200 €. Este valor é elegível para dedução em IRS na categoria de despesas com imóveis nos termos da legislação fiscal em vigor.',
    },
    {
      type: 'heading2',
      content: 'Quais as obras com maior impacto na classe energética?',
    },
    {
      type: 'paragraph',
      content:
        'Nem todas as intervenções têm o mesmo peso na fórmula SCE. O retorno energético e económico varia muito consoante o ponto de partida do imóvel. A tabela abaixo organiza as medidas por impacto típico na classe e por custo estimado de execução em Portugal em 2026.',
    },
    {
      type: 'table',
      content: {
        headers: ['Medida', 'Melhoria típica de classe', 'Custo estimado (€/m² ou fixo)', 'Período de retorno'],
        rows: [
          ['Isolamento de cobertura (lã mineral ou XPS, e≥8 cm)', 'D→C ou C→B', '15–30 €/m² de cobertura', '5–8 anos'],
          ['Isolamento de fachada pelo exterior (ETICS)', 'D→C', '60–120 €/m² de fachada', '8–14 anos'],
          ['Substituição de caixilharia para vidro duplo low-e', 'Parcial (+10–20 kWh/m².ano)', '350–700 €/m² de vão', '10–18 anos'],
          ['Bomba de calor (HVAC eficiente, COP≥3,5)', 'D→C ou C→B', '800–2 500 € (T2/T3)', '4–7 anos'],
          ['Coletores solares térmicos para AQS', 'C→B ou melhoria parcial D→C', '3 000–6 000 € instalados', '6–10 anos'],
          ['Sistema fotovoltaico (2–4 kWp com autoconsumo)', 'Bónus A/A+', '4 000–8 000 € instalados', '7–12 anos'],
        ],
      },
    },
    {
      type: 'heading3',
      content: 'A sequência certa para maximizar o impacto',
    },
    {
      type: 'paragraph',
      content:
        'A ordem das intervenções importa tanto quanto as intervenções em si. Instalar uma bomba de calor num imóvel com fachadas sem isolamento é sobredimensionar o equipamento para compensar perdas evitáveis. A sequência recomendada segue a lógica da envolvente primeiro, sistemas depois.',
    },
    {
      type: 'list',
      content: [
        '1.º: Reduzir perdas pela envolvente opaca — cobertura e fachadas (maior impacto por euro investido em imóveis pré-1990).',
        '2.º: Substituir ou melhorar vãos envidraçados com maior área exposta a norte ou a poente.',
        '3.º: Instalar climatização eficiente (bomba de calor reversível) dimensionada para a nova envolvente.',
        '4.º: Garantir produção de AQS solar ou por bomba de calor de termoacumulação.',
        '5.º: Complementar com fotovoltaico para autoconsumo, se a exposição solar da cobertura ou fachada o justificar.',
      ],
    },
    {
      type: 'heading2',
      content: 'Que apoios financeiros existem para estas obras em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Em 2026, os principais instrumentos de apoio à eficiência energética em Portugal são o programa Casa Eficiente 2020 (em renovação), o REVO — Reabilitar e Valorizar e as linhas de crédito bonificado com garantia mútua. A ADENE mantém uma base de dados atualizada de incentivos por tipologia de intervenção e escalão de rendimento.',
    },
    {
      type: 'list',
      content: [
        'Dedução em IRS de 30% das despesas com eficiência energética, até um máximo de 1 000 € por ano para agregados fora de imóvel próprio permanente.',
        'IVA a 6% aplicável às obras de reabilitação em imóveis com mais de 30 anos ou em Áreas de Reabilitação Urbana (ARU), incluindo instalação de equipamentos de energia renovável, nos termos do regime jurídico aplicável.',
        'Linha de crédito bonificado para eficiência energética com taxa máxima indicativa de 2,5% ao ano e prazo até 10 anos, disponível via instituições de crédito aderentes.',
        'Fundos comunitários PRR (Plano de Recuperação e Resiliência): componente de eficiência energética em edifícios residenciais, com candidaturas abertas por janelas semestrais.',
        'Apoios municipais específicos: Lisboa e Porto mantêm programas próprios de cofinanciamento de obras de eficiência em ARU — contactar a Câmara Municipal de Lisboa (CML) ou os serviços de planeamento da CMP.',
      ],
    },
    {
      type: 'quote',
      content:
        'Nos projetos que acompanhamos em Alfama e na Mouraria, a combinação de IVA a 6% nas obras com a linha de crédito bonificado reduziu o encargo líquido anual do proprietário para valores inferiores à poupança em energia — tornando a operação autofinanciada desde o primeiro ano.',
      source: {
        name: 'Equipa de Sustentabilidade HABTA',
        role: 'Análise de projetos 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Quanto vale um imóvel com classe B face a um com classe D?',
    },
    {
      type: 'paragraph',
      content:
        'O diferencial de valor entre classes energéticas ganhou expressão mensurável no mercado português. Análises de transações em Lisboa e no Porto entre 2023 e 2025 apontam para um prémio de 6–12% no valor de venda e de 5–9% na renda mensal para imóveis em classe B ou superior, comparados com equivalentes em classe D na mesma freguesia.',
    },
    {
      type: 'paragraph',
      content:
        'Em Cascais e no eixo Estoril–Parede, onde o perfil de comprador é mais exigente em qualidade de construção, o diferencial tende para o limite superior desse intervalo. Para uma fração avaliada em 400 000 € com classe D, a melhoria para B pode representar uma valorização de 24 000–48 000 € — face a um custo de intervenção de 20 000–35 000 €.',
      },
    {
      type: 'heading2',
      content: 'O que muda no processo de venda ou arrendamento com a nova classe?',
    },
    {
      type: 'paragraph',
      content:
        'O Decreto-Lei n.º 101-D/2020 impõe que qualquer contrato de compra e venda ou arrendamento inclua referência ao certificado energético válido, sob pena de nulidade do ato. O perito SCE emite o novo certificado no prazo médio de 5 a 10 dias úteis após vistoria final, com validade de 10 anos para habitação.',
    },
    {
      type: 'list',
      content: [
        'O certificado energético deve ser exibido nos anúncios de venda ou arrendamento, incluindo plataformas digitais — a omissão é infração ao abrigo do regime contraordenacional do SCE.',
        'O novo certificado substitui automaticamente o anterior no sistema da ADENE; o proprietário recebe o código de acesso para partilha com interessados.',
        'Em arrendamento, a melhoria de classe pode justificar uma atualização de renda em contratos novos, dentro dos limites do NRAU (Novo Regime do Arrendamento Urbano) em vigor.',
        'Para venda, a classe energética consta obrigatoriamente na certidão de teor predial e na escritura — compradores com pré-aprovação de crédito habitação verificam-na sistematicamente.',
      ],
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se tem um imóvel em classe D e quer perceber quais as intervenções prioritárias para atingir a classe B, a equipa HABTA pode acompanhá-lo desde a auditoria energética até à certificação final — com acesso à rede de peritos SCE certificados e gestão de candidaturas a apoios disponíveis. Consulte os nossos <a href="/servicos">serviços de reabilitação sustentável</a> ou analise casos concretos no <a href="/portfolio">portefólio de projetos concluídos</a>. Para aprofundar, leia também o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a> e a análise sobre <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">como investir em imóveis em Portugal</a>. Subscreva a newsletter para receber atualizações sobre programas de apoio assim que abrirem candidaturas.',
    },
  ],
  faq: [
    {
      q: 'Quanto custa passar de classe D para classe B num apartamento?',
      a: 'Para uma fração T2/T3 entre 80 e 120 m², o investimento típico situa-se entre 15 000 € e 35 000 €, dependendo do ponto de partida da envolvente. Com IVA a 6% em ARU e apoios disponíveis, o encargo líquido pode reduzir-se significativamente.',
    },
    {
      q: 'A auditoria energética é obrigatória antes das obras?',
      a: 'Não é legalmente obrigatória para obras particulares, mas é exigida para aceder a vários apoios públicos e linhas de crédito bonificado. Sem ela, o proprietário arrisca intervir nas medidas erradas e não atingir a classe pretendida após a nova certificação.',
    },
    {
      q: 'Quanto tempo demora a obter o novo certificado energético após as obras?',
      a: 'O perito SCE realiza a vistoria final e emite o certificado tipicamente em 5 a 10 dias úteis. O documento fica disponível na ADENE e é válido por 10 anos para habitação, podendo ser partilhado digitalmente com compradores ou arrendatários.',
    },
    {
      q: 'O IVA a 6% aplica-se a todas as obras de eficiência energética?',
      a: 'Aplica-se às obras em imóveis com mais de 30 anos ou localizados em ARU, incluindo instalação de painéis solares, bombas de calor e isolamento, nos termos do regime jurídico aplicável. Imóveis fora destas condições ficam sujeitos à taxa normal de 23%.',
    },
    {
      q: 'A melhoria de classe energética valoriza o imóvel em Lisboa?',
      a: 'Sim. Análises de transações em Lisboa entre 2023 e 2025 indicam um prémio de 6–12% no valor de venda para imóveis em classe B face a equivalentes em classe D na mesma freguesia, com diferencial superior em Cascais e no eixo Estoril–Parede.',
    },
    {
      q: 'É possível atingir classe B em apartamentos em edifícios de betão armado dos anos 1970?',
      a: 'Sim, mas exige intervenção combinada: isolamento de cobertura e fachada, substituição de caixilharia e modernização dos sistemas AQS e climatização. A classe B é acessível na maioria destes edifícios; a classe A exige adicionalmente produção renovável in situ.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não substitui aconselhamento técnico, fiscal ou energético personalizado. Valores de custo, poupança e apoios são estimativas indicativas referentes a 2026 e variam consoante o imóvel, município e programa em vigor. Consulte um perito SCE registado na ADENE e profissionais qualificados antes de decisões concretas.',
};
