/*
# Upgrade Global Search System — Real-Time Auto-Indexing v3

## Purpose
Upgrades the existing smart search system so that every product field is indexed
and searchable: names, brands, descriptions, tags, SKUs, keywords, categories,
features, specifications, subcategory, and location.

## Changes
1. Adds `features_text` column to `search_index` for features array searching.
2. Upgrades `sync_search_index` trigger to index features + all spec key-values.
3. Upgrades `smart_search_quick` RPC to search ALL fields including features, subcategory, model, location, brand.
4. Upgrades `smart_search_fuzzy` RPC to match by brand similarity.
5. Upgrades `smart_search_partial` RPC for completeness.
6. Reindexes all existing listings.

## Security
- No RLS changes. All RPCs remain SECURITY DEFINER with anon+authenticated grants.
- Idempotent: all CREATE OR REPLACE, ADD COLUMN IF NOT EXISTS.
*/

-- 1. Add features_text column
ALTER TABLE public.search_index
  ADD COLUMN IF NOT EXISTS features_text text NOT NULL DEFAULT '';

CREATE INDEX IF NOT EXISTS idx_search_features_text ON public.search_index USING gin (features_text gin_trgm_ops);

-- 2. Upgrade sync_search_index trigger
CREATE OR REPLACE FUNCTION public.sync_search_index()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  v_tags text;
  v_seo text;
  v_features text;
  v_location text;
  v_trigram text;
  v_search_vector tsvector;
  v_specs jsonb;
  v_brand text;
  v_model text;
  v_property_type text;
  v_spec_text text;
  v_spec_pairs text;
  v_k text;
  v_v text;
