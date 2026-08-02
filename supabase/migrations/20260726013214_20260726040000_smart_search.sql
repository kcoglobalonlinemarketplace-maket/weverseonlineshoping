/*
# Smart Global Search System

## Purpose
Automatically indexes every searchable item in the marketplace in real time.
No manual reindexing needed — database triggers keep the index in sync on every
INSERT, UPDATE, or DELETE on showroom_listings.

## New Tables

### `search_index`
- Denormalized search index row per listing. Contains a tsvector column for
  full-text search and a trigram column for fuzzy/partial matching.
- `listing_id` (uuid, references showroom_listings, ON DELETE CASCADE)
- `entity_type` (text) — 'product' | 'property' | 'vehicle' (mirrors listing_type)
- `title`, `description`, `category`, `subcategory`, `sku`, `brand`, `tags_text`,
  `seo_text`, `location_text`, `color`, `size`, `model_number` — searchable fields
- `search_vector` (tsvector) — generated from all text fields, weighted
- `trigram_vector` (text) — concatenation for trigram similarity
- `is_active` (boolean) — only active listings appear in public search
- `updated_at` (timestamptz)

### `search_history`
- Per-session search history (recent searches).
- `id`, `session_key`, `query`, `created_at`

### `search_analytics`
- Aggregated search analytics (popular/trending searches).
- `id`, `query`, `result_count`, `session_key`, `created_at`

## Triggers
- `sync_search_index` — AFTER INSERT/UPDATE/DELETE on showroom_listings,
  upserts or deletes the corresponding search_index row automatically.

## Security
- search_index: public read (anon + authenticated) for active rows only;
  admin can read all. No public write — only the trigger maintains it.
- search_history: public read/insert/delete by session_key (anon + authenticated).
- search_analytics: public insert; admin-only read.
*/

-- ── Extensions ───────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;

