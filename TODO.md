# TODO: Grant AI Assistant Permissions & Fix Edit/Save/Price Update/Publish

## Goal
Grant the AI assistant full CRUD permissions and fix the broken Edit, Save,
Price Update, and Publish functions so they work on localhost and the live site.

## Diagnosis
The admin write operations in `src/admin-page.js` write to `showroom_listings`
via the RLS-enforced standard client. RLS write policies require
`is_current_user_admin()` to return true. But `checkAdminAccess()` lets the
owner email into the dashboard even when `profiles.is_admin`/`admin_roles` is
missing, so the UI loads but DB writes are silently rejected by RLS.

## Steps
- [x] 1. Create SQL migration to grant admin role to owner account and ensure
       showroom_listings + site_settings admin write RLS policies exist.
       (supabase/migrations/20260806003000_grant_admin_and_showroom_write_rls.sql)
- [x] 2. Harden `checkAdminAccess()` in `src/admin-page.js` to rely on
       `is_current_user_admin()` instead of the email fallback.
- [x] 3. Harden `saveProduct`, `saveQuickEditProduct`, `saveProperty`,
       `toggleProductActive`, `deleteProduct`, and bulk actions to surface
       RLS/permission errors instead of silently falling back to local storage.
- [x] 4. Verify JS syntax with `node --check` on changed files.
- [x] 5. Report remaining permissions requiring user approval.

## Phase 2 — Product Management System (in progress)
- [x] View toggle (Cards / Table) in the Products toolbar.
- [x] Editable table view with click-to-edit row → opens the full product editor.
- [x] Replace-image capability on image thumbnails (replace an existing image).
- [ ] Apply migration via Supabase SQL editor / dashboard (requires user action).
