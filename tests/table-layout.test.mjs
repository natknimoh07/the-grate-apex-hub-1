// Lesson tables use the reading width (owner, 2026-11-07: "the tables in the lessons for laptops
// sometimes look too narrow"): src/data/table-layout.ts.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

const { tableColumnWidths, MIN_COLUMN, DEFAULT_COLUMN } = await import('@/data/table-layout');

const sum = (list) => list.reduce((total, value) => total + value, 0);

describe('lesson table columns', () => {
  it('fill a laptop reading column, giving more room to the column with more text', () => {
    const widths = tableColumnWidths([['Protein', 'Albumin', 'Globulins'], ['Roles', 'Creates the oncotic pressure that holds water in the vessels; carries drugs and hormones', 'Transport; γ globulins are antibodies']], 800);
    assert.ok(sum(widths) <= 800 && sum(widths) >= 795, `widths ${widths} do not fill 800`);
    assert.ok(widths[1] > widths[0] * 2, `the long column is not wider: ${widths}`);
    assert.ok(widths.every((width) => width >= MIN_COLUMN));
  });

  it('keep every column readable on a phone, scrolling sideways when they cannot fit', () => {
    const fits = tableColumnWidths([['A', 'short'], ['B', 'a much longer cell of text here']], 340);
    assert.ok(sum(fits) <= 340 && fits.every((width) => width >= MIN_COLUMN), `${fits}`);
    const many = tableColumnWidths(Array.from({ length: 5 }, () => ['cell text']), 340);
    assert.ok(many.every((width) => width >= MIN_COLUMN) && sum(many) > 340, 'five columns on a phone should scroll, not squash');
  });

  it('start at the old width before the page width is known', () => {
    assert.deepEqual(tableColumnWidths([['a'], ['b']], 0), [DEFAULT_COLUMN, DEFAULT_COLUMN]);
    assert.deepEqual(tableColumnWidths([], 800), []);
  });
});
