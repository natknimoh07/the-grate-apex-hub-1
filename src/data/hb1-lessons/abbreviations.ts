// Every abbreviation in an HB1 lesson spelled out the first time each section uses it (owner,
// 2026-11-07: "some acronyms are assumed to be known already by the user in some of the lessons like
// blood for hb1 sem 2 where mch and mcv and stuff are never explained"). A lesson page shows one
// section at a time and learners jump between them, so each section explains its own: the first
// "MCV" in a section reads "MCV (mean corpuscular volume)"; before a bracket of its own, or inside
// brackets, the meaning goes in square brackets ("MCV [mean corpuscular volume] (fL)"). The very
// common ones (DNA, ATP…) are explained once per lesson. Nothing is added where the section already
// explains it: "(ECF)" after the full name, the full name within a sentence or so of it, or in the
// same table row. Headings and titles are left alone, and so are fractions, sub/superscripts and (in
// Communication Skills) quoted example sentences.
//
// Applied when a lesson is opened (hb1LessonBody), so the lesson files are unchanged. A new
// abbreviation in a lesson needs a meaning here: tests/hb1-abbreviations.test.mjs fails until it has
// one (or is listed there as not being an abbreviation, e.g. an Excel function name). Meanings are
// per course where the same letters mean different things (GC: guanine–cytosine in genetics, gas
// chromatography in Biological Chemistry), and per lesson where needed (SV in Concord and in The Sentence).
import type { Block, LegacySection } from '@/data/legacy-study';

type Meanings = Record<string, string | null>;

