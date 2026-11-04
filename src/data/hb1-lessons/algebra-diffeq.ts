// Algebra → Differential Equations and Partial Derivatives. From "MATH 157 – INTEGRATION"
// (deck 11, slides 44–59). A lesson added in the app (owner, 2026-11-04) so the 59-slide deck is
// taught in three parts. Teaching text in our own words; every slide example and exercise is
// worked (where the slide is unclear, the reading used is stated).
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraDiffEq: Hb1Lesson = {
  id: 'algebra-diffeq',
  order: 11.7,
  title: 'Differential Equations and Partial Derivatives',
  summary: 'What a differential equation is, its order, general and particular solutions; separable equations solved by separation of variables, with the employee-growth and marginal-cost models; functions of two variables; partial derivatives and how to find them; and their uses in marginal revenue, advertising and sales, stationary points, and Cobb–Douglas marginal productivity — every slide example and exercise worked',
  minutes: 28,
  source: 'MATH 157, ALGEBRA 11.pdf',
  quizId: 'alde',
  quizName: 'Quiz · Differential Equations and Partial Derivatives (lesson)',
  pastSets: ['s11'],
  sections: [
    {
      id: 'de-intro',
      title: 'Differential equations',
      kicker: 'An equation with a derivative in it',
      blocks: [
        { k: 'p', x: 'A <b>differential equation</b> contains an unknown function and one or more of its derivatives: dy/dx = xy, d²y/dx² + dy/dx = 4x², d²y/dx² = −ax. Its <b>order</b> is that of the highest derivative (the first is first order, the others second order).' },
        { k: 'p', x: 'A <b>general solution</b> satisfies the equation and contains an arbitrary constant. Given extra information (<b>initial conditions</b>), the constant is found and the result is a <b>particular solution</b>.' },
        { k: 'box', title: 'Separation of variables', tone: 'formula', blocks: [{ k: 'p', x: 'An equation dy/dx = f(x)g(y), or f(x)/g(y), is <b>separable</b>: move all the y’s to one side with dy and the x’s to the other with dx, then integrate both sides: ∫ dy/g(y) = ∫ f(x) dx + c. Example: dy/dx = xᵃyᵇ.' }] },
        { k: 'step', n: '1', title: 'General solutions, worked', blocks: [{ k: 'ul', items: [
          'dy/dx = 3x²: <b>y = x³ + c</b>. dy/dx = 2x: y = x² + c.',
          'dy/dx = x²/y³: y³ dy = x² dx, y⁴/4 = x³/3 + k, so <b>y⁴ = (4/3)x³ + c</b>.',
          'dy/dx = x/y: y dy = x dx, <b>y² = x² + c</b>.',
          'dy/dx = xy: dy/y = x dx, ln|y| = x²/2 + k, so <b>y = Ae<sup>x²/2</sup></b>.',
          'dy/dx = xy² (as read): dy/y² = x dx, −1/y = x²/2 + c.',
          'x² dy/dx = y(y − 1): dy/[y(y − 1)] = dx/x²; with partial fractions, ln|(y − 1)/y| = −1/x + c.',
        ] }] },
        { k: 'step', n: '2', title: 'Particular solutions, worked', blocks: [{ k: 'ul', items: [
          'dy/dx = 3xy, y(0) = 3: y = Ae<sup>3x²/2</sup>, A = 3: <b>y = 3e<sup>(3/2)x²</sup></b>.',
          'dy/dx = xy − 3x = x(y − 3), y(0) = 1: y − 3 = Ae<sup>x²/2</sup>, A = −2: <b>y = 3 − 2e<sup>x²/2</sup></b>.',
          'dy/dx = 12x, y(1) = 8: y = 6x² + 2. dy/dx = 3x² + 4x, y(1) = 6: y = x³ + 2x² + 3. dy/dx = x e<sup>x²</sup>, y(0) = 2: y = ½e<sup>x²</sup> + 3/2. dy/dx = x³ − 2x, y(0) = −2: y = x⁴/4 − x² − 2.',
          'General solutions (exercise): dy/dx = −2: y = −2x + c; = e: y = ex + c; = 1 − 3x: y = x − (3/2)x² + c; = √x + 2: y = (2/3)x<sup>3/2</sup> + 2x + c; = 5/x²: y = −5/x + c; = 10x⁴ − x² + 3: y = 2x⁵ − x³/3 + 3x + c.',
        ] }] },
        { k: 'step', n: '3', title: 'Models, worked', blocks: [{ k: 'ul', items: [
          'NewMedia employees, dy/dt = 0.3t<sup>0.6</sup> (y in hundreds, t years from 1950): y = 0.1875t<sup>1.6</sup> + C. 1800 employees in 1965 (t = 15, y = 18) gives C ≈ 3.72. In 1983 (t = 33): y ≈ 54.1, about <b>5400 employees</b>.',
          'StrikeNow, dC/dx = −0.02x + 6: <b>C = −0.01x² + 6x + k</b>; C(10) = 400 gives −1 + 60 + k = 400, <b>k = 341</b>.',
        ] }] },
      ],
    },
    {
      id: 'de-partial',
      title: 'Partial derivatives',
      kicker: 'Change one variable, hold the other still',
      blocks: [
        { k: 'p', x: 'z = f(x, y) is a function of <b>two independent variables</b>; its domain is every pair (x, y) for which it is defined. f(x, y) = 2x² − 3y³ gives f(2, 1) = <b>5</b>, f(−1, 2) = <b>−22</b>, f(1, −2) = <b>26</b>, f(2, 3) = <b>−73</b>. Cost C(x, y) = 0.97x + 0.89y (x tennis balls, y volleyballs): domain x, y ≥ 0 (whole numbers); C(250, 700) = <b>865.50</b>, the cost of making 250 tennis balls and 700 volleyballs.' },
        { k: 'box', title: 'Definition', tone: 'formula', blocks: [{ k: 'p', x: '<b>fₓ = ∂f/∂x = lim [f(x + h, y) − f(x, y)]/h</b>: differentiate in x, treating y as a <b>constant</b>. <b>f<sub>y</sub> = ∂f/∂y = lim [f(x, y + h) − f(x, y)]/h</b>: differentiate in y, treating x as constant.' }] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The definition of the y-derivative is labelled ∂f/∂x on the slide; it is <b>∂f/∂y</b>. The deck also writes “Coff-Douglas” for the <b>Cobb–Douglas</b> production function.' }] },
        { k: 'step', n: '4', title: 'Worked', blocks: [{ k: 'ul', items: [
          'f = xy − y²: <b>fₓ = y, f<sub>y</sub> = x − 2y</b>.',
          'f = x²y + y³x − 2xy: <b>fₓ = 2xy + y³ − 2y</b>, <b>f<sub>y</sub> = x² + 3xy² − 2x</b>.',
          '5x² − 6y³: 10x, −18y². 2xy − y² + 1: 2y, 2x − 2y. x³y²: 3x²y², 2x³y. x²y⁴: 2xy⁴, 4x²y³. xy: y, x.',
        ] }] },
      ],
    },
    {
      id: 'de-apps',
      title: 'Uses of partial derivatives',
      kicker: 'Marginal effects with two inputs',
      blocks: [
        { k: 'step', n: '5', title: 'Marginal revenue: boots and life jackets', blocks: [{ k: 'p', x: 'p₁ = 1200 − 18x − y, p₂ = 523 − 1.5x − 0.15y. R = xp₁ + yp₂ = <b>1200x + 523y − 18x² − 2.5xy − 0.15y²</b>. Rₓ = 1200 − 36x − 2.5y (extra revenue from one more boot); R<sub>y</sub> = 523 − 2.5x − 0.3y (from one more jacket). Rₓ(50, 25) = <b>−662.5</b>: at 50 boots and 25 jackets a month, selling one more boot lowers revenue by about 662.5.' }] },
        { k: 'step', n: '6', title: 'Advertising, stationary points', blocks: [{ k: 'ul', items: [
          'Donyma Steel, S = 2x² + y (thousands of cedis): Sₓ = 4x, S<sub>y</sub> = 1; Sₓ(3, 5) = <b>12</b> (one more thousand on newspapers adds about 12 thousand in sales), S<sub>y</sub>(3, 5) = 1 (one more thousand on radio adds about 1 thousand).',
          'S = 3x + 2y³: Sₓ(2, 6) = <b>3</b>, S<sub>y</sub>(2, 6) = 6y² = <b>216</b>.',
          'f = x² + y² − 8x + 2y + 7: fₓ = 2x − 8 = 0 and f<sub>y</sub> = 2y + 2 = 0 at <b>(4, −1)</b>.',
        ] }] },
        { k: 'p', x: 'The <b>Cobb–Douglas production function</b> Q(L, K) = A Lᵃ Kᵇ links output to labour L and capital K. <b>Qₗ</b> (∂Q/∂L) is the <b>marginal productivity of labour</b>; <b>Q<sub>K</sub></b> the <b>marginal productivity of capital</b>. To compare spending, estimate the change as fₓΔx (labour) and f<sub>y</sub>Δy (capital).' },
        { k: 'step', n: '7', title: 'Worked', blocks: [{ k: 'ul', items: [
          'f = 4x<sup>0.75</sup>y<sup>0.25</sup>: realistic domain x ≥ 0, y ≥ 0; f(50, 60) ≈ <b>209</b> units from 50 of labour and 60 of capital.',
          'f = 1.64x<sup>0.64</sup>y<sup>0.4</sup>: fₓ = 1.0496x<sup>−0.36</sup>y<sup>0.4</sup>, f<sub>y</sub> = 0.656x<sup>0.64</sup>y<sup>−0.6</sup>; fₓ(100, 18) ≈ <b>0.64</b> (thousand gallons per extra hundred labour hours), f<sub>y</sub>(110, 20) ≈ <b>2.20</b> (per extra thousand of capital).',
          'f = 4.23x<sup>0.37</sup>y<sup>0.66</sup> at x = 5, y = 1: fₓ ≈ 0.568, so GH¢1m more on labour adds ≈ 0.57; f<sub>y</sub> ≈ 5.06, so GH¢0.5m more on capital adds ≈ 2.53: <b>capital</b> raises production more.',
          'Q = 10L<sup>0.6</sup>K<sup>0.4</sup>: Qₗ = <b>6L<sup>−0.4</sup>K<sup>0.4</sup></b>.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Order = highest derivative; general solution has c; initial conditions give a particular solution.',
          'Separable: y-terms with dy, x-terms with dx, integrate both sides.',
          'Partial derivative: differentiate in one variable, the other held constant.',
          'Marginal effects: Rₓ, R<sub>y</sub>; stationary point fₓ = f<sub>y</sub> = 0; Cobb–Douglas Qₗ, Q<sub>K</sub>.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The order of d²y/dx² + dy/dx = 4x² is', '2', ['1', '4', '3'], 'Highest derivative.', 'DEs'],
    ['A solution containing an arbitrary constant is the', 'General solution', ['Particular solution', 'Initial condition', 'Partial derivative'], 'Definition.', 'DEs'],
    ['The method for dy/dx = f(x)g(y) is', 'Separation of variables', ['Partial fraction decomposition', 'Integration by parts', 'The chain rule'], 'Separable.', 'DEs'],
    ['dy/dx = x/y has general solution', 'y² = x² + c', ['y = x + c', 'y = x²/2 + c', 'xy = c'], 'y dy = x dx.', 'DEs'],
    ['dy/dx = xy has general solution', 'y = A e^(x²/2)', ['y = x²/2 + c', 'y = A e^(x²)', 'y = A e^(2x²) + c'], 'dy/y = x dx.', 'DEs'],
    ['dy/dx = x²/y³ has general solution', 'y⁴ = (4/3)x³ + c', ['y⁴ = x³ + c', 'y³ = x² + c', 'y = x³ + c'], 'y⁴/4 = x³/3 + k.', 'DEs'],
    ['dy/dx = 3xy with y(0) = 3 gives', 'y = 3e^((3/2)x²)', ['y = 3e^(3x²)', 'y = e^((3/2)x²)', 'y = 3 + (3/2)x²'], 'A = 3.', 'DEs'],
    ['dy/dx = xy − 3x with y(0) = 1 gives', 'y = 3 − 2e^(x²/2)', ['y = 3 + 2e^(x²/2)', 'y = 1 − 2e^(x²/2)', 'y = e^(x²/2)'], 'y − 3 = Ae^(x²/2).', 'DEs'],
    ['dC/dx = −0.02x + 6 with C(10) = 400: the constant k is', '341', ['400', '359', '460'], '400 − 59.', 'DEs'],
    ['dy/dx = 12x with y(1) = 8 gives', 'y = 6x² + 2', ['y = 12x − 4', 'y = 6x² + 8', 'y = 12x² − 4'], 'c = 2.', 'DEs'],
    ['To find fₓ you treat y as', 'A constant', ['Zero', 'A function of x', 'The variable'], 'Hold it still.', 'Partials'],
    ['For f = xy − y², f_y =', 'x − 2y', ['y', 'x − y', '2y − x'], 'x held constant.', 'Partials'],
    ['For f = x²y + y³x − 2xy, fₓ =', '2xy + y³ − 2y', ['x² + 3xy² − 2x', '2xy + 3y² − 2', '2x + y³ − 2'], 'y constant.', 'Partials'],
    ['f = 2x² − 3y³: f(2, 1) =', '5', ['−5', '11', '1'], '8 − 3.', 'Partials'],
    ['f = x² + y² − 8x + 2y + 7 is stationary at', '(4, −1)', ['(−4, 1)', '(8, −2)', '(2, −1)'], 'fₓ = fᵧ = 0.', 'Uses'],
    ['S = 2x² + y: Sₓ(3, 5) =', '12', ['6', '18', '1'], '4x.', 'Uses'],
    ['Qₗ in a Cobb–Douglas function is the', 'Marginal productivity of labour', ['Marginal productivity of capital', 'Total production level', 'Average cost of labour'], '∂Q/∂L.', 'Uses'],
    ['Q = 10L^0.6 K^0.4: Qₗ =', '6L^(−0.4) K^0.4', ['4L^0.6 K^(−0.6)', '6L^0.6 K^0.4', '10L^(−0.4) K^0.4'], 'Power rule in L.', 'Uses'],
    ['For f = 4.23x^0.37 y^0.66 at (5, 1), more output comes from', 'GH¢0.5m on capital', ['GH¢1m on labour', 'Both by equal amounts', 'Neither of the two'], '2.53 vs 0.57.', 'Uses'],
    ['Rₓ(50, 25) = −662.5 means one more boot', 'Lowers revenue by about 662.5', ['Raises revenue by about 662.5', 'Costs exactly 662.5 to make', 'Has no effect on revenue'], 'Marginal revenue negative.', 'Uses'],
  ],
};
