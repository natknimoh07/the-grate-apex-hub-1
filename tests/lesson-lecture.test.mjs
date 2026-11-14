// "Built from: …" before every lesson is opened (owner, 2026-11-14): the lecture slides a
// lesson was built from, on the topic page, the course path and the lesson's opening screen.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { builtTopics } = await import('@/data/topics');
const { lessonLectureLabel, slideSpans } = await import('@/data/lesson-lecture');
const { HB1_LOCAL_LESSONS, hb1LessonMeta } = await import('@/data/hb1-lessons');
const { HB2_COURSES, hb2Lessons } = await import('@/data/hb2-study');

const lessons = builtTopics.flatMap(({ topic }) => topic.lessons);

describe('lesson lecture labels', () => {
  it('join slides only a few apart into one span', () => {
    assert.equal(slideSpans([41, 42, 44, 45, 48, 49, 50, 51, 52, 53, 54, 57, 58]), '41–58');
    assert.equal(slideSpans([1, 2, 3, 13, 28, 29, 53, 56]), '1–3, 13, 28–29, 53–56');
    assert.equal(slideSpans([23]), '23');
  });

  it('name the deck and its slides, e.g. Cardiac Output and Its Control', () => {
    const lesson = lessons.find((item) => item.id === 'cardiovascular-physiology-3');
    assert.equal(lesson.title, 'Cardiac Output and Its Control');
    assert.equal(lessonLectureLabel(lesson), 'CIRCULATION 1 (slides 41–58)');
  });

  it('every HB2 lesson has one, with slide or page numbers', () => {
    for (const lesson of lessons) {
      const label = lessonLectureLabel(lesson);
      assert.ok(label, `${lesson.id}: no lecture slides found`);
      assert.match(label, /\((slides?|pages?) \d/, `${lesson.id}: "${label}" has no slide numbers`);
      // The file's own extension is left off (a name may still contain ".pptx", e.g. "Microscopic Anatomy GIT.pptx edited. 2024pptx").
      assert.doesNotMatch(label, /\.(pptx?|pptm|ppsx|pdf|docx) \(/i, `${lesson.id}: file extension left in "${label}"`);
    }
  });

  it('every HB1 lesson written in the app names its lecture', () => {
    for (const lesson of HB1_LOCAL_LESSONS) assert.ok(hb1LessonMeta(lesson).lecture?.trim(), `${lesson.id}: no source`);
  });

  it('HB2 course lessons carry it to the course path and lesson page', () => {
    for (const course of HB2_COURSES) for (const meta of hb2Lessons(course.id)) assert.ok(meta.lecture, `${meta.id}: no lecture label`);
  });

  it('is shown on the lesson cards and lesson openings', () => {
    for (const file of ['src/components/learning/topic-screen.tsx', 'src/app/learn/hb-course.tsx', 'src/app/learn/hb-lesson.tsx', 'src/app/learn/lesson.tsx', 'src/components/learning/lesson-start-choice.tsx']) {
      assert.match(readFileSync(file, 'utf8'), /<LectureSource /, `${file} does not show the lecture`);
    }
  });
});
