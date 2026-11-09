// Lists every division in the HB1 lessons that is drawn as a fraction (src/data/hb1-lessons/fractions.ts),
// as  ⟦numerator ∕ denominator⟧  in the sentence, so a wrong split is easy to spot.
//   node --import ./tests/register.mjs scripts/hb1-fractions-report.mjs [lesson-id prefix] [--slashes|--divide]
import { HB1_LOCAL_LESSONS } from '@/data/hb1-lessons/index.ts';
import { SLASH_COURSES, SLASH_LESSONS, divisionsAsFractions } from '@/data/hb1-lessons/fractions.ts';

const only = process.argv.slice(2).find((arg) => !arg.startsWith('--'));
const kind = process.argv.includes('--slashes') ? 'slash' : process.argv.includes('--divide') ? 'divide' : 'all';
const texts = (blocks, out = []) => {
  for (const b of blocks ?? []) {
    if (b.k === 'p') out.push(b.x);
    else if (b.k === 'ul') out.push(...b.items);
    else if (b.k === 'table') { out.push(...b.head); for (const r of b.rows) out.push(...r.c); }
    else if (b.k === 'term') out.push(b.def);
    else if (b.k === 'box' || b.k === 'step') texts(b.blocks, out);
    else if (b.k === 'cards') for (const c of b.items) texts(c.blocks, out);
  }
  return out;
};
const show = (markup) => markup
  .replace(/<frac><n>([\s\S]*?)<\/n><d>([\s\S]*?)<\/d><\/frac>/g, '⟦$1 ∕ $2⟧')
  .replace(/<sup>([^<]*)<\/sup>/g, '^$1').replace(/<sub>([^<]*)<\/sub>/g, '_$1').replace(/<[^>]+>/g, '');
let count = 0;
for (const lesson of HB1_LOCAL_LESSONS) {
  if (only && !lesson.id.startsWith(only)) continue;
  const slashes = SLASH_COURSES.has(lesson.id.split('-')[0]) || SLASH_LESSONS.has(lesson.id);
  for (const section of lesson.sections) {
    for (const text of texts(section.blocks)) {
      const out = divisionsAsFractions(text, { slashes });
      if (out === text) continue;
      const pieces = show(out).match(/.{0,40}⟦[^⟧]*⟧.{0,25}/g) ?? [];
      for (const piece of pieces) {
        const isDivide = /÷/.test(text);
        if (kind === 'slash' && isDivide && !/\//.test(text)) continue;
        if (kind === 'divide' && !isDivide) continue;
        count += 1;
        console.log(`${lesson.id.padEnd(28)} ${piece.replace(/\s+/g, ' ')}`);
      }
      const left = show(out).match(/.{0,30}÷.{0,30}/g);
      if (left) for (const piece of left) console.log(`${lesson.id.padEnd(28)} LEFT AS IT IS: ${piece}`);
    }
  }
}
console.log(`\n${count} fractions`);
