import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'irs-categoria-f-vs-actividade-empresarial-quando-migrar',
  title: 'IRS Categoria F vs actividade empresarial: quando migrar em Portugal',
  description:
    'Rendimentos de arrendamento em Categoria F ou abertura de actividade empresarial? Saiba quando vale a pena migrar para NIF independente e o que muda na carga fiscal em 2026.',
  category: 'Investimento',
  readTime: '7 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-28',
  updated_at: '2026-04-28',
  excerpt:
    'A diferença entre declarar rendas em Categoria F e abrir actividade como empresário em nome individual pode valer vários milhares de euros por ano em sede de IRS.',
  image: 'https://images.unsplash.com/photo-1623838912579-ec42e9156ede${UNSPLASH_PARAMS}',
  tags: [
    'IRS categoria F arrendamento Portugal',
    'actividade empresarial NIF independente imóveis',
    'tributação rendas 2026 Portugal',
    'regime simplificado rendimentos prediais',
    'quando migrar categoria F para categoria B imóveis',
  ],
  tldr: [
    'Rendimentos de arrendamento até ~7 500 € anuais raramente justificam abrir actividade — a Categoria F cobra 25% sobre rendimento líquido sem obrigações contabilísticas.',
    'A partir de rendas brutas anuais superiores a 15 000–20 000 €, a Categoria B (regime simplificado) pode reduzir a carga fiscal para 15% sobre 35% do rendimento bruto, equivalente a ~5,25% efectivo.',
    'A abertura de actividade obriga a emissão de recibos verdes, pagamentos por conta e, acima de 200 000 €, contabilidade organizada — custos que devem entrar no cálculo.',
    'A Autoridade Tributária e Aduaneira pode requalificar rendas de Categoria F para Categoria B se a actividade tiver carácter empresarial — ignorar este risco tem consequências fiscais relevantes.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-28',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'A escolha entre declarar rendimentos prediais em Categoria F e abrir actividade empresarial em Categoria B não é apenas burocrática — é uma decisão com impacto directo na taxa efectiva de IRS, nas obrigações declarativas e no planeamento de saída do investimento. Este artigo mapeia os cenários em que a migração para NIF independente compensa, e aqueles em que não compensa.',
    },
    {
      type: 'paragraph',
      content:
        'Em Portugal, a tributação de rendimentos de arrendamento pode seguir dois caminhos distintos no IRS: a Categoria F, destinada a rendimentos prediais, e a Categoria B, que abrange rendimentos empresariais e profissionais. A opção por cada regime tem critérios legais e consequências fiscais muito diferentes, e a decisão deve assentar em números concretos, não em percepções.',
    },
    {
      type: 'heading2',
      content: 'O que é a Categoria F e como funciona a tributação em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'A Categoria F abrange rendimentos de arrendamento de imóveis — habitacionais, comerciais ou mistos — obtidos por particulares sem actividade empresarial registada. Em 2026, estes rendimentos estão sujeitos a uma taxa autónoma de 25%, aplicada ao rendimento líquido após dedução das despesas previstas no artigo 41.º do Código do IRS.',
    },
    {
      type: 'list',
      content: [
        'Taxa de retenção na fonte de 25% nas rendas pagas por entidades (empresas), aplicável sobre o valor bruto.',
        'Despesas dedutíveis: IMI, obras de conservação e manutenção, seguros de incêndio, quotas de condomínio e amortizações de capital de empréstimos em certos contratos.',
        'Opção de englobamento: o proprietário pode escolher englobar os rendimentos de Categoria F na taxa geral de IRS, o que pode ser vantajoso se o rendimento global for baixo, mas penalizador acima de ~28 500 €.',
        'Sem obrigação de emissão de recibo verde nem de pagamentos por conta.',
        'Declaração obrigatória no Anexo F da Declaração Modelo 3.',
      ],
    },
    {
      type: 'heading2',
      content: 'Quando é que a Categoria B se aplica a rendimentos de arrendamento?',
    },
    {
      type: 'paragraph',
      content:
        'A Categoria B aplica-se quando o arrendamento assume carácter empresarial — isto é, quando existe uma actividade organizada de prestação de serviços de alojamento ou de gestão de imóveis, com abertura de actividade na Autoridade Tributária e Aduaneira (AT). O caso mais frequente é o alojamento local, mas também inclui situações de arrendamento em que o volume e organização da actividade revelam natureza empresarial.',
    },
    {
      type: 'paragraph',
      content:
        'No regime simplificado de Categoria B, o coeficiente aplicável a rendimentos de arrendamento de imóveis é de 0,35 — ou seja, apenas 35% do rendimento bruto é considerado rendimento tributável. Sobre esse montante aplica-se a taxa de IRS do escalão correspondente ou, para alojamento local fora de zonas de contenção, pode aplicar-se taxa autónoma de 25%.',
    },
    {
      type: 'table',
      content: {
        headers: ['Critério', 'Categoria F', 'Categoria B (Regime Simplificado)'],
        rows: [
          ['Base tributável', 'Rendimento bruto menos despesas reais elegíveis', '35% do rendimento bruto (coeficiente 0,35)'],
          ['Taxa aplicável', '25% autónoma (ou englobamento)', 'Taxa progressiva do escalão sobre 35% do bruto'],
          ['Taxa efectiva aproximada (rendimento bruto)', '~15–22% dependendo de despesas', '~5–9% a taxas médias de IRS'],
          ['Obrigações declarativas', 'Anexo F — sem recibos verdes', 'Recibos verdes, Anexo B, pagamentos por conta'],
          ['Contabilidade organizada', 'Não obrigatória', 'Obrigatória acima de 200 000 € de volume de negócios'],
          ['Contribuições à Segurança Social', 'Não aplicável', 'Aplicável após primeiro ano de actividade'],
        ],
      },
    },
    {
      type: 'heading2',
      content: 'A partir de que montante de rendas vale a pena abrir actividade?',
    },
    {
      type: 'paragraph',
      content:
        'A resposta depende das despesas reais do imóvel, do rendimento colectável global do contribuinte e do custo das obrigações da Categoria B. Como referência de cálculo, considere um proprietário com rendas brutas anuais de 24 000 € e despesas elegíveis (IMI, condomínio, obras) de 3 000 €.',
    },
    {
      type: 'list',
      content: [
        'Categoria F: base tributável = 21 000 €; IRS a 25% = 5 250 €.',
        'Categoria B (regime simplificado): base tributável = 35% × 24 000 € = 8 400 €; IRS a taxa do escalão 3 (37%) = 3 108 €.',
        'Diferença bruta: poupança de ~2 142 € por ano — mas há que deduzir contribuições à Segurança Social (mínimo mensal variável) e custos de contabilista (~600–1 200 €/ano).',
        'O ponto de equilíbrio real situa-se, para a maioria dos perfis, entre 15 000 € e 20 000 € de renda bruta anual, dependendo do escalão de IRS do contribuinte.',
        'Para rendas abaixo de 7 500 € brutos anuais, a Categoria F é quase sempre mais eficiente após considerar os encargos da actividade.',
      ],
    },
    {
      type: 'heading3',
      content: 'Contribuições à Segurança Social: o custo frequentemente esquecido',
    },
    {
      type: 'paragraph',
      content:
        'A abertura de actividade em Categoria B implica inscrição como trabalhador independente na Segurança Social após o primeiro ano completo de actividade. A taxa contributiva é de 21,4% sobre a base de incidência (70% dos rendimentos brutos trimestrais). Para 24 000 € anuais de rendas, isso representa ~3 590 € adicionais por ano — valor que frequentemente reverte a vantagem fiscal para montantes moderados.',
    },
    {
      type: 'heading2',
      content: 'Que riscos tem permanecer em Categoria F quando a actividade é empresarial?',
    },
    {
      type: 'paragraph',
      content:
        'A Autoridade Tributária e Aduaneira tem competência para requalificar rendimentos declarados em Categoria F para Categoria B quando a actividade revela organização empresarial — nomeadamente no alojamento local com múltiplos alojamentos, serviços de limpeza e recepção de hóspedes, ou arrendamento de fracções com intermediação activa. A requalificação implica liquidações adicionais com juros compensatórios à taxa de 4% ao ano e, em casos de dolo, coimas.',
    },
    {
      type: 'quote',
      content:
        'Nos processos de due diligence que acompanhamos, detectamos com regularidade proprietários com cinco ou mais fracções arrendadas a declarar exclusivamente em Categoria F. A partir de três imóveis com gestão activa, a AT tende a presumir actividade empresarial — e a exposição fiscal retroactiva pode superar facilmente 10 000 €.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de portefólio 2024–2025',
      },
    },
    {
      type: 'heading2',
      content: 'Alojamento local: as regras específicas em Lisboa e Porto',
    },
    {
      type: 'paragraph',
      content:
        'Para alojamento local, o enquadramento fiscal é obrigatoriamente Categoria B desde a abertura do registo. Em Lisboa, nas zonas de contenção delimitadas pela Câmara Municipal de Lisboa (que incluem freguesias como Santa Maria Maior, Misericórdia e Santo António), a taxa de IRS sobre os rendimentos de alojamento local é de 35% no regime simplificado, superior à taxa geral de 25% aplicável fora dessas zonas.',
    },
    {
      type: 'list',
      content: [
        'Fora de zonas de contenção: coeficiente 0,35 com taxa de 25% sobre a base tributável — taxa efectiva de ~8,75% sobre o bruto.',
        'Dentro de zonas de contenção (ex.: Misericórdia, Santa Maria Maior em Lisboa): taxa de 35% sobre a base tributável, elevando a carga efectiva para ~12,25% sobre o bruto.',
        'No Porto, a Câmara Municipal do Porto e a Junta de Freguesia do Bonfim e de Cedofeita podem ter zonas com restrições específicas que afectam a viabilidade operacional.',
        'A Lei n.º 56/2023 (Mais Habitação) introduziu alterações relevantes ao regime de alojamento local, incluindo a possibilidade de municípios suspenderem novos registos.',
        'O registo de alojamento local está sujeito a comunicação prévia na plataforma do Registo Nacional de Alojamento Local (RNAL), gerido pelo Turismo de Portugal.',
      ],
    },
    {
      type: 'heading2',
      content: 'Como se processa a migração de Categoria F para actividade empresarial?',
    },
    {
      type: 'paragraph',
      content:
        'A migração não é automática e exige um conjunto de passos formais junto da Autoridade Tributária e Aduaneira. O processo deve ser planeado para o início do ano fiscal, dado que a Categoria B no regime simplificado produz efeitos a partir do mês de início de actividade, e os pagamentos por conta são exigíveis a partir do segundo ano.',
    },
    {
      type: 'list',
      content: [
        '1.º — Declaração de início de actividade no Portal das Finanças (Modelo 1 de IRS ou via balcão da AT), indicando o CAE adequado (ex.: 68200 para arrendamento de imóveis).',
        '2.º — Escolha do regime fiscal: regime simplificado (até 200 000 € de volume de negócios) ou contabilidade organizada acima desse limiar.',
        '3.º — Emissão de recibos verdes a partir do primeiro pagamento de renda após início de actividade.',
        '4.º — Inscrição na Segurança Social como trabalhador independente — o prazo é de 20 dias a contar do início de actividade.',
        '5.º — Equacionar o apoio de um contabilista certificado (inscrito na Ordem dos Contabilistas Certificados) para gestão dos pagamentos por conta e declaração Modelo 3 Anexo B.',
      ],
    },
    {
      type: 'heading2',
      content: 'Vale a pena migrar para Categoria B se tiver apenas um imóvel arrendado?',
    },
    {
      type: 'paragraph',
      content:
        'Para a maioria dos proprietários com um único imóvel arrendado a preços de mercado em Lisboa ou Porto — rendas brutas entre 900 € e 1 600 €/mês, ou seja, 10 800–19 200 €/ano — a resposta depende do escalão de IRS. Com rendimentos globais acima de 36 757 € anuais (escalão de 43,5% em 2026), a Categoria B pode gerar poupança líquida mesmo com um imóvel, desde que a renda supere ~13 000 € brutos/ano.',
    },
    {
      type: 'paragraph',
      content:
        'Abaixo desse limiar de rendimento global, a taxa de 25% da Categoria F tende a ser mais favorável do que aplicar a taxa do escalão sobre 35% do rendimento bruto. A simulação individual no simulador da AT, antes de qualquer decisão, é o passo mínimo obrigatório.',
    },
    {
      type: 'callout',
      content:
        'A decisão entre Categoria F e Categoria B não tem resposta universal. Depende do volume de rendas, do escalão de IRS, das despesas elegíveis e dos encargos das obrigações da actividade. Para portefólios com três ou mais imóveis, o planeamento fiscal com contabilista certificado não é opcional — é parte do custo de gestão do investimento.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para proprietários e investidores',
    },
    {
      type: 'paragraph',
      content:
        'Se gere um portefólio de imóveis arrendados em Lisboa, Porto ou Cascais e pretende avaliar o enquadramento fiscal mais eficiente para a sua situação concreta, a nossa equipa, descrita em <a href="/servicos">serviços</a>, pode apoiar na análise de viabilidade antes de qualquer mudança de regime. Consulte também os nossos casos em <a href="/portfolio">portefólio</a> e o artigo <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">como investir em imóveis em Portugal em 2026</a> para o contexto mais amplo de rendibilidade. Para receber análises futuras sobre fiscalidade imobiliária, subscreva a newsletter da HABTA.',
    },
  ],
  faq: [
    {
      q: 'Qual a taxa de IRS sobre rendas em Categoria F em 2026?',
      a: 'A taxa autónoma da Categoria F é de 25% sobre o rendimento líquido (rendimento bruto menos despesas elegíveis nos termos do artigo 41.º do Código do IRS). O contribuinte pode optar pelo englobamento se tal for mais favorável.',
    },
    {
      q: 'Quando é obrigatório declarar rendas em Categoria B?',
      a: 'Sempre que a actividade de arrendamento revista carácter empresarial organizado, nomeadamente no alojamento local. A AT pode requalificar rendas de Categoria F para Categoria B quando deteta indícios de actividade empresarial, com liquidações adicionais e juros compensatórios.',
    },
    {
      q: 'O regime simplificado de Categoria B aplica-se sempre ao arrendamento?',
      a: 'Aplica-se até 200 000 € de volume de negócios anual. Acima desse limiar, é obrigatória a contabilidade organizada. O coeficiente aplicável a rendimentos de arrendamento é 0,35, o que significa que apenas 35% do rendimento bruto é tributável.',
    },
    {
      q: 'Quais os custos adicionais de estar em Categoria B face à Categoria F?',
      a: 'Contribuições à Segurança Social (21,4% sobre 70% do rendimento trimestral), contabilista certificado (~600–1 200 €/ano) e emissão de recibos verdes. Estes encargos devem ser subtraídos à poupança fiscal antes de decidir migrar.',
    },
    {
      q: 'Como simular a diferença fiscal entre Categoria F e Categoria B?',
      a: 'O simulador de IRS disponível no Portal das Finanças (ePortal da Autoridade Tributária e Aduaneira) permite calcular o impacto de cada regime. Para simulações com múltiplos imóveis ou rendimentos mistos, recomenda-se apoio de contabilista certificado.',
    },
    {
      q: 'A migração para Categoria B afecta a tributação na venda do imóvel?',
      a: 'Sim. Imóveis afectos a actividade empresarial estão sujeitos a regras de mais-valias distintas das da Categoria G — incluindo possível tributação de depreciações acumuladas. Este impacto deve ser avaliado antes de qualquer alteração de regime.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. As taxas, coeficientes e limites referenciados reportam-se ao quadro legal em vigor em Portugal em abril de 2026 e podem ser alterados por legislação superveniente. Consulte um contabilista certificado ou advogado fiscalista antes de alterar o regime de tributação dos seus rendimentos prediais.',
};
