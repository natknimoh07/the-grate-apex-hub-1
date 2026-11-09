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
    summary: 'The cardiovascular system in gross anatomy: the circulatory system, the mediastinum, the pericardium and the outside of the heart.',
    chapters: [
      { at: '0:00', label: 'Intro' },
      { at: '0:44', label: 'Roadmap' },
      { at: '1:16', label: 'Compact organs' },
      { at: '3:09', label: 'Parenchyma arrangement' },
      { at: '4:18', label: 'Tubular organ coats' },
      { at: '6:52', label: 'Circulatory system' },
      { at: '8:54', label: 'Mediastinum' },
      { at: '14:31', label: 'Pericardium' },
      { at: '19:31', label: 'The heart: outside' },
      { at: '25:22', label: 'The heart: landmarks' },
    ],
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

/** The in-app player address (YouTube's privacy-friendly embed, no related videos from other channels). `start`/`end` are seconds. */
export const embedUrl = (id: string, start = 0, end = 0) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&autoplay=1${start > 0 ? `&start=${Math.floor(start)}` : ''}${end > 0 ? `&end=${Math.floor(end)}` : ''}`;
export const watchUrl = (id: string, start = 0) => `https://www.youtube.com/watch?v=${id}${start > 0 ? `&t=${Math.floor(start)}s` : ''}`;
export const thumbnailUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/** The subjects that have at least one video, in the order above, each with its videos. */
export function videosBySubject(videos: readonly ApexVideo[] = APEX_VIDEOS) {
  return APEX_SUBJECTS.map((subject) => ({ ...subject, videos: videos.filter((video) => video.subject === subject.id) })).filter((group) => group.videos.length > 0);
}

// ─── Videos inside Study lessons ───────────────────────────────────────────
// A lesson that matches a video (or part of one) shows a "Watch this part" card
// (src/components/learning/lesson-video.tsx). Each part plays from `start` to `end`
// (m:ss); a part with no `end` plays to the end of the video. Times come from the
// chapters in the video's YouTube description.

export type VideoPart = { label: string; start: string; end?: string };
export type LessonVideo = { videoId: string; parts?: readonly VideoPart[] };

export const LESSON_VIDEOS: Readonly<Record<string, LessonVideo>> = {
  // Biochemistry → Fatty Acid Biosynthesis (2ER-_917nJM)
  'fatty-acid-biosynthesis-1': { videoId: '2ER-_917nJM', parts: [
    { label: 'Synthase vs synthetase', start: '5:00', end: '5:32' },
    { label: 'Enzymes', start: '5:32', end: '6:58' },
  ] },
  'fatty-acid-biosynthesis-2': { videoId: '2ER-_917nJM', parts: [
    { label: 'Why make fat?', start: '1:54', end: '2:59' },
    { label: 'When and where', start: '6:58', end: '9:43' },
  ] },
  'fatty-acid-biosynthesis-3': { videoId: '2ER-_917nJM', parts: [
    { label: 'Citrate shuttle', start: '9:43', end: '12:10' },
    { label: 'Step 1: mechanism and regulation', start: '12:10', end: '15:45' },
  ] },
  'fatty-acid-biosynthesis-4': { videoId: '2ER-_917nJM', parts: [
    { label: 'Cast', start: '2:59', end: '5:00' },
    { label: 'Step 2: the transfer', start: '17:22', end: '18:58' },
  ] },
  'fatty-acid-biosynthesis-5': { videoId: '2ER-_917nJM', parts: [
    { label: 'Condensation, reduction, dehydration, reduction', start: '18:58', end: '21:21' },
    { label: 'Palmitate synthesis', start: '21:21', end: '22:55' },
  ] },
  'fatty-acid-biosynthesis-6': { videoId: '2ER-_917nJM', parts: [
    { label: 'Beta oxidation vs fatty acid synthesis', start: '22:55', end: '24:23' },
  ] },
  'fatty-acid-biosynthesis-7': { videoId: '2ER-_917nJM', parts: [
    { label: 'Other fatty acid synthesis', start: '24:23', end: '25:35' },
  ] },

  // Physiology → Cardiovascular Physiology, lesson 1 (7eq3_OIhgIM)
  'cardiovascular-physiology-1': { videoId: '7eq3_OIhgIM', parts: [
    { label: 'Route of blood', start: '0:56', end: '2:37' },
    { label: 'The heart', start: '2:37', end: '5:28' },
    { label: 'The electrical trigger', start: '5:28', end: '9:19' },
    { label: 'The conduction system', start: '9:19', end: '10:16' },
    { label: 'A heartbeat', start: '10:16', end: '13:33' },
    { label: 'Wiggers diagram', start: '13:33', end: '15:47' },
    { label: 'Ventricular refill', start: '15:47', end: '18:50' },
    { label: 'Atrial kick', start: '18:50', end: '20:34' },
  ] },

  // Anatomy → Cardiovascular System (gross), lessons 1 to 3 (81hQmQ9nuJk)
  'cardiovascular-system-gross-1': { videoId: '81hQmQ9nuJk', parts: [
    { label: 'Circulatory system', start: '6:52', end: '8:54' },
    { label: 'Mediastinum', start: '8:54', end: '14:31' },
  ] },
  'cardiovascular-system-gross-2': { videoId: '81hQmQ9nuJk', parts: [
    { label: 'Pericardium', start: '14:31', end: '19:31' },
  ] },
  'cardiovascular-system-gross-3': { videoId: '81hQmQ9nuJk', parts: [
    { label: 'The heart: outside', start: '19:31', end: '25:22' },
    { label: 'The heart: landmarks', start: '25:22' },
  ] },

  // HB1 → Alkenes (f6IggA9kXCk): the whole video, its description has no chapters
  'bmc-05': { videoId: 'f6IggA9kXCk' },
};

export const lessonVideoFor = (lessonId?: string): LessonVideo | undefined => (lessonId ? LESSON_VIDEOS[lessonId] : undefined);
export const videoById = (id: string) => APEX_VIDEOS.find((video) => video.id === id);
