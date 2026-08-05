-- Grant full administrator privileges to the active admin login
-- so dashboard writes to admin-only tables can pass RLS.

DO $$
DECLARE
  admin_user_id uuid;
BEGIN
  SELECT id
  INTO admin_user_id
  FROM auth.users
  WHERE email = 'weverseonlineshop@gmail.com'
  LIMIT 1;

  IF admin_user_id IS NULL THEN
    RAISE NOTICE 'No auth.users row found for weverseonlineshop@gmail.com; skipping admin grant.';
    RETURN;
  END IF;

  INSERT INTO public.profiles (user_id, is_admin, display_name, country_code)
  VALUES (admin_user_id, true, 'Administrator', 'US')
  ON CONFLICT (user_id) DO UPDATE
  SET is_admin = true,
      display_name = COALESCE(public.profiles.display_name, 'Administrator');

  UPDATE public.admin_roles
  SET role = 'super_admin',
      permissions = '["dashboard","products","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
  WHERE user_id = admin_user_id;

  IF NOT FOUND THEN
    INSERT INTO public.admin_roles (user_id, role, permissions)
    VALUES (
      admin_user_id,
      'super_admin',
      '["dashboard","products","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
    );
  END IF;
END
$$;