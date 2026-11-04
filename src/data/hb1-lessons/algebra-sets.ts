// Algebra → Summation Notation and Set Theory. From "MATH 157 ALGEBRA 1" (Dr Kwame Piesie, 34
// slides). Rewrites the original database lesson algebra-01 (same id, so progress is kept).
// Checked 2026-11-04; teaching text in our own words; every slide example and trial exercise is
// worked out here. Practises Quiz 1.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraSets: Hb1Lesson = {
  id: 'algebra-01',
  order: 1,
  title: 'Summation Notation and Set Theory',
  summary: 'Sigma notation (summand, index of summation, the three standard sums and the five rules, with every exercise worked); sets, set notation and set-builder form, membership and subsets (proper or not), cardinality and the standard number sets N, Z, Q, I, R and C; power sets; intersection, union, absolute and relative complements; the commutative, associative and distributive properties, De Morgan’s laws and the principle of duality; and two- and three-set Venn-diagram problems',
  minutes: 28,
  source: 'MATH 157 ALGEBRA 1.pdf',
  quizId: 'alst',
  quizName: 'Quiz · Summation and Sets (lesson)',
  pastSets: ['s1'],
  sections: [
    {
      id: 'st-sigma',
      title: 'Sigma (summation) notation',
      kicker: 'A shorthand for long sums',
      blocks: [
        { k: 'p', x: 'The capital Greek letter <b>Σ (sigma)</b> stands for “add up”. If five babies weigh x₁, x₂, x₃, x₄ and x₅, their total x₁ + x₂ + x₃ + x₄ + x₅ is written <b>Σ<sub>k=1</sub><sup>5</sup> x<sub>k</sub></b>: start at k = 1, stop at k = 5, and add x<sub>k</sub> each time.' },
        { k: 'table', head: ['Part of Σ<sub>k=1</sub><sup>5</sup> x<sub>k</sub>', 'Name', 'Meaning'], rows: [
          { c: ['x<sub>k</sub>', '<b>Summand</b>', 'The general term being added'] },
          { c: ['k', '<b>Index of summation</b>', 'A <b>dummy variable</b>: any letter gives the same sum'] },
          { c: ['k = 1 (below) and 5 (above)', 'Lower and upper limits', 'x₁ is the first item, x₅ the last; the number of terms is upper − lower + 1'] },
        ] },
        { k: 'step', n: '1', title: 'Worked example: five babies', blocks: [{ k: 'p', x: 'x₁ = 3.2, x₂ = 3.7, x₃ = 1.4, x₄ = 2.8, x₅ = 3.3 kg: Σx<sub>k</sub> = 3.2 + 3.7 + 1.4 + 2.8 + 3.3 = <b>14.4 kg</b>. In Σ<sub>k=1</sub><sup>5</sup> k², the summand is k²: 1 + 4 + 9 + 16 + 25 = 55.' }] },
        { k: 'box', title: 'The three standard sums', tone: 'formula', blocks: [{ k: 'ul', items: [
          'Σ<sub>k=1</sub><sup>n</sup> k = <b>n(n + 1)/2</b>',
          'Σ<sub>k=1</sub><sup>n</sup> k² = <b>n(n + 1)(2n + 1)/6</b>',
          'Σ<sub>k=1</sub><sup>n</sup> k³ = <b>n²(n + 1)²/4</b>, which is the square of the first sum',
        ] }] },
        { k: 'table', head: ['Rule', 'Statement', 'In words'], rows: [
          { c: ['1', 'Σ αx<sub>k</sub> = α Σ x<sub>k</sub>', 'A constant factor comes outside'] },
          { c: ['2', 'Σ<sub>k=1</sub><sup>n</sup> α = nα', 'Adding a constant n times'] },
          { c: ['3', 'Σ(x<sub>k</sub> + y<sub>k</sub>) = Σx<sub>k</sub> + Σy<sub>k</sub>', 'A sum splits term by term'] },
          { c: ['4', 'Σ<sub>k=1</sub><sup>n</sup> k = Σ<sub>k=0</sub><sup>n−1</sup> (k + 1)', 'Lower both limits by 1, raise k by 1'] },
          { c: ['5', 'Σ<sub>k=1</sub><sup>n</sup> k = Σ<sub>k=2</sub><sup>n+1</sup> (k − 1)', 'Raise both limits by 1, lower k by 1'] },
        ] },
        { k: 'step', n: '2', title: 'The slide exercises, worked', blocks: [{ k: 'ul', items: [
          '<b>Σ<sub>k=91</sub><sup>237</sup> k</b>: a sum that does not start at 1 is (sum to 237) − (sum to 90) = 237(238)/2 − 90(91)/2 = 28 203 − 4095 = <b>24 108</b>.',
          '<b>Σ<sub>k=1</sub><sup>50</sup> k²</b> = 50(51)(101)/6 = <b>42 925</b>.',
          '<b>Σ<sub>k=4</sub><sup>92</sup> k³</b> = (92 × 93/2)² − (3 × 4/2)² = 4278² − 6² = 18 301 284 − 36 = <b>18 301 248</b>.',
        ] }] },
        { k: 'box', title: 'Past-paper pattern', tone: 'gold', blocks: [{ k: 'p', x: 'Split a mixed sum with rules 1–3, then use the standard sums: Σ<sub>n=1</sub><sup>100</sup> 5n = 5 × 5050 = 25 250; Σ<sub>n=1</sub><sup>20</sup> (⅔n + ⅓) = ⅔(210) + ⅓(20) = 140 + 20/3 ≈ 146.67. A (−1)<sup>k</sup> term adds to 0 over an even number of terms.' }] },
      ],
    },
    {
      id: 'st-sets',
      title: 'Sets and the number sets',
      kicker: 'Collections of well-defined objects',
      blocks: [
        { k: 'term', name: 'Set', def: 'A collection of <b>well-defined</b> objects (you can always tell whether something belongs), called its <b>elements</b> or <b>members</b>: the days of the week, the regions of Ghana, the counting numbers less than 10.' },
        { k: 'p', x: 'Sets are named with <b>capital letters</b> and their members go in <b>curly braces</b>: A = {2, 4, 8} has three elements. A set is given by <b>listing</b> its members or by a <b>defining property</b> (set-builder form). B = {x ∈ N : 1 ≤ x ≤ 10} and D = {1, 2, …, 10} are the <b>same</b> set. Order and repetition do not matter: {1, 2} = {2, 1, 1}.' },
        { k: 'table', head: ['Symbol', 'Read as', 'Relates'], rows: [
          { c: ['x ∈ A', 'x is a member of A (the <b>membership</b> symbol)', 'An <b>element</b> to a set'] },
          { c: ['A ⊂ B', 'A is a <b>proper</b> subset of B: inside B and not equal to it', 'Two <b>sets</b> (the <b>inclusion</b> symbol)'] },
          { c: ['A ⊆ B', 'A is a subset of B, possibly equal to it', 'Two sets'] },
          { c: ['B ⊃ A', 'B is a superset of A; B contains A', 'Two sets'] },
          { c: ['n(A) or card A', 'The <b>cardinal number</b> (cardinality): how many elements', 'A = {2, 4, 8} has n(A) = 3'] },
        ] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'ul', items: [
          'The slide describes A ⊆ B as “A is at the same time equal to B”. Strictly, A ⊆ B means A is a subset that <b>may</b> equal B; equal sets are subsets of each other but neither is a <b>proper</b> subset.',
          'The irrational examples list “π = 22/7”. π is irrational; <b>22/7 is only a rational approximation</b> of it (π = 3.14159…, 22/7 = 3.142857…).',
        ] }] },
        { k: 'table', head: ['Set', 'Name', 'What it contains'], rows: [
          { c: ['<b>N</b>', 'Natural (counting) numbers', '1, 2, 3, …: the positive integers'] },
          { c: ['<b>Z</b>', 'Integers', 'Positive and negative whole numbers and <b>0</b>'] },
          { c: ['<b>Q</b>', 'Rational numbers', 'Fractions p/q with q ≠ 0 (in simplest form); all terminating or repeating decimals'] },
          { c: ['<b>I</b>', 'Irrational numbers (surds)', 'Cannot be written as a fraction: π, e, √2, √3, √5 (square roots of non-perfect squares)'] },
          { c: ['<b>R</b>', 'Real numbers', 'R = Z ∪ N ∪ Q ∪ I: every rational and irrational number'] },
          { c: ['<b>C</b>', 'Complex numbers', 'a + bi with a, b real and <b>i = √−1</b>, invented to handle square roots of negatives'] },
        ] },
        { k: 'box', title: 'Strictly speaking: how they nest', tone: 'gold', blocks: [{ k: 'p', x: 'N ⊂ Z ⊂ Q ⊂ R ⊂ C, and I = R \\ Q. So −4 is an integer, rational and real (but not natural); 0.75 = 3/4 and 0.333… = 1/3 are rational; √9 = 3 is rational, while √8 is irrational. Some books include 0 in N; this course does not.' }] },
      ],
    },
    {
      id: 'st-power',
      title: 'Power sets and set operations',
      kicker: 'Subsets, ∩, ∪ and complements',
      blocks: [
        { k: 'term', name: 'Power set P(A) or 2<sup>A</sup>', def: 'The set of <b>all subsets</b> of A. For A = {1, 2}: P(A) = {∅, {1}, {2}, {1, 2}}. The null set is a subset of every set, by convention. A set with n elements has <b>2ⁿ</b> subsets.' },
        { k: 'box', title: 'Element or subset?', tone: 'recall', blocks: [{ k: 'ul', items: [
          '{1} ⊂ A is <b>true</b> ({1} is a subset of A).',
          '{1} ⊂ P(A) is <b>false</b>: {1} is an <b>element</b> of P(A), so {1} ∈ P(A) is true.',
          '∅ ∈ P(A) and ∅ ⊂ P(A) are <b>both true</b>.',
        ] }] },
        { k: 'table', head: ['Operation', 'Meaning', 'Slide example'], rows: [
          { c: ['<b>Intersection</b> A ∩ B', 'Elements common to both', '{2, 5, 7, 11} ∩ {3, 5, 7, 11} = {5, 7, 11}'] },
          { c: ['<b>Union</b> A ∪ B', 'Everything in either, put together', '{2, 4, 6, 8} ∪ {2, 3, 5, 7} = {2, 3, 4, 5, 6, 7, 8}'] },
          { c: ['<b>Absolute complement</b> A′, Aᶜ, Ā', 'Elements of the universal set U not in A', 'A = {1, …, 5}, U = {1, …, 10}: Aᶜ = {6, …, 10}'] },
          { c: ['<b>Relative complement</b> A − B = A \\ B', 'In A but not in B (the <b>set difference</b>, the complement of B in A) = A ∩ Bᶜ = A − (A ∩ B)', '{1, 2, 4, 6, 8, 10} \\ {1, 3, 4, 10} = {2, 6, 8}'] },
        ] },
        { k: 'p', x: 'More differences: {1, 2, 3} \\ {2, 3, 4} = {1} and {2, 3, 4} − {1, 2, 3} = {4} (order matters). R \\ Q = the irrational numbers; Z \\ N = the non-positive integers {0, −1, −2, …}.' },
        { k: 'step', n: '3', title: 'Worked example: U = {1, …, 20}', blocks: [{ k: 'p', x: 'A = {2, 4, 6, 8, 10, 12}, B = {1, 3, 5, …, 17} (odd numbers to 17). A ∩ B = <b>∅</b> (no number is both even and odd); A ∪ B = {1, 2, 3, …, 13, 15, 17}; B′ = {2, 4, 6, 8, 10, 12, 14, 16, 18, 19, 20}.' }] },
        { k: 'step', n: '4', title: 'The trial exercise, worked', blocks: [
          { k: 'p', x: 'U = {1, …, 40}; A = {2n} up to 30 = {2, 4, …, 30}; B = {2n + 1} up to 25 with n ∈ N = {3, 5, …, 25}; D = primes below 40 = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37}.' },
          { k: 'ul', items: [
            '(A ∩ B) ∪ D: A ∩ B = ∅, so the answer is <b>D</b> itself.',
            '(A ∩ B) ∩ D = <b>∅</b>.',
            'A′ ∩ D: primes that are not even numbers up to 30, so every prime except 2: <b>{3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37}</b>.',
            'B′ ∪ (A ∩ D′): A ∩ D′ = the even numbers 4–30, all already in B′, so the answer is <b>B′ = {1, 2, 4, 6, …, 24, 26, 27, 28, …, 40}</b>.',
          ] },
        ] },
      ],
    },
    {
      id: 'st-laws',
      title: 'Laws of sets, De Morgan and duality',
      kicker: 'The algebra of sets',
      blocks: [
        { k: 'table', head: ['Property', 'Statement', 'Slide check'], rows: [
          { c: ['<b>Commutative</b>', 'A ∩ B = B ∩ A; A ∪ B = B ∪ A', '{1, …, 5} and {2, 4, 6, 8, 10}: ∩ = {2, 4}, ∪ = {1, 2, 3, 4, 5, 6, 8, 10}'] },
          { c: ['<b>Associative</b>', '(A ∩ B) ∩ D = A ∩ (B ∩ D); same for ∪', '{1, 2, 3, 4}, {2, 4, 6, 8}, {3, 4, 5, 6}: ∩ = {4}, ∪ = {1, 2, 3, 4, 5, 6, 8}'] },
          { c: ['<b>Distributive</b>', 'A ∪ (B ∩ D) = (A ∪ B) ∩ (A ∪ D); A ∩ (B ∪ D) = (A ∩ B) ∪ (A ∩ D)', '{1, 2, 3, 4}, {1, 3, 5, 7}, {2, 3, 5, 7}: both sides = {1, 2, 3, 4, 5, 7}'] },
        ] },
        { k: 'box', title: 'De Morgan’s laws', tone: 'formula', blocks: [{ k: 'ul', items: [
          '(A ∪ B)′ = A′ ∩ B′: not in either = outside both.',
          '(A ∩ B)′ = A′ ∪ B′: not in both = outside at least one.',
          'For n sets: (∪Aₖ)′ = ∩Aₖ′ and (∩Aₖ)′ = ∪Aₖ′. Taking a complement <b>flips ∪ and ∩</b>.',
        ] }] },
        { k: 'p', x: 'The <b>principle of duality</b>, the most important property of set algebra: swap <b>∪ ↔ ∩</b> and <b>U ↔ ∅</b> in any true statement and the result (its <b>dual</b>) is also true. Complements stay as they are. The dual of (A ∩ B) ∪ D is (A ∪ B) ∩ D; the dual of A ∩ ((B′ ∩ A) ∪ B)′ = ∅ is A ∪ ((B′ ∪ A) ∩ B)′ = U. A statement whose dual is itself is <b>self-dual</b>.' },
        { k: 'step', n: '5', title: 'The duality exercise, worked', blocks: [{ k: 'ul', items: [
          'A ∪ (B ∩ A) = A → <b>A ∩ (B ∪ A) = A</b> (both are absorption laws).',
          'A ∪ ((B′ ∪ A) ∩ B)′ = U → <b>A ∩ ((B′ ∩ A) ∪ B)′ = ∅</b>.',
          '(A ∪ B′)′ ∩ B = A′ ∩ B → <b>(A ∩ B′)′ ∪ B = A′ ∪ B</b>.',
          'A ∩ A′ = ∅ → <b>A ∪ A′ = U</b>, and the dual of A ∪ A′ = U is A ∩ A′ = ∅: the two are duals of each other.',
        ] }] },
      ],
    },
    {
      id: 'st-venn',
      title: 'Venn-diagram problems',
      kicker: 'Fill the overlap first',
      blocks: [
        { k: 'box', title: 'Counting formulas', tone: 'formula', blocks: [{ k: 'ul', items: [
          'Two sets: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).',
          'Three sets: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C).',
          'Work from the middle out: the triple overlap, then each “two only” region, then each “one only”.',
        ] }] },
        { k: 'step', n: '6', title: 'Worked example: languages in HB1', blocks: [{ k: 'p', x: '20 students, 16 French, 10 English, everyone at least one. Let x speak both: (16 − x) + x + (10 − x) = 20, so 26 − x = 20 and <b>x = 6</b>. Only French 10, only English 4: <b>14</b> speak only one language.' }] },
        { k: 'step', n: '7', title: 'The three-book trial, worked', blocks: [{ k: 'ul', items: [
          '50 students: Mathematics 22, English 22, Life Skills 25; M and E 7, M and L 6, E and L 9; everyone had at least one book (assumed).',
          '<b>All three</b>: 50 = 22 + 22 + 25 − 7 − 6 − 9 + x = 47 + x, so <b>x = 3</b>.',
          '<b>Exactly two</b>: (7 − 3) + (6 − 3) + (9 − 3) = 4 + 3 + 6 = <b>13</b>.',
          '<b>Only Life Skills</b>: 25 − 3 − 6 − 3 = <b>13</b> (25 minus the L-and-M only 3, L-and-E only 6, and all three 3).',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Σ: summand, dummy index; Σk = n(n+1)/2, Σk² = n(n+1)(2n+1)/6, Σk³ = [n(n+1)/2]²; a sum from m is S(n) − S(m − 1).',
          '∈ for elements, ⊂ (proper) and ⊆ for sets; n(A) cardinality; N ⊂ Z ⊂ Q ⊂ R ⊂ C, I = R \\ Q.',
          'P(A) has 2ⁿ members; {1} ∈ P(A), ∅ ∈ and ⊂ P(A).',
          'A \\ B = A ∩ B′; De Morgan flips ∪ and ∩; duality swaps ∪ ↔ ∩ and U ↔ ∅.',
          'Venn: fill the centre first; n(A ∪ B) = n(A) + n(B) − n(A ∩ B).',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The five babies (3.2, 3.7, 1.4, 2.8, 3.3 kg) weigh in total', '14.4 kg', ['13.4 kg', '14.8 kg', '12.9 kg'], 'Add the five.', 'Summation'],
    ['In Σ(k=1 to 5) k², the letter k is the', 'Index of summation', ['Summand', 'Upper limit', 'Constant term'], 'A dummy variable.', 'Summation'],
    ['Σ(k=1 to n) k equals', 'n(n + 1)/2', ['n(n + 1)(2n + 1)/6', 'n²(n + 1)²/4', 'n(n − 1)/2'], 'Standard sum.', 'Summation'],
    ['Σ(k=1 to 50) k² equals', '42 925', ['1275', '42 500', '44 200'], '50 × 51 × 101 / 6.', 'Summation'],
    ['Σ(k=91 to 237) k equals', '24 108', ['28 203', '24 199', '23 940'], '28 203 − 4095.', 'Summation'],
    ['Σ(k=1 to n) α (α constant) equals', 'nα', ['α', 'α/n', 'n + α'], 'Rule 2.', 'Summation'],
    ['Σ(n=1 to 100) 5n equals', '25 250', ['5050', '500', '25 500'], '5 × 5050.', 'Summation'],
    ['The symbol ∈ relates', 'An element to a set', ['Two sets', 'Two elements', 'A set to its power set only'], 'Membership.', 'Sets'],
    ['A ⊂ B (proper subset) means A is in B and', 'Not equal to B', ['Equal to B', 'Larger than B', 'Disjoint from B'], 'Inclusion symbol.', 'Sets'],
    ['If A = {2, 4, 8}, n(A) is', '3', ['8', '14', '2'], 'Cardinality.', 'Sets'],
    ['−4 is best classified as', 'An integer, so rational and real', ['A natural number, so an integer', 'An irrational number (a surd)', 'A positive counting number'], 'Z includes negatives.', 'Sets'],
    ['Which is irrational?', '√5', ['22/7', '√9', '0.75'], 'Not a fraction.', 'Sets'],
    ['R \\ Q is the set of', 'Irrational numbers', ['Integers', 'Natural numbers', 'Complex numbers'], 'Reals minus rationals.', 'Sets'],
    ['A set with 4 elements has how many subsets?', '16', ['8', '4', '24'], '2⁴.', 'Power set'],
    ['For A = {1, 2}, which is FALSE?', '{1} ⊂ P(A)', ['{1} ∈ P(A)', '∅ ∈ P(A)', '∅ ⊂ P(A)'], '{1} is an element of P(A).', 'Power set'],
    ['{2, 5, 7, 11} ∩ {3, 5, 7, 11} =', '{5, 7, 11}', ['{2, 3, 5, 7, 11}', '{2, 3}', '{7, 11}'], 'Common elements.', 'Operations'],
    ['{1, 2, 4, 6, 8, 10} \\ {1, 3, 4, 10} =', '{2, 6, 8}', ['{3}', '{1, 4, 10}', '{2, 3, 6, 8}'], 'In A, not in B.', 'Operations'],
    ['A \\ B can also be written as', 'A ∩ B′', ['A ∪ B′', 'A′ ∩ B', 'A′ ∪ B'], 'Relative complement.', 'Operations'],
    ['(A ∪ B)′ equals', 'A′ ∩ B′', ['A′ ∪ B′', 'A ∩ B', 'A′ ∪ B'], 'De Morgan.', 'Laws'],
    ['The dual of (A ∩ B) ∪ D is', '(A ∪ B) ∩ D', ['(A ∩ B) ∩ D', '(A′ ∪ B′) ∩ D′', '(A ∪ B) ∪ D'], 'Swap ∪ and ∩.', 'Laws'],
    ['Duality swaps ∪ with ∩ and', 'U with ∅', ['A with A′', '∈ with ⊂', 'N with Z'], 'Complements stay.', 'Laws'],
    ['A ∪ (B ∩ D) = (A ∪ B) ∩ (A ∪ D) is the', 'Distributive property', ['Commutative property', 'Associative property', 'De Morgan law'], '∪ over ∩.', 'Laws'],
    ['20 students, 16 French, 10 English, all at least one: both =', '6', ['4', '10', '14'], '26 − 20.', 'Venn'],
    ['In the three-book problem, how many had all three books?', '3', ['7', '13', '6'], '50 − 47.', 'Venn'],
    ['n(A) = 50, n(B) = 40, n(A ∪ B) = 70: n(A ∩ B) =', '20', ['10', '30', '90'], '50 + 40 − 70.', 'Venn'],
  ],
};
