/*
# Payment Receipts — Manual Bank Transfer Verification

## Purpose
Stores payment receipts submitted by customers who complete manual bank transfers.
Orders remain "Pending Verification" until an administrator approves or rejects them.

## New Tables

### `payment_receipts`
- `id` (uuid, primary key)
- `order_number` (text, unique) — KCO-generated order number
- `listing_id` (text) — the property_id of the purchased item
- `listing_title` (text) — snapshot of the item title at purchase time
- `amount` (numeric) — amount paid
- `currency` (text) — currency code (USD, GBP, EUR, etc.)
- `full_name` (text)
- `email` (text)
- `phone` (text)
- `payment_date` (date)
- `transaction_reference` (text)
- `receipt_file_path` (text) — path to uploaded receipt in Supabase Storage
- `receipt_file_name` (text) — original file name
- `additional_notes` (text, nullable)
- `status` (text, default 'pending_verification') — one of: pending_verification, approved, rejected, receipt_requested
- `user_id` (uuid, nullable, references auth.users) — the buyer if signed in
- `created_at` (timestamptz, default now())
- `updated_at` (timestamptz, default now())

## Security
- RLS enabled on payment_receipts.
- Authenticated users can INSERT (submit receipt) and SELECT their own receipts.
- No public anon access — receipts require sign-in.
*/

CREATE TABLE IF NOT EXISTS payment_receipts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  listing_id text NOT NULL,
  listing_title text NOT NULL DEFAULT '',
  amount numeric NOT NULL DEFAULT 0,
  currency text NOT NULL DEFAULT 'USD',
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  payment_date date NOT NULL DEFAULT CURRENT_DATE,
  transaction_reference text NOT NULL DEFAULT '',
  receipt_file_path text NOT NULL DEFAULT '',
  receipt_file_name text NOT NULL DEFAULT '',
  additional_notes text,
  status text NOT NULL DEFAULT 'pending_verification' CHECK (status IN ('pending_verification','approved','rejected','receipt_requested')),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE payment_receipts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "insert_own_receipt" ON payment_receipts;
CREATE POLICY "insert_own_receipt"
ON payment_receipts FOR INSERT
TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "select_own_receipts" ON payment_receipts;
CREATE POLICY "select_own_receipts"
ON payment_receipts FOR SELECT
TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_receipts" ON payment_receipts;
CREATE POLICY "update_own_receipts"
ON payment_receipts FOR UPDATE
TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_payment_receipts_user ON payment_receipts(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_receipts_order ON payment_receipts(order_number);
CREATE INDEX IF NOT EXISTS idx_payment_receipts_status ON payment_receipts(status);

-- Storage bucket for receipt uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('payment-receipts', 'payment-receipts', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies: authenticated users can upload their own receipts
DROP POLICY IF EXISTS "auth_upload_receipts" ON storage.objects;
CREATE POLICY "auth_upload_receipts"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'payment-receipts' AND auth.uid() = (storage.foldername(name))[1]::uuid);

DROP POLICY IF EXISTS "auth_read_own_receipts" ON storage.objects;
CREATE POLICY "auth_read_own_receipts"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'payment-receipts' AND auth.uid() = (storage.foldername(name))[1]::uuid);