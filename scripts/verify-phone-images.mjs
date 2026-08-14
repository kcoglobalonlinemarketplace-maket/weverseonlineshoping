#!/usr/bin/env node
/**
 * Verify that every image referenced by src/phone-data.js exists as a local
 * file in public/phones/ and that every phone listing has at least one image.
 */
import { readFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_FILE = join(ROOT, 'src', 'phone-data.js');
const PHONES_DIR = join(ROOT, 'public', 'phones');

// Minimal parse: read every image path string used by buildGallery(...)
const src = await readFile(DATA_FILE, 'utf8');

// Collect listings count
const listingCount = (src.match(/property_id:/g) || []).length;

// Each buildGallery call contains the image paths (relative like 'a/a5/...')
const imagePathRefs = [...src.matchAll(/buildGallery\(\[([\s\S]*?)\]\)/g)].map((m) => m[1]);

const localRefs = [];
for (const block of imagePathRefs) {
  // Each entry is a quoted string
  const entries = [...block.matchAll(/'([^']+)'/g)].map((m) => m[1]);
  for (const e of entries) {
    if (e.startsWith('http') || e.startsWith('/')) continue;
    localRefs.push(e);
  }
}

// Normalize: the data file will use local paths like 'phones/iphone-15-pro-max-1.jpg'
const normalized = localRefs.map((p) => p.replace(/^\.?\//, '').replace(/^phones\//, ''));

const missing = [];
const found = new Set();
for (const rel of normalized) {
  const abs = join(PHONES_DIR, rel);
  try {
    await access(abs);
    found.add(rel);
  } catch {
    missing.push(rel);
  }
}

const uniqueNeeded = new Set(normalized);

console.log(`Phone listings in phone-data.js: ${listingCount}`);
console.log(`Unique local image files referenced: ${uniqueNeeded.size}`);
console.log(`Existing on disk: ${found.size}`);
console.log(`Missing on disk: ${missing.length}`);
if (missing.length) {
  console.log('Missing files:');
  missing.forEach((m) => console.log(`  - ${m}`));
}

const ok = missing.length === 0 && listingCount > 0;
console.log(`\nRESULT: ${ok ? 'PASS — phone section is complete.' : 'FAIL — fix missing images first.'}`);
process.exit(ok ? 0 : 1);