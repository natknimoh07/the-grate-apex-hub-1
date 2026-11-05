// Biochemistry → Oxygen Carriers, lesson 5: The thalassaemias.
// Source: the "Thalassaemias" deck (31 slides, Telegram downloads; modified from a presentation
// by R. L. Olesinski, with an appendix by E. F. Laing) — thal(...) in ./sources.ts.
// Kept in its own file: reading layer, interactive layer, reading extras and quiz questions.
import type { LessonConfusion } from '@/data/lesson-types';
import { ask, assertionReason as ar, learn, match, mcq, multi, order, recall, type InteractiveDraft, type LessonDraft, type QuestionDraft } from '@/data/topics/build';
import { thal, type ConceptId } from '@/data/topics/oxygen-carriers/sources';

const ID = 'oxygen-carriers-5';

export const thalassaemiaLesson: LessonDraft<ConceptId> = {
  id: ID,
  title: 'The Thalassaemias',
  description: 'Inherited disorders of globin chain production: how unmatched chains destroy red cells, the notation and grades of alpha and beta thalassaemia, HbH and Hb Barts, special variants, and the tests, treatment and prevention.',
  xp: 25,
  sourceRefs: thal([2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]),
  objectives: [
    'Define thalassaemia and explain why it is common where falciparum malaria is',
    'Explain ineffective erythropoiesis in thalassaemia',
    'Use the gene notation to grade alpha and beta thalassaemia',
    'Describe HbH disease and Hb Barts hydrops fetalis',
    'Compare beta thalassaemia minor, intermedia and major',
    'Outline the tests, treatment and prevention',
  ],
  chunks: [
    {
      title: 'What thalassaemia is',
      kind: 'overview',
      paragraphs: [
        'The thalassaemias are inherited disorders in which too little of one kind of globin chain is made, giving anaemia that ranges from moderate to severe (slide 2). They are commonest around the Mediterranean, in Africa, Western and Southeast Asia, India and Burma — the same distribution as Plasmodium falciparum (slide 3).',
        'Beta thalassaemia is usually caused by point mutations in the β-globin genes that reduce (β⁺) or abolish (β⁰) chain production, in various combinations such as β⁰β⁰, β⁺β⁺ or β⁺β⁰ (slide 19).',
      ],
      steps: [
        { label: 'Unmatched chains', detail: 'The chains made in excess have no partner, so they precipitate inside the developing red cells (slides 18, 27).' },
        { label: 'Membrane damage', detail: 'The precipitates damage the red cell membranes (slides 18, 27).' },
        { label: 'Destruction in the marrow', detail: 'Damaged cells are haemolysed while still in the bone marrow. Together this is ineffective erythropoiesis (slides 18, 27).' },
      ],
      terms: [{ term: 'Ineffective erythropoiesis', meaning: 'Red cells are made but destroyed in the marrow before they can be released.' }],
      sourceRefs: thal([2, 3, 18, 19, 27]),
    },
    {
      title: 'Alpha thalassaemia',
      kind: 'classification',
      paragraphs: [
        'Each chromosome 16 carries two α genes, so a person has four. In the notation, α marks a working gene, a slash separates the genes from each parent, and a dash marks a deleted gene (slides 5–7). Alpha thalassaemias are caused mainly by gene deletions (slide 29). The grades are minima (silent carrier), minor, intermedia and major (slide 4).',
      ],
      table: {
        columns: ['Genotype', 'Condition (slides 8, 29–31)'],
        rows: [
          ['αα/αα', 'Normal'],
          ['−α/αα (1 gene deleted)', 'Silent carrier: clinically normal'],
          ['−α/−α or −−/αα (2 deleted)', 'Alpha thalassaemia minor: asymptomatic carrier with a low MCV'],
          ['−−/−α (3 deleted)', 'HbH disease: moderate anaemia with haemolysis — hepatosplenomegaly, leg ulcers, jaundice; HbH (β₄) with Hb Barts, HbA and HbA₂ present'],
          ['−−/−− (all 4 deleted)', 'Hb Barts hydrops fetalis: death in utero; Hb Barts (γ₄) cannot deliver oxygen'],
        ],
      },
      keyPoints: [
        'HbH is a β₄ tetramer, linked to −−/−α (slide 15).',
        'Hb Barts is a γ₄ tetramer, linked to −−/−−; it is lethal, and at high concentration it can sickle (slide 16).',
      ],
      terms: [
        { term: 'HbH', meaning: 'A tetramer of four β chains, formed when α chains are scarce (three α genes deleted).' },
        { term: 'Hb Barts', meaning: 'A tetramer of four γ chains; with all four α genes deleted it causes hydrops fetalis.' },
      ],
      sourceRefs: thal([4, 5, 6, 7, 8, 15, 16, 29, 30, 31]),
    },
    {
      title: 'Beta thalassaemia',
      kind: 'classification',
      paragraphs: ['β⁺ means a gene that makes some, but less, β chain; β⁰ means a gene that makes none (slides 10, 11). The grades (slide 13):'],
      table: {
        columns: ['Grade', 'Genotype', 'Features (slides 21–24)'],
        rows: [
          ['Minor (trait)', 'β/β⁰, β/β⁺', 'Carrier, usually symptom-free; mild, well-tolerated anaemia that may worsen in pregnancy; MCV under 75 fL, HbA₂ over 3.5%, HbF slightly raised; often confused with iron deficiency, which also lowers the MCV'],
          ['Intermedia', 'β⁺/β⁺', 'Moderate anaemia not needing transfusion; may have splenomegaly. Also from β trait inherited with another haemoglobinopathy (HbC/β thal, or HbS/β thal, which looks like sickle cell anaemia)'],
          ['Major (Cooley’s anaemia)', 'β⁰/β⁺, β⁰/β⁰', 'Both β genes abnormal; severe anaemia and failure to thrive within the first year; extramedullary haematopoiesis deforms the face (bossing of the skull); lifelong transfusion; iron overload after about 10 years'],
        ],
      },
      keyPoints: [
        'In Cooley’s anaemia iron deposits can cause endocrine failure (pituitary, thyroid, pancreas), liver disease and cardiac toxicity. HbA is absent, HbF is markedly raised and HbA₂ varies; the film shows very hypochromic, microcytic cells with target cells and nucleated red cells (slides 24, 25).',
      ],
      terms: [
        { term: 'β⁰', meaning: 'A β-globin gene that makes no β chain.' },
        { term: 'β⁺', meaning: 'A β-globin gene that makes some, but too little, β chain.' },
      ],
      sourceRefs: thal([9, 10, 11, 13, 21, 22, 23, 24, 25]),
    },
    {
      title: 'Special variants',
      kind: 'definitions',
      table: {
        columns: ['Variant', 'Features (slides 12, 14)'],
        rows: [
          ['Hb Lepore', 'A δβ fusion chain, seen in some types of thalassaemia'],
          ['Hb Constant Spring', 'An α chain with 31 extra amino acids (αᶜˢ)'],
          ['HPFH', 'Hereditary persistence of fetal haemoglobin (α₂γ₂)'],
          ['Superscript T', 'Marks a non-functioning gene'],
        ],
      },
      sourceRefs: thal([12, 14]),
    },
    {
      title: 'Tests, treatment and prevention',
      kind: 'clinical',
      paragraphs: [
        'Tests: full blood count, mean cell volume, blood film, serum iron, HbA₂, HbF and haemoglobin electrophoresis (slide 20).',
      ],
      steps: [
        { label: 'Transfusion', detail: 'Keep Hb above 9 g/dL to suppress the ineffective extramedullary haematopoiesis and allow normal growth (slide 25).' },
        { label: 'Iron chelation', detail: 'Desferrioxamine or deferiprone infused under the skin for 8–12 hours a day; large doses of ascorbic acid increase urinary iron excretion (slide 25).' },
        { label: 'Splenectomy', detail: 'If hypersplenism persists and transfusion needs keep rising (slide 26).' },
        { label: 'Hormone replacement', detail: 'For diabetes mellitus, hypothyroidism and growth hormone deficiency (slide 26).' },
        { label: 'Cure', detail: 'A histocompatible bone marrow transplant (slide 26).' },
      ],
      keyPoints: ['Prevention: genetic counselling; antenatal diagnosis from fetal blood or DNA, followed by therapeutic abortion if necessary (slide 28).'],
      notes: [{ kind: 'check', text: 'Slide 25 spells the oral chelator “desferriprone”; its name is deferiprone.' }],
      sourceRefs: thal([20, 25, 26, 28]),
    },
  ],
  summary: [
    'Too little of one globin chain; unmatched chains precipitate → ineffective erythropoiesis; follows falciparum malaria.',
    'Alpha (deletions, 4 genes): 1 silent, 2 minor (low MCV), 3 HbH (β₄), 4 Hb Barts (γ₄) hydrops.',
    'Beta (point mutations): minor (MCV < 75, HbA₂ > 3.5%), intermedia (β⁺/β⁺), major/Cooley’s (no HbA, high HbF).',
    'Treat: transfusion to Hb > 9, chelation (desferrioxamine), splenectomy, hormones, marrow transplant; prevent by counselling and antenatal diagnosis.',
  ],
};

