# Covering printed labels on lecture diagrams

Owner, 2026-10-31: "some of the diagrams do a poor job of concealing the labels
so the answer is given straight away".

In "Test yourself", "Label it" and quiz questions, every printed label that could
give an answer away is covered:

* each spot's own `boxes` (as before);
* `grownSpotBoxes` — a spot box made bigger where it cut a word in two;
* `masks` — every other printed label on anatomy pictures (second labels of the
  same part, labels of parts no spot asks about); on pathway diagrams only text
  that repeats a spot's name.

Both live in `src/data/figures/covers.ts` and are merged into the figures by
`src/data/figures/index.ts`. Explore mode still shows the picture uncovered.

## Regenerating (after adding or changing a figure)

Needs Python with Pillow and the `tesseract` OCR program.

```
node --import ./tests/register.mjs scripts/figure-covers/dump-figures.mjs > figs.json
python3 scripts/figure-covers/find-covers.py      # writes covers.json (reads figs.json)
python3 scripts/figure-covers/recheck.py          # re-reads covered pictures; prints any label still readable
```

Then rebuild `covers.ts` from `covers.json` (same shape), and look at a few
covered pictures yourself: OCR misses white text on dark backgrounds now and then.
