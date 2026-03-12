#!/usr/bin/env node
/**
 * Generate og.png (1200×627) for LinkedIn/Facebook/Twitter link previews.
 * Logo centered on site background #F0F5F5.
 */
const path = require('path');
const sharp = require('sharp');

const W = 1200;
const H = 627;
const BG = '#F0F5F5';
const LOGO_PATH = path.join(__dirname, '../public/logo512.png');
const OUT_PATH = path.join(__dirname, '../public/og.png');

async function main() {
  const logo = await sharp(LOGO_PATH)
    .resize(480, 480, { fit: 'inside' }) // keep aspect, max 480
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const x = Math.round((W - logoMeta.width) / 2);
  const y = Math.round((H - logoMeta.height) / 2);

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: BG,
    },
  })
    .composite([{ input: logo, left: x, top: y }])
    .png()
    .toFile(OUT_PATH);

  console.log('Created', OUT_PATH, `${W}×${H}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