-- ── search_index table ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.search_index (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid NOT NULL REFERENCES public.showroom_listings(id) ON DELETE CASCADE,
  entity_type text NOT NULL DEFAULT 'product',
  title text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  subcategory text NOT NULL DEFAULT '',
  sku text NOT NULL DEFAULT '',
  brand text NOT NULL DEFAULT '',
  tags_text text NOT NULL DEFAULT '',
  seo_text text NOT NULL DEFAULT '',
  location_text text NOT NULL DEFAULT '',
  color text NOT NULL DEFAULT '',
  size text NOT NULL DEFAULT '',
  model_number text NOT NULL DEFAULT '',
  search_vector tsvector,
  trigram_text text NOT NULL DEFAULT '',
  is_active boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.search_index ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_active_search" ON public.search_index;
CREATE POLICY "public_read_active_search" ON public.search_index FOR SELECT
  TO anon, authenticated USING (is_active = true);

DROP POLICY IF EXISTS "admin_read_all_search" ON public.search_index;
CREATE POLICY "admin_read_all_search" ON public.search_index FOR SELECT
  TO authenticated USING (public.is_current_user_admin());

CREATE INDEX IF NOT EXISTS idx_search_vector ON public.search_index USING GIN (search_vector);
CREATE INDEX IF NOT EXISTS idx_search_trigram ON public.search_index USING GIN (trigram_text gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_search_listing ON public.search_index(listing_id);
CREATE INDEX IF NOT EXISTS idx_search_category ON public.search_index(category);
CREATE INDEX IF NOT EXISTS idx_search_active ON public.search_index(is_active);

-- ── search_history table ────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.search_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_key text NOT NULL,
  query text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.search_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_own_history" ON public.search_history;
CREATE POLICY "public_read_own_history" ON public.search_history FOR SELECT
  TO anon, authenticated USING (session_key = current_setting('app.session_key', true));

DROP POLICY IF EXISTS "public_insert_history" ON public.search_history;
CREATE POLICY "public_insert_history" ON public.search_history FOR INSERT
  TO anon, authenticated WITH CHECK (session_key = current_setting('app.session_key', true));

DROP POLICY IF EXISTS "public_delete_own_history" ON public.search_history;
CREATE POLICY "public_delete_own_history" ON public.search_history FOR DELETE
  TO anon, authenticated USING (session_key = current_setting('app.session_key', true));

CREATE INDEX IF NOT EXISTS idx_search_history_session ON public.search_history(session_key, created_at DESC);

-- ── search_analytics table ──────────────────────────────────
CREATE TABLE IF NOT EXISTS public.search_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL,
  result_count int NOT NULL DEFAULT 0,
  session_key text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.search_analytics ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_analytics" ON public.search_analytics;
CREATE POLICY "public_insert_analytics" ON public.search_analytics FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_read_analytics" ON public.search_analytics;
CREATE POLICY "admin_read_analytics" ON public.search_analytics FOR SELECT
  TO authenticated USING (public.is_current_user_admin());

CREATE INDEX IF NOT EXISTS idx_search_analytics_query ON public.search_analytics(query);
CREATE INDEX IF NOT EXISTS idx_search_analytics_created ON public.search_analytics(created_at DESC);

-- ── Trigger function: sync search_index on listing changes ──
CREATE OR REPLACE FUNCTION public.sync_search_index()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_listing_id uuid;
  v_title text;
  v_description text;
  v_category text;
  v_subcategory text;
  v_sku text;
  v_tags text;
  v_seo text;
  v_location text;
  v_color text;
  v_size text;
  v_model text;
  v_brand text;
  v_entity text;
  v_is_active boolean;
  v_trigram text;
  v_search_vector tsvector;
BEGIN
  IF TG_OP = 'DELETE' THEN
    DELETE FROM public.search_index WHERE listing_id = OLD.id;
    RETURN OLD;
  END IF;

  v_listing_id := NEW.id;
  v_title := COALESCE(NEW.title, '');
  v_description := COALESCE(NEW.description, '');
  v_category := COALESCE(NEW.category, '');
  v_subcategory := COALESCE(NEW.subcategory, '');
  v_sku := COALESCE(NEW.sku, '');
  v_tags := array_to_string(COALESCE(NEW.tags, ARRAY[]::text[]), ' ');
  v_seo := array_to_string(COALESCE(NEW.seo_keywords, ARRAY[]::text[]), ' ');
  v_location := CONCAT_WS(' ', COALESCE(NEW.country, ''), COALESCE(NEW.state, ''), COALESCE(NEW.city, ''), COALESCE(NEW.town, ''));
  v_color := '';
  v_size := COALESCE(NEW.building_size, '');
  v_model := COALESCE(NEW.property_type, '');
  v_brand := COALESCE(NEW.property_type, '');
  v_entity := COALESCE(NEW.listing_type, 'product');
  v_is_active := COALESCE(NEW.is_active, true);

  -- Build trigram text (all fields concatenated)
  v_trigram := LOWER(unaccent(CONCAT_WS(' ',
    v_title, v_description, v_category, v_subcategory, v_sku,
    v_tags, v_seo, v_location, v_color, v_size, v_model, v_brand
  )));

  -- Build weighted tsvector
  v_search_vector :=
    setweight(to_tsvector('english', unaccent(coalesce(v_title, ''))), 'A') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_category, ' ' || v_subcategory, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_tags, ' ' || v_seo, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_brand, ' ' || v_model, ' ' || v_sku, ''))), 'C') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_description, ''))), 'D') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_location, ''))), 'D');

  -- Upsert
  INSERT INTO public.search_index (
    listing_id, entity_type, title, description, category, subcategory,
    sku, brand, tags_text, seo_text, location_text, color, size, model_number,
    search_vector, trigram_text, is_active, updated_at
  ) VALUES (
    v_listing_id, v_entity, v_title, v_description, v_category, v_subcategory,
    v_sku, v_brand, v_tags, v_seo, v_location, v_color, v_size, v_model,
    v_search_vector, v_trigram, v_is_active, now()
  )
  ON CONFLICT (listing_id) DO UPDATE SET
    entity_type = EXCLUDED.entity_type,
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    category = EXCLUDED.category,
    subcategory = EXCLUDED.subcategory,
    sku = EXCLUDED.sku,
    brand = EXCLUDED.brand,
    tags_text = EXCLUDED.tags_text,
    seo_text = EXCLUDED.seo_text,
    location_text = EXCLUDED.location_text,
    color = EXCLUDED.color,
    size = EXCLUDED.size,
    model_number = EXCLUDED.model_number,
    search_vector = EXCLUDED.search_vector,
    trigram_text = EXCLUDED.trigram_text,
    is_active = EXCLUDED.is_active,
    updated_at = now();

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS showroom_search_sync ON public.showroom_listings;
CREATE TRIGGER showroom_search_sync
  AFTER INSERT OR UPDATE OR DELETE ON public.showroom_listings
  FOR EACH ROW EXECUTE FUNCTION public.sync_search_index();

