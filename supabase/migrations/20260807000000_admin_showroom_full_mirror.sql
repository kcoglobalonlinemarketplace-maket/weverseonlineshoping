-- ============================================================================
-- Admin Dashboard — Full Showroom Mirror (One-Click Save & Publish)
-- ============================================================================
-- Purpose
--   Let the admin edit/publish ANY showroom listing (product or property) from
--   the admin dashboard and have every change saved to Supabase immediately.
--   This provides a SECURITY DEFINER RPC that upserts a batch of showroom
--   listings by property_id (insert on conflict update) while preserving all
--   fields (specifications, subcategory, images, etc.). The RPC is gated by
--   is_current_user_admin() so only admin users can write.
--
--   This is idempotent and safe to run multiple times. It complements the
--   existing bulk_upsert_showroom_listings RPC with a full-field version.
-- ============================================================================

-- 1. Ensure is_current_user_admin() exists (defensive, idempotent)
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM public.profiles WHERE user_id = auth.uid()),
    false
  ) OR EXISTS (
    SELECT 1 FROM public.admin_roles WHERE user_id = auth.uid()
  );
$$;

GRANT EXECUTE ON FUNCTION public.is_current_user_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_current_user_admin() TO anon;

-- 2. Full-field upsert RPC for the admin dashboard "Sync & Publish All" flow.
--    Upserts showroom listings by property_id. If the row already exists it is
--    updated with all provided fields; otherwise it is inserted. Returns the
--    number of rows affected (inserted + updated).
CREATE OR REPLACE FUNCTION public.publish_showroom_upsert(p_data jsonb)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_count integer;
BEGIN
  IF NOT public.is_current_user_admin() THEN
    RAISE EXCEPTION 'permission denied for table showroom_listings'
      USING ERRCODE = '42501';
  END IF;

  INSERT INTO public.showroom_listings (
    property_id, listing_type, category, subcategory, title, description,
    price, currency, country, country_code, state, city, town, product_location,
    latitude, longitude, property_type, listing_status, bedrooms, bathrooms,
    building_size, land_size, parking_spaces, furnished, features, tags,
    highlights, seo_keywords, images, brand, color, size, condition, warranty,
    availability_status, stock_quantity, is_active, is_featured,
    is_ai_generated, ai_generated_fields, specifications, sku, rating,
    rating_count, favorite_count, created_at
  )
  SELECT
    r->>'property_id',
    COALESCE(r->>'listing_type', 'product'),
    NULLIF(r->>'category', ''),
    NULLIF(r->>'subcategory', ''),
    COALESCE(r->>'title', 'Untitled Listing'),
    COALESCE(r->>'description', ''),
    COALESCE((r->>'price')::numeric, 0),
    COALESCE(r->>'currency', 'USD'),
    COALESCE(r->>'country', ''),
    COALESCE(r->>'country_code', ''),
    NULLIF(r->>'state', ''),
    NULLIF(r->>'city', ''),
    NULLIF(r->>'town', ''),
    COALESCE(r->>'product_location', ''),
    NULLIF((r->>'latitude')::numeric, NULL),
    NULLIF((r->>'longitude')::numeric, NULL),
    NULLIF(r->>'property_type', ''),
    COALESCE(r->>'listing_status', 'sale'),
    NULLIF((r->>'bedrooms')::integer, NULL),
    NULLIF((r->>'bathrooms')::integer, NULL),
    NULLIF(r->>'building_size', ''),
    NULLIF(r->>'land_size', ''),
    NULLIF((r->>'parking_spaces')::integer, NULL),
    NULLIF(r->>'furnished', ''),
    COALESCE(r->'features', '[]'::jsonb),
    COALESCE(r->'tags', '[]'::jsonb),
    COALESCE(r->'highlights', '[]'::jsonb),
    COALESCE(r->'seo_keywords', '[]'::jsonb),
    COALESCE(r->'images', '[]'::jsonb),
    NULLIF(r->>'brand', ''),
    NULLIF(r->>'color', ''),
    NULLIF(r->>'size', ''),
    NULLIF(r->>'condition', ''),
    NULLIF(r->>'warranty', ''),
    COALESCE(r->>'availability_status', 'In Stock'),
    NULLIF((r->>'stock_quantity')::integer, NULL),
    COALESCE((r->>'is_active')::boolean, true),
    COALESCE((r->>'is_featured')::boolean, false),
    COALESCE((r->>'is_ai_generated')::boolean, false),
    COALESCE(r->'ai_generated_fields', '[]'::jsonb),
    COALESCE(r->'specifications', '{}'::jsonb),
    NULLIF(r->>'sku', r->>'property_id'),
    COALESCE((r->>'rating')::numeric, 0),
    COALESCE((r->>'rating_count')::integer, 0),
    COALESCE((r->>'favorite_count')::integer, 0),
    COALESCE(r->>'created_at', now()::text)
  FROM jsonb_array_elements(p_data) AS r
  WHERE r->>'property_id' IS NOT NULL
  ON CONFLICT (property_id) DO UPDATE SET
    listing_type = EXCLUDED.listing_type,
    category = EXCLUDED.category,
    subcategory = EXCLUDED.subcategory,
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    price = EXCLUDED.price,
    currency = EXCLUDED.currency,
    country = EXCLUDED.country,
    country_code = EXCLUDED.country_code,
    state = EXCLUDED.state,
    city = EXCLUDED.city,
    town = EXCLUDED.town,
    product_location = EXCLUDED.product_location,
    latitude = EXCLUDED.latitude,
    longitude = EXCLUDED.longitude,
    property_type = EXCLUDED.property_type,
    listing_status = EXCLUDED.listing_status,
    bedrooms = EXCLUDED.bedrooms,
    bathrooms = EXCLUDED.bathrooms,
    building_size = EXCLUDED.building_size,
    land_size = EXCLUDED.land_size,
    parking_spaces = EXCLUDED.parking_spaces,
    furnished = EXCLUDED.furnished,
    features = EXCLUDED.features,
    tags = EXCLUDED.tags,
    highlights = EXCLUDED.highlights,
    seo_keywords = EXCLUDED.seo_keywords,
    images = EXCLUDED.images,
    brand = EXCLUDED.brand,
    color = EXCLUDED.color,
    size = EXCLUDED.size,
    condition = EXCLUDED.condition,
    warranty = EXCLUDED.warranty,
    availability_status = EXCLUDED.availability_status,
    stock_quantity = EXCLUDED.stock_quantity,
    is_active = EXCLUDED.is_active,
    is_featured = EXCLUDED.is_featured,
    is_ai_generated = EXCLUDED.is_ai_generated,
    ai_generated_fields = EXCLUDED.ai_generated_fields,
    specifications = EXCLUDED.specifications,
    sku = EXCLUDED.sku,
    rating = EXCLUDED.rating,
    rating_count = EXCLUDED.rating_count,
    favorite_count = EXCLUDED.favorite_count,
    updated_at = now();

  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.publish_showroom_upsert(jsonb) TO anon, authenticated;
