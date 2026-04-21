import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'como-calcular-o-roi-real-de-um-projeto',
  title: 'Como calcular o ROI real de um projeto de reabilitação em Lisboa',
  description:
    'Um guia metodológico para apurar o retorno efetivo de um projeto de reabilitação urbana em Lisboa — desde a estrutura de custos até à comparação com transações de mercado, passando pelos impostos, prazos e riscos de execução.',
  category: 'Investimento',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-21',
  updated_at: '2026-04-21',
  excerpt:
    'Calcular o ROI de uma reabilitação em Lisboa exige muito mais do que subtrair o custo de compra ao valor de venda — este guia mostra como apurar o retorno real.',
  tags: [
    'ROI imobiliário',
    'reabilitação urbana',
    'investimento em Lisboa',
    'análise financeira',
    'retorno sobre investimento',
  ],
  contentBlocks: [
    {
      type: 'callout',
      content:
        'O ROI de um projeto de reabilitação raramente é o número que aparece numa folha de cálculo apressada. Entre a aquisição e a saída existem dezenas de variáveis — fiscais, técnicas, temporais — que erodem ou ampliam a margem. Na HABTA, o apuramento do retorno real é o primeiro exercício que fazemos antes de qualquer decisão de investimento.',
    },
    {
      type: 'paragraph',
      content:
        'A fórmula base do ROI — lucro líquido dividido pelo capital investido — é simples. A dificuldade está em definir com rigor o que entra em cada parcela. Nos projetos de reabilitação em Lisboa, a maioria dos erros de estimativa acontece por omissão: custos que não foram mapeados, prazos que não foram respeitados e saídas que foram valorizadas de forma otimista.',
    },
    {
      type: 'heading2',
      content: 'A estrutura completa de custos de entrada',
    },
    {
      type: 'paragraph',
      content:
        'O preço de aquisição é apenas o ponto de partida. Para apurar o custo total de entrada num projeto de reabilitação, é necessário somar todos os encargos associados à compra e ao arranque da operação.',
    },
    {
      type: 'list',
      content: [
        'Preço de aquisição do imóvel.',
        'IMT — Imposto Municipal sobre as Transmissões Onerosas, calculado sobre o valor de aquisição ou sobre o valor patrimonial tributário, consoante o que for superior.',
        'Imposto de Selo sobre a transmissão e, se houver financiamento, sobre o valor do crédito.',
        'Honorários de notário e registo predial.',
        'Custos de due diligence: peritagem técnica, consulta jurídica, análise urbanística.',
        'Eventuais rendas não recebidas ou encargos de posse durante a fase de licenciamento.',
      ],
    },
    {
      type: 'heading2',
      content: 'Os custos de obra e o erro da estimativa única',
    },
    {
      type: 'paragraph',
      content:
        'Os custos de construção são a componente que mais frequentemente distorce o ROI esperado. Uma orçamentação rigorosa distingue três camadas: o custo base de construção por metro quadrado de área bruta de construção, os trabalhos imprevistos inerentes ao edificado antigo e os custos indirectos de gestão e fiscalização.',
    },
    {
      type: 'paragraph',
      content:
        'No edificado pré-1970 em Lisboa — pombalino, gaioleiro ou de placa — a probabilidade de encontrar patologias não detectadas em fase de proposta é elevada. Na nossa metodologia, nunca modelamos um projeto de reabilitação profunda sem incluir uma reserva técnica para imprevistos de obra. Essa reserva não é um buffer especulativo: é um dado estrutural da análise.',
    },
    {
      type: 'heading3',
      content: 'Custos indirectos de obra frequentemente omitidos',
    },
    {
      type: 'list',
      content: [
        'Honorários de arquitecto e engenheiros de especialidades (estruturas, MEP, térmica, acústica).',
        'Taxas e compensações urbanísticas devidas ao município.',
        'Custo de ligações às redes públicas quando há necessidade de reforço ou nova instalação.',
        'Fiscalização independente de obra — distinta da direcção de obra do empreiteiro.',
        'Seguros de construção e responsabilidade civil durante a empreitada.',
        'Custos de certificação: certificado energético, TRIU ou outros exigíveis para a escritura de revenda.',
      ],
    },
    {
      type: 'heading2',
      content: 'O custo do tempo: prazo como variável financeira',
    },
    {
      type: 'paragraph',
      content:
        'Um projeto que demora mais dois meses do que o previsto não perde apenas dois meses. Perde o rendimento que o capital investido poderia gerar nesse período, acumula encargos financeiros se existir financiamento, e pode colidir com janelas de mercado mais favoráveis. O prazo é uma variável financeira, não apenas operacional.',
    },
    {
      type: 'paragraph',
      content:
        'Para incorporar o custo do tempo no ROI, é útil calcular o retorno em termos anualizados — o chamado ROI anualizado ou taxa interna de rentabilidade (TIR). Um retorno absoluto de vinte por cento num projecto de dezoito meses é materialmente diferente do mesmo retorno num projecto de trinta e seis meses. A TIR captura essa diferença; o ROI simples, não.',
    },
    {
      type: 'heading2',
      content: 'A saída: como estimar o valor de venda com rigor',
    },
    {
      type: 'paragraph',
      content:
        'O valor de saída deve ser sustentado por transações comparáveis concluídas — não por valores de oferta, que tendem a ser superiores ao preço efectivo de venda. A análise de comparáveis deve controlar tipologia, estado pós-reabilitação, andar, orientação, existência de varanda ou terraço e lugar de garagem.',
    },
    {
      type: 'paragraph',
      content:
        'Em Lisboa, a dispersão de valores dentro do mesmo bairro pode ser significativa. Um apartamento no piso recuado com terraço privado e vista desimpedida pode transaccionar muito acima da média do mesmo edifício. Modelar todos os fogos de um projecto com o mesmo valor por metro quadrado é um erro que distorce a rentabilidade esperada, tanto para cima como para baixo.',
    },
    {
      type: 'heading3',
      content: 'Ajustamentos conservadores ao valor de saída',
    },
    {
      type: 'list',
      content: [
        'Aplicar um desconto de negociação sobre o preço de oferta estimado.',
        'Estimar o tempo médio de absorção no segmento e incluir os encargos de manutenção durante esse período.',
        'Considerar comissões de mediação imobiliária se a comercialização for feita por terceiros.',
        'Reflectir IRS sobre mais-valias — ou IRC se o investimento for feito através de sociedade — no lucro líquido.',
        'Incluir o Imposto de Selo sobre escrituras de venda no custo de saída.',
      ],
    },
    {
      type: 'heading2',
      content: 'Benefícios fiscais que podem melhorar o retorno',
    },
    {
      type: 'paragraph',
      content:
        'Os projectos de reabilitação urbana qualificada em Áreas de Reabilitação Urbana (ARU) podem beneficiar de IVA reduzido nas obras, isenções temporárias de IMI e, em determinadas condições, de taxas de IMT reduzidas. Estes benefícios não são automáticos — dependem do cumprimento de critérios técnicos e urbanísticos definidos pelo município — mas, quando aplicáveis, têm impacto directo e mensurável no ROI.',
    },
    {
      type: 'paragraph',
      content:
        'A integração correcta destes benefícios na análise financeira requer confirmação prévia junto da câmara municipal e de um contabilista ou advogado fiscal familiarizado com o regime. Incluir benefícios não confirmados como premissa de base é um erro comum que fragiliza toda a projecção.',
    },
    {
      type: 'heading2',
      content: 'Da folha de cálculo à decisão de investimento',
    },
    {
      type: 'paragraph',
      content:
        'Uma análise de ROI robusta não produz um número — produz um intervalo. O cenário base, o cenário conservador e o cenário de stress permitem perceber qual é a margem de segurança do projecto e em que condições o investimento deixa de fazer sentido. Essa análise de sensibilidade é o que transforma uma projecção em suporte real de decisão.',
    },
    {
      type: 'callout',
      content:
        'Na HABTA, nenhum projecto é apresentado a parceiros de investimento sem uma análise financeira com três cenários, cronograma detalhado e mapa de riscos. Acreditamos que a transparência metodológica é a base de qualquer relação de confiança com quem nos confia capital — e que um ROI bem calculado é sempre melhor do que um ROI optimista que não se concretiza.',
    },
  ],
};
