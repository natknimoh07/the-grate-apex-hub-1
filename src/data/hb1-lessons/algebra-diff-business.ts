// Algebra → Differentiation in Business and Economics (marginal analysis). From "MATH 157 –
// DIFFERENTIATION" (deck 10, slides 76–90). A lesson added in the app (owner, 2026-11-04) so the
// 90-slide deck is taught in three parts. Teaching text in our own words; every slide example is
// worked (where the slide's numbers are unclear, the reading used is stated).
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const algebraDiffBusiness: Hb1Lesson = {
  id: 'algebra-diff-business',
  order: 10.7,
  title: 'Differentiation in Business: Marginal Cost, Revenue and Profit',
  summary: 'Marginal analysis; the price–demand, cost, revenue and profit functions; marginal cost, revenue and profit; average cost, revenue and profit; why average cost is least when marginal cost equals average cost; why profit is greatest when marginal revenue equals marginal cost (with the second-order condition) — and every slide example worked',
  minutes: 26,
  source: 'MATH 157, ALGEBRA 10.pdf',
  quizId: 'aldb',
  quizName: 'Quiz · Marginal Analysis (lesson)',
  pastSets: ['s10'],
  sections: [
    {
      id: 'db-funcs',
      title: 'The business functions',
      kicker: 'What one more unit changes',
      blocks: [
        { k: 'p', x: '<b>Marginal analysis</b> studies how much a dependent quantity (cost, revenue, profit) changes when an independent one (units produced, price) changes by a small amount, usually <b>one unit</b>. That change is the derivative.' },
        { k: 'table', head: ['Function', 'Formula', 'Meaning'], rows: [
          { c: ['Price–demand P(x)', 'given', 'The price at which exactly x units are bought'] },
          { c: ['Cost C(x)', 'ax + b (or a polynomial)', '<b>Total cost = variable cost + fixed cost</b>; b is the fixed cost'] },
          { c: ['Revenue R(x)', '<b>x P(x)</b>', 'Money taken from selling x units'] },
          { c: ['Profit π(x)', '<b>R(x) − C(x)</b>', 'Total revenue − total cost'] },
          { c: ['Marginal cost MC', 'C′(x)', 'Approximate cost of <b>one more</b> unit at level x'] },
          { c: ['Marginal revenue MR', 'R′(x)', 'Approximate extra revenue from one more unit'] },
          { c: ['Marginal profit MP', 'π′(x)', 'Approximate extra profit from one more unit'] },
          { c: ['Average cost AC', 'C(x)/x', 'Cost per unit'] },
          { c: ['Average revenue, profit', 'R(x)/x, π(x)/x', 'Per unit'] },
        ] },
      ],
    },
    {
      id: 'db-rules',
      title: 'Least average cost and greatest profit',
      kicker: 'Two key conditions',
      blocks: [
        { k: 'box', title: 'Least average cost: MC = AC', tone: 'formula', blocks: [{ k: 'p', x: 'AC = C(x)/x, so by the quotient rule (AC)′ = [xC′(x) − C(x)]/x². Setting it to 0 gives xC′(x) = C(x), i.e. <b>C′(x) = C(x)/x</b>: average cost is least where <b>marginal cost equals average cost</b>.' }] },
        { k: 'box', title: 'Greatest profit: MR = MC', tone: 'formula', blocks: [{ k: 'p', x: 'π′(x) = R′(x) − C′(x) = 0 gives <b>R′(x) = C′(x)</b>: marginal revenue equals marginal cost. For a maximum, π″ &lt; 0, i.e. <b>R″(x) &lt; C″(x)</b>: marginal revenue must be rising more slowly than marginal cost.' }] },
        { k: 'step', n: '1', title: 'C(x) = 2680 + 2x + 0.001x²', blocks: [{ k: 'ul', items: [
          'Cost of 100 items: 2680 + 200 + 10 = <b>2890</b>.',
          'Average cost of 200: (2680 + 400 + 40)/200 = <b>15.60</b>.',
          'Marginal cost at 300: C′ = 2 + 0.002x = <b>2.60</b>; at 500 it is 3.',
          'Least average cost: MC = AC gives 2 + 0.002x = 2680/x + 2 + 0.001x, so x² = 2 680 000, <b>x ≈ 1637</b>, minimum AC ≈ <b>5.27</b> (equal to MC there).',
        ] }] },
      ],
    },
    {
      id: 'db-examples',
      title: 'The slide examples, worked',
      kicker: 'Cost, demand and profit',
      blocks: [
        { k: 'step', n: '2', title: 'Maximum profit', blocks: [{ k: 'ul', items: [
          'C = 84 + 1.26x − 0.01x² + 0.00001x³, P = 3.5 − 0.01x: R = 3.5x − 0.01x², MR = 3.5 − 0.02x, MC = 1.26 − 0.02x + 0.00003x². MR = MC gives 0.00003x² = 2.24, <b>x ≈ 273</b>; π″ = −0.00006x &lt; 0, a maximum.',
          'C = 680 + 4x + 0.01x², P = 12: 12 = 4 + 0.02x, <b>x = 400</b>.',
          'Same C with P = 12 − x/500 (as read): MR = 12 − x/250 = 4 + 0.02x, <b>x ≈ 333</b>.',
          'C = 1450 + 36x − x² + 0.001x³, P = 60 − 0.01x: 60 − 0.02x = 36 − 2x + 0.003x², <b>x ≈ 672</b>.',
          'C = 16000 + 500x − 1.6x² + 0.004x³ (as read), P = 1700 − 7x: 1700 − 14x = 500 − 3.2x + 0.012x², <b>x = 100</b>.',
        ] }] },
        { k: 'step', n: '3', title: 'Marginal cost from an average cost', blocks: [{ k: 'p', x: 'AC = 21.4 − 0.002x, so C = x·AC = 21.4x − 0.002x² and MC = 21.4 − 0.004x. At 1000 units <b>MC = 17.40</b>: producing the 1001st unit adds about 17.40 to the cost.' }] },
        { k: 'step', n: '4', title: 'Cost, average and marginal cost at 1000 units; least average cost', blocks: [{ k: 'ul', items: [
          'C = 40000 + 300x + x²: C = 1 340 000, AC = 1340, MC = 2300; least AC at x² = 40000, <b>x = 200</b>, AC = <b>700</b>.',
          'C = 25000 + 120x + 0.1x²: C = 245 000, AC = 245, MC = 320; least AC at <b>x = 500</b>, AC = <b>220</b>.',
          'C = 16000 + 200x + 4x<sup>3/2</sup>: C ≈ 342 491, AC ≈ 342.49, MC = 200 + 6√x ≈ 389.74; least AC where 2x<sup>3/2</sup> = 16000, <b>x = 400</b>, AC = <b>320</b>.',
          'C = 10000 + 340x − 0.3x² + 0.0001x³: C = 150 000, AC = 150, MC = 40; least AC where 0.0002x³ − 0.3x² − 10000 = 0, <b>x ≈ 1522</b>, AC ≈ <b>121.6</b>.',
        ] }] },
        { k: 'step', n: '5', title: 'DBS roofing sheets', blocks: [{ k: 'p', x: 'C = 2x² + 15x + 1500, P = −0.3x + 460: R = 460x − 0.3x²; <b>π = −2.3x² + 445x − 1500</b>; <b>MP = −4.6x + 445</b>. MP(60) = <b>169</b>: making the 61st sheet raises weekly profit by about GH¢169. MP(145) = <b>−222</b>: the 146th sheet lowers profit by about GH¢222, so production is past its best level (x ≈ 97).' }] },
        { k: 'step', n: '6', title: 'Revenue and the shoe company', blocks: [{ k: 'ul', items: [
          'R = 0.3x² + 460x: R(110) = <b>GH¢54 230</b>; MR = 0.6x + 460, MR(110) = <b>526</b>: the 111th box adds about GH¢526.',
          'Odike shoes, C = 700√x + 500: AC = 700/√x + 500/x; C(400) = <b>GH¢14 500</b> a day for 400 pairs, AC(400) = <b>GH¢36.25</b> a pair.',
        ] }] },
        { k: 'step', n: '7', title: 'Marginal cost and marginal profit', blocks: [{ k: 'ul', items: [
          'C = 5x + 500, P = 6: MC = 5, π = x − 500, <b>Mπ = 1</b>.',
          'C = 12x + 4500, P = 15: MC = 12, <b>Mπ = 3</b>.',
          'C = x²/100 + 7x + 1000, P = −x/20 + 15 (as read): MC = x/50 + 7; R = 15x − x²/20, MR = 15 − x/10; <b>Mπ = 8 − 0.12x</b>.',
          'The fourth pair is printed too unclearly to read; use the same method: MC = C′(x), Mπ = [xP(x)]′ − C′(x).',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'R = xP(x); π = R − C; marginal = derivative; average = total ÷ x.',
          'Least average cost: MC = AC. Greatest profit: MR = MC, with R″ &lt; C″.',
          'A positive marginal profit means the next unit adds profit; negative means it reduces profit.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['Total cost is made up of', 'Variable cost plus fixed cost', ['Revenue minus profit', 'Price times quantity', 'Marginal plus average cost'], 'TC = VC + FC.', 'Functions'],
    ['Revenue R(x) equals', 'x P(x)', ['P(x)/x', 'C(x) − x', 'x + P(x)'], 'Units × price.', 'Functions'],
    ['Profit π(x) equals', 'R(x) − C(x)', ['C(x) − R(x)', 'R(x) + C(x)', 'R(x)/C(x)'], 'TR − TC.', 'Functions'],
    ['Marginal cost is', 'The derivative of total cost', ['Total cost divided by units', 'The fixed part of the cost', 'Revenue minus total cost'], 'C′(x).', 'Functions'],
    ['Average cost is', 'C(x)/x', ['C′(x)', 'x C(x)', 'R(x) − C(x)'], 'Per unit.', 'Functions'],
    ['Average cost is least when', 'MC = AC', ['MC = 0', 'MR = AC', 'AC = 0'], 'xC′ = C.', 'Conditions'],
    ['Profit is greatest when', 'MR = MC and R″ below C″', ['MR = 0, whatever MC is', 'AC = MC and R″ above C″', 'R = C at that output'], 'π′ = 0, π″ negative.', 'Conditions'],
    ['C = 2680 + 2x + 0.001x²: the cost of 100 items', '2890', ['2690', '2780', '3680'], '2680 + 200 + 10.', 'Examples'],
    ['For the same C, the average cost of 200 items', '15.60', ['3120', '2.40', '13.40'], '3120/200.', 'Examples'],
    ['For the same C, MC at 300 items', '2.60', ['2.30', '3.00', '0.60'], '2 + 0.002x.', 'Examples'],
    ['For the same C, average cost is least at about', '1637 items', ['2680 items', '1000 items', '518 items'], 'x² = 2 680 000.', 'Examples'],
    ['C = 680 + 4x + 0.01x², P = 12: profit is greatest at', 'x = 400', ['x = 600', 'x = 800', 'x = 200'], '12 = 4 + 0.02x.', 'Examples'],
    ['AC = 21.4 − 0.002x: MC at 1000 units', '17.40', ['19.40', '21.40', '15.40'], 'MC = 21.4 − 0.004x.', 'Examples'],
    ['C = 40000 + 300x + x²: least average cost at', 'x = 200', ['x = 400', 'x = 150', 'x = 300'], 'x² = 40000.', 'Examples'],
    ['C = 25000 + 120x + 0.1x²: the minimum average cost is', '220', ['245', '320', '170'], 'At x = 500.', 'Examples'],
    ['DBS: π = −2.3x² + 445x − 1500. MP(60) =', '169', ['445', '−222', '138'], '−4.6(60) + 445.', 'Examples'],
    ['A negative marginal profit means the next unit', 'Reduces profit', ['Raises profit', 'Costs nothing', 'Raises revenue only'], 'MP below 0.', 'Examples'],
    ['R = 0.3x² + 460x: MR(110) =', '526', ['460', '54 230', '493'], '0.6x + 460.', 'Examples'],
    ['C = 700√x + 500: AC(400) =', '36.25', ['14 500', '35.00', '17.50'], '14500/400.', 'Examples'],
    ['C = 5x + 500 and P = 6: marginal profit =', '1', ['6', '5', '−500'], '6 − 5.', 'Examples'],
  ],
};
