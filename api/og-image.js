// api/og-image.js — Vercel serverless function.
//
// Generates a big, properly-sized Open Graph image (1200x630) for a shared
// showroom product using the product's REAL main photo.
//
// Why: Facebook renders shared-link previews as a fixed 1.91:1 landscape card
// (1200x630). The actual product photos are portrait (e.g. 736x981), so handing
// Facebook the raw photo makes it center-crop and look small/attractive-less.
// This endpoint composites the real product main photo, fitted LARGE and UNCROPPED,
// onto a 1200x630 canvas whose background is a darkened, blurred version of the
// same product photo — clearly the product, never a website banner or a fake.
//
// Usage: /api/og-image?id=<property_id|uuid>

import sharp from 'sharp';
import { resolveFromDb } from './lib/listing-lookup.mjs';

const W = 1200;
const H = 630;
// Foreground box the product is fitted into (uncropped, centered) — leaves a
// comfortable margin so the product reads large but never touches the edges.
const FG_W = 1010;
const FG_H = 520;

function withTimeoutMs(promise, ms) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve('__timeout__'), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      () => { clearTimeout(timer); resolve('__timeout__'); },
    );
  });
}

function absUrl(src, origin) {
  if (!src) return '';
  if (/^(https?:|data:)/i.test(src)) return src;
  return origin + src;
}

async function fetchImageBytes(url, timeout = 12000) {
  const result = await withTimeoutMs(
    (async () => {
      const r = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'weverseonlineshop-og/1.0' } });
      if (!r.ok) throw new Error('image HTTP ' + r.status);
      const buf = Buffer.from(await r.arrayBuffer());
      if (!buf || buf.length === 0) throw new Error('empty image');
      return buf;
    })(),
    timeout,
  );
  return result === '__timeout__' ? null : result;
}

export default async function handler(req, res) {
  try {
    const rawId = req.query?.id || new URL(req.url || '', 'https://x').searchParams.get('id') || '';
    const id = String(Array.isArray(rawId) ? rawId[0] : rawId).trim();
    if (!id) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('missing id');
      return;
    }

    const listing = await resolveFromDb(id);
    const rawImage = listing?.images?.[0];
    if (!listing || !rawImage) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('not found');
      return;
    }
    const origin = 'https://' + (req.headers?.host || 'weverseonlineshop.com');
    const imgUrl = absUrl(rawImage, origin);

    const src = await fetchImageBytes(imgUrl);
    if (!src) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('image fetch failed');
      return;
    }

    let meta;
    try { meta = await sharp(src).metadata(); } catch { meta = null; }
    if (!meta || !meta.width || !meta.height) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('unreadable image');
      return;
    }

    // Background: the same product photo, blurred + darkened to Cover the full
    // 1200x630 card. Keeps the preview fully product-focused (no banner).
    const bgBuff = await sharp(src)
      .resize(W, H, { fit: 'cover' })
      .blur(38)
      .modulate({ brightness: 0.62, saturation: 1.12 })
      .jpeg({ quality: 70 })
      .toBuffer();

    // Foreground: the real product image fitted (contain — neither cropped nor
    // distorted) into the centered box, as large as that box allows.
    const fg = sharp(src).resize(FG_W, FG_H, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } });

    const out = await sharp(bgBuff)
      .composite([{ input: await fg.png().toBuffer(), gravity: 'center' }])
      .jpeg({ quality: 84, mozjpeg: true })
      .toBuffer();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.end(out);
  } catch (err) {
    console.error('[og-image] error:', err && err.stack ? err.stack : err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('image generation failed');
  }
}
