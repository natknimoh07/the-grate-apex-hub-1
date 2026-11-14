// One lesson per practice question (owner, 2026-11-14: "after reading a lesson … the users
// sometimes get questions from other lessons"). Some HB1 lessons share a past-question topic
// or a quiz set that spans several lectures (Female, Male Reproductive and Embryology all
// practise the "embryology" past questions; five Excel lessons share "excel-basics"), so the
// same question was practised by every one of them. A question claimed by two or more lessons
// now goes to the one whose own text it matches best: its words are weighed by how rare they
// are among the course's lessons (a word every lesson uses tells nothing). It goes to no
// lesson when its best match is a lesson that did not claim it (it is about another lecture)
// or when two lessons match it almost equally; it stays in the past papers, By topic and the
// custom quiz either way. A lesson's own quiz is never moved.
//
// Used by lesson-sets.mjs. Pure.

const STOP = new Set(
  ('the and for are but not you all any can had her was one our out has his how its may new now old see two way who did get let put say she too use ' +
    'that with have this will your from they been were what when which their there than then them these those into over such only also more most ' +
    'some each very much many does other about after before because while where would could should being between both under above below again ' +
    'true false following correct incorrect statement statements answer answers option options except best describes describe described called ' +
    'known refers refer term used uses using one two three four five first second third example examples type types part parts form forms')
    .split(' ')
);

/** Lower-case words of 3+ letters, without tags or stop words, crudely singular. */
export function words(text) {
  return String(text ?? '')
    .replace(/<[^>]+>/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9α-ω]+/g, ' ')
    .split(' ')
    .filter((word) => word.length >= 3 && !STOP.has(word) && !/^\d+$/.test(word))
    .map((word) => (word.length > 4 && word.endsWith('ies') ? `${word.slice(0, -3)}y` : word.length > 4 && word.endsWith('s') && !word.endsWith('ss') ? word.slice(0, -1) : word));
}

/** Every piece of text in a lesson's blocks. */
function blockTexts(blocks) {
  return (blocks ?? []).flatMap((block) => [
    block.x, block.title, block.name, block.def, block.cap, block.note,
    ...(block.items ?? []).map((item) => (typeof item === 'string' ? item : item.title)),
    ...(block.head ?? []),
    ...(block.rows ?? []).flatMap((row) => row.c),
    ...(block.tags ?? []),
    ...blockTexts(block.blocks),
    ...(block.items ?? []).flatMap((item) => (typeof item === 'string' ? [] : blockTexts(item.blocks))),
  ]).filter((text) => typeof text === 'string');
}

/** A lesson's words: its title (counted three times), summary, sections and its own quiz. */
export function lessonWords(lesson) {
  const quiz = (lesson.quiz ?? []).flatMap(([question, right]) => [question, right]);
  const title = [lesson.title, lesson.title, lesson.title];
  const counts = new Map();
  for (const word of words([...title, lesson.summary, ...lesson.sections.flatMap((section) => [section.title, ...blockTexts(section.blocks)]), ...quiz].join(' '))) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return counts;
}

/** The question's words: its text and its right answer. */
export function questionWords(question) {
  const right = Array.isArray(question.o) && question.a >= 0 ? question.o[question.a] : '';
  return [...new Set(words(`${question.q} ${right}`))];
}

/**
 * Picks one lesson for each question claimed by more than one.
 * `lessons`: [{ id, words: Map }] — every lesson of the course; `claims`: Map<question id, Set<lesson id>>;
 * `questions`: Map<question id, bank question>. Returns Map<question id, lesson id | null>.
 */
export function chooseOwners(lessons, claims, questions, { margin = 1.15 } = {}) {
  const df = new Map();
  for (const lesson of lessons) for (const word of lesson.words.keys()) df.set(word, (df.get(word) ?? 0) + 1);
  const idf = (word) => Math.log((lessons.length + 1) / ((df.get(word) ?? 0) + 0.5));
  const owners = new Map();
  for (const [id, claimants] of claims) {
    if (claimants.size < 2) continue;
    const question = questions.get(id);
    const qWords = question ? questionWords(question) : [];
    const scores = lessons
      .map((lesson) => ({
        id: lesson.id,
        score: qWords.reduce((sum, word) => sum + (lesson.words.has(word) ? idf(word) * (1 + Math.log(lesson.words.get(word))) : 0), 0),
      }))
      .sort((a, b) => b.score - a.score);
    const [best, second] = scores.filter((item) => claimants.has(item.id));
    const other = scores.find((item) => !claimants.has(item.id));
    const clear = best.score > 0 && best.score >= margin * second.score && (!other || best.score >= other.score);
    owners.set(id, clear ? best.id : null);
  }
  return owners;
}
