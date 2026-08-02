/*
# Security Audit Fixes — Critical/High Severity Resolution

## Summary
Resolves all Critical and High severity security issues identified by the Supabase security audit:
1. Function Search Path Mutable — 18 SECURITY DEFINER functions had no fixed search_path (search_path injection risk).
2. Security Definer View — 4 views owned by postgres (bypasses RLS) with broad arwdDxtm grants to anon/authenticated.
3. Over-permissive grants — views granted ALL (arwdDxtm) instead of SELECT (r) to anon/authenticated.
4. FOR ALL policy — supplier_integrations had a FOR ALL policy instead of per-verb policies.
5. Missing public SELECT RLS policies on underlying tables — needed after switching views to security_invoker.

## Changes

### Functions (search_path hardening)
All 18 SECURITY DEFINER functions in the public schema get `SET search_path = public` to prevent search_path injection attacks.

### Views (security_invoker + least-privilege grants)
- `active_payment_gateways` → security_invoker=true, SELECT-only to anon/authenticated
- `public_payment_gateways` → security_invoker=true, SELECT-only to authenticated (exposes config/webhook_url, NOT for anon)
- `public_site_settings` → security_invoker=true, SELECT-only to anon/authenticated
- `public_supplier_integrations` → security_invoker=true, SELECT-only to anon/authenticated

### Underlying table RLS policies (new public SELECT)
- `payment_gateways` → anon/authenticated can SELECT active rows only
- `site_settings` → anon/authenticated can SELECT all rows (public config)
- `supplier_integrations` → anon/authenticated can SELECT active+approved rows only

### Policy cleanup
- Drop `admin_write_suppliers` FOR ALL policy (replaced by existing per-verb policies)
- Drop redundant `admin_read_all_gateways` (duplicate of `admin_read_gateways`)

### Insert policy hardening
- Add WITH CHECK clauses to INSERT policies that were missing them on payment_gateways, site_settings, supplier_integrations

## Security impact
- Eliminates search_path injection on all SECURITY DEFINER functions
- Views now respect RLS on underlying tables (security_invoker=true)
- Anon/authenticated can only SELECT through views (no write-through)
- public_payment_gateways sensitive columns (config, webhook_url, callback_url) no longer accessible to anon
- All existing functionality preserved (frontend reads through views, admin writes through RLS policies)
*/

-- ============================================================================
-- 1. FIX FUNCTION SEARCH PATH MUTABLE (18 SECURITY DEFINER functions)
-- ============================================================================

ALTER FUNCTION public.bulk_upsert_showroom_listings(p_data jsonb) SET search_path = public;
ALTER FUNCTION public.cleanup_old_rate_limits() SET search_path = public;
ALTER FUNCTION public.generate_tracking_number(courier_code text) SET search_path = public;
ALTER FUNCTION public.handle_order_status_change() SET search_path = public;
ALTER FUNCTION public.is_current_user_admin() SET search_path = public;
ALTER FUNCTION public.is_super_admin() SET search_path = public;
ALTER FUNCTION public.log_admin_activity(p_user_id uuid, p_action text, p_entity_type text, p_entity_id text, p_details jsonb) SET search_path = public;
ALTER FUNCTION public.prevent_admin_escalation() SET search_path = public;
ALTER FUNCTION public.protect_is_admin() SET search_path = public;
ALTER FUNCTION public.protect_support_message_admin_flag() SET search_path = public;
ALTER FUNCTION public.record_search(p_query text, p_result_count integer, p_session_key text) SET search_path = public;
ALTER FUNCTION public.smart_search_fts(p_query text, p_limit integer) SET search_path = public;
ALTER FUNCTION public.smart_search_fuzzy(p_query text, p_limit integer) SET search_path = public;
ALTER FUNCTION public.smart_search_partial(p_query text, p_limit integer) SET search_path = public;
ALTER FUNCTION public.smart_search_quick(p_query text, p_limit integer) SET search_path = public;
ALTER FUNCTION public.smart_search_trending(p_limit integer) SET search_path = public;
ALTER FUNCTION public.sync_search_index() SET search_path = public;
ALTER FUNCTION public.sync_search_index_force(r public.showroom_listings) SET search_path = public;

