// Divisions in HB1 lessons drawn as fractions (owner, 2026-11-07: "some formulas are written in plain
// math with x and division symbols … it is hard to read and identify the correct order of operations,
// so use math representations like the bar in divisions"). Applied when the lessons load (like the
// Basic Medical Chemistry pictures), so the lesson files keep their plain text.
//
//   a ÷ b  (every course)   becomes  <frac><n>a</n><d>b</d></frac>
//   a/b    (maths lessons)  likewise, but only when written tight (no spaces) between numbers,
//                           letters or brackets, and never for units (g/mL) or word pairs (and/or).
//
// The parts of "a ÷ b" are read from the text around the sign, a term at a time:
// - a number, symbol or bracket (24, Hct, C₁, (1 − 0.40)) is one term, with its unit (25 mg); on the
//   left a product stays whole (Hct × 10 ÷ RBC is (Hct × 10)/RBC, as it is read left to right);
// - words (mass of solute ÷ mass of solution) take up to four words, up to "=", a comma, a bracket,
//   "×" or a little word such as "is" or "where".
// Brackets that only grouped the division are dropped: the bar does their job. Pure, for tests
// (tests/hb1-fractions.test.mjs; `node --import ./tests/register.mjs scripts/hb1-fractions-report.mjs`
// lists every conversion).
import type { Block, LegacySection } from '@/data/legacy-study';

/** Lessons whose slashes are divisions (in the others "/" mostly means "and": Na⁺/K⁺, NAD⁺/NADH). */
export const SLASH_COURSES = new Set(['algebra', 'stats']);
export const SLASH_LESSONS = new Set(['medgen-probability', 'medgen-04', 'biochemistry-prac-units', 'biochemistry-prac-lab-skills']);

// ── The text as units: one tag, one entity or one character each ────────────
type Unit = string;
const units = (markup: string): Unit[] => markup.match(/<[^>]+>|&[a-z]+;|[\s\S]/gu) ?? [];
const isTag = (unit: Unit | undefined) => unit !== undefined && unit.length > 1 && unit.startsWith('<');
const tagName = (unit: Unit) => /^<\/?([a-z]+)/.exec(unit)?.[1] ?? '';
const isClose = (unit: Unit) => unit.startsWith('</');
const isSpace = (unit: Unit | undefined) => unit === ' ' || unit === ' ';
const plain = (list: readonly Unit[]) => list.filter((unit) => !isTag(unit)).join('');

const STOP_CHARS = new Set(['=', '≈', '≠', ',', ';', ':', '+', '−', '→', '⇒', '≥', '≤', '<', '>', '±', '∴', '≡', '÷', '|', '?', '“', '”', '"', '×', '·', '…', '∫', '∮']);
/**
 * "ln x/ln b", "2 ln x/x": a division next to a function written without brackets is ambiguous, so it is
 * left as written. (Not "lim": everything after a limit is what it acts on.)
 */
const FUNCTION = /^(ln|log\S*|sin|cos|tan|sec|cosec|csc|cot|exp|arcsin|arccos|arctan)$/;
/** Superscripts that follow a bracket: "(y/x)^(2/3)", "(3/4)ˣ" keep their brackets. */
const RAISED = /^[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣʸ⁻⁺]/;
const LEFT_STOP = new Set(['is', 'are', 'was', 'were', 'be', 'so', 'then', 'and', 'or', 'by', 'as', 'that', 'which', 'gives', 'give', 'means', 'equals', 'divide', 'use', 'using', 'take', 'takes', 'into', 'with', 'per', 'from', 'than', 'its', 'the', 'a', 'an', 'to', 'for', 'when', 'if', 'where', 'on', 'at', 'holds', 'has', 'have', 'needs', 'contains']);
const RIGHT_STOP = new Set(['is', 'are', 'was', 'were', 'so', 'then', 'and', 'or', 'which', 'gives', 'give', 'where', 'when', 'if', 'for', 'to', 'in', 'at', 'as', 'than', 'that', 'by', 'with', 'per', 'because', 'since', 'while', 'but', 'the', 'a', 'an', 'on', 'from']);
const MAX_WORDS = 4;

