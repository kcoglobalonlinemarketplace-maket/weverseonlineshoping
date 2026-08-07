SELECT schemaname, tablename, policyname, cmd, roles, permissive
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('showroom_listings', 'site_settings')
ORDER BY tablename, cmd;

