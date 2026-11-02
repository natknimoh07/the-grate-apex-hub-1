// Every lesson ends with its references (owner, 2026-11-02): lecture material,
// textbooks with full citations, picture and 3D-model credits.
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { builtTopics } = await import('@/data/topics');
const { ILLUSTRATIONS } = await import('@/data/illustrations');
const { lessonReferences, SIMULATIONS_3D, SIMULATIONS_HUBMAP } = await import('@/data/lesson-references');
const { getSourceFile } = await import('@/data/content-catalog');

const lessons = builtTopics.flatMap(({ topic }) => topic.lessons);

describe('lesson references', () => {
  it('every lesson lists its lecture material', () => {
    const missing = lessons.filter((lesson) => !lessonReferences(lesson).some((group) => group.heading === 'Lecture material'));
    assert.deepEqual(missing.map((lesson) => lesson.id), []);
  });

  it('every textbook cited has a full citation, not just its file name', () => {
    for (const lesson of lessons) {
      const books = lessonReferences(lesson).find((group) => group.heading === 'Textbooks');
      for (const item of books?.items ?? []) assert.match(item.text, /\b(19|20)\d\d\b|Elsevier|McGraw|Oxford|Freeman|Wolters|Cengage/, `${lesson.id}: ${item.text}`);
    }
  });

  it('lessons with OpenStax pictures credit OpenStax with its licence', () => {
    for (const lessonId of Object.keys(ILLUSTRATIONS)) {
      const lesson = lessons.find((item) => item.id === lessonId);
      if (!lesson) continue;
      const media = lessonReferences(lesson).find((group) => group.heading === 'Pictures and models');
      assert.ok(media?.items.some((item) => /OpenStax.*CC BY 4\.0/.test(item.text)), lessonId);
    }
  });

  it('the 3D simulation lists match the drawings', () => {
    const dir = 'src/components/learning/simulations/graphics';
    const files = readdirSync(dir).filter((name) => name.endsWith('.tsx'));
    const uses3d = files.filter((name) => readFileSync(`${dir}/${name}`, 'utf8').includes('Organ3D')).map((name) => name.replace('.tsx', ''));
    const usesHubmap = files.filter((name) => /'female'|'breasts'|"female"|"breasts"/.test(readFileSync(`${dir}/${name}`, 'utf8'))).map((name) => name.replace('.tsx', ''));
    assert.deepEqual([...SIMULATIONS_3D].sort(), uses3d.sort());
    assert.deepEqual([...SIMULATIONS_HUBMAP].sort(), usesHubmap.sort());
  });

  it('only real source files are cited', () => {
    for (const lesson of lessons) {
      for (const chunk of lesson.chunks) for (const ref of chunk.sourceRefs ?? []) assert.ok(getSourceFile(ref.sourceId), `${lesson.id}: ${ref.sourceId}`);
    }
  });
});

