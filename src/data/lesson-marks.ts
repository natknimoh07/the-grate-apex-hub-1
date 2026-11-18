// Bold, italics, highlights, bullets and numbers in lesson text (owner, 2026-11-17: "add bullets and
// numbering in the lessons as well as highlighting [and] italicising important stuff, so when the
// user is reading they are able to identify the key points … more easily").
//
// Written in a lesson's text (teaching paragraphs, lecture paragraphs, key points) as:
//   **bold**         a key term or number
//   *italic*         a contrast or emphasis ("*not*", "*before*")
//   ==highlight==    the one line to remember in a section
//   "\n- item"       a bulleted list (one item per line)
//   "\n1. item"      a numbered list (the numbers are counted for you)
// Lines before or after a list are ordinary text. Text without marks is shown as before, so topics
// that have no marks are unchanged. Pure, for tests (tests/lesson-marks.test.mjs).

export type MarkSegment = { kind: 'text'; text: string } | { kind: 'list'; ordered: boolean; items: string[] };

const BULLET = /^\s*-\s+(.*)$/;
const NUMBERED = /^\s*\d+[.)]\s+(.*)$/;

/** Splits a paragraph into its text and its lists: "Two reasons:\n1. a\n2. b" → text, then a numbered list. */
export function markSegments(text: string): MarkSegment[] {
  const out: MarkSegment[] = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const bullet = BULLET.exec(line);
    const numbered = bullet ? null : NUMBERED.exec(line);
    const last = out[out.length - 1];
    if (bullet || numbered) {
      const item = (bullet ?? numbered)![1].trim();
      const ordered = !bullet;
      if (last?.kind === 'list' && last.ordered === ordered) last.items.push(item);
      else out.push({ kind: 'list', ordered, items: [item] });
    } else if (last?.kind === 'text') last.text = `${last.text} ${line}`;
    else out.push({ kind: 'text', text: line });
  }
  return out;
}

const MARKS = [
  { mark: '**', tag: 'b' },
  { mark: '==', tag: 'mark' },
  { mark: '*', tag: 'i' },
] as const;

/**
 * Turns the marks into the lesson pages' tags (<b>, <i>, <mark>; parseRich in legacy-questions.ts).
 * Works on text that is already escaped and may hold tags (e.g. <term d="…">): marks inside a tag are left alone.
 */
export function marksToTags(text: string): string {
  const open = { b: false, mark: false, i: false };
  let out = '';
  let inTag = false;
  for (let i = 0; i < text.length; ) {
    const ch = text[i];
    if (inTag) {
      out += ch;
      if (ch === '>') inTag = false;
      i += 1;
      continue;
    }
    if (ch === '<') {
      inTag = true;
      out += ch;
      i += 1;
      continue;
    }
    const hit = MARKS.find(({ mark }) => text.startsWith(mark, i));
    if (hit) {
      out += open[hit.tag] ? `</${hit.tag}>` : `<${hit.tag}>`;
      open[hit.tag] = !open[hit.tag];
      i += hit.mark.length;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

/** The text without its marks, lists written as sentences on one line (for Ask AI, previews and search). */
export function stripMarks(text: string): string {
  return markSegments(text)
    .map((segment) => (segment.kind === 'text' ? segment.text : segment.items.join(' ')))
    .join(' ')
    .replace(/\*\*|==|\*/g, '');
}

/** What is wrong with a text's marks (empty when they are fine): an unclosed mark, a space just inside one, an empty list item. */
export function marksProblems(text: string): string[] {
  const problems: string[] = [];
  for (const segment of markSegments(text)) {
    for (const part of segment.kind === 'text' ? [segment.text] : segment.items) {
      const where = `"${part.slice(0, 70)}"`;
      if (!part.replace(/\*\*|==|\*/g, '').trim()) problems.push(`an empty line or list item in ${where}`);
      const open = { b: false, mark: false, i: false };
      for (let i = 0; i < part.length; ) {
        const hit = MARKS.find(({ mark }) => part.startsWith(mark, i));
        if (!hit) { i += 1; continue; }
        const after = part[i + hit.mark.length] ?? '';
        const before = part[i - 1] ?? '';
        if (!open[hit.tag] && (!after || /\s/.test(after))) problems.push(`a space after an opening ${hit.mark} in ${where}`);
        if (open[hit.tag] && /\s/.test(before)) problems.push(`a space before a closing ${hit.mark} in ${where}`);
        open[hit.tag] = !open[hit.tag];
        i += hit.mark.length;
      }
      for (const { mark, tag } of MARKS) if (open[tag]) problems.push(`an unclosed ${mark} in ${where}`);
    }
  }
  return problems;
}

/** True when the text uses any marks or list lines. */
export const hasMarks = (text: string) => /\*|==|\n/.test(text);
