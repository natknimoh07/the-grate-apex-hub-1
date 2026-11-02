// Pictures in the reading (data/illustrations.ts). Run with: npm test
// - every picture file exists in public/ and has its size and a caption
// - every lesson and reading-section title it names exists, so no picture is lost
// - every picture is credited (CC BY 4.0 needs the credit shown)
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { describe, it } from 'node:test';

const { ILLUSTRATIONS } = await import('@/data/illustrations');
const { builtTopics } = await import('@/data/topics');

describe('reading illustrations', () => {
  const lessons = new Map(builtTopics.flatMap(({ topic }) => topic.lessons.map((lesson) => [lesson.id, lesson])));

  it('point at real lessons and sections', () => {
    for (const [lessonId, sections] of Object.entries(ILLUSTRATIONS)) {
      const lesson = lessons.get(lessonId);
      assert.ok(lesson, `unknown lesson ${lessonId}`);
      const titles = new Set(lesson.chunks.map((chunk) => chunk.title));
      for (const title of Object.keys(sections)) assert.ok(titles.has(title), `${lessonId}: no section "${title}"`);
    }
  });

  it('have their picture, size, caption and credit', () => {
    let count = 0;
    for (const sections of Object.values(ILLUSTRATIONS)) {
      for (const items of Object.values(sections)) {
        for (const item of items) {
          count++;
          assert.ok(existsSync(new URL(`../public${item.src}`, import.meta.url)), `missing public${item.src}`);
          assert.ok(item.width > 0 && item.height > 0, `${item.src}: size`);
          assert.ok(item.caption.length > 10, `${item.src}: caption`);
          assert.match(item.credit, /OpenStax.*CC BY 4\.0/, `${item.src}: credit`);
        }
      }
    }
    assert.ok(count >= 100, `only ${count} pictures`);
  });

  // "What to notice" notes and figure numbers (owner, 2026-11-02).
  it('every picture has a note and a figure number', async () => {
    const { illustrationsFor } = await import('@/data/illustrations');
    for (const [lessonId, sections] of Object.entries(ILLUSTRATIONS)) {
      const lesson = lessons.get(lessonId);
      for (const title of Object.keys(sections)) {
        const number = lesson.chunks.findIndex((chunk) => chunk.title === title) + 1;
        illustrationsFor(lessonId, title, number).forEach((item, index) => {
          assert.ok(item.note && item.note.length >= 60 && item.note.length <= 600, `${item.src}: note missing or the wrong length`);
          assert.equal(item.label, `Figure ${number}.${index + 1}`);
        });
      }
    }
  });
});
