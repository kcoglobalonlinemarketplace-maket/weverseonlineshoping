/*
# Avatars Storage Bucket

## Purpose
Creates a public storage bucket for customer profile pictures (avatars).
Customers can upload and manage their own avatar in the dashboard.

## Changes
1. Create `avatars` bucket (public read, authenticated write).
2. Storage policies:
   - SELECT (read): public — anyone can view avatars.
   - INSERT: authenticated users can upload to their own folder (`user_id/`).
   - UPDATE: authenticated users can update their own folder.
   - DELETE: authenticated users can delete from their own folder.
*/

INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- SELECT: public read
DROP POLICY IF EXISTS "avatar_public_read" ON storage.objects;
CREATE POLICY "avatar_public_read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'avatars');

-- INSERT: owner can upload to their folder
DROP POLICY IF EXISTS "avatar_owner_insert" ON storage.objects;
CREATE POLICY "avatar_owner_insert"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- UPDATE: owner can update their folder
DROP POLICY IF EXISTS "avatar_owner_update" ON storage.objects;
CREATE POLICY "avatar_owner_update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- DELETE: owner can delete from their folder
DROP POLICY IF EXISTS "avatar_owner_delete" ON storage.objects;
CREATE POLICY "avatar_owner_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'avatars'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );