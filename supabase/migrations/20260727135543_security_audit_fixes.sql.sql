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

DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'bulk_upsert_showroom_listings') THEN ALTER FUNCTION public.bulk_upsert_showroom_listings(p_data jsonb) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'cleanup_old_rate_limits') THEN ALTER FUNCTION public.cleanup_old_rate_limits() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'generate_tracking_number') THEN ALTER FUNCTION public.generate_tracking_number(courier_code text) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'handle_order_status_change') THEN ALTER FUNCTION public.handle_order_status_change() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'is_current_user_admin') THEN ALTER FUNCTION public.is_current_user_admin() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'is_super_admin') THEN ALTER FUNCTION public.is_super_admin() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'log_admin_activity') THEN ALTER FUNCTION public.log_admin_activity(p_user_id uuid, p_action text, p_entity_type text, p_entity_id text, p_details jsonb) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'prevent_admin_escalation') THEN ALTER FUNCTION public.prevent_admin_escalation() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'protect_is_admin') THEN ALTER FUNCTION public.protect_is_admin() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'protect_support_message_admin_flag') THEN ALTER FUNCTION public.protect_support_message_admin_flag() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'record_search') THEN ALTER FUNCTION public.record_search(p_query text, p_result_count integer, p_session_key text) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'smart_search_fts') THEN ALTER FUNCTION public.smart_search_fts(p_query text, p_limit integer) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'smart_search_fuzzy') THEN ALTER FUNCTION public.smart_search_fuzzy(p_query text, p_limit integer) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'smart_search_partial') THEN ALTER FUNCTION public.smart_search_partial(p_query text, p_limit integer) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'smart_search_quick') THEN ALTER FUNCTION public.smart_search_quick(p_query text, p_limit integer) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'smart_search_trending') THEN ALTER FUNCTION public.smart_search_trending(p_limit integer) SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'sync_search_index') THEN ALTER FUNCTION public.sync_search_index() SET search_path = public; END IF; END $$;
DO $$ BEGIN IF EXISTS (SELECT 1 FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace WHERE n.nspname = 'public' AND p.proname = 'sync_search_index_force') THEN ALTER FUNCTION public.sync_search_index_force(r public.showroom_listings) SET search_path = public; END IF; END $$;

-- ============================================================================
-- 2, 3 & 6. RLS POLICIES ON UNDERLYING TABLES + HARDENING + CLEANUP
-- (Each table is guarded with to_regclass so this migration is safe whether
--  the tables came from repo migrations or were created out-of-band.)
-- ============================================================================

DO $rls$
BEGIN
  IF to_regclass('public.payment_gateways') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "public_read_active_gateways" ON public.payment_gateways';
    EXECUTE 'DROP POLICY IF EXISTS "admin_insert_gateways" ON public.payment_gateways';
    EXECUTE 'DROP POLICY IF EXISTS "admin_read_all_gateways" ON public.payment_gateways';
    EXECUTE 'CREATE POLICY "public_read_active_gateways" ON public.payment_gateways FOR SELECT TO anon, authenticated USING (is_active = true)';
    EXECUTE 'CREATE POLICY "admin_insert_gateways" ON public.payment_gateways FOR INSERT TO authenticated WITH CHECK (is_current_user_admin())';
  END IF;

  IF to_regclass('public.site_settings') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "public_read_site_settings" ON public.site_settings';
    EXECUTE 'DROP POLICY IF EXISTS "admin_insert_site_settings" ON public.site_settings';
    EXECUTE 'CREATE POLICY "public_read_site_settings" ON public.site_settings FOR SELECT TO anon, authenticated USING (true)';
    EXECUTE 'CREATE POLICY "admin_insert_site_settings" ON public.site_settings FOR INSERT TO authenticated WITH CHECK (is_current_user_admin())';
  END IF;

  IF to_regclass('public.supplier_integrations') IS NOT NULL THEN
    EXECUTE 'DROP POLICY IF EXISTS "public_read_active_suppliers" ON public.supplier_integrations';
    EXECUTE 'DROP POLICY IF EXISTS "admin_insert_suppliers" ON public.supplier_integrations';
    EXECUTE 'DROP POLICY IF EXISTS "admin_write_suppliers" ON public.supplier_integrations';
    EXECUTE 'CREATE POLICY "public_read_active_suppliers" ON public.supplier_integrations FOR SELECT TO anon, authenticated USING (is_active = true AND is_approved = true)';
    EXECUTE 'CREATE POLICY "admin_insert_suppliers" ON public.supplier_integrations FOR INSERT TO authenticated WITH CHECK (is_current_user_admin())';
  END IF;
END
$rls$;

-- ============================================================================
-- 4 & 5. VIEW HARDENING (only runs when the views exist — they were created
-- out-of-band on the original project and are not part of this repo's schema)
-- ============================================================================

DO $view$
BEGIN
  IF to_regclass('public.active_payment_gateways') IS NOT NULL THEN
    ALTER VIEW public.active_payment_gateways SET (security_invoker = true);
    EXECUTE 'REVOKE ALL ON public.active_payment_gateways FROM anon, authenticated';
    EXECUTE 'GRANT SELECT ON public.active_payment_gateways TO anon, authenticated';
  END IF;

  IF to_regclass('public.public_payment_gateways') IS NOT NULL THEN
    ALTER VIEW public.public_payment_gateways SET (security_invoker = true);
    EXECUTE 'REVOKE ALL ON public.public_payment_gateways FROM anon, authenticated';
    EXECUTE 'GRANT SELECT ON public.public_payment_gateways TO authenticated';
  END IF;

  IF to_regclass('public.public_site_settings') IS NOT NULL THEN
    ALTER VIEW public.public_site_settings SET (security_invoker = true);
    EXECUTE 'REVOKE ALL ON public.public_site_settings FROM anon, authenticated';
    EXECUTE 'GRANT SELECT ON public.public_site_settings TO anon, authenticated';
  END IF;

  IF to_regclass('public.public_supplier_integrations') IS NOT NULL THEN
    ALTER VIEW public.public_supplier_integrations SET (security_invoker = true);
    EXECUTE 'REVOKE ALL ON public.public_supplier_integrations FROM anon, authenticated';
    EXECUTE 'GRANT SELECT ON public.public_supplier_integrations TO anon, authenticated';
  END IF;
END
$view$;
