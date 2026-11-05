// Anatomy → Embryology (HB2) — the seven lessons (reading layer).
// Source: the "Fertilization, Cleavage, 1–3 Weeks" lecture deck (em in sources.ts).
import type { LessonDraft } from '@/data/topics/build';
import { interactive, readingExtras } from '@/data/topics/embryology/interactive';
import { em, type ConceptId } from '@/data/topics/embryology/sources';

type Draft = LessonDraft<ConceptId>;

const lesson1: Draft = {
  id: 'embryology-1',
  title: 'Fertilization',
  description: 'How sperm reach the ampulla, the changes they must undergo (capacitation, hyperactivation and the acrosome reaction), the zona pellucida proteins, the three phases of fertilization, how the oocyte responds and what fertilization achieves.',
  xp: 25,
  sourceRefs: em([1, 2, 3, 5, 6, 8, 12, 13, 14, 15, 16, 18, 19, 21, 24, 25, 26, 27, 28, 29, 30]),
  objectives: [
    'Describe how sperm travel to the ampulla, including thermotaxis and chemotaxis',
    'Explain capacitation, hyperactivation and the acrosome reaction',
    'Give the roles of ZP1–ZP4 and of ovastacin',
    'Describe the three phases of fertilization and the molecules that join sperm to oocyte',
    'Describe the cortical and zona reactions, the end of meiosis II and the pronuclei',
    'List the results of fertilization',
  ],
  chunks: [
    {
      title: 'The journey to the ampulla',
      kind: 'overview',
      paragraphs: [
        'Sperm are moved by muscular contractions of the uterus and uterine tubes and by their own swimming. Getting from the cervix to the oviduct takes at least 2–7 hours (slide 2).',
        'Once they reach the isthmus of the tube, sperm slow down and stop migrating. At ovulation they become active again, attracted by chemicals (chemoattractants) released by the cumulus cells around the oocyte, and swim on to the ampulla (slide 3).',
        'Thermotaxis: through most of the tube the sperm steer by temperature, because the tube holding the ovulated oocyte is slightly warmer; close to the fertilization site they switch to following the egg’s chemical signal (slide 5).',
      ],
      terms: [
        { term: 'Ampulla', meaning: 'The wide outer part of the uterine tube, the usual site of fertilization.' },
        { term: 'Thermotaxis', meaning: 'Movement guided by a temperature difference.' },
        { term: 'Chemotaxis', meaning: 'Movement towards a chemical signal; here, from the cumulus cells.' },
      ],
      sourceRefs: em([2, 3, 5]),
    },
    {
      title: 'Capacitation and hyperactivation',
      kind: 'mechanism',
      paragraphs: [
        'Before a spermatozoon can fertilize, it must go through capacitation (with hyperactivation) and the acrosome reaction (slide 6).',
        'Capacitation is a period of conditioning in the female reproductive tract, in the uterine tubes, lasting about 7 hours. It depends on contact between the sperm and the mucosal lining of the tube. A glycoprotein coat and seminal plasma proteins are stripped from the plasma membrane over the acrosome. Only capacitated sperm can pass through the corona radiata and go on to the acrosome reaction (slides 8–10).',
        'Hyperactivation is the sperm’s ability to swim faster and more forcefully, which helps it push through the zona pellucida to reach the oocyte (slide 12).',
      ],
      terms: [
        { term: 'Capacitation', meaning: 'About 7 hours of conditioning in the uterine tube that removes the glycoprotein coat over the acrosome.' },
        { term: 'Hyperactivation', meaning: 'Faster, more vigorous swimming that helps penetration of the zona pellucida.' },
      ],
      sourceRefs: em([6, 8, 9, 10, 12]),
    },
    {
      title: 'The acrosome reaction and the zona pellucida',
      kind: 'mechanism',
      paragraphs: [
        'The acrosome reaction happens after the sperm binds to the zona pellucida of the secondary oocyte and is triggered by zona proteins. It releases the enzymes needed to get through the zona: acrosin and trypsin(-like enzymes) (slide 13).',
        'The zona pellucida is a glycoprotein covering of the oocyte made of four glycoproteins (slides 18, 23):',
      ],
      table: {
        columns: ['Protein', 'Role (slides 18, 23)'],
        rows: [
          ['ZP1', 'Cross-links ZP2 with ZP3, which stops more spermatozoa binding'],
          ['ZP2', 'A secondary sperm-binding protein'],
          ['ZP3', 'Lets the spermatozoon bind and triggers the acrosome reaction'],
          ['ZP4', 'Function unknown'],
        ],
      },
      keyPoints: ['After fertilization the ovum secretes ovastacin, an enzyme that cuts ZP2, so no more sperm can bind to the zona (slide 18).'],
      terms: [
        { term: 'Acrosin', meaning: 'The acrosomal enzyme that digests a path through the zona pellucida.' },
        { term: 'Ovastacin', meaning: 'An enzyme released by the ovum after fertilization that degrades ZP2.' },
      ],
      sourceRefs: em([13, 18, 23]),
    },
    {
      title: 'The three phases of fertilization',
      kind: 'pathway',
      paragraphs: [
        'Fertilization is the penetration of the corona radiata and zona pellucida by a spermatozoon and its piercing of the secondary oocyte’s plasma membrane. It usually happens in the ampulla. Only about 1% of the sperm deposited in the vagina enter the cervix, and sperm can survive in the female tract for about 5 days (slide 14).',
      ],
      steps: [
        { label: 'Phase 1: through the corona radiata', detail: 'Of the 200–300 million sperm deposited, only 300–500 reach the ampulla and only one fertilizes. The others help it get through the barriers around the egg. Only capacitated sperm pass freely between the corona cells (slide 16).' },
        { label: 'Phase 2: through the zona pellucida', detail: 'The zona keeps the sperm bound and triggers the acrosome reaction (ZP3 does both). Released acrosin lets the sperm through to the oocyte’s plasma membrane. When the head of the first sperm touches the zona, lysosomal enzymes are released from the cortical granules under the oocyte membrane; they change the zona (the zona reaction) so other sperm cannot get in, which prevents polyspermy (slides 19, 21).' },
        { label: 'Phase 3: fusion of the membranes', detail: 'First contact is partly made by integrins on the oocyte binding disintegrins on the sperm. The two plasma membranes then fuse, helped by fertilin (an integral protein of the sperm membrane) acting with CD9 and integrins on the oocyte membrane. Both the head and the tail enter the oocyte cytoplasm, but the sperm’s plasma membrane stays behind on the oocyte surface (slide 24).' },
      ],
      terms: [
        { term: 'Polyspermy', meaning: 'Fertilization by more than one sperm; prevented by the cortical and zona reactions.' },
        { term: 'Fertilin', meaning: 'A sperm membrane protein that, with CD9 and integrins on the oocyte, brings about membrane fusion.' },
      ],
      sourceRefs: em([14, 15, 16, 19, 21, 24]),
    },
    {
      title: 'How the oocyte responds',
      kind: 'pathway',
      paragraphs: ['As soon as the sperm enters, the oocyte responds in three ways (slide 25):'],
      steps: [
        { label: 'Cortical and zona reactions', detail: 'Cortical granules release lysosomal enzymes; the oocyte membrane becomes impenetrable to other sperm, and the zona changes its structure and make-up so sperm can neither bind nor get through. Together these prevent polyspermy (slide 26).' },
        { label: 'Meiosis II is completed', detail: 'The oocyte finishes its second meiotic division at once and is now called an ovum. One daughter cell, the polar body, gets very little cytoplasm; the other (the definitive oocyte) keeps 22 + X chromosomes in a vesicular nucleus, the female pronucleus (slide 27).' },
        { label: 'Metabolic activation', detail: 'The sperm nucleus swells into the male pronucleus beside the female pronucleus; the tail detaches and degenerates. The pronuclei touch, lose their nuclear envelopes, and their chromosomes mingle to form a diploid zygote (slide 28).' },
      ],
      keyPoints: [
        'The centrosome brought by the sperm forms the mitotic spindle, and the zygote divides for the first time into two blastomeres, the first two cells of the embryo (slide 29).',
        'All the centrosomes of the new individual come from the father; all its mitochondria come from the mother (slide 29).',
      ],
      terms: [
        { term: 'Pronucleus', meaning: 'The haploid nucleus of the egg (female) or the sperm (male) before they combine.' },
        { term: 'Blastomere', meaning: 'Each cell produced by the early divisions of the zygote.' },
      ],
      sourceRefs: em([25, 26, 27, 28, 29]),
    },
    {
      title: 'What fertilization achieves',
      kind: 'overview',
      steps: [
        { label: 'Restores the diploid number', detail: 'Half the chromosomes come from the father and half from the mother, so the zygote has a new combination different from either parent (slide 30).' },
        { label: 'Decides chromosomal sex', detail: 'An X-bearing sperm gives a female (XX), a Y-bearing sperm a male (XY); chromosomal sex is fixed at fertilization (slide 30).' },
        { label: 'Starts cleavage', detail: 'Without fertilization the oocyte usually degenerates about 24 hours after ovulation (slide 30).' },
      ],
      sourceRefs: em([30]),
    },
  ],
  summary: [
    'Cervix to tube in 2–7 h; sperm rest in the isthmus, then swim to the ampulla by thermotaxis and chemotaxis.',
    'Capacitation (~7 h, removes the coat over the acrosome) → hyperactivation → acrosome reaction at the zona (acrosin).',
    'ZP3 binds sperm and triggers the acrosome reaction; ZP2 is the secondary receptor; ovastacin cuts ZP2.',
    'Cortical and zona reactions block polyspermy; meiosis II ends; pronuclei fuse; centrosomes paternal, mitochondria maternal.',
  ],
};

