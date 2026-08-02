-- Further tighten fuzzy: use only title-based similarity for typo tolerance
-- (trigram_text is too long for whole-document similarity to be meaningful)
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
    similarity(LOWER(si.title), LOWER(p_query)),
    word_similarity(LOWER(p_query), LOWER(si.title)),
    similarity(LOWER(si.category), LOWER(p_query))
  )
) ORDER BY GREATEST(
    similarity(LOWER(si.title), LOWER(p_query)),
    word_similarity(LOWER(p_query), LOWER(si.title)),
    similarity(LOWER(si.category), LOWER(p_query))
  ) DESC), '[]'::json)
FROM public.search_index si
JOIN public.showroom_listings sl ON sl.id = si.listing_id
WHERE si.is_active = true
AND (
  similarity(LOWER(si.title), LOWER(p_query)) > 0.15
  OR word_similarity(LOWER(p_query), LOWER(si.title)) > 0.25
  OR similarity(LOWER(si.category), LOWER(p_query)) > 0.2
)
LIMIT p_limit;
$function$;

GRANT EXECUTE ON FUNCTION public.smart_search_fuzzy(text, integer) TO anon, authenticated;