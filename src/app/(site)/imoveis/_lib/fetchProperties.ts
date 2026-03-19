import type { Project } from '@/types/project';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || `https://${process.env.SUPABASE_PROJECT_ID || 'xrgcrvhmzoxfduhytzhk'}.supabase.co`;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
const FUNCTION_PATH = 'functions/v1/make-server-4b2936bc';

export async function fetchProperties(): Promise<Project[]> {
  try {
    const url = `${SUPABASE_URL}/${FUNCTION_PATH}/projects`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      console.error(`[fetchProperties] Server returned ${response.status}`);
      return [];
    }

    const data = await response.json();

    if (data.success && Array.isArray(data.projects)) {
      // Filter to only published projects that have a slug
      return (data.projects as Project[]).filter(
        (p) => p.slug
      );
    }

    return [];
  } catch (error) {
    console.error('[fetchProperties] Error:', error);
    return [];
  }
}

export async function fetchPropertyBySlug(slug: string): Promise<Project | null> {
  try {
    const url = `${SUPABASE_URL}/${FUNCTION_PATH}/projects/by-slug/${encodeURIComponent(slug)}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      console.error(`[fetchPropertyBySlug] Server returned ${response.status}`);
      return null;
    }

    const data = await response.json();
    if (!data.project) return null;

    return data.project as Project;
  } catch (error) {
    console.error('[fetchPropertyBySlug] Error:', error);
    return null;
  }
}
