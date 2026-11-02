// Other ways of writing the same typed answer (owner, 2026-11-02: "15 sec, 15 s and
// 15 seconds should all be accepted"). Pure, so tests/typed-answer-forms.test.mjs can check it.
//
// typedAnswerMatches (questions.ts) still tries its usual comparison first; these rules
// only add answers that mean the same thing:
//   • units written any common way: 15 s / 15 sec / 15 seconds, 5 mL / 5 ml / 5 millilitres,
//     120 mmHg / 120 mm Hg, 37 °C / 37 degrees, 65% / 65 percent, 30x / 30 times / 30-fold
//   • numbers as words or digits: five / 5, thirty-one / 31, type II / type 2
//   • the same number written differently: 171.30 / 171.3, and a number inside a range
//     answer such as "6.775-6.785"
//   • British and American spelling: haemoglobin / hemoglobin, oedema / edema, centre / center
//   • a leading "the", "an" or "about" (not "a": "A band"), and lists in any order: "Na+ and K+" / "K+ and Na+"
// A number never matches a different unit (15 s is not 15 min).

const NUMBER_WORDS: Record<string, number> = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
  eighty: 80, ninety: 90, hundred: 100,
};

const ORDINALS: Record<string, number> = {
  first: 1, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10,
  eleventh: 11, twelfth: 12,
};

const ROMAN: Record<string, number> = { ii: 2, iii: 3, iv: 4, v: 5, vi: 6, vii: 7, viii: 8, ix: 9, x: 10, xi: 11, xii: 12 };

// Each unit's spellings → one short name. Longer spellings first, so "millilitres" is not read as "l".
const UNITS: [RegExp, string][] = [
  [/^(milliseconds?|msecs?|ms)$/, 'ms'],
  [/^(seconds?|secs?|s)$/, 's'],
  [/^(minutes?|mins?)$/, 'min'],
  [/^(hours?|hrs?|h)$/, 'h'],
  [/^(days?|d)$/, 'day'],
  [/^(weeks?|wks?)$/, 'week'],
  [/^(months?|mo)$/, 'month'],
  [/^(years?|yrs?|y)$/, 'year'],
  [/^(millilit(?:re|er)s?|mls?|cc)$/, 'ml'],
  [/^(decilit(?:re|er)s?|dl)$/, 'dl'],
  [/^(lit(?:re|er)s?|l)$/, 'l'],
  [/^(mm ?hg|millimet(?:re|er)s? of mercury)$/, 'mmhg'],
  [/^(cm ?h2o|centimet(?:re|er)s? of water)$/, 'cmh2o'],
  [/^(micrograms?|mcg|µg|ug)$/, 'ug'],
  [/^(milligrams?|mg)$/, 'mg'],
  [/^(kilograms?|kgs?)$/, 'kg'],
  [/^(grams?|gm?s?)$/, 'g'],
  [/^(micromet(?:re|er)s?|microns?|µm|um)$/, 'um'],
  [/^(nanomet(?:re|er)s?|nm)$/, 'nm'],
  [/^(millimet(?:re|er)s?|mm)$/, 'mm'],
  [/^(centimet(?:re|er)s?|cm)$/, 'cm'],
  [/^(met(?:re|er)s?|m)$/, 'm'],
  [/^(percent|per cent|%)$/, '%'],
  [/^(°c|° c|degrees? c(?:elsius)?|degrees?|celsius|deg c)$/, 'c'],
  [/^(x|×|times|fold|-fold)$/, 'x'],
  [/^(beats? per min(?:ute)?|beats?\/min|bpm)$/, 'bpm'],
  [/^(breaths? per min(?:ute)?|breaths?\/min)$/, 'breaths/min'],
  [/^(kilocalories|kcals?|calories|cal)$/, 'kcal'],
  [/^(hertz|hz)$/, 'hz'],
  [/^(decibels?|db)$/, 'db'],
  [/^(millimoles?|mmol)$/, 'mmol'],
  [/^(millimoles? per lit(?:re|er)|mmol\/l)$/, 'mmol/l'],
  [/^(milliequivalents?|meq)$/, 'meq'],
  [/^(milliequivalents? per lit(?:re|er)|meq\/l)$/, 'meq/l'],
];

const UNIT_NAMES = new Set(UNITS.map(([, name]) => name));

// British → American, applied to every word (the app's answers use both).
const SPELLINGS: [RegExp, string][] = [
  [/haem/g, 'hem'],
  [/aem/g, 'em'], // anaemia, leukaemia, ischaemia, glycaemia
  [/oesoph/g, 'esoph'],
  [/oedem/g, 'edem'],
  [/oestr/g, 'estr'],
  [/foet/g, 'fet'],
  [/coeli/g, 'celi'],
  [/oea\b/g, 'ea'], // diarrhoea, gonorrhoea
  [/paed/g, 'ped'],
  [/aetiol/g, 'etiol'],
  [/sulph/g, 'sulf'],
  [/\bgrey\b/g, 'gray'],
  [/([a-z]{2})our\b/g, '$1or'], // colour, tumour, behaviour, labour
  [/([a-z])tre\b/g, '$1ter'], // centre, fibre, litre, metre
  [/([a-z]{3})is(e|ed|es|ing|ation|ations)\b/g, '$1iz$2'], // stabilise, ionisation
  [/([a-z]{3})ys(e|ed|es|ing)\b/g, '$1yz$2'], // analyse, hydrolyse
  [/\baluminium\b/g, 'aluminum'],
];

