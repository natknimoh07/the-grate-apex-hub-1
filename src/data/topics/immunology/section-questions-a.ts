// Biochemistry → Immunology: five more questions for every reading section, lessons 1–5
// (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L (its place in the topic), section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/immunology/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsA: Q[] = [
  // ─── Lesson 1 · S1 Immunity ────────────────────────────────────────
  mcq('s1-1-1', 'immunity-definition', 'What does the immune system protect against, besides microorganisms?', 'Their toxins and tumour cells', ['Only broken bones and wounds of the skin', 'Only poisons swallowed with food', 'Only infections caught from animals'], {
    explanation: 'Microorganisms, their toxins and tumour cells.',
  }),
  mcq('s1-1-2', 'immunity-definition', 'What kinds of protection does the immune system give?', 'Non-specific and specific', ['Only specific, against one germ at a time', 'Only non-specific, the same for all', 'Only physical, from the skin'], {
    explanation: 'Non-specific and specific protection.',
  }),
  tf({ id: 's1-1-3', conceptId: 'immunity-definition', statement: 'Every immune response protects the body from disease.', answer: false, explanation: 'Not all immune responses protect from disease.' }),
  mcq('s1-1-4', 'immunity-definition', 'In 430 BC Athens, who could nurse plague victims safely?', 'People who had recovered from the plague', ['Children who had never been ill at all', 'Doctors who wore protective masks and gloves', 'People who had been vaccinated earlier'], {
    explanation: 'Survivors were immune to the plague.',
  }),
  fill('s1-1-5', 'immunity-definition', 'Immunity is the state of protection from ____ disease.', ['infectious'], {
    explanation: 'Immunity: protection from infectious disease.',
  }),

  // ─── Lesson 1 · S2 The first vaccines ──────────────────────────────
  mcq('s1-2-1', 'vaccination-history', 'How old was the boy Jenner inoculated with cowpox?', 'Eight', ['Three', 'Fifteen', 'Twenty-one'], {
    explanation: 'Jenner inoculated an eight-year-old boy in 1798.',
  }),
  mcq('s1-2-2', 'vaccination-history', 'How did Pasteur attenuate his fowl cholera bacteria?', 'By ageing the culture', ['By heating the culture to boiling point', 'By freezing the bacteria for a year', 'By passing them through cows first'], {
    explanation: 'An old culture had become attenuated.',
  }),
  tf({ id: 's1-2-3', conceptId: 'vaccination-history', statement: 'In variolation, smallpox material was inhaled or put into small skin cuts.', answer: true, explanation: 'Lady Mary Wortley Montagu saw it in Constantinople in 1718.' }),
  mcq('s1-2-4', 'vaccination-history', 'What did Jenner notice about milkmaids?', 'Those who had cowpox were immune to smallpox', ['Those who drank milk never got any infection', 'Those who milked cows caught smallpox more', 'Those who had smallpox could not get cowpox'], {
    explanation: 'Cowpox protected against smallpox.',
  }),
  mcq('s1-2-5', 'vaccination-history', 'How was the 1881 anthrax vaccine attenuated?', 'By heat', ['By ageing', 'By cold', 'By passing it through rabbits'], {
    explanation: 'Heat-attenuated anthrax protected the vaccinated sheep.',
  }),

  // ─── Lesson 1 · S3 Cells or serum? ─────────────────────────────────
  mcq('s1-3-1', 'cellular-humoral-debate', 'Which cells did Metchnikoff’s phagocytes most likely include?', 'Monocytes and neutrophils', ['Red cells and platelets of the blood', 'Nerve cells and glial cells', 'Liver cells and skin cells'], {
    explanation: 'Phagocytes were likely monocytes and neutrophils.',
  }),
  mcq('s1-3-2', 'cellular-humoral-debate', 'Who isolated the gamma-globulin fraction that carried serum immunity?', 'Elvin Kabat', ['Edward Jenner of Gloucestershire', 'Louis Pasteur', 'Paul Ehrlich'], {
    explanation: 'In the 1930s Elvin Kabat isolated immunoglobulin.',
  }),
  tf({ id: 's1-3-3', conceptId: 'cellular-humoral-debate', statement: 'Both the cellular and the humoral camps turned out to be right.', answer: true, explanation: 'The lymphocyte underlies both kinds of immunity.' }),
  mcq('s1-3-4', 'cellular-humoral-debate', 'Who showed that B cells secrete antibody?', 'Cooper', ['Miller, who studied the thymus', 'Steinman', 'Glick'], {
    explanation: 'Miller: T cells and thymus; Cooper: B cells secrete antibody.',
  }),
  mcq('s1-3-5', 'cellular-humoral-debate', 'Which animals did Bruce Glick use to show B and T cells?', 'Chickens', ['Mice in cages kept for years', 'Rabbits', 'Sheep'], {
    explanation: 'Glick’s chicken experiments separated T and B cells.',
  }),

  // ─── Lesson 1 · S4 How specificity arises ──────────────────────────
  mcq('s1-4-1', 'clonal-selection', 'Which theory of specificity is accepted today?', 'Clonal selection', ['The instructional template theory', 'Ehrlich’s original side-chain idea only', 'The theory of spontaneous antibodies'], {
    explanation: 'Clonal selection, the refined selective theory.',
  }),
  mcq('s1-4-2', 'clonal-selection', 'Who proposed an instructional theory of antibody formation?', 'Linus Pauling', ['Paul Ehrlich, the side-chain theorist', 'Edward Jenner', 'Elie Metchnikoff'], {
    explanation: 'Linus Pauling, 1930s–40s.',
  }),
  tf({ id: 's1-4-3', conceptId: 'clonal-selection', statement: 'In clonal selection, each lymphocyte carries receptors for one antigen.', answer: true, explanation: 'With specificity fixed before meeting antigen.' }),
  mcq('s1-4-4', 'clonal-selection', 'When is a lymphocyte’s specificity set, in the selective theories?', 'Before it meets the antigen', ['After it meets the antigen, by folding', 'Only in old age, after many infections', 'At the moment of vaccination'], {
    explanation: 'Specificity is set before exposure.',
  }),
  mcq('s1-4-5', 'clonal-selection', 'What did Ehrlich call the receptors on blood cells?', 'Side-chain receptors', ['Template receptors that fold round antigen', 'Pattern receptors', 'Toll-like receptors'], {
    explanation: 'Ehrlich’s “side-chain” receptors.',
  }),

  // ─── Lesson 2 · S1 Acquiring immunity ──────────────────────────────
  mcq('s2-1-1', 'acquired-immunity', 'Vaccination gives which kind of immunity?', 'Artificial active', ['Natural passive, from the mother', 'Natural active', 'Artificial passive'], {
    explanation: 'Vaccination is artificial and active.',
  }),
  mcq('s2-1-2', 'acquired-immunity', 'Maternal antibody in breast milk gives which kind of immunity?', 'Natural passive', ['Artificial active, like a vaccine', 'Natural active', 'Artificial passive'], {
    explanation: 'Maternal antibody is natural passive.',
  }),
  tf({ id: 's2-1-3', conceptId: 'acquired-immunity', statement: 'Active immunity is long-term.', answer: true, explanation: 'Active: long-term; passive: immediate but short.' }),
  mcq('s2-1-4', 'acquired-immunity', 'Injected immune serum globulins give which kind of immunity?', 'Artificial passive', ['Natural active, from an infection', 'Artificial active', 'Natural passive'], {
    explanation: 'Injected antibodies are artificial passive.',
  }),
  mcq('s2-1-5', 'acquired-immunity', 'What is “infection”, as the lecture defines it?', 'Entering, multiplying and stimulating a response', ['The clinical signs that a patient shows', 'The death of the pathogen in the body', 'The making of antibody by plasma cells in the lymph nodes'], {
    explanation: 'Infection: entry, multiplication and stimulation of a response.',
  }),

  // ─── Lesson 2 · S2 Innate immunity ─────────────────────────────────
  mcq('s2-2-1', 'innate-barriers', 'Which enzyme in tears is a chemical barrier?', 'Lysozyme', ['Amylase from the salivary glands', 'Pepsin', 'Lipase'], {
    explanation: 'Lysozyme in tears and mucosa.',
  }),
  mcq('s2-2-2', 'innate-barriers', 'What do innate immune receptors recognise?', 'Broad classes of pathogen (PAMPs)', ['One single epitope on each germ only', 'Self proteins on the body’s own cells', 'Antibodies made by plasma cells'], {
    explanation: 'Innate receptors recognise PAMPs.',
  }),
  tf({ id: 's2-2-3', conceptId: 'innate-barriers', statement: 'Complement can be activated by antibody even though it is part of innate immunity.', answer: true, explanation: 'IN slide 53.' }),
  mcq('s2-2-4', 'innate-barriers', 'Which is an ANATOMICAL barrier?', 'Mucus and cilia', ['Low pH of the stomach and vagina', 'Body temperature', 'β-Defensins'], {
    explanation: 'Mucus and cilia are anatomical; low pH and temperature physiological.',
  }),
  mcq('s2-2-5', 'innate-barriers', 'Of which wider network is immunity a part?', 'The neuroendocrine-immune network', ['The digestive-respiratory network of the gut', 'The skeletal-muscle network', 'The renal-hepatic network'], {
    explanation: 'The NEI network.',
  }),

  // ─── Lesson 2 · S3 Adaptive immunity ───────────────────────────────
  mcq('s2-3-1', 'adaptive-immunity', 'Where do T cells mature?', 'In the thymus', ['In the bone marrow, like B cells', 'In the spleen', 'In the liver'], {
    explanation: 'B cells mature in bone marrow, T cells in the thymus.',
  }),
  mcq('s2-3-2', 'adaptive-immunity', 'What two kinds of cell does clonal expansion give?', 'Effector cells and memory cells', ['Stem cells and red blood cells', 'Plasma cells and platelets only', 'Neutrophils and macrophages'], {
    explanation: 'Antigen recognition causes clonal expansion into effector and memory cells.',
  }),
  tf({ id: 's2-3-3', conceptId: 'adaptive-immunity', statement: 'Adaptive immunity can recognise at least a billion different threats.', answer: true, explanation: 'It is specific and diverse.' }),
  mcq('s2-3-4', 'adaptive-immunity', 'What do T cells recognise on MHC molecules?', 'Peptides', ['Whole bacteria', 'Sugars only', 'Antibodies'], {
    explanation: 'CD8⁺ and CD4⁺ T cells recognise peptide on MHC.',
  }),
  mcq('s2-3-5', 'adaptive-immunity', 'Where do naive B and T cells wait?', 'Lymph nodes, spleen and lymphoid tissue', ['In the blood only, never in tissues', 'In the bone marrow for the rest of their lives', 'In the skin epithelium'], {
    explanation: 'They wait in lymph nodes, spleen and lymphoid tissue.',
  }),

  // ─── Lesson 3 · S1 PAMPs ───────────────────────────────────────────
  mcq('s3-1-1', 'pamps-prrs', 'Why do PAMPs rarely mutate?', 'They are essential to the microbe', ['They are made by the host instead', 'They are hidden inside the nucleus', 'They are too small to change'], {
    explanation: 'Being essential, they rarely change.',
  }),
  mcq('s3-1-2', 'pamps-prrs', 'Which PAMP comes from viral replication?', 'Double-stranded RNA', ['Lipopolysaccharide from cell walls', 'Flagellin', 'Peptidoglycan'], {
    explanation: 'dsRNA comes from viral replication.',
  }),
  tf({ id: 's3-1-3', conceptId: 'pamps-prrs', statement: 'PAMPs are absent from host cells.', answer: true, explanation: 'They are microbial signatures absent from the host.' }),
  mcq('s3-1-4', 'pamps-prrs', 'Which PAMP is found in both bacterial and viral genomes?', 'Unmethylated CpG DNA', ['Lipopolysaccharide of Gram-negatives', 'Flagellin', 'Peptidoglycan'], {
    explanation: 'Unmethylated CpG DNA.',
  }),
  fill('s3-1-5', 'pamps-prrs', 'The lecture calls a PAMP a pathogen’s “____”.', ['fingerprint'], {
    explanation: 'A pathogen’s fingerprint.',
  }),

  // ─── Lesson 3 · S2 PRRs ────────────────────────────────────────────
  mcq('s3-2-1', 'pamps-prrs', 'Which receptor recognises flagellin?', 'TLR5', ['TLR4 with CD14', 'TLR9', 'NOD2'], {
    explanation: 'Flagellin → TLR5.',
  }),
  mcq('s3-2-2', 'pamps-prrs', 'Where are NOD1 and NOD2 found?', 'In the cytosol', ['On the plasma membrane of all cells', 'In endosomes', 'In the nucleus'], {
    explanation: 'NOD1 and NOD2 detect peptidoglycan fragments in the cytosol.',
  }),
  tf({ id: 's3-2-3', conceptId: 'pamps-prrs', statement: 'PRR agonists can act as vaccine adjuvants.', answer: true, explanation: 'IN slide 47.' }),
  mcq('s3-2-4', 'pamps-prrs', 'Which TLR recognises CpG DNA?', 'TLR9', ['TLR4 with its co-receptor CD14', 'TLR5', 'TLR2'], {
    explanation: 'CpG DNA → TLR9.',
  }),
  mcq('s3-2-5', 'pamps-prrs', 'Which disease may be triggered by misdirected pattern recognition?', 'Lupus', ['Gout in the big toe', 'Scurvy', 'Rickets'], {
    explanation: 'Misdirected recognition may trigger lupus.',
  }),

  // ─── Lesson 3 · S3 Acute inflammation ──────────────────────────────
  mcq('s3-3-1', 'inflammation', 'What causes the redness and heat of inflammation?', 'Increased blood flow and metabolism', ['Leaky capillaries letting out fluid', 'Pressure on nerves from kinins', 'Death of red blood cells'], {
    explanation: 'Redness and heat from increased blood flow and metabolism.',
  }),
  mcq('s3-3-2', 'inflammation', 'What do neutrophils follow in chemotaxis?', 'Chemical gradients', ['Electric currents along nerves', 'Light from the wound', 'Blood pressure changes'], {
    explanation: 'Chemotaxis along gradients from mast cells and injured tissue.',
  }),
  tf({ id: 's3-3-3', conceptId: 'inflammation', statement: 'Acute inflammation can become chronic.', answer: true, explanation: 'IN slide 51.' }),
  mcq('s3-3-4', 'inflammation', 'What causes the pain of inflammation?', 'Pressure, kinins and prostaglandins', ['Increased blood flow and heat', 'Histamine making the small vessels leaky', 'Loss of function in the joint'], {
    explanation: 'Pain: pressure and kinins, prostaglandins.',
  }),
  mcq('s3-3-5', 'inflammation', 'What is the first step of leucocyte recruitment?', 'Margination', ['Diapedesis through the vessel wall', 'Chemotaxis', 'Phagocytosis'], {
    explanation: 'Margination, then diapedesis and chemotaxis.',
  }),

  // ─── Lesson 4 · S1 What cytokines are ──────────────────────────────
  mcq('s4-1-1', 'cytokine-basics', 'Which cytokine is a lymphokine?', 'IL-2', ['TNF-α, from macrophages', 'IL-1', 'CXCL9'], {
    explanation: 'Lymphokines from activated lymphocytes, e.g. IL-2 and IFN-γ.',
  }),
  mcq('s4-1-2', 'cytokine-basics', 'Which interferons are type I?', 'IFN-α and IFN-β', ['IFN-γ only, from T cells', 'IFN-λ and IFN-ω', 'All interferons'], {
    explanation: 'Type I: IFN-α, IFN-β; type II: IFN-γ.',
  }),
  tf({ id: 's4-1-3', conceptId: 'cytokine-basics', statement: 'Interleukins are numbered sequentially.', answer: true, explanation: '“Between leukocytes”, numbered as found.' }),
  mcq('s4-1-4', 'cytokine-basics', 'Which is a colony-stimulating factor?', 'GM-CSF', ['TGF-β, the growth factor', 'IL-10', 'IFN-γ'], {
    explanation: 'G-CSF, M-CSF and GM-CSF.',
  }),
  mcq('s4-1-5', 'cytokine-basics', 'What does a cytokine regulate?', 'The nature, intensity and duration of immune responses', ['Only the speed of blood clotting after an injury to a vessel', 'Only the amount of antibody made', 'Only the colour of the skin'], {
    explanation: 'CY slide 4.',
  }),

  // ─── Lesson 4 · S2 Properties ──────────────────────────────────────
  mcq('s4-2-1', 'cytokine-basics', 'IL-4 acting on B cells, T cells, mast cells and macrophages is an example of…', 'Pleiotropy', ['Redundancy between many cytokines', 'Synergy', 'Antagonism'], {
    explanation: 'One cytokine, many targets: pleiotropic.',
  }),
  mcq('s4-2-2', 'cytokine-basics', 'IL-4 plus IL-5 enhancing IgE production is an example of…', 'Synergy', ['Antagonism between two cytokines', 'Redundancy', 'Cascade induction'], {
    explanation: 'Together they enhance IgE: synergistic.',
  }),
  tf({ id: 's4-2-3', conceptId: 'cytokine-basics', statement: 'Cytokines bind their receptors with very high affinity.', answer: true, explanation: 'pM–nM affinity, acting at low concentration.' }),
  mcq('s4-2-4', 'cytokine-basics', 'Fever caused by a cytokine in the blood is an example of which action?', 'Endocrine', ['Autocrine, on the cell that made it', 'Paracrine', 'Juxtacrine'], {
    explanation: 'Distant action via blood: endocrine.',
  }),
  mcq('s4-2-5', 'cytokine-basics', 'Which cells are the principal producers of cytokines?', 'TH cells and macrophages', ['Red blood cells and platelets', 'Plasma cells only', 'Neurons'], {
    explanation: 'TH cells and macrophages.',
  }),

  // ─── Lesson 4 · S3 Receptors and JAK/STAT ──────────────────────────
  mcq('s4-3-1', 'cytokine-receptors', 'What enters the nucleus to switch on genes in JAK/STAT signalling?', 'STAT dimers', ['Phosphorylated JAK kinases themselves', 'The cytokine', 'The receptor'], {
    explanation: 'Phosphorylated STATs dimerise and enter the nucleus.',
  }),
  mcq('s4-3-2', 'cytokine-receptors', 'Which receptor family signals through SMAD?', 'TGF-β receptors', ['Chemokine receptors with G proteins', 'TNF receptors', 'Interferon receptors'], {
    explanation: 'TGFβR1/2 and BMPR signal via SMAD.',
  }),
  tf({ id: 's4-3-3', conceptId: 'cytokine-receptors', statement: 'Chemokine receptors are G-protein coupled.', answer: true, explanation: 'CXCR1–7 and CCR1–10.' }),
  mcq('s4-3-4', 'cytokine-receptors', 'Which receptor belongs to the TNF receptor family?', 'Fas', ['IL-2R of the hematopoietin family', 'IL-10R', 'CXCR4'], {
    explanation: 'TNFR1, TNFR2, Fas and RANK.',
  }),
  mcq('s4-3-5', 'cytokine-receptors', 'Which kinase is a JAK?', 'TYK2', ['Src', 'PI3K', 'PKA'], {
    explanation: 'JAK1, JAK2 and TYK2.',
  }),

  // ─── Lesson 4 · S4 Helper T-cell subsets ───────────────────────────
  mcq('s4-4-1', 'th-subsets', 'Which cytokine induces Th2 cells?', 'IL-4', ['IL-12 with IFN-γ, as for Th1', 'IL-23', 'IL-2 with TGF-β'], {
    explanation: 'Th2 is induced by IL-4; Th1 by IL-12 and IFN-γ.',
  }),
  mcq('s4-4-2', 'th-subsets', 'Which subset helps B cells in germinal centres?', 'Tfh', ['Th17, with IL-17 and IL-22', 'Treg', 'Th1'], {
    explanation: 'Tfh: Bcl-6, IL-21 and IL-4.',
  }),
  tf({ id: 's4-4-3', conceptId: 'th-subsets', statement: 'Th1 and Th2 cytokines each inhibit the other subset.', answer: true, explanation: 'CY slide 23.' }),
  mcq('s4-4-4', 'th-subsets', 'What does IL-1Ra do?', 'Binds the receptor without activating it', ['Activates the IL-1 receptor strongly and for longer', 'Destroys IL-1 in the blood', 'Makes more IL-1'], {
    explanation: 'A receptor antagonist.',
  }),
  mcq('s4-4-5', 'th-subsets', 'Which subset fights helminths and drives allergy?', 'Th2', ['Th1, with IFN-γ and TNF', 'Th17', 'Treg'], {
    explanation: 'Th2: IL-4, IL-5, IL-13 — IgE, helminths, allergy.',
  }),

  // ─── Lesson 4 · S5 Diseases and therapies ──────────────────────────
  mcq('s4-5-1', 'cytokine-disease', 'Which drug is a JAK inhibitor?', 'Baricitinib', ['Adalimumab, an anti-TNF antibody', 'Anakinra', 'Tocilizumab'], {
    explanation: 'Baricitinib and ruxolitinib are JAK inhibitors.',
  }),
  mcq('s4-5-2', 'cytokine-disease', 'How does T. cruzi in Chagas disease harm T cells?', 'It cuts their IL-2 receptor (CD25) by 90%', ['It destroys the thymus of the patient completely', 'It makes too much IL-2', 'It blocks antibodies'], {
    explanation: 'CY slide 21.',
  }),
  tf({ id: 's4-5-3', conceptId: 'cytokine-disease', statement: 'Dupilumab blocks the IL-4 receptor α chain.', answer: true, explanation: 'Dupilumab: anti-IL-4Rα.' }),
  mcq('s4-5-4', 'cytokine-disease', 'Which cytokine is overproduced in cardiac myxoma and myeloma?', 'IL-6', ['IL-2, the T-cell growth factor', 'IFN-α', 'IL-10'], {
    explanation: 'IL-6 overproduction.',
  }),
  mcq('s4-5-5', 'cytokine-disease', 'Why is cytokine therapy hard?', 'Short half-life and pleiotropic side effects', ['Cytokines cannot be made in a laboratory in any amount', 'Cytokines are too large to inject', 'Cytokines act only in animals'], {
    explanation: 'Dosing, short half-life and pleiotropic effects.',
  }),

  // ─── Lesson 5 · S1 Blood and haematopoiesis ────────────────────────
  mcq('s5-1-1', 'blood-haematopoiesis', 'How much of plasma is water?', '90%', ['55%', '45%', '99%'], {
    explanation: 'Plasma is 90% water and 6–8% protein.',
  }),
  mcq('s5-1-2', 'blood-haematopoiesis', 'Which cells are lymphoid?', 'T, B and NK cells', ['Neutrophils, eosinophils and basophils', 'Monocytes and dendritic cells', 'Red cells and platelets'], {
    explanation: 'Lymphoid: T, B and NK cells.',
  }),
  tf({ id: 's5-1-3', conceptId: 'blood-haematopoiesis', statement: 'Haematopoiesis is regulated by cytokines and growth factors.', answer: true, explanation: 'CE slide 7.' }),
  mcq('s5-1-4', 'blood-haematopoiesis', 'Which of these is an ADAPTIVE immune cell?', 'B lymphocyte', ['NK cell, a large granular lymphocyte', 'Dendritic cell', 'Neutrophil'], {
    explanation: 'Adaptive cells are B and T lymphocytes.',
  }),
  mcq('s5-1-5', 'blood-haematopoiesis', 'How much of plasma is protein?', '6–8%', ['60–80%', '0.6–0.8%', '20–30%'], {
    explanation: 'Plasma: 90% water, 6–8% protein.',
  }),

  // ─── Lesson 5 · S2 CD markers ──────────────────────────────────────
  mcq('s5-2-1', 'cd-markers', 'Which marker identifies granulocytes?', 'CD15', ['CD14, the monocyte marker', 'CD19', 'CD56'], {
    explanation: 'Granulocyte: CD15.',
  }),
  mcq('s5-2-2', 'cd-markers', 'Which marker identifies monocytes and macrophages?', 'CD14', ['CD15, the granulocyte marker', 'CD56', 'CD1c'], {
    explanation: 'Monocyte/macrophage: CD14.',
  }),
  tf({ id: 's5-2-3', conceptId: 'cd-markers', statement: 'There are over 300 CD molecules.', answer: true, explanation: 'CE slides 15, 19.' }),
  mcq('s5-2-4', 'cd-markers', 'Which marker identifies dendritic cells?', 'CD1c', ['CD45, found on all leucocytes', 'CD19', 'CD3'], {
    explanation: 'Dendritic cell: CD1c.',
  }),
  mcq('s5-2-5', 'cd-markers', 'When did the CD nomenclature begin?', '1982', ['1952', '1902', '2002'], {
    explanation: 'The nomenclature dates from 1982.',
  }),

  // ─── Lesson 5 · S3 Macrophages and neutrophils ─────────────────────
  mcq('s5-3-1', 'phagocytes', 'How much larger are tissue macrophages than monocytes?', '5–10 times', ['2 times at the very most', '50–100 times', 'The same size'], {
    explanation: 'Macrophages are 5–10 times larger.',
  }),
  mcq('s5-3-2', 'phagocytes', 'Which enzyme drives the respiratory burst?', 'NADPH oxidase', ['Inducible NO synthase in the cytosol', 'Lysozyme', 'Collagenase'], {
    explanation: 'NADPH oxidase makes superoxide.',
  }),
  tf({ id: 's5-3-3', conceptId: 'phagocytes', statement: 'Neutrophils have a larger respiratory burst than macrophages.', answer: true, explanation: 'They are more likely to kill what they ingest.' }),
  mcq('s5-3-4', 'phagocytes', 'What share of white cells are neutrophils?', '50–70%', ['1–3%, like eosinophils', '5–10%', '90–100%'], {
    explanation: 'Neutrophils are 50–70% of white cells.',
  }),
  mcq('s5-3-5', 'phagocytes', 'What does nitric oxide form with superoxide?', 'Peroxynitrite', ['Hydrogen peroxide and water', 'Hypochlorous acid', 'Singlet oxygen'], {
    explanation: 'NO + superoxide → peroxynitrite.',
  }),

  // ─── Lesson 5 · S4 Other innate cells ──────────────────────────────
  mcq('s5-4-1', 'other-innate-cells', 'What share of white cells are eosinophils?', '1–3%', ['50–70%, like neutrophils', 'Less than 0.1%', '20–25%'], {
    explanation: 'Eosinophils 1–3%; basophils <1%.',
  }),
  mcq('s5-4-2', 'other-innate-cells', 'Where are mast cells found?', 'In mucosa and connective tissue', ['In the circulating blood, like basophils', 'In the bone marrow only', 'In the lymph nodes only'], {
    explanation: 'Mast cells are in tissues, not blood.',
  }),
  tf({ id: 's5-4-3', conceptId: 'other-innate-cells', statement: 'Dendritic cells have long membrane extensions.', answer: true, explanation: 'They take up, process and present antigen.' }),
  mcq('s5-4-4', 'other-innate-cells', 'What do basophils release?', 'Histamine and leukotrienes', ['Antibodies and complement proteins', 'Perforin and granzyme', 'Collagenase and lactoferrin'], {
    explanation: 'Basophils: histamine and leukotrienes; allergy.',
  }),
  mcq('s5-4-5', 'other-innate-cells', 'What do dendritic cells express in high amounts?', 'MHC class II and co-stimulators', ['MHC class I and nothing else', 'Antibodies and IgE receptors on their surface', 'Haemoglobin and myoglobin'], {
    explanation: 'High MHC II and co-stimulators.',
  }),

  // ─── Lesson 5 · S5 NK and NKT cells ────────────────────────────────
  mcq('s5-5-1', 'nk-cells', 'Which is the most common way NK cells kill?', 'Perforin and granzyme', ['FasL binding to Fas on the target', 'ADCC', 'Phagocytosis'], {
    explanation: 'Perforin/granzyme is the most common.',
  }),
  mcq('s5-5-2', 'nk-cells', 'Why do nude mice still have NK cells?', 'NK cells need no thymic development', ['NK cells are made in the thymus of nude mice', 'Nude mice have extra thymus tissue', 'NK cells come from the mother'], {
    explanation: 'Nude mice lack a thymus, but NK cells do not need one.',
  }),
  tf({ id: 's5-5-3', conceptId: 'nk-cells', statement: 'NK cells have a specific antigen receptor.', answer: false, explanation: 'They have no specific antigen receptor.' }),
  mcq('s5-5-4', 'nk-cells', 'Which motif marks an inhibitory NK receptor?', 'ITIM', ['ITAM, found in activating receptors', 'SH2', 'RGD'], {
    explanation: 'Activating: ITAM; inhibitory: ITIM.',
  }),
  mcq('s5-5-5', 'nk-cells', 'What is CD16 on NK cells?', 'An IgG Fc receptor', ['A T-cell receptor chain for antigen', 'An MHC molecule', 'A complement receptor'], {
    explanation: 'CD16 is the IgG Fc receptor.',
  }),
];