BEGIN
  IF TG_OP = 'DELETE' THEN
    DELETE FROM public.search_index WHERE listing_id = OLD.id;
    RETURN OLD;
  END IF;

  v_tags := CASE
    WHEN NEW.tags IS NOT NULL AND jsonb_typeof(NEW.tags) = 'array'
    THEN array_to_string(ARRAY(SELECT jsonb_array_elements_text(NEW.tags)), ' ')
    ELSE ''
  END;

  v_seo := CASE
    WHEN NEW.seo_keywords IS NOT NULL AND jsonb_typeof(NEW.seo_keywords) = 'array'
    THEN array_to_string(ARRAY(SELECT jsonb_array_elements_text(NEW.seo_keywords)), ' ')
    ELSE ''
  END;

  v_features := CASE
    WHEN NEW.features IS NOT NULL AND jsonb_typeof(NEW.features) = 'array'
    THEN array_to_string(ARRAY(SELECT jsonb_array_elements_text(NEW.features)), ' ')
    ELSE ''
  END;

  v_location := CONCAT_WS(' ', COALESCE(NEW.country, ''), COALESCE(NEW.state, ''), COALESCE(NEW.city, ''), COALESCE(NEW.town, ''));

  v_specs := COALESCE(NEW.specifications, '{}'::jsonb);
  v_brand := COALESCE(v_specs->>'brand', '');
  v_model := COALESCE(v_specs->>'model', '');
  v_property_type := COALESCE(NEW.property_type, '');

  v_spec_text := CONCAT_WS(' ',
    v_brand, v_model,
    COALESCE(v_specs->>'model_year', ''),
    COALESCE(v_specs->>'condition', ''),
    COALESCE(v_specs->>'mileage', ''),
    COALESCE(v_specs->>'transmission', ''),
    COALESCE(v_specs->>'fuel_type', ''),
    COALESCE(v_specs->>'engine', ''),
    COALESCE(v_specs->>'drive_type', ''),
    COALESCE(v_specs->>'color', ''),
    COALESCE(v_specs->>'payload_capacity', ''),
    COALESCE(v_specs->>'towing_capacity', ''),
    COALESCE(v_specs->>'vin', ''),
    COALESCE(v_specs->>'stock_number', '')
  );

  v_spec_pairs := '';
  FOR v_k, v_v IN SELECT key, value FROM jsonb_each_text(v_specs) LOOP
    v_spec_pairs := v_spec_pairs || ' ' || v_k || ' ' || COALESCE(v_v, '');
  END LOOP;

  v_trigram := LOWER(unaccent(CONCAT_WS(' ',
    COALESCE(NEW.title, ''), COALESCE(NEW.description, ''), COALESCE(NEW.category, ''),
    COALESCE(NEW.subcategory, ''), COALESCE(NEW.sku, ''), v_tags, v_seo, v_features,
    v_location, COALESCE(NEW.building_size, ''), v_property_type, v_spec_text, v_spec_pairs
  )));

  v_search_vector :=
    setweight(to_tsvector('english', unaccent(coalesce(NEW.title, ''))), 'A') ||
    setweight(to_tsvector('english', unaccent(coalesce(NEW.category, '') || ' ' || coalesce(NEW.subcategory, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_tags, '') || ' ' || coalesce(v_seo, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_features, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_property_type, '') || ' ' || coalesce(v_specs->>'brand', '') || ' ' || coalesce(v_specs->>'model', '') || ' ' || coalesce(NEW.sku, ''))), 'C') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_spec_text, '') || ' ' || coalesce(v_spec_pairs, ''))), 'C') ||
    setweight(to_tsvector('english', unaccent(coalesce(NEW.description, ''))), 'D') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_location, ''))), 'D');

  INSERT INTO public.search_index (
    listing_id, entity_type, title, description, category, subcategory,
    sku, brand, tags_text, seo_text, location_text, color, size, model_number,
    search_vector, trigram_text, is_active, updated_at, features_text
  ) VALUES (
    NEW.id, COALESCE(NEW.listing_type, 'product'), COALESCE(NEW.title, ''),
    COALESCE(NEW.description, ''), COALESCE(NEW.category, ''), COALESCE(NEW.subcategory, ''),
    COALESCE(NEW.sku, ''), COALESCE(v_specs->>'brand', ''), v_tags, v_seo, v_location,
    COALESCE(v_specs->>'color', ''), COALESCE(NEW.building_size, ''), COALESCE(v_specs->>'model', ''),
    v_search_vector, v_trigram, COALESCE(NEW.is_active, true), now(), v_features
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
    features_text = EXCLUDED.features_text,
    is_active = EXCLUDED.is_active,
    updated_at = now();

  RETURN NEW;
END;
$function$;

-- 3. Upgrade smart_search_quick RPC
CREATE OR REPLACE FUNCTION public.smart_search_quick(p_query text, p_limit integer DEFAULT 20)
RETURNS json
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $function$
WITH fts AS (
  SELECT
    si.listing_id, si.title, LEFT(si.description, 200) AS description,
    si.category, si.subcategory, si.entity_type, si.brand,
    sl.price, sl.currency, sl.property_id,
    COALESCE(sl.images->0, '[]'::jsonb)->>0 AS thumbnail,
    ts_rank(si.search_vector, plainto_tsquery('english', p_query)) AS rank,
    1 AS source
  FROM public.search_index si
  JOIN public.showroom_listings sl ON sl.id = si.listing_id
  WHERE si.is_active = true
  AND si.search_vector @@ plainto_tsquery('english', p_query)
),
fuzzy AS (
  SELECT
    si.listing_id, si.title, LEFT(si.description, 200) AS description,
    si.category, si.subcategory, si.entity_type, si.brand,
    sl.price, sl.currency, sl.property_id,
    COALESCE(sl.images->0, '[]'::jsonb)->>0 AS thumbnail,
    GREATEST(
      similarity(LOWER(si.title), LOWER(p_query)),
      word_similarity(LOWER(p_query), LOWER(si.title)),
      similarity(LOWER(si.category), LOWER(p_query)),
      similarity(LOWER(si.brand), LOWER(p_query))
    ) AS rank,
    2 AS source
  FROM public.search_index si
  JOIN public.showroom_listings sl ON sl.id = si.listing_id
  WHERE si.is_active = true
  AND NOT EXISTS (SELECT 1 FROM fts WHERE fts.listing_id = si.listing_id)
  AND (
    similarity(LOWER(si.title), LOWER(p_query)) > 0.15
    OR word_similarity(LOWER(p_query), LOWER(si.title)) > 0.25
    OR similarity(LOWER(si.category), LOWER(p_query)) > 0.2
    OR similarity(LOWER(si.brand), LOWER(p_query)) > 0.2
  )
),
partial AS (
  SELECT
    si.listing_id, si.title, LEFT(si.description, 200) AS description,
    si.category, si.subcategory, si.entity_type, si.brand,
    sl.price, sl.currency, sl.property_id,
    COALESCE(sl.images->0, '[]'::jsonb)->>0 AS thumbnail,
    0.0::real AS rank,
    3 AS source
  FROM public.search_index si
  JOIN public.showroom_listings sl ON sl.id = si.listing_id
  WHERE si.is_active = true
  AND NOT EXISTS (SELECT 1 FROM fts WHERE fts.listing_id = si.listing_id)
  AND NOT EXISTS (SELECT 1 FROM fuzzy WHERE fuzzy.listing_id = si.listing_id)
  AND (
    si.title ILIKE '%' || p_query || '%'
    OR si.category ILIKE '%' || p_query || '%'
    OR si.subcategory ILIKE '%' || p_query || '%'
    OR si.tags_text ILIKE '%' || p_query || '%'
    OR si.seo_text ILIKE '%' || p_query || '%'
    OR si.features_text ILIKE '%' || p_query || '%'
    OR si.sku ILIKE '%' || p_query || '%'
    OR si.brand ILIKE '%' || p_query || '%'
    OR si.model_number ILIKE '%' || p_query || '%'
    OR si.location_text ILIKE '%' || p_query || '%'
    OR si.description ILIKE '%' || p_query || '%'
    OR si.trigram_text ILIKE '%' || p_query || '%'
  )
)
SELECT COALESCE(json_agg(json_build_object(
  'listing_id', listing_id,
  'title', title,
  'description', description,
  'category', category,
  'subcategory', subcategory,
  'entity_type', entity_type,
  'brand', brand,
  'price', price,
  'currency', currency,
  'thumbnail', thumbnail,
  'property_id', property_id,
  'rank', rank,
  'source', source
) ORDER BY source, rank DESC), '[]'::json)
FROM (
  SELECT * FROM fts
  UNION ALL
  SELECT * FROM fuzzy
  UNION ALL
  SELECT * FROM partial
  LIMIT p_limit
) combined;
$function$;

GRANT EXECUTE ON FUNCTION public.smart_search_quick(text, integer) TO anon, authenticated;

-- 4. Upgrade smart_search_fuzzy RPC
CREATE OR REPLACE FUNCTION public.smart_search_fuzzy(p_query text, p_limit integer DEFAULT 20)
RETURNS json
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $function$
SELECT COALESCE(json_agg(json_build_object(
  'listing_id', si.listing_id,
  'title', si.title,
  'description', LEFT(si.description, 200),
  'category', si.category,
  'subcategory', si.subcategory,
  'entity_type', si.entity_type,
  'brand', si.brand,
  'price', sl.price,
  'currency', sl.currency,
  'thumbnail', COALESCE(sl.images->0, '[]'::jsonb)->>0,
  'property_id', sl.property_id,
  'rank', GREATEST(
    similarity(LOWER(si.title), LOWER(p_query)),
    word_similarity(LOWER(p_query), LOWER(si.title)),
    similarity(LOWER(si.category), LOWER(p_query)),
    similarity(LOWER(si.brand), LOWER(p_query))
  )
) ORDER BY GREATEST(
    similarity(LOWER(si.title), LOWER(p_query)),
    word_similarity(LOWER(p_query), LOWER(si.title)),
    similarity(LOWER(si.category), LOWER(p_query)),
    similarity(LOWER(si.brand), LOWER(p_query))
  ) DESC), '[]'::json)
FROM public.search_index si
JOIN public.showroom_listings sl ON sl.id = si.listing_id
WHERE si.is_active = true
AND (
  similarity(LOWER(si.title), LOWER(p_query)) > 0.15
  OR word_similarity(LOWER(p_query), LOWER(si.title)) > 0.25
  OR similarity(LOWER(si.category), LOWER(p_query)) > 0.2
  OR similarity(LOWER(si.brand), LOWER(p_query)) > 0.2
)
LIMIT p_limit;
$function$;

GRANT EXECUTE ON FUNCTION public.smart_search_fuzzy(text, integer) TO anon, authenticated;

-- 5. Upgrade smart_search_partial RPC
CREATE OR REPLACE FUNCTION public.smart_search_partial(p_query text, p_limit integer DEFAULT 20)
RETURNS json
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $function$
SELECT COALESCE(json_agg(json_build_object(
  'listing_id', si.listing_id,
  'title', si.title,
  'description', LEFT(si.description, 200),
  'category', si.category,
  'subcategory', si.subcategory,
  'entity_type', si.entity_type,
  'brand', si.brand,
  'price', sl.price,
  'currency', sl.currency,
  'thumbnail', COALESCE(sl.images->0, '[]'::jsonb)->>0,
  'property_id', sl.property_id,
  'rank', 0
)), '[]'::json)
FROM public.search_index si
JOIN public.showroom_listings sl ON sl.id = si.listing_id
WHERE si.is_active = true
AND (
  si.title ILIKE '%' || p_query || '%'
  OR si.category ILIKE '%' || p_query || '%'
  OR si.subcategory ILIKE '%' || p_query || '%'
  OR si.tags_text ILIKE '%' || p_query || '%'
  OR si.seo_text ILIKE '%' || p_query || '%'
  OR si.features_text ILIKE '%' || p_query || '%'
  OR si.sku ILIKE '%' || p_query || '%'
  OR si.brand ILIKE '%' || p_query || '%'
  OR si.model_number ILIKE '%' || p_query || '%'
  OR si.location_text ILIKE '%' || p_query || '%'
  OR si.description ILIKE '%' || p_query || '%'
  OR si.trigram_text ILIKE '%' || p_query || '%'
)
LIMIT p_limit;
$function$;

GRANT EXECUTE ON FUNCTION public.smart_search_partial(text, integer) TO anon, authenticated;

-- 6. Reindex all existing listings using a simple loop with UPDATE
--    (avoids the record-type cast issue with sync_search_index_force)
DO $$
DECLARE
  r RECORD;
  v_tags text;
  v_seo text;
  v_features text;
  v_location text;
  v_trigram text;
  v_search_vector tsvector;
  v_specs jsonb;
  v_brand text;
  v_model text;
  v_spec_text text;
  v_spec_pairs text;
  v_k text;
  v_v text;
BEGIN
  FOR r IN SELECT * FROM public.showroom_listings LOOP
    v_tags := CASE
      WHEN r.tags IS NOT NULL AND jsonb_typeof(r.tags) = 'array'
      THEN array_to_string(ARRAY(SELECT jsonb_array_elements_text(r.tags)), ' ')
      ELSE ''
    END;

    v_seo := CASE
      WHEN r.seo_keywords IS NOT NULL AND jsonb_typeof(r.seo_keywords) = 'array'
      THEN array_to_string(ARRAY(SELECT jsonb_array_elements_text(r.seo_keywords)), ' ')
      ELSE ''
    END;

    v_features := CASE
      WHEN r.features IS NOT NULL AND jsonb_typeof(r.features) = 'array'
      THEN array_to_string(ARRAY(SELECT jsonb_array_elements_text(r.features)), ' ')
      ELSE ''
    END;

    v_location := CONCAT_WS(' ', COALESCE(r.country, ''), COALESCE(r.state, ''), COALESCE(r.city, ''), COALESCE(r.town, ''));

    v_specs := COALESCE(r.specifications, '{}'::jsonb);
    v_brand := COALESCE(v_specs->>'brand', '');
    v_model := COALESCE(v_specs->>'model', '');

    v_spec_text := CONCAT_WS(' ',
      v_brand, v_model,
      COALESCE(v_specs->>'model_year', ''),
      COALESCE(v_specs->>'condition', ''),
      COALESCE(v_specs->>'mileage', ''),
      COALESCE(v_specs->>'transmission', ''),
      COALESCE(v_specs->>'fuel_type', ''),
      COALESCE(v_specs->>'engine', ''),
      COALESCE(v_specs->>'drive_type', ''),
      COALESCE(v_specs->>'color', ''),
      COALESCE(v_specs->>'payload_capacity', ''),
      COALESCE(v_specs->>'towing_capacity', ''),
      COALESCE(v_specs->>'vin', ''),
      COALESCE(v_specs->>'stock_number', '')
    );

    v_spec_pairs := '';
    FOR v_k, v_v IN SELECT key, value FROM jsonb_each_text(v_specs) LOOP
      v_spec_pairs := v_spec_pairs || ' ' || v_k || ' ' || COALESCE(v_v, '');
    END LOOP;

    v_trigram := LOWER(unaccent(CONCAT_WS(' ',
      COALESCE(r.title, ''), COALESCE(r.description, ''), COALESCE(r.category, ''),
      COALESCE(r.subcategory, ''), COALESCE(r.sku, ''), v_tags, v_seo, v_features,
      v_location, COALESCE(r.building_size, ''), COALESCE(r.property_type, ''), v_spec_text, v_spec_pairs
    )));

    v_search_vector :=
      setweight(to_tsvector('english', unaccent(coalesce(r.title, ''))), 'A') ||
      setweight(to_tsvector('english', unaccent(coalesce(r.category, '') || ' ' || coalesce(r.subcategory, ''))), 'B') ||
      setweight(to_tsvector('english', unaccent(coalesce(v_tags, '') || ' ' || coalesce(v_seo, ''))), 'B') ||
      setweight(to_tsvector('english', unaccent(coalesce(v_features, ''))), 'B') ||
      setweight(to_tsvector('english', unaccent(coalesce(r.property_type, '') || ' ' || coalesce(v_specs->>'brand', '') || ' ' || coalesce(v_specs->>'model', '') || ' ' || coalesce(r.sku, ''))), 'C') ||
      setweight(to_tsvector('english', unaccent(coalesce(v_spec_text, '') || ' ' || coalesce(v_spec_pairs, ''))), 'C') ||
      setweight(to_tsvector('english', unaccent(coalesce(r.description, ''))), 'D') ||
      setweight(to_tsvector('english', unaccent(coalesce(v_location, ''))), 'D');

    INSERT INTO public.search_index (
      listing_id, entity_type, title, description, category, subcategory,
      sku, brand, tags_text, seo_text, location_text, color, size, model_number,
      search_vector, trigram_text, is_active, updated_at, features_text
    ) VALUES (
      r.id, COALESCE(r.listing_type, 'product'), COALESCE(r.title, ''),
      COALESCE(r.description, ''), COALESCE(r.category, ''), COALESCE(r.subcategory, ''),
      COALESCE(r.sku, ''), COALESCE(v_specs->>'brand', ''), v_tags, v_seo, v_location,
      COALESCE(v_specs->>'color', ''), COALESCE(r.building_size, ''), COALESCE(v_specs->>'model', ''),
      v_search_vector, v_trigram, COALESCE(r.is_active, true), now(), v_features
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
      features_text = EXCLUDED.features_text,
      is_active = EXCLUDED.is_active,
      updated_at = now();
  END LOOP;
END;
$$;