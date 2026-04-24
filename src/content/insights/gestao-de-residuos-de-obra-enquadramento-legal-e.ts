import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Sustentabilidade'];

export const article: InsightArticle = {
  id: 'gestao-de-residuos-de-obra-enquadramento-legal-e',
  title: 'Gestão de resíduos de obra em Portugal: enquadramento legal e custos 2026',
  description:
    'Obrigações legais, custos reais e boas práticas na gestão de resíduos de construção e demolição em Portugal — o que cada promotor e proprietário precisa de saber antes de avançar.',
  category: 'Sustentabilidade',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa Técnica',
  date: '2026-04-24',
  updated_at: '2026-04-24',
  excerpt:
    'A gestão de resíduos de construção e demolição em Portugal é regulada por legislação específica, com custos que variam entre 8 € e 35 € por tonelada consoante o tipo de resíduo e o operador licenciado.',
  image: 'https://images.unsplash.com/photo-1556983852-43bf21186b2a${UNSPLASH_PARAMS}',
  tags: [
    'resíduos de construção e demolição Portugal',
    'gestão RCD reabilitação urbana',
    'custos resíduos obra Lisboa',
    'legislação resíduos obra 2026',
    'plano de gestão de resíduos obra',
  ],
  tldr: [
    'Em Portugal, os resíduos de construção e demolição (RCD) são regulados pelo DL n.º 46/2008 e alterações subsequentes, obrigando a Plano de Gestão de Resíduos em obras com mais de 1000 m² ou 500 m² de demolição.',
    'Os custos de deposição e transporte de RCD variam entre 8 € e 35 € por tonelada, dependendo do tipo de resíduo, do operador e da distância ao aterro ou à instalação de triagem licenciada.',
    'A triagem seletiva em obra pode reduzir o custo total de gestão de resíduos em 20 a 30%, valorizando betão, metais e madeira através de operadores devidamente autorizados pela APA.',
    'O incumprimento das obrigações legais em matéria de RCD sujeita promotores e empreiteiros a coimas que podem atingir 44 891 € para pessoas coletivas, nos termos do regime contraordenacional ambiental.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-24',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'Nos projetos de reabilitação urbana em Lisboa e no Porto, os resíduos de construção e demolição representam entre 2% e 5% do custo total de obra — uma rubrica subestimada no orçamento inicial e uma fonte frequente de incumprimento legal. Conhecer o enquadramento antes de arrancar é tão importante quanto conhecer o custo de materiais.',
    },
    {
      type: 'paragraph',
      content:
        'A gestão de resíduos de construção e demolição (RCD) em Portugal está vinculada a um quadro legal preciso, com obrigações que recaem sobre o dono de obra, o empreiteiro e os operadores de gestão de resíduos. Desconhecer este quadro traduz-se em custos imprevistos, atrasos no encerramento de processos camarários e exposição a coimas significativas.',
    },
    {
      type: 'heading2',
      content: 'Que legislação regula os resíduos de obra em Portugal?',
    },
    {
      type: 'paragraph',
      content:
        'O regime jurídico aplicável aos RCD em Portugal assenta no Decreto-Lei n.º 46/2008, de 12 de março, que estabelece o regime das operações de gestão de resíduos resultantes de obras de construção e demolição. Este diploma foi objeto de alterações subsequentes e deve ser lido em articulação com o Decreto-Lei n.º 10/2010, o Regime Geral de Gestão de Resíduos (DL n.º 102-D/2020) e a legislação da Agência Portuguesa do Ambiente (APA).',
    },
    {
      type: 'list',
      content: [
        'DL n.º 46/2008: regula especificamente os RCD — triagem, transporte, valorização e eliminação.',
        'DL n.º 102-D/2020: regime geral de gestão de resíduos, transposição da Diretiva 2008/98/CE.',
        'Portaria n.º 417/2008: define os modelos de guias de acompanhamento de RCD.',
        'RJUE (DL n.º 555/99 e alterações): articula o processo de licenciamento com a gestão ambiental da obra.',
        'Lista Europeia de Resíduos (LER): classifica cada fluxo de resíduo por código — determinante para o encaminhamento legal.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quando é obrigatório o Plano de Gestão de Resíduos?',
    },
    {
      type: 'paragraph',
      content:
        'O Plano de Gestão de Resíduos de Construção e Demolição (PGRCD) é obrigatório em obras cujo valor total supere os 35 000 € ou que envolvam demolição de edifícios com área superior a 500 m². Nas intervenções abaixo destes limiares, o promotor continua obrigado a assegurar a triagem e o encaminhamento correto dos resíduos, mas sem o documento formal.',
    },
    {
      type: 'paragraph',
      content:
        'O PGRCD deve ser entregue à câmara municipal juntamente com o pedido de licença ou comunicação prévia. O seu conteúdo mínimo inclui: identificação e estimativa de quantidades por tipologia de resíduo, metodologia de triagem em obra, lista de operadores licenciados, e estimativa de custos. Em Lisboa, a Câmara Municipal exige este documento em formato normalizado como condição de aprovação.',
    },
    {
      type: 'heading3',
      content: 'Conteúdo mínimo do PGRCD segundo o DL n.º 46/2008',
    },
    {
      type: 'list',
      content: [
        'Identificação da obra e do responsável pela gestão de resíduos.',
        'Estimativa de quantidades de RCD por código LER (betão, tijolos, madeira, metais, materiais perigosos).',
        'Metodologia de triagem seletiva a aplicar em estaleiro.',
        'Destino previsto para cada fluxo — valorização, reutilização ou eliminação.',
        'Lista de operadores de gestão de resíduos com licença APA válida.',
        'Estimativa de custo da gestão de resíduos, integrada no orçamento geral de obra.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais são os custos reais da gestão de RCD em obra?',
    },
    {
      type: 'paragraph',
      content:
        'Os custos de gestão de RCD em Portugal compreendem três componentes principais: aluguer de contentores em estaleiro, transporte até à instalação de destino e taxa de deposição ou processamento. Em 2025–2026, os valores de referência no mercado de Lisboa e Porto situam-se nos intervalos indicados na tabela abaixo.',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipologia de resíduo (LER)', 'Custo de deposição (€/ton)', 'Observações'],
        rows: [
          ['Betão, tijolos, azulejos (inertes)', '8 – 15', 'Valorizável como agregado reciclado; custo mais baixo do mercado'],
          ['Madeira (não tratada)', '10 – 18', 'Valorizável energeticamente; custo depende da pureza do fluxo'],
          ['Metais (ferro, alumínio, cobre)', '0 – 5 (ou receita)', 'Operadores pagam pelo material; triagem rigorosa é essencial'],
          ['Misturas de RCD não triados', '22 – 35', 'Penalização por ausência de triagem; encaminhado para aterro'],
          ['Resíduos perigosos (amianto, tintas)', '80 – 250', 'Operadores especializados obrigatórios; transporte com ADR'],
          ['Solos e terras de escavação', '6 – 12', 'Reutilização em obra reduz custo; depende de análise de contaminação'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Uma reabilitação de um edifício gaioleiro em Alfama ou na Misericórdia com 400 m² de área bruta gera tipicamente entre 60 e 120 toneladas de RCD. Com triagem seletiva, o custo total de gestão fica entre 1 200 € e 3 500 €. Sem triagem, o mesmo volume encaminhado como mistura pode custar 2 600 € a 4 200 €.',
    },
    {
      type: 'quote',
      content:
        'Nos projetos que acompanhamos em Lisboa e no Porto, a triagem seletiva em estaleiro reduz consistentemente o custo de gestão de resíduos em 20 a 30%. O investimento num plano bem estruturado antes do início da obra paga-se nas primeiras semanas de estaleiro.',
      source: {
        name: 'Equipa Técnica HABTA',
        role: 'Análise de projetos de reabilitação 2023–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Como se faz a triagem seletiva de resíduos em estaleiro?',
    },
    {
      type: 'paragraph',
      content:
        'A triagem seletiva consiste em separar os resíduos por fluxo no ponto de produção — a obra — antes de os encaminhar para destino. Não requer equipamento sofisticado, mas exige organização do estaleiro, identificação clara dos contentores e disciplina da equipa de trabalho.',
    },
    {
      type: 'list',
      content: [
        'Definir zonas de acumulação distintas para inertes, madeira, metais e resíduos mistos.',
        'Identificar cada contentor com o código LER correspondente e a designação em linguagem corrente.',
        'Nomear um responsável de estaleiro para verificar a triagem diariamente.',
        'Contratar operadores com autorização APA válida e exigir guias de transporte (Portaria n.º 417/2008) para cada carga.',
        'Manter arquivo das guias de acompanhamento durante 5 anos — são o comprovativo legal perante a câmara municipal e a APA.',
        'Fotografar os contentores antes da remoção para documentação do PGRCD.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quais são as consequências do incumprimento legal?',
    },
    {
      type: 'paragraph',
      content:
        'O incumprimento das obrigações previstas no DL n.º 46/2008 e no Regime Geral de Gestão de Resíduos configura contraordenação ambiental. As coimas para pessoas coletivas variam entre 1 500 € e 44 891 € consoante a gravidade da infração — deposição ilegal, ausência de guias de transporte ou entrega de resíduos a operador não licenciado são as infrações mais frequentes em obra.',
    },
    {
      type: 'paragraph',
      content:
        'Para além das coimas, o incumprimento pode bloquear a emissão da autorização de utilização pela câmara municipal, uma vez que o encerramento do processo de licenciamento exige a apresentação do relatório final de gestão de resíduos com as guias de acompanhamento. Em projetos de reabilitação com prazo de entrega contratual, este bloqueio tem custo direto.',
    },
    {
      type: 'heading2',
      content: 'Como identificar um operador de RCD licenciado?',
    },
    {
      type: 'paragraph',
      content:
        'Todos os operadores de gestão de resíduos em Portugal devem estar registados no Sistema de Informação de Licenciamento de Operações de Gestão de Resíduos (SILOGR), gerido pela Agência Portuguesa do Ambiente (APA). A consulta é pública e gratuita em apa.pt. Contratar um operador sem verificar o registo expõe o dono de obra a responsabilidade solidária pelo destino ilegal dos resíduos.',
    },
    {
      type: 'list',
      content: [
        'Verificar o número de licença APA no SILOGR antes de assinar qualquer contrato.',
        'Confirmar que o âmbito da licença abrange os códigos LER dos resíduos a entregar.',
        'Exigir cópia da licença atualizada e do seguro de responsabilidade civil ambiental.',
        'Pedir referências de obras anteriores de dimensão comparável.',
        'Confirmar a localização das instalações de destino — proximidade reduz custos de transporte.',
      ],
    },
    {
      type: 'heading2',
      content: 'Que materiais perigosos são frequentes em edifícios antigos?',
    },
    {
      type: 'paragraph',
      content:
        'Em edificado construído antes de 1990, a probabilidade de encontrar materiais classificados como perigosos é elevada. A sua identificação antes da obra é obrigatória — a intervenção sem diagnóstico prévio expõe trabalhadores e vizinhança a riscos graves e sujeita o promotor a responsabilidade civil e criminal.',
    },
    {
      type: 'list',
      content: [
        'Amianto: frequente em placas de fibrocimento em coberturas e caleiras de edifícios construídos entre 1945 e 1986. Remoção exige operador especializado e notificação à Autoridade para as Condições do Trabalho (ACT).',
        'Tintas com chumbo: comuns em caixilharias e rodapés de edifícios anteriores a 1970. Remoção e deposição exigem operador de resíduos perigosos.',
        'Alcatrão e materiais betuminosos com HAP: em impermeabilizações de coberturas planas pré-1980.',
        'Condensadores com PCB (bifenilos policlorados): em equipamentos elétricos antigos, incluindo transformadores.',
        'Lã de vidro e lã de rocha sem certificação CE: isolamentos de edifícios dos anos 1970–1990 podem conter fibras não classificadas.',
      ],
    },
    {
      type: 'callout',
      content:
        'Na HABTA, qualquer projeto de reabilitação em edifícios anteriores a 1990 inclui uma prospeção de materiais perigosos antes do arranque de obra. O custo desta análise — tipicamente entre 300 € e 800 € — é marginal face ao custo de uma remoção de emergência de amianto a meio do estaleiro, que pode atingir 15 000 € a 40 000 €.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos',
    },
    {
      type: 'paragraph',
      content:
        'Se está a preparar um projeto de reabilitação e precisa de apoio técnico na elaboração do Plano de Gestão de Resíduos, na prospeção de materiais perigosos ou na articulação com operadores licenciados, a nossa equipa está disponível através de <a href="/servicos">serviços</a> ou <a href="/portfolio">portefólio</a>. Para aprofundar o enquadramento legal e financeiro da reabilitação em Portugal, consulte também o <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana 2026</a> e o artigo sobre <a href="/blog/cinco-pilares-avaliar-reabilitacao-urbana">cinco pilares para avaliar um projeto de reabilitação</a>. Pode subscrever a newsletter para receber análises técnicas futuras.',
    },
  ],
  faq: [
    {
      q: 'Quando é obrigatório elaborar um Plano de Gestão de Resíduos de obra?',
      a: 'O PGRCD é obrigatório em obras com valor superior a 35 000 € ou demolições com área acima de 500 m², nos termos do DL n.º 46/2008. Deve ser entregue à câmara municipal com o pedido de licença ou comunicação prévia.',
    },
    {
      q: 'Quanto custa a gestão de resíduos de construção por tonelada em Portugal?',
      a: 'Em 2025–2026, os custos variam entre 8 € e 15 € por tonelada para inertes triados, 22 € a 35 € para misturas não triadas, e 80 € a 250 € para resíduos perigosos como amianto. Triagem seletiva reduz custos em 20 a 30%.',
    },
    {
      q: 'Como verificar se um operador de resíduos está licenciado em Portugal?',
      a: 'Através do SILOGR, sistema público gerido pela Agência Portuguesa do Ambiente disponível em apa.pt. Basta introduzir o nome ou NIF do operador para confirmar a validade e o âmbito da licença.',
    },
    {
      q: 'O que acontece se os resíduos de obra forem depositados ilegalmente?',
      a: 'Configura contraordenação ambiental com coimas até 44 891 € para pessoas coletivas, nos termos do DL n.º 102-D/2020. Pode também bloquear a emissão da autorização de utilização pela câmara municipal.',
    },
    {
      q: 'O amianto é frequente em edifícios antigos em Portugal?',
      a: 'Sim. Edifícios construídos entre 1945 e 1986 frequentemente têm amianto em coberturas de fibrocimento, caixilharias e condutas. A remoção exige operador especializado e notificação à Autoridade para as Condições do Trabalho (ACT).',
    },
    {
      q: 'A triagem de resíduos é obrigatória em pequenas obras de reabilitação?',
      a: 'Sim. O DL n.º 46/2008 exige triagem seletiva em todas as obras, independentemente da dimensão. Obras abaixo dos limiares de PGRCD estão dispensadas do documento formal, mas não das obrigações de encaminhamento correto.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não substitui aconselhamento técnico, jurídico ou ambiental personalizado. Os custos indicados são valores de referência de mercado em 2025–2026 e variam conforme operador, localização e características específicas da obra. A legislação aplicável pode sofrer alterações — verifique sempre a versão em vigor junto da Agência Portuguesa do Ambiente ou de técnico qualificado antes de tomar decisões concretas.',
};
