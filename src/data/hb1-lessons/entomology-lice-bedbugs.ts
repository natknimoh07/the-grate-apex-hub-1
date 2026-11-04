// Entomology → Lice and Bed Bugs. From the lice part of "12. Ectoparasitic Insects Fleas and Lice
// [Autosaved].pptx", "13. Insects -Bed Bugs.pptx" and "Lice and Bedbugs_HB1.pdf" (SMS 164).
// Rewrites the original database lesson entomology-04 with the same id, so progress is kept;
// practises Topic Quiz 4 and the past questions on lice and bed bugs. Checked against the decks
// 2026-11-04; teaching text in our own words.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const entomologyLiceBedbugs: Hb1Lesson = {
  id: 'entomology-04',
  order: 4,
  title: 'Lice and Bed Bugs',
  summary: 'Biting and sucking lice; the head, body and pubic lice; body louse morphology, mouthparts and life cycle; pediculosis and vagabond’s disease; epidemic typhus, relapsing fever and trench fever; diagnosis, delousing and treatment; bed bug classification, morphology, behaviour, pheromones and traumatic insemination; life cycle, signs of infestation, medical importance and integrated control',
  minutes: 32,
  source: '12. Ectoparasitic Insects Fleas and Lice [Autosaved].pptx; 13. Insects -Bed Bugs.pptx; Lice and Bedbugs_HB1.pdf',
  quizId: 'elib',
  quizName: 'Quiz · Lice and Bed Bugs (lesson)',
  pastSets: ['s9'],
  pastTopics: ['lice-and-bed-bugs'],
  sections: [
    {
      id: 'lib-lice',
      title: 'Lice: permanent ectoparasites',
      kicker: 'Order Phthiraptera',
      blocks: [
        { k: 'p', x: 'Lice are <b>permanent ectoparasites</b> of birds and mammals: <b>dorsoventrally flattened</b>, <b>wingless</b>, small (0.4–10 mm), with short stout legs ending in strong <b>claws</b> and small or absent eyes. Their whole life is spent on the host, with <b>incomplete metamorphosis</b>: eggs (<b>nits</b>) cemented to hair or feathers, <b>three nymphal stages</b> and adults. They are very <b>host-specific</b>, die quickly off the host, and spread by <b>close contact</b>.' },
        { k: 'table', head: ['', 'Biting lice (Mallophaga)', 'Sucking lice (Anoplura)'], rows: [
          { c: ['Head', '<b>Broad</b>, wider than the thorax (for chewing muscles)', '<b>Narrow</b>, narrower than the thorax'] },
          { c: ['Mouthparts', '<b>Chewing</b>', '<b>Piercing–sucking</b>'] },
          { c: ['Food', 'Fur, feathers, skin debris', '<b>Blood only</b>'] },
          { c: ['Hosts', 'Mostly <b>birds</b> (poultry pests; Menoponidae, Philopteridae); may bite people when infested birds nest in houses', '<b>Mammals including humans</b>'] },
        ] },
        { k: 'table', head: ['Human louse', 'Family', 'Where', 'Disease?'], rows: [
          { c: ['<b>Head louse</b>, <i>Pediculus humanus capitis</i>', 'Pediculidae', 'Scalp; eggs on hair', 'No; itch only'] },
          { c: ['<b>Body (clothes) louse</b>, <i>Pediculus humanus corporis</i> (<i>humanus</i>)', 'Pediculidae', 'Clothing seams; feeds on the body', '<b>Yes: the only louse vector</b>'] },
          { c: ['<b>Pubic (crab) louse</b>, <i>Pthirus pubis</i>', 'Phthiridae', 'Coarse pubic and perianal hair', 'No'] },
        ] },
        { k: 'p', x: '<b>Pediculidae</b> are elongated, with the abdomen longer and wider than the thorax and all six legs equally developed. <b>Phthiridae</b> are broad and crab-like, with huge claws on the middle and hind legs and lateral lobes on the abdomen. Nits hatch in about 1–1.5 weeks and are <b>not killed by most insecticides</b>, so treatment is repeated after <b>1–2 weeks</b>.' },
      ],
    },
    {
      id: 'lib-body',
      title: 'The body louse',
      kicker: 'Greyback, mechanised dandruff',
      blocks: [
        { k: 'table', head: ['Feature', 'Description'], rows: [
          { c: ['Size and colour', 'Grey, <b>2.5–4.5 mm</b>, wingless, with a soft translucent leathery cuticle, flattened dorsoventrally'] },
          { c: ['Head', 'Small simple lateral eyes; short <b>5-segmented antennae</b>'] },
          { c: ['Thorax', 'Fused segments; <b>3 pairs of stout legs</b> with a <b>tarsal claw</b> and <b>tibial spine</b> for clinging'] },
          { c: ['Abdomen', '9 segments with sclerotised margins; spiracles; female with a forked (<b>V or W-shaped</b>) gonopod that guides and glues eggs; male with a penis'] },
          { c: ['Mouthparts', 'A short tubular <b>haustellum</b> with a toothed labrum; three stabbing stylets (hypopharynx, a mandibular stylet and paired maxillae) withdrawn into a <b>stylet sac</b> in the head; gutter-shaped labium'] },
        ] },
        { k: 'ul', items: [
          '<b>Both sexes</b> suck blood, day and night. They live in clothing (preferring dark) close to the skin for warmth, attracted by <b>odour, sweat, body temperature</b> and humidity.',
          'The female glues <b>6–9 eggs a day</b> to clothing fibres with “<b>louse glue</b>” from accessory glands; <b>200–300</b> in a lifetime. Eggs are oval and white with an <b>operculum</b>; they hatch in <b>6–10 days</b>; viable eggs lie within 6 mm of the skin.',
          '<b>3 nymphal instars</b> over 7–14 days; maturity at <b>16–27 days</b>; adults live about <b>1 month</b> and are very sensitive to temperature (they leave a feverish or dead body). Heavy infestations can exceed 10 000 lice and nits.',
          'Predisposing factors: <b>cold climate</b>, <b>poverty</b>, <b>overcrowding</b>, refugee camps, disasters, homeless shelters, not washing or changing clothes.',
        ] },
        { k: 'term', name: 'Pediculosis', def: 'Infestation with lice on any part of the body. It brings weariness, irritability, intense <b>itching (pruritus)</b> and rash from allergy to the bites, weeping skin and hay-fever-like symptoms. After years of bites and scratching the skin thickens and darkens: <b>vagabond’s disease</b> (morbus errorum).' },
      ],
    },
    {
      id: 'lib-diseases',
      title: 'Louse-borne diseases and control',
      kicker: 'Typhus, relapsing fever, trench fever',
      blocks: [
        { k: 'table', head: ['Disease', 'Agent', 'How it reaches man', 'Features'], rows: [
          { c: ['<b>Epidemic (louse-borne) typhus</b>', '<b>Rickettsia prowazekii</b>', 'Rickettsiae multiply in the louse’s <b>midgut cells</b>, which burst; infected <b>faeces</b> dry to a black powder that enters <b>scratch wounds</b> or is <b>inhaled</b> / enters mucous membranes', 'Within 2 weeks: intense headache, fever, chills, cough, rash, confusion, myalgia; huge epidemics in both World Wars; linked to cold and crowding'] },
          { c: ['<b>Louse-borne relapsing fever</b>', '<b>Borrelia recurrentis</b> (spirochaete)', 'Multiplies in the <b>haemocoel</b>; released only when the louse is <b>crushed</b> on the skin', 'Headache, chills, recurring fever, muscle aches; low mortality; wartime epidemics'] },
          { c: ['<b>Trench fever</b>', '<b>Bartonella quintana</b> (formerly Rochalimaea / Rickettsia quintana)', 'Infected <b>faeces</b> rubbed into microlesions', 'Not fatal but incapacitating; common in the homeless (54% seropositive in one Paris study)'] },
        ] },
        { k: 'box', title: 'Memory hook', tone: 'recall', blocks: [{ k: 'p', x: 'Louse <b>faeces</b> → typhus and trench fever; louse <b>crushed</b> → relapsing fever (Borrelia stays in the haemocoel, not the gut or saliva).' }] },
        { k: 'cards', items: [
          { title: 'Head louse', blocks: [{ k: 'p', x: 'Lays <b>6–8 eggs a day</b> cemented to scalp hair, hatching in 7–10 days; about 300 in a lifetime; 3 nymphal instars. Spread by head contact and shared combs, brushes and hats. <b>No disease</b>: the complaint is itch, with possible secondary infection.' }] },
          { title: 'Pubic (crab) louse', blocks: [{ k: 'p', x: 'Smallest (<b>1–2 mm</b>), broad and squat, little division between thorax and abdomen; slender first legs, <b>massive claws</b> on the 2nd and 3rd; sluggish. About 200 eggs, hatching in 8 days, on coarse <b>genital and perianal</b> hair (avoids the dense scalp); prefers humidity. Spread by <b>sexual contact</b> (“papillons d’amour”); no disease; may spread to thighs, chest, beard, eyelashes (<b>pediculosis pubis / phthiriasis</b>).' }] },
        ] },
        { k: 'table', head: ['Diagnosis', 'How'], rows: [
          { c: ['<b>Head lice</b>', 'A <b>live nymph or adult</b> on the scalp (use a fine-toothed comb); nits <b>within ¼ inch (0.6 cm)</b> of the scalp suggest but do not prove active infestation; nits only further out mean an <b>old</b> infestation that needs no treatment'] },
          { c: ['<b>Body lice</b>', 'Eggs and lice in the <b>seams of clothing</b>, or lice on the skin'] },
          { c: ['<b>Pubic lice</b>', 'A crab louse or eggs in pubic hair (or eyebrows, eyelashes, beard, armpit); a magnifying lens helps'] },
        ] },
        { k: 'p', x: '<b>Delousing</b>: hot water and hot air, <b>ironing</b> (especially seams), fumigation and good hygiene. <b>Treatment</b>: topical lotions, sprays and shampoos, e.g. <b>1% permethrin</b> or pyrethrins with <b>piperonyl butoxide</b>, repeated to catch newly hatched nymphs.' },
      ],
    },
    {
      id: 'lib-bedbugs',
      title: 'Bed bugs',
      kicker: 'Red coats, mahogany flats, wall lice',
      blocks: [
        { k: 'p', x: 'Order <b>Hemiptera</b> (true bugs, the largest exopterygote order), family <b>Cimicidae</b>: <b>Cimex lectularius</b> (temperate, cosmopolitan) and <b>Cimex hemipterus</b> (tropical). They are <b>temporary ectoparasites</b> of man (occasionally birds, bats and rodents) and <b>obligate blood-feeders</b>.' },
        { k: 'table', head: ['Feature', 'Description'], rows: [
          { c: ['Body', 'Oval, <b>flattened dorsoventrally</b>, short, broad and squat; pale yellow-brown unfed, <b>mahogany</b> when fed'] },
          { c: ['Head', 'Short, broad, with prominent <b>lateral compound eyes</b>, <b>4-segmented antennae</b> and a <b>3-segmented proboscis</b> folded under the body'] },
          { c: ['Thorax', 'Large prothorax with forward flanges; <b>brachypterous</b>: forewings reduced to small leathery pads (<b>hemielytra</b>), hindwings nearly absent; 3 pairs of legs'] },
          { c: ['Abdomen', 'Lemon-shaped, 8 visible segments. Male: curved needle-like penis. Female: a <b>spermalege</b> (organ of Berlese/Ribaga) on the 4th segment that receives sperm'] },
          { c: ['Smell', '<b>Stink glands</b>: heavy infestations smell sickly-sweet, like rotting raspberries'] },
        ] },
        { k: 'ul', items: [
          '<b>Both sexes</b> feed on blood, mostly at <b>night</b> (females need blood for each batch of eggs, males for sperm). They hide by day in <b>cracks and crevices</b>.',
          'Attracted by <b>CO<sub>2</sub>, body heat and host odour</b> (hence to dirty laundry) and to red and black objects.',
          '<b>Gregarious</b>: aggregations protect them, conserve heat and moisture, and give mating chances. They communicate by <b>semiochemicals</b>: an <b>aggregation pheromone</b> (attractant, at harborages) and an <b>alarm pheromone</b> (repellent).',
          '<b>Traumatic insemination</b>: the male stabs his hypodermic genitalia through the female’s body wall.',
        ] },
        { k: 'table', head: ['Stage', 'Facts'], rows: [
          { c: ['<b>Eggs</b>', 'Whitish, vase-shaped with an <b>operculum</b>, glued into cracks; 6–10 a week, 150–500 in a lifetime; hatch in about 8–11 days (4–12)'] },
          { c: ['<b>Nymphs</b>', '<b>5 instars</b> (hemimetabolous); each must take at least <b>one blood meal</b> before moulting; colour from milky white to tan; about 5–8 weeks to adulthood; fewer sense organs (in C. hemipterus about 75 sensilla in instar 1, 120 in instar 2, 220 in adults)'] },
          { c: ['<b>Adults</b>', 'Live <b>1–4 years</b>; survive <b>starvation over 500 days</b> (low metabolism) and drying; can semi-hibernate'] },
        ] },
        { k: 'p', x: '<b>Signs of infestation</b>: cast nymphal skins, hatched and unhatched eggs, small dark brown–black spots of digested blood on bedding (they defecate as they feed), rust-like blood stains, skin rash or blisters, the sweet smell. They disperse poorly on their own but travel in <b>luggage, clothing, bedding and second-hand furniture</b>; they bite exposed skin, not through clothes, and are linked to poor hygiene and overcrowding.' },
        { k: 'box', title: 'Medical importance', tone: 'life', blocks: [{ k: 'ul', items: ['<b>Not natural vectors</b> of any human disease (possible mechanical spread of hepatitis B through faeces scratched into skin or inhaled).', 'Bites (<b>cimicosis</b>) are painful, itchy and swollen, often in rows on arms, neck, torso and legs.', 'Loss of sleep, distress, nervousness, insomnia, nausea; <b>anaemia</b> and iron deficiency in children with heavy infestation.'] }] },
        { k: 'table', head: ['Control (integrated pest management)', 'Measures'], rows: [
          { c: ['First steps', 'Confirm it is a bed bug; find the source; inspect regularly. No single method works alone'] },
          { c: ['<b>Environmental</b>', 'Vacuum daily and dispose of the bag; mattress encasements; make the bed an “island” away from walls; interceptors under legs; remove clutter; seal cracks; bag infested items'] },
          { c: ['<b>Non-chemical</b>', 'Wash and dry bedding at the hottest setting for 30 minutes; freeze small items for 4 days; steam furniture; heat chambers; discard heavily infested items (raising room temperature does not work)'] },
          { c: ['<b>Chemical</b>', '<b>Diatomaceous earth</b>; <b>pyrethroid-treated nets</b> (which also kill bed bugs); smoke generators (short effect); <b>residual insecticides</b> for heavy infestations: <b>pirimiphos-methyl, bendiocarb, propoxur</b>'] },
        ] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Anoplura (sucking, narrow head) vs Mallophaga (biting, broad head).',
          'Head, body and pubic lice; only the body louse is a vector.',
          'Typhus (R. prowazekii, faeces), relapsing fever (B. recurrentis, crushed louse), trench fever (B. quintana, faeces).',
          'Nits within 0.6 cm of the scalp suggest active infestation; treat twice, 1–2 weeks apart.',
          'Bed bugs: Cimex lectularius / hemipterus; 5 nymphal instars, each needs blood; adults starve over 500 days; traumatic insemination; not vectors.',
        ] }] },
      ],
    },
  ],
  quiz: [
    ['How many kinds of lice infest humans?', 'Three', ['One', 'Two', 'Seven'], 'Head, body and pubic lice.', 'Lice'],
    ['Sucking lice differ from biting lice in having', 'A head narrower than the thorax', ['A head wider than the thorax', 'Strong chewing mouthparts', 'Small wings on the mesothorax'], 'Anoplura feed only on blood.', 'Lice'],
    ['Biting (Mallophagan) lice mainly feed on', 'Feathers, fur and skin debris', ['Human blood only', 'Plant sap and nectar', 'Tears, sweat and lymph'], 'Mostly bird pests.', 'Lice'],
    ['The only human louse known to transmit disease is the', 'Body louse', ['Head louse', 'Pubic louse', 'Bird louse'], 'Pediculus humanus corporis.', 'Lice'],
    ['Infestation with lice is called', 'Pediculosis', ['Cimicosis', 'Tungiasis', 'Myiasis'], 'Cimicosis is from bed bugs.', 'Lice'],
    ['Louse eggs are called', 'Nits', ['Exuviae', 'Oocysts', 'Puparia'], 'Cemented to hair or clothing.', 'Lice'],
    ['Lice undergo', 'Incomplete metamorphosis with three nymphal instars', ['Complete metamorphosis with a resting pupa', 'No moulting at any stage of life', 'Complete metamorphosis with five larval instars'], 'Hemimetabolous.', 'Lice'],
    ['Treatment for lice is repeated after 1–2 weeks because', 'Nits survive most insecticides', ['Adults become resistant at once', 'The skin needs time to heal', 'The first dose acts slowly'], 'Newly hatched nymphs must be killed.', 'Lice'],
    ['Body lice lay their eggs', 'On clothing fibres', ['On scalp hair', 'In cracks in walls', 'On pubic hair'], 'Head lice use scalp hair.', 'Body louse'],
    ['The female body louse glues eggs with secretion from her', 'Accessory glands', ['Salivary glands', 'Malpighian tubules', 'Stink glands'], 'Spread by the gonopods.', 'Body louse'],
    ['Thickened, darkened skin after years of louse bites is', 'Vagabond’s disease', ['Trench fever', 'Chronic cimicosis', 'Phthiriasis pubis'], 'Morbus errorum.', 'Body louse'],
    ['Epidemic typhus is caused by', 'Rickettsia prowazekii', ['Borrelia recurrentis', 'Bartonella quintana', 'Yersinia pestis bacteria'], 'Louse-borne typhus.', 'Diseases'],
    ['Epidemic typhus reaches humans mainly through', 'Infected louse faeces in scratches', ['The louse’s saliva during biting', 'Crushing the louse on skin only', 'Eating food the louse contaminated'], 'Or inhaled dried faeces.', 'Diseases'],
    ['Louse-borne relapsing fever is caused by', 'Borrelia recurrentis', ['Rickettsia prowazekii', 'Bartonella quintana', 'Rickettsia typhi'], 'A spirochaete.', 'Diseases'],
    ['Borrelia recurrentis infects man when the louse is', 'Crushed on the skin', ['Feeding on blood', 'Defecating on clothes', 'Laying eggs'], 'It stays in the haemocoel.', 'Diseases'],
    ['Trench fever is caused by', 'Bartonella quintana', ['Borrelia recurrentis', 'Rickettsia prowazekii', 'Coxiella burnetii'], 'Incapacitating but not fatal.', 'Diseases'],
    ['The crab louse is', 'Pthirus pubis', ['Pediculus capitis', 'Cimex lectularius', 'Tunga penetrans'], 'Spread by sexual contact.', 'Pubic louse'],
    ['The pubic louse avoids the scalp because', 'The hair there is too dense', ['It cannot tolerate light', 'It needs blood from the groin', 'It cannot grip fine hair'], 'It prefers coarse hair and humidity.', 'Pubic louse'],
    ['Nits found only more than ¼ inch from the scalp suggest', 'An old, inactive infestation', ['A heavy active infestation', 'A body louse infestation', 'Resistance to permethrin lotion'], 'They need no treatment.', 'Diagnosis'],
    ['Bed bugs belong to the order', 'Hemiptera', ['Anoplura', 'Siphonaptera', 'Diptera'], 'Family Cimicidae.', 'Bed bugs'],
    ['The tropical bed bug is', 'Cimex hemipterus', ['Cimex lectularius', 'Triatoma infestans', 'Pediculus humanus'], 'C. lectularius is temperate.', 'Bed bugs'],
    ['The reduced forewings of bed bugs are called', 'Hemielytra', ['Halteres', 'True elytra', 'Haustella'], 'Bed bugs are brachypterous.', 'Bed bugs'],
    ['Bed bugs mate by', 'Traumatic insemination', ['Spermatophore transfer', 'External fertilisation', 'Parthenogenesis'], 'Through the female’s body wall.', 'Bed bugs'],
    ['Bed bug nymphs must take a blood meal', 'Before each moult', ['Only as adults', 'Once in their whole life', 'Never, they feed on debris'], 'Five nymphal instars.', 'Bed bugs'],
    ['Adult bed bugs can survive without food for over', '500 days', ['5 days', '50 hours', '5 years'], 'Low metabolic rate.', 'Bed bugs'],
    ['A heavy bed bug infestation smells like', 'Rotting raspberries', ['Strong ammonia', 'Rotten eggs', 'Sour vinegar'], 'From their stink glands.', 'Bed bugs'],
    ['Bed bugs are', 'Not natural vectors of human disease', ['Vectors of epidemic typhus', 'Vectors of relapsing fever', 'The main vectors of plague'], 'Possible mechanical spread of hepatitis B.', 'Bed bugs'],
    ['Heavy bed bug infestation in children may cause', 'Iron-deficiency anaemia', ['Epidemic typhus', 'Lymphatic elephantiasis', 'Sleeping sickness'], 'From repeated blood loss.', 'Bed bugs'],
    ['A residual insecticide used for bed bugs is', 'Pirimiphos-methyl', ['Ivermectin', 'Chloroquine', 'Diethylcarbamazine'], 'Also bendiocarb, propoxur.', 'Bed bugs'],
  ],
};
