import type { InsightCategory } from '@/components/admin/types';

export type ContentBlockType = 'heading2' | 'heading3' | 'paragraph' | 'list' | 'callout';

export interface ContentBlock {
  type: ContentBlockType;
  content: string | string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  description: string;
  category: InsightCategory;
  readTime: string;
  icon: 'TrendingUp' | 'Building2' | 'Leaf' | 'BookOpen';
  iconColor: string;
  gradient: string;
  author: string;
  authorRole: string;
  date: string;
  updated_at?: string;
  excerpt: string;
  image?: string;
  tags: string[];
  contentBlocks: ContentBlock[];
}