/** Meanings used in every course (a course or lesson can replace one, or switch it off with null). */
export const SHARED_ABBREVIATIONS: Meanings = {
  // Energy carriers and nucleotides
  ATP: 'adenosine triphosphate',
  ADP: 'adenosine diphosphate',
  AMP: 'adenosine monophosphate',
  cAMP: 'cyclic AMP, cyclic adenosine monophosphate',
  cGMP: 'cyclic GMP, cyclic guanosine monophosphate',
  GTP: 'guanosine triphosphate',
  GDP: 'guanosine diphosphate',
  GMP: 'guanosine monophosphate',
  UTP: 'uridine triphosphate',
  UDP: 'uridine diphosphate',
  NAD: 'nicotinamide adenine dinucleotide',
  NADH: 'the reduced form of NAD⁺',
  NADP: 'nicotinamide adenine dinucleotide phosphate',
  NADPH: 'the reduced form of NADP⁺',
  FAD: 'flavin adenine dinucleotide',
  FADH2: 'the reduced form of FAD',
  FMN: 'flavin mononucleotide',
  CoA: 'coenzyme A',
  CoQ: 'coenzyme Q, ubiquinone',
  TPP: 'thiamine pyrophosphate',
  PPi: 'pyrophosphate, two phosphates joined',
  ATPase: 'an enzyme that splits ATP',
  ATPases: 'enzymes that split ATP',
  GTPase: 'an enzyme that splits GTP',
  GTPases: 'enzymes that split GTP',
  DNA: 'deoxyribonucleic acid',
  RNA: 'ribonucleic acid',
  mRNA: 'messenger RNA',
  tRNA: 'transfer RNA',
  rRNA: 'ribosomal RNA',
  mtDNA: 'mitochondrial DNA',
  DNase: 'deoxyribonuclease, an enzyme that breaks down DNA',
  RNase: 'ribonuclease, an enzyme that breaks down RNA',
  // Metabolites and enzymes
  DHAP: 'dihydroxyacetone phosphate',
  PEP: 'phosphoenolpyruvate',
  TCA: 'tricarboxylic acid',
  LDH: 'lactate dehydrogenase',
  LDL: 'low-density lipoprotein',
  HDL: 'high-density lipoprotein',
  VLDL: 'very-low-density lipoprotein',
  TAG: 'triacylglycerol',
  TAGs: 'triacylglycerols',
  DAG: 'diacylglycerol',
  MAG: 'monoacylglycerol',
  GLUT: 'glucose transporter',
  G6PD: 'glucose-6-phosphate dehydrogenase',
  EDTA: 'ethylenediaminetetraacetic acid',
  IP3: 'inositol trisphosphate',
  PIP2: 'phosphatidylinositol 4,5-bisphosphate',
  // Cells, fluids and the nervous system
  CNS: 'central nervous system',
  PNS: 'peripheral nervous system',
  ANS: 'autonomic nervous system',
  CSF: 'cerebrospinal fluid',
  ECF: 'extracellular fluid',
  ICF: 'intracellular fluid',
  ER: 'endoplasmic reticulum',
  RER: 'rough endoplasmic reticulum',
  SER: 'smooth endoplasmic reticulum',
  SR: 'sarcoplasmic reticulum',
  ACh: 'acetylcholine',
  GABA: 'gamma-aminobutyric acid',
  RBC: 'red blood cell',
  WBC: 'white blood cell',
  Hb: 'haemoglobin',
  HbA: 'adult haemoglobin',
  HbA2: 'a minor adult haemoglobin',
  HbA1c: 'glycated haemoglobin, haemoglobin with glucose attached',
  HbF: 'fetal haemoglobin',
  HbS: 'sickle-cell haemoglobin',
  HbC: 'haemoglobin C, an abnormal haemoglobin',
  Hct: 'haematocrit',
  PCV: 'packed cell volume',
  IgA: 'immunoglobulin A, an antibody class',
  IgD: 'immunoglobulin D, an antibody class',
  IgE: 'immunoglobulin E, an antibody class',
  IgG: 'immunoglobulin G, an antibody class',
  IgM: 'immunoglobulin M, an antibody class',
  RhD: 'Rhesus D',
  // Hormones and growth factors
  ADH: 'antidiuretic hormone',
  EGF: 'epidermal growth factor',
  IGF: 'insulin-like growth factor',
  FSH: 'follicle-stimulating hormone',
  LH: 'luteinising hormone',
  GnRH: 'gonadotrophin-releasing hormone',
  LHRH: 'luteinising hormone-releasing hormone',
  hCG: 'human chorionic gonadotrophin',
  AMH: 'anti-Müllerian hormone',
  // Medicine and methods
  HIV: 'human immunodeficiency virus',
  AIDS: 'acquired immunodeficiency syndrome',
  TB: 'tuberculosis',
  NSAID: 'non-steroidal anti-inflammatory drug',
  NSAIDs: 'non-steroidal anti-inflammatory drugs',
  HLA: 'human leukocyte antigen',
  PSA: 'prostate-specific antigen',
  IVF: 'in vitro fertilisation',
  IM: 'intramuscular, into a muscle',
  WHO: 'World Health Organization',
  MRI: 'magnetic resonance imaging',
  CT: 'computed tomography',
  PET: 'positron emission tomography',
  PCR: 'polymerase chain reaction',
  ELISA: 'enzyme-linked immunosorbent assay',
  UV: 'ultraviolet',
  ACE: 'angiotensin-converting enzyme',
  SD: 'standard deviation',
};

