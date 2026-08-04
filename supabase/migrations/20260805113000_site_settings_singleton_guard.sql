-- Ensure site_settings exists as a singleton and includes AI ad runtime fields.
-- This guards environments that missed older dashboard migrations.

CREATE TABLE IF NOT EXISTS public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name text NOT NULL DEFAULT 'KCO Global Online Marketplace',
  default_currency text NOT NULL DEFAULT 'USD',
  supported_currencies jsonb NOT NULL DEFAULT '["USD","NGN","GBP","EUR","CAD","AUD","SGD","JPY","MXN","IDR"]'::jsonb,
  supported_languages jsonb NOT NULL DEFAULT '["English"]'::jsonb,
  supported_countries jsonb NOT NULL DEFAULT '[]'::jsonb,
  maintenance_mode boolean NOT NULL DEFAULT false,
  marketplace_name text NOT NULL DEFAULT 'KCO Global Online Marketplace',
  support_email text NOT NULL DEFAULT 'support@kcoglobalonlinemarket.com',
  updated_at timestamptz NOT NULL DEFAULT now(),
  ai_ad_enabled boolean NOT NULL DEFAULT false,
  ai_ad_video_url text,
  ai_ad_badge text,
  ai_ad_title text,
  ai_ad_cta_label text,
  ai_ad_muted boolean NOT NULL DEFAULT true,
  ai_ad_provider_id text,
  ai_ad_duration_seconds integer,
  ai_ad_starts_at timestamptz,
  ai_ad_ends_at timestamptz,
  ai_ad_updated_at timestamptz
);

CREATE UNIQUE INDEX IF NOT EXISTS site_settings_singleton ON public.site_settings ((1));

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS ai_ad_enabled boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS ai_ad_video_url text,
  ADD COLUMN IF NOT EXISTS ai_ad_badge text,
  ADD COLUMN IF NOT EXISTS ai_ad_title text,
  ADD COLUMN IF NOT EXISTS ai_ad_cta_label text,
  ADD COLUMN IF NOT EXISTS ai_ad_muted boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS ai_ad_provider_id text,
  ADD COLUMN IF NOT EXISTS ai_ad_duration_seconds integer,
  ADD COLUMN IF NOT EXISTS ai_ad_starts_at timestamptz,
  ADD COLUMN IF NOT EXISTS ai_ad_ends_at timestamptz,
  ADD COLUMN IF NOT EXISTS ai_ad_updated_at timestamptz;

INSERT INTO public.site_settings (id)
SELECT gen_random_uuid()
WHERE NOT EXISTS (SELECT 1 FROM public.site_settings);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS public_read_site_settings ON public.site_settings;
CREATE POLICY public_read_site_settings
  ON public.site_settings FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS admin_update_site_settings ON public.site_settings;
CREATE POLICY admin_update_site_settings
  ON public.site_settings FOR UPDATE
  TO authenticated
  USING (public.is_current_user_admin())
  WITH CHECK (public.is_current_user_admin());

DROP POLICY IF EXISTS admin_insert_site_settings ON public.site_settings;
CREATE POLICY admin_insert_site_settings
  ON public.site_settings FOR INSERT
  TO authenticated
  WITH CHECK (public.is_current_user_admin());
