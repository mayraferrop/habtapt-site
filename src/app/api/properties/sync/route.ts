import { NextResponse } from "next/server";
import { getSupabaseServiceClient } from "@/lib/supabaseServer";

export const runtime = "edge";

function validateApiKey(request: Request): boolean {
  const key = request.headers.get("x-api-key");
  const expected = process.env.IMOCOACHING_API_KEY;
  if (!expected) return false;
  return key === expected;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// POST /api/properties/sync — Upsert property from ImoCoaching
export async function POST(request: Request) {
  if (!validateApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { external_id, ...propertyData } = body;

    if (!external_id) {
      return NextResponse.json(
        { error: "external_id é obrigatório para sync" },
        { status: 400 }
      );
    }

    if (!propertyData.title) {
      return NextResponse.json(
        { error: "title é obrigatório" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServiceClient();

    // Check if property with this external_id already exists
    const { data: existing } = await supabase
      .from("projects")
      .select("id, slug")
      .eq("external_id", external_id)
      .maybeSingle();

    // Auto-generate slug if not provided
    if (!propertyData.slug && propertyData.title) {
      propertyData.slug = slugify(propertyData.title);
    }

    // Set sync metadata
    propertyData.external_id = external_id;
    propertyData.external_source = propertyData.external_source || "imocoaching";
    propertyData.last_synced_at = new Date().toISOString();

    let result;

    if (existing) {
      // Update existing property
      const { data, error } = await supabase
        .from("projects")
        .update(propertyData)
        .eq("id", existing.id)
        .select("id, slug, status, title")
        .single();

      if (error) {
        return NextResponse.json(
          { error: `Erro ao atualizar: ${error.message}` },
          { status: 500 }
        );
      }

      result = { action: "updated", ...data };
    } else {
      // Create new property
      if (!propertyData.listing_type) propertyData.listing_type = "venda";
      if (!propertyData.status) propertyData.status = "active";
      if (propertyData.published === undefined) propertyData.published = true;

      const { data, error } = await supabase
        .from("projects")
        .insert(propertyData)
        .select("id, slug, status, title")
        .single();

      if (error) {
        return NextResponse.json(
          { error: `Erro ao criar: ${error.message}` },
          { status: 500 }
        );
      }

      result = { action: "created", ...data };
    }

    return NextResponse.json({
      success: true,
      ...result,
      url: `https://habta.eu/imoveis/${result.slug}`,
    });
  } catch (err) {
    console.error("[API /properties/sync] Error:", err);
    return NextResponse.json(
      { error: "Erro interno no sync" },
      { status: 500 }
    );
  }
}

// PATCH /api/properties/sync — Update property status by external_id
export async function PATCH(request: Request) {
  if (!validateApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { external_id, ...updateData } = body;

    if (!external_id) {
      return NextResponse.json(
        { error: "external_id é obrigatório" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServiceClient();

    updateData.last_synced_at = new Date().toISOString();

    // Auto-set timestamps for status changes
    if (updateData.status === "sold") {
      updateData.sold_at = updateData.sold_at || new Date().toISOString();
    }
    if (updateData.status === "rented") {
      updateData.rented_at = updateData.rented_at || new Date().toISOString();
    }

    const { data, error } = await supabase
      .from("projects")
      .update(updateData)
      .eq("external_id", external_id)
      .select("id, slug, status, title")
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json(
          { error: "Imóvel não encontrado com este external_id" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: `Erro ao atualizar: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      action: "updated",
      ...data,
      url: `https://habta.eu/imoveis/${data.slug}`,
    });
  } catch (err) {
    console.error("[API /properties/sync PATCH] Error:", err);
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}

// GET /api/properties/sync — List all synced properties (for ImoCoaching dashboard)
export async function GET(request: Request) {
  if (!validateApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseServiceClient();

    const { data, error } = await supabase
      .from("projects")
      .select("id, external_id, title, slug, status, sale_price, rent_monthly, listing_type, views_count, contacts_count, days_on_market, last_synced_at, created_at, updated_at")
      .not("external_id", "is", null)
      .order("updated_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      properties: data,
      count: data?.length || 0,
    });
  } catch (err) {
    console.error("[API /properties/sync GET] Error:", err);
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}
