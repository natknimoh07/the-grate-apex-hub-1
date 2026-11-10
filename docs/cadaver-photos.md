# Real dissection photos

Owner's request (2026-11-10): real cadaver pictures in the anatomy lessons and in "Label it".

## Why these photos, and not atlas pictures

Pictures from atlases (Netter, Grant's, Rohen/Yokochi, Thieme…) are copyrighted. Citing the book does not give us the right to copy them into the app. Only a licence from the publisher does, for example through RightsLink / Copyright Clearance Center. Uploads of atlases on archive.org or elsewhere that carry a Creative Commons tag are not licensed by the publisher, so don't use them either.

The photos used here are openly licensed. Wikimedia Commons user **Anatomist90 (Adrian Halga)** photographed and labelled these dissections and published them under **CC BY-SA 3.0**. That licence lets us show them, commercially or not, on two conditions:

1. **Credit:** every photo must be shown with its author, the licence name with a link to the licence, and a link to the source. `IllustrationFigure` and `FigureCredit` (in `figure-view.tsx`) draw this line under every photo. Never show one of these photos without it.
2. **Share-alike:** an *edited* version of a photo, for example with labels drawn into the file, would have to be released under CC BY-SA too. We don't edit the files. Pins, covers and blur are drawn over them by the app.

The app also blurs each photo until the learner taps it, in lessons and in the diagram preview cards, because these are pictures of real donated bodies.

## Where things are

| What | Where |
| --- | --- |
| Photo list, lesson placements, captions, "What to notice" notes | `src/data/cadaver-photos.ts` |
| Labelled photos as tappable diagrams (pins, covers, lesson placement) | `src/data/figures/cadaver.ts` |
| Files | `public/images/cadaver/<slug>.jpg` (960×720, as published) |
| Download | `node --import ./tests/register.mjs scripts/cadaver-photos/download.mjs` |
| Tests | `tests/cadaver-photos.test.mjs` (plus `figures.test.mjs`) |

The download script asks Commons for each file's licence and author before saving it, and refuses any file whose licence or author doesn't match the credit we show. Run it again after adding photos (it skips files already downloaded; `--force` downloads them all again).

## Adding a photo

1. Find it on Commons and check that its licence allows reuse (CC BY, CC BY-SA or public domain; not "NC" or "ND" for this app). Look at the photo: some of Anatomist90's printed labels are wrong. For example, two hand photos label a thenar muscle "abductor pollicis longus", so they are not used.
2. Lesson picture: `photo('<Commons file name>', '<slug>')` in `cadaver-photos.ts`, add it to `CADAVER_ILLUSTRATIONS` under the lesson id and the exact section title, and write a "What to notice" note (60–600 characters, our own words) in `CADAVER_NOTES`.
3. Diagram: add a `dissectionFigure(...)` in `figures/cadaver.ts` with one spot per printed label. Pins go where the label's pointer starts, as in the lecture diagrams. Boxes cover the printed label (fractions of the picture; a small padding is added automatically). Add a second label of the same part, or a label with no spot, to `masks`. Add the figure to `cadaverFigures` and `placements`, with the concept and the spots to ask about in `quiz`.
4. Run the download script, then `npm test`.

## Quiz questions

Each spot listed in a placement's `quiz` becomes a "what is the marked part?" question for the placement's concept, with the photo's other labels as the wrong answers. There are 93 questions in all. They also appear in the Spotter. Like the lecture diagrams, they are kept out of the Apex Challenge and battles. They cite the photo collection (`wikimedia-dissection-photos` in `content-catalog.ts`, a `reference` entry), not a lecture slide, and the quiz shows the photo's credit under the picture.
