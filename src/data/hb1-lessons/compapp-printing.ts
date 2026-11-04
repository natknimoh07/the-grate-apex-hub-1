// Computer Appreciation → Printing Worksheets. From "CSM 177 slides" (Chapter Five, slides
// 248–275). Rewrites the original database lesson compapp-05 (same id, so progress is kept).
// Checked 2026-11-04; teaching text in our own words, with notes where current Excel differs.
// Practises Quiz 5 and the Excel past questions.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const compappPrinting: Hb1Lesson = {
  id: 'compapp-05',
  order: 5,
  title: 'Printing Worksheets',
  summary: 'The printing steps; the Page Setup dialog and its four tabs (Page, Margins, Header/Footer, Sheet); margins and centring; orientation and paper size; printing gridlines and headings; page order; scaling with Adjust To and Fit To; predefined and custom headers and footers with codes; setting and clearing the print area; manual page breaks; and print preview',
  minutes: 18,
  source: 'CSM 177 slides.pdf',
  quizId: 'cppr',
  quizName: 'Quiz · Printing Worksheets (lesson)',
  pastSets: ['s5'],
  pastTopics: ['excel-basics'],
  sections: [
    {
      id: 'pr-steps',
      title: 'From worksheet to paper',
      kicker: 'Preview before you print',
      blocks: [
        { k: 'p', x: 'Always <b>preview</b> a worksheet before printing for a quick visual check. The usual sequence:' },
        { k: 'step', n: '1', title: 'Printing steps', blocks: [{ k: 'ul', items: [
          'Select the area to print.',
          'Check page breaks with <b>View → Page Break Preview</b>; set manual breaks if needed with <b>Page Layout → Page Setup → Breaks</b>.',
          '<b>File → Print</b> (Ctrl + P); choose your <b>printer</b> from the drop-down (needed once unless you change printers).',
          '<b>Page Setup</b> for margins, orientation, print quality, headers and footers, print titles and other options.',
          'Check the <b>print preview</b>, then <b>Print</b> (now or later).',
        ] }] },
        { k: 'p', x: 'The print settings live on the <b>Page Layout</b> tab: position on the page, orientation (portrait or landscape), headers and footers, gridlines, colour or black and white, and row and column headings. The dialog box launcher at the corner of the <b>Page Setup</b> group opens the full dialog; set the options and choose OK.' },
        { k: 'table', head: ['Page Setup tab', 'Controls'], rows: [
          { c: ['<b>Page</b>', 'Paper size, print quality, orientation; reduce or enlarge (scaling)'] },
          { c: ['<b>Margins</b>', 'Top, bottom, left, right; header and footer distance from the edge; centre horizontally and/or vertically. Defaults in the slides: left and right 0.75 inch, top and bottom 1.0 inch'] },
          { c: ['<b>Header/Footer</b>', 'Predefined or custom headers and footers on every page'] },
          { c: ['<b>Sheet</b>', 'Print area, print titles, page order; print gridlines, comments, black and white, row and column headings, draft quality'] },
        ] },
        { k: 'box', title: 'Strictly speaking', tone: 'gold', blocks: [{ k: 'p', x: 'Modern Excel’s “Normal” margins are 0.75 inch top and bottom and 0.7 inch left and right; the slides describe an older version’s defaults. The method is the same.' }] },
      ],
    },
    {
      id: 'pr-layout',
      title: 'Margins, orientation, gridlines, order and scaling',
      kicker: 'Fitting the sheet to the page',
      blocks: [
        { k: 'ul', items: [
          '<b>Margins</b>: Margins tab → set any combination; tick <b>Horizontally</b> and/or <b>Vertically</b> to centre the sheet on the page; the preview area shows the effect; OK.',
          '<b>Orientation and paper</b>: a sheet wider than tall prints better in <b>landscape</b> (portrait is taller than wide). Choose the paper size (e.g. legal) on the Page tab; the sizes offered depend on the printer.',
          '<b>Gridlines and headings</b>: on-screen gridlines are switched in the view options (View → Gridlines); for printing, the Sheet tab has <b>Gridlines</b> and <b>Row and column headings</b> check boxes.',
          '<b>Page order</b>: a range too big for one page prints <b>Down, then over</b> by default (down the first columns, then the next columns). Wide landscape reports may want <b>Over, then down</b> (Sheet tab → Page order).',
        ] },
        { k: 'p', x: '<b>Scaling</b> (with a scalable printer or TrueType fonts) shrinks or enlarges proportionally, so you can fit a page without redoing the formatting. Page tab: <b>Adjust to</b> a percentage of normal size (below 100 reduces, above 100 enlarges), or <b>Fit to</b> a number of pages <b>wide</b> by a number <b>tall</b>. If the printer cannot scale, both boxes are greyed out.' },
      ],
    },
    {
      id: 'pr-head',
      title: 'Headers and footers',
      kicker: 'Text on every page',
      blocks: [
        { k: 'p', x: 'Headers and footers put a title, date, page number or any text at the top or bottom of <b>every</b> printed page, in any font, style and size. By default Excel uses <b>none</b>. Open Page Setup → <b>Header/Footer</b>: a sample of the current one shows; pick a <b>predefined</b> one from the Header or Footer drop-down lists, or click <b>Custom Header</b> / <b>Custom Footer</b>.' },
        { k: 'p', x: 'The Header and Footer dialogs are identical apart from their titles, with <b>three sections</b>: left, centre and right-aligned. Click a section and type, or click a <b>code button</b> (page number, total pages, date, time, file name, sheet name, picture) to insert a code. From the keyboard, <b>Alt + L, C or R</b> jumps to the left, centre or right section; Tab moves between buttons and Enter presses one; <b>Alt + Enter</b> starts a new line. OK to finish.' },
      ],
    },
    {
      id: 'pr-area',
      title: 'Print area, page breaks and preview',
      kicker: 'Print only what you need',
      blocks: [
        { k: 'p', x: 'Excel prints the whole worksheet unless you set a <b>print area</b>, which may hold several ranges. <b>Page Layout → Print Area → Set Print Area</b>, or Page Setup → Sheet tab → click in <b>Print area</b> and select the range (use <b>Collapse Dialog</b> to see the sheet and Expand to return); for more areas type a <b>comma</b> and select the next, in the order to print; OK. Excel marks the area with <b>dashed lines</b> (which also show automatic and manual page breaks) and creates a named range called <b>Print_Area</b>. To remove it, delete the entry in the Print area box, or <b>Print Area → Clear Print Area</b>.' },
        { k: 'p', x: 'A <b>page break</b> marks where one printed page ends and the next begins. <b>Manual breaks</b> override automatic ones (which then reposition). For a <b>vertical</b> break (sides only) put the active cell in <b>row 1</b>, in the column to the right of where the break goes; for a <b>horizontal</b> break (top and bottom only) put it in <b>column A</b>, in the row below the break; then right-click → <b>Insert Page Break</b> (or Page Layout → Breaks). A manual break stays until removed: put the active cell just below or right of it → Breaks → <b>Remove Page Break</b>; select the whole sheet → <b>Reset All Page Breaks</b> to remove all at once.' },
        { k: 'p', x: '<b>Print preview</b> (File → Print) shows miniature pages. <b>Zoom</b> in by clicking the zoom button or clicking with the magnifying glass, again to zoom out; <b>Next</b> and <b>Previous</b> change pages (greyed when there are none); print straight from the preview, open <b>Page Setup</b> from it, and press <b>Esc</b> to return to the worksheet.' },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Select → check breaks → printer → Page Setup → preview → print.',
          'Page Setup tabs: Page (size, orientation, scaling), Margins (centre), Header/Footer, Sheet (print area, titles, gridlines, headings, order).',
          'Adjust to % or Fit to pages wide × tall; Down-then-over is the default order.',
          'Custom headers: left, centre, right sections; Alt + Enter for a new line.',
          'Print area → dashed lines and a Print_Area name; manual breaks from row 1 (vertical) or column A (horizontal).',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['Before printing a worksheet you should first', 'Preview it', ['Delete its gridlines', 'Close Excel', 'Rename the sheet'], 'A quick visual check.', 'Steps'],
    ['Page breaks are checked with View →', 'Page Break Preview', ['Normal view', 'Full Screen view', 'Freeze Panes view'], 'Shows the breaks.', 'Steps'],
    ['The Page Setup tab for paper size and orientation is', 'Page', ['Margins', 'Sheet', 'Header/Footer'], 'Also scaling.', 'Page Setup'],
    ['Print titles, gridlines and page order are on the', 'Sheet tab', ['Page tab', 'Margins tab', 'Header/Footer tab'], 'Sheet options.', 'Page Setup'],
    ['The slides’ default top and bottom margins are', '1.0 inch', ['0.75 inch', '0.5 inch', '1.5 inches'], 'Left and right 0.75.', 'Page Setup'],
    ['To centre a sheet left-to-right on the page, tick', 'Horizontally', ['Vertically', 'Landscape', 'Draft quality'], 'Margins tab.', 'Margins'],
    ['A sheet wider than it is tall prints best in', 'Landscape', ['Portrait', 'Draft mode', 'Legal size only'], 'Orientation.', 'Margins'],
    ['By default a large range prints', 'Down, then over', ['Over, then down', 'Only the first page', 'In reverse order'], 'Page order.', 'Scaling'],
    ['Adjust To with a value below 100', 'Reduces the printout', ['Enlarges the printout', 'Adds a header', 'Prints in colour'], 'Percentage of full size.', 'Scaling'],
    ['Fit To scales the sheet to a number of', 'Pages wide and tall', ['Fonts and font sizes', 'Copies to print in all', 'Printers to send it to'], 'Two boxes.', 'Scaling'],
    ['By default, Excel prints headers and footers', 'None', ['The file name', 'The page number', 'The date'], 'You add them.', 'Headers'],
    ['A custom header dialog has how many sections?', 'Three', ['Two', 'Four', 'Five'], 'Left, centre, right.', 'Headers'],
    ['Alt + Enter inside a header section', 'Starts a new line', ['Closes the dialog', 'Inserts the date', 'Deletes the section'], 'Multi-line headers.', 'Headers'],
    ['Alt + C in the header dialog moves to the', 'Centre section', ['Code buttons', 'Cancel button', 'Custom footer'], 'L, C, R.', 'Headers'],
    ['Unless told otherwise, Excel prints', 'The entire worksheet', ['Only the active cell', 'Only charts', 'Only the first page'], 'Set a print area to limit it.', 'Print area'],
    ['To add a second range to the print area, type a', 'Comma', ['Colon', 'Semicolon', 'Plus sign'], 'Union.', 'Print area'],
    ['Setting a print area creates a named range called', 'Print_Area', ['Page_Area', 'Range1', 'PrintRange'], 'A name.', 'Print area'],
    ['Excel marks the print area and page breaks with', 'Dashed lines', ['Red shading', 'Bold borders', 'Arrows'], 'On the sheet.', 'Print area'],
    ['For a vertical manual page break, put the active cell in', 'Row 1', ['Column A', 'The last row', 'Cell Z1 only'], 'Horizontal uses column A.', 'Breaks'],
    ['Manual page breaks compared with automatic ones', 'Override them', ['Are ignored', 'Must match them', 'Delete the sheet'], 'Automatic ones move.', 'Breaks'],
    ['To leave print preview and return to the sheet, press', 'Esc', ['Enter', 'F12', 'Ctrl + S'], 'Back to the worksheet.', 'Preview'],
    ['Next and Previous in print preview are greyed when', 'There is no other page', ['The printer is off', 'Gridlines are on', 'The sheet is grouped'], 'Single page.', 'Preview'],
  ],
};
