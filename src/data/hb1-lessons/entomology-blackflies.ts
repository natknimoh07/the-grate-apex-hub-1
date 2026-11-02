// Medical Entomology → Blackflies and onchocerciasis. From "7. BLACKFLIES.pptx" (R. C.
// Brenya). Explanations are in our own words; facts are the lecture's. The bank's "Topic
// Review — Blackflies, Fleas, IVM and Malaria Control" set asks the basic blackfly facts;
// this quiz asks the others.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const entomologyBlackflies: Hb1Lesson = {
  id: 'entomology-blackflies',
  order: 5.5, // with the other biting flies, before tsetse flies and midges
  title: 'Blackflies and River Blindness',
  summary: 'R. C. Brenya · Simulium: adult, egg, larva and pupa, life in fast streams, bites and black fly fever, onchocerciasis, and its control in Ghana and West Africa',
  minutes: 13,
  source: '7. BLACKFLIES.pptx (R. C. Brenya)',
  quizId: 'blk',
  quizName: 'Topic Review — Blackflies (lesson)',
  sections: [
    {
      id: 'blk-adult',
      title: 'The adult blackfly',
      kicker: 'Order Diptera · Nematocera · Simuliidae',
      blocks: [
        { k: 'p', x: 'Blackflies belong to the family <b>Simuliidae</b> (12 genera), for example <b>Simulium damnosum</b>. Adults are small (about <b>1.5 mm</b>), stout, <b>hump-backed</b> and black, yellow or grey.', lede: 1 },
        { k: 'table', head: ['Part', 'Features'], rows: [
          { c: ['Head', 'Short, stout, cigar-shaped antennae of 8–9 segments; large eyes — <b>females dichoptic</b> (eyes apart), <b>males holoptic</b> (eyes meet); toothed, dagger-like maxillae and mandibles; 5-segmented palps hang down'] },
          { c: ['Thorax', 'The hump is a well-developed mesothorax with flat-lying hairs; short stout legs; wings short, clear, without scales or hairs, <b>crossed like closed scissors</b> at rest'] },
          { c: ['Abdomen', 'Short and squat, 9 segments, very flexible — so it can hold a large blood meal'] },
        ] },
        { k: 'p', x: '<b>Only females bite.</b> The labrum, mandibles and maxillae stretch and cut the skin to make a <b>pool of blood</b>, which is sucked up (supported by the labium and fleshy labella), with powerful anticoagulants. Males feed on nectar.' },
      ],
    },
    {
      id: 'blk-life',
      title: 'Life cycle in fast-flowing streams',
      kicker: 'Egg → larva → pupa → adult',
      blocks: [
        { k: 'p', x: 'Everything depends on <b>swift, well-aerated water</b> — torrents, rapids and trickles. Adults swarm near such streams at certain times of year.', lede: 1 },
        { k: 'step', n: '1', title: 'Eggs', blocks: [{ k: 'p', x: 'Triangular, pale at first then brown-black, coated in a sticky jelly. The female may go partly or wholly under water to lay <b>150–800</b> eggs in sticky masses at <b>communal oviposition sites</b> (in water, on plants or rocks). They hatch in <b>1–4 days</b> (or pause in diapause).' }] },
        { k: 'step', n: '2', title: 'Larvae', blocks: [{ k: 'p', x: 'Sedentary, attached by a <b>posterior hook circlet</b> and silk, and moving by looping. Whitish-green, <b>Indian-club shaped</b>, with large foldable <b>cephalic fans</b> for <b>filter feeding</b>, a thoracic and an abdominal proleg, and <b>anal gills</b> for breathing. They lie parallel to the current, pass 6–8 instars over 1–2 weeks, and show dark <b>gill spots</b> when mature.' }] },
        { k: 'step', n: '3', title: 'Pupa', blocks: [{ k: 'p', x: 'Inside a brown, <b>slipper-shaped</b> cocoon whose open end faces <b>downstream</b>. Its filamentous respiratory gills identify the species. The stage lasts <b>2–6 days</b>; the adult emerges in a <b>bubble of air</b>, and empty pupal cases show which species breed in a stream.' }] },
        { k: 'step', n: '4', title: 'Adults', blocks: [{ k: 'p', x: 'Bite exposed skin by <b>day</b> or at dusk and dawn, finding hosts by <b>sight and odour</b>. Fed females rest in vegetation for <b>2–3 days</b>. Adults live <b>2 weeks to 3 months</b>, fly <b>60–200 km</b>, and in the tropics breed all year, most in the rainy season.' }] },
      ],
    },
    {
      id: 'blk-medical',
      title: 'Medical importance and onchocerciasis',
      kicker: 'Bites and river blindness',
      blocks: [
        { k: 'p', x: 'Relentless, painful bites cause swelling, itching (pruritus) for days and allergic reactions; people cannot go outside, so work and leisure suffer. <b>Black fly fever</b> brings headache, nausea, swollen lymph nodes, aching joints and dermatitis. Animals can die of <b>toxaemia</b> from inhaling flies.', lede: 1 },
        { k: 'p', x: '<b>Onchocerciasis</b> — river blindness, Roble’s disease — is caused by the filarial worm <b>Onchocerca volvulus</b>, and <b>blackflies are its only vector</b>.' },
        { k: 'cards', items: [
          { title: 'In the fly', blocks: [{ k: 'p', x: 'Microfilariae taken in with blood go from the stomach to the <b>thoracic muscles</b>, moult twice, then move to the head and proboscis to reach a new host — in <b>6–13 days</b>.' }] },
          { title: 'In man', blocks: [{ k: 'p', x: 'Adult worms lie coiled in <b>subcutaneous nodules</b>, producing <b>700–1000 microfilariae a day</b>. Microfilariae sit in the peripheral tissues by day, where day-biting flies pick them up. Adults live <b>15 years</b> and produce microfilariae for 9; microfilariae live 2 years.' }] },
        ] },
        { k: 'p', x: '<b>Effects:</b> eye damage and optic atrophy — the world’s <b>second leading cause of blindness</b>; onchocercal dermatitis with intense itching, fibrosis and patchy pigment, thick then loose skin (“<b>crocodile, lizard or leopard skin</b>”, hanging groin); weight loss, debility, even suicide. <b>Diagnosis:</b> a skin snip incubated in saline.' },
      ],
    },
    {
      id: 'blk-control',
      title: 'Control',
      kicker: 'From personal protection to a 20-year programme',
      blocks: [
        { k: 'ul', items: [
          '<b>Personal protection against adults:</b> repellents such as <b>DEET</b>, long sleeves and trousers by day, face nets under wide-brimmed hats, <b>permethrin-treated</b> clothing, sprays round houses, and screens in good repair.',
          '<b>Larvae are the most vulnerable stage:</b> larvicides (organophosphates, organochlorines) and spraying vegetation.',
        ] },
        { k: 'p', x: 'The <b>Onchocerciasis Control Programme (OCP)</b> sprayed larvicide <b>upstream</b> along 20,000 km of waterways — in Ghana the Pra, Pru, Offin, Bui and Volta — using <b>Abate</b> (an organophosphate) and <b>Bacillus thuringiensis</b>, with aerial larviciding in the north and centre, in 7–11 West African countries. Because adult worms live 15 years in man, it ran <b>20 years (1975–1995)</b>.', lede: 1 },
        { k: 'p', x: 'Since then over <b>100 million ivermectin</b> tablets have been given in Ghana (one tablet per person); over 30 million people are protected, 1.5 million have recovered and 2.5 million hectares are free for farming. The <b>African Programme for Onchocerciasis Control (APOC, 1995)</b> set up <b>community-directed treatment with ivermectin (CDTi)</b> in 20 African countries with 80% of the world’s disease. The aim is elimination, not just control: the disease harms health, social life and productivity, and keeps people poor.' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Simuliidae (Simulium damnosum): small, hump-backed; females dichoptic, males holoptic; wings crossed like scissors at rest.',
        'Only females bite (pool feeders); males take nectar.',
        'Need swift, aerated streams. Eggs 150–800, communal sites; larvae filter-feed with cephalic fans, hook circlet, anal gills; pupa in slipper-shaped cocoon facing downstream.',
        'Adults bite by day, fly 60–200 km, live 2 weeks–3 months.',
        'Onchocerca volvulus: only vector blackflies; 6–13 days in the fly; adults 15 years in man; 2nd cause of blindness; skin snip in saline.',
        'OCP 1975–1995 (Abate, B. thuringiensis upstream); ivermectin; APOC (1995) CDTi in 20 countries.',
      ] },
    ],
  },
  quiz: [
    ['How long is an adult blackfly?', 'About 1.5 mm', ['About 15 mm', 'About 5 cm', 'About 0.1 mm'], 'Slide 3.', 'Adult'],
    ['How many genera does the family Simuliidae contain, according to the lecture?', '12', ['2', '50', '200'], 'Slide 3.', 'Adult'],
    ['How does a resting blackfly hold its wings?', 'Crossed over like a pair of closed scissors', ['Spread out flat at right angles to the body', 'Folded like a tent over the abdomen', 'Held straight up above the thorax'], 'Slide 6.', 'Adult'],
    ['Why can a blackfly take a large blood meal?', 'Its short abdomen is very flexible', ['It has two separate stomachs for storing blood', 'It feeds for several days at once', 'Its wings store extra blood'], 'Slide 7.', 'Adult'],
    ['How does a female blackfly obtain blood?', 'It cuts the skin to make a pool of blood and sucks it up', ['It pierces one capillary with a long, fine needle', 'It drinks blood from wounds made by other insects', 'It injects saliva that dissolves the skin completely'], 'Slide 5: pool feeding, with powerful anticoagulants.', 'Adult'],
    ['How many eggs does a female blackfly lay at a time?', '150–800', ['5–10', '1–2', '5,000–10,000'], 'Slide 9: in sticky masses at communal oviposition sites.', 'Life cycle'],
    ['Blackfly eggs usually hatch within', '1–4 days', ['1–4 hours', '1–4 months', '1–4 years'], 'Slide 9 (they may undergo diapause).', 'Life cycle'],
    ['How do blackfly larvae feed?', 'As filter feeders, using cephalic fans', ['By biting other insect larvae in the same stream', 'By sucking blood from fish', 'By grazing on dry leaves on land'], 'Slides 11–13.', 'Life cycle'],
    ['Blackfly larvae breathe through', 'Anal gills in the rectum', ['Spiracles on the back', 'A siphon at the surface', 'Gills on the head'], 'Slide 13.', 'Life cycle'],
    ['The shape of a blackfly larva is described as', 'Indian-club shaped', ['Comma shaped', 'Flat and oval', 'Long and worm-like with a siphon'], 'Slide 12.', 'Life cycle'],
    ['Which way does the open end of the pupal cocoon face?', 'Downstream', ['Upstream', 'Towards the surface', 'Towards the stream bed'], 'Slide 15.', 'Life cycle'],
    ['How long does the blackfly pupal stage last?', '2–6 days', ['2–6 hours', '2–6 weeks', '2–6 months'], 'Slide 15.', 'Life cycle'],
    ['Why are empty pupal cases useful?', 'They show which species breed in the area', ['They are used to make larvicides', 'They feed the next generation of larvae', 'They block streams and stop breeding'], 'Slide 17.', 'Life cycle'],
    ['When do blackflies bite?', 'By day, or at dawn and dusk', ['Only in the middle of the night', 'Only indoors after dark', 'Only during heavy rain'], 'Slide 17: daytime or crepuscular.', 'Adult'],
    ['How long do adult blackflies live?', '2 weeks to 3 months', ['1 to 2 days', '5 to 10 years', 'About 15 years'], 'Slide 19.', 'Adult'],
    ['Headache, nausea, swollen lymph nodes and aching joints after bites are called', 'Black fly fever', ['River blindness', 'Toxaemia', 'Myiasis'], 'Slide 22.', 'Medical importance'],
    ['Where do the microfilariae develop inside the blackfly?', 'In the thoracic muscles', ['In the salivary glands only', 'In the wings', 'In the eggs'], 'Slide 24: they moult twice there.', 'Onchocerciasis'],
    ['How long does Onchocerca take to develop in the blackfly?', '6–13 days', ['1–2 days', '6–13 weeks', '6–13 months'], 'Slide 24.', 'Onchocerciasis'],
    ['How many microfilariae do adult Onchocerca worms produce each day?', '700–1000', ['7–10', '70–100', '70,000–100,000'], 'Slide 25.', 'Onchocerciasis'],
    ['Where are adult Onchocerca worms found in man?', 'Coiled in subcutaneous nodules', ['Free in the bloodstream', 'Inside the stomach', 'In the lungs'], 'Slide 25.', 'Onchocerciasis'],
    ['Onchocerciasis is the world’s', 'Second leading cause of blindness', ['Leading cause of deafness in West Africa', 'Leading cause of anaemia', 'Third leading cause of malaria'], 'Slide 26.', 'Onchocerciasis'],
    ['Thickened, then loose, patchy skin in onchocerciasis is described as', 'Crocodile, lizard or leopard skin', ['Orange-peel skin with deep, wide pits', 'Fish-scale skin', 'Paper-thin skin'], 'Slide 26.', 'Onchocerciasis'],
    ['Which larvicide was used in the Onchocerciasis Control Programme?', 'Abate, an organophosphate', ['DDT dust, an organochlorine only', 'Chloroquine', 'Ivermectin'], 'Slide 31; Bacillus thuringiensis was also very effective.', 'Control'],
    ['Why did the Onchocerciasis Control Programme last 20 years?', 'Adult worms live about 15 years in man', ['Blackflies themselves live for about 20 years', 'Ivermectin takes 20 years to act', 'The rivers took 20 years to map'], 'Slide 31: 1975–1995.', 'Control'],
    ['APOC (1995) set up community-directed treatment with', 'Ivermectin', ['Chloroquine', 'DDT', 'Praziquantel'], 'Slide 33: CDTi in 20 African countries.', 'Control'],
    ['Which is a personal protection measure against biting blackflies?', 'Wearing permethrin-treated clothing', ['Sleeping only during the day', 'Bathing in fast-flowing streams', 'Wearing short sleeves in the day'], 'Slide 29.', 'Control'],
  ],
};
