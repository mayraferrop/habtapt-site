import { designSystem } from '@/components/design-system';
import type { InsightCategory } from '@/components/admin/types';

type CategoryVisual = {
  icon: 'TrendingUp' | 'Building2' | 'Leaf' | 'BookOpen';
  iconColor: string;
  gradient: string;
};

export const categoryVisuals: Record<InsightCategory, CategoryVisual> = {
  Investimento: {
    icon: 'TrendingUp',
    iconColor: designSystem.colors.brand.primary,
    gradient: designSystem.colors.gradients.primary,
  },
  Regulamentação: {
    icon: 'Building2',
    iconColor: designSystem.colors.brand.accent,
    gradient: designSystem.colors.gradients.accent,
  },
  Sustentabilidade: {
    icon: 'Leaf',
    iconColor: designSystem.colors.brand.secondary,
    gradient: designSystem.colors.gradients.secondary,
  },
  Mercado: {
    icon: 'BookOpen',
    iconColor: designSystem.colors.brand.primary,
    gradient: designSystem.colors.gradients.tertiary,
  },
};
