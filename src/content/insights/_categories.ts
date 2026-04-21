import { designSystem } from '@/components/design-system';
import type { InsightCategory } from '@/components/admin/types';

type CategoryVisual = {
  icon: 'TrendingUp' | 'Building2' | 'Leaf' | 'BookOpen';
  iconColor: string;
  gradient: string;
  imagePool: string[];
};

const UNSPLASH_PARAMS = '?w=1600&q=80&auto=format&fit=crop';

export const categoryVisuals: Record<InsightCategory, CategoryVisual> = {
  Investimento: {
    icon: 'TrendingUp',
    iconColor: designSystem.colors.brand.primary,
    gradient: designSystem.colors.gradients.primary,
    imagePool: [
      `https://images.unsplash.com/photo-1541323035148-3b6d6b990e1e${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1605641532626-5ab1dab56350${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1623838912579-ec42e9156ede${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1501080254287-69204825cf5f${UNSPLASH_PARAMS}`,
    ],
  },
  Regulamentação: {
    icon: 'Building2',
    iconColor: designSystem.colors.brand.accent,
    gradient: designSystem.colors.gradients.accent,
    imagePool: [],
  },
  Sustentabilidade: {
    icon: 'Leaf',
    iconColor: designSystem.colors.brand.secondary,
    gradient: designSystem.colors.gradients.secondary,
    imagePool: [],
  },
  Mercado: {
    icon: 'BookOpen',
    iconColor: designSystem.colors.brand.primary,
    gradient: designSystem.colors.gradients.tertiary,
    imagePool: [],
  },
};

export function pickImageForCategory(category: InsightCategory, seed?: string): string | undefined {
  const pool = categoryVisuals[category].imagePool;
  if (pool.length === 0) return undefined;
  const basis = seed ?? String(Date.now());
  let hash = 0;
  for (let i = 0; i < basis.length; i++) hash = (hash * 31 + basis.charCodeAt(i)) >>> 0;
  return pool[hash % pool.length];
}
