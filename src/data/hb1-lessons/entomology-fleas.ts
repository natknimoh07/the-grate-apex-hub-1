// Medical Entomology → Fleas and tungiasis. From "12. Ectoparasitic Insects Fleas and Lice
// [Autosaved].pptx", slides 2–25 (lice are taught in the "Lice & Bed Bugs" lesson).
// Explanations are in our own words; facts are the lecture's. The bank's topic review set
// asks the most basic flea facts; this quiz asks the others.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const entomologyFleas: Hb1Lesson = {
  id: 'entomology-fleas',
  order: 4.5, // after lice and bed bugs, the other ectoparasites
  title: 'Fleas and Tungiasis',
  summary: 'Lecture 12 · Siphonaptera: the flea body and life cycle, the jigger flea and tungiasis, the common fleas and the diseases they carry, and flea control',
  minutes: 12,
  source: '12. Ectoparasitic Insects Fleas and Lice [Autosaved].pptx, slides 2–25',
  quizId: 'fle',
  quizName: 'Topic Review — Fleas (lesson)',
  sections: [
    {
      id: 'fle-body',
      title: 'What a flea is',
      kicker: 'Order Siphonaptera',
      blocks: [
        { k: 'p', x: '<b>Siphonaptera</b> — from the Greek <i>siphon</i> + <i>apteron</i>, “the sucking wingless insects” — are small, <b>laterally flattened</b> (side to side), <b>wingless</b> insects with <b>large hind legs</b> for spectacular jumps. They are parasites of birds and mammals.', lede: 1 },
        { k: 'ul', items: [
          'All adults have <b>piercing and sucking</b> mouthparts and feed on <b>blood</b>; females need blood to lay eggs.',
          'An <b>angular, pointed head</b> and a telescoped, compressed thorax.',
          'They are pests because they suck blood, burrow into skin and carry diseases and parasites.',
        ] },
        { k: 'p', x: 'Being flattened sideways lets a flea slip between hairs or feathers; the big hind legs let it leap onto a passing host.' },
        { k: 'table', head: ['Adaptation (slides 5–7 notes)', 'What it does'], rows: [
          { c: ['<b>Short antennae</b> lying in grooves (<b>antennal fossae</b>) on the head', 'Carry mechanoreceptors and chemoreceptors for touch, smell, <b>heat, humidity and vibration</b>: the main host-finding organs; males also use them to pick up chemical signals from females. In males they are erectable and hold the female during mating'] },
          { c: ['<b>Hind legs and resilin</b>', 'Jumps of up to <b>150 times</b> the body length: the elastic protein <b>resilin</b> in the metathorax is compressed as the coxa flexes, then released like a spring'] },
          { c: ['<b>Sensilium (pygidium)</b> at the tail end', 'A sensory plate detecting air movement, vibration and temperature gradients; in some species it helps in copulation'] },
          { c: ['<b>Silken cocoon</b>', 'Pupae stay dormant for months and hatch in response to <b>vibration</b> from a host; the cocoon prevents drying, camouflages, and lengthens the flea’s life, which makes control hard'] },
        ] },
      ],
    },
    {
      id: 'fle-life',
      title: 'Life cycle',
      kicker: 'Egg → larva → pupa → adult',
      blocks: [
        { k: 'step', n: '1', title: 'Eggs', blocks: [{ k: 'p', x: 'Laid in the host’s nest or habitat; eggs laid on the host drop off.' }] },
        { k: 'step', n: '2', title: 'Larvae', blocks: [{ k: 'p', x: 'Minute, slender, whitish and <b>legless</b> (maggot-like), with a small black head, small antennae and <b>13</b> similar segments. Some cut out of the egg with an <b>egg tooth</b>. They develop <b>off the host</b>, avoid light and feed on organic debris; <b>3 instars</b>, 4–10 mm, over <b>10–21 days</b>.' }] },
        { k: 'step', n: '3', title: 'Pupa', blocks: [{ k: 'p', x: 'The mature larva spins a sticky <b>silk cocoon</b> (from its salivary or mandibular glands) that soon gets covered in debris — camouflage that also prevents drying out. The pupal period is <b>7–14 days</b>, depending on temperature, but pupae can stay <b>dormant for months</b>, extending the flea’s life.' }] },
        { k: 'step', n: '4', title: 'Adults', blocks: [{ k: 'p', x: 'Emerge only after a stimulus such as host <b>vibration or CO<sub>2</sub></b>. They are very active, move freely on and between hosts, and can survive <b>off the host for long periods</b>.' }] },
      ],
    },
    {
      id: 'fle-tunga',
      title: 'The jigger flea and tungiasis',
      kicker: 'Tunga penetrans',
      blocks: [
        { k: 'p', x: '<b>Tunga penetrans</b>, the jigger (chigger) flea, came from South America in the 17th century and is widespread in tropical Africa. It is very small (<b>under 1 mm</b>), with a compressed thorax, upturned rear and long serrated mouthparts, and <b>no genal or pronotal combs</b> and few bristles.', lede: 1 },
        { k: 'p', x: 'Males and newly emerged females feed like other fleas. After mating, the <b>female</b> — the infective stage — burrows <b>permanently</b> into soft skin, especially <b>between the toes and under the toenails</b>, leaving only the tip of her abdomen open to breathe, defecate and release eggs. The condition is <b>tungiasis</b>.' },
        { k: 'p', x: 'Her abdomen swells with eggs to the size of a <b>small pea (about 6 mm) in 8–10 days</b> — growth without a moult called <b>neosomy</b>, also seen in the sticktight hen flea and in ticks. Over 7–10 days she sheds <b>150–200 eggs</b>, which fall to the ground, and then dies in place.' },
        { k: 'h', x: 'Where jiggers live', l: 3 },
        { k: 'p', x: 'In sand <b>2–5 cm deep</b> — the surface is too hot for larvae and deeper sand has too little oxygen — on beaches, farms and stables, and in cracks, furniture and house walls. Reservoirs are <b>pigs and cattle</b> in rural areas and <b>dogs, cats and rats</b> in poor urban areas. Infestations drop in the <b>wet season</b>.' },
        { k: 'h', x: 'Effects and treatment', l: 3 },
        { k: 'p', x: 'Irritation begins as the female grows: inflammation, itching, ulcers and secondary bacterial infection (Staphylococcus, Streptococcus). Lesions on the feet range from painless to extremely painful; heavy infestation gives clusters of nodules with a <b>honeycomb</b> look. <b>Tetanus</b> and <b>gangrene</b> can follow, even amputation of toes. <b>Treatment:</b> remove the jigger with sterile forceps or a needle, clean with alcohol, dress the wound antiseptically, and give antibiotics if needed.' },
      ],
    },
    {
      id: 'fle-common',
      title: 'The common fleas (Pulicidae)',
      kicker: 'Pests and disease vectors',
      blocks: [
        { k: 'p', x: 'Pulicidae is a large, worldwide family. Most species attack both humans and animals but are named after their main host.', lede: 1 },
        { k: 'table', head: ['Flea', 'Importance'], rows: [
          { c: ['Cat flea (<i>Ctenocephalides felis</i>)', 'The commonest flea in houses'] },
          { c: ['Dog flea (<i>Ctenocephalides canis</i>)', 'Intermediate host of the dog tapeworm'] },
          { c: ['Human flea (<i>Pulex irritans</i>)', 'Biting pest of people'] },
          { c: ['Oriental rat flea (<i>Xenopsylla cheopis</i>)', 'Transmits <b>bubonic plague</b> and <b>murine typhus</b>'] },
          { c: ['Sticktight hen flea (<i>Echidnophaga gallacea</i>)', 'Clusters on chickens’ faces and combs like ticks; slows growth and laying'] },
          { c: ['Rabbit flea (<i>Spilopsyllus cuniculi</i>)', 'Carries the myxoma virus (myxomatosis), used to control rabbits in Australia and the UK'] },
        ] },
        { k: 'h', x: 'Control', l: 3 },
        { k: 'ul', items: [
          'Remove embedded females with a sterile fine needle; <b>wear shoes</b>.',
          'Insecticidal powder where pets sleep, every 2 weeks for about 6 months.',
          'Rodenticides, fumigation, repellents, and pesticides sprayed on the ground.',
          'Burning paper or dried leaves where fleas breed.',
        ] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Siphonaptera: wingless, laterally flattened, jumping blood-suckers; females need blood to lay eggs.',
        'Larvae legless, off the host, eat debris (3 instars, 10–21 days); pupa in silk cocoon 7–14 days, dormant for months; adults emerge on vibration or CO₂.',
        'Tunga penetrans: <1 mm; mated female burrows between toes/under nails; swells to 6 mm (neosomy); 150–200 eggs; tetanus, gangrene.',
        'Jiggers live 2–5 cm deep in sand; reservoirs pigs, cattle, dogs, cats, rats; fewer in the wet season.',
        'Rat flea: plague and murine typhus. Dog flea: dog tapeworm. Rabbit flea: myxomatosis.',
      ] },
    ],
  },
  quiz: [
    ['What do adult fleas feed on?', 'Blood, through piercing and sucking mouthparts', ['Plant sap, drawn up through strong chewing mouthparts', 'Organic debris in the host’s nest', 'Skin flakes and hair on the host'], 'Slide 3: all adults feed on blood.', 'Fleas'],
    ['Which describes the head of a flea?', 'Angular and pointed', ['Broad and rounded, wider than the thorax', 'Long and tube-shaped', 'Hidden under the thorax'], 'Slide 3.', 'Fleas'],
    ['Flea larvae are', 'Legless, slender and whitish', ['Six-legged and dark brown', 'Winged and very fast flying', 'Flat and attached to the host'], 'Slide 8: maggot-like.', 'Life cycle'],
    ['Where do flea larvae develop and feed?', 'Off the host, on organic debris', ['On the host, sucking blood', 'Inside the host’s gut', 'In fast-flowing streams'], 'Slide 8.', 'Life cycle'],
    ['How many larval instars does a flea have?', 'Three', ['One', 'Six', 'Twelve'], 'Slide 9.', 'Life cycle'],
    ['How long is the flea larval period?', '10–21 days', ['1–2 days', '6–12 months', '2–3 years'], 'Slide 9.', 'Life cycle'],
    ['How does the debris-covered silk cocoon help the flea pupa?', 'It prevents drying out and camouflages it', ['It lets the pupa feed on the host', 'It helps the pupa fly to a new host', 'It produces the vibration that wakes it'], 'Slide 8.', 'Life cycle'],
    ['How long is the flea pupal period when not dormant?', '7–14 days', ['1–2 hours', '1–2 days', '7–14 weeks'], 'Slide 10: depending on temperature.', 'Life cycle'],
    ['Which fleas can survive off the host for long periods?', 'Adults', ['Only eggs', 'Only larvae', 'None of the stages'], 'Slide 8.', 'Life cycle'],
    ['How big is Tunga penetrans?', 'Under 1 mm', ['About 5 mm', 'About 1 cm', 'About 3 cm'], 'Slide 11.', 'Tunga'],
    ['Where did Tunga penetrans come from?', 'South America, in the 17th century', ['South-East Asia, early in the 20th century', 'Europe, in the 12th century', 'Australia, in the 19th century'], 'Slide 11.', 'Tunga'],
    ['Which stage of Tunga penetrans burrows permanently into the skin?', 'The mated female', ['The newly emerged male', 'The larva', 'The pupa'], 'Slides 10–13: the female adult is the infective stage.', 'Tunga'],
    ['Where on the body does Tunga penetrans usually burrow?', 'Between the toes and under the toenails', ['The scalp and behind the ears', 'The inside of the mouth', 'The middle of the back'], 'Slides 11, 15.', 'Tunga'],
    ['How large does the embedded female jigger become?', 'The size of a small pea, about 6 mm', ['The size of a grain of sand', 'The size of a hen’s egg', 'The size of a fingernail, about 2 cm'], 'Slide 17: in about 8–10 days.', 'Tunga'],
    ['How many eggs does the embedded female jigger release?', '150–200', ['1–2', '10–20', '5,000–10,000'], 'Slide 17: over about 7–10 days.', 'Tunga'],
    ['At what depth do jigger fleas live in sand?', '2–5 cm below the surface', ['On the hot surface of the sand', '50–100 cm below the surface', 'Only in wet mud'], 'Slide 13: the surface is too hot and deep sand lacks oxygen.', 'Tunga'],
    ['When do jigger infestations fall?', 'During the wet season', ['During the dry season', 'During school holidays', 'They never change'], 'Slide 13.', 'Tunga'],
    ['Which animals are rural reservoirs of jiggers?', 'Pigs and cattle', ['Fish and frogs', 'Birds and bats', 'Snakes and lizards'], 'Slide 13; dogs, cats and rats in poor urban areas.', 'Tunga'],
    ['Severe tungiasis gives clusters of nodules with what appearance?', 'A honeycomb appearance', ['A bull’s-eye appearance', 'A crocodile-skin appearance', 'A target-like ring'], 'Slide 15.', 'Tunga'],
    ['Which serious complication of tungiasis can lead to death?', 'Tetanus', ['Malaria', 'River blindness', 'Sleeping sickness'], 'Slides 15, 17.', 'Tunga'],
    ['How is an embedded jigger treated?', 'Removed with forceps or a needle, then cleaned and dressed', ['Left alone until it falls out naturally', 'Covered with sand to suffocate it', 'Treated with ivermectin tablets only'], 'Slide 18.', 'Tunga'],
    ['Which flea is the commonest in houses?', 'The cat flea, Ctenocephalides felis', ['The rabbit flea, Spilopsyllus cuniculi', 'The hen flea, Echidnophaga gallacea', 'The jigger flea, Tunga penetrans'], 'Slide 20.', 'Common fleas'],
    ['The sticktight hen flea attaches to chickens', 'In dense, tick-like clusters on the face and comb', ['Only under the wings, one at a time', 'Inside the eggs before they hatch', 'Only on the feet, deep in the skin'], 'Slide 20.', 'Common fleas'],
    ['The rabbit flea carries the virus that causes', 'Myxomatosis', ['Bubonic plague', 'Murine typhus', 'Tungiasis'], 'Slide 20: used to control rabbits in Australia and the UK.', 'Common fleas'],
    ['How often should insecticidal powder be applied where pets sleep?', 'Every 2 weeks for about 6 months', ['Once a year only', 'Every day for 10 years', 'Only once, on the first day'], 'Slide 25.', 'Control'],
  ],
};
