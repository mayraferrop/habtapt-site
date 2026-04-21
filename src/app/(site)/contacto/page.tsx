import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contacto — Fale com a Equipa HABTA',
  description: 'Entre em contacto com a HABTA. Consultoria gratuita sobre investimento imobiliário e reabilitação urbana em Cascais, Lisboa e Porto.',
  keywords: [
    'contacto habta',
    'fale com habta',
    'consultoria imobiliária gratuita',
    'habta telefone',
    'habta email',
    'habta cascais morada',
    'reunião consultoria imobiliária portugal',
    'agendar reunião habta',
    'falar com especialista imobiliário portugal',
    'habta contactos',
  ],
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

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://habta.eu/contacto',
  url: 'https://habta.eu/contacto',
  name: 'Contacto HABTA',
  description:
    'Entre em contacto com a HABTA. Consultoria gratuita sobre investimento imobiliário e reabilitação urbana em Portugal.',
  inLanguage: 'pt-PT',
  isPartOf: { '@id': 'https://habta.eu/#website' },
  about: { '@id': 'https://habta.eu/#organization' },
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://habta.eu/#organization',
    name: 'HABTA',
    legalName: 'Jornada Prometida LDA',
    url: 'https://habta.eu',
    email: 'contato@habta.eu',
    telephone: '+351963290394',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Fernão Lopes, n.º 23',
      addressLocality: 'Cascais',
      addressRegion: 'Lisboa',
      postalCode: '2765-088',
      addressCountry: 'PT',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+351963290394',
        contactType: 'sales',
        areaServed: 'PT',
        availableLanguage: ['Portuguese', 'English'],
        email: 'contato@habta.eu',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'contato@habta.eu',
        areaServed: 'PT',
        availableLanguage: ['Portuguese', 'English'],
      },
    ],
  },
};


export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, contactPageJsonLd]) }}
      />
      <Section background="white" style={{ paddingTop: '7.5rem' }}>
        <Contact />
      </Section>
    </>
  );
}
