-- Tighten fuzzy search: remove the overly-broad ILIKE fallback,
-- rely on similarity/word_similarity with appropriate thresholds
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
  similarity(si.trigram_text, p_query) > 0.05
  OR word_similarity(p_query, si.trigram_text) > 0.2
  OR similarity(LOWER(si.title), LOWER(p_query)) > 0.15
)
LIMIT p_limit;
$function$;

GRANT EXECUTE ON FUNCTION public.smart_search_fuzzy(text, integer) TO anon, authenticated;