// HB1 lessons kept in the app (owner, 2026-11-02: "add alkanes, alkenes and stuff to
// HB1 courses, and all other stuff in the HB folder that does not have lessons").
//
// The original HB1 lessons are read from the shared database (lessons, lessonContent;
// data/legacy-study.ts). Lectures in the Human Biology folder that never had a lesson
// are written here instead, so adding them changes nothing in the live database.
// legacy-study.ts merges them into each course's lesson list and serves their text.
//
// Each lesson brings its own quiz, written from the same lecture (the file is named in
// `source`). scripts/hb1-review/lesson-sets.mjs copies the quizzes into the course's
// question bank (public/curriculum/<course>.json, one set per lesson), so practice,
// review, Apex and battles find them; `pastTopics` adds the course's past questions on
// the topic (their `tp`) to the lesson's practice. tests/hb1-lessons.test.mjs checks it.
import type { BankQuestion } from '@/data/legacy-questions';
import type { LegacyExtras, LegacyLessonBody, LegacyLessonMeta, LegacySection } from '@/data/legacy-study';

import { bmcAlkanes } from '@/data/hb1-lessons/bmc-alkanes';
import { bmcAldehydes, bmcKetones } from '@/data/hb1-lessons/bmc-aldehydes-ketones';
import { bmcStereochemistry } from '@/data/hb1-lessons/bmc-stereochemistry';
import { bmcAlkenes, bmcAlkynes } from '@/data/hb1-lessons/bmc-alkenes-alkynes';
import { bmcAlkylHalides } from '@/data/hb1-lessons/bmc-alkyl-halides';
import { bmcAlcohols } from '@/data/hb1-lessons/bmc-alcohols';
import { bmcAromatics } from '@/data/hb1-lessons/bmc-aromatics';
import { bmcAcidDerivatives, bmcCarboxylicAcids } from '@/data/hb1-lessons/bmc-carboxylic-acids';
import { bmcAmines } from '@/data/hb1-lessons/bmc-amines';
import { behaviouralLearning } from '@/data/hb1-lessons/behavioural-learning';
import { behaviouralMemory } from '@/data/hb1-lessons/behavioural-memory';
import { behaviouralPersonality } from '@/data/hb1-lessons/behavioural-personality';
import { behaviouralStress } from '@/data/hb1-lessons/behavioural-stress';
import { physiologyAns } from '@/data/hb1-lessons/physiology-ans';
import { physiologyBodyFluids } from '@/data/hb1-lessons/physiology-body-fluids';
import { physiologyHomeostasis } from '@/data/hb1-lessons/physiology-homeostasis';
import { physiologyExcitable } from '@/data/hb1-lessons/physiology-excitable';
import { physiologySkeletalMuscle } from '@/data/hb1-lessons/physiology-skeletal-muscle';
import { physiologyCardiacMuscle } from '@/data/hb1-lessons/physiology-cardiac-muscle';
import { physiologySmoothMuscle } from '@/data/hb1-lessons/physiology-smooth-muscle';
import { physiologySynapses } from '@/data/hb1-lessons/physiology-synapses';
import { physiologyBlood } from '@/data/hb1-lessons/physiology-blood';
import { biochemistryGlycolysis } from '@/data/hb1-lessons/biochemistry-glycolysis';
import { biochemistryGluconeogenesis } from '@/data/hb1-lessons/biochemistry-gluconeogenesis';
import { biochemistryFructoseGalactose } from '@/data/hb1-lessons/biochemistry-fructose-galactose';
import { biochemistryKrebs } from '@/data/hb1-lessons/biochemistry-krebs';
import { biochemistryPpp } from '@/data/hb1-lessons/biochemistry-ppp';
import { biochemistryGlycogen } from '@/data/hb1-lessons/biochemistry-glycogen';
import { biochemistryEtc } from '@/data/hb1-lessons/biochemistry-etc';
import { biochemistryLipidOxidation } from '@/data/hb1-lessons/biochemistry-lipid-oxidation';
import { biochemistryMetabolism } from '@/data/hb1-lessons/biochemistry-metabolism';
import { biochemistryEnzymes } from '@/data/hb1-lessons/biochemistry-enzymes';
import { biochemistryPracLabSkills } from '@/data/hb1-lessons/biochemistry-prac-lab-skills';
import { biochemistryPracUnits } from '@/data/hb1-lessons/biochemistry-prac-units';
import { biochemistryPracBloodTubes } from '@/data/hb1-lessons/biochemistry-prac-blood-tubes';
import { biochemistryPracAmylase } from '@/data/hb1-lessons/biochemistry-prac-amylase';
import { biochemistryPracCarbohydrates } from '@/data/hb1-lessons/biochemistry-prac-carbohydrates';
import { biochemistryPracGlucose } from '@/data/hb1-lessons/biochemistry-prac-glucose';
import { biochemistryPracUrinalysis } from '@/data/hb1-lessons/biochemistry-prac-urinalysis';
import { entomologyBlackflies } from '@/data/hb1-lessons/entomology-blackflies';
import { entomologyFleas } from '@/data/hb1-lessons/entomology-fleas';
import { entomologyHarm } from '@/data/hb1-lessons/entomology-harm';
import { entomologyVectorControl } from '@/data/hb1-lessons/entomology-vector-control';
import { HB1_PRACTICE_IDS } from '@/data/hb1-lessons/practice-ids';
import { anatomyIntroduction } from '@/data/hb1-lessons/anatomy-introduction';
import { anatomySkeleton } from '@/data/hb1-lessons/anatomy-skeleton';
import { anatomyJoints } from '@/data/hb1-lessons/anatomy-joints';
import { anatomyEpithelium } from '@/data/hb1-lessons/anatomy-epithelium';
import { anatomyConnectiveTissue } from '@/data/hb1-lessons/anatomy-connective-tissue';
import { anatomyMuscleTissue } from '@/data/hb1-lessons/anatomy-muscle-tissue';
import { anatomyNervousTissue } from '@/data/hb1-lessons/anatomy-nervous-tissue';
import { anatomyFemaleReproductive } from '@/data/hb1-lessons/anatomy-female-reproductive';
import { anatomyMaleReproductive } from '@/data/hb1-lessons/anatomy-male-reproductive';
import { anatomyEmbryology } from '@/data/hb1-lessons/anatomy-embryology';
import { behaviouralOverview } from '@/data/hb1-lessons/behavioural-overview';
import { behaviouralParadigms } from '@/data/hb1-lessons/behavioural-paradigms';
import { behaviouralBiological } from '@/data/hb1-lessons/behavioural-biological';
import { behaviouralMotivation } from '@/data/hb1-lessons/behavioural-motivation';
import { entomologyIntroduction } from '@/data/hb1-lessons/entomology-introduction';
import { entomologyMosquitoes } from '@/data/hb1-lessons/entomology-mosquitoes';
import { entomologyAnophelineCulicine } from '@/data/hb1-lessons/entomology-anopheline-culicine';
import { entomologyLiceBedbugs } from '@/data/hb1-lessons/entomology-lice-bedbugs';
import { entomologySandfliesScabies } from '@/data/hb1-lessons/entomology-sandflies-scabies';
import { entomologyTsetseMidges } from '@/data/hb1-lessons/entomology-tsetse-midges';
import { entomologyTicks } from '@/data/hb1-lessons/entomology-ticks';
import { entomologyCockroaches } from '@/data/hb1-lessons/entomology-cockroaches';
import { entomologyMyiasis } from '@/data/hb1-lessons/entomology-myiasis';
import { entomologyCollecting } from '@/data/hb1-lessons/entomology-collecting';
import { cellstructMicroscopy } from '@/data/hb1-lessons/cellstruct-microscopy';
import { cellstructTechniques } from '@/data/hb1-lessons/cellstruct-techniques';
import { cellstructCell } from '@/data/hb1-lessons/cellstruct-cell';
import { cellstructOrganelles } from '@/data/hb1-lessons/cellstruct-organelles';
import { cellstructMembrane } from '@/data/hb1-lessons/cellstruct-membrane';
import { biolchemElements } from '@/data/hb1-lessons/biolchem-elements';
import { biolchemEvolution } from '@/data/hb1-lessons/biolchem-evolution';
import { biolchemAtoms } from '@/data/hb1-lessons/biolchem-atoms';
import { biolchemBonds } from '@/data/hb1-lessons/biolchem-bonds';
import { biolchemCarbohydrates } from '@/data/hb1-lessons/biolchem-carbohydrates';
import { biolchemNucleic } from '@/data/hb1-lessons/biolchem-nucleic';
import { biolchemProteins } from '@/data/hb1-lessons/biolchem-proteins';
import { biolchemEnzymes } from '@/data/hb1-lessons/biolchem-enzymes';
import { biolchemPathways } from '@/data/hb1-lessons/biolchem-pathways';
import { biolchemLipids } from '@/data/hb1-lessons/biolchem-lipids';
import { medgenCell } from '@/data/hb1-lessons/medgen-cell';
import { medgenChromosomes } from '@/data/hb1-lessons/medgen-chromosomes';
import { medgenCellCycle } from '@/data/hb1-lessons/medgen-cellcycle';
import { medgenMendel } from '@/data/hb1-lessons/medgen-mendel';
import { medgenSex } from '@/data/hb1-lessons/medgen-sex';
import { medgenMolecular } from '@/data/hb1-lessons/medgen-molecular';
import { medgenBacterial } from '@/data/hb1-lessons/medgen-bacterial';
import { medgenRegulation } from '@/data/hb1-lessons/medgen-regulation';
import { medgenHistory } from '@/data/hb1-lessons/medgen-history';
import { medgenProbability } from '@/data/hb1-lessons/medgen-probability';
import { statsIntro } from '@/data/hb1-lessons/stats-intro';
import { statsData } from '@/data/hb1-lessons/stats-data';
import { statsDescriptive } from '@/data/hb1-lessons/stats-descriptive';
import { statsProbability } from '@/data/hb1-lessons/stats-probability';
import { statsDiscrete } from '@/data/hb1-lessons/stats-discrete';
import { statsContinuous } from '@/data/hb1-lessons/stats-continuous';
import { algebraSets } from '@/data/hb1-lessons/algebra-sets';
import { algebraEquations } from '@/data/hb1-lessons/algebra-equations';
import { algebraLogs } from '@/data/hb1-lessons/algebra-logs';
import { algebraNumbers } from '@/data/hb1-lessons/algebra-numbers';
import { algebraSequences } from '@/data/hb1-lessons/algebra-sequences';
import { algebraBinomial } from '@/data/hb1-lessons/algebra-binomial';
import { algebraLines } from '@/data/hb1-lessons/algebra-lines';
import { algebraTrig } from '@/data/hb1-lessons/algebra-trig';
import { algebraMatrices } from '@/data/hb1-lessons/algebra-matrices';
import { algebraFunctions } from '@/data/hb1-lessons/algebra-functions';
import { algebraDerivatives } from '@/data/hb1-lessons/algebra-derivatives';
import { algebraDiffApps } from '@/data/hb1-lessons/algebra-diff-apps';
import { algebraDiffBusiness } from '@/data/hb1-lessons/algebra-diff-business';
import { algebraIntegration } from '@/data/hb1-lessons/algebra-integration';
import { algebraIntApps } from '@/data/hb1-lessons/algebra-int-apps';
import { algebraDiffEq } from '@/data/hb1-lessons/algebra-diffeq';
import { compappExcelStart } from '@/data/hb1-lessons/compapp-excel-start';
import { compappFormulas } from '@/data/hb1-lessons/compapp-formulas';
import { compappFunctions } from '@/data/hb1-lessons/compapp-functions';
import { compappFormatting } from '@/data/hb1-lessons/compapp-formatting';
import { compappPrinting } from '@/data/hb1-lessons/compapp-printing';
import { compappFiles } from '@/data/hb1-lessons/compapp-files';
import { compappCharts } from '@/data/hb1-lessons/compapp-charts';
import { compappPptBasics } from '@/data/hb1-lessons/compapp-ppt-basics';
import { compappPptMedia } from '@/data/hb1-lessons/compapp-ppt-media';
import { compappPptShow } from '@/data/hb1-lessons/compapp-ppt-show';
import { commskillsWordClasses } from '@/data/hb1-lessons/commskills-word-classes';
import { commskillsAmbiguity } from '@/data/hb1-lessons/commskills-ambiguity';
import { commskillsPunctuation } from '@/data/hb1-lessons/commskills-punctuation';
import { commskillsConcord } from '@/data/hb1-lessons/commskills-concord';
import { commskillsSentence } from '@/data/hb1-lessons/commskills-sentence';
import { commskillsErrors } from '@/data/hb1-lessons/commskills-errors';
import { commskillsWriting } from '@/data/hb1-lessons/commskills-writing';

