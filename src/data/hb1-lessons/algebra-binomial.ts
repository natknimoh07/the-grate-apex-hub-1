// Algebra → Permutations, Combinations and the Binomial Theorem. From "MATH 157 ALGEBRA 5"
// (Dr Kwame Piesie, 22 slides). Rewrites the original database lesson algebra-05 (same id, so
// progress is kept). Checked 2026-11-04; teaching text in our own words; every slide example and
// all four trial-exercise sets are worked, plus past-paper patterns. Practises Quiz 5.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraBinomial: Hb1Lesson = {
  id: 'algebra-05',
  order: 5,
  title: 'Permutations, Combinations and the Binomial Theorem',
  summary: 'Factorials; permutations of n objects, k at a time, with repeated groups and in a circle; combinations and their link to permutations, with restricted selections; the binomial theorem with binomial coefficients, general terms, middle and constant terms; and the binomial series for any rational index with approximations — every slide example and all trial exercises worked, plus the past-paper patterns',
  minutes: 32,
  source: 'MATH 157 ALGEBRA 5.pdf',
  quizId: 'albn',
  quizName: 'Quiz · Permutations and Binomial (lesson)',
  pastSets: ['s5'],
  pastTopics: ['binomial-theorem'],
  sections: [
    {
      id: 'bn-perm',
      title: 'Factorials and permutations',
      kicker: 'Arrangements: order matters',
      blocks: [
        { k: 'p', x: 'A <b>permutation</b> is an <b>ordered arrangement</b>. A, B, C can be arranged 6 ways: ABC, ACB, BAC, BCA, CAB, CBA; ABC and CBA count as different.' },
        { k: 'term', name: 'n factorial', def: 'n! = n(n − 1)(n − 2) … 1 for n ∈ N: 2! = 2, 3! = 6, 4! = 24, 5! = 120, 10! = 3 628 800. Key facts: <b>n! = n(n − 1)!</b>, <b>1! = 1</b> and <b>0! = 1</b>. Use n! = n(n − 1)! to cancel: 10!/8! = 10 × 9 = 90.' },
        { k: 'table', head: ['Arrangement', 'Count', 'Slide example'], rows: [
          { c: ['All n distinct objects', 'ⁿPₙ = n!/(n − n)! = <b>n!</b>', 'Words from PARK: 4! = 24'] },
          { c: ['k of n distinct objects', 'ⁿPₖ = <b>n!/(n − k)!</b>', '10 digits two at a time: 10!/8! = 90'] },
          { c: ['n objects with groups of n₁, n₂, … alike', '<b>n!/(n₁! n₂! … nₖ!)</b>', '8 students in two 3-bed rooms and a 2-bed room: 8!/(3!3!2!) = 560'] },
          { c: ['n distinct objects in a circle', 'n!/n = <b>(n − 1)!</b>', 'Rotations of one seating count once'] },
        ] },
        { k: 'step', n: '1', title: 'Trial exercise 1, worked', blocks: [{ k: 'ul', items: [
          'POSSIBILITY: 11 letters with 3 I’s and 2 S’s: 11!/(3!2!) = <b>3 326 400</b>.',
          'A family of 6 at a round table: (6 − 1)! = <b>120</b>.',
          'An 8-character code: A, B, C in any order then 1–5 in any order, no repeats: 3! × 5! = 6 × 120 = <b>720</b> customers.',
          'Passwords from the digits 926002 (two 2s and two 0s): 6!/(2!2!) = <b>180</b>.',
        ] }] },
        { k: 'step', n: '2', title: 'More trials, worked', blocks: [{ k: 'ul', items: [
          'NOTATION: 8 letters, N, O and T twice each: 8!/(2!2!2!) = <b>5040</b>.',
          'THIRTIETH (past paper): 9 letters, T three times, H and I twice: 9!/(3!2!2!) = <b>15 120</b>.',
          'Three letters from RELATION (8 different letters): ⁸P₃ = <b>336</b>. Exactly one vowel (E, A, I, O) and two consonants (R, L, T, N): 4 × ⁴C₂ × 3! = <b>144</b>.',
          '8 people at a round table: 7! = <b>5040</b>.',
          'Even numbers greater than 2000 from 1, 2, 4, 8 used once (four-digit numbers): the last digit is 2, 4 or 8, and the first must then be one of the two remaining digits from {2, 4, 8}; 3 × 2 × 2! = <b>12</b> (= 3!2!).',
          'Multiplication principle (past paper): 3 shells × 4 meats × 3 cheeses × 5 salsas = 180 choices; (n + 2)! + (n + 1)! + n! = n![(n + 2)(n + 1) + (n + 1) + 1] = <b>n!(n + 2)²</b>.',
        ] }] },
      ],
    },
    {
      id: 'bn-comb',
      title: 'Combinations',
      kicker: 'Selections: order does not matter',
      blocks: [
        { k: 'box', title: 'Combinations', tone: 'formula', blocks: [{ k: 'ul', items: [
          'ⁿCₖ = (n choose k) = <b>n!/[(n − k)! k!]</b>.',
          '<b>ⁿCₖ = ⁿPₖ / k!</b>, i.e. ⁿPₖ = k! ⁿCₖ: each selection of k can be ordered k! ways.',
          'Symmetry (textbook): ⁿCₖ = ⁿCₙ₋ₖ, so ²⁰C₁₆ = ²⁰C₄; ⁿC₀ = ⁿCₙ = 1.',
        ] }] },
        { k: 'step', n: '3', title: 'Slide examples', blocks: [{ k: 'ul', items: [
          '4 students from 20 for an essay competition: ²⁰C₄ = (20 × 19 × 18 × 17)/(4 × 3 × 2) = <b>4845</b>.',
          'A team of 2 from M, C, J: MC = CM, MJ = JM, CJ = JC, so <b>3</b> ways; ³C₂ = 3!/(1!2!) = 3.',
        ] }] },
        { k: 'step', n: '4', title: 'Trial exercise 2, worked: restricted selections', blocks: [
          { k: 'p', x: '4 pharmacists from 9 and 3 biologists from 8. “Must be chosen”: put that person in and choose the rest from the others. “Cannot serve”: remove them from the pool.' },
          { k: 'ul', items: [
            'No restriction: ⁹C₄ × ⁸C₃ = 126 × 56 = <b>7056</b>.',
            'A particular pharmacist must serve: ⁸C₃ × ⁸C₃ = 56 × 56 = <b>3136</b>.',
            'A particular biologist cannot serve: ⁹C₄ × ⁷C₃ = 126 × 35 = <b>4410</b>.',
            'A particular pharmacist and a particular biologist must serve: ⁸C₃ × ⁷C₂ = 56 × 21 = <b>1176</b>.',
          ] },
          { k: 'p', x: 'Answering 8 of 13 questions: no restriction ¹³C₈ = <b>1287</b>; the first 2 compulsory: ¹¹C₆ = <b>462</b>; at least 3 of the first 4: ⁴C₃ × ⁹C₅ + ⁴C₄ × ⁹C₄ = 4(126) + 126 = <b>630</b>.' },
        ] },
        { k: 'box', title: 'Permutation or combination?', tone: 'recall', blocks: [{ k: 'p', x: 'Ask: does swapping two chosen items give a <b>new</b> outcome? Yes (codes, seats, words, officers) → permutation. No (committees, teams, hands of cards, sets of questions) → combination. Probability with selections: favourable ways ÷ total ways, e.g. 2 men and 2 women from 6 men and 5 women: ⁶C₂ × ⁵C₂ / ¹¹C₄ = 150/330 = 5/11.' }] },
      ],
    },
    {
      id: 'bn-theorem',
      title: 'The binomial theorem',
      kicker: 'Expanding (a + b)ⁿ',
      blocks: [
        { k: 'box', title: 'The theorem', tone: 'formula', blocks: [{ k: 'ul', items: [
          '(a + b)ⁿ = Σ<sub>k=0</sub><sup>n</sup> (n choose k) aⁿ⁻ᵏ bᵏ, where (n choose k) = ⁿCₖ is the <b>binomial coefficient</b>.',
          'There are <b>n + 1 terms</b>; powers of a fall from n to 0 while powers of b rise from 0 to n.',
          'The <b>(k + 1)th term</b> is T<sub>k+1</sub> = ⁿCₖ aⁿ⁻ᵏ bᵏ: the 4th term uses k = 3.',
          'The coefficients are the rows of <b>Pascal’s triangle</b>: n = 5 gives 1, 5, 10, 10, 5, 1.',
        ] }] },
        { k: 'step', n: '5', title: 'Slide example: (x + 2y)⁵', blocks: [{ k: 'p', x: '= x⁵ + 5x⁴(2y) + 10x³(2y)² + 10x²(2y)³ + 5x(2y)⁴ + (2y)⁵ = <b>x⁵ + 10x⁴y + 40x³y² + 80x²y³ + 80xy⁴ + 32y⁵</b>.' }] },
        { k: 'step', n: '6', title: 'Trial exercise 3, worked', blocks: [{ k: 'ul', items: [
          '(x − 2y)⁵: as above with signs alternating: <b>x⁵ − 10x⁴y + 40x³y² − 80x²y³ + 80xy⁴ − 32y⁵</b>.',
          '(2x − t)⁶ = <b>64x⁶ − 192x⁵t + 240x⁴t² − 160x³t³ + 60x²t⁴ − 12xt⁵ + t⁶</b>.',
          'The 4th term of (b − 3a)⁷: k = 3, ⁷C₃ b⁴(−3a)³ = 35 × (−27) = <b>−945a³b⁴</b>.',
          'The coefficient of x in (x + 5y)⁵: the term ⁵C₄ x (5y)⁴ = <b>3125y⁴</b> x.',
        ] }] },
        { k: 'step', n: '7', title: 'Particular terms, worked (trials and past papers)', blocks: [
          { k: 'p', x: 'Write the general term, collect the power of x, and set it equal to what you want (0 for the constant term).' },
          { k: 'ul', items: [
            'x¹⁰ in (2x − 3)¹⁴: ¹⁴C₁₀ 2¹⁰ (−3)⁴ = 1001 × 1024 × 81 = <b>83 026 944</b>.',
            'x⁴ in (x + 1/x)¹⁰: the power is 10 − 2k = 4, k = 3: <b>120</b>.',
            'x³ in (2x² − 1/(2x))⁶ (as we read the slide): power 12 − 3k = 3, k = 3: 20 × 2³ × (−½)³ = <b>−20</b>.',
            'Middle term of (6x − y/3)¹⁰ (11 terms, so the 6th, k = 5): 252 (6x)⁵(−y/3)⁵ = <b>−8064x⁵y⁵</b>.',
            'Constant term of (x² + 2/x)⁹ (as we read the slide): power 18 − 3k = 0, k = 6: ⁹C₆ × 2⁶ = <b>5376</b>.',
            'Ratio of the x⁵ to the x⁴ term in (2x + 3)²⁰: [²⁰C₅ 2⁵ 3¹⁵]/[²⁰C₄ 2⁴ 3¹⁶] x = (16/5)(2/3)x = <b>32x/15</b>.',
            'Past papers: (2x² + 2/x)⁶ has <b>7 terms</b>; the b⁵ term of (2a − 3b)¹² is the <b>6th</b>; a²b¹³ in (a + b)¹⁵ has coefficient ¹⁵C₁₃ = <b>105</b>; x³⁰ in (2x³ + 4)¹² is the <b>3rd</b> term; the term free of p in (p − 2/p)¹⁰ is the 6th, ¹⁰C₅(−2)⁵ = <b>−8064</b>; the 6th term of (x − 2)ⁿ is −8064x⁵ when <b>n = 10</b>; the middle term of (2x − x/2)¹² is 924x¹².',
            'Past paper: (1 + αx)ⁿ starts 1 + 15x + 90x²: nα = 15 and n(n − 1)α²/2 = 90 give (n − 1)α = 12, so <b>α = 3, n = 5</b>.',
          ] },
        ] },
      ],
    },
    {
      id: 'bn-series',
      title: 'The binomial series for any rational index',
      kicker: 'Negative and fractional powers',
      blocks: [
        { k: 'box', title: 'For any rational n and −1 &lt; x &lt; 1', tone: 'formula', blocks: [{ k: 'ul', items: [
          '(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + … (an infinite series unless n is a positive integer).',
          'The first term must be <b>1</b>: write (a + x)ⁿ as <b>aⁿ(1 + x/a)ⁿ</b> first, valid for |x/a| &lt; 1.',
        ] }] },
        { k: 'step', n: '8', title: 'Worked', blocks: [{ k: 'ul', items: [
          '(1 − x/2)¹⁰: 1 + 10(−x/2) + 45(x²/4) + … = <b>1 − 5x + (45/4)x² + …</b>.',
          '(2x − 1)⁶ (first five): 64x⁶ − 192x⁵ + 240x⁴ − 160x³ + 60x² (then −12x + 1).',
          '(3 − 6x)⁸ (first five): 6561 − 104 976x + 734 832x² − 2 939 328x³ + 7 348 320x⁴.',
          '(1 − 2y)(1 + x/2)⁴ (as we read the slide): (1 + x/2)⁴ = 1 + 2x + (3/2)x² + (1/2)x³ + (1/16)x⁴, then multiply each term by 1 and by −2y.',
          '√1.001 = (1 + 0.001)<sup>1/2</sup> ≈ 1 + 0.0005 − 0.000000125 = <b>1.0005</b> (4 d.p.).',
          '⁴√(1 + x) + ⁴√(1 − x): (1 ± x)<sup>1/4</sup> = 1 ± x/4 − (3/32)x² ± …, so the x terms cancel: 2 − (3/16)x², giving <b>a = 2, b = 3/16</b>.',
          '∛0.994 = (1 − 0.006)<sup>1/3</sup> ≈ 1 − 0.002 − 0.000004 ≈ 0.998.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'n! = n(n − 1)!, 0! = 1. ⁿPₖ = n!/(n − k)!; repeats divide by n₁! n₂! …; circle (n − 1)!.',
          'ⁿCₖ = n!/[(n − k)!k!] = ⁿPₖ/k!. “Must” → include and choose the rest; “cannot” → remove from the pool.',
          '(a + b)ⁿ has n + 1 terms; T<sub>k+1</sub> = ⁿCₖ aⁿ⁻ᵏbᵏ; set the power of x to find a particular term.',
          '(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + … for |x| &lt; 1, any rational n; make the first term 1.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['0! equals', '1', ['0', 'Undefined', '10'], 'By definition.', 'Factorials'],
    ['10!/8! =', '90', ['80', '45', '2'], '10 × 9.', 'Factorials'],
    ['(n + 2)! + (n + 1)! + n! simplifies to', 'n!(n + 2)²', ['n!(n + 1)²', '(n + 2)!(n + 1)', 'n!(n² + 3)'], 'Factor out n!.', 'Factorials'],
    ['Words from the letters of PARK', '24', ['16', '12', '256'], '4!.', 'Permutations'],
    ['Arrangements of POSSIBILITY (3 I’s, 2 S’s)', '3 326 400', ['39 916 800', '6 652 800', '1 663 200'], '11!/(3!2!).', 'Permutations'],
    ['8 students in two 3-bed rooms and one 2-bed room', '560', ['40 320', '1120', '280'], '8!/(3!3!2!).', 'Permutations'],
    ['A family of 6 around a round table', '120', ['720', '36', '60'], '(6 − 1)!.', 'Permutations'],
    ['Codes: A, B, C in any order then 1–5 in any order', '720', ['8!', '120', '15'], '3! × 5!.', 'Permutations'],
    ['Passwords from the digits 926002', '180', ['720', '360', '90'], '6!/(2!2!).', 'Permutations'],
    ['Arrangements of NOTATION', '5040', ['40 320', '10 080', '2520'], '8!/(2!2!2!).', 'Permutations'],
    ['Three-letter arrangements from RELATION', '336', ['56', '512', '120'], '⁸P₃.', 'Permutations'],
    ['ⁿCₖ is related to ⁿPₖ by', 'ⁿCₖ = ⁿPₖ / k!', ['ⁿCₖ = k! ⁿPₖ', 'ⁿCₖ = ⁿPₖ / n!', 'ⁿCₖ = ⁿPₖ − k!'], 'Remove the order.', 'Combinations'],
    ['4 students from a class of 20', '4845', ['116 280', '80', '1140'], '²⁰C₄.', 'Combinations'],
    ['4 of 9 pharmacists and 3 of 8 biologists, no restriction', '7056', ['3136', '4410', '1176'], '126 × 56.', 'Combinations'],
    ['…if a particular pharmacist must be chosen', '3136', ['7056', '4410', '1176'], '⁸C₃ × ⁸C₃.', 'Combinations'],
    ['8 of 13 questions, the first 2 compulsory', '462', ['1287', '630', '330'], '¹¹C₆.', 'Combinations'],
    ['8 of 13, at least 3 of the first 4', '630', ['504', '462', '1287'], '4(126) + 126.', 'Combinations'],
    ['How many terms in (2x² + 2/x)⁶?', '7', ['6', '12', '8'], 'n + 1.', 'Binomial'],
    ['The coefficient of a²b¹³ in (a + b)¹⁵ is', '105', ['15', '210', '455'], '¹⁵C₁₃.', 'Binomial'],
    ['The 4th term of (b − 3a)⁷ is', '−945a³b⁴', ['945a³b⁴', '−315a³b⁴', '−945a⁴b³'], 'k = 3.', 'Binomial'],
    ['The term independent of p in (p − 2/p)¹⁰ is', '−8064', ['8064', '252', '−252'], 'k = 5.', 'Binomial'],
    ['x³⁰ appears in which term of (2x³ + 4)¹²?', 'The 3rd', ['The 10th', 'The 2nd', 'The 11th'], '3(12 − k) = 30.', 'Binomial'],
    ['The coefficient of x⁴ in (x + 1/x)¹⁰ is', '120', ['210', '45', '252'], 'k = 3.', 'Binomial'],
    ['(1 + αx)ⁿ = 1 + 15x + 90x² + …: α and n are', 'α = 3, n = 5', ['α = 5, n = 3', 'α = 2, n = 6', 'α = 15, n = 1'], 'nα = 15.', 'Binomial'],
    ['The binomial series for a rational index needs', '|x| below 1', ['x above 1', 'n a whole number', 'x equal to 1'], 'Convergence.', 'Series'],
    ['√1.001 to 4 decimal places is', '1.0005', ['1.0010', '1.0001', '1.0050'], '1 + 0.001/2.', 'Series'],
    ['⁴√(1 + x) + ⁴√(1 − x) ≈ a − bx². a and b are', '2 and 3/16', ['2 and 3/32', '1 and 3/16', '2 and 1/4'], 'x terms cancel.', 'Series'],
  ],
};
