import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// ── Supabase client (service role for full access) ──
const supabase = () =>
  createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

// ── Helpers: camelCase ↔ snake_case ──
function toSnake(obj: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    const sk = k.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
    out[sk] = v;
  }
  return out;
}

function toCamel(obj: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    const ck = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    out[ck] = v;
  }
  return out;
}

// Convert array of DB rows to camelCase
function rowsToCamel(rows: any[]): any[] {
  return rows.map(toCamel);
}

// ── Field map: KV field names → PostgreSQL column names (for projects) ──
// Used during migration and for compatibility with existing frontend
const projectKvToDb: Record<string, string> = {
  image: "image_url",
  statusLabel: "status_label",
  timelinePhases: "timeline_phases",
  portalLink: "portal_link",
  brochureLink: "brochure_link",
  landingPage: "landing_page",
};

// Reverse map for DB → response
const projectDbToKv: Record<string, string> = {};
for (const [k, v] of Object.entries(projectKvToDb)) {
  projectDbToKv[v] = k;
}

// Transform incoming project data (camelCase/KV names) → DB columns
function projectToDb(data: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined) continue;
    // Use explicit mapping if exists, otherwise auto snake_case
    const mapped = projectKvToDb[k];
    if (mapped) {
      out[mapped] = v;
    } else {
      out[k.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)] = v;
    }
  }
  // Remove non-DB fields
  delete out.timestamp;
  return out;
}

// Transform DB row → response (camelCase, with KV-compat names)
function projectFromDb(row: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(row)) {
    // Use reverse mapping if exists, otherwise auto camelCase
    const mapped = projectDbToKv[k];
    if (mapped) {
      out[mapped] = v;
    } else {
      out[k.replace(/_([a-z])/g, (_, c) => c.toUpperCase())] = v;
    }
  }
  // Keep 'image' alias for frontend compat (in addition to imageUrl)
  if (row.image_url && !out.image) {
    out.image = row.image_url;
  }
  return out;
}

// ── Middleware ──
app.use("*", logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "x-admin-request"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  })
);

// ── Health ──
app.get("/make-server-4b2936bc/health", (c) => {
  return c.json({ status: "ok", backend: "postgresql" });
});

// ============================================================================
// CONTACTS (PostgreSQL: contacts table)
// ============================================================================

app.post("/make-server-4b2936bc/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, interest, message, projectId, origin, propertyId, propertyTitle, utmSource, utmMedium, utmCampaign } = body;

    if (!name || !email || !phone || !interest || !message) {
      return c.json({ error: "Todos os campos são obrigatórios" }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Email inválido" }, 400);
    }

    // Calculate lead number
    const { count } = await supabase().from("contacts").select("*", { count: "exact", head: true });
    const leadNumber = (count || 0) + 1;

    const insertData: Record<string, any> = {
      name,
      email,
      phone,
      interest,
      message,
      pipeline_stage: "novo",
      lead_number: leadNumber,
      source: origin || "website",
    };

    // Property association (from landing page)
    if (propertyId) insertData.property_id = propertyId;
    if (propertyTitle) insertData.property_title = propertyTitle;

    // Legacy source tracking
    if (projectId) {
      insertData.source_id = projectId;
      insertData.source = "project";
    }

    // UTM tracking
    if (utmSource) insertData.utm_source = utmSource;
    if (utmMedium) insertData.utm_medium = utmMedium;
    if (utmCampaign) insertData.utm_campaign = utmCampaign;

    const { data, error } = await supabase()
      .from("contacts")
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.log(`Contact insert error: ${error.message}`);
      return c.json({ error: "Erro ao enviar mensagem. Tente novamente." }, 500);
    }

    console.log(`Contact created: ${data.id} - ${name} (${email})`);
    return c.json({
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      id: data.id,
    });
  } catch (error) {
    console.log(`Contact form error: ${error}`);
    return c.json({ error: "Erro ao enviar mensagem. Tente novamente." }, 500);
  }
});

app.get("/make-server-4b2936bc/contacts", async (c) => {
  try {
    const { data, error } = await supabase()
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const contacts = (data || []).map((row: any) => {
      const contact = toCamel(row);
      // Ensure pipeline stage default
      if (!contact.pipelineStage) contact.pipelineStage = "novo";
      // Add timestamp for frontend compat
      contact.timestamp = new Date(row.created_at).getTime();
      return contact;
    });

    return c.json({ success: true, contacts, count: contacts.length });
  } catch (error) {
    console.log(`Error retrieving contacts: ${error}`);
    return c.json({ error: "Erro ao buscar contatos" }, 500);
  }
});

app.put("/make-server-4b2936bc/contacts/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();

    const updateData: Record<string, any> = {};

    // Map camelCase body fields to snake_case DB columns
    const fieldMap: Record<string, string> = {
      name: "name",
      email: "email",
      phone: "phone",
      interest: "interest",
      pipelineStage: "pipeline_stage",
      notes: "notes",
      desiredLocations: "desired_locations",
      maxBudget: "max_budget",
      typology: "typology",
      classifications: "classifications",
      propertyId: "property_id",
      propertyTitle: "property_title",
      utmSource: "utm_source",
      utmMedium: "utm_medium",
      utmCampaign: "utm_campaign",
      source: "source",
      sourceId: "source_id",
      sourceTitle: "source_title",
      sourceUrl: "source_url",
      leadNumber: "lead_number",
    };

    for (const [camel, snake] of Object.entries(fieldMap)) {
      if (body[camel] !== undefined) {
        updateData[snake] = body[camel];
      }
    }

    if (Object.keys(updateData).length === 0) {
      return c.json({ error: "Nenhum campo para atualizar" }, 400);
    }

    const { data, error } = await supabase()
      .from("contacts")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Contato não encontrado" }, 404);
      throw error;
    }

    const contact = toCamel(data);
    contact.timestamp = new Date(data.created_at).getTime();
    console.log(`Contact updated: ${id} -> stage=${data.pipeline_stage}`);
    return c.json({ success: true, message: "Contato atualizado com sucesso!", contact });
  } catch (error) {
    console.log(`Contact update error: ${error}`);
    return c.json({ error: "Erro ao atualizar contato" }, 500);
  }
});

// ── Activities ──

app.get("/make-server-4b2936bc/contacts/:id/activities", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase()
      .from("activities")
      .select("*")
      .eq("contact_id", id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    const activities = (data || []).map((row: any) => {
      const a = toCamel(row);
      a.timestamp = new Date(row.created_at).getTime();
      return a;
    });

    return c.json({ success: true, activities, count: activities.length });
  } catch (error) {
    console.log(`Error retrieving activities: ${error}`);
    return c.json({ error: "Erro ao buscar atividades" }, 500);
  }
});

app.post("/make-server-4b2936bc/contacts/:id/activities", async (c) => {
  try {
    const contactId = c.req.param("id");
    const body = await c.req.json();
    const { date, channel, type, content } = body || {};

    if (!channel || !content) {
      return c.json({ error: "Canal e conteúdo são obrigatórios" }, 400);
    }

    const { data, error } = await supabase()
      .from("activities")
      .insert({
        contact_id: contactId,
        type: type || channel,
        channel,
        description: content,
      })
      .select()
      .single();

    if (error) throw error;

    const activity = toCamel(data);
    activity.timestamp = new Date(data.created_at).getTime();
    // Keep compat fields
    activity.content = data.description;
    activity.date = data.created_at.slice(0, 10);

    console.log(`Activity created for ${contactId}: ${channel}`);
    return c.json({ success: true, activity });
  } catch (error) {
    console.log(`Error creating activity: ${error}`);
    return c.json({ error: "Erro ao criar atividade" }, 500);
  }
});

