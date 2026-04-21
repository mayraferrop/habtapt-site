import type { Metadata } from 'next';
import InsightDetailContent from './_components/InsightDetailContent';
import { fetchInsightById, fetchRelatedInsights, type InsightFull } from '../_lib/fetchInsights';

export const runtime = 'edge';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const insight = await fetchInsightById(id);

  if (insight) {
    const title = insight.title;
    const description = insight.excerpt
      ? insight.excerpt.slice(0, 155)
      : insight.description
        ? insight.description.slice(0, 155)
        : `${insight.title} — Artigo HABTA sobre ${insight.category || 'investimento imobiliário'}`;

    return {
      title,
      description,
      alternates: { canonical: `https://habta.eu/blog/${id}` },
      openGraph: {
        title: `${title} | HABTA Insights`,
        description,
        type: 'article',
        locale: 'pt_PT',
        siteName: 'HABTA',
        url: `https://habta.eu/blog/${id}`,
        ...(insight.image ? { images: [{ url: insight.image, width: 1200, height: 630, alt: title }] } : {}),
        ...(insight.date ? { publishedTime: insight.date } : {}),
        ...(insight.author ? { authors: [insight.author] } : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | HABTA Insights`,
        description,
        ...(insight.image ? { images: [insight.image] } : {}),
      },
    };
  }

  return {
    title: 'Artigo sobre Investimento Imobiliário',
    description: 'Artigo sobre investimento imobiliário e reabilitação urbana em Portugal pela HABTA.',
    alternates: { canonical: `https://habta.eu/blog/${id}` },
  };
}

function generateArticleJsonLd(insight: InsightFull | null, id: string) {
  if (!insight) return null;
  const authorName = insight.author || 'HABTA';
  const isOrgAuthor = authorName === 'HABTA';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt || insight.description || '',
    ...(insight.image ? { image: insight.image } : {}),
    ...(insight.date ? { datePublished: insight.date } : {}),
    ...(insight.updated_at ? { dateModified: insight.updated_at } : {}),
    author: isOrgAuthor
      ? { '@type': 'Organization', name: 'HABTA', url: 'https://habta.eu' }
      : {
          '@type': 'Person',
          name: authorName,
          ...(insight.authorRole ? { jobTitle: insight.authorRole } : {}),
          worksFor: { '@id': 'https://habta.eu/#organization' },
        },
    publisher: {
      '@id': 'https://habta.eu/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://habta.eu/blog/${id}`,
    },
    inLanguage: 'pt-PT',
    ...(insight.category ? { articleSection: insight.category } : {}),
    ...(Array.isArray(insight.tags) && insight.tags.length > 0
      ? { keywords: insight.tags.join(', ') }
      : {}),
  };
}

function generateBreadcrumbJsonLd(insight: InsightFull | null, id: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://habta.eu' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://habta.eu/blog' },
      { '@type': 'ListItem', position: 3, name: insight?.title || 'Artigo', item: `https://habta.eu/blog/${id}` },
    ],
  };
}

function generateFaqJsonLd(insight: InsightFull | null) {
  if (!insight?.faq || insight.faq.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: insight.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const insight = await fetchInsightById(id);
  const related = insight ? await fetchRelatedInsights(insight.category, id) : [];

  const articleJsonLd = generateArticleJsonLd(insight, id);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(insight, id);
  const faqJsonLd = generateFaqJsonLd(insight);
  const jsonLd = [breadcrumbJsonLd, articleJsonLd, faqJsonLd].filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <InsightDetailContent insight={insight as any} relatedInsights={related as any} />
    </>
  );
}
