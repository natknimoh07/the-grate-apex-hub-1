// Algebra → Logarithms, Indices, Exponential Equations and Quadratic Functions. From "MATH 157
// ALGEBRA 3" (Dr Kwame Piesie, 22 slides), plus quadratic graphs as the past papers ask them
// (labelled). Rewrites the original database lesson algebra-03 (same id, so progress is kept).
// Checked 2026-11-04; teaching text in our own words; every slide example and trial is worked.
// Practises Quiz 3.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraLogs: Hb1Lesson = {
  id: 'algebra-03',
  order: 3,
  title: 'Logarithms, Indices, Exponential Equations and Quadratic Functions',
  summary: 'What a logarithm is, its four laws and two special values; common and natural logarithms; the eight laws of indices; exponential equations solved by equal bases or by taking logarithms; quadratic equations by factorising, completing the square and the formula (the slide steps and trials worked); and, for the past papers, the graph of a quadratic: vertex form, axis of symmetry, maximum or minimum, intercepts and transformations',
  minutes: 30,
  source: 'MATH 157 ALGEBRA 3.pdf',
  quizId: 'allg',
  quizName: 'Quiz · Logarithms and Indices (lesson)',
  pastSets: ['s3'],
  pastTopics: ['equations-quadratics'],
  sections: [
    {
      id: 'lg-def',
      title: 'What a logarithm is',
      kicker: 'The power you need',
      blocks: [
        { k: 'term', name: 'Logarithm', def: 'log<sub>a</sub> b is the <b>power</b> to which the base a must be raised to give b: <b>log<sub>a</sub> b = c ⇔ b = a<sup>c</sup></b>, provided a &gt; 0, <b>a ≠ 1</b> and <b>b &gt; 0</b>. Example: log₂ 16 = 4 because 2⁴ = 16.' },
        { k: 'p', x: 'The base may be <b>any positive number except 1</b>. The <b>logarithm of a negative number (or 0) does not exist</b> (no real power of a positive base gives one). If no base is written, the base is <b>10</b> (the common logarithm); <b>ln</b> means base <b>e</b> ≈ 2.718 (the natural logarithm).' },
        { k: 'table', head: ['Law', 'Statement', 'Slide example'], rows: [
          { c: ['1 Product', 'log<sub>a</sub> x + log<sub>a</sub> y = log<sub>a</sub>(xy)', 'log₂ 3 + log₂ 4 = log₂ 12'] },
          { c: ['2 Quotient', 'log<sub>a</sub> x − log<sub>a</sub> y = log<sub>a</sub>(x/y)', 'log₄ 21 − log₄ 7 = log₄ 3'] },
          { c: ['3 Power', 'log<sub>a</sub> xⁿ = n log<sub>a</sub> x', 'log₂ 5² = 2 log₂ 5'] },
          { c: ['4 Change of base', 'log<sub>a</sub> x = log<sub>b</sub> x / log<sub>b</sub> a', 'log₂ 8 = log₃ 8 / log₃ 2 (= 3)'] },
        ] },
        { k: 'box', title: 'Two special values', tone: 'formula', blocks: [{ k: 'ul', items: ['<b>log<sub>b</sub> b = 1</b>: the log of a number to its own base is 1.', '<b>log<sub>b</sub> 1 = 0</b>: the log of 1 to any base (other than 1) is 0.', 'Also log<sub>a</sub> a<sup>x</sup> = x and a<sup>log<sub>a</sub> x</sup> = x: logs and powers undo each other.'] }] },
        { k: 'box', title: 'Strictly speaking: traps', tone: 'gold', blocks: [{ k: 'p', x: 'log(x + y) is <b>not</b> log x + log y, and (log x)/(log y) is <b>not</b> log(x/y). When solving, check every answer keeps each log’s argument positive: an answer that makes it zero or negative is rejected.' }] },
        { k: 'step', n: '1', title: 'The trial equations, worked', blocks: [{ k: 'ul', items: [
          '5 log₂ 2 = x: log₂ 2 = 1, so <b>x = 5</b>.',
          'log 2 + log x = log 12 → log 2x = log 12 → <b>x = 6</b>.',
          'log(2x + 3) + log 2 = 1 → log[2(2x + 3)] = log 10 → 4x + 6 = 10 → <b>x = 1</b> (argument 5 &gt; 0 ✓).',
          '5 log₃ 2 − log₃ 4 + log₃ 4 = log₃(3x − 1): the ±log₃ 4 cancel, so log₃ 2⁵ = log₃(3x − 1), 3x − 1 = 32, <b>x = 11</b>.',
          'Quiz-style: log₂(x + 1) − log₂ 3 = 2 → (x + 1)/3 = 4 → x = 11.',
        ] }] },
      ],
    },
    {
      id: 'lg-indices',
      title: 'The laws of indices',
      kicker: 'A review before exponential equations',
      blocks: [
        { k: 'table', head: ['Property', 'Law', 'Slide example'], rows: [
          { c: ['1', '(ab)ⁿ = aⁿbⁿ', '(2 × 5)³ = 8 × 125 = 1000'] },
          { c: ['2', 'a<sup>−n</sup> = 1/aⁿ (power −1 = reciprocal)', '2⁻³ = 1/8'] },
          { c: ['3', '(a/b)ⁿ = aⁿ/bⁿ', '(2/7)² = 4/49'] },
          { c: ['4', '(a/b)<sup>−n</sup> = (b/a)ⁿ', '(3/2)⁻³ = 8/27'] },
          { c: ['5', 'a<sup>m/n</sup> = (ⁿ√a)ᵐ', '8<sup>2/3</sup> = (∛8)² = 4'] },
          { c: ['6', '(aⁿ)ᵐ = a<sup>nm</sup> (multiply the powers)', '(3³)² = 3⁶ = 729'] },
          { c: ['7', 'aᵐ aⁿ = a<sup>m+n</sup>', '8² × 8⁵ = 8⁷'] },
          { c: ['8', 'aᵐ / aⁿ = a<sup>m−n</sup>', '8⁹ / 8⁵ = 8⁴'] },
        ] },
        { k: 'p', x: 'Also a⁰ = 1 (a ≠ 0) and a<sup>1/n</sup> = ⁿ√a. Combined: 27<sup>−2/3</sup> = 1/(∛27)² = 1/9; (4²)³ ÷ 4⁴ = 4² = 16; (y<sup>−1/5</sup> · y<sup>1/2</sup>) / y<sup>2/5</sup> = y<sup>−1/5 + 1/2 − 2/5</sup> = y<sup>−1/10</sup>. Note √(x² + 25) does <b>not</b> simplify to x + 5.' },
      ],
    },
    {
      id: 'lg-exp',
      title: 'Exponential equations',
      kicker: 'The unknown is in the power',
      blocks: [
        { k: 'p', x: 'An <b>exponential equation</b> has the variable in an exponent. Two methods:' },
        { k: 'step', n: '2', title: 'Method 1: write both sides with the same base', blocks: [
          { k: 'p', x: 'If b<sup>x</sup> = b<sup>y</sup> (b &gt; 0, b ≠ 1) then <b>x = y</b>. 2<sup>2x</sup> = 2⁴ gives 2x = 4, x = 2.' },
          { k: 'ul', items: [
            '125<sup>x²+5</sup> = (1/25)<sup>−2x²+4</sup>: 5<sup>3x²+15</sup> = 5<sup>4x²−8</sup>, so 3x² + 15 = 4x² − 8, x² = 23, <b>x = ±√23</b>.',
            '8<sup>4x−3</sup> = 32<sup>2x+1</sup>: 2<sup>12x−9</sup> = 2<sup>10x+5</sup>, so <b>x = 7</b>.',
            '27<sup>x</sup> = 3<sup>2x−1</sup>: 3x = 2x − 1, <b>x = −1</b>.',
            '9<sup>3x−2</sup> = 3<sup>2(2x+1)</sup>: 6x − 4 = 4x + 2, <b>x = 3</b>.',
          ] },
        ] },
        { k: 'step', n: '3', title: 'Method 2: take logarithms', blocks: [
          { k: 'p', x: '<b>Isolate</b> the power, take <b>logs of both sides</b>, bring the exponent down (log<sub>a</sub> a<sup>x</sup> = x, or the power law), solve. 5<sup>x</sup> = 7 → x log 5 = log 7 → x = log 7/log 5 ≈ <b>1.209</b>.' },
          { k: 'ul', items: [
            '15 = 3<sup>2x+1</sup>: 2x + 1 = log 15/log 3 ≈ 2.465, so <b>x ≈ 0.733</b>.',
            'eˣ = 43: <b>x = ln 43 ≈ 3.761</b>.',
            '4<sup>x+2</sup> − 2 = 12: 4<sup>x+2</sup> = 14, x + 2 = log 14/log 4 ≈ 1.904, <b>x ≈ −0.096</b>.',
            '6(2)<sup>x+3</sup> = 30: 2<sup>x+3</sup> = 5, x + 3 = log 5/log 2 ≈ 2.322, <b>x ≈ −0.678</b>.',
          ] },
        ] },
        { k: 'box', title: 'Past-paper pattern: a hidden quadratic', tone: 'gold', blocks: [{ k: 'p', x: '2<sup>2x+1</sup> − 9(2<sup>x</sup>) + 4 = 0: put y = 2<sup>x</sup>, so 2y² − 9y + 4 = 0, (2y − 1)(y − 4) = 0, y = 1/2 or 4, giving <b>x = −1 or 2</b>. Since 2<sup>x</sup> &gt; 0, a negative y would be rejected.' }] },
      ],
    },
    {
      id: 'lg-quad',
      title: 'Quadratic equations, revisited',
      kicker: 'Factorise, complete the square, formula',
      blocks: [
        { k: 'p', x: 'Factorising writes ax² + bx + c as (x − h)(x − k), h and k being the roots. To split the middle term, find two numbers with product ac and sum b: x² + 8x + 12 = x² + 6x + 2x + 12 = x(x + 6) + 2(x + 6) = (x + 2)(x + 6), so <b>x = −2 or −6</b>.' },
        { k: 'step', n: '4', title: 'Completing the square: the five steps', blocks: [{ k: 'ul', items: [
          'Divide by a so x² has coefficient 1.',
          'Put variable terms on one side, the constant on the other.',
          'Add (half the x coefficient)² to both sides.',
          'Factor the perfect square.',
          'Take square roots (±). Example: x² + 6x + 8 = 0 → x² + 6x + 9 = 1 → (x + 3)² = 1 → x = −3 ± 1 = <b>−2 or −4</b>; the formula gives (−6 ± 2)/2, the same.',
        ] }] },
        { k: 'step', n: '5', title: 'The trials, worked', blocks: [{ k: 'ul', items: [
          '4x² + 12x + 9 = (2x + 3)²: <b>x = −3/2</b> (repeated). 9x² − 4 = (3x − 2)(3x + 2): <b>x = ±2/3</b>.',
          '2x² − 5x + 2 = (2x − 1)(x − 2): <b>x = 1/2 or 2</b>. 3x² − 8x − 3 = (3x + 1)(x − 3): <b>x = −1/3 or 3</b>.',
          'x² − 4x − 8 = 0: (x − 2)² = 12, <b>x = 2 ± 2√3</b> (formula: Δ = 48, same).',
          '−4x² − 8x − 12 = 0: x² + 2x + 3 = 0, (x + 1)² = −2: <b>no real solution</b> (Δ = 64 − 192 &lt; 0).',
          '2s² + 5s = 3: s² + (5/2)s = 3/2, (s + 5/4)² = 49/16, s = −5/4 ± 7/4: <b>s = 1/2 or −3</b>.',
        ] }] },
      ],
    },
    {
      id: 'lg-graph',
      title: 'The graph of a quadratic (past papers)',
      kicker: 'Beyond the slides: parabolas',
      blocks: [
        { k: 'p', x: 'The past papers ask about <b>graphs</b> of y = ax² + bx + c. The graph is a <b>parabola</b>: it opens <b>up</b> (a minimum) if a &gt; 0 and <b>down</b> (a maximum) if a &lt; 0. It is symmetric about its <b>axis of symmetry</b>, through the <b>vertex</b>.' },
        { k: 'table', head: ['Form', 'Shows', 'Example'], rows: [
          { c: ['Standard y = ax² + bx + c', 'y-intercept c; axis x = −b/2a', '5x² + 3x: minimum at x = −0.3, value −0.45'] },
          { c: ['Vertex y = a(x − h)² + k', 'Vertex (h, k); axis x = h; max or min value k', 'Axis x = 2, minimum −4: y = (x − 2)² − 4'] },
          { c: ['Factored y = a(x − r)(x − s)', 'x-intercepts r and s', '−2(x + 2)(x − 1) = −2x² − 2x + 4'] },
        ] },
        { k: 'table', head: ['Change to y = x²', 'Effect on the graph'], rows: [
          { c: ['y = (x − h)²', 'Moves h units <b>right</b> (left if h is negative): (x + 7)² is 7 left'] },
          { c: ['y = x² + k', 'Moves k units <b>up</b>: (x + 7)² + 4 is 7 left and 4 up'] },
          { c: ['y = a x²', '<b>Vertical stretch</b> by a (|a| &lt; 1 squashes: y = ⅓x² has factor 1/3); a &lt; 0 reflects it to open down'] },
        ] },
        { k: 'p', x: 'A parabola opening down with vertex (h, k) right of the y-axis: <b>y = −a(x − h)² + k</b>, a &gt; 0, h &gt; 0. The y-intercept of y = 2(x − 2)² + 2 is 2(4) + 2 = <b>10</b>. Δ tells how many times the graph meets the x-axis: twice (Δ &gt; 0), touches once (Δ = 0) or never (Δ &lt; 0).' },
        { k: 'step', n: '6', title: 'Past-paper equations, worked', blocks: [{ k: 'ul', items: [
          '√(10 + 2x) = 5 + x: square, 10 + 2x = 25 + 10x + x², so x² + 8x + 15 = 0, x = −3 or −5. Check both in the original: √4 = 2 ✓ and √0 = 0 ✓. Squaring can create false roots, so <b>always check</b>.',
          '3!(x − 1)!/(x − 3)! = 72: 6(x − 1)(x − 2) = 72, x² − 3x − 10 = 0, x = 5 or −2; factorials need x ≥ 3, so <b>x = 5</b>.',
          'x² = 49: <b>x = ±7</b>. 4y² = 6y − y²: 5y² − 6y = 0, y = 0 or 6/5. t² + 8t + 16 = 0: (t + 4)² = 0, one repeated root −4.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'log<sub>a</sub> b = c ⇔ aᶜ = b; base &gt; 0, ≠ 1; no log of 0 or negatives; log<sub>b</sub> b = 1, log<sub>b</sub> 1 = 0.',
          'Laws: product, quotient, power, change of base.',
          'Indices: add powers when multiplying, subtract when dividing, multiply for a power of a power; a<sup>−n</sup> = 1/aⁿ, a<sup>m/n</sup> = (ⁿ√a)ᵐ.',
          'Exponential equations: same base → equate powers; otherwise take logs.',
          'Parabola: vertex form a(x − h)² + k; axis −b/2a; a &gt; 0 minimum, a &lt; 0 maximum.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['log₂ 16 =', '4', ['8', '2', '32'], '2⁴ = 16.', 'Logs'],
    ['The base of a logarithm cannot be', '1', ['2', '10', 'e'], 'Also not ≤ 0.', 'Logs'],
    ['log of a negative number', 'Does not exist in the reals', ['Is always a negative number', 'Equals zero for every base', 'Equals one for every base'], 'No power gives it.', 'Logs'],
    ['log₄ 21 − log₄ 7 =', 'log₄ 3', ['log₄ 14', 'log₄ 147', '3'], 'Quotient law.', 'Logs'],
    ['log_b 1 (any base b) equals', '0', ['1', 'b', 'Undefined'], 'b⁰ = 1.', 'Logs'],
    ['Solve log 2 + log x = log 12', 'x = 6', ['x = 10', 'x = 24', 'x = 14'], 'log 2x.', 'Logs'],
    ['Solve log(2x + 3) + log 2 = 1', 'x = 1', ['x = 2', 'x = 7/4', 'x = −1'], '2(2x + 3) = 10.', 'Logs'],
    ['Solve 5 log₃ 2 − log₃ 4 + log₃ 4 = log₃(3x − 1)', 'x = 11', ['x = 3', 'x = 32', 'x = 10'], '3x − 1 = 32.', 'Logs'],
    ['When no base is written, the base is', '10', ['100', 'e', '2'], 'Common log.', 'Logs'],
    ['(3/2)⁻³ =', '8/27', ['27/8', '−27/8', '9/4'], 'Flip and cube.', 'Indices'],
    ['8^(2/3) =', '4', ['16/3', '2', '64'], '(∛8)².', 'Indices'],
    ['27^(−2/3) =', '1/9', ['9', '−9', '1/3'], '1/(∛27)².', 'Indices'],
    ['(3³)² =', '729', ['243', '81', '3⁵'], 'Multiply powers.', 'Indices'],
    ['(y^(−1/5) · y^(1/2)) / y^(2/5) =', 'y^(−1/10)', ['y^(1/10)', 'y^(−1/2)', 'y^(3/10)'], '−2/10 + 5/10 − 4/10.', 'Indices'],
    ['Solve 8^(4x−3) = 32^(2x+1)', 'x = 7', ['x = 4', 'x = −7', 'x = 1'], '12x − 9 = 10x + 5.', 'Exponential'],
    ['Solve 27ˣ = 3^(2x−1)', 'x = −1', ['x = 1', 'x = 1/3', 'x = −3'], '3x = 2x − 1.', 'Exponential'],
    ['Solve 125^(x²+5) = (1/25)^(−2x²+4)', 'x = ±√23', ['x = ±23', 'x = ±√7', 'x = ±3'], 'x² = 23.', 'Exponential'],
    ['Solve 5ˣ = 7 (to 3 d.p.)', 'x ≈ 1.209', ['x ≈ 0.827', 'x ≈ 1.400', 'x ≈ 2.000'], 'log 7/log 5.', 'Exponential'],
    ['Solve eˣ = 43', 'x = ln 43', ['x = log 43', 'x = 43/e', 'x = e⁴³'], 'Natural log.', 'Exponential'],
    ['Solve 2^(2x+1) − 9(2ˣ) + 4 = 0', 'x = −1 or 2', ['x = 1/2 or 4', 'x = 1 or −2', 'x = 0 or 2'], 'y = 2ˣ.', 'Exponential'],
    ['Solve 2s² + 5s = 3', 's = 1/2 or −3', ['s = −1/2 or 3', 's = 3/2 or −1', 's = 1 or −3/2'], '(2s − 1)(s + 3).', 'Quadratics'],
    ['x² − 4x − 8 = 0 gives', 'x = 2 ± 2√3', ['x = 4 ± 2√3', 'x = 2 ± √3', 'x = −2 ± 2√3'], '(x − 2)² = 12.', 'Quadratics'],
    ['−4x² − 8x − 12 = 0 has', 'No real solution', ['Two real roots', 'One repeated root', 'Roots ±√3'], 'Δ is negative.', 'Quadratics'],
    ['y = (x + 7)² + 4 is y = x² moved', '7 left and 4 up', ['7 right and 4 up', '7 left and 4 down', '4 left and 7 up'], 'Signs inside flip.', 'Graphs'],
    ['The quadratic with axis x = 2 and minimum −4 is', 'y = (x − 2)² − 4', ['y = (x + 2)² − 4', 'y = −(x − 2)² − 4', 'y = (x − 4)² + 2'], 'Vertex (2, −4).', 'Graphs'],
    ['The y-intercept of y = 2(x − 2)² + 2 is', '10', ['2', '18', '4'], 'Put x = 0.', 'Graphs'],
    ['−2(x + 2)(x − 1) in standard form is', '−2x² − 2x + 4', ['−2x² + 2x − 4', '2x² + 2x − 4', '−2x² − 2x − 4'], 'Expand.', 'Graphs'],
  ],
};