app.delete("/make-server-4b2936bc/contacts/:id/activities/:activityId", async (c) => {
  try {
    const activityId = c.req.param("activityId");
    const { error } = await supabase().from("activities").delete().eq("id", activityId);
    if (error) throw error;
    return c.json({ success: true, message: "Atividade eliminada" });
  } catch (error) {
    console.log(`Error deleting activity: ${error}`);
    return c.json({ error: "Erro ao eliminar atividade" }, 500);
  }
});

// ============================================================================
// NEWSLETTER (PostgreSQL: newsletter_subscribers table)
// ============================================================================

app.post("/make-server-4b2936bc/newsletter", async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;

    if (!email) return c.json({ error: "Email é obrigatório" }, 400);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return c.json({ error: "Email inválido" }, 400);

    // Upsert (idempotent)
    const { data, error } = await supabase()
      .from("newsletter_subscribers")
      .upsert({ email: email.toLowerCase() }, { onConflict: "email" })
      .select()
      .single();

    if (error) throw error;

    console.log(`Newsletter subscription: ${email}`);
    return c.json({
      success: true,
      message: "Subscrição confirmada! Verifique o seu email.",
      id: data.id,
    });
  } catch (error) {
    console.log(`Newsletter error: ${error}`);
    return c.json({ error: "Erro ao processar subscrição. Tente novamente." }, 500);
  }
});

app.get("/make-server-4b2936bc/subscribers", async (c) => {
  try {
    const { data, error } = await supabase()
      .from("newsletter_subscribers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const subscribers = (data || []).map((row: any) => ({
      id: row.id,
      email: row.email,
      subscribedAt: row.subscribed_at || row.created_at,
      timestamp: new Date(row.created_at).getTime(),
    }));

    return c.json({ success: true, subscribers, count: subscribers.length });
  } catch (error) {
    console.log(`Error retrieving subscribers: ${error}`);
    return c.json({ error: "Erro ao buscar subscritos" }, 500);
  }
});

app.delete("/make-server-4b2936bc/subscribers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { error } = await supabase().from("newsletter_subscribers").delete().eq("id", id);
    if (error) throw error;
    console.log(`Subscriber deleted: ${id}`);
    return c.json({ success: true, message: "Assinante excluído com sucesso" });
  } catch (error) {
    console.log(`Error deleting subscriber: ${error}`);
    return c.json({ error: "Erro ao excluir assinante" }, 500);
  }
});

// ============================================================================
// PROJECTS (PostgreSQL: projects table)
// ============================================================================

app.get("/make-server-4b2936bc/projects", async (c) => {
  try {
    const { data, error } = await supabase()
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const projects = (data || []).map((row: any) => {
      const p = projectFromDb(row);
      p.timestamp = new Date(row.created_at).getTime();
      return p;
    });

    return c.json({ success: true, projects, count: projects.length });
  } catch (error) {
    console.log(`Error retrieving projects: ${error}`);
    return c.json({ error: "Erro ao buscar projetos" }, 500);
  }
});

app.get("/make-server-4b2936bc/projects/by-slug/:slug", async (c) => {
  try {
    const slug = c.req.param("slug");
    const { data, error } = await supabase()
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Imóvel não encontrado" }, 404);
      throw error;
    }

    const project = projectFromDb(data);
    project.timestamp = new Date(data.created_at).getTime();
    return c.json({ success: true, project });
  } catch (error) {
    console.log(`Error retrieving project by slug: ${error}`);
    return c.json({ error: "Erro ao buscar imóvel" }, 500);
  }
});

app.get("/make-server-4b2936bc/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase()
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Projeto não encontrado" }, 404);
      throw error;
    }

    const project = projectFromDb(data);
    project.timestamp = new Date(data.created_at).getTime();
    return c.json({ success: true, project });
  } catch (error) {
    console.log(`Error retrieving project: ${error}`);
    return c.json({ error: "Erro ao buscar projeto" }, 500);
  }
});

app.post("/make-server-4b2936bc/projects", async (c) => {
  try {
    const body = await c.req.json();

    if (!body.title || !body.location) {
      return c.json({ error: "Campos obrigatórios ausentes" }, 400);
    }

    const dbData = projectToDb(body);
    // Ensure defaults
    if (!dbData.status) dbData.status = "draft";
    if (!dbData.published) dbData.published = false;

    // Auto-generate slug from title if not provided
    if (!dbData.slug && dbData.title) {
      dbData.slug = dbData.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }

    const { data, error } = await supabase()
      .from("projects")
      .insert(dbData)
      .select()
      .single();

    if (error) {
      console.log(`Project insert error: ${error.message}`);
      return c.json({ error: "Erro ao criar projeto. Tente novamente." }, 500);
    }

    const project = projectFromDb(data);
    project.timestamp = new Date(data.created_at).getTime();
    console.log(`Project created: ${data.id} - ${data.title}`);
    return c.json({ success: true, message: "Projeto criado com sucesso!", project });
  } catch (error) {
    console.log(`Project creation error: ${error}`);
    return c.json({ error: "Erro ao criar projeto. Tente novamente." }, 500);
  }
});

app.put("/make-server-4b2936bc/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const dbData = projectToDb(body);

    // Remove id from update data
    delete dbData.id;
    delete dbData.created_at;

    const { data, error } = await supabase()
      .from("projects")
      .update(dbData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Projeto não encontrado" }, 404);
      console.log(`Project update error: ${error.message}`);
      return c.json({ error: "Erro ao atualizar projeto. Tente novamente." }, 500);
    }

    const project = projectFromDb(data);
    project.timestamp = new Date(data.created_at).getTime();
    console.log(`Project updated: ${id} - ${data.title}`);
    return c.json({ success: true, message: "Projeto atualizado com sucesso!", project });
  } catch (error) {
    console.log(`Project update error: ${error}`);
    return c.json({ error: "Erro ao atualizar projeto. Tente novamente." }, 500);
  }
});

app.delete("/make-server-4b2936bc/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { error } = await supabase().from("projects").delete().eq("id", id);
    if (error) throw error;
    console.log(`Project deleted: ${id}`);
    return c.json({ success: true, message: "Projeto excluído com sucesso!" });
  } catch (error) {
    console.log(`Project deletion error: ${error}`);
    return c.json({ error: "Erro ao excluir projeto. Tente novamente." }, 500);
  }
});

// ── Units (PostgreSQL: units table) ──

app.get("/make-server-4b2936bc/units", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    let query = supabase().from("units").select("*").order("display_order", { ascending: true });
    if (projectId) query = query.eq("project_id", projectId);

    const { data, error } = await query;
    if (error) throw error;

    const units = rowsToCamel(data || []);
    return c.json({ success: true, units, count: units.length });
  } catch (error) {
    console.log(`Error retrieving units: ${error}`);
    return c.json({ error: "Erro ao buscar unidades" }, 500);
  }
});

app.get("/make-server-4b2936bc/units/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase().from("units").select("*").eq("id", id).single();
    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Unidade não encontrada" }, 404);
      throw error;
    }
    return c.json({ success: true, unit: toCamel(data) });
  } catch (error) {
    console.log(`Error retrieving unit: ${error}`);
    return c.json({ error: "Erro ao buscar unidade" }, 500);
  }
});

app.post("/make-server-4b2936bc/units", async (c) => {
  try {
    const body = await c.req.json();
    const dbData = toSnake(body);
    // Remove non-DB fields
    delete dbData.timestamp;

    const { data, error } = await supabase().from("units").insert(dbData).select().single();
    if (error) {
      console.log(`Unit insert error: ${error.message}`);
      return c.json({ error: "Erro ao criar unidade." }, 500);
    }

    console.log(`Unit created: ${data.id} - ${data.title}`);
    return c.json({ success: true, message: "Unidade criada com sucesso!", unit: toCamel(data) });
  } catch (error) {
    console.log(`Unit creation error: ${error}`);
    return c.json({ error: "Erro ao criar unidade." }, 500);
  }
});