const lesson2: Draft = {
  id: 'embryology-2',
  title: 'Cleavage, the Blastocyst and Twins',
  description: 'Cleavage of the zygote into blastomeres, compaction and the morula, formation of the blastocyst and the first step of implantation, and how twins (including conjoined twins) arise.',
  xp: 25,
  sourceRefs: em([32, 33, 36, 37, 38, 39, 40, 41, 43, 46, 48, 52, 53, 54, 55, 58, 59, 60, 61, 62, 63, 68, 70, 71, 85]),
  objectives: [
    'Define cleavage and describe compaction and the morula',
    'Explain how the blastocyst forms and what its parts become',
    'List the factors that favour twinning',
    'Compare monozygotic and dizygotic twins and the kinds of monozygotic twins',
    'Describe the causes and types of conjoined twins, and fetus in fetu',
  ],
  chunks: [
    {
      title: 'Cleavage',
      kind: 'mechanism',
      paragraphs: [
        'Development aims to turn one cell into a multicellular organism of about 30 trillion cells (slide 33). From the two-cell stage the zygote goes through a series of mitotic divisions. Cleavage is this series of divisions that splits the large zygote into many cells of normal size; each daughter cell is a blastomere. Cleavage runs from the zygote, through compaction, to the morula, and ends as the blastocyst (blastula) stage begins (slide 36).',
        'Up to the eight-cell stage the blastomeres form a loose clump (slide 37). After the third cleavage they make as much contact with each other as they can, forming a compact ball held together by tight junctions — compaction (slide 38). Compaction separates the blastomeres into inner and outer cells with different roles (slide 39).',
        'Cells then divide about every 12 hours, and up to eight generations of mitosis may happen with no growth of the cytoplasm in between (slide 43). The two-cell stage is shown at about 30 hours and the four-cell stage at about 40 hours (slide 46).',
      ],
      table: {
        columns: ['During cleavage (slide 48)'],
        rows: [
          ['The blastomeres do not grow'],
          ['Each division roughly halves the size of the cells'],
          ['The final mass of cells has the same size and genetic make-up as the zygote'],
          ['The zygote is divided into many small, identical cells that are the building blocks of the embryo'],
        ],
      },
      notes: [{ kind: 'check', text: 'Slide 43 says the first cleavage division occurs “1 to 5 days following ovulation”; slide 46 and standard texts place the 2-cell stage about 30 hours after fertilization. Learn the 30-hour figure and confirm the slide wording with the lecturer.' }],
      terms: [
        { term: 'Cleavage', meaning: 'Rapid mitotic divisions of the zygote without growth, giving smaller and smaller blastomeres.' },
        { term: 'Compaction', meaning: 'After the third cleavage, blastomeres flatten against each other and join by tight junctions.' },
      ],
      sourceRefs: em([33, 36, 37, 38, 39, 43, 46, 48]),
    },
    {
      title: 'The morula',
      kind: 'structure',
      paragraphs: [
        'About 4 days after fertilization the cells of the compacted embryo divide again to make a 16-cell morula (“mulberry”) (slide 40).',
        'The inner cells of the morula are the inner cell mass, which forms the embryo proper; the surrounding cells are the outer cell mass, which forms the trophoblast and later helps make the placenta (slide 41).',
      ],
      terms: [
        { term: 'Morula', meaning: 'A solid ball of about 16 blastomeres, about day 4.' },
        { term: 'Inner cell mass (embryoblast)', meaning: 'The inner cells that form the embryo proper.' },
        { term: 'Trophoblast', meaning: 'The outer cells that form the wall of the blastocyst and help make the placenta.' },
      ],
      sourceRefs: em([40, 41]),
    },
    {
      title: 'Blastocyst formation',
      kind: 'pathway',
      steps: [
        { label: 'Fluid enters', detail: 'As the morula enters the uterine cavity, fluid seeps through the zona pellucida into the spaces between the cells of the inner cell mass (slide 52).' },
        { label: 'One cavity forms', detail: 'The spaces join into a single cavity, the blastocoel; the embryo is now a blastocyst (slide 52).' },
        { label: 'Two parts', detail: 'The inner cell mass (embryoblast) sits at one pole; the outer cell mass (trophoblast) flattens into the epithelial wall of the blastocyst (slide 53).' },
        { label: 'Zona lost, implantation begins', detail: 'The zona pellucida disappears so implantation can start. The blastocyst implants in the endometrium and is surrounded by an inner cytotrophoblast and an outer multinucleated syncytiotrophoblast (slide 53).' },
      ],
      keyPoints: [
        'First attachment to the uterus is made by L-selectin (CD62L, a cell adhesion molecule) on the trophoblast binding its carbohydrate receptors on the uterine epithelium (slide 54).',
        'Timeline: advanced morula (up to 16 blastomeres) about day 4; early blastocyst about 4.5 days, zona gone; early implantation about day 6 (slide 55).',
      ],
      notes: [{ kind: 'check', text: 'Slide 52 says the fluid comes “from the uterine tube”; textbooks say it comes from the uterine cavity. The slide also says it enters the inner cell mass; textbooks say the spaces between blastomeres. Confirm with the lecturer.' }],
      terms: [
        { term: 'Blastocoel', meaning: 'The fluid-filled cavity of the blastocyst.' },
        { term: 'Embryonic pole', meaning: 'The side of the blastocyst where the inner cell mass lies; the opposite side is the abembryonic pole.' },
      ],
      sourceRefs: em([52, 53, 54, 55]),
    },
    {
      title: 'Twinning and what favours it',
      kind: 'overview',
      paragraphs: ['Twins are two offspring of the same pregnancy, usually born close together, of the same or different sex. They are monozygotic (one egg, identical), dizygotic (two eggs, fraternal) or conjoined (slide 58).'],
      table: {
        columns: ['Factor', 'Why (slides 59–61)'],
        rows: [
          ['Family history', 'More likely with fraternal twins in the family'],
          ['Age', 'Women over 30, because FSH rises with age'],
          ['Race', 'African-American women more often than other races'],
          ['Obesity (BMI over 30)', 'Extra fat raises oestrogen, which can overstimulate the ovaries to release more than one egg (Gleicher, 2012)'],
          ['Height', 'Women averaging 164.8 cm more likely than those averaging 161.8 cm (Steinman, 2001)'],
          ['Breastfeeding', 'Twin rate 11.4% when conceiving while breastfeeding versus 1.1% otherwise (Steinman, 2001)'],
          ['High dairy intake', 'Insulin-like growth factor (IGF) makes the ovaries more sensitive to FSH'],
          ['Reproductive technologies', 'Ovulation-stimulating drugs (clomiphene citrate gives 2–3 eggs a cycle); IVF fertilizes several eggs in the lab and returns them to the uterus'],
        ],
      },
      sourceRefs: em([58, 59, 60, 61]),
    },
    {
      title: 'Monozygotic and dizygotic twins',
      kind: 'comparison',
      table: {
        columns: ['', 'Monozygotic (identical)', 'Dizygotic (fraternal)'],
        rows: [
          ['Origin', 'One oocyte fertilized by one sperm', 'Two oocytes, two sperm'],
          ['Sex', 'Same', 'Same or different'],
          ['Blood group', 'Same', 'Different'],
          ['Placenta', 'Shared (monochorionic) or separate (dichorionic)', 'Separate'],
        ],
      },
      paragraphs: [
        'Monozygotic twins come from one zygote that divides into two separate, identical embryos, each developing into a baby (slides 62–67). Normally only one egg is ovulated a month and fertilized by one sperm; dizygotic twins arise when more than one egg is ovulated and fertilized (more for triplets; fertility drugs). They may be of opposite sex because different sperm fertilize different eggs, and their frequency is raised by genetic predisposition, maternal age and fertility drugs (slide 85).',
      ],
      steps: [
        { label: 'Split at the two-cell stage', detail: 'The zygote divides into two separate cells (embryos) at the first cleavage (slide 68).' },
        { label: 'Two inner cell masses', detail: 'Two inner cell masses form, each giving a separate embryo (slide 68).' },
        { label: 'One inner cell mass that later divides', detail: 'A single inner cell mass forms and later splits into two embryos (slide 68).' },
        { label: 'Incomplete division', detail: 'A single inner cell mass divides incompletely, giving conjoined (Siamese) twins (slide 68).' },
      ],
      sourceRefs: em([62, 63, 68, 85]),
    },
    {
      title: 'Conjoined twins and fetus in fetu',
      kind: 'clinical',
      paragraphs: [
        'There are two theories. Identical twins usually separate 8–12 days after fertilization; if the split happens later (usually 13–15 days), it stops before it is complete. Alternatively, two separate embryos may fuse early in development. What causes either is unknown. Conjoined twins tend to be born early, and one or both may be stillborn or die soon after birth (slide 70).',
        'They are named by where they are joined (“pagus” means fixed or united) and occur in about 1 in 100,000 pregnancies (slide 71).',
      ],
      table: {
        columns: ['Type', 'Where joined (slides 72–82)'],
        rows: [
          ['Pygopagus', 'Back to back at the sacrum (lower back and pelvis); about 19%'],
          ['Parapagus', 'Side by side at the lower half of the body; about 5%'],
          ['Dicephalic parapagus', 'Rare partial twinning: two heads side by side on one torso'],
          ['Cephalopagus', 'Back of the head and upper body, lower parts separate; joined at head and neck, brain malformed, stillborn or die soon after birth'],
          ['Craniopagus', 'Skull only; the brain may be shared'],
          ['Thoracopagus', 'The thorax; the heart is always involved'],
          ['Omphalopagus', 'The front of the trunk, usually the abdomen (thorax to umbilicus); usually face each other; 4 arms, 4 legs; may share liver, gut or genitourinary functions (omphalos = navel)'],
          ['Thoraco-omphalopagus', 'Upper chest to abdomen; usually share a heart, may share liver or part of the gut'],
          ['Ischiopagus', 'Lower spine, end to end at 180°; 4 arms, 2–4 legs, one set of external genitalia and anus'],
          ['Rachipagus', 'Back to back above the lumbar spine (a parasitic form exists)'],
        ],
      },
      keyPoints: [
        'Fetus in fetu: a fetus-like mass inside the body; it may be a parasitic twin growing within its host twin. Theories: a normal fetus that became enclosed in its twin, or a highly developed teratoma (a tumour of several tissues such as hair, muscle, teeth or bone) (slide 83).',
        'A parasitic twin is anencephalic and lacks some internal organs, so it cannot survive alone; because the host feeds it through a single umbilical cord, they usually die before birth (slide 84).',
      ],
      terms: [{ term: '-pagus', meaning: 'Fixed or united; the prefix names the joined region.' }],
      sourceRefs: em([70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84]),
    },
  ],
  summary: [
    'Cleavage: mitoses without growth; compaction after the 3rd division (tight junctions); 16-cell morula about day 4.',
    'Blastocyst (about 4.5 days): blastocoel, embryoblast at one pole, trophoblast wall; zona lost; implantation about day 6 via L-selectin.',
    'Monozygotic: one zygote, same sex and blood group, one or two placentas. Dizygotic: two eggs, separate placentas.',
    'Conjoined twins: late split (13–15 days) or fusion; about 1 in 100,000; named by the joined part (-pagus).',
  ],
};

