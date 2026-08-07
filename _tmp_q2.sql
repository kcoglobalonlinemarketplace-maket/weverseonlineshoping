SELECT schemaname, tablename, policyname, cmd, roles
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('showroom_listings', 'site_settings')
ORDER BY tablename, cmd;

SELECT proname, pg_get_function_identity_arguments(oid) AS args
FROM pg_proc
WHERE proname IN ('is_current_user_admin', 'is_user_admin', 'has_any_admin');

