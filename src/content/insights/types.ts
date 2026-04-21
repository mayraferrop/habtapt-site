import type { InsightCategory } from '@/components/admin/types';

export type ContentBlock =
  | { type: 'heading2' | 'heading3' | 'paragraph' | 'callout'; content: string }
  | { type: 'list'; content: string[] }
  | {
      type: 'quote';
      content: string;
      source: { name: string; role?: string; url?: string };
    }
  | {
      type: 'table';
      content: { headers: string[]; rows: string[][] };
    };

export interface TrustSignals {
  projectsReviewed?: number;
  yearsExperience?: number;
  geoScope?: string;
  lastReviewed?: string;
}

export interface FaqItem {
  q: string;
  a: string;
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
  tldr?: string[];
  trustSignals?: TrustSignals;
  contentBlocks: ContentBlock[];
  faq?: FaqItem[];
  disclaimer?: string;
}
