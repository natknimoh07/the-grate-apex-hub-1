// Algebra → Matrices. From "MATH 157 ALGEBRA 8" (Dr Kwame Piesie, 35 slides), plus Gaussian
// elimination worked on the past-paper system (the deck names it but does not show it).
// Rewrites the original database lesson algebra-08 (same id, so progress is kept). Checked
// 2026-11-04; teaching text in our own words; every slide example and trial is worked; two
// past-paper keys were corrected in the bank. Practises Quiz 8.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraMatrices: Hb1Lesson = {
  id: 'algebra-08',
  order: 8,
  title: 'Matrices: Operations, Determinants, Inverses and Linear Systems',
  summary: 'Matrix vocabulary (elements, order, square, zero, identity, singular, symmetric and skew-symmetric); addition, subtraction, scalar and matrix multiplication; the transpose and its rules; determinants of 2 × 2 and 3 × 3 matrices and their properties; minors, cofactors, the adjoint and inverses; and solving systems by Cramer’s rule and Gaussian elimination — every slide example and trial worked',
  minutes: 34,
  source: 'MATH 157 ALGEBRA 8.pdf',
  quizId: 'almx',
  quizName: 'Quiz · Matrices (lesson)',
  pastSets: ['s8'],
  pastTopics: ['matrices'],
  sections: [
    {
      id: 'mx-defs',
      title: 'What a matrix is',
      kicker: 'A rectangular array',
      blocks: [
        { k: 'term', name: 'Matrix', def: 'A rectangular array of numbers (<b>elements</b> or entries) in <b>rows</b> and <b>columns</b>, enclosed in brackets. Its <b>order</b> (dimension) is rows × columns: [[1, 2, 3], [4, 5, 6]] is <b>2 × 3</b>. The element in row i, column j is <b>aᵢⱼ</b>.' },
        { k: 'table', head: ['Type', 'Meaning'], rows: [
          { c: ['<b>Square</b>', 'As many rows as columns (2 × 2, 3 × 3)'] },
          { c: ['<b>Null (zero)</b>', 'Every element 0 (any order)'] },
          { c: ['<b>Identity (unit) I</b>', 'Square, with 1 on the <b>leading diagonal</b> and 0 elsewhere; AI = IA = A, like multiplying by 1'] },
          { c: ['<b>Singular</b> (non-invertible)', '<b>|A| = 0</b>: it has no inverse, since A⁻¹ = (1/|A|) adj A'] },
          { c: ['<b>Symmetric</b>', 'Aᵀ = A: aᵢⱼ = aⱼᵢ'] },
          { c: ['<b>Skew-symmetric</b> (textbook)', 'Aᵀ = −A: aᵢⱼ = −aⱼᵢ, so the diagonal is all 0'] },
        ] },
        { k: 'step', n: '1', title: 'Worked', blocks: [{ k: 'ul', items: [
          'In A = [[1, 2, 3, 4], [12, 3, 4, 1], [13, 14, 1, 2]] (3 × 4), a₂₃ is row 2, column 3: <b>4</b>.',
          'When is [[k, 6], [k + 4, 2k]] singular? 2k² − 6(k + 4) = 0 → k² − 3k − 12 = 0 → <b>k = (3 ± √57)/2</b>.',
          '[[5, −5], [3, −3]] is singular: −15 + 15 = 0 (its rows are multiples).',
          'Skew-symmetric [[a, 2, −3], [b, c, 5], [d, e, f]]: a = c = f = 0, b = −2, d = 3, e = −5, so a + b + c + d + e + f = <b>−4</b>.',
        ] }] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The slide calls [[4, 1], [8, −2]] singular, but its determinant is 4(−2) − 1(8) = <b>−16</b>, not 0. With +2 in the corner, [[4, 1], [8, 2]] gives 8 − 8 = 0, which is probably what was meant.' }] },
      ],
    },
    {
      id: 'mx-ops',
      title: 'Adding, subtracting and multiplying',
      kicker: 'Same size to add; inner sizes match to multiply',
      blocks: [
        { k: 'p', x: '<b>Add or subtract</b> only matrices of the <b>same order</b>, element by element. With A = [[3, 4], [9, 1]] and B = [[10, 6], [7, 5]]: A + B = [[13, 10], [16, 6]]; A − B = [[−7, −2], [2, −4]]. A <b>scalar</b> α multiplies every element.' },
        { k: 'p', x: '<b>Multiply</b> AB only if the number of <b>columns of A equals the rows of B</b>; (m × n)(n × p) gives <b>m × p</b>. Each entry is a row of A times a column of B: [[a, b], [c, d]][[e, f], [g, h]] = [[ae + bg, af + bh], [ce + dg, cf + dh]]. So AB = [[3(10) + 4(7), 3(6) + 4(5)], [9(10) + 7, 9(6) + 5]] = <b>[[58, 38], [97, 59]]</b>. A 2 × 3 times a 3 × 4 has <b>4 columns</b>.' },
        { k: 'box', title: 'Remember', tone: 'recall', blocks: [{ k: 'ul', items: ['Matrix multiplication is <b>not commutative</b>: in general AB ≠ BA.', 'A² = A × A (only for square A).', 'Equal matrices agree in <b>every</b> entry.'] }] },
        { k: 'step', n: '2', title: 'The trial: B = [[13, 5, 7], [1, 9, 8], [9, 12, 3]], C = [[3, 8, 7], [0, 2, 5], [4, 6, 3]]', blocks: [{ k: 'ul', items: [
          '2B + C = <b>[[29, 18, 21], [2, 20, 21], [22, 30, 9]]</b>.',
          'C − B = <b>[[−10, 3, 0], [−1, −7, −3], [−5, −6, 0]]</b>.',
          'C² = <b>[[37, 82, 82], [20, 34, 25], [24, 62, 67]]</b> (e.g. the top-left is 3·3 + 8·0 + 7·4 = 37).',
        ] }] },
        { k: 'box', title: 'Strictly speaking: an inconsistent past question', tone: 'gold', blocks: [{ k: 'p', x: '[[0, −x], [3x − 2, 5]] = [[0, 7x + 14], [x + 8, 5]]: 3x − 2 = x + 8 gives x = 5 (the paper’s answer), but −x = 7x + 14 needs x = −7/4. Since equal matrices must agree everywhere, strictly <b>no</b> x works; pick 5 in the exam, as the paper expects.' }] },
      ],
    },
    {
      id: 'mx-trans',
      title: 'The transpose',
      kicker: 'Rows become columns',
      blocks: [
        { k: 'p', x: 'Aᵀ swaps rows and columns: if A = [aᵢⱼ] is m × n, Aᵀ = [aⱼᵢ] is <b>n × m</b>. A = [[2, 1, 4], [3, 5, 0], [7, 3, 9]] has Aᵀ = <b>[[2, 3, 7], [1, 5, 3], [4, 0, 9]]</b>.' },
        { k: 'box', title: 'Rules', tone: 'formula', blocks: [{ k: 'ul', items: ['Symmetric means Aᵀ = A.', '(A + B)ᵀ = Aᵀ + Bᵀ; (αA)ᵀ = αAᵀ.', '<b>(AB)ᵀ = BᵀAᵀ</b>: the order reverses.', '(Aᵀ)ᵀ = A.'] }] },
      ],
    },
    {
      id: 'mx-det',
      title: 'Determinants',
      kicker: 'One number from a square matrix',
      blocks: [
        { k: 'box', title: 'Formulas', tone: 'formula', blocks: [{ k: 'ul', items: [
          '2 × 2: |[[a, b], [c, d]]| = <b>ad − bc</b>.',
          '3 × 3 (expand along the top row): |A| = a(ei − fh) − b(di − fg) + c(dh − eg). Signs go + − +.',
        ] }] },
        { k: 'step', n: '3', title: 'Slide examples', blocks: [{ k: 'ul', items: [
          'T = [[9, 5], [10, 4]]: 36 − 50 = <b>−14</b>.',
          'A = [[3, 8, 7], [0, 2, 5], [4, 6, 3]]: 3(6 − 30) − 8(0 − 20) + 7(0 − 8) = −72 + 160 − 56 = <b>32</b>.',
        ] }] },
        { k: 'table', head: ['Property', 'Effect'], rows: [
          { c: ['|I|', '1'] },
          { c: ['Swap two rows (or columns)', 'Multiplies |A| by −1'] },
          { c: ['Multiply one row by k', 'Multiplies |A| by k (so |kA| = kⁿ|A| for n × n)'] },
          { c: ['Transpose', '<b>|Aᵀ| = |A|</b>'] },
          { c: ['A row (column) of zeros, two identical rows, or one row a multiple of another', '|A| = 0'] },
          { c: ['Add a multiple of one row to another (textbook)', 'No change: the basis of row reduction'] },
          { c: ['Product (textbook)', '|AB| = |A||B|'] },
        ] },
        { k: 'step', n: '4', title: 'The trial determinants, and past papers', blocks: [{ k: 'ul', items: [
          '[[1, 5, 8], [8, 2, −3], [5, 4, 2]]: <b>37</b>. [[8, 7], [7, −3]]: −24 − 49 = <b>−73</b>. [[5, 7], [0, 3]]: <b>15</b>. [[1, 8, 7], [8, 7, 8], [7, 2, 3]]: <b>30</b>.',
          'With |A| = 3 for A = [[1, 5, −6], [−1, −4, 4], [−2, −7, 9]]: swapping rows 1 and 3 gives <b>−3</b>; the transpose [[1, −1, −2], [5, −4, −7], [−6, 4, 9]] keeps <b>3</b> (a past-paper key said −3; corrected in the app).',
        ] }] },
      ],
    },
    {
      id: 'mx-inv',
      title: 'Minors, cofactors, adjoint and inverse',
      kicker: 'Undoing a matrix',
      blocks: [
        { k: 'table', head: ['Term', 'Meaning'], rows: [
          { c: ['<b>Minor</b> Mᵢⱼ', 'Delete row i and column j of A; the smaller matrix left (its determinant is also called the minor). For [[a, b, c], [d, e, f], [g, h, i]]: M₁₁ = [[e, f], [h, i]], M₂₃ = [[a, b], [g, h]]'] },
          { c: ['<b>Cofactor</b> Cᵢⱼ', '(−1)<sup>i+j</sup> |Mᵢⱼ|: the minor’s determinant with the sign pattern + − + / − + − / + − +'] },
          { c: ['<b>Adjoint</b> adj A', 'The <b>transpose</b> of the matrix of cofactors'] },
          { c: ['<b>Inverse</b> A⁻¹', 'AA⁻¹ = A⁻¹A = I; only square matrices with |A| ≠ 0: <b>A⁻¹ = adj A / |A|</b>'] },
        ] },
        { k: 'box', title: '2 × 2 inverse', tone: 'formula', blocks: [{ k: 'p', x: '[[a, b], [c, d]]⁻¹ = (1/(ad − bc)) [[d, −b], [−c, a]]: swap the diagonal, negate the other two, divide by the determinant. A = [[1, 6], [4, 5]]: |A| = 5 − 24 = −19, so A⁻¹ = −(1/19)[[5, −6], [−4, 1]] = <b>[[−5/19, 6/19], [4/19, −1/19]]</b>.' }] },
        { k: 'step', n: '5', title: '3 × 3 inverse: A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]]', blocks: [{ k: 'ul', items: [
          'Step 1, determinant: 1(−24) − 2(−20) + 3(−5) = <b>1</b>.',
          'Step 2, cofactors: row 1: −24, 20, −5; row 2: 18, −15, 4; row 3: 5, −4, 1.',
          'Step 3, adjoint (transpose): [[−24, 18, 5], [20, −15, −4], [−5, 4, 1]].',
          'Step 4, divide by |A| = 1: <b>A⁻¹ = [[−24, 18, 5], [20, −15, −4], [−5, 4, 1]]</b>. Check: A × A⁻¹ = I.',
        ] }] },
        { k: 'step', n: '6', title: 'The trial inverses', blocks: [{ k: 'ul', items: [
          'A = [[−4, 8, 5], [2, 5, −4], [−5, 3, 0]]: |A| = 267; A⁻¹ = (1/267)[[12, 15, −57], [20, 25, −6], [31, −28, −36]].',
          'B = [[−2, 8, −6], [0, −1, −4], [−5, 4, 1]]: |B| = 160; B⁻¹ = (1/160)[[15, −32, −38], [20, −32, −8], [−5, −32, 2]].',
        ] }] },
      ],
    },
    {
      id: 'mx-systems',
      title: 'Solving systems: Cramer’s rule and Gaussian elimination',
      kicker: 'AX = b',
      blocks: [
        { k: 'p', x: 'Write a₁x + b₁y + c₁z = α (and two more) as <b>AX = b</b>: A the coefficient matrix, X the column of unknowns, b the column of constants. There is a <b>unique solution when |A| ≠ 0</b> (then X = A⁻¹b).' },
        { k: 'box', title: 'Cramer’s rule', tone: 'formula', blocks: [{ k: 'p', x: 'x = |A₁|/|A|, y = |A₂|/|A|, z = |A₃|/|A|, where Aₖ is A with column k replaced by b.' }] },
        { k: 'step', n: '7', title: 'Worked', blocks: [{ k: 'ul', items: [
          '3x₁ + 4x₂ = 6, x₁ − 2x₂ = 3: |A| = −6 − 4 = −10; x₁ = (−12 − 12)/(−10) = <b>12/5</b>; x₂ = (9 − 6)/(−10) = <b>−3/10</b>.',
          'Trial: x₁ + 3x₂ − x₃ = 1, −2x₁ − 6x₂ + x₃ = −3, 3x₁ + 3x₂ − 2x₃ = 4: |A| = −6; <b>x₁ = 2, x₂ = 0, x₃ = 1</b>.',
        ] }] },
        { k: 'step', n: '8', title: 'Gaussian elimination (the past-paper system)', blocks: [
          { k: 'p', x: 'x − 4y − 2z = 21, 2x + y + 2z = 3, 3x + 2y − z = −2. Row-reduce the augmented matrix to upper-triangular form, then back-substitute.' },
          { k: 'ul', items: [
            'Clear a₂₁: <b>R₂ − 2R₁ → R₂</b> gives [0, 9, 6 | −39].',
            'Clear a₃₁: <b>R₃ − 3R₁ → R₃</b> gives [0, 14, 5 | −65].',
            'Clear a₃₂: <b>R₃ − (14/9)R₂ → R₃</b> gives [0, 0, −13/3 | −13/3], so z = 1.',
            'Back-substitute: 9y + 6 = −39, y = −5; x + 20 − 2 = 21, x = 3: <b>(3, −5, 1)</b>.',
          ] },
        ] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Order rows × columns; add same order; multiply (m × n)(n × p) = m × p; AB ≠ BA.',
          '(AB)ᵀ = BᵀAᵀ; symmetric Aᵀ = A; skew Aᵀ = −A.',
          '|A| = ad − bc; 3 × 3 by cofactors; swap rows → sign changes; |Aᵀ| = |A|.',
          'A⁻¹ = adj A/|A|; singular if |A| = 0. Cramer: replace a column by b.',
          'Gaussian: Rᵢ − (aᵢⱼ/aⱼⱼ)Rⱼ to clear below the diagonal, then back-substitute.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The order of [[1, 2, 3], [4, 5, 6]] is', '2 × 3', ['3 × 2', '6 × 1', '2 × 2'], 'Rows × columns.', 'Basics'],
    ['In A = [[1,2,3,4],[12,3,4,1],[13,14,1,2]], a₂₃ is', '4', ['3', '14', '12'], 'Row 2, column 3.', 'Basics'],
    ['A matrix with 1s on the leading diagonal and 0s elsewhere is the', 'Identity matrix', ['Null matrix', 'Singular matrix', 'Adjoint matrix'], 'AI = A.', 'Basics'],
    ['A matrix is singular when', 'Its determinant is 0', ['It is square', 'It equals its transpose', 'It has a zero element'], 'No inverse.', 'Basics'],
    ['Which matrix is singular?', '[[5, −5], [3, −3]]', ['[[1, 3], [0, −1]]', '[[−5, 0], [0, 4]]', '[[1, 2], [−1, 2]]'], '−15 + 15 = 0.', 'Basics'],
    ['If A is symmetric, Aᵀ equals', 'A', ['−A', '|A|', 'A⁻¹'], 'Definition.', 'Basics'],
    ['Skew-symmetric [[a,2,−3],[b,c,5],[d,e,f]]: a + b + c + d + e + f =', '−4', ['0', '+4', '−1'], 'Diagonal 0, b = −2, d = 3, e = −5.', 'Basics'],
    ['A 2 × 3 matrix times a 3 × 4 matrix has how many columns?', '4', ['3', '2', '6'], 'm × p.', 'Operations'],
    ['[[3, 4], [9, 1]] × [[10, 6], [7, 5]] =', '[[58, 38], [97, 59]]', ['[[30, 24], [63, 5]]', '[[13, 10], [16, 6]]', '[[84, 46], [65, 33]]'], 'Rows × columns.', 'Operations'],
    ['Matrix multiplication is generally', 'Not commutative', ['Commutative', 'Undefined', 'Always zero'], 'AB ≠ BA.', 'Operations'],
    ['(AB)ᵀ equals', 'BᵀAᵀ', ['AᵀBᵀ', 'AB', 'BA'], 'Order reverses.', 'Transpose'],
    ['|[[9, 5], [10, 4]]| =', '−14', ['14', '86', '−86'], '36 − 50.', 'Determinants'],
    ['|[[3, 8, 7], [0, 2, 5], [4, 6, 3]]| =', '32', ['−32', '8', '72'], 'Expand row 1.', 'Determinants'],
    ['Swapping two rows of a matrix makes its determinant', 'Change sign', ['Stay the same', 'Become zero', 'Double'], 'Multiply by −1.', 'Determinants'],
    ['|Aᵀ| compared with |A| is', 'Equal', ['Its negative', 'Its reciprocal', 'Its square'], 'Property.', 'Determinants'],
    ['If |A| = 3, the transpose of A has determinant', '3', ['−3', '1/3', '9'], '|Aᵀ| = |A|.', 'Determinants'],
    ['|[[8, 7], [7, −3]]| =', '−73', ['−25', '73', '25'], '−24 − 49.', 'Determinants'],
    ['The adjoint of A is the', 'Transpose of the cofactor matrix', ['Inverse of the cofactor matrix', 'Determinant of the minors', 'Matrix of minors unchanged'], 'Then divide by |A|.', 'Inverse'],
    ['The cofactor Cᵢⱼ equals', '(−1)^(i+j) |Mᵢⱼ|', ['|Mᵢⱼ| always', '−|Mᵢⱼ| always', '(−1)^(ij) Mᵢⱼ'], 'Sign pattern.', 'Inverse'],
    ['The inverse of [[1, 6], [4, 5]] has the factor', '−1/19', ['1/19', '−1/29', '1/29'], '|A| = −19.', 'Inverse'],
    ['The determinant of [[1, 2, 3], [0, 1, 4], [5, 6, 0]] is', '1', ['−1', '0', '24'], 'So A⁻¹ = adj A.', 'Inverse'],
    ['A system AX = b has a unique solution when', '|A| ≠ 0', ['|A| = 0', 'b = 0', 'A is 2 × 3'], 'Invertible.', 'Systems'],
    ['In Cramer’s rule, A₁ is A with', 'Column 1 replaced by b', ['Row 1 replaced by b', 'Column 1 deleted', 'Row 1 doubled'], 'x = |A₁|/|A|.', 'Systems'],
    ['3x₁ + 4x₂ = 6 and x₁ − 2x₂ = 3 give x₁ =', '12/5', ['−3/10', '3/5', '2'], '−24/−10.', 'Systems'],
    ['To clear a₂₁ in the past-paper system (R₁ starts with 1, R₂ with 2)', 'R₂ − 2R₁ → R₂', ['2R₂ − R₁ → R₂', 'R₂ − 3R₁ → R₂', '3R₂ − 2R₁ → R₂'], 'Subtract 2 × row 1.', 'Systems'],
    ['The past-paper system solves to', 'x = 3, y = −5, z = 1', ['x = 1, y = 3, z = −5', 'x = −3, y = 5, z = −1', 'x = −1, y = −3, z = 5'], 'Back-substitute.', 'Systems'],
  ],
};
