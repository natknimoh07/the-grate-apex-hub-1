// Pictures in HB1 lessons (owner, 2026-11-03: "make them top notch just like the HB2
// lessons … with images whiles reading"). The figures are from OpenStax "Anatomy and
// Physiology" (1st edition, CC BY 4.0), resized into public/images/openstax/; only figures
// OpenStax drew itself are used (no third-party photos or micrographs). Captions and
// "What to notice" notes are our own words.
import type { LegacySection } from '@/data/legacy-study';

type Block = LegacySection['blocks'][number];

const CREDIT = 'OpenStax, Anatomy and Physiology · CC BY 4.0';
const SOURCE = 'https://openstax.org/details/books/anatomy-and-physiology';

/** An OpenStax picture: file in public/images/openstax/, its size, caption and what to notice. */
export const ostx = (file: string, w: number, h: number, cap: string, note: string): Block => ({
  k: 'illus',
  src: `/images/openstax/${file}`,
  w,
  h,
  cap,
  credit: CREDIT,
  url: SOURCE,
  note,
});

/** Numbers the pictures "Figure <section>.<n>", like the HB2 lessons. */
export function numberFigures(sections: LegacySection[]): LegacySection[] {
  return sections.map((section, s) => {
    let n = 0;
    return { ...section, blocks: section.blocks.map((block) => (block.k === 'illus' ? { ...block, num: `Figure ${s + 1}.${++n}` } : block)) };
  });
}

const BIO_CREDIT = 'OpenStax, Biology · CC BY 4.0';
const BIO_SOURCE = 'https://openstax.org/details/books/biology';

/** An OpenStax Biology (1st edition, CC BY 4.0) picture in public/images/openstax-bio/. */
export const ostxBio = (file: string, w: number, h: number, cap: string, note: string): Block => ({
  k: 'illus',
  src: `/images/openstax-bio/${file}`,
  w,
  h,
  cap,
  credit: BIO_CREDIT,
  url: BIO_SOURCE,
  note,
});

const MICRO_CREDIT = 'OpenStax, Microbiology · CC BY 4.0';
const MICRO_SOURCE = 'https://openstax.org/details/books/microbiology';

/** An OpenStax Microbiology (CC BY 4.0) picture in public/images/openstax-micro/. */
export const ostxMicro = (file: string, w: number, h: number, cap: string, note: string): Block => ({
  k: 'illus',
  src: `/images/openstax-micro/${file}`,
  w,
  h,
  cap,
  credit: MICRO_CREDIT,
  url: MICRO_SOURCE,
  note,
});
