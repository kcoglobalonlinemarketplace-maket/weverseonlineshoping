-- Hero Video Banner: multi-slide rotating video hero for the homepage.
--
-- Adds a jsonb column on the singleton site_settings row where the owner's
-- promotional hero slides live. Each slide is an object like:
--   {
--     "id": "hv_1631", "enabled": true,
--     "video": "https://.../promo.mp4",
--     "poster": "https://.../poster.jpg",
--     "title": "Season Sale",
--     "subtitle": "Up to 50% off",
--     "buttonText": "SHOP NOW",
--     "buttonLink": "/#showroom-directory"
--   }
-- Order in the array = display order (reorderable in the admin).
-- Safe to re-run. No destructive changes.

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS hero_video_slides jsonb NOT NULL DEFAULT '[]';
