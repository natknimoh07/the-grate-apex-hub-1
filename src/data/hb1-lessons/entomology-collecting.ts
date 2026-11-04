// Entomology → Collecting and Preserving Arthropods. The deck for this class is not in the HB1
// folder, so this rewrites the original database lesson entomology-09 (same id, so progress is
// kept). Checked 2026-11-04; teaching text in our own words. Practises the past questions on
// insect biology.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostxBio } from '@/data/hb1-lessons/pictures';

export const entomologyCollecting: Hb1Lesson = {
  id: 'entomology-09',
  order: 9,
  title: 'Collecting and Preserving Arthropods',
  summary: 'Why life stage decides the method; the three purposes of entomological surveys; the field kit; the seven core sampling methods (hand picking, nets, aspirators, sifters and Berlese funnels, light traps, baits, combing); collecting larvae, winged adults, wingless ectoparasites and ticks; killing agents, preserving fluids, pinning and labelling',
  minutes: 18,
  source: 'Original lesson (deck not in the HB1 folder)',
  quizId: 'ecol',
  quizName: 'Quiz · Collecting and Preserving Arthropods (lesson)',
  pastTopics: ['insect-biology'],
  sections: numberFigures([
    {
      id: 'col-why',
      title: 'Why and how we survey',
      kicker: 'Match the method to the stage',
      blocks: [
        { k: 'p', x: 'Insects are the most diverse animals on Earth, more than <b>two-thirds</b> of all known species. Medical entomology needs <b>real specimens</b>, collected and kept so that they can still be identified in the laboratory. Because larvae, nymphs and adults live in different places, the <b>collecting method must match the life stage</b>.' },
        ostxBio('figure-27-01-02.jpg', 800, 673, '(a) Incomplete metamorphosis (egg, nymphs, adult); (b) complete metamorphosis (egg, larva, pupa, adult).', 'Nymphs are caught like adults; larvae need their own methods.'),
        { k: 'ul', items: ['<b>Complete (holometabolous)</b>: egg → larva → pupa → adult. Larvae are soft, tubular and worm-like; fly larvae are <b>maggots</b>.', '<b>Incomplete (hemimetabolous)</b>: egg → nymph → adult; nymphs look like small adults, so they are collected the same way as adults.'] },
        { k: 'table', head: ['Survey type (CDC)', 'Purpose'], rows: [
          { c: ['<b>Exploratory</b>', 'To find out the <b>fauna</b> (which species live) in an area'] },
          { c: ['<b>Control appraisal</b>', 'To judge how well <b>control operations</b> are working'] },
          { c: ['<b>Epidemiological</b>', 'Insect surveys as part of a <b>disease investigation</b>'] },
        ] },
        { k: 'box', title: 'The field kit', tone: 'recall', blocks: [{ k: 'ul', items: ['The right tool for the target group (net, aspirator, trap).', '<b>Forceps</b>, and <b>vials</b> of alcohol or other preservative.', '<b>Killing jars</b>, and small boxes for specimens taken out of them.', '<b>Aspirators</b>.', 'A <b>notebook</b> for field records (date, place, habitat, collector).', 'A strong knife and a <b>hand lens</b>.', 'A small fine <b>brush</b> for picking up minute specimens.'] }] },
      ],
    },
    {
      id: 'col-methods',
      title: 'The seven core sampling methods',
      kicker: 'From hand picking to combing',
      blocks: [
        { k: 'step', n: '1', title: 'Hand picking', blocks: [{ k: 'p', x: 'Simple and effective for <b>large terrestrial insects</b> such as cockroaches (into a bottle with a perforated lid or net for air), and for ectoparasites picked straight off a person: <b>fleas, lice, mites</b>. <b>Forceps</b> help with small or dangerous specimens.' }] },
        { k: 'step', n: '2', title: 'Collecting nets', blocks: [{ k: 'p', x: '<b>Aerial (sweep) nets</b> for flying insects; <b>aquatic nets</b> (and dippers) for insects in ponds and streams.' }] },
        { k: 'step', n: '3', title: 'Aspirator', blocks: [{ k: 'p', x: 'A tube-and-vial device worked by <b>mouth suction</b> (with a gauze filter), for <b>small insects</b> on surfaces: e.g. mosquitoes resting on walls.' }] },
        { k: 'step', n: '4', title: 'Sifters and the Berlese funnel', blocks: [{ k: 'p', x: 'For insects and mites in <b>leaf litter, rotting wood, fungi or shore debris</b>. Shake the material through a sieve (mesh to suit the specimen size) over a <b>white</b> pan or cloth and pick up what falls. In a <b>Berlese funnel</b>, a <b>light bulb</b> above dries and warms the sample on a mesh, driving the animals down the funnel into <b>70% ethanol</b>.' }] },
        { k: 'step', n: '5', title: 'Light traps', blocks: [{ k: 'p', x: 'Use insects’ attraction to <b>light</b> at night. The mosquito light trap has a <b>bulb</b> to attract and a <b>fan</b> that blows them through a cone into a killing jar or net bag. Drawback: it also catches <b>moths, beetles and bugs</b>, so mosquitoes must be sorted out.' }] },
        { k: 'step', n: '6', title: 'Bait traps', blocks: [{ k: 'p', x: 'Baited with <b>food or egg-laying</b> attractants (mixed baits draw several species), usually left <b>24 hours</b>. Good for <b>houseflies, flesh flies and blowflies</b>; gives mainly <b>qualitative</b> information: which species occur and broad differences between populations.' }] },
        { k: 'step', n: '7', title: 'Combing', blocks: [{ k: 'p', x: 'Combing fleas, lice and ticks <b>off furred animals or livestock</b>. Avoid spreading parasites between animals, wear <b>gloves and protective clothing</b>, and a repellent may be used first to make the parasites let go.' }] },
      ],
    },
    {
      id: 'col-groups',
      title: 'Methods for each group',
      kicker: 'Larvae, winged adults, wingless adults, ticks',
      blocks: [
        { k: 'table', head: ['Target', 'Methods'], rows: [
          { c: ['<b>Terrestrial larvae</b> (fly maggots)', 'Forceps into containers with perforated lids'] },
          { c: ['<b>Aquatic larvae</b> (mosquito larvae)', 'Clear plastic or glass containers <b>with their own water</b> (dippers, pipettes)'] },
          { c: ['<b>Nymphs</b>', 'As for the adults (same basic form)'] },
          { c: ['<b>Wingless ectoparasites</b> (fleas, lice, ticks)', 'Direct visual inspection, combing, <b>shaking the host</b>, flotation of faecal samples, aspirators or light traps'] },
        ] },
        { k: 'h', x: 'Winged adults (mosquitoes, sandflies, tsetse, blackflies)', l: 3 },
        { k: 'table', head: ['Method', 'How it works'], rows: [
          { c: ['<b>Light traps</b> / <b>CDC miniature light trap</b>', 'Light attracts them (e.g. Culex); the CDC version is small, battery-powered and portable'] },
          { c: ['<b>Gravid traps</b>', 'Water with an attractant lures <b>egg-ready females</b>'] },
          { c: ['<b>Backpack aspirators</b>', 'A motorised fan sucks resting mosquitoes off vegetation and walls'] },
          { c: ['<b>Resting boxes</b>', 'Dark sheltered boxes placed where mosquitoes rest'] },
          { c: ['<b>Human landing catch</b>', 'A collector catches mosquitoes landing to bite; the best measure of biting, but <b>controversial</b> because of infection risk'] },
        ] },
        { k: 'h', x: 'Ticks', l: 3 },
        { k: 'ul', items: ['<b>Blanket drag</b> (a woollen or flannel cloth pulled over vegetation; questing ticks cling to it), and drag samplers using clothes.', '<b>Flagging</b> (cloth on a pole waved over plants) and sweeping.', 'Tick tubes (glass tubes).', '<b>Pyrethrum aerosol spray</b> sampling (knocks ticks off for collection).', 'Inspecting <b>cattle</b> and other hosts directly.'] },
      ],
    },
    {
      id: 'col-preserve',
      title: 'Killing, preserving and pinning',
      kicker: 'Keep the diagnostic features intact',
      blocks: [
        { k: 'cards', items: [
          { title: 'Killing agents', blocks: [{ k: 'ul', items: ['<b>Chloroform</b>', 'Ether', '<b>Ethyl acetate</b> (the usual killing-jar agent)', 'Ethylene tetrachloride, carbon tetrachloride', 'UV lights'] }] },
          { title: 'Preserving fluids', blocks: [{ k: 'ul', items: ['<b>70–80% ethyl alcohol</b> (standard for larvae, fleas, lice, ticks)', '3% glycerol', '<b>7–10% formalin</b>', 'In an emergency: undiluted spirits (whisky, brandy, gin), petrol or kerosene', 'Keep specimens <b>out of direct sunlight</b> (heat damage)'] }] },
        ] },
        { k: 'box', title: 'Pinning adult insects', tone: 'formula', blocks: [{ k: 'ul', items: [
          'An entomological pin goes through the <b>thorax</b> (a housefly: right of the midline), with the data labels lower on the same pin.',
          'Small insects such as mosquitoes go on a <b>micropin</b> in a strip of polyporus (or card), which is then carried on a larger pin, or into the cork of a specimen tube.',
          'Larger flies such as <b>horseflies and tsetse</b> are wrapped in soft tissue or cotton wool after pinning.',
          'Keep and carry pinned specimens in a <b>cardboard box</b>.',
          '<b>Label</b> with genus and species, and with where, when and by whom collected.',
        ] }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Surveys: exploratory, control appraisal, epidemiological.',
          'Seven methods: hand picking, nets, aspirators, sifters/Berlese, light traps, baits, combing.',
          'Aquatic larvae in their own water; nymphs like adults.',
          'Mosquitoes: light, gravid, CDC traps, aspirators, resting boxes, landing catches.',
          'Ticks: blanket drag, flagging, pyrethrum spray.',
          'Kill with chloroform or ethyl acetate; preserve in 70–80% alcohol; pin through the thorax and label.',
        ] }] },
      ],
    },
  ]),
  quiz: [
    ['Insects make up about what share of known species?', 'More than two-thirds', ['About one-tenth of them', 'Roughly a quarter', 'Just under a third'], 'The most diverse group.', 'Biology'],
    ['Egg → larva → pupa → adult is', 'Complete metamorphosis', ['Incomplete metamorphosis', 'Ametabolous growth', 'Direct development'], 'Holometabolous.', 'Biology'],
    ['Nymphs of hemimetabolous insects are collected', 'Like the adults', ['Only with sifters', 'Only in water', 'Only with bait traps'], 'Same basic form.', 'Biology'],
    ['A survey to learn which species live in an area is', 'Exploratory', ['Control appraisal', 'Epidemiological', 'Residual'], 'It determines the fauna.', 'Surveys'],
    ['A survey to see whether spraying worked is', 'Control appraisal', ['Exploratory', 'Epidemiological', 'Faunistic'], 'It judges control operations.', 'Surveys'],
    ['Which item is NOT part of the basic field kit?', 'A slide stainer', ['Forceps and vials', 'A field notebook', 'A small hand lens'], 'Staining is done in the lab.', 'Equipment'],
    ['A fine brush in the kit is for', 'Picking up minute specimens', ['Painting the specimen labels', 'Applying insecticide to hosts', 'Cleaning out the killing jar'], 'Small mites and insects.', 'Equipment'],
    ['Fleas and lice on a person are best collected by', 'Hand picking', ['Light traps', 'Bait traps', 'Berlese funnels'], 'With forceps.', 'Methods'],
    ['An aspirator works by', 'Mouth suction', ['Electric light', 'Food baits', 'Heat and drying'], 'For small resting insects.', 'Methods'],
    ['A Berlese funnel collects insects from', 'Leaf litter and soil', ['Fast-flowing streams', 'Human skin and hair', 'Animal fur and feathers'], 'Heat drives them down.', 'Methods'],
    ['In a Berlese funnel, specimens fall into', '70% ethanol', ['Clean water', 'Formalin vapour', 'Dry sand'], 'Below the funnel.', 'Methods'],
    ['A drawback of light traps is that they', 'Catch many non-targets', ['Only work in daylight', 'Catch only male insects', 'Need a human as bait'], 'Moths, beetles, bugs.', 'Methods'],
    ['Bait traps are best for', 'Houseflies, blowflies', ['Aquatic mosquito larvae', 'Ticks and soil mites', 'Bed bugs in mattresses'], 'Food or egg-laying baits.', 'Methods'],
    ['Bait traps are usually left out for', '24 hours', ['10 minutes', '1 week', '1 month'], 'Then emptied.', 'Methods'],
    ['Bait-trap catches give mainly', 'Qualitative information', ['Exact human biting rates', 'Parasite infection rates', 'Larval density in water'], 'Which species occur.', 'Methods'],
    ['Combing is used for vectors on', 'Furred animals', ['Pond water surfaces', 'Indoor house walls', 'Tree bark and logs'], 'With gloves.', 'Methods'],
    ['Mosquito larvae should be collected', 'With their own water', ['Dry, wrapped in paper', 'With forceps only', 'In formalin at once'], 'In clear containers.', 'Groups'],
    ['A gravid trap attracts', 'Egg-ready females', ['Males seeking mates', 'Larvae and pupae', 'Resting blood-fed males'], 'Water plus attractant.', 'Groups'],
    ['The method controversial because of infection risk is the', 'Human landing catch', ['Indoor resting box survey', 'Gravid trap', 'CDC light trap'], 'A person is the bait.', 'Groups'],
    ['Shaking the host is a method for', 'Fleas and lice', ['Aquatic larvae', 'Flying adult insects', 'Mites in leaf litter'], 'Fleas and lice.', 'Groups'],
    ['Ticks questing on vegetation are sampled by', 'Blanket dragging', ['Light trapping', 'Berlese funnels', 'Gravid trap catches'], 'Also flagging.', 'Groups'],
    ['A common killing agent in killing jars is', 'Ethyl acetate', ['Glycerol 3%', 'Formalin 10%', 'Ethanol 70%'], 'Also chloroform.', 'Preserving'],
    ['The standard preserving fluid for larvae and fleas is', '70–80% ethyl alcohol', ['3% formalin vapour', 'Pure distilled water', 'Dilute vinegar'], 'Formalin 7–10% also used.', 'Preserving'],
    ['If no alcohol is available, specimens can be kept in', 'Undiluted gin or whisky', ['Fresh tap water', 'Milk or fruit juice', 'Cooking vegetable oil'], 'Or kerosene.', 'Preserving'],
    ['An adult insect is pinned through the', 'Thorax', ['Head', 'Abdomen', 'Wing'], 'Labels go lower on the pin.', 'Pinning'],
    ['After pinning, tsetse and horseflies are', 'Wrapped in tissue', ['Dipped in formalin', 'Kept in plain water', 'Dried out in the sun'], 'Or cotton wool.', 'Pinning'],
    ['Specimen labels should give', 'Genus and species', ['Only the price', 'Only the colour', 'The collector’s age'], 'Plus place and date.', 'Pinning'],
  ],
};
