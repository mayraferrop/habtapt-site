'use server';

import { projectId, publicAnonKey } from '@/utils/supabase/info';

const FUNCTION_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-4b2936bc`;

interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
}

async function edgeFetch(endpoint: string, options: RequestInit = {}): Promise<ActionResult> {
  try {
    const response = await fetch(`${FUNCTION_BASE}/${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Erro na operação.' };
    }

    return { success: true, message: data.message };
  } catch {
    return { success: false, error: 'Erro de conexão. Tente novamente.' };
  }
}

export async function createProject(data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch('projects', { method: 'POST', body: JSON.stringify(data) });
}

export async function updateProject(id: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`projects/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(data) });
}

export async function deleteProject(id: string): Promise<ActionResult> {
  return edgeFetch(`projects/${encodeURIComponent(id)}`, { method: 'DELETE' });
}
