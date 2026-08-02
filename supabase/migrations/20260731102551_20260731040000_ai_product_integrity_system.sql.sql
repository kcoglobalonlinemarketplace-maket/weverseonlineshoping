/*
# AI Product Integrity System

1. New Tables
- `integrity_scans`: Records of each scan run (full or incremental)
- `integrity_product_reports`: Per-product analysis results with health score
- `integrity_issues`: Individual issues detected (wrong image, duplicate, broken link, etc.)
- `integrity_repair_logs`: Records of repairs performed with before/after state
- `integrity_review_queue`: Products pending human review (confidence < 95%)
- `integrity_image_cache`: Hash and metadata for every image across all products
- `integrity_version_history`: Snapshot of product image state before any repair (for rollback)

2. Triggers
- After INSERT or UPDATE on `showroom_listings`: creates a pending scan task
- This enables automatic scanning when products are created/edited

3. Security
- RLS enabled on all tables
- Admin-only read/write (authenticated + is_admin)
- Service role bypasses RLS for edge function operations

4. Indexes
- On product_id, scan_id, status, issue_type, confidence, created_at
*/

-- ── integrity_scans ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_scans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scan_type text NOT NULL DEFAULT 'full',
  status text NOT NULL DEFAULT 'pending',
  triggered_by text DEFAULT 'manual',
  products_scanned integer DEFAULT 0,
  images_scanned integer DEFAULT 0,
  issues_found integer DEFAULT 0,
  repairs_completed integer DEFAULT 0,
  pending_reviews integer DEFAULT 0,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_scans ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_scans" ON integrity_scans;
CREATE POLICY "select_admin_scans" ON integrity_scans
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_scans" ON integrity_scans;
CREATE POLICY "insert_admin_scans" ON integrity_scans
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_scans" ON integrity_scans;
CREATE POLICY "update_admin_scans" ON integrity_scans
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_scans_status ON integrity_scans(status, created_at DESC);

-- ── integrity_product_reports ──────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_product_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scan_id uuid REFERENCES integrity_scans(id) ON DELETE CASCADE,
  product_id uuid NOT NULL,
  property_id text,
  product_title text,
  product_category text,
  listing_type text,
  health_score integer DEFAULT 100,
  total_images integer DEFAULT 0,
  issues_count integer DEFAULT 0,
  status text DEFAULT 'clean',
  confidence numeric(5,2) DEFAULT 100.00,
  analysis jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_product_reports ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_reports" ON integrity_product_reports;
CREATE POLICY "select_admin_reports" ON integrity_product_reports
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_reports" ON integrity_product_reports;
CREATE POLICY "insert_admin_reports" ON integrity_product_reports
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_reports" ON integrity_product_reports;
CREATE POLICY "update_admin_reports" ON integrity_product_reports
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_reports_product ON integrity_product_reports(product_id);
CREATE INDEX IF NOT EXISTS idx_reports_scan ON integrity_product_reports(scan_id);
CREATE INDEX IF NOT EXISTS idx_reports_status ON integrity_product_reports(status);
CREATE INDEX IF NOT EXISTS idx_reports_health ON integrity_product_reports(health_score);

-- ── integrity_issues ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scan_id uuid REFERENCES integrity_scans(id) ON DELETE CASCADE,
  product_id uuid NOT NULL,
  property_id text,
  issue_type text NOT NULL,
  severity text DEFAULT 'medium',
  description text,
  image_url text,
  image_index integer,
  confidence numeric(5,2) DEFAULT 100.00,
  status text DEFAULT 'open',
  auto_repairable boolean DEFAULT false,
  repaired_at timestamptz,
  repair_log_id uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_issues ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_issues" ON integrity_issues;
CREATE POLICY "select_admin_issues" ON integrity_issues
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_issues" ON integrity_issues;
CREATE POLICY "insert_admin_issues" ON integrity_issues
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_issues" ON integrity_issues;
CREATE POLICY "update_admin_issues" ON integrity_issues
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_issues_product ON integrity_issues(product_id);
CREATE INDEX IF NOT EXISTS idx_issues_type ON integrity_issues(issue_type, status);
CREATE INDEX IF NOT EXISTS idx_issues_status ON integrity_issues(status, created_at DESC);

-- ── integrity_repair_logs ───────────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_repair_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scan_id uuid REFERENCES integrity_scans(id) ON DELETE CASCADE,
  product_id uuid NOT NULL,
  property_id text,
  repair_type text NOT NULL,
  description text,
  before_state jsonb,
  after_state jsonb,
  confidence numeric(5,2),
  auto_repaired boolean DEFAULT false,
  approved_by uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_repair_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_repair_logs" ON integrity_repair_logs;
