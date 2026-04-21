import type { Metadata } from 'next';
import { Portfolio } from '@/components/Portfolio';
import { Section } from '@/components/Section';
import { fetchProjects } from './_lib/fetchProjects';

export const metadata: Metadata = {
  title: 'Portfólio de Projetos de Reabilitação Urbana',
  description: 'Projetos de reabilitação urbana concluídos e em curso em Portugal. Apartamentos e moradias reabilitados em Lisboa, Porto e Cascais pela HABTA.',
  keywords: [
    'portfólio habta',
    'projetos reabilitação urbana portugal',
    'imóveis reabilitados lisboa',
    'imóveis reabilitados porto',
    'imóveis reabilitados cascais',
    'apartamentos reabilitados portugal',
    'moradias reabilitadas portugal',
    'projetos imobiliários habta',
    'empreendimentos reabilitação portugal',
    'imóveis disponíveis portugal',
    'casos de sucesso reabilitação',
    'carteira imóveis portugal',
  ],
  alternates: {
    canonical: 'https://habta.eu/portfolio',
  },
  openGraph: {
    title: 'Portfólio de Projetos de Reabilitação Urbana — HABTA',
    description: 'Projetos de reabilitação urbana concluídos e em curso em Portugal. Veja os nossos apartamentos e moradias reabilitados.',
    url: 'https://habta.eu/portfolio',
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
    { '@type': 'ListItem', position: 2, name: 'Portfólio', item: 'https://habta.eu/portfolio' },
  ],
};

export default async function PortfolioPage() {
  const projects = await fetchProjects();

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://habta.eu/portfolio',
    url: 'https://habta.eu/portfolio',
    name: 'Portfólio HABTA — Projetos de Reabilitação Urbana',
    description:
      'Projetos de reabilitação urbana concluídos e em curso em Portugal. Apartamentos e moradias reabilitados em Lisboa, Porto e Cascais.',
    inLanguage: 'pt-PT',
    isPartOf: { '@id': 'https://habta.eu/#website' },
    about: { '@id': 'https://habta.eu/#organization' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: projects.length,
      itemListElement: projects.slice(0, 20).map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://habta.eu/portfolio/${project.id}`,
        name: project.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, collectionPageJsonLd]) }}
      />
      <Section background="white" style={{ paddingTop: '7.5rem' }}>
        <Portfolio projects={projects} />
      </Section>
    </>
  );
}