app.put("/make-server-4b2936bc/units/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const dbData = toSnake(body);
    delete dbData.id;
    delete dbData.timestamp;
    delete dbData.created_at;

    const { data, error } = await supabase().from("units").update(dbData).eq("id", id).select().single();
    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Unidade não encontrada" }, 404);
      throw error;
    }

    console.log(`Unit updated: ${id} - ${data.title}`);
    return c.json({ success: true, message: "Unidade atualizada com sucesso!", unit: toCamel(data) });
  } catch (error) {
    console.log(`Unit update error: ${error}`);
    return c.json({ error: "Erro ao atualizar unidade." }, 500);
  }
});

app.delete("/make-server-4b2936bc/units/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { error } = await supabase().from("units").delete().eq("id", id);
    if (error) throw error;
    console.log(`Unit deleted: ${id}`);
    return c.json({ success: true, message: "Unidade eliminada com sucesso!" });
  } catch (error) {
    console.log(`Unit deletion error: ${error}`);
    return c.json({ error: "Erro ao eliminar unidade." }, 500);
  }
});

// ============================================================================
// INSIGHTS (PostgreSQL: insights table)
// ============================================================================

// Field map for insights (KV uses different field names)
function insightToDb(data: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  // Direct mappings
  if (data.title !== undefined) out.title = data.title;
  if (data.description !== undefined) out.summary = data.description;  // KV 'description' → DB 'summary'
  if (data.category !== undefined) out.category = data.category;
  if (data.content !== undefined) out.content = data.content;
  if (data.image !== undefined) out.image_url = data.image;
  if (data.author !== undefined) out.author = data.author;
  if (data.published !== undefined) out.published = data.published;

  // Store extended fields as content (JSON in content field for rich content)
  // The insights table has: title, summary, content, category, image_url, author, published, views
  // Extra KV fields (readTime, icon, iconColor, gradient, excerpt, tags, contentBlocks, etc.)
  // need to go somewhere. We'll use a JSONB extras approach by storing them in content as JSON
  // when contentBlocks exist, otherwise content stays as text.

  // For now, if contentBlocks exist, serialize the full rich content into the content field
  if (data.contentBlocks && Array.isArray(data.contentBlocks) && data.contentBlocks.length > 0) {
    out.content = JSON.stringify({
      blocks: data.contentBlocks,
      readTime: data.readTime,
      icon: data.icon,
      iconColor: data.iconColor,
      gradient: data.gradient,
      excerpt: data.excerpt,
      tags: data.tags,
      authorRole: data.authorRole,
      date: data.date,
      relatedInsights: data.relatedInsights,
    });
  } else if (data.content !== undefined) {
    // Check if content is already a rich JSON string
    try {
      const parsed = JSON.parse(data.content);
      if (parsed.blocks) {
        // Already structured, keep as is
        out.content = data.content;
      }
    } catch {
      // Plain text content — wrap with metadata
      out.content = JSON.stringify({
        text: data.content,
        readTime: data.readTime,
        icon: data.icon,
        iconColor: data.iconColor,
        gradient: data.gradient,
        excerpt: data.excerpt,
        tags: data.tags,
        authorRole: data.authorRole,
        date: data.date,
        relatedInsights: data.relatedInsights,
      });
    }
  }

  return out;
}

function insightFromDb(row: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {
    id: row.id,
    title: row.title,
    description: row.summary,  // DB 'summary' → response 'description'
    category: row.category,
    image: row.image_url,
    author: row.author,
    published: row.published,
    views: row.views,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };

  // Parse rich content from content field
  if (row.content) {
    try {
      const parsed = JSON.parse(row.content);
      if (parsed.blocks) {
        out.contentBlocks = parsed.blocks;
        out.content = "";  // Legacy field
      } else if (parsed.text) {
        out.content = parsed.text;
      }
      // Restore metadata
      out.readTime = parsed.readTime || "5 min";
      out.icon = parsed.icon || "TrendingUp";
      out.iconColor = parsed.iconColor || "#1A3E5C";
      out.gradient = parsed.gradient || "linear-gradient(135deg, #1A3E5C 0%, #2C5F7C 100%)";
      out.excerpt = parsed.excerpt || row.summary;
      out.tags = parsed.tags || [];
      out.authorRole = parsed.authorRole || "";
      out.date = parsed.date || "";
      out.relatedInsights = parsed.relatedInsights || [];
    } catch {
      // Plain text content
      out.content = row.content;
      out.readTime = "5 min";
      out.icon = "TrendingUp";
      out.iconColor = "#1A3E5C";
      out.gradient = "linear-gradient(135deg, #1A3E5C 0%, #2C5F7C 100%)";
      out.excerpt = row.summary;
      out.tags = [];
      out.contentBlocks = [];
    }
  }

  return out;
}

app.get("/make-server-4b2936bc/insights", async (c) => {
  try {
    const { data, error } = await supabase()
      .from("insights")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const insights = (data || []).map((row: any) => {
      const insight = insightFromDb(row);
      insight.timestamp = new Date(row.created_at).getTime();
      return insight;
    });

    return c.json({ success: true, insights, count: insights.length });
  } catch (error) {
    console.log(`Error retrieving insights: ${error}`);
    return c.json({ error: "Erro ao buscar insights" }, 500);
  }
});

app.get("/make-server-4b2936bc/insights/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase().from("insights").select("*").eq("id", id).single();
    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Insight não encontrado" }, 404);
      throw error;
    }

    const insight = insightFromDb(data);
    insight.timestamp = new Date(data.created_at).getTime();
    return c.json({ success: true, insight });
  } catch (error) {
    console.log(`Error retrieving insight: ${error}`);
    return c.json({ error: "Erro ao buscar insight" }, 500);
  }
});

app.post("/make-server-4b2936bc/insights", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.title || !body.description || !body.category) {
      return c.json({ error: "Campos obrigatórios ausentes" }, 400);
    }

    const dbData = insightToDb(body);

    const { data, error } = await supabase().from("insights").insert(dbData).select().single();
    if (error) throw error;

    const insight = insightFromDb(data);
    insight.timestamp = new Date(data.created_at).getTime();
    console.log(`Insight created: ${data.id} - ${data.title}`);
    return c.json({ success: true, message: "Insight criado com sucesso!", insight });
  } catch (error) {
    console.log(`Insight creation error: ${error}`);
    return c.json({ error: "Erro ao criar insight. Tente novamente." }, 500);
  }
});

app.put("/make-server-4b2936bc/insights/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    if (!body.title || !body.description || !body.category) {
      return c.json({ error: "Campos obrigatórios ausentes" }, 400);
    }

    const dbData = insightToDb(body);

    const { data, error } = await supabase().from("insights").update(dbData).eq("id", id).select().single();
    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Insight não encontrado" }, 404);
      throw error;
    }

    const insight = insightFromDb(data);
    insight.timestamp = new Date(data.created_at).getTime();
    console.log(`Insight updated: ${id} - ${data.title}`);
    return c.json({ success: true, message: "Insight atualizado com sucesso!", insight });
  } catch (error) {
    console.log(`Insight update error: ${error}`);
    return c.json({ error: "Erro ao atualizar insight. Tente novamente." }, 500);
  }
});

app.delete("/make-server-4b2936bc/insights/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { error } = await supabase().from("insights").delete().eq("id", id);
    if (error) throw error;
    console.log(`Insight deleted: ${id}`);
    return c.json({ success: true, message: "Insight excluído com sucesso!" });
  } catch (error) {
    console.log(`Insight deletion error: ${error}`);
    return c.json({ error: "Erro ao excluir insight. Tente novamente." }, 500);
  }
});

