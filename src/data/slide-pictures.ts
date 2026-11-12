// Lecture-slide pictures beside the reading (owner, 2026-11-12: "bring all the
// images in the slides into the app … one image gets one page and is shown on
// the right"). Organology (data/topics/organology/pages.ts): every picture page
// shows its slide picture beside the text on wide screens (Read tab and HB2
// lesson pages), above the text on phones. Merged into illustrationsFor
// (data/illustrations.ts) after the OpenStax drawings and dissection photos.
//
// The pictures are the lecture's own slides, resized (max 1100 px) into
// public/figures/organology/s<slide>.jpg, for study within the course, like the
// lecture diagrams in data/figures/. They have no outside link, so the credit
// shows as plain text.
import type { Illustration } from '@/data/illustrations';
import { LESSON_PAGES, lessonIdOf, pictureSrc } from '@/data/topics/organology/pages';

const DECK = 'Lecture slide {n}, Cardiovascular System Gross 1 (2): Organology';

/** Picture sizes in pixels (width, height), by slide. */
const SIZES: Record<number, [number, number]> = {
  4: [466, 412],
  5: [640, 480],
  6: [438, 389],
  8: [850, 680],
  9: [1100, 1037],
  14: [1100, 733],
  15: [650, 489],
  17: [247, 312],
  19: [326, 318],
  20: [648, 422],
  22: [937, 721],
  23: [1100, 743],
  29: [472, 304],
  31: [949, 866],
  35: [500, 357],
  37: [648, 422],
  38: [846, 695],
  39: [646, 438],
  40: [310, 412],
  41: [782, 809],
  44: [431, 341],
  45: [1100, 900],
  47: [329, 310],
  48: [1013, 899],
  49: [1100, 999],
  50: [432, 291],
  52: [759, 1100],
  53: [977, 1100],
  55: [270, 253],
  56: [807, 1100],
  57: [860, 1100],
  58: [1031, 1100],
  59: [1100, 661],
  60: [1013, 899],
  61: [1065, 1100],
  62: [840, 1100],
  63: [1100, 717],
  64: [1100, 825],
  65: [384, 696],
  66: [595, 464],
  67: [1024, 768],
  68: [800, 516],
  69: [850, 598],
  70: [825, 586],
  71: [1100, 825],
  72: [1063, 1063],
  73: [500, 350],
  74: [1024, 768],
};

/** lesson id → reading-section title → its slide picture. */
export const SLIDE_PICTURES: Record<string, Record<string, Illustration[]>> = Object.fromEntries(
  ([1, 2, 3, 4, 5] as const).map((n) => [
    lessonIdOf(n),
    Object.fromEntries(
      LESSON_PAGES[n].flatMap((page) => {
        if (page.type !== 'organ') return [];
        const [width, height] = SIZES[page.slide];
        const picture: Illustration = {
          src: pictureSrc(page.slide),
          width,
          height,
          caption: page.caption,
          credit: DECK.replace('{n}', String(page.slide)),
          sourceUrl: '',
          note: page.note,
          slide: page.slide,
        };
        return [[page.title, [picture]]];
      }),
    ),
  ]),
);
