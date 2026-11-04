// Behavioural Science → Motivation. From "LECTURE 6 Motivation lecture revised.pptx" (Sr Frances
// Emily Owusu-Ansah, KNUST). Rewrites the original database lesson behavioural-04 with the same
// id, so progress is kept; practises the course's Quiz 4 and the past questions on motivation.
// The facts are the lecture's (checked against the deck, 2026-11-04); the teaching text is in
// our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostx } from '@/data/hb1-lessons/pictures';

export const behaviouralMotivation: Hb1Lesson = {
  id: 'behavioural-04',
  order: 4,
  title: 'Motivation',
  summary: 'Lecture 6 · What motivation is; the biological basis of hunger (lateral and ventromedial hypothalamus, glucose and glucostats, the vagus, leptin and ghrelin); intrinsic and extrinsic motivation; biological and social motives; drive, incentive, behaviourist, humanistic (Maslow), arousal (Yerkes–Dodson) and evolutionary theories; applications',
  minutes: 26,
  source: 'LECTURE 6 Motivation lecture revised.pptx',
  quizId: 'bmot',
  quizName: 'Quiz · Motivation (lesson)',
  pastSets: ['s4'],
  pastTopics: ['motivation-and-emotion'],
  sections: numberFigures([
    {
      id: 'mot-what',
      title: 'What motivation is',
      kicker: 'Why are you in school? Why did you get up early?',
      blocks: [
        { k: 'term', name: 'Motives', def: 'The <b>needs, wants and interests</b> that propel organisms in certain directions: what makes us do what we do.' },
        { k: 'term', name: 'Motivation', def: 'The <b>force or energy that initiates, guides and maintains goal-oriented behaviour</b>, whether grabbing a snack to reduce hunger or enrolling in college for a degree. Its forces can be <b>biological, social, emotional or cognitive</b>.' },
        { k: 'ul', items: ['<b>Define</b> motivation and explain its biological basis.', '<b>Distinguish</b> intrinsic and extrinsic motivation, biological and social motives.', '<b>Compare</b> the theories of what drives motivation, and <b>apply</b> them.'] },
      ],
    },
    {
      id: 'mot-hunger',
      title: 'The biological basis: motivation to eat',
      kicker: 'Brain, blood sugar, gut and hormones',
      blocks: [
        { k: 'p', x: '<b>Hunger</b> is the sensation of a physiological need to eat; <b>satiety</b> is its absence, the feeling of fullness. Hunger does not come only from the stomach: the <b>brain</b>, <b>blood sugar and digestive factors</b>, and <b>hormones</b> all play a part.' },
        { k: 'table', head: ['Hypothalamic area', 'If stimulated', 'If damaged'], rows: [
          { c: ['<b>Lateral hypothalamus (LH)</b>: hunger centre', 'Feeling of <b>hunger</b>', 'Never feels hungry → <b>weight loss</b>'] },
          { c: ['<b>Ventromedial hypothalamus (VMH)</b>: satiety centre', 'Feeling of <b>fullness</b>', 'Never feels full → <b>weight gain</b>'] },
          { c: ['<b>Paraventricular nucleus (PVN)</b>', 'Also involved in regulating hunger', '—'] },
        ] },
        ostx('1806-the-hypothalamus-pituitary-complex.jpg', 1000, 581, 'The hypothalamus, at the base of the brain above the pituitary.', 'A tiny structure that regulates many survival needs, hunger among them.'),
        { k: 'cards', items: [
          { title: 'Glucose', blocks: [{ k: 'p', x: 'Much food becomes <b>glucose</b> in the blood. Activities that <b>lower</b> blood sugar increase hunger; those that <b>raise</b> it reduce hunger. <b>Glucostats</b>, neurons sensitive to glucose, monitor its level in the brain.' }] },
          { title: 'The gut', blocks: [{ k: 'p', x: 'After a meal the <b>vagus nerve</b> carries information about <b>stretching of the stomach wall</b>, signalling fullness.' }] },
          { title: 'Leptin', blocks: [{ k: 'p', x: 'Made by <b>fat cells</b>; <b>decreases appetite</b> and tells the brain energy stores are enough. More fat → more leptin, but many obese people are <b>resistant</b> to its signal. Levels vary with meal timing and sleep.' }] },
          { title: 'Ghrelin', blocks: [{ k: 'p', x: 'Released mainly by the <b>stomach</b>; <b>increases appetite</b>. It rises sharply <b>before</b> meals and falls for about <b>3 hours</b> after; it rises with under-eating and helps decide how quickly hunger returns.' }] },
        ] },
        { k: 'box', title: 'Memory hook', tone: 'recall', blocks: [{ k: 'p', x: '<b>Gh</b>relin = “<b>g</b>rowling stomach” (hunger); <b>Le</b>ptin = “<b>le</b>ave the table” (fullness). <b>L</b>ateral = <b>L</b>et’s eat; <b>V</b>entromedial = <b>V</b>ery full.' }] },
      ],
    },
    {
      id: 'mot-types',
      title: 'Types and range of motivation',
      kicker: 'From inside or from outside',
      blocks: [
        { k: 'table', head: ['', 'Intrinsic', 'Extrinsic'], rows: [
          { c: ['Definition', 'Doing an activity for the <b>pleasure or value</b> of the activity itself', 'Doing an activity for an <b>external goal</b>: to get a reward or avoid something unwanted'] },
          { c: ['Examples', 'Playing games, reading, listening to music', 'Working for money; studying to get an A; behaving to avoid a scolding'] },
          { c: ['Durability', 'The only path to <b>sustainable, long-term</b> motivation', 'Can become internalised, usually only with some intrinsic factors present'] },
        ] },
        { k: 'box', title: 'The four sources of intrinsic motivation', tone: 'formula', blocks: [{ k: 'ul', items: ['<b>Autonomy</b>: control over your own life and activities', '<b>Mastery</b>: getting better at what you do', '<b>Relatedness</b>: feeling connected to others', '<b>Purpose</b>: being part of something greater than yourself'] }] },
        { k: 'table', head: ['Motive', 'Origin', 'Examples'], rows: [
          { c: ['<b>Biological</b>', '<b>Bodily needs</b>, mostly essential to survival; shared by everyone', 'Hunger, thirst, temperature, sleep, rest'] },
          { c: ['<b>Social</b>', '<b>Social experience</b> and learning; unlimited in number, varying in strength between people', 'Achievement, affiliation, autonomy, dominance, order (we all need to eat, but not everyone needs neatness)'] },
        ] },
      ],
    },
    {
      id: 'mot-theories',
      title: 'Theories of motivation',
      kicker: 'Push from inside, pull from outside',
      blocks: [
        { k: 'p', x: 'Each theory is limited in scope, but together they explain motivation well: <b>drive, incentive, behaviourist, humanistic, arousal and evolutionary</b>.' },
        { k: 'cards', items: [
          { title: 'Drive (drive-reduction) theory', blocks: [{ k: 'p', x: 'A <b>drive</b> is an unpleasant internal state of <b>tension</b> that pushes us to reduce it. Based on <b>homeostasis</b>: hunger (drive) → eat → drive reduced, equilibrium restored. Good for biological motives. <b>Weakness</b>: cannot explain eating dessert when already full, which <b>adds</b> tension.' }] },
          { title: 'Incentive theory', blocks: [{ k: 'p', x: 'An <b>incentive</b> is an <b>external reward or goal</b> that motivates behaviour (promotion, an A, money, praise). People are <b>pulled</b> towards positive incentives and pushed away from negative ones. Emphasises the <b>environment</b> and downplays biology. Applications: bonuses, praise, training opportunities, promotion, pay rises, paid leave.' }] },
        ] },
        { k: 'table', head: ['', 'Drive theories', 'Incentive theories'], rows: [
          { c: ['Mechanism', 'Internal tension <b>pushes</b>', 'External stimuli <b>pull</b>'] },
          { c: ['Source of motivation', '<b>Inside</b> the organism', '<b>Outside</b> the organism'] },
        ] },
        { k: 'p', x: '<b>Behaviourist theory</b> puts the <b>environment</b> first and stresses <b>extrinsic</b> motivation: through <b>operant conditioning</b>, rewards and punishments shape future behaviour. <b>Humanistic theory</b> (Maslow) arranges needs in a <b>hierarchy</b>: basic <b>deficiency needs</b> below, <b>growth needs</b> above; each level must be met before the next motivates, and the ultimate motivator is <b>self-actualisation</b>.' },
        { k: 'h', x: 'Arousal theory and the Yerkes–Dodson law', l: 3 },
        { k: 'p', x: 'People act to keep an <b>optimum level of arousal</b>, which differs between individuals. Bored (too low), we seek stimulation (a night out); overstimulated, we seek calm (a walk, a nap). Unlike drive theory, the aim is to <b>maintain</b> an ideal level, not to reduce tension.' },
        { k: 'box', title: 'Yerkes–Dodson law', tone: 'formula', blocks: [{ k: 'p', x: 'Performance <b>rises with arousal up to an optimal point, then falls</b> (an inverted U). Students do best in exams when <b>moderately anxious</b>: too little and they are inattentive, too much and they cannot think. Athletes can fall apart under too much stress.' }] },
        { k: 'p', x: '<b>Evolutionary theory</b>: natural selection favours behaviours and motives that maximise <b>reproductive success</b>. They are instinctive <b>fixed action patterns</b>, performed the same way by all members of a species in response to a specific stimulus (so it is also called <b>instinct theory</b>): aggression, dominance, attraction, affiliation, achievement, curiosity. Example: dominance is more marked in males because it gives reproductive advantage.' },
        { k: 'box', title: 'Applications', tone: 'life', blocks: [{ k: 'ul', items: ['<b>Business</b>: commission pay and bonuses tied to performance, plus non-monetary rewards (incentive theory).', '<b>Classroom</b>: praise and prizes (one student winning eight prizes at an oath-swearing ceremony motivates others).', '<b>Health care</b>: meet patients’ basic needs first (Maslow), use rewards for adherence, keep anxiety moderate, build intrinsic motives (autonomy, mastery) for lasting lifestyle change.'] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Motivation: initiates, guides, maintains goal-directed behaviour.',
          'LH = hunger; VMH = satiety; glucostats; vagus senses stomach stretch; leptin ↓ appetite (fat); ghrelin ↑ appetite (stomach).',
          'Intrinsic (autonomy, mastery, relatedness, purpose) vs extrinsic.',
          'Drive pushes (inside); incentive pulls (outside); arousal keeps an optimum (Yerkes–Dodson inverted U); evolutionary = instincts for reproductive success.',
        ] }] },
      ],
    },
  ]),
  quiz: [
    ['Motivation is best defined as the force that', 'Initiates, guides and maintains goal-oriented behaviour', ['Stores memories of past rewards', 'Relays sensory information to the cortex', 'Produces hormones in stressful situations'], 'Forces may be biological, social, emotional or cognitive.', 'Definition'],
    ['The absence of hunger, the feeling of fullness, is', 'Satiety', ['Arousal', 'Homeostasis', 'Incentive'], 'Hunger is the need to eat.', 'Hunger'],
    ['Most of the biological feeling of hunger comes from the', 'Hypothalamus', ['Hippocampus', 'Cerebellum', 'Occipital lobe'], 'A tiny structure regulating survival needs.', 'Hunger'],
    ['Stimulating the lateral hypothalamus causes', 'Hunger', ['Satiety', 'Sleep', 'Thirst only'], 'Damage to it causes weight loss.', 'Hunger'],
    ['Damage to the ventromedial hypothalamus causes', 'Overeating and weight gain', ['Loss of hunger and weight loss', 'Loss of thirst', 'Insomnia'], 'The VMH is the satiety centre.', 'Hunger'],
    ['Neurons in the brain sensitive to blood glucose are called', 'Glucostats', ['Osmoreceptors', 'Baroreceptors', 'Chemoreceptors of the gut'], 'They monitor glucose fluctuations.', 'Hunger'],
    ['Information about stretching of the stomach wall is carried by the', 'Vagus nerve', ['Optic nerve', 'Phrenic nerve', 'Facial nerve'], 'It signals fullness.', 'Hunger'],
    ['Leptin is made by', 'Fat cells', ['The stomach', 'The pancreas', 'The pituitary'], 'It decreases appetite.', 'Hunger'],
    ['Ghrelin', 'Increases appetite and is made mainly by the stomach', ['Decreases appetite and is made by the fat cells', 'Is made by the hypothalamus to cause satiety', 'Rises for about three hours after every meal'], 'It rises before meals and falls after.', 'Hunger'],
    ['Many obese people have high leptin levels but', 'Do not respond to its signal', ['Produce no ghrelin', 'Have damaged lateral hypothalami', 'Cannot absorb glucose'], 'Leptin resistance.', 'Hunger'],
    ['Reading a novel purely because you enjoy it is', 'Intrinsic motivation', ['Extrinsic motivation', 'Drive reduction', 'Incentive motivation'], 'Done for its own sake.', 'Types'],
    ['Studying hard only to get an A is', 'Extrinsic motivation', ['Intrinsic motivation', 'A biological motive', 'Drive reduction'], 'An external goal.', 'Types'],
    ['The only path to sustainable, long-term motivation is', 'Intrinsic motivation', ['Extrinsic motivation', 'Negative incentives', 'High arousal'], 'Extrinsic motives need some intrinsic factors to last.', 'Types'],
    ['Which is NOT one of the four sources of intrinsic motivation?', 'Money', ['Autonomy', 'Mastery', 'Purpose'], 'The fourth is relatedness.', 'Types'],
    ['The need for achievement is a', 'Social motive', ['Biological motive', 'Drive', 'Fixed action pattern'], 'Social motives come from experience.', 'Range'],
    ['Biological motives differ from social motives in that they', 'Reflect survival needs shared by all', ['Are unlimited in number', 'Depend on each person’s experiences', 'Include the need for order and neatness'], 'Social motives vary between people.', 'Range'],
    ['A drive is', 'An internal state of tension', ['An external reward or goal', 'An optimal arousal level', 'A learned mental schema'], 'It pushes us to reduce it.', 'Theories'],
    ['Drive theory is based on the concept of', 'Homeostasis', ['Self-actualisation', 'Operant conditioning', 'Natural selection'], 'Restoring physiological equilibrium.', 'Theories'],
    ['Eating dessert after a heavy meal is hard to explain by', 'Drive theory', ['Incentive theory', 'Arousal theory', 'Behaviourist theory'], 'It adds rather than reduces tension.', 'Theories'],
    ['According to incentive theory, the source of motivation lies', 'Outside the organism', ['Inside the organism', 'In unconscious conflict', 'In the genes'], 'External rewards pull us.', 'Theories'],
    ['Which is an incentive?', 'A promotion at work', ['Hunger before a meal', 'Thirst on a hot day', 'A rise in body temperature'], 'An external reward or goal.', 'Theories'],
    ['The behaviourist theory of motivation stresses', 'Rewards and punishments from the environment', ['Unconscious sexual and aggressive desires', 'Self-actualisation and personal growth', 'Keeping an optimal level of arousal'], 'Operant conditioning.', 'Theories'],
    ['In Maslow’s theory the ultimate human motivator is', 'Self-actualisation', ['Safety and security', 'Esteem from others', 'Love and belonging'], 'At the top of the hierarchy.', 'Theories'],
    ['Arousal theory says people are motivated to', 'Keep an optimum level of arousal', ['Reduce all arousal to zero', 'Maximise arousal at all times', 'Avoid all outside stimulation'], 'Optimal levels differ between people.', 'Theories'],
    ['The Yerkes–Dodson law states that performance', 'Rises with arousal to a point, then falls', ['Rises steadily as arousal increases', 'Falls steadily as arousal increases', 'Is unrelated to arousal'], 'An inverted U.', 'Theories'],
    ['According to Yerkes–Dodson, students perform best in exams when', 'Moderately anxious', ['Completely relaxed', 'Extremely anxious', 'Bored'], 'Too little or too much anxiety hurts.', 'Theories'],
    ['Evolutionary theory explains motives in terms of', 'Reproductive success', ['External incentives', 'Drive reduction', 'The ideal self-concept'], 'Natural selection favours them.', 'Theories'],
    ['Stereotyped instinctive behaviours performed by all members of a species are', 'Fixed action patterns', ['Conditioned responses', 'Schemas', 'Social motives'], 'Evolutionary (instinct) theory.', 'Theories'],
    ['Tying bonuses to performance applies', 'Incentive theory', ['Drive theory', 'Arousal theory', 'Evolutionary theory'], 'External rewards.', 'Applications'],
  ],
};