/** Meanings by course (the part of the lesson id before the first "-"). */
export const COURSE_ABBREVIATIONS: Record<string, Meanings> = {
  physiology: {
    Pi: 'inorganic phosphate',
    RMP: 'resting membrane potential',
    AP: 'action potential',
    EPSP: 'excitatory postsynaptic potential',
    IPSP: 'inhibitory postsynaptic potential',
    NMJ: 'neuromuscular junction',
    RyR: 'ryanodine receptor',
    DHPR: 'dihydropyridine receptor',
    SERCA: 'sarco/endoplasmic reticulum Ca²⁺-ATPase',
    TnT: 'troponin T',
    TnI: 'troponin I',
    TnC: 'troponin C',
    CaCM: 'the calcium–calmodulin complex',
    MLC: 'myosin light chain',
    MLCK: 'myosin light-chain kinase',
    DOPA: 'dihydroxyphenylalanine',
    VIP: 'vasoactive intestinal peptide',
    CGRP: 'calcitonin gene-related peptide',
    NPY: 'neuropeptide Y',
    NE: 'noradrenaline, also called norepinephrine',
    GPCR: 'G protein-coupled receptor',
    PDGF: 'platelet-derived growth factor',
    TGF: 'transforming growth factor',
    IL: 'interleukin',
    PKA: 'protein kinase A',
    PKC: 'protein kinase C',
    NO: 'nitric oxide',
    EK: 'the equilibrium potential for K⁺',
    ENa: 'the equilibrium potential for Na⁺',
    ECl: 'the equilibrium potential for Cl⁻',
    ECa: 'the equilibrium potential for Ca²⁺',
    EPO: 'erythropoietin',
    MCV: 'mean corpuscular volume, the average size of a red cell',
    MCH: 'mean corpuscular haemoglobin, the average haemoglobin in one red cell',
    MCHC: 'mean corpuscular haemoglobin concentration, how concentrated the haemoglobin inside red cells is',
    HMW: 'high-molecular-weight',
    vWF: 'von Willebrand factor',
    PT: 'prothrombin time',
    APTT: 'activated partial thromboplastin time',
    aPTT: 'activated partial thromboplastin time',
    INR: 'international normalised ratio',
    HDN: 'haemolytic disease of the newborn',
    ESR: 'erythrocyte sedimentation rate',
    GH: 'growth hormone',
    EDV: 'end-diastolic volume',
  },
  biochemistry: {
    SI: 'the International System of Units',
    Pi: 'inorganic phosphate',
    ETC: 'electron transport chain',
    PDH: 'pyruvate dehydrogenase',
    PFK: 'phosphofructokinase',
    KG: 'ketoglutarate',
    CK: 'creatine kinase',
    MB: 'its muscle–brain form, found mostly in heart muscle',
    ALT: 'alanine aminotransferase',
    AST: 'aspartate aminotransferase',
    HMG: '3-hydroxy-3-methylglutaryl',
    IUBMB: 'International Union of Biochemistry and Molecular Biology',
    EC: 'Enzyme Commission',
    ES: 'enzyme–substrate',
    EI: 'enzyme–inhibitor',
    EIS: 'enzyme–inhibitor–substrate',
    GALK: 'galactokinase',
    GALT: 'galactose-1-phosphate uridylyltransferase',
    FBPase: 'fructose bisphosphatase',
    CCK: 'cholecystokinin',
    PZ: 'pancreozymin',
    CPT: 'carnitine palmitoyltransferase',
    MCAD: 'medium-chain acyl-CoA dehydrogenase',
    SCAD: 'short-chain acyl-CoA dehydrogenase',
    LCAD: 'long-chain acyl-CoA dehydrogenase',
    MPP: '1-methyl-4-phenylpyridinium',
    TTFA: 'thenoyltrifluoroacetone',
    DCCD: 'dicyclohexylcarbodiimide',
    CCCP: 'carbonyl cyanide m-chlorophenylhydrazone',
    DNP: '2,4-dinitrophenol',
    CPD: 'citrate–phosphate–dextrose',
    CPDA: 'citrate–phosphate–dextrose–adenine',
    SAGM: 'saline–adenine–glucose–mannitol',
    ESR: 'erythrocyte sedimentation rate',
    PKA: 'protein kinase A',
    GH: 'growth hormone',
  },
  anatomy: {
    AP: 'action potential',
    PPE: 'personal protective equipment',
    GIT: 'gastrointestinal tract',
    SPECT: 'single-photon emission computed tomography',
    DEXA: 'dual-energy X-ray absorptiometry',
    DSA: 'digital subtraction angiography',
    TIPS: 'transjugular intrahepatic portosystemic shunt',
    ASIS: 'anterior superior iliac spine',
    PSIS: 'posterior superior iliac spine',
    TMJ: 'temporomandibular joint',
    ACL: 'anterior cruciate ligament',
    PCL: 'posterior cruciate ligament',
    PRICE: 'protection, rest, ice, compression and elevation',
    PAS: 'periodic acid–Schiff, a stain for carbohydrates',
    CFTR: 'cystic fibrosis transmembrane conductance regulator',
    MD: 'muscular dystrophy',
    MDs: 'muscular dystrophies',
    ALS: 'amyotrophic lateral sclerosis',
    MG: 'myasthenia gravis',
    LMP: 'last menstrual period, its first day',
    NMP: 'next menstrual period',
    DIC: 'disseminated intravascular coagulation',
    NTD: 'neural tube defect',
    ABP: 'androgen-binding protein',
    GH: 'growth hormone',
    PTH: 'parathyroid hormone',
    SERM: 'selective oestrogen receptor modulator',
    SERMs: 'selective oestrogen receptor modulators',
  },
  biolchem: {
    Pi: 'inorganic phosphate',
    IE: 'ionisation energy',
    EA: 'electron affinity',
    EN: 'electronegativity',
    GC: 'gas chromatography',
    LC: 'liquid chromatography',
    HPLC: 'high-performance liquid chromatography',
    PPI: 'phosphoprotein phosphatase inhibitor',
    BHA: 'butylated hydroxyanisole',
    BHT: 'butylated hydroxytoluene',
    FA: 'fatty acid',
    FU: '5-fluorouracil',
    AZT: 'azidothymidine',
    PG: '2-phosphoglycerate',
    EC: 'Enzyme Commission',
    EI: 'enzyme–inhibitor complex',
    ES: 'enzyme–substrate complex',
    VSEPR: 'valence shell electron pair repulsion',
    PH: 'pleckstrin homology, a protein domain',
    TBA: 'thiobarbituric acid',
  },
  cellstruct: {
    Pi: 'inorganic phosphate',
    CsCl: 'caesium chloride',
    SA: 'surface area',
    TEM: 'transmission electron microscope',
    SEM: 'scanning electron microscope',
    EM: 'electron microscopy',
    TLC: 'thin-layer chromatography',
    NA: 'numerical aperture',
  },
  medgen: {
    Pi: 'inorganic phosphate',
    EM: 'electron microscopy',
    SEM: 'scanning electron microscope',
    IF: 'intermediate filaments',
    CDK: 'cyclin-dependent kinase',
    ATM: 'ataxia telangiectasia mutated, a kinase that senses DNA damage',
    MAD: 'mitotic arrest deficient',
    BUB: 'budding uninhibited by benzimidazole',
    HMG: 'high-mobility group',
    CpG: 'a cytosine followed by a guanine',
    ISCN: 'International System for Human Cytogenomic Nomenclature',
    CML: 'chronic myeloid leukaemia',
    VNTR: 'variable number tandem repeat',
    SINE: 'short interspersed nuclear element',
    SINEs: 'short interspersed nuclear elements',
    LINE: 'long interspersed nuclear element',
    LINEs: 'long interspersed nuclear elements',
    FISH: 'fluorescence in situ hybridisation',
    AT: 'adenine–thymine',
    GC: 'guanine–cytosine',
    AD: 'autosomal dominant',
    AR: 'autosomal recessive',
    XR: 'X-linked recessive',
    XD: 'X-linked dominant',
    DMD: 'Duchenne muscular dystrophy',
    BMD: 'Becker muscular dystrophy',
    SRY: 'sex-determining region of the Y chromosome',
    AZF: 'azoospermia factor',
    UPD: 'uniparental disomy',
    EMS: 'ethyl methanesulfonate',
    BU: '5-bromouracil',
    HMC: '5-hydroxymethylcytosine',
    CAP: 'catabolite activator protein',
    LHON: 'Leber hereditary optic neuropathy',
    LPS: 'lipopolysaccharide',
    YAC: 'yeast artificial chromosome',
    BAC: 'bacterial artificial chromosome',
    PKU: 'phenylketonuria',
    CF: 'cystic fibrosis',
    ADA: 'adenosine deaminase',
    SCID: 'severe combined immunodeficiency',
    GM: 'genetically modified',
    MD: 'muscular dystrophy',
    RFLP: 'restriction fragment length polymorphism',
    MELAS: 'mitochondrial myopathy, encephalopathy, lactic acidosis and stroke-like episodes',
    MERRF: 'myoclonic epilepsy with ragged red fibres',
    CRISPR: 'clustered regularly interspaced short palindromic repeats',
  },
  entomology: {
    IRS: 'indoor residual spraying',
    ITN: 'insecticide-treated net',
    LLIN: 'long-lasting insecticidal net',
    ULV: 'ultra-low-volume',
    SIT: 'sterile insect technique',
    IVM: 'integrated vector management',
    PBO: 'piperonyl butoxide',
    UNICEF: 'the United Nations Children’s Fund',
    UNDP: 'the United Nations Development Programme',
    DDT: 'dichlorodiphenyltrichloroethane, an insecticide',
    DEET: 'N,N-diethyl-meta-toluamide, an insect repellent',
    CDC: 'the US Centers for Disease Control and Prevention',
  },
  behavioural: {
    CAT: 'computerised axial tomography',
    WAIS: 'Wechsler Adult Intelligence Scale',
    WISC: 'Wechsler Intelligence Scale for Children',
    WPPSI: 'Wechsler Preschool and Primary Scale of Intelligence',
    MMPI: 'Minnesota Multiphasic Personality Inventory',
    IQ: 'intelligence quotient',
    UCS: 'unconditioned stimulus',
    UCR: 'unconditioned response',
    CS: 'conditioned stimulus',
    CSs: 'conditioned stimuli',
    CR: 'conditioned response',
  },
  stats: {
    BP: 'blood pressure',
    IQR: 'interquartile range',
    PMF: 'probability mass function',
    PDF: 'probability density function',
    CDF: 'cumulative distribution function',
    MGF: 'moment-generating function',
    PPV: 'positive predictive value',
    NPV: 'negative predictive value',
    IQ: 'intelligence quotient',
    IHME: 'the Institute for Health Metrics and Evaluation',
    COVID: 'coronavirus disease',
  },
  bmc: {
    IUPAC: 'International Union of Pure and Applied Chemistry',
    PCC: 'pyridinium chlorochromate',
    PDC: 'pyridinium dichromate',
    HX: 'a hydrogen halide such as HCl or HBr',
    SEM: null,
  },
  // Communication Skills: only the grammar codes (per lesson, below). KNUST, MP, PTA and ID appear in
  // example sentences, which must stay as written (and every learner here is at KNUST).
  commskills: {
    FANBOYS: 'for, and, nor, but, or, yet, so: the coordinating conjunctions',
    SD: null,
  },
  compapp: {
    CSIR: 'Council for Scientific and Industrial Research',
    SSNIT: 'Social Security and National Insurance Trust',
    NHIL: 'National Health Insurance Levy',
    GetFUND: 'Ghana Education Trust Fund',
    HTML: 'HyperText Markup Language, the language of web pages',
    DOS: 'disk operating system',
    MS: 'Microsoft',
    ANOVA: 'analysis of variance',
    // "My PC" is the name of a menu choice, kept as PowerPoint writes it.
    // Excel's functions keep their own names (SD is not used; STDEV is).
    SD: null,
    CT: null,
  },
  algebra: {
    // Points and lines (AB, PQ), and GH¢ for Ghana cedis, are not abbreviations here.
    SD: null,
    CT: null,
    PET: null,
  },
};

