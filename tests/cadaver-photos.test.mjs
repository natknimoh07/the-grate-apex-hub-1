// Real dissection photos (data/cadaver-photos.ts, data/figures/cadaver.ts). Run with: npm test
// - every photo is credited (author, CC BY-SA 3.0, links to the photo and the licence):
//   the licence only lets us show them with that credit
// - every lesson and reading section a photo names exists, and every photo has a note
// - every photo's file has been downloaded into public/images/cadaver/
//   (node --import ./tests/register.mjs scripts/cadaver-photos/download.mjs)
// - the labelled photos sit in a lesson, with pins and boxes inside the picture,
//   and make quiz questions that cite the photo collection, not a lecture
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { describe, it } from 'node:test';

const { CADAVER_ILLUSTRATIONS, CADAVER_NOTES, CADAVER_PHOTOS, CC_BY_SA_3, CC_BY_SA_3_URL } = await import('@/data/cadaver-photos');
const { cadaverFigures } = await import('@/data/figures/cadaver');
const { getFigure } = await import('@/data/figures');
const { builtTopics } = await import('@/data/topics');
const { chunkFigures } = await import('@/data/lesson-types');

const inside = (n) => n >= 0 && n <= 1;

describe('dissection photos', () => {
  const lessons = new Map(builtTopics.flatMap(({ topic }) => topic.lessons.map((lesson) => [lesson.id, lesson])));

  it('are listed once each, under a unique name', () => {
    const files = new Set();
    const slugs = new Set();
    for (const photo of CADAVER_PHOTOS) {
      assert.ok(!files.has(photo.commonsFile), `${photo.commonsFile} listed twice`);
      assert.ok(!slugs.has(photo.slug), `${photo.slug} used twice`);
      files.add(photo.commonsFile);
      slugs.add(photo.slug);
      assert.ok(photo.author.trim(), `${photo.slug}: no author`);
    }
    assert.ok(CADAVER_PHOTOS.length >= 40, `only ${CADAVER_PHOTOS.length} photos`);
  });

  it('have been downloaded', () => {
    const missing = CADAVER_PHOTOS.filter((photo) => !existsSync(new URL(`../public/images/cadaver/${photo.slug}.jpg`, import.meta.url)));
    assert.deepEqual(missing.map((photo) => photo.slug), [], 'run: node --import ./tests/register.mjs scripts/cadaver-photos/download.mjs');
  });

  it('in the reading point at real sections, with credit, licence link and note', () => {
    for (const [lessonId, sections] of Object.entries(CADAVER_ILLUSTRATIONS)) {
      const lesson = lessons.get(lessonId);
      assert.ok(lesson, `unknown lesson ${lessonId}`);
      const titles = new Set(lesson.chunks.map((chunk) => chunk.title));
      for (const [title, items] of Object.entries(sections)) {
        assert.ok(titles.has(title), `${lessonId}: no section "${title}"`);
        for (const item of items) {
          assert.ok(item.realSpecimen, `${item.src}: not marked as a real specimen`);
          assert.ok(item.credit.includes(CC_BY_SA_3), `${item.src}: credit must name the licence`);
          assert.equal(item.licenseUrl, CC_BY_SA_3_URL);
          assert.match(item.sourceUrl, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
          assert.ok(item.caption.length > 10, `${item.src}: caption`);
          const note = CADAVER_NOTES[item.src.split('/').pop()];
          assert.ok(note && note.length >= 60 && note.length <= 600, `${item.src}: note missing or the wrong length`);
        }
      }
    }
  });

  it('as diagrams are credited, shown in a lesson and drawn inside the picture', () => {
    const shown = new Set();
    for (const lesson of lessons.values()) for (const chunk of lesson.chunks) for (const id of chunkFigures(chunk)) shown.add(id);
    for (const figure of cadaverFigures) {
      assert.ok(getFigure(figure.id), `${figure.id}: not registered in data/figures/index.ts`);
      assert.ok(shown.has(figure.id), `${figure.id}: not shown in any lesson`);
      assert.equal(figure.credit?.license, CC_BY_SA_3, `${figure.id}: credit`);
      assert.equal(figure.credit?.licenseUrl, CC_BY_SA_3_URL);
      assert.ok(figure.spots.length >= 6, `${figure.id}: too few parts to label`);
      for (const spot of figure.spots) {
        assert.ok(inside(spot.x) && inside(spot.y), `${figure.id}/${spot.id}: pin outside`);
        for (const [x, y, w, h] of spot.boxes ?? []) assert.ok(inside(x) && inside(y) && x + w <= 1.01 && y + h <= 1.01, `${figure.id}/${spot.id}: box outside`);
      }
    }
  });

  it('as diagrams make quiz questions that cite the photos', () => {
    const ids = new Set(cadaverFigures.map((figure) => figure.id));
    const asked = new Set();
    for (const { questions } of builtTopics) {
      for (const question of questions) {
        if (!question.figure || !ids.has(question.figure.id)) continue;
        asked.add(question.figure.id);
        assert.ok(question.sourceRefs.every((ref) => ref.sourceId === 'wikimedia-dissection-photos'), `${question.id}: should cite the photo collection`);
        assert.match(question.explanation ?? '', /dissection photo/, `${question.id}: explanation`);
      }
    }
    for (const id of ids) assert.ok(asked.has(id), `${id}: no quiz questions`);
  });
});