const lesson3: Draft = {
  id: 'embryology-3',
  title: 'Week 2: The Bilaminar Germ Disc',
  description: 'Day by day through the second week: implantation is completed, the trophoblast and embryoblast each split into two, the amniotic cavity, yolk sacs and chorionic cavity form, the uteroplacental circulation begins, and the clinical side of implantation.',
  xp: 25,
  sourceRefs: em([86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 99, 100, 102, 104, 106, 107, 108, 110, 111, 112, 113, 114, 117, 118, 119, 120, 121, 122, 126, 127]),
  objectives: [
    'List the “twos” of week 2',
    'Describe days 8, 9, 11–12 and 13 of development',
    'Explain how the uteroplacental circulation and the decidual reaction begin',
    'Explain hCG, immune protection of the conceptus, and abnormal implantation sites',
    'Describe hydatidiform moles and how often early pregnancies fail',
  ],
  chunks: [
    {
      title: 'Day 8: two layers from each part',
      kind: 'structure',
      paragraphs: [
        'Week 2 is the week of twos: implantation is completed; the trophoblast forms cytotrophoblast and syncytiotrophoblast; the embryoblast forms epiblast and hypoblast; two yolk sacs (primary, then secondary) and two new cavities (amniotic and chorionic) appear; extraembryonic mesoderm forms and splits into somatic and splanchnic layers; the primitive uteroplacental circulation starts; and the connecting stalk and prechordal plate form (slides 87, 115).',
        'On day 8 the blastocyst is partly embedded in the endometrial stroma. The trophoblast has an inner cytotrophoblast of mononucleated cells and an outer syncytiotrophoblast, a multinucleated zone with no cell boundaries. Mitoses are seen in the cytotrophoblast but not the syncytiotrophoblast: cytotrophoblast cells divide, move into the syncytiotrophoblast, fuse and lose their membranes (slides 88, 89).',
        'The embryoblast also forms two layers: the hypoblast, small cuboidal cells next to the blastocyst cavity, and the epiblast, tall columnar cells next to the amniotic cavity; together they make a flat disc (slide 90). A small cavity in the epiblast enlarges into the amniotic cavity; epiblast cells next to the cytotrophoblast are amnioblasts and, with the rest of the epiblast, line it (slide 91). Near the implantation site the endometrial stroma is oedematous and very vascular, and its large tortuous glands pour out glycogen and mucus (slide 92).',
      ],
      notes: [{ kind: 'check', text: 'Slide 90 says “these 4 layers form a flat disc”; the disc is bilaminar — two layers, epiblast and hypoblast.' }],
      terms: [
        { term: 'Syncytiotrophoblast', meaning: 'The outer multinucleated layer of trophoblast with no cell boundaries; it invades the endometrium.' },
        { term: 'Epiblast / hypoblast', meaning: 'The tall columnar upper layer and the cuboidal lower layer of the bilaminar disc.' },
        { term: 'Amnioblasts', meaning: 'Epiblast cells that line the amniotic cavity next to the cytotrophoblast.' },
      ],
      sourceRefs: em([87, 88, 89, 90, 91, 92]),
    },
    {
      title: 'Day 9: the lacunar stage',
      kind: 'structure',
      paragraphs: [
        'The blastocyst is more deeply embedded, and a fibrin coagulum closes the hole it made in the surface epithelium (slide 93). At the embryonic pole vacuoles appear in the syncytium and fuse into large lacunae — the lacunar stage (slide 94).',
        'At the abembryonic pole flattened cells from the hypoblast form a thin exocoelomic (Heuser’s) membrane lining the inner surface of the cytotrophoblast. With the hypoblast it lines the exocoelomic cavity, the primitive yolk sac (slides 95, 96).',
      ],
      terms: [
        { term: 'Lacunae', meaning: 'Spaces in the syncytiotrophoblast that later fill with maternal blood.' },
        { term: 'Heuser’s membrane', meaning: 'The exocoelomic membrane from the hypoblast, lining the primitive yolk sac.' },
      ],
      sourceRefs: em([93, 94, 95, 96]),
    },
    {
      title: 'Days 11 and 12',
      kind: 'pathway',
      steps: [
        { label: 'Fully embedded', detail: 'The blastocyst is completely within the stroma; surface epithelium almost covers the defect, and the blastocyst makes a slight bulge into the uterine lumen (slide 97).' },
        { label: 'Lacunar network', detail: 'Syncytial lacunae join into a network, clearest at the embryonic pole; at the abembryonic pole the trophoblast is still mostly cytotrophoblast (slide 98).' },
        { label: 'Sinusoids tapped', detail: 'Syncytiotrophoblast erodes the endothelium of congested, dilated maternal capillaries (sinusoids). The lacunae become continuous with them, maternal blood enters and flows through the trophoblast: the uteroplacental circulation begins (slides 99, 100).' },
        { label: 'Extraembryonic mesoderm', detail: 'New cells from the epiblast (via the yolk sac cells) form loose connective tissue between the cytotrophoblast and the exocoelomic cavity, filling the space between trophoblast outside and amnion and exocoelomic membrane inside (slides 102, 103).' },
        { label: 'Chorionic cavity', detail: 'Cavities in this mesoderm merge into the extraembryonic coelom (chorionic cavity), which surrounds the yolk sac and amniotic cavity except where the connecting stalk joins disc to trophoblast (slides 104, 105).' },
        { label: 'Two mesoderm layers', detail: 'Mesoderm lining the cytotrophoblast and amnion is extraembryonic somatopleuric mesoderm; that covering the yolk sac is extraembryonic splanchnopleuric mesoderm (slide 106).' },
      ],
      keyPoints: [
        'The disc grows slowly compared with the trophoblast and stays 0.1–0.2 mm (slide 107).',
        'Decidual reaction: endometrial cells become polyhedral and full of glycogen and lipid, the spaces fill with extravasated fluid and the tissue is oedematous; it starts round the implantation site and soon spreads through the endometrium (slide 107).',
      ],
      terms: [
        { term: 'Uteroplacental circulation', meaning: 'Maternal blood flowing through the trophoblastic lacunae.' },
        { term: 'Extraembryonic coelom (chorionic cavity)', meaning: 'The space in the extraembryonic mesoderm around the yolk sac and amnion.' },
        { term: 'Decidual reaction', meaning: 'Swelling and glycogen and lipid loading of the endometrial stromal cells.' },
      ],
      sourceRefs: em([97, 98, 99, 100, 102, 103, 104, 105, 106, 107]),
    },
    {
      title: 'Day 13',
      kind: 'structure',
      paragraphs: [
        'The surface defect has usually healed. Sometimes the implantation site bleeds because more blood flows into the lacunae; as this happens near day 28 of the cycle it can be mistaken for a period and throw off the expected delivery date (slide 108).',
        'Cytotrophoblast cells grow locally into the syncytiotrophoblast as cell columns covered by syncytium: these are primary villi (slide 110). The chorionic cavity enlarges as soon as it forms while, at the same time, the hypoblast makes more cells (slide 111).',
        'These hypoblast cells migrate along the inside of the exocoelomic membrane and form a new, much smaller cavity within the old one: the secondary (definitive) yolk sac. Large parts of the primary yolk sac are pinched off as exocoelomic cysts, often found in the chorionic cavity, which expands into a large cavity (slides 112, 113).',
        'Extraembryonic mesoderm lining the inside of the cytotrophoblast is now the chorionic plate. Mesoderm crosses the chorionic cavity only in the connecting stalk, which becomes the umbilical cord once blood vessels develop (slide 114).',
      ],
      terms: [
        { term: 'Primary villus', meaning: 'A column of cytotrophoblast covered by syncytiotrophoblast.' },
        { term: 'Secondary (definitive) yolk sac', meaning: 'The smaller yolk sac formed by new hypoblast cells inside the primary one.' },
        { term: 'Connecting stalk', meaning: 'The only bridge of mesoderm across the chorionic cavity; the future umbilical cord.' },
      ],
      sourceRefs: em([108, 110, 111, 112, 113, 114]),
    },
    {
      title: 'Abnormal implantation',
      kind: 'clinical',
      paragraphs: [
        'The syncytiotrophoblast makes hormones, including human chorionic gonadotropin (hCG). By the end of week 2 there is enough hCG to detect by radioimmunoassay, the basis of pregnancy tests (slide 117).',
        'Half the embryo’s genome is paternal, so it is a potential foreign graft. It is protected by immunosuppressive cytokines and proteins and by an unusual MHC class IB molecule, HLA-G, that blocks its recognition as foreign. In maternal autoimmune disease such as systemic lupus erythematosus, antibodies may attack and reject the conceptus (slides 117, 118).',
      ],
      table: {
        columns: ['Site', 'What happens (slides 118–121)'],
        rows: [
          ['Normal', 'Anterior or posterior wall of the body of the uterus'],
          ['Near the internal os', 'The placenta later bridges the os (placenta previa): severe, even life-threatening bleeding late in pregnancy and at delivery'],
          ['Uterine tube', '95% of ectopic pregnancies, most in the ampulla'],
          ['Abdominal cavity', 'Most often the peritoneum of the rectouterine pouch (pouch of Douglas); also the intestinal peritoneum or omentum'],
          ['Ovary', 'Primary ovarian pregnancy'],
        ],
      },
      keyPoints: [
        'In most ectopic pregnancies the embryo dies around the second month, causing severe haemorrhage and abdominal pain (slide 120).',
        'Abnormal blastocysts are common: of 26 implanted blastocysts aged 7.5–17 days from women of normal fertility, 9 (34.6%) were abnormal — some syncytium only, some with trophoblastic hypoplasia, two with no embryoblast, some with a wrongly oriented disc. Most would give no sign of pregnancy because their trophoblast could not keep the corpus luteum going, and would be lost with the next period (slides 121, 122).',
      ],
      terms: [
        { term: 'hCG', meaning: 'Human chorionic gonadotropin, made by syncytiotrophoblast; detected in pregnancy tests.' },
        { term: 'HLA-G', meaning: 'An unusual MHC class IB molecule that stops the mother recognising the conceptus as foreign.' },
        { term: 'Ectopic pregnancy', meaning: 'Implantation outside the uterus.' },
      ],
      sourceRefs: em([117, 118, 119, 120, 121, 122]),
    },
    {
      title: 'Hydatidiform mole and reproductive failure',
      kind: 'clinical',
      paragraphs: [
        'Sometimes the trophoblast develops and forms placental membranes with little or no embryonic tissue: a hydatidiform mole. Moles secrete high levels of hCG and may give benign or malignant tumours (invasive mole, choriocarcinoma) (slide 122).',
        'Mole cells are diploid but their whole genome is paternal: most moles come from fertilization of an oocyte with no nucleus, then duplication of the male chromosomes. So male and female pronuclei, though genetically equivalent, differ in function — paternal genes regulate most of trophoblast development, which proceeds even without a female pronucleus (slide 126).',
      ],
      table: {
        columns: ['Stage', 'Fate (slide 127)'],
        rows: [
          ['Not fertilized', '15% of oocytes, even in fertile women under ideal conditions'],
          ['Cleave but fail to implant', '10–15%'],
          ['Implant', '70–75%; of these only 58% survive to week 2, and 16% of those are abnormal'],
          ['Alive at the first missed period', 'Only 42% of eggs exposed to sperm; more are lost later or abnormal at birth'],
        ],
      },
      terms: [
        { term: 'Hydatidiform mole', meaning: 'Trophoblast with little or no embryo; diploid but entirely paternal; high hCG.' },
        { term: 'Choriocarcinoma', meaning: 'A malignant tumour of trophoblast.' },
      ],
      sourceRefs: em([122, 126, 127]),
    },
  ],
  summary: [
    'Day 8: cytotrophoblast + syncytiotrophoblast; epiblast + hypoblast (bilaminar disc); amniotic cavity with amnioblasts.',
    'Day 9: lacunae; Heuser’s membrane lines the primary yolk sac. Days 11–12: sinusoids eroded → uteroplacental circulation; extraembryonic mesoderm and coelom; decidual reaction.',
    'Day 13: primary villi; secondary yolk sac; chorionic plate; connecting stalk → umbilical cord.',
    'hCG detectable by end of week 2; 95% of ectopics in the tube (mostly ampulla); moles are diploid and entirely paternal.',
  ],
};

