import type { Insight } from '@/components/admin/types';
import { getAllInsights, getInsightById, getRelatedInsights } from '@/content/insights/_all';
import type { InsightArticle, ContentBlock } from '@/content/insights/types';

export interface InsightFull extends Insight {
  excerpt?: string;
  image?: string;
  author?: string;
  authorRole?: string;
  date?: string;
  updated_at?: string;
  tags?: string[];
  contentBlocks?: ContentBlock[];
}

function toInsightFull(article: InsightArticle): InsightFull {
  return {
    id: article.id,
    title: article.title,
    description: article.description,
    category: article.category,
    readTime: article.readTime,
    icon: article.icon,
    iconColor: article.iconColor,
    gradient: article.gradient,
    author: article.author,
    authorRole: article.authorRole,
    date: article.date,
    updated_at: article.updated_at,
    excerpt: article.excerpt,
    image: article.image,
    tags: article.tags,
    contentBlocks: article.contentBlocks,
  };
}

export async function fetchInsights(): Promise<Insight[]> {
  return getAllInsights().map(toInsightFull);
}

export async function fetchInsightById(id: string): Promise<InsightFull | null> {
  const article = getInsightById(id);
  return article ? toInsightFull(article) : null;
}

export async function fetchRelatedInsights(category: string, excludeId: string): Promise<InsightFull[]> {
  return getRelatedInsights(category, excludeId).map(toInsightFull);
}
