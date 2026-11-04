// Algebra → Applications of Integration. From "MATH 157 – INTEGRATION" (deck 11, slides 31–43).
// A lesson added in the app (owner, 2026-11-04) so the 59-slide deck is taught in three parts.
// Teaching text in our own words; every slide example is worked (where the slide is unclear, the
// reading used is stated).
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraIntApps: Hb1Lesson = {
  id: 'algebra-int-apps',
  order: 11.4,
  title: 'Applications of Integration: Averages, Areas, Curves and Surplus',
  summary: 'The average value of a function; the area under a curve (and why area below the axis comes out negative); the area between two curves; finding a curve from its gradient function; and consumers’ and producers’ surplus, with the MR = MC condition — every slide example and exercise worked',
  minutes: 30,
  source: 'MATH 157, ALGEBRA 11.pdf',
  quizId: 'alia',
  quizName: 'Quiz · Applications of Integration (lesson)',
  pastSets: ['s11'],
  sections: [
    {
      id: 'ia-avg',
      title: 'Average value and area',
      kicker: 'Adding up continuously',
      blocks: [
        { k: 'p', x: 'The mean of n numbers is (1/n)Σxᵢ. For a continuous function on [a, b] the sum becomes an integral: <b>average value = [1/(b − a)] ∫ₐᵇ f(x) dx</b>, the height of the rectangle with the same area.' },
        { k: 'step', n: '1', title: 'Worked', blocks: [{ k: 'ul', items: [
          'f = x³ − 2x² − 5x + 1 on [−2, 4]: F(4) − F(−2) = −44/3 − (−8/3) = −12, so the average is −12/6 = <b>−2</b>.',
          'Campus alcohol consumption f = 43e<sup>−0.012x</sup>, 1 ≤ x ≤ 11: (1/10)(43/0.012)(e<sup>−0.012</sup> − e<sup>−0.132</sup>) ≈ <b>40.0</b> per capita per year.',
        ] }] },
        { k: 'p', x: 'The <b>area</b> between y = f(x), the x-axis and x = a, x = b is ∫ₐᵇ f(x) dx. Area above the axis comes out <b>positive</b>, below it <b>negative</b>; for a total area, integrate each piece separately and add the sizes.' },
        { k: 'step', n: '2', title: 'Areas, worked', blocks: [{ k: 'ul', items: [
          'y = 2x + 3, x = 1 to 4: [x² + 3x]₁⁴ = 28 − 4 = <b>24</b>. y = 3x + 4: [1.5x² + 4x]₁⁴ = <b>34.5</b>. y = x² + 5, 0 to 3: 9 + 15 = <b>24</b>.',
          'y = x² − 4x − 5 = (x + 1)(x − 5) is below the axis between −1 and 5 (minimum (2, −9)): ∫₋₁⁵ = −36, so the area is <b>36</b>.',
          'y = x(x − 1)(x − 2): above on [0, 1] (¼), below on [1, 2] (−¼); total area <b>½</b> (integrating straight from 0 to 2 would wrongly give 0).',
        ] }] },
        { k: 'p', x: '<b>Between two curves</b>: find where they meet (the limits), then integrate <b>(upper − lower)</b>: A = ∫ₐᵇ [f₂(x) − f₁(x)] dx.' },
        { k: 'step', n: '3', title: 'Between curves, worked', blocks: [{ k: 'ul', items: [
          'y = x² + 1 and y = 7 − x meet where x² + x − 6 = 0, x = −3 and 2: ∫₋₃² (6 − x − x²) = <b>125/6</b>.',
          'y = x² and y² = 8x: x⁴ = 8x gives (0, 0) and (2, 4); ∫₀² (√(8x) − x²) = 16/3 − 8/3 = <b>8/3</b>.',
          'y = x² − 5 and y = 5 − x² meet at x = ±√5: ∫ (10 − 2x²) = <b>(40/3)√5 ≈ 29.8</b>.',
        ] }] },
      ],
    },
    {
      id: 'ia-curve',
      title: 'A curve from its gradient function',
      kicker: 'Integrate, then use the point for c',
      blocks: [
        { k: 'p', x: 'If dy/dx = h(x), then y = ∫ h(x) dx + c; a point on the curve fixes c.' },
        { k: 'step', n: '4', title: 'Worked', blocks: [{ k: 'ul', items: [
          'dy/dx = 3x² − 1 through (1, 0): y = x³ − x + c, c = 0: <b>y = x³ − x</b>.',
          'dy/dx = 4x² − 3x + 1 through A(1, 0): y = (4/3)x³ − (3/2)x² + x + c, c = −5/6.',
          'dy/dx = 2x − 3x² through (1, 2): <b>y = x² − x³ + 2</b>.',
          'dy/dx = ax² + b through (1, −11), with a horizontal tangent at (2, −16): 4a + b = 0; y = (a/3)x³ + bx + c with a/3 + b + c = −11 and 8a/3 + 2b + c = −16. Subtracting: 7a/3 + b = −5, so <b>a = 3, b = −12</b> (a + b = −9), c = 0: <b>y = x³ − 12x</b>.',
        ] }] },
      ],
    },
    {
      id: 'ia-surplus',
      title: 'Consumers’ and producers’ surplus',
      kicker: 'Areas on a price–quantity graph',
      blocks: [
        { k: 'p', x: 'At the <b>equilibrium</b> (q₀, p₀), demand price = supply price. Consumers willing to pay more than p₀ gain the <b>consumers’ surplus</b>; producers willing to sell for less than p₀ gain the <b>producers’ surplus</b>.' },
        { k: 'box', title: 'Formulas', tone: 'formula', blocks: [{ k: 'ul', items: [
          '<b>CS = ∫₀^q₀ (demand) dq − p₀q₀</b>: the area under the demand curve above the price line.',
          '<b>PS = p₀q₀ − ∫₀^q₀ (supply) dq</b>: the area above the supply curve below the price line.',
          'For a profit-maximising monopolist: π = R − C, dπ/dq = 0 gives <b>MR = MC</b>; the price then comes from the demand function.',
        ] }] },
        { k: 'step', n: '5', title: 'Worked', blocks: [{ k: 'ul', items: [
          'p = 100 − 0.5q, supply p = 10 + q/10: q₀ = 150, p₀ = 25; CS = 9375 − 3750 = <b>5625</b>.',
          'p<sub>d</sub> = 20 − 0.8q, p<sub>s</sub> = 4 + 1.2q: q₀ = 8, p₀ = 13.6, CS = <b>25.6</b>.',
          'p<sub>d</sub> = 900 − q², p<sub>s</sub> = 100 + q²: q₀ = 20, p₀ = 500, CS = <b>16 000/3 ≈ 5333</b>.',
          'p<sub>d</sub> = 50/(q + 5), p<sub>s</sub> = q/10 + 4.5 (as read): q₀ = 5, p₀ = 5, CS = 50 ln 2 − 25 ≈ <b>9.66</b>.',
          'p<sub>d</sub> = 400 − q², p<sub>s</sub> = 200q + 100: q₀ ≈ 1.489, CS = (2/3)q₀³ ≈ <b>2.20</b>.',
          'q = 100(10 − p), q = 80(p − 1): p<sub>d</sub> = 10 − q/100, p<sub>s</sub> = 1 + q/80; q₀ = 400, p₀ = 6, CS = <b>800</b>.',
          'q = √(100 − p), q = p/2 − 10 (as read): q₀ = 8, p₀ = 36, CS = 800 − 512/3 − 288 ≈ <b>341.3</b>.',
          'p = 90/(q + 2), supply p = q + 1: q₀ = 8, p₀ = 9, PS = 72 − 40 = <b>32</b>.',
          'p = 42 − 5q − q² at p₀ = 6: q₀ = 4, CS = (168 − 40 − 64/3) − 24 ≈ <b>82.7</b>.',
          'p = 45 − 0.5q, p₀ = 32.5, q₀ = 25: CS = 968.75 − 812.5 = <b>156.25</b>.',
          'p = (q + 3)² at p₀ = 81, q₀ = 6: PS = 486 − (729 − 27)/3 = <b>252</b>.',
          'p = 25 − q², p = 2q + 1: q₀ = 4, p₀ = 9; CS = 100 − 64/3 − 36 ≈ <b>42.7</b>; PS = 36 − 20 = <b>16</b>.',
          'Exercise: p = 113 − 3q², p = (q + 1)²: q₀ = (−1 + √449)/4 ≈ 5.05, p₀ ≈ 36.6; CS ≈ <b>257.2</b>, PS ≈ <b>111.2</b>.',
          'Exercise (monopoly): P = 274 − q², MC = 4 + 3q: R = 274q − q³, MR = 274 − 3q² = 4 + 3q gives q = 9, P = 193; CS = 2223 − 1737 = <b>486</b>.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Average value = ∫f/(b − a). Area: split at the roots; below the axis is negative.',
          'Between curves: ∫(upper − lower) between the meeting points.',
          'Curve from gradient: integrate, then a point gives c.',
          'CS = ∫demand − p₀q₀; PS = p₀q₀ − ∫supply; monopoly: MR = MC.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The average value of f on [a, b] is', '∫f dx divided by (b − a)', ['f(b) − f(a)', '(f(a) + f(b))/2 always', '∫f dx times (b − a)'], 'Same-area rectangle.', 'Average'],
    ['The average of x³ − 2x² − 5x + 1 on [−2, 4] is', '−2', ['−12', '2', '−6'], '−12/6.', 'Average'],
    ['Area below the x-axis, integrated directly, comes out', 'Negative', ['Positive', 'Zero', 'Undefined'], 'Take the size.', 'Area'],
    ['Area under y = 2x + 3 from x = 1 to 4', '24', ['21', '28', '30'], '28 − 4.', 'Area'],
    ['Area between y = x² − 4x − 5 and the x-axis', '36', ['−36', '18', '9'], 'Roots −1 and 5.', 'Area'],
    ['Area between y = x(x − 1)(x − 2) and the axis on [0, 2]', '1/2', ['0', '1/4', '2'], '¼ + ¼.', 'Area'],
    ['Area between y = x² + 1 and y = 7 − x', '125/6', ['25/6', '125/3', '35/2'], 'x = −3 to 2.', 'Between curves'],
    ['y = x² and y² = 8x meet at', '(0, 0) and (2, 4)', ['(0, 0) and (4, 2)', '(2, 4) only', '(1, 1) and (2, 4)'], 'x⁴ = 8x.', 'Between curves'],
    ['Area between y = x² and y² = 8x', '8/3', ['16/3', '4/3', '8'], '16/3 − 8/3.', 'Between curves'],
    ['dy/dx = 3x² − 1 through (1, 0) gives', 'y = x³ − x', ['y = x³ − x + 1', 'y = 6x', 'y = x³ − 1'], 'c = 0.', 'Curves'],
    ['dy/dx = 2x − 3x² through (1, 2) gives', 'y = x² − x³ + 2', ['y = x² − x³', 'y = 2 − 6x', 'y = x² + x³ + 2'], 'c = 2.', 'Curves'],
    ['Consumers’ surplus equals', '∫ demand dq − p₀q₀', ['p₀q₀ − ∫ supply dq', '∫ supply dq − p₀q₀', 'p₀ − q₀'], 'Above the price line.', 'Surplus'],
    ['Producers’ surplus equals', 'p₀q₀ − ∫ supply dq', ['∫ demand dq − p₀q₀', '∫ supply dq + p₀q₀', 'p₀q₀ only'], 'Below the price line.', 'Surplus'],
    ['p = 100 − 0.5q with supply p = 10 + q/10: equilibrium q₀ =', '150', ['90', '200', '25'], '0.6q = 90.', 'Surplus'],
    ['For the same market, the consumers’ surplus is', '5625', ['3750', '9375', '2812.5'], '9375 − 3750.', 'Surplus'],
    ['Demand p = 90/(q + 2), supply p = q + 1: producers’ surplus', '32', ['40', '72', '8'], '72 − 40.', 'Surplus'],
    ['p = (q + 3)², p₀ = 81, q₀ = 6: producers’ surplus', '252', ['234', '486', '81'], '486 − 234.', 'Surplus'],
    ['A profit-maximising monopolist produces where', 'MR = MC', ['MR = 0', 'AC = MC', 'Price = AC'], 'dπ/dq = 0.', 'Surplus'],
    ['P = 274 − q² and MC = 4 + 3q: the monopolist’s output', 'q = 9', ['q = 10', 'q = 6', 'q = 15'], 'q² + q − 90 = 0.', 'Surplus'],
    ['p = 25 − q² and p = 2q + 1 meet at', 'q = 4, p = 9', ['q = 3, p = 7', 'q = 5, p = 11', 'q = 2, p = 5'], 'q² + 2q − 24 = 0.', 'Surplus'],
  ],
};
