/*
# Create customer_payment_methods table

1. New Tables
- `customer_payment_methods`
  - `id` (uuid, primary key)
  - `user_id` (uuid, not null, defaults to the authenticated user, references auth.users)
  - `method_type` (text, not null) — e.g. 'bank_transfer', 'atm_card', 'mobile_money', 'paypal', 'wallet', 'manual_transfer'
  - `label` (text, not null) — user-friendly nickname, e.g. "My GTBank Account"
  - `account_holder` (text) — account holder name
  - `provider` (text) — bank name, card brand, wallet provider, etc.
  - `identifier` (text) — masked account number, phone, or email (last 4 digits / masked)
  - `details` (jsonb) — additional non-sensitive metadata (e.g. currency, branch)
  - `is_default` (boolean, default false) — whether this is the default payment method
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

2. Security
- Enable RLS on `customer_payment_methods`.
- Owner-scoped CRUD: each authenticated user can only access rows they own.
- `user_id` defaults to `auth.uid()` so inserts that omit it still satisfy the INSERT policy.

3. Important Notes
- Only masked/truncated identifiers are stored — never full card numbers or bank account numbers.
- One default per user enforced at the application layer (existing default cleared on save).
- Index on `user_id` for fast per-user lookups.
*/

CREATE TABLE IF NOT EXISTS customer_payment_methods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  method_type text NOT NULL,
  label text NOT NULL,
  account_holder text,
  provider text,
  identifier text,
  details jsonb DEFAULT '{}'::jsonb,
  is_default boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_customer_payment_methods_user_id ON customer_payment_methods(user_id);

ALTER TABLE customer_payment_methods ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_payment_methods" ON customer_payment_methods;
CREATE POLICY "select_own_payment_methods" ON customer_payment_methods FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_payment_methods" ON customer_payment_methods;
CREATE POLICY "insert_own_payment_methods" ON customer_payment_methods FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_payment_methods" ON customer_payment_methods;
CREATE POLICY "update_own_payment_methods" ON customer_payment_methods FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_payment_methods" ON customer_payment_methods;
CREATE POLICY "delete_own_payment_methods" ON customer_payment_methods FOR DELETE
  TO authenticated USING (auth.uid() = user_id);
