// Downloads the real dissection photos the app uses from Wikimedia Commons into
// public/images/cadaver/ (see src/data/cadaver-photos.ts).
//
//   node --import ./tests/register.mjs scripts/cadaver-photos/download.mjs [--force]
//
// Before saving a photo it asks Commons for the file's licence and author and
// stops if they are not what the app credits (CC BY-SA 3.0, the listed author),
// so a photo is never shown under the wrong credit. Files already downloaded
// are skipped unless --force is given. The photos are saved as published: the
// licence's share-alike term applies to edited versions, and we make none.
import { mkdir, stat, writeFile } from 'node:fs/promises';

const { CADAVER_PHOTOS, CC_BY_SA_3, cadaverSrc } = await import('@/data/cadaver-photos');
await import('@/data/figures/cadaver'); // registers the photos used as diagrams

const API = 'https://commons.wikimedia.org/w/api.php';
// Wikimedia asks automated clients to say who they are.
const HEADERS = { 'User-Agent': 'GrAteApex-anatomy-photos/1.0 (study app; one-off download of CC BY-SA images)' };
const force = process.argv.includes('--force');
const outDir = new URL('../../public/images/cadaver/', import.meta.url);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const plain = (html = '') => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/** Width and height of a JPEG, read from its start-of-frame marker. */
function jpegSize(bytes) {
  let i = 2;
  while (i < bytes.length) {
    if (bytes[i] !== 0xff) return null;
    const marker = bytes[i + 1];
    const length = (bytes[i + 2] << 8) + bytes[i + 3];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: (bytes[i + 5] << 8) + bytes[i + 6], width: (bytes[i + 7] << 8) + bytes[i + 8] };
    }
    i += 2 + length;
  }
  return null;
}

async function info(files) {
  const titles = files.map((file) => `File:${file}`).join('|');
  const url = `${API}?action=query&format=json&prop=imageinfo&iiprop=url|size|extmetadata&titles=${encodeURIComponent(titles)}`;
  const response = await fetch(url, { headers: HEADERS });
  if (!response.ok) throw new Error(`Commons API: HTTP ${response.status}`);
  const data = await response.json();
  const byTitle = new Map();
  // The API normalises titles (underscores, first letter); map them back.
  const names = new Map((data.query.normalized ?? []).map((n) => [n.to, n.from]));
  for (const page of Object.values(data.query.pages)) {
    const asked = (names.get(page.title) ?? page.title).replace(/^File:/, '');
    byTitle.set(asked, page.imageinfo?.[0]);
  }
  return byTitle;
}

await mkdir(outDir, { recursive: true });
let saved = 0;
let skipped = 0;
const problems = [];

for (let start = 0; start < CADAVER_PHOTOS.length; start += 40) {
  const batch = CADAVER_PHOTOS.slice(start, start + 40);
  const infos = await info(batch.map((photo) => photo.commonsFile));
  for (const photo of batch) {
    const target = new URL(`../../public${cadaverSrc(photo.slug)}`, import.meta.url);
    if (!force && (await stat(target).catch(() => null))) {
      skipped++;
      continue;
    }
    const meta = infos.get(photo.commonsFile);
    if (!meta) {
      problems.push(`${photo.commonsFile}: not found on Commons`);
      continue;
    }
    const license = plain(meta.extmetadata?.LicenseShortName?.value);
    const artist = plain(meta.extmetadata?.Artist?.value);
    if (license !== CC_BY_SA_3) {
      problems.push(`${photo.commonsFile}: licence is "${license}", not ${CC_BY_SA_3} — not downloaded`);
      continue;
    }
    if (!artist.includes(photo.author)) {
      problems.push(`${photo.commonsFile}: Commons credits "${artist}", the app credits "${photo.author}" — not downloaded`);
      continue;
    }
    // Commons limits how fast files may be fetched ("429 Too Many Requests"): wait as it asks, then try again.
    let response = await fetch(meta.url, { headers: HEADERS });
    for (let attempt = 1; response.status === 429 && attempt <= 5; attempt++) {
      const wait = Math.max(Number(response.headers.get('retry-after')) || 0, 30 * attempt);
      console.log(`  (Commons asks us to slow down; waiting ${wait} s before ${photo.commonsFile})`);
      await sleep(wait * 1000);
      response = await fetch(meta.url, { headers: HEADERS });
    }
    if (!response.ok) {
      problems.push(`${photo.commonsFile}: download failed (HTTP ${response.status})`);
      continue;
    }
    const bytes = new Uint8Array(await response.arrayBuffer());
    const size = jpegSize(bytes);
    if (!size || size.width !== photo.width || size.height !== photo.height) {
      problems.push(`${photo.commonsFile}: is ${size ? `${size.width}×${size.height}` : 'not a JPEG'}, the app expects ${photo.width}×${photo.height}`);
      continue;
    }
    await writeFile(target, bytes);
    saved++;
    console.log(`saved ${cadaverSrc(photo.slug)}  (${photo.commonsFile}, ${Math.round(bytes.length / 1024)} KB)`);
    await sleep(1500);
  }
}

console.log(`\n${saved} downloaded, ${skipped} already there, ${problems.length} problems.`);
for (const problem of problems) console.log(`  ✗ ${problem}`);
if (problems.length) process.exitCode = 1;
