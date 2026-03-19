-- ============================================================================
-- Migration: Expandir schema para listagens imobiliárias completas
-- Data: 2026-03-19
-- Contexto: Migração de Deno KV → PostgreSQL + campos novos para venda,
--           arrendamento, media rico, SEO, e integração com ImoCoaching.
--           Usa ALTER TABLE ADD COLUMN para não destruir dados existentes.
-- ============================================================================

-- ============================================================================
-- PARTE 1: EXPANDIR TABELA projects (→ listagem imobiliária completa)
-- ============================================================================
-- Campos existentes preservados: id, title, description, image_url, category,
-- location, area (TEXT), status, year, client, images, features, created_at,
-- updated_at, published, source, source_id, source_title, source_url,
-- classifications

-- 1a. Identificação e tipo
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS slug TEXT,
  ADD COLUMN IF NOT EXISTS short_description TEXT,
  ADD COLUMN IF NOT EXISTS listing_type TEXT NOT NULL DEFAULT 'venda',
  ADD COLUMN IF NOT EXISTS property_type TEXT;

COMMENT ON COLUMN public.projects.slug IS 'URL-friendly slug, auto-gerado do título — /imoveis/{slug}';
COMMENT ON COLUMN public.projects.short_description IS 'Resumo para cards (150-200 chars)';
COMMENT ON COLUMN public.projects.listing_type IS 'venda, arrendamento, venda_e_arrendamento';
COMMENT ON COLUMN public.projects.property_type IS 'apartamento, moradia, prédio, terreno, loja, escritório, armazém';

-- Slug deve ser único (para URLs)
CREATE UNIQUE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug) WHERE slug IS NOT NULL;

-- 1b. Compatibilidade com KV: campos usados no admin que não existem na tabela SQL
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS strategy TEXT,
  ADD COLUMN IF NOT EXISTS status_label TEXT,
  ADD COLUMN IF NOT EXISTS roi TEXT,
  ADD COLUMN IF NOT EXISTS price TEXT,
  ADD COLUMN IF NOT EXISTS investment TEXT,
  ADD COLUMN IF NOT EXISTS timeline TEXT,
  ADD COLUMN IF NOT EXISTS timeline_phases TEXT,
  ADD COLUMN IF NOT EXISTS highlights TEXT,
  ADD COLUMN IF NOT EXISTS portal_link TEXT,
  ADD COLUMN IF NOT EXISTS brochure_link TEXT,
  ADD COLUMN IF NOT EXISTS landing_page TEXT,
  ADD COLUMN IF NOT EXISTS bedrooms INTEGER,
  ADD COLUMN IF NOT EXISTS bathrooms INTEGER;

-- 1c. Características físicas (campos numéricos novos)
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS typology TEXT,
  ADD COLUMN IF NOT EXISTS gross_area_m2 NUMERIC,
  ADD COLUMN IF NOT EXISTS net_area_m2 NUMERIC,
  ADD COLUMN IF NOT EXISTS land_area_m2 NUMERIC,
  ADD COLUMN IF NOT EXISTS floor INTEGER,
  ADD COLUMN IF NOT EXISTS total_floors INTEGER,
  ADD COLUMN IF NOT EXISTS construction_year INTEGER,
  ADD COLUMN IF NOT EXISTS energy_certificate TEXT,
  ADD COLUMN IF NOT EXISTS condition TEXT;

COMMENT ON COLUMN public.projects.typology IS 'T0, T1, T2, T3, T4, T5+';
COMMENT ON COLUMN public.projects.energy_certificate IS 'A+, A, B, B-, C, D, E, F';
COMMENT ON COLUMN public.projects.condition IS 'novo, remodelado, bom, usado, para_renovar, ruína';

-- 1d. Comodidades (booleans)
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS has_elevator BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_parking BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS parking_spaces INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS has_garage BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_pool BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_garden BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_terrace BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_balcony BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_storage BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_air_conditioning BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_central_heating BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_fireplace BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS is_furnished BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS furniture_included TEXT;

COMMENT ON COLUMN public.projects.furniture_included IS 'completo, parcial, sem_mobília';

-- 1e. Localização expandida
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS district TEXT,
  ADD COLUMN IF NOT EXISTS municipality TEXT,
  ADD COLUMN IF NOT EXISTS parish TEXT,
  ADD COLUMN IF NOT EXISTS address TEXT,
  ADD COLUMN IF NOT EXISTS postal_code TEXT,
  ADD COLUMN IF NOT EXISTS latitude NUMERIC,
  ADD COLUMN IF NOT EXISTS longitude NUMERIC;

-- 1f. Preços (venda e arrendamento)
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS sale_price NUMERIC,
  ADD COLUMN IF NOT EXISTS sale_price_negotiable BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS rent_monthly NUMERIC,
  ADD COLUMN IF NOT EXISTS rent_deposit_months INTEGER DEFAULT 2,
  ADD COLUMN IF NOT EXISTS expenses_included BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS expenses_amount NUMERIC,
  ADD COLUMN IF NOT EXISTS available_from DATE,
  ADD COLUMN IF NOT EXISTS price_on_request BOOLEAN DEFAULT FALSE;

