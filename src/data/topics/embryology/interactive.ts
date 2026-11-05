// Anatomy → Embryology (HB2): each lesson's interactive layer.
import type { LessonConfusion } from '@/data/lesson-types';
import { ask, learn, match, mcq, order, recall, type InteractiveDraft } from '@/data/topics/build';
import { em, TOPIC_ID, type ConceptId } from '@/data/topics/embryology/sources';

type Steps = InteractiveDraft<ConceptId>[];
const L = (n: number) => `${TOPIC_ID}-${n}`;

export const interactive: Record<string, Steps> = {
  [L(1)]: [
    ask(mcq('i1-01', 'fertilization-phases', 'Before you read: where does fertilization usually take place?', 'The ampulla of the uterine tube', ['The cavity of the uterus', 'The isthmus of the uterine tube', 'The surface of the ovary'], { explanation: 'Slide 14.', skill: 'prediction' })),
    learn('Getting ready', ['Sperm must be capacitated (about 7 hours in the tube, coat over the acrosome removed) and hyperactivated before they can bind the zona and undergo the acrosome reaction.'], { sourceRefs: em([6, 8, 12, 13]) }),
    ask(order('i1-02', 'fertilization-phases', 'Put the phases of fertilization in order:', ['Penetration of the corona radiata', 'Penetration of the zona pellucida', 'Fusion of the sperm and oocyte membranes'], { explanation: 'Slide 15.' })),
    ask(match('i1-03', 'acrosome-reaction', 'Match each zona protein to its role:', [['ZP3', 'Binds sperm and triggers the acrosome reaction'], ['ZP2', 'Secondary sperm-binding protein'], ['ZP1', 'Cross-links ZP2 and ZP3'], ['ZP4', 'Function unknown']], { explanation: 'Slide 18.' })),
    learn('One sperm only', ['Cortical granules release enzymes that change the oocyte membrane and the zona (cortical and zona reactions); ovastacin cuts ZP2. Together these block polyspermy.'], { sourceRefs: em([18, 21, 26]) }),
    recall('r1-01', 'fertilization-results', 'What are the results of fertilization?', ['Restores the diploid number, half from each parent, in a new combination.', 'Determines chromosomal sex: X sperm → XX female, Y sperm → XY male.', 'Starts cleavage; an unfertilized oocyte degenerates about 24 hours after ovulation.'], em([30])),
  ],
  [L(2)]: [
    ask(mcq('i2-01', 'morula', 'Before you read: about how many cells does the morula have at day 4?', '16', ['4', '8', '64'], { explanation: 'Slide 40.', skill: 'prediction' })),
    learn('Smaller, not bigger', ['In cleavage the blastomeres do not grow: each division halves their size, so the morula is the size of the zygote.'], { sourceRefs: em([48]) }),
    ask(order('i2-02', 'blastocyst', 'Order these stages:', ['Zygote', 'Compaction (8-cell stage)', 'Morula', 'Blastocyst', 'Implantation'], { explanation: 'Slides 36, 38, 40, 52, 55.' })),
    ask(match('i2-03', 'mz-dz-twins', 'Match each feature to the kind of twins:', [['Always the same sex', 'Monozygotic'], ['Two oocytes, two sperm', 'Dizygotic'], ['Can share one placenta', 'Monozygotic'], ['Always separate placentas', 'Dizygotic']], { explanation: 'Slide 62.' })),
    learn('Too late to split', ['Identical twins normally separate 8–12 days after fertilization; a split at 13–15 days may stop half-way, giving conjoined twins.'], { sourceRefs: em([70]) }),
    recall('r2-01', 'mz-dz-twins', 'Describe the ways monozygotic twins can form.', ['Splitting at the first cleavage into two embryos.', 'Two inner cell masses, each forming an embryo.', 'One inner cell mass that later divides; incomplete division gives conjoined twins.'], em([68])),
  ],
  [L(3)]: [
    ask(mcq('i3-01', 'week2-day8', 'Before you read: which layer of the trophoblast has no cell boundaries?', 'Syncytiotrophoblast', ['Cytotrophoblast', 'Hypoblast', 'Epiblast'], { explanation: 'Slide 88.', skill: 'prediction' })),
    learn('The week of twos', ['Two trophoblast layers, two embryoblast layers, two yolk sacs, two new cavities and two layers of extraembryonic mesoderm.'], { sourceRefs: em([87]) }),
    ask(order('i3-02', 'week2-day11', 'Order the events of week 2:', ['Epiblast and hypoblast form', 'Lacunae appear in the syncytium', 'Maternal blood enters the lacunae', 'Primary villi form'], { explanation: 'Slides 90, 94, 100, 110.' })),
    ask(match('i3-03', 'week2-day11', 'Match each structure to what it lines or covers:', [['Somatopleuric mesoderm', 'Cytotrophoblast and amnion'], ['Splanchnopleuric mesoderm', 'Yolk sac'], ['Heuser’s membrane', 'Inside of the cytotrophoblast']], { explanation: 'Slides 95, 106.' })),
    learn('Pregnancy tests', ['The syncytiotrophoblast makes hCG; by the end of week 2 there is enough to detect.'], { sourceRefs: em([117]) }),
    recall('r3-01', 'mole-failure', 'What is a hydatidiform mole?', ['Trophoblast and placental membranes with little or no embryonic tissue.', 'Secretes high levels of hCG; may give an invasive mole or choriocarcinoma.', 'Diploid but entirely paternal: an empty oocyte fertilized, male chromosomes duplicated.'], em([122, 126])),
  ],
  [L(4)]: [
    ask(mcq('i4-01', 'germ-layers', 'Before you read: which layer is the source of all three germ layers?', 'Epiblast', ['Hypoblast', 'Trophoblast', 'Cytotrophoblast'], { explanation: 'Slide 149.', skill: 'prediction' })),
    learn('Invagination', ['Epiblast cells move to the streak, become flask-shaped and slip beneath it; FGF8 from streak cells controls this.'], { sourceRefs: em([144, 145]) }),
    ask(order('i4-02', 'germ-layers', 'Order the waves of gastrulation:', ['Cells displace the hypoblast as endoderm', 'Cells settle between epiblast and endoderm as mesoderm', 'Cells left in the epiblast form ectoderm'], { explanation: 'Slides 146, 148, 149.' })),
    ask(match('i4-03', 'fate-map', 'Match each region to what its cells become:', [['Cranial node', 'Notochord'], ['Mid-streak', 'Intermediate mesoderm'], ['Caudal streak', 'Lateral plate mesoderm'], ['Caudal-most streak', 'Extraembryonic mesoderm']], { explanation: 'Slide 163.' })),
    learn('What the notochord leaves', ['The notochord disappears as vertebral bodies form but remains as the nucleus pulposus and the apical ligament of the dens; remnants can form chordomas.'], { sourceRefs: em([173]) }),
    recall('r4-01', 'gastrulation-clinical', 'Describe caudal dysgenesis (sirenomelia).', ['Too little mesoderm in the caudal-most embryo.', 'Fused, hypoplastic lower limbs; lumbosacral vertebral anomalies; renal agenesis; imperforate anus; genital anomalies.', 'Associated with maternal diabetes.'], em([199, 200, 209])),
  ],
  [L(5)]: [
    ask(mcq('i5-01', 'neurulation', 'Before you read: on which day does the caudal neuropore close?', 'Day 28', ['Day 18', 'Day 21', 'Day 25'], { explanation: 'Slide 216.', skill: 'prediction' })),
    learn('Somite parts', ['Sclerotome → vertebrae and ribs; myotome → skeletal muscle; dermatome → dermis. Each keeps its segment’s nerve.'], { sourceRefs: em([187]) }),
    ask(match('i5-02', 'mesoderm-columns', 'Match each mesoderm column to what it forms:', [['Paraxial', 'Somites'], ['Intermediate', 'Kidneys and gonads'], ['Lateral plate', 'Body wall and body cavities']], { explanation: 'Slides 169, 175.' })),
    ask(order('i5-03', 'neurulation', 'Order the steps of neurulation:', ['Neural plate forms', 'Neural folds rise around a groove', 'Folds fuse at the 5th somite', 'Cranial neuropore closes', 'Caudal neuropore closes'], { explanation: 'Slides 212, 215, 216.' })),
    learn('Folic acid', ['400 µg of folic acid a day prevents 50–70% of neural tube defects.'], { sourceRefs: em([227]) }),
    recall('r5-01', 'ntds', 'List the types of spina bifida.', ['Occulta: hidden under skin.', 'Meningocele: meninges bulge under the skin (rare).', 'Meningomyelocele: meninges, cord and nerves bulge (Chiari II); myeloschisis: bare nerve tissue.'], em([226])),
  ],
  [L(6)]: [
    ask(mcq('i6-01', 'villi', 'Before you read: what defines a tertiary villus?', 'Blood vessels in its core', ['A core of cytotrophoblast only', 'A mesodermal core with no vessels', 'No syncytial covering'], { explanation: 'Slide 235.', skill: 'prediction' })),
    learn('Fetal meets maternal', ['The fetal part of the placenta is the chorion frondosum; the maternal part is the decidua basalis.'], { sourceRefs: em([246, 249]) }),
    ask(order('i6-02', 'placental-barrier', 'Order the placental barrier (before 20 weeks) from fetal to maternal side:', ['Fetal capillary endothelium', 'Villous connective tissue', 'Cytotrophoblast', 'Syncytiotrophoblast'], { explanation: 'Slide 260.' })),
    ask(match('i6-03', 'placenta-abnormal', 'Match each adherence to its depth:', [['Accreta', 'Adheres but does not enter the myometrium'], ['Increta', 'Deep into the myometrium'], ['Percreta', 'Through to the perimetrium']], { explanation: 'Slide 279.' })),
    learn('Wider arteries', ['Cytotrophoblast invades the spiral arteries and turns them from narrow, high-resistance vessels into wide, low-resistance ones.'], { sourceRefs: em([253]) }),
    recall('r6-01', 'placenta-functions', 'List the hormones made by the placenta.', ['Progesterone and oestrogen (mostly oestriol).', 'hCG and hCS (human placental lactogen).', 'Relaxin, leptin and placental growth hormone.'], em([274])),
  ],
  [L(7)]: [
    ask(mcq('i7-01', 'umbilical-cord', 'Before you read: how many umbilical arteries does a normal cord have?', 'Two', ['One', 'Three', 'Four'], { explanation: 'Slide 311.', skill: 'prediction' })),
    learn('Fluid balance', ['The fetus adds about 500 ml of urine a day and swallows about 400 ml; the fluid is replaced every 3 hours.'], { sourceRefs: em([290, 291]) }),
    ask(match('i7-02', 'umbilical-cord', 'Match each fetal structure to what it becomes after birth:', [['Umbilical arteries', 'Medial umbilical ligaments'], ['Umbilical vein', 'Round ligament of the liver'], ['Urachus', 'Median umbilical ligament']], { explanation: 'Slides 305, 311.' })),
    ask(order('i7-03', 'yolk-sac', 'Order the fate of the yolk sac:', ['Yolk stalk degenerates (week 6)', 'Small sac between amnion and chorion (week 10)', 'Tiny cyst (week 20)'], { explanation: 'Slide 302.' })),
    learn('Two membranes', ['The oropharyngeal membrane ruptures in week 4; the cloacal membrane breaks down in week 7.'], { sourceRefs: em([326, 327]) }),
    recall('r7-01', 'amniotic-fluid', 'List the functions of amniotic fluid.', ['Symmetrical growth, free movement, cushioning and steady temperature.', 'Barrier to infection; stops the amnion sticking; normal lung development.', 'Bag of waters dilates the cervix; fluid and electrolyte balance.'], em([292, 293])),
  ],
};

