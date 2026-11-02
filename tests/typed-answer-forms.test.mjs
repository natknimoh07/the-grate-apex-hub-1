// Typed answers written another way are still marked right (owner, 2026-11-02:
// "15 sec, 15 s and 15 seconds"); different answers are still marked wrong.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';

const { typedAnswerMatches } = await import('@/data/questions');

const right = (input, ...accept) => assert.ok(typedAnswerMatches(input, accept), `"${input}" should match ${JSON.stringify(accept)}`);
const wrong = (input, ...accept) => assert.ok(!typedAnswerMatches(input, accept), `"${input}" should NOT match ${JSON.stringify(accept)}`);

describe('units written any common way', () => {
  it('time', () => {
    for (const input of ['15 s', '15 sec', '15 secs', '15 seconds', '15s', '15sec', '15-second', 'fifteen seconds', '15']) right(input, '15 seconds');
    for (const input of ['5 min', '5 mins', '5 minutes', 'five minutes']) right(input, '5 min');
    right('2 hrs', '2 hours');
    right('120 msec', '120 ms');
    wrong('15 min', '15 seconds');
    wrong('15 ms', '15 s');
    wrong('16 seconds', '15 seconds');
  });
  it('volume, pressure, mass, length', () => {
    right('70 millilitres', '70 mL');
    right('70ml', '70 mL');
    right('5 litres', '5 L');
    right('5 liters', '5 L');
    right('120 mm Hg', '120 mmHg');
    right('120 millimetres of mercury', '120 mmHg');
    right('7.5 micrometres', '7.5 µm');
    right('7.5 um', '7.5 μm');
    right('2 grams', '2 g');
    wrong('5 mL', '5 L');
    wrong('2 mg', '2 g');
  });
  it('percent, temperature, times', () => {
    right('65 percent', '65%');
    right('65 per cent', '65%');
    right('37 degrees', '37 °C');
    right('37 degrees celsius', '37°C');
    right('30 times', 'About 30x');
    right('30-fold', '30x');
    right('72 beats per minute', '72 bpm');
    wrong('56%', '65%');
  });
});

describe('numbers', () => {
  it('words, ordinals and roman numerals', () => {
    right('thirty-one', '31');
    right('31', 'thirty one');
    right('fifth', '5th');
    right('type 2', 'Type II');
    right('complex iv', 'Complex 4');
    right('CN 7', 'CN VII');
    wrong('type 1', 'Type II');
  });
  it('the same number written differently, and ranges', () => {
    right('171.30', '171.3');
    right('3000', '3,000');
    right('6.78', '6.775-6.785');
    right('6.775', '6.775-6.785');
    right('128', '127.5-128.5');
    right('60 to 100', '60-100');
    wrong('6.79', '6.775-6.785');
    wrong('171.4', '171.3');
    wrong('17.13', '171.3');
  });
});

describe('spelling, articles and order', () => {
  it('British and American spelling', () => {
    right('hemoglobin', 'haemoglobin');
    right('edema', 'oedema');
    right('esophagus', 'oesophagus');
    right('anemia', 'anaemia');
    right('center', 'centre');
    right('stabilizing', 'stabilising');
    right('tumor', 'tumour');
    right('estrogen', 'oestrogen');
  });
  it('a leading "the" or "about"', () => {
    right('the sternal angle', 'sternal angle');
    right('about 30x', '30x');
    wrong('band', 'A band');
  });
  it('lists in any order', () => {
    right('K+ and Na+', 'Na+ and K+');
    right('potassium, sodium', 'sodium and potassium');
    wrong('sodium and chloride', 'sodium and potassium');
  });
  it('the existing rules still hold', () => {
    wrong('NADH', 'NADPH');
    right('malonyl coa', 'Malonyl-CoA');
    right('{0, -1, -2, -3}', '{−3, −2, −1, 0}');
  });
});

describe('every bank answer is still accepted as written', () => {
  it('HB1 and HB2 typed answers match themselves', () => {
    for (const file of readdirSync('public/curriculum').filter((name) => name.endsWith('.json'))) {
      const bank = JSON.parse(readFileSync(`public/curriculum/${file}`, 'utf8'));
      for (const question of (bank.sets ?? []).flatMap((set) => set.questions)) {
        if (question.kind !== 'input' || !question.ans) continue;
        const answer = String(question.ans);
        right(answer, answer);
        // A range answer ("6.775-6.785") also takes a number inside it.
        const range = /^(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)$/.exec(answer);
        if (range) right(String((Number(range[1]) + Number(range[2])) / 2), answer);
      }
    }
  });
});