/** One quiz question: prompt, right answer, three wrong answers, explanation, topic label. */
export type Hb1QuizItem = [question: string, right: string, wrong: [string, string, string], explanation: string, topic: string];

export type Hb1Lesson = {
  /** `<course>-<name>`: the part before the first "-" is the course id. */
  id: string;
  order: number;
  title: string;
  summary: string;
  minutes: number;
  /** The lecture file(s) in the Human Biology folder the lesson and its quiz come from. */
  source: string;
  sections: LegacySection[];
  extras?: LegacyExtras;
  /** Prefix of the quiz question ids in the bank (`<prefix>01`, `<prefix>02`…). */
  quizId: string;
  quizName: string;
  quiz: Hb1QuizItem[];
  /** Past-question topics (`tp` in the bank) practised with this lesson. */
  pastTopics?: string[];
  /** Whole sets of the course bank (ids) practised with this lesson, e.g. a topic review written earlier. */
  pastSets?: string[];
  /** Bank questions with these topic labels (`t`) are practised with this lesson too; "<set id>:<label>" limits a label to one set. */
  bankTopics?: string[];
  /** A heading on the course path for a group of lessons, e.g. "Biochem practicals" (owner, 2026-11-05). */
  section?: string;
};

export const HB1_LOCAL_LESSONS: Hb1Lesson[] = [
  // Basic Medical Chemistry in teaching order, one functional group per lesson (owner, 2026-11-03);
  // bmc-01 to bmc-05 rewrite the database lessons with the same ids.
  bmcAlkanes, bmcAlkenes, bmcAlkynes, bmcAromatics, bmcAlkylHalides, bmcAlcohols,
  bmcAldehydes, bmcKetones, bmcCarboxylicAcids, bmcAcidDerivatives, bmcAmines, bmcStereochemistry,
  behaviouralOverview, behaviouralParadigms, behaviouralBiological, behaviouralMotivation,
  behaviouralLearning, behaviouralMemory, behaviouralPersonality, behaviouralStress,
  physiologyBodyFluids, physiologyHomeostasis, physiologyExcitable, physiologySkeletalMuscle, physiologyCardiacMuscle, physiologySmoothMuscle, physiologySynapses, physiologyAns, physiologyBlood,
  biochemistryMetabolism, biochemistryEnzymes, biochemistryGlycolysis, biochemistryGluconeogenesis, biochemistryFructoseGalactose, biochemistryKrebs, biochemistryPpp, biochemistryGlycogen, biochemistryEtc, biochemistryLipidOxidation,
  // Biochem practicals (owner, 2026-11-05): their own section on the course path.
  biochemistryPracLabSkills, biochemistryPracUnits, biochemistryPracBloodTubes, biochemistryPracAmylase, biochemistryPracCarbohydrates, biochemistryPracGlucose, biochemistryPracUrinalysis,
  anatomyIntroduction, anatomySkeleton, anatomyJoints, anatomyEpithelium, anatomyConnectiveTissue, anatomyMuscleTissue, anatomyNervousTissue, anatomyFemaleReproductive, anatomyMaleReproductive, anatomyEmbryology,
  entomologyIntroduction, entomologyMosquitoes, entomologyAnophelineCulicine, entomologyLiceBedbugs, entomologySandfliesScabies, entomologyTsetseMidges, entomologyTicks, entomologyCockroaches, entomologyMyiasis, entomologyCollecting,
  entomologyVectorControl, entomologyFleas, entomologyBlackflies, entomologyHarm,
  cellstructMicroscopy, cellstructTechniques, cellstructCell, cellstructOrganelles, cellstructMembrane,
  biolchemElements, biolchemEvolution, biolchemAtoms, biolchemBonds, biolchemCarbohydrates, biolchemNucleic, biolchemProteins, biolchemEnzymes, biolchemPathways, biolchemLipids,

  medgenHistory, medgenCell, medgenChromosomes, medgenCellCycle, medgenMendel, medgenProbability, medgenSex, medgenMolecular, medgenBacterial, medgenRegulation,

  statsIntro, statsData, statsDescriptive, statsProbability, statsDiscrete, statsContinuous,

  algebraSets, algebraEquations, algebraLogs, algebraNumbers, algebraSequences, algebraBinomial, algebraLines, algebraTrig, algebraMatrices, algebraFunctions, algebraDerivatives, algebraDiffApps, algebraDiffBusiness, algebraIntegration, algebraIntApps, algebraDiffEq,

  compappExcelStart, compappFormulas, compappFunctions, compappFormatting, compappPrinting, compappFiles, compappCharts, compappPptBasics, compappPptMedia, compappPptShow,

  commskillsWordClasses, commskillsAmbiguity, commskillsPunctuation, commskillsConcord, commskillsSentence, commskillsErrors, commskillsWriting,
];

