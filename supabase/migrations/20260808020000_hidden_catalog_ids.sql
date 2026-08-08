-- Hidden catalog listings
-- The generated catalog (src/catalog.js) is deterministic and regenerates on
-- every page load, so a plain "is_active: false" showroom_listings row cannot
-- hide a generated item.  The admin toggles a hidden-id list here instead.
-- Public pages read site_settings (public SELECT already allowed by RLS), and
-- admins update it via the existing admin_update_site_settings policy.

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS hidden_catalog_ids jsonb NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN public.site_settings.hidden_catalog_ids IS
  'Array of generated catalog listing ids (e.g. "KCO-ME-0001") hidden from the storefront.';
