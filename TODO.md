# Task: Fix Edit, Save, Price Update, and Publish (admin permissions)

## Root Cause
`supabase db push` is blocked by migration `20260728131310_grant_admin_to_owner_account.sql`
which inserts into `admin_roles` using a hardcoded UUID for a user that does not exist in
`auth.users`, violating the NOT NULL FK `admin_roles_user_id_fkey`. This blocks all subsequent
migrations — including `20260806003000_grant_admin_and_showroom_write_rls.sql` which is the
actual fix that grants `profiles.is_admin=true` and creates the admin-write RLS policies on
`showroom_listings` and `site_settings`.

## Steps
- [x] 1. Fix `20260728131310_grant_admin_to_owner_account.sql` to look up admin by email and guard the FK (idempotent).
- [x] 2. Push all pending migrations to the linked Supabase project (`wttnvwpoqmbxryivcerf`).
- [ ] 3. Verify `is_current_user_admin()` returns true for the admin account.
- [ ] 4. Test the Product Manager — ensure it loads all showroom products from Supabase.
- [ ] 5. Fix any errors automatically before finishing.