/** Meanings for one lesson, where its course's would be wrong. */
export const LESSON_ABBREVIATIONS: Record<string, Meanings> = {
  // Introduction to Anatomy: X-ray views, not action potentials.
  'anatomy-01': { AP: 'anteroposterior, the X-ray beam passing from front to back', PA: 'posteroanterior, the X-ray beam passing from back to front' },
  // Connective Tissue: CT is the tissue, not the scanner.
  'anatomy-05': { CT: 'connective tissue' },
  // Concord: the two rules, singular subject with singular verb and plural with plural.
  'commskills-04': { SS: 'singular subject', SV: 'singular verb', PS: 'plural subject', PV: 'plural verb', SSS: 'singular antecedent, singular pronoun, singular verb', PPP: 'plural antecedent, plural pronoun, plural verb' },
  // The Sentence: the basic clause patterns.
  'commskills-05': {
    SV: 'subject–verb', SVO: 'subject–verb–object', SVC: 'subject–verb–complement', SVA: 'subject–verb–adverbial',
    SVOO: 'subject–verb–indirect object–direct object', SVOC: 'subject–verb–object–complement', SVOA: 'subject–verb–object–adverbial',
    VS: 'verb before subject', SS: 'two subjects',
  },
  // Gene regulation and its statistics: geometric mean, standard error.
  'medgen-08': { GM: 'geometric mean', SEM: 'standard error of the mean' },
  // Sandflies: how the drugs are given.
  'entomology-05': { IV: 'intravenous, into a vein' },
  // Learning: classical conditioning (US here is the unconditioned stimulus, not a country).
  'behavioural-learning': { US: 'unconditioned stimulus' },
  // The business lessons of Algebra (elsewhere in the course AC is a line and AI a product of matrices).
  'algebra-diff-business': { MR: 'marginal revenue', MC: 'marginal cost', MP: 'marginal profit', AC: 'average cost' },
  'algebra-int-apps': { MR: 'marginal revenue', MC: 'marginal cost', CS: 'consumer surplus', PS: 'producer surplus' },
};

