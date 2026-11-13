// The message box in a chat must stay on screen at any app zoom (owner, 2026-11-12: "the area where
// I type to text someone still cannot be seen"). Since 2026-10-31 src/lib/web-zoom.ts divides every
// window size React Native reports by the zoom, for the whole app. The chat had its own copy of that
// correction from 2026-10-19, so its height was divided twice: at 80–90% zoom the chat was taller than
// the window and the message box fell below the bottom edge (at 110–125% it left a gap instead).
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the whole app corrects window sizes for the zoom once, in web-zoom.ts', () => {
  const zoom = read('src/lib/web-zoom.ts');
  assert.match(zoom, /window\.height = Math\.round\(window\.height \/ zoom\)/);
  assert.match(zoom, /Dimensions\.addEventListener\('change'/);
});

test('the chat uses the window height as it is (no second zoom correction)', () => {
  const shell = read('src/components/chat/chat-shell.tsx');
  assert.doesNotMatch(shell, /windowHeight\s*\/\s*zoom/, 'useWindowDimensions is already corrected by web-zoom.ts: dividing again pushes the message box off the screen');
  // The browser's visual viewport (the part above a phone keyboard) is not corrected by web-zoom.ts,
  // so that one still needs the zoom.
  assert.match(shell, /viewportArea\.height \/ zoom/);
});
