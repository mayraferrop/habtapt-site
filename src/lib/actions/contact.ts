'use server';

import { projectId, publicAnonKey } from '@/utils/supabase/info';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  sourceUrl?: string;
}

interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitContact(data: ContactData): Promise<ActionResult> {
  const { name, email, phone, interest, message, sourceUrl } = data;

  // Server-side validation
  if (!name || typeof name !== 'string') {
    return { success: false, error: 'O nome é obrigatório.' };
  }

  if (!email || typeof email !== 'string') {
    return { success: false, error: 'O email é obrigatório.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Por favor, insira um email válido.' };
  }

  if (!phone || typeof phone !== 'string') {
    return { success: false, error: 'O telefone é obrigatório.' };
  }

  if (!interest || typeof interest !== 'string') {
    return { success: false, error: 'Selecione um tipo de interesse.' };
  }

  if (!message || typeof message !== 'string') {
    return { success: false, error: 'A mensagem é obrigatória.' };
  }

  try {
    const url = `https://${projectId}.supabase.co/functions/v1/make-server-4b2936bc/contact`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, interest, message, sourceUrl }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return { success: false, error: responseData.error || 'Erro ao enviar mensagem. Tente novamente.' };
    }

    return { success: true, message: responseData.message || 'Mensagem enviada com sucesso! Entraremos em contato em breve.' };
  } catch {
    return { success: false, error: 'Erro de conexão. Tente novamente.' };
  }
}
