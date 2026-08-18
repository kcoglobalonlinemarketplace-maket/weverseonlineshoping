-- App Promotion banner + Live Product Promotions settings.
-- Adds site_settings columns used by:
--   • src/app-promo-banner.js  (bottom-of-page mobile app banner)
--   • src/live-promo-alerts.js (Featured Product Alerts toasts)
--   • Admin → Content Manager  (owner controls everything below)
-- Safe to re-run. No destructive changes.

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS app_banner_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS app_play_store_url text,
  ADD COLUMN IF NOT EXISTS app_banner_headline text NOT NULL DEFAULT 'Discover More with the Weverse Online Shop App',
  ADD COLUMN IF NOT EXISTS live_promo_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS live_promo_interval_seconds integer NOT NULL DEFAULT 60,
  ADD COLUMN IF NOT EXISTS live_promo_first_delay_seconds integer NOT NULL DEFAULT 12,
  ADD COLUMN IF NOT EXISTS live_promo_product_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS live_promo_use_owned_only boolean NOT NULL DEFAULT false;
