# TODO: Free Autonomous AI Assistant (no n8n dependency)

## Goal
Give the site a single free AI assistant that has the same autonomous build/repair
abilities as the n8n AI Assistant, but works entirely independently of n8n using
only free providers (Gemini, Groq, OpenRouter, Hugging Face).

## Steps
- [x] 1. Remove non-free providers (OpenAI, Flowise) from `src/admin-ai-settings-page.js`
- [x] 2. Update the AI settings page UI (architecture diagram, info box) to be free-only
- [x] 3. Update edge function `supabase/functions/ai-admin-assistant/index.ts` to remove Flowise handler
- [x] 4. Add native "Repair & Build" engine to `src/admin-ai-page.js` (scan website, detect issues, generate/apply fixes locally — no n8n)
- [x] 5. Update the AI assistant welcome message to reflect the free, autonomous, self-sufficient assistant
- [x] 6. Verify syntax with `node --check` on all changed JS files
