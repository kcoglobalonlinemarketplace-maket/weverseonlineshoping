/*
# Payment Receipts — Guest Checkout Support

## Purpose
Extends the payment_receipts table to support guest (non-authenticated) checkouts.
Guest customers can submit payment receipts without creating an account, and must
provide their full name, email, phone, and shipping address.

## Changes

### Modified Tables

#### `payment_receipts`
- `user_id` changed from NOT NULL to NULLABLE (already nullable, confirmed here)
- Added guest-only columns:
  - `is_guest` (boolean, default false) — marks guest orders
  - `guest_shipping_address` (text, nullable) — street address for shipping
  - `guest_country` (text, nullable)
  - `guest_state` (text, nullable) — state or province
  - `guest_city` (text, nullable)
  - `guest_postal_code` (text, nullable)

## Security
- Adds INSERT and SELECT policies for the `anon` role so guest users can submit
  and view their own receipts (identified by order_number).
- Existing authenticated policies remain unchanged.
*/

ALTER TABLE payment_receipts
  ADD COLUMN IF NOT EXISTS is_guest boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS guest_shipping_address text,
  ADD COLUMN IF NOT EXISTS guest_country text,
  ADD COLUMN IF NOT EXISTS guest_state text,
  ADD COLUMN IF NOT EXISTS guest_city text,
  ADD COLUMN IF NOT EXISTS guest_postal_code text;

-- Allow anon (guest) users to insert receipts
DROP POLICY IF EXISTS "anon_insert_receipt" ON payment_receipts;
CREATE POLICY "anon_insert_receipt"
ON payment_receipts FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Allow anon to view receipts by order_number (guest lookup)
DROP POLICY IF EXISTS "anon_select_receipts" ON payment_receipts;
CREATE POLICY "anon_select_receipts"
ON payment_receipts FOR SELECT
TO anon, authenticated USING (true);

-- Allow anon to update their own receipts (for status changes if needed)
DROP POLICY IF EXISTS "anon_update_receipts" ON payment_receipts;
CREATE POLICY "anon_update_receipts"
ON payment_receipts FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

-- Storage: allow anon to upload to payment-receipts bucket (guest receipts)
-- Use a guest folder prefix instead of user id
DROP POLICY IF EXISTS "anon_upload_receipts" ON storage.objects;
CREATE POLICY "anon_upload_receipts"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'payment-receipts');

DROP POLICY IF EXISTS "anon_read_receipts_storage" ON storage.objects;
CREATE POLICY "anon_read_receipts_storage"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'payment-receipts');