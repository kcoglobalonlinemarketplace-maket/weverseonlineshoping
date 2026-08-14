#!/usr/bin/env node
/**
 * Download a complete set of clean phone product images from Wikimedia Commons
 * into public/phones/ so the showroom phone section can reference local images
 * that always load. Verifies each download is a valid image (magic bytes + size).
 *
 * NOTE: `file` must be the EXACT Wikimedia Commons filename — use literal
 * characters (e.g. `Xiaomi_15_(1).jpg`, not `Xiaomi_15_%281%29.jpg`).
 * encodeURI() handles encoding once.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'phones');

// Candidate images: { local, file } where file is the exact Wikimedia Commons filename
const CANDIDATES = [
  // ── Apple ──
  { local: 'iphone-16-pro-max-1.jpg', file: 'About_iPhone_16_Pro_Max_Natural_Titanium.jpg' },
  { local: 'iphone-16-pro-max-2.jpg', file: 'Back_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg' },
  { local: 'iphone-16-pro-max-3.jpg', file: 'Right_view_of_iPhone_16_Pro_Max_Natural_Titanium.jpg' },
  { local: 'iphone-15-pro-max-1.jpg', file: 'Front_of_iPhone_15_Pro_Max.jpg' },
  { local: 'iphone-15-pro-max-2.jpg', file: 'Back_view_of_iPhone_15_Pro_Max_Natural_Titanium.jpg' },
  { local: 'iphone-15-pro-max-3.jpg', file: 'IPhone_15_Pro_Max_Camera.jpg' },
  { local: 'iphone-14-pro-max-1.jpg', file: 'Deep_Purple_iPhone_14_Pro_Max_back_photo.jpg' },
  { local: 'iphone-14-pro-max-2.jpg', file: 'Deep_Purple_iPhone_14_Pro_Max_front_photo.jpg' },
  { local: 'iphone-13-pro-max-1.jpg', file: 'Apple_iPhone_13_Pro_and_13_Pro_Max.jpg' },
  { local: 'iphone-12-pro-max-1.jpg', file: 'IPhone_12_Pro_Max_-_2.jpg' },
  { local: 'iphone-12-pro-max-2.jpg', file: 'IPhone_12_Pro_Max_-_3.jpg' },
  { local: 'iphone-12-pro-max-3.jpg', file: 'IPhone-12-Pro-Max(Blue).jpg' },

  // ── Samsung ──
  { local: 'samsung-s25-ultra-1.jpg', file: 'Samsung_Galaxy_S25_Ultra_Titanium_Silverblue.jpg' },
  { local: 'samsung-s25-ultra-2.jpg', file: 'Rear_view_of_the_Samsung_Galaxy_S25_Ultra_smartphone.jpg' },
  { local: 'samsung-s24-ultra-1.jpg', file: 'SAMSUNG_Galaxy_S24_Ultra.jpg' },
  { local: 'samsung-s24-ultra-2.jpg', file: 'SAMSUNG_Galaxy_S24_Ultra_(5).jpg' },
  { local: 'samsung-s23-ultra-1.jpg', file: 'Samsung_Galaxy_S23_Ultra,_512_GB,_Lavender_20230416_HOF00318_RAW-Export_cens.png' },
  { local: 'samsung-s22-ultra-1.jpg', file: 'Back_of_the_Samsung_Galaxy_S22_Ultra.jpg' },
  { local: 'samsung-s22-ultra-2.jpg', file: 'SAMSUNG_Galaxy_S22_Ultra_BLACK.jpg' },
  { local: 'samsung-s21-ultra-1.jpg', file: 'SAMSUNG_Galaxy_S21_Ultra(1).jpg' },
  { local: 'samsung-s21-ultra-2.jpg', file: 'SAMSUNG_Galaxy_S21_Ultra(2).jpg' },

  // ── Google ──
  { local: 'pixel-9-pro-xl-1.jpg', file: 'Google_Pixel_9_Pro_XL_(back).jpg' },
  { local: 'pixel-9-pro-xl-2.jpg', file: 'Google_Pixel_9_Pro_XL_(front).jpg' },
  { local: 'pixel-8-pro-1.jpg', file: 'Google_Pixel_8_Pro,_shown_in_Shibuya_Stream.jpg' },
  { local: 'pixel-8-pro-2.jpg', file: 'Google_Pixel_8_Pro,_shown_in_Shibuya_Stream_2.jpg' },
  { local: 'pixel-8-pro-3.jpg', file: 'Google_Pixel_8_Pro.jpg' },
  { local: 'pixel-7-pro-1.jpg', file: 'Google_Pixel_7_Pro_back_(Obsidian).svg' },
  { local: 'pixel-6-pro-1.jpg', file: 'Rear_view_of_Google_Pixel_6_Pro.jpg' },
  { local: 'pixel-6-pro-2.jpg', file: 'Google_Pixel_6_Pro_with_accessory_box.jpg' },

  // ── Xiaomi ──
  { local: 'xiaomi-15-1.jpg', file: 'Xiaomi_15_(1).jpg' },
  { local: 'xiaomi-15-2.jpg', file: 'Xiaomi_15_(2).jpg' },
  { local: 'xiaomi-15-pro-1.jpg', file: 'Xiaomi_15_Pro_(1).jpg' },
  { local: 'xiaomi-15-pro-2.jpg', file: 'Xiaomi_15_Pro_(2).jpg' },
  { local: 'xiaomi-14t-pro-1.jpg', file: 'Xiaomi-14T-Pro---RuinDig_001.jpg' },
  { local: 'xiaomi-14t-pro-2.jpg', file: 'Xiaomi-14T-Pro---RuinDig_002.jpg' },
  { local: 'xiaomi-13-1.jpg', file: 'Xiaomi_13_back.jpg' },
  { local: 'xiaomi-13-2.jpg', file: 'Xiaomi_13_front.jpg' },
  { local: 'xiaomi-12-1.jpg', file: 'Xiaomi_12.jpg' },

  // ── OnePlus ──
  { local: 'oneplus-13-1.jpg', file: 'OnePlus_13_back.jpg' },
  { local: 'oneplus-13-2.jpg', file: 'OnePlus_13_volume_slider.jpg' },
  { local: 'oneplus-12r-1.jpg', file: 'OnePlus_Ace_3_Black.jpg' },
  { local: 'oneplus-12r-2.jpg', file: 'OnePlus_Ace_3_Black_Back.jpg' },
  { local: 'oneplus-9-pro-1.jpg', file: 'OnePlus_9_Pro_back.jpg' },
  { local: 'oneplus-9-pro-2.jpg', file: 'OnePlus_9_Pro_back_logo.jpg' },
];

const PACE_MS = 1500;      // delay between requests — avoids rate limiting
const RETRIES = 5;         // max attempts per image
const RATE_LIMIT_WAIT = 20000; // wait when HTTP 429
const TIMEOUT_MS = 60000;

function urlFor(file) {
  // Special:FilePath accepts the raw filename; encodeURI encodes once.
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURI(file)}?width=900`;
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

// Basic magic-byte checks for JPEG / PNG / GIF / WebP / SVG
function looksLikeImage(buf) {
  if (buf.length < 12) return false;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return true; // JPEG
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return true; // PNG
  if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46) return true; // GIF
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46) return true; // WEBP
  if (buf[0] === 0x3c && buf[1] === 0x73 && buf[2] === 0x76 && buf[3] === 0x67) return true; // <svg
  return false;
}

async function downloadOne(cand) {
  const target = join(OUT_DIR, cand.local);
  if (await exists(target)) {
    return { ...cand, status: 'skip' };
  }
  const url = urlFor(cand.file);
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    let ctrl;
    try {
      ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
      const res = await fetch(url, {
        signal: ctrl.signal,
        headers: { 'User-Agent': 'KCO-Showroom-ImageFetch/1.0 (local dev tool)' },
        redirect: 'follow',
      });
      clearTimeout(t);
      if (res.status === 429) {
        // Rate limited — wait a good while before retrying.
        await new Promise((r) => setTimeout(r, RATE_LIMIT_WAIT));
        continue;
      }
      if (!res.ok) {
        return { ...cand, status: 'fail', error: `HTTP ${res.status}` };
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (!looksLikeImage(buf)) {
        return { ...cand, status: 'fail', error: 'Not a valid image payload' };
      }
      await writeFile(target, buf);
      return { ...cand, status: 'ok', bytes: buf.length };
    } catch (err) {
      if (ctrl) clearTimeout(ctrl?._t);
      if (attempt === RETRIES) {
        return { ...cand, status: 'fail', error: String(err?.message || err) };
      }
      await new Promise((r) => setTimeout(r, 2500 * attempt));
    }
  }
  return { ...cand, status: 'fail', error: 'Exhausted retries (rate limited)' };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const results = [];
  for (let i = 0; i < CANDIDATES.length; i++) {
    const r = await downloadOne(CANDIDATES[i]);
    results.push(r);
    const mark = r.status === 'ok' ? 'OK  ' : r.status === 'skip' ? 'SKIP' : 'FAIL';
    console.log(`[${i + 1}/${CANDIDATES.length}] ${mark} ${r.local}${r.error ? ' — ' + r.error : ''}${r.bytes ? ` (${r.bytes} bytes)` : ''}`);
    await new Promise((r) => setTimeout(r, PACE_MS));
  }

  const ok = results.filter((r) => r.status === 'ok').length;
  const skip = results.filter((r) => r.status === 'skip').length;
  const fail = results.filter((r) => r.status === 'fail').length;
  console.log(`\nSummary: ${ok} downloaded, ${skip} already present, ${fail} failed`);
  if (fail) {
    console.log('Failures:');
    results.filter((r) => r.status === 'fail').forEach((r) => console.log(`  - ${r.local} (${r.file}) — ${r.error}`));
  }
  process.exit(fail ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});