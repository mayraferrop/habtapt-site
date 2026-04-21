import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'cinco-pilares-avaliar-reabilitacao-urbana',
  title: 'Cinco pilares para avaliar um projeto de reabilitação urbana antes de investir',
  description:
    'Um guia prático com os critérios essenciais que distinguem um investimento sólido em reabilitação de um risco desnecessário — localização, estado estrutural, enquadramento legal, potencial de valorização e execução.',
  category: 'Investimento',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-21',
  updated_at: '2026-04-21',
  excerpt:
    'Antes de assinar uma promessa de compra, estes cinco pilares ajudam a separar uma oportunidade de reabilitação de um investimento problemático em Portugal.',
  image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?w=1600&q=80&auto=format&fit=crop',
  tags: [
    'reabilitação urbana',
    'investimento imobiliário',
    'due diligence',
    'Portugal',
    'valorização',
  ],
  contentBlocks: [
    {
      type: 'callout',
      content:
        'A reabilitação urbana tornou-se uma das principais vias de criação de valor no mercado imobiliário português. Mas nem todo o edifício antigo é uma oportunidade — e nem toda a oportunidade merece capital. Este artigo apresenta os cinco pilares que usamos na HABTA para avaliar um projeto antes de avançar.',
    },
    {
      type: 'paragraph',
      content:
        'Um investimento em reabilitação combina três competências distintas: análise imobiliária, gestão de obra e enquadramento legal. Falhar em qualquer uma delas transforma margem esperada em custo não planeado. Os cinco pilares abaixo estruturam essa avaliação de forma a reduzir surpresas e a proteger o retorno.',
    },
    {
      type: 'heading2',
      content: '1. Localização — além do bairro, a microlocalização',
    },
    {
      type: 'paragraph',
      content:
        'Dizer que um imóvel está em Lisboa ou no Porto diz pouco. O que importa é a microlocalização: a rua específica, a exposição solar, o perfil de quem circula a pé, os equipamentos a 5 minutos e o acesso a transportes públicos. Dois edifícios a 200 metros um do outro podem ter valorizações muito diferentes consoante estejam numa rua residencial tranquila ou num eixo de restauração.',
    },
    {
      type: 'list',
      content: [
        'Exposição solar dominante (nascente, sul ou poente) e implicações no conforto térmico.',
        'Cotas, vistas desobstruídas e ausência de construção em altura que possa bloquear luz no futuro.',
        'Densidade de serviços de apoio à residência: mercearias, farmácias, escolas, saúde.',
        'Distância a pé a estações de metro, comboio e paragens de autocarro com frequência útil.',
        'Perfil acústico em hora de ponta — não apenas ao fim de semana.',
      ],
    },
    {
      type: 'heading2',
      content: '2. Estado estrutural e patologias ocultas',
    },
    {
      type: 'paragraph',
      content:
        'Os custos que rebentam orçamentos quase nunca estão à vista. Pavimentos em madeira com insetos xilófagos, cobertura sem isolamento, redes prediais de água em chumbo, instalações elétricas sem ligação à terra ou paredes exteriores com humidade ascensional são patologias que só uma inspeção técnica séria revela.',
    },
    {
      type: 'paragraph',
      content:
        'Na fase de due diligence, uma peritagem independente feita por engenheiro civil com experiência em edificado antigo é um investimento pequeno face ao risco que mitiga. O relatório deve quantificar o estado de fundações, estrutura, cobertura, fachadas, pavimentos, caixilharias e redes.',
    },
    {
      type: 'heading3',
      content: 'Sinais de alerta em visitas',
    },
    {
      type: 'list',
      content: [
        'Fissuras diagonais nas paredes mestras, sobretudo junto a portas e janelas.',
        'Sinais de humidade na base das paredes interiores.',
        'Soalhos que cedem ou rangem de forma generalizada.',
        'Tetos com manchas escuras ou descamação em zonas de caleiras.',
        'Ausência de quadro elétrico moderno com diferencial.',
      ],
    },
    {
      type: 'heading2',
      content: '3. Enquadramento legal e urbanístico',
    },
    {
      type: 'paragraph',
      content:
        'Em Portugal, o regime jurídico da reabilitação urbana oferece incentivos relevantes — IVA reduzido em obras, isenções temporárias de IMI e IMT em Áreas de Reabilitação Urbana (ARU), simplificação de licenciamento em certos casos — mas cada município tem o seu plano diretor, regulamento de urbanização e delimitação de ARU. O enquadramento muda conforme a parcela.',
    },
    {
      type: 'list',
      content: [
        'Confirmar se o imóvel está dentro de ARU e se cumpre critérios de reabilitação qualificada.',
        'Verificar alinhamento com o PDM e com eventuais planos de pormenor aplicáveis.',
        'Consultar o arquivo municipal para o processo camarário do edifício — desvios podem indicar obras não licenciadas.',
        'Avaliar restrições patrimoniais (classificação, zona histórica, áreas protegidas).',
        'Antecipar prazos reais de licenciamento no município em questão.',
      ],
    },
    {
      type: 'heading2',
      content: '4. Potencial de valorização após intervenção',
    },
    {
      type: 'paragraph',
      content:
        'Comprar bem é importante. Vender bem é o que determina a margem. O potencial de valorização calcula-se comparando o preço alvo por metro quadrado após reabilitação com transações recentes de unidades equivalentes no mesmo microperímetro. "Equivalente" significa tipologia, estado final, orientação e andar — não apenas rua.',
    },
    {
      type: 'paragraph',
      content:
        'Uma boa análise compara pelo menos seis transações concluídas nos últimos doze meses, ajusta por diferenças objetivas (área útil, varanda, lugar de garagem) e aplica uma margem conservadora para absorver oscilações de mercado durante o prazo de obra.',
    },
    {
      type: 'heading2',
      content: '5. Execução — a equipa e o cronograma',
    },
    {
      type: 'paragraph',
      content:
        'Mesmo um imóvel com os quatro primeiros pilares alinhados pode falhar na execução. A seleção do empreiteiro, a disciplina do cronograma e a gestão de fornecedores são o que diferencia um projeto que entrega no prazo de um projeto que consome margem em meses de atraso.',
    },
    {
      type: 'list',
      content: [
        'Empreiteiro com alvará adequado e histórico verificável em edificado antigo.',
        'Contrato por preço global com mapa de trabalhos detalhado, não por administração direta sem teto.',
        'Cronograma com marcos de pagamento alinhados a entregas, não a calendário cego.',
        'Plano de fiscalização independente, com relatórios de obra semanais.',
        'Orçamento com reserva técnica de pelo menos 10% para imprevistos em edifícios pré-1970.',
      ],
    },
    {
      type: 'callout',
      content:
        'Na HABTA, um projeto só avança quando os cinco pilares estão validados. Esta disciplina custa-nos oportunidades — recusamos cerca de três em cada quatro imóveis que analisamos — mas é o que protege o capital dos nossos parceiros e o que entrega os retornos que nos comprometemos a gerar.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se está a avaliar um projeto de reabilitação em Portugal e quer validar estes cinco pilares num caso concreto, a nossa equipa está disponível para uma análise inicial. Pode também subscrever a nossa newsletter para receber análises futuras sobre o mercado e oportunidades selecionadas.',
    },
  ],
};
