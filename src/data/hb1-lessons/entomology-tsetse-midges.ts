// Entomology → Tsetse Flies and Biting Midges. From "8. BITING MIDGES.pptx" (Ruth Brenyah, SMS
// 164); the tsetse deck is not in the HB1 folder, so that part rewrites the original database
// lesson entomology-06 (same id, so progress is kept) with Topic Quiz 6. Checked 2026-11-04;
// teaching text in our own words. Practises Topic Quiz 6 and the past questions on other vectors.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostxBio } from '@/data/hb1-lessons/pictures';

export const entomologyTsetseMidges: Hb1Lesson = {
  id: 'entomology-06',
  order: 6,
  title: 'Tsetse Flies and Biting Midges',
  summary: 'Glossina: recognition, the fusca, palpalis and morsitans groups, adenotrophic viviparity; human and animal trypanosomiasis, the parasite’s cycle, the stages of sleeping sickness and tsetse control; Culicoides biting midges: classification, morphology, life cycle, nuisance, Mansonella filariae, arboviruses and control',
  minutes: 28,
  source: '8. BITING MIDGES.pptx (tsetse part rebuilt from the original lesson and Topic Quiz 6)',
  quizId: 'etse',
  quizName: 'Quiz · Tsetse Flies and Biting Midges (lesson)',
  pastSets: ['s11'],
  pastTopics: ['other-vectors'],
  sections: numberFigures([
    {
      id: 'tse-fly',
      title: 'The tsetse fly',
      kicker: 'Genus Glossina, tropical Africa only',
      blocks: [
        { k: 'p', x: 'Tsetse flies (<b>Glossina</b>, family Glossinidae, suborder Cyclorrhapha) live only in <b>tropical Africa</b> and transmit <b>African trypanosomiasis</b> of humans (sleeping sickness, fatal untreated, south of the Sahara; the lesson’s figure is 20 000–25 000 deaths a year, now far fewer thanks to control) and of animals (<b>nagana</b>). Unusually, <b>both sexes</b> suck blood, so every fly is a potential vector.' },
        { k: 'table', head: ['Feature', 'Tsetse'], rows: [
          { c: ['Size', 'Robust, <b>6–15 mm</b>'] },
          { c: ['Proboscis', '<b>Forward-pointing</b>'] },
          { c: ['Wings', 'The “<b>hatchet cell</b>” in the venation; folded <b>completely over each other like closed scissors</b> at rest'] },
          { c: ['Species', 'About <b>30</b>; only <b>9</b> (palpalis and morsitans groups) carry sleeping sickness'] },
        ] },
        { k: 'table', head: ['Subgenus (group)', 'Habitat'], rows: [
          { c: ['<b>Austenia</b> (G. fusca group)', '<b>Forest</b>; not a sleeping sickness vector'] },
          { c: ['<b>Nemorhina</b> (G. palpalis group)', '<b>Riverine</b> and lakeside; gambiense disease'] },
          { c: ['<b>Glossina</b> (G. morsitans group)', '<b>Savannah</b>; rhodesiense disease and nagana'] },
        ] },
        { k: 'h', x: 'Adenotrophic viviparity', l: 3 },
        { k: 'step', n: '1', title: 'One mating', blocks: [{ k: 'p', x: 'The female mates once and stays fertile for life.' }] },
        { k: 'step', n: '2', title: 'One larva in the uterus', blocks: [{ k: 'p', x: 'After 7–9 days a single egg passes to the uterus; the larva hatches there (about 4 days), is fed by <b>milk glands</b>, moults twice and fills her abdomen.' }] },
        { k: 'step', n: '3', title: 'Larviposition', blocks: [{ k: 'p', x: 'About every <b>9 days</b> (7–11) she drops a <b>third-instar larva</b> (3–8.5 mm, two black posterior knobs) on the ground; it burrows <b>1.5–2 cm</b> and forms a <b>puparium</b>.' }] },
        { k: 'step', n: '4', title: 'Emergence', blocks: [{ k: 'p', x: 'The adult emerges after about <b>30 days</b> and lays her first larva 12–14 days later: about <b>50 days</b> from one generation to the next.' }] },
        { k: 'box', title: 'Why it matters', tone: 'life', blocks: [{ k: 'p', x: 'One offspring every nine days is a very <b>low reproductive rate</b>, so populations recover slowly; and because the female mates once, releasing <b>sterile males</b> leaves females barren for life.' }] },
      ],
    },
    {
      id: 'tse-tryp',
      title: 'African trypanosomiasis',
      kicker: 'Sleeping sickness and nagana',
      blocks: [
        { k: 'table', head: ['Disease', 'Parasites'], rows: [
          { c: ['<b>Human (sleeping sickness)</b>', '<b>Trypanosoma brucei gambiense</b> (West and Central Africa, chronic) and <b>T. b. rhodesiense</b> (East Africa, acute; reservoirs cattle and wild ungulates)'] },
          { c: ['<b>Animal (nagana)</b>', '<b>T. congolense</b> (the commonest in cattle and small ruminants), T. vivax, <b>T. b. brucei</b> (does not infect humans), <b>T. simiae</b> (virulent in pigs)'] },
        ] },
        ostxBio('figure-23-03-03.jpg', 800, 599, 'The life cycle of Trypanosoma brucei in the tsetse fly and in humans.', 'It multiplies in both hosts: cyclopropagative transmission.'),
        { k: 'ul', items: [
          'The fly injects <b>metacyclic trypomastigotes</b> (infective); they become bloodstream trypomastigotes and multiply by <b>binary fission</b> in blood, lymph and CSF.',
          'A fly ingests them; in its <b>midgut</b> they become <b>procyclic</b> forms and multiply, then <b>epimastigotes</b>, which multiply in the <b>salivary glands</b> and turn into metacyclic forms.',
        ] },
        { k: 'table', head: ['Stage', 'Features'], rows: [
          { c: ['<b>Early (blood and lymph)</b>', 'Swollen <b>lymph nodes</b> (the earliest sign; behind the neck in gambiense = Winterbottom’s sign), enlarged spleen and liver, oedema, endocrine upsets (sterility, impotence, abortion), sleeplessness, itching, rash, irregular fever'] },
          { c: ['<b>Late (meningoencephalitis)</b>', 'Tremor, poor speech, mental dullness and apathy, <b>excessive daytime sleep</b> (the inverted sleep cycle that names it), incontinence, wasting, inability to walk; then <b>coma and death</b>'] },
        ] },
        { k: 'box', title: 'Tsetse control', tone: 'formula', blocks: [{ k: 'ul', items: ['Insecticide-treated <b>traps</b> and odour-baited <b>targets/screens</b> (CO<sub>2</sub>, acetone).', 'Insecticide on <b>cattle</b> (spray, dip, pour-on): the cattle become the bait.', 'Ground and <b>aerial</b> spraying of resting and breeding sites.', '<b>Sterile insect technique</b> (eradication phase).', 'Clearing bush around homes.'] }] },
      ],
    },
    {
      id: 'tse-midges',
      title: 'Biting midges (Culicoides)',
      kicker: 'The “no-see-ums”',
      blocks: [
        { k: 'p', x: 'Order Diptera → suborder Nematocera → family <b>Ceratopogonidae</b>; genera <b>Culicoides</b>, Leptoconops, Lasiohelea (e.g. <i>C. milnei</i>, <i>C. grahamii</i>). The <b>smallest man-biting insects</b> (1.5–3 mm), they bite campers, fishermen, hunters, gardeners, pets, livestock and wildlife.' },
        { k: 'table', head: ['Part', 'Features'], rows: [
          { c: ['Head', 'Small, with bead-like many-segmented (15) antennae, plumose or pilose; prominent eyes; inconspicuous <b>dagger-like</b> mouthparts like a blackfly'] },
          { c: ['Thorax', '<b>Humeral pits</b>; short legs; short broad wings with <b>dark and white patches</b>, <b>crossed</b> over the back at rest'] },
          { c: ['Abdomen', '9 segments; dull grey to black; males with prominent claspers'] },
          { c: ['Habits', 'Females bite exposed skin of man, mammals and birds; adults also take sugar; <b>crepuscular</b>, exophilic; swarm; very active just before 7 pm'] },
        ] },
        { k: 'table', head: ['Stage', 'Features'], rows: [
          { c: ['<b>Eggs</b>', 'Tiny (0.5 mm), dark, <b>banana-shaped</b>; in batches of 30–450 on wet soil, rotting vegetation, tree holes, banana stumps, marshes; hatch in 2–9 days'] },
          { c: ['<b>Larvae</b>', 'White, <b>eel-like</b>, with a dark conical head and 12 similar segments, <b>no hairs or bristles</b>, retractile anal gills; <b>serpentine</b> swimming; scavengers in wet soil, marsh, manure, tree holes; 4 instars over 14–25 days; very hard to find'] },
          { c: ['<b>Pupae</b>', 'Like a mosquito pupa with two segmented breathing trumpets and horn-like end processes; in drier spots; 3–10 days'] },
        ] },
        { k: 'cards', items: [
          { title: 'Medical importance', blocks: [{ k: 'ul', items: ['<b>Biting nuisance</b>: intense itching and long-lasting allergic welts; a threat to tourism.', '<b>Filariae</b>: <i>Dipetalonema (Mansonella) perstans</i> (East Africa) and <i>D. streptocerca</i> (West African rainforest: Ghana, Nigeria, Cameroon; <i>C. grahamii</i>); microfilariae <b>non-periodic</b>, largely non-pathogenic (allergy, dermatitis); they moult twice in the vector’s thoracic muscles.', '<b>Arboviruses</b> and protozoa of animals and poultry (e.g. in sheep and horses).'] }] },
          { title: 'Control', blocks: [{ k: 'ul', items: ['Breeding sites (fresh and salt marshes, wet coasts) are diffuse: reducing them is laborious and often impractical; draining or filling land.', 'Organochlorines (dieldrin, DDT) on breeding sites.', 'Personal protection: repellents, <b>fine-mesh screens</b>.', 'Traps and treated targets baited with CO<sub>2</sub>.'] }] },
        ] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Glossina: both sexes bite; hatchet cell; scissor-folded wings; fusca (forest), palpalis (river), morsitans (savannah).',
          'Adenotrophic viviparity: one larva every 9 days; pupa 30 days.',
          'T. b. gambiense / rhodesiense (man); T. congolense, vivax, brucei, simiae (animals).',
          'Early lymph nodes → late sleep, coma. Control: traps, targets, cattle, SIT.',
          'Culicoides (Ceratopogonidae): 1.5–3 mm, humeral pits, spotted wings; eel-like larvae; Mansonella perstans and streptocerca.',
        ] }] },
      ],
    },
  ]),
  quiz: [
    ['Tsetse flies belong to the genus', 'Glossina', ['Simulium', 'Culicoides', 'Phlebotomus'], 'Family Glossinidae.', 'Tsetse'],
    ['Tsetse flies occur', 'Only in tropical Africa', ['Throughout the tropics', 'Only in South America', 'Across tropical Asia and Africa'], 'South of the Sahara.', 'Tsetse'],
    ['Unlike mosquitoes, in tsetse flies blood is taken by', 'Both sexes', ['Females only', 'Males only', 'Larvae only'], 'So every fly is a potential vector.', 'Tsetse'],
    ['A resting tsetse holds its wings', 'Folded over like closed scissors', ['Erect over the back in a V', 'Spread flat out to each side', 'Rolled tightly around the body'], 'With the hatchet cell in the venation.', 'Tsetse'],
    ['The G. palpalis group lives mainly in', 'Riverine and lakeside areas', ['Dense, wet rainforest interiors', 'Open dry savannah', 'Deserts and mountains'], 'Morsitans = savannah; fusca = forest.', 'Tsetse'],
    ['Which tsetse group does not transmit sleeping sickness?', 'G. fusca group', ['G. palpalis group', 'G. morsitans group', 'G. tachinoides'], 'Forest species (Austenia).', 'Tsetse'],
    ['Tsetse reproduction is', 'Adenotrophic viviparity', ['Oviparity in water', 'Parthenogenesis', 'Egg-laying in animal dung heaps'], 'One larva fed by milk glands.', 'Tsetse'],
    ['A female tsetse deposits a larva about every', '9 days', ['9 hours', '9 weeks', '90 days'], '7–11 days.', 'Tsetse'],
    ['The deposited tsetse larva', 'Burrows into soil and pupates', ['Swims in streams', 'Feeds on blood', 'Lives on in the mother’s gut'], 'It forms a puparium 1.5–2 cm down.', 'Tsetse'],
    ['The sterile insect technique works well against tsetse because the female', 'Mates only once', ['Lays thousands of eggs', 'Lives only a day', 'Feeds only on cattle'], 'A sterile mating leaves her barren.', 'Tsetse'],
    ['West African (chronic) sleeping sickness is caused by', 'T. brucei gambiense', ['T. brucei rhodesiense', 'T. brucei brucei', 'T. congolense'], 'Rhodesiense is East African, acute.', 'Trypanosomiasis'],
    ['Which trypanosome does NOT infect humans?', 'T. brucei brucei', ['T. b. gambiense', 'T. b. rhodesiense', 'T. cruzi'], 'An animal (nagana) parasite.', 'Trypanosomiasis'],
    ['The commonest cause of nagana in cattle is', 'T. congolense', ['T. simiae', 'T. b. gambiense', 'T. cruzi'], 'T. simiae affects pigs.', 'Trypanosomiasis'],
    ['The infective stage injected by the tsetse is the', 'Metacyclic trypomastigote', ['Procyclic trypomastigote', 'Midgut epimastigote form', 'Intracellular amastigote'], 'From the salivary glands.', 'Trypanosomiasis'],
    ['The earliest sign of sleeping sickness is', 'Swollen lymph nodes', ['Excessive daytime sleep', 'Coma and wasting', 'Urinary incontinence'], 'Winterbottom’s sign in the neck.', 'Trypanosomiasis'],
    ['Excessive sleep in sleeping sickness occurs', 'In the late, CNS stage', ['Only at the bite site', 'In the first week', 'Only in animal reservoirs'], 'Meningoencephalitis.', 'Trypanosomiasis'],
    ['Tsetse are attracted to odour-baited targets with', 'CO₂ and acetone', ['Sugar and honey', 'Light and sound', 'Salt and urea'], 'Host odours.', 'Control'],
    ['Biting midges belong to the family', 'Ceratopogonidae', ['Simuliidae', 'Psychodidae', 'Glossinidae'], 'Genus Culicoides.', 'Midges'],
    ['Biting midges are about', '1.5–3 mm long', ['6–15 mm long', '10–20 mm long', '0.1 mm long'], 'The smallest man-biting insects.', 'Midges'],
    ['A feature of the Culicoides thorax is', 'Humeral pits', ['Hatchet cells', 'Halteres missing', 'A scutum of scales'], 'Wings have dark and white patches.', 'Midges'],
    ['Culicoides larvae are', 'Eel-like with no hairs', ['Comma-shaped and hairy', 'Legless with a siphon', 'Flat and crab-like'], 'They move with a serpentine motion.', 'Midges'],
    ['Biting midges are mainly', 'Crepuscular', ['Strictly diurnal', 'Strictly nocturnal', 'Active only at noon'], 'Most active at dusk.', 'Midges'],
    ['A filaria spread by Culicoides in West African forests is', 'Dipetalonema streptocerca', ['Wuchereria bancrofti var. pacifica', 'Onchocerca volvulus', 'Loa loa'], 'Also D. perstans in East Africa.', 'Midges'],
    ['Microfilariae carried by Culicoides are', 'Non-periodic', ['Nocturnal periodic', 'Diurnal periodic', 'Sheathed and periodic'], 'Largely non-pathogenic.', 'Midges'],
    ['Controlling midge breeding sites is difficult because they are', 'Diffuse and extensive', ['Found only inside human homes', 'In running rivers', 'On animals only'], 'Marshes and wet coasts.', 'Midges'],
  ],
};