const courseOf = (lesson: Hb1Lesson) => lesson.id.split('-')[0];

/** The lesson's quiz in the question bank's format (the answer's place is spread over A–D). */
export function hb1QuizQuestions(lesson: Hb1Lesson): BankQuestion[] {
  return lesson.quiz.map(([q, right, wrong, e, t], index) => {
    const position = [...q].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) % 9973, 7) % 4;
    const o = [...wrong];
    o.splice(position, 0, right);
    return { id: `${lesson.quizId}${String(index + 1).padStart(2, '0')}`, q, o, a: position, e, t };
  });
}

export function hb1LessonMeta(lesson: Hb1Lesson): LegacyLessonMeta {
  return {
    id: lesson.id,
    course: courseOf(lesson),
    order: lesson.order,
    title: lesson.title,
    sub: 'Guide',
    icon: '🧫',
    summary: lesson.summary,
    minutes: lesson.minutes,
    sections: lesson.sections.map((section) => ({ id: section.id, title: section.title })),
    qids: HB1_PRACTICE_IDS[lesson.id] ?? hb1QuizQuestions(lesson).map((question) => question.id),
    ptopics: lesson.pastTopics,
    psets: lesson.pastSets,
    section: lesson.section,
  };
}

export function hb1LocalLesson(id: string): Hb1Lesson | undefined {
  return HB1_LOCAL_LESSONS.find((lesson) => lesson.id === id);
}

export function hb1LessonBody(lesson: Hb1Lesson): LegacyLessonBody {
  return { sections: lesson.sections, extras: lesson.extras };
}
