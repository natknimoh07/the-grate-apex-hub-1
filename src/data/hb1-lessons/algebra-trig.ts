// Algebra → Trigonometry. From "MATH 157 ALGEBRA 7" (Dr Kwame Piesie, 27 slides), plus the
// quadrant (CAST) rule from standard texts, which every equation needs (labelled). Rewrites the
// original database lesson algebra-07 (same id, so progress is kept). Checked 2026-11-04;
// teaching text in our own words; every slide example and trial exercise is worked. Practises
// Quiz 7.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraTrig: Hb1Lesson = {
  id: 'algebra-07',
  order: 7,
  title: 'Trigonometry: Ratios, Identities and Equations',
  summary: 'What trigonometry studies, angle direction and the kinds of angle; SOH CAH TOA; degrees and radians; the special angles 0°, 30°, 45°, 60°, 90°; the compound-angle, double-angle and Pythagorean identities with sec, cosec and cot; finding ratios without tables (including obtuse angles); inverse notation; and trigonometric equations, with the quadrant rule — every slide example and all twenty trial exercises worked',
  minutes: 34,
  source: 'MATH 157 ALGEBRA 7.pdf',
  quizId: 'altr',
  quizName: 'Quiz · Trigonometry (lesson)',
  pastSets: ['s7'],
  pastTopics: ['trigonometry'],
  sections: [
    {
      id: 'tr-ratios',
      title: 'Angles and the trigonometric ratios',
      kicker: 'Sides and angles of right triangles',
      blocks: [
        { k: 'p', x: '<b>Trigonometry</b> studies how the angles and sides of triangles are related, especially the <b>ratios of the sides</b> of a right-angled triangle. Angles measured <b>anticlockwise are positive</b>; clockwise are negative. The ratios depend only on the acute angle, because right triangles with the same acute angles are <b>similar</b>; that makes them functions of the angle: the <b>trigonometric functions</b>.' },
        { k: 'table', head: ['Angle', 'Size'], rows: [
          { c: ['Acute', 'Less than 90°'] },
          { c: ['Right', 'Exactly 90°'] },
          { c: ['Obtuse', 'Between 90° and 180°'] },
          { c: ['Straight (on a straight line)', 'Exactly 180°'] },
          { c: ['Reflex', 'Between 180° and 360°'] },
        ] },
        { k: 'box', title: 'SOH CAH TOA', tone: 'formula', blocks: [{ k: 'p', x: 'With O the side <b>opposite</b> the angle, A the side <b>adjacent</b> and H the <b>hypotenuse</b>: <b>sin θ = O/H</b>, <b>cos θ = A/H</b>, <b>tan θ = O/A</b>. The reciprocals: cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ.' }] },
      ],
    },
    {
      id: 'tr-rad',
      title: 'Degrees and radians',
      kicker: 'π rad = 180°',
      blocks: [
        { k: 'p', x: 'From R/π = D/180°: <b>θ° = (θ/180) × π rad</b>, and <b>x rad = (x/π) × 180°</b>. One radian is the angle at the centre of a circle cut off by an arc equal to the radius (≈ 57.3°).' },
        { k: 'table', head: ['Degrees', '30°', '45°', '60°', '90°', '180°', '270°', '360°'], rows: [
          { c: ['Radians', 'π/6', 'π/4', 'π/3', 'π/2', 'π', '3π/2', '2π'] },
        ] },
        { k: 'step', n: '1', title: 'Slide examples and trials', blocks: [{ k: 'ul', items: [
          'Degrees to radians: 45° = <b>π/4</b>; 75° = <b>5π/12</b>; 140° = <b>7π/9</b>; 46° = <b>23π/90</b>; 48° = <b>4π/15</b>; 70° = <b>7π/18</b>.',
          'Radians to degrees: 7π/5 = <b>252°</b>; 5π/4 = <b>225°</b>; π/7 ≈ <b>25.714°</b>; 2π/3 = <b>120°</b> (the slide leaves this one unworked); π/4 = <b>45°</b>; 2π/9 = <b>40°</b>; 17π/4 = <b>765°</b>; 4π/3 = <b>240°</b>.',
        ] }] },
      ],
    },
    {
      id: 'tr-special',
      title: 'Special angles',
      kicker: 'Learn these by heart',
      blocks: [
        { k: 'p', x: 'Cut an <b>equilateral triangle of side 2</b> in half: the half has sides 1, √3, 2 and angles 30°, 60°, 90°. A <b>right isosceles triangle</b> with legs 1 has hypotenuse √2 and angles 45°.' },
        { k: 'table', head: ['θ', '0°', '30°', '45°', '60°', '90°'], rows: [
          { c: ['sin θ', '0', '1/2', '1/√2', '√3/2', '1'] },
          { c: ['cos θ', '1', '√3/2', '1/√2', '1/2', '0'] },
          { c: ['tan θ', '0', '1/√3', '1', '√3', 'Undefined (sin 90/cos 90 = 1/0)'] },
        ] },
        { k: 'p', x: '<b>Complementary angles</b> (x + y = 90°): sin x = cos y and cos x = sin y, so sin 30° = cos 60° = ½ and sin 60° = cos 30° = √3/2. So sin 90° = 1, tan 45° = 1, cos 60° = ½ (trial).' },
        { k: 'box', title: 'Strictly speaking: angles beyond 90° (the CAST rule)', tone: 'gold', blocks: [{ k: 'p', x: 'For any angle, measure from the positive x-axis. The ratio that is <b>positive</b> in each quadrant: 0–90° <b>All</b>; 90–180° <b>Sin</b>; 180–270° <b>Tan</b>; 270–360° <b>Cos</b>. The reference angle α gives the rest: sin(180° − α) = sin α; cos(180° − α) = −cos α; sin(180° + α) = −sin α; cos(360° − α) = cos α. So an equation like sin θ = k has <b>two</b> solutions in 0–360°: α and 180° − α (for k &gt; 0), or 180° + α and 360° − α (for k &lt; 0).' }] },
      ],
    },
    {
      id: 'tr-ident',
      title: 'Identities',
      kicker: 'Always true, for every angle',
      blocks: [
        { k: 'table', head: ['Kind', 'Identity'], rows: [
          { c: ['Compound sine', 'sin(A ± B) = sin A cos B ± cos A sin B'] },
          { c: ['Compound cosine', 'cos(A ± B) = cos A cos B ∓ sin A sin B (the sign flips)'] },
          { c: ['Compound tangent', 'tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)'] },
          { c: ['Pythagorean', '<b>sin²θ + cos²θ = 1</b>; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ'] },
          { c: ['Double angle (textbook)', 'sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ'] },
          { c: ['Half-angle forms', 'cos²θ = ½(1 + cos 2θ); sin²θ = ½(1 − cos 2θ)'] },
          { c: ['Reciprocals', 'cot θ = 1/tan θ; sec θ = 1/cos θ; cosec θ = 1/sin θ'] },
        ] },
        { k: 'box', title: 'Notation', tone: 'recall', blocks: [{ k: 'ul', items: [
          'sin²x means (sin x)², and <b>sin²x ≠ sin x²</b> (the sine of x squared). Likewise cos²x, tan²x.',
          '<b>sin⁻¹ k</b> is the angle whose sine is k (the inverse, not 1/sin k): sin⁻¹(1) = 90°. If sin x = α then x = sin⁻¹ α.',
        ] }] },
        { k: 'step', n: '2', title: 'Ratios without tables', blocks: [{ k: 'ul', items: [
          'sin A = 8/17, A obtuse: the adjacent side is √(17² − 8²) = 15. In the second quadrant cosine and tangent are negative: <b>cos A = −15/17, tan A = −8/15</b>.',
          'sin θ = 5/13: adjacent √(169 − 25) = 12, <b>cos θ = 12/13, tan θ = 5/12</b>.',
          'Trial: tan θ = 3/4 (a 3-4-5 triangle): <b>sin θ = 3/5, cos θ = 4/5</b>. sin θ = 4/5: <b>tan θ = 4/3, cos θ = 3/5</b>.',
          'Trial: cos 2x = 4/5: cos²x = ½(1 + 4/5) = 9/10, so (for acute x) <b>cos x = 3/√10, sin x = 1/√10, tan x = 1/3</b>.',
          'Past paper: sin α = 3/√10 (first quadrant): cos 2α = 1 − 2sin²α = 1 − 18/10 = <b>−4/5</b>.',
        ] }] },
        { k: 'step', n: '3', title: 'Trial proofs and values', blocks: [{ k: 'ul', items: [
          'sin 165° = sin(120° + 45°) = (√3/2)(√2/2) + (−½)(√2/2) = <b>(√2/4)(√3 − 1)</b>.',
          'x = a cosec θ: x² − a² = a²(cosec²θ − 1) = a²cot²θ, so 1/√(x² − a²) = 1/(a cot θ) = <b>(1/a) tan θ</b>.',
          'Eliminate θ from x = a sin θ, y = b tan θ: cosec θ = a/x and cot θ = b/y; since cosec²θ − cot²θ = 1, <b>a²/x² − b²/y² = 1</b>.',
          'cos[tan⁻¹(√3) − sin⁻¹(½)] = cos(60° − 30°) = cos 30° = <b>√3/2</b>.',
        ] }] },
      ],
    },
    {
      id: 'tr-eq',
      title: 'Trigonometric equations',
      kicker: 'Reduce to one ratio, then find every angle',
      blocks: [
        { k: 'p', x: 'Method: use identities to write the equation in <b>one ratio</b> (often a quadratic in sin or cos), solve for that ratio, reject impossible values (|sin|, |cos| ≤ 1; |sec|, |cosec| ≥ 1), then list <b>every angle in the given range</b> using the quadrant rule. For a multiple angle like 2x, widen the range first (0 ≤ x ≤ 360° means 0 ≤ 2x ≤ 720°).' },
        { k: 'step', n: '4', title: 'Slide example: 3 cos 2θ + sin θ = 1, π ≤ θ ≤ 2π', blocks: [{ k: 'p', x: 'cos 2θ = 1 − 2sin²θ gives 6 sin²θ − sin θ − 2 = 0, (3 sin θ − 2)(2 sin θ + 1) = 0, so sin θ = 2/3 (θ ≈ 42°, 138°) or −½ (θ = 210°, 330°). Only the negative value lies in π to 2π (the third and fourth quadrants): <b>θ = 7π/6 or 11π/6</b>.' }] },
        { k: 'step', n: '5', title: 'Trials: 0° to 360°', blocks: [{ k: 'ul', items: [
          '2 cos 2x + 3 cos x − 2 = 0: 4cos²x + 3 cos x − 4 = 0, cos x = (−3 + √73)/8 ≈ 0.693 (the other root −1.44 is impossible): <b>x ≈ 46.1°, 313.9°</b>.',
          'cos 2x = 0.75: 2x = 41.4°, 318.6°, 401.4°, 678.6°, so <b>x ≈ 20.7°, 159.3°, 200.7°, 339.3°</b>.',
          'cosec 2x = 2: sin 2x = ½, 2x = 30°, 150°, 390°, 510°: <b>x = 15°, 75°, 195°, 255°</b>.',
          '3 sin²x + 2 cos x = 2: 3cos²x − 2 cos x − 1 = 0, cos x = 1 or −⅓: <b>x = 0°, 360°, 109.5°, 250.5°</b>.',
          '1 + cos θ = 2 sin²θ: 2cos²θ + cos θ − 1 = 0, cos θ = ½ or −1: <b>θ = 60°, 180°, 300°</b>.',
          'Simultaneous (read as sin(x + y) = 1/√2 and cos 2x = −1/√2): 2x = 135°, 225°, 495°, 585°, so x = 67.5°, 112.5°, 247.5°, 292.5°; x + y = 45° or 135° (+360°) gives the pairs (67.5°, 67.5°), (67.5°, 337.5°), (112.5°, 22.5°), (112.5°, 292.5°), (247.5°, 157.5°), (247.5°, 247.5°), (292.5°, 112.5°), (292.5°, 202.5°).',
        ] }] },
        { k: 'step', n: '6', title: 'Trials: other ranges and principal values', blocks: [{ k: 'ul', items: [
          'cos 2x = sin(x + π/6), 0 &lt; x &lt; π/2: sin(x + π/6) = cos(π/3 − x), so 2x = π/3 − x: <b>x = π/9</b> (20°).',
          'sin(x + 30°) = cos 2x, 0 ≤ x ≤ 90°: cos 2x = sin(90° − 2x), so x + 30° = 90° − 2x: <b>x = 20°</b>.',
          'sin²x − 3 sin x + 1 = 0: sin x = (3 − √5)/2 ≈ 0.382 (the other root is above 1): principal value <b>x ≈ 22.5°</b>.',
          '2 tan x sin x + 2 sin x = tan x + 1: (tan x + 1)(2 sin x − 1) = 0, so <b>x = π/6, 5π/6, 3π/4, 7π/4</b> in 0 to 2π.',
          '2 sin²x − cos x − 1 = 0, 0 ≤ x ≤ 2π: 2cos²x + cos x − 1 = 0, cos x = ½ or −1: <b>x = π/3, π, 5π/3</b>.',
          '3 tan²x + 4 sec x + 4 = 0: 3sec²x + 4 sec x + 1 = 0, sec x = −⅓ (impossible) or −1: <b>x = 180°</b> (π).',
          '√3 cot x sin x + 2 cos²x = 0: √3 cos x + 2cos²x = 0, cos x = 0 or −√3/2: principal values <b>x = 90°, 150°</b>.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'SOH CAH TOA; cosec, sec, cot are the reciprocals.',
          'Degrees × π/180 = radians; radians × 180/π = degrees.',
          'Special angles from the 1-√3-2 and 1-1-√2 triangles; sin x = cos(90° − x).',
          'sin² + cos² = 1; cos 2θ = 1 − 2sin²θ = 2cos²θ − 1; compound-angle formulas.',
          'Equations: one ratio, solve, reject impossible values, all quadrants (CAST), the right range.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['An angle between 180° and 360° is', 'Reflex', ['Obtuse', 'Straight', 'Acute'], 'Definition.', 'Angles'],
    ['Angles measured anticlockwise are', 'Positive', ['Negative', 'Reflex', 'Always acute'], 'Convention.', 'Angles'],
    ['TOA means tan θ =', 'Opposite / adjacent', ['Adjacent / hypotenuse', 'Opposite / hypotenuse', 'Hypotenuse / adjacent'], 'SOH CAH TOA.', 'Ratios'],
    ['45° in radians is', 'π/4', ['π/2', '4π', 'π/45'], '45/180 × π.', 'Radians'],
    ['140° in radians is', '7π/9', ['7π/18', '9π/7', '14π/9'], '140/180.', 'Radians'],
    ['5π/4 rad in degrees is', '225°', ['135°', '250°', '45°'], '5/4 × 180.', 'Radians'],
    ['17π/4 rad in degrees is', '765°', ['425°', '675°', '45°'], '17/4 × 180.', 'Radians'],
    ['tan 60° =', '√3', ['1/√3', '√3/2', '1/2'], 'Special angle.', 'Special'],
    ['tan 90° is', 'Undefined', ['Zero', 'One', 'Root three'], 'cos 90° = 0.', 'Special'],
    ['If x and y are complementary, sin x =', 'cos y', ['sin y', 'tan y', '−cos y'], 'x + y = 90°.', 'Special'],
    ['sin A = 8/17 and A is obtuse. cos A =', '−15/17', ['15/17', '−8/15', '8/15'], 'Second quadrant.', 'Identities'],
    ['tan θ = 3/4 (acute). sin θ =', '3/5', ['4/5', '3/4', '5/3'], '3-4-5 triangle.', 'Identities'],
    ['cos(A + B) =', 'cos A cos B − sin A sin B', ['cos A cos B + sin A sin B', 'sin A cos B + cos A sin B', 'cos A sin B − sin A cos B'], 'Sign flips.', 'Identities'],
    ['1 + tan²θ =', 'sec²θ', ['cosec²θ', 'cot²θ', 'sin²θ'], 'Divide sin² + cos² = 1 by cos².', 'Identities'],
    ['cos 2θ in terms of sin θ is', '1 − 2sin²θ', ['2sin²θ − 1', '1 − sin²θ', '2 sin θ cos θ'], 'Double angle.', 'Identities'],
    ['sin⁻¹(1) =', '90°', ['1°', '0°', '180°'], 'The angle whose sine is 1.', 'Identities'],
    ['sin α = 3/√10, first quadrant. cos 2α =', '−4/5', ['4/5', '−3/5', '1/5'], '1 − 2(9/10).', 'Identities'],
    ['sin 165° equals', '(√2/4)(√3 − 1)', ['(√2/4)(√3 + 1)', '(√3/4)(√2 − 1)', '(1/4)(√3 − 1)'], 'sin(120° + 45°).', 'Identities'],
    ['cos[tan⁻¹(√3) − sin⁻¹(½)] =', '√3/2', ['1/2', '1', '0'], 'cos 30°.', 'Identities'],
    ['Eliminating θ from x = a sin θ, y = b tan θ gives', 'a²/x² − b²/y² = 1', ['x²/a² + y²/b² = 1', 'a²/x² + b²/y² = 1', 'x²/a² − y²/b² = 1'], 'cosec² − cot² = 1.', 'Identities'],
    ['3 cos 2θ + sin θ = 1, π ≤ θ ≤ 2π, gives', '7π/6 and 11π/6', ['π/6 and 5π/6', '7π/30 and 23π/30', '4π/3 and 5π/3'], 'sin θ = −½.', 'Equations'],
    ['cosec 2x = 2 for 0° to 360° gives', '15°, 75°, 195°, 255°', ['30°, 150°, 210°, 330°', '15°, 165°, 195°, 345°', '60°, 120°, 240°, 300°'], 'sin 2x = ½.', 'Equations'],
    ['1 + cos θ = 2 sin²θ for 0° to 360° gives', '60°, 180°, 300°', ['30°, 150°, 270°', '0°, 120°, 240°', '60°, 120°, 180°'], 'cos θ = ½ or −1.', 'Equations'],
    ['2 sin²x − cos x − 1 = 0 on 0 to 2π gives', 'π/3, π, 5π/3', ['π/6, π, 11π/6', 'π/3, 2π/3, π', '0, π/3, 5π/3'], 'cos x = ½ or −1.', 'Equations'],
    ['cos θ = 1/2 has solutions in 0° to 360° at', '60° and 300°', ['60° and 120°', '30° and 330°', '60° and 240°'], 'Cosine is positive in quadrants 1 and 4.', 'Equations'],
    ['cos x = −1 for 0° ≤ x ≤ 360° gives', '180°', ['0° and 360°', '90°', '270°'], 'Cosine’s minimum.', 'Equations'],
  ],
};