-- 1g. Media expandida
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS video_url TEXT,
  ADD COLUMN IF NOT EXISTS video_type TEXT,
  ADD COLUMN IF NOT EXISTS virtual_tour_url TEXT,
  ADD COLUMN IF NOT EXISTS floor_plan_url TEXT,
  ADD COLUMN IF NOT EXISTS floor_plan_images TEXT[],
  ADD COLUMN IF NOT EXISTS before_images TEXT[],
  ADD COLUMN IF NOT EXISTS after_images TEXT[];

COMMENT ON COLUMN public.projects.video_type IS 'youtube, vimeo, direct, matterport';

-- 1h. Estado e publicação expandidos
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS published_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS sold_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS rented_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS views_count INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS contacts_count INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS days_on_market INTEGER DEFAULT 0;

-- 1i. SEO
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS meta_title TEXT,
  ADD COLUMN IF NOT EXISTS meta_description TEXT,
  ADD COLUMN IF NOT EXISTS og_image_url TEXT,
  ADD COLUMN IF NOT EXISTS keywords TEXT[];

-- 1j. Integração ImoCoaching
ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS external_id TEXT,
  ADD COLUMN IF NOT EXISTS external_source TEXT,
  ADD COLUMN IF NOT EXISTS last_synced_at TIMESTAMPTZ;

COMMENT ON COLUMN public.projects.external_id IS 'ID do deal no ImoCoaching para sync bidirecional';
COMMENT ON COLUMN public.projects.external_source IS 'imocoaching, manual';

-- external_id deve ser único (para upsert por sync)
CREATE UNIQUE INDEX IF NOT EXISTS idx_projects_external_id
  ON public.projects(external_id) WHERE external_id IS NOT NULL;

-- Índices de filtragem para a página pública /imoveis
CREATE INDEX IF NOT EXISTS idx_projects_listing_type ON public.projects(listing_type);
CREATE INDEX IF NOT EXISTS idx_projects_property_type ON public.projects(property_type);
CREATE INDEX IF NOT EXISTS idx_projects_district ON public.projects(district);
CREATE INDEX IF NOT EXISTS idx_projects_municipality ON public.projects(municipality);
CREATE INDEX IF NOT EXISTS idx_projects_sale_price ON public.projects(sale_price) WHERE sale_price IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_projects_rent_monthly ON public.projects(rent_monthly) WHERE rent_monthly IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_projects_typology ON public.projects(typology);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON public.projects(featured) WHERE featured = true;

-- Trigger para updated_at automático
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_projects_updated_at ON public.projects;
CREATE TRIGGER trg_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();


-- ============================================================================
-- PARTE 2: CRIAR TABELA units (não existe em PostgreSQL — só existia em KV)
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,

  -- Identificação
  title TEXT NOT NULL,
  slug TEXT,
  unit_ref TEXT,                  -- "Fração A", "Loja 1", "Lugar 5"
  description TEXT,
  unit_type TEXT,                 -- 'apartamento', 'loja', 'garagem', 'arrecadação'

  -- Características
  typology TEXT,                  -- T0, T1, T2, T3, T4, T5+
  bedrooms INTEGER DEFAULT 0,
  bathrooms INTEGER DEFAULT 0,
  gross_area_m2 NUMERIC,
  net_area_m2 NUMERIC,
  outdoor_area_m2 NUMERIC,
  floor TEXT,                     -- TEXT para suportar "R/C", "Cave", "Penthouse"
  orientation TEXT,               -- 'norte', 'sul', 'nascente', 'poente'
  energy_cert TEXT,               -- A+, A, B, B-, C, D, E, F

  -- Preços
  listing_type TEXT NOT NULL DEFAULT 'venda',
  sale_price NUMERIC,
  rent_monthly NUMERIC,
  price_label TEXT,               -- "Desde €295.000" ou "Sob consulta"
  price_on_request BOOLEAN DEFAULT FALSE,

  -- Estado
  status TEXT NOT NULL DEFAULT 'available',
  delivery_date TEXT,
  published BOOLEAN DEFAULT TRUE,
  display_order INTEGER DEFAULT 0,

  -- Media
  image_url TEXT,
  images TEXT[],
  floor_plan_url TEXT,
  video_url TEXT,
  virtual_tour_url TEXT,

  -- Links
  portal_url TEXT,
  brochure_url TEXT,

  -- Extras
  specs JSONB DEFAULT '{}',       -- key-value flexível (ex: "Lugar garagem": "Sim")
  highlights TEXT[],
  features TEXT[],

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE public.units IS 'Unidades/fracções dentro de um projecto imobiliário';
COMMENT ON COLUMN public.units.status IS 'available, reserved, sold, rented';
COMMENT ON COLUMN public.units.listing_type IS 'venda, arrendamento, venda_e_arrendamento';

