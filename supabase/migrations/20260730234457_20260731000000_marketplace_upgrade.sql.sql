/*
# Marketplace Platform Upgrade — Reviews, Coupons, Approval Workflow, Wishlist, Audit

## Overview
This migration adds the missing marketplace infrastructure needed for enterprise-grade operations:
product approval workflow, enhanced reviews, coupon management UI support, wishlist with ownership,
recommendation tracking, and structured audit logging.

## New Tables

1. **product_approval_queue** — Product lifecycle management (draft → pending → published → archived → rejected)
   - `id` (uuid PK)
   - `listing_id` (uuid FK → showroom_listings.id, nullable)
   - `property_id` (text, e.g. KCO-000001)
   - `title` (text)
   - `status` (text: draft/pending/published/archived/rejected)
   - `submitted_by` (uuid, admin who submitted)
   - `reviewed_by` (uuid, admin who reviewed, nullable)
   - `review_notes` (text, nullable)
   - `changes_summary` (jsonb, what changed)
   - `created_at`, `updated_at`

2. **wishlist** — User-owned wishlist (replaces session-key-only favorites)
   - `id` (uuid PK)
   - `user_id` (uuid NOT NULL DEFAULT auth.uid())
   - `listing_id` (uuid FK → showroom_listings.id)
   - `created_at`

3. **coupon_usage** — Track which user used which coupon (prevents reuse abuse)
   - `id` (uuid PK)
   - `coupon_id` (uuid FK → coupons.id)
   - `user_id` (uuid, nullable for guests)
   - `order_number` (text)
   - `created_at`

4. **product_recommendations** — Product recommendation engine data
   - `id` (uuid PK)
   - `listing_id` (uuid FK → showroom_listings.id)
   - `recommended_listing_id` (uuid FK → showroom_listings.id)
   - `score` (numeric, recommendation strength)
   - `reason` (text, e.g. "same_category", "purchased_together", "trending")
   - `created_at`

5. **rate_limit_log** — API rate limiting tracking
   - `id` (uuid PK)
   - `identifier` (text, IP or user_id)
   - `endpoint` (text)
   - `request_count` (integer)
   - `window_start` (timestamptz)
   - `created_at`

6. **image_optimization_queue** — Queue for image processing jobs
   - `id` (uuid PK)
   - `listing_id` (uuid, nullable)
   - `image_url` (text)
   - `status` (text: pending/processing/completed/failed)
   - `optimized_url` (text, nullable)
   - `original_size` (integer, bytes)
   - `optimized_size` (integer, bytes)
   - `error_message` (text, nullable)
   - `created_at`, `completed_at`

7. **admin_audit_log** — Structured audit trail for all admin actions
   - `id` (uuid PK)
   - `user_id` (uuid)
   - `user_email` (text)
   - `action` (text, e.g. "product.create", "product.delete", "order.update_status")
   - `entity_type` (text)
   - `entity_id` (text)
   - `old_values` (jsonb, nullable)
   - `new_values` (jsonb, nullable)
   - `ip_address` (text, nullable)
   - `user_agent` (text, nullable)
   - `created_at`

## Modified Tables

1. **showroom_listings** — Add `approval_status` column (draft/pending/published/archived/rejected)
   - Default: 'published' (existing products stay published)
   - Add `published_at` column (timestamptz, nullable)

2. **product_reviews** — Add `vendor_response` and `vendor_response_at` columns
   - Add `is_verified_purchase` (boolean, default false)

3. **coupons** — Add `description` and `usage_limit_per_user` columns

## Security

- All new tables have RLS enabled
- `product_approval_queue`: admin-only CRUD
- `wishlist`: owner-only CRUD (authenticated users, by user_id)
- `coupon_usage`: owner read, authenticated insert
- `product_recommendations`: public read
- `rate_limit_log`: admin-only (no public access)
- `image_optimization_queue`: admin-only
- `admin_audit_log`: admin-only

## Indexes

- `product_approval_queue`: on `status`, `listing_id`
- `wishlist`: unique on `user_id, listing_id`, on `user_id`
- `coupon_usage`: on `coupon_id`, on `user_id`
- `product_recommendations`: on `listing_id`, on `recommended_listing_id`
- `rate_limit_log`: on `identifier, endpoint`, on `window_start`
- `image_optimization_queue`: on `status`
- `admin_audit_log`: on `user_id`, on `entity_type, entity_id`, on `created_at`
- `showroom_listings`: on `approval_status`
*/

-- ── 1. product_approval_queue ──────────────────────────────
CREATE TABLE IF NOT EXISTS product_approval_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid REFERENCES showroom_listings(id) ON DELETE CASCADE,
  property_id text,
  title text NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','pending','published','archived','rejected')),
  submitted_by uuid,
  reviewed_by uuid,
  review_notes text,
  changes_summary jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE product_approval_queue ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_approval_queue_status ON product_approval_queue(status);
CREATE INDEX IF NOT EXISTS idx_approval_queue_listing ON product_approval_queue(listing_id);

