-- Add a dedicated homepage banner image for the homepage header.

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS homepage_banner_image text,
  ADD COLUMN IF NOT EXISTS homepage_banner_alt text;