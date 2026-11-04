// Algebra → Sequences and Series. From "MATH 157 ALGEBRA 4" (Dr Kwame Piesie, 28 slides), plus
// partial fractions and series patterns the past papers use (labelled). Rewrites the original
// database lesson algebra-04 (same id, so progress is kept). Checked 2026-11-04; teaching text in
// our own words; every slide example and trial exercise is worked. Practises Quiz 4.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraSequences: Hb1Lesson = {
  id: 'algebra-04',
  order: 4,
  title: 'Sequences and Series: APs, GPs and Applications',
  summary: 'Sequences and series (finite and infinite); arithmetic progressions: nth term, common difference and the two sum formulas; geometric progressions: nth term, common ratio, the sum of n terms and the sum to infinity; salary and depreciation applications — every slide example and trial worked — plus past-paper patterns (sums with Σ, logarithm series, finding a and d from two conditions) and partial fractions',
  minutes: 30,
  source: 'MATH 157 ALGEBRA 4.pdf',
  quizId: 'alsq',
  quizName: 'Quiz · Sequences and Series (lesson)',
  pastSets: ['s4'],
  pastTopics: ['sequences-series'],
  sections: [
    {
      id: 'sq-intro',
      title: 'Sequences and series',
      kicker: 'A list, and a sum',
      blocks: [
        { k: 'cards', items: [
          { title: 'Sequence', blocks: [{ k: 'p', x: 'Numbers (<b>terms</b>) in a defined order with a <b>rule</b> for each term: 1, 3, 5, 7, … and 2, 4, 6, 8, … (add 2 each time).' }] },
          { title: 'Series', blocks: [{ k: 'p', x: 'The terms <b>added</b>: 2 + 4 + 6 + 8 + …. <b>Finite</b> if it stops after a number of terms; <b>infinite</b> if it never ends.' }] },
        ] },
        { k: 'p', x: 'Two kinds are studied: the <b>arithmetic progression</b> (AP, also linear progression or linear sequence: <b>add</b> a constant) and the <b>geometric progression</b> (GP, also exponential progression or sequence: <b>multiply</b> by a constant).' },
      ],
    },
    {
      id: 'sq-ap',
      title: 'Arithmetic progressions',
      kicker: 'Add the common difference d',
      blocks: [
        { k: 'box', title: 'AP formulas', tone: 'formula', blocks: [{ k: 'ul', items: [
          'nth term: <b>uₙ = a + (n − 1)d</b> (for the last term, l = a + (n − 1)d); a first term, d common difference, n number of terms.',
          'd = uₙ − uₙ₋₁ = uₙ₊₁ − uₙ; it may be positive or negative.',
          'Sum: <b>Sₙ = (n/2)[2a + (n − 1)d]</b> when a and d are known, or <b>Sₙ = (n/2)(a + l)</b> when a and the last term are known.',
        ] }] },
        { k: 'step', n: '1', title: 'Slide examples', blocks: [{ k: 'ul', items: [
          '11th term of 4, 9, 14, 19, …: a = 4, d = 5, u₁₁ = 4 + 10 × 5 = <b>54</b>.',
          'u₄ = 19 and u₁₁ = 54: subtract a + 3d = 19 from a + 10d = 54, so 7d = 35, d = 5, a = 4; u₈ = 4 + 7 × 5 = <b>39</b>.',
          'Sum of 15 terms of 5, 9, 13, …: S₁₅ = (15/2)[10 + 14 × 4] = (15/2)(66) = <b>495</b>.',
          'How many terms of 5, 8, 11, … make 1025? (n/2)[10 + 3(n − 1)] = 1025 → 3n² + 7n − 2050 = 0 → n = (−7 ± 157)/6, so <b>n = 25</b> (a count cannot be negative).',
        ] }] },
        { k: 'step', n: '2', title: 'The trials, worked', blocks: [{ k: 'ul', items: [
          'nth term of 10, 6, 2, −2, …: a = 10, d = −4, uₙ = 10 − 4(n − 1) = <b>14 − 4n</b>.',
          '1st, 12th and last terms 4, 31½, 376½: 11d = 27.5, d = 2.5; 376.5 = 4 + (n − 1)2.5 gives <b>n = 150</b>; u₈₀ = 4 + 79 × 2.5 = <b>201.5</b>.',
          'Terms of 4, 6½, 9, 11½, … to make 126: (n/2)[8 + 2.5(n − 1)] = 126 → 5n² + 11n − 504 = 0 → n = (−11 + 101)/10 = <b>9</b>.',
          'u₆ = 23 and u₁₁ = 48: 5d = 25, d = 5, a = −2; S₂₀ = 10[−4 + 19 × 5] = <b>910</b>.',
          'u₅ = −1 and S₂₀ = −240: a + 4d = −1 and 2a + 19d = −24, so 11d = −22, d = −2, a = 7; u₃ = 7 − 4 = <b>3</b>.',
        ] }] },
        { k: 'step', n: '3', title: 'Past-paper AP patterns', blocks: [{ k: 'ul', items: [
          'a = 6, d = −5: u₅ = 6 − 20 = <b>−14</b>. a = −2.6, d = −0.4: −2.6, −3.0, −3.4, −3.8, −4.2.',
          'a = 100, U₂₅ = 220, n = 25: S = (25/2)(100 + 220) = <b>4000</b>.',
          '1 + 4 + 7 + … + x = 925: (n/2)[2 + 3(n − 1)] = 925 → 3n² − n − 1850 = 0, n = 25, so x = 1 + 24 × 3 = <b>73</b>.',
          'First + fourth term = 2 and the sum of their squares = 20: the two numbers p, q have p + q = 2, pq = (4 − 20)/2 = −8, so they are 4 and −2: <b>a = 4, d = −2</b> (or a = −2, d = 2).',
          'Σ(⅔n + ⅓) from 1 to 20 = ⅔(210) + 20/3 = 440/3 ≈ 146.7; Σ5n to 100 = 25 250.',
        ] }] },
      ],
    },
    {
      id: 'sq-gp',
      title: 'Geometric progressions',
      kicker: 'Multiply by the common ratio r',
      blocks: [
        { k: 'box', title: 'GP formulas', tone: 'formula', blocks: [{ k: 'ul', items: [
          'nth term: <b>uₙ = arⁿ⁻¹</b>, with r = uₙ/uₙ₋₁ = uₙ₊₁/uₙ.',
          'Sum of n terms: <b>Sₙ = a(1 − rⁿ)/(1 − r)</b> (handy for |r| &lt; 1, i.e. −1 &lt; r &lt; 1) or <b>Sₙ = a(rⁿ − 1)/(r − 1)</b> (handy for |r| &gt; 1, i.e. r &lt; −1 or r &gt; 1). Both are the same formula; either works for any r ≠ 1.',
          'For three consecutive terms use a/r, a, ar; and x, y, z are in GP when <b>y² = xz</b>.',
        ] }] },
        { k: 'step', n: '4', title: 'Slide examples', blocks: [{ k: 'ul', items: [
          '7th term of 5, 10, 20, …: u₇ = 5 × 2⁶ = <b>320</b>.',
          '12th term of 128, 64, 32, …: r = ½, u₁₂ = 2⁷ × 2⁻¹¹ = 2⁻⁴ = <b>1/16</b>.',
          'Sum of 13 terms of ½, ¼, ⅛, …: S₁₃ = ½(1 − (½)¹³)/(½) = 1 − 1/8192 ≈ <b>0.99988</b>.',
        ] }] },
        { k: 'step', n: '5', title: 'The exercises and trials, worked', blocks: [{ k: 'ul', items: [
          'Three terms with product 343 and sum 49/2: (a/r)(a)(ar) = a³ = 343, a = 7; 7/r + 7 + 7r = 24.5 → 2r² − 5r + 2 = 0, r = 2 or ½: the terms are <b>3.5, 7, 14</b>.',
          'nth term of ½, ¼, ⅛, …: <b>(½)ⁿ</b>.',
          'u₂ = 9 and u₄ = 4: r² = 4/9, <b>r = ±2/3</b>, a = 9/r = <b>±27/2</b> (13.5 with r = 2/3, −13.5 with r = −2/3).',
          'k − 3, 2k − 4, 4k − 3 in GP: (2k − 4)² = (k − 3)(4k − 3) → −16k + 16 = −15k + 9 → <b>k = 7</b>; terms 4, 10, 25 (r = 2.5); S₈ = 4(2.5⁸ − 1)/1.5 ≈ <b>4066.3</b>.',
          'u₆ = 8u₃ gives r³ = 8, <b>r = 2</b>; u₇ + u₈ = a(64 + 128) = 192, <b>a = 1</b>; terms 5 to 11 = S₁₁ − S₄ = 2047 − 15 = <b>2032</b>.',
        ] }] },
      ],
    },
    {
      id: 'sq-infinity',
      title: 'Sum to infinity, and applications',
      kicker: 'When the terms shrink to nothing',
      blocks: [
        { k: 'p', x: 'For |r| &lt; 1, Sₙ = a/(1 − r) − arⁿ/(1 − r). As n → ∞, rⁿ → 0, so the second part vanishes: <b>S∞ = a/(1 − r)</b>. If |r| ≥ 1 the series has <b>no</b> sum to infinity (it diverges).' },
        { k: 'step', n: '6', title: 'Worked', blocks: [{ k: 'ul', items: [
          '7/10 + 7/100 + 7/1000 + …: a = 7/10, r = 1/10, S∞ = (7/10)/(9/10) = <b>7/9</b> (so 0.777… = 7/9).',
          '1 + ⅓ + 1/9 + 1/27 + …: S∞ = 1/(2/3) = <b>3/2</b>.',
          'Trial 216, 72, 24, 8, … (read from the slide, r = ⅓): S∞ = 216/(2/3) = <b>324</b>.',
          'Trial 4, 2, 1, ½, … (r = ½): S∞ = 4/(½) = <b>8</b>.',
        ] }] },
        { k: 'step', n: '7', title: 'Application: salary (AP)', blocks: [{ k: 'p', x: 'Salary rises by GH¢8000 a year and totals GH¢18 525 000 over 12 years: 18 525 000 = 6[2a + 11(8000)], so 2a + 88 000 = 3 087 500, <b>a = GH¢1 499 750</b> (starting salary); 12th year u₁₂ = a + 11d = <b>GH¢1 587 750</b>.' }] },
        { k: 'step', n: '8', title: 'Application: depreciation (GP), the trial', blocks: [{ k: 'p', x: 'A car worth GH¢30 000 000 loses 15% a year, so each year’s value is 0.85 of the last. After 5 years: 30 000 000 × 0.85⁵ ≈ <b>GH¢13 311 159</b>. It is sold when worth less than GH¢5 500 000: 0.85ⁿ &lt; 0.1833 gives n &gt; log 0.1833 / log 0.85 ≈ 10.4, so <b>after 11 years</b> (value ≈ GH¢5.02 million; after 10 it is still ≈ GH¢5.91 million).' }] },
        { k: 'box', title: 'Strictly speaking: percentage change', tone: 'gold', blocks: [{ k: 'p', x: 'A fixed <b>amount</b> each year gives an AP; a fixed <b>percentage</b> gives a GP with r = 1 ± rate. A saver who adds a fixed extra amount each month builds an AP of deposits; compound interest is a GP.' }] },
      ],
    },
    {
      id: 'sq-past',
      title: 'Past-paper extras: Σ sums, log series and partial fractions',
      kicker: 'Beyond the slides',
      blocks: [
        { k: 'step', n: '9', title: 'Sums and log series', blocks: [{ k: 'ul', items: [
          'Σ<sub>k=1</sub><sup>50</sup> [4k² − 18k + 2(−1)ᵏ] = 4(42 925) − 18(1275) + 0 = <b>148 750</b> (the (−1)ᵏ terms cancel in pairs).',
          'log α + log αx + log αx² + … + log αxⁿ: n + 1 terms, an AP with first term log α and difference log x, so the sum is <b>(n + 1) log α + [n(n + 1)/2] log x</b>.',
          'log x + log x² + log x⁴ + log x⁸ + …: = (1 + 2 + 4 + … + 2ⁿ⁻¹) log x = (2ⁿ − 1) log x, so the sum of n terms is <b>2ⁿ − 1</b> times the first term.',
          'If ln a, ln b, ln c are in AP then 2 ln b = ln a + ln c, so <b>b² = ac</b>: a, b, c are in GP.',
        ] }] },
        { k: 'step', n: '10', title: 'Partial fractions', blocks: [{ k: 'p', x: 'A fraction with a factorised denominator splits into simpler ones. −6x/[(x + 5)(x − 5)] = A/(x + 5) + B/(x − 5) gives −6x = A(x − 5) + B(x + 5). Put x = 5: −30 = 10B, B = −3. Put x = −5: 30 = −10A, A = −3. So it is <b>−3/(x + 5) − 3/(x − 5)</b>. (A repeated factor (x − a)² needs A/(x − a) + B/(x − a)²; a quadratic factor that will not factorise needs (Ax + B) on top.)' }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'AP: uₙ = a + (n − 1)d; Sₙ = (n/2)[2a + (n − 1)d] = (n/2)(a + l).',
          'GP: uₙ = arⁿ⁻¹; Sₙ = a(1 − rⁿ)/(1 − r); S∞ = a/(1 − r) only if |r| &lt; 1.',
          'Two conditions → two equations in a and d (or a and r); subtract or divide.',
          'Fixed amount → AP; fixed percentage → GP with r = 1 ± rate.',
          'Partial fractions: cover-up values of x make each unknown appear alone.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['A series is formed when the terms of a sequence are', 'Added', ['Multiplied', 'Reversed', 'Squared'], 'Definition.', 'Basics'],
    ['Another name for an AP is a', 'Linear sequence', ['Exponential sequence', 'Harmonic sequence', 'Power sequence'], 'Add a constant.', 'Basics'],
    ['The 11th term of 4, 9, 14, 19, … is', '54', ['55', '59', '50'], '4 + 10 × 5.', 'AP'],
    ['u₄ = 19 and u₁₁ = 54. The 8th term is', '39', ['34', '44', '43'], 'd = 5, a = 4.', 'AP'],
    ['The nth term of 10, 6, 2, −2, … is', '14 − 4n', ['10 − 4n', '6 + 4n', '14 + 4n'], 'a = 10, d = −4.', 'AP'],
    ['Sum of the first 15 terms of 5, 9, 13, … is', '495', ['465', '525', '330'], '(15/2)(66).', 'AP'],
    ['Terms of 5, 8, 11, … needed for a sum of 1025', '25', ['20', '30', '157'], '3n² + 7n − 2050 = 0.', 'AP'],
    ['u₆ = 23 and u₁₁ = 48. S₂₀ =', '910', ['960', '870', '1010'], 'a = −2, d = 5.', 'AP'],
    ['u₅ = −1 and S₂₀ = −240. u₃ =', '3', ['7', '−3', '5'], 'a = 7, d = −2.', 'AP'],
    ['The first term 4, 12th term 31½, last 376½: number of terms', '150', ['149', '151', '120'], 'd = 2.5.', 'AP'],
    ['1 + 4 + 7 + … + x = 925. x =', '73', ['76', '70', '25'], 'n = 25.', 'AP'],
    ['The 7th term of 5, 10, 20, … is', '320', ['160', '640', '35'], '5 × 2⁶.', 'GP'],
    ['The 12th term of 128, 64, 32, … is', '1/16', ['1/32', '1/8', '16'], '128 × 2⁻¹¹.', 'GP'],
    ['Three GP terms with product 343 and sum 24.5 are', '3.5, 7 and 14', ['7, 14 and 28', '1, 7 and 49', '2, 7 and 15.5'], 'a = 7, r = 2.', 'GP'],
    ['k − 3, 2k − 4, 4k − 3 are in GP. k =', '7', ['5', '4', '3'], '(2k − 4)² = (k − 3)(4k − 3).', 'GP'],
    ['u₆ = 8u₃ in a GP means r =', '2', ['8', '3', '4'], 'r³ = 8.', 'GP'],
    ['x, y, z are in GP when', 'y² = xz', ['2y = x + z', 'y = xz', 'y² = x + z'], 'Equal ratios.', 'GP'],
    ['S∞ = a/(1 − r) requires', '|r| below 1', ['r above 1', 'r equal to 1', 'a below 1'], 'rⁿ → 0.', 'Infinity'],
    ['7/10 + 7/100 + 7/1000 + … sums to', '7/9', ['7/10', '7/11', '1'], 'r = 1/10.', 'Infinity'],
    ['1 + 1/3 + 1/9 + 1/27 + … sums to', '3/2', ['4/3', '2', '3'], '1/(2/3).', 'Infinity'],
    ['Salary +GH¢8000 a year, 12-year total GH¢18 525 000: start salary', 'GH¢1 499 750', ['GH¢1 587 750', 'GH¢1 543 750', 'GH¢1 455 750'], 'S₁₂ formula.', 'Applications'],
    ['A car loses 15% a year. Its value each year is multiplied by', '0.85', ['0.15', '1.15', '0.75'], 'r = 1 − 0.15.', 'Applications'],
    ['GH¢30m car at 15% depreciation is sold below GH¢5.5m after', '11 years', ['10 years', '12 years', '6 years'], '0.85ⁿ under 0.1833.', 'Applications'],
    ['−6x/((x + 5)(x − 5)) in partial fractions is', '−3/(x + 5) − 3/(x − 5)', ['3/(x + 5) − 3/(x − 5)', '−3/(x + 5) + 3/(x − 5)', '3/(x + 5) + 3/(x − 5)'], 'x = ±5.', 'Partial fractions'],
    ['The sum of n terms of log x + log x² + log x⁴ + … is the first term times', '2ⁿ − 1', ['2ⁿ', 'n²', '2n − 1'], 'Powers of 2.', 'Partial fractions'],
  ],
};
