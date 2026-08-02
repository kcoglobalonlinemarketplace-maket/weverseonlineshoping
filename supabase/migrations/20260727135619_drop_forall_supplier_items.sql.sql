/*
# Security Fix: Drop redundant FOR ALL policy on supplier_catalogue_items

## Summary
The `admin_write_supplier_items` policy used `FOR ALL` which is flagged by security audits.
The table already has proper per-verb policies (SELECT, INSERT, UPDATE, DELETE), making this redundant.

## Changes
- Drop `admin_write_supplier_items` FOR ALL policy
- Existing per-verb policies remain unchanged and cover all CRUD operations

## Security impact
- Eliminates the last remaining FOR ALL policy in the database
- No functionality change — per-verb policies provide identical access control
*/

DROP POLICY IF EXISTS "admin_write_supplier_items" ON public.supplier_catalogue_items;