export const thalassaemiaInteractive: InteractiveDraft<ConceptId>[] = [
  ask(mcq('c5-01', 'alpha-thal', 'Before you read: how many α-globin genes does a normal person have?', 'Four', ['Two', 'One', 'Eight'], { explanation: 'Slide 6: two on each chromosome 16.', skill: 'prediction' })),
  learn('Too few of one chain', ['Thalassaemia is a shortage of one globin chain. The partner chains have nothing to pair with, precipitate, and destroy the red cells in the marrow.'], { sourceRefs: thal([2, 18]) }),
  ask(order('c5-02', 'alpha-thal', 'Order the alpha thalassaemias from mildest to most severe:', ['Silent carrier (−α/αα)', 'Alpha thalassaemia minor (−α/−α)', 'HbH disease (−−/−α)', 'Hb Barts hydrops fetalis (−−/−−)'], { explanation: 'Slide 8.' })),
  ask(match('c5-03', 'beta-thal', 'Match each grade to its genotype:', [['Minor', 'β/β⁰'], ['Intermedia', 'β⁺/β⁺'], ['Major', 'β⁰/β⁰']], { explanation: 'Slide 13.' })),
  learn('Iron is the price', ['Lifelong transfusion keeps children alive but loads them with iron, which damages the endocrine glands, liver and heart unless it is removed by chelation.'], { sourceRefs: thal([23, 24, 25]) }),
  recall('r5-01', 'beta-thal', 'Describe beta thalassaemia major.', ['Both β genes abnormal (β⁰/β⁺ or β⁰/β⁰); severe anaemia and failure to thrive in the first year.', 'Extramedullary haematopoiesis with skull bossing; no HbA, high HbF; hypochromic microcytic film with target cells.', 'Needs lifelong transfusion and iron chelation; iron overload damages glands, liver and heart.'], thal([23, 24, 25])),
];

