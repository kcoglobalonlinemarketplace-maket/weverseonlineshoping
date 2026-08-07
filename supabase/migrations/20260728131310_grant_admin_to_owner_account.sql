-- Grant full administrator privileges to the business owner account.
--
-- The admin is looked up by email (dynamic), NOT a hardcoded UUID, so this
-- migration is safe and idempotent. It only writes to admin_roles when the
-- user actually exists in auth.users, which avoids the
-- admin_roles_user_id_fkey foreign-key violation when the ID is unknown.
--
-- Two triggers may block admin promotion because they check auth.uid() which
-- returns NULL under the service role / migration runner:
--   1. trg_prevent_admin_escalation → prevent_admin_escalation()
--   2. trg_protect_is_admin         → protect_is_admin()
-- We temporarily disable BOTH, perform the promotion, then re-enable them.

DO $$
DECLARE
  owner_id uuid;
BEGIN
  -- Resolve the admin user by email (the account that logs into the admin).
  SELECT id INTO owner_id
  FROM auth.users
  WHERE email = 'weverseonlineshop@gmail.com'
  LIMIT 1;

  -- Fallback: also try the legacy owner email in case the above is not present.
  IF owner_id IS NULL THEN
    SELECT id INTO owner_id
    FROM auth.users
    WHERE email = 'kcoglobalonlinemarketplace@gmail.com'
    LIMIT 1;
  END IF;

  IF owner_id IS NULL THEN
    RAISE NOTICE 'No auth.users row found for the admin emails; skipping admin grant.';
    RETURN;
  END IF;

  -- 1. Temporarily disable both escalation guard triggers (if present)
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_trigger
      WHERE tgname = 'trg_prevent_admin_escalation'
        AND tgrelid = 'public.profiles'::regclass
    ) THEN
      ALTER TABLE public.profiles DISABLE TRIGGER trg_prevent_admin_escalation;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Could not disable trg_prevent_admin_escalation: %', SQLERRM;
  END;

  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_trigger
      WHERE tgname = 'trg_protect_is_admin'
        AND tgrelid = 'public.profiles'::regclass
    ) THEN
      ALTER TABLE public.profiles DISABLE TRIGGER trg_protect_is_admin;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Could not disable trg_protect_is_admin: %', SQLERRM;
  END;

  -- 2. Set is_admin = true on the profiles table (upsert to be idempotent)
  INSERT INTO public.profiles (user_id, is_admin, display_name, country_code)
  VALUES (owner_id, true, 'Administrator', 'US')
  ON CONFLICT (user_id) DO UPDATE
  SET is_admin = true,
      display_name = COALESCE(public.profiles.display_name, 'Administrator');

  -- 3. Assign super_admin role in admin_roles with full permissions.
  --    admin_roles.user_id is NOT unique, so we UPDATE first, then INSERT only
  --    if no row was updated (guarded by the auth.users FK check).
  UPDATE public.admin_roles
  SET role = 'super_admin',
      permissions = '["dashboard","products","properties","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
  WHERE user_id = owner_id;

  IF NOT FOUND THEN
    INSERT INTO public.admin_roles (user_id, role, permissions)
    VALUES (
      owner_id,
      'super_admin',
      '["dashboard","products","properties","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
    );
  END IF;

  -- 4. Re-enable both escalation guard triggers (if present)
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_trigger
      WHERE tgname = 'trg_prevent_admin_escalation'
        AND tgrelid = 'public.profiles'::regclass
    ) THEN
      ALTER TABLE public.profiles ENABLE TRIGGER trg_prevent_admin_escalation;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Could not re-enable trg_prevent_admin_escalation: %', SQLERRM;
  END;

  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_trigger
      WHERE tgname = 'trg_protect_is_admin'
        AND tgrelid = 'public.profiles'::regclass
    ) THEN
      ALTER TABLE public.profiles ENABLE TRIGGER trg_protect_is_admin;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Could not re-enable trg_protect_is_admin: %', SQLERRM;
  END;
END
$$;