const lesson4: Draft = {
  id: 'embryology-4',
  title: 'Week 3: Gastrulation and the Notochord',
  description: 'Gastrulation turns the bilaminar disc into three germ layers: the primitive streak and node, invagination, the prechordal plate and the two membranes, the fate map, the notochord, and what goes wrong when gastrulation is disturbed.',
  xp: 25,
  sourceRefs: em([132, 134, 135, 137, 138, 139, 142, 144, 145, 146, 148, 149, 154, 156, 157, 158, 159, 160, 161, 163, 166, 170, 171, 172, 173, 176, 197, 198, 199, 200, 202, 204, 207, 209]),
  objectives: [
    'Define gastrulation and say when the embryonic period runs',
    'Describe the primitive streak, node, pit and groove and the axes they set up',
    'Explain how the epiblast gives rise to all three germ layers',
    'Describe the prechordal plate and the oropharyngeal and cloacal membranes',
    'Give the fate map of the primitive streak',
    'Describe how the notochord forms and what it does',
    'Explain holoprosencephaly, caudal dysgenesis and sacrococcygeal teratoma',
  ],
  chunks: [
    {
      title: 'Gastrulation',
      kind: 'overview',
      paragraphs: [
        'Gastrulation is the process that turns the early embryo into a body of many cell and tissue types. It begins the embryonic period (weeks 3–8), uses several kinds of morphogenetic movements and shape changes, and turns the bilaminar disc into a trilaminar one; the embryo is now a gastrula (slide 134).',
        'It is the most characteristic event of week 3 and sets up all three germ layers: ectoderm, mesoderm and endoderm (slide 135).',
      ],
      terms: [{ term: 'Gastrulation', meaning: 'Formation of the three germ layers from the epiblast in week 3.' }],
      sourceRefs: em([134, 135]),
    },
    {
      title: 'The primitive streak',
      kind: 'structure',
      paragraphs: [
        'Gastrulation starts with the primitive (Spemann’s) streak, a narrow groove on the surface of the epiblast (slide 137). Its cranial end widens into the primitive (Hensen’s) node: a slightly raised area around the small primitive pit. The pit continues caudally down the midline of the streak as a trough, the primitive groove (slides 138–140).',
        'The streak defines all the main body axes: cranial–caudal (head–tail), dorsal–ventral (back–belly), medial–lateral and left–right. At this stage the embryo is pear-shaped, broad in front and narrow behind (slide 142).',
      ],
      terms: [
        { term: 'Primitive node (Hensen’s node)', meaning: 'The raised cranial end of the streak around the primitive pit.' },
        { term: 'Primitive groove', meaning: 'The midline trough of the streak, continuous with the pit.' },
      ],
      sourceRefs: em([137, 138, 139, 140, 142]),
    },
    {
      title: 'Forming the three germ layers',
      kind: 'pathway',
      steps: [
        { label: 'Migration to the streak', detail: 'Epiblast cells move towards the streak; there they become flask-shaped, detach and slip beneath the epiblast — invagination. Migration and specification are controlled by FGF8, made by the streak cells themselves (slides 144, 145).' },
        { label: 'Endoderm', detail: 'Some invaginated cells displace the hypoblast, making the embryonic endoderm (slide 146).' },
        { label: 'Mesoderm', detail: 'Others settle between the epiblast and the new endoderm as mesoderm (slide 148).' },
        { label: 'Ectoderm', detail: 'The cells left in the epiblast form ectoderm. So the epiblast is the source of all three germ layers and, through them, of every tissue and organ (slide 149).' },
        { label: 'Spreading', detail: 'More and more cells spread laterally and cranially between epiblast and hypoblast, beyond the disc edge, to meet the extraembryonic mesoderm over the yolk sac and amnion (slide 154).' },
      ],
      keyPoints: ['Summary (slide 166): the streak forms from epiblast; one wave of cells replaces the hypoblast as endoderm, a second forms mesoderm; the node at the cephalic end sends cells below the surface as the notochord; epiblast cells that stay put are surface ectoderm.'],
      terms: [
        { term: 'Invagination', meaning: 'Epiblast cells becoming flask-shaped and slipping under the epiblast at the streak.' },
        { term: 'FGF8', meaning: 'Fibroblast growth factor 8, made by streak cells; controls migration and specification.' },
      ],
      sourceRefs: em([144, 145, 146, 148, 149, 154, 166]),
    },
    {
      title: 'The prechordal plate and the two membranes',
      kind: 'structure',
      paragraphs: [
        'The prechordal plate is a thickening of endoderm at the cranial end (slide 156). Mesoderm migrating cranially passes either side of it (slide 157). It lies between the tip of the notochord and the oropharyngeal membrane (slide 158), and later matters for induction of the forebrain (slide 159).',
        'The oropharyngeal membrane at the cranial end is tightly stuck ectoderm and endoderm and marks the future opening of the mouth (slide 160). Intraembryonic mesoderm separates ectoderm from endoderm everywhere except cranially (here; future mouth opening, 4th week) and caudally at the cloacal membrane (future anus, 7th week). The primitive streak shrinks and disappears by the end of week 4 (slide 161).',
      ],
      notes: [{ kind: 'check', text: 'Slide 161 says the prechordal plate “later becomes” the oropharyngeal membrane, while slides 158 and 160 place the plate between the notochord and the membrane. Textbooks treat them as neighbours: the membrane lies just cranial to the plate.' }],
      terms: [
        { term: 'Prechordal plate', meaning: 'Thickened endoderm in front of the notochord; induces the forebrain.' },
        { term: 'Oropharyngeal membrane', meaning: 'Ectoderm stuck to endoderm at the future mouth; ruptures in week 4.' },
        { term: 'Cloacal membrane', meaning: 'Ectoderm stuck to endoderm at the future anus; breaks down in week 7.' },
      ],
      sourceRefs: em([156, 157, 158, 159, 160, 161]),
    },
    {
      title: 'The fate map',
      kind: 'classification',
      table: {
        columns: ['Cells entering through', 'Become (slide 163)'],
        rows: [
          ['Cranial region of the node', 'Notochord'],
          ['Lateral edges of the node and cranial end of the streak', 'Paraxial mesoderm (somitomeres and somites)'],
          ['Mid-streak', 'Intermediate mesoderm (urogenital system)'],
          ['Caudal streak', 'Lateral plate mesoderm (body wall)'],
          ['Caudal-most streak', 'Extraembryonic mesoderm (chorion)'],
        ],
      },
      paragraphs: ['The notochord is a flexible rod similar in structure to, but less stiff than, cartilage (slide 163).'],
      sourceRefs: em([163, 164, 165]),
    },
    {
      title: 'The notochord',
      kind: 'pathway',
      steps: [
        { label: 'Notochordal process', detail: 'Cells migrating cranially in the midline through the node form the notochordal process, which grows forward only as far as the prechordal plate (just caudal to the buccopharyngeal membrane) (slide 170).' },
        { label: 'Notochordal plate', detail: 'The process fuses for a time with the endoderm as the notochordal plate (slide 171).' },
        { label: 'Solid notochord', detail: 'As endoderm replaces the hypoblast, the plate cells multiply and detach to form the solid notochord beneath the neural tube. In humans it starts in the middle of the embryo and extends cranially and caudally (slide 171).' },
      ],
      table: {
        columns: ['Functions and fate (slides 172, 173)'],
        rows: [
          ['Forms the midline axis (head–tail) marking the future vertebral column'],
          ['Basis of the axial skeleton'],
          ['Induces the neural tube, the ventral (motor) brain and spinal cord, and the sclerotomes that form vertebrae'],
          ['Disappears as vertebral bodies form but persists as the nucleus pulposus and the apical ligament of the dens of C2'],
          ['Remnants can give tumours called chordomas'],
        ],
      },
      keyPoints: ['Where the pit indents the epiblast, a neurenteric canal briefly joins the amniotic and yolk sac cavities; it closes when the notochord detaches from the endoderm (slide 176).'],
      terms: [
        { term: 'Notochord', meaning: 'A midline rod of mesoderm that sets the axis and induces the neural tube.' },
        { term: 'Chordoma', meaning: 'A tumour from notochordal remnants.' },
      ],
      sourceRefs: em([170, 171, 172, 173, 176]),
    },
    {
      title: 'Teratogens and gastrulation defects',
      kind: 'clinical',
      paragraphs: [
        'The start of week 3 is very sensitive to teratogens: fate maps for organs such as the eyes and brain can already be drawn, and those cells can be damaged. High doses of alcohol now kill cells in the anterior midline, giving midline craniofacial defects and holoprosencephaly: a small forebrain, the two lateral ventricles often merged into one, and eyes close together (hypotelorism) (slides 197, 198). This stage is 2 weeks after fertilization — about 4 weeks after the last period — so a woman may not yet know she is pregnant and take no precautions (slide 198).',
        'Other teratogens of this period: alcohol, caffeine and tobacco; drugs such as thalidomide, temazepam and forms of retinoic acid (vitamin A); radiation; infections (rubella, herpes); and metabolic problems such as folic acid deficiency and diabetes (slide 204). Endoderm and ectoderm meet at the mouth and anus, which is why the upper rectum is endodermal and the lower rectum ectodermal. After gastrulation, cells of each layer can only become cell types of that layer (slide 204).',
      ],
      table: {
        columns: ['Condition', 'Features (slides 199–209)'],
        rows: [
          ['Caudal dysgenesis (sirenomelia, “mermaid syndrome”)', 'Too little mesoderm in the caudal-most embryo (abnormal mesoderm growth and migration). Hypoplasia and fusion of the lower limbs (flexion, inversion, lateral rotation); lumbar and sacral vertebral anomalies; renal agenesis; imperforate anus; genital anomalies (internal genital organs absent except the gonads). Linked to maternal diabetes and other causes'],
          ['Related associations', 'VATER: vertebral defects, anal atresia, tracheo-oesophageal fistula, radial and renal defects. VACTERL: the same plus cardiovascular and limb defects'],
          ['Sacrococcygeal teratoma', 'Remnants of the streak in the sacrococcygeal region (pluripotent cells) form tumours with tissues of all three layers; the commonest newborn tumour (1 in 37,000); more common in girls. May also arise from primordial germ cells that fail to reach the gonadal ridge'],
        ],
      },
      notes: [{ kind: 'check', text: 'Slide 207 says sacrococcygeal teratomas “usually become malignant during infancy”; textbooks say most are benign at birth, which is why they are removed early (malignancy becomes more likely with age).' }],
      terms: [
        { term: 'Holoprosencephaly', meaning: 'Failure of the forebrain to divide; small forebrain, single ventricle, close-set eyes.' },
        { term: 'Teratogen', meaning: 'An agent that causes birth defects.' },
        { term: 'Teratoma', meaning: 'A tumour containing derivatives of all three germ layers.' },
      ],
      sourceRefs: em([197, 198, 199, 200, 201, 202, 204, 207, 209]),
    },
  ],
  summary: [
    'Gastrulation (week 3) begins the embryonic period (weeks 3–8): bilaminar → trilaminar.',
    'Streak with node, pit and groove sets the axes; FGF8; epiblast → endoderm, mesoderm, ectoderm.',
    'Fate map: node → notochord; cranial streak → paraxial; mid → intermediate; caudal → lateral plate; caudal-most → extraembryonic.',
    'Notochord → nucleus pulposus and apical ligament of the dens; chordoma. Alcohol → holoprosencephaly; sirenomelia; sacrococcygeal teratoma.',
  ],
};