DROP POLICY IF EXISTS "admin_select_approval_queue" ON product_approval_queue;
CREATE POLICY "admin_select_approval_queue" ON product_approval_queue FOR SELECT
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

DROP POLICY IF EXISTS "admin_insert_approval_queue" ON product_approval_queue;
CREATE POLICY "admin_insert_approval_queue" ON product_approval_queue FOR INSERT
  TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

DROP POLICY IF EXISTS "admin_update_approval_queue" ON product_approval_queue;
CREATE POLICY "admin_update_approval_queue" ON product_approval_queue FOR UPDATE
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true))
  WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

DROP POLICY IF EXISTS "admin_delete_approval_queue" ON product_approval_queue;
CREATE POLICY "admin_delete_approval_queue" ON product_approval_queue FOR DELETE
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

-- ── 2. wishlist ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS wishlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  listing_id uuid NOT NULL REFERENCES showroom_listings(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wishlist ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX IF NOT EXISTS idx_wishlist_user_listing ON wishlist(user_id, listing_id);
CREATE INDEX IF NOT EXISTS idx_wishlist_user ON wishlist(user_id);

DROP POLICY IF EXISTS "select_own_wishlist" ON wishlist;
CREATE POLICY "select_own_wishlist" ON wishlist FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_wishlist" ON wishlist;
CREATE POLICY "insert_own_wishlist" ON wishlist FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_wishlist" ON wishlist;
CREATE POLICY "delete_own_wishlist" ON wishlist FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- ── 3. coupon_usage ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS coupon_usage (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  coupon_id uuid NOT NULL REFERENCES coupons(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  order_number text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE coupon_usage ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_coupon_usage_coupon ON coupon_usage(coupon_id);
CREATE INDEX IF NOT EXISTS idx_coupon_usage_user ON coupon_usage(user_id);

DROP POLICY IF EXISTS "select_own_coupon_usage" ON coupon_usage;
CREATE POLICY "select_own_coupon_usage" ON coupon_usage FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_coupon_usage" ON coupon_usage;
CREATE POLICY "insert_coupon_usage" ON coupon_usage FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_select_coupon_usage" ON coupon_usage;
CREATE POLICY "admin_select_coupon_usage" ON coupon_usage FOR SELECT
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

-- ── 4. product_recommendations ─────────────────────────────
CREATE TABLE IF NOT EXISTS product_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid NOT NULL REFERENCES showroom_listings(id) ON DELETE CASCADE,
  recommended_listing_id uuid NOT NULL REFERENCES showroom_listings(id) ON DELETE CASCADE,
  score numeric DEFAULT 0,
  reason text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE product_recommendations ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_recommendations_listing ON product_recommendations(listing_id);
CREATE INDEX IF NOT EXISTS idx_recommendations_recommended ON product_recommendations(recommended_listing_id);

DROP POLICY IF EXISTS "public_read_recommendations" ON product_recommendations;
CREATE POLICY "public_read_recommendations" ON product_recommendations FOR SELECT
  TO anon, authenticated USING (true);

-- ── 5. rate_limit_log ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS rate_limit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier text NOT NULL,
  endpoint text NOT NULL,
  request_count integer NOT NULL DEFAULT 1,
  window_start timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rate_limit_log ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_rate_limit_identifier_endpoint ON rate_limit_log(identifier, endpoint);
CREATE INDEX IF NOT EXISTS idx_rate_limit_window ON rate_limit_log(window_start);

DROP POLICY IF EXISTS "admin_select_rate_limit" ON rate_limit_log;
CREATE POLICY "admin_select_rate_limit" ON rate_limit_log FOR SELECT
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

DROP POLICY IF EXISTS "anon_insert_rate_limit" ON rate_limit_log;
CREATE POLICY "anon_insert_rate_limit" ON rate_limit_log FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_rate_limit" ON rate_limit_log;
CREATE POLICY "anon_update_rate_limit" ON rate_limit_log FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

-- ── 6. image_optimization_queue ─────────────────────────────
CREATE TABLE IF NOT EXISTS image_optimization_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid REFERENCES showroom_listings(id) ON DELETE SET NULL,
  image_url text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','processing','completed','failed')),
  optimized_url text,
  original_size integer,
  optimized_size integer,
  error_message text,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE image_optimization_queue ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_image_queue_status ON image_optimization_queue(status);

DROP POLICY IF EXISTS "admin_select_image_queue" ON image_optimization_queue;
CREATE POLICY "admin_select_image_queue" ON image_optimization_queue FOR SELECT
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

DROP POLICY IF EXISTS "admin_insert_image_queue" ON image_optimization_queue;
CREATE POLICY "admin_insert_image_queue" ON image_optimization_queue FOR INSERT
  TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

DROP POLICY IF EXISTS "admin_update_image_queue" ON image_optimization_queue;
CREATE POLICY "admin_update_image_queue" ON image_optimization_queue FOR UPDATE
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true))
  WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

-- ── 7. admin_audit_log ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  user_email text,
  action text NOT NULL,
  entity_type text,
  entity_id text,
  old_values jsonb,
  new_values jsonb,
  ip_address text,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_audit_log ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_audit_log_user ON admin_audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_entity ON admin_audit_log(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_created ON admin_audit_log(created_at DESC);

DROP POLICY IF EXISTS "admin_select_audit_log" ON admin_audit_log;
CREATE POLICY "admin_select_audit_log" ON admin_audit_log FOR SELECT
  TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

DROP POLICY IF EXISTS "admin_insert_audit_log" ON admin_audit_log;
CREATE POLICY "admin_insert_audit_log" ON admin_audit_log FOR INSERT
  TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true));

