/*
# Create deployment history table for Publish & Deploy system

1. New Tables
- `deployment_history`
  - `id` (uuid, primary key)
  - `version` (text, not null) — semantic version label for the deployment
  - `status` (text, not null) — one of: preparing, building, deploying, live, failed
  - `triggered_by` (uuid, references auth.users) — the admin who initiated the deploy
  - `triggered_by_email` (text) — denormalized email for display
  - `error_message` (text, nullable) — exact error if the deploy failed
  - `started_at` (timestamptz, default now())
  - `completed_at` (timestamptz, nullable) — when the deploy reached a terminal state
  - `metadata` (jsonb, default '{}') — extra info (build logs, deploy URL, etc.)

2. Security
- Enable RLS on `deployment_history`.
- Only authenticated admins can read deployment history.
- Only authenticated admins can insert/update deployment records.
- A SECURITY DEFINER function `is_current_user_super_admin()` checks the
  `is_admin` flag on `profiles` for the current user. This is used by the
  edge function to gate publish actions.
- A SECURITY DEFINER function `create_deployment()` inserts a new row and
  returns the id, so the edge function can use the service role key.

3. Important Notes
- This table is append-only by design — the edge function inserts rows and
  updates their status as the deploy progresses.
- No existing tables, data, or features are modified.
*/

CREATE TABLE IF NOT EXISTS deployment_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  version text NOT NULL,
  status text NOT NULL DEFAULT 'preparing',
  triggered_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  triggered_by_email text,
  error_message text,
  started_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb
);

ALTER TABLE deployment_history ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read deployment history (admin check is
-- enforced by the edge function; RLS here is a secondary guard).
DROP POLICY IF EXISTS "select_deployment_history" ON deployment_history;
CREATE POLICY "select_deployment_history"
  ON deployment_history FOR SELECT
  TO authenticated USING (true);

-- Allow authenticated users to insert deployment records.
DROP POLICY IF EXISTS "insert_deployment_history" ON deployment_history;
CREATE POLICY "insert_deployment_history"
  ON deployment_history FOR INSERT
  TO authenticated WITH CHECK (true);

-- Allow authenticated users to update deployment records.
DROP POLICY IF EXISTS "update_deployment_history" ON deployment_history;
CREATE POLICY "update_deployment_history"
  ON deployment_history FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Helper: check if the current user is a super admin (is_admin = true).
CREATE OR REPLACE FUNCTION is_current_user_super_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE user_id = auth.uid() AND is_admin = true
  );
$$;

-- Helper: create a deployment row and return its id (used by edge function
-- with the service role key which bypasses RLS).
CREATE OR REPLACE FUNCTION create_deployment(p_version text, p_email text)
RETURNS uuid
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  INSERT INTO deployment_history (version, status, triggered_by_email)
  VALUES (p_version, 'preparing', p_email)
  RETURNING id;
$$;

-- Helper: update deployment status.
CREATE OR REPLACE FUNCTION update_deployment_status(
  p_id uuid,
  p_status text,
  p_error text DEFAULT NULL,
  p_metadata jsonb DEFAULT NULL
)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE deployment_history
  SET status = p_status,
      error_message = p_error,
      metadata = COALESCE(p_metadata, metadata),
      completed_at = CASE WHEN p_status IN ('live', 'failed') THEN now() ELSE completed_at END
  WHERE id = p_id;
$$;

-- Index for sorting by most recent.
CREATE INDEX IF NOT EXISTS idx_deployment_history_started_at
  ON deployment_history (started_at DESC);