export function abbreviationsFor(lessonId: string): Record<string, string> {
  const course = lessonId.split('-')[0];
  const merged: Meanings = { ...SHARED_ABBREVIATIONS, ...(COURSE_ABBREVIATIONS[course] ?? {}), ...(LESSON_ABBREVIATIONS[lessonId] ?? {}) };
  return Object.fromEntries(Object.entries(merged).filter((entry): entry is [string, string] => entry[1] !== null));
}

// ── Spelling them out ────────────────────────────────────────────────────────

const SUBSCRIPT: Record<string, string> = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9', '₊': '+', '₋': '-' };
const SUPERSCRIPT: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-' };

/** What follows a word as a subscript or superscript ("FADH<sub>2</sub>", "NAD⁺"): its text and length. */
function scriptAfter(markup: string, at: number): { text: string; length: number } | null {
  const tag = /^<(sub|sup)>([^<]*)<\/\1>/.exec(markup.slice(at));
  if (tag) return { text: tag[2].replace(/[−–]/g, '-'), length: tag[0].length };
  let i = at;
  let text = '';
  while (i < markup.length && (SUBSCRIPT[markup[i]] || SUPERSCRIPT[markup[i]])) {
    text += SUBSCRIPT[markup[i]] ?? SUPERSCRIPT[markup[i]];
    i += 1;
  }
  return text ? { text, length: i - at } : null;
}