export const thalassaemiaExtras: { highYield: string[]; confusions: LessonConfusion[]; estimatedMinutes: number; xp: number } = {
  estimatedMinutes: 10,
  xp: 25,
  highYield: ['HbH = β₄ (3 α genes deleted); Hb Barts = γ₄ (4 deleted).', 'β trait: MCV < 75 fL, HbA₂ > 3.5%.', 'Cooley’s: no HbA, high HbF, transfusion + chelation.'],
  confusions: [{ confusion: 'A low MCV always means iron deficiency.', clarification: 'Beta thalassaemia trait also lowers the MCV; a raised HbA₂ points to thalassaemia (slide 21).' }],
};

type Q = QuestionDraft<ConceptId>;

export const thalassaemiaQuestions: Q[] = [
  mcq('q5-01', 'thal-basics', 'The basic defect in thalassaemia is:', 'Reduced production of a globin chain', ['A single amino acid change in globin', 'A failure to make haem in the marrow', 'Loss of iron from the red cells'], { explanation: 'Slide 2.' }),
  mcq('q5-02', 'thal-basics', 'The geographical spread of thalassaemia parallels that of:', 'Plasmodium falciparum', ['Trypanosoma brucei', 'Mycobacterium tuberculosis', 'Schistosoma haematobium'], { explanation: 'Slide 3.' }),
  mcq('q5-03', 'thal-basics', 'In thalassaemia, damaged red cells are mostly destroyed in the:', 'Bone marrow', ['Lungs', 'Kidneys', 'Lymph nodes'], { explanation: 'Slides 18, 27.' }),
  mcq('q5-04', 'beta-thal', 'Beta thalassaemia is usually caused by:', 'Point mutations', ['Whole gene deletions', 'Chromosome loss', 'Trinucleotide repeats'], { explanation: 'Slide 19.' }),
  mcq('q5-05', 'alpha-thal', 'Alpha thalassaemias are mainly caused by:', 'Gene deletions', ['Point mutations', 'Gene duplications', 'Promoter methylation'], { explanation: 'Slide 29.' }),
  mcq('q5-06', 'alpha-thal', 'The α-globin genes lie on chromosome:', '16', ['11', '6', '22'], { explanation: 'Slide 6.' }),
  mcq('q5-07', 'alpha-thal', 'HbH disease results from deletion of how many α genes?', '3', ['1', '2', '4'], { explanation: 'Slide 30.' }),
  mcq('q5-08', 'alpha-thal', 'HbH is a tetramer of:', 'β chains', ['γ chains', 'α chains', 'δ chains'], { explanation: 'Slide 15.' }),
  mcq('q5-09', 'alpha-thal', 'Hb Barts is a tetramer of:', 'γ chains', ['β chains', 'α chains', 'ε chains'], { explanation: 'Slide 16.' }),
  mcq('q5-10', 'alpha-thal', 'Deletion of all four α genes causes:', 'Hydrops fetalis', ['HbH disease', 'Silent carrier state', 'Thalassaemia minor'], { explanation: 'Slide 29.' }),
  mcq('q5-11', 'alpha-thal', 'Features of HbH disease include:', 'Hepatosplenomegaly, leg ulcers and jaundice', ['No anaemia and a normal blood film', 'Death in utero from heart failure', 'Isolated skull bossing without haemolysis'], { explanation: 'Slide 30.' }),
  mcq('q5-12', 'alpha-thal', 'A person with only one α gene deleted is:', 'Clinically normal', ['Severely anaemic', 'Transfusion dependent', 'Hydropic'], { explanation: 'Slide 31.' }),
  mcq('q5-13', 'beta-thal', 'In the notation, β⁰ indicates a gene that:', 'Produces no β chain', ['Produces a reduced amount of β chain', 'Produces an abnormal fused chain', 'Produces normal β chain'], { explanation: 'Slide 11.' }),
  mcq('q5-14', 'beta-thal', 'Beta thalassaemia trait typically shows an MCV of:', 'Less than 75 fL', ['More than 100 fL', 'Exactly 90 fL', 'Between 80 and 95 fL'], { explanation: 'Slide 21.' }),
  mcq('q5-15', 'beta-thal', 'In beta thalassaemia trait, HbA₂ is:', 'Above 3.5%', ['Below 1%', 'Absent', 'Exactly 2%'], { explanation: 'Slide 21.' }),
  mcq('q5-16', 'beta-thal', 'Beta thalassaemia trait is often confused with:', 'Iron deficiency anaemia', ['Pernicious anaemia', 'Aplastic anaemia', 'Hereditary spherocytosis'], { explanation: 'Slide 21.' }),
  mcq('q5-17', 'beta-thal', 'Cooley’s anaemia is another name for:', 'Beta thalassaemia major', ['Alpha thalassaemia minor', 'HbH disease', 'Sickle cell trait'], { explanation: 'Slide 23.' }),
  mcq('q5-18', 'beta-thal', 'Bossing of the skull in thalassaemia major is due to:', 'Extramedullary haematopoiesis', ['Iron deposits in the skull', 'Excess growth hormone', 'Repeated transfusion reactions'], { explanation: 'Slide 23.' }),
  mcq('q5-19', 'beta-thal', 'In Cooley’s anaemia, which haemoglobin is absent?', 'HbA', ['HbF', 'HbA₂', 'HbH'], { explanation: 'Slides 24, 25.' }),
  mcq('q5-20', 'thal-special', 'Hb Constant Spring has an α chain with how many extra amino acids?', '31', ['3', '13', '141'], { explanation: 'Slide 14.' }),
  mcq('q5-21', 'thal-special', 'Hb Lepore is a fusion of:', 'δ and β chains', ['α and β chains', 'γ and α chains', 'ε and γ chains'], { explanation: 'Slide 14.' }),
  mcq('q5-22', 'thal-management', 'In Cooley’s anaemia, transfusions aim to keep the Hb above:', '9 g/dL', ['5 g/dL', '15 g/dL', '12 g/dL'], { explanation: 'Slide 25.' }),
  mcq('q5-23', 'thal-management', 'An iron chelator used in thalassaemia is:', 'Desferrioxamine', ['Hydroxyurea', 'Ferrous sulphate', 'Folic acid'], { explanation: 'Slide 25.' }),
  mcq('q5-24', 'thal-management', 'The treatment that can offer a cure is:', 'Histocompatible marrow transplant', ['Splenectomy', 'Iron supplements', 'Hormone replacement therapy'], { explanation: 'Slide 26.' }),
  multi('q5-25', 'thal-management', 'Select the laboratory tests used in thalassaemia:', ['Hb electrophoresis', 'Mean cell volume', 'Serum iron'], ['Serum amylase', 'Troponin'], { explanation: 'Slide 20.' }),
  ar('ar5-01', 'thal-basics', 'Erythropoiesis in thalassaemia is ineffective.', 'Unmatched globin chains precipitate and damage red cells in the marrow.', 'explains', 'Both true (slides 18, 27).'),
  ar('ar5-02', 'thal-management', 'Large doses of ascorbic acid help remove iron.', 'Ascorbic acid increases urinary excretion of iron.', 'explains', 'Both true (slide 25).'),
  ar('ar5-03', 'alpha-thal', 'Hb Barts is an effective oxygen carrier.', 'Hb Barts is present when all four α genes are deleted.', 'a-false-r-true', 'It is physiologically ineffective as an oxygen carrier (slide 29).'),
  ar('ar5-04', 'beta-thal', 'Thalassaemia intermedia needs regular blood transfusion.', 'Intermedia is caused only by β⁰/β⁰.', 'both-false', 'It does not need transfusion, and is β⁺/β⁺ or β trait with another haemoglobinopathy (slide 22).'),
  ar('ar5-05', 'beta-thal', 'Iron overload occurs in Cooley’s anaemia.', 'Iron overload is caused by eating too much iron.', 'a-true-r-false', 'It results from lifelong blood transfusion (slides 23, 24).'),
];
