-- Promotional section backgrounds (image AND/OR video per slot).
-- Admin picks any of these from the "Promo & Backgrounds" panel; the client
-- renders whichever media exists and falls back to the built-in design.

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS trust_promo_bg_image text,
  ADD COLUMN IF NOT EXISTS trust_promo_bg_video text,
  ADD COLUMN IF NOT EXISTS app_banner_bg_image text,
  ADD COLUMN IF NOT EXISTS app_banner_bg_video text,
  ADD COLUMN IF NOT EXISTS reviews_bg_image text,
  ADD COLUMN IF NOT EXISTS reviews_bg_video text;