CREATE POLICY "select_admin_repair_logs" ON integrity_repair_logs
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_repair_logs" ON integrity_repair_logs;
CREATE POLICY "insert_admin_repair_logs" ON integrity_repair_logs
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_repair_product ON integrity_repair_logs(product_id, created_at DESC);

-- ── integrity_review_queue ──────────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_review_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL,
  property_id text,
  product_title text,
  product_category text,
  issue_count integer DEFAULT 0,
  confidence numeric(5,2),
  reason text,
  ai_analysis text,
  suggested_actions jsonb,
  status text DEFAULT 'pending',
  reviewed_by uuid,
  reviewed_at timestamptz,
  review_decision text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_review_queue ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_review_queue" ON integrity_review_queue;
CREATE POLICY "select_admin_review_queue" ON integrity_review_queue
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_review_queue" ON integrity_review_queue;
CREATE POLICY "insert_admin_review_queue" ON integrity_review_queue
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_review_queue" ON integrity_review_queue;
CREATE POLICY "update_admin_review_queue" ON integrity_review_queue
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "delete_admin_review_queue" ON integrity_review_queue;
CREATE POLICY "delete_admin_review_queue" ON integrity_review_queue
  FOR DELETE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_review_status ON integrity_review_queue(status, created_at DESC);

-- ── integrity_image_cache ───────────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_image_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  image_hash text,
  product_id uuid,
  property_id text,
  file_name text,
  file_size integer,
  width integer,
  height integer,
  is_broken boolean DEFAULT false,
  is_corrupted boolean DEFAULT false,
  quality_score integer DEFAULT 100,
  fetched_at timestamptz DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_image_cache ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_image_cache" ON integrity_image_cache;
CREATE POLICY "select_admin_image_cache" ON integrity_image_cache
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_image_cache" ON integrity_image_cache;
CREATE POLICY "insert_admin_image_cache" ON integrity_image_cache
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_image_cache" ON integrity_image_cache;
CREATE POLICY "update_admin_image_cache" ON integrity_image_cache
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_image_hash ON integrity_image_cache(image_hash);
CREATE INDEX IF NOT EXISTS idx_image_product ON integrity_image_cache(product_id);
CREATE INDEX IF NOT EXISTS idx_image_url ON integrity_image_cache(image_url);

-- ── integrity_version_history ──────────────────────────────
CREATE TABLE IF NOT EXISTS integrity_version_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL,
  property_id text,
  version_number integer DEFAULT 1,
  images jsonb NOT NULL,
  cover_image text,
  change_reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE integrity_version_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_version_history" ON integrity_version_history;
CREATE POLICY "select_admin_version_history" ON integrity_version_history
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_version_history" ON integrity_version_history;
CREATE POLICY "insert_admin_version_history" ON integrity_version_history
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_version_product ON integrity_version_history(product_id, version_number DESC);

-- ── integrity_scan_queue (pending scan tasks from triggers) ─
CREATE TABLE IF NOT EXISTS integrity_scan_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL,
  property_id text,
  trigger_reason text NOT NULL DEFAULT 'product_updated',
  status text DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  processed_at timestamptz
);

ALTER TABLE integrity_scan_queue ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_scan_queue" ON integrity_scan_queue;
CREATE POLICY "select_admin_scan_queue" ON integrity_scan_queue
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_scan_queue" ON integrity_scan_queue;
CREATE POLICY "insert_admin_scan_queue" ON integrity_scan_queue
  FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "update_admin_scan_queue" ON integrity_scan_queue;
CREATE POLICY "update_admin_scan_queue" ON integrity_scan_queue
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "delete_admin_scan_queue" ON integrity_scan_queue;
CREATE POLICY "delete_admin_scan_queue" ON integrity_scan_queue
  FOR DELETE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_scan_queue_status ON integrity_scan_queue(status, created_at);

-- ── Trigger: queue scan on product insert/update ───────────
CREATE OR REPLACE FUNCTION public.queue_integrity_scan()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO integrity_scan_queue (product_id, property_id, trigger_reason)
  VALUES (NEW.id, NEW.property_id, TG_OP);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_queue_scan_on_insert ON showroom_listings;
CREATE TRIGGER trigger_queue_scan_on_insert
  AFTER INSERT ON showroom_listings
  FOR EACH ROW
  EXECUTE FUNCTION public.queue_integrity_scan();

DROP TRIGGER IF EXISTS trigger_queue_scan_on_update ON showroom_listings;
CREATE TRIGGER trigger_queue_scan_on_update
  AFTER UPDATE ON showroom_listings
  FOR EACH ROW
  WHEN (OLD.images IS DISTINCT FROM NEW.images OR OLD.title IS DISTINCT FROM NEW.title OR OLD.description IS DISTINCT FROM NEW.description OR OLD.category IS DISTINCT FROM NEW.category)
  EXECUTE FUNCTION public.queue_integrity_scan();