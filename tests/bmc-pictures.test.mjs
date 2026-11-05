// Basic Medical Chemistry pictures (owner, 2026-11-05: "you can't just learn organic
// chemistry by reading only"). Drawn by scripts/bmc-figures/ into public/images/bmc/,
// placed in the lessons by src/data/hb1-lessons/bmc-pictures.ts.
// - every placement points at a real section and block of its lesson
// - every picture is used, exists, is well-formed SVG and has the size bmc-figures.ts says
// - captions and notes are written out, and the lessons really show the pictures, numbered
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { BMC_PICTURES } = await import('@/data/hb1-lessons/bmc-pictures');
const { BMC_FIGURES } = await import('@/data/hb1-lessons/bmc-figures');
const { HB1_LOCAL_LESSONS } = await import('@/data/hb1-lessons');

const dir = new URL('../public/images/bmc/', import.meta.url);
const svgOf = (id) => readFileSync(new URL(`${id}.svg`, dir), 'utf8');

describe('Basic Medical Chemistry pictures', () => {
  it('are placed in real sections, after real blocks', () => {
    for (const [lessonId, places] of Object.entries(BMC_PICTURES)) {
      const lesson = HB1_LOCAL_LESSONS.find((item) => item.id === lessonId);
      assert.ok(lesson, `no lesson ${lessonId}`);
      for (const place of places) {
        const section = lesson.sections.find((item) => item.id === place.section);
        assert.ok(section, `${lessonId}: no section ${place.section}`);
        const original = section.blocks.filter((block) => block.k !== 'illus');
        assert.ok(place.after >= 0 && place.after < original.length, `${lessonId}/${place.section}: no block ${place.after}`);
        assert.ok(place.cap.length > 20 && place.note.length > 60, `${place.id}: caption or note too short`);
        assert.doesNotMatch(place.cap + place.note, /<|_\{|\^/, `${place.id}: markup in the caption or note`);
      }
    }
  });

  it('are all used, all drawn, and the sizes match', () => {
    const placed = new Set(Object.values(BMC_PICTURES).flat().map((place) => place.id));
    const files = readdirSync(dir).filter((name) => name.endsWith('.svg')).map((name) => name.slice(0, -4));
    assert.deepEqual([...placed].sort(), Object.keys(BMC_FIGURES).sort(), 'a picture is drawn but not placed (or the reverse)');
    assert.deepEqual(files.sort(), Object.keys(BMC_FIGURES).sort(), 'public/images/bmc/ is out of date: run node scripts/bmc-figures/build.mjs');
    for (const [id, [w, h]] of Object.entries(BMC_FIGURES)) {
      const svg = svgOf(id);
      assert.match(svg, new RegExp(`^<svg [^>]*width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"`), `${id}: size differs from bmc-figures.ts`);
      assert.doesNotMatch(svg, /="[^"]*(NaN|undefined|Infinity)/, `${id}: a bad number in the drawing`);
      // Well-formed enough for every browser: no attribute twice in one tag (it breaks the whole picture).
      for (const tag of svg.match(/<[a-z][^>]*>/g)) {
        const names = [...tag.matchAll(/\s([a-z-]+)=/g)].map((m) => m[1]);
        assert.equal(new Set(names).size, names.length, `${id}: repeated attribute in ${tag.slice(0, 60)}`);
      }
    }
  });

  it('show in the lessons, numbered by section', () => {
    let count = 0;
    for (const lessonId of Object.keys(BMC_PICTURES)) {
      const lesson = HB1_LOCAL_LESSONS.find((item) => item.id === lessonId);
      lesson.sections.forEach((section, s) => {
        section.blocks.filter((block) => block.k === 'illus' && block.src.startsWith('/images/bmc/')).forEach((block, n) => {
          count += 1;
          assert.equal(block.num, `Figure ${s + 1}.${n + 1}`, `${lessonId}: ${block.src} numbered ${block.num}`);
        });
      });
    }
    assert.equal(count, Object.values(BMC_PICTURES).flat().length);
  });
});
