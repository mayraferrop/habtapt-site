import { NextResponse } from "next/server";
import { getSupabaseServiceClient } from "@/lib/supabaseServer";

export const runtime = 'edge';

type NewsletterBody = {
	email?: string;
	name?: string;
	consent?: boolean;
};

export async function POST(request: Request) {
	try {
		const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
			?? request.headers.get('cf-connecting-ip')
			?? 'unknown';

		const { email, name, consent }: NewsletterBody = await request.json().catch(() => ({}));

		if (!email || email.length > 254) {
			return NextResponse.json({ error: "Email é obrigatório." }, { status: 400 });
		}

		if (!consent) {
			return NextResponse.json({ error: "Consentimento é obrigatório." }, { status: 400 });
		}

		const supabase = getSupabaseServiceClient();
		const { error } = await supabase.from("newsletter_subscribers").upsert(
			{
				email,
				name: name ?? null,
				subscribed_at: new Date().toISOString(),
				consent_ip: ip,
				consent_at: new Date().toISOString(),
			},
			{ onConflict: "email" }
		);

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 400 });
		}

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json({ error: "Erro inesperado ao assinar newsletter." }, { status: 500 });
	}
}


