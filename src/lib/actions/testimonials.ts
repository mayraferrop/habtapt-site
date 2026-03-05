'use server';

import { projectId, publicAnonKey } from '@/utils/supabase/info';

interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
  data?: unknown;
}

async function edgeFetch(endpoint: string, options: RequestInit = {}): Promise<ActionResult> {
  try {
    const url = `https://${projectId}.supabase.co/functions/v1/make-server-4b2936bc/${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Erro no servidor.' };
    }

    return { success: true, message: data.message, data };
  } catch {
    return { success: false, error: 'Erro de conexão. Tente novamente.' };
  }
}

export async function createTestimonial(formData: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch('testimonials', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

export async function updateTestimonial(id: string, formData: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`testimonials/${encodeURIComponent(id)}`, {
    method: 'PUT',
    body: JSON.stringify(formData),
  });
}

export async function deleteTestimonial(id: string): Promise<ActionResult> {
  return edgeFetch(`testimonials/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}