-- ============================================================================
-- 2. ADD PUBLIC SELECT RLS POLICIES ON UNDERLYING TABLES
-- (Required before switching views to security_invoker so anon can still read)
-- ============================================================================

-- payment_gateways: public can read active gateways only
DROP POLICY IF EXISTS "public_read_active_gateways" ON public.payment_gateways;
CREATE POLICY "public_read_active_gateways"
  ON public.payment_gateways FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- site_settings: public can read all settings (non-sensitive config only)
DROP POLICY IF EXISTS "public_read_site_settings" ON public.site_settings;
CREATE POLICY "public_read_site_settings"
  ON public.site_settings FOR SELECT
  TO anon, authenticated
  USING (true);

-- supplier_integrations: public can read active+approved suppliers only
DROP POLICY IF EXISTS "public_read_active_suppliers" ON public.supplier_integrations;
CREATE POLICY "public_read_active_suppliers"
  ON public.supplier_integrations FOR SELECT
  TO anon, authenticated
  USING (is_active = true AND is_approved = true);

-- ============================================================================
-- 3. HARDEN INSERT POLICIES WITH WITH CHECK CLAUSES
-- ============================================================================

-- payment_gateways: admin insert must verify admin status in WITH CHECK
DROP POLICY IF EXISTS "admin_insert_gateways" ON public.payment_gateways;
CREATE POLICY "admin_insert_gateways"
  ON public.payment_gateways FOR INSERT
  TO authenticated
  WITH CHECK (is_current_user_admin());

-- site_settings: admin insert must verify admin status in WITH CHECK
DROP POLICY IF EXISTS "admin_insert_site_settings" ON public.site_settings;
CREATE POLICY "admin_insert_site_settings"
  ON public.site_settings FOR INSERT
  TO authenticated
  WITH CHECK (is_current_user_admin());

-- supplier_integrations: admin insert must verify admin status in WITH CHECK
DROP POLICY IF EXISTS "admin_insert_suppliers" ON public.supplier_integrations;
CREATE POLICY "admin_insert_suppliers"
  ON public.supplier_integrations FOR INSERT
  TO authenticated
  WITH CHECK (is_current_user_admin());

-- ============================================================================
-- 4. SET security_invoker = true ON ALL VIEWS
-- (Makes views respect RLS on underlying tables instead of bypassing it)
-- ============================================================================

ALTER VIEW public.active_payment_gateways SET (security_invoker = true);
ALTER VIEW public.public_payment_gateways SET (security_invoker = true);
ALTER VIEW public.public_site_settings SET (security_invoker = true);
ALTER VIEW public.public_supplier_integrations SET (security_invoker = true);

-- ============================================================================
-- 5. REVOKE OVER-PERMISSIVE GRANTS AND APPLY LEAST PRIVILEGE ON VIEWS
-- ============================================================================

-- active_payment_gateways: SELECT only for anon + authenticated
REVOKE ALL ON public.active_payment_gateways FROM anon, authenticated;
GRANT SELECT ON public.active_payment_gateways TO anon, authenticated;

-- public_payment_gateways: exposes sensitive config — authenticated only, SELECT only
REVOKE ALL ON public.public_payment_gateways FROM anon, authenticated;
GRANT SELECT ON public.public_payment_gateways TO authenticated;

-- public_site_settings: SELECT only for anon + authenticated
REVOKE ALL ON public.public_site_settings FROM anon, authenticated;
GRANT SELECT ON public.public_site_settings TO anon, authenticated;

-- public_supplier_integrations: SELECT only for anon + authenticated
REVOKE ALL ON public.public_supplier_integrations FROM anon, authenticated;
GRANT SELECT ON public.public_supplier_integrations TO anon, authenticated;

-- ============================================================================
-- 6. DROP INSECURE FOR ALL POLICY AND REDUNDANT POLICIES
-- ============================================================================

-- Drop FOR ALL policy on supplier_integrations (existing per-verb policies cover CRUD)
DROP POLICY IF EXISTS "admin_write_suppliers" ON public.supplier_integrations;

-- Drop redundant duplicate SELECT policy on payment_gateways
DROP POLICY IF EXISTS "admin_read_all_gateways" ON public.payment_gateways;
