// Communication Skills → Errors in Sentences. Rebuilt from the original database lesson
// commskills-06 (its lecture deck is not in the HB1 folder), checked against the course grammars
// and the answered past questions. Same id, so progress is kept. Checked 2026-11-04; teaching text
// in our own words. Practises Quiz 6 and the sentence-error past questions.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const commskillsErrors: Hb1Lesson = {
  id: 'commskills-06',
  order: 6,
  title: 'Errors in Sentences',
  summary: 'Sentence fragments: what they are, the four common types (dependent-word, -ing, added-details, missing-subject), phrase and subordinate-clause fragments, and five ways to correct them; run-on sentences: fused sentences and comma splices, the conjunctive-adverb trap, and the four corrections; parallelism and faulty parallelism (series, correlatives, comparisons); shift constructions in person, number, tense, voice and mood; and the past questions on sentence construction, worked',
  minutes: 24,
  source: 'Original lesson commskills-06; communication_skills_answered by Abanga (1).pdf',
  quizId: 'cser',
  quizName: 'Quiz · Errors in Sentences (lesson)',
  pastSets: ['s6'],
  pastTopics: ['errors-and-concord'],
  sections: [
    {
      id: 'er-frag',
      title: 'Sentence fragments',
      kicker: 'Looks like a sentence, is not one',
      blocks: [
        { k: 'term', name: 'Sentence fragment', def: 'A phrase or dependent clause <b>punctuated like a sentence</b> (capital letter, full stop) that does <b>not express a complete thought</b>. A true sentence needs a <b>subject</b>, a <b>finite verb</b> and a <b>complete thought</b>; a fragment lacks at least one.' },
        { k: 'p', x: 'Fragments leave you waiting: “When I was going home.” “By the coconut tree.” “Whenever I am waiting for an important phone call.” “At the end of the movie, when the battle began.” “Although I had never played soccer before.”' },
        { k: 'table', head: ['Type', 'Fragment', 'Revised'], rows: [
          { c: ['<b>Dependent-word</b>: begins with after, until, when, although, because, if, since…', 'After I cashed my paycheck. I treated myself to dinner. / I won’t leave the house. Until I hear from you.', 'After I cashed my paycheck, I treated myself to dinner. / I won’t leave the house until I hear from you.'] },
          { c: ['<b>-ing</b>: an -ing word near the start, no subject or full verb', 'Boatemaa walked all over the neighbourhood yesterday. Trying to find her dog.', '…yesterday trying to find her dog. (or: She was trying to find her dog.)'] },
          { c: ['<b>Added-details</b>: begins with also, especially, like, including, except, for example, such as', 'Before a race, I eat starchy foods. Such as bread and spaghetti.', 'Before a race, I eat starchy foods such as bread and spaghetti.'] },
          { c: ['<b>Missing-subject</b>: a second verb cut off from its subject', 'Akosua loved getting wedding presents. But hated writing thank-you notes.', '…presents but hated writing thank-you notes. (or: But she hated…)'] },
        ] },
        { k: 'step', n: '1', title: 'Five ways to correct fragments', blocks: [{ k: 'ul', items: [
          '<b>Check for a subject and a verb</b>: “The dog in the pet store window.” → “The dog in the pet store window <b>has eaten</b>.” / “The dog <b>is</b> in the window.”',
          '<b>An -ing verb cannot be the main verb</b>: “Your sister having all the skills…” → “Your sister <b>has</b> all the skills…” or “Your sister, having all the skills…, <b>will be appointed</b>.”',
          '<b>Words like also, especially, for example, in addition, moreover</b> need their own subject and verb, or join the group to the sentence before: “The group is vibrant, especially the youngest member.”',
          '<b>Phrase fragments</b>: supply what is missing: “will soon be sleeping” → “<b>The baby</b> will soon be sleeping”; “inside the house” → “<b>The missing necklace was found</b> inside the house.”',
          '<b>Subordinate-clause fragments</b>: join to an independent clause: “After the candidates arrive, <b>the inter-halls debate will begin</b>.”',
        ] }] },
        { k: 'p', x: 'Past question: the only complete sentence among “The linguist knowing that she will travel next year / The linguist to travel next year / The linguist who will be travelling next year / <b>The linguist has to travel next year</b>” is the last: it alone has a finite main verb (<i>has</i>). The others are a participle phrase, an infinitive phrase and a noun with a relative clause.' },
      ],
    },
    {
      id: 'er-runon',
      title: 'Run-on sentences',
      kicker: 'Two thoughts, no proper break',
      blocks: [
        { k: 'term', name: 'Run-on sentence', def: 'Two or more <b>independent clauses</b> joined without the right punctuation or conjunction, so the reader cannot see where one thought ends.' },
        { k: 'cards', items: [
          { title: 'Fused sentence', blocks: [{ k: 'p', x: '<b>No punctuation at all</b> between the clauses: “The bus stopped suddenly I found myself in an old man’s lap.” “We heard the noise in the garage two birds had flown in.” “I studied for the test all weekend I am well prepared for it.”' }] },
          { title: 'Comma splice', blocks: [{ k: 'p', x: 'Only a <b>comma</b> between the clauses: “The bus stopped suddenly, I found myself in an old man’s lap.”' }] },
        ] },
        { k: 'table', head: ['Correction', 'Example'], rows: [
          { c: ['1. <b>Full stop</b> and a capital letter', 'The bus stopped suddenly. I found myself in an old man’s lap.'] },
          { c: ['2. <b>Comma + coordinating conjunction</b> (FANBOYS: for, and, nor, but, or, yet, so)', 'The bus stopped suddenly, and I found myself in an old man’s lap.'] },
          { c: ['3. <b>Semicolon</b>', 'The bus stopped suddenly; I found myself in an old man’s lap.'] },
          { c: ['4. <b>Subordinating conjunction</b> (one main, one dependent idea)', 'When the bus stopped suddenly, I found myself in an old man’s lap.'] },
        ] },
        { k: 'p', x: 'All four on “Akosua cleans her kitchen every week she shines every pot and pan”: “…every week. She shines…” / “…every week, and she shines…” / “…every week; she shines…” / “When Akosua cleans her kitchen every week, she shines every pot and pan.”' },
        { k: 'box', title: 'The conjunctive-adverb trap', tone: 'red', blocks: [{ k: 'p', x: '<b>However, therefore, moreover, consequently, otherwise, then</b> are adverbs, not conjunctions, so a comma before them is still a splice: “The ward was full, however we admitted him” ✗. Use “The ward was full<b>;</b> however<b>,</b> we admitted him” or a full stop.' }] },
      ],
    },
    {
      id: 'er-parallel',
      title: 'Parallelism',
      kicker: 'Keep a series in step',
      blocks: [
        { k: 'term', name: 'Parallelism', def: 'Items in a series must be <b>balanced</b>: the same grammatical <b>category</b> (noun, verb…), <b>form</b> (number, aspect, voice) and <b>function</b>. Faulty parallelism mixes them.' },
        { k: 'table', head: ['Parallel ✓', 'Faulty ✗ → revised'], rows: [
          { c: ['Dancing, singing and writing are my hobbies. (all gerunds)', 'I prefer tennis, handball, and <b>playing golf</b>. → tennis, handball, and golf.'] },
          { c: ['To dance, to sing and to write are my hobbies. (all infinitives)', 'He works hard, he keeps calm and <b>well-liked</b>. → he works hard, keeps calm, and is well-liked.'] },
        ] },
        { k: 'p', x: 'Textbook extensions: <b>correlatives</b> must be followed by the same structure: “She is <b>not only</b> clever <b>but also</b> kind” (not “not only is clever but also kind”); “<b>Either</b> come early <b>or</b> stay late.” <b>Comparisons</b> must compare like with like: “The pulse of a child is faster than <b>that of</b> an adult” (not “than an adult”).' },
        { k: 'p', x: 'Past questions: “Supporters of Augustina appreciate <b>her songs, her passion for performance, and her good looks</b>” and “…<b>her ability to sing, her passion for performance, and her good looks</b>” are both parallel (three noun phrases); the options ending “…and <b>she has good looks</b>” mix a clause into the list. “Remember these three goals: <b>get</b> your pieces to the centre, <b>capture</b> the opposing pieces, and <b>attack</b> the opposing king” keeps three base-form imperatives; mixing in “capturing” or “attacking” breaks it.' },
        { k: 'p', x: 'Past question on reference: “The dean visited the First Lady <b>and wholeheartedly gave her a package</b>” is clear. “…and <b>she</b> wholeheartedly gave her a package” leaves <i>she</i> and <i>her</i> able to mean either woman (ambiguous reference).' },
      ],
    },
    {
      id: 'er-shift',
      title: 'Shift constructions',
      kicker: 'Stay consistent',
      blocks: [
        { k: 'term', name: 'Shift construction', def: 'A kind of faulty parallelism: a sudden, needless change in <b>person, number, tense, voice or mood</b> (or level of diction) that confuses the reader, often across a whole paragraph.' },
        { k: 'table', head: ['Shift in', 'Wrong', 'Revised'], rows: [
          { c: ['<b>Person</b> (I/we; you; he/she/they, one, a person, people)', 'If a person works hard, <b>you</b> can gain recognition.', 'If you work hard, you can… / If a person works hard, he or she can… / Best: If <b>people</b> work hard, <b>they</b> can gain recognition.'] },
          { c: ['<b>Number</b> (pronoun and antecedent)', 'If a student does not understand a lesson, <b>they</b> should consult the instructor.', 'If <b>students</b> do not understand…, they should… / A student who does not understand a lesson should consult the instructor.'] },
          { c: ['<b>Tense</b>', 'The virus <b>mutated</b> so quickly that it <b>develops</b> resistance. / The crime rate <b>continues</b> to fall, but experts <b>disagreed</b>.', 'The virus mutates … develops. / …continues … disagree.'] },
          { c: ['<b>Voice</b> (active: subject acts; passive: subject is acted on)', 'Newsgroups cover many topics. Forums for meeting people <b>are provided</b> in these groups. / Drought and windstorms made farming impossible and many families <b>were forced</b> to leave Okom village due to starvation.', '…cover many topics and <b>provide</b> forums… / …and <b>starvation forced</b> many families to leave Okom village.'] },
          { c: ['<b>Mood</b> (indicative: fact/question; imperative: command; subjunctive: condition/wish)', 'Cook the mixture slowly, and <b>you should stir</b> it until the sugar dissolves.', 'Cook the mixture slowly and <b>stir</b> it until the sugar dissolves.'] },
        ] },
        { k: 'p', x: 'Each point of view is fine on its own (“People should not drive when they have been drinking”, “One should not drive when one has been drinking”, “You should not drive when you have been drinking”); the error is <b>mixing</b> them. Which shift? “A bank owes more to its customers than <b>is held</b> in reserve” → voice (than <i>it holds</i>); “Then demand will exceed supplies, and banks <b>failed</b>” → tense; “a person’s losses are small because the government insures <b>your</b> deposits” → person.' },
        { k: 'box', title: 'Strictly speaking', tone: 'gold', blocks: [{ k: 'p', x: 'Modern dictionaries accept <b>singular “they”</b> for a person of unknown gender (“If a student is ill, they should report it”), and many style guides now prefer it. For this course, follow the lecture: keep the antecedent and pronoun the same number, most simply by making both plural.' }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Fragment = no subject, no finite verb, or no complete thought: dependent-word, -ing, added-details, missing-subject.',
          'Run-on = fused (no mark) or comma splice; fix with full stop, comma + FANBOYS, semicolon, or subordinator.',
          '“, however,” between two sentences is still a splice: use “; however,”.',
          'Parallel series: same category, form and function; correlatives followed by the same structure.',
          'No shifts in person, number, tense, voice or mood.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['A sentence fragment is', 'An incomplete thought punctuated as a sentence', ['Two sentences joined with only a comma', 'A sentence that mixes active and passive', 'A list whose items differ in form'], 'Missing subject, verb or thought.', 'Fragments'],
    ['“Although I had never played soccer before.” is a', 'Dependent-word fragment', ['Comma splice', 'Fused sentence', 'Missing-subject fragment'], 'Begins with although.', 'Fragments'],
    ['“Trying to find her dog.” written alone is an', '-ing fragment', ['Added-details fragment', 'Dependent-word fragment', 'Fused sentence'], 'No subject or full verb.', 'Fragments'],
    ['A fragment beginning with “such as” or “especially” is an', 'Added-details fragment', ['-ing fragment', 'Missing-subject fragment', 'Comma splice'], 'Lacks subject and verb.', 'Fragments'],
    ['“But hated writing thank-you notes.” is a', 'Missing-subject fragment', ['Added-details fragment', 'Fused sentence', 'Comma splice'], 'Subject cut off.', 'Fragments'],
    ['Which is a complete sentence?', 'The linguist has to travel next year.', ['The linguist knowing that she will travel next year.', 'The linguist to travel next year.', 'The linguist who will be travelling next year.'], 'Finite verb.', 'Fragments'],
    ['An -ing verb such as “having” on its own', 'Cannot be the main verb of a sentence', ['Is always the subject of the sentence', 'Makes the sentence a question', 'Must follow a semicolon'], 'Needs an auxiliary or a finite verb.', 'Fragments'],
    ['A run-on sentence joins independent clauses', 'Without proper punctuation or conjunction', ['With a subordinating conjunction', 'With a semicolon between them', 'With a full stop and a capital'], 'Definition.', 'Run-ons'],
    ['“The bus stopped suddenly I found myself in an old man’s lap” is a', 'Fused sentence', ['Comma splice', 'Fragment', 'Shift in voice'], 'No punctuation.', 'Run-ons'],
    ['“The bus stopped suddenly, I found myself in his lap” is a', 'Comma splice', ['Fused sentence', 'Dependent-word fragment', 'Shift in tense'], 'Comma only.', 'Run-ons'],
    ['Which does NOT correct a run-on?', 'Adding a comma alone between the clauses', ['Adding a full stop and a capital letter', 'Adding a semicolon between the clauses', 'Adding a comma and a FANBOYS conjunction'], 'That makes a splice.', 'Run-ons'],
    ['Which is correctly punctuated?', 'The ward was full; however, we admitted him.', ['The ward was full, however we admitted him.', 'The ward was full however, we admitted him.', 'The ward was full, however, we admitted him.'], 'Conjunctive adverb.', 'Run-ons'],
    ['FANBOYS stands for the', 'Coordinating conjunctions', ['Subordinating conjunctions', 'Conjunctive adverbs', 'Correlative conjunctions'], 'for, and, nor, but, or, yet, so.', 'Run-ons'],
    ['Parallelism requires items in a series to share the same', 'Category, form and function', ['Number of syllables in each', 'Position in the sentence', 'First letter or sound'], 'Balance.', 'Parallelism'],
    ['Which sentence is parallel?', 'I prefer tennis, handball and golf.', ['I prefer tennis, handball and playing golf.', 'I prefer tennis, to play handball and golf.', 'I prefer playing tennis, handball and to golf.'], 'Three nouns.', 'Parallelism'],
    ['Which sentence is correctly constructed?', 'Supporters appreciate her songs, her passion and her good looks.', ['Supporters appreciate her singing, performance, and she has good looks.', 'Supporters appreciate her ability to sing, her passion, and she has good looks.', 'Supporters appreciate her songs, her passion, and that she is good-looking.'], 'Parallel noun phrases.', 'Parallelism'],
    ['Which is parallel?', 'Get to the centre, capture pieces, and attack the king.', ['Get to the centre, capturing pieces, and attacking the king.', 'Getting to the centre, capture pieces, and attack the king.', 'Get to the centre, capture pieces, and attacking the king.'], 'Three imperatives.', 'Parallelism'],
    ['A shift construction is a type of', 'Faulty parallelism', ['Sentence fragment', 'Comma splice', 'Fused sentence'], 'Inconsistency.', 'Shifts'],
    ['“If a person works hard, you can gain recognition” shows a shift in', 'Person', ['Number', 'Tense', 'Mood'], 'a person → you.', 'Shifts'],
    ['“If a student does not understand, they should ask” shows a shift in', 'Number', ['Person', 'Voice', 'Mood'], 'Singular → plural.', 'Shifts'],
    ['“The virus mutated so quickly that it develops resistance” shows a shift in', 'Tense', ['Voice', 'Person', 'Number'], 'Past → present.', 'Shifts'],
    ['“Newsgroups cover many topics. Forums are provided in these groups” shows a shift in', 'Voice', ['Mood', 'Tense', 'Person'], 'Active → passive.', 'Shifts'],
    ['“Cook the mixture slowly, and you should stir it” shows a shift in', 'Mood', ['Voice', 'Number', 'Tense'], 'Imperative → indicative.', 'Shifts'],
    ['The most natural revision of “If a person works hard, you can gain recognition” is', 'If people work hard, they can gain recognition.', ['If a person works hard, they can gain recognition.', 'If a person work hard, you can gain recognition.', 'If people works hard, you can gain recognition.'], 'Plural throughout.', 'Shifts'],
  ],
};