type ReadingExtras = { estimatedMinutes: number; xp: number; highYield: string[]; confusions: LessonConfusion[] };

export const readingExtras: Record<string, ReadingExtras> = {
  [L(1)]: {
    estimatedMinutes: 14,
    xp: 25,
    highYield: ['ZP3: binding + acrosome reaction; ovastacin cuts ZP2.', 'Capacitation ~7 h in the tube; only capacitated sperm cross the corona.', 'Centrosomes from the father; mitochondria from the mother.'],
    confusions: [{ confusion: 'The acrosome reaction happens as soon as sperm enter the tube.', clarification: 'It happens after the capacitated sperm binds the zona pellucida, triggered by zona proteins (slide 13).' }],
  },
  [L(2)]: {
    estimatedMinutes: 14,
    xp: 25,
    highYield: ['Compaction after the 3rd cleavage; morula 16 cells at day 4.', 'Blastocyst ~4.5 days; implantation ~day 6 (L-selectin).', 'Conjoined twins: late split 13–15 days; 1 in 100,000.'],
    confusions: [{ confusion: 'Monozygotic twins always share one placenta.', clarification: 'They may share one (monochorionic) or have two (dichorionic) (slide 62).' }],
  },
  [L(3)]: {
    estimatedMinutes: 14,
    xp: 25,
    highYield: ['Day 9 lacunae; days 11–12 sinusoids → uteroplacental circulation.', 'Secondary yolk sac and primary villi on day 13.', '95% of ectopics in the tube, mostly the ampulla.'],
    confusions: [{ confusion: 'Bleeding at day 13 is always a period.', clarification: 'Implantation bleeding near day 28 can be mistaken for a period and upset the due date (slide 108).' }],
  },
  [L(4)]: {
    estimatedMinutes: 15,
    xp: 25,
    highYield: ['Epiblast forms all three layers; FGF8.', 'Node → notochord → nucleus pulposus; chordoma.', 'Mesoderm absent at the oropharyngeal and cloacal membranes.'],
    confusions: [{ confusion: 'The hypoblast becomes the endoderm.', clarification: 'Invaginating epiblast cells displace the hypoblast to form endoderm (slide 146).' }],
  },
  [L(5)]: {
    estimatedMinutes: 15,
    xp: 25,
    highYield: ['42–44 somite pairs, days 20–30.', 'Cranial neuropore day 25, caudal day 28.', 'Folic acid 400 µg prevents 50–70% of NTDs; AFP at 16–18 weeks.'],
    confusions: [{ confusion: 'Epaxial muscles are supplied by ventral rami.', clarification: 'Epaxial (back) muscles: dorsal rami; hypaxial (limb and body wall): ventral rami (slide 187).' }],
  },
  [L(6)]: {
    estimatedMinutes: 15,
    xp: 25,
    highYield: ['Primary → secondary → tertiary villi by end of week 3.', '15–20 cotyledons; 80–100 spiral arteries; 50–100 placentomes.', 'Term placenta 500–600 g, 15–20 cm, 2–3 cm.'],
    confusions: [{ confusion: 'Decidual septa divide the intervillous space completely.', clarification: 'They do not reach the chorionic plate, so blood flows between cotyledons (slide 256).' }],
  },
  [L(7)]: {
    estimatedMinutes: 15,
    xp: 25,
    highYield: ['Oligo < 400 ml, poly > 2000 ml.', 'Meckel’s: rule of twos.', 'Cord: 2 arteries + left vein; stump falls off in 5–8 days.'],
    confusions: [{ confusion: 'Omphalocele and gastroschisis are the same.', clarification: 'An omphalocele is covered by amnion and comes through the umbilical ring (slide 319); gastroschisis is uncovered.' }],
  },
};