// ============================================================================
// TESTIMONIALS (PostgreSQL: testimonials table)
// ============================================================================

function testimonialToDb(data: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  if (data.name !== undefined) out.name = data.name;
  if (data.role !== undefined) out.role = data.role;
  if (data.company !== undefined) out.company = data.company;
  if (data.image !== undefined) out.image_url = data.image;
  if (data.content !== undefined) out.text = data.content;  // KV 'content' → DB 'text'
  if (data.rating !== undefined) out.rating = data.rating;
  if (data.published !== undefined) out.published = data.published;
  return out;
}

function testimonialFromDb(row: Record<string, any>): Record<string, any> {
  return {
    id: row.id,
    name: row.name,
    role: row.role,
    company: row.company,
    image: row.image_url,
    content: row.text,  // DB 'text' → response 'content'
    rating: row.rating,
    published: row.published,
    createdAt: row.created_at,
    updatedAt: row.updated_at || row.created_at,
    timestamp: new Date(row.created_at).getTime(),
  };
}

app.get("/make-server-4b2936bc/testimonials", async (c) => {
  try {
    const { data, error } = await supabase()
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw error;

    const testimonials = (data || []).map(testimonialFromDb);
    return c.json({ success: true, testimonials, count: testimonials.length });
  } catch (error) {
    console.log(`Error retrieving testimonials: ${error}`);
    return c.json({ error: "Erro ao buscar depoimentos" }, 500);
  }
});

app.get("/make-server-4b2936bc/testimonials/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase().from("testimonials").select("*").eq("id", id).single();
    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Depoimento não encontrado" }, 404);
      throw error;
    }
    return c.json({ success: true, testimonial: testimonialFromDb(data) });
  } catch (error) {
    console.log(`Error retrieving testimonial: ${error}`);
    return c.json({ error: "Erro ao buscar depoimento" }, 500);
  }
});

app.post("/make-server-4b2936bc/testimonials", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.name || !body.role || !body.content) {
      return c.json({ error: "Campos obrigatórios ausentes (nome, cargo, depoimento)" }, 400);
    }

    const dbData = testimonialToDb(body);
    const { data, error } = await supabase().from("testimonials").insert(dbData).select().single();
    if (error) throw error;

    console.log(`Testimonial created: ${data.id} - ${data.name}`);
    return c.json({ success: true, message: "Depoimento criado com sucesso!", testimonial: testimonialFromDb(data) });
  } catch (error) {
    console.log(`Testimonial creation error: ${error}`);
    return c.json({ error: "Erro ao criar depoimento. Tente novamente." }, 500);
  }
});

app.put("/make-server-4b2936bc/testimonials/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    if (!body.name || !body.role || !body.content) {
      return c.json({ error: "Campos obrigatórios ausentes" }, 400);
    }

    const dbData = testimonialToDb(body);
    const { data, error } = await supabase().from("testimonials").update(dbData).eq("id", id).select().single();
    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Depoimento não encontrado" }, 404);
      throw error;
    }

    console.log(`Testimonial updated: ${id} - ${data.name}`);
    return c.json({ success: true, message: "Depoimento atualizado com sucesso!", testimonial: testimonialFromDb(data) });
  } catch (error) {
    console.log(`Testimonial update error: ${error}`);
    return c.json({ error: "Erro ao atualizar depoimento. Tente novamente." }, 500);
  }
});

app.delete("/make-server-4b2936bc/testimonials/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { error } = await supabase().from("testimonials").delete().eq("id", id);
    if (error) throw error;
    console.log(`Testimonial deleted: ${id}`);
    return c.json({ success: true, message: "Depoimento excluído com sucesso!" });
  } catch (error) {
    console.log(`Testimonial deletion error: ${error}`);
    return c.json({ error: "Erro ao excluir depoimento. Tente novamente." }, 500);
  }
});

// ============================================================================
// FOLLOW-UPS (PostgreSQL: followups table)
// ============================================================================

app.get("/make-server-4b2936bc/contacts/:id/followups", async (c) => {
  try {
    const contactId = c.req.param("id");
    const { data, error } = await supabase()
      .from("followups")
      .select("*")
      .eq("contact_id", contactId)
      .order("due_date", { ascending: true });

    if (error) throw error;

    const followups = (data || []).map((row: any) => {
      const f = toCamel(row);
      f.timestamp = new Date(row.created_at).getTime();
      return f;
    });

    return c.json({ success: true, followups, count: followups.length });
  } catch (error) {
    console.log(`Error retrieving followups: ${error}`);
    return c.json({ error: "Erro ao buscar follow-ups" }, 500);
  }
});

app.post("/make-server-4b2936bc/contacts/:id/followups", async (c) => {
  try {
    const contactId = c.req.param("id");
    const body = await c.req.json();
    const { title, type, dueDate, dueTime, priority, notes } = body || {};

    if (!title || !type || !dueDate || !priority) {
      return c.json({ error: "Título, tipo, data e prioridade são obrigatórios" }, 400);
    }

    const { data, error } = await supabase()
      .from("followups")
      .insert({
        contact_id: contactId,
        title,
        type,
        due_date: dueDate,
        due_time: dueTime || null,
        priority,
        notes: notes || "",
        status: "pending",
      })
      .select()
      .single();

    if (error) throw error;

    const followup = toCamel(data);
    followup.timestamp = new Date(data.created_at).getTime();
    console.log(`Follow-up created for ${contactId}: ${type} - ${title}`);
    return c.json({ success: true, followup });
  } catch (error) {
    console.log(`Error creating followup: ${error}`);
    return c.json({ error: "Erro ao criar follow-up" }, 500);
  }
});

app.put("/make-server-4b2936bc/contacts/:id/followups/:fid", async (c) => {
  try {
    const fid = c.req.param("fid");
    const body = await c.req.json();

    const updateData: Record<string, any> = {};
    const fieldMap: Record<string, string> = {
      title: "title",
      type: "type",
      dueDate: "due_date",
      dueTime: "due_time",
      priority: "priority",
      notes: "notes",
      status: "status",
      outcome: "outcome",
      outcomeNotes: "outcome_notes",
    };

    for (const [camel, snake] of Object.entries(fieldMap)) {
      if (body[camel] !== undefined) updateData[snake] = body[camel];
    }

    // Auto-set completedAt when status becomes completed
    if (body.status === "completed") {
      updateData.completed_at = new Date().toISOString();
    }

    const { data, error } = await supabase()
      .from("followups")
      .update(updateData)
      .eq("id", fid)
      .select()
      .single();

    if (error) {
      if (error.code === "PGRST116") return c.json({ error: "Follow-up não encontrado" }, 404);
      throw error;
    }

    const followup = toCamel(data);
    followup.timestamp = new Date(data.created_at).getTime();
    return c.json({ success: true, followup });
  } catch (error) {
    console.log(`Error updating followup: ${error}`);
    return c.json({ error: "Erro ao atualizar follow-up" }, 500);
  }
});

app.delete("/make-server-4b2936bc/contacts/:id/followups/:fid", async (c) => {
  try {
    const fid = c.req.param("fid");
    const { error } = await supabase().from("followups").delete().eq("id", fid);
    if (error) throw error;
    return c.json({ success: true, message: "Follow-up eliminado" });
  } catch (error) {
    console.log(`Error deleting followup: ${error}`);
    return c.json({ error: "Erro ao eliminar follow-up" }, 500);
  }
});

app.get("/make-server-4b2936bc/followups/pending", async (c) => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const { data, error } = await supabase()
      .from("followups")
      .select("*")
      .eq("status", "pending")
      .order("due_date", { ascending: true });

    if (error) throw error;

    const followups = (data || []).map((row: any) => {
      const f = toCamel(row);
      f.isOverdue = row.due_date < today;
      f.timestamp = new Date(row.created_at).getTime();
      return f;
    });

    return c.json({ success: true, followups, count: followups.length });
  } catch (error) {
    console.log(`Error retrieving pending followups: ${error}`);
    return c.json({ error: "Erro ao buscar follow-ups pendentes" }, 500);
  }
});

