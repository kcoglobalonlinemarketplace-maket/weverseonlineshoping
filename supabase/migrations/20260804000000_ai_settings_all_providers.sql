-- Expand ai_settings to support all 20 AI providers
-- Run this in Supabase SQL Editor once

-- 1. Drop the restrictive CHECK constraint on active_provider
ALTER TABLE public.ai_settings
  DROP CONSTRAINT IF EXISTS ai_settings_active_provider_check;

-- 2. Change active_provider default to 'gemini'
ALTER TABLE public.ai_settings
  ALTER COLUMN active_provider SET DEFAULT 'gemini';

-- 3. Add all new provider API key + model columns
ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS groq_key          text,
  ADD COLUMN IF NOT EXISTS groq_model        text NOT NULL DEFAULT 'llama-3.3-70b-versatile',
  ADD COLUMN IF NOT EXISTS deepseek_key      text,
  ADD COLUMN IF NOT EXISTS deepseek_model    text NOT NULL DEFAULT 'deepseek-coder',
  ADD COLUMN IF NOT EXISTS mistral_key       text,
  ADD COLUMN IF NOT EXISTS mistral_model     text NOT NULL DEFAULT 'codestral-latest',
  ADD COLUMN IF NOT EXISTS cohere_key        text,
  ADD COLUMN IF NOT EXISTS cohere_model      text NOT NULL DEFAULT 'command-r',
  ADD COLUMN IF NOT EXISTS hf_key            text,
  ADD COLUMN IF NOT EXISTS hf_model          text NOT NULL DEFAULT 'Qwen/Qwen2.5-Coder-32B-Instruct',
  ADD COLUMN IF NOT EXISTS together_key      text,
  ADD COLUMN IF NOT EXISTS together_model    text NOT NULL DEFAULT 'Qwen/Qwen2.5-Coder-32B-Instruct',
  ADD COLUMN IF NOT EXISTS openrouter_key    text,
  ADD COLUMN IF NOT EXISTS openrouter_model  text NOT NULL DEFAULT 'google/gemini-2.0-flash-exp:free',
  ADD COLUMN IF NOT EXISTS cerebras_key      text,
  ADD COLUMN IF NOT EXISTS cerebras_model    text NOT NULL DEFAULT 'llama3.3-70b',
  ADD COLUMN IF NOT EXISTS fireworks_key     text,
  ADD COLUMN IF NOT EXISTS fireworks_model   text NOT NULL DEFAULT 'accounts/fireworks/models/qwen2p5-coder-32b-instruct',
  ADD COLUMN IF NOT EXISTS github_key        text,
  ADD COLUMN IF NOT EXISTS github_model      text NOT NULL DEFAULT 'meta-llama/Llama-3.3-70B-Instruct',
  ADD COLUMN IF NOT EXISTS cloudflare_key    text,
  ADD COLUMN IF NOT EXISTS cloudflare_model  text NOT NULL DEFAULT '@cf/meta/llama-3.3-70b-instruct',
  ADD COLUMN IF NOT EXISTS sambanova_key     text,
  ADD COLUMN IF NOT EXISTS sambanova_model   text NOT NULL DEFAULT 'Meta-Llama-3.3-70B-Instruct',
  ADD COLUMN IF NOT EXISTS hyperbolic_key    text,
  ADD COLUMN IF NOT EXISTS hyperbolic_model  text NOT NULL DEFAULT 'Qwen/Qwen2.5-Coder-32B-Instruct',
  ADD COLUMN IF NOT EXISTS novita_key        text,
  ADD COLUMN IF NOT EXISTS novita_model      text NOT NULL DEFAULT 'qwen/qwen2.5-coder-32b-instruct',
  ADD COLUMN IF NOT EXISTS perplexity_key    text,
  ADD COLUMN IF NOT EXISTS perplexity_model  text NOT NULL DEFAULT 'llama-3.1-sonar-small-128k-online',
  ADD COLUMN IF NOT EXISTS replicate_key     text,
  ADD COLUMN IF NOT EXISTS replicate_model   text NOT NULL DEFAULT 'meta/codellama-70b-instruct',
  ADD COLUMN IF NOT EXISTS ai21_key          text,
  ADD COLUMN IF NOT EXISTS ai21_model        text NOT NULL DEFAULT 'jamba-1.5-mini',
  ADD COLUMN IF NOT EXISTS lepton_key        text,
  ADD COLUMN IF NOT EXISTS lepton_model      text NOT NULL DEFAULT 'qwen2-5-coder-32b-instruct',
  ADD COLUMN IF NOT EXISTS gemini_key        text,
  ADD COLUMN IF NOT EXISTS customer_ai_enabled  boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS product_ai_enabled   boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS ai_code_assist       boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS ai_moderation        boolean NOT NULL DEFAULT false;

-- 4. Rename old columns to match new naming (add aliases)
ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS openai_key text;

-- Copy existing key values to new column names if they exist
UPDATE public.ai_settings SET openai_key = openai_api_key WHERE openai_api_key IS NOT NULL AND openai_key IS NULL;
UPDATE public.ai_settings SET gemini_key = gemini_api_key WHERE gemini_api_key IS NOT NULL AND gemini_key IS NULL;

-- 5. Drop the old INSERT/UPDATE only policy and add a more permissive admin policy
DROP POLICY IF EXISTS "admin_update_ai_settings"  ON public.ai_settings;
DROP POLICY IF EXISTS "admin_read_ai_settings"    ON public.ai_settings;
DROP POLICY IF EXISTS "admin_insert_ai_settings"  ON public.ai_settings;

CREATE POLICY "admin_select_ai_settings" ON public.ai_settings
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE POLICY "admin_insert_ai_settings" ON public.ai_settings
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM public.profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE POLICY "admin_update_ai_settings" ON public.ai_settings
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

-- 6. Ensure the singleton row exists (uses gen_random_uuid for id)
INSERT INTO public.ai_settings (active_provider)
SELECT 'gemini'
WHERE NOT EXISTS (SELECT 1 FROM public.ai_settings)
RETURNING id;