const lesson5: Draft = {
  id: 'embryology-5',
  title: 'Mesoderm, Neurulation and the Early Heart',
  description: 'What the three columns of mesoderm become (somites and their parts, the urogenital ridge, somatic and splanchnic mesoderm and the coelom), how the neural tube and neural crest form, neural tube defects, and the first heart tubes.',
  xp: 25,
  sourceRefs: em([167, 169, 175, 179, 180, 185, 186, 187, 189, 190, 192, 204, 211, 212, 215, 216, 217, 218, 219, 220, 221, 226, 227, 228, 230]),
  objectives: [
    'Name the three columns of intraembryonic mesoderm and their main derivatives',
    'Describe somitomeres, somites and the parts of a somite',
    'Describe the fate of intermediate and lateral plate mesoderm',
    'Describe neurulation and the closure of the neuropores',
    'Describe the neural crest',
    'Classify neural tube defects and explain their prevention and screening',
  ],
  chunks: [
    {
      title: 'Three columns of mesoderm',
      kind: 'overview',
      paragraphs: ['As the notochord and neural tube form, the mesoderm on each side forms three longitudinal columns (slides 169, 175):'],
      table: {
        columns: ['Column', 'Main derivatives'],
        rows: [
          ['Paraxial mesoderm', 'Somites, then dermomyotomes and sclerotomes: musculoskeletal structures'],
          ['Intermediate mesoderm', 'Urogenital system: kidneys, ureters and genitalia'],
          ['Lateral plate mesoderm', 'Split into two leaflets by the horseshoe-shaped intraembryonic coelom: body wall, body cavities, cardiovascular and gut structures'],
        ],
      },
      keyPoints: ['The intraembryonic coelom gives the pericardial, pleural and peritoneal cavities (slide 169).'],
      sourceRefs: em([169, 175]),
    },
    {
      title: 'Paraxial mesoderm: somitomeres and somites',
      kind: 'structure',
      paragraphs: [
        'Paraxial mesoderm segments, in head-to-tail order, into somitomeres. Somitomeres 1–7, from the head end to the otic vesicle (the future membranous labyrinth of the inner ear), give the mesoderm of the head and neck, which forms all its skeletal muscle (the pharyngeal arches). Somitomeres form the muscles and bones of the face and skull (slides 179, 185).',
        'The remaining somitomeres condense into blocks, the somites, visible on the back of the embryo between days 20 and 30. There are 42–44 pairs, appearing at different times, so their number is a good guide to the embryo’s age (slide 180): 4 occipital, 8 cervical, 12 thoracic, 5 lumbar, 5 sacral and 8–10 coccygeal. The first occipital and the last 5–7 coccygeal later disappear. The rest give most of the axial skeleton (vertebral column, ribs, sternum, skull base), its muscles and the overlying dermis (slide 186).',
      ],
      table: {
        columns: ['Part of the somite', 'Forms (slide 187)'],
        rows: [
          ['Sclerotome', 'Vertebrae, ribs and base of the skull'],
          ['Myotome (from the dermomyotome)', 'Skeletal muscles of the trunk and limbs'],
          ['Dermatome (from the dermomyotome)', 'Dermis and subcutaneous tissue of the skin'],
          ['Epaxial division (epimere) of the myotome', 'Small, dorsal: back muscles (erector spinae), supplied by dorsal rami'],
          ['Hypaxial division (hypomere) of the myotome', 'Larger, ventral: limb and ventral body wall muscles, supplied by ventral rami'],
        ],
      },
      keyPoints: ['Each myotome and dermatome keeps the nerve supply of its segment of origin (slide 187). The slide asks you to read about prune belly syndrome (absent abdominal wall muscles).'],
      terms: [
        { term: 'Somite', meaning: 'A paired block of paraxial mesoderm; 42–44 pairs.' },
        { term: 'Sclerotome', meaning: 'The part of a somite that forms vertebrae and ribs.' },
        { term: 'Dermomyotome', meaning: 'The part that forms skeletal muscle (myotome) and dermis (dermatome).' },
      ],
      sourceRefs: em([179, 180, 185, 186, 187]),
    },
    {
      title: 'Intermediate and lateral plate mesoderm',
      kind: 'structure',
      paragraphs: [
        'Intermediate mesoderm forms the urogenital ridge, the source of the kidneys and gonads. In the cervical and upper thoracic regions it forms segmented nephrotomes; further caudally it forms the unsegmented nephrogenic cord (slide 189).',
        'Lateral plate mesoderm is continuous with the extraembryonic mesoderm and is split by the intraembryonic coelom into a parietal (somatic, somatopleure) layer, continuous with the mesoderm over the amnion and lying against ectoderm, and a visceral (splanchnic, splanchnopleure) layer, continuous with the mesoderm over the yolk sac and lying against endoderm. The coelom forms the pericardial, pleural and peritoneal cavities (slide 189).',
      ],
      table: {
        columns: ['Layer', 'Forms (slide 190)'],
        rows: [
          ['Somatic mesoderm', 'Lateral and ventral body walls: dermis of the skin, bones and connective tissue of the limbs, the sternum'],
          ['Splanchnic mesoderm', 'Wall of the gut tube: smooth muscle of the gut, tunica media of blood vessels, cardiac muscle'],
        ],
      },
      keyPoints: ['Cross-sections on days 17, 19, 20 and 21 show the mesoderm developing; the labels are paraxial, intermediate and lateral plate mesoderm, notochord, amnion, intraembryonic coelom, the somatopleure (mesoderm + ectoderm) and splanchnopleure (mesoderm + endoderm), neural plate and groove (slides 192, 193).'],
      terms: [
        { term: 'Somatopleure', meaning: 'Somatic mesoderm with its ectoderm; forms the body wall.' },
        { term: 'Splanchnopleure', meaning: 'Splanchnic mesoderm with its endoderm; forms the gut wall.' },
      ],
      sourceRefs: em([189, 190, 192, 193]),
    },
    {
      title: 'Neurulation',
      kind: 'pathway',
      paragraphs: ['Neurulation is how the neural plate forms the neural tube, which forms the early brain and spinal cord. It begins in week 3 and ends on day 28 (slides 211, 212).'],
      steps: [
        { label: 'Neural plate', detail: 'The notochord induces the ectoderm above it to become neuroectoderm, forming the neural plate by day 18, between the buccopharyngeal membrane and the primitive node (slide 212).' },
        { label: 'Folds and groove', detail: 'The lateral edges rise as neural folds with a neural groove between them (slide 212).' },
        { label: 'Tube', detail: 'By the end of week 3 the folds fuse in the midline into a cylindrical neural tube that separates from the surface ectoderm. Fusion starts in the cervical region (5th somite) and spreads cranially and caudally (slides 212, 215).' },
        { label: 'Neuropores close', detail: 'Until then the ends open into the amniotic cavity as the cranial and caudal neuropores. The cranial closes on day 25 (18–20 somites) and becomes the lamina terminalis; the caudal closes on day 28 (25 somites) (slides 215, 216).' },
      ],
      keyPoints: ['The wide rostral part becomes the brain, the long caudal part the spinal cord; the lumen becomes the ventricles of the brain and the central canal of the cord (slide 216).'],
      terms: [
        { term: 'Neuropore', meaning: 'The open cranial or caudal end of the neural tube before closure.' },
        { term: 'Lamina terminalis', meaning: 'What the closed cranial neuropore becomes.' },
      ],
      sourceRefs: em([211, 212, 215, 216]),
    },
    {
      title: 'The neural crest',
      kind: 'structure',
      paragraphs: [
        'As the folds fuse, the cells at their tips — the neural crest cells — are not taken into the tube but break away from the neuroectoderm. They lie at first in the midline between the tube and the surface ectoderm, then form two clusters, one on each side of the tube, dorsolaterally (slide 217). The lecture shows a chart of their many derivatives (slide 218).',
      ],
      table: {
        columns: ['Neural crest derivatives (textbook)'],
        rows: [
          ['Sensory (dorsal root and cranial) ganglia and autonomic ganglia'],
          ['Schwann cells and the adrenal medulla'],
          ['Melanocytes'],
          ['Pia mater and arachnoid'],
          ['Much of the connective tissue and bone of the face and skull; odontoblasts'],
          ['The septum dividing the outflow tract of the heart'],
        ],
      },
      terms: [{ term: 'Neural crest', meaning: 'Cells from the tips of the neural folds that migrate widely to form many tissues.' }],
      sourceRefs: em([217, 218]),
    },
    {
      title: 'Neural tube defects',
      kind: 'clinical',
      paragraphs: [
        'Neural tube defects (NTDs) occur when the tube fails to close. If the cranial region fails, most of the brain does not form: anencephaly (cranioschisis), from failure of the anterior neuropore. Failure anywhere from the cervical region down gives spina bifida, from failure of the posterior neuropore; the commonest site is lumbosacral. Encephaloceles are skin-covered (slides 219, 220). The suffix -schisis means a cleft or split; aperta means open; occulta means hidden (slide 219).',
        'Craniorachischisis (total dysraphism) is failure of the whole tube to close, or any defect spanning the cranium and part of the spine. Rachischisis is anencephaly with a continuous spinal defect involving at least the cervical spine (slide 221).',
      ],
      table: {
        columns: ['Type of spina bifida', 'Features (slide 226)'],
        rows: [
          ['Occulta', 'Hidden, covered by skin'],
          ['Meningocele', 'Meninges bulge under the skin; very rare'],
          ['Meningomyelocele (myelomeningocele)', 'Meninges and part of the cord and nerves bulge under the skin; associated with Chiari II malformation'],
          ['Myeloschisis (rachischisis)', 'Bare nerve tissue with no meningeal cover'],
        ],
      },
      keyPoints: [
        'Meningocele and meningomyelocele may be grouped as spina bifida cystica (slide 226).',
        '50–70% of NTDs can be prevented by 400 µg of folic acid a day (slide 227).',
        'Animal studies implicate retinoic acid, insulin and high glucose; in humans, valproic acid (an antiepileptic), maternal diabetes and hyperthermia (slide 227).',
        'Raised maternal serum α-fetoprotein, tested at 16–18 weeks, goes with NTDs (and ventral wall defects such as gastroschisis) (slide 227).',
      ],
      terms: [
        { term: 'Anencephaly', meaning: 'Most of the brain fails to form because the cranial neuropore does not close.' },
        { term: 'Spina bifida', meaning: 'Failed closure of the caudal neural tube and vertebral arches; commonest lumbosacrally.' },
      ],
      sourceRefs: em([219, 220, 221, 222, 226, 227]),
    },
    {
      title: 'The first heart tubes',
      kind: 'overview',
      paragraphs: [
        'In week 3 the heart begins as paired heart tubes formed from splanchnic mesoderm near the prechordal plate (slide 228). The lecture closes week 3 with a timeline of its events (slides 230, 231).',
        'The tubes fuse into one heart tube, which begins beating in week 4 — just as the villous capillaries are ready to connect with the embryo’s own vessels (slides 228, 237).',
      ],
      terms: [{ term: 'Cardiogenesis', meaning: 'Development of the heart.' }],
      sourceRefs: em([228, 230, 231, 237]),
    },
  ],
  summary: [
    'Paraxial → somites (42–44 pairs, days 20–30: 4-8-12-5-5-8/10) → sclerotome, myotome, dermatome; epaxial = dorsal rami, hypaxial = ventral rami.',
    'Intermediate → urogenital ridge (nephrotomes, nephrogenic cord). Lateral plate → somatic (body wall) + splanchnic (gut wall, heart); coelom → three body cavities.',
    'Neural plate day 18; fusion from 5th somite; cranial neuropore day 25 (lamina terminalis), caudal day 28.',
    'NTDs: anencephaly, spina bifida (lumbosacral); folic acid 400 µg prevents 50–70%; AFP at 16–18 weeks.',
  ],
};

