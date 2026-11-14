// "Built from: …" on every lesson before it is opened (owner, 2026-11-14: "people have problems
// identifying the lecture slide a lesson was built from … add a bracket or something that shows
// the lecture slide(s) the lesson was built from before the user clicks or taps to study. Make
// this the case for all lessons").
//
// Lessons built from this app's topics (HB2): the lecture files their sections cite, named as the
// file the learner has (extension left off) with the slide or page numbers in brackets, e.g.
// "CIRCULATION 1 (slides 41–58)". Slides only a few apart are joined into one span: the slides
// skipped in between are mostly pictures or title slides, and one span is easier to find in the
// deck. HB1 lessons written in the app name their lecture file(s) in `source` (data/hb1-lessons/).
// Pure, for tests (tests/lesson-lecture.test.mjs).
import { getSourceFile } from '@/data/content-catalog';
import type { Lesson, SourceFile, SourceReference } from '@/data/lesson-types';
import { fileName } from '@/data/source-labels';

/** Slides at most this far apart join one span: [41, 42, 44, 45, 48] → "41–48". */
export const SPAN_GAP = 4;
/** At most this many lecture files are named; the rest are counted ("+1 more"). */
const MAX_FILES = 3;

/** [41, 42, 44, 45, 48, 57, 58, 90] → "41–48, 57–58, 90" (48 → 57 is more than 4 slides apart). */
export function slideSpans(numbers: readonly number[], gap = SPAN_GAP): string {
  const sorted = [...new Set(numbers)].sort((a, b) => a - b);
  const spans: string[] = [];
  let start = sorted[0];
  let previous = sorted[0];
  for (const value of [...sorted.slice(1), Number.NaN]) {
    if (value - previous <= gap) {
      previous = value;
      continue;
    }
    spans.push(start === previous ? `${start}` : `${start}–${previous}`);
    start = value;
    previous = value;
  }
  return spans.join(', ');
}

/** The lecture file as the learner has it, without its extension: "CIRCULATION 1 .pptx" → "CIRCULATION 1". */
export function deckName(file: SourceFile): string {
  return fileName(file)
    .replace(/\.(pptx|ppt|pptm|ppsx|pdf|docx|png)$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function lectureRefs(lesson: Pick<Lesson, 'sourceRefs' | 'chunks'>): SourceReference[] {
  return [...(lesson.sourceRefs ?? []), ...lesson.chunks.flatMap((chunk) => chunk.sourceRefs ?? [])];
}

/** The lecture files a lesson was built from, in the order it first cites them, with their slide (or page) numbers. */
export function lessonLectures(lesson: Pick<Lesson, 'sourceRefs' | 'chunks'>): { file: SourceFile; numbers: number[] }[] {
  const byFile = new Map<string, { file: SourceFile; numbers: number[] }>();
  for (const ref of lectureRefs(lesson)) {
    const cited = getSourceFile(ref.sourceId);
    // Lecture material only: textbooks are references, study aids are not the lecturer's.
    if (!cited || cited.role === 'reference' || cited.role === 'study-aid') continue;
    // An exact copy (the PDF export of a deck) counts as the deck itself.
    const file = (cited.duplicateOf && getSourceFile(cited.duplicateOf)) || cited;
    const entry = byFile.get(file.id) ?? { file, numbers: [] };
    const number = ref.slide ?? ref.page;
    if (number !== undefined && !entry.numbers.includes(number)) entry.numbers.push(number);
    byFile.set(file.id, entry);
  }
  return Array.from(byFile.values());
}

const labels = new Map<string, string | null>();

/** "CIRCULATION 1 (slides 41–58)"; several files are joined with "; ". Null when the lesson cites no lecture file. */
export function lessonLectureLabel(lesson: Pick<Lesson, 'id' | 'sourceRefs' | 'chunks'>): string | null {
  const hit = labels.get(lesson.id);
  if (hit !== undefined) return hit;
  const lectures = lessonLectures(lesson);
  const parts = lectures.slice(0, MAX_FILES).map(({ file, numbers }) => {
    if (numbers.length === 0) return deckName(file);
    const unit = file.format === 'pdf' || file.format === 'docx' ? 'page' : 'slide';
    const spans = slideSpans(numbers);
    const plural = /[–,]/.test(spans) ? 's' : '';
    return `${deckName(file)} (${unit}${plural} ${spans})`;
  });
  const more = lectures.length - MAX_FILES;
  const label = parts.length ? `${parts.join('; ')}${more > 0 ? `; +${more} more` : ''}` : null;
  labels.set(lesson.id, label);
  return label;
}
