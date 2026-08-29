// api/og.js — Vercel serverless function (Node.js).
// Serves the details page with per-product Open Graph tags injected so social
// platforms (WhatsApp, Facebook, X, TikTok, Telegram, iMessage…) always show
// the EXACT showroom product image, name, price and URL in the link preview.
//
// Routing: vercel.json uses the legacy `routes` array with `handle: "filesystem"`
// so /details.html, /details, /product and /product/:id hit this function
// BEFORE the static file is served (rewrites cannot intercept existing files).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findListingById } from '../src/showroom-data.js';
import { getTruckById } from '../src/truck-data.js';
import { getMotorhomeById } from '../src/motorhome-data.js';
import { getCarById } from '../src/car-data.js';
import { getPhoneById } from '../src/phone-data.js';
import { PRODUCT_LISTINGS } from '../src/products-data.js';
import { PRODUCT_EXTRA_LISTINGS } from '../src/products-extra.js';
import { generateListingById } from '../src/catalog.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_NAME = 'Weverse Online Shop';
const FALLBACK_IMG = '/fallback.svg';

let cachedHtml = null;

function findHtmlPath() {
  const candidates = [
    path.join(process.cwd(), 'dist', 'details.html'),
    path.join(__dirname, 'details-static.html'),
    path.join(__dirname, '..', 'dist', 'details.html'),
    path.join(__dirname, '..', '..', 'dist', 'details.html'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) return p;
    } catch {}
  }
  return null;
}

function readDetailsHtml() {
  if (cachedHtml) return cachedHtml;
  const p = findHtmlPath();
  if (!p) return null;
  cachedHtml = fs.readFileSync(p, 'utf8');
  return cachedHtml;
}

function absUrl(src, origin) {
  if (!src) return '';
  if (/^(https?:|data:)/i.test(src)) return src;
  return origin + src;
}

function formatSharePrice(listing) {
  const raw = listing?.price;
  const n = Number(raw && typeof raw === 'object' ? raw.price : raw) || 0;
  const cur = listing?.currency || 'USD';
  let s;
  try {
    s = n.toLocaleString('en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 });
  } catch {
    s = '$' + n.toLocaleString('en-US');
  }
  if (listing?.price_period) s += '/' + listing.price_period;
  return s;
}

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function resolveListingSync(id) {
  return (
    getTruckById(id) ||
    getMotorhomeById(id) ||
    getCarById(id) ||
    getPhoneById(id) ||
    PRODUCT_LISTINGS.find((l) => l.property_id === id) ||
    PRODUCT_EXTRA_LISTINGS.find((l) => l.property_id === id) ||
    findListingById(id) ||
    generateListingById(id)
  );
}

async function withTimeoutMs(promise, ms) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve('__timeout__'), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      () => { clearTimeout(timer); resolve('__timeout__'); },
    );
  });
}

// Direct, targeted lookup of a single DB listing (created in the admin).
//
// Previously this went through the browser-side full-table loader
// (loadDBListings() -> findListingById()), which fetches the ENTIRE
// showroom_listings table (~440 rows) and raced a hard timeout. On a cold
// serverless start that full-table fetch routinely exceeded the cap, so the
// crawler got the generic fallback preview (brand-logo + "Property Details")
// instead of the real product. A targeted single-row query by property_id is
// ~0.9s and always wins, so Facebook/WhatsApp reliably show the real product.
// Shared with the /api/og-image generator (fast, persistSession:false).
async function resolveFromDb(id) {
  const result = await withTimeoutMs(
    import('./lib/listing-lookup.mjs').then((m) => m.resolveFromDb(id)),
    4000,
  );
  return result === '__timeout__' ? null : result;
}

function stripMetaTag(html, attr, key) {
  const re = new RegExp(`\\s*<meta[^>]+${attr}="${key}"[^>]*>`, 'gi');
  return html.replace(re, '');
}

function injectMeta(html, tag) {
  const attrMatch = tag.match(/(?:property|name)="([^"]+)"/);
  if (attrMatch) {
    html = stripMetaTag(html, 'property', attrMatch[1]);
    html = stripMetaTag(html, 'name', attrMatch[1]);
  }
  return html.replace('</head>', `  ${tag}\n</head>`);
}

