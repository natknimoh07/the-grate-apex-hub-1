// HB1 lessons kept in the app (owner, 2026-11-02: "add alkanes, alkenes and stuff to
// HB1 courses, and all other stuff in the HB folder that does not have lessons").
//
// The original HB1 lessons are read from the shared database (lessons, lessonContent;
// data/legacy-study.ts). Lectures in the Human Biology folder that never had a lesson
// are written here instead, so adding them changes nothing in the live database.
// legacy-study.ts merges them into each course's lesson list and serves their text.
//
// Each lesson brings its own quiz, written from the same lecture (the file is named in
// `source`). scripts/hb1-review/lesson-sets.mjs copies the quizzes into the course's
// question bank (public/curriculum/<course>.json, one set per lesson), so practice,
// review, Apex and battles find them; `pastTopics` adds the course's past questions on
// the topic (their `tp`) to the lesson's practice. tests/hb1-lessons.test.mjs checks it.
import type { BankQuestion } from '@/data/legacy-questions';
import type { LegacyExtras, LegacyLessonBody, LegacyLessonMeta, LegacySection } from '@/data/legacy-study';

import { bmcAlkanes } from '@/data/hb1-lessons/bmc-alkanes';
import { bmcAldehydesKetones } from '@/data/hb1-lessons/bmc-aldehydes-ketones';
import { bmcStereochemistry } from '@/data/hb1-lessons/bmc-stereochemistry';
import { behaviouralLearning } from '@/data/hb1-lessons/behavioural-learning';
import { behaviouralMemory } from '@/data/hb1-lessons/behavioural-memory';
import { behaviouralPersonality } from '@/data/hb1-lessons/behavioural-personality';
import { behaviouralStress } from '@/data/hb1-lessons/behavioural-stress';
import { physiologyAns } from '@/data/hb1-lessons/physiology-ans';
import { entomologyBlackflies } from '@/data/hb1-lessons/entomology-blackflies';
import { entomologyFleas } from '@/data/hb1-lessons/entomology-fleas';
import { entomologyHarm } from '@/data/hb1-lessons/entomology-harm';
import { entomologyVectorControl } from '@/data/hb1-lessons/entomology-vector-control';

/** One quiz question: prompt, right answer, three wrong answers, explanation, topic label. */
export type Hb1QuizItem = [question: string, right: string, wrong: [string, string, string], explanation: string, topic: string];

export type Hb1Lesson = {
  /** `<course>-<name>`: the part before the first "-" is the course id. */
  id: string;
  order: number;
  title: string;
  summary: string;
  minutes: number;
  /** The lecture file(s) in the Human Biology folder the lesson and its quiz come from. */
  source: string;
  sections: LegacySection[];
  extras?: LegacyExtras;
  /** Prefix of the quiz question ids in the bank (`<prefix>01`, `<prefix>02`…). */
  quizId: string;
  quizName: string;
  quiz: Hb1QuizItem[];
  /** Past-question topics (`tp` in the bank) practised with this lesson. */
  pastTopics?: string[];
  /** Whole sets of the course bank (ids) practised with this lesson, e.g. a topic review written earlier. */
  pastSets?: string[];
};

export const HB1_LOCAL_LESSONS: Hb1Lesson[] = [
  bmcAlkanes, bmcAldehydesKetones, bmcStereochemistry,
  behaviouralLearning, behaviouralMemory, behaviouralPersonality, behaviouralStress,
  physiologyAns,
  entomologyVectorControl, entomologyFleas, entomologyBlackflies, entomologyHarm,
];

const courseOf = (lesson: Hb1Lesson) => lesson.id.split('-')[0];

/** The lesson's quiz in the question bank's format (the answer's place is spread over A–D). */
export function hb1QuizQuestions(lesson: Hb1Lesson): BankQuestion[] {
  return lesson.quiz.map(([q, right, wrong, e, t], index) => {
    const position = [...q].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) % 9973, 7) % 4;
    const o = [...wrong];
    o.splice(position, 0, right);
    return { id: `${lesson.quizId}${String(index + 1).padStart(2, '0')}`, q, o, a: position, e, t };
  });
}

export function hb1LessonMeta(lesson: Hb1Lesson): LegacyLessonMeta {
  return {
    id: lesson.id,
    course: courseOf(lesson),
    order: lesson.order,
    title: lesson.title,
    sub: 'Guide',
    icon: '🧫',
    summary: lesson.summary,
    minutes: lesson.minutes,
    sections: lesson.sections.map((section) => ({ id: section.id, title: section.title })),
    qids: hb1QuizQuestions(lesson).map((question) => question.id),
    ptopics: lesson.pastTopics,
    psets: lesson.pastSets,
  };
}

export function hb1LocalLesson(id: string): Hb1Lesson | undefined {
  return HB1_LOCAL_LESSONS.find((lesson) => lesson.id === id);
}

export function hb1LessonBody(lesson: Hb1Lesson): LegacyLessonBody {
  return { sections: lesson.sections, extras: lesson.extras };
}
