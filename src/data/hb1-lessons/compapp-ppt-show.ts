// Computer Appreciation → Viewing, Printing, Animations and Transitions. From "CSM 177 slides"
// (Chapter Ten, slides 511–541). Rewrites the original database lesson compapp-10 (same id, so
// progress is kept). Checked 2026-11-04; teaching text in our own words. Practises Quiz 10 and the
// PowerPoint past questions.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const compappPptShow: Hb1Lesson = {
  id: 'compapp-10',
  order: 10,
  title: 'Viewing, Printing, Animations and Transitions',
  summary: 'The slide views and when to use each; moving through and ending a slide show; printing from Backstage: printer, settings, print range, slides, handouts (default 6 per page), notes pages and outlines, colour or greyscale, copies; animating text and objects (Entrance, Emphasis, Exit, Motion Paths), removing, adding, previewing and reordering effects; transitions vs animations; applying and removing transitions on one or all slides; the star icon; advancing slides on click or automatically after a set time',
  minutes: 20,
  source: 'CSM 177 slides.pdf',
  quizId: 'cpps',
  quizName: 'Quiz · PowerPoint Views, Printing and Effects (lesson)',
  pastSets: ['s10'],
  pastTopics: ['powerpoint'],
  sections: [
    {
      id: 'ps-views',
      title: 'Viewing a presentation',
      kicker: 'Check it as the audience will see it',
      blocks: [
        { k: 'p', x: 'Once the slides are made, view them to check every slide looks right, and rehearse before you present. PowerPoint has <b>four</b> main views; three of them are buttons at the bottom right of the window in <b>Normal</b> view, the default.' },
        { k: 'table', head: ['View', 'Use it to'], rows: [
          { c: ['<b>Normal</b>', 'Create and edit slides; reorder them in the Slides tab on the left'] },
          { c: ['<b>Slide Sorter</b>', 'See many miniature slides at once, drag and drop to reorder, and confirm none is missing or deleted'] },
          { c: ['<b>Slide Show</b>', 'Fill the screen exactly as the audience sees it, with a menu for navigating during the talk'] },
          { c: ['<b>Reading View</b> (or Notes Page)', 'The fourth view, from the View tab: the show in a window, or each slide with its speaker notes'] },
        ] },
        { k: 'p', x: 'In Slide Show, move with the <b>arrow keys</b>, <b>Page Up/Page Down</b>, the <b>Spacebar</b> or <b>Enter</b> (or a mouse click); press <b>Esc</b> to end the show. <b>F5</b> starts from the first slide and <b>Shift + F5</b> from the current one.' },
      ],
    },
    {
      id: 'ps-print',
      title: 'Printing slides',
      kicker: 'Copies for you or your audience',
      blocks: [
        { k: 'p', x: '<b>File → Print</b> opens Backstage view with the <b>print preview</b> on the right and the print settings on the left. Set the options, then click <b>Print</b> to send the document to the printer.' },
        { k: 'step', n: '1', title: 'The print settings in order', blocks: [{ k: 'ul', items: [
          '<b>Printer</b>: choose one if you have more than one.',
          '<b>Settings</b>: paper size, one- or double-sided (options vary by printer).',
          '<b>Print range</b>: the default is <b>Print All Slides</b>; others are Print Selection, Print Current Slide and <b>Custom Range</b> (e.g. 1-3, 6).',
          '<b>What to print</b>: Full Page Slides, <b>Handouts</b>, <b>Notes Pages</b> or <b>Outline</b>.',
          '<b>Colour</b>, <b>Grayscale</b> or Pure Black and White.',
          '<b>Copies</b>, then Print (OK).',
        ] }] },
        { k: 'cards', items: [
          { title: 'Handouts', blocks: [{ k: 'p', x: 'Several slides per page; the default is <b>6</b>. Choose <b>3</b> and each slide gets lines beside it for the audience to take notes. Horizontal or vertical order can be chosen.' }] },
          { title: 'Notes Pages', blocks: [{ k: 'p', x: 'One slide per page with the <b>speaker notes</b> you typed beneath it: your script for the talk.' }] },
          { title: 'Outline', blocks: [{ k: 'p', x: 'Only the <b>text</b> of the slides (titles and bullets), no pictures.' }] },
        ] },
      ],
    },
    {
      id: 'ps-anim',
      title: 'Animations',
      kicker: 'Movement on the slide',
      blocks: [
        { k: 'p', x: 'An <b>animation</b> is movement of <b>text or an object</b> (clip art, shape, picture) <b>on a slide</b>. Used sparingly it draws attention to one point at a time or makes a busy slide easier to follow; too much distracts.' },
        { k: 'table', head: ['Category', 'What the object does', 'Example'], rows: [
          { c: ['<b>Entrance</b>', 'Appears on the slide', 'Fade, Fly In, Appear'] },
          { c: ['<b>Emphasis</b>', 'Draws attention while already there', 'Pulse, Grow/Shrink, Spin'] },
          { c: ['<b>Exit</b>', 'Leaves the slide', 'Fade Out, Fly Out'] },
          { c: ['<b>Motion Paths</b>', 'Travels along a path', 'Lines, arcs, custom paths'] },
        ] },
        { k: 'table', head: ['Task', 'How'], rows: [
          { c: ['Apply an effect', 'Select the object → <b>Animations</b> tab → hover for live preview → click one'] },
          { c: ['Remove it', 'Select the object → Animations gallery → <b>None</b>; its number label disappears'] },
          { c: ['Add another effect', '<b>Add Animation</b> → choose an Entrance, Emphasis, Exit or Motion Path effect'] },
          { c: ['See it', '<b>Preview</b> (Animations tab, Preview group) in Normal view, or Slide Show then Esc to return'] },
          { c: ['Change the order', 'Open the <b>Animation Pane</b> (Custom Animation pane in 2007), select an effect and use the up/down arrows (or Move Earlier / Move Later)'] },
        ] },
      ],
    },
    {
      id: 'ps-trans',
      title: 'Transitions and advancing slides',
      kicker: 'Movement between slides',
      blocks: [
        { k: 'p', x: 'A <b>transition</b> is the movement you see when <b>one slide changes to the next</b> in Slide Show. Do not confuse the two: animations move things <b>on</b> a slide; transitions move <b>the slide itself</b>.' },
        { k: 'table', head: ['Task', 'How'], rows: [
          { c: ['One slide', 'Select the slide → <b>Transitions</b> tab → Transition to This Slide group (default <b>None</b>) → More arrow → hover for preview → click'] },
          { c: ['All slides', 'Do the same, then click <b>Apply To All</b>'] },
          { c: ['Remove', 'Select the slide → <b>None</b>; repeat for each, or None then Apply To All for the whole show'] },
        ] },
        { k: 'p', x: 'A small <b>star (Play Animations) icon</b> appears beside any slide with a transition or animation, in the Slides tab and Slide Sorter view; click it to preview.' },
        { k: 'p', x: 'By default a slide advances <b>on a mouse click</b> (or Enter). For an unattended show, such as a trade-fair booth, set timings: in <b>Slide Sorter</b> view select a slide → Transitions → <b>Advance Slide</b> → tick <b>After</b> (Automatically After) and enter the time → repeat for other slides. For the same transition and timing everywhere, set one slide and click <b>Apply To All</b>.' },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The slides say the advance setting is on the <b>Animations</b> tab; that was PowerPoint 2007. From 2010 on it is in the <b>Timing</b> group of the <b>Transitions</b> tab, as the timing steps on the next slide say. The deck also says there are four views but lists three; the fourth is Reading View (or Notes Page).' }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Normal (edit), Slide Sorter (thumbnails, reorder, check), Slide Show (audience view; Esc ends).',
          'Print: printer, settings, range (All, Selection, Current, Custom), slides/handouts/notes/outline, colour, copies.',
          'Handouts: default 6 per page; 3 per page leaves room for notes.',
          'Animation = on the slide: Entrance, Emphasis, Exit, Motion Paths; None removes; Animation Pane reorders.',
          'Transition = between slides; default None; Apply To All; star icon shows effects.',
          'Advance on click by default, or After a set time for unattended shows.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['The default PowerPoint view is', 'Normal', ['Slide Sorter', 'Slide Show', 'Reading View'], 'Create and edit.', 'Views'],
    ['A good view to confirm no slide has been deleted is', 'Slide Sorter', ['Slide Show', 'Notes Page view', 'Reading View'], 'Many thumbnails.', 'Views'],
    ['The view that fills the screen as the audience sees it is', 'Slide Show', ['Slide Sorter', 'Normal', 'Outline'], 'Presenting.', 'Views'],
    ['The key that ends a slide show is', 'Esc', ['Enter', 'Spacebar', 'Page Down'], 'Back to editing.', 'Views'],
    ['Which key does NOT move to the next slide in Slide Show?', 'Esc', ['Spacebar', 'Enter', 'Page Down'], 'Esc ends it.', 'Views'],
    ['Print preview in PowerPoint is shown in', 'Backstage view', ['Slide Sorter view', 'Reading View', 'Notes Page view'], 'File → Print.', 'Printing'],
    ['The default print range is', 'Print All Slides', ['Print Current Slide', 'Print Selection', 'Custom Range'], 'Under Settings.', 'Printing'],
    ['To print slides 2 to 5 only, choose', 'Custom Range', ['Print All Slides', 'Print Selection', 'Print Current Slide'], 'Type 2-5.', 'Printing'],
    ['Handouts print by default how many slides per page?', 'Six', ['Three', 'Nine', 'One'], 'Can change.', 'Printing'],
    ['The handout layout that leaves lines for audience notes is', 'Three slides per page', ['Six slides per page', 'Nine slides on each page', 'One slide on each page'], 'Note lines.', 'Printing'],
    ['Printing slides with the speaker notes uses', 'Notes Pages', ['Handouts', 'Outline', 'Full Page Slides'], 'Your script.', 'Printing'],
    ['Printing only the text of the slides uses', 'Outline', ['Notes Pages', 'Handouts', 'Full Page Slides'], 'No pictures.', 'Printing'],
    ['Animation in PowerPoint refers to movement of', 'Text and objects on a slide', ['One slide changing to the next', 'The pointer during a show', 'Slides in Slide Sorter view'], 'On the slide.', 'Animations'],
    ['An effect that makes an object appear on the slide is', 'Entrance', ['Exit', 'Emphasis', 'Motion Path'], 'Comes in.', 'Animations'],
    ['An effect for an object already on the slide, to draw attention, is', 'Emphasis', ['Entrance', 'Exit', 'Transition'], 'e.g. Pulse.', 'Animations'],
    ['An effect that moves an object along a line or curve is', 'Motion Path', ['Emphasis', 'Exit effect', 'Entrance'], 'Travels.', 'Animations'],
    ['To remove an animation effect, choose', 'None', ['Fade', 'Apply To All', 'Preview'], 'The label goes.', 'Animations'],
    ['Animation effects are reordered in the', 'Animation Pane', ['Slide Sorter view', 'Backstage view', 'Format Background pane'], 'Arrows.', 'Animations'],
    ['A transition is the movement seen when', 'One slide changes to another', ['Text flies in onto a slide', 'A picture is rotated on a slide', 'A chart on a slide is updated'], 'Between slides.', 'Transitions'],
    ['By default each slide has the transition', 'None', ['Fade', 'Push', 'Wipe'], 'No Transition.', 'Transitions'],
    ['To use one transition on every slide, click', 'Apply To All', ['Preview', 'None', 'Add Animation'], 'Whole show.', 'Transitions'],
    ['A star icon beside a slide thumbnail shows the slide has', 'An animation or transition', ['Speaker notes typed under it', 'Been hidden from the show', 'A reviewer comment'], 'Click to preview.', 'Transitions'],
    ['By default a slide advances to the next one', 'On a mouse click', ['After 5 seconds', 'After 10 seconds', 'When the audio ends'], 'Or Enter.', 'Advancing'],
    ['Automatic slide timings are most useful for', 'An unattended show', ['Printing handouts', 'Editing in Normal view', 'Saving as PDF'], 'Trade-fair booth.', 'Advancing'],
    ['The timing for automatic advance is entered in the field', 'After', ['On Mouse Click', 'Duration', 'Delay'], 'Advance Slide.', 'Advancing'],
  ],
};
