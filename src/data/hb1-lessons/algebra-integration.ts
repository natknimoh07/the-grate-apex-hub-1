// Algebra → Integration: techniques. From "MATH 157 – INTEGRATION" (deck 11, Dr Kwame Piesie,
// slides 1–30 of 59). Applications (slides 31–43) and differential equations with partial
// derivatives (44–59) are taught in two app lessons that follow. Rewrites the original database
// lesson algebra-11 (same id, so progress is kept). Checked 2026-11-04; teaching text in our own
// words; every slide example is worked (where the slide is unclear, the reading used is stated).
// Practises Quiz 11.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraIntegration: Hb1Lesson = {
  id: 'algebra-11',
  order: 11,
  title: 'Integration: Rules, Substitution and Partial Fractions',
  summary: 'Integration as reversing differentiation; the indefinite integral and its notation; the power, constant and sum rules; definite integrals; standard trigonometric integrals; integration by substitution; rational functions, proper and improper, and partial fractions of all four types; integrals giving logarithms; and exponential integrals — every slide example worked',
  minutes: 38,
  source: 'MATH 157, ALGEBRA 11.pdf',
  quizId: 'alin',
  quizName: 'Quiz · Integration techniques (lesson)',
  pastSets: ['s11'],
  sections: [
    {
      id: 'in-basic',
      title: 'The indefinite integral and the basic rules',
      kicker: 'Working back from the derivative',
      blocks: [
        { k: 'p', x: 'Differentiation finds the rate of change from a function; <b>integration reverses it</b>, recovering the function from its rate of change. If F′(x) = f(x), then <b>∫ f(x) dx = F(x) + c</b>: ∫ is the integral sign, f(x) the <b>integrand</b>, F(x) the integral, c the <b>constant of integration</b> (any constant differentiates to 0) and dx names the variable.' },
        { k: 'table', head: ['Rule', 'Statement'], rows: [
          { c: ['Power (n ≠ −1)', '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c: raise the power by 1, divide by the new power'] },
          { c: ['Constant', '∫ k dx = kx + c; ∫ k f dx = k ∫ f dx'] },
          { c: ['Sum and difference', '∫ (f ± g) dx = ∫ f dx ± ∫ g dx'] },
          { c: ['n = −1', '∫ (1/x) dx = ln |x| + c'] },
        ] },
        { k: 'step', n: '1', title: 'Worked', blocks: [{ k: 'ul', items: [
          '∫x⁸ = <b>x⁹/9 + c</b>; ∫√x = <b>(2/3)x<sup>3/2</sup> + c</b>; ∫x⁻⁵ = <b>−¼x⁻⁴ + c</b>; ∫x<sup>1/3</sup> = <b>¾x<sup>4/3</sup> + c</b>.',
          '∫(2x − 5) = x² − 5x + c; ∫3x² = x³ + c; ∫2x⁴ = (2/5)x⁵ + c.',
          '∫(x² + 3) = x³/3 + 3x + c; ∫(x<sup>1/3</sup> + 5) = ¾x<sup>4/3</sup> + 5x + c.',
          '∫(2x³ − 3x)/(4x) dx = ∫(x²/2 − ¾) dx = <b>x³/6 − 3x/4 + c</b> (divide first: never integrate top and bottom separately).',
          '∫(x³ + 1/x² + √x) = <b>x⁴/4 − 1/x + (2/3)x<sup>3/2</sup> + c</b>; ∫(2x² − 1/x² + x) = <b>(2/3)x³ + 1/x + x²/2 + c</b>.',
        ] }] },
      ],
    },
    {
      id: 'in-def',
      title: 'Definite integrals and trigonometric integrals',
      kicker: 'F(b) − F(a)',
      blocks: [
        { k: 'p', x: 'An indefinite integral has an unknown c. A <b>definite integral</b> has <b>limits</b>: <b>∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a)</b>, a number (c cancels).' },
        { k: 'step', n: '2', title: 'Worked', blocks: [{ k: 'ul', items: [
          '∫₁³ (3x² + 2x + 4) = [x³ + x² + 4x]₁³ = 48 − 6 = <b>42</b>.',
          '∫₁² (x + 1)(x² − 2x + 2)/x² dx: the top is x³ − x² + 2, so the integrand is x − 1 + 2/x²; [x²/2 − x − 2/x]₁² = −1 − (−2.5) = <b>3/2</b>.',
          '∫₋₂² (x³ − x² + 1) = [x⁴/4 − x³/3 + x]₋₂² = 10/3 − 14/3 = <b>−4/3</b>.',
          '∫₋₂² (x² − 2)(2x − 1) = ∫(2x³ − x² − 4x + 2): the odd powers cancel over [−2, 2], leaving ∫(2 − x²) = 8 − 16/3 = <b>8/3</b>.',
          '∫₋₁ᵃ 2(x + 2) dx = 15: [x² + 4x]₋₁ᵃ = a² + 4a + 3 = 15, so a² + 4a − 12 = 0, <b>a = 2</b> (−6 is ruled out by a &gt; 0).',
        ] }] },
        { k: 'table', head: ['∫ f(x) dx', 'Result', '∫ f(x) dx', 'Result'], rows: [
          { c: ['cos x', 'sin x + c', 'sec²x', 'tan x + c'] },
          { c: ['sin x', '−cos x + c', 'cosec²x', '−cot x + c'] },
          { c: ['tan x', 'ln |sec x| + c', 'sec x tan x', 'sec x + c'] },
          { c: ['cosec x cot x', '−cosec x + c', '—', '—'] },
        ] },
        { k: 'p', x: 'Each comes from reading the derivative table backwards. ∫₀<sup>π/2</sup> cos x = 1; ∫₀<sup>π</sup> sin x = 2; ∫₀<sup>π/4</sup> sec²x = 1; ∫<sub>π/4</sub><sup>π/2</sup> cosec²x = 1.' },
      ],
    },
    {
      id: 'in-sub',
      title: 'Integration by substitution',
      kicker: 'Spot the inside function and its derivative',
      blocks: [
        { k: 'p', x: 'When the integrand is not standard, put <b>u = the inside function</b>, find du = u′ dx, and rewrite everything in u. It works when the derivative of the inside (up to a constant) is also present. For a definite integral, change the limits to u-values (or substitute back first).' },
        { k: 'step', n: '3', title: 'Indefinite, worked', blocks: [{ k: 'ul', items: [
          '∫x√(1 − x²): u = 1 − x², x dx = −du/2: <b>−⅓(1 − x²)<sup>3/2</sup> + c</b>.',
          '∫3x(4x² + 3)⁵: u = 4x² + 3, x dx = du/8: <b>(1/16)(4x² + 3)⁶ + c</b>.',
          '∫2x/√(4x² − 1): <b>½√(4x² − 1) + c</b>. ∫x(x² − 3)⁴: <b>(x² − 3)⁵/10 + c</b>.',
          '∫x²(1 − x³): u = 1 − x³: <b>−(1 − x³)²/6 + c</b>. ∫(2 + 7x)⁷: <b>(2 + 7x)⁸/56 + c</b>.',
          '∫1/(4x + 5)³: <b>−1/[8(4x + 5)²] + c</b>. ∫1/√(1 − 2x): <b>−√(1 − 2x) + c</b>.',
        ] }] },
        { k: 'step', n: '4', title: 'Definite, worked', blocks: [{ k: 'ul', items: [
          '∫₀² 3x/√(2x² + 1) = (3/2)[√(2x² + 1)]₀² = (3/2)(3 − 1) = <b>3</b>.',
          '∫₁³ 5x√(2x² + 7) (as read) = (5/6)[(2x² + 7)<sup>3/2</sup>]₁³ = (5/6)(125 − 27) = <b>245/3 ≈ 81.7</b>.',
          '∫₀¹ x²√(x³ + 1) = (2/9)[(x³ + 1)<sup>3/2</sup>]₀¹ = (2/9)(2√2 − 1) ≈ <b>0.406</b>.',
          '∫₀² x(x² + 1)³ = (1/8)[(x² + 1)⁴]₀² = (625 − 1)/8 = <b>78</b>.',
          '∫₋₁² 3/(2y + 3)<sup>1/3</sup> dy = (9/4)[(2y + 3)<sup>2/3</sup>]₋₁² = (9/4)(7<sup>2/3</sup> − 1) ≈ <b>5.98</b>.',
          '∫₂¹⁰ 1/√(2y + 5) dy = [√(2y + 5)]₂¹⁰ = 5 − 3 = <b>2</b>.',
        ] }] },
      ],
    },
    {
      id: 'in-pf',
      title: 'Partial fractions',
      kicker: 'Break a fraction into simpler ones',
      blocks: [
        { k: 'p', x: 'A <b>rational function</b> is P(x)/Q(x) with P, Q polynomials, Q ≠ 0. It is <b>proper</b> if deg P &lt; deg Q ((x + 1)/(x² − 1)) and <b>improper</b> otherwise ((x² − 2x − 8)/(x + 4)). Writing one as a sum of simpler fractions is <b>resolving into partial fractions</b>: 1/(x − 2) + 3/(x + 1) = (4x − 5)/(x² − x − 2), and resolving goes the other way.' },
        { k: 'table', head: ['Type', 'Denominator', 'Form'], rows: [
          { c: ['I', 'Distinct linear factors', 'A/(x − a) + B/(x − b)'] },
          { c: ['II', 'A quadratic factor that will not factorise', 'A/(x − a) + (Bx + C)/(x² + k)'] },
          { c: ['III', 'A repeated factor (x − a)²', 'A/(x − b) + B/(x − a) + C/(x − a)²'] },
          { c: ['IV', 'Improper (deg P ≥ deg Q)', 'Divide first: a polynomial + a proper fraction'] },
        ] },
        { k: 'box', title: 'How to find A, B, C', tone: 'recall', blocks: [{ k: 'p', x: 'Multiply through by the denominator. Put x equal to each root to make the other terms vanish (the <b>cover-up</b> idea), then compare coefficients (x², constant) for anything left. Check by recombining.' }] },
        { k: 'step', n: '5', title: 'Types I and II, worked', blocks: [{ k: 'ul', items: [
          '6/[(x + 3)(x − 3)] = <b>−1/(x + 3) + 1/(x − 3)</b>.',
          '(3x + 2)/(x² + x − 2) = <b>4/[3(x + 2)] + 5/[3(x − 1)]</b>. (11 − 3x)/(x² − 2x − 3) = <b>1/[2(x − 3)] − 7/[2(x + 1)]</b>.',
          '9/(2x² + x) = <b>9/x − 18/(2x + 1)</b>. (4x − 2)/(x² + 2x) = <b>−1/x + 5/(x + 2)</b>.',
          '(11 − 4x − x²)/[(x + 2)(x² + 1)] = <b>3/(x + 2) + (4 − 4x)/(x² + 1)</b>.',
          '(3x + 1)/[(x − 1)(x² + 1)] = <b>2/(x − 1) + (1 − 2x)/(x² + 1)</b>. (7x² + 5x + 13)/[(x² + 2)(x + 1)] = <b>5/(x + 1) + (2x + 3)/(x² + 2)</b>.',
          '1/[x(x² + 1)] = <b>1/x − x/(x² + 1)</b>. 13x/[(x − 3)(x² + x + 1)] = <b>3/(x − 3) + (1 − 3x)/(x² + x + 1)</b>. x/[(x − 1)(x² + 1)] = 1/[2(x − 1)] + (1 − x)/[2(x² + 1)].',
        ] }] },
        { k: 'step', n: '6', title: 'Types III and IV, worked', blocks: [{ k: 'ul', items: [
          '1/[(x + 2)(x − 1)²] = <b>1/[9(x + 2)] − 1/[9(x − 1)] + 1/[3(x − 1)²]</b>.',
          '(5x² − 2x − 19)/[(x + 3)(x − 1)²] = <b>2/(x + 3) + 3/(x − 1) − 4/(x − 1)²</b>.',
          '2/[x²(x − 1)] = <b>−2/x − 2/x² + 2/(x − 1)</b>. (5x + 4)/[(1 − x)(x + 2)²] = <b>1/(1 − x) + 1/(x + 2) − 2/(x + 2)²</b>.',
          '(11x + 12)/[(x + 2)(x − 3)²] (as read) = −2/[5(x + 2)] + 2/[5(x − 3)] + 9/(x − 3)². (2x² − 1)/[x²(2x + 1)] = 2/x − 1/x² − 2/(2x + 1).',
          'Improper: (x² + 1)/(x² − 3x + 2) = 1 + (3x − 1)/[(x − 1)(x − 2)] = <b>1 − 2/(x − 1) + 5/(x − 2)</b>.',
          '(2x² + 1)/[(x − 1)(x + 2)] = <b>2 + 1/(x − 1) − 3/(x + 2)</b>. (x² + 3)/[(x + 1)(x − 1)] = <b>1 + 2/(x − 1) − 2/(x + 1)</b>. (x² − 2)/[(x + 3)(x − 1)] = 1 − 7/[4(x + 3)] − 1/[4(x − 1)].',
        ] }] },
      ],
    },
    {
      id: 'in-log',
      title: 'Integrals that give logarithms; exponential integrals',
      kicker: '∫ f′/f = ln |f|',
      blocks: [
        { k: 'box', title: 'The two key results', tone: 'formula', blocks: [{ k: 'ul', items: [
          'Since d/dx ln f(x) = f′(x)/f(x): <b>∫ f′(x)/f(x) dx = ln |f(x)| + c</b>; in particular ∫ (1/x) dx = ln |x| + c (the power rule fails at n = −1).',
          '∫ eˣ dx = eˣ + c; <b>∫ e<sup>kx</sup> dx = (1/k)e<sup>kx</sup> + c</b>; ∫ e<sup>f(x)</sup> dx = e<sup>f(x)</sup>/f′(x) + c <b>only when f′(x) is a constant</b>. Otherwise look for f′(x) as a factor: ∫ f′(x) e<sup>f(x)</sup> dx = e<sup>f(x)</sup> + c.',
        ] }] },
        { k: 'step', n: '7', title: 'Logarithmic integrals, worked', blocks: [{ k: 'ul', items: [
          '∫₋₆⁻² (1/x) dx = ln 2 − ln 6 = <b>ln(1/3) ≈ −1.099</b> (|x| makes negative limits fine).',
          '∫1/(x + 2) = ln|x + 2| + c; ∫4x/(x² + 5) = 2 ln(x² + 5) + c; ∫1/(2x + 3) = ½ ln|2x + 3| + c; ∫2x/(3x² − 2) = ⅓ ln|3x² − 2| + c; ∫x³/(x⁴ + 10) = ¼ ln(x⁴ + 10) + c; ∫₁ᵉ (1/x) = 1.',
          'With partial fractions: ∫5/[(x − 2)(x + 3)] = <b>ln|(x − 2)/(x + 3)| + c</b>; ∫4/(x² − 4) = ln|(x − 2)/(x + 2)| + c; ∫(2x − 1)/(x + 1)² = 2 ln|x + 1| + 3/(x + 1) + c; ∫x/(4 − x²) = −½ ln|4 − x²| + c; ∫₂³ (x − 4)/[(x + 2)(x − 1)] = [2 ln(x + 2) − ln(x − 1)]₂³ ≈ <b>−0.247</b>.',
          'To 3 s.f.: ∫₃⁵ 2/(x² − 1) = [ln((x − 1)/(x + 1))]₃⁵ = ln(4/3) ≈ <b>0.288</b>; ∫₋₁⁰ 2/[(x − 1)(1 + x²)] ≈ <b>−1.13</b> (it needs ∫1/(1 + x²) = tan⁻¹x, beyond these slides); ∫₂³ (x − 9)/[x(x − 1)(x + 3)] = [3 ln x − 2 ln(x − 1) − ln(x + 3)]₂³ ≈ <b>−0.352</b>.',
          '∫x/(1 + x²) = ½ ln(1 + x²) + c; ∫x/(1 + x) = x − ln|1 + x| + c (divide first); ∫x/(1 − x²) = −½ ln|1 − x²| + c; ∫(x − 2)/(x² − 4x − 5) = ½ ln|x² − 4x − 5| + c; ∫(7x + 2)/(3x³ + x²) = ln|x| − 2/x − ln|3x + 1| + c; ∫x/(16 − x²) = −½ ln|16 − x²| + c.',
        ] }] },
        { k: 'step', n: '8', title: 'Exponential integrals, worked', blocks: [{ k: 'ul', items: [
          '∫e<sup>2x</sup> = ½e<sup>2x</sup> + c; ∫(2 − e<sup>2x</sup>) = 2x − ½e<sup>2x</sup> + c; ∫e<sup>2x+3</sup> = ½e<sup>2x+3</sup> + c; ∫e<sup>3x</sup> = ⅓e<sup>3x</sup> + c.',
          '∫10x e<sup>x²</sup> = <b>5e<sup>x²</sup> + c</b>; ∫(2x + 1)e<sup>2x²+2x</sup> = <b>½e<sup>2x²+2x</sup> + c</b>; ∫x²e<sup>x³</sup> = <b>⅓e<sup>x³</sup> + c</b>.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          '∫xⁿ = xⁿ⁺¹/(n + 1) + c (n ≠ −1); ∫1/x = ln|x| + c; always add c to indefinite integrals.',
          '∫ₐᵇ f = F(b) − F(a). Simplify (divide, expand) before integrating.',
          'Substitution: u = inside, du = u′dx; change the limits.',
          'Partial fractions: four types; improper → divide first.',
          '∫f′/f = ln|f|; ∫e<sup>kx</sup> = e<sup>kx</sup>/k.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['Integration is the reverse of', 'Differentiation', ['Factorisation', 'Expansion', 'Substitution'], 'F′ = f.', 'Basics'],
    ['In ∫ f(x) dx, f(x) is the', 'Integrand', ['Integral', 'Constant', 'Limit'], 'Notation.', 'Basics'],
    ['∫x⁸ dx =', 'x⁹/9 + c', ['8x⁷ + c', 'x⁹ + c', 'x⁸/8 + c'], 'Power rule.', 'Basics'],
    ['∫x⁻⁵ dx =', '−¼x⁻⁴ + c', ['−5x⁻⁶ + c', '¼x⁻⁴ + c', '−⅙x⁻⁶ + c'], 'n + 1 = −4.', 'Basics'],
    ['The power rule fails for n =', '−1', ['0', '1', '−2'], 'Division by 0.', 'Basics'],
    ['∫(2x² − 1/x² + x) dx =', '(2/3)x³ + 1/x + x²/2 + c', ['x³ + 1/x + x²/2 + c', '(2/3)x³ − 1/x + x²/2 + c', '4x + 2/x³ + 1 + c'], 'Term by term.', 'Basics'],
    ['∫₁³ (3x² + 2x + 4) dx =', '42', ['36', '48', '30'], '48 − 6.', 'Definite'],
    ['∫₋₂² (x³ − x² + 1) dx =', '−4/3', ['4/3', '8/3', '−8/3'], '10/3 − 14/3.', 'Definite'],
    ['If ∫₋₁ᵃ 2(x + 2) dx = 15 with a positive, a =', '2', ['3', '6', '4'], 'a² + 4a − 12 = 0.', 'Definite'],
    ['∫sin x dx =', '−cos x + c', ['cos x + c', 'sin x + c', '−sin x + c'], 'Reverse of (cos)′.', 'Trig'],
    ['∫sec²x dx =', 'tan x + c', ['sec x + c', '−cot x + c', 'sec x tan x + c'], 'Reverse.', 'Trig'],
    ['∫₀^π sin x dx =', '2', ['0', '1', 'π'], '[−cos x].', 'Trig'],
    ['∫3x(4x² + 3)⁵ dx =', '(1/16)(4x² + 3)⁶ + c', ['(1/8)(4x² + 3)⁶ + c', '(1/2)(4x² + 3)⁶ + c', '(3/16)(4x² + 3)⁶ + c'], 'u = 4x² + 3.', 'Substitution'],
    ['∫₀² x(x² + 1)³ dx =', '78', ['156', '624', '39'], '(625 − 1)/8.', 'Substitution'],
    ['∫1/√(1 − 2x) dx =', '−√(1 − 2x) + c', ['√(1 − 2x) + c', '2√(1 − 2x) + c', '−½√(1 − 2x) + c'], 'u = 1 − 2x.', 'Substitution'],
    ['A rational function is proper when', 'deg P below deg Q', ['deg P equals deg Q', 'deg P above deg Q', 'Q is a constant'], 'Definition.', 'Partial fractions'],
    ['6/[(x + 3)(x − 3)] =', '−1/(x + 3) + 1/(x − 3)', ['1/(x + 3) − 1/(x − 3)', '1/(x + 3) + 1/(x − 3)', '−1/(x + 3) − 1/(x − 3)'], 'x = ±3.', 'Partial fractions'],
    ['For (11 − 4x − x²)/[(x + 2)(x² + 1)], A in A/(x + 2) is', '3', ['−3', '15', '5'], 'x = −2: 15 = 5A.', 'Partial fractions'],
    ['1/[(x + 2)(x − 1)²] has C/(x − 1)² with C =', '1/3', ['1/9', '−1/9', '3'], 'x = 1.', 'Partial fractions'],
    ['An improper rational function is first', 'Divided out (polynomial + proper part)', ['Integrated term by term directly', 'Multiplied by its denominator only', 'Split by its numerator terms'], 'Type IV.', 'Partial fractions'],
    ['∫4x/(x² + 5) dx =', '2 ln(x² + 5) + c', ['4 ln(x² + 5) + c', '½ ln(x² + 5) + c', 'ln(x² + 5) + c'], 'f′/f with factor 2.', 'Logs'],
    ['∫1/(2x + 3) dx =', '½ ln|2x + 3| + c', ['ln|2x + 3| + c', '2 ln|2x + 3| + c', '−1/(2x + 3)² + c'], 'f′ = 2.', 'Logs'],
    ['∫₃⁵ 2/(x² − 1) dx (3 s.f.) =', '0.288', ['0.405', '0.693', '0.182'], 'ln(4/3).', 'Logs'],
    ['∫e^(3x) dx =', '⅓e^(3x) + c', ['3e^(3x) + c', 'e^(3x) + c', 'e^(3x)/x + c'], '1/k.', 'Exponentials'],
    ['∫10x e^(x²) dx =', '5e^(x²) + c', ['10e^(x²) + c', '20x e^(x²) + c', 'e^(x²) + c'], 'f′ = 2x present.', 'Exponentials'],
  ],
};
