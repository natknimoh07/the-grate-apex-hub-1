# Five more questions for every lesson section (owner, 2026-11-04)

The owner asked for 5 new questions for every lesson section in the app, all at once, quality kept,
"take as long as you have to". About 1,440 sections: 936 in the 27 HB2 topics and 504 in the 92 HB1
lessons written in the app.

## How

* HB2 topics: `src/data/topics/<topic>/section-questions.ts` (`sectionQuestions`), added to the
  topic's `questions` in its `index.ts`. IDs `sL-S-n` (lesson L, section S, question n). Each
  question uses a concept of its own lesson, written from that section's lecture text.
* Sections that are annotations (material added to a deck after the lecture) are skipped: they are
  not quizzed until confirmed (AGENTS.md, Course content rules).
* Every multiple-choice question has a wrong option at least as long as the answer, and the
  prompts do not repeat existing ones. Checked with the local helpers (not committed):
  `tests/_dump-sections.mjs <out dir> [topic]` (the lecture text by section),
  `tests/_dump-prompts.mjs <topic>` (existing prompts), `tests/_check-section-questions.mjs <topic>`.
* After each topic: `npm run typecheck`, `npm test`, rebuild the battle bank
  (`node --import ./tests/register.mjs scripts/build-battle-bank.mjs`), push.
* HB1 lessons: their quizzes live in `src/data/hb1-lessons/<course>-<name>.ts`; after adding,
  run `scripts/hb1-review/lesson-sets.mjs` and rebuild the battle bank (AGENTS.md).

## Progress (topic: sections done)

HB2 Biochemistry
- [x] fatty-acid-biosynthesis — 33 sections, 165 questions (L7 S5 annotation skipped)
- [x] cholesterol-and-bile-biosynthesis — 22 sections, 110 questions
- [x] heme-metabolism — 33 sections, 165 questions
- [x] oxygen-carriers — 19 sections, 95 questions
- [x] blood-coagulation-and-fibrinolysis — 19 sections, 95 questions
- [x] hormones-endocrine-biochemistry — 12 sections, 60 questions
- [ ] inborn-errors-of-metabolism
- [ ] collagen-synthesis
- [ ] free-radicals-and-oxygen-toxicity
- [ ] amino-acid-metabolism
- [ ] nucleic-acids
- [ ] immunology

HB2 Physiology
- [ ] cardiovascular-physiology
- [ ] respiratory-physiology
- [ ] central-nervous-system
- [ ] endocrinology
- [ ] gastrointestinal-physiology
- [ ] renal-physiology
- [ ] reproductive-physiology
- [ ] special-senses

HB2 Anatomy
- [ ] cardiovascular-system-gross
- [ ] respiratory-system-gross
- [ ] gastrointestinal-system-gross
- [ ] urinary-system-gross
- [ ] upper-limb
- [ ] head-and-neck
- [ ] neuroanatomy

HB1 lessons written in the app (92 lessons, 504 sections)
- [ ] all
