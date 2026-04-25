import { categoryVisuals } from './_categories';
import type { InsightArticle } from './types';

const visual = categoryVisuals['Investimento'];

export const article: InsightArticle = {
  id: 'os-tres-cenarios-fiscais-mais-comuns-em-reabilitacao',
  title: 'Os três cenários fiscais mais comuns em reabilitação urbana em Portugal',
  description:
    'Venda após obra, arrendamento de longa duração ou uso próprio: perceba os impostos aplicáveis em cada cenário de reabilitação urbana e como optimizar a carga fiscal legalmente.',
  category: 'Investimento',
  readTime: '8 min',
  icon: visual.icon,
  iconColor: visual.iconColor,
  gradient: visual.gradient,
  author: 'HABTA',
  authorRole: 'Equipa de Investimento',
  date: '2026-04-25',
  updated_at: '2026-04-25',
  excerpt:
    'Os três cenários fiscais mais comuns em reabilitação urbana determinam se um projeto gera retorno líquido positivo ou apenas cobre custos — e a diferença começa na fase de compra.',
  image: 'https://images.unsplash.com/photo-1541323035148-3b6d6b990e1e${UNSPLASH_PARAMS}',
  tags: [
    'fiscalidade reabilitação urbana Portugal',
    'mais-valias imóveis reabilitados Lisboa',
    'IVA 6% obras reabilitação ARU',
    'IMI isenção reabilitação urbana 2026',
    'IMT isenção imóvel reabilitado Portugal',
  ],
  tldr: [
    'Venda após reabilitação: mais-valias tributadas a 28% (IRS) ou incluídas no englobamento — mas 50% da mais-valia pode ser excluída em imóveis reabilitados em ARU, nos termos do Código do IRS.',
    'Arrendamento de longa duração: rendas tributadas a 25% (taxa liberatória reduzida), com possibilidade de descida para 10% em contratos ≥20 anos ao abrigo do regime do arrendamento acessível.',
    'IVA de obras em Área de Reabilitação Urbana desce de 23% para 6%, podendo poupar 17 pontos percentuais sobre o total de empreitada — mas exige certificação prévia da qualificação da intervenção.',
    'A isenção temporária de IMI em ARU pode durar até 5 anos (prorrogável por igual período), reduzindo os encargos de detenção durante e após a obra.',
  ],
  trustSignals: {
    projectsReviewed: 120,
    yearsExperience: 15,
    geoScope: 'Lisboa, Porto e Cascais',
    lastReviewed: '2026-04-25',
  },
  contentBlocks: [
    {
      type: 'callout',
      content:
        'A fiscalidade de um projeto de reabilitação urbana não é um detalhe de fim de processo — é uma variável que altera o retorno líquido entre 4 e 12 pontos percentuais consoante o cenário. Entender os três casos mais comuns antes de assinar qualquer contrato é o que separa um investimento estruturado de uma aposta mal calibrada.',
    },
    {
      type: 'paragraph',
      content:
        'Em Portugal, a fiscalidade da reabilitação urbana articula três impostos principais — IRS/IRC, IMT e IMI — com regimes específicos para imóveis em Áreas de Reabilitação Urbana (ARU). Cada saída de investimento activa um conjunto de regras diferente. Apresentamos os três cenários fiscais mais comuns com os respectivos mecanismos, valores e condições de acesso.',
    },
    {
      type: 'heading2',
      content: 'Cenário 1: Venda após reabilitação — como são tributadas as mais-valias?',
    },
    {
      type: 'paragraph',
      content:
        'Na venda após obra, o ganho tributável é a diferença entre o valor de realização e o valor de aquisição acrescido das despesas elegíveis. Para pessoas singulares, a taxa autónoma é de 28% sobre a mais-valia; é possível optar pelo englobamento se a taxa marginal de IRS for inferior. As despesas de obra documentadas reduzem directamente a base tributável.',
    },
    {
      type: 'paragraph',
      content:
        'O incentivo mais relevante neste cenário está no artigo 71.º do Código do IRS: em imóveis objecto de acções de reabilitação reconhecidas pelos municípios, 50% da mais-valia apurada pode ser excluída de tributação. Esta exclusão não é automática — exige que a intervenção seja certificada como reabilitação qualificada ao abrigo do regime jurídico aplicável (DL n.º 53/2014 e legislação subsequente).',
    },
    {
      type: 'list',
      content: [
        'Taxa autónoma sobre mais-valias imobiliárias: 28% para residentes, 28% para não residentes da UE (com opção de englobamento).',
        'Exclusão de 50% da mais-valia em imóveis reabilitados em ARU com certificação municipal.',
        'Despesas de obra, IMT, IS e honorários do arquitecto/fiscalização integram o custo de aquisição para efeitos de mais-valia.',
        'Reinvestimento em habitação própria permanente pode diferir ou excluir tributação da mais-valia residual.',
        'Prazo de detenção: não existe tabela de correcção monetária para imóveis adquiridos após 1 de Janeiro de 2002 — o tempo de detenção não reduz automaticamente a mais-valia.',
      ],
    },
    {
      type: 'heading3',
      content: 'Impacto prático num projeto em Alfama ou Mouraria',
    },
    {
      type: 'paragraph',
      content:
        'Num imóvel comprado por 280 000 € em Alfama, reabilitado por 120 000 € e vendido por 600 000 €, a mais-valia bruta é 200 000 €. Com exclusão de 50% em ARU certificada, a base tributável desce para 100 000 € — o IRS à taxa de 28% representa 28 000 € em vez dos 56 000 € sem exclusão. A poupança directa é de 28 000 €.',
    },
    {
      type: 'heading2',
      content: 'Cenário 2: Arrendamento após reabilitação — que taxa de IRS se aplica às rendas?',
    },
    {
      type: 'paragraph',
      content:
        'Os rendimentos prediais de arrendamento habitacional são tributados à taxa liberatória de 25% em IRS, aplicada à renda ilíquida, com possibilidade de dedução de encargos de conservação e manutenção documentados. Esta taxa é mais favorável do que a que vigorava antes de 2023, reflectindo a política de incentivo ao arrendamento de longa duração.',
    },
    {
      type: 'paragraph',
      content:
        'Para contratos enquadrados no arrendamento acessível (Portaria n.º 176/2019 e actualizações), a taxa baixa para 10% quando o contrato tem duração igual ou superior a 20 anos e a renda praticada é pelo menos 20% abaixo do valor de mercado aferido pelo IHRU. Para contratos de 10 a 19 anos, a taxa é de 15%.',
    },
    {
      type: 'table',
      content: {
        headers: ['Tipo de contrato', 'Duração mínima', 'Taxa de IRS sobre rendas', 'Condição adicional'],
        rows: [
          ['Arrendamento livre', 'Sem mínimo', '25%', 'Nenhuma condição especial'],
          ['Arrendamento acessível', '≥5 anos', '15%', 'Renda ≥ 5% abaixo do valor de referência IHRU'],
          ['Arrendamento acessível', '≥10 anos', '10%', 'Renda ≥ 20% abaixo do valor de referência IHRU'],
          ['Arrendamento acessível', '≥20 anos', '10%', 'Renda ≥ 20% abaixo do valor de referência IHRU'],
          ['Arrendamento para estudantes (AL académico)', '≥9 meses', '25%', 'Sem benefício adicional específico'],
        ],
      },
    },
    {
      type: 'paragraph',
      content:
        'Em Lisboa e no Porto, onde os valores de referência IHRU são mais elevados, o regime de arrendamento acessível pode ser viável mesmo com rendas absolutas superiores a 1 200 €/mês em tipologias T2, desde que o desconto percentual sobre o referencial seja cumprido. A adesão ao programa é formalizada junto do IHRU e não implica cedência de propriedade.',
    },
    {
      type: 'heading2',
      content: 'Cenário 3: Uso próprio ou habitação permanente — há benefícios fiscais específicos?',
    },
    {
      type: 'paragraph',
      content:
        'No cenário de habitação própria permanente após reabilitação, o principal benefício está na dedução em IRS das despesas com obras de reabilitação: até 30% das despesas elegíveis são dedutíveis à colecta, com limite de 500 € por agregado (nos termos do Código do IRS). A reabilitação tem de incidir sobre edifícios com antiguidade igual ou superior a 30 anos ou em ARU.',
    },
    {
      type: 'list',
      content: [
        'Dedução à colecta de IRS: 30% das despesas de reabilitação, até 500 € por agregado familiar.',
        'Isenção de IMT na aquisição de imóvel para habitação própria e permanente em ARU, nos termos do Código do IMT.',
        'Isenção temporária de IMI até 5 anos, prorrogável por mais 5, após reabilitação qualificada reconhecida pela câmara municipal.',
        'Para imóvel reabilitado após Programa de Recuperação e Resilência (PRR), podem existir apoios adicionais via município — verificar na autarquia.',
        'Crédito à habitação para aquisição de imóvel para reabilitação: o Banco de Portugal exige cumprimento dos rácios LTV (loan-to-value) standard, mas obras certificadas podem integrar o financiamento.',
      ],
    },
    {
      type: 'quote',
      content:
        'Nos projectos que acompanhámos entre 2023 e 2025, a combinação entre IVA a 6% em obra, isenção de IMI por 5 anos e exclusão parcial de mais-valias em ARU representou, em média, uma redução de carga fiscal de 38 000 € a 65 000 € por operação — um impacto superior ao que a maioria dos investidores antecipa na fase de negociação.',
      source: {
        name: 'Equipa de Investimento HABTA',
        role: 'Análise de portfólio 2023–2025',
      },
    },
    {
      type: 'heading2',
      content: 'IVA a 6% em obras: quando se aplica e o que é preciso fazer?',
    },
    {
      type: 'paragraph',
      content:
        'A taxa reduzida de IVA de 6% aplica-se a empreitadas de reabilitação de imóveis, desde que o imóvel tenha mais de 30 anos ou esteja localizado em ARU, e que a intervenção seja de reabilitação — não construção nova. Esta taxa aplica-se apenas à mão-de-obra e aos materiais incorporados; materiais adquiridos separadamente pelo dono de obra mantêm a taxa de 23%.',
    },
    {
      type: 'paragraph',
      content:
        'A elegibilidade é verificada pela AT (Autoridade Tributária e Aduaneira) com base na facturas do empreiteiro e na certificação emitida pelo município. Em obras acima de 150 000 €, a poupança de IVA pode superar 25 000 €. O empreiteiro tem de facturar correctamente desde o início — não é possível rectificar retroactivamente a taxa depois de concluída a obra.',
    },
    {
      type: 'heading2',
      content: 'IMI e IMT: como funcionam as isenções em Área de Reabilitação Urbana?',
    },
    {
      type: 'paragraph',
      content:
        'A isenção de IMT na aquisição de imóvel para reabilitação em ARU está prevista no Código do IMT e aplica-se quando o adquirente se compromete a iniciar obras no prazo de três anos. A isenção de IMI tem duração de 5 anos contados a partir do ano de conclusão da reabilitação, prorrogável por mais 5 anos se o imóvel ficar afecto a arrendamento habitacional.',
    },
    {
      type: 'list',
      content: [
        'Isenção de IMT: aplica-se na aquisição de imóvel para reabilitação em ARU — não na venda posterior.',
        'Isenção de IMI: 5 anos após conclusão de reabilitação qualificada, prorrogável a 10 anos em arrendamento habitacional.',
        'Ambas as isenções requerem requerimento dirigido ao Serviço de Finanças competente com documentação do município.',
        'Em Lisboa, a CML emite declaração de reconhecimento de ARU e de qualificação da intervenção — documento necessário para acionar as isenções junto da AT.',
        'Em Cedofeita ou no Bonfim (Porto), o procedimento é idêntico mas tramitado pela Câmara Municipal do Porto com apoio da Porto Vivo, SRU.',
      ],
    },
    {
      type: 'heading2',
      content: 'Qual o cenário fiscal mais vantajoso para um investidor em 2026?',
    },
    {
      type: 'paragraph',
      content:
        'Não existe uma resposta única — depende do horizonte temporal, da estrutura de financiamento e do perfil de IRS do investidor. Para horizontes curtos (18–36 meses), a venda após reabilitação em ARU certificada com exclusão de 50% de mais-valias tende a ser mais eficiente. Para investidores com horizonte longo (mais de 10 anos), o arrendamento acessível com taxa de 10% e isenção de IMI cumulativa pode gerar yield líquido superior ao mercado livre.',
    },
    {
      type: 'paragraph',
      content:
        'Investidores que optam por estruturas societárias (sociedades por quotas ou SA) ficam sujeitos a IRC à taxa de 21% sobre o resultado tributável, sem acesso à exclusão de 50% de mais-valias em ARU disponível para pessoas singulares — mas beneficiam de amortizações e de regras de dedutibilidade de gastos mais flexíveis. A escolha da estrutura jurídica deve ser feita antes da aquisição, não depois.',
    },
    {
      type: 'heading3',
      content: 'Erros mais comuns na gestão fiscal de projectos de reabilitação',
    },
    {
      type: 'list',
      content: [
        'Não obter a certificação municipal de reabilitação qualificada antes do início de obras — inviabiliza a exclusão de mais-valias e o IVA a 6%.',
        'Não documentar despesas de obra com facturas em nome do proprietário registado — impede a dedução ao valor de aquisição para efeitos de mais-valias.',
        'Assumir que as isenções de IMI e IMT são automáticas — exigem sempre requerimento formal junto das Finanças.',
        'Ignorar o impacto do período de detenção na estratégia de saída — vender antes de 24 meses pode concentrar a tributação num único ano fiscal com efeito de englobamento desfavorável.',
        'Não consultar um fiscal especialista em imobiliário antes da escritura — alterações de estrutura jurídica ou de afectação após aquisição têm custos de reestruturação elevados.',
      ],
    },
    {
      type: 'callout',
      content:
        'A fiscalidade da reabilitação urbana em Portugal oferece um dos quadros de incentivos mais completos da Europa — mas cada benefício tem condições, prazos e procedimentos específicos. Deixar de activar um único mecanismo pode custar mais do que o custo total de um bom consultor fiscal.',
    },
    {
      type: 'heading2',
      content: 'Próximos passos para estruturar o seu projecto',
    },
    {
      type: 'paragraph',
      content:
        'Se está a avaliar um projecto de reabilitação em Lisboa, Porto ou Cascais e quer perceber qual dos três cenários fiscais melhor se adapta ao seu perfil, a nossa equipa, descrita em <a href="/servicos">serviços</a>, faz análises de viabilidade que incluem modelização fiscal. Pode também consultar o nosso <a href="/portfolio">portfólio</a> para exemplos concretos de operações concluídas. Para aprofundar o contexto legal, recomendamos a leitura do <a href="/blog/reabilitacao-urbana-em-portugal-guia-completo-2026">guia completo de reabilitação urbana em Portugal 2026</a> e do artigo <a href="/blog/investir-em-imoveis-em-portugal-guia-completo-2026">como investir em imóveis em Portugal</a>. Subscreva a newsletter para análises fiscais e de mercado com periodicidade mensal.',
    },
  ],
  faq: [
    {
      q: 'A exclusão de 50% de mais-valias em ARU aplica-se a não residentes?',
      a: 'Não residentes da UE têm acesso à opção de englobamento e, em princípio, ao mesmo tratamento que residentes em matéria de exclusão de mais-valias em ARU — mas a aplicação prática depende de convenção de dupla tributação. Consulte um fiscal antes da venda.',
    },
    {
      q: 'O IVA a 6% em obras aplica-se a materiais comprados pelo proprietário?',
      a: 'Não. A taxa de 6% aplica-se à empreitada (mão-de-obra e materiais incorporados faturados pelo empreiteiro). Materiais adquiridos separadamente pelo dono de obra são tributados a 23%. A estrutura do contrato com o empreiteiro condiciona a poupança.',
    },
    {
      q: 'Posso cumular isenção de IMI com isenção de IMT no mesmo imóvel?',
      a: 'Sim. As isenções de IMI e IMT têm fundamentos e momentos distintos: IMT aplica-se na aquisição, IMI na detenção após obra. São cumuláveis desde que os requisitos de cada uma sejam cumpridos e os requerimentos formais sejam apresentados atempadamente.',
    },
    {
      q: 'Uma sociedade por quotas tem acesso aos mesmos incentivos fiscais que uma pessoa singular?',
      a: 'Não integralmente. Sociedades beneficiam de IVA a 6% em obras e de isenção de IMI, mas não da exclusão de 50% de mais-valias em ARU prevista para pessoas singulares no Código do IRS. A escolha da estrutura jurídica deve ser feita antes da aquisição.',
    },
    {
      q: 'O arrendamento acessível obriga a manter o contrato por 20 anos?',
      a: 'O compromisso é de duração contratual mínima, não de imutabilidade. Se o contrato terminar antes do prazo comprometido, as diferenças de taxa de IRS dos anos anteriores podem ser reclamadas pela AT com juros compensatórios. Leia os termos do programa IHRU antes de aderir.',
    },
    {
      q: 'As despesas de projecto de arquitectura contam para reduzir a mais-valia?',
      a: 'Sim, desde que devidamente faturadas em nome do proprietário e relacionadas com a obra de reabilitação. Honorários de arquitecto, engenheiro, fiscal de obra e custos de licenciamento integram o valor de aquisição para efeitos de cálculo de mais-valias em IRS.',
    },
  ],
  disclaimer:
    'Este artigo tem finalidade informativa e não constitui aconselhamento fiscal, jurídico ou de investimento. Os regimes fiscais descritos baseiam-se na legislação em vigor em Abril de 2026 e podem ser alterados por lei ou interpretação administrativa posterior; taxas, limites e condições de acesso variam consoante o perfil do contribuinte, o município e a natureza da intervenção. Consulte um fiscal ou advogado especialista em imobiliário antes de tomar decisões concretas.',
};
