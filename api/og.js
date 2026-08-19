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
import { findListingById, loadDBListings } from '../src/showroom-data.js';
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

// DB-only listings (created in the admin). Guarded so a slow/unreachable
// database never stalls a crawler; falls back to the default preview.
async function resolveFromDb(id) {
  try {
    const result = await Promise.race([
      (async () => {
        await loadDBListings();
        return findListingById(id) || null;
      })(),
      new Promise((resolve) => setTimeout(() => resolve(null), 2500)),
    ]);
    return result;
  } catch {
    return null;
  }
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
    if (id) {
      listing = resolveListingSync(id);
      if (!listing) listing = await resolveFromDb(id);
    }

    let out = html;
    if (listing) {
      const title = String(listing.title || '').trim() || SITE_NAME;
      const price = formatSharePrice(listing);
      const image = absUrl(listing.images?.[0] || FALLBACK_IMG, siteUrl);
      const desc = `${title}${price ? ` — ${price}` : ''} — available at ${SITE_NAME}.`;
      const canonical = `${siteUrl}/details.html?id=${encodeURIComponent(id)}`;
      const tags = [
        `<title>${escapeAttr(title)} | ${SITE_NAME}</title>`,
        `<meta name="description" content="${escapeAttr(desc)}">`,
        `<meta property="og:type" content="product">`,
        `<meta property="og:title" content="${escapeAttr(title)}">`,
        `<meta property="og:description" content="${escapeAttr(desc)}">`,
        `<meta property="og:image" content="${escapeAttr(image)}">`,
        `<meta property="og:image:alt" content="${escapeAttr(title)} — ${SITE_NAME}">`,
        `<meta property="og:url" content="${escapeAttr(canonical)}">`,
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${escapeAttr(title)}">`,
        `<meta name="twitter:description" content="${escapeAttr(desc)}">`,
        `<meta name="twitter:image" content="${escapeAttr(image)}">`,
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