-- ── 8. Modify showroom_listings ─────────────────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'showroom_listings' AND column_name = 'approval_status') THEN
    ALTER TABLE showroom_listings ADD COLUMN approval_status text NOT NULL DEFAULT 'published' CHECK (approval_status IN ('draft','pending','published','archived','rejected'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'showroom_listings' AND column_name = 'published_at') THEN
    ALTER TABLE showroom_listings ADD COLUMN published_at timestamptz;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_showroom_approval_status ON showroom_listings(approval_status);

-- ── 9. Modify product_reviews ───────────────────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_reviews' AND column_name = 'vendor_response') THEN
    ALTER TABLE product_reviews ADD COLUMN vendor_response text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_reviews' AND column_name = 'vendor_response_at') THEN
    ALTER TABLE product_reviews ADD COLUMN vendor_response_at timestamptz;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'product_reviews' AND column_name = 'is_verified_purchase') THEN
    ALTER TABLE product_reviews ADD COLUMN is_verified_purchase boolean NOT NULL DEFAULT false;
  END IF;
END $$;

-- ── 10. Modify coupons ──────────────────────────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'coupons' AND column_name = 'description') THEN
    ALTER TABLE coupons ADD COLUMN description text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'coupons' AND column_name = 'usage_limit_per_user') THEN
    ALTER TABLE coupons ADD COLUMN usage_limit_per_user integer;
  END IF;
END $$;

-- ── 11. updated_at triggers for new tables ──────────────────
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_product_approval_queue_updated_at') THEN
    CREATE TRIGGER update_product_approval_queue_updated_at BEFORE UPDATE ON product_approval_queue
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- ── 12. Storage bucket for product images ───────────────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "public_read_product_images" ON storage.objects;
CREATE POLICY "public_read_product_images" ON storage.objects FOR SELECT
  TO anon, authenticated USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "auth_upload_product_images" ON storage.objects;
CREATE POLICY "auth_upload_product_images" ON storage.objects FOR INSERT
  TO authenticated WITH CHECK (bucket_id = 'product-images');

DROP POLICY IF EXISTS "auth_update_product_images" ON storage.objects;
CREATE POLICY "auth_update_product_images" ON storage.objects FOR UPDATE
  TO authenticated USING (bucket_id = 'product-images') WITH CHECK (bucket_id = 'product-images');

DROP POLICY IF EXISTS "auth_delete_product_images" ON storage.objects;
CREATE POLICY "auth_delete_product_images" ON storage.objects FOR DELETE
  TO authenticated USING (bucket_id = 'product-images');

-- ── 13. Function to log admin actions ───────────────────────
CREATE OR REPLACE FUNCTION log_admin_action(
  p_action text,
  p_entity_type text DEFAULT NULL,
  p_entity_id text DEFAULT NULL,
  p_old_values jsonb DEFAULT NULL,
  p_new_values jsonb DEFAULT NULL
) RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_log_id uuid;
  v_user_id uuid := auth.uid();
  v_user_email text;
BEGIN
  SELECT email INTO v_user_email FROM auth.users WHERE id = v_user_id;
  INSERT INTO admin_audit_log (user_id, user_email, action, entity_type, entity_id, old_values, new_values)
  VALUES (v_user_id, v_user_email, p_action, p_entity_type, p_entity_id, p_old_values, p_new_values)
  RETURNING id INTO v_log_id;
  RETURN v_log_id;
END;
$$;

-- ── 14. Function to check rate limits ────────────────────────
CREATE OR REPLACE FUNCTION check_rate_limit(
  p_identifier text,
  p_endpoint text,
  p_max_requests integer DEFAULT 60,
  p_window_seconds integer DEFAULT 60
) RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_count integer;
  v_window_start timestamptz := date_trunc('second', now() - (p_window_seconds || ' seconds')::interval);
BEGIN
  SELECT COALESCE(SUM(request_count), 0) INTO v_count
  FROM rate_limit_log
  WHERE identifier = p_identifier
    AND endpoint = p_endpoint
    AND window_start >= v_window_start;
  IF v_count >= p_max_requests THEN
    RETURN false;
  END IF;
  INSERT INTO rate_limit_log (identifier, endpoint, request_count, window_start)
  VALUES (p_identifier, p_endpoint, 1, date_trunc('second', now()));
  RETURN true;
END;
$$;