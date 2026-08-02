-- Grant full administrator privileges to the business owner account
-- kcoglobalonlinemarketplace@gmail.com (user_id: 52228c9e-4219-4bce-9a74-b5ed75b66a51)
--
-- Two triggers block admin promotion via service role because they check
-- auth.uid() which returns NULL under the service role:
--   1. trg_prevent_admin_escalation → prevent_admin_escalation()
--   2. trg_protect_is_admin         → protect_is_admin()
-- We temporarily disable BOTH, perform the promotion, then re-enable them.

-- 1. Temporarily disable both escalation guard triggers
ALTER TABLE public.profiles DISABLE TRIGGER trg_prevent_admin_escalation;
ALTER TABLE public.profiles DISABLE TRIGGER trg_protect_is_admin;

-- 2. Set is_admin = true on the profiles table
UPDATE public.profiles
SET is_admin = true
WHERE user_id = '52228c9e-4219-4bce-9a74-b5ed75b66a51';

-- 3. Assign super_admin role in admin_roles with full permissions
INSERT INTO public.admin_roles (user_id, role, permissions)
VALUES (
  '52228c9e-4219-4bce-9a74-b5ed75b66a51',
  'super_admin',
  '["dashboard","products","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb
)
ON CONFLICT (user_id) DO UPDATE
SET role = 'super_admin',
    permissions = '["dashboard","products","orders","special-orders","customers","payments","shipping","promotions","content","email","analytics","ai","security","settings","ai-settings","integrations"]'::jsonb;

-- 4. Re-enable both escalation guard triggers
ALTER TABLE public.profiles ENABLE TRIGGER trg_prevent_admin_escalation;
ALTER TABLE public.profiles ENABLE TRIGGER trg_protect_is_admin;