/*
# Add video columns to showroom_listings

## Purpose
The advertisement system needs to support video advertisements. Listings that
have an uploaded video should use it directly in the ad carousel. Listings with
only images will get an auto-cycling image slideshow instead.

## Changes
1. Add `video` column (text) — stores a single video URL (mp4 or hosted URL).
2. Add `video_url` column (text) — alternate column name for compatibility.

## Security
- No RLS policy changes needed — existing policies already cover SELECT on
  showroom_listings for all users (public marketplace).
*/

ALTER TABLE public.showroom_listings
  ADD COLUMN IF NOT EXISTS video text,
  ADD COLUMN IF NOT EXISTS video_url text;
