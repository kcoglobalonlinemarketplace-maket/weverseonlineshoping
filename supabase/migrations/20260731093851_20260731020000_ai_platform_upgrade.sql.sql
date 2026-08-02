/*
# AI Platform Upgrade: Sessions, Usage Tracking, Escalations, File History

1. New Tables
   - ai_chat_sessions: Persistent chat sessions for both customer and admin AI
   - ai_usage_tracking: Track token usage, cost, and latency per request
   - ai_escalations: Customer support escalations to human agents
   - dev_agent_file_history: Audit log of all file modifications by Developer AI
   - ai_user_quotas: Per-user daily request quotas (separate from existing ai_rate_limits which handles API endpoint rate limiting)

2. Security
   - RLS enabled on all tables
   - ai_chat_sessions: owner-scoped
   - ai_usage_tracking: admin-only read, anyone can insert
   - ai_escalations: owner can read own, admin can read all
   - dev_agent_file_history: admin-only
   - ai_user_quotas: owner-scoped + admin override

3. Existing table modifications
   - ai_chat_history: add session_id, tokens_used, provider, mode columns
   - ai_settings: add per-mode model overrides, rate_limit_daily, customer_enabled, developer_enabled
*/

-- ── AI Chat Sessions ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_chat_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  session_type text NOT NULL DEFAULT 'admin',
  mode text DEFAULT 'marketplace',
  title text,
  last_message_at timestamptz DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE ai_chat_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_sessions" ON ai_chat_sessions;
CREATE POLICY "select_own_sessions" ON ai_chat_sessions
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_sessions" ON ai_chat_sessions;
CREATE POLICY "insert_own_sessions" ON ai_chat_sessions
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_sessions" ON ai_chat_sessions;
CREATE POLICY "update_own_sessions" ON ai_chat_sessions
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_sessions" ON ai_chat_sessions;
CREATE POLICY "delete_own_sessions" ON ai_chat_sessions
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_chat_sessions_user ON ai_chat_sessions(user_id, created_at DESC);

-- ── AI Usage Tracking ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_usage_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  session_type text NOT NULL,
  provider text NOT NULL,
  model text,
  mode text,
  input_tokens integer DEFAULT 0,
  output_tokens integer DEFAULT 0,
  total_tokens integer DEFAULT 0,
  estimated_cost_usd numeric(10,6) DEFAULT 0,
  latency_ms integer DEFAULT 0,
  tool_calls_count integer DEFAULT 0,
  success boolean DEFAULT true,
  error_message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE ai_usage_tracking ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_usage" ON ai_usage_tracking;
CREATE POLICY "select_admin_usage" ON ai_usage_tracking
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

DROP POLICY IF EXISTS "insert_own_usage" ON ai_usage_tracking;
CREATE POLICY "insert_own_usage" ON ai_usage_tracking
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_usage_created ON ai_usage_tracking(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_usage_user ON ai_usage_tracking(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_usage_provider ON ai_usage_tracking(provider, created_at DESC);

-- ── AI Escalations ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_escalations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  customer_email text,
  session_id uuid,
  reason text NOT NULL,
  status text NOT NULL DEFAULT 'open',
  priority text DEFAULT 'normal',
  assigned_to uuid,
  conversation_summary text,
  created_at timestamptz NOT NULL DEFAULT now(),
  resolved_at timestamptz
);

ALTER TABLE ai_escalations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_escalations" ON ai_escalations;
CREATE POLICY "select_own_escalations" ON ai_escalations
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "select_admin_escalations" ON ai_escalations;
CREATE POLICY "select_admin_escalations" ON ai_escalations
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

DROP POLICY IF EXISTS "insert_escalations" ON ai_escalations;
CREATE POLICY "insert_escalations" ON ai_escalations
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "update_admin_escalations" ON ai_escalations;
CREATE POLICY "update_admin_escalations" ON ai_escalations
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_escalations_status ON ai_escalations(status, created_at DESC);

-- ── Developer Agent File History ───────────────────────────
CREATE TABLE IF NOT EXISTS dev_agent_file_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  approval_id uuid,
  user_id uuid,
  action_type text NOT NULL,
  file_path text NOT NULL,
  old_content text,
  new_content text,
  command_output text,
  success boolean DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE dev_agent_file_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_file_history" ON dev_agent_file_history;
CREATE POLICY "select_admin_file_history" ON dev_agent_file_history
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

DROP POLICY IF EXISTS "insert_own_file_history" ON dev_agent_file_history;
CREATE POLICY "insert_own_file_history" ON dev_agent_file_history
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_file_history_user ON dev_agent_file_history(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_file_history_path ON dev_agent_file_history(file_path);

-- ── AI User Quotas (per-user daily limits, separate from ai_rate_limits) ──
CREATE TABLE IF NOT EXISTS ai_user_quotas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  requests_today integer DEFAULT 0,
  last_request_at timestamptz,
  daily_limit integer DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE ai_user_quotas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_quotas" ON ai_user_quotas;
CREATE POLICY "select_own_quotas" ON ai_user_quotas
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_quotas" ON ai_user_quotas;
CREATE POLICY "insert_own_quotas" ON ai_user_quotas
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_quotas" ON ai_user_quotas;
CREATE POLICY "update_own_quotas" ON ai_user_quotas
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_admin_quotas" ON ai_user_quotas;
CREATE POLICY "update_admin_quotas" ON ai_user_quotas
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE UNIQUE INDEX IF NOT EXISTS idx_user_quotas_user ON ai_user_quotas(user_id);

-- ── Add columns to ai_chat_history ─────────────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_chat_history' AND column_name = 'session_id') THEN
    ALTER TABLE ai_chat_history ADD COLUMN session_id uuid;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_chat_history' AND column_name = 'tokens_used') THEN
    ALTER TABLE ai_chat_history ADD COLUMN tokens_used integer DEFAULT 0;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_chat_history' AND column_name = 'provider') THEN
    ALTER TABLE ai_chat_history ADD COLUMN provider text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_chat_history' AND column_name = 'mode') THEN
    ALTER TABLE ai_chat_history ADD COLUMN mode text DEFAULT 'marketplace';
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_chat_history_session ON ai_chat_history(session_id);

-- ── Add columns to ai_settings ─────────────────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'customer_model_override') THEN
    ALTER TABLE ai_settings ADD COLUMN customer_model_override text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'admin_model_override') THEN
    ALTER TABLE ai_settings ADD COLUMN admin_model_override text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'developer_model_override') THEN
    ALTER TABLE ai_settings ADD COLUMN developer_model_override text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'rate_limit_daily') THEN
    ALTER TABLE ai_settings ADD COLUMN rate_limit_daily integer DEFAULT 100;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'customer_enabled') THEN
    ALTER TABLE ai_settings ADD COLUMN customer_enabled boolean DEFAULT true;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'developer_enabled') THEN
    ALTER TABLE ai_settings ADD COLUMN developer_enabled boolean DEFAULT true;
  END IF;
END $$;