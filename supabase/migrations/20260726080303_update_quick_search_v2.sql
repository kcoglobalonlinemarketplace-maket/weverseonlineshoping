-- Update smart_search_quick to use the tightened fuzzy logic (title-based only)
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
      similarity(LOWER(si.title), LOWER(p_query)),
      word_similarity(LOWER(p_query), LOWER(si.title)),
      similarity(LOWER(si.category), LOWER(p_query))
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

GRANT EXECUTE ON FUNCTION public.smart_search_quick(text, integer) TO anon, authenticated;