// Behavioural Science → Personality. From "LECTURE 5 Personality updated.pptx" (Esther
// Ohenewa (Mrs), Clinical Psychologist, Department of Behavioural Sciences; SMS 154).
// Explanations are in our own words; theories, terms and examples are the lecture's.
// (Slide 57 names the Five Factor Model of McCrae and Costa but shows it as a picture.)
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const behaviouralPersonality: Hb1Lesson = {
  id: 'behavioural-personality',
  order: 3.7, // lecture 5
  title: 'Personality',
  summary: 'Lecture 5 · Mrs Esther Ohenewa · What personality is, Freud’s id, ego and superego, defence mechanisms and psychosexual stages, the neo-Freudians, humanistic, trait and social-cognitive views, and personality tests',
  minutes: 18,
  source: 'LECTURE 5 Personality updated.pptx (Mrs E. Ohenewa)',
  quizId: 'per',
  quizName: 'Topic Review — Personality',
  sections: [
    {
      id: 'per-define',
      title: 'What personality is',
      kicker: 'Definitions and components',
      blocks: [
        { k: 'p', x: '<b>Personality</b> is a person’s characteristic pattern of <b>thinking, feeling and acting</b> — the consistent, enduring and unique qualities that make you who you are, have been and will become.', lede: 1 },
        { k: 'table', head: ['Term', 'How it differs from personality'], rows: [
          { c: ['<b>Character</b>', 'Personal qualities that have been judged — desirable or undesirable'] },
          { c: ['<b>Temperament</b>', 'The hereditary part: sensitivity, activity level, prevailing mood, irritability, adaptability'] },
        ] },
        { k: 'p', x: 'Personality has three components: <b>cognitive</b> (thoughts), <b>affective</b> (feelings) and <b>behavioural</b> (actions). A personality theory is a system of concepts and principles that explains it — organising what we know about people, explaining their differences, exploring how they live, and finding how life can be improved.' },
        { k: 'table', head: ['Family of theories', 'Focus'], rows: [
          { c: ['Trait', 'Which traits make up personality and how they relate to behaviour'] },
          { c: ['Psychodynamic', 'Inner workings, especially internal conflicts'] },
          { c: ['Behaviouristic', 'The external environment, conditioning and learning'] },
          { c: ['Social learning', 'Socialisation, expectations and mental processes'] },
          { c: ['Humanistic', 'Private, subjective experience and personal growth'] },
        ] },
      ],
    },
    {
      id: 'per-freud',
      title: 'Freud: id, ego and superego',
      kicker: 'Psychoanalytic theory',
      blocks: [
        { k: 'p', x: 'Psychodynamic theories hold that many actions come from <b>hidden, unconscious</b> thoughts, needs and emotions. In Sigmund Freud’s psychoanalytic theory, unconscious motives, guilty secrets and conflicts between desire and duty have more power than our conscious intentions. They show in art, dreams, jokes, accidents and slips of the tongue (“Freudian slips”).', lede: 1 },
        { k: 'cards', items: [
          { title: 'Id', blocks: [{ k: 'p', x: 'Present at birth; innate instincts and urges; selfish, irrational, impulsive and totally unconscious. Runs on the <b>pleasure principle</b>. Holds two instincts: <b>Eros</b>, the life instinct (energy: <b>libido</b>), and <b>Thanatos</b>, the death instinct (aggressive, destructive urges).' }] },
          { title: 'Ego', blocks: [{ k: 'p', x: 'The “<b>executive</b>”: directs the id’s energy and referees between instinct and society. Runs on the <b>reality principle</b>; conscious and unconscious; delays action until it is practical; thinks, plans and decides.' }] },
          { title: 'Superego', blocks: [{ k: 'p', x: 'The judge or censor. Its <b>conscience</b> (morality and parental authority, the moral principle) punishes with guilt; its <b>ego ideal</b> (what parents approved of) rewards with pride.' }] },
        ] },
        { k: 'p', x: 'These are mental processes, not physical structures. Attracted to an acquaintance, the id says “go for it”, the superego says “never think that again”, and the ego might begin friendship and courtship to reduce the tension. Id impulses barely held in check cause <b>neurotic anxiety</b>; threats from the superego cause <b>moral anxiety</b>.' },
        { k: 'h', x: 'Levels of awareness', l: 3 },
        { k: 'p', x: '<b>Conscious</b> — everything you are aware of now. <b>Preconscious</b> — easily brought to awareness. <b>Unconscious</b> — repressed memories and emotions and the id’s drives.' },
      ],
    },
    {
      id: 'per-defence',
      title: 'Defence mechanisms and psychosexual stages',
      kicker: 'How the ego copes and how personality forms',
      blocks: [
        { k: 'p', x: '<b>Defence mechanisms</b> are ways the ego <b>unconsciously</b> protects itself against anxiety and unpleasant impulses.', lede: 1 },
        { k: 'table', head: ['Mechanism', 'What happens'], rows: [
          { c: ['Repression', 'A threatening idea, memory or emotion is blocked from consciousness'] },
          { c: ['Projection', 'Your own unacceptable feelings are attributed to someone else'] },
          { c: ['Displacement', 'Emotion (especially anger) is aimed at a safer target than the real one'] },
          { c: ['Regression', 'Going back to an earlier phase of development'] },
          { c: ['Denial', 'Refusing to admit that something unpleasant is happening'] },
          { c: ['Rationalisation', 'Making up acceptable excuses for anxiety-causing behaviour'] },
          { c: ['Reaction formation', 'Replacing an unacceptable urge with its opposite'] },
        ] },
        { k: 'h', x: 'Psychosexual stages', l: 3 },
        { k: 'p', x: 'Freud held that the core of personality forms <b>before age 6</b>. At each stage a different body area is the main source of pleasure; an unresolved conflict — from too much frustration or overindulgence — leaves a <b>fixation</b> that shows in adult traits.' },
        { k: 'table', head: ['Stage', 'Age', 'Fixation'], rows: [
          { c: ['Oral', '0–1', 'Frustration → <b>oral-aggressive</b> (hostile, exploits others); overfeeding → <b>oral-dependent</b> (passively wants attention)'] },
          { c: ['Anal', '1–3 (toilet training)', 'Lenient → <b>anal-expulsive</b> (messy, disorderly); strict → <b>anal-retentive</b> (stingy, obstinate, compulsive)'] },
          { c: ['Phallic', '3–6', 'Oedipus conflict (boys), Electra conflict (girls)'] },
          { c: ['Latency', '6 to puberty', 'Not really a stage: development is “on hold”'] },
          { c: ['Genital', 'Puberty on', 'Old conflicts reawaken; ends in mature capacity for love'] },
        ] },
        { k: 'box', title: 'Criticisms', tone: 'trap', blocks: [{ k: 'p', x: 'Freud overemphasised sexuality; his ideas are almost impossible to test scientifically; and latency as a sexless, unimportant period is hard to believe.' }] },
      ],
    },
    {
      id: 'per-neo',
      title: 'Neo-Freudians and humanistic theories',
      kicker: 'Revising Freud',
      blocks: [
        { k: 'p', x: 'Neo-Freudians — Karen Horney, Anna Freud, Otto Rank, Erich Fromm — kept Freud’s broad picture but revised parts; Alfred Adler, Harry Sullivan and Carl Jung broke away more completely.', lede: 1 },
        { k: 'table', head: ['Theorist', 'Key idea'], rows: [
          { c: ['<b>Alfred Adler</b>', 'We are social, not instinct-driven. The driving force is a <b>striving for superiority</b>, fuelled by feelings of <b>inferiority</b>; our way of compensating forms a <b>style of life</b> by about age 5. The <b>creative self</b>: we build our personalities through choices.'] },
          { c: ['<b>Karen Horney</b>', '<b>Basic anxiety</b> from feeling isolated and helpless in a hostile world. Health is a balance of moving <b>towards, away from and against</b> others; problems come from overusing one.'] },
          { c: ['<b>Carl Jung</b>', 'A <b>personal unconscious</b> and a <b>collective unconscious</b> shared by all humans, holding <b>archetypes</b>. We are driven by future goals too. The <b>persona</b> is the public “mask”.'] },
        ] },
        { k: 'h', x: 'Humanistic theory', l: 3 },
        { k: 'p', x: 'Humanists stress personal growth and peak experiences: you are largely the product of your choices. <b>Abraham Maslow</b> proposed a <b>hierarchy of needs</b> leading to <b>self-actualisation</b>, the continuous search for fulfilment. <b>Carl Rogers</b> put the <b>self-concept</b> at the centre: when it is positive we act positively; when it falls far short of the ideal self we are unhappy. <b>Conditions of worth</b> limit how we value ourselves; <b>unconditional positive regard</b>, genuineness and empathy help people grow.' },
      ],
    },
    {
      id: 'per-traits',
      title: 'Trait, social-cognitive and behaviourist views',
      kicker: 'Describing and explaining differences',
      blocks: [
        { k: 'p', x: 'A <b>trait</b> (Gordon Allport) is a stable, enduring quality shown in most situations — friendly, optimistic, cautious.', lede: 1 },
        { k: 'table', head: ['Kind of trait', 'Meaning'], rows: [
          { c: ['Common', 'Shared by most of a culture (competitiveness in America; rare among the Hopi)'] },
          { c: ['Cardinal', 'So pervasive the person is almost identified with it'] },
          { c: ['Central', 'The basic building blocks — about six can describe a person'] },
          { c: ['Secondary', 'Superficial: food preferences, attitudes, musical taste'] },
        ] },
        { k: 'h', x: 'Eysenck’s three factors (inherited, biological)', l: 3 },
        { k: 'ul', items: [
          '<b>Extraversion–introversion</b> — linked to cortical arousal; introverts have a <b>higher</b> resting arousal than extraverts.',
          '<b>Neuroticism–emotional stability</b> — linked to a more reactive <b>sympathetic nervous system</b>.',
          '<b>Psychoticism–impulse control</b> — aggression, impulsiveness, low empathy; linked to high <b>testosterone</b> and low <b>monoamine oxidase (MAO)</b>.',
        ] },
        { k: 'p', x: 'The <b>Five Factor Model</b> was formulated by Robert McCrae and Paul Costa (1999).' },
        { k: 'h', x: 'Social-cognitive and behaviourist views', l: 3 },
        { k: 'p', x: '<b>Albert Bandura</b>: we learn by observing and modelling others, and behaviour comes from the interaction of the person and their social context — <b>reciprocal determinism</b>. People choose environments that then shape them; personality shapes how we interpret events; and how we treat people shapes how they treat us. The <b>behaviourist</b> view sees personality as a collection of learned behaviour patterns, formed by reinforcement and punishment.' },
        { k: 'h', x: 'Assessing personality', l: 3 },
        { k: 'ul', items: [
          'Personal interviews and direct observation.',
          '<b>Objective tests:</b> Cattell’s <b>16PF</b> (16 basic traits) and the <b>MMPI-2</b> (first developed to help diagnose mental disorders).',
          '<b>Projective tests:</b> the <b>Rorschach</b> inkblots and the <b>Thematic Apperception Test (TAT)</b>, writing stories about ambiguous pictures.',
        ] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Personality: characteristic pattern of thinking, feeling and acting. Character = judged qualities; temperament = hereditary part.',
        'Id: pleasure principle, unconscious, Eros (libido) and Thanatos. Ego: reality principle, the executive. Superego: conscience (guilt) + ego ideal (pride).',
        'Defences: repression, projection, displacement, regression, denial, rationalisation, reaction formation.',
        'Stages: oral (0–1), anal (1–3), phallic (3–6), latency, genital.',
        'Adler: striving for superiority, inferiority, style of life. Horney: basic anxiety. Jung: collective unconscious, archetypes, persona.',
        'Maslow: self-actualisation. Rogers: self-concept, unconditional positive regard.',
        'Allport: cardinal, central, secondary traits. Eysenck: E–I, N, P. Bandura: reciprocal determinism.',
        'Objective: 16PF, MMPI-2. Projective: Rorschach, TAT.',
      ] },
    ],
  },
  quiz: [
    ['Personality is best defined as', 'A characteristic pattern of thinking, feeling and acting', ['The judged, desirable or undesirable qualities of a person', 'The inherited level of activity and mood present at birth', 'The score a person achieves on an intelligence test'], 'Slide 4.', 'Definitions'],
    ['The hereditary aspects of personality, such as activity level and mood, are called', 'Temperament', ['Character', 'Persona', 'Ego ideal'], 'Slide 5: character is personal qualities that have been judged.', 'Definitions'],
    ['The three components of personality are', 'Cognitive, affective and behavioural', ['Id, ego and superego only', 'Oral, anal and phallic', 'Conscious, preconscious and unconscious'], 'Slide 6: thoughts, feelings and actions.', 'Definitions'],
    ['Which theories place importance on conditioning and the external environment?', 'Behaviouristic theories', ['Humanistic theories', 'Psychodynamic theories', 'Trait theories'], 'Slide 9.', 'Theories'],
    ['The id operates on the', 'Pleasure principle', ['Reality principle', 'Moral principle', 'Principle of reciprocity'], 'Slide 15.', 'Freud'],
    ['The energy of the life instinct (Eros) is called', 'The libido', ['Thanatos', 'The persona', 'The archetype'], 'Slide 16: Thanatos is the death instinct.', 'Freud'],
    ['Which part of personality is described as the “executive”, guided by the reality principle?', 'The ego', ['The id', 'The superego', 'The ego ideal'], 'Slides 18–19.', 'Freud'],
    ['When the standards of the conscience are not met, the superego punishes you with', 'Guilt', ['Pride', 'Pleasure', 'Hunger'], 'Slide 20. Meeting the ego ideal brings pride (slide 21).', 'Freud'],
    ['Threats of punishment from the superego cause', 'Moral anxiety', ['Neurotic anxiety', 'Basic anxiety', 'Reality anxiety'], 'Slide 23: id impulses barely controlled cause neurotic anxiety.', 'Freud'],
    ['Material that can easily be brought to awareness is in the', 'Preconscious', ['Unconscious', 'Collective unconscious', 'Id'], 'Slide 24.', 'Freud'],
    ['Attributing your own unacceptable feelings to someone else is', 'Projection', ['Displacement', 'Repression', 'Regression'], 'Slide 25.', 'Defence mechanisms'],
    ['Shouting at your sibling after being scolded by your boss is', 'Displacement', ['Projection', 'Denial', 'Reaction formation'], 'Slide 26: anger is aimed at someone who is not the real object.', 'Defence mechanisms'],
    ['Replacing an unacceptable urge with its opposite is', 'Reaction formation', ['Rationalisation', 'Regression', 'Repression'], 'Slide 27.', 'Defence mechanisms'],
    ['According to Freud, the core of personality is formed', 'Before age 6', ['During adolescence', 'In early adulthood', 'Only after puberty'], 'Slide 28.', 'Psychosexual stages'],
    ['Harsh toilet training may produce which personality?', 'Anal-retentive', ['Anal-expulsive', 'Oral-dependent', 'Oral-aggressive'], 'Slide 31: obstinate, stingy or compulsive.', 'Psychosexual stages'],
    ['In which stage is psychosexual development “on hold”?', 'Latency', ['Phallic', 'Genital', 'Anal'], 'Slide 33.', 'Psychosexual stages'],
    ['Which is a criticism of Freud’s theory given in the lecture?', 'His concepts are almost impossible to verify scientifically', ['He paid too little attention to sexuality in development', 'He studied only adults and never children', 'He believed personality changes daily'], 'Slide 35.', 'Psychosexual stages'],
    ['Adler’s main driving force in personality is', 'A striving for superiority', ['The death instinct', 'Basic anxiety', 'The collective unconscious'], 'Slide 37: fuelled by feelings of inferiority.', 'Neo-Freudians'],
    ['Karen Horney’s “basic anxiety” arises when people feel', 'Isolated and helpless in a hostile world', ['Superior to everyone around them', 'Overindulged during the oral stage', 'Rewarded by their parents for good behaviour'], 'Slide 40.', 'Neo-Freudians'],
    ['Universal ideas and images in the collective unconscious are called', 'Archetypes', ['Personas', 'Schemas', 'Fixations'], 'Slide 41 (Jung).', 'Neo-Freudians'],
    ['In Jung’s theory, the “mask” or public self is the', 'Persona', ['Archetype', 'Ego ideal', 'Creative self'], 'Slide 43.', 'Neo-Freudians'],
    ['Maslow called the process of fully developing your potential', 'Self-actualisation', ['Reciprocal determinism', 'Positive regard', 'Sublimation'], 'Slide 46.', 'Humanistic'],
    ['According to Carl Rogers, the central feature of personality is the', 'Self-concept', ['Superego', 'Libido', 'Cardinal trait'], 'Slide 47.', 'Humanistic'],
    ['A trait so pervasive that a person is almost identified with it is a', 'Cardinal trait', ['Central trait', 'Secondary trait', 'Common trait'], 'Slides 51–52 (Allport).', 'Traits'],
    ['In Eysenck’s theory, introverts have', 'A higher resting level of cortical arousal than extraverts', ['A lower resting level of cortical arousal than extraverts', 'The same resting level of arousal as extraverts', 'No measurable cortical arousal at all'], 'Slide 54.', 'Traits'],
    ['Eysenck linked the psychoticism dimension to', 'High testosterone and low monoamine oxidase', ['Low testosterone and high monoamine oxidase', 'A less reactive sympathetic nervous system', 'High cortical arousal at rest'], 'Slide 56.', 'Traits'],
    ['Bandura’s term for the interacting influences of personality and environment is', 'Reciprocal determinism', ['Unconditional positive regard', 'Collective unconscious', 'Reaction formation'], 'Slide 58.', 'Social-cognitive'],
    ['The Rorschach inkblot test is', 'A projective test', ['An objective questionnaire', 'An intelligence test', 'A test of memory span'], 'Slide 64. The 16PF and MMPI-2 are objective tests.', 'Assessment'],
  ],
};
