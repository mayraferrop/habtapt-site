import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apartamentos T1 T2 T3 para Venda em Campanhã, Porto — Reabilitados 2026 | Velask by HABTA',
  description:
    'Velask — 3 apartamentos T1, T2 e T3 Duplex totalmente reabilitados em Campanhã, Porto. Jardins privados, cozinha equipada, garagem. Desde 399.000€. Entrega em 60 dias.',
  keywords: [
    'apartamento porto',
    'T1 porto',
    'T2 porto',
    'T3 duplex porto',
    'campanhã porto',
    'campanha porto',
    'imóvel novo porto',
    'apartamento para venda porto',
    'apartamento reabilitado porto',
    'velask',
    'habta',
    'reabilitação urbana porto',
    'apartamento jardim porto',
    'duplex porto',
    'apartamento campanhã',
    'comprar apartamento porto',
    'imóvel reabilitado campanhã',
  ],
  openGraph: {
    title: 'Velask — Apartamentos T1 T2 T3 para Venda em Campanhã, Porto | HABTA',
    description:
      '3 apartamentos T1, T2 e T3 Duplex totalmente reabilitados em Campanhã, Porto. Jardins privados, cozinha equipada. Desde 399.000€.',
    type: 'website',
    locale: 'pt_PT',
    siteName: 'HABTA',
    url: 'https://habta.eu/velask',
    images: [
      {
        url: 'https://habta.eu/images/velask/t2/1.webp',
        width: 1200,
        height: 630,
        alt: 'Velask — Apartamentos reabilitados em Campanhã, Porto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velask — Apartamentos T1 T2 T3 em Campanhã, Porto',
    description: '3 apartamentos totalmente reabilitados. Desde 399.000€. Entrega em 60 dias.',
    images: ['https://habta.eu/images/velask/t2/1.webp'],
  },
  alternates: {
    canonical: 'https://habta.eu/velask',
  },
};

const realEstateListingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'VELASK — Apartamentos Reabilitados em Campanhã, Porto',
  description:
    'Três apartamentos a estrear com jardins privados e duplex em Campanhã, Porto. Reabilitação total 2026. T1 com garagem, T2 com jardim e anexo, T3 Duplex.',
  url: 'https://habta.eu/velask',
  image: 'https://habta.eu/images/velask/t2/1.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Manuel Carqueja, 259',
    addressLocality: 'Porto',
    addressRegion: 'Porto',
    postalCode: '4300',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.1635,
    longitude: -8.5955,
  },
  numberOfRooms: '1-3',
  floorSize: {
    '@type': 'QuantitativeValue',
    minValue: 106.78,
    maxValue: 118.44,
    unitCode: 'MTK',
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: 399000,
    highPrice: 449000,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    offerCount: 3,
  },
  provider: {
    '@id': 'https://habta.eu/#organization',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://habta.eu' },
    { '@type': 'ListItem', position: 2, name: 'Imóveis', item: 'https://habta.eu/portfolio' },
    { '@type': 'ListItem', position: 3, name: 'Velask', item: 'https://habta.eu/velask' },
  ],
};

export default function VelaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/velask/t2/1.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([realEstateListingJsonLd, breadcrumbJsonLd]),
        }}
      />
      {children}
    </>
  );
}
