#!/usr/bin/env node
/**
 * generate-og.mjs — builds the 1200×630 social card for the Bureau of Road Fairness.
 *
 * Usage:  node scripts/generate-og.mjs
 * Output: public/images/og-card.png (committed to the repo; run manually when
 *         the wordmark or card layout changes — idempotent).
 *
 * Requires the `sharp` devDependency. Hexes are intentional here: the card is a
 * rasterized artifact and cannot read CSS custom properties.
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOGO_PATH = path.join(ROOT, 'public', 'images', 'aarbaa-logo.svg');
const OUT_PATH = path.join(ROOT, 'public', 'images', 'og-card.png');

const NAVY = '#041E42';
const RED = '#B31942';
const PAPER = '#F5F2E9';

// --- Wordmark: recolor the dark-blue and white fills/strokes to paper so the
// --- bracket wordmark reads on the navy field, then rasterize it.
let wordmarkSvg = await readFile(LOGO_PATH, 'utf8');
wordmarkSvg = wordmarkSvg
  .replaceAll('#0a3161', PAPER)
  .replaceAll('#0A3161', PAPER)
  .replaceAll('#fff', PAPER);

const WORDMARK_W = 520;
const WORDMARK_H = Math.round(WORDMARK_W * (100.83 / 257.62)); // preserve viewBox aspect
const WORDMARK_LEFT = 592;
const WORDMARK_TOP = 148;

const wordmarkPng = await sharp(Buffer.from(wordmarkSvg), { density: 300 })
  .resize({ width: WORDMARK_W })
  .png()
  .toBuffer();

// --- Base card: navy field, red rule border, simplified Bureau seal (favicon
// --- geometry, scaled), Courier text block on the right.
const baseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="${RED}" stroke-width="2"/>

  <!-- Simplified Bureau seal (reuses favicon geometry) -->
  <g transform="translate(300 315) scale(5.4) translate(-32 -32)">
    <circle cx="32" cy="32" r="30" fill="none" stroke="${PAPER}" stroke-width="1.2"/>
    <circle cx="32" cy="32" r="26" fill="none" stroke="${PAPER}" stroke-width="0.6"/>
    <g fill="${PAPER}">
      <rect x="9" y="28.5" width="46" height="7" transform="rotate(45 32 32)"/>
      <rect x="9" y="28.5" width="46" height="7" transform="rotate(-45 32 32)"/>
    </g>
    <g fill="${RED}" stroke="${PAPER}" stroke-width="1">
      <path d="M14 38v-7l7-2 5-7h12l5 7 7 2v7z"/>
      <circle cx="23" cy="40" r="4"/>
      <circle cx="41" cy="40" r="4"/>
    </g>
  </g>

  <!-- Right text block (wordmark composited above by sharp) -->
  <rect x="592" y="392" width="240" height="4" fill="${RED}"/>
  <text x="592" y="446" font-family="Courier New, Courier, monospace" font-weight="bold" font-size="40" fill="${PAPER}">BUREAU OF ROAD FAIRNESS</text>
  <text x="592" y="486" font-family="Courier New, Courier, monospace" font-size="18" fill="${PAPER}">AMERICANS AGAINST ROAD BIKERS ASSOCIATION OF AMERICA</text>
  <text x="592" y="522" font-family="Courier New, Courier, monospace" font-size="18" fill="${PAPER}">OFFICE OF PUBLIC AWARENESS · EST. 2023</text>
</svg>`;

await sharp(Buffer.from(baseSvg))
  .composite([{ input: wordmarkPng, left: WORDMARK_LEFT, top: WORDMARK_TOP }])
  .png()
  .toFile(OUT_PATH);

console.log(`og-card written: ${OUT_PATH} (1200×630, wordmark ${WORDMARK_W}×${WORDMARK_H})`);
