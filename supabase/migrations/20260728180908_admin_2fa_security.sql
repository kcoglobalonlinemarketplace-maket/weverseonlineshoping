/*
# Admin Two-Factor Authentication (2FA) Table

## Purpose
Stores encrypted TOTP secrets and backup recovery codes for admin accounts.
This protects ONLY the Admin Dashboard with authenticator app verification.
Customer and regular user accounts are NOT affected.

## New Tables

### admin_2fa
- `user_id` (uuid, primary key, references auth.users) — the admin user
- `secret_encrypted` (text) — AES-GCM encrypted TOTP secret (base32-encoded secret encrypted with a server-side key)
- `secret_iv` (text) — initialization vector for AES-GCM decryption
- `backup_codes` (jsonb) — array of SHA-256 hashed backup recovery codes (stored as hashes, never plaintext)
- `enabled` (boolean, default false) — whether 2FA is active for this admin
- `failed_attempts` (integer, default 0) — count of consecutive failed verification attempts
- `locked_until` (timestamptz, nullable) — if set, 2FA verification is locked until this time
- `last_used_code` (text, nullable) — the last successfully used TOTP code (prevents replay attacks)
- `last_used_backup_code` (text, nullable) — the last successfully used backup code index (prevents replay)
- `created_at` (timestamptz) — when 2FA was first set up
- `updated_at` (timestamptz) — last modification time

## Security
- RLS enabled on admin_2fa.
- Only the authenticated owner can SELECT, INSERT, UPDATE, or DELETE their own row.
- The edge function uses the service role key to bypass RLS for server-side verification.
- TOTP secrets are encrypted at rest using AES-GCM.
- Backup codes are stored as SHA-256 hashes, never in plaintext.

## Important Notes
1. This table is ONLY for admin accounts. Customer accounts are not affected.
2. The edge function (admin-2fa) handles all cryptographic operations.
3. Lockout occurs after 5 failed attempts, locking for 15 minutes.
4. All failed login attempts are logged to admin_security_logs.
*/

CREATE TABLE IF NOT EXISTS admin_2fa (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  secret_encrypted text,
  secret_iv text,
  backup_codes jsonb DEFAULT '[]'::jsonb,
  enabled boolean NOT NULL DEFAULT false,
  failed_attempts integer NOT NULL DEFAULT 0,
  locked_until timestamptz,
  last_used_code text,
  last_used_backup_code text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE admin_2fa ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_2fa" ON admin_2fa;
CREATE POLICY "select_own_2fa" ON admin_2fa FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_2fa" ON admin_2fa;
CREATE POLICY "insert_own_2fa" ON admin_2fa FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_2fa" ON admin_2fa;
CREATE POLICY "update_own_2fa" ON admin_2fa FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_2fa" ON admin_2fa;
CREATE POLICY "delete_own_2fa" ON admin_2fa FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- Index for quick lookups
CREATE INDEX IF NOT EXISTS idx_admin_2fa_user_id ON admin_2fa(user_id);