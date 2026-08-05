/*
# AI Automation Center (n8n Central Orchestration)

Adds automation-center controls and run logs for modular assistant orchestration.
Safe to run multiple times.
*/

ALTER TABLE public.ai_settings
  ADD COLUMN IF NOT EXISTS automation_center_enabled boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS n8n_assistant_enabled jsonb NOT NULL DEFAULT '{
    "product_ai": true,
    "writer_ai": true,
    "image_ai": true,
    "showroom_ai": true,
    "seo_ai": true,
    "customer_support_ai": true,
    "website_builder_ai": true,
    "ai_repair_assistant": true
  }'::jsonb,
  ADD COLUMN IF NOT EXISTS n8n_assistant_webhooks jsonb NOT NULL DEFAULT '{}'::jsonb;

CREATE TABLE IF NOT EXISTS public.ai_automation_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  action text NOT NULL,
  assistant text,
  status text NOT NULL DEFAULT 'started' CHECK (status IN ('started', 'success', 'failed')),
  request_payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  response_payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  error_message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);

CREATE INDEX IF NOT EXISTS idx_ai_automation_runs_created_at
  ON public.ai_automation_runs(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_ai_automation_runs_user_id
  ON public.ai_automation_runs(user_id, created_at DESC);

ALTER TABLE public.ai_automation_runs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS admin_select_ai_automation_runs ON public.ai_automation_runs;
CREATE POLICY admin_select_ai_automation_runs
  ON public.ai_automation_runs
  FOR SELECT
  TO authenticated
  USING (public.is_current_user_admin());

DROP POLICY IF EXISTS service_insert_ai_automation_runs ON public.ai_automation_runs;
CREATE POLICY service_insert_ai_automation_runs
  ON public.ai_automation_runs
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_current_user_admin());
