// Apex Explained: the GrAte Apex Team's YouTube lessons, shown on the Explore page
// grouped by subject (src/components/explore/apex-explained.tsx).
//
// Videos stay on YouTube (public, embeddable) and play inside the app: nothing is
// stored in the app or on Cloudinary. To add a video, add one entry to APEX_VIDEOS
// with its 11-character YouTube id (the part after "watch?v=").

export type ApexSubjectId = 'physiology' | 'biochemistry' | 'anatomy' | 'chemistry';

export const APEX_SUBJECTS: readonly { id: ApexSubjectId; label: string }[] = [
  { id: 'physiology', label: 'Physiology' },
  { id: 'biochemistry', label: 'Biochemistry' },
  { id: 'anatomy', label: 'Anatomy' },
  { id: 'chemistry', label: 'Chemistry' },
];

export type ApexChapter = { at: string; label: string };
export type ApexVideo = {
  id: string;
  subject: ApexSubjectId;
  title: string;
  /** Running time as shown on YouTube, e.g. "21:13". */
  length: string;
  summary?: string;
  chapters?: readonly ApexChapter[];
};

export const APEX_VIDEOS: readonly ApexVideo[] = [
  {
    id: '7eq3_OIhgIM',
    subject: 'physiology',
    title: 'Cardiovascular Physiology | Part 1',
    length: '21:13',
    summary: 'Video 1 of the Cardiovascular Physiology series: the heart, its conduction system, the Wiggers diagram and ventricular filling.',
    chapters: [
      { at: '0:00', label: 'Intro' },
      { at: '0:56', label: 'Route of blood' },
      { at: '2:37', label: 'The heart' },
      { at: '5:28', label: 'The electrical trigger' },
      { at: '9:19', label: 'The conduction system' },
      { at: '10:16', label: 'A heartbeat' },
      { at: '13:33', label: 'Wiggers diagram' },
      { at: '15:47', label: 'Ventricular refill' },
      { at: '18:50', label: 'Atrial kick' },
      { at: '20:34', label: 'Conclusion' },
    ],
  },
  {
    id: '2ER-_917nJM',
    subject: 'biochemistry',
    title: 'Biochemistry: Fatty Acid Synthesis',
    length: '30:47',
    summary: 'Fatty acids built from the start, one step at a time: the enzymes, the citrate shuttle, the mechanism and palmitate.',
    chapters: [
      { at: '0:00', label: 'Intro' },
      { at: '1:54', label: 'Why make fat?' },
      { at: '2:59', label: 'Cast' },
      { at: '5:00', label: 'Synthase vs synthetase' },
      { at: '5:32', label: 'Enzymes' },
      { at: '6:58', label: 'When and where' },
      { at: '9:43', label: 'Citrate shuttle' },
      { at: '12:10', label: 'Step 1: mechanism and regulation' },
      { at: '15:45', label: 'Acetyl-CoA synthetase' },
      { at: '17:22', label: 'Step 2: the transfer' },
      { at: '18:58', label: 'Condensation, reduction, dehydration, reduction' },
      { at: '21:21', label: 'Palmitate synthesis' },
      { at: '22:55', label: 'Beta oxidation vs fatty acid synthesis' },
      { at: '24:23', label: 'Other fatty acid synthesis' },
      { at: '25:35', label: 'Clinical significance' },
      { at: '26:14', label: 'Exam traps' },
      { at: '27:27', label: 'Summary' },
    ],
  },
  {
    id: '81hQmQ9nuJk',
    subject: 'anatomy',
    title: 'The Cardiac Cycle (Part 1): Conduction, Filling & the Wiggers Diagram | Gross Anatomy',
    length: '27:03',
  },
  {
    id: 'f6IggA9kXCk',
    subject: 'chemistry',
    title: 'Alkenes and Alkynes (Part 1): Markovnikov’s Rule and Rearrangements',
    length: '27:06',
    summary: 'The double bond, why alkenes react and how to predict the products: Markovnikov’s rule, regioselectivity, hydration, rearrangement, anti-Markovnikov and the radical chain mechanism.',
  },
];

export const isYoutubeId = (id: unknown): id is string => typeof id === 'string' && /^[A-Za-z0-9_-]{11}$/.test(id);

/** "1:02:03" or "2:37" to seconds; 0 when it can't be read. */
export function chapterSeconds(at: string): number {
  const parts = at.split(':').map(Number);
  if (parts.length < 2 || parts.length > 3 || parts.some((n) => !Number.isInteger(n) || n < 0)) return 0;
  return parts.reduce((total, n) => total * 60 + n, 0);
}

/** The in-app player address (YouTube's privacy-friendly embed, no related videos from other channels). */
export const embedUrl = (id: string, start = 0) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&autoplay=1${start > 0 ? `&start=${Math.floor(start)}` : ''}`;
export const watchUrl = (id: string, start = 0) => `https://www.youtube.com/watch?v=${id}${start > 0 ? `&t=${Math.floor(start)}s` : ''}`;
export const thumbnailUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/** The subjects that have at least one video, in the order above, each with its videos. */
export function videosBySubject(videos: readonly ApexVideo[] = APEX_VIDEOS) {
  return APEX_SUBJECTS.map((subject) => ({ ...subject, videos: videos.filter((video) => video.subject === subject.id) })).filter((group) => group.videos.length > 0);
}
