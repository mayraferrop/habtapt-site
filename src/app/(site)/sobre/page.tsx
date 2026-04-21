import type { Metadata } from 'next';
import SobreContent from './_components/SobreContent';

export const metadata: Metadata = {
  title: 'Sobre a HABTA — Reabilitação Urbana em Portugal',
  description: 'Empresa portuguesa sediada em Cascais especializada em reabilitação urbana e investimento imobiliário. Missão, valores e história da HABTA.',
  keywords: [
    'sobre habta',
    'quem somos habta',
    'história habta',
    'missão habta',
    'valores habta',
    'equipa habta',
    'jornada prometida lda',
    'habta cascais',
    'habta empresa portugal',
    'empresa reabilitação urbana portugal',
    'empresa investimento imobiliário portugal',
    'fundadores habta',
    'habta sede',
    'sobre reabilitação urbana portugal',
  ],
  alternates: {
    canonical: 'https://habta.eu/sobre',
  },
  openGraph: {
    title: 'Sobre a HABTA — Reabilitação Urbana em Portugal',
    description: 'Conheça a HABTA: empresa portuguesa especializada em reabilitação urbana e investimento imobiliário. Sediada em Cascais.',
    url: 'https://habta.eu/sobre',
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
    { '@type': 'ListItem', position: 2, name: 'Sobre', item: 'https://habta.eu/sobre' },
  ],
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://habta.eu/sobre',
  url: 'https://habta.eu/sobre',
  name: 'Sobre a HABTA',
  description:
    'Empresa portuguesa sediada em Cascais especializada em reabilitação urbana, investimento imobiliário e co-investimento em Portugal.',
  inLanguage: 'pt-PT',
  isPartOf: { '@id': 'https://habta.eu/#website' },
  about: { '@id': 'https://habta.eu/#organization' },
  mainEntity: { '@id': 'https://habta.eu/#organization' },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, aboutJsonLd]) }}
      />
      <SobreContent />
    </>
  );
}
