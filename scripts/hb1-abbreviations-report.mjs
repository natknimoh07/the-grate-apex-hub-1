// Lists what src/data/hb1-lessons/abbreviations.ts adds to the HB1 lessons (each abbreviation spelled out
// the first time a section uses it), so a wrong meaning or an awkward place is easy to spot.
//   node --import ./tests/register.mjs scripts/hb1-abbreviations-report.mjs [lesson-id prefix]
import { HB1_LOCAL_LESSONS } from '@/data/hb1-lessons/index.ts';
import { sectionsWithAbbreviations } from '@/data/hb1-lessons/abbreviations.ts';

const only = process.argv[2];
const texts = (blocks, out = []) => {
  for (const b of blocks ?? []) {
    if (b.k === 'p') out.push(b.x);
    else if (b.k === 'ul') out.push(...b.items);
    else if (b.k === 'table') for (const r of b.rows) out.push(...r.c);
    else if (b.k === 'term') out.push(b.def);
    else if (b.k === 'box' || b.k === 'step') texts(b.blocks, out);
    else if (b.k === 'cards') for (const c of b.items) texts(c.blocks, out);
    else if (b.k === 'illus') { out.push(b.cap); if (b.note) out.push(b.note); }
    else if (b.k === 'fig' && b.cap) out.push(b.cap);
  }
  return out;
};
const plain = (markup) => markup.replace(/<[^>]+>/g, '');
let count = 0;
for (const lesson of HB1_LOCAL_LESSONS) {
  if (only && !lesson.id.startsWith(only)) continue;
  const after = sectionsWithAbbreviations(lesson.id, lesson.sections);
  lesson.sections.forEach((section, s) => {
    const before = texts(section.blocks);
    const now = texts(after[s].blocks);
    before.forEach((text, t) => {
      if (text === now[t]) return;
      // The added brackets: show each with a little of the text before it.
      const a = plain(text);
      const b = plain(now[t]);
      let i = 0;
      while (i < a.length && a[i] === b[i]) i += 1;
      for (const m of b.slice(Math.max(0, i - 25)).matchAll(/.{0,25}[([][^)\]]{3,}[)\]]/g)) {
        if (a.includes(m[0])) continue;
        count += 1;
        console.log(`${lesson.id.padEnd(26)} ${section.id.padEnd(22)} ${m[0]}`);
        break;
      }
    });
  });
}
console.log(`\n${count} texts changed`);
