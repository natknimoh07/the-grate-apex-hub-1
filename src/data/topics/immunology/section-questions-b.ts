// Biochemistry → Immunology: five more questions for every reading section, lessons
// 6–10 (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L (its place in the topic), section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/immunology/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestionsB: Q[] = [
  // ─── Lesson 6 · S1 Structure ───────────────────────────────────────
  mcq('s6-1-1', 'ig-structure', 'What is serum, compared with plasma?', 'Plasma minus fibrinogen', ['Plasma plus extra fibrinogen and platelets', 'Plasma without any water', 'Plasma without antibodies'], {
    explanation: 'Serum = plasma minus fibrinogen.',
  }),
  mcq('s6-1-2', 'ig-structure', 'What gives the antibody molecule flexibility?', 'The hinge', ['The constant CH3 domain at the tail', 'The light chain', 'The Fc region'], {
    explanation: 'The hinge region gives flexibility.',
  }),
  tf({ id: 's6-1-3', conceptId: 'ig-structure', statement: 'Membrane immunoglobulin acts as the B-cell receptor.', answer: true, explanation: 'Secreted Ig acts in humoral immunity.' }),
  mcq('s6-1-4', 'ig-structure', 'What is the valence of an F(ab′)₂ fragment?', 'Two (divalent)', ['One (monovalent), like a single Fab', 'Ten', 'None'], {
    explanation: 'F(ab′)₂: two Fab-like arms together.',
  }),
  mcq('s6-1-5', 'ig-structure', 'What does “allotype” mean?', 'Allelic differences between individuals', ['The class of the heavy chain of the antibody', 'The antigen-binding sequence', 'The number of domains'], {
    explanation: 'Isotype: class; allotype: allelic; idiotype: binding site.',
  }),

  // ─── Lesson 6 · S2 The five classes ────────────────────────────────
  mcq('s6-2-1', 'ig-classes', 'Which class is a marker of recent infection?', 'IgM', ['IgG, made in the secondary response', 'IgE', 'IgD'], {
    explanation: 'IgM is first in a primary response.',
  }),
  mcq('s6-2-2', 'ig-classes', 'Which class has an extra CH4 domain?', 'IgE', ['IgA in its secretory dimeric form', 'IgD', 'IgG'], {
    explanation: 'IgE: monomer with extra CH4.',
  }),
  tf({ id: 's6-2-3', conceptId: 'ig-classes', statement: 'Secretory IgA is protected by a secretory component.', answer: true, explanation: 'The secretory component protects it.' }),
  mcq('s6-2-4', 'ig-classes', 'How many subclasses of IgG are there?', 'Four', ['Two', 'Five', 'Seven'], {
    explanation: 'IgG has 4 subclasses.',
  }),
  mcq('s6-2-5', 'ig-classes', 'Which class is the best activator of the classical complement pathway?', 'IgM', ['IgG, the most abundant class', 'IgA', 'IgE'], {
    explanation: 'IgM: best agglutinator and classical complement activator.',
  }),

  // ─── Lesson 6 · S3 Binding antigen ─────────────────────────────────
  mcq('s6-3-1', 'ag-ab-binding', 'What is avidity?', 'The overall strength of the antigen–antibody complex', ['The strength of one epitope with one binding site only', 'The number of epitopes on an antigen', 'The speed of antibody production'], {
    explanation: 'Affinity is one site; avidity is overall.',
  }),
  mcq('s6-3-2', 'ag-ab-binding', 'What do antibodies recognise on an epitope?', 'Its shape', ['Its colour under light', 'Its weight in daltons', 'Its electric charge only'], {
    explanation: 'The better the fit, the stronger the binding.',
  }),
  tf({ id: 's6-3-3', conceptId: 'ag-ab-binding', statement: 'Antibodies bind Fc receptors on NK cells to bring about ADCC.', answer: true, explanation: 'IG22 slides 9, 17.' }),
  mcq('s6-3-4', 'ag-ab-binding', 'Which is an outcome of antigen–antibody binding?', 'Agglutination', ['Haematopoiesis in the bone marrow', 'Glycolysis', 'Transcription'], {
    explanation: 'Agglutination, complement, clearance and new responses.',
  }),
  mcq('s6-3-5', 'ag-ab-binding', 'What is affinity?', 'The strength of one epitope binding one site', ['The overall strength of the whole complex', 'Binding to similar epitopes on different antigens', 'The number of binding sites'], {
    explanation: 'AB slide 15.',
  }),

  // ─── Lesson 7 · S1 Making monoclonals ──────────────────────────────
  mcq('s7-1-1', 'mab-basics', 'Why do unfused myeloma cells die in HAT medium?', 'They cannot grow in it', ['They are killed by the B cells', 'They are too small to divide', 'They need the spleen to survive'], {
    explanation: 'Only hybridomas grow in HAT.',
  }),
  mcq('s7-1-2', 'mab-basics', 'Which three compounds make up HAT medium?', 'Hypoxanthine, aminopterin and thymidine', ['Histidine, alanine and tryptophan', 'Heparin, albumin and transferrin proteins', 'Haem, ATP and taurine'], {
    explanation: 'HAT: hypoxanthine, aminopterin, thymidine.',
  }),
  tf({ id: 's7-1-3', conceptId: 'mab-basics', statement: 'Polyclonal antibodies bind many epitopes.', answer: true, explanation: 'Monoclonals bind one; polyclonals many.' }),
  mcq('s7-1-4', 'mab-basics', 'Which animal is usually immunised to make monoclonals?', 'A mouse', ['A horse', 'A rabbit', 'A chicken'], {
    explanation: 'Usually a mouse.',
  }),
  mcq('s7-1-5', 'mab-basics', 'Why are B cells fused with myeloma cells?', 'To make them immortal', ['To make them smaller', 'To kill them', 'To change their antibody'], {
    explanation: 'Myeloma cells are immortal.',
  }),

  // ─── Lesson 7 · S2 Kinds by origin ─────────────────────────────────
  mcq('s7-2-1', 'mab-types', 'A monoclonal antibody’s name ends in “-ximab”. What is it?', 'Chimeric', ['Humanised, with only mouse CDRs kept', 'Fully human', 'Murine'], {
    explanation: '-ximab: chimeric.',
  }),
  mcq('s7-2-2', 'mab-types', 'Which name ending marks a fully human antibody?', '-umab', ['-zumab, for humanised antibodies', '-omab', '-ximab'], {
    explanation: '-umab: human.',
  }),
  tf({ id: 's7-2-3', conceptId: 'mab-types', statement: 'Humanised antibodies are human except for the mouse CDRs.', answer: true, explanation: 'AB slides 23–24.' }),
  mcq('s7-2-4', 'mab-types', 'Why are chimeric and humanised antibodies made?', 'To reduce immunogenicity and lengthen half-life', ['To make them bind more antigens at once', 'To make them cheaper to produce than mouse ones', 'To let them cross the placenta'], {
    explanation: 'Less immunogenic, longer half-life, same specificity.',
  }),
  mcq('s7-2-5', 'mab-types', 'Which name ending marks a murine antibody?', '-omab', ['-ximab, for chimeric antibodies', '-zumab', '-umab'], {
    explanation: '-omab: murine.',
  }),

  // ─── Lesson 7 · S3 Kinds by function ───────────────────────────────
  mcq('s7-3-1', 'mab-uses', 'Which antibody is bispecific?', 'Blinatumomab', ['Trastuzumab, the anti-HER2 antibody', 'Alemtuzumab', 'Rituximab'], {
    explanation: 'Blinatumomab binds CD19 and CD3.',
  }),
  mcq('s7-3-2', 'mab-uses', 'Which cancers does trastuzumab treat?', 'Breast and stomach cancer', ['Chronic lymphocytic leukaemia', 'Lymphoma only', 'Skin cancer'], {
    explanation: 'Trastuzumab blocks HER2 in breast and stomach cancer.',
  }),
  tf({ id: 's7-3-3', conceptId: 'mab-uses', statement: 'Conjugated mAbs home drugs or radiation to cancer cells.', answer: true, explanation: 'Sparing normal cells.' }),
  mcq('s7-3-4', 'mab-uses', 'Which drug is joined to brentuximab in brentuximab vedotin?', 'MMAE', ['DM1, as in ado-trastuzumab', 'Yttrium-90', 'Doxorubicin'], {
    explanation: 'Anti-CD30 + MMAE.',
  }),
  mcq('s7-3-5', 'mab-uses', 'What is radioimmunotherapy?', 'A radiolabelled antibody delivering radiation', ['Radiation that makes the body produce antibodies', 'An antibody that blocks X-rays', 'Radiation given before surgery'], {
    explanation: 'E.g. ibritumomab tiuxetan with yttrium-90.',
  }),

  // ─── Lesson 7 · S4 Uses and limits ─────────────────────────────────
  mcq('s7-4-1', 'mab-uses', 'What can human anti-mouse antibodies (HAMA) cause?', 'Serum sickness', ['Diabetes from the injected drug', 'Gout', 'Anaemia'], {
    explanation: 'HAMA can block the drug and cause serum sickness.',
  }),
  mcq('s7-4-2', 'mab-uses', 'Which antibodies are much less likely to cause HAMA?', 'Humanised antibodies', ['Mouse antibodies given many times', 'Rabbit antibodies', 'Horse antibodies'], {
    explanation: 'Humanised antibodies are much less likely to.',
  }),
  tf({ id: 's7-4-3', conceptId: 'mab-uses', statement: 'Monoclonal antibodies can help identify the origin of a tumour in tissue sections.', answer: true, explanation: 'AB slides 36–37.' }),
  mcq('s7-4-4', 'mab-uses', 'Which is a side effect of monoclonal antibodies?', 'Cytokine release syndrome', ['Growth of extra fingers and toes', 'Loss of all hair', 'Colour blindness'], {
    explanation: 'Side effects include cytokine release syndrome.',
  }),
  mcq('s7-4-5', 'mab-uses', 'Which bowel disease is treated with monoclonal antibodies?', 'Crohn’s disease', ['Coeliac disease from gluten', 'Appendicitis', 'Haemorrhoids'], {
    explanation: 'Crohn’s and ulcerative colitis.',
  }),

  // ─── Lesson 8 · S1 Definitions ─────────────────────────────────────
  mcq('s8-1-1', 'antigen-terms', 'What is an allergen?', 'A substance that induces an allergic response', ['A substance that makes the body tolerant to itself', 'A protein that carries a hapten', 'An antibody to an allergy'], {
    explanation: 'An allergen induces allergy.',
  }),
  mcq('s8-1-2', 'antigen-terms', 'What happens when a hapten is coupled to a carrier protein?', 'Antibodies form against both hapten and carrier', ['The hapten becomes inactive and harmless to the body', 'Only the carrier is recognised', 'No antibody forms at all'], {
    explanation: 'AG slides 15–16.',
  }),
  tf({ id: 's8-1-3', conceptId: 'antigen-terms', statement: 'All immunogens are antigens.', answer: true, explanation: 'But not all antigens are immunogens.' }),
  mcq('s8-1-4', 'antigen-terms', 'Which is an example of a hapten?', 'An antibiotic drug', ['A large bacterial protein', 'A whole virus', 'A red blood cell'], {
    explanation: 'Haptens: antibiotics, drugs.',
  }),
  mcq('s8-1-5', 'antigen-terms', 'What does an antigen do, as distinct from an immunogen?', 'Binds specifically to antibody or TCR', ['Induces an immune response all by itself', 'Makes the body tolerant', 'Destroys lymphocytes'], {
    explanation: 'An antigen binds the products of a response.',
  }),

  // ─── Lesson 8 · S2 What makes a good immunogen ─────────────────────
  mcq('s8-2-1', 'immunogenicity-factors', 'Above what molecular weight are molecules immunogenic?', 'Above 6000 Da', ['Above 600 Da', 'Above 60 Da', 'Above 60,000 kDa'], {
    explanation: '<1000 not; 1000–6000 may be; >6000 immunogenic.',
  }),
  mcq('s8-2-2', 'immunogenicity-factors', 'Which kind of molecule makes the best immunogen?', 'Protein', ['Lipid', 'Nucleic acid', 'Simple sugar'], {
    explanation: 'Proteins are best; lipids and nucleic acids poor.',
  }),
  tf({ id: 's8-2-3', conceptId: 'immunogenicity-factors', statement: 'Denatured antigens are more immunogenic than native ones.', answer: true, explanation: 'AG22 slides 17–19.' }),
  mcq('s8-2-4', 'immunogenicity-factors', 'Which route is least immunogenic?', 'Intragastric', ['Subcutaneous, under the skin', 'Intravenous', 'Intradermal'], {
    explanation: 'Subcutaneous > intravenous > intragastric.',
  }),
  mcq('s8-2-5', 'immunogenicity-factors', 'Why must an immunogen be degradable?', 'APCs must be able to process it', ['The liver must store it', 'The kidney must excrete it quickly', 'The gut must absorb it'], {
    explanation: 'Processing by APCs is needed.',
  }),

  // ─── Lesson 8 · S3 Epitopes ────────────────────────────────────────
  mcq('s8-3-1', 'epitopes', 'What is antigenic valence?', 'The number of epitopes on an antigen', ['The size of the antigen molecule in daltons', 'The charge on the antigen', 'The speed of binding'], {
    explanation: 'Most natural antigens are polyvalent; haptens monovalent.',
  }),
  mcq('s8-3-2', 'epitopes', 'How long is a typical B-cell epitope?', '5–15 amino acids', ['8–23 amino acids, as for T cells', '100–200 amino acids', '1–2 amino acids'], {
    explanation: 'B-cell 5–15; T-cell 8–23.',
  }),
  tf({ id: 's8-3-3', conceptId: 'epitopes', statement: 'B-cell epitopes do not need MHC.', answer: true, explanation: 'T-cell epitopes need MHC; B-cell epitopes do not.' }),
  mcq('s8-3-4', 'epitopes', 'Which kind of epitope can be a polysaccharide?', 'B-cell epitope', ['T-cell epitope on MHC', 'Neither kind', 'Only hapten epitopes'], {
    explanation: 'B-cell epitopes: protein or polysaccharide.',
  }),
  mcq('s8-3-5', 'epitopes', 'What is another name for an epitope?', 'Antigenic determinant', ['Paratope of the antibody', 'Hapten carrier', 'Idiotype'], {
    explanation: 'Epitope = antigenic determinant.',
  }),

  // ─── Lesson 8 · S4 Classes of antigen ──────────────────────────────
  mcq('s8-4-1', 'antigen-classes', 'On which MHC class are endogenous antigens shown?', 'MHC class I', ['MHC class II, to helper T cells', 'CD1 molecules', 'No MHC at all'], {
    explanation: 'Endogenous → MHC I → CD8⁺ T cells.',
  }),
  mcq('s8-4-2', 'antigen-classes', 'Which is a tumour-associated antigen?', 'CEA', ['ABO antigen', 'HLA', 'Rh'], {
    explanation: 'AFP and CEA are tumour-associated.',
  }),
  tf({ id: 's8-4-3', conceptId: 'antigen-classes', statement: 'T-independent antigens give memory.', answer: false, explanation: 'TI antigens give IgM only and no memory.' }),
  mcq('s8-4-4', 'antigen-classes', 'What are xenoantigens?', 'Antigens from other species', ['Antigens from other people of the same species', 'Antigens from oneself', 'Antigens from tumours only'], {
    explanation: 'Xeno: other species; allo: same species; auto: self.',
  }),
  mcq('s8-4-5', 'antigen-classes', 'Which antibody class do T-independent antigens give?', 'IgM only', ['IgG, IgM and IgA', 'IgE only', 'IgD only'], {
    explanation: 'TI antigens: IgM only.',
  }),

  // ─── Lesson 8 · S5 Adjuvants and mitogens ──────────────────────────
  mcq('s8-5-1', 'adjuvants-mitogens', 'Which is the most widely used adjuvant?', 'Alum (aluminium hydroxide)', ['Complete Freund’s adjuvant with mycobacteria', 'BCG', 'Poly I:C'], {
    explanation: 'Alum is the most widely used.',
  }),
  mcq('s8-5-2', 'adjuvants-mitogens', 'Which mitogen stimulates both T and B cells?', 'Pokeweed mitogen', ['Concanavalin A, the T-cell mitogen', 'Phytohaemagglutinin', 'LPS'], {
    explanation: 'Pokeweed stimulates T and B cells.',
  }),
  tf({ id: 's8-5-3', conceptId: 'adjuvants-mitogens', statement: 'An adjuvant can release antigen slowly.', answer: true, explanation: 'AG slides 43–47.' }),
  mcq('s8-5-4', 'adjuvants-mitogens', 'Which are the most potent T-cell mitogens?', 'Superantigens', ['Concanavalin A and phytohaemagglutinin', 'Pokeweed mitogen', 'Alum'], {
    explanation: 'Superantigens, causing toxic shock.',
  }),
  mcq('s8-5-5', 'adjuvants-mitogens', 'What is incomplete Freund’s adjuvant?', 'Antigen in mineral oil', ['Antigen in mineral oil with killed mycobacteria', 'Aluminium hydroxide gel', 'Live BCG bacteria'], {
    explanation: 'Complete adds killed mycobacteria.',
  }),

  // ─── Lesson 9 · S1 What complement is ──────────────────────────────
  mcq('s9-1-1', 'complement-intro', 'How many complement proteins are there?', 'Over 30', ['About 9', 'About 3', 'About 300'], {
    explanation: 'Over 30 circulating and membrane proteins.',
  }),
  mcq('s9-1-2', 'complement-intro', 'What was complement formerly called?', 'Alexine', ['Antitoxin', 'Precipitin', 'Agglutinin'], {
    explanation: 'Complement was formerly “alexine”.',
  }),
  tf({ id: 's9-1-3', conceptId: 'complement-intro', statement: 'Complement proteins are present in an inactive form.', answer: true, explanation: 'CM slide 3.' }),
  mcq('s9-1-4', 'complement-intro', 'Which fragment usually stays bound and carries the enzyme activity?', 'The large “b” fragment', ['The small “a” fragment that is released', 'Both fragments equally', 'Neither fragment'], {
    explanation: 'C2 is the exception.',
  }),
  mcq('s9-1-5', 'complement-intro', 'About how much of serum protein is complement?', 'About 5%', ['About 50%', 'About 0.05%', 'About 95%'], {
    explanation: 'About 3 g/L, ~5% of serum protein.',
  }),

  // ─── Lesson 9 · S2 Three pathways ──────────────────────────────────
  mcq('s9-2-1', 'complement-pathways', 'How long does C3bBb last without properdin?', 'About 5 minutes', ['About 30 minutes with stabilisation', 'About 5 hours', 'About 5 seconds'], {
    explanation: '~5 minutes; properdin extends it to ~30.',
  }),
  mcq('s9-2-2', 'complement-pathways', 'Which pathway bypasses C1, C4 and C2?', 'The alternative pathway', ['The classical pathway with antibody', 'The lectin pathway', 'None of them'], {
    explanation: 'The alternative pathway starts at C3.',
  }),
  tf({ id: 's9-2-3', conceptId: 'complement-pathways', statement: 'Mannose-binding lectin is an acute-phase protein from the liver.', answer: true, explanation: 'AB slides 54–55.' }),
  mcq('s9-2-4', 'complement-pathways', 'What is the C3 convertase of the classical pathway?', 'C4b2', ['C3bBb stabilised by properdin', 'C5b6789', 'C1qrs'], {
    explanation: 'Classical and lectin: C4b2; alternative: C3bBb.',
  }),
  mcq('s9-2-5', 'complement-pathways', 'How many C3b molecules can amplification make in 5 minutes?', '2 × 10⁶', ['2 × 10²', '2 × 10¹²', '20'], {
    explanation: '2 × 10⁶ C3b in 5 minutes.',
  }),

  // ─── Lesson 9 · S3 The membrane attack complex ─────────────────────
  mcq('s9-3-1', 'complement-effects', 'Which component forms the pore of the membrane attack complex?', 'C9', ['C3b, the main opsonin', 'C5a', 'C1q'], {
    explanation: 'C8 and several C9s form the pore.',
  }),
  mcq('s9-3-2', 'complement-effects', 'By how much does C3b opsonisation increase phagocytosis?', 'About 1000-fold', ['About 10-fold only', 'About 2-fold', 'About a million-fold'], {
    explanation: 'CM slide 14.',
  }),
  tf({ id: 's9-3-3', conceptId: 'complement-effects', statement: 'C3a, C4a and C5a are anaphylatoxins.', answer: true, explanation: 'They degranulate mast cells.' }),
  mcq('s9-3-4', 'complement-effects', 'Where are immune complexes bound by C3b removed?', 'In the liver and spleen', ['In the kidneys and bladder', 'In the lungs', 'In the bone marrow'], {
    explanation: 'C3b binds complexes to red cells for removal by liver and spleen.',
  }),
  mcq('s9-3-5', 'complement-effects', 'What can massive complement activation in Gram-negative sepsis do?', 'Lyse host cells', ['Cure the infection at once', 'Make more antibody', 'Stop the inflammation'], {
    explanation: 'CM slide 44.',
  }),

  // ─── Lesson 9 · S4 Regulation and its diseases ─────────────────────
  mcq('s9-4-1', 'complement-regulation', 'Which protein blocks C9 polymerisation?', 'CD59 (protectin)', ['DAF (CD55), which speeds decay', 'Factor H', 'C1 inhibitor'], {
    explanation: 'CD59 blocks C9 polymerisation.',
  }),
  mcq('s9-4-2', 'complement-regulation', 'Which disease is caused by factor H deficiency?', 'MPGN type II', ['Hereditary angio-oedema of the skin', 'Paroxysmal nocturnal haemoglobinuria', 'Lupus'], {
    explanation: 'Factor H → MPGN type II.',
  }),
  tf({ id: 's9-4-3', conceptId: 'complement-regulation', statement: 'Hereditary angio-oedema is autosomal dominant.', answer: true, explanation: 'C1 inhibitor deficiency, autosomal dominant.' }),
  mcq('s9-4-4', 'complement-regulation', 'Which receptor is on B cells and follicular dendritic cells?', 'CR2', ['CR3, found on phagocytes', 'CR4', 'CR1 only'], {
    explanation: 'CR2: B cells and follicular DCs.',
  }),
  mcq('s9-4-5', 'complement-regulation', 'How is paroxysmal nocturnal haemoglobinuria diagnosed?', 'By CD59 flow cytometry', ['By measuring C1 inhibitor level', 'By a kidney biopsy', 'By a chest X-ray'], {
    explanation: 'CD59 flow cytometry.',
  }),

  // ─── Lesson 9 · S5 Testing ─────────────────────────────────────────
  mcq('s9-5-1', 'complement-testing', 'Which red cells are used in the CH50 test?', 'Antibody-coated sheep red cells', ['Fresh human red cells from the patient', 'Rabbit white cells', 'Chicken platelets'], {
    explanation: 'CH50: dilution lysing 50% of antibody-coated sheep red cells.',
  }),
  mcq('s9-5-2', 'complement-testing', 'How are C3 and C4 measured?', 'By nephelometry', ['By a CH50 lysis test of sheep red cells', 'By microscopy', 'By PCR'], {
    explanation: 'C3 and C4 by nephelometry.',
  }),
  tf({ id: 's9-5-3', conceptId: 'complement-testing', statement: 'A high complement level suggests an acute-phase response.', answer: true, explanation: 'Low suggests consumption.' }),
  mcq('s9-5-4', 'complement-testing', 'What are Raji cells?', 'Burkitt’s lymphoma cells with complement receptors', ['Sheep red cells coated with antibody for the CH50 test', 'Mouse myeloma cells', 'Human neutrophils'], {
    explanation: 'Raji cells detect immune complexes.',
  }),
  mcq('s9-5-5', 'complement-testing', 'Which component is used only by the classical pathway?', 'C4', ['C3, shared by both pathways', 'Factor B', 'Properdin'], {
    explanation: 'C3 is common; C4 is classical only.',
  }),

  // ─── Lesson 10 · S1 General principles ─────────────────────────────
  mcq('s10-1-1', 'infection-principles', 'Which is a DIRECT way a pathogen damages tissue?', 'Exotoxins', ['Immune complexes deposited in tissue', 'Anti-host antibody', 'Cell-mediated injury'], {
    explanation: 'Direct: cytopathic effect, exotoxins, endotoxin.',
  }),
  mcq('s10-1-2', 'infection-principles', 'Which agents are pathogens besides microbes?', 'Prions and viroids', ['Vitamins and minerals', 'Hormones and enzymes', 'Antibodies'], {
    explanation: 'Plus prions and viroids.',
  }),
  tf({ id: 's10-1-3', conceptId: 'infection-principles', statement: 'Some infections persist latently.', answer: true, explanation: 'IF slide 7.' }),
  mcq('s10-1-4', 'infection-principles', 'Through which surfaces do pathogens enter?', 'Skin and mucosa', ['Hair and the nails', 'Bone and teeth', 'Muscle'], {
    explanation: 'Skin (wounds, bites) or mucosa.',
  }),
  mcq('s10-1-5', 'infection-principles', 'What predisposes a person to infection?', 'Immune defects', ['A strong immune system', 'Vaccination', 'Good nutrition'], {
    explanation: 'Immune defects predispose to infection.',
  }),

  // ─── Lesson 10 · S2 Viruses ────────────────────────────────────────
  mcq('s10-2-1', 'antiviral-immunity', 'Which antibody neutralises viruses at mucosae?', 'Secretory IgA', ['IgE on mast cells of the tissue', 'IgD', 'IgM'], {
    explanation: 'Secretory IgA neutralises at mucosae.',
  }),
  mcq('s10-2-2', 'antiviral-immunity', 'Which virus evades by antigenic variation?', 'HIV', ['Polio', 'Measles', 'Rubella'], {
    explanation: 'Antigenic variation: HIV.',
  }),
  tf({ id: 's10-2-3', conceptId: 'antiviral-immunity', statement: 'NK cells kill virus-infected cells without MHC restriction.', answer: true, explanation: 'Early, before antibody.' }),
  mcq('s10-2-4', 'antiviral-immunity', 'Which disease shows molecular mimicry after a virus?', 'Coxsackie B cardiomyopathy', ['Dengue haemorrhagic fever', 'Chronic hepatitis B infection', 'Influenza'], {
    explanation: 'IF0 slides 20–21.',
  }),
  mcq('s10-2-5', 'antiviral-immunity', 'What is a minor antigenic change of influenza called?', 'Drift', ['Shift, a major change', 'Mimicry', 'Switching'], {
    explanation: 'Drift (minor) and shift (major).',
  }),

  // ─── Lesson 10 · S3 Bacteria ───────────────────────────────────────
  mcq('s10-3-1', 'antibacterial-immunity', 'Which bacterium makes IgA proteases?', 'Haemophilus influenzae', ['Mycobacterium tuberculosis in macrophages', 'Listeria', 'Legionella'], {
    explanation: 'IgA proteases: Haemophilus influenzae.',
  }),
  mcq('s10-3-2', 'antibacterial-immunity', 'How do intracellular bacteria escape antibody?', 'By hiding inside phagocytes', ['By making more antibody', 'By staying in the blood', 'By binding to the red blood cells'], {
    explanation: 'Safe inside phagocytes.',
  }),
  tf({ id: 's10-3-3', conceptId: 'antibacterial-immunity', statement: 'Eliminating intracellular bacteria needs cell-mediated immunity.', answer: true, explanation: 'IF slide 16.' }),
  mcq('s10-3-4', 'antibacterial-immunity', 'How does M. leprae evade killing?', 'By inactivating ROS and NO', ['By escaping into the cytosol like Listeria', 'By blocking phagolysosome fusion', 'By varying its pili'], {
    explanation: 'IF slide 18.',
  }),
  mcq('s10-3-5', 'antibacterial-immunity', 'Which cytokines make NK cells release IFN-γ early?', 'IL-12 and IL-15', ['IL-4 and IL-5 from Th2 cells', 'IL-10 and TGF-β', 'IL-2 and IL-7'], {
    explanation: 'NK cells via IL-12/IL-15.',
  }),

  // ─── Lesson 10 · S4 Fungi, protozoa and helminths ──────────────────
  mcq('s10-4-1', 'fungi-parasites', 'Which immune response clears helminths?', 'Th2 → IgE, eosinophils, mast cells', ['Th1 → IFN-γ and activated macrophages', 'Neutrophils alone', 'Complement alone'], {
    explanation: 'Helminths: Th2, IgE, eosinophils, mast cells.',
  }),
  mcq('s10-4-2', 'fungi-parasites', 'How does Trypanosoma evade immunity?', 'Coat switching', ['Shedding, as Plasmodium does', 'A thick capsule', 'Resisting digestion'], {
    explanation: 'Trypanosoma switches its coat.',
  }),
  tf({ id: 's10-4-3', conceptId: 'fungi-parasites', statement: 'Antibody is the main defence against extracellular protozoa such as Giardia.', answer: true, explanation: 'Entamoeba and Giardia: antibody.' }),
  mcq('s10-4-4', 'fungi-parasites', 'What is the Shwartzman reaction?', 'Local necrosis after repeated endotoxin', ['Exaggerated hypersensitivity to TB', 'Endotoxin shock with DIC and hypotension', 'Toxic shock from superantigens'], {
    explanation: 'IF slide 22.',
  }),
  mcq('s10-4-5', 'fungi-parasites', 'Which cells are critical against Schistosoma?', 'CD4⁺ T cells', ['CD8⁺ cytotoxic T cells', 'NK cells', 'Red cells'], {
    explanation: 'CD4⁺ T cells are critical against Schistosoma.',
  }),
];