-- ── Helper: record search analytics ──────────────────────────
CREATE OR REPLACE FUNCTION public.record_search(
  p_query text,
  p_result_count int,
  p_session_key text DEFAULT NULL
)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  INSERT INTO public.search_analytics (query, result_count, session_key)
  VALUES (p_query, p_result_count, p_session_key);
$$;

-- ── Backfill: index all existing listings ─────────────────────
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN SELECT * FROM public.showroom_listings LOOP
    PERFORM public.sync_search_index_force(r);
  END LOOP;
END;
$$;

-- Helper to force-index a single row (used by backfill)
CREATE OR REPLACE FUNCTION public.sync_search_index_force(r public.showroom_listings)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_search_vector tsvector;
  v_trigram text;
  v_tags text;
  v_seo text;
  v_location text;
BEGIN
  v_tags := array_to_string(COALESCE(r.tags, ARRAY[]::text[]), ' ');
  v_seo := array_to_string(COALESCE(r.seo_keywords, ARRAY[]::text[]), ' ');
  v_location := CONCAT_WS(' ', COALESCE(r.country, ''), COALESCE(r.state, ''), COALESCE(r.city, ''), COALESCE(r.town, ''));

  v_trigram := LOWER(unaccent(CONCAT_WS(' ',
    COALESCE(r.title, ''), COALESCE(r.description, ''), COALESCE(r.category, ''),
    COALESCE(r.subcategory, ''), COALESCE(r.sku, ''), v_tags, v_seo, v_location,
    COALESCE(r.building_size, ''), COALESCE(r.property_type, '')
  )));

  v_search_vector :=
    setweight(to_tsvector('english', unaccent(coalesce(r.title, ''))), 'A') ||
    setweight(to_tsvector('english', unaccent(coalesce(r.category, ' ' || r.subcategory, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_tags, ' ' || v_seo, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(r.property_type, ' ' || r.sku, ''))), 'C') ||
    setweight(to_tsvector('english', unaccent(coalesce(r.description, ''))), 'D') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_location, ''))), 'D');

  INSERT INTO public.search_index (
    listing_id, entity_type, title, description, category, subcategory,
    sku, brand, tags_text, seo_text, location_text, color, size, model_number,
    search_vector, trigram_text, is_active, updated_at
  ) VALUES (
    r.id, COALESCE(r.listing_type, 'product'), COALESCE(r.title, ''),
    COALESCE(r.description, ''), COALESCE(r.category, ''), COALESCE(r.subcategory, ''),
    COALESCE(r.sku, ''), COALESCE(r.property_type, ''), v_tags, v_seo, v_location,
    '', COALESCE(r.building_size, ''), COALESCE(r.property_type, ''),
    v_search_vector, v_trigram, COALESCE(r.is_active, true), now()
  )
  ON CONFLICT (listing_id) DO UPDATE SET
    search_vector = EXCLUDED.search_vector,
    trigram_text = EXCLUDED.trigram_text,
    is_active = EXCLUDED.is_active,
    updated_at = now();
END;
$$;