-- Slug único
CREATE UNIQUE INDEX IF NOT EXISTS idx_units_slug
  ON public.units(slug) WHERE slug IS NOT NULL;

-- Índices de consulta
CREATE INDEX IF NOT EXISTS idx_units_project_id ON public.units(project_id);
CREATE INDEX IF NOT EXISTS idx_units_status ON public.units(status);
CREATE INDEX IF NOT EXISTS idx_units_typology ON public.units(typology);
CREATE INDEX IF NOT EXISTS idx_units_listing_type ON public.units(listing_type);
CREATE INDEX IF NOT EXISTS idx_units_published ON public.units(published);
CREATE INDEX IF NOT EXISTS idx_units_display_order ON public.units(project_id, display_order);

-- RLS
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access units"
  ON public.units FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Public can read published units"
  ON public.units FOR SELECT
  USING (published = true);

-- Trigger para updated_at
DROP TRIGGER IF EXISTS trg_units_updated_at ON public.units;
CREATE TRIGGER trg_units_updated_at
  BEFORE UPDATE ON public.units
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();


-- ============================================================================
-- PARTE 3: EXPANDIR TABELA contacts (associação a imóvel + UTM tracking)
-- ============================================================================

-- 3a. Associação directa ao imóvel
ALTER TABLE public.contacts
  ADD COLUMN IF NOT EXISTS property_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS property_title TEXT;

COMMENT ON COLUMN public.contacts.property_id IS 'FK para o imóvel de interesse (da landing page /imoveis/[slug])';
COMMENT ON COLUMN public.contacts.property_title IS 'Cache do título do imóvel para evitar JOIN em listagens';

-- 3b. UTM tracking (complementa source/source_id que já existem)
ALTER TABLE public.contacts
  ADD COLUMN IF NOT EXISTS utm_source TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign TEXT;

-- 3c. Campos extra para pipeline expandido
ALTER TABLE public.contacts
  ADD COLUMN IF NOT EXISTS lead_number INTEGER,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Índices novos
CREATE INDEX IF NOT EXISTS idx_contacts_property_id
  ON public.contacts(property_id) WHERE property_id IS NOT NULL;

-- Trigger para updated_at
DROP TRIGGER IF EXISTS trg_contacts_updated_at ON public.contacts;
CREATE TRIGGER trg_contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();


-- ============================================================================
-- PARTE 4: TABELAS AUXILIARES (activities, followups — migrar de KV)
-- ============================================================================

-- Activities (log de interacções com leads)
CREATE TABLE IF NOT EXISTS public.activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id UUID NOT NULL REFERENCES public.contacts(id) ON DELETE CASCADE,
  type TEXT NOT NULL,              -- 'call', 'email', 'whatsapp', 'meeting', 'note'
  channel TEXT,                    -- 'Telefone', 'Email', 'WhatsApp', 'Mensagem'
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_activities_contact_id ON public.activities(contact_id);
CREATE INDEX IF NOT EXISTS idx_activities_created_at ON public.activities(created_at DESC);

ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access activities"
  ON public.activities FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

COMMENT ON TABLE public.activities IS 'Log de interacções com leads (chamadas, emails, reuniões)';

-- Followups (tarefas de seguimento)
CREATE TABLE IF NOT EXISTS public.followups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id UUID NOT NULL REFERENCES public.contacts(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'task',   -- 'call', 'email', 'whatsapp', 'meeting', 'task'
  due_date DATE NOT NULL,
  due_time TIME,
  priority TEXT NOT NULL DEFAULT 'medium',  -- 'low', 'medium', 'high', 'urgent'
  status TEXT NOT NULL DEFAULT 'pending',   -- 'pending', 'completed', 'skipped', 'cancelled'
  outcome TEXT,                    -- 'answered', 'no_answer', 'voicemail', etc.
  outcome_notes TEXT,
  notes TEXT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_followups_contact_id ON public.followups(contact_id);
CREATE INDEX IF NOT EXISTS idx_followups_due_date ON public.followups(due_date);
CREATE INDEX IF NOT EXISTS idx_followups_status ON public.followups(status);

ALTER TABLE public.followups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access followups"
  ON public.followups FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

COMMENT ON TABLE public.followups IS 'Tarefas de seguimento para leads do CRM';


-- ============================================================================
-- PARTE 5: AUDIT TRIGGERS (agora que as tabelas estão em PostgreSQL)
-- ============================================================================
-- A função audit_trigger_fn() já existe (migration 20260305_audit_log.sql)

DROP TRIGGER IF EXISTS audit_projects ON public.projects;
CREATE TRIGGER audit_projects
  AFTER INSERT OR UPDATE OR DELETE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_fn();

DROP TRIGGER IF EXISTS audit_units ON public.units;
CREATE TRIGGER audit_units
  AFTER INSERT OR UPDATE OR DELETE ON public.units
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_fn();

DROP TRIGGER IF EXISTS audit_contacts ON public.contacts;
CREATE TRIGGER audit_contacts
  AFTER INSERT OR UPDATE OR DELETE ON public.contacts
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_fn();
