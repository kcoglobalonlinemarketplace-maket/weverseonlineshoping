-- Add is_enabled flag to ai_settings so admins can toggle the AI assistant on/off
ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS is_enabled boolean NOT NULL DEFAULT true;
