/*
# Fix Admin Authentication — Add has_any_admin() RPC

## Purpose
The admin dashboard's `init()` function needs to check whether ANY admin
exists in the `profiles` table (is_admin = true). However, RLS on `profiles`
only allows reading your own row, so a non-admin user querying for admin
count always gets 0 — which incorrectly triggers the "Become Admin"
bootstrap prompt even when an admin already exists.

This migration adds a SECURITY DEFINER function `has_any_admin()` that
bypasses RLS to count admin profiles. It also exposes
`is_current_user_admin()` (already created in a prior migration) for
robust admin role checks from the client.

## New Functions
- `public.has_any_admin()` — returns true if any profile has is_admin = true.
  SECURITY DEFINER so it bypasses RLS. Safe to expose: returns only a
  boolean, not any user data.

## Security
- The function is read-only and returns only a boolean.
- It does not expose any user-identifiable information.
- `is_current_user_admin()` (already present) is also SECURITY DEFINER
  and returns only a boolean for the calling user.
*/

CREATE OR REPLACE FUNCTION public.has_any_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles WHERE is_admin = true
  );
$$;

-- Grant access to authenticated and anon roles
GRANT EXECUTE ON FUNCTION public.has_any_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_any_admin() TO anon;

-- Ensure is_current_user_admin is also callable
GRANT EXECUTE ON FUNCTION public.is_current_user_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_current_user_admin() TO anon;