const ROMAN_AFTER = /\b(type|complex|class|phase|factor|stage|grade|layer|lamina|group|cn|nerve|lead|degree|order|zone)\s+(i{1,3}|iv|v|vi{1,3}|ix|x|xi{1,2})\b/g;

function readNumber(word: string): number | null {
  if (/^[-−]?\d+(\.\d+)?$/.test(word)) return Number(word.replace('−', '-'));
  return null;
}

/** Text with number words, Greek letters, spelling and unit names written one way. */
export function canonicalText(text: string): string {
  let out = text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[‐-―−]/g, '-')
    .replace(/[‘’`]/g, "'")
    .replace(/μ/g, 'µ')
    .replace(/(\d),(\d{3})\b/g, '$1$2') // 3,000 → 3000
    .replace(/&/g, ' and ')
    .trim();
  out = out.replace(/^(the|an|about|approximately|approx\.?|around|roughly|~|≈)\s+/, '').replace(/^[~≈]\s*/, '');
  out = out.replace(/[.!]+$/, '').trim();
  out = out.replace(/\b([a-z]+)[- ]([a-z]+)\b/g, (whole, tens: string, unit: string) =>
    NUMBER_WORDS[tens] >= 20 && NUMBER_WORDS[unit] > 0 && NUMBER_WORDS[unit] < 10 ? String(NUMBER_WORDS[tens] + NUMBER_WORDS[unit]) : whole
  );
  out = out.replace(/\b[a-z]+\b/g, (word) => (word in NUMBER_WORDS ? String(NUMBER_WORDS[word]) : word in ORDINALS ? String(ORDINALS[word]) : word));
  out = out.replace(/\b(\d+)(st|nd|rd|th)\b/g, '$1');
  out = out.replace(ROMAN_AFTER, (_, before: string, roman: string) => `${before} ${ROMAN[roman] ?? roman}`);
  out = out.replace(/β/g, 'beta').replace(/α/g, 'alpha').replace(/γ/g, 'gamma').replace(/δ/g, 'delta').replace(/κ/g, 'kappa');
  for (const [from, to] of SPELLINGS) out = out.replace(from, to);
  // "15sec", "15 sec", "15-second" → "15 s"
  out = out.replace(/(\d)\s*-?\s*(?=[a-z%°×µ])/g, '$1 ');
  out = out.replace(/(\d) ([a-z%°×µ][a-z%°×µ/ 2]*?)(?=$|[,;)]| and | or | to )/g, (whole, digit: string, unit: string) => {
    const name = unitName(unit.trim());
    return name ? `${digit} ${name}` : whole;
  });
  return out.replace(/\s+/g, ' ').trim();
}

function unitName(text: string): string | null {
  for (const [pattern, name] of UNITS) if (pattern.test(text)) return name;
  return null;
}

type Amount = { low: number; high: number; unit: string };

// "15 s", "171.30", "6.775-6.785", "60 to 100 bpm" → numbers with an optional unit.
function readAmount(canonical: string): Amount | null {
  const match = /^(-?\d+(?:\.\d+)?)(?:\s*(?:-|to)\s*(-?\d+(?:\.\d+)?))?(?: ([a-z%/0-9]+))?$/.exec(canonical);
  if (!match) return null;
  const low = readNumber(match[1]);
  const high = match[2] !== undefined ? readNumber(match[2]) : low;
  if (low === null || high === null) return null;
  // Only a real unit: "5-phosphomevalonate" is a name, not 5 of something.
  if (match[3] !== undefined && !UNIT_NAMES.has(match[3])) return null;
  return { low: Math.min(low, high), high: Math.max(low, high), unit: match[3] ?? '' };
}

function amountsMatch(typed: Amount, expected: Amount) {
  if (typed.unit && expected.unit && typed.unit !== expected.unit) return false;
  // A typed range must be the same range; a typed number must sit inside the expected range.
  if (typed.low !== typed.high) return Math.abs(typed.low - expected.low) < 1e-9 && Math.abs(typed.high - expected.high) < 1e-9;
  return typed.low >= expected.low - 1e-9 && typed.low <= expected.high + 1e-9;
}

// "Na+ and K+", "K+, Na+" → the same sorted list (only when both answers are lists).
function listItems(canonical: string): string[] | null {
  const parts = canonical.split(/\s*(?:,|;|\band\b|\bor\b|\/)\s*/).map((part) => part.trim()).filter(Boolean);
  return parts.length >= 2 ? parts.sort() : null;
}

/**
 * Is the typed answer the expected one? `same` compares two answers in the app's usual way
 * (case, spaces, punctuation, small typos); this adds the other ways of writing it.
 * Two numbers are compared as numbers only, so a "typo" never turns 16 s into 15 s,
 * and 17.13 is not 171.3.
 */
export function typedAnswerSaysSame(input: string, expected: string, same: (a: string, b: string) => boolean): boolean {
  const typed = canonicalText(input);
  const wanted = canonicalText(expected);
  if (!typed || !wanted) return false;

  const typedAmount = readAmount(typed);
  const wantedAmount = readAmount(wanted);
  if (typedAmount && wantedAmount) return amountsMatch(typedAmount, wantedAmount);

  if (same(input, expected) || same(typed, wanted)) return true;

  const typedList = listItems(typed);
  const wantedList = listItems(wanted);
  if (typedList && wantedList && typedList.length === wantedList.length) {
    return typedList.every((item, index) => same(item, wantedList[index]));
  }
  return false;
}