const lesson6: Draft = {
  id: 'embryology-6',
  title: 'Villi and the Placenta',
  description: 'How villi mature from primary to tertiary, the decidua and chorion, the trophoblastic shell, spiral arteries and cotyledons, the placental barrier and circulation, the full-term placenta and its functions, and abnormal placentation.',
  xp: 25,
  sourceRefs: em([233, 234, 235, 236, 237, 238, 239, 241, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 256, 258, 259, 260, 261, 264, 265, 266, 267, 269, 270, 271, 273, 274, 275, 276, 277, 279]),
  objectives: [
    'Describe primary, secondary and tertiary villi, and stem and free villi',
    'Name the parts of the decidua and explain chorion frondosum and laeve',
    'Describe the trophoblastic shell, spiral artery remodelling, septa and cotyledons',
    'List the layers of the placental membrane and how they change',
    'Describe placental circulation, the full-term placenta and its functions',
    'Describe placenta previa, abruption and accreta',
  ],
  chunks: [
    {
      title: 'From primary to tertiary villi',
      kind: 'pathway',
      steps: [
        { label: 'Primary villus', detail: 'At the start of week 3: a cytotrophoblast core covered by syncytium (slide 233).' },
        { label: 'Secondary villus', detail: 'Mesoderm grows into the core towards the decidua (slide 234).' },
        { label: 'Tertiary (definitive) villus', detail: 'By the end of week 3 the mesoderm in the core forms blood cells and small vessels, the villous capillary system (slide 235).' },
        { label: 'Linking to the embryo', detail: 'Villous capillaries join capillaries in the chorionic plate and connecting stalk, which join the embryo’s own vessels; so when the heart starts beating in week 4 the villi are ready to supply nutrients and oxygen (slides 236, 237).' },
      ],
      paragraphs: [
        'Cytotrophoblast cells in the villi push through the syncytium to the endometrium and join those of neighbouring villi, forming a thin outer cytotrophoblast shell that gradually surrounds the trophoblast and attaches the chorionic sac firmly to the endometrium (slides 238, 239).',
        'Villi that reach from the chorionic plate to the decidua basalis (the decidual plate, where the placenta will form) are stem or anchoring villi; those branching from their sides are free (terminal) villi, where exchange happens (slide 239). The chorionic cavity enlarges, and by day 19–20 the embryo hangs from its trophoblastic shell by a narrow connecting stalk, the future umbilical cord (slide 241).',
      ],
      terms: [
        { term: 'Tertiary villus', meaning: 'A villus with blood vessels in its mesodermal core.' },
        { term: 'Anchoring (stem) villus', meaning: 'A villus reaching from the chorionic plate to the decidua basalis.' },
        { term: 'Free (terminal) villus', meaning: 'A side branch floating in maternal blood, where exchange occurs.' },
      ],
      sourceRefs: em([233, 234, 235, 236, 237, 238, 239, 241]),
    },
    {
      title: 'Fetal membranes, decidua and chorion',
      kind: 'structure',
      paragraphs: [
        'Fetal (extraembryonic) membranes develop from the zygote but are not part of the embryo proper: the chorion, amnion, yolk sac, allantois and umbilical cord (slide 244). The placenta is the organ of nutrient and gas exchange between mother and fetus. From week 9 the fetus’s needs rise, so the placenta enlarges its surface between maternal and fetal parts, and the membranes change as more amniotic fluid is made (slide 245).',
        'It is a fetomaternal organ: the fetal part comes from the chorionic plate (chorion frondosum) — trophoblast and extraembryonic mesoderm; the maternal part comes from the decidua basalis of the endometrium (slide 246).',
      ],
      table: {
        columns: ['Part of the decidua', 'Where (slide 247)'],
        rows: [
          ['Decidua basalis', 'Where the chorion frondosum attaches; the maternal part of the placenta'],
          ['Decidua capsularis', 'Over the embryo, separating it from the uterine cavity'],
          ['Decidua parietalis (vera)', 'The rest of the decidua'],
        ],
      },
      keyPoints: [
        'Later the uterine cavity is obliterated as the decidua capsularis fuses with the parietalis (slide 248).',
        'Over the decidua capsularis (abembryonic side) the villi regress, leaving the smooth chorion laeve; on the decidua basalis side they grow, forming the leafy chorion frondosum, the fetal part of the placenta (slide 249).',
      ],
      terms: [
        { term: 'Decidua', meaning: 'The endometrium of pregnancy.' },
        { term: 'Chorion frondosum', meaning: 'The leafy chorion on the decidua basalis side; fetal part of the placenta.' },
        { term: 'Chorion laeve', meaning: 'The smooth chorion where villi have regressed.' },
      ],
      sourceRefs: em([244, 245, 246, 247, 248, 249]),
    },
    {
      title: 'Spiral arteries and cotyledons',
      kind: 'structure',
      paragraphs: [
        'By the 2nd month the trophoblast has many secondary and tertiary villi, giving it a radial look. Cytotrophoblast cells keep growing out through the syncytium, spread sideways at the endometrium and meet those of neighbouring villi: a thin trophoblastic shell, interrupted where maternal vessels open into the intervillous spaces (slides 250, 251).',
        'Maternal blood arrives through the spiral arteries. Cytotrophoblast cells released from the ends of anchoring villi invade the ends of the spiral arteries (endovascular invasion), replacing the endothelium to make hybrid vessels of fetal and maternal cells — an epithelial-to-endothelial transition. This turns narrow, high-resistance arteries into wide, low-resistance ones that deliver more blood to the intervillous spaces (slides 252, 253).',
        'Between the chorionic and decidual plates lie the intervillous spaces, filled with maternal blood. Daughter villi arise from the tertiary villi: free villi project into the spaces, anchoring villi attach to the basal plate (slide 254).',
      ],
      keyPoints: [
        'The decidua basalis sends septa into the intervillous spaces that do not reach the chorionic plate, so blood flows freely between compartments. These septa divide the placenta into 15–20 cotyledons (slide 256).',
        'The functional unit is the placentome (placental lobe): a villous tree from the chorionic plate perfused by one spiral artery; there are about 50–100 (slide 258).',
        'The septa have a core of maternal tissue but a syncytial covering, so a syncytial layer always separates maternal blood from fetal tissue (slide 259).',
      ],
      terms: [
        { term: 'Spiral arteries', meaning: 'Uterine arteries that supply the intervillous spaces; remodelled by cytotrophoblast.' },
        { term: 'Cotyledon', meaning: 'One of the 15–20 compartments of the placenta made by decidual septa.' },
        { term: 'Placentome', meaning: 'A villous tree perfused by one spiral artery; 50–100 per placenta.' },
      ],
      sourceRefs: em([250, 251, 252, 253, 254, 256, 258, 259]),
    },
    {
      title: 'The placental membrane',
      kind: 'structure',
      paragraphs: [
        'Before 20 weeks the placental barrier has four layers, from fetal to maternal side: the endothelium of the fetal capillaries, the connective tissue of the villus, the cytotrophoblast and the syncytiotrophoblast (slide 260). From the 4th month these layers thin out to ease exchange: the cytotrophoblast cells disappear and the syncytiotrophoblast becomes very thin (slide 261).',
        'The barrier does not keep out many harmful agents — alcohol, nicotine, viruses, drugs, exogenous hormones (oral contraceptives, oestrogen supplements) and heavy metals — so these should be avoided in pregnancy (slide 264).',
      ],
      terms: [{ term: 'Placental barrier', meaning: 'The tissue between fetal and maternal blood: endothelium, villous connective tissue, cytotrophoblast, syncytiotrophoblast.' }],
      sourceRefs: em([260, 261, 262, 264]),
    },
    {
      title: 'Circulation of the placenta',
      kind: 'pathway',
      steps: [
        { label: 'In', detail: 'Cotyledons receive blood through 80–100 spiral arteries that pierce the decidual plate at regular intervals; their pressure drives oxygenated blood deep into the intervillous spaces over the villi (slide 265).' },
        { label: 'Out', detail: 'As the pressure falls, blood flows back from the chorionic plate towards the decidua and drains through the endometrial veins into the maternal circulation (slide 266).' },
        { label: 'Exchange', detail: 'Exchange happens only in villi whose fetal vessels are close against the syncytium, which there often has a brush border of microvilli that greatly increases the surface and the exchange rate (slide 267).' },
      ],
      sourceRefs: em([265, 266, 267]),
    },
    {
      title: 'The full-term placenta and its functions',
      kind: 'structure',
      table: {
        columns: ['Feature', 'At term (slides 269–271)'],
        rows: [
          ['Shape', 'Discoid (flat and circular)'],
          ['Weight', '500–600 g, one sixth of the fetus'],
          ['Diameter / thickness', '15–20 cm / 2–3 cm'],
          ['Feel and extent', 'Spongy; covers 25–30% of the uterine surface'],
          ['Fetal surface', 'Smooth, shiny amnion over the chorionic plate; the cord attaches at or near the centre; chorionic vessels radiate under the amnion'],
          ['Maternal surface', 'Wrinkled, cobblestone cotyledons covered by a thin layer of decidua basalis; dull red from maternal blood'],
        ],
      },
      paragraphs: [
        'The placenta is the site of exchange between maternal and fetal blood. Water, CO₂, waste products and hormones pass from fetus to mother; water, oxygen, nutrients, electrolytes, vitamins, hormones and some antibodies pass from mother to fetus. These antibodies give passive immunity, for example against diphtheria, smallpox and measles (slide 273).',
        'It is also a major endocrine organ making steroid and protein hormones: progesterone, oestrogen (mostly oestriol), hCG, human chorionic somatomammotropin (hCS, also called human placental lactogen, hPL), relaxin, leptin and placental growth hormone (slide 274).',
      ],
      sourceRefs: em([269, 270, 271, 273, 274]),
    },
    {
      title: 'Abnormal placentation',
      kind: 'clinical',
      paragraphs: [
        'Placenta previa is placentation near or over the internal os of the cervix, in about 0.5% of pregnancies. It usually causes painless vaginal bleeding; the placenta tends to be large and may have succenturiate (extra) lobes. Risk factors: multiparity, uterine scarring and abnormalities, fibroids, twins, maternal age over 35, smoking and cocaine use (slide 275). It is graded low-lying (near but not next to the os), marginal (edge next to the os), partial (across part of the os) or complete (over all of it) (slide 276).',
        'Abruptio placentae is early separation of the placenta after week 24 but before delivery, probably from bleeding into the decidua basalis. Risk factors: smoking, cocaine, hypertension, abdominal trauma, premature rupture of membranes, multiple pregnancy and previous abruption. It causes bleeding, uterine contractions and fetal distress, and may lead to DIC, postpartum haemorrhage and shock (slide 277).',
      ],
      table: {
        columns: ['Abnormal adherence', 'Depth (slide 279)'],
        rows: [
          ['Accreta (75%)', 'Villi adhere deeply to the uterine wall but do not enter the myometrium'],
          ['Increta (15%)', 'Villi penetrate deep into the myometrium'],
          ['Percreta (10%)', 'Villi go right through to the perimetrium and may attach to the bladder, rectum, intestines or large vessels'],
        ],
      },
      keyPoints: ['The lecture also shows placentas abnormal in shape (slide 281).'],
      terms: [
        { term: 'Placenta previa', meaning: 'A placenta over or near the internal os; painless bleeding.' },
        { term: 'Abruptio placentae', meaning: 'Early separation of a normally placed placenta after week 24.' },
      ],
      sourceRefs: em([275, 276, 277, 279, 281]),
    },
  ],
  summary: [
    'Villi: primary (cytotrophoblast core) → secondary (mesoderm) → tertiary (vessels, end of week 3); shell anchors the sac.',
    'Decidua basalis + chorion frondosum = placenta; chorion laeve over the capsularis.',
    'Spiral arteries remodelled to low resistance; septa → 15–20 cotyledons; 50–100 placentomes; 80–100 spiral arteries.',
    'Barrier: endothelium, villous CT, cytotrophoblast, syncytiotrophoblast (thins from month 4). Term placenta 500–600 g, 15–20 cm.',
  ],
};

