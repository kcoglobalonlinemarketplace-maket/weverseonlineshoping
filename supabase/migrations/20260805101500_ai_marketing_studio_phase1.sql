/*
# AI Marketing Studio (Phase 1)

## Purpose
Add real storage for AI Advertisement Generator provider settings,
script history, and active homepage AI ad takeover playback.
*/

ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS ai_ad_video_providers jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS ai_ad_generation_history jsonb DEFAULT '[]'::jsonb;

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS ai_ad_enabled boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS ai_ad_video_url text,
  ADD COLUMN IF NOT EXISTS ai_ad_badge text,
  ADD COLUMN IF NOT EXISTS ai_ad_title text,
  ADD COLUMN IF NOT EXISTS ai_ad_cta_label text,
  ADD COLUMN IF NOT EXISTS ai_ad_muted boolean DEFAULT true,
  ADD COLUMN IF NOT EXISTS ai_ad_provider_id text,
  ADD COLUMN IF NOT EXISTS ai_ad_duration_seconds integer DEFAULT 30,
  ADD COLUMN IF NOT EXISTS ai_ad_starts_at timestamptz,
  ADD COLUMN IF NOT EXISTS ai_ad_ends_at timestamptz,
  ADD COLUMN IF NOT EXISTS ai_ad_updated_at timestamptz DEFAULT timezone('utc', now());
