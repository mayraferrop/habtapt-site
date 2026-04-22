import type { Metadata } from 'next';
import MetodologiaContent from './_components/MetodologiaContent';

export const metadata: Metadata = {
  title: 'Metodologia editorial e princípios — HABTA',
  description:
    'Como a HABTA pesquisa, escreve, revê e atualiza o conteúdo publicado no blog. Transparência sobre autoria, fontes, processo editorial, correções e conflitos de interesse.',
  keywords: [
    'metodologia editorial HABTA',
    'política editorial imobiliário Portugal',
    'fontes HABTA',
    'processo editorial blog HABTA',
    'transparência HABTA',
    'autoria artigos HABTA',
    'E-E-A-T imobiliário Portugal',
  ],
  alternates: {
    canonical: 'https://habta.eu/metodologia',
  },
  openGraph: {
    title: 'Metodologia editorial e princípios — HABTA',
    description:
      'Princípios editoriais da HABTA: quem escreve, como revemos, fontes utilizadas, correções e transparência.',
    url: 'https://habta.eu/metodologia',
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
    { '@type': 'ListItem', position: 2, name: 'Metodologia', item: 'https://habta.eu/metodologia' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://habta.eu/metodologia',
  url: 'https://habta.eu/metodologia',
  name: 'Metodologia editorial e princípios — HABTA',
  description:
    'Política editorial, processo de revisão, fontes e transparência na produção de conteúdo da HABTA.',
  inLanguage: 'pt-PT',
  isPartOf: { '@id': 'https://habta.eu/#website' },
  about: { '@id': 'https://habta.eu/#organization' },
  publisher: { '@id': 'https://habta.eu/#organization' },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, webPageJsonLd]) }}
      />
      <MetodologiaContent />
    </>
  );
}
