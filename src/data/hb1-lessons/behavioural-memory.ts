// Behavioural Science → Memory and Intelligence. From "LECTURE 4 Memory.pptx" (Esther
// Ohenewa (Mrs), Clinical Psychologist, Department of Behavioural Sciences; SMS 154).
// Explanations are in our own words; definitions, studies and examples are the lecture's.
// The bank's "Topic Review — Memory, Intelligence and Stress" set already asks the most
// basic facts; this quiz asks the others.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const behaviouralMemory: Hb1Lesson = {
  id: 'behavioural-memory',
  order: 3.6, // lecture 4
  title: 'Memory and Intelligence',
  summary: 'Lecture 4 · Mrs Esther Ohenewa · Encoding, storage and retrieval, the three stages of memory, forgetting and amnesia, improving memory, and theories and tests of intelligence',
  minutes: 18,
  source: 'LECTURE 4 Memory.pptx (Mrs E. Ohenewa)',
  quizId: 'mem',
  quizName: 'Topic Review — Memory and Intelligence (lesson)',
  sections: [
    {
      id: 'mem-processes',
      title: 'What memory is: encoding, storage, retrieval',
      kicker: 'The phenomenon of memory',
      blocks: [
        { k: 'p', x: '<b>Memory</b> is learning that has lasted over time — information that has been <b>stored</b> and can be <b>retrieved</b>. Memories are not fixed recordings: they <b>change</b> as they are stored and recalled.', lede: 1 },
        { k: 'step', n: '1', title: 'Encoding', blocks: [{ k: 'p', x: 'Changing information into a form the nervous system can process. To remember the treble-clef spaces F, A, C, E you might hold a mental picture of the letters (a <b>visual code</b>) or remember the word “face” (a <b>semantic code</b>, using meaning).' }] },
        { k: 'step', n: '2', title: 'Storage', blocks: [{ k: 'p', x: 'Keeping information over time — for seconds or much longer. How much is stored depends on the effort put into encoding and how important it is.' }] },
        { k: 'step', n: '3', title: 'Retrieval', blocks: [{ k: 'p', x: 'Getting stored information back. How easy it is depends on how well it was encoded and stored.' }] },
      ],
    },
    {
      id: 'mem-stages',
      title: 'The three stages of memory',
      kicker: 'Atkinson and Shiffrin (1968)',
      blocks: [
        { k: 'p', x: 'Richard Atkinson and Richard Shiffrin’s information-processing model passes information through three stores, each holding it longer than the last.', lede: 1 },
        { k: 'table', head: ['Stage', 'How long', 'Capacity and key facts'], rows: [
          { c: ['<b>Sensory memory</b>', 'Iconic (visual): up to 1 s; echoic (sound): 1–2 s', 'An exact record of incoming information; kept only if you pay attention, otherwise it decays'] },
          { c: ['<b>Short-term (working) memory</b>', 'A little under 20 s, no more than 30 s, without rehearsal', '7 ± 2 items (Miller); kept going by maintenance rehearsal; chunking fits more in'] },
          { c: ['<b>Long-term memory</b>', 'Extended periods', 'Limitless; kept by elaborative rehearsal; retrieval can suffer interference'] },
        ] },
        { k: 'h', x: 'Sensory memory', l: 3 },
        { k: 'p', x: '<b>Sperling (1960)</b> flashed a 3 × 4 grid of letters and numbers for a twentieth of a second. People usually reported only 4–5 items — but when a tone after the flash told them which row to report, they could give most of any row. So the whole image had been held briefly; it simply faded before it could all be read out.' },
        { k: 'p', x: 'Sensory memory <b>stops you being overwhelmed</b>, gives you <b>decision time</b>, and makes the world feel <b>continuous and stable</b>: iconic memory smooths images, and echoic memory lets you replay sounds long enough to recognise words.' },
        { k: 'h', x: 'Short-term (working) memory', l: 3 },
        { k: 'ul', items: [
          'Whatever is in your conscious mind at this moment.',
          '<b>Maintenance rehearsal</b> — repeating information to yourself without looking for meaning — keeps it there.',
          'In the counting-backwards experiment (CPQ, then 798, then count back in threes), recall fell to chance after <b>18 seconds</b> without rehearsal.',
          '<b>Chunking</b> (grouping items) lets you hold much more.',
          'The <b>primacy–recency effect</b>: items at the beginning and end of a list are recalled best.',
          'As <b>working memory</b> it is also a workspace, combining what just happened with information brought back from long-term memory.',
        ] },
        { k: 'h', x: 'Long-term memory', l: 3 },
        { k: 'cards', items: [
          { title: 'Tulving (1972)', blocks: [{ k: 'p', x: '<b>Semantic</b> memory: knowledge of language — words, rules, meanings. <b>Episodic</b> memory: your own life events, such as when you woke this morning.' }] },
          { title: 'Squire (1987)', blocks: [{ k: 'p', x: '<b>Declarative</b> memory (episodic + semantic) is called up consciously. <b>Procedural</b> memory shapes performance without conscious recall — skills.' }] },
        ] },
      ],
    },
    {
      id: 'mem-retrieval',
      title: 'Retrieving and forgetting',
      kicker: 'Why memories fail',
      blocks: [
        { k: 'p', x: 'The key to retrieval is <b>organisation</b>. There are three ways to show you remember something:', lede: 1 },
        { k: 'ul', items: [
          '<b>Recognition</b> — identifying something as experienced before (a multiple-choice question).',
          '<b>Recall</b> — reconstructing learned material yourself (an essay question).',
          '<b>Relearning</b> — learning again faster than someone of similar ability, because of earlier learning (a childhood poem).',
        ] },
        { k: 'p', x: 'Recall is <b>reconstructive</b>: memories may be altered by experience, attitudes and inference. <b>Confabulation</b> fills gaps with “memories” never stored; <b>schemas</b> — expectations built from past experience — shape what we reconstruct. <b>Eidetic memory</b> is remembering visual information very accurately after a short exposure. <b>State-dependent</b> recall is easier in the same physiological or emotional state, or setting, as at encoding.' },
        { k: 'h', x: 'Forgetting', l: 3 },
        { k: 'table', head: ['Cause', 'What happens'], rows: [
          { c: ['Encoding failure', 'What was never encoded can never be retrieved — through inattention (absent-mindedness) or with age'] },
          { c: ['Decay', 'Memory fades if it is not accessed from time to time'] },
          { c: ['Interference', '<b>Proactive</b>: an earlier memory blocks new learning. <b>Retroactive</b>: new learning blocks an earlier memory'] },
          { c: ['Retrieval failure', 'The information is stored but cannot be reached'] },
          { c: ['Motivated forgetting', 'Painful memories are repressed to protect the self-concept and reduce anxiety'] },
          { c: ['Brain damage', 'Structural forgetting — amnesia'] },
        ] },
      ],
    },
    {
      id: 'mem-brain',
      title: 'Memory, the brain and amnesia',
      kicker: 'Where memories live',
      blocks: [
        { k: 'p', x: 'Learning may change the structure of nerve cells, or their molecules and chemistry. Different structures handle different memories:', lede: 1 },
        { k: 'ul', items: [
          '<b>Striatum</b> — forming procedural memories.',
          '<b>Hippocampus and amygdala</b> — declarative memories; the hippocampus for long-term memory.',
          '<b>Thalamus</b> — processing sensory information.',
        ] },
        { k: 'p', x: 'Irreversible conditions that impair memory include <b>Alzheimer’s disease</b>, <b>dementia</b> (impaired memory, reasoning and judgement) and <b>amnesia</b>. Amnesia can follow a blow to the head, brain damage, drugs or severe psychological stress.' },
        { k: 'table', head: ['Type of amnesia', 'Meaning'], rows: [
          { c: ['Retrograde', 'Cannot recall past information'] },
          { c: ['Anterograde', 'Cannot hold on to new information'] },
          { c: ['Transient global', 'Temporary retrograde and anterograde amnesia together'] },
          { c: ['Dissociative (psychogenic)', 'Blocking out personal information and a trauma right after it happens'] },
          { c: ['Infantile', 'Few declarative memories from about age 2–3'] },
        ] },
      ],
    },
    {
      id: 'mem-improve',
      title: 'Improving memory',
      kicker: 'Study skills that work',
      blocks: [
        { k: 'ul', ol: 1, items: [
          '<b>Meaningfulness and association</b> — elaborative rehearsal links new material to what you already know.',
          '<b>Mnemonic devices</b> — associations that help store and retrieve information.',
          '<b>Recitation</b> — summarising aloud while learning, which practises retrieval.',
          '<b>Overlearning</b> — keep studying after you can recall it once without error.',
          '<b>Spaced practice</b> — short sessions with brief rests.',
          '<b>Retrieval cues</b> — refresh your memory by activating them.',
          '<b>Minimise interference.</b>',
          '<b>Retrieval practice</b> — test yourself.',
        ] },
        { k: 'box', title: 'For practice', tone: 'life', blocks: [{ k: 'p', x: 'Knowing how memory works helps you give health advice that patients will actually remember, sharpens your own study and job performance, and informs intervention plans.' }] },
      ],
    },
    {
      id: 'mem-intelligence',
      title: 'Intelligence and its tests',
      kicker: 'Views of intelligence',
      blocks: [
        { k: 'p', x: 'Most see intelligence as the ability to acquire new ideas and behaviour and to adapt to new situations; others define it as whatever makes you do well on intelligence tests and in school.', lede: 1 },
        { k: 'table', head: ['Theory', 'Claim'], rows: [
          { c: ['Spearman (1904), two-factor', '<b>g</b> — general intelligence for complex mental work; <b>s</b> — specific abilities such as verbal or maths skill'] },
          { c: ['Thurstone (1938)', 'No general g; <b>seven primary mental abilities</b>: verbal comprehension, numerical ability, spatial relations, perceptual speed, word fluency, memory, inductive reasoning'] },
          { c: ['Gardner (1983, 1999)', '<b>Eight intelligences</b> (linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal, naturalist) and a possible ninth, existential'] },
          { c: ['Sternberg (1985), triarchic', 'Analytical, creative and practical thinking'] },
          { c: ['Emotional intelligence', 'Perceiving and expressing emotions, using them in thinking, understanding them, and regulating them for growth'] },
        ] },
        { k: 'p', x: 'An <b>intelligence test</b> measures mental aptitudes and compares them with other people’s using numerical scores. <b>Achievement tests</b> show what you have learned; <b>aptitude tests</b> predict what you will be able to learn. <b>Alfred Binet</b>, with Theodore Simon, built the first useful test; today’s include the <b>Stanford–Binet</b> scale and the <b>Wechsler</b> tests — WAIS-R for adults, WISC-III for ages 6–16 and WPPSI-R for ages 4–6½.' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Encoding (visual or semantic codes) → storage → retrieval.',
        'Sensory (iconic ≤1 s, echoic 1–2 s) → short-term (7 ± 2, <20–30 s) → long-term (limitless).',
        'Maintenance rehearsal keeps STM; elaborative rehearsal builds LTM. Chunking; primacy–recency effect.',
        'Episodic vs semantic (Tulving); declarative vs procedural (Squire).',
        'Recognition, recall, relearning. Proactive: old blocks new; retroactive: new blocks old.',
        'Striatum → procedural; hippocampus and amygdala → declarative. Retrograde = past lost; anterograde = new not kept.',
        'Spearman g + s; Thurstone 7 abilities; Gardner 8 (+ existential); Sternberg analytical, creative, practical.',
      ] },
    ],
  },
  quiz: [
    ['Memory is described in the lecture as', 'Learning that has persisted over time and can be retrieved', ['A fixed recording that never changes once stored', 'Information that is lost as soon as it is first received by the senses', 'The ability to solve problems without any learning'], 'Slide 4: memories also change as they are stored and retrieved.', 'Memory'],
    ['Keeping a mental picture of the letters F, A, C, E is using', 'A visual code', ['A semantic code', 'An acoustic code', 'A procedural code'], 'Slide 5. Remembering the word “face” would be a semantic code.', 'Memory'],
    ['How much information is stored depends on', 'The effort put into encoding and its importance', ['The time of day the information was received', 'The number of senses that are working', 'The person’s height and body weight'], 'Slide 7.', 'Memory'],
    ['Echoic (auditory) sensory memory lasts about', '1 or 2 seconds', ['A twentieth of a second', '20 to 30 seconds', 'Several minutes'], 'Slide 11.', 'Sensory memory'],
    ['Which is a function of sensory memory?', 'It prevents you from being overwhelmed', ['It stores your life history for years', 'It holds seven items for half a minute', 'It controls your learned motor skills'], 'Slide 15: it also gives decision time and makes the world continuous and stable.', 'Sensory memory'],
    ['Repeating information to yourself without looking for meaning is', 'Maintenance rehearsal', ['Elaborative rehearsal', 'Chunking', 'Overlearning'], 'Slide 18.', 'Short-term memory'],
    ['In the counting-backwards experiment, recall fell to chance after about', '18 seconds without rehearsal', ['2 seconds without rehearsal', '5 minutes without rehearsal', '1 hour without rehearsal'], 'Slides 19–20.', 'Short-term memory'],
    ['Recalling the first and last items of a list best is the', 'Primacy–recency effect', ['Serial chunking effect', 'Sperling effect', 'Interference effect'], 'Slide 21.', 'Short-term memory'],
    ['Short-term memory is also called', 'Working memory', ['Episodic memory', 'Iconic memory', 'Procedural memory'], 'Slide 22.', 'Short-term memory'],
    ['Knowledge of language, its rules, words and meanings, is', 'Semantic memory', ['Episodic memory', 'Procedural memory', 'Sensory memory'], 'Slide 24 (Tulving, 1972).', 'Long-term memory'],
    ['According to Squire, declarative memory includes', 'Episodic and semantic memory', ['Procedural and sensory memory', 'Iconic and echoic memory', 'Only motor skills'], 'Slide 25.', 'Long-term memory'],
    ['Identifying something as experienced before (as in multiple choice) is', 'Recognition', ['Recall', 'Relearning', 'Confabulation'], 'Slide 26.', 'Retrieval'],
    ['Conceptual frameworks of expectations built from past experience are', 'Schemas', ['Engrams', 'Chunks', 'Mnemonics'], 'Slide 28.', 'Retrieval'],
    ['Recalling information more easily in the same mood or setting as when it was learned is', 'State-dependent learning', ['Eidetic memory', 'Proactive interference', 'Infantile amnesia'], 'Slide 29.', 'Retrieval'],
    ['Learning new material makes you forget something learned earlier. This is', 'Retroactive interference', ['Proactive interference', 'Encoding failure', 'Motivated forgetting'], 'Slide 31.', 'Forgetting'],
    ['Repressing painful memories to protect the self-concept is', 'Motivated forgetting', ['Encoding failure', 'Decay', 'Retrograde amnesia'], 'Slide 33.', 'Forgetting'],
    ['Which structure is linked with forming procedural memories?', 'The striatum', ['The thalamus', 'The hippocampus', 'The amygdala'], 'Slide 35.', 'Memory and the brain'],
    ['Inability to recall past information is', 'Retrograde amnesia', ['Anterograde amnesia', 'Infantile amnesia', 'Eidetic memory'], 'Slide 39.', 'Amnesia'],
    ['A temporary combination of retrograde and anterograde amnesia is', 'Transient global amnesia', ['Dissociative amnesia', 'Infantile amnesia', 'Dementia'], 'Slide 40.', 'Amnesia'],
    ['Studying further after you can recall material once without error is', 'Overlearning', ['Spaced practice', 'Recitation', 'Chunking'], 'Slide 43.', 'Improving memory'],
    ['Summarising aloud while you learn is', 'Recitation', ['Overlearning', 'Maintenance rehearsal', 'Interference'], 'Slide 43: it makes you practise retrieval.', 'Improving memory'],
    ['Short study sessions with brief rest periods are called', 'Spaced practice', ['Massed practice', 'Overlearning', 'Chunking'], 'Slide 44.', 'Improving memory'],
    ['Which is one of Thurstone’s seven primary mental abilities?', 'Inductive reasoning', ['Existential thinking', 'Musical ability', 'Practical intelligence'], 'Slides 49–51.', 'Intelligence'],
    ['Which intelligence did Gardner add as a possible ninth?', 'Existential intelligence', ['Emotional intelligence', 'Naturalist intelligence', 'General intelligence (g)'], 'Slide 55.', 'Intelligence'],
    ['An aptitude test', 'Predicts what you will be able to learn', ['Reflects only what you have already learnt in class', 'Measures only your memory span', 'Compares your height with others'], 'Slide 60: an achievement test reflects what you have learnt.', 'Intelligence tests'],
    ['Which Wechsler test is for children aged 6 to 16?', 'WISC-III', ['WAIS-R', 'WPPSI-R', 'Stanford–Binet'], 'Slide 62.', 'Intelligence tests'],
    ['The first useful intelligence test was developed by', 'Alfred Binet and Theodore Simon', ['Charles Spearman and L. L. Thurstone', 'Howard Gardner and Robert Sternberg', 'Atkinson and Shiffrin'], 'Slide 61.', 'Intelligence tests'],
  ],
};
