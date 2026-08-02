-- ============================================================
-- HIGH-PERFORMANCE SEARCH ENGINE FIX
-- ============================================================

-- 1. Fix the sync_search_index trigger to include specifications (brand, model, vehicle type)
CREATE OR REPLACE FUNCTION public.sync_search_index()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  v_tags text;
  v_seo text;
  v_location text;
  v_trigram text;
  v_search_vector tsvector;
  v_specs jsonb;
  v_brand text;
  v_model text;
  v_vehicle_type text;
  v_property_type text;
  v_spec_text text;
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

  v_location := CONCAT_WS(' ', COALESCE(NEW.country, ''), COALESCE(NEW.state, ''), COALESCE(NEW.city, ''), COALESCE(NEW.town, ''));

  v_specs := COALESCE(NEW.specifications, '{}'::jsonb);
  v_brand := COALESCE(v_specs->>'brand', '');
  v_model := COALESCE(v_specs->>'model', '');
  v_vehicle_type := COALESCE(v_specs->>'vehicle_type', COALESCE(NEW.property_type, ''));
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

  v_trigram := LOWER(unaccent(CONCAT_WS(' ',
    COALESCE(NEW.title, ''), COALESCE(NEW.description, ''), COALESCE(NEW.category, ''),
    COALESCE(NEW.subcategory, ''), COALESCE(NEW.sku, ''), v_tags, v_seo, v_location,
    COALESCE(NEW.building_size, ''), v_property_type, v_spec_text
    )));

  v_search_vector :=
    setweight(to_tsvector('english', unaccent(coalesce(NEW.title, ''))), 'A') ||
    setweight(to_tsvector('english', unaccent(coalesce(NEW.category, '') || ' ' || coalesce(NEW.subcategory, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_tags, '') || ' ' || coalesce(v_seo, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_property_type, '') || ' ' || coalesce(v_specs->>'brand', '') || ' ' || coalesce(v_specs->>'model', '') || ' ' || coalesce(NEW.sku, ''))), 'C') ||
    setweight(to_tsvector('english', unaccent(coalesce(NEW.description, ''))), 'D') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_location, ''))), 'D');

  INSERT INTO public.search_index (
    listing_id, entity_type, title, description, category, subcategory,
    sku, brand, tags_text, seo_text, location_text, color, size, model_number,
    search_vector, trigram_text, is_active, updated_at
  ) VALUES (
    NEW.id, COALESCE(NEW.listing_type, 'product'), COALESCE(NEW.title, ''),
    COALESCE(NEW.description, ''), COALESCE(NEW.category, ''), COALESCE(NEW.subcategory, ''),
    COALESCE(NEW.sku, ''), COALESCE(v_specs->>'brand', ''), v_tags, v_seo, v_location,
    COALESCE(v_specs->>'color', ''), COALESCE(NEW.building_size, ''), COALESCE(v_specs->>'model', ''),
    v_search_vector, v_trigram, COALESCE(NEW.is_active, true), now()
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
$function$;

-- 2. Fix fuzzy search: use word_similarity with lower threshold + title similarity
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
  'price', sl.price,
  'currency', sl.currency,
  'thumbnail', COALESCE(sl.images->0, '[]'::jsonb)->>0,
  'property_id', sl.property_id,
  'rank', GREATEST(
    similarity(si.trigram_text, p_query),
    word_similarity(p_query, si.trigram_text),
    similarity(LOWER(si.title), LOWER(p_query))
  )
) ORDER BY GREATEST(
    similarity(si.trigram_text, p_query),
    word_similarity(p_query, si.trigram_text),
    similarity(LOWER(si.title), LOWER(p_query))
  ) DESC), '[]'::json)
FROM public.search_index si
JOIN public.showroom_listings sl ON sl.id = si.listing_id
WHERE si.is_active = true
AND (
  similarity(si.trigram_text, p_query) > 0.01
  OR word_similarity(p_query, si.trigram_text) > 0.1
  OR similarity(LOWER(si.title), LOWER(p_query)) > 0.1
  OR si.trigram_text ILIKE '%' || p_query || '%'
)
LIMIT p_limit;
$function$;

-- 3. Improved FTS search with plural/stem support
CREATE OR REPLACE FUNCTION public.smart_search_fts(p_query text, p_limit integer DEFAULT 20)
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
  'price', sl.price,
  'currency', sl.currency,
  'thumbnail', COALESCE(sl.images->0, '[]'::jsonb)->>0,
  'property_id', sl.property_id,
  'rank', ts_rank(si.search_vector, plainto_tsquery('english', p_query))
) ORDER BY ts_rank(si.search_vector, plainto_tsquery('english', p_query)) DESC), '[]'::json)
FROM public.search_index si
JOIN public.showroom_listings sl ON sl.id = si.listing_id
WHERE si.is_active = true
AND (
  si.search_vector @@ plainto_tsquery('english', p_query)
  OR si.search_vector @@ to_tsquery('english', p_query)
  OR si.search_vector @@ plainto_tsquery('english', left(p_query, GREATEST(length(p_query) - 1, 1)))
)
LIMIT p_limit;
$function$;

-- 4. Improved partial search: also search description, brand, model_number, seo_text
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
  OR si.sku ILIKE '%' || p_query || '%'
  OR si.brand ILIKE '%' || p_query || '%'
  OR si.model_number ILIKE '%' || p_query || '%'
  OR si.location_text ILIKE '%' || p_query || '%'
  OR si.description ILIKE '%' || p_query || '%'
  OR si.seo_text ILIKE '%' || p_query || '%'
)
LIMIT p_limit;
$function$;

-- 5. Combined fast search: FTS + fuzzy + partial in one call (deduped, ranked)
CREATE OR REPLACE FUNCTION public.smart_search_quick(p_query text, p_limit integer DEFAULT 20)
RETURNS json
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $function$
WITH fts AS (
  SELECT
    si.listing_id, si.title, LEFT(si.description, 200) AS description,
    si.category, si.subcategory, si.entity_type,
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
    si.category, si.subcategory, si.entity_type,
    sl.price, sl.currency, sl.property_id,
    COALESCE(sl.images->0, '[]'::jsonb)->>0 AS thumbnail,
    GREATEST(
      similarity(si.trigram_text, p_query),
      word_similarity(p_query, si.trigram_text),
      similarity(LOWER(si.title), LOWER(p_query))
    ) AS rank,
    2 AS source
  FROM public.search_index si
  JOIN public.showroom_listings sl ON sl.id = si.listing_id
  WHERE si.is_active = true
  AND NOT EXISTS (SELECT 1 FROM fts WHERE fts.listing_id = si.listing_id)
  AND (
    similarity(si.trigram_text, p_query) > 0.01
    OR word_similarity(p_query, si.trigram_text) > 0.1
    OR si.trigram_text ILIKE '%' || p_query || '%'
  )
),
partial AS (
  SELECT
    si.listing_id, si.title, LEFT(si.description, 200) AS description,
    si.category, si.subcategory, si.entity_type,
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
    OR si.tags_text ILIKE '%' || p_query || '%'
    OR si.brand ILIKE '%' || p_query || '%'
    OR si.description ILIKE '%' || p_query || '%'
  )
)
SELECT COALESCE(json_agg(json_build_object(
  'listing_id', listing_id,
  'title', title,
  'description', description,
  'category', category,
  'subcategory', subcategory,
  'entity_type', entity_type,
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

GRANT EXECUTE ON FUNCTION public.smart_search_fuzzy(text, integer) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.smart_search_fts(text, integer) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.smart_search_partial(text, integer) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.smart_search_quick(text, integer) TO anon, authenticated;