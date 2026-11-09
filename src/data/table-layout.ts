// Column widths for the tables in lesson pages (components/learning/legacy-blocks.tsx).
// Until 2026-11-07 every column was 160 px, so on a laptop a two-column table used a
// third of the reading column (owner: "the tables in the lessons for laptops sometimes
// look too narrow"). Now the columns share the width they are given, a column with more
// text getting more of it. Each keeps a minimum, so on a phone a table with many columns
// is wider than the screen and scrolls sideways, as before. Pure, for tests.

/** Below this, a column is too narrow to read. */
export const MIN_COLUMN = 110;
/** Before the page width is known (first frame), each column gets this, as before. */
export const DEFAULT_COLUMN = 160;

/**
 * `columns`: the plain text of each column's cells (heading first). `available`: the width
 * the table may take. Returns one width per column (whole pixels).
 */
export function tableColumnWidths(columns: readonly (readonly string[])[], available: number, min = MIN_COLUMN): number[] {
  if (columns.length === 0) return [];
  if (!(available > 0)) return columns.map(() => DEFAULT_COLUMN);
  // How much text a column holds: its longest cell and its average cell, so one long
  // note does not take over the table. Kept within limits, so no column starves.
  const weights = columns.map((cells) => {
    const lengths = cells.map((cell) => cell.trim().length).filter((length) => length > 0);
    if (lengths.length === 0) return 6;
    const longest = Math.max(...lengths);
    const average = lengths.reduce((sum, length) => sum + length, 0) / lengths.length;
    return Math.min(80, Math.max(6, (longest + 2 * average) / 3));
  });
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const shares = weights.map((weight) => Math.max(min, (available * weight) / totalWeight));
  const sum = shares.reduce((total, width) => total + width, 0);
  const floor = min * columns.length;
  // The minimum pushed the table over the width: take the excess back from the wider columns.
  if (sum > available && floor <= available) {
    const room = available - floor;
    const above = sum - floor;
    return shares.map((width) => Math.floor(min + ((width - min) * room) / above));
  }
  return shares.map((width) => Math.floor(width));
}
