// Biochemistry → Collagen and Elastin: five more questions for every reading section
// (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/collagen-synthesis/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 Proteins and structural proteins ────────────────
  mcq('s1-1-1', 'protein-functions', 'How many broad jobs of proteins does slide 2 list?', 'Five', ['Three', 'Four', 'Seven'], {
    explanation: 'Structure, transport, regulation, catalysis and locomotion.',
  }),
  mcq('s1-1-2', 'protein-functions', 'Haemoglobin is the lecture’s example of which protein function?', 'Transport', ['Catalysis', 'Locomotion', 'Structural support'], {
    explanation: 'Albumin, caeruloplasmin and haemoglobin are transport proteins.',
  }),
  tf({ id: 's1-1-3', conceptId: 'protein-functions', statement: 'Actin and myosin are listed under structure in the lecture’s table.', answer: false, explanation: 'They are the lecture’s examples of locomotion.' }),
  mcq('s1-1-4', 'structural-proteins', 'In other animals, which structures does keratin also form?', 'Fur, hooves, claws and scales', ['Bones, teeth and cartilage', 'Tendons, ligaments and joint capsules', 'Feathers made of collagen'], {
    explanation: 'Keratin forms fur, hooves, claws and scales in other animals.',
  }),
  mcq('s1-1-5', 'protein-functions', 'Which example belongs to “structure” in the lecture’s table?', 'Extracellular matrix proteins', ['Protein hormones such as insulin', 'Actin and myosin filaments', 'Caeruloplasmin in the plasma'], {
    explanation: 'Structure: hair, fingernails, cell walls and extracellular matrix proteins.',
  }),

  // ─── Lesson 1 · S2 Cellular and extracellular structural proteins ─
  mcq('s1-2-1', 'structural-proteins', 'Which is a CELLULAR structural protein group?', 'The cytoskeleton', ['Collagen fibrils', 'Elastin', 'Fibronectin'], {
    explanation: 'Cellular: cytoskeleton, cell wall proteins, transmembrane proteins.',
  }),
  mcq('s1-2-2', 'structural-proteins', 'Integrins are an example of which kind of structural protein?', 'Transmembrane (cellular) proteins', ['Extracellular fibre proteins', 'Cytoskeletal filament proteins (actin)', 'Cell wall polysaccharides'], {
    explanation: 'Integrins are the lecture’s transmembrane example.',
  }),
  tf({ id: 's1-2-3', conceptId: 'structural-proteins', statement: 'Elastin is an extracellular structural protein.', answer: true, explanation: 'Slide 4: collagen and elastin are extracellular.' }),
  mcq('s1-2-4', 'structural-proteins', 'Into how many groups does slide 4 divide structural proteins?', 'Two', ['Three', 'Four', 'Seven'], {
    explanation: 'Cellular and extracellular.',
  }),
  fill('s1-2-5', 'structural-proteins', 'Collagen and elastin are ____ structural proteins.', ['extracellular'], {
    explanation: 'They sit outside the cells, in the matrix.',
  }),

  // ─── Lesson 1 · S3 Cells and the extracellular matrix ──────────────
  mcq('s1-3-1', 'matrix-adhesion', 'Which cells are named in the connective tissue under an epithelium?', 'Fibroblasts, macrophages and mast cells', ['Neurons, glia and Schwann cells', 'Hepatocytes, Kupffer cells and stellate cells', 'Red cells, platelets and lymphocytes'], {
    explanation: 'Slide 5 names fibroblasts, macrophages and mast cells.',
  }),
  mcq('s1-3-2', 'matrix-adhesion', 'Which subunits of an integrin span the plasma membrane?', 'α and β', ['γ and δ', 'A and B', 'Heavy and light'], {
    explanation: 'An integrin’s α and β subunits span the membrane.',
  }),
  tf({ id: 's1-3-3', conceptId: 'matrix-adhesion', statement: 'Fibronectin has a domain that binds to fibronectin itself.', answer: true, explanation: 'It has domains for collagen, heparin, cells and itself.' }),
  mcq('s1-3-4', 'matrix-adhesion', 'Which linker proteins connect integrins to actin inside the cell?', 'α-Actinin, talin or filamin and vinculin', ['Fibronectin, collagen and heparin', 'Keratin, desmin, vimentin and the other intermediate filaments', 'Albumin, ferritin and transferrin'], {
    explanation: 'Slide 8: via α-actinin, talin or filamin and vinculin.',
  }),
  mcq('s1-3-5', 'matrix-adhesion', 'Which three components make up the ground substance?', 'Hyaluronan, proteoglycans and glycoproteins', ['Collagen, elastin and keratin fibres', 'Fibroblasts, mast cells and macrophages', 'Integrins, talin and vinculin membrane proteins'], {
    explanation: 'Slide 5: hyaluronan, proteoglycans and glycoproteins.',
  }),

  // ─── Lesson 1 · S4 Cells of connective tissue ──────────────────────
  mcq('s1-4-1', 'connective-tissue-cells', 'Which specialised fibroblast-type cell makes cartilage?', 'Chondrocyte', ['Osteocyte', 'Adipocyte', 'Mast cell (granular)'], {
    explanation: 'Chondrocytes (cartilage) and osteocytes (bone).',
  }),
  mcq('s1-4-2', 'connective-tissue-cells', 'Which cells replace connective tissue cells after injury?', 'Mesenchymal (stem) cells', ['Mature bone osteocytes', 'Red blood cells', 'Mast cells only'], {
    explanation: 'Mesenchymal cells differentiate to replace them.',
  }),
  tf({ id: 's1-4-3', conceptId: 'connective-tissue-cells', statement: 'Scleroderma is one of the fibrotic skin diseases in which myofibroblasts make collagen.', answer: true, explanation: 'Keloids, scleroderma and hypertrophic scars.' }),
  mcq('s1-4-4', 'connective-tissue-cells', 'Which cell type in bone is a specialised fibroblast?', 'Osteocyte', ['Chondrocyte', 'Myofibroblast', 'Macrophage'], {
    explanation: 'Osteocytes are the specialised fibroblast-type cells of bone.',
  }),
  fill('s1-4-5', 'connective-tissue-cells', 'Ground substance is made of hyaluronan plus protein, called ____.', ['GAGs', 'glycosaminoglycans'], {
    explanation: 'Fibroblasts secrete ground substance (hyaluronan + protein = GAGs).',
  }),

  // ─── Lesson 1 · S5 The four phases of wound healing ────────────────
  mcq('s1-5-1', 'wound-healing', 'In which phase does angiogenesis happen?', 'Proliferation', ['Haemostasis', 'Inflammation (early)', 'Remodelling'], {
    explanation: 'Proliferation: fibroblasts, collagen, angiogenesis, granulation tissue.',
  }),
  mcq('s1-5-2', 'wound-healing', 'How long does the remodelling phase last?', 'A week to months', ['Seconds to hours', 'Hours to days', 'Days to a week'], {
    explanation: 'Remodelling runs from a week to months.',
  }),
  tf({ id: 's1-5-3', conceptId: 'wound-healing', statement: 'The phases of wound healing overlap.', answer: true, explanation: 'Slide 11: the phases overlap, with growth factors throughout.' }),
  mcq('s1-5-4', 'wound-healing', 'Which cells follow the neutrophils in the inflammatory phase?', 'Macrophages', ['Platelets', 'Red cells', 'Chondrocytes'], {
    explanation: 'Neutrophils early, then macrophages (and lymphocytes).',
  }),
  mcq('s1-5-5', 'wound-healing', 'In which phase are collagen fibrils cross-linked as the scar matures?', 'Remodelling', ['Proliferation', 'Inflammation', 'Haemostasis'], {
    explanation: 'Remodelling: cross-linking and scar maturation.',
  }),

  // ─── Lesson 1 · S6 Types of scars ──────────────────────────────────
  mcq('s1-6-1', 'scar-types', 'How many types of scar does slide 12 list?', 'Four', ['Two', 'Three', 'Seven'], {
    explanation: 'Normal, atrophic, hypertrophic scars and keloids.',
  }),
  mcq('s1-6-2', 'scar-types', 'Which cells make the excess collagen of keloids?', 'Myofibroblasts', ['Mast cells', 'Osteocytes', 'Neutrophils (pus cells)'], {
    explanation: 'Slide 18: myofibroblasts make the excess collagen.',
  }),
  tf({ id: 's1-6-3', conceptId: 'scar-types', statement: 'Atrophic scars are one of the four scar types on slide 12.', answer: true, explanation: 'Normal, atrophic, hypertrophic and keloid.' }),
  mcq('s1-6-4', 'scar-types', 'Which scar type is NOT on slide 12?', 'Calcified scars', ['Keloids', 'Atrophic scars', 'Hypertrophic scars'], {
    explanation: 'Calcified scars are not listed.',
  }),
  mcq('s1-6-5', 'scar-types', 'Which two scar types share excess collagen from myofibroblasts?', 'Keloids and hypertrophic scars', ['Normal and atrophic scars', 'Atrophic scars and keloids', 'Normal and hypertrophic scars only'], {
    explanation: 'Myofibroblasts make the excess collagen of both.',
  }),

  // ─── Lesson 2 · S1 Collagen ────────────────────────────────────────
  mcq('s2-1-1', 'collagen-overview', 'Which property makes collagen fibres suited to tendons?', 'High tensile strength', ['High solubility in water', 'Rapid elastic recoil', 'Strong catalytic activity'], {
    explanation: 'Collagen forms insoluble fibres of high tensile strength.',
  }),
  mcq('s2-1-2', 'collagen-overview', 'In which animal’s skin does the lecture show collagen layers at angles?', 'The tadpole', ['The frog', 'The shark embryo', 'The cod'], {
    explanation: 'Tadpole skin shows layered fibrils at angles.',
  }),
  tf({ id: 's2-1-3', conceptId: 'collagen-overview', statement: 'Collagen is the major fibrous element of teeth.', answer: true, explanation: 'Skin, bone, tendon, cartilage, blood vessels and teeth.' }),
  mcq('s2-1-4', 'collagen-overview', 'What kind of protein is collagen?', 'Fibrous', ['Globular', 'Membrane-bound', 'Soluble'], {
    explanation: 'Collagen is a family of fibrous proteins.',
  }),
  mcq('s2-1-5', 'collagen-overview', 'Which role does collagen play in developing tissue?', 'A directive role', ['A storage role', 'A catalytic role', 'A transport role'], {
    explanation: 'Directive in developing tissue; structural in mature tissue.',
  }),

  // ─── Lesson 2 · S2 Types of collagen ───────────────────────────────
  mcq('s2-2-1', 'collagen-types', 'Which collagen type forms fibrils together with type II?', 'Type XI', ['Type V', 'Type IV', 'Type I'], {
    explanation: 'Type XI forms fibrils with type II, type V with type I.',
  }),
  mcq('s2-2-2', 'collagen-types', 'Which collagen surrounds blood vessels in the basal lamina?', 'Type XVIII', ['Type IV', 'Type VII', 'Type XVII (hemidesmosomes)'], {
    explanation: 'Type XVIII is in the basal lamina around blood vessels.',
  }),
  tf({ id: 's2-2-3', conceptId: 'collagen-types', statement: 'Type IX collagen associates laterally with type II fibrils in cartilage.', answer: true, explanation: 'Type IX is fibril-associated, with type II.' }),
  mcq('s2-2-4', 'collagen-types', 'About how many types of collagen have been identified, according to the slide?', 'About 20', ['About 5', 'About 50', 'About 100'], {
    explanation: 'About 20 types of collagen and about 25 types of α chain.',
  }),
  mcq('s2-2-5', 'collagen-types', 'Which collagen type is made of only one kind of α chain?', 'Type III', ['Type I', 'Type IV (basal lamina)', 'Type V'], {
    explanation: 'Types II, III, VII, XII, XVII and XVIII have one kind of chain.',
  }),

  // ─── Lesson 2 · S3 Tropocollagen ───────────────────────────────────
  mcq('s2-3-1', 'tropocollagen', 'How long is a tropocollagen molecule?', '3000 Å', ['300 Å', '15 Å', '30,000 Å'], {
    explanation: 'Tropocollagen is 3000 Å long and 15 Å across.',
  }),
  mcq('s2-3-2', 'tropocollagen', 'What is the rise per residue in each tropocollagen strand?', '3.12 Å', ['1.50 nm', '5.4 Å', '15 Å'], {
    explanation: 'Three residues per turn, 3.12 Å per residue.',
  }),
  tf({ id: 's2-3-3', conceptId: 'tropocollagen', statement: 'Tropocollagen is one of the longest known proteins.', answer: true, explanation: 'At 3000 Å, it is one of the longest known.' }),
  mcq('s2-3-4', 'tropocollagen', 'Which synthetic polymer forms the same kind of helix as a tropocollagen strand?', 'Poly-L-proline', ['Poly-L-glycine', 'Poly-L-lysine', 'Poly-D-alanine'], {
    explanation: 'Each strand is a type II trans helix, like poly-L-proline.',
  }),
  fill('s2-3-5', 'tropocollagen', 'Tropocollagen is the structural ____ of collagen.', ['unit'], {
    explanation: 'Tropocollagen is collagen’s structural unit.',
  }),

  // ─── Lesson 2 · S4 An unusual amino acid composition ───────────────
  mcq('s2-4-1', 'collagen-composition', 'About how much of haemoglobin is glycine, compared with collagen’s 33%?', 'About 5%', ['About 33%', 'About 50%', 'About 0.5%'], {
    explanation: 'Haemoglobin has about 5% glycine.',
  }),
  mcq('s2-4-2', 'collagen-composition', 'How often does glycine appear in the collagen chain?', 'Nearly every third residue', ['Nearly every second residue', 'Once in every ten residues', 'Only at the two chain ends'], {
    explanation: 'Nearly every third residue is glycine.',
  }),
  tf({ id: 's2-4-3', conceptId: 'collagen-composition', statement: 'Hydroxylysine is found in few proteins other than collagen.', answer: true, explanation: 'Hydroxyproline and hydroxylysine are found in few other proteins.' }),
  mcq('s2-4-4', 'collagen-composition', 'Which kind of protein rarely has regularly repeating sequences?', 'Globular proteins', ['Silk fibroin of insects', 'Elastin', 'Collagen'], {
    explanation: 'Fibrous proteins repeat; globular proteins rarely do.',
  }),
  fill('s2-4-5', 'collagen-composition', 'Glycine makes up nearly ____% of all collagen residues.', ['33', '33.3', 'thirty-three'], {
    explanation: 'Nearly every third residue: about 33.3%.',
  }),

  // ─── Lesson 3 · S1 Overview of collagen synthesis ──────────────────
  mcq('s3-1-1', 'synthesis-overview', 'Where are the collagen polypeptides made?', 'On ribosomes on the ER', ['On free ribosomes in the nucleus', 'In the extracellular space', 'In the Golgi lumen only'], {
    explanation: 'Step 1: polypeptide synthesis on ribosomes on the ER.',
  }),
  mcq('s3-1-2', 'synthesis-overview', 'In what form is collagen secreted?', 'As procollagen', ['As tropocollagen', 'As mature fibres', 'As free α chains'], {
    explanation: 'Step 4: secretion as procollagen.',
  }),
  tf({ id: 's3-1-3', conceptId: 'synthesis-overview', statement: 'The triple helix forms before collagen is secreted.', answer: true, explanation: 'Step 3 (helix) comes before step 4 (secretion).' }),
  mcq('s3-1-4', 'synthesis-overview', 'Which step comes directly after triple-helix formation?', 'Secretion', ['Hydroxylation', 'Cross-linking', 'Glycosylation'], {
    explanation: 'Helix formation (3) → secretion (4).',
  }),
  mcq('s3-1-5', 'synthesis-overview', 'How many steps does slide 33’s figure show?', 'Seven', ['Four', 'Five', 'Three'], {
    explanation: 'From polypeptide synthesis to cross-links: seven steps.',
  }),

  // ─── Lesson 3 · S2 Hydroxyproline and hydroxylysine ────────────────
  mcq('s3-2-1', 'hydroxylated-residues', 'When are proline and lysine hydroxylated?', 'After they are built into the chain', ['Before they are built into the chain', 'After the fibre is cross-linked', 'Only when collagen is degraded'], {
    explanation: 'They are built into the nascent chain first, then hydroxylated.',
  }),
  mcq('s3-2-2', 'hydroxylated-residues', 'A cell is given free hydroxyproline. What happens to it?', 'It is not built into collagen', ['It is built into collagen at once', 'It replaces glycine in the chain', 'It becomes hydroxylysine'], {
    explanation: 'Free hydroxyproline is not incorporated into the chain.',
  }),
  tf({ id: 's3-2-3', conceptId: 'hydroxylated-residues', statement: 'Special enzymes hydroxylate proline and lysine residues in collagen.', answer: true, explanation: 'Slide 36: hydroxylated afterwards by special enzymes.' }),
  tf({ id: 's3-2-4', conceptId: 'hydroxylated-residues', statement: 'Hydroxylysine is made from lysine residues already in the collagen chain.', answer: true, explanation: 'Like proline, lysine is built in first and hydroxylated afterwards.' }),
  fill('s3-2-5', 'hydroxylated-residues', 'Hydroxylation of proline happens in the ____ collagen chain.', ['nascent', 'growing', 'new'], {
    explanation: 'Only prolyl residues in nascent chains are hydroxylated.',
  }),

  // ─── Lesson 3 · S3 Prolyl hydroxylase ──────────────────────────────
  mcq('s3-3-1', 'prolyl-hydroxylase', 'What is released when α-ketoglutarate becomes succinate in this reaction?', 'CO₂', ['NH₃', 'H₂O₂', 'ATP'], {
    explanation: 'α-Ketoglutarate → succinate + CO₂.',
  }),
  mcq('s3-3-2', 'prolyl-hydroxylase', 'Where does the SECOND oxygen atom of O₂ end up?', 'In succinate', ['On proline', 'In water', 'In ascorbate'], {
    explanation: 'One O goes onto proline; the other into succinate.',
  }),
  tf({ id: 's3-3-3', conceptId: 'prolyl-hydroxylase', statement: 'Guinea pigs cannot make their own ascorbic acid.', answer: true, explanation: 'Primates and guinea pigs cannot synthesise it.' }),
  mcq('s3-3-4', 'prolyl-hydroxylase', 'Which position of proline does prolyl-4-hydroxylase hydroxylate?', 'C-4', ['C-3', 'C-5', 'C-2'], {
    explanation: 'It converts prolyl residues to 4-hydroxyproline.',
  }),
  mcq('s3-3-5', 'prolyl-hydroxylase', 'Which three molecules does prolyl hydroxylase need besides proline?', 'O₂, α-ketoglutarate and ascorbate', ['NADPH, ATP and biotin', 'NAD⁺, coenzyme A and flavin adenine dinucleotide', 'GTP, Mg²⁺ and thiamine'], {
    explanation: 'Molecular oxygen, α-ketoglutarate and ascorbate.',
  }),

  // ─── Lesson 3 · S4 Where hydroxylation happens ─────────────────────
  mcq('s3-4-1', 'hydroxylation-rules', 'Which enzyme hydroxylates lysine residues in collagen?', 'Lysyl hydroxylase', ['Lysyl oxidase', 'Prolyl-4-hydroxylase', 'Prolyl-3-hydroxylase'], {
    explanation: 'Lysyl hydroxylase hydroxylates a few lysines at C-5.',
  }),
  mcq('s3-4-2', 'hydroxylation-rules', 'Below what temperature does unhydroxylated collagen become helical?', '24 °C', ['37 °C', '45 °C', '10 °C'], {
    explanation: 'It forms no helix at 37 °C but becomes helical below 24 °C.',
  }),
  tf({ id: 's3-4-3', conceptId: 'hydroxylation-rules', statement: 'The hydroxylated lysines of collagen all lie on the amino side of glycine.', answer: true, explanation: 'Like the C-4 prolines, they lie on the amino side of glycine.' }),
  mcq('s3-4-4', 'hydroxylation-rules', 'What does α,α′-bipyridyl remove from prolyl hydroxylase?', 'Its iron', ['Its oxygen', 'Its ascorbate', 'Its substrate'], {
    explanation: 'Bipyridyl chelates the iron, inhibiting the enzyme.',
  }),
  mcq('s3-4-5', 'hydroxylation-rules', 'Why does unhydroxylated collagen fail to form a helix at 37 °C?', 'Hydroxyproline is needed for a stable helix', ['Glycine is lost from every third position', 'The chains are too short to wind up', 'Ascorbate blocks the three chains from pairing up'], {
    explanation: 'Without hydroxylation the helix is unstable at body temperature.',
  }),

  // ─── Lesson 3 · S5 Melting and the stability of the helix ──────────
  mcq('s3-5-1', 'helix-stability', 'What happens to the triple helix when tropocollagen is heated?', 'It collapses abruptly into gelatin', ['It slowly winds more tightly around itself', 'It forms extra cross-links', 'It turns into elastin'], {
    explanation: 'Heating melts it into gelatin, a random coil.',
  }),
  mcq('s3-5-2', 'helix-stability', 'What is the comparable stability index for intact fibres?', 'The shrinkage temperature (Ts)', ['The melting temperature (Tm)', 'The body temperature', 'The boiling point of the gelatin solution'], {
    explanation: 'Ts for fibres; Tm for molecules in solution.',
  }),
  tf({ id: 's3-5-3', conceptId: 'helix-stability', statement: 'Cod skin collagen melts at a lower temperature than calf skin collagen.', answer: true, explanation: 'Cod Tm 16 °C; calf Tm 39 °C.' }),
  mcq('s3-5-4', 'helix-stability', 'What is the Tm of shark skin collagen?', '29 °C', ['39 °C', '16 °C', '53 °C'], {
    explanation: 'Shark skin: Ts 53 °C, Tm 29 °C.',
  }),
  mcq('s3-5-5', 'helix-stability', 'How does the Tm of collagen relate to the animal it comes from?', 'It tracks the animal’s body temperature', ['It is always 37 °C in every animal', 'It is highest in the coldest-living animals', 'It is unrelated to body temperature'], {
    explanation: 'Calf (37 °C) > shark (24–28 °C) > cod (10–14 °C).',
  }),

  // ─── Lesson 3 · S6 Sugars on hydroxylysine ─────────────────────────
  mcq('s3-6-1', 'glycosylation', 'How many carbohydrate units per molecule does tendon (type I) collagen carry?', 'About 6', ['About 110', 'About 60', 'About 1'], {
    explanation: 'Tendon: 6; lens capsule (type IV): about 110.',
  }),
  mcq('s3-6-2', 'glycosylation', 'Which enzymes add the sugars to hydroxylysine?', 'Galactosyl and glucosyl transferases', ['Lysyl oxidase and lysyl hydroxylase', 'Procollagen peptidases', 'The prolyl-3- and prolyl-4-hydroxylases'], {
    explanation: 'Galactosyl and glucosyl transferases add them in sequence.',
  }),
  tf({ id: 's3-6-3', conceptId: 'glycosylation', statement: 'The sugars are added after the collagen has become helical.', answer: false, explanation: 'The transferases act before the helix forms.' }),
  tf({ id: 's3-6-4', conceptId: 'glycosylation', statement: 'Type I tendon collagen carries more carbohydrate than type IV lens capsule collagen.', answer: false, explanation: 'Tendon: 6 units; lens capsule: about 110.' }),
  mcq('s3-6-5', 'glycosylation', 'Which collagen type is the heavily glycosylated lens capsule collagen?', 'Type IV', ['Type I', 'Type II', 'Type III'], {
    explanation: 'Lens capsule type IV (sheetlike network) has about 110 units.',
  }),

  // ─── Lesson 4 · S1 Procollagen peptidases ──────────────────────────
  mcq('s4-1-1', 'procollagen-processing', 'Where are procollagen’s extension peptides?', 'At both ends of the molecule', ['In the middle of the helix', 'At the amino end only', 'Wound tightly around the helix'], {
    explanation: 'Procollagen has extension peptides at both ends.',
  }),
  mcq('s4-1-2', 'procollagen-processing', 'What may the extension peptides guide?', 'Transport of procollagen across the membrane', ['Hydroxylation of the lysine residues', 'Breakdown of collagen by bacteria', 'Binding of fibronectin to the surrounding cells'], {
    explanation: 'Slide 54: they may guide transport across the cell membrane.',
  }),
  tf({ id: 's4-1-3', conceptId: 'procollagen-processing', statement: 'The extension peptides stop collagen fibres forming too early.', answer: true, explanation: 'Slide 54: they prevent premature fibre formation.' }),
  mcq('s4-1-4', 'procollagen-processing', 'Which bonds first hold the three procollagen chains together?', 'Disulfide bonds near the C-terminus', ['Peptide bonds near the N-terminus', 'Aldol cross-links in the helix', 'Hydrogen bonds to the glycines of the helix'], {
    explanation: 'C-terminal cysteines form disulfide bonds that start the helix.',
  }),
  fill('s4-1-5', 'procollagen-processing', 'Procollagen ____ cut the extension peptides off.', ['peptidases', 'peptidase'], {
    explanation: 'Procollagen peptidases work in the extracellular space.',
  }),

  // ─── Lesson 4 · S2 From molecules to fibres ────────────────────────
  mcq('s4-2-1', 'fibre-formation', 'What links neighbouring tropocollagen molecules into a fibre?', 'Bonds between exposed R groups', ['Bonds between buried R groups', 'Disulfide bonds to fibronectin', 'Sugars on hydroxyproline'], {
    explanation: 'Many side chains are exposed; bonds between them make molecules aggregate.',
  }),
  tf({ id: 's4-2-2', conceptId: 'fibre-formation', statement: 'Tropocollagen molecules are joined end to end along each row of a fibre.', answer: false, explanation: 'A gap of about 400 Å separates them.' }),
  mcq('s4-2-3', 'fibre-formation', 'How does collagen’s shape differ from a globular protein’s?', 'Elongated, with many side chains on the surface', ['Compact, with most of its side chains buried inside', 'Spherical, with a hydrophobic core of glycines', 'Flat, with no side chains exposed at all'], {
    explanation: 'The elongated triple helix leaves many side chains exposed.',
  }),
  mcq('s4-2-4', 'fibre-formation', 'How long is the gap compared with the molecule (400 Å vs 3000 Å)?', 'Less than a sixth of its length', ['About half of the molecule’s length', 'Longer than the molecule', 'Exactly its own length'], {
    explanation: '400 is under one-sixth of 3000 (which would be 500).',
    difficulty: 'intermediate',
  }),
  fill('s4-2-5', 'fibre-formation', 'The gaps between tropocollagen molecules may be nucleation sites in ____ formation.', ['bone'], {
    explanation: 'Slide 60: possible nucleation sites in bone formation.',
  }),

  // ─── Lesson 4 · S3 Cross-links ─────────────────────────────────────
  mcq('s4-3-1', 'collagen-crosslinks', 'Which group of lysine does lysyl oxidase convert into an aldehyde?', 'The ε-amino group', ['The α-amino group', 'The carboxyl group', 'The β-carbon'], {
    explanation: 'The ε-amino group of certain lysines becomes an aldehyde (allysine).',
  }),
  mcq('s4-3-2', 'collagen-crosslinks', 'Which rat tendon is highly cross-linked?', 'The Achilles tendon', ['The tail tendon', 'The neck tendon of the rat', 'The jaw tendon'], {
    explanation: 'The mature Achilles tendon is highly cross-linked; the tail tendon much less.',
  }),
  tf({ id: 's4-3-3', conceptId: 'collagen-crosslinks', statement: 'Collagen cross-links can form within a single tropocollagen molecule.', answer: true, explanation: 'Cross-links are intramolecular as well as intermolecular.' }),
  mcq('s4-3-4', 'collagen-crosslinks', 'Put the cross-link steps in order.', 'Allysine → aldol → histidine–aldol → Schiff base', ['Aldol → allysine → Schiff base → histidine–aldol', 'Schiff base → aldol → allysine → histidine–aldol', 'Histidine–aldol → allysine → aldol → Schiff base'], {
    explanation: 'Lysyl oxidase, aldol condensation, histidine addition, Schiff base.',
  }),
  mcq('s4-3-5', 'collagen-crosslinks', 'Why is the flexible tail tendon less cross-linked than the Achilles tendon?', 'Cross-linking varies with the tissue’s function', ['The tail tendon has no lysine at all', 'The tail tendon is made of elastin, not collagen', 'The tail tendon lacks fibroblasts'], {
    explanation: 'The extent of cross-linking varies with function and age.',
  }),

  // ─── Lesson 5 · S1 Scurvy ──────────────────────────────────────────
  mcq('s5-1-1', 'scurvy', 'Which oral sign is a feature of scurvy in adults?', 'Bleeding from the gums', ['A cherry red spot', 'Blue whites of the eyes', 'Kinky, brittle hair'], {
    explanation: 'Adults: bleeding gums, gingivitis, halitosis, loose teeth.',
  }),
  mcq('s5-1-2', 'scurvy', 'Which bone problem is a feature of scurvy in infants?', 'Defective bone formation', ['Extra bone growth', 'Bones that are too dense', 'Fused vertebrae'], {
    explanation: 'Infants: painful limbs, defective bone formation, weak vessels.',
  }),
  tf({ id: 's5-1-3', conceptId: 'scurvy', statement: 'Poor wound healing is a feature of scurvy in adults.', answer: true, explanation: 'Slide 63 lists poor wound healing.' }),
  mcq('s5-1-4', 'scurvy', 'Why is collagen poorly hydroxylated in scurvy?', 'Prolyl hydroxylase’s iron is not kept reduced', ['Prolyl hydroxylase is not made at all', 'There is no proline at all in the person’s diet', 'Glycine is missing from the chains'], {
    explanation: 'Without ascorbate the Fe²⁺ is not maintained.',
  }),
  mcq('s5-1-5', 'scurvy', 'Which general features of scurvy in adults show weight loss and poor appetite?', 'Anorexia and cachexia', ['Obesity and polyphagia', 'Diarrhoea and fever', 'Thirst and polyuria'], {
    explanation: 'Adults: listlessness, anorexia, cachexia.',
  }),

  // ─── Lesson 5 · S2 Ehlers-Danlos syndrome ──────────────────────────
  mcq('s5-2-1', 'ehlers-danlos', 'Which joint feature marks Ehlers-Danlos syndrome?', 'Hyperextensible joints', ['Stiff, fused joints', 'Swollen gouty joints', 'Joints filled with blood'], {
    explanation: 'Features: hyperextensible joints, stretchy skin, easy bruising, short stature.',
  }),
  mcq('s5-2-2', 'ehlers-danlos', 'Which collagen type’s synthesis can be defective in Ehlers-Danlos syndrome?', 'Type III', ['Type IV', 'Type II', 'Type XVII'], {
    explanation: 'Slide 65 lists defective type III collagen synthesis.',
  }),
  tf({ id: 's5-2-3', conceptId: 'ehlers-danlos', statement: 'A deficiency of lysyl oxidase can underlie Ehlers-Danlos syndrome.', answer: true, explanation: 'Slide 65 lists lysyl oxidase deficiency.' }),
  mcq('s5-2-4', 'ehlers-danlos', 'Which growth feature does Ehlers-Danlos syndrome cause?', 'Short stature', ['Tall stature', 'Gigantism', 'Early growth spurt'], {
    explanation: 'Slide 66 lists short stature.',
  }),
  mcq('s5-2-5', 'ehlers-danlos', 'Which chains does normal skin collagen show on slide 67’s gel?', 'Only α1 and α2', ['Pro-α1 and pro-α2', 'Only pro-α1', 'α1, α2 and α3'], {
    explanation: 'Normal: α1 and α2; EDS type VII also shows pro-α chains.',
  }),

  // ─── Lesson 5 · S3 Dermatoparaxis ──────────────────────────────────
  tf({ id: 's5-3-1', conceptId: 'dermatoparaxis', statement: 'Dermatoparaxis is caused by a deficiency of lysyl oxidase.', answer: false, explanation: 'It is caused by absence of a procollagen peptidase.' }),
  mcq('s5-3-2', 'dermatoparaxis', 'Which propeptides are retained in dermatoparaxis?', 'The amino-terminal propeptides', ['The carboxyl-terminal propeptides', 'No propeptides at all', 'Only the disulfide bonds'], {
    explanation: 'The amino-terminal propeptides are retained.',
  }),
  tf({ id: 's5-3-3', conceptId: 'dermatoparaxis', statement: 'Animals with dermatoparaxis have very fragile skin.', answer: true, explanation: 'Fragile skin with disorganised collagen bundles.' }),
  mcq('s5-3-4', 'dermatoparaxis', 'Which human disorder shares dermatoparaxis’s problem of retained propeptides?', 'Ehlers-Danlos syndrome type VII', ['Osteogenesis imperfecta (type I)', 'Scurvy', 'Lathyrism'], {
    explanation: 'EDS type VII also shows pro-α chains — propeptides not removed.',
  }),
  mcq('s5-3-5', 'dermatoparaxis', 'What do the collagen bundles look like in dermatoparaxis?', 'Disorganised', ['Unusually thick', 'Perfectly aligned', 'Completely absent'], {
    explanation: 'Disorganised collagen bundles.',
  }),

  // ─── Lesson 5 · S4 Lathyrism ───────────────────────────────────────
  mcq('s5-4-1', 'lathyrism', 'Which enzyme’s action does β-aminopropionitrile block?', 'Lysyl oxidase', ['Prolyl hydroxylase', 'Procollagen peptidase', 'Galactosyl transferase'], {
    explanation: 'It inhibits the conversion of lysyl side chains to aldehydes.',
  }),
  mcq('s5-4-2', 'lathyrism', 'Which step of collagen maturation fails in lathyrism?', 'Formation of cross-links', ['Hydroxylation of proline', 'Removal of propeptides', 'Secretion of procollagen'], {
    explanation: 'Without aldehydes, cross-links cannot form.',
  }),
  tf({ id: 's5-4-3', conceptId: 'lathyrism', statement: 'Lathyrism is caused by a vitamin deficiency.', answer: false, explanation: 'It is caused by a toxin in sweet pea seeds.' }),
  mcq('s5-4-4', 'lathyrism', 'What is collagen like in lathyrism?', 'Extremely fragile', ['Unusually rigid', 'Over-hydroxylated', 'Normal in strength'], {
    explanation: 'Animals make extremely fragile collagen.',
  }),
  mcq('s5-4-5', 'lathyrism', 'Which pair of disorders both disturb cross-linking?', 'Lathyrism and lysyl oxidase-deficient EDS', ['Scurvy and dermatoparaxis', 'Osteogenesis imperfecta and infant scurvy', 'Dermatoparaxis and lathyrism'], {
    explanation: 'Both lack the lysyl aldehydes that build cross-links.',
    difficulty: 'intermediate',
  }),

  // ─── Lesson 5 · S5 Osteogenesis imperfecta ─────────────────────────
  mcq('s5-5-1', 'osteogenesis-imperfecta', 'Why is the osteogenesis imperfecta allele dominant?', 'Its aberrant chain spoils the triple helix', ['It makes no α1 chain at all', 'It doubles the amount of collagen made in bone', 'It blocks prolyl hydroxylase'], {
    explanation: 'The mutant chain is built into the helix and spoils it.',
  }),
  mcq('s5-5-2', 'osteogenesis-imperfecta', 'How big is the genome in which one nucleotide change can be fatal?', '3 × 10⁹ base pairs', ['3 × 10⁶ base pairs', '3 × 10¹² base pairs', '3 × 10³ base pairs'], {
    explanation: 'One change in 3 × 10⁹ base pairs causes a fatal disorder.',
  }),
  tf({ id: 's5-5-3', conceptId: 'osteogenesis-imperfecta', statement: 'Mutation of a single glycine in type I collagen can be lethal.', answer: true, explanation: 'Slide 71: a single glycine mutation can be lethal.' }),
  mcq('s5-5-4', 'osteogenesis-imperfecta', 'What happens to the helix near the glycine 988 mutation?', 'It is over-hydroxylated and glycosylated', ['It is under-hydroxylated and bare', 'It is cross-linked more tightly', 'It is cut off by procollagen peptidases'], {
    explanation: 'The disrupted region is exposed to excessive hydroxylation and glycosylation.',
  }),
  mcq('s5-5-5', 'osteogenesis-imperfecta', 'Why can the abnormal collagen not form ordered fibrils?', 'It is partly unfolded at body temperature', ['It is fully folded but too short', 'It has too many cross-links', 'It is made in the wrong cells of the body'], {
    explanation: 'The abnormal collagen is partly unfolded at body temperature.',
  }),

  // ─── Lesson 6 · S1 Where elastin is ────────────────────────────────
  mcq('s6-1-1', 'elastin-distribution', 'Which part of the aorta is especially rich in elastin?', 'The arch, near the heart', ['The abdominal part', 'Its outer adventitia only', 'The part in the pelvis'], {
    explanation: 'Slide 75: especially the arch of the aorta near the heart.',
  }),
  mcq('s6-1-2', 'elastin-distribution', 'Which tissue has relatively LITTLE elastin?', 'Tendon', ['Aorta', 'Ligaments', 'Arteries'], {
    explanation: 'Little elastin in skin, tendon and loose connective tissue.',
  }),
  tf({ id: 's6-1-3', conceptId: 'elastin-distribution', statement: 'Ligaments contain a lot of elastin.', answer: true, explanation: 'Blood vessel walls and ligaments are rich in elastin.' }),
  mcq('s6-1-4', 'elastin-distribution', 'What joins single elastin molecules in the elastic network?', 'Cross-links', ['Disulfide bonds', 'Glycine bridges', 'Sugar chains'], {
    explanation: 'Slide 6: cross-links join single elastin molecules.',
  }),
  mcq('s6-1-5', 'elastin-distribution', 'How fast do stretched elastic fibres return to their shape?', 'Rapidly, once tension is released', ['Slowly, over several hours', 'Only after being heated above 37 °C', 'Never — they stay stretched'], {
    explanation: 'They return rapidly when tension is released.',
  }),

  // ─── Lesson 6 · S2 Composition: elastin vs collagen ────────────────
  mcq('s6-2-1', 'elastin-composition', 'Which kind of residue is scarce in elastin?', 'Polar residues', ['Non-polar residues', 'Glycine residues', 'Proline residues'], {
    explanation: 'Elastin has many non-polar aliphatic residues and few polar ones.',
  }),
  mcq('s6-2-2', 'elastin-composition', 'Which property of mature elastin comes from its many cross-links?', 'High insolubility', ['High solubility', 'High sugar content', 'High charge'], {
    explanation: 'Many cross-links make it highly insoluble.',
  }),
  tf({ id: 's6-2-3', conceptId: 'elastin-composition', statement: 'Elastin contains plenty of hydroxyproline, like collagen.', answer: false, explanation: 'Elastin has very little hydroxyproline; collagen has plenty.' }),
  mcq('s6-2-4', 'elastin-composition', 'Which residue does collagen carry sugars on, but elastin lacks?', 'Hydroxylysine', ['Hydroxyproline', 'Glycine', 'Alanine'], {
    explanation: 'Collagen’s hydroxylysine carries sugars; elastin has none.',
  }),
  mcq('s6-2-5', 'elastin-composition', 'Which aliphatic residue is NOT among elastin’s plentiful non-polar residues?', 'Serine', ['Alanine', 'Valine', 'Isoleucine'], {
    explanation: 'Ala, Val, Leu and Ile are plentiful; serine is polar.',
  }),

  // ─── Lesson 6 · S3 Cross-links in elastin ──────────────────────────
  mcq('s6-3-1', 'elastin-crosslinks', 'What are lysinonorleucine cross-links made from?', 'A lysine and a lysine-derived aldehyde', ['Two histidines and one allysine aldehyde', 'Four lysine side chains', 'A glycine and a proline'], {
    explanation: 'A lysine plus a lysine-derived aldehyde, via a reduced Schiff base.',
  }),
  mcq('s6-3-2', 'elastin-crosslinks', 'How many lysines does the repeat Lys-Ala-Ala-Ala-Lys contain?', 'Two', ['One', 'Three', 'Four'], {
    explanation: 'Two lysines, spaced by alanines, ready for cross-linking.',
  }),
  tf({ id: 's6-3-3', conceptId: 'elastin-crosslinks', statement: 'Desmosine cross-links are found in collagen as well as in elastin.', answer: false, explanation: 'Desmosine is found in elastin only.' }),
  mcq('s6-3-4', 'elastin-crosslinks', 'Why does elastin have alanines between its lysines?', 'To space the lysines for cross-linking', ['To carry the sugars of elastin', 'To bind calcium in the arteries', 'To make the elastin chain much more polar'], {
    explanation: 'The repeat places lysines for cross-linking.',
  }),
  mcq('s6-3-5', 'elastin-crosslinks', 'Through which intermediate is lysinonorleucine formed before it is reduced?', 'A Schiff base', ['An aldol condensate', 'A disulfide bond', 'A peptide bond'], {
    explanation: 'Lysine + aldehyde → Schiff base → reduced to lysinonorleucine.',
  }),
];
