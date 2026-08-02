/*
# Fix search trigger — handle jsonb arrays

The tags and seo_keywords columns are jsonb, not text[]. Fix the trigger
function to handle jsonb arrays properly.
*/

CREATE OR REPLACE FUNCTION public.sync_search_index()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_tags text;
  v_seo text;
  v_location text;
  v_trigram text;
  v_search_vector tsvector;
BEGIN
  IF TG_OP = 'DELETE' THEN
    DELETE FROM public.search_index WHERE listing_id = OLD.id;
    RETURN OLD;
  END IF;

  -- Convert jsonb arrays to text
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

  v_trigram := LOWER(unaccent(CONCAT_WS(' ',
    COALESCE(NEW.title, ''), COALESCE(NEW.description, ''), COALESCE(NEW.category, ''),
    COALESCE(NEW.subcategory, ''), COALESCE(NEW.sku, ''), v_tags, v_seo, v_location,
    COALESCE(NEW.building_size, ''), COALESCE(NEW.property_type, '')
  )));

  v_search_vector :=
    setweight(to_tsvector('english', unaccent(coalesce(NEW.title, ''))), 'A') ||
    setweight(to_tsvector('english', unaccent(coalesce(NEW.category, '') || ' ' || coalesce(NEW.subcategory, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_tags, '') || ' ' || coalesce(v_seo, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(NEW.property_type, '') || ' ' || coalesce(NEW.sku, ''))), 'C') ||
    setweight(to_tsvector('english', unaccent(coalesce(NEW.description, ''))), 'D') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_location, ''))), 'D');

  INSERT INTO public.search_index (
    listing_id, entity_type, title, description, category, subcategory,
    sku, brand, tags_text, seo_text, location_text, color, size, model_number,
    search_vector, trigram_text, is_active, updated_at
  ) VALUES (
    NEW.id, COALESCE(NEW.listing_type, 'product'), COALESCE(NEW.title, ''),
    COALESCE(NEW.description, ''), COALESCE(NEW.category, ''), COALESCE(NEW.subcategory, ''),
    COALESCE(NEW.sku, ''), COALESCE(NEW.property_type, ''), v_tags, v_seo, v_location,
    '', COALESCE(NEW.building_size, ''), COALESCE(NEW.property_type, ''),
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
    search_vector = EXCLUDED.search_vector,
    trigram_text = EXCLUDED.trigram_text,
    is_active = EXCLUDED.is_active,
    updated_at = now();

  RETURN NEW;
END;
$$;

-- Also fix the backfill function
CREATE OR REPLACE FUNCTION public.sync_search_index_force(r public.showroom_listings)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_tags text;
  v_seo text;
  v_location text;
  v_trigram text;
  v_search_vector tsvector;
BEGIN
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

  v_location := CONCAT_WS(' ', COALESCE(r.country, ''), COALESCE(r.state, ''), COALESCE(r.city, ''), COALESCE(r.town, ''));

  v_trigram := LOWER(unaccent(CONCAT_WS(' ',
    COALESCE(r.title, ''), COALESCE(r.description, ''), COALESCE(r.category, ''),
    COALESCE(r.subcategory, ''), COALESCE(r.sku, ''), v_tags, v_seo, v_location,
    COALESCE(r.building_size, ''), COALESCE(r.property_type, '')
  )));

  v_search_vector :=
    setweight(to_tsvector('english', unaccent(coalesce(r.title, ''))), 'A') ||
    setweight(to_tsvector('english', unaccent(coalesce(r.category, '') || ' ' || coalesce(r.subcategory, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(v_tags, '') || ' ' || coalesce(v_seo, ''))), 'B') ||
    setweight(to_tsvector('english', unaccent(coalesce(r.property_type, '') || ' ' || coalesce(r.sku, ''))), 'C') ||
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
