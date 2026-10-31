// Finds questions whose text lost maths symbols, subscripts or fractions when
// they were copied from the original files. Read-only: prints a report.
// Run: node scripts/audit-missing-symbols.mjs [--list]
import { readFileSync, readdirSync } from 'node:fs';

const dir = new URL('../public/curriculum/', import.meta.url);
const list = process.argv.includes('--list');
const checks = [
  ['duplicate options', (q) => new Set(q.o.map((x) => x.trim())).size < q.o.length],
  ['operator or prime cut off at an option edge', (q) => q.o.some((x) => /^\s*[∪∩′=×÷/^]/.test(x) || /[∪∩=×÷/^]\s*$/.test(x))],
  ['fraction, root or power with its number missing', (q) => q.o.some((x) => /=\s*\/|\/\s*$|(^|[^\w])e\^(?![\w({−-])|\^\s*($|[+\s])|=\s*[-−]?\s*±|[A-Za-z]\s?=\s?(\/|$)/.test(x))],
  ['subscript lost (G1/G2 phase)', (q) => q.o.some((x) => /^(G[,\s]?|)\s?phase$/i.test(x.trim()) && x.trim().toLowerCase() !== 'phase' ? /^G[,\s]?phase$/i.test(x.trim()) : /^phase$/i.test(x.trim()))],
  ['option is a single stray symbol', (q) => q.o.some((x) => /^[\s\p{P}\p{S}]+$/u.test(x))],
  ['stem has a missing term ("of .")', (q) => /\b(of|by|to|and|with|from)\s+[.?,]/.test(q.q) || /[=<>≤≥]\s*[,.?]/.test(q.q)],
];
let total = 0;
const perCourse = {};
const flagged = new Map();
for (const file of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
  let data;
  try { data = JSON.parse(readFileSync(new URL(file, dir), 'utf8')); } catch { continue; }
  const course = file.replace('.json', '');
  for (const set of data.sets ?? []) {
    for (const q of set.questions ?? []) {
      if (!Array.isArray(q.o) || !q.o.length) continue;
      const hits = checks.filter(([, test]) => test(q)).map(([name]) => name);
      // a repeated option is also normal in pick-from-a-shared-list matching sets
      if (hits.length && q.o.length > 8) continue;
      total++;
      if (!hits.length) continue;
      (perCourse[course] ??= { questions: 0, flagged: 0 }).flagged++;
      flagged.set(`${course}:${q.id}`, { hits, q });
    }
    for (const q of set.questions ?? []) (perCourse[course] ??= { questions: 0, flagged: 0 }).questions++;
  }
}
console.log(`Checked ${total} multiple-choice questions.`);
for (const [course, n] of Object.entries(perCourse).sort((a, b) => b[1].flagged - a[1].flagged)) console.log(`${course.padEnd(18)} ${String(n.flagged).padStart(4)} flagged of ${n.questions}`);
console.log(`Total flagged: ${flagged.size}`);
if (list) for (const [key, { hits, q }] of flagged) console.log(`\n${key}  [${hits.join('; ')}]\n  ${q.q}\n  ${JSON.stringify(q.o)}`);
