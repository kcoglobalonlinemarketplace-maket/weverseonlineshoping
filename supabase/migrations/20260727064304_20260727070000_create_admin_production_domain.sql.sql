/*
# Create First Administrator Account (Production Domain)

## Purpose
Creates the first super administrator account for Weverse Online Shop
using the official production domain kcoglobalonlinemarket.com.

## New Data
- auth.users row: admin@kcoglobalonlinemarket.com
- profiles row: is_admin = true for the admin user
- admin_roles row: role = 'super_admin' with full permissions

## Security Changes
- Re-confirms the is_admin protection trigger is in place
- Only the service role can grant/revoke admin status

## Important Notes
1. Temporary password: "KCO-Admin-2026!Secure" — admin must change after first login
2. Email confirmation is disabled for immediate access
3. Only existing admins can create additional admin accounts
*/

DO $$
DECLARE
  admin_id uuid;
  admin_email text := 'admin@kcoglobalonlinemarket.com';
  admin_password text := 'KCO-Admin-2026!Secure';
BEGIN
  SELECT id INTO admin_id FROM auth.users WHERE email = admin_email;

  IF admin_id IS NULL THEN
    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data
    ) VALUES (
      '00000000-0000-0000-0000-000000000000',
      gen_random_uuid(),
      'authenticated',
      'authenticated',
      admin_email,
      extensions.crypt(admin_password, extensions.gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}'::jsonb,
      '{"display_name":"Weverse Administrator"}'::jsonb
    )
    RETURNING id INTO admin_id;
  END IF;

  INSERT INTO public.profiles (user_id, is_admin, display_name, country_code)
  VALUES (admin_id, true, 'Weverse Administrator', 'US')
  ON CONFLICT (user_id) DO UPDATE
  SET is_admin = true,
      display_name = 'Weverse Administrator';

  INSERT INTO public.admin_roles (user_id, role, permissions)
  VALUES (
    admin_id,
    'super_admin',
    '["dashboard","products","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
  )
  ON CONFLICT DO NOTHING;
END $$;

-- Re-confirm the is_admin protection trigger
CREATE OR REPLACE FUNCTION public.protect_is_admin()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF current_setting('role', true) = 'authenticated' OR current_setting('role', true) = 'anon' THEN
    IF NEW.is_admin = true AND (OLD IS NULL OR OLD.is_admin = false) THEN
      RAISE EXCEPTION 'Permission denied: you cannot grant yourself admin privileges.';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_is_admin ON public.profiles;
CREATE TRIGGER trg_protect_is_admin
  BEFORE INSERT OR UPDATE OF is_admin ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_is_admin();

-- Update is_current_user_admin to check both profiles and admin_roles
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM public.profiles WHERE user_id = auth.uid()),
    false
  ) OR EXISTS (
    SELECT 1 FROM public.admin_roles WHERE user_id = auth.uid()
  );
$$;
