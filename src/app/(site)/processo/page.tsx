import type { Metadata } from 'next';
import ProcessoContent from './_components/ProcessoContent';

export const metadata: Metadata = {
  title: 'Processo de Reabilitação — 7 Etapas do Investimento',
  description: 'As 7 etapas do processo HABTA: da prospeção à entrega do projeto. Metodologia transparente de reabilitação urbana em Portugal.',
  keywords: [
    'processo reabilitação urbana',
    'etapas investimento imobiliário',
    'metodologia reabilitação portugal',
    'como funciona reabilitação urbana',
    'processo fix and flip portugal',
    'gestão projeto reabilitação',
    'due diligence imobiliária passos',
    'prospeção imóveis portugal',
    'reforma inteligente etapas',
    'projeto arquitetura reabilitação',
    'gestão de obra portugal',
    'marketing imobiliário fases',
    'habta metodologia',
    'processo investimento transparente',
  ],
  alternates: {
    canonical: 'https://habta.eu/processo',
  },
  openGraph: {
    title: 'Processo de Reabilitação — As 7 Etapas — HABTA',
    description: 'As 7 etapas do processo HABTA: da prospeção à entrega do projeto. Metodologia transparente de reabilitação urbana em Portugal.',
    url: 'https://habta.eu/processo',
    type: 'website',
    locale: 'pt_PT',
    siteName: 'HABTA',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://habta.eu' },
    { '@type': 'ListItem', position: 2, name: 'Processo', item: 'https://habta.eu/processo' },
  ],
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Processo de Investimento em Reabilitação Urbana',
  description: 'As 7 etapas do processo HABTA para investimento em reabilitação urbana em Portugal.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Prospeção', text: 'Identificação de imóveis com potencial de valorização através de análise de mercado.' },
    { '@type': 'HowToStep', position: 2, name: 'Avaliação', text: 'Due diligence técnica e jurídica completa do imóvel.' },
    { '@type': 'HowToStep', position: 3, name: 'Negociação', text: 'Negociação e aquisição otimizada do imóvel.' },
    { '@type': 'HowToStep', position: 4, name: 'Projeto', text: 'Desenvolvimento do projeto de reabilitação com design contemporâneo.' },
    { '@type': 'HowToStep', position: 5, name: 'Obra', text: 'Execução da reforma com gestão rigorosa de obra e prazos.' },
    { '@type': 'HowToStep', position: 6, name: 'Marketing', text: 'Estratégia de marketing e home staging para venda otimizada.' },
    { '@type': 'HowToStep', position: 7, name: 'Fecho', text: 'Fecho do projeto e distribuição transparente de resultados.' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, howToJsonLd]) }}
      />
      <ProcessoContent />
    </>
  );
}
