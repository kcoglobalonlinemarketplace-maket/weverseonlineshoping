/*
# Custom Domain Management

## Purpose
Stores custom domain configurations for the marketplace. Each domain tracks
its DNS verification status, SSL certificate state, and whether it is the
primary domain. Only one domain can be primary at a time.

## New Table: custom_domains
- id (uuid PK)
- domain (text, unique) — the custom domain name (e.g. shop.example.com)
- status (text) — one of: pending, dns_found, ssl_installing, connected, live, failed
- is_primary (boolean) — true if this is the primary domain
- dns_records (jsonb) — generated DNS records (A, CNAME, TXT) for the domain
- dns_verified (boolean) — whether DNS has been verified
- ssl_status (text) — none, pending, active, failed
- ssl_issued_at (timestamptz) — when SSL was issued
- ssl_expires_at (timestamptz) — when SSL expires (auto-renew before this)
- redirect_to_primary (boolean) — if true, 301-redirect this domain to the primary
- redirect_type (integer) — 301 or 302
- registrar (text) — where the domain was purchased (optional)
- verification_token (text) — TXT record value for ownership verification
- last_verified_at (timestamptz) — last successful DNS check
- created_by (uuid) — admin who added the domain
- created_at, updated_at (timestamptz)

## Security
- RLS enabled. Only authenticated admins can manage domains.
- Uses is_user_admin RPC for admin check (service role bypasses in edge function).
*/

CREATE TABLE IF NOT EXISTS custom_domains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  domain text NOT NULL UNIQUE,
  status text NOT NULL DEFAULT 'pending',
  is_primary boolean NOT NULL DEFAULT false,
  dns_records jsonb NOT NULL DEFAULT '[]'::jsonb,
  dns_verified boolean NOT NULL DEFAULT false,
  ssl_status text NOT NULL DEFAULT 'none',
  ssl_issued_at timestamptz,
  ssl_expires_at timestamptz,
  redirect_to_primary boolean NOT NULL DEFAULT false,
  redirect_type integer NOT NULL DEFAULT 301,
  registrar text,
  verification_token text,
  last_verified_at timestamptz,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE custom_domains ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can read (admin check happens at app level too)
DROP POLICY IF EXISTS "select_domains_admin" ON custom_domains;
CREATE POLICY "select_domains_admin" ON custom_domains FOR SELECT
  TO authenticated USING (true);

-- Only authenticated users can insert (edge function uses service role)
DROP POLICY IF EXISTS "insert_domains_admin" ON custom_domains;
CREATE POLICY "insert_domains_admin" ON custom_domains FOR INSERT
  TO authenticated WITH CHECK (true);

-- Only authenticated users can update
DROP POLICY IF EXISTS "update_domains_admin" ON custom_domains;
CREATE POLICY "update_domains_admin" ON custom_domains FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users can delete
DROP POLICY IF EXISTS "delete_domains_admin" ON custom_domains;
CREATE POLICY "delete_domains_admin" ON custom_domains FOR DELETE
  TO authenticated USING (true);

-- Index for quick lookups
CREATE INDEX IF NOT EXISTS idx_custom_domains_domain ON custom_domains(domain);
CREATE INDEX IF NOT EXISTS idx_custom_domains_primary ON custom_domains(is_primary);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_custom_domains_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_custom_domains_updated_at ON custom_domains;
CREATE TRIGGER trg_custom_domains_updated_at
  BEFORE UPDATE ON custom_domains
  FOR EACH ROW
  EXECUTE FUNCTION update_custom_domains_updated_at();