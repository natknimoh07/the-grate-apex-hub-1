// Medical Entomology → How arthropods harm us. From "15.Common Injuries by Vectors.ppt"
// (Types of problems caused by arthropods) and "Venomous Insects_HB1_12.07.2023_BD.pdf".
// Explanations are in our own words; facts are the sources'.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const entomologyHarm: Hb1Lesson = {
  id: 'entomology-harm',
  order: 10.5, // the last lecture of the course
  title: 'How Arthropods Harm Us: Venoms, Allergies and Injuries',
  summary: 'Lecture 15 · Direct harm from arthropods: nuisance, tissue invasion, allergy, toxins and venoms from stings, bites and hairs, and phobias and delusory parasitosis',
  minutes: 13,
  source: '15.Common Injuries by Vectors.ppt; Venomous Insects_HB1_12.07.2023_BD.pdf',
  quizId: 'hrm',
  quizName: 'Topic Review — Venoms, Allergies and Injuries (lesson)',
  sections: [
    {
      id: 'hrm-types',
      title: 'Kinds of harm',
      kicker: 'Direct harm and disease transmission',
      blocks: [
        { k: 'p', x: 'Arthropods harm people in two broad ways. Most of this course is about the second — <b>transmitting disease</b>, mechanically or biologically. This lecture is about the first: <b>direct harm</b> to the host.', lede: 1 },
        { k: 'ul', ol: 1, items: [
          '<b>Nuisance</b> and annoyance.',
          '<b>Invasion of host tissues</b> and accidental injury.',
          '<b>Immunological (allergic) reactions.</b>',
          '<b>Toxins and venoms.</b>',
          '<b>Phobic responses</b> (entomophobia, acariphobia).',
          '<b>Delusory parasitosis.</b>',
        ] },
      ],
    },
    {
      id: 'hrm-nuisance',
      title: 'Nuisance and tissue invasion',
      kicker: 'Too many, or too close',
      blocks: [
        { k: 'p', x: 'Nuisance comes mostly from <b>high densities</b> rather than real hazard. Blood-feeders — <b>mosquitoes, fleas, lice, bugs, ticks and mites</b> — are the main culprits. In people they cut tourism, outdoor activity and land values; in livestock they cause stress, blood loss (even death) and lower production.', lede: 1 },
        { k: 'p', x: '<b>Lachrymal feeders</b> drink the moisture of the eyes, nose and mouth: eye-moths (Pyralidae, Geometridae, Noctuidae) and muscid flies such as <i>Hydrotaea</i>, which also take lymph or blood from fresh wounds.' },
        { k: 'p', x: 'Some arthropods <b>invade tissues</b>, usually as immature stages — from under the skin to the lungs and intestines. <b>Myiasis</b> (fly larvae in tissues) is the most widespread form. Mites invade too: <b>scabies mites</b>, follicle mites, nasal mites and lung mites.' },
      ],
    },
    {
      id: 'hrm-allergy',
      title: 'Allergic reactions',
      kicker: 'Saliva and airborne allergens',
      blocks: [
        { k: 'p', x: 'The saliva of ectoparasites is a cocktail that helps them feed and pass on pathogens: <b>anticoagulants, vasodilators, pain inhibitors and immunosuppressants</b> (which stop macrophages making the molecules that kill pathogens). Its antigens cause allergic reactions — though long-term exposure to bites can end in <b>no skin reaction</b> at all.', lede: 1 },
        { k: 'p', x: 'Repeated exposure to arthropod <b>allergens</b> (mostly proteins) in shed cuticle, faeces, saliva and dead bodies causes excessive immune reactions, many of them <b>airborne</b> — rhinitis and asthma, even in entomologists working with insect cultures. Mites in stored products cause “<b>baker’s itch</b>” or “<b>grocer’s itch</b>”; <b>house-dust mites</b> cause house-dust allergy, the most widespread of all.' },
      ],
    },
    {
      id: 'hrm-venom',
      title: 'Stings and venoms',
      kicker: 'Bees, wasps, ants and scorpions',
      blocks: [
        { k: 'p', x: 'The best-known venomous insects are the social <b>Hymenoptera</b> — bees, wasps and ants — which sting to defend the nest. The sting is a <b>modified ovipositor</b>.', lede: 1 },
        { k: 'table', head: ['Sting', 'How it is used'], rows: [
          { c: ['Honey bee', '<b>Barbed</b>, used once — sting and venom sac stay in the wound'] },
          { c: ['Wasps and ants', '<b>Smooth</b>, used repeatedly; some ants spray venom into the wound'] },
        ] },
        { k: 'p', x: 'Besides toxins, venoms contain <b>enzymes</b>: <b>proteases</b> and <b>hyaluronidase</b> (the “spreading factor” that breaks down connective tissue so venom spreads), and <b>acetylcholine</b>, which acts on the autonomic nervous system and adds to the pain. Bright-coloured clothes, cosmetics and scented soaps attract some stinging insects, so avoid them where they are common.' },
        { k: 'p', x: 'Venom works by <b>IgE-mediated</b> release of histamine, leukotrienes and prostaglandins. Bee, wasp and yellow-jacket venoms are alike, so they <b>cross-react</b>. Reactions range from:' },
        { k: 'ul', items: [
          '<b>Mild local:</b> redness, itching, pain, swelling.',
          '<b>Large local:</b> grows for 24–48 h, over 10 cm, takes 5–10 days to settle.',
          '<b>Systemic:</b> urticaria and angioedema, bronchospasm, tongue or throat swelling and laryngeal oedema, hypotension and shock — <b>anaphylaxis</b>, which can be fatal.',
        ] },
        { k: 'p', x: 'Most deaths are caused by <b>honey bees</b> — shock from many stings, or anaphylaxis from one. In people who are not sensitised, the lethal dose (LD50) is about <b>500 stings for children, 1100 for women and 1400 for men</b>. Allergic people must avoid the allergen and carry medication.' },
        { k: 'p', x: '<b>Scorpions</b> have large claws and an abdomen divided into a broad preabdomen and a narrow tail-like postabdomen. All are venomous, but only about <b>25 species</b> can kill a person; their dangerous venoms are usually <b>neurotoxins</b>.' },
        { k: 'table', head: ['Venom action', 'Example'], rows: [
          { c: ['Neurotoxic', 'Black widow spider'] },
          { c: ['Cytolytic, haemolytic', 'Brown recluse spider'] },
          { c: ['Haemorrhagic', 'Moth larvae'] },
          { c: ['Vesicating (blistering)', 'Blister beetles'] },
        ] },
      ],
    },
    {
      id: 'hrm-toxins',
      title: 'Other toxins and urticating hairs',
      kicker: 'Harm without a sting',
      blocks: [
        { k: 'ul', items: [
          '<b>Blister beetles</b> (Meloidae) release <b>cantharidin</b> when crushed, blistering the skin; swallowed (“Spanish fly”) it inflames the urinary and genital tracts.',
          '<b>Paederus</b> rove beetles carry the contact poison <b>paederin</b>, causing blisters and long-lasting ulcers.',
          'Some flea beetles that feed on toxic plants are used by the San people for <b>arrow poison</b>.',
          '<b>Urticating hairs</b> of caterpillars (and some beetle larvae): hollow spines with venom glands or irritant setae that stay active long after shedding — burning skin, breathing problems if inhaled, a sore mouth and throat if swallowed. Some, like <i>Lonomia</i>, contain anticoagulants that cause skin bleeding.',
          'Adult moths can cause dermatitis, asthma, and feed on tears and blood.',
        ] },
        { k: 'p', x: '<b>How long it hurts:</b> a few hours after a Hymenoptera sting, a few days after urtication, a few weeks with ulcerated blisters. The most serious outcome is always <b>anaphylaxis</b>.' },
      ],
    },
    {
      id: 'hrm-mind',
      title: 'Phobias and delusory parasitosis',
      kicker: 'When the harm is in the mind',
      blocks: [
        { k: 'p', x: 'Spiders and insects provoke fear and panic in some people (<b>entomophobia</b>).', lede: 1 },
        { k: 'p', x: 'In <b>delusory parasitosis</b> a person wrongly believes they are being bitten or infested. The persistent “bites” and rashes are psychological; an obsessive-compulsive sensation of insects crawling, biting and burrowing brings chronic itching, mental anguish and self-harm. Sufferers seem otherwise normal, so it is hard to diagnose — food and skin allergies, drug misuse, diabetes, hepatitis and real infestations can mimic it — and it may have a genetic basis or be drug-induced.' },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'Direct harm: nuisance, tissue invasion, allergy, toxins and venoms, phobias, delusory parasitosis.',
        'Myiasis is the commonest tissue invasion; mites invade skin, follicles, nose and lungs.',
        'Saliva: anticoagulants, vasodilators, pain inhibitors, immunosuppressants. House-dust mite allergy is the most widespread.',
        'Sting = modified ovipositor. Bee: barbed, once. Wasp and ant: smooth, repeatedly. Bee/wasp venoms cross-react.',
        'Honey bees cause most deaths; LD50 ≈ 500 stings (children), 1100 (women), 1400 (men). Anaphylaxis is the worst outcome.',
        'Cantharidin (blister beetles, “Spanish fly”); paederin (Paederus); urticating caterpillar hairs.',
      ] },
    ],
  },
  quiz: [
    ['Which is a form of direct harm caused by arthropods?', 'Allergic reactions to their saliva', ['Biological transmission of malaria', 'Mechanical transmission of bacteria', 'Pollination of crop plants'], 'Slide 2: disease transmission is the other category.', 'Kinds of harm'],
    ['Nuisance from arthropods is mostly related to', 'High densities of the insects', ['The colour of the insects', 'The insects carrying viruses', 'Insects living inside the body'], 'Slide 3.', 'Nuisance'],
    ['Insects that feed on the moisture of the eyes, nose and mouth are', 'Lachrymal feeders', ['Urticating insects', 'Adventitious insects', 'Delusory parasites'], 'Slide 3: e.g. eye-moths and Hydrotaea flies.', 'Nuisance'],
    ['The most widespread invasion of host tissue by arthropods is', 'Myiasis', ['Tungiasis', 'Scabies', 'Urtication'], 'Slide 4.', 'Tissue invasion'],
    ['Which is found in the saliva of ectoparasites?', 'Anticoagulants, vasodilators and immunosuppressants', ['Antibiotics, vaccines, vitamins and growth hormones', 'Insulin, glucagon and cortisol', 'Only water and salts'], 'Slide 5.', 'Allergy'],
    ['After long-term exposure to bites, a person may show', 'No skin reaction', ['A bigger reaction every time', 'Immediate death from one bite', 'Permanent loss of hair'], 'Slide 5.', 'Allergy'],
    ['Which arthropod allergy is the most widespread?', 'House-dust allergy', ['Baker’s itch', 'Bee-sting allergy', 'Caterpillar dermatitis'], 'Slide 6.', 'Allergy'],
    ['“Baker’s itch” and “grocer’s itch” are caused by', 'Mites in stored products', ['Bee stings in bakeries', 'Fleas from rats', 'Blister beetles in flour'], 'Slide 6.', 'Allergy'],
    ['The sting of bees, wasps and ants is a modified', 'Ovipositor', ['Mandible', 'Antenna', 'Wing'], 'Slide 7.', 'Venoms'],
    ['Why can a honey bee sting only once?', 'Its sting is barbed and stays in the wound', ['Its sting is smooth and slips out of the skin easily', 'It sprays venom and has no sting', 'It dies before it can sting again'], 'Slide 7: the sting and venom sac remain in the wound.', 'Venoms'],
    ['Bee and wasp venoms can cross-react because', 'Their venoms are similar', ['They are the same insect', 'Both are neurotoxins from spiders', 'Neither causes any immune response'], 'Venomous Insects notes.', 'Venoms'],
    ['A large local reaction to a sting', 'Grows for 24–48 hours and exceeds 10 cm', ['Disappears within a few minutes', 'Always causes anaphylaxis', 'Affects only the tongue and throat'], 'Venomous Insects notes: it takes 5–10 days to settle.', 'Venoms'],
    ['Which insect causes most deaths from stings?', 'The honey bee', ['The paper wasp', 'The fire ant', 'The bald-faced hornet'], 'Slide 9.', 'Venoms'],
    ['In people not sensitised, about how many stings make the lethal dose for a child?', 'About 500', ['About 5', 'About 50', 'About 5,000'], 'Slide 9: about 1100 for women and 1400 for men.', 'Venoms'],
    ['How many scorpion species have venom able to kill humans?', 'About 25', ['All of them', 'About 2', 'About 2,500'], 'Venomous Insects notes.', 'Venoms'],
    ['The venom of the black widow spider is', 'A neurotoxin', ['Haemorrhagic', 'Blistering', 'Cytolytic only'], 'Venomous Insects notes.', 'Venoms'],
    ['The venom of the brown recluse spider is', 'Cytolytic and haemolytic', ['A neurotoxin', 'Blistering only', 'Harmless to people'], 'Venomous Insects notes.', 'Venoms'],
    ['Blister beetles release which toxin when crushed?', 'Cantharidin', ['Paederin', 'Histamine', 'Neurotoxin'], 'Slide 10.', 'Toxins'],
    ['Paederus rove beetles cause', 'Blistering and long-lasting ulcers', ['Paralysis of the legs lasting several weeks', 'Severe anaemia', 'Hair loss'], 'Slide 11: their contact poison is paederin.', 'Toxins'],
    ['Urticating hairs are found on', 'Caterpillars and some beetle larvae', ['Adult honey bees only', 'Ticks, mites and spiders, but no insects', 'Mosquito eggs only'], 'Slide 12.', 'Toxins'],
    ['How long does pain usually last after a Hymenoptera sting?', 'A few hours', ['A few weeks', 'Several months', 'For life'], 'Slide 13: days after urtication, weeks with ulcerated blisters.', 'Toxins'],
    ['The most serious outcome of venom exposure is', 'Anaphylaxis', ['Mild redness', 'Itching', 'Local swelling'], 'Slide 13.', 'Toxins'],
    ['Delusory parasitosis is', 'A mistaken belief of being bitten or infested', ['A real infestation with burrowing mites', 'An allergy to house-dust mites', 'An infection spread by fleas'], 'Slide 15.', 'Phobias'],
    ['Why is delusory parasitosis hard to diagnose?', 'Sufferers seem normal and other conditions mimic it', ['It only occurs in children under five', 'It leaves no symptoms at all', 'It is always caused by bee stings'], 'Slide 15: e.g. allergies, drug abuse, diabetes, hepatitis.', 'Phobias'],
  ],
};
