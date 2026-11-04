// Algebra → Equations and Polynomials. From "MATH 157 ALGEBRA 2" (Dr Kwame Piesie, 32 slides).
// Rewrites the original database lesson algebra-02 (same id, so progress is kept). Checked
// 2026-11-04; teaching text in our own words; every slide example and trial exercise is worked
// out here, and textbook theorems (remainder theorem, rational-root test) are labelled.
// Practises Quiz 2.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraEquations: Hb1Lesson = {
  id: 'algebra-02',
  order: 2,
  title: 'Equations, Simultaneous Equations and Polynomials',
  summary: 'What an equation is, the domain of a variable and the solution set; linear equations in one and two variables solved by substitution, elimination and graphs (including systems with no solution); quadratic equations by factorising, square roots, completing the square and the formula, with the discriminant; polynomials, their degree and zeros, long and synthetic division, the factor and remainder theorems; and cubic equations by grouping and the factor theorem — every slide example and trial exercise worked',
  minutes: 30,
  source: 'MATH 157 ALGEBRA 2.pdf',
  quizId: 'aleq',
  quizName: 'Quiz · Equations and Polynomials (lesson)',
  pastSets: ['s2'],
  pastTopics: ['equations-quadratics'],
  sections: [
    {
      id: 'eq-basics',
      title: 'Equations, domains and solution sets',
      kicker: 'Two expressions joined by =',
      blocks: [
        { k: 'term', name: 'Algebraic equation', def: 'A statement that two algebraic expressions are <b>equal</b> (expression 1 = expression 2), where one or both contain variables, numbers and operations (+, −, ×, ÷, powers). Examples: 3x − 2 = 7; x² − 4 = 0; ax³ + bx² + cx + d = 0.' },
        { k: 'term', name: 'Domain of a variable', def: 'The set of values the variable may take for the equation or expression to <b>make sense</b> (be defined). For 2x − 4 = 0 the domain is <b>R</b>. For 1/x = 2/(x − 3) it is <b>R except 0 and 3</b>, because each value makes a denominator zero.' },
        { k: 'p', x: 'The <b>solution set</b> is the set of values that satisfy the equation; each member is a <b>solution</b> or <b>root</b>. A root must lie in the domain: solving 1/x = 2/(x − 3) gives x − 3 = 2x, so x = −3, which is allowed.' },
        { k: 'p', x: 'Types met in this course: <b>linear</b>, <b>quadratic</b>, <b>cubic</b> and, in general, <b>polynomial</b> equations.' },
      ],
    },
    {
      id: 'eq-linear',
      title: 'Linear equations and simultaneous equations',
      kicker: 'Highest power 1: a straight line',
      blocks: [
        { k: 'p', x: 'A <b>linear (first-degree) equation in one variable</b> can be written <b>ax + b = 0, a ≠ 0</b> (5x − 9 = 0 gives x = 9/5). In two variables the standard form is <b>ax + by = c</b> (a, b the coefficients, c the constant term); its graph is a <b>straight line</b>, and each solution is an <b>ordered pair</b> (x, y), a point on that line.' },
        { k: 'table', head: ['Method', 'How it works'], rows: [
          { c: ['<b>Substitution</b>', 'Make one variable the subject of one equation and substitute it into the other'] },
          { c: ['<b>Elimination</b>', 'Add or subtract the equations (after scaling if needed) so one variable cancels'] },
          { c: ['<b>Graphical</b>', 'Draw both lines; the solution is where they <b>cross</b>'] },
        ] },
        { k: 'step', n: '1', title: 'Substitution, worked', blocks: [{ k: 'ul', items: [
          'x − y = 3 and x + 2y = −3: x = 3 + y, so 3 + 3y = −3, <b>y = −2, x = 1</b>.',
          'Trial: 2x − 3y = 7, 3x − y = 7: y = 3x − 7, so 2x − 9x + 21 = 7, <b>x = 2, y = −1</b>.',
          'Trial: x + 3y = 4, 2x + 6y = 7: x = 4 − 3y gives 8 − 6y + 6y = 7, i.e. 8 = 7: <b>no solution</b>. The lines are parallel (same slope, different intercepts).',
          'Trial: 3x − 4y = 18, 2x + y = 1: y = 1 − 2x, so 11x − 4 = 18, <b>x = 2, y = −3</b>.',
        ] }] },
        { k: 'step', n: '2', title: 'Elimination, worked', blocks: [{ k: 'ul', items: [
          'x + 2y = 4 and 3x − 2y = 2: add, 4x = 6, <b>x = 3/2</b>; then 2y = 4 − 3/2, <b>y = 5/4</b>.',
          '2x + 3y = 7 and x + 3y = 4: subtract, <b>x = 3</b>; then 3y = 1, <b>y = 1/3</b>.',
        ] }] },
        { k: 'box', title: 'Strictly speaking: one, none or infinitely many', tone: 'gold', blocks: [{ k: 'p', x: 'Two lines either cross once (<b>one solution</b>, consistent), are parallel (<b>no solution</b>, inconsistent: e.g. x + 3y = 4 and 2x + 6y = 7) or are the same line (<b>infinitely many</b>, e.g. x + 3y = 4 and 2x + 6y = 8). Compare the ratios a₁/a₂, b₁/b₂, c₁/c₂ to tell which before solving.' }] },
      ],
    },
    {
      id: 'eq-quad',
      title: 'Quadratic equations: four methods',
      kicker: 'ax² + bx + c = 0, a ≠ 0',
      blocks: [
        { k: 'step', n: '3', title: 'Factorising', blocks: [
          { k: 'p', x: 'If ax² + bx + c is a product of two linear factors, set each factor to zero.' },
          { k: 'ul', items: [
            'x² − 6x + 5 = −4 → x² − 6x + 9 = 0 → (x − 3)² = 0: <b>x = 3</b> (repeated). Always bring everything to one side first.',
            '2x² = 3x → x(2x − 3) = 0: <b>x = 0 or 3/2</b>. Never divide by x: you would lose the root 0.',
            'Trial: 4x² + 12x + 9 = (2x + 3)² = 0: <b>x = −3/2</b> (repeated).',
            'Trial: 4x² = 5x → x(4x − 5) = 0: <b>x = 0 or 5/4</b>.',
            'Trial: 3x² + 7x − 20 = (3x − 5)(x + 4) = 0: <b>x = 5/3 or −4</b>.',
          ] },
        ] },
        { k: 'step', n: '4', title: 'Square roots (for ax² + c = 0 or a perfect square = constant)', blocks: [{ k: 'ul', items: [
          '2x² − 3 = 0 → x² = 3/2: <b>x = ±√6/2</b> (≈ ±1.225).',
          '3x² − 27 = 0 → x² = 9: <b>x = ±3</b>.',
          'Trial: x² + 12 = 54 → x² = 42: <b>x = ±√42</b>.',
          'Trial: 3x² − 5 = 0: <b>x = ±√15/3</b>.',
          'Trial: 2x² + 8 = 0 → x² = −4: <b>no real root</b>; x = ±2i.',
          'Trial (read as (x + 1/3)² = 2/9): x + 1/3 = ±√2/3, so <b>x = (−1 ± √2)/3</b>.',
        ] }] },
        { k: 'step', n: '5', title: 'Completing the square', blocks: [
          { k: 'p', x: 'Rewrite ax² + bx + c = 0 as <b>(x + A)² = B</b>. With x² coefficient 1, add <b>(b/2)²</b>: x² + bx + (b/2)² = (x + b/2)².' },
          { k: 'ul', items: [
            'x² + 6x − 2 = 0 → x² + 6x + 9 = 11 → (x + 3)² = 11: <b>x = −3 ± √11</b>.',
            'Trial: x² + 8x − 3 = 0 → (x + 4)² = 19: <b>x = −4 ± √19</b>.',
            'Trial: 3x² − 12x + 13 = 0 → x² − 4x = −13/3 → (x − 2)² = −1/3: <b>no real roots</b> (x = 2 ± i√3/3).',
            'Trial: 2x² − 4x − 3 = 0 → x² − 2x = 3/2 → (x − 1)² = 5/2: <b>x = 1 ± √10/2</b>.',
          ] },
        ] },
        { k: 'box', title: 'The quadratic formula and the discriminant', tone: 'formula', blocks: [{ k: 'ul', items: [
          'x = [−b ± √(b² − 4ac)] / 2a (completing the square on the general equation gives it).',
          '<b>Δ = b² − 4ac</b>: Δ &gt; 0 two distinct real roots; Δ = 0 one repeated (double) real root; Δ &lt; 0 a pair of complex-conjugate roots.',
          'Sum of roots −b/a, product c/a (textbook): roots −2 and 4 come from x² − 2x − 8 = 0, Δ = 4 + 32 = 36.',
        ] }] },
        { k: 'step', n: '6', title: 'Formula, worked', blocks: [{ k: 'ul', items: [
          '6x² + 7x + 2 = 0: Δ = 49 − 48 = 1, x = (−7 ± 1)/12: <b>x = −1/2 or −2/3</b>.',
          'x² − 6x + 3 = 0: Δ = 36 − 12 = 24, x = (6 ± 2√6)/2: <b>x = 3 ± √6</b>.',
        ] }] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The discriminant slide prints “b² − 4ac &lt;,” with the 0 missing: the third case is <b>b² − 4ac &lt; 0</b>.' }] },
      ],
    },
    {
      id: 'eq-poly',
      title: 'Polynomials and polynomial division',
      kicker: 'Degree, zeros and factors',
      blocks: [
        { k: 'p', x: 'An <b>nth-degree polynomial</b> is P(x) = aₙxⁿ + … + a₁x + a₀ with aₙ ≠ 0. The <b>degree</b> is the highest power present; the a’s are constants and x the variable (“a polynomial in x”). Degree 2 is a <b>quadratic</b>, degree 3 a <b>cubic</b>.' },
        { k: 'table', head: ['Polynomial', 'Degree'], rows: [
          { c: ['7x + 3', 'First'] },
          { c: ['2x² + 4x + 9', 'Second (quadratic)'] },
          { c: ['4x³ − 3x² + 5x + 1', 'Third (cubic)'] },
          { c: ['−2x⁴ + 5x² − 6', 'Fourth'] },
          { c: ['x⁵ − x⁴ + x³ − 10', 'Fifth'] },
        ] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The slide writes P(x) = Σ<sub>k=1</sub><sup>n</sup> aₖxᵏ. Starting at k = 1 leaves out the constant term; it should start at <b>k = 0</b>.' }] },
        { k: 'term', name: 'Zero of P(x)', def: 'a is a zero of P(x) (a root of P(x) = 0) if <b>P(a) = 0</b>; then <b>(x − a) is a factor</b>. If P(−a) = 0, then (x + a) is a factor. This is the <b>factor theorem</b>.' },
        { k: 'box', title: 'Strictly speaking: the remainder theorem', tone: 'gold', blocks: [{ k: 'p', x: 'Dividing P(x) by (x − a) leaves remainder <b>P(a)</b>; by (ax − b) it leaves <b>P(b/a)</b>. So 4x³ − 3x + 5 ÷ (2x − 3) leaves 4(27/8) − 9/2 + 5 = 14, without dividing. The factor theorem is the case remainder = 0.' }] },
        { k: 'p', x: '<b>Long division</b>: write dividend and divisor in <b>descending powers</b>, inserting <b>0</b> for every missing power, then divide the leading terms, multiply back, subtract and bring down, as in number long division.' },
        { k: 'p', x: '<b>Synthetic division</b> by x − a: list the coefficients (zeros for missing powers); solve x − a = 0 for a; bring down the first coefficient; multiply by a and add to the next; repeat to the constant. The last number is the <b>remainder</b>; the others are the <b>quotient’s coefficients</b>, one degree lower. For a divisor like 2x − 3, use a = 3/2 and then <b>halve</b> the quotient.' },
        { k: 'step', n: '7', title: 'The four divisions, worked', blocks: [{ k: 'ul', items: [
          '(4x³ − 3x + 5) ÷ (2x − 3) = <b>2x² + 3x + 3, remainder 14</b>.',
          '(9x³ + 6x² − 30) ÷ (3x − 4) = <b>3x² + 6x + 8, remainder 2</b>.',
          '(2x⁴ + 3x³ − x − 5) ÷ (x + 2) = <b>2x³ − x² + 2x − 5, remainder 5</b> (synthetic with a = −2: 2, −1, 2, −5 | 5).',
          '(4x⁵ − 30x³ − 50x − 2) ÷ (x + 3) = <b>4x⁴ − 12x³ + 6x² − 18x + 4, remainder −14</b>.',
        ] }] },
      ],
    },
    {
      id: 'eq-cubic',
      title: 'Cubic equations',
      kicker: 'Up to three roots',
      blocks: [
        { k: 'p', x: 'A <b>cubic equation</b> is ax³ + bx² + cx + d = 0, a ≠ 0. It has <b>three roots</b> (real or complex; at least one is real). Methods: factorising, graphing, or formulas such as <b>Cardano’s formula</b>.' },
        { k: 'step', n: '8', title: 'By grouping: x³ − 4x² − 9x + 36 = 0', blocks: [{ k: 'p', x: 'x²(x − 4) − 9(x − 4) = 0 → (x² − 9)(x − 4) = 0 → (x + 3)(x − 3)(x − 4) = 0: <b>x = −3, 3, 4</b>.' }] },
        { k: 'step', n: '9', title: 'By the factor theorem: x³ − 7x − 6 = 0', blocks: [{ k: 'p', x: 'No common factors to group, so guess and check: x = −1 gives −1 + 7 − 6 = 0, so <b>(x + 1)</b> is a factor. Dividing: (x + 1)(x² − x − 6) = (x + 1)(x − 3)(x + 2): <b>x = −2, −1, 3</b>.' }] },
        { k: 'box', title: 'Strictly speaking: where to guess', tone: 'gold', blocks: [{ k: 'p', x: 'The <b>rational-root test</b>: any rational root p/q has p dividing the constant term and q dividing the leading coefficient. For x³ − 7x − 6, try only ±1, ±2, ±3, ±6. Quick checks: if the coefficients add to 0, x = 1 is a root; if the alternating sum is 0, x = −1 is.' }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Domain: exclude values that make a denominator 0 (or an even root negative). Roots must lie in the domain.',
          'Linear systems: substitution, elimination, graph; one, none or infinitely many solutions.',
          'Quadratics: factorise, square root, complete the square (+ (b/2)²), formula; Δ = b² − 4ac decides the roots.',
          'P(a) = 0 ⇔ (x − a) is a factor; remainder on dividing by x − a is P(a). Insert zeros for missing powers.',
          'Cubics: group, or find one root by the factor theorem and divide to a quadratic.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The domain of x in 1/x = 2/(x − 3) is', 'All reals except 0 and 3', ['All reals except −3', 'All reals except 0 only', 'All positive reals only'], 'Denominators cannot be 0.', 'Basics'],
    ['Each member of a solution set is called a', 'Root', ['Domain', 'Coefficient', 'Degree'], 'Or solution.', 'Basics'],
    ['Solve x − y = 3 and x + 2y = −3', 'x = 1, y = −2', ['x = 2, y = −1', 'x = −1, y = 2', 'x = 3, y = 0'], 'Substitute x = 3 + y.', 'Linear'],
    ['Solve 3x − 4y = 18 and 2x + y = 1', 'x = 2, y = −3', ['x = −2, y = 3', 'x = 3, y = −5', 'x = 6, y = 0'], 'y = 1 − 2x.', 'Linear'],
    ['x + 3y = 4 and 2x + 6y = 7 have', 'No solution', ['One solution', 'Two solutions', 'Infinitely many solutions'], 'Parallel lines.', 'Linear'],
    ['Solve 2x + 3y = 7 and x + 3y = 4', 'x = 3, y = 1/3', ['x = 1, y = 5/3', 'x = 3, y = 1', 'x = 4, y = 0'], 'Subtract.', 'Linear'],
    ['The roots of 2x² = 3x are', '0 and 3/2', ['3/2 only', '0 and 2/3', '−3/2 and 0'], 'Never divide by x.', 'Quadratics'],
    ['x² − 6x + 5 = −4 has the root(s)', '3, repeated', ['1 and 5', '−3, repeated', '2 and 4'], '(x − 3)² = 0.', 'Quadratics'],
    ['The roots of 3x² + 7x − 20 = 0 are', '5/3 and −4', ['−5/3 and 4', '4/3 and −5', '5 and −4/3'], '(3x − 5)(x + 4).', 'Quadratics'],
    ['2x² + 8 = 0 has', 'No real roots', ['x = ±2', 'x = ±4', 'x = −4 only'], 'x² = −4.', 'Quadratics'],
    ['Completing the square on x² + 8x − 3 = 0 gives', '(x + 4)² = 19', ['(x + 8)² = 67', '(x + 4)² = 13', '(x − 4)² = 19'], 'Add 16.', 'Quadratics'],
    ['To complete the square on x² + bx you add', '(b/2)²', ['(2b)²', '(b²)/4b', '(b/4)²'], 'Half the coefficient, squared.', 'Quadratics'],
    ['The roots of 6x² + 7x + 2 = 0 are', '−1/2 and −2/3', ['1/2 and 2/3', '−1 and −2', '−1/3 and −1'], 'Δ = 1.', 'Quadratics'],
    ['The roots of x² − 6x + 3 = 0 are', '3 ± √6', ['3 ± √3', '−3 ± √6', '6 ± √24'], 'Δ = 24.', 'Quadratics'],
    ['A discriminant of 0 means', 'One repeated real root', ['Two distinct real roots', 'Two complex roots', 'No roots at all'], 'Double root.', 'Quadratics'],
    ['If the roots are −2 and 4, the discriminant is', '36', ['0', '−32', '4'], 'x² − 2x − 8.', 'Quadratics'],
    ['The degree of −2x⁴ + 5x² − 6 is', '4', ['2', '5', '6'], 'Highest power.', 'Polynomials'],
    ['If P(−a) = 0, which is a factor?', 'x + a', ['x − a', 'ax', 'x² − a'], 'Factor theorem.', 'Polynomials'],
    ['(4x³ − 3x + 5) ÷ (2x − 3) leaves remainder', '14', ['5', '0', '−4'], 'P(3/2).', 'Polynomials'],
    ['(2x⁴ + 3x³ − x − 5) ÷ (x + 2) gives quotient', '2x³ − x² + 2x − 5', ['2x³ + 7x² + 14x + 27', '2x³ − x² − 2x + 3', '2x³ + x² − 2x − 5'], 'Synthetic, a = −2.', 'Polynomials'],
    ['In long division a missing power is written with', 'A zero coefficient', ['A one coefficient', 'No place at all', 'The next coefficient'], 'Keep the columns.', 'Polynomials'],
    ['In synthetic division, the last number in the bottom row is the', 'Remainder', ['Leading coefficient', 'Divisor', 'Degree'], 'The rest are the quotient.', 'Polynomials'],
    ['The roots of x³ − 4x² − 9x + 36 = 0 are', '−3, 3 and 4', ['−4, 3 and 9', '3, 4 and 9', '−3, −4 and 3'], 'Group.', 'Cubics'],
    ['The roots of x³ − 7x − 6 = 0 are', '−2, −1 and 3', ['2, 1 and −3', '−3, 1 and 2', '−6, 1 and 7'], 'x = −1 first.', 'Cubics'],
    ['A named formula for cubic roots is', 'Cardano’s formula', ['Pascal’s formula', 'Euler’s formula', 'Newton’s formula'], 'On the slides.', 'Cubics'],
  ],
};
