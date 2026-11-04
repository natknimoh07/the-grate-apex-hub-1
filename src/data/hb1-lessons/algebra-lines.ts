// Algebra → The Straight Line (coordinate geometry). From "MATH 157 ALGEBRA 6" (Dr Kwame Piesie,
// 35 slides). Rewrites the original database lesson algebra-06 (same id, so progress is kept).
// Checked 2026-11-04; teaching text in our own words; every slide example and trial exercise is
// worked (the deck's last exercise is cut off mid-sentence, so it cannot be answered). Practises
// Quiz 6.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraLines: Hb1Lesson = {
  id: 'algebra-06',
  order: 6,
  title: 'The Straight Line: Distance, Gradient, Equations and Angles',
  summary: 'Coordinates (abscissa and ordinate); the distance between two points and the midpoint; the gradient and what it means (rate of change, steepness, direction); the three forms of a line’s equation; intersections; parallel and perpendicular lines and special lines; the acute angle between two lines; the perpendicular distance from a point to a line with its derivation and sign; and every slide example and trial exercise worked, including medians, rectangles, feet of perpendiculars and areas',
  minutes: 34,
  source: 'MATH 157 ALGEBRA 6.pdf',
  quizId: 'alln',
  quizName: 'Quiz · The Straight Line (lesson)',
  pastSets: ['s6'],
  sections: [
    {
      id: 'ln-dist',
      title: 'Points, distance and midpoint',
      kicker: 'Two points fix a line',
      blocks: [
        { k: 'p', x: 'A line joins two points (x₁, y₁) and (x₂, y₂); the x-coordinates are the <b>abscissae</b> and the y-coordinates the <b>ordinates</b>. A line’s equation can be found from its <b>gradient and one point</b>, or from <b>two points</b>.' },
        { k: 'box', title: 'Distance and midpoint', tone: 'formula', blocks: [{ k: 'ul', items: [
          '|AB| = √[(x₂ − x₁)² + (y₂ − y₁)²] = √[(Δx)² + (Δy)²]; the order of subtraction does not matter (it is Pythagoras).',
          'Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2): the average of each coordinate.',
        ] }] },
        { k: 'step', n: '1', title: 'Worked', blocks: [{ k: 'ul', items: [
          'A(1, 3), B(4, 7): √(3² + 4²) = √25 = <b>5</b>. Midpoint of A(4, 6), B(9, 5): <b>(13/2, 11/2)</b>.',
          'Trials: P(−1, −3), Q(4, 9): √(25 + 144) = <b>13</b>; A(−3, 1), B(−5, 8): √(4 + 49) = <b>√53 ≈ 7.28</b>; M(−12, 5), N(0, −7): √(144 + 144) = <b>12√2 ≈ 16.97</b>.',
          'A(7, 3), B(−4, 1), C(−3, −2): AB² = 121 + 4 = 125 and AC² = 100 + 25 = 125, so AB = AC = √125 and the triangle is <b>isosceles</b> (BC = √10). Midpoint of BC = <b>(−7/2, −1/2)</b>.',
        ] }] },
      ],
    },
    {
      id: 'ln-grad',
      title: 'Gradient',
      kicker: 'Rise over run',
      blocks: [
        { k: 'p', x: 'The <b>gradient (slope)</b> measures how steep a line is and which way it tilts: <b>m = (y₂ − y₁)/(x₂ − x₁) = Δy/Δx</b> (or (y₁ − y₂)/(x₁ − x₂), the same). P(1, 1), Q(7, 2): m = 1/6.' },
        { k: 'table', head: ['Meaning', 'What it tells you'], rows: [
          { c: ['<b>Rate of change</b>', 'How one quantity changes with another: on a distance–time graph the gradient is <b>speed</b>'] },
          { c: ['<b>Steepness</b>', 'Larger |m| is steeper; <b>m = 0</b> is horizontal; an <b>undefined (infinite)</b> gradient is vertical'] },
          { c: ['<b>Direction</b>', 'm &gt; 0 rises left to right (a road of gradient 2 rises 2 m per 1 m along); m &lt; 0 falls (gradient −1 drops 1 m per 1 m)'] },
        ] },
        { k: 'step', n: '2', title: 'Trial gradients', blocks: [{ k: 'p', x: 'A(0, 0), B(1, 3): <b>3</b>. P(3, −2), Q(−1, 4): 6/(−4) = <b>−3/2</b>. M(2, 3), N(2, 5): Δx = 0, so the gradient is <b>undefined</b>: MN is the vertical line x = 2.' }] },
      ],
    },
    {
      id: 'ln-eq',
      title: 'Equations of a line and intersections',
      kicker: 'y = mx + c and its cousins',
      blocks: [
        { k: 'table', head: ['Form', 'Use when'], rows: [
          { c: ['<b>y = mx + c</b>', 'm the gradient, c the <b>y-intercept</b>: 2x + 4y = 3 is y = −½x + ¾ (m = −½, c = ¾)'] },
          { c: ['<b>y − y₁ = m(x − x₁)</b>', 'Gradient and one point known'] },
          { c: ['y − y₁ = m(x − x₁) with m = (y₂ − y₁)/(x₂ − x₁)', 'Two points known (either point may be used)'] },
          { c: ['x/a + y/b = 1 (textbook)', 'Intercepts a and b known: A(10, 0), B(0, −7) give x/10 − y/7 = 1, i.e. <b>7x − 10y = 70</b>'] },
        ] },
        { k: 'step', n: '3', title: 'Slide examples and trials', blocks: [{ k: 'ul', items: [
          'm = 3 through (0, 1): <b>y = 3x + 1</b>. Through A(2, 3), B(3, 6): m = 3, y − 3 = 3(x − 2), <b>y = 3x − 3</b>.',
          'm = −5, A(2, −4): <b>y = −5x + 6</b>. m = ¼, B(4, 0): <b>y = ¼x − 1</b>. m = 0, P(−1, 5): <b>y = 5</b>.',
          'A(−5, 2), B(−2, 13): m = 11/3, <b>3y = 11x + 61</b>. P(−3, 0), Q(0, −2): m = −2/3, <b>2x + 3y + 6 = 0</b>. M(−3, 2), N(7, −2): m = −2/5, <b>2x + 5y − 4 = 0</b>.',
          'Gradient 4 through the origin (past paper): <b>y = 4x</b>.',
        ] }] },
        { k: 'p', x: 'The <b>intersection</b> of two lines satisfies both equations, so solve them <b>simultaneously</b>: 2x − 3y = 8 and 3x + 4y = −5 meet at <b>(1, −2)</b>.' },
        { k: 'step', n: '4', title: 'Trial intersections', blocks: [{ k: 'ul', items: [
          'x + y = 2 and 2x + 5y = 0: <b>(10/3, −4/3)</b>.',
          'y = 2x − 9 and 4x − 7y + 5 = 0: 4x − 14x + 63 + 5 = 0, <b>(34/5, 23/5)</b>.',
          '2x + y − 3 = 8 and x − 3y + 4 = 0: <b>(29/7, 19/7)</b>.',
        ] }] },
      ],
    },
    {
      id: 'ln-par',
      title: 'Parallel, perpendicular and special lines',
      kicker: 'Compare the gradients',
      blocks: [
        { k: 'box', title: 'Rules', tone: 'formula', blocks: [{ k: 'ul', items: [
          '<b>Parallel</b>: m₁ = m₂ (2y − x = 1 and 4y = 2x − 8 both have m = ½).',
          '<b>Perpendicular</b> (meet at 90°): m₁ = −1/m₂, i.e. <b>m₁m₂ = −1</b> (the condition asked for in the trial).',
          'y = mx + c passes through (0, c); y = mx passes through the <b>origin</b>.',
          '<b>y = c</b>: gradient 0, parallel to the x-axis (perpendicular to the y-axis). <b>x = k</b>: infinite gradient, parallel to the y-axis.',
        ] }] },
        { k: 'step', n: '5', title: 'Trial: parallel, perpendicular or neither?', blocks: [{ k: 'ul', items: [
          '3x = 2y + 5 (m = 3/2) and 2x + 3y = 7 (m = −2/3): product −1, <b>perpendicular</b>.',
          '6x = 5y + 7 and 12x = 10y + 13: both m = 6/5, <b>parallel</b>.',
          '3y = 2x − 1 (2/3) and 4x = 5y − 7 (4/5): <b>neither</b>.',
          '5y = 2x + 2 and 15y − 6x − 6 = 0: both m = 2/5, <b>parallel</b>; in fact the second is the first times 3, so they are the <b>same line</b>.',
        ] }] },
        { k: 'step', n: '6', title: 'Trials: lines through a point', blocks: [{ k: 'ul', items: [
          'Through A(3, −2), parallel and perpendicular to 2y + 5x = 17 (m = −5/2): parallel <b>5x + 2y − 11 = 0</b>; perpendicular (m = 2/5) <b>2x − 5y − 16 = 0</b>.',
          'Through A(1, 3), perpendicular to 2x + 3y = 12 (m = −2/3, so m = 3/2): <b>3x − 2y + 3 = 0</b>.',
          'Parallel to x + 4y − 1 = 0 through where y = 2x meets x + y = 3, i.e. (1, 2): <b>x + 4y − 9 = 0</b>.',
          'Origin to the midpoint of A(3, 2), B(5, −1), which is (4, ½): m = 1/8, <b>x − 8y = 0</b>.',
        ] }] },
      ],
    },
    {
      id: 'ln-angle',
      title: 'The angle between two lines',
      kicker: 'From the tangent difference formula',
      blocks: [
        { k: 'p', x: 'If the lines make angles α₁ and α₂ with the x-axis (tan α = m), the angle between them is θ = α₂ − α₁, so tan θ = (tan α₂ − tan α₁)/(1 + tan α₂ tan α₁):' },
        { k: 'box', title: 'Acute angle', tone: 'formula', blocks: [{ k: 'p', x: '<b>tan θ = (m₂ − m₁)/(1 + m₁m₂)</b> with m₂ &gt; m₁ (or (m₁ − m₂)/(1 + m₁m₂) if m₁ &gt; m₂). Using |(m₂ − m₁)/(1 + m₁m₂)| always gives the acute angle. If 1 + m₁m₂ = 0 the lines are perpendicular.' }] },
        { k: 'step', n: '7', title: 'Slide examples, worked', blocks: [{ k: 'ul', items: [
          '2x − y = 4 (m = 2) and x − y = 3 (m = 1): tan θ = 1/3, <b>θ ≈ 18.4°</b>.',
          '2x + y = 4 (m = −2) and y − 3x = 0 (m = 3): tan θ = 5/|1 − 6| = 1, <b>θ = 45°</b>.',
          'y = x + 2 (m = 1) and 3y − x − 2 = 0 (m = 1/3): tan θ = (2/3)/(4/3) = ½, <b>θ ≈ 26.6°</b>.',
        ] }] },
      ],
    },
    {
      id: 'ln-perp',
      title: 'Distance from a point to a line',
      kicker: 'The shortest distance is perpendicular',
      blocks: [
        { k: 'p', x: 'Derivation: go a distance d from P₁(x₁, y₁) at angle α to reach P₂(x₁ + d cos α, y₁ + d sin α) on ax + by + c = 0. Substituting gives (a cos α + b sin α)d = −(ax₁ + by₁ + c). For the perpendicular direction tan α = b/a, so cos α = ±a/√(a² + b²) and sin α = ±b/√(a² + b²), and a cos α + b sin α = ±√(a² + b²):' },
        { k: 'box', title: 'Perpendicular distance', tone: 'formula', blocks: [{ k: 'p', x: '<b>d = (ax₁ + by₁ + c)/√(a² + b²)</b> (take the absolute value for a length). The sign tells the side: positive when P₁ is above the line, negative when below (for b &gt; 0). Two points are on <b>opposite sides</b> when the signs differ.' }] },
        { k: 'step', n: '8', title: 'The slide examples, worked', blocks: [{ k: 'ul', items: [
          'From 2x + 3y − 6 = 0: (1, 3) gives 5/√13 ≈ <b>1.39</b>; (−3, 4) gives <b>0</b> (it is on the line); (4, −2) gives −4/√13, distance ≈ <b>1.11</b> (below the line).',
          'P(2, 3) to 3x + 4y = 5: (6 + 12 − 5)/5 = <b>13/5 = 2.6</b>.',
          'x + 2y − 6 at P₁(−1, 2) is −3 and at P₂(3, 4) is +5: different signs, so they are on <b>opposite sides</b>.',
          'P(3, 2) to 3x − 4y + 4 = 0: 5/5 = <b>1</b>. A(2, −1) to 5x + 12y = 0: |−2|/13 = <b>2/13</b>. B(2, 1) to y = ⅔x + ⅓ (2x − 3y + 1 = 0): 2/√13 ≈ <b>0.55</b>. D(2, 5) to x + y − 1 = 0: 6/√2 = <b>3√2</b>.',
        ] }] },
      ],
    },
    {
      id: 'ln-trials',
      title: 'The longer trial problems, worked',
      kicker: 'Putting it together',
      blocks: [
        { k: 'step', n: '9', title: 'Rectangle A(1, 7), B(7, 5), C(6, 2), D(0, 4)', blocks: [{ k: 'p', x: 'Gradients AB = CD = −1/3 and BC = DA = 3: opposite sides parallel, and (−1/3)(3) = −1, so the corners are right angles: a <b>rectangle</b> (AB = CD = √40, BC = DA = √10). Diagonals AC = BD = √50 = <b>5√2</b>; they meet at their common midpoint <b>(7/2, 9/2)</b>.' }] },
        { k: 'step', n: '10', title: 'Intercepts and areas', blocks: [{ k: 'ul', items: [
          'Read as 3x − 2y + 10 = 0: x-intercept −10/3, y-intercept 5; triangle area ½ × 10/3 × 5 = <b>25/3</b>.',
          '3x − 7y + 4 = 0: intercepts −4/3 and 4/7; area ½ × 4/3 × 4/7 = <b>8/21</b>.',
          'Through A(1, 5) parallel to the x-axis (y = 5) meets PQ: 3y − 2x + 5 = 0 at B(10, 5): <b>AB = 9</b>. PQ has m = 2/3, so the angle with AB has tan θ = 2/3, <b>sin θ = 2/√13</b>; the perpendicular from A is AB sin θ = 18/√13 = <b>(18/13)√13</b>. PQ meets the axes at (5/2, 0) and (0, −5/3): area <b>25/12</b>.',
        ] }] },
        { k: 'step', n: '11', title: 'Medians', blocks: [{ k: 'ul', items: [
          'Median through C(−2, −1) of A(3, 4), B(7, −2): the midpoint of AB is (5, 1), m = 2/7: <b>2x − 7y − 3 = 0</b>.',
          'Triangle of y = x, 2y = 7x and x + 4y − 60 = 0: vertices (0, 0), (12, 12), (4, 14). Medians: <b>13x − 8y = 0</b>, <b>x − 2y + 12 = 0</b>, <b>4x + y − 30 = 0</b>; they meet at the centroid <b>(16/3, 26/3)</b>, the average of the vertices.',
        ] }] },
        { k: 'step', n: '12', title: 'Feet of perpendiculars', blocks: [{ k: 'p', x: 'The foot from (x₁, y₁) to ax + by + c = 0 is (x₁, y₁) − [(ax₁ + by₁ + c)/(a² + b²)](a, b). From A(1, 1): to 3x − 3y − 4 = 0 the foot is (5/3, 1/3); to 3x + y − 6 = 0 it is (8/5, 6/5). The line through them has m = −13: <b>13x + y − 22 = 0</b>.' }] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The deck’s final exercise stops mid-sentence (“The points P(2, −3), Q(−1, 7) and R(3, 5) are the …”), so it cannot be answered as given. One intercept question prints “3x − 27 + 10 = 0”; it is read here as 3x − 2y + 10 = 0.' }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Distance √(Δx² + Δy²); midpoint the averages; gradient Δy/Δx (0 horizontal, undefined vertical).',
          'y = mx + c; y − y₁ = m(x − x₁); intersections by simultaneous equations.',
          'Parallel m₁ = m₂; perpendicular m₁m₂ = −1; y = c horizontal, x = k vertical.',
          'tan θ = |(m₂ − m₁)/(1 + m₁m₂)|; d = (ax₁ + by₁ + c)/√(a² + b²), sign = side.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The x-coordinate of a point is also called the', 'Abscissa', ['Ordinate', 'Gradient', 'Intercept'], 'y is the ordinate.', 'Basics'],
    ['The distance from A(1, 3) to B(4, 7) is', '5', ['7', '25', '√7'], '√(9 + 16).', 'Distance'],
    ['The distance from M(−12, 5) to N(0, −7) is', '12√2', ['12', '24', '6√2'], '√288.', 'Distance'],
    ['The midpoint of A(4, 6) and B(9, 5) is', '(13/2, 11/2)', ['(5/2, 1/2)', '(13, 11)', '(5, 1)'], 'Average each.', 'Distance'],
    ['A(7, 3), B(−4, 1), C(−3, −2) form a triangle that is', 'Isosceles', ['Equilateral', 'Right-angled at B', 'Scalene'], 'AB = AC = √125.', 'Distance'],
    ['The gradient of PQ, P(3, −2), Q(−1, 4), is', '−3/2', ['3/2', '−2/3', '2/3'], '6/−4.', 'Gradient'],
    ['The line through M(2, 3) and N(2, 5) has gradient', 'Undefined', ['Zero', 'Two', 'One half'], 'Vertical.', 'Gradient'],
    ['On a distance–time graph the gradient is the', 'Speed', ['Distance', 'Time', 'Acceleration'], 'Rate of change.', 'Gradient'],
    ['2x + 4y = 3 has gradient and y-intercept', '−1/2 and 3/4', ['2 and 3', '1/2 and 3/4', '−2 and 3/4'], 'y = −½x + ¾.', 'Equations'],
    ['The line through A(2, 3) and B(3, 6) is', 'y = 3x − 3', ['y = 3x + 3', 'y = 3x', 'y = x + 1'], 'm = 3.', 'Equations'],
    ['The line with m = −5 through (2, −4) is', 'y = −5x + 6', ['y = −5x − 14', 'y = 5x − 14', 'y = −5x − 6'], 'y + 4 = −5(x − 2).', 'Equations'],
    ['2x − 3y = 8 and 3x + 4y = −5 meet at', '(1, −2)', ['(2, −1)', '(−1, 2)', '(4, 0)'], 'Simultaneous.', 'Equations'],
    ['x + y = 2 and 2x + 5y = 0 meet at', '(10/3, −4/3)', ['(−4/3, 10/3)', '(5/3, 1/3)', '(2, 0)'], 'Substitute.', 'Equations'],
    ['Perpendicular lines satisfy', 'm₁m₂ = −1', ['m₁ = m₂', 'm₁ + m₂ = 0', 'm₁m₂ = 1'], 'Negative reciprocal.', 'Parallel'],
    ['3x = 2y + 5 and 2x + 3y = 7 are', 'Perpendicular', ['Parallel', 'Neither', 'The same line'], '(3/2)(−2/3) = −1.', 'Parallel'],
    ['5y = 2x + 2 and 15y − 6x − 6 = 0 are', 'The same line', ['Perpendicular', 'Neither', 'Parallel and distinct'], 'One is 3 × the other.', 'Parallel'],
    ['The line y = c is', 'Parallel to the x-axis', ['Parallel to the y-axis', 'Through the origin', 'Of infinite gradient'], 'Gradient 0.', 'Parallel'],
    ['Through A(3, −2) perpendicular to 2y + 5x = 17', '2x − 5y − 16 = 0', ['5x + 2y − 11 = 0', '2x + 5y + 4 = 0', '5x − 2y − 19 = 0'], 'm = 2/5.', 'Parallel'],
    ['Origin to the midpoint of A(3, 2), B(5, −1)', 'x − 8y = 0', ['8x − y = 0', 'x + 8y = 0', 'x − 4y = 0'], 'Through (4, ½).', 'Parallel'],
    ['The acute angle between y = 2x + c and y = x + k is about', '18.4°', ['45.0°', '26.6°', '71.6°'], 'tan θ = 1/3.', 'Angles'],
    ['The angle between 2x + y = 4 and y = 3x is', '45°', ['30°', '60°', '90°'], 'tan θ = 1.', 'Angles'],
    ['The distance from P(2, 3) to 3x + 4y = 5 is', '2.6', ['13', '1.8', '5.2'], '13/5.', 'Distance to a line'],
    ['(−3, 4) and the line 2x + 3y − 6 = 0:', 'The point lies on the line', ['It is 1 unit above it', 'It is √13 units below it', 'It is 6 units away'], 'd = 0.', 'Distance to a line'],
    ['P₁, P₂ are on opposite sides of a line when ax + by + c', 'Has opposite signs at them', ['Is zero at both', 'Is equal at both', 'Is positive at both'], 'Sign = side.', 'Distance to a line'],
    ['The area enclosed by 3x − 7y + 4 = 0 and the axes is', '8/21', ['4/21', '16/21', '28/3'], '½ × 4/3 × 4/7.', 'Trials'],
    ['The medians of a triangle meet at the', 'Centroid', ['Circumcentre', 'Orthocentre', 'Origin'], 'Average of vertices.', 'Trials'],
  ],
};
