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
      return { success: false, error: data.error || 'Erro na operacao.' };
    }

    return { success: true, message: data.message };
  } catch {
    return { success: false, error: 'Erro de conexao. Tente novamente.' };
  }
}

// === PROJECTS ===

export async function createControloProject(data: { id: string; label: string }): Promise<ActionResult> {
  return edgeFetch('controlo/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function deleteControloProject(id: string): Promise<ActionResult> {
  return edgeFetch(`controlo/projects/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}

// === UNITS ===

export async function createUnit(projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch('controlo/units', {
    method: 'POST',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function updateUnit(id: string, projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`controlo/units/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'PUT',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function deleteUnit(id: string, projectIdParam: string): Promise<ActionResult> {
  return edgeFetch(`controlo/units/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'DELETE',
  });
}

// === TARGETS ===

export async function updateTargets(projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`controlo/targets?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

// === REVIEWS ===

export async function createReview(projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch('controlo/reviews', {
    method: 'POST',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function updateReview(id: string, projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`controlo/reviews/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'PUT',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function deleteReview(id: string, projectIdParam: string): Promise<ActionResult> {
  return edgeFetch(`controlo/reviews/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'DELETE',
  });
}

// === WEEKLY LOGS ===

export async function createWeeklyLog(projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch('controlo/weeklylogs', {
    method: 'POST',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function updateWeeklyLog(id: string, projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`controlo/weeklylogs/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'PUT',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function deleteWeeklyLog(id: string, projectIdParam: string): Promise<ActionResult> {
  return edgeFetch(`controlo/weeklylogs/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'DELETE',
  });
}

// === COMPETITORS ===

export async function createCompetitor(projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch('controlo/competitors', {
    method: 'POST',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function updateCompetitor(id: string, projectIdParam: string, data: Record<string, unknown>): Promise<ActionResult> {
  return edgeFetch(`controlo/competitors/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'PUT',
    body: JSON.stringify({ ...data, projectId: projectIdParam }),
  });
}

export async function deleteCompetitor(id: string, projectIdParam: string): Promise<ActionResult> {
  return edgeFetch(`controlo/competitors/${encodeURIComponent(id)}?projectId=${encodeURIComponent(projectIdParam)}`, {
    method: 'DELETE',
  });
}
