/*
# AI Architecture Redesign: Dedicated Provider Responsibilities

1. Lock provider assignments:
   - OpenAI = Customer Support AI (only)
   - Gemini = Admin & Developer AI (only)
   - Anthropic removed entirely

2. Add architecture_enforced flag to ai_settings so the edge functions
   can verify the architecture is locked.

3. Add columns for architecture metadata: customer_provider, admin_provider,
   developer_provider — all hardcoded via a trigger, not user-editable.
*/

-- ── Add architecture columns to ai_settings ─────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'customer_provider') THEN
    ALTER TABLE ai_settings ADD COLUMN customer_provider text DEFAULT 'openai';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'admin_provider') THEN
    ALTER TABLE ai_settings ADD COLUMN admin_provider text DEFAULT 'gemini';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'developer_provider') THEN
    ALTER TABLE ai_settings ADD COLUMN developer_provider text DEFAULT 'gemini';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_settings' AND column_name = 'architecture_locked') THEN
    ALTER TABLE ai_settings ADD COLUMN architecture_locked boolean DEFAULT true;
  END IF;
END $$;

-- ── Lock the architecture: set defaults on existing rows ─────
UPDATE ai_settings SET
  customer_provider = 'openai',
  admin_provider = 'gemini',
  developer_provider = 'gemini',
  architecture_locked = true
WHERE architecture_locked IS NULL OR architecture_locked = true;

-- ── Create a trigger to prevent changing the architecture ───
-- The customer_provider, admin_provider, and developer_provider columns
-- can only be changed by the service role (which bypasses RLS).
-- The trigger ensures client updates never change these columns.

CREATE OR REPLACE FUNCTION public.lock_ai_architecture()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Force the architecture to stay locked
  NEW.customer_provider = 'openai';
  NEW.admin_provider = 'gemini';
  NEW.developer_provider = 'gemini';
  NEW.architecture_locked = true;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enforce_ai_architecture ON ai_settings;
CREATE TRIGGER enforce_ai_architecture
  BEFORE UPDATE ON ai_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.lock_ai_architecture();

-- ── Revoke UPDATE on architecture columns from authenticated ─
-- The trigger already enforces this, but we add a column-level grant
-- as defense-in-depth.
REVOKE UPDATE (customer_provider, admin_provider, developer_provider, architecture_locked) ON ai_settings FROM authenticated;

-- ── Add escalation assignment to admin AI ────────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_escalations' AND column_name = 'admin_response') THEN
    ALTER TABLE ai_escalations ADD COLUMN admin_response text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ai_escalations' AND column_name = 'resolved_by') THEN
    ALTER TABLE ai_escalations ADD COLUMN resolved_by uuid;
  END IF;
END $$;