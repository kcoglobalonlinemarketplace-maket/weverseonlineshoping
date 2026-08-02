/*
# Developer Agent Approvals Table

1. Purpose
   - Stores pending approval requests from the AI Developer Agent (file edits, file deletes, terminal commands).
   - The admin reviews each request in the dashboard and approves or rejects it.
   - Once approved, the edge function executes the action and records the result.

2. New Tables
   - `developer_agent_approvals`
     - `id` uuid PK
     - `user_id` uuid (admin who requested / must approve)
     - `action_type` text (file_read | file_search | file_create | file_edit | file_delete | file_rename | run_command)
     - `file_path` text (nullable — used for file actions)
     - `new_path` text (nullable — used for rename)
     - `content` text (nullable — used for create/edit)
     - `command` text (nullable — used for run_command)
     - `status` text (pending | approved | rejected | executed | failed)
     - `result` jsonb (nullable — execution output)
     - `created_at` timestamptz
     - `resolved_at` timestamptz (nullable)

3. Security
   - RLS enabled.
   - Only authenticated admins can insert/read/update their own approval rows.
   - Uses the existing is_current_user_admin() RPC for the admin check.
*/

CREATE TABLE IF NOT EXISTS developer_agent_approvals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid(),
  action_type text NOT NULL,
  file_path text,
  new_path text,
  content text,
  command text,
  status text NOT NULL DEFAULT 'pending',
  result jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  resolved_at timestamptz
);

ALTER TABLE developer_agent_approvals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_approvals" ON developer_agent_approvals;
CREATE POLICY "select_own_approvals" ON developer_agent_approvals
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_approvals" ON developer_agent_approvals;
CREATE POLICY "insert_own_approvals" ON developer_agent_approvals
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_approvals" ON developer_agent_approvals;
CREATE POLICY "update_own_approvals" ON developer_agent_approvals
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_approvals" ON developer_agent_approvals;
CREATE POLICY "delete_own_approvals" ON developer_agent_approvals
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_dev_approvals_user_status ON developer_agent_approvals(user_id, status);