import type { Metadata } from 'next';
import VelaskPageClient from './_components/VelaskPageClient';

export const metadata: Metadata = {
  title: 'VELASK Residence — Apartamentos T1 a T3 Duplex em Campanhã, Porto',
  description: 'VELASK Residence: apartamentos T1 a T3 Duplex de 106 a 118 m² em Campanhã, Porto. Reabilitação premium com entrega em abril de 2026. Acabamentos de luxo e localização estratégica.',
  keywords: [
    'velask residence',
    'velask porto',
    'velask campanhã',
    'apartamentos campanhã',
    'apartamentos porto reabilitados',
    'T1 Porto',
    'T2 Porto',
    'T3 Duplex Porto',
    'apartamentos novos porto',
    'imóveis campanhã porto',
    'empreendimento porto 2026',
    'moradia reabilitada porto',
    'apartamentos com jardim porto',
    'apartamentos com garagem porto',
    'reabilitação campanhã',
    'empreendimento habta porto',
    'comprar apartamento porto campanhã',
    'investimento imobiliário porto',
  ],
  alternates: {
    canonical: 'https://habta.eu/velask',
  },
  openGraph: {
    title: 'VELASK Residence — Apartamentos Premium em Campanhã, Porto',
    description: 'Apartamentos T1 a T3 Duplex de 106 a 118 m² em Campanhã, Porto. Reabilitação premium com entrega em abril de 2026.',
    url: 'https://habta.eu/velask',
    type: 'website',
    locale: 'pt_PT',
    siteName: 'HABTA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VELASK Residence — Apartamentos Premium em Porto',
    description: 'Apartamentos T1 a T3 Duplex em Campanhã, Porto. Entrega abril 2026.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://habta.eu' },
    { '@type': 'ListItem', position: 2, name: 'VELASK Residence', item: 'https://habta.eu/velask' },
  ],
};

const apartmentComplexJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ApartmentComplex',
  '@id': 'https://habta.eu/velask',
  name: 'VELASK Residence',
  description:
    'Moradia histórica em Campanhã, Porto, totalmente reabilitada pela HABTA. Três apartamentos novos — T1 com jardim e garagem, T2 com jardim e anexo, T3 Duplex — com acabamentos de qualidade.',
  url: 'https://habta.eu/velask',
  numberOfAccommodationUnits: 3,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Campanhã',
    addressRegion: 'Porto',
    addressCountry: 'PT',
  },
  areaServed: {
    '@type': 'City',
    name: 'Porto',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Jardim', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Garagem', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Reabilitação premium', value: true },
  ],
  accommodationCategory: 'Apartamento',
  petsAllowed: true,
  provider: { '@id': 'https://habta.eu/#organization' },
  containsPlace: [
    {
      '@type': 'Apartment',
      name: 'Fracção A — T1 com jardim e garagem',
      numberOfRooms: 1,
      floorSize: { '@type': 'QuantitativeValue', unitCode: 'MTK', value: 106 },
    },
    {
      '@type': 'Apartment',
      name: 'Fracção B — T2 com jardim e anexo',
      numberOfRooms: 2,
      floorSize: { '@type': 'QuantitativeValue', unitCode: 'MTK', value: 112 },
    },
    {
      '@type': 'Apartment',
      name: 'Fracção C — T3 Duplex',
      numberOfRooms: 3,
      floorSize: { '@type': 'QuantitativeValue', unitCode: 'MTK', value: 118 },
    },
  ],
};

export default function VelaskPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, apartmentComplexJsonLd]) }}
      />
      <VelaskPageClient />
    </>
  );
}
