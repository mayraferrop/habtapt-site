import { NextResponse } from "next/server";
import { getSupabaseServiceClient } from "@/lib/supabaseServer";

export const runtime = "edge";

function validateApiKey(request: Request): boolean {
  const key = request.headers.get("x-api-key");
  const expected = process.env.IMOCOACHING_API_KEY;
  if (!expected) return false;
  return key === expected;
}

// GET /api/contacts/new — Fetch new leads since a given timestamp (for ImoCoaching polling)
export async function GET(request: Request) {
  if (!validateApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const since = searchParams.get("since");
    const limit = parseInt(searchParams.get("limit") || "100", 10);
    const propertyId = searchParams.get("property_id");

    const supabase = getSupabaseServiceClient();

    let query = supabase
      .from("contacts")
      .select(`
        id, name, email, phone, interest, message,
        pipeline_stage, property_id, property_title,
        source, source_id, utm_source, utm_medium, utm_campaign,
        desired_locations, max_budget, typology, notes,
        lead_number, created_at
      `)
      .order("created_at", { ascending: false })
      .limit(limit);

    // Filter by timestamp (ISO 8601)
    if (since) {
      query = query.gte("created_at", since);
    }

    // Filter by property
    if (propertyId) {
      query = query.eq("property_id", propertyId);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      contacts: data,
      count: data?.length || 0,
      since: since || null,
      fetched_at: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[API /contacts/new] Error:", err);
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}
