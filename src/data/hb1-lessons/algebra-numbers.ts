// Algebra → Numbers, Intervals, Radicals, Absolute Value and Inequalities. A lesson added in the
// app (owner, 2026-11-04: "you could even add more sections and lessons … if necessary"): the
// MATH 157 past papers ask about these topics, but no deck in the folder teaches them, so they are
// taught here from standard algebra (textbook methods) and worked on the past-paper questions.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraNumbers: Hb1Lesson = {
  id: 'algebra-numbers',
  order: 1.5,
  title: 'Number Classes, Intervals, Radicals, Absolute Value and Inequalities',
  summary: 'Added for the past papers: classifying numbers (natural, whole, integer, rational, irrational, real); set-builder and interval notation; simplifying radicals and surds; linear, quadratic and rational inequalities by sign analysis; and absolute-value equations and inequalities, all worked on past-paper questions',
  minutes: 24,
  source: 'MATH 157 Past Questions 1 and 2 (no lecture deck)',
  quizId: 'alnm',
  quizName: 'Quiz · Numbers, Intervals and Inequalities (lesson)',
  pastSets: ['s12', 's13'],
  pastTopics: ['numbers-sets-radicals', 'absolute-value-inequalities'],
  sections: [
    {
      id: 'nm-classes',
      title: 'Classifying numbers',
      kicker: 'Which sets does a number belong to?',
      blocks: [
        { k: 'p', x: 'The MATH 157 past papers test number classes, interval notation and inequalities, which none of the lecture decks in the folder teaches. This lesson covers them using standard textbook methods, and works through the past-paper questions.' },
        { k: 'table', head: ['Class', 'Members', 'Belongs to'], rows: [
          { c: ['<b>Natural</b> N', '1, 2, 3, …', 'Whole, integers, rationals, reals'] },
          { c: ['<b>Whole</b>', '0, 1, 2, 3, …', 'Integers, rationals, reals'] },
          { c: ['<b>Integers</b> Z', '…, −2, −1, 0, 1, 2, …', 'Rationals, reals'] },
          { c: ['<b>Rational</b> Q', 'p/q, q ≠ 0: fractions, mixed numbers, terminating and repeating decimals', 'Reals'] },
          { c: ['<b>Irrational</b> I', 'Non-terminating, non-repeating decimals: π, e, √2, √17, √20', 'Reals (never rationals)'] },
        ] },
        { k: 'box', title: 'Quick tests', tone: 'recall', blocks: [{ k: 'ul', items: [
          '<b>A square root is rational only when the number is a perfect square</b>: √25 = 5, √64 = 8, −√225 = −15 and −√9 = −3 are integers; √17, √20 and √99 are irrational.',
          '−4 is an <b>integer, rational and real</b>, but not whole or natural. −4² = −16 and 12/4 = 3 are integers; −4.8 is not.',
          'Every integer is rational (−7 = −7/1), but <b>not only fractions are rational</b>; no number is both rational and irrational; not every real is rational.',
          '0.8, 4 2/9, −5.333… and 3.45 are rational; −3.0541… (no repeat shown) and π are not.',
        ] }] },
      ],
    },
    {
      id: 'nm-intervals',
      title: 'Set-builder and interval notation',
      kicker: 'Brackets tell you about the ends',
      blocks: [
        { k: 'table', head: ['Inequality', 'Interval', 'Ends'], rows: [
          { c: ['2 &lt; x &lt; 7', '(2, 7)', 'Both excluded (“exclusive”): round brackets'] },
          { c: ['2 ≤ x ≤ 7', '[2, 7]', 'Both included: square brackets'] },
          { c: ['2 ≤ x &lt; 20', '[2, 20)', 'Half-open'] },
          { c: ['x &gt; 0', '(0, ∞)', '∞ always takes a round bracket'] },
          { c: ['x ≤ −13 or x ≥ −9', '(−∞, −13] ∪ [−9, ∞)', 'Two pieces joined by ∪'] },
        ] },
        { k: 'p', x: 'Set-builder form names the rule: {x | −3 ≤ x ≤ 2, x an integer} = {−3, −2, −1, 0, 1, 2}. {1, 2, 3, 4} = {x | 0 &lt; x ≤ 4, x whole}; {11, 12} = {x | 10 &lt; x ≤ 12, x an integer}. Check each end: is it in the list or not?' },
      ],
    },
    {
      id: 'nm-radicals',
      title: 'Radicals and surds',
      kicker: 'Roots as fractional powers',
      blocks: [
        { k: 'box', title: 'Rules', tone: 'formula', blocks: [{ k: 'ul', items: [
          'ⁿ√a = a<sup>1/n</sup>; √(ab) = √a √b; √(a/b) = √a/√b (a, b ≥ 0).',
          'Simplify by taking out square factors: √20 = √4 √5 = 2√5; √72 = 6√2.',
          'Rationalise: 1/√3 = √3/3; 1/(2 + √3) = (2 − √3)/(4 − 3) = 2 − √3 (multiply by the conjugate).',
          '√(x²) = |x|, not x. And <b>√(x² + 25) does not simplify</b>: √(a + b) ≠ √a + √b (try x = 0: √25 = 5, but “x + 5” would also need x = 0 to fit every x).',
        ] }] },
        { k: 'p', x: 'Indices with roots: (y<sup>−1/5</sup> · y<sup>1/2</sup>) / y<sup>2/5</sup> = y<sup>(−2 + 5 − 4)/10</sup> = y<sup>−1/10</sup> = <b>1/y<sup>1/10</sup></b>.' },
      ],
    },
    {
      id: 'nm-ineq',
      title: 'Solving inequalities',
      kicker: 'Like equations, with one trap',
      blocks: [
        { k: 'p', x: 'Solve an inequality like an equation, except: <b>multiplying or dividing by a negative number reverses the sign</b> (−2x &lt; 6 gives x &gt; −3). Linear: 11(3x + 1) &gt; 11 → 3x + 1 &gt; 1 → x &gt; 0: <b>(0, ∞)</b>.' },
        { k: 'step', n: '1', title: 'Quadratic inequalities', blocks: [{ k: 'p', x: 'Factorise and find the roots; an upward parabola is <b>negative between</b> its roots and positive outside. 2x² + 5x − 3 ≤ 0 → (2x − 1)(x + 3) ≤ 0: <b>[−3, 1/2]</b>, both ends included because of “≤”. (One past-paper key printed (−3, 1/2]; that is wrong, and the app’s copy has been corrected.)' }] },
        { k: 'step', n: '2', title: 'Rational inequalities: sign analysis', blocks: [
          { k: 'p', x: 'Mark every zero of the top and bottom on a number line, test the sign in each region, and <b>never include a zero of the denominator</b>.' },
          { k: 'ul', items: [
            '(x + 7)(x − 3)/(x − 1) ≥ 0: critical points −7, 1, 3. Signs: − before −7, + on (−7, 1), − on (1, 3), + after 3. Answer <b>[−7, 1) ∪ [3, ∞)</b> (1 excluded).',
            '“A number minus 4 times its reciprocal is negative”: x − 4/x &lt; 0 → (x² − 4)/x &lt; 0 → (x − 2)(x + 2)/x &lt; 0: <b>x &lt; −2 or 0 &lt; x &lt; 2</b>. Do not multiply by x: its sign is unknown.',
          ] },
        ] },
      ],
    },
    {
      id: 'nm-abs',
      title: 'Absolute value',
      kicker: 'Distance from zero',
      blocks: [
        { k: 'term', name: 'Absolute value |a|', def: 'The <b>distance</b> of a from 0, so never negative: |5| = |−5| = 5. |x − c| is the distance between x and c.' },
        { k: 'table', head: ['Form (c &gt; 0)', 'Becomes', 'Picture'], rows: [
          { c: ['|ax + b| = c', 'ax + b = c <b>or</b> ax + b = −c', 'Two points'] },
          { c: ['|ax + b| &lt; c (or ≤)', '−c &lt; ax + b &lt; c', 'One piece between'] },
          { c: ['|ax + b| &gt; c (or ≥)', 'ax + b &lt; −c <b>or</b> ax + b &gt; c', 'Two outer pieces'] },
          { c: ['|ax + b| = negative', 'No solution', 'A distance is never negative'] },
        ] },
        { k: 'step', n: '3', title: 'Past-paper questions, worked', blocks: [{ k: 'ul', items: [
          '|3x + 5| = 8: 3x + 5 = 8 or −8, <b>x = 1 or −13/3 (−4⅓)</b>.',
          '⅓|x + 8| = 6: <b>isolate first</b>, |x + 8| = 18, so <b>x = 10 or −26</b>.',
          '|t − 60| = 15: t is 15 from 60, so <b>75 and 45</b> (the high and low temperatures).',
          '|x + 11| ≥ 2: x + 11 ≤ −2 or ≥ 2, <b>(−∞, −13] ∪ [−9, ∞)</b>.',
          '7 − 3|4x + 7| ≤ −2: −3|4x + 7| ≤ −9, divide by −3 and <b>reverse</b>: |4x + 7| ≥ 3, so 4x + 7 ≤ −3 or ≥ 3: <b>x ≤ −2.5 or x ≥ −1</b>.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'N ⊂ whole ⊂ Z ⊂ Q ⊂ R; √n is rational only for perfect squares.',
          'Round brackets exclude, square include; ∞ is always round.',
          'Negative multiplier reverses an inequality; quadratics: between the roots for &lt; 0 with a &gt; 0; rational: sign chart, exclude denominator zeros.',
          '|A| = c → A = ±c; |A| &lt; c → −c &lt; A &lt; c; |A| &gt; c → A &lt; −c or A &gt; c. Isolate the absolute value first.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['−4 is best classified as', 'Integer, rational, real', ['Whole, integer, real', 'Irrational, real', 'Natural, rational, real'], 'Not whole.', 'Numbers'],
    ['Which is irrational?', '√17', ['−√9', '5.499', '12/4'], 'Not a perfect square.', 'Numbers'],
    ['Which set contains NO irrational numbers?', '√25, 4 2/9, 0.8, −7', ['√25, √1, √64, √20', '0.5, 2/7, −5.333…, π', '√21, 0.75, 0, 3'], 'Every one is rational.', 'Numbers'],
    ['Which statement is TRUE?', 'All integers are rational', ['All reals are rational', 'Only fractions are rational', 'Some numbers are both types'], 'n = n/1.', 'Numbers'],
    ['“From 2 through 7, exclusive” is', '(2, 7)', ['[2, 7]', '(2, 7]', '[2, 7)'], 'Round = excluded.', 'Intervals'],
    ['x ≥ 2 and x < 20 in interval notation is', '[2, 20)', ['(2, 20]', '[2, 20]', '(2, 20)'], 'Half-open.', 'Intervals'],
    ['{−3, −2, −1, 0, 1, 2} in set-builder form is', '{x | −3 ≤ x ≤ 2, x integer}', ['{x | −3 < x ≤ 2, x integer}', '{x | −3 ≤ x < 2, x integer}', '{x | −3 < x < 2, x integer}'], 'Both ends listed.', 'Intervals'],
    ['√20 simplifies to', '2√5', ['4√5', '5√2', '10√2'], '√4 × √5.', 'Radicals'],
    ['√(x² + 25) simplifies to', 'It does not simplify', ['x + 5 for all x', '|x + 5| for all x', 'x + 25 for all x'], '√(a + b) ≠ √a + √b.', 'Radicals'],
    ['1/(2 + √3) rationalised is', '2 − √3', ['2 + √3', '(2 − √3)/7', '√3 − 2'], 'Multiply by the conjugate.', 'Radicals'],
    ['11(3x + 1) > 11 gives', '(0, ∞)', ['[0, ∞)', '(1/33, ∞)', '[1/33, ∞)'], '3x > 0.', 'Inequalities'],
    ['2x² + 5x − 3 ≤ 0 gives', '[−3, 1/2]', ['(−3, 1/2]', '(−∞, −3] ∪ [1/2, ∞)', '(−∞, 1/2]'], 'Between the roots, ends in.', 'Inequalities'],
    ['(x + 7)(x − 3)/(x − 1) ≥ 0 gives', '[−7, 1) ∪ [3, ∞)', ['(−∞, −7] ∪ [3, ∞)', '(−∞, −7] ∪ [1, 3]', '[−7, 1] ∪ [3, ∞)'], 'Exclude x = 1.', 'Inequalities'],
    ['x − 4/x < 0 holds for', 'x < −2 or 0 < x < 2', ['−2 < x < 2 only', 'x < 2 only', '0 < x < 2 only'], 'Sign chart.', 'Inequalities'],
    ['Dividing an inequality by −3', 'Reverses the sign', ['Keeps the sign', 'Makes it an equation', 'Is not allowed'], 'Negative multiplier.', 'Inequalities'],
    ['|3x + 5| = 8 gives', 'x = 1 or −13/3', ['x = 1 or −1', 'x = 13/3 or −1', 'x = ±13/3'], '±8.', 'Absolute value'],
    ['⅓|x + 8| = 6 gives', 'x = 10 or −26', ['x = 10 or −10', 'x = 26 or −10', 'x = ±26'], '|x + 8| = 18.', 'Absolute value'],
    ['|x + 11| ≥ 2 gives', '(−∞, −13] ∪ [−9, ∞)', ['(−∞, 9] ∪ [13, ∞)', '(−∞, −9] ∪ [9, ∞)', '[−13, −9]'], 'Two outer pieces.', 'Absolute value'],
    ['7 − 3|4x + 7| ≤ −2 gives', 'x ≤ −2.5 or x ≥ −1', ['x ≤ −1 or x ≥ 1', 'x ≤ −2.5 or x ≥ 2.5', '−2.5 ≤ x ≤ −1'], '|4x + 7| ≥ 3.', 'Absolute value'],
    ['|ax + b| ≥ c is solved as', 'ax + b ≤ −c or ax + b ≥ c', ['−c ≤ ax + b ≤ c', '−c < ax + b < c', 'ax + b ≥ −c and ax + b ≤ c'], 'Outside.', 'Absolute value'],
    ['|t − 60| = 15 gives', '75 and 45', ['60 and 15', '75 and −45', '60 only'], '15 either side of 60.', 'Absolute value'],
  ],
};
