// Behavioural Science → Stress and Emotions. From "Stress for HB1.pptx" (Sr. Frances Emily
// Owusu-Ansah, PhD, Department of Behavioural Sciences, KNUST). Explanations are in our own
// words; definitions, signs and strategies are the lecture's. The bank's "Topic Review —
// Memory, Intelligence and Stress" set already asks six stress facts; this quiz asks others.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const behaviouralStress: Hb1Lesson = {
  id: 'behavioural-stress',
  order: 4.5, // after motivation, at the end of the course
  title: 'Stress and Emotions',
  summary: 'Sr. Dr F. E. Owusu-Ansah · Emotions and the brain, the mind–body connection, what stress is and what causes it, who is prone, signs and symptoms, and how to manage stress',
  minutes: 14,
  source: 'Stress for HB1.pptx (Sr. Dr F. E. Owusu-Ansah)',
  quizId: 'str',
  quizName: 'Topic Review — Stress and Emotions',
  sections: [
    {
      id: 'str-emotions',
      title: 'Emotions',
      kicker: 'Feelings, the body and the brain',
      blocks: [
        { k: 'p', x: 'An <b>emotion</b> is a complex mixture of feelings and states of being, usually with a <b>physiological response</b>, a <b>behaviour</b> and a <b>cognitive interpretation</b>.', lede: 1 },
        { k: 'ul', items: [
          'Emotions are responses to stimuli, and their nature depends on the stimulus — a <b>sudden</b> death brings a deeper sadness.',
          'They are tied to <b>motivation</b>: compassion motivates altruism; hatred motivates aggression.',
          'They follow <b>display rules</b>: how and where we show them depends on culture.',
        ] },
        { k: 'table', head: ['Class of emotion', 'Example from the lecture'], rows: [
          { c: ['<b>Universal (innate)</b> — fear, anger, pleasure', 'Infants on a “visual cliff” fear falling'] },
          { c: ['<b>Conditioned emotional responses</b> — learned; the basis of phobias', 'Fear of dogs after a bite'] },
          { c: ['<b>Social situation emotions</b> — socially (in)appropriate', 'A smile and a firm handshake at a gathering'] },
        ] },
        { k: 'p', x: 'The <b>limbic system</b> (thalamus, hypothalamus, hippocampus, amygdala) regulates emotion. The <b>amygdala</b>, in the temporal lobe just in front of the hippocampus, drives fear and stores approach–avoidance associations; the <b>reticular formation</b> of the brainstem sets arousal (alertness, wakefulness).' },
        { k: 'p', x: '<b>Psychoneuroimmunology</b> shows a two-way communication system linking the mind, the immune system and the rest of the body — so hopes and fears can change the body’s ability to defend itself.' },
      ],
    },
    {
      id: 'str-what',
      title: 'What stress is',
      kicker: 'Definition and mechanism',
      blocks: [
        { k: 'p', x: '<b>Stress</b> is a state of <b>imbalance</b> caused by an actual or perceived gap between the demands of the environment (<b>stressors</b>) and your capacity to cope — the “wear and tear” of daily challenges. Hans Selye borrowed the word from engineering, where it means the force that distorts or deforms an object.', lede: 1 },
        { k: 'step', n: '1', title: 'Fight or flight', blocks: [{ k: 'p', x: 'Sensing danger — real or imagined — the body’s defences switch on rapidly and automatically.' }] },
        { k: 'step', n: '2', title: 'Recovery', blocks: [{ k: 'p', x: 'When the danger passes, the nervous system calms the body: heart rate slows, blood pressure falls, balance returns.' }] },
        { k: 'step', n: '3', title: 'The problem', blocks: [{ k: 'p', x: 'The body barely tells real threats from daily hassles. An argument or a traffic jam can trigger the same response; switched on again and again, it leads to serious health problems.' }] },
        { k: 'p', x: 'Not all stress is bad: <b>eustress</b> protects, gives energy in emergencies and motivates; <b>distress</b> harms. Prolonged stress produces the <b>general adaptation syndrome (GAS)</b>: a shrunken thymus, enlarged adrenal glands, weight loss and gastric ulcers.' },
      ],
    },
    {
      id: 'str-causes',
      title: 'Causes, and who is prone',
      kicker: 'Where stress comes from',
      blocks: [
        { k: 'table', head: ['Source', 'Examples'], rows: [
          { c: ['Biological', 'Age-related body changes, illness, deficiencies'] },
          { c: ['Experiential', 'Life and work demands'] },
          { c: ['Social/cultural', 'Pressure to conform to behaviour you would not choose'] },
          { c: ['Lifestyle', 'Money, relationships, health'] },
          { c: ['Life transitions', 'Marriage, a new job, promotion, retirement'] },
          { c: ['Unhealthy attitudes', 'Fighting unavoidable change, wanting control over the uncontrollable, unrealistic goals, excessive worry'] },
          { c: ['Chemical/nutritional', 'Too much caffeine, salt or sugar'] },
          { c: ['Internally generated', 'Wanting everyone’s love and admiration, to be competent at all times, and events always to go your way'] },
        ] },
        { k: 'p', x: 'Nobody is exempt, but people differ: what stresses one person energises another. <b>Personality type</b> affects how we react, and negative emotions — <b>anger, resentment, hostility, irritability, unforgiveness</b> — predispose to stress-related illness, including heart problems.', lede: 1 },
        { k: 'box', title: 'Know your triggers', tone: 'recall', blocks: [{ k: 'p', x: 'Keep a log of each stressful episode: when and where, what you were doing and with whom, how you felt and what you thought, and what you then did. It shows your triggers and how you operate under pressure.' }] },
      ],
    },
    {
      id: 'str-signs',
      title: 'Signs and symptoms',
      kicker: 'How do I know I am stressed?',
      blocks: [
        { k: 'cards', items: [
          { title: 'Physical', blocks: [{ k: 'p', x: 'Neck and lower-back pain, headache or migraine, pounding heart, chest pain, rapid breathing, sweating, nausea and dizziness, frequent colds and infections, sleeping too little or too much, eating compulsively or not at all, weight change, tiredness, skin rashes, hair loss, diarrhoea or indigestion, erectile dysfunction or menstrual irregularities, blood and hormonal changes.' }] },
          { title: 'Cognitive and behavioural', blocks: [{ k: 'p', x: 'Alcohol or drug misuse, more smoking, more use of prescribed tranquillisers, irritability and loss of temper, absenteeism, unclear thinking, memory problems and poor judgement, seeing only the negative, constant worry, being unable to relax.' }] },
          { title: 'Emotional', blocks: [{ k: 'p', x: 'Falling performance, frustration, loneliness, too much concern about health, moodiness and withdrawal, unhappiness, an urge to cry (or being unable to), nervous tics, nervous laughter, feelings of rejection and failure.' }] },
        ] },
        { k: 'box', title: 'Beware', tone: 'trap', blocks: [{ k: 'p', x: 'Not noticing stress does not mean it is absent. Like a land mine, it can wait until it explodes as a heart attack — or cause a slow slide in health and quality of life. Unmanaged stress can end in <b>burnout</b>.' }] },
      ],
    },
    {
      id: 'str-manage',
      title: 'Managing stress',
      kicker: 'Strategies from the lecture',
      blocks: [
        { k: 'ul', ol: 1, items: [
          '<b>Awareness</b> of your stressors and your reactions.',
          '<b>Moderate your response</b>: slow deep breaths, relaxing tense muscles, stretching, pleasant images.',
          '<b>Support networks</b>: regular time with family, neighbours, colleagues and friends.',
          '<b>Balance</b> — do not overload life with work or study.',
          '<b>Time for yourself</b> and leisure every day.',
          '<b>Physical reserves</b>: rhythmic exercise such as walking 3–4 times a week, balanced meals, ideal weight, no nicotine or excess caffeine, regular sleep.',
          '<b>A positive attitude</b> — laughing at yourself heals.',
          '<b>Recognise what you can change</b>, and use goal setting and time management.',
          '<b>Beware of negativity</b>; <b>live today</b>; <b>be realistic</b>.',
        ] },
        { k: 'h', x: 'The 4 A’s', l: 3 },
        { k: 'table', head: ['', 'Meaning'], rows: [
          { c: ['<b>Avoid</b> unnecessary stress', 'Say “no”; tell “musts” from “shoulds”; steer clear of stressful people and situations'] },
          { c: ['<b>Alter</b> the situation', 'Be assertive about problems rather than bottling them up; compromise'] },
          { c: ['<b>Adapt</b> to the stressor', 'Reframe problems; focus on the positive; look at the big picture'] },
          { c: ['<b>Accept</b> what you can’t change', 'Stop fighting the inevitable; look for the positives'] },
        ] },
        { k: 'h', x: 'At study and work', l: 3 },
        { k: 'p', x: 'Use a planner and keep to it flexibly; make prioritised to-do lists; do the hardest work at your peak hours (your <b>bio-clock</b>); break big projects into small steps; <b>avoid procrastination</b>; and share or delegate difficult work. Never use alcohol, drugs or medication to numb stress.' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Emotion = feeling + physiological response + behaviour + cognitive interpretation; follows cultural display rules.',
        'Universal (fear, anger, pleasure), conditioned (phobias) and social situation emotions.',
        'Limbic system regulates emotion; amygdala → fear; reticular formation → arousal.',
        'Stress: imbalance between demands (stressors) and capacity to cope. Selye took the word from engineering.',
        'Eustress helps; distress harms. Prolonged stress → GAS: small thymus, big adrenals, weight loss, gastric ulcers.',
        'Anger, hostility and unforgiveness predispose to stress-related heart problems.',
        'The 4 A’s: Avoid, Alter, Adapt, Accept.',
      ] },
    ],
  },
  quiz: [
    ['An emotion, as defined in the lecture, includes', 'Feelings with physiological, behavioural and cognitive parts', ['Only a feeling, with no change in the body at all', 'Only the thoughts we have about other people', 'A reflex that is identical in every culture'], 'Slide 4.', 'Emotions'],
    ['How and where we show emotions depends on cultural norms. These are called', 'Display rules', ['Conditioned responses', 'Stressors', 'Archetypes'], 'Slide 5.', 'Emotions'],
    ['Altruism motivated by compassion shows that emotions are tied to', 'Motivation', ['Memory span', 'Intelligence', 'Temperament only'], 'Slide 5.', 'Emotions'],
    ['Infants on a table with an illusion of depth show fear of falling. Fear here is a', 'Universal (innate) emotion', ['Conditioned emotional response', 'Social situation emotion', 'Display rule'], 'Slide 6.', 'Emotions'],
    ['A smile and a firm handshake at a social gathering are examples of', 'Social situation emotions', ['Universal emotions', 'Conditioned emotional responses', 'Signs of distress'], 'Slide 6.', 'Emotions'],
    ['Which brain system regulates emotions?', 'The limbic system', ['The cerebellum', 'The basal ganglia', 'The spinal cord'], 'Slide 7: thalamus, hypothalamus, hippocampus and amygdala.', 'Emotions'],
    ['Which structure controls the level of arousal (alertness, wakefulness)?', 'The reticular formation', ['The amygdala', 'The hypothalamus of the limbic system', 'The thymus'], 'Slide 7.', 'Emotions'],
    ['The science linking the mind, the immune system and other body systems is', 'Psychoneuroimmunology', ['Psychoanalysis', 'Behaviour modification', 'Neuroendocrinology of growth'], 'Slide 8.', 'Mind–body'],
    ['Stress is defined as an imbalance between', 'Environmental demands and the capacity to cope', ['The hours of sleep and wakefulness in each day', 'The id and the superego', 'Food intake and energy use'], 'Slide 9.', 'Stress'],
    ['Hans Selye borrowed the term “stress” from', 'Engineering and physics', ['Music, painting and the fine arts', 'Botany and farming', 'Economics and banking'], 'Slide 11: the force that distorts or deforms an object.', 'Stress'],
    ['What happens once the danger has passed in a normal stress response?', 'The nervous system calms the body back to balance', ['Heart rate and blood pressure stay high for days', 'The adrenal glands shrink and stop working', 'The fight-or-flight response starts again'], 'Slide 15.', 'Stress'],
    ['Why can daily hassles such as traffic jams harm health?', 'The body barely distinguishes them from real threats', ['They switch off the stress response completely', 'They lower the blood pressure dangerously', 'They cause the thymus to enlarge'], 'Slide 15.', 'Stress'],
    ['Which is a symptom of the general adaptation syndrome?', 'Enlarged adrenal glands', ['An enlarged thymus', 'Weight gain', 'Shrunken adrenal glands'], 'Slide 16: shrunken thymus, enlarged adrenals, weight loss, gastric ulcers.', 'Stress'],
    ['Marriage, a new job and retirement are which cause of stress?', 'Life transitions', ['Chemical or nutritional causes', 'Biological causes', 'Internally generated stress'], 'Slide 14.', 'Causes'],
    ['Wanting to be thoroughly competent at all times is', 'Internally generated stress', ['A life transition such as retirement', 'A biological cause', 'Eustress'], 'Slide 14.', 'Causes'],
    ['Excessive caffeine, salt or sugar is which kind of cause of stress?', 'Chemical or nutritional', ['Social or cultural', 'Experiential', 'Life transition'], 'Slide 14.', 'Causes'],
    ['Which emotions are said to predispose to stress-related heart problems?', 'Anger, hostility and unforgiving tendencies', ['Joy, gratitude, compassion and deep contentment', 'Curiosity, interest and surprise', 'Calmness, contentment and patience'], 'Slide 17.', 'Who is prone'],
    ['Why keep a log of stressful episodes?', 'To recognise your triggers and how you react under pressure', ['To prove to your friends and your family that you are stressed', 'To replace the need for any rest or sleep', 'To diagnose a heart attack before it happens'], 'Slide 18.', 'Who is prone'],
    ['Which is a cognitive or behavioural sign of stress?', 'Increased irritability and loss of temper', ['A slower and steadier heart rate than usual', 'Better memory and judgement', 'Sleeping a normal amount'], 'Slide 22.', 'Signs'],
    ['The lecture compares unnoticed stress to', 'A land mine waiting to explode', ['A battery slowly recharging', 'A seed growing into a tree', 'A river running out to sea'], 'Slide 24.', 'Signs'],
    ['Unmanaged stress may lead to', 'Burnout', ['Eustress', 'Habituation', 'Self-actualisation'], 'Slide 33.', 'Signs'],
    ['Which exercise does the lecture recommend for building physical reserves?', 'Moderate rhythmic exercise such as walking, 3–4 times a week', ['Very heavy weightlifting every single day, without any rest days', 'No exercise at all, to save energy', 'Short sprints only once a month'], 'Slide 28.', 'Managing stress'],
    ['Saying “no” and telling “musts” from “shoulds” belongs to which of the 4 A’s?', 'Avoid unnecessary stress', ['Alter the situation', 'Adapt to the stressor', 'Accept what you cannot change'], 'Slide 31.', 'The 4 A’s'],
    ['Reframing a problem and focusing on the positive is which of the 4 A’s?', 'Adapt to the stressor', ['Avoid unnecessary stress', 'Alter the situation', 'Accept what you cannot change'], 'Slide 31.', 'The 4 A’s'],
    ['Respectfully telling others your concerns instead of bottling them up is', 'Altering the situation', ['Avoiding the stressor', 'Accepting the inevitable', 'Adapting by reframing'], 'Slide 31.', 'The 4 A’s'],
    ['Scheduling the hardest tasks for your hours of peak concentration is following your', 'Bio-clock', ['To-do list', 'Support network', 'Display rules'], 'Slide 32.', 'Managing stress'],
    ['Which does the lecture warn against as a way of coping with stress?', 'Using alcohol, drugs or medication to numb the pain', ['Talking problems through with trusted others', 'Breaking big projects into small steps', 'Setting aside some leisure time each day'], 'Slide 33.', 'Managing stress'],
  ],
};
