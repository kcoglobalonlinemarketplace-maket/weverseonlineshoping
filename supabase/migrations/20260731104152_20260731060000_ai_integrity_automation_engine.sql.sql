/*
# AI Product Integrity Automation Engine

1. New Tables
- `integrity_automation_config`: Singleton config for the automation engine (enabled, thresholds, schedules)
- `integrity_notifications`: Admin notifications for issues found, auto-repaired, and items needing review

2. Enhanced scan queue
- Add `priority` and `scheduled_at` columns to `integrity_scan_queue` for smarter scheduling

3. Security
- RLS enabled on all new tables, admin-only
- Service role bypasses RLS for edge function operations
*/

-- ── integrity_automation_config ─────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_automation_config (
  id integer PRIMARY KEY DEFAULT 1,
  enabled boolean NOT NULL DEFAULT true,
  auto_repair_threshold numeric(5,2) NOT NULL DEFAULT 95.00,
  daily_scan_enabled boolean NOT NULL DEFAULT true,
  daily_scan_hour integer NOT NULL DEFAULT 3,
  scan_on_create boolean NOT NULL DEFAULT true,
  scan_on_update boolean NOT NULL DEFAULT true,
  scan_on_image_upload boolean NOT NULL DEFAULT true,
  scan_on_import boolean NOT NULL DEFAULT true,
  notify_on_issue boolean NOT NULL DEFAULT true,
  notify_on_repair boolean NOT NULL DEFAULT true,
  notify_on_review boolean NOT NULL DEFAULT true,
  max_concurrent_scans integer NOT NULL DEFAULT 5,
  last_daily_scan_at timestamptz,
  last_queue_process_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_automation_config ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_automation_config" ON integrity_automation_config;
CREATE POLICY "select_admin_automation_config" ON integrity_automation_config
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_automation_config" ON integrity_automation_config;
CREATE POLICY "update_admin_automation_config" ON integrity_automation_config
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

-- Insert default config row
INSERT INTO integrity_automation_config (id) VALUES (1) ON CONFLICT DO NOTHING;

-- ── integrity_notifications ─────────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL DEFAULT 'issue_found',
  severity text NOT NULL DEFAULT 'medium',
  product_id uuid,
  property_id text,
  product_title text,
  message text NOT NULL,
  details jsonb,
  scan_id uuid,
  issue_id uuid,
  auto_resolved boolean DEFAULT false,
  read boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_notifications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_notifications" ON integrity_notifications;
CREATE POLICY "select_admin_notifications" ON integrity_notifications
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_notifications" ON integrity_notifications;
CREATE POLICY "insert_admin_notifications" ON integrity_notifications
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_notifications" ON integrity_notifications;
CREATE POLICY "update_admin_notifications" ON integrity_notifications
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "delete_admin_notifications" ON integrity_notifications;
CREATE POLICY "delete_admin_notifications" ON integrity_notifications
  FOR DELETE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_notifications_unread ON integrity_notifications(read, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_type ON integrity_notifications(type, severity);

-- ── Enhance integrity_scan_queue ────────────────────────────
ALTER TABLE integrity_scan_queue ADD COLUMN IF NOT EXISTS priority integer DEFAULT 0;
ALTER TABLE integrity_scan_queue ADD COLUMN IF NOT EXISTS scheduled_at timestamptz DEFAULT now();
ALTER TABLE integrity_scan_queue ADD COLUMN IF NOT EXISTS error_message text;

CREATE INDEX IF NOT EXISTS idx_scan_queue_priority ON integrity_scan_queue(status, priority DESC, created_at);

-- ── Allow service role to insert notifications (for edge functions) ──
-- The service role bypasses RLS entirely, so no additional policy needed.
-- The insert policy above allows authenticated admins to insert as well.

-- ── Function to get unread notification count ───────────────
CREATE OR REPLACE FUNCTION public.get_unread_notification_count()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT count(*)::integer FROM integrity_notifications WHERE read = false;
$$;