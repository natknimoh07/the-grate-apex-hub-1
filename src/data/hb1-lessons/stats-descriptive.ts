// Statistical Methods → Descriptive Statistics. From "Statistical_Methods_2" (Dr E. O. Owiredu,
// STAT 153, slides 29–41), plus grouped-data methods the past questions use (standard textbook
// formulas, labelled as beyond the slides). Rewrites the original database lesson stats-03 (same
// id, so progress is kept). Checked 2026-11-04; teaching text in our own words. Practises Quiz 3
// and Quiz 7.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const statsDescriptive: Hb1Lesson = {
  id: 'stats-03',
  order: 3,
  title: 'Descriptive Statistics',
  summary: 'Mean, median and mode with the blood-pressure example; range, variance and standard deviation with the glucose example; quartiles, deciles and percentiles by position formula; the five-number summary and reading skewness from a boxplot; and, for the past questions, grouped frequency tables (class boundaries, grouped mean, median, mode and variance), skewness and the mean–median–mode order, the IQR and the effect of adding or multiplying',
  minutes: 24,
  source: 'Statistical_Methods_2.pdf',
  quizId: 'stds',
  quizName: 'Quiz · Descriptive Statistics (lesson)',
  pastSets: ['s3', 's7'],
  pastTopics: ['descriptive-statistics', 'frequency-distributions', 'dispersion-and-skewness'],
  sections: [
    {
      id: 'ds-centre',
      title: 'Central tendency: mean, median, mode',
      kicker: 'What is the typical value?',
      blocks: [
        { k: 'p', x: '<b>Descriptive statistics</b> summarise a data set: where it is <b>centred</b>, how <b>spread</b> it is, and where a value <b>ranks</b>. Measures of <b>central tendency</b> give the typical value.' },
        { k: 'table', head: ['Measure', 'Definition', 'Health use'], rows: [
          { c: ['<b>Mean</b> x̄ = Σx / n', 'The arithmetic average', 'Average patient age'] },
          { c: ['<b>Median</b>', 'The <b>middle</b> value once the data are <b>ordered</b> (n even: average the two middle values)', 'Typical blood pressure'] },
          { c: ['<b>Mode</b>', 'The <b>most frequent</b> value (there may be several, or none)', 'Most common disease; the only one that works for categories'] },
        ] },
        { k: 'step', n: '1', title: 'Worked example: systolic BP of 7 patients', blocks: [{ k: 'p', x: '118, 120, 122, 125, 130, 130, 140 mmHg. <b>Mean</b> = 885 / 7 = <b>126.4</b>. <b>Median</b>: n = 7 is odd, so the 4th value, <b>125</b>. <b>Mode</b>: 130 appears twice, so <b>130</b>. The typical systolic BP is about 126 mmHg.' }] },
        { k: 'box', title: 'Which one to report', tone: 'gold', blocks: [{ k: 'p', x: 'The mean uses every value but is <b>pulled by outliers</b>; the <b>median resists outliers</b>, so it suits skewed data such as length of hospital stay; the mode is <b>unaffected</b> by extremes and is the only choice for categories.' }] },
      ],
    },
    {
      id: 'ds-spread',
      title: 'Dispersion: range, variance, standard deviation',
      kicker: 'Same mean, different risk',
      blocks: [
        { k: 'p', x: 'Two groups can share a mean yet differ in how consistent they are. <b>Dispersion</b> measures the spread around the centre, which tells a clinician how variable patients are and how far a reading must be from the mean to look <b>abnormal</b>.' },
        { k: 'table', head: ['Measure', 'Formula', 'Notes'], rows: [
          { c: ['<b>Range</b>', 'x<sub>max</sub> − x<sub>min</sub>', 'Uses only two values; <b>strongly affected by outliers</b>'] },
          { c: ['<b>Variance</b>', 's² = Σ(x − x̄)² / (n − 1)', 'Sample variance divides by <b>n − 1</b>; units squared'] },
          { c: ['<b>Standard deviation</b>', 's = √s²', 'Back in the data’s units; uses every value'] },
        ] },
        { k: 'step', n: '2', title: 'Worked example: fasting glucose of 6 patients', blocks: [{ k: 'p', x: '4.8, 5.1, 5.3, 6.0, 7.2, 9.0 mmol/L. <b>Range</b> = 9.0 − 4.8 = <b>4.2</b>. Mean = 37.4 / 6 ≈ 6.23. Squared deviations sum to ≈ 12.85; s² = 12.85 / 5 ≈ 2.57; <b>s ≈ 1.6</b>. The large spread shows varied glycaemic control: some patients may be at risk of diabetes.' }] },
        { k: 'box', title: 'Adding and multiplying', tone: 'formula', blocks: [{ k: 'ul', items: [
          '<b>Add</b> a constant c to every value: the mean rises by c, the <b>variance and SD do not change</b>.',
          '<b>Multiply</b> every value by k: the mean and SD are multiplied by <b>|k|</b> (the mean by k), the variance by <b>k²</b>.',
          'A spread of zero means every value is the same; spread is never negative.',
        ] }] },
      ],
    },
    {
      id: 'ds-position',
      title: 'Quartiles, deciles, percentiles and the boxplot',
      kicker: 'Where does a value rank?',
      blocks: [
        { k: 'p', x: 'Position measures split <b>ordered</b> data into equal parts. Always <b>order the data first</b>; the formula gives a <b>position</b>, not the value. A position such as 7.5 lies halfway between the 7th and 8th values.' },
        { k: 'table', head: ['Measure', 'Parts', 'Position of the k-th one'], rows: [
          { c: ['<b>Quartile</b> Q<sub>k</sub>', '4', 'k(n + 1) / 4; Q2 = (n + 1)/2 = <b>median</b>; Q4 = maximum'] },
          { c: ['<b>Decile</b> D<sub>k</sub>', '10', 'k(n + 1) / 10 (k = 1 … 9)'] },
          { c: ['<b>Percentile</b> P<sub>k</sub>', '100', 'k(n + 1) / 100 (k = 1 … 99)'] },
        ] },
        { k: 'p', x: '<b>Quartiles are percentiles</b>: Q1 = P25, Q2 = P50 = median, Q3 = P75. The <b>interquartile range</b> IQR = Q3 − Q1 measures the spread of the middle half and <b>ignores extreme values</b>.' },
        { k: 'step', n: '3', title: 'Worked examples from the slides', blocks: [{ k: 'ul', items: [
          '4, 6, 8, 10, 12, 14, 16 (n = 7): Q1 at 8/4 = 2nd → <b>6</b>; Q2 at 4th → <b>10</b>; Q3 at 6th → <b>14</b>; Q4 = <b>16</b>.',
          '3, 5, 7, …, 19 (n = 9): D4 at 4(10)/10 = 4th → <b>9</b>.',
          '10, 12, …, 26 (n = 9): P75 at 75(10)/100 = 7.5 → (22 + 24)/2 = <b>23</b>.',
        ] }] },
        { k: 'term', name: 'Boxplot', def: 'Drawn from the <b>five-number summary</b>: minimum, Q1, Q2 (median), Q3, maximum. The box runs from Q1 to Q3 with the median inside; whiskers reach the minimum and maximum.' },
        { k: 'table', head: ['What you see', 'Symmetric', 'Positively (right) skewed', 'Negatively (left) skewed'], rows: [
          { c: ['Median in the box', 'Near the centre', '<b>Left</b> of centre', '<b>Right</b> of centre'] },
          { c: ['Whiskers', 'About equal', '<b>Right</b> one longer', '<b>Left</b> one longer'] },
          { c: ['Mean, median, mode', 'All <b>equal</b>', '<b>Mean &gt; median &gt; mode</b>', '<b>Mean &lt; median &lt; mode</b>'] },
        ] },
        { k: 'step', n: '4', title: 'Worked example: meteorites in 10 states', blocks: [{ k: 'p', x: 'Ordered: 30, 39, 47, 48, 78, 89, 138, 164, 215, 296. Min 30, max 296, Q2 = (78 + 89)/2 = <b>83.5</b>; Q1 = <b>47</b> (median of the lower five), Q3 = <b>164</b> (median of the upper five).' }] },
        { k: 'box', title: 'Strictly speaking', tone: 'gold', blocks: [{ k: 'p', x: 'The meteorite slide finds Q1 and Q3 as the medians of each half, not with (n + 1)/4. The formula would give positions 2.75 and 8.25: Q1 = 39 + 0.75 × 8 = 45 and Q3 = 164 + 0.25 × 51 = 176.75. Both methods are in use; in the exam, use the one the question’s working implies, and the slide answers (47 and 164) for this example.' }] },
      ],
    },
    {
      id: 'ds-grouped',
      title: 'Grouped frequency tables (for the past questions)',
      kicker: 'Beyond the slides: the past papers ask these',
      blocks: [
        { k: 'p', x: 'Past Questions 2 gives a <b>grouped frequency table</b> and asks for its mean, median, mode and variance. The slides do not show these, so here are the standard methods. In a table, each class is represented by its <b>midpoint</b> x, with frequency f.' },
        { k: 'term', name: 'Class boundaries', def: 'Half a recording unit either side of a class limit, so the classes touch. Integer data in 140–149 have boundaries <b>139.5–149.5</b> and class width <b>10</b>. A single value recorded as 6.78 kg has boundaries <b>6.775–6.785</b>; 128 mmHg has <b>127.5–128.5</b>.' },
        { k: 'table', head: ['Measure', 'Grouped formula'], rows: [
          { c: ['<b>Mean</b>', 'x̄ = Σfx / Σf'] },
          { c: ['<b>Median</b>', 'L + [(n/2 − F) / f<sub>m</sub>] × w; L = lower boundary of the median class, F = cumulative frequency before it, f<sub>m</sub> its frequency, w the width'] },
          { c: ['<b>Mode</b>', 'L + [(f<sub>1</sub> − f<sub>0</sub>) / (2f<sub>1</sub> − f<sub>0</sub> − f<sub>2</sub>)] × w; modal class f<sub>1</sub>, the one before f<sub>0</sub>, after f<sub>2</sub>'] },
          { c: ['<b>Variance</b>', 's² = Σf(x − x̄)² / (n − 1)'] },
        ] },
        { k: 'step', n: '5', title: 'Worked example: cholesterol of 50 patients', blocks: [
          { k: 'p', x: 'Classes 140–149 … 190–199 (mg/dL), frequencies 4, 7, 11, 13, 9, 6; midpoints 144.5 … 194.5.' },
          { k: 'ul', items: [
            '<b>Mean</b> = Σfx / 50 = 8565 / 50 = <b>171.3</b>.',
            '<b>Median</b>: n/2 = 25; cumulative 4, 11, 22, 35, so the median class is 170–179 (L = 169.5, F = 22, f<sub>m</sub> = 13): 169.5 + (3/13) × 10 = <b>171.8</b>.',
            '<b>Mode</b>: modal class 170–179 (f<sub>1</sub> = 13, f<sub>0</sub> = 11, f<sub>2</sub> = 9): 169.5 + [2 / (26 − 11 − 9)] × 10 = <b>172.8</b>.',
            '<b>Variance</b> = Σf(x − 171.3)² / 49 = <b>209.96</b>; s ≈ 14.5.',
          ] },
        ] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Mean Σx/n (pulled by outliers), median (middle, resists outliers), mode (most frequent, for categories).',
          'Range max − min; s² = Σ(x − x̄)²/(n − 1); s = √s². Adding c changes no spread; multiplying by k scales SD by |k|.',
          'Order first: Q k(n+1)/4, D k(n+1)/10, P k(n+1)/100; Q1 = P25, Q3 = P75; IQR = Q3 − Q1.',
          'Boxplot: median left / right whisker longer → positive skew (mean &gt; median &gt; mode).',
          'Grouped: midpoints, boundaries ±½ unit, median and mode by the L + … × w formulas.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The mean of 118, 120, 122, 125, 130, 130, 140 is about', '126.4', ['125.0', '130.0', '122.0'], '885 / 7.', 'Centre'],
    ['The median of the same seven readings is', '125', ['126.4', '130', '122'], 'The 4th value.', 'Centre'],
    ['The mode of the same seven readings is', '130', ['125', '126.4', '140'], 'Appears twice.', 'Centre'],
    ['The best measure for the most common diagnosis on a ward is the', 'Mode', ['Mean', 'Median', 'Range'], 'Categorical data.', 'Centre'],
    ['The median is preferred for skewed data because it', 'Resists outliers', ['Uses every value', 'Is always largest', 'Needs no ordering'], 'Middle value.', 'Centre'],
    ['The range of 4.8, 5.1, 5.3, 6.0, 7.2, 9.0 is', '4.2', ['1.6', '6.2', '9.0'], '9.0 − 4.8.', 'Spread'],
    ['The standard deviation of those glucose values is about', '1.6', ['4.2', '2.6', '6.2'], 's² ≈ 2.57.', 'Spread'],
    ['Sample variance divides the squared deviations by', 'n − 1', ['n', 'n + 1', '2n'], 's² formula.', 'Spread'],
    ['The standard deviation is the square root of the', 'Variance', ['Range', 'Mean', 'Median'], 's = √s².', 'Spread'],
    ['Adding 5 to every value changes the', 'Mean only', ['Variance only', 'SD and variance', 'Mean and SD'], 'Spread is unchanged.', 'Spread'],
    ['Multiplying every value by 3 multiplies the SD by', '3', ['9', '1', '√3'], 'By |k|; variance by k².', 'Spread'],
    ['Position of Q1 for ungrouped data is', '(n + 1) / 4', ['(n + 1) / 2', '3(n + 1) / 4', 'n / 10'], 'Q2 is (n + 1)/2.', 'Position'],
    ['For 4, 6, 8, 10, 12, 14, 16, Q3 is', '14', ['12', '16', '10'], 'Position 6.', 'Position'],
    ['For 3, 5, 7, …, 19 (n = 9), D4 is', '9', ['7', '11', '13'], 'Position 4.', 'Position'],
    ['For 10, 12, …, 26 (n = 9), P75 is', '23', ['22', '24', '20'], 'Position 7.5.', 'Position'],
    ['Q3 is the same as', 'P75', ['P25', 'P50', 'D3'], 'Third quarter.', 'Position'],
    ['The measure of spread that ignores the extremes is the', 'Interquartile range', ['Range', 'Variance', 'Standard deviation'], 'Q3 − Q1.', 'Position'],
    ['Before finding any quartile you must', 'Order the data', ['Square the data', 'Find the mode', 'Remove the median'], 'Positions need order.', 'Position'],
    ['A boxplot needs the', 'Five-number summary', ['Mean and SD', 'Mode and range', 'Deciles only'], 'Min, Q1, Q2, Q3, max.', 'Boxplot'],
    ['Median left of the box centre means', 'Positive skew', ['Negative skew', 'Symmetry', 'No spread'], 'Long right tail.', 'Boxplot'],
    ['A longer left whisker means', 'Negative skew', ['Positive skew', 'Symmetry', 'Bimodal data'], 'Long left tail.', 'Boxplot'],
    ['In positively skewed data, typically', 'Mean above median above mode', ['Mode above median above mean', 'Mean, median and mode equal', 'Median above mean above mode'], 'Tail pulls the mean.', 'Boxplot'],
    ['The class boundaries of 140–149 (integer data) are', '139.5–149.5', ['140–149', '140.5–149.5', '139–150'], '±0.5.', 'Grouped'],
    ['A value recorded as 3.5 s has boundaries', '3.45–3.55', ['3.0–4.0', '3.4–3.6', '3.495–3.505'], 'Half of 0.1.', 'Grouped'],
    ['The grouped mean uses each class’s', 'Midpoint', ['Lower limit', 'Upper boundary', 'Width'], 'Σfx / Σf.', 'Grouped'],
    ['The cholesterol table’s median class is', '170–179', ['160–169', '180–189', '150–159'], 'Cumulative reaches 25 there.', 'Grouped'],
  ],
};
