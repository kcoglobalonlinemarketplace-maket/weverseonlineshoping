-- Groq VISION backup model for the Product Scanner.
-- Product Scanner chain: Gemini (primary) -> Groq vision (backup on failure/quota).
ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS groq_vision_model text DEFAULT 'meta-llama/llama-4-scout-17b-16e-instruct';

-- Existing singleton row gets the default explicitly (DEFAULT only applies to
-- new rows for nullable columns).
UPDATE public.ai_settings
SET groq_vision_model = 'meta-llama/llama-4-scout-17b-16e-instruct'
WHERE groq_vision_model IS NULL;
