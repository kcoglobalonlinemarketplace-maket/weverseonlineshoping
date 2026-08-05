-- Grant full administrator privileges to the business owner account
-- kcoglobalonlinemarketplace@gmail.com (user_id: 52228c9e-4219-4bce-9a74-b5ed75b66a51)
--
-- Two triggers block admin promotion via service role because they check
-- auth.uid() which returns NULL under the service role:
--   1. trg_prevent_admin_escalation → prevent_admin_escalation()
--   2. trg_protect_is_admin         → protect_is_admin()
-- We temporarily disable BOTH, perform the promotion, then re-enable them.

-- 1. Temporarily disable both escalation guard triggers (if present)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'trg_prevent_admin_escalation'
      AND tgrelid = 'public.profiles'::regclass
  ) THEN
    ALTER TABLE public.profiles DISABLE TRIGGER trg_prevent_admin_escalation;
  END IF;

  IF EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'trg_protect_is_admin'
      AND tgrelid = 'public.profiles'::regclass
  ) THEN
    ALTER TABLE public.profiles DISABLE TRIGGER trg_protect_is_admin;
  END IF;
END
$$;

-- 2. Set is_admin = true on the profiles table
UPDATE public.profiles
SET is_admin = true
WHERE user_id = '52228c9e-4219-4bce-9a74-b5ed75b66a51';

-- 3. Assign super_admin role in admin_roles with full permissions
UPDATE public.admin_roles
SET role = 'super_admin',
    permissions = '["dashboard","products","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
WHERE user_id = '52228c9e-4219-4bce-9a74-b5ed75b66a51';

INSERT INTO public.admin_roles (user_id, role, permissions)
SELECT
  '52228c9e-4219-4bce-9a74-b5ed75b66a51',
  'super_admin',
  '["dashboard","products","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
WHERE NOT EXISTS (
  SELECT 1
  FROM public.admin_roles
  WHERE user_id = '52228c9e-4219-4bce-9a74-b5ed75b66a51'
)
AND EXISTS (
  SELECT 1
  FROM auth.users
  WHERE id = '52228c9e-4219-4bce-9a74-b5ed75b66a51'
);

-- 4. Re-enable both escalation guard triggers (if present)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'trg_prevent_admin_escalation'
      AND tgrelid = 'public.profiles'::regclass
  ) THEN
    ALTER TABLE public.profiles ENABLE TRIGGER trg_prevent_admin_escalation;
  END IF;

  IF EXISTS (
    SELECT 1
    FROM pg_trigger
    WHERE tgname = 'trg_protect_is_admin'
      AND tgrelid = 'public.profiles'::regclass
  ) THEN
    ALTER TABLE public.profiles ENABLE TRIGGER trg_protect_is_admin;
  END IF;
END
$$;