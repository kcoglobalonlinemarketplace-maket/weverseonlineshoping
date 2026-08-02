/*
# Fix smart search RPCs — use plainto_tsquery for better matching

The to_tsquery function requires exact tsquery syntax (with & and :* operators).
Switching to plainto_tsquery which accepts plain text and handles stemming
automatically. Also lowering the trigram similarity threshold for fuzzy search.
*/

-- Set lower trigram similarity threshold for fuzzy matching
SET pg_trgm.similarity_threshold = 0.1;

-- ── Full-text search (fixed) ─────────────────────────────────
CREATE OR REPLACE FUNCTION public.smart_search_fts(p_query text, p_limit int DEFAULT 20)
RETURNS json
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
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
    AND si.search_vector @@ plainto_tsquery('english', p_query)
  LIMIT p_limit;
$$;

-- ── Fuzzy search (fixed — lower threshold) ───────────────────
CREATE OR REPLACE FUNCTION public.smart_search_fuzzy(p_query text, p_limit int DEFAULT 20)
RETURNS json
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
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
    'rank', similarity(si.trigram_text, p_query)
  ) ORDER BY similarity(si.trigram_text, p_query) DESC), '[]'::json)
  FROM public.search_index si
  JOIN public.showroom_listings sl ON sl.id = si.listing_id
  WHERE si.is_active = true
    AND similarity(si.trigram_text, p_query) > 0.05
  LIMIT p_limit;
$$;
