// Opening the Ask AI side panel narrows the page (useLayoutWidth), which can turn a two-column
// layout into one. If the layout builds a different tree for each width, everything inside is
// thrown away and rebuilt: "Explain it more simply" then closed the panel it had just opened
// (on windows about 1024–1290 px wide, e.g. a 1920 px laptop at 150% scaling), and anything
// typed in the lesson step was lost (owner, 2026-11-12: "explain it more simply does not work").
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Columns keeps the same views at every width (only styles change)', () => {
  const source = read('src/components/ui/screen.tsx');
  const start = source.indexOf('export function Columns');
  assert.ok(start >= 0, 'Columns is missing from screen.tsx');
  const body = source.slice(start, source.indexOf('\nfunction ', start + 1) === -1 ? undefined : source.indexOf('\nfunction ', start + 1));
  assert.equal(body.match(/\breturn\b/g)?.length, 1, 'Columns must have one return: a different tree per width rebuilds the lesson when the side panel opens');
  assert.match(body, /key="main"/, 'the main column needs a key, so it is moved, not rebuilt, when the order changes on phones');
  assert.match(body, /key="side"/);
});

test('"Explain it more simply" opens the side panel and asks at once', () => {
  const ai = read('src/components/learning/ai-study.tsx');
  assert.match(ai, /export function ExplainSimplyButton/);
  assert.match(ai, /openSidePanel\(\{ id: panelId, title, subtitle: focus, content: <AskAiPanel key=\{question\} lesson=\{lesson\} focus=\{focus\} autoAsk=\{question\} docked \/> \}\)/);
  assert.match(ai, /if \(!autoAsk \|\| asked\.current\) return;\s*asked\.current = true;\s*void send\(autoAsk\);/);
});