export default async function handler(req, res) {
  try {
    const rawId = req.query?.id || new URL(req.url || '', 'https://x').searchParams.get('id') || '';
    const id = String(Array.isArray(rawId) ? rawId[0] : rawId).trim();
    const host = req.headers?.host || 'weverseonlineshop.com';
    const origin = 'https://' + host;
    const siteUrl = (process.env.VITE_SITE_URL || origin).replace(/\/+$/, '');

    const html = readDetailsHtml();
    if (!html) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('details.html not found');
      return;
    }

    let listing = null;
    let fromDb = false;
    if (id) {
      const sync = resolveListingSync(id);
      if (sync) {
        listing = sync;
      } else {
        listing = await resolveFromDb(id);
        fromDb = !!listing;
      }
    }

    let out = html;
    if (listing) {
      const title = String(listing.title || '').trim() || SITE_NAME;
      const price = formatSharePrice(listing);
      const desc = `${title}${price ? ` — ${price}` : ''} — available at ${SITE_NAME}.`;
      const canonical = `${siteUrl}/details.html?id=${encodeURIComponent(id)}`;
      // For DB showroom products use the 1200x630 OG-image generator (large,
      // uncropped product preview). Static/specialist listings keep their raw
      // image. The generator endpoint is only reachable for DB rows.
      const useSized = fromDb && listing.images?.[0];
      const ogImage = useSized
        ? `${siteUrl}/api/og-image?id=${encodeURIComponent(id)}`
        : absUrl(listing.images?.[0] || FALLBACK_IMG, siteUrl);
      // Product video (standalone video/video_url columns). When present, emit
      // og:video so WhatsApp/Facebook/Telegram can offer a playable media card,
      // and keep og:image as the poster so there is ALWAYS a preview thumbnail.
      const videoUrl = String(
        (listing.video_url && String(listing.video_url).trim()) ||
        (listing.video && String(listing.video).trim()) || '',
      ).trim();
      const videoTags = videoUrl
        ? [
            `<meta property="og:video" content="${escapeAttr(absUrl(videoUrl, siteUrl))}">`,
            `<meta property="og:video:secure_url" content="${escapeAttr(absUrl(videoUrl, siteUrl))}">`,
            `<meta property="og:video:type" content="video/mp4">`,
            `<meta property="og:video:width" content="1280">`,
            `<meta property="og:video:height" content="720">`,
          ]
        : [];
      const tags = [
        `<title>${escapeAttr(title)} | ${SITE_NAME}</title>`,
        `<meta name="description" content="${escapeAttr(desc)}">`,
        `<meta property="og:type" content="product">`,
        `<meta property="og:title" content="${escapeAttr(title)}">`,
        `<meta property="og:description" content="${escapeAttr(desc)}">`,
        `<meta property="og:image" content="${escapeAttr(ogImage)}">`,
        // secure_url is what many HTTPS-only crawlers actually honor — always
        // mirror the absolute `og:image` there so the thumbnail cannot be lost.
        `<meta property="og:image:secure_url" content="${escapeAttr(ogImage)}">`,
        ...(useSized ? [
          `<meta property="og:image:width" content="1200">`,
          `<meta property="og:image:height" content="630">`,
          `<meta property="og:image:type" content="image/jpeg">`,
        ] : []),
        `<meta property="og:image:alt" content="${escapeAttr(title)} — ${SITE_NAME}">`,
        `<meta property="og:url" content="${escapeAttr(canonical)}">`,
        ...videoTags,
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${escapeAttr(title)}">`,
        `<meta name="twitter:description" content="${escapeAttr(desc)}">`,
        `<meta name="twitter:image" content="${escapeAttr(ogImage)}">`,
        `<link rel="canonical" href="${escapeAttr(canonical)}">`,
      ];
      out = html.replace(/<title>[\s\S]*?<\/title>/, tags[0]);
      out = out.replace(/<link rel="canonical"[^>]*>/, tags[tags.length - 1]);
      for (const t of tags.slice(1, -1)) out = injectMeta(out, t);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300');
    res.end(out);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Server error: ' + (err && err.message ? err.message : err));
  }
}