const pluralOf = (meaning: string) => (/s$/.test(meaning) ? meaning : /[^aeiou]y$/.test(meaning) ? `${meaning.slice(0, -1)}ies` : `${meaning}s`);

/** The words of a meaning that show it is written out nearby (short or common words do not count). */
const COMMON = new Set(['with', 'from', 'that', 'which', 'into', 'form', 'their', 'there', 'also', 'called', 'found', 'mostly', 'average', 'inside', 'passing', 'such', 'acid', 'factor', 'class', 'antibody', 'reduced', 'enzyme', 'splits', 'joined', 'attached', 'abnormal']);
function signalWords(meaning: string) {
  return meaning.toLowerCase().split(/[^a-zà-ÿ]+/).filter((word) => word.length >= 4 && !COMMON.has(word));
}

const plainOf = (markup: string) => markup.replace(/<[^>]+>/g, '').toLowerCase();

/** The meaning is already written within a sentence or so of the abbreviation. */
function writtenNearby(markup: string, from: number, to: number, meaning: string, context = '') {
  const words = signalWords(meaning);
  if (!words.length) return false;
  const window = plainOf(markup.slice(Math.max(0, from - 110), Math.min(markup.length, to + 110))) + plainOf(context);
  const found = words.filter((word) => window.includes(word.slice(0, Math.max(4, word.length - 2)))).length;
  return words.length <= 3 ? found === words.length : found / words.length >= 0.75;
}

