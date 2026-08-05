-- Add Flowise and n8n integration fields for Admin AI provider routing
ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS flowise_api_url text,
  ADD COLUMN IF NOT EXISTS flowise_api_key text,
  ADD COLUMN IF NOT EXISTS n8n_webhook_url text,
  ADD COLUMN IF NOT EXISTS n8n_webhook_token text;
