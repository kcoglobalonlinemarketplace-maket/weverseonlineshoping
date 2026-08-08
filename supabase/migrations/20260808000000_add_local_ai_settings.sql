-- Add local AI (Ollama + ComfyUI) settings to ai_settings.
-- Keys for local AI never need to leave the browser (localhost only).

ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS ollama_image_model   text DEFAULT 'llava',
  ADD COLUMN IF NOT EXISTS comfyui_url          text DEFAULT 'http://127.0.0.1:8188',
  ADD COLUMN IF NOT EXISTS comfyui_workflow     text,
  ADD COLUMN IF NOT EXISTS comfyui_input_node   text DEFAULT 'image',
  ADD COLUMN IF NOT EXISTS comfyui_output_node  text DEFAULT 'image',
  ADD COLUMN IF NOT EXISTS local_ai_enabled     boolean NOT NULL DEFAULT true;

-- The singleton row keeps defaults even if it already exists.
INSERT INTO public.ai_settings (active_provider)
SELECT 'gemini'
WHERE NOT EXISTS (SELECT 1 FROM public.ai_settings);
