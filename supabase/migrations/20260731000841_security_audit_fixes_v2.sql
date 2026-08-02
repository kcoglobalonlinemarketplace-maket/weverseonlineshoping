/*
# Security Audit Fixes v2 — RLS Policy Hardening

## Summary
Fixes critical RLS policy issues found during production audit:
1. `ai_rate_limits` — RLS enabled but NO policies (locked, needs admin access)
2. `custom_domains` — all CRUD uses `USING (true)` for any authenticated user (should be admin-only)
3. `deployment_history` — any authenticated user can read/insert/update (should be admin-only)
4. `shipments` — anon role can read ALL shipments (should be restricted to own shipments or admin)

## Security Changes
- ai_rate_limits: admin-only SELECT/INSERT/UPDATE
- custom_domains: admin-only CRUD (uses is_current_user_admin())
- deployment_history: admin-only SELECT/INSERT/UPDATE
- shipments: remove anon-wide-open SELECT, keep owner-scoped + admin

## Important Notes
1. Uses existing `is_current_user_admin()` SECURITY DEFINER function
2. All policies are idempotent (DROP IF EXISTS before CREATE)
3. No data is modified — only policy definitions change
*/

-- ── ai_rate_limits: admin-only access ────────────────────────
DROP POLICY IF EXISTS "admin_select_ai_rate_limits" ON ai_rate_limits;
CREATE POLICY "admin_select_ai_rate_limits"
  ON ai_rate_limits FOR SELECT TO authenticated
  USING (is_current_user_admin());

DROP POLICY IF EXISTS "admin_insert_ai_rate_limits" ON ai_rate_limits;
CREATE POLICY "admin_insert_ai_rate_limits"
  ON ai_rate_limits FOR INSERT TO authenticated
  WITH CHECK (is_current_user_admin());

DROP POLICY IF EXISTS "admin_update_ai_rate_limits" ON ai_rate_limits;
CREATE POLICY "admin_update_ai_rate_limits"
  ON ai_rate_limits FOR UPDATE TO authenticated
  USING (is_current_user_admin()) WITH CHECK (is_current_user_admin());

-- ── custom_domains: admin-only CRUD ──────────────────────────
DROP POLICY IF EXISTS "select_domains_admin" ON custom_domains;
CREATE POLICY "select_domains_admin"
  ON custom_domains FOR SELECT TO authenticated
  USING (is_current_user_admin());

DROP POLICY IF EXISTS "insert_domains_admin" ON custom_domains;
CREATE POLICY "insert_domains_admin"
  ON custom_domains FOR INSERT TO authenticated
  WITH CHECK (is_current_user_admin());

DROP POLICY IF EXISTS "update_domains_admin" ON custom_domains;
CREATE POLICY "update_domains_admin"
  ON custom_domains FOR UPDATE TO authenticated
  USING (is_current_user_admin()) WITH CHECK (is_current_user_admin());

DROP POLICY IF EXISTS "delete_domains_admin" ON custom_domains;
CREATE POLICY "delete_domains_admin"
  ON custom_domains FOR DELETE TO authenticated
  USING (is_current_user_admin());

-- ── deployment_history: admin-only CRUD ──────────────────────
DROP POLICY IF EXISTS "select_deployment_history" ON deployment_history;
CREATE POLICY "select_deployment_history"
  ON deployment_history FOR SELECT TO authenticated
  USING (is_current_user_admin());

DROP POLICY IF EXISTS "insert_deployment_history" ON deployment_history;
CREATE POLICY "insert_deployment_history"
  ON deployment_history FOR INSERT TO authenticated
  WITH CHECK (is_current_user_admin());

DROP POLICY IF EXISTS "update_deployment_history" ON deployment_history;
CREATE POLICY "update_deployment_history"
  ON deployment_history FOR UPDATE TO authenticated
  USING (is_current_user_admin()) WITH CHECK (is_current_user_admin());

-- ── shipments: remove anon-wide-open, keep owner + admin ─────
DROP POLICY IF EXISTS "anon_read_shipments_by_order" ON shipments;

DROP POLICY IF EXISTS "select_own_shipments" ON shipments;
CREATE POLICY "select_own_shipments"
  ON shipments FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR is_current_user_admin()
    OR EXISTS (
      SELECT 1 FROM payment_receipts pr
      WHERE pr.order_number = shipments.order_number
      AND pr.user_id = auth.uid()
    )
  );