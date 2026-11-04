// Biochemistry → Blood Coagulation and Fibrinolysis: five more questions for every
// reading section (owner, 2026-11-04), written from that section's lecture text.
// IDs: sL-S-n = lesson L, section S, question n.
import { fill, mcq, tf, type QuestionDraft } from '@/data/topics/build';
import type { ConceptId } from '@/data/topics/blood-coagulation-and-fibrinolysis/sources';

type Q = QuestionDraft<ConceptId>;

export const sectionQuestions: Q[] = [
  // ─── Lesson 1 · S1 A cascade of proteases ──────────────────────────
  mcq('s1-1-1', 'cascade-principles', 'Which bonds do the clotting-factor serine endopeptidases attack?', 'Arg–X bonds', ['Gly–Gly bonds', 'Ser–Pro bonds', 'Lys–Lys bonds'], {
    explanation: 'The clotting factors are serine endopeptidases attacking Arg–X bonds.',
  }),
  mcq('s1-1-2', 'cascade-principles', 'What do kinins such as bradykinin and kallidin do?', 'Dilate blood vessels', ['Constrict blood vessels', 'Dissolve fibrin clots', 'Make new platelets'], {
    explanation: 'Kinin formation is a cascade; bradykinin and kallidin dilate vessels.',
  }),
  tf({ id: 's1-1-3', conceptId: 'cascade-principles', statement: 'A stimulus below a threshold does not start the clotting cascade.', answer: true, explanation: 'Inhibitors prevent premature triggering below the threshold.' }),
  mcq('s1-1-4', 'cascade-principles', 'Which is the final substrate of the clotting cascade, present in large amounts?', 'Fibrinogen', ['Factor XII', 'Prothrombin', 'Factor VIII'], {
    explanation: 'Trace first factors act on large amounts of fibrinogen (~250 mg/100 mL).',
  }),
  mcq('s1-1-5', 'cascade-principles', 'Which is NOT one of the other hydrolytic cascades of blood?', 'Formation of haemoglobin', ['Lysis of clots', 'Formation of kinins', 'Activation of complement'], {
    explanation: 'The others listed are clot lysis, kinin formation and complement activation.',
  }),

  // ─── Lesson 1 · S2 Haemostasis ─────────────────────────────────────
  mcq('s1-2-1', 'haemostasis-events', 'Which event of haemostasis forms a temporary plug?', 'Adhesion and aggregation of platelets', ['Vasoconstriction of the injured vessel', 'Cross-linking of fibrin by factor XIII', 'Release of plasmin from plasminogen'], {
    explanation: 'Platelets adhere and aggregate into a temporary plug.',
  }),
  mcq('s1-2-2', 'haemostasis-events', 'Which event of haemostasis comes first?', 'Vasoconstriction', ['Platelet aggregation', 'Blood coagulation', 'Fibrinolysis'], {
    explanation: 'Vasoconstriction → platelet plug → fibrin clot.',
  }),
  tf({ id: 's1-2-3', conceptId: 'haemostasis-events', statement: 'Blood coagulation produces a fibrin clot.', answer: true, explanation: 'The third event of haemostasis forms a fibrin clot.' }),
  mcq('s1-2-4', 'haemostasis-events', 'What does vasoconstriction do at an injury?', 'Narrows the injured vessel', ['Widens the injured vessel', 'Dissolves the platelet plug', 'Cross-links the fibrin'], {
    explanation: 'Vasoconstriction narrows the injured vessel.',
  }),
  fill('s1-2-5', 'haemostasis-events', 'The stopping of bleeding is called ____.', ['haemostasis', 'hemostasis'], {
    explanation: 'Haemostasis: vasoconstriction, a platelet plug and a fibrin clot.',
  }),

  // ─── Lesson 1 · S3 Three pathways ──────────────────────────────────
  mcq('s1-3-1', 'intrinsic-extrinsic', 'Which factor is called the Christmas factor?', 'Factor IX', ['Factor VIII', 'Factor XI', 'Factor X'], {
    explanation: 'XIa activates IX, the Christmas factor.',
  }),
  mcq('s1-3-2', 'intrinsic-extrinsic', 'Which event starts the extrinsic pathway?', 'Trauma, releasing tissue factor', ['Contact with glass or kaolin', 'Release of heparin by mast cells', 'Binding of plasmin to fibrin'], {
    explanation: 'Trauma brings tissue factor (factor III) together with VIIa.',
  }),
  tf({ id: 's1-3-3', conceptId: 'intrinsic-extrinsic', statement: 'The intrinsic and extrinsic pathways both lead to the activation of factor X.', answer: true, explanation: 'Both converge on X, the start of the common pathway.' }),
  mcq('s1-3-4', 'intrinsic-extrinsic', 'Which molecules help factor IXa activate factor X?', 'VIIIa, phospholipid and Ca²⁺', ['VIIa, tissue factor and Ca²⁺', 'Va, heparin and fibrinogen', 'XIIa, kaolin and plasmin'], {
    explanation: 'IXa, with VIIIa, phospholipid and Ca²⁺, activates X.',
  }),
  mcq('s1-3-5', 'intrinsic-extrinsic', 'Which factor turns fibrin into a stable clot?', 'Factor XIIIa', ['Factor Xa', 'Factor VIIa (proconvertin)', 'Factor IXa'], {
    explanation: 'XIIIa cross-links fibrin in the common pathway.',
  }),

  // ─── Lesson 1 · S4 What starts the intrinsic pathway ───────────────
  mcq('s1-4-1', 'pathway-activators', 'Which of these does NOT activate the intrinsic pathway in a test tube?', 'Silicon surfaces', ['Clean glass surfaces', 'Kaolin', 'Some acids'], {
    explanation: 'Glass, kaolin and some acids activate it; silicon and some plastics do not.',
  }),
  mcq('s1-4-2', 'pathway-activators', 'Which bacterial product can start the intrinsic pathway in the body?', 'Gram-negative endotoxins', ['Penicillin from moulds', 'Bacterial DNA polymerase', 'Gram-negative flagella'], {
    explanation: 'Slide 28 lists gram-negative endotoxins and gram-positive cell-wall products.',
  }),
  tf({ id: 's1-4-3', conceptId: 'pathway-activators', statement: 'Antigen–antibody complexes can activate the intrinsic pathway.', answer: true, explanation: 'They are among the in-body activators on slide 28.' }),
  mcq('s1-4-4', 'pathway-activators', 'Besides starting the intrinsic pathway, what does the contact system do?', 'Promotes plasmin formation and makes bradykinin', ['Makes platelets and stores vitamin K', 'Removes calcium and dissolves fibrinogen', 'Makes heparin and blocks antithrombin III completely'], {
    explanation: 'It also promotes plasminogen → plasmin, makes bradykinin and starts parts of complement.',
  }),
  fill('s1-4-5', 'pathway-activators', 'In the vessel wall, ____ is one of the sub-endothelial activators of the intrinsic pathway.', ['collagen'], {
    explanation: 'Collagen and other sub-endothelial constituents activate it.',
  }),

  // ─── Lesson 1 · S5 The clotting factors ────────────────────────────
  mcq('s1-5-1', 'clotting-factors', 'Which factor is proconvertin?', 'Factor VII', ['Factor V', 'Factor III', 'Factor XI'], {
    explanation: 'VII = proconvertin; V = proaccelerin.',
  }),
  mcq('s1-5-2', 'clotting-factors', 'Which factor is NOT vitamin K-dependent?', 'Factor V', ['Factor II', 'Factor IX', 'Factor X'], {
    explanation: 'Vitamin K-dependent factors: II, VII, IX and X.',
  }),
  tf({ id: 's1-5-3', conceptId: 'clotting-factors', statement: 'Factor XI is called plasma thromboplastin antecedent.', answer: true, explanation: 'Slide 10 names XI plasma thromboplastin antecedent.' }),
  mcq('s1-5-4', 'clotting-factors', 'Factor VIII is also known as…', 'Antihaemophilic factor', ['Fibrin-stabilising factor', 'Hageman factor', 'Christmas factor'], {
    explanation: 'Factor VIII is the antihaemophilic factor.',
  }),
  mcq('s1-5-5', 'clotting-factors', 'Which pair of factors acts as cofactors rather than proteases?', 'V and VIII', ['IX and X', 'II and VII', 'XI and XII'], {
    explanation: 'Proaccelerin (V) and antihaemophilic factor (VIII) are cofactors.',
  }),

  // ─── Lesson 2 · S1 Platelets ───────────────────────────────────────
  mcq('s2-1-1', 'platelets', 'Which neurotransmitter is stored in platelet dense granules?', 'Serotonin', ['Dopamine', 'Acetylcholine', 'GABA'], {
    explanation: 'Dense granules hold ADP, ATP, Ca²⁺ and serotonin.',
  }),
  mcq('s2-1-2', 'platelets', 'Which growth factor is found in platelet α-granules?', 'PDGF', ['EGF', 'VEGF', 'NGF'], {
    explanation: 'α-Granules contain PDGF, among other proteins.',
  }),
  tf({ id: 's2-1-3', conceptId: 'platelets', statement: 'Von Willebrand factor and fibrinogen are stored in platelet α-granules.', answer: true, explanation: 'Slide 17 lists both among α-granule contents.' }),
  mcq('s2-1-4', 'platelets', 'Which describes the shape of a platelet?', 'Disk-shaped', ['Spherical', 'Rod-shaped', 'Star-shaped'], {
    explanation: 'Platelets are disk-shaped cells, about 1 × 3 microns.',
  }),
  fill('s2-1-5', 'platelets', 'Another name for platelets is ____.', ['thrombocytes', 'thrombocyte'], {
    explanation: 'Platelets are thrombocytes.',
  }),

  // ─── Lesson 2 · S2 Fibrinogen (factor I) ───────────────────────────
  mcq('s2-2-1', 'fibrinogen-structure', 'How long is a fibrinogen molecule?', 'About 460 Å', ['About 55 Å', 'About 46 Å', 'About 4,600 Å'], {
    explanation: 'Fibrinogen is about 460 Å long.',
  }),
  mcq('s2-2-2', 'fibrinogen-structure', 'Which three kinds of chain make up fibrinogen?', 'Aα, Bβ and γ', ['α, β and δ', 'A, B and C chains', 'Aα, γ and ε'], {
    explanation: 'Two each of Aα, Bβ and γ.',
  }),
  tf({ id: 's2-2-3', conceptId: 'fibrinogen-structure', statement: 'Fibrinogen is clotting factor I.', answer: true, explanation: 'Factor I is fibrinogen, the clot structural protein.' }),
  mcq('s2-2-4', 'fibrinogen-structure', 'Which enzyme cuts fibrinogen at its Arg–Gly bonds?', 'Thrombin', ['Plasmin', 'Factor Xa', 'Factor XIIIa'], {
    explanation: 'Thrombin cleaves four Arg–Gly bonds in fibrinogen.',
  }),
  fill('s2-2-5', 'fibrinogen-structure', 'Fibrinogen appears as three nodules joined by two ____.', ['rods'], {
    explanation: 'Electron micrographs show three nodules and two rods.',
  }),

  // ─── Lesson 2 · S3 Fibrinopeptides and the fibrin monomer ──────────
  mcq('s2-3-1', 'fibrinopeptides', 'Which amino acids make the fibrinopeptides rich in negative charge?', 'Aspartate and glutamate', ['Lysine and arginine', 'Leucine and valine', 'Glycine, alanine and proline'], {
    explanation: 'Fibrinopeptides are rich in aspartate and glutamate.',
  }),
  mcq('s2-3-2', 'fibrinopeptides', 'How many fibrinopeptides does thrombin release from one fibrinogen?', 'Four — two A and two B', ['Two — one A and one B', 'Six — two each of A, B and C', 'Eight — four A and four B'], {
    explanation: 'Two A peptides (18 residues) and two B peptides (20 residues).',
  }),
  tf({ id: 's2-3-3', conceptId: 'fibrinopeptides', statement: 'Fibrin monomers need an enzyme to assemble into fibrin.', answer: false, explanation: 'Once the fibrinopeptides are gone, fibrin monomers assemble spontaneously.' }),
  mcq('s2-3-4', 'fibrinopeptides', 'Why does fibrinogen not clump together in normal blood?', 'Its fibrinopeptides’ negative charges repel', ['Its fibrinopeptides’ positive charges repel', 'Heparin coats every fibrinogen molecule', 'It is cross-linked by factor XIII already'], {
    explanation: 'The negative fibrinopeptides keep fibrinogen molecules apart.',
  }),
  mcq('s2-3-5', 'fibrinopeptides', 'What is left of fibrinogen after the fibrinopeptides leave?', 'The fibrin monomer', ['A fibrin degradation product', 'Free plasminogen', 'Factor XIII'], {
    explanation: 'The fibrin monomer, (αβγ)₂, keeps 97% of the residues.',
  }),

  // ─── Lesson 2 · S4 Cross-linking the clot ──────────────────────────
  mcq('s2-4-1', 'fibrin-cross-linking', 'What holds the first fibrin clot together, before factor XIII acts?', 'Weak forces', ['Disulfide bonds', 'Peptide bonds', 'Ester bonds'], {
    explanation: 'The first clot is held by weak forces; XIIIa adds covalent cross-links.',
  }),
  mcq('s2-4-2', 'fibrin-cross-linking', 'What kind of bond does factor XIIIa make between fibrin monomers?', 'A covalent cross-link', ['A weak hydrogen bond', 'An ionic salt bridge', 'A calcium (Ca²⁺) bridge'], {
    explanation: 'XIIIa makes covalent cross-links that make the clot rigid.',
  }),
  tf({ id: 's2-4-3', conceptId: 'fibrin-cross-linking', statement: 'Factor XIII is activated by thrombin.', answer: true, explanation: 'Thrombin activates XIII to XIIIa.' }),
  mcq('s2-4-4', 'fibrin-cross-linking', 'Each cross-link joins two fibrin monomers. Which is right?', 'Glutamine on one, lysine on the next', ['Lysine on both monomers', 'Glutamine on both monomers', 'Cysteine on one, serine on the next one'], {
    explanation: 'XIIIa links a glutamine’s glutamyl group to a lysine on the next monomer.',
  }),
  mcq('s2-4-5', 'fibrin-cross-linking', 'Without factor XIII, what would the clot be like?', 'Weak, without covalent cross-links', ['Absent — no fibrin would form', 'Stronger, with extra cross-links', 'Normal, as XIII has no role in clotting'], {
    explanation: 'Fibrin would still form, but without cross-links the clot stays weak.',
  }),

  // ─── Lesson 3 · S1 Thrombin (factor IIa) ───────────────────────────
  mcq('s3-1-1', 'prothrombin-thrombin', 'At how many places does factor Xa cut prothrombin?', 'Two', ['One', 'Three', 'Four'], {
    explanation: 'Factor Xa cleaves prothrombin at two places.',
  }),
  mcq('s3-1-2', 'prothrombin-thrombin', 'Which bonds does thrombin cleave?', 'Arg–Gly bonds', ['Lys–Lys bonds', 'Gly–Pro bonds', 'Ser–Asp bonds'], {
    explanation: 'Thrombin cleaves Arg–Gly bonds, as in fibrinogen.',
  }),
  tf({ id: 's3-1-3', conceptId: 'prothrombin-thrombin', statement: 'Thrombin is factor IIa.', answer: true, explanation: 'Prothrombin (II) is activated to thrombin (IIa).' }),
  mcq('s3-1-4', 'prothrombin-thrombin', 'Which amino acid in thrombin’s active-site sequence marks it as a serine enzyme?', 'Serine', ['Proline', 'Aspartate', 'Glycine'], {
    explanation: '–Gly-Asp-Ser-Gly-Gly-Pro– contains the active serine.',
  }),
  fill('s3-1-5', 'prothrombin-thrombin', 'Prothrombin is clotting factor ____.', ['II', '2'], {
    explanation: 'Factor II is prothrombin; IIa is thrombin.',
  }),

  // ─── Lesson 3 · S2 Phospholipid and calcium ────────────────────────
  mcq('s3-2-1', 'phospholipid-calcium', 'By up to how much do platelet phospholipid surfaces concentrate the clotting factors?', 'About 10⁴-fold', ['About 10-fold', 'About 100-fold', 'About 10⁸-fold'], {
    explanation: 'Disrupted platelet surfaces concentrate the factors as much as 10⁴-fold.',
  }),
  mcq('s3-2-2', 'phospholipid-calcium', 'Why is it useful that the reactions happen on platelet surfaces?', 'They are confined to the site of injury', ['They are spread through the whole blood', 'They are hidden from the liver', 'They use less calcium in total'], {
    explanation: 'The surfaces make sure accelerated reactions happen only at the injury.',
  }),
  tf({ id: 's3-2-3', conceptId: 'phospholipid-calcium', statement: 'EDTA prevents blood clotting.', answer: true, explanation: 'EDTA, like citrate and oxalate, removes Ca²⁺.' }),
  mcq('s3-2-4', 'phospholipid-calcium', 'A blood sample must not clot. Which additive works?', 'Citrate', ['Thrombin', 'Calcium chloride', 'Vitamin K'], {
    explanation: 'Citrate sequesters Ca²⁺, preventing clotting.',
  }),
  mcq('s3-2-5', 'phospholipid-calcium', 'What anchors prothrombin to platelet phospholipid?', 'Calcium ions', ['Heparin', 'Fibrinogen (factor I)', 'Plasmin'], {
    explanation: 'Prothrombin is anchored through Ca²⁺ to platelet membranes.',
  }),

  // ─── Lesson 3 · S3 Vitamin K and γ-carboxyglutamate ────────────────
  mcq('s3-3-1', 'vitamin-k-gla', 'Which residue does vitamin K-dependent carboxylation make?', 'γ-Carboxyglutamate', ['γ-Aminobutyrate (GABA)', 'Hydroxyproline', 'Phosphoserine'], {
    explanation: 'Glutamate is carboxylated to γ-carboxyglutamate.',
  }),
  mcq('s3-3-2', 'vitamin-k-gla', 'Why does γ-carboxyglutamate matter for factors II, VII, IX and X?', 'It binds Ca²⁺ strongly, anchoring them', ['It cuts fibrinogen at Arg–Gly bonds', 'It binds heparin, switching them off', 'It makes them soluble in the blood plasma'], {
    explanation: 'Strong Ca²⁺ binding anchors the factors to phospholipid for activation.',
  }),
  tf({ id: 's3-3-3', conceptId: 'vitamin-k-gla', statement: 'Warfarin is used as a rat poison.', answer: true, explanation: 'Vitamin K antagonists are anticoagulants and effective rat poisons.' }),
  mcq('s3-3-4', 'vitamin-k-gla', 'Put the steps of factor activation in order.', 'Gla formed → Ca²⁺ bound → anchored → activated', ['Ca²⁺ bound → Gla formed → activated → anchored', 'Anchored → Gla formed → Ca²⁺ bound → activated', 'Activated → anchored → Ca²⁺ bound → Gla formed'], {
    explanation: 'γ-Carboxylation, then Ca²⁺ binding, anchoring and activation.',
  }),
  fill('s3-3-5', 'vitamin-k-gla', 'Factors II, VII, IX and X are together called the ____ complex.', ['prothrombin'], {
    explanation: 'The vitamin K-dependent factors are the prothrombin complex.',
  }),

  // ─── Lesson 3 · S4 Vitamin K deficiency bleeding ───────────────────
  mcq('s3-4-1', 'vitamin-k-gla', 'Why does an infant gut lack a source of vitamin K at birth?', 'It has no bacterial flora yet', ['It cannot absorb any calcium', 'It has too much bile salt', 'It makes too much fibrinogen too early'], {
    explanation: 'The newborn gut has no bacterial flora.',
  }),
  mcq('s3-4-2', 'vitamin-k-gla', 'Why does an immature liver lead to poor vitamin K absorption?', 'Too little bile salt for fat-soluble vitamins', ['Too much bile salt destroys the vitamin', 'The liver stores all vitamin K away', 'The liver turns all its vitamin K into warfarin'], {
    explanation: 'Too little bile salt means fat-soluble vitamins are poorly absorbed.',
  }),
  tf({ id: 's3-4-3', conceptId: 'vitamin-k-gla', statement: 'Malabsorption can cause bleeding from vitamin K deficiency.', answer: true, explanation: 'Slide 42 lists malnutrition and malabsorption.' }),
  mcq('s3-4-4', 'vitamin-k-gla', 'Which is NOT a reason the newborn may lack vitamin K?', 'Too many gut bacteria', ['Reduced placental permeability', 'Inadequate maternal intake', 'An immature liver'], {
    explanation: 'The newborn has no gut flora — not too many bacteria.',
  }),
  mcq('s3-4-5', 'vitamin-k-gla', 'Which kind of jaundice causes vitamin K deficiency bleeding?', 'Obstructive jaundice', ['Neonatal haemolytic jaundice', 'Gilbert’s jaundice', 'Prehepatic jaundice'], {
    explanation: 'Slide 42 lists obstructive jaundice.',
  }),

  // ─── Lesson 3 · S5 Haemophilia ─────────────────────────────────────
  mcq('s3-5-1', 'haemophilia', 'Haemophilia C is due to the absence of which factor?', 'Factor XI', ['Factor IX', 'Factor VIII', 'Factor V'], {
    explanation: 'Haemophilia C: absent factor XI.',
  }),
  mcq('s3-5-2', 'haemophilia', 'Which factor is absent in congenital parahaemophilia?', 'Factor V', ['Factor VII', 'Factor XII', 'Factor XIII'], {
    explanation: 'Congenital parahaemophilia is absence of factor V.',
  }),
  tf({ id: 's3-5-3', conceptId: 'haemophilia', statement: 'Haemophilia B is also called Christmas disease.', answer: true, explanation: 'Haemophilia B is absence of Christmas factor (IX).' }),
  mcq('s3-5-4', 'haemophilia', 'What is bleeding into the joints called?', 'Haemarthrosis', ['Haematuria', 'Haematoma', 'Haemoptysis (coughing blood)'], {
    explanation: 'Haemarthrosis: bleeding into joints, often without apparent cause.',
  }),
  mcq('s3-5-5', 'haemophilia', 'About what share of haemophiliacs have haemophilia B?', 'About 15%', ['About 80%', 'About 50%', 'About 1%'], {
    explanation: 'Haemophilia A is over 80%; B about 15%.',
  }),

  // ─── Lesson 3 · S6 Von Willebrand factor and kallikreins ───────────
  mcq('s3-6-1', 'vwf-kallikrein', 'In which disease is von Willebrand factor deficient or defective?', 'Von Willebrand disease', ['Christmas disease (haemophilia B)', 'Haemophilia A', 'Parahaemophilia'], {
    explanation: 'vWF is deficient or defective in von Willebrand disease.',
  }),
  mcq('s3-6-2', 'vwf-kallikrein', 'Which disease involves von Willebrand factor, besides von Willebrand disease?', 'Thrombotic thrombocytopenic purpura', ['Acute intermittent porphyria', 'Haemolytic disease of the newborn', 'Obstructive jaundice with cholestasis'], {
    explanation: 'The lecture gives thrombotic thrombocytopenic purpura as an example.',
  }),
  tf({ id: 's3-6-3', conceptId: 'vwf-kallikrein', statement: 'Von Willebrand factor is important for platelet adhesion to wound sites.', answer: true, explanation: 'vWF helps platelets adhere where vessels are injured.' }),
  mcq('s3-6-4', 'vwf-kallikrein', 'What kind of enzymes are kallikreins?', 'A subgroup of serine proteases', ['A subgroup of lipases', 'A kind of transglutaminase enzyme', 'A kind of cyclo-oxygenase'], {
    explanation: 'Kallikreins are a subgroup of serine proteases.',
  }),
  mcq('s3-6-5', 'vwf-kallikrein', 'What does bradykinin do to blood vessels?', 'Dilates them and makes them leakier', ['Constricts them and seals them', 'Clots them with fibrin', 'Coats their inner walls with platelets'], {
    explanation: 'Bradykinin is a vasodilator that increases vascular permeability.',
  }),

  // ─── Lesson 4 · S1 Keeping clotting local ──────────────────────────
  mcq('s4-1-1', 'clot-limitation', 'How does a forming clot limit itself to the injury?', 'Fibrin adsorbs thrombin', ['Fibrin releases heparin', 'Fibrin destroys platelets', 'Fibrin binds vitamin K'], {
    explanation: 'Fibrin adsorbs the last active factor of the cascade.',
  }),
  mcq('s4-1-2', 'clot-limitation', 'Which organ helps remove activated clotting factors?', 'The liver', ['The kidney', 'The spleen alone', 'The lungs'], {
    explanation: 'They are removed by the liver and the reticuloendothelial system.',
  }),
  tf({ id: 's4-1-3', conceptId: 'clot-limitation', statement: 'Proteases help degrade activated clotting factors once they are formed.', answer: true, explanation: 'Slide 60: activated factors are degraded by proteases, among other routes.' }),
  mcq('s4-1-4', 'clot-limitation', 'Which is NOT a way activated clotting factors are cleared?', 'Storage in platelet granules', ['Dilution by blood flow', 'Specific protein inhibitors in plasma', 'Degradation by proteases'], {
    explanation: 'Slide 60: dilution, inhibitors, liver and RES removal, protease degradation.',
  }),
  fill('s4-1-5', 'clot-limitation', 'Activated clotting factors have a ____ half-life.', ['short'], {
    explanation: 'Their short half-life helps keep clotting local.',
  }),

  // ─── Lesson 4 · S2 Antithrombin III and heparin ────────────────────
  mcq('s4-2-1', 'antithrombin-heparin', 'What kind of complex does antithrombin III form with thrombin?', 'An irreversible complex', ['A loose reversible complex', 'A calcium-bridged complex', 'A covalent fibrin complex'], {
    explanation: 'Antithrombin III inactivates thrombin in an irreversible complex.',
  }),
  mcq('s4-2-2', 'antithrombin-heparin', 'Which of these does antithrombin III inhibit?', 'Factor Xa', ['Factor VIII', 'Factor V', 'Fibrinogen'], {
    explanation: 'It inhibits thrombin, plasmin and factors IXa, Xa and XIa.',
  }),
  tf({ id: 's4-2-3', conceptId: 'antithrombin-heparin', statement: 'Heparin carries a negative charge.', answer: true, explanation: 'Heparin is a negatively charged polysaccharide.' }),
  mcq('s4-2-4', 'antithrombin-heparin', 'How does heparin speed up the neutralising of thrombin?', 'It raises antithrombin III’s affinity for the proteases', ['It cleaves thrombin into small peptides directly', 'It removes Ca²⁺ from all of the clotting factors in turn', 'It blocks vitamin K in the liver cells'], {
    explanation: 'Heparin increases the affinity ~100-fold.',
  }),
  mcq('s4-2-5', 'antithrombin-heparin', 'To which class of molecule does heparin belong?', 'Glycosaminoglycans', ['Glycoproteins', 'Phospholipids', 'Steroid hormones'], {
    explanation: 'Heparin is a glycosaminoglycan.',
  }),

  // ─── Lesson 4 · S3 Fibrinolysis: plasmin ───────────────────────────
  mcq('s4-3-1', 'plasmin-activators', 'What is another name for plasmin?', 'Fibrinolysin', ['Thrombokinase', 'Fibrinogenase', 'Kallidin'], {
    explanation: 'Plasmin is fibrinolysin.',
  }),
  mcq('s4-3-2', 'plasmin-activators', 'Where is tissue plasminogen activator (TPA) made?', 'In vascular endothelium', ['In the kidneys', 'In platelet dense granules', 'In the liver'], {
    explanation: 'TPA comes from vascular endothelium.',
  }),
  tf({ id: 's4-3-3', conceptId: 'plasmin-activators', statement: 'Urokinase is present in both blood and urine.', answer: true, explanation: 'Slide 68: urokinase is present in blood and urine.' }),
  mcq('s4-3-4', 'plasmin-activators', 'Where does TPA activate plasminogen?', 'On the fibrin mesh', ['In the kidney tubules', 'Inside platelets', 'In the liver'], {
    explanation: 'Both bind fibrin, so plasminogen is activated on the clot.',
  }),
  mcq('s4-3-5', 'plasmin-activators', 'What does the “blood activator” of plasminogen come from?', 'Contact of factor XII with kallikrein', ['Release of TPA from the kidney tubules', 'Breakdown of platelets by plasmin', 'Secretion of heparin by mast cells'], {
    explanation: 'The blood (plasma) activator comes from factor XII contact with kallikrein.',
  }),

  // ─── Lesson 4 · S4 Aspirin and thrombolytic drugs ──────────────────
  mcq('s4-4-1', 'antiplatelet-thrombolytics', 'From which molecule do activated platelets make thromboxane A₂?', 'Arachidonic acid', ['Linoleic acid', 'Cholesterol', 'Palmitic acid (C16)'], {
    explanation: 'Arachidonic acid → PGG₂ → PGH₂ → thromboxane A₂.',
  }),
  mcq('s4-4-2', 'antiplatelet-thrombolytics', 'How does low-dose aspirin change COX-1?', 'It irreversibly acetylates it', ['It reversibly binds to it', 'It phosphorylates it', 'It cleaves it into two halves'], {
    explanation: 'Aspirin irreversibly acetylates serine 530 of COX-1.',
  }),
  tf({ id: 's4-4-3', conceptId: 'antiplatelet-thrombolytics', statement: 'Streptokinase can be used to clear blocked catheters.', answer: true, explanation: 'Slide 77 lists blocked catheters among its uses.' }),
  mcq('s4-4-4', 'antiplatelet-thrombolytics', 'Which two prostaglandins lie between arachidonic acid and thromboxane A₂?', 'PGG₂ and PGH₂', ['PGE₂ and PGF₂', 'PGI₂ and PGD₂', 'PGA₂ and PGB₂'], {
    explanation: 'Cyclo-oxygenase makes PGG₂ and PGH₂ on the way to thromboxane A₂.',
  }),
  mcq('s4-4-5', 'antiplatelet-thrombolytics', 'Which pair contrasts aspirin and streptokinase correctly?', 'Aspirin stops platelets clumping; streptokinase dissolves clots', ['Aspirin dissolves clots; streptokinase stops platelets clumping', 'Both dissolve clots by activating plasminogen', 'Both stop platelets clumping by blocking COX-1'], {
    explanation: 'Aspirin is antiplatelet; streptokinase is thrombolytic.',
  }),
];
