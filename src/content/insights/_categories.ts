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
    imagePool: [
      `https://images.unsplash.com/photo-1721244654394-36a7bc2da288${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1721244653652-268631ec049a${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1712696779652-dfca8766c5f8${UNSPLASH_PARAMS}`,
    ],
  },
  Sustentabilidade: {
    icon: 'Leaf',
    iconColor: designSystem.colors.brand.secondary,
    gradient: designSystem.colors.gradients.secondary,
    imagePool: [
      `https://images.unsplash.com/photo-1556983852-43bf21186b2a${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1565599573128-ae3ef5c9f478${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1693517596637-8190ac7afc0e${UNSPLASH_PARAMS}`,
    ],
  },
  Mercado: {
    icon: 'BookOpen',
    iconColor: designSystem.colors.brand.primary,
    gradient: designSystem.colors.gradients.tertiary,
    imagePool: [
      `https://images.unsplash.com/photo-1651060782121-ce629ec94201${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1762068305260-d6298b6822ea${UNSPLASH_PARAMS}`,
      `https://images.unsplash.com/photo-1688297483354-3057315926a1${UNSPLASH_PARAMS}`,
    ],
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