// ============================================================================
// IMAGE UPLOAD (unchanged — already uses Supabase Storage)
// ============================================================================

async function handleImageUpload(c: any, bucketName: string, folder: string) {
  try {
    const formData = await c.req.formData();
    const file = formData.get("file") as File;
    if (!file) return c.json({ error: "Nenhum arquivo foi enviado" }, 400);
    if (!file.type.startsWith("image/")) return c.json({ error: "Apenas imagens são permitidas" }, 400);
    if (file.size > 5 * 1024 * 1024) return c.json({ error: "A imagem deve ter no máximo 5MB" }, 400);

    const sb = supabase();
    const { data: buckets } = await sb.storage.listBuckets();
    if (!buckets?.some((b: any) => b.name === bucketName)) {
      await sb.storage.createBucket(bucketName, { public: false, fileSizeLimit: 5242880 });
    }

    const timestamp = Date.now();
    const fileExt = file.name.split(".").pop();
    const fileName = `${timestamp}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error: uploadError } = await sb.storage.from(bucketName).upload(filePath, arrayBuffer, { contentType: file.type });
    if (uploadError) {
      console.log(`Upload error:`, uploadError);
      return c.json({ error: "Erro ao fazer upload da imagem" }, 500);
    }

    const { data: signedUrlData, error: signedUrlError } = await sb.storage.from(bucketName).createSignedUrl(filePath, 315360000);
    if (signedUrlError) {
      console.log(`Signed URL error:`, signedUrlError);
      return c.json({ error: "Erro ao gerar URL da imagem" }, 500);
    }

    console.log(`Image uploaded: ${filePath}`);
    return c.json({ success: true, url: signedUrlData.signedUrl, path: filePath });
  } catch (error) {
    console.log(`Image upload error: ${error}`);
    return c.json({ error: "Erro ao processar upload" }, 500);
  }
}

app.post("/make-server-4b2936bc/upload/projects", (c) => handleImageUpload(c, "make-4b2936bc-projects", "projects"));
app.post("/make-server-4b2936bc/upload/insights", (c) => handleImageUpload(c, "make-4b2936bc-insights", "insights"));
app.post("/make-server-4b2936bc/upload/testimonials", (c) => handleImageUpload(c, "make-4b2936bc-testimonials", "testimonials"));
app.post("/make-server-4b2936bc/upload/units", (c) => handleImageUpload(c, "make-4b2936bc-units", "units"));

// ============================================================================
// CONTROLO (stays on KV — internal management, not public-facing)
// ============================================================================

// --- Controlo Projects ---
app.get("/make-server-4b2936bc/controlo/projects", async (c) => {
  try {
    const items = await kv.getByPrefix("controlo:project:");
    const sorted = items.sort((a: any, b: any) => (a.label || "").localeCompare(b.label || ""));
    return c.json({ success: true, projects: sorted, count: sorted.length });
  } catch (error) {
    console.log(`Error retrieving controlo projects: ${error}`);
    return c.json({ error: "Erro ao buscar projetos de controlo" }, 500);
  }
});

app.post("/make-server-4b2936bc/controlo/projects", async (c) => {
  try {
    const body = await c.req.json();
    const { id, label } = body;
    if (!id || !label) return c.json({ error: "id e label são obrigatórios" }, 400);
    const key = `controlo:project:${id}`;
    const existing = await kv.get(key);
    if (existing) return c.json({ error: "Já existe um projeto com este ID" }, 409);
    const data = { id, label, timestamp: Date.now() };
    await kv.set(key, data);
    return c.json({ success: true, project: data });
  } catch (error) {
    console.log(`Error creating controlo project: ${error}`);
    return c.json({ error: "Erro ao criar projeto de controlo" }, 500);
  }
});

app.put("/make-server-4b2936bc/controlo/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const key = `controlo:project:${id}`;
    const existing = await kv.get(key);
    if (!existing) return c.json({ error: "Projeto não encontrado" }, 404);
    const body = await c.req.json();
    const updated = { ...(existing as any), ...body, id, timestamp: Date.now() };
    await kv.set(key, updated);
    return c.json({ success: true, project: updated });
  } catch (error) {
    console.log(`Error updating controlo project: ${error}`);
    return c.json({ error: "Erro ao atualizar projeto de controlo" }, 500);
  }
});

app.delete("/make-server-4b2936bc/controlo/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`controlo:project:${id}`);
    return c.json({ success: true, message: "Projeto de controlo eliminado" });
  } catch (error) {
    console.log(`Error deleting controlo project: ${error}`);
    return c.json({ error: "Erro ao eliminar projeto de controlo" }, 500);
  }
});

// --- Controlo Units ---
app.get("/make-server-4b2936bc/controlo/units", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const items = await kv.getByPrefix(`controlo:unit:${projectId}:`);
    const sorted = items.sort((a: any, b: any) => (a.code || "").localeCompare(b.code || ""));
    return c.json({ success: true, units: sorted, count: sorted.length });
  } catch (error) {
    console.log(`Error retrieving controlo units: ${error}`);
    return c.json({ error: "Erro ao buscar unidades" }, 500);
  }
});

app.post("/make-server-4b2936bc/controlo/units", async (c) => {
  try {
    const body = await c.req.json();
    const { projectId } = body;
    if (!projectId || !body.code) return c.json({ error: "projectId e code são obrigatórios" }, 400);
    const timestamp = Date.now();
    const id = `${timestamp}`;
    const key = `controlo:unit:${projectId}:${id}`;
    const data = { ...body, id, timestamp };
    await kv.set(key, data);
    return c.json({ success: true, unit: data });
  } catch (error) {
    console.log(`Error creating controlo unit: ${error}`);
    return c.json({ error: "Erro ao criar unidade" }, 500);
  }
});

app.put("/make-server-4b2936bc/controlo/units/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const key = `controlo:unit:${projectId}:${id}`;
    const existing = await kv.get(key);
    if (!existing) return c.json({ error: "Unidade não encontrada" }, 404);
    const body = await c.req.json();
    const updated = { ...(existing as any), ...body, id, projectId, timestamp: Date.now() };
    await kv.set(key, updated);
    return c.json({ success: true, unit: updated });
  } catch (error) {
    console.log(`Error updating controlo unit: ${error}`);
    return c.json({ error: "Erro ao atualizar unidade" }, 500);
  }
});

app.delete("/make-server-4b2936bc/controlo/units/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    await kv.del(`controlo:unit:${projectId}:${id}`);
    return c.json({ success: true, message: "Unidade eliminada" });
  } catch (error) {
    console.log(`Error deleting controlo unit: ${error}`);
    return c.json({ error: "Erro ao eliminar unidade" }, 500);
  }
});

// --- Controlo Targets ---
app.get("/make-server-4b2936bc/controlo/targets", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const targets = await kv.get(`controlo:targets:${projectId}`);
    return c.json({ success: true, targets: targets || null });
  } catch (error) {
    console.log(`Error retrieving controlo targets: ${error}`);
    return c.json({ error: "Erro ao buscar metas" }, 500);
  }
});

app.put("/make-server-4b2936bc/controlo/targets", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const body = await c.req.json();
    const key = `controlo:targets:${projectId}`;
    const data = { ...body, id: key, projectId, timestamp: Date.now() };
    await kv.set(key, data);
    return c.json({ success: true, targets: data });
  } catch (error) {
    console.log(`Error updating controlo targets: ${error}`);
    return c.json({ error: "Erro ao atualizar metas" }, 500);
  }
});

// --- Controlo Reviews ---
app.get("/make-server-4b2936bc/controlo/reviews", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const items = await kv.getByPrefix(`controlo:review:${projectId}:`);
    const sorted = items.sort((a: any, b: any) => (a.date || "").localeCompare(b.date || ""));
    return c.json({ success: true, reviews: sorted, count: sorted.length });
  } catch (error) {
    console.log(`Error retrieving controlo reviews: ${error}`);
    return c.json({ error: "Erro ao buscar datas de revisão" }, 500);
  }
});

app.post("/make-server-4b2936bc/controlo/reviews", async (c) => {
  try {
    const body = await c.req.json();
    const { projectId } = body;
    if (!projectId || !body.date) return c.json({ error: "projectId e date são obrigatórios" }, 400);
    const timestamp = Date.now();
    const id = `${timestamp}`;
    const key = `controlo:review:${projectId}:${id}`;
    await kv.set(key, { ...body, id, timestamp });
    return c.json({ success: true, review: { ...body, id, timestamp } });
  } catch (error) {
    console.log(`Error creating controlo review: ${error}`);
    return c.json({ error: "Erro ao criar data de revisão" }, 500);
  }
});

app.put("/make-server-4b2936bc/controlo/reviews/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const key = `controlo:review:${projectId}:${id}`;
    const existing = await kv.get(key);
    if (!existing) return c.json({ error: "Data de revisão não encontrada" }, 404);
    const body = await c.req.json();
    const updated = { ...(existing as any), ...body, id, projectId, timestamp: Date.now() };
    await kv.set(key, updated);
    return c.json({ success: true, review: updated });
  } catch (error) {
    console.log(`Error updating controlo review: ${error}`);
    return c.json({ error: "Erro ao atualizar data de revisão" }, 500);
  }
});

app.delete("/make-server-4b2936bc/controlo/reviews/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    await kv.del(`controlo:review:${projectId}:${id}`);
    return c.json({ success: true, message: "Data de revisão eliminada" });
  } catch (error) {
    console.log(`Error deleting controlo review: ${error}`);
    return c.json({ error: "Erro ao eliminar data de revisão" }, 500);
  }
});

// --- Controlo Weekly Logs ---
app.get("/make-server-4b2936bc/controlo/weeklylogs", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const items = await kv.getByPrefix(`controlo:wlog:${projectId}:`);
    const sorted = items.sort((a: any, b: any) => (b.weekStart || "").localeCompare(a.weekStart || ""));
    return c.json({ success: true, weeklylogs: sorted, count: sorted.length });
  } catch (error) {
    console.log(`Error retrieving controlo weeklylogs: ${error}`);
    return c.json({ error: "Erro ao buscar registos semanais" }, 500);
  }
});

app.post("/make-server-4b2936bc/controlo/weeklylogs", async (c) => {
  try {
    const body = await c.req.json();
    const { projectId } = body;
    if (!projectId || !body.unitId || !body.weekStart) return c.json({ error: "projectId, unitId e weekStart são obrigatórios" }, 400);
    const timestamp = Date.now();
    const id = `${timestamp}`;
    const key = `controlo:wlog:${projectId}:${id}`;
    await kv.set(key, { ...body, id, timestamp });
    return c.json({ success: true, weeklylog: { ...body, id, timestamp } });
  } catch (error) {
    console.log(`Error creating controlo weeklylog: ${error}`);
    return c.json({ error: "Erro ao criar registo semanal" }, 500);
  }
});

app.put("/make-server-4b2936bc/controlo/weeklylogs/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const key = `controlo:wlog:${projectId}:${id}`;
    const existing = await kv.get(key);
    if (!existing) return c.json({ error: "Registo semanal não encontrado" }, 404);
    const body = await c.req.json();
    const updated = { ...(existing as any), ...body, id, projectId, timestamp: Date.now() };
    await kv.set(key, updated);
    return c.json({ success: true, weeklylog: updated });
  } catch (error) {
    console.log(`Error updating controlo weeklylog: ${error}`);
    return c.json({ error: "Erro ao atualizar registo semanal" }, 500);
  }
});

app.delete("/make-server-4b2936bc/controlo/weeklylogs/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    await kv.del(`controlo:wlog:${projectId}:${id}`);
    return c.json({ success: true, message: "Registo semanal eliminado" });
  } catch (error) {
    console.log(`Error deleting controlo weeklylog: ${error}`);
    return c.json({ error: "Erro ao eliminar registo semanal" }, 500);
  }
});

// --- Controlo Competitors ---
app.get("/make-server-4b2936bc/controlo/competitors", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const items = await kv.getByPrefix(`controlo:comp:${projectId}:`);
    const sorted = items.sort((a: any, b: any) => (b.date || "").localeCompare(a.date || ""));
    return c.json({ success: true, competitors: sorted, count: sorted.length });
  } catch (error) {
    console.log(`Error retrieving controlo competitors: ${error}`);
    return c.json({ error: "Erro ao buscar concorrentes" }, 500);
  }
});

app.post("/make-server-4b2936bc/controlo/competitors", async (c) => {
  try {
    const body = await c.req.json();
    const { projectId } = body;
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const timestamp = Date.now();
    const id = `${timestamp}`;
    const pricePerM2 = body.area > 0 ? Math.round(body.price / body.area) : 0;
    const data = { ...body, id, pricePerM2, timestamp };
    await kv.set(`controlo:comp:${projectId}:${id}`, data);
    return c.json({ success: true, competitor: data });
  } catch (error) {
    console.log(`Error creating controlo competitor: ${error}`);
    return c.json({ error: "Erro ao criar concorrente" }, 500);
  }
});

app.put("/make-server-4b2936bc/controlo/competitors/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    const key = `controlo:comp:${projectId}:${id}`;
    const existing = await kv.get(key);
    if (!existing) return c.json({ error: "Concorrente não encontrado" }, 404);
    const body = await c.req.json();
    const pricePerM2 = body.area > 0 ? Math.round(body.price / body.area) : 0;
    const updated = { ...(existing as any), ...body, id, projectId, pricePerM2, timestamp: Date.now() };
    await kv.set(key, updated);
    return c.json({ success: true, competitor: updated });
  } catch (error) {
    console.log(`Error updating controlo competitor: ${error}`);
    return c.json({ error: "Erro ao atualizar concorrente" }, 500);
  }
});

app.delete("/make-server-4b2936bc/controlo/competitors/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);
    await kv.del(`controlo:comp:${projectId}:${id}`);
    return c.json({ success: true, message: "Concorrente eliminado" });
  } catch (error) {
    console.log(`Error deleting controlo competitor: ${error}`);
    return c.json({ error: "Erro ao eliminar concorrente" }, 500);
  }
});

// --- Auto KPIs (reads from PostgreSQL contacts + KV controlo) ---
app.get("/make-server-4b2936bc/controlo/auto-kpis", async (c) => {
  try {
    const projectId = c.req.query("projectId");
    if (!projectId) return c.json({ error: "projectId é obrigatório" }, 400);

    // Fetch contacts from PostgreSQL, controlo data from KV
    const [contactsResult, units, targets] = await Promise.all([
      supabase().from("contacts").select("*"),
      kv.getByPrefix(`controlo:unit:${projectId}:`),
      kv.get(`controlo:targets:${projectId}`),
    ]);

    const allContacts = contactsResult.data || [];
    // Filter contacts for this project (check both source_id and property_id)
    const contacts = allContacts.filter(
      (ct: any) => ct.source_id === projectId || ct.property_id === projectId
    );

    const stageOrder: Record<string, number> = {
      novo: 0, contato: 1, qualificado: 2, visita: 3,
      proposta: 4, negociacao: 5, ganho: 6, perdido: -1,
    };
    const stageKeys = ["novo", "contato", "qualificado", "visita", "proposta", "negociacao", "ganho", "perdido"];

    const now = Date.now();
    const fourteenDaysMs = 14 * 24 * 60 * 60 * 1000;
    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;

    const active = contacts.filter((ct: any) => (ct.pipeline_stage || "novo") !== "perdido");
    const getTs = (ct: any) => new Date(ct.created_at).getTime();

    const created14d = active.filter((ct: any) => now - getTs(ct) <= fourteenDaysMs);
    const created30d = active.filter((ct: any) => now - getTs(ct) <= thirtyDaysMs);

    const totalLeads14d = created14d.length;
    const qualifiedLeads14d = created14d.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 2).length;
    const visits14d = created14d.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 3).length;
    const proposals30d = created30d.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 4).length;

    const proposalContacts = active.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 4 && (ct.max_budget || 0) > 0);
    const bestOffer = proposalContacts.length > 0 ? Math.max(...proposalContacts.map((ct: any) => Number(ct.max_budget) || 0)) : 0;

    const leadsByStage: Record<string, number> = {};
    stageKeys.forEach((s) => { leadsByStage[s] = 0; });
    contacts.forEach((ct: any) => {
      const s = ct.pipeline_stage || "novo";
      leadsByStage[s] = (leadsByStage[s] || 0) + 1;
    });

    const leadToVisitRate = totalLeads14d > 0 ? Math.round((visits14d / totalLeads14d) * 1000) / 10 : 0;
    const visitToProposalRate = visits14d > 0 ? Math.round((proposals30d / visits14d) * 1000) / 10 : 0;

    const tgt = targets as any;
    let status = "SEM_DADOS";
    if (contacts.length > 0 && tgt) {
      let metCount = 0;
      if (qualifiedLeads14d >= (tgt.qualifiedLeads14d || 0)) metCount++;
      if (visits14d >= (tgt.visits14d || 0)) metCount++;
      if (proposals30d >= (tgt.proposals30d || 0)) metCount++;
      if (metCount === 3) status = "MANTER";
      else if (metCount >= 1) status = "VIGIAR";
      else status = "REDUZIR";
    } else if (contacts.length > 0) {
      status = "VIGIAR";
    }

    const unitList = (units as any[]) || [];
    const perUnit = unitList.map((unit: any) => {
      const unitContacts = contacts.filter((ct: any) => ct.source_id === unit.id || ct.property_id === unit.id);
      const unitActive = unitContacts.filter((ct: any) => (ct.pipeline_stage || "novo") !== "perdido");
      const unitCreated14d = unitActive.filter((ct: any) => now - getTs(ct) <= fourteenDaysMs);
      const unitCreated30d = unitActive.filter((ct: any) => now - getTs(ct) <= thirtyDaysMs);

      const uTotalLeads14d = unitCreated14d.length;
      const uQualifiedLeads14d = unitCreated14d.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 2).length;
      const uVisits14d = unitCreated14d.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 3).length;
      const uProposals30d = unitCreated30d.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 4).length;
      const uProposalContacts = unitActive.filter((ct: any) => stageOrder[ct.pipeline_stage || "novo"] >= 4 && (ct.max_budget || 0) > 0);
      const uBestOffer = uProposalContacts.length > 0 ? Math.max(...uProposalContacts.map((ct: any) => Number(ct.max_budget) || 0)) : 0;
      const uGapVsAsk = unit.askPrice > 0 && uBestOffer > 0 ? Math.round(((uBestOffer - unit.askPrice) / unit.askPrice) * 1000) / 10 : 0;
      const uLeadToVisitRate = uTotalLeads14d > 0 ? Math.round((uVisits14d / uTotalLeads14d) * 1000) / 10 : 0;
      const uVisitToProposalRate = uVisits14d > 0 ? Math.round((uProposals30d / uVisits14d) * 1000) / 10 : 0;

      let uStatus = "SEM_DADOS";
      if (unitContacts.length > 0 && tgt) {
        let m = 0;
        if (uQualifiedLeads14d >= (tgt.qualifiedLeads14d || 0)) m++;
        if (uVisits14d >= (tgt.visits14d || 0)) m++;
        if (uProposals30d >= (tgt.proposals30d || 0)) m++;
        if (m === 3) uStatus = "MANTER";
        else if (m >= 1) uStatus = "VIGIAR";
        else uStatus = "REDUZIR";
      } else if (unitContacts.length > 0) {
        uStatus = "VIGIAR";
      }

      return {
        unitId: unit.id,
        unitCode: unit.code,
        askPrice: unit.askPrice || 0,
        totalLeads14d: uTotalLeads14d,
        qualifiedLeads14d: uQualifiedLeads14d,
        visits14d: uVisits14d,
        proposals30d: uProposals30d,
        bestOffer: uBestOffer,
        gapVsAsk: uGapVsAsk,
        leadToVisitRate: uLeadToVisitRate,
        visitToProposalRate: uVisitToProposalRate,
        status: uStatus,
      };
    });

    return c.json({
      success: true,
      kpis: {
        totalLeads14d,
        qualifiedLeads14d,
        visits14d,
        proposals30d,
        bestOffer,
        leadsByStage,
        leadToVisitRate,
        visitToProposalRate,
        status,
        perUnit,
        totalContacts: contacts.length,
      },
    });
  } catch (error) {
    console.log(`Error computing auto-kpis: ${error}`);
    return c.json({ error: "Erro ao calcular KPIs automáticos" }, 500);
  }
});

// ============================================================================
// KV → POSTGRESQL MIGRATION ENDPOINT
// ============================================================================

app.post("/make-server-4b2936bc/migrate-kv-to-pg", async (c) => {
  try {
    const sb = supabase();
    const results: Record<string, { migrated: number; skipped: number; errors: string[] }> = {};

    // ── 1. Migrate projects ──
    const projectsKv = await kv.getByPrefix("project:");
    const projectIdMap: Record<string, string> = {};  // old KV id → new UUID
    results.projects = { migrated: 0, skipped: 0, errors: [] };

    for (const p of projectsKv as any[]) {
      try {
        const dbData: Record<string, any> = {
          title: p.title || "Sem título",
          description: p.description || null,
          image_url: p.image || null,
          category: p.category || null,
          location: p.location || null,
          area: p.area || null,
          status: p.status || "draft",
          status_label: p.statusLabel || null,
          year: p.year || null,
          client: p.client || null,
          images: p.images || null,
          features: p.features || null,
          published: p.published !== undefined ? p.published : true,
          strategy: p.strategy || null,
          roi: p.roi || null,
          price: p.price || null,
          investment: p.investment || null,
          bedrooms: p.bedrooms || null,
          bathrooms: p.bathrooms || null,
          timeline: p.timeline || null,
          timeline_phases: p.timelinePhases || null,
          highlights: p.highlights || null,
          portal_link: p.portalLink || null,
          brochure_link: p.brochureLink || null,
          landing_page: p.landingPage || null,
          listing_type: "venda",
          // Auto-generate slug
          slug: (p.title || "sem-titulo")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, ""),
        };

        if (p.createdAt) dbData.created_at = p.createdAt;
        if (p.updatedAt) dbData.updated_at = p.updatedAt;

        const { data, error } = await sb.from("projects").insert(dbData).select("id").single();
        if (error) {
          results.projects.errors.push(`${p.id}: ${error.message}`);
          results.projects.skipped++;
        } else {
          projectIdMap[p.id] = data.id;
          results.projects.migrated++;
        }
      } catch (err) {
        results.projects.errors.push(`${p.id}: ${err}`);
        results.projects.skipped++;
      }
    }

    // ── 2. Migrate contacts ──
    const contactsKv = await kv.getByPrefix("contact:");
    results.contacts = { migrated: 0, skipped: 0, errors: [] };

    const contactIdMap: Record<string, string> = {};

    for (const ct of contactsKv as any[]) {
      try {
        const dbData: Record<string, any> = {
          name: ct.name || "Sem nome",
          email: ct.email || "sem@email.com",
          phone: ct.phone || null,
          interest: ct.interest || null,
          message: ct.message || null,
          pipeline_stage: ct.pipelineStage || "novo",
          desired_locations: ct.desiredLocations || null,
          max_budget: ct.maxBudget || null,
          typology: ct.typology || null,
          notes: ct.notes || null,
          source: ct.origin || ct.source || "website",
          source_id: ct.projectId || ct.sourceId || null,
          source_title: ct.sourceTitle || null,
          source_url: ct.sourceUrl || null,
          classifications: ct.classifications || null,
          lead_number: ct.leadNumber || null,
        };

        // Map project ID to new UUID if available
        if (ct.projectId && projectIdMap[ct.projectId]) {
          dbData.property_id = projectIdMap[ct.projectId];
        }

        if (ct.createdAt) dbData.created_at = ct.createdAt;

        const { data, error } = await sb.from("contacts").insert(dbData).select("id").single();
        if (error) {
          results.contacts.errors.push(`${ct.id}: ${error.message}`);
          results.contacts.skipped++;
        } else {
          contactIdMap[ct.id] = data.id;
          // Also map the normalized ID (without "contact:" prefix)
          const normalizedId = ct.id.startsWith("contact:") ? ct.id.slice("contact:".length) : ct.id;
          contactIdMap[normalizedId] = data.id;
          results.contacts.migrated++;
        }
      } catch (err) {
        results.contacts.errors.push(`${ct.id}: ${err}`);
        results.contacts.skipped++;
      }
    }

    // ── 3. Migrate activities ──
    results.activities = { migrated: 0, skipped: 0, errors: [] };

    for (const ct of contactsKv as any[]) {
      const normalizedId = ct.id.startsWith("contact:") ? ct.id.slice("contact:".length) : ct.id;
      const activitiesKv = await kv.getByPrefix(`activity:${normalizedId}:`);

      for (const act of activitiesKv as any[]) {
        try {
          const newContactId = contactIdMap[normalizedId];
          if (!newContactId) {
            results.activities.skipped++;
            continue;
          }

          const { error } = await sb.from("activities").insert({
            contact_id: newContactId,
            type: act.type || act.channel || "note",
            channel: act.channel || null,
            description: act.content || null,
            created_at: act.createdAt || new Date(act.timestamp || Date.now()).toISOString(),
          });

          if (error) {
            results.activities.errors.push(`${act.id}: ${error.message}`);
            results.activities.skipped++;
          } else {
            results.activities.migrated++;
          }
        } catch (err) {
          results.activities.errors.push(`${act.id}: ${err}`);
          results.activities.skipped++;
        }
      }
    }

    // ── 4. Migrate followups ──
    results.followups = { migrated: 0, skipped: 0, errors: [] };

    for (const ct of contactsKv as any[]) {
      const normalizedId = ct.id.startsWith("contact:") ? ct.id.slice("contact:".length) : ct.id;
      const followupsKv = await kv.getByPrefix(`followup:${normalizedId}:`);

      for (const fu of followupsKv as any[]) {
        try {
          const newContactId = contactIdMap[normalizedId];
          if (!newContactId) {
            results.followups.skipped++;
            continue;
          }

          const { error } = await sb.from("followups").insert({
            contact_id: newContactId,
            title: fu.title || "Follow-up",
            type: fu.type || "task",
            due_date: fu.dueDate,
            due_time: fu.dueTime || null,
            priority: fu.priority || "medium",
            status: fu.status || "pending",
            outcome: fu.outcome || null,
            outcome_notes: fu.outcomeNotes || null,
            notes: fu.notes || null,
            completed_at: fu.completedAt || null,
            created_at: fu.createdAt || new Date(fu.timestamp || Date.now()).toISOString(),
          });

          if (error) {
            results.followups.errors.push(`${fu.id}: ${error.message}`);
            results.followups.skipped++;
          } else {
            results.followups.migrated++;
          }
        } catch (err) {
          results.followups.errors.push(`${fu.id}: ${err}`);
          results.followups.skipped++;
        }
      }
    }

    // ── 5. Migrate insights ──
    const insightsKv = await kv.getByPrefix("insight:");
    results.insights = { migrated: 0, skipped: 0, errors: [] };

    for (const ins of insightsKv as any[]) {
      try {
        const dbData: Record<string, any> = {
          title: ins.title || "Sem título",
          summary: ins.description || ins.excerpt || null,
          category: ins.category || null,
          image_url: ins.image || null,
          author: ins.author || "HABTA",
          published: true,
        };

        // Store rich content as JSON in content field
        dbData.content = JSON.stringify({
          blocks: ins.contentBlocks || [],
          text: ins.content || "",
          readTime: ins.readTime,
          icon: ins.icon,
          iconColor: ins.iconColor,
          gradient: ins.gradient,
          excerpt: ins.excerpt || ins.description,
          tags: ins.tags || [],
          authorRole: ins.authorRole,
          date: ins.date,
          relatedInsights: ins.relatedInsights || [],
        });

        if (ins.createdAt) dbData.created_at = ins.createdAt;
        if (ins.updatedAt) dbData.updated_at = ins.updatedAt;

        const { error } = await sb.from("insights").insert(dbData);
        if (error) {
          results.insights.errors.push(`${ins.id}: ${error.message}`);
          results.insights.skipped++;
        } else {
          results.insights.migrated++;
        }
      } catch (err) {
        results.insights.errors.push(`${ins.id}: ${err}`);
        results.insights.skipped++;
      }
    }

    // ── 6. Migrate testimonials ──
    const testimonialsKv = await kv.getByPrefix("testimonial:");
    results.testimonials = { migrated: 0, skipped: 0, errors: [] };

    for (const t of testimonialsKv as any[]) {
      try {
        const dbData: Record<string, any> = {
          name: t.name || "Anónimo",
          role: t.role || null,
          company: t.company || null,
          text: t.content || t.text || "",
          rating: t.rating || 5,
          image_url: t.image || null,
          published: true,
        };

        if (t.createdAt) dbData.created_at = t.createdAt;

        const { error } = await sb.from("testimonials").insert(dbData);
        if (error) {
          results.testimonials.errors.push(`${t.id}: ${error.message}`);
          results.testimonials.skipped++;
        } else {
          results.testimonials.migrated++;
        }
      } catch (err) {
        results.testimonials.errors.push(`${t.id}: ${err}`);
        results.testimonials.skipped++;
      }
    }

    // ── 7. Migrate newsletter subscribers ──
    const subscribersKv = await kv.getByPrefix("newsletter:");
    results.subscribers = { migrated: 0, skipped: 0, errors: [] };

    for (const s of subscribersKv as any[]) {
      try {
        const { error } = await sb.from("newsletter_subscribers").upsert(
          {
            email: s.email?.toLowerCase(),
            subscribed_at: s.subscribedAt || new Date().toISOString(),
          },
          { onConflict: "email" }
        );

        if (error) {
          results.subscribers.errors.push(`${s.email}: ${error.message}`);
          results.subscribers.skipped++;
        } else {
          results.subscribers.migrated++;
        }
      } catch (err) {
        results.subscribers.errors.push(`${s.email}: ${err}`);
        results.subscribers.skipped++;
      }
    }

    console.log("[Migration] Complete:", JSON.stringify(results, null, 2));

    return c.json({
      success: true,
      message: "Migração KV → PostgreSQL concluída!",
      results,
      projectIdMap,
    });
  } catch (error) {
    console.log(`[Migration] Fatal error: ${error}`);
    return c.json({ error: "Erro fatal na migração" }, 500);
  }
});

Deno.serve(app.fetch);
