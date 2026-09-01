/*
# Call Ringtone — settings column + storage bucket

## Purpose
Lets the admin upload a custom ringtone audio on the Dashboard so the call
button rings with real sound. The uploaded file's public URL is stored in
`site_settings.ringtone_audio` and played by the caller's browser.

## Changes
1. Add `ringtone_audio` (and alias `ringtone_url`) columns to `site_settings`
   if they are not already present.
2. Create a public `ringtones` storage bucket (public read, authenticated write)
   so admins can upload the audio file.
3. Storage policies: anyone can read; authenticated/owner can upload.
*/

-- ── 1) site_settings columns ──────────────────────────────────────
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'ringtone_audio'
  ) THEN
    ALTER TABLE public.site_settings ADD COLUMN ringtone_audio text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'ringtone_url'
  ) THEN
    ALTER TABLE public.site_settings ADD COLUMN ringtone_url text;
  END IF;
END $$;

-- ── 2) Ringtones storage bucket (public read, authenticated write) ─
INSERT INTO storage.buckets (id, name, public)
VALUES ('ringtones', 'ringtones', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "ringtone_public_read" ON storage.objects;
CREATE POLICY "ringtone_public_read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'ringtones');

DROP POLICY IF EXISTS "ringtone_auth_insert" ON storage.objects;
CREATE POLICY "ringtone_auth_insert"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'ringtones');

DROP POLICY IF EXISTS "ringtone_auth_update" ON storage.objects;
CREATE POLICY "ringtone_auth_update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'ringtones');

DROP POLICY IF EXISTS "ringtone_auth_delete" ON storage.objects;
CREATE POLICY "ringtone_auth_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'ringtones');