// Units of measurement (deci- only as dL, so ds in ds/dt stays a variable).
const UNIT = /^(?:[µunmkc]?(?:g|L|l|M|m|s|mol|Osm|Eq)|d[Ll]|min|h|hr|ppm|%|°C|IU|U|kJ|J|kcal|cal|mmHg|Pa|kPa|mOsm)(?:[²³23])?(?:\/(?:[µunmkc]?(?:g|L|l|M|m|s|mol|Osm|Eq)|d[Ll]|min|h|hr|day|kg|unit)(?:[²³23])?)?$/;
const isUnit = (text: string) => UNIT.test(text);
/** A number, symbol or bracket (one term), not a word of a phrase. */
const isSymbolic = (text: string) => /[0-9()[\]√πΣµα-ω]/.test(text) || !/[a-z]/.test(text) || text.length <= 2 || /^[A-Z][a-z]{1,2}$/.test(text);
const isWord = (text: string) => /^[A-Za-z][A-Za-z'’-]*$/.test(text);

type Term = { from: number; to: number; text: string }; // list[from .. to] inclusive, in reading order

/**
 * The term next to `at`, reading outward (step −1 to the left, +1 to the right). A term ends at a space,
 * a sign, an unmatched bracket or a tag that opened outside it; brackets and sub/superscripts are kept whole.
 */
function readTerm(list: readonly Unit[], at: number, step: -1 | 1, tight: boolean): Term | null {
  const opening = step === 1 ? '([{' : ')]}';
  const closing = step === 1 ? ')]}' : '([{';
  const pair: Record<string, string> = step === 1 ? { '(': ')', '[': ']', '{': '}' } : { ')': '(', ']': '[', '}': '{' };
  const brackets: string[] = [];
  const tags: string[] = [];
  let last = -1;
  for (let i = at; list[i] !== undefined; i += step) {
    const unit = list[i];
    if (isTag(unit)) {
      const name = tagName(unit);
      if (name === 'frac' || name === 'n' || name === 'd') break;
      const opens = step === 1 ? !isClose(unit) : isClose(unit);
      if (opens) tags.push(name);
      else if (tags[tags.length - 1] === name) tags.pop();
      else break; // opened outside this term
      last = i;
      continue;
    }
    const inScript = tags.some((name) => name === 'sub' || name === 'sup');
    if (brackets.length) {
      if (pair[brackets[brackets.length - 1]] === unit) brackets.pop();
      else if (opening.includes(unit)) brackets.push(unit);
      last = i;
      continue;
    }
    if (inScript) { last = i; continue; }
    if (opening.includes(unit)) { brackets.push(unit); last = i; continue; }
    if (closing.includes(unit)) break;
    if (isSpace(unit) || unit === '\n') break;
    if (STOP_CHARS.has(unit)) break;
    if (unit === '/' && (tight || !isUnitSlash(list, i, step))) break;
    if (unit === '-' && (isSpace(list[i + step]) || isSpace(list[i - step]))) break; // a spaced minus
    if (unit === '.' && step === 1 && !/[0-9]/.test(list[i + 1] ?? '')) break; // the end of a sentence
    last = i;
  }
  if (last < 0 || brackets.length) return null;
  // Tags still open at the term's edge belong to the next term (checked for the whole side later).
  const from = Math.min(at, last);
  const to = Math.max(at, last);
  const text = plain(list.slice(from, to + 1));
  return text.trim() ? { from, to, text } : null;
}

/** "mg/ml" in "0.05 mg/ml": a slash inside a unit is part of the term. */
function isUnitSlash(list: readonly Unit[], at: number, step: -1 | 1) {
  let a = at - 1;
  while (list[a] !== undefined && !isSpace(list[a]) && !STOP_CHARS.has(list[a])) a -= 1;
  let b = at + 1;
  while (list[b] !== undefined && !isSpace(list[b]) && !STOP_CHARS.has(list[b]) && list[b] !== ')' && list[b] !== ',') b += 1;
  void step;
  return isUnit(plain(list.slice(a + 1, b)));
}

function skipSpaces(list: readonly Unit[], at: number, step: -1 | 1) {
  let i = at;
  while (isSpace(list[i])) i += step;
  return i;
}

/** The side of a division: list[from .. to] inclusive, or null. */
function sideOf(list: readonly Unit[], sign: number, step: -1 | 1, tight: boolean): { from: number; to: number } | null {
  const begin = tight ? sign + step : skipSpaces(list, sign + step, step);
  const first = readTerm(list, begin, step, tight);
  if (!first) return null;
  let edge = step === 1 ? first.to : first.from;
  if (tight) return { from: Math.min(begin, edge), to: Math.max(begin, edge) };
  const take = (term: Term) => { edge = step === 1 ? term.to : term.from; };
  const next = () => readTerm(list, skipSpaces(list, edge + step, step), step, false);
  if (isSymbolic(first.text) || isUnit(first.text)) {
    // A quantity with its unit: "25 mg" (left: the unit is next to the sign), "0.05 mg/ml" (right).
    const neighbour = next();
    if (step === -1 && isUnit(first.text) && neighbour && /^[0-9.,]+$/.test(neighbour.text)) take(neighbour);
    else if (step === 1 && /[0-9]$/.test(first.text) && neighbour && isUnit(neighbour.text)) take(neighbour);
    else if (!isSymbolic(first.text)) return null;
    // To the left, a product stays whole: "Hct × 10 ÷ RBC".
    while (step === -1) {
      const at = skipSpaces(list, edge - 1, -1);
      if (list[at] !== '×' && list[at] !== '·') break;
      const factor = readTerm(list, skipSpaces(list, at - 1, -1), -1, false);
      if (!factor || !isSymbolic(factor.text)) break;
      take(factor);
    }
    // "mL of solution": a unit named in words.
    if (step === 1 && isUnit(first.text)) joinedWords(1);
  } else {
    // Words: "mass of solute", "concentration after mixing".
    if (!valid(first)) return null;
    joinedWords(1);
  }
  return { from: Math.min(begin, edge), to: Math.max(begin, edge) };

  function valid(term: Term | null): term is Term {
    return term !== null && isWord(term.text) && !(step === 1 ? RIGHT_STOP : LEFT_STOP).has(term.text.toLowerCase());
  }
  // Up to MAX_WORDS words; "of" and "in" join a phrase ("mass of solute") but never end one.
  function joinedWords(start: number) {
    for (let words = start; words < MAX_WORDS; ) {
      const term = next();
      if (!valid(term)) break;
      if (JOIN.has(term.text.toLowerCase())) {
        const after = readTerm(list, skipSpaces(list, (step === 1 ? term.to : term.from) + step, step), step, false);
        if (!valid(after) || JOIN.has(after.text.toLowerCase())) break;
        take(term);
        take(after);
        words += 2;
        continue;
      }
      take(term);
      words += 1;
    }
  }
}
const JOIN = new Set(['of', 'in']);

function balanced(side: readonly Unit[]) {
  const open: string[] = [];
  for (const unit of side) {
    if (!isTag(unit)) continue;
    if (isClose(unit)) {
      if (open.pop() !== tagName(unit)) return false;
    } else open.push(tagName(unit));
  }
  return open.length === 0;
}

/** A side that is one bracketed group, e.g. "(1 − haematocrit)", loses its brackets: the bar groups it. */
function unwrap(text: string): string {
  const side = text.trim();
  const open = side[0];
  const close = open === '(' ? ')' : open === '[' ? ']' : '';
  if (!close || !side.endsWith(close)) return side;
  let depth = 0;
  for (let i = 0; i < side.length; i += 1) {
    if (side[i] === open) depth += 1;
    else if (side[i] === close) depth -= 1;
    if (depth === 0 && i < side.length - 1) return side;
  }
  return side.slice(1, -1).trim();
}

// Word pairs that keep their slash, and units the slash test must not take for numbers.
const WORD_PAIRS = /^(and\/or|either\/or|w\/v|v\/v|w\/w|m\/v|v\/w|yes\/no|true\/false|on\/off|in\/out|he\/she|his\/her|s\/he|km\/h)$/i;

function slashIsDivision(left: string, right: string) {
  if (WORD_PAIRS.test(`${left}/${right}`)) return false;
  // Units: a pair that is one (g/L, mol/L, m/s), or a side of more than one letter (mg, mol); a single
  // letter on its own (h, s, m) is a variable in these lessons.
  const unit = (side: string) => side.length > 1 && isUnit(side);
  if (unit(left) || unit(right) || isUnit(`${left}/${right}`)) return false;
  if (FUNCTION.test(right)) return false;
  // Words (three letters or more, no digits, no brackets) are names, not numbers: "sin/cos", "mean/median".
  const wordy = (side: string) => /^[A-Za-z]{3,}$/.test(side);
  if (wordy(left) || wordy(right)) return false;
  return /[0-9A-Za-zα-ωπ√)]/.test(left) && /[0-9A-Za-zα-ωπ√(]/.test(right);
}

/** One text with its divisions as fractions. `slashes`: also tight a/b divisions. */
export function divisionsAsFractions(markup: string, options: { slashes?: boolean } = {}): string {
  if (!markup.includes('÷') && !(options.slashes && markup.includes('/'))) return markup;
  let list = units(markup);
  let script = 0;
  for (let i = 0; i < list.length; i += 1) {
    const unit = list[i];
    if (isTag(unit)) {
      const name = tagName(unit);
      if (name === 'sub' || name === 'sup') script += isClose(unit) ? -1 : 1;
      continue;
    }
    const divide = unit === '÷';
    const slash = Boolean(options.slashes) && unit === '/' && script === 0 && !isSpace(list[i - 1]) && !isSpace(list[i + 1]) && list[i - 1] !== undefined && list[i + 1] !== undefined;
    if (!divide && !slash) continue;
    const left = sideOf(list, i, -1, slash);
    const right = sideOf(list, i, 1, slash);
    if (!left || !right) continue;
    // A side that opened a tag takes its closing tag too: "÷ <b>litres of solution</b>".
    while (!balanced(list.slice(i + 1, right.to + 1)) && isTag(list[right.to + 1]) && isClose(list[right.to + 1]!)) right.to += 1;
    while (!balanced(list.slice(left.from, i)) && isTag(list[left.from - 1]) && !isClose(list[left.from - 1]!)) left.from -= 1;
    const numerator = list.slice(left.from, i).join('').trim();
    const denominator = list.slice(i + 1, right.to + 1).join('').trim();
    if (!balanced(units(numerator)) || !balanced(units(denominator))) continue;
    const top = plain(units(numerator));
    const bottom = plain(units(denominator));
    if (!top.trim() || !bottom.trim() || top.includes('÷') || bottom.includes('÷')) continue;
    // A slash in a side is a division too (a/b/c, a date): leave it as written. A unit's slash is fine.
    if ([top, bottom].some((side) => side.split(/\s+/).some((word) => word.includes('/') && !isUnit(word.replace(/[(),]/g, ''))))) continue;
    if (slash) {
      if (!slashIsDivision(top, bottom)) continue;
      if (list[left.from - 1] === '/' || list[right.to + 1] === '/') continue;
      // "16 000/3": the space separates thousands, so the number does not start at the slash's left.
      if (/^[0-9]{3}$/.test(top) && isSpace(list[left.from - 1]) && /[0-9]/.test(list[left.from - 2] ?? '')) continue;
    }
    if (FUNCTION.test(wordBefore(list, left.from))) continue;
    // d/dx(y²): only dx goes under the bar; the bracket it acts on follows the fraction.
    let below = denominator;
    let rest = '';
    const operator = /^d[²³]?$/.test(top) ? /^(d[a-z](?:[²³]|<sup>[23]<\/sup>)?)([([][\s\S]*)$/.exec(denominator) : null;
    if (operator) { below = operator[1]; rest = operator[2]; }
    // Brackets round the whole division that only grouped it go: the bar does that now. They stay when
    // they belong to a function (ln(x/y), P(b/a)), carry a power ((3/4)ˣ, (y/x)^(2/3)) or hold a side
    // note ("3y = 2x − 1 (2/3) and …"): only brackets next to an operator, or right before a letter or
    // bracket ((2/3)x), are taken for grouping.
    let from = left.from;
    let to = right.to;
    while (list[from - 1] === '(' && list[to + 1] === ')' && !rest) {
      const owner = list[from - 2];
      const after = list[to + 2];
      if ((owner !== undefined && !isTag(owner) && /[A-Za-z0-9′'²³)]/.test(owner)) || (after !== undefined && (after === '<sup>' || (!isTag(after) && RAISED.test(after))))) break;
      const outsideBefore = nearest(list, from - 2, -1);
      const outsideAfter = nearest(list, to + 2, 1);
      const grouping = (outsideBefore === undefined || GROUPING.has(outsideBefore)) || (outsideAfter !== undefined && GROUPING.has(outsideAfter)) || (after !== undefined && /^[A-Za-z0-9([√]/.test(after));
      if (!grouping) break;
      from -= 1;
      to += 1;
    }
    const fraction = `<frac><n>${unwrap(numerator)}</n><d>${unwrap(below)}</d></frac>${rest}`;
    const before = list.slice(0, from);
    list = [...before, fraction, ...list.slice(to + 1)];
    i = before.length;
  }
  return list.join('');
}

/** Signs next to brackets that show the brackets group a calculation. */
const GROUPING = new Set(['=', '+', '−', '×', '·', '≈', '÷', '/', '(', '[', '→', '±']);

/** The nearest unit that is not a space or a tag, reading from `at`. */
function nearest(list: readonly Unit[], at: number, step: -1 | 1): Unit | undefined {
  let i = at;
  while (list[i] !== undefined && (isSpace(list[i]) || isTag(list[i]))) i += step;
  return list[i];
}

/** The word just before a position, past one space ("ln" in "2 ln x/x"). */
function wordBefore(list: readonly Unit[], at: number) {
  let i = at - 1;
  if (!isSpace(list[i])) return '';
  i -= 1;
  const chars: string[] = [];
  for (; list[i] !== undefined && !isSpace(list[i]); i -= 1) if (!isTag(list[i])) chars.unshift(list[i]);
  return chars.join('');
}

// ── Whole lessons ─────────────────────────────────────────────────────────────

function blocksWithFractions(blocks: readonly Block[], slashes: boolean): Block[] {
  const fix = (text: string) => divisionsAsFractions(text, { slashes });
  return blocks.map((block): Block => {
    switch (block.k) {
      case 'p': return { ...block, x: fix(block.x) };
      case 'ul': return { ...block, items: block.items.map(fix) };
      case 'table': return { ...block, head: block.head.map(fix), rows: block.rows.map((row) => ({ c: row.c.map(fix) })) };
      case 'term': return { ...block, def: fix(block.def) };
      case 'box': return { ...block, blocks: blocksWithFractions(block.blocks, slashes) };
      case 'reveal': return { ...block, blocks: blocksWithFractions(block.blocks, slashes) };
      case 'step': return block.blocks ? { ...block, blocks: blocksWithFractions(block.blocks, slashes) } : block;
      case 'cards': return { ...block, items: block.items.map((item) => ({ ...item, blocks: blocksWithFractions(item.blocks, slashes) })) };
      default: return block;
    }
  });
}

export function sectionsWithFractions(lessonId: string, sections: readonly LegacySection[]): LegacySection[] {
  const slashes = SLASH_COURSES.has(lessonId.split('-')[0]) || SLASH_LESSONS.has(lessonId);
  return sections.map((section) => ({ ...section, blocks: blocksWithFractions(section.blocks, slashes) }));
}