type Insert = { at: number; key: string; meaning: string; label: boolean; square: boolean };

/**
 * One text with each abbreviation not yet explained in its section spelled out; `seen` holds the ones
 * already explained in the section (by this or earlier texts) and is updated. `context`: text shown
 * beside it that may explain it (a table row's other cells); `skipQuotes`: leave quoted text as it is
 * (Communication Skills, whose quotations are example sentences).
 */
export function expandAbbreviations(markup: string, meanings: Record<string, string>, seen: Set<string>, options: { context?: string; skipQuotes?: boolean } = {}): string {
  const inserts: Insert[] = [];
  let term = 0;
  let frac = 0;
  let script = 0;
  let depth = 0;
  let quoted = false;
  for (let i = 0; i < markup.length; ) {
    const char = markup[i];
    if (char === '<') {
      const end = markup.indexOf('>', i);
      if (end < 0) break;
      const tag = markup.slice(i, end + 1);
      const name = /^<\/?([a-z]+)/.exec(tag)?.[1];
      const close = tag.startsWith('</');
      if (name === 'term') term += close ? -1 : 1;
      else if (name === 'frac') frac += close ? -1 : 1;
      else if (name === 'sub' || name === 'sup') script += close ? -1 : 1;
      i = end + 1;
      continue;
    }
    if (char === '(') depth += 1;
    else if (char === ')') depth = Math.max(0, depth - 1);
    else if (char === '“') quoted = true;
    else if (char === '”') quoted = false;
    const startsWord = /[A-Za-z]/.test(char) && !/[A-Za-z0-9]/.test(markup[i - 1] ?? '');
    if (!startsWord) { i += 1; continue; }
    const word = /^[A-Za-z][A-Za-z0-9]*/.exec(markup.slice(i))![0];
    const start = i;
    i += word.length;
    if (term || frac || script || (quoted && options.skipQuotes)) continue;
    // The abbreviation: the word itself, its plural, or the word with its sub/superscript (FADH₂, HbA₂).
    let key: string | null = null;
    let end = start + word.length;
    let plural = false;
    const raised = scriptAfter(markup, end);
    if (raised) {
      if (meanings[word + raised.text]) { key = word + raised.text; end += raised.length; }
      else if (/^[0-9]?[+-]+$/.test(raised.text) && meanings[word]) { key = word; end += raised.length; }
    } else if (meanings[word]) key = word;
    else if (word.length > 2 && word.endsWith('s') && meanings[word.slice(0, -1)]) { key = word.slice(0, -1); plural = true; }
    if (!key || seen.has(key)) continue;
    seen.add(key);
    const meaning = plural && !meanings[word] ? pluralOf(meanings[key]) : meanings[key];
    // Already explained: "(ECF)" after the full name, or the full name close by.
    const before = markup.slice(0, start).replace(/(<[a-z]+>)+$/, '');
    const after = markup.slice(end).replace(/^(<\/[a-z]+>)+/, '');
    if (before.endsWith('(') && /^\)/.test(after)) continue;
    if (writtenNearby(markup, start, end, meaning, options.context)) continue;
    // …or a bracket right after it that already gives part of the meaning: "HbF (fetal, α₂γ₂)".
    const note = /^ \(([^)]*)\)/.exec(after);
    if (note && signalWords(meaning).some((word) => plainOf(note[1]).includes(word.slice(0, Math.max(4, word.length - 2))))) continue;
    // Where the meaning goes: after the word (and a possessive, and closing tags), or after the whole
    // word it is part of ("HMG-CoA (HMG: …)", "PAS-positive (PAS: …)").
    let at = end;
    let label = false;
    const compound = /^(?:-[A-Za-z0-9α-ωΑ-Ω′]+)+/.exec(markup.slice(at));
    if (compound && /[A-Za-z0-9]/.test(compound[0][1] ?? '')) { at += compound[0].length; label = true; }
    const possessive = /^['’]s\b/.exec(markup.slice(at));
    if (possessive) at += possessive[0].length;
    const closing = /^(<\/(?:b|i)>)+/.exec(markup.slice(at));
    if (closing) at += closing[0].length;
    // Inside brackets, or right before a bracket of its own ("MCV (fL)", "PCR (1986)"), the meaning
    // goes in square brackets, so the two never run together.
    inserts.push({ at, key, meaning, label, square: depth > 0 || /^ \(/.test(markup.slice(at)) });
  }
  if (!inserts.length) return markup;
  // Insert from the end so the earlier positions stay right; meanings at one place share a bracket.
  const groups = new Map<number, Insert[]>();
  for (const insert of inserts) groups.set(insert.at, [...(groups.get(insert.at) ?? []), insert]);
  let out = markup;
  for (const [at, group] of [...groups].sort((a, b) => b[0] - a[0])) {
    const labelled = group.length > 1 || group.some((insert) => insert.label);
    const text = group.map((insert) => (labelled ? `${insert.key}: ${insert.meaning}` : insert.meaning)).join('; ');
    if (group.some((insert) => insert.square)) out = `${out.slice(0, at)} [${text}]${out.slice(at)}`;
    else out = `${out.slice(0, at)} (${text})${out.slice(at)}`;
  }
  return out;
}

