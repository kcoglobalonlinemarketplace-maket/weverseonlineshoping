-- Update the bulk_upsert RPC to also handle specifications
CREATE OR REPLACE FUNCTION public.bulk_upsert_showroom_listings(p_data jsonb)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_count integer;
BEGIN
  INSERT INTO public.showroom_listings (
    property_id, listing_type, category, title, description, price, currency,
    country, state, city, town, bedrooms, bathrooms, building_size, land_size,
    parking_spaces, property_type, furnished, listing_status, features, tags,
    rating, rating_count, favorite_count, sku, is_active, specifications, seo_keywords,
    subcategory, images
  )
  SELECT
    r->>'property_id',
    r->>'listing_type',
    NULLIF(r->>'category', ''),
    r->>'title',
    COALESCE(r->>'description', ''),
    COALESCE((r->>'price')::numeric, 0),
    COALESCE(r->>'currency', 'USD'),
    COALESCE(r->>'country', ''),
    NULLIF(r->>'state', ''),
    NULLIF(r->>'city', ''),
    NULLIF(r->>'town', ''),
    NULLIF((r->>'bedrooms')::integer, NULL),
    NULLIF((r->>'bathrooms')::integer, NULL),
    NULLIF(r->>'building_size', ''),
    NULLIF(r->>'land_size', ''),
    NULLIF((r->>'parking_spaces')::integer, NULL),
    NULLIF(r->>'property_type', ''),
    NULLIF(r->>'furnished', ''),
    COALESCE(r->>'listing_status', 'sale'),
    COALESCE(r->'features', '[]'::jsonb),
    COALESCE(r->'tags', '[]'::jsonb),
    COALESCE((r->>'rating')::numeric, 0),
    COALESCE((r->>'rating_count')::integer, 0),
    COALESCE((r->>'favorite_count')::integer, 0),
    COALESCE(r->>'sku', r->>'property_id'),
    COALESCE((r->>'is_active')::boolean, true),
    COALESCE(r->'specifications', '{}'::jsonb),
    COALESCE(r->'seo_keywords', '[]'::jsonb),
    NULLIF(r->>'subcategory', ''),
    COALESCE(r->'images', '[]'::jsonb)
  FROM jsonb_array_elements(p_data) AS r
  ON CONFLICT (property_id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    price = EXCLUDED.price,
    category = EXCLUDED.category,
    tags = EXCLUDED.tags,
    features = EXCLUDED.features,
    specifications = EXCLUDED.specifications,
    subcategory = EXCLUDED.subcategory,
    images = EXCLUDED.images,
    is_active = EXCLUDED.is_active;

  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.bulk_upsert_showroom_listings(jsonb) TO anon, authenticated;