/*
# Create is_user_admin RPC

## Purpose
A SECURITY DEFINER function that checks if a specific user ID is an admin.
Used by the admin-2fa edge function (which uses the service role key and
therefore cannot use auth.uid() based functions like is_current_user_admin).

## New Functions
- `is_user_admin(p_user_id uuid)` returns boolean — checks profiles.is_admin
  or admin_roles table for the given user ID.

## Security
- SECURITY DEFINER so it can be called by the service role.
- STABLE read-only function.
- Mirrors the logic of is_current_user_admin but accepts an explicit user_id.
*/

CREATE OR REPLACE FUNCTION public.is_user_admin(p_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
SELECT COALESCE(
  (SELECT is_admin FROM public.profiles WHERE user_id = p_user_id),
  false
) OR EXISTS (
  SELECT 1 FROM public.admin_roles WHERE user_id = p_user_id
);
$function$;