// Finds questions whose text lost maths symbols, subscripts or fractions when
// they were copied from the original files. Read-only: prints a report.
// Run: node scripts/audit-missing-symbols.mjs [--list]
import { readFileSync, readdirSync } from 'node:fs';

const dir = new URL('../public/curriculum/', import.meta.url);
const list = process.argv.includes('--list');
// Reviewed by hand on 2026-10-31: flagged by the patterns but the text is complete.
export const REVIEWED_OK = new Set([
  'algebra:1ivg7sf',
  'algebra:3li26v',
  'algebra:4ryoq8',
  'algebra:9slhhc',
  'algebra:dv7oun',
  'algebra:g0wq3n',
  'algebra:nrtzda',
  'algebra:qd5dc0',
  'algebra:zctpsw',
  'behavioural:1jy6tw8',
  'behavioural:1o3pb12',
  'behavioural:1vpm3ra',
  'behavioural:s2z6mi',
  'biolchem:1vrfzb7',
  'bmc:1aip2nt',
  'compapp:14dwcsa',
  'compapp:14g8zrw',
  'compapp:16dw2wt',
  'compapp:1762lat',
  'compapp:17exd12',
  'compapp:17i069e',
  'compapp:18brueq',
  'compapp:18dut31',
  'compapp:1ajg8g7',
  'compapp:1cvujwt',
  'compapp:1e428yt',
  'compapp:1eut4qj',
  'compapp:1fujysd',
  'compapp:1fw49xr',
  'compapp:1hofxgr',
  'compapp:1pn7emh',
  'compapp:1qf9po2',
  'compapp:1qwyup8',
  'compapp:1st05xg',
  'compapp:1x9mwvs',
  'compapp:2tnh9t',
  'compapp:6fcj0l',
  'compapp:acj22q',
  'compapp:bfde4m',
  'compapp:bk3fq6',
  'compapp:egf0ya',
  'compapp:ekldag',
  'compapp:g7feqc',
  'compapp:gioxcu',
  'compapp:h7pk9v',
  'compapp:ipa37p',
  'compapp:ocye04',
  'compapp:q764e0',
  'compapp:somhk8',
  'compapp:sy5g0j',
  'compapp:ty6bbr',
  'compapp:z9tlqt',
]);
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
      if (!hits.length || REVIEWED_OK.has(`${course}:${q.id}`)) continue;
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
