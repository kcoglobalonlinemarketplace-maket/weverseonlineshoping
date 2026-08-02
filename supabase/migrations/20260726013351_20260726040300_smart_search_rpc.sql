/*
# Smart Search — RPC Functions

## Purpose
Provides full-text search, fuzzy (typo-tolerant) search, partial ILIKE search,
and trending queries via Supabase RPC functions. These are called by the
smart-search.js frontend module.

## Functions
- smart_search_fts(p_query, p_limit) — full-text search using tsquery
- smart_search_fuzzy(p_query, p_limit) — trigram similarity search for typo correction
- smart_search_partial(p_query, p_limit) — ILIKE partial word matching
- smart_search_trending(p_limit) — aggregated popular searches from analytics

All functions join back to showroom_listings to get price, currency, and images.
*/

-- ── Full-text search ─────────────────────────────────────────
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
    'rank', ts_rank(si.search_vector, to_tsquery('english', p_query))
  ) ORDER BY ts_rank(si.search_vector, to_tsquery('english', p_query)) DESC), '[]'::json)
  FROM public.search_index si
  JOIN public.showroom_listings sl ON sl.id = si.listing_id
  WHERE si.is_active = true
    AND si.search_vector @@ to_tsquery('english', p_query)
  LIMIT p_limit;
$$;

-- ── Fuzzy / trigram search (typo correction) ──────────────────
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
    AND si.trigram_text % p_query
  LIMIT p_limit;
$$;

-- ── Partial ILIKE search ──────────────────────────────────────
CREATE OR REPLACE FUNCTION public.smart_search_partial(p_query text, p_limit int DEFAULT 20)
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
      OR si.location_text ILIKE '%' || p_query || '%'
    )
  LIMIT p_limit;
$$;

-- ── Trending searches ────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.smart_search_trending(p_limit int DEFAULT 10)
RETURNS json
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT COALESCE(json_agg(json_build_object(
    'query', query,
    'count', search_count
  ) ORDER BY search_count DESC), '[]'::json)
  FROM (
    SELECT LOWER(TRIM(query)) AS query, COUNT(*) AS search_count
    FROM public.search_analytics
    WHERE created_at > now() - INTERVAL '7 days'
    GROUP BY LOWER(TRIM(query))
    ORDER BY search_count DESC
    LIMIT p_limit
  ) trending;
$$;
