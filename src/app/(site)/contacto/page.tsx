import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contacto — Fale com a Equipa HABTA',
  description: 'Entre em contacto com a HABTA para discutir o seu projeto imobiliário. Consultoria gratuita sobre investimento imobiliário e reabilitação urbana em Portugal. Cascais, Lisboa e Porto.',
  alternates: {
    canonical: 'https://habta.eu/contacto',
  },
  openGraph: {
    title: 'Contacto — Fale com a Equipa HABTA',
    description: 'Entre em contacto com a HABTA. Consultoria gratuita sobre investimento imobiliário e reabilitação urbana em Portugal.',
    url: 'https://habta.eu/contacto',
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
    { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://habta.eu/contacto' },
  ],
};


export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd]) }}
      />
      <Section background="white" style={{ paddingTop: '7.5rem' }}>
        <Contact />
      </Section>
    </>
  );
}