const lesson7: Draft = {
  id: 'embryology-7',
  title: 'Fetal Membranes, the Umbilical Cord and Folding',
  description: 'The amnion and amniotic fluid and their disorders, the yolk sac and Meckel’s diverticulum, the allantois and urachus, the umbilical cord and its abnormalities, and folding of the embryo with the derivatives of endoderm.',
  xp: 25,
  sourceRefs: em([282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 298, 299, 300, 301, 302, 303, 304, 305, 307, 309, 310, 311, 314, 315, 316, 317, 318, 319, 321, 323, 324, 325, 326, 327, 328, 329, 330]),
  objectives: [
    'Describe the amnion, the primitive umbilical ring and how the cord forms',
    'Give the composition, volume, turnover and functions of amniotic fluid',
    'Describe oligohydramnios, polyhydramnios and amniotic band syndrome',
    'Describe the yolk sac, its functions and fate, and Meckel’s diverticulum',
    'Describe the allantois, urachus and urachal anomalies',
    'Describe the umbilical cord and its abnormalities',
    'Explain folding of the embryo and list the derivatives of endoderm',
  ],
  chunks: [
    {
      title: 'The amnion',
      kind: 'structure',
      paragraphs: [
        'The amnion is a thin, transparent, tough membrane formed from amnioblasts and extraembryonic somatic mesoderm (slide 282). The oval line where it reflects onto the embryonic ectoderm (the amnio-ectodermal junction) is the primitive umbilical ring (slide 283).',
        'In week 5 three things pass through the ring: the connecting stalk with the allantois and umbilical vessels (two arteries and one vein); the yolk stalk (vitelline duct) with the vitelline vessels; and a canal joining the intra- and extraembryonic cavities. The yolk sac itself lies in the chorionic cavity between amnion and chorionic plate (slide 284).',
        'The amniotic cavity then enlarges quickly at the expense of the chorionic cavity. The amnion wraps the connecting stalk and yolk stalk together into the primitive umbilical cord, obliterates the chorionic cavity and fuses with the chorion as the amniochorionic membrane (slide 285). Distally the cord holds the yolk stalk and umbilical vessels; more proximally, some intestinal loops and the allantois remnant (slide 286).',
      ],
      keyPoints: [
        'By the end of the 3rd month the amnion touches the chorion and the chorionic cavity is gone; the yolk sac shrinks and is gradually obliterated (slide 287).',
        'The allantois and the vitelline duct and vessels close off, leaving only the umbilical vessels in Wharton’s jelly, a proteoglycan-rich protective layer (slide 288).',
      ],
      terms: [
        { term: 'Primitive umbilical ring', meaning: 'The line where the amnion reflects onto the embryonic ectoderm.' },
        { term: 'Amniochorionic membrane', meaning: 'Amnion fused with chorion after the chorionic cavity is obliterated.' },
        { term: 'Wharton’s jelly', meaning: 'Proteoglycan-rich connective tissue protecting the cord vessels.' },
      ],
      sourceRefs: em([282, 283, 284, 285, 286, 287, 288]),
    },
    {
      title: 'Amniotic fluid',
      kind: 'structure',
      paragraphs: [
        'A clear, watery fluid containing glucose, urea, non-protein nitrogen, uric acid, creatinine, lipids, proteins (hormones such as insulin, renin and prolactin; enzymes; α-fetoprotein), electrolytes, lanugo, shed fetal and amniotic cells, vernix caseosa, meconium, fetal urine, and cells from the respiratory, gut and genitourinary tracts (slide 289).',
        'Volume rises with age: about 30 ml at 10 weeks, 450 ml at 20 weeks, 800 ml to 1 litre at 37 weeks, falling to about 700 ml at term. The whole volume is replaced every 3 hours (slides 289, 290).',
      ],
      table: {
        columns: ['Sources (slide 290)', 'Removal (slide 291)'],
        rows: [
          ['Amniotic cells', 'Swallowed by the fetus (about 400 ml) and absorbed by the gut'],
          ['Maternal blood, by diffusion across the amniochorionic membrane', 'Excess returns to the mother via the placenta'],
          ['Diffusion through the chorionic plate from the intervillous space', '—'],
          ['Fetal urine (500 ml a day)', '—'],
          ['Secretions of the lungs and placenta', '—'],
        ],
      },
      keyPoints: [
        'Fetal urination and swallowing together keep the volume right (slide 291).',
        'Functions: symmetrical growth; a hydrostatic “bag of waters” that helps dilate the cervix in labour; a barrier to infection; normal lung (alveolar) development; stops the amnion sticking to the fetus; cushions blows to the mother; steady temperature; free movement for muscle development; fluid and electrolyte balance (slides 292, 293).',
      ],
      sourceRefs: em([289, 290, 291, 292, 293]),
    },
    {
      title: 'Disorders of amniotic fluid',
      kind: 'clinical',
      table: {
        columns: ['', 'Oligohydramnios (slide 294)', 'Polyhydramnios (slide 295)'],
        rows: [
          ['Volume late in pregnancy', 'Under 400 ml', 'Over 2000 ml'],
          ['Causes', 'Renal agenesis, obstructive uropathy, cystic kidney disease, renal hypoplasia; placental insufficiency; preterm rupture of the membranes', 'Idiopathic (35%); maternal diabetes; CNS defects (meroencephaly, spina bifida cystica, anencephaly); gut defects (oesophageal or duodenal atresia); twins'],
          ['Complications', 'Pulmonary hypoplasia, facial and limb defects (e.g. club foot) from compression by the uterus; cord compression (Potter’s sequence)', 'Premature labour'],
        ],
      },
      paragraphs: ['Amniotic band syndrome (amniotic band disruption complex): the amnion tears and splits, and bands wrap parts of the fetus, causing anything from a digital constriction to major scalp, craniofacial and visceral defects. It can be diagnosed before birth; its cause is unknown (slides 296, 297).'],
      notes: [{ kind: 'check', text: 'Slide 296 gives 1 in 200 live births for amniotic band syndrome; Langman gives about 1 in 1,200.' }],
      terms: [
        { term: 'Oligohydramnios', meaning: 'Too little amniotic fluid (under 400 ml late in pregnancy).' },
        { term: 'Polyhydramnios', meaning: 'Too much amniotic fluid (over 2000 ml late in pregnancy).' },
      ],
      sourceRefs: em([294, 295, 296, 297]),
    },
    {
      title: 'The yolk sac',
      kind: 'structure',
      paragraphs: [
        'The yolk sac (umbilical vesicle) is an endodermal sac below the embryonic disc, formed from the exocoelomic membrane and extraembryonic splanchnic mesoderm. In humans it is vestigial and holds no nutritive yolk (slide 298). It is the first structure seen on transvaginal ultrasound, in week 5, within the chorionic (gestational) sac (slide 299).',
      ],
      table: {
        columns: ['Functions (slides 300, 301)'],
        rows: [
          ['Makes blood for the embryo until the liver takes over in week 6'],
          ['Transfers nutrients in weeks 2–3 while the uteroplacental circulation is being set up'],
          ['Its dorsal part is taken into the embryo as the primitive gut in week 4; its endoderm (from epiblast) gives the epithelium of the trachea, bronchi, lungs and alimentary canal'],
          ['Primordial germ cells form in its endodermal wall in week 3 and migrate to the gonads in week 4 to become spermatogonia or oogonia'],
          ['The allantois arises from its caudal part; it helps form the umbilical cord'],
        ],
      },
      keyPoints: [
        'Fate: in week 6 the yolk stalk (vitelline, vitello-intestinal or omphaloenteric duct) degenerates and the sac detaches from the midgut; by week 10 a small sac lies between amnion and chorion; by week 20 it is a tiny cyst. The duct may persist as an ileal diverticulum or a vitelline (omphalomesenteric duct) cyst (slide 302).',
        'Meckel’s diverticulum follows the rule of twos: 2% of people, 2 times as common in males, about 2% have symptoms (usually by age 2), 2 feet from the ileocaecal end, 2 inches long, 2 kinds of abnormal lining. It can become inflamed like appendicitis, and may contain gastric or pancreatic tissue; gastric tissue can cause bleeding ulcers (slides 302, 303).',
      ],
      terms: [{ term: 'Meckel’s diverticulum', meaning: 'A pouch of the ileum left by the vitelline duct.' }],
      sourceRefs: em([298, 299, 300, 301, 302, 303]),
    },
    {
      title: 'The allantois and urachus',
      kind: 'structure',
      paragraphs: [
        'The allantois (allantoenteric diverticulum) is vestigial in humans. It appears about day 16 as a small pouch from the caudal yolk sac and grows into the connecting stalk in week 3. After folding it connects to the cloaca, the widened end of the hindgut (slide 304).',
        'Its remnant, the urachus, runs from the urogenital sinus (future bladder) to the umbilicus and becomes a fibrous cord, the median umbilical ligament (slides 305, 308).',
      ],
      table: {
        columns: ['Functions of the allantois (slide 309)'],
        rows: [
          ['Helps form the early urinary bladder'],
          ['Its wall makes blood cells in weeks 3–5'],
          ['Its vessels become the umbilical arteries and vein'],
        ],
      },
      keyPoints: ['If the urachus does not close it leaves a urachal cyst, sinus or fistula, with urine leaking from the umbilicus, urinary infections and peritonitis (slides 307, 309).'],
      terms: [
        { term: 'Urachus', meaning: 'The allantois remnant from bladder to umbilicus; becomes the median umbilical ligament.' },
        { term: 'Cloaca', meaning: 'The widened end of the hindgut.' },
      ],
      sourceRefs: em([304, 305, 307, 308, 309]),
    },
    {
      title: 'The umbilical cord',
      kind: 'structure',
      paragraphs: [
        'The cord joins the fetus to the fetal surface of the placenta and develops from the connecting stalk. At term it is 30–90 cm long (average 55 cm) and 1–2 cm wide. The stump usually falls off 5–8 days after birth; a delay beyond 10 days needs investigating — it may reflect abnormal neutrophil movement or absent T-killer cells (slide 310).',
        'It contains two umbilical arteries, one umbilical vein (the left), Wharton’s jelly (mucoid connective tissue), and remnants of the yolk sac and urachus that disappear by birth. After birth the arteries become the medial umbilical ligaments and the vein the round ligament of the liver (slide 311). The arteries carry deoxygenated blood from the fetus to the placenta; the vein brings oxygenated blood back (slide 314).',
      ],
      table: {
        columns: ['Abnormality', 'Features (slides 315–319)'],
        rows: [
          ['False knots', 'The cord looks twisted because the vessels are longer than the cord; normal'],
          ['True knots (1%)', 'Dangerous: can block flow, causing anoxia and fetal death; usually form in labour as the fetus passes through a loop'],
          ['Cord attachment', 'Central, eccentric, marginal or velamentous'],
          ['Long cord (over 80 cm)', 'More cord round the neck or body, knots, prolapse and compression'],
          ['Short cord (under 35 cm)', 'Abruption, fetal distress, prolonged labour; more newborn resuscitation and later neurological problems'],
          ['Single umbilical artery', '1 in 200 newborns; from agenesis or degeneration; linked to chromosomal and fetal abnormalities, with cardiovascular anomalies in 15–20%'],
          ['Omphalocele', 'Bowel or other viscera herniate through the umbilical ring, covered by amnion, because the physiological hernia fails to return at weeks 10–12; compare gastroschisis'],
        ],
      },
      terms: [{ term: 'Velamentous insertion', meaning: 'The cord attaches to the membranes rather than the placenta.' }],
      sourceRefs: em([310, 311, 314, 315, 316, 317, 318, 319]),
    },
    {
      title: 'Folding of the embryo and endoderm',
      kind: 'pathway',
      paragraphs: ['The gut is the main organ system from endoderm, which covers the ventral surface of the embryo and forms the roof of the yolk sac. As the brain vesicles grow, the disc bulges into the amniotic cavity and folds head to tail (slide 321).'],
      steps: [
        { label: 'Head, tail and lateral folds', detail: 'Folding is greatest at the head and tail (head and tail folds); lateral folds move ventrally to close the body wall. More and more endoderm is taken in as the gut tube (slide 323).' },
        { label: 'Three regions', detail: 'Foregut, midgut and hindgut. The midgut joins the yolk sac through the vitelline duct, wide at first, then narrow and long (slide 324).' },
        { label: 'The two ends', detail: 'The foregut ends at the oropharyngeal membrane, separating the ectodermal stomodeum (primitive mouth) from the endodermal pharynx; it ruptures in week 4. The hindgut ends at the cloacal membrane, separating the endodermal upper anal canal from the ectodermal proctodeum; it breaks down in week 7 to open the anus (slides 325–327).' },
        { label: 'Body wall closed', detail: 'The ventral body wall closes except at the umbilicus, where the yolk duct and connecting stalk attach. Part of the allantois is taken in as the cloaca; its distal part stays in the stalk. By week 5 the yolk duct, allantois and umbilical vessels are confined to the umbilical region (slide 328).' },
      ],
      table: {
        columns: ['Endoderm gives rise to (slide 330)'],
        rows: [
          ['The epithelial lining of the gut, and the intraembryonic allantois and vitelline duct (slide 329)'],
          ['The epithelial lining of the respiratory tract'],
          ['The parenchyma of the thyroid, parathyroids, liver and pancreas'],
          ['The reticular stroma of the tonsils and thymus'],
          ['The epithelial lining of the bladder and urethra'],
          ['The epithelial lining of the tympanic cavity and auditory tube'],
        ],
      },
      keyPoints: ['In humans the yolk sac is vestigial, with a nutritive role only early on; in the 2nd month it lies in the chorionic cavity (slide 329).'],
      terms: [
        { term: 'Stomodeum', meaning: 'The ectoderm-lined primitive mouth.' },
        { term: 'Proctodeum', meaning: 'The ectoderm-lined pit forming the lower anal canal.' },
      ],
      sourceRefs: em([321, 323, 324, 325, 326, 327, 328, 329, 330]),
    },
  ],
  summary: [
    'Amnion: amnioblasts + somatic mesoderm; obliterates the chorionic cavity by month 3; cord vessels in Wharton’s jelly.',
    'Amniotic fluid: ~1 L at 37 weeks, ~700 ml at term, replaced every 3 h; oligo < 400 ml (renal agenesis), poly > 2000 ml (diabetes, atresia).',
    'Yolk sac: blood until week 6, primordial germ cells, primitive gut; Meckel’s rule of twos. Urachus → median umbilical ligament.',
    'Cord: 2 arteries, 1 (left) vein, 55 cm average; folding makes the gut tube; endoderm lines gut, airways, bladder, ear cavity.',
  ],
};

export const lessons: Draft[] = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7].map((lesson) => ({
  ...lesson,
  ...readingExtras[lesson.id],
  interactive: interactive[lesson.id],
}));
