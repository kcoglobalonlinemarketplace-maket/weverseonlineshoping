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

// Direct, targeted lookup of a single DB listing (created in the admin).
//
// Previously this went through the browser-side full-table loader
// (loadDBListings() -> findListingById()), which fetches the ENTIRE
// showroom_listings table (~440 rows) and raced a hard 2.5s cap. On a cold
// serverless start that full-table fetch routinely exceeded the cap, so the
// crawler got the generic fallback preview (brand-logo + "Property Details")
// instead of the real product. A targeted single-row query by property_id is
// ~0.9s and always wins, so Facebook/WhatsApp reliably show the real product.
let _ogClient = null;
async function ogClient() {
  if (_ogClient) return _ogClient;
  const { createClient } = await import('@supabase/supabase-js');
  _ogClient = createClient(
    'https://wttnvwpoqmbxryivcerf.supabase.co',
    'sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa',
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
  return _ogClient;
}

function withTimeoutMs(promise, ms) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve('__timeout__'), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      () => { clearTimeout(timer); resolve('__timeout__'); },
    );
  });
}

async function resolveFromDb(id) {
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id));
  try {
    const client = await ogClient();
    const byProperty = client.from('showroom_listings')
      .select('*')
      .eq('is_active', true)
      .eq('property_id', id);
    const propResult = await withTimeoutMs(byProperty.maybeSingle(), 4000);
    if (propResult !== '__timeout__' && !propResult?.error && propResult?.data) {
      return normalizeOgRow(propResult.data);
    }
    // Some URLs carry the raw UUID row id instead of the property_id.
    if (isUuid) {
      const byId = client.from('showroom_listings')
        .select('*')
        .eq('is_active', true)
        .eq('id', id);
      const idResult = await withTimeoutMs(byId.maybeSingle(), 4000);
      if (idResult !== '__timeout__' && !idResult?.error && idResult?.data) {
        return normalizeOgRow(idResult.data);
      }
    }
    return null;
  } catch (err) {
    console.error('[og] resolveFromDb failed:', err && err.message ? err.message : err);
    return null;
  }
}

function normalizeOgRow(row) {
  return {
    ...row,
    price: Number(row.price) || 0,
    images: Array.isArray(row.images) ? row.images : [],
  };
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