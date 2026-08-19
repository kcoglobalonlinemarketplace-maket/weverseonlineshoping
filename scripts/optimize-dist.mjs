import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(root, 'dist', 'index.html');
let html = readFileSync(file, 'utf8');

// Stylesheet is render-blocking: fetch it first.
html = html.replace(
  /<link rel="stylesheet"([^>]*)\/?>/,
  '<link rel="stylesheet"$1 fetchpriority="high">'
);

// Heavy data chunks are needed only after first paint / for the below-fold
// sections: deprioritize them so CSS + critical JS win bandwidth first.
html = html.replace(
  /<link rel="modulepreload"[^>]*href="([^"]*)"[^>]*>/g,
  (match, href) => {
    if (/showroom-data-|phone-data-|catalog-/.test(href) && !/catalog-hidden-store/.test(href)) {
      return match.includes('fetchpriority') ? match : match.replace(/>\s*$/, ' fetchpriority="low">');
    }
    return match;
  }
);

writeFileSync(file, html, 'utf8');

// The api/og.js serverless function serves the built details page with
// per-product Open Graph tags injected. Copy the built details.html next to
// the function so it is guaranteed to be present in the deployment's bundle
// (the og:image baked into index.html rides along in dist/ itself).
try {
  copyFileSync(join(root, 'dist', 'details.html'), join(root, 'api', 'details-static.html'));
} catch {}

console.log('optimize-dist ok — stylesheet high, heavy chunks low');