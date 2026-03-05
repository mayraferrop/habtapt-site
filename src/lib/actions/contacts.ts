'use server';

import { projectId, publicAnonKey } from '@/utils/supabase/info';

const FUNCTION_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-4b2936bc`;

interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
  data?: unknown;
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
      return { success: false, error: data.error || `Erro HTTP ${response.status}` };
    }
    return { success: true, message: data.message, data };
  } catch {
    return { success: false, error: 'Erro de conexão. Tente novamente.' };
  }
}

export async function createContact(payload: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch('contact', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateContact(id: string, payload: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`contacts/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function updateContactStage(id: string, pipelineStage: string): Promise<ActionResult> {
  return edgeFetch(`contacts/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify({ pipelineStage }) });
}

export async function createActivity(contactId: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`contacts/${encodeURIComponent(contactId)}/activities`, { method: 'POST', body: JSON.stringify(data) });
}

export async function deleteActivity(contactId: string, activityId: string): Promise<ActionResult> {
  return edgeFetch(`contacts/${encodeURIComponent(contactId)}/activities/${activityId}`, { method: 'DELETE' });
}