// ── Whole lessons ─────────────────────────────────────────────────────────────

type Walk = { meanings: Record<string, string>; seen: Set<string>; skipQuotes: boolean };

function blocksWithAbbreviations(blocks: readonly Block[], walk: Walk): Block[] {
  const { meanings, seen, skipQuotes } = walk;
  const fix = (text: string, context?: string) => expandAbbreviations(text, meanings, seen, { context, skipQuotes });
  return blocks.map((block): Block => {
    switch (block.k) {
      case 'p': return { ...block, x: fix(block.x) };
      case 'ul': return { ...block, items: block.items.map((item) => fix(item)) };
      // Headings stay short: the meaning goes with the first use in the rows.
      // A cell's neighbours may explain it ("CPD | Citrate, phosphate, dextrose").
      case 'table': return { ...block, rows: block.rows.map((row) => ({ c: row.c.map((cell, k) => fix(cell, row.c.filter((_, j) => j !== k).join(' '))) })) };
      case 'term': {
        // A key term that is the abbreviation explains it.
        const name = block.name.replace(/<[^>]+>/g, '').trim();
        if (meanings[name]) seen.add(name);
        return { ...block, def: fix(block.def) };
      }
      case 'box': return { ...block, blocks: blocksWithAbbreviations(block.blocks, walk) };
      case 'step': return block.blocks ? { ...block, blocks: blocksWithAbbreviations(block.blocks, walk) } : block;
      case 'cards': return { ...block, items: block.items.map((item) => ({ ...item, blocks: blocksWithAbbreviations(item.blocks, walk) })) };
      case 'illus': return { ...block, cap: fix(block.cap), ...(block.note ? { note: fix(block.note) } : {}) };
      case 'fig': return block.cap ? { ...block, cap: fix(block.cap) } : block;
      default: return block;
    }
  });
}

/** So common that once per lesson is enough (in every section they would only clutter the text). */
export const ONCE_PER_LESSON = new Set(['DNA', 'RNA', 'mRNA', 'tRNA', 'rRNA', 'ATP', 'UV', 'WHO', 'HIV']);

export function sectionsWithAbbreviations(lessonId: string, sections: readonly LegacySection[]): LegacySection[] {
  const meanings = abbreviationsFor(lessonId);
  const skipQuotes = lessonId.startsWith('commskills-');
  const explained = new Set<string>();
  return sections.map((section) => {
    const seen = new Set(explained);
    const blocks = blocksWithAbbreviations(section.blocks, { meanings, seen, skipQuotes });
    for (const key of seen) if (ONCE_PER_LESSON.has(key)) explained.add(key);
    return { ...section, blocks };
  });
}
