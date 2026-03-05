'use server';

import { getSupabaseServiceClient } from '@/lib/supabaseServer';

interface NewsletterData {
  email: string;
  name?: string;
  consent: boolean;
}

interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
}

export async function subscribeNewsletter(data: NewsletterData): Promise<ActionResult> {
  const { email, name, consent } = data;

  // Server-side validation
  if (!email || typeof email !== 'string' || email.length > 254) {
    return { success: false, error: 'Email é obrigatório.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Por favor, insira um email válido.' };
  }

  if (!consent) {
    return { success: false, error: 'Consentimento é obrigatório.' };
  }

  try {
    const supabase = getSupabaseServiceClient();
    const { error } = await supabase.from('newsletter_subscribers').upsert(
      {
        email,
        name: name ?? null,
        subscribed_at: new Date().toISOString(),
        consent_ip: 'server-action',
        consent_at: new Date().toISOString(),
      },
      { onConflict: 'email' }
    );

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Subscrição confirmada! Verifique o seu email.' };
  } catch {
    return { success: false, error: 'Erro inesperado ao assinar newsletter.' };
  }
}
