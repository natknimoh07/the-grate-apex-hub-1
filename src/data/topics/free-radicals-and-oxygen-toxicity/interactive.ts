// Biochemistry → Free Radicals and Oxygen Toxicity — layer 1 (learn by
// answering) and reading-layer extras. Checkpoint IDs: cN-xx; recall: rN-xx.
// Steps from the 2026 deck (sg) were added on 2026-11-10 (contentVersion 2).
import type { LessonConfusion } from '@/data/lesson-types';
import { ask, learn, match, mcq, multi, order, recall, type InteractiveDraft } from '@/data/topics/build';
import { hb, sg, type ConceptId } from '@/data/topics/free-radicals-and-oxygen-toxicity/sources';

type Steps = InteractiveDraft<ConceptId>[];

export const interactive: Record<string, Steps> = {
  'free-radicals-and-oxygen-toxicity-1': [
    ask(mcq('c1-01', 'free-radical-definition', 'What makes a species a free radical?', 'It has one or more unpaired electrons', ['It carries a negative charge on one atom', 'It contains at least one oxygen atom', 'It is an enzyme that oxidises lipids'], { explanation: 'HB slides 5–6.' })),
    learn('Chains', ['A radical that meets another radical is neutralised. But a radical that takes an electron from a stable molecule turns it into a new radical — a chain reaction that propagates damage.'], { sourceRefs: hb([5, 8]) }),
    ask(mcq('c1-02', 'ros-terms', 'Hydrogen peroxide is called a ROS but not a free radical. Why?', 'It has no unpaired electron', ['It contains no oxygen', 'It is harmless', 'It is made outside the body'], { explanation: 'HB slide 6.', skill: 'cause-effect' })),
    ask(mcq('c1-04', 'reactive-species', 'Peroxynitrite and hydrogen peroxide are both reactive species. Are they free radicals?', 'No — neither has an unpaired electron', ['Yes — both of them carry an unpaired electron', 'Only peroxynitrite, because it contains nitrogen', 'Only hydrogen peroxide, because it contains oxygen'], { explanation: '2026 slide 7: non-radical reactive species add to oxidative stress indirectly or by generating radicals.', skill: 'misconception' })),
    ask(multi('c1-03', 'radical-sources', 'Which are internal sources of free radicals? Select all that apply.', ['Mitochondria', 'Xanthine oxidase', 'Phagocytes', 'Ischaemia–reperfusion'], ['Ozone', 'Cigarette smoke'], { explanation: 'HB slide 9; Fay slide 6.' })),
    ask(mcq('c1-05', 'radical-sources', 'What is the major source of ROS in aerobic cells?', 'Electrons leaking from complexes I and III', ['Xanthine oxidase working in the cytoplasm of resting cells', 'Peroxisomal oxidation of very-long-chain fatty acids', 'Cytochrome P450 enzymes metabolising drugs in the liver'], { explanation: '2026 slide 60: during oxidative phosphorylation, leaked electrons react with O₂ to form superoxide.' })),
    learn('Useful in the right amount', ['Reactive species are not all bad. Neutrophils kill microbes with superoxide and HOCl, H₂O₂ acts as a second messenger, and NO· regulates vascular tone. Low H₂O₂ helps cells survive; high H₂O₂ triggers apoptosis. Antioxidants keep a balance — they do not remove ROS completely.'], { sourceRefs: sg([33, 54, 56]) }),
    recall('r1-01', 'ischaemia-reperfusion', 'Explain why restoring blood flow after ischaemia generates free radicals.', [
      'During ischaemia xanthine and xanthine oxidase rise greatly.',
      'At the same time the antioxidants SOD and glutathione peroxidase are lost.',
      'When oxygen returns, xanthine oxidase generates radicals that the weakened defences cannot remove.',
    ], hb([10])),
  ],
  'free-radicals-and-oxygen-toxicity-2': [
    learn('Making a radical', ['A radical forms when a molecule loses one electron (a radical cation) or gains one (a radical anion), or when a bond breaks evenly so that each atom keeps one electron — homolytic fission. Ionising radiation splits water this way into H· and ·OH.'], { sourceRefs: sg([8]) }),
    ask(mcq('c2-01', 'radical-reactions', 'Superoxide meets nitric oxide. What forms?', 'Peroxynitrite', ['Hydrogen peroxide', 'Hydroxyl radical', 'Water'], { explanation: 'Two radicals pair their electrons into a covalent bond (HB slide 15; 2026 slides 7, 59). The older decks write nitrogen dioxide here; the 2026 deck and the textbook give nitric oxide.' })),
    ask(mcq('c2-04', 'radical-reactions', 'A hydroxyl radical takes H· from a fatty-acid side-chain. What is left on that carbon?', 'An unpaired electron', ['A positive charge and no electrons', 'A full pair of electrons', 'A new carbon–carbon double bond'], { explanation: '2026 slide 14: H· has only one electron, so an unpaired electron must be left on the carbon — a carbon-centred radical.', skill: 'cause-effect' })),
    learn('Superoxide is the parent', ['Superoxide comes mainly from electron leakage in the mitochondrial chain. It is not very damaging itself, but dismutates to H₂O₂, which with iron gives the extremely reactive hydroxyl radical.'], { sourceRefs: hb([35, 37]) }),
    ask(mcq('c2-02', 'fenton-haber-weiss', 'Which reaction makes hydroxyl radicals from H₂O₂ and Fe²⁺?', 'The Fenton reaction', ['The Haber–Weiss reaction', 'Dismutation', 'The respiratory burst'], { explanation: 'HB slide 37.' })),
    ask(mcq('c2-05', 'fenton-haber-weiss', 'What role do Fe²⁺ and Cu⁺ play in making hydroxyl radicals?', 'Redox catalysts that keep cycling between two states', ['Antioxidants that trap ·OH as soon as it forms', 'Structural parts of the SOD enzyme in mitochondria', 'Electron acceptors that remove superoxide for good'], { explanation: '2026 slide 9: the reduced metal makes ·OH from H₂O₂ (Fenton) and superoxide reduces it back (Haber–Weiss).' })),
    ask(order('c2-03', 'fenton-haber-weiss', 'Order the one-electron reduction of oxygen.', ['O₂', 'Superoxide', 'Hydrogen peroxide', 'Hydroxyl radical', 'Water'], { explanation: 'HB slides 37, 69.' })),
    ask(mcq('c2-06', 'nitric-oxide-peroxynitrite', 'Why is producing NO· and superoxide together dangerous?', 'They form peroxynitrite, whose acid splits into ·OH and ·NO₂', ['They cancel out and leave the cell with no signalling NO', 'They form hydrogen peroxide, which is the most reactive species', 'They inhibit SOD, so superoxide can never be removed again'], { explanation: '2026 slide 7: ONOO⁻ + H⁺ ⇌ ONOOH → ·OH + ·NO₂.', skill: 'cause-effect' })),
    recall('r2-01', 'major-ros', 'Describe superoxide, hydrogen peroxide and the hydroxyl radical, and how they are linked.', [
      'Superoxide: O₂ plus one electron; mainly from mitochondrial electron leakage; not very damaging but the source of the others.',
      'Hydrogen peroxide: from dismutation of superoxide; not a radical and not very reactive, but the main source of ·OH with transition metals.',
      'Hydroxyl radical: made by the Fenton (H₂O₂ + Fe²⁺) and Haber–Weiss (O₂·⁻ + H₂O₂) reactions; extremely reactive with most biomolecules.',
    ], hb([35, 37])),
  ],
  'free-radicals-and-oxygen-toxicity-3': [
    ask(mcq('c3-01', 'lipid-peroxidation', 'Why are polyunsaturated fatty acids the main targets of lipid peroxidation?', 'The methylene groups between their double bonds have very reactive hydrogens', ['They have no double bonds, so they are fully saturated', 'They are water-soluble and sit outside the membrane', 'They contain iron, which catalyses the attack'], { explanation: 'HB slides 22, 29.', skill: 'cause-effect' })),
    ask(order('c3-02', 'lipid-peroxidation', 'Order the stages of lipid peroxidation.', ['Initiation: hydrogen abstraction', 'Lipid radical + O₂ → peroxyl radical', 'Peroxyl radical attacks another lipid', 'Lipid peroxides accumulate; membrane leaks', 'Termination'], { explanation: 'HB slides 23, 25.' })),
    ask(mcq('c3-04', 'protein-damage', 'Methionine in a protein is oxidised by HOCl. What does it become?', 'Methionine sulphoxide', ['Cysteine disulphide', 'Homocysteine thiolactone', 'S-adenosylmethionine'], { explanation: '2026 slide 23; methionine sulphoxide reductases can reverse it.' })),
    learn('DNA', ['·OH attacking guanine gives 8-hydroxyguanine (mutagenic) or ring-opened guanine (blocks replication). Guanine is the base most easily oxidised. Malondialdehyde from lipid peroxidation also forms DNA adducts.'], { sourceRefs: [...hb([24, 26]), ...sg([16])] }),
    ask(multi('c3-05', 'dna-repair-outcomes', 'Why can oxidative DNA damage fail to be repaired? Select all that apply.', ['Polymerases and repair enzymes are oxidised too', 'Damaged polymerases replicate DNA inaccurately', 'Raised free Ca²⁺ activates nucleases that cut DNA'], ['Reactive species switch off every DNA glycosylase permanently'], { explanation: '2026 slide 17.' })),
    ask(mcq('c3-03', 'oxidised-ldl', 'How does oxidised LDL make foam cells?', 'Macrophages take it up avidly and fill with cholesteryl ester', ['It kills the macrophages, which then swell with fluid', 'It blocks the LDL receptors so cholesterol cannot leave', 'It dissolves existing plaques into foamy debris that cells then engulf'], { explanation: 'HB slide 32.' })),
    recall('r3-01', 'lipid-peroxidation', 'Describe lipid peroxidation and its consequences.', [
      'Initiation: a radical abstracts a hydrogen from a PUFA (LH + X· → L·).',
      'Propagation: L· + O₂ → LOO·; LOO· + LH → LOOH + L· — a chain reaction.',
      'Lipid peroxides accumulate and make membranes leaky to ions (Ca²⁺ influx, altered pH).',
      'Termination: radicals combine into non-radical products. End-products such as malondialdehyde are mutagenic.',
    ], hb([22, 23, 24, 25])),
  ],
  'free-radicals-and-oxygen-toxicity-4': [
    ask(match('c4-01', 'antioxidant-enzymes', 'Match each enzyme to what it removes.', [
      ['Superoxide dismutase', 'Superoxide'],
      ['Catalase', 'Hydrogen peroxide'],
      ['Glutathione peroxidase', 'H₂O₂ and lipid peroxides'],
    ], { explanation: 'HB slide 40.' })),
    learn('Defence in depth', ['Besides scavenging, the body controls radical formation, keeps iron and copper bound, quenches singlet oxygen with carotenoids, sacrifices molecules such as GSH and vitamin C, and keeps iron away from H₂O₂. The simplest defence of all is less exposure to oxygen.'], { sourceRefs: sg([26, 27, 28]) }),
    learn('Mineral cofactors', ['MnSOD in mitochondria, CuZnSOD in the cytoplasm, CuSOD outside cells; glutathione peroxidase is a selenoprotein. Low dietary Se, Cu, Mn or Zn weakens these defences.'], { sourceRefs: hb([40, 48]) }),
    ask(mcq('c4-05', 'antioxidant-network', 'In red cells, which pathway supplies the NADPH that keeps glutathione reduced?', 'The pentose phosphate pathway', ['Glycolysis, at glyceraldehyde 3-phosphate dehydrogenase', 'The Krebs cycle, at isocitrate dehydrogenase', 'β-Oxidation of fatty acids in the red cell'], { explanation: '2026 slides 3, 29: glucose 6-phosphate dehydrogenase (G6PD) makes the NADPH that glutathione reductase uses.' })),
    ask(mcq('c4-02', 'antioxidant-vitamins', 'Which antioxidant vitamin is water-soluble and helps regenerate vitamin E?', 'Ascorbic acid (vitamin C)', ['α-Tocopherol (vitamin E)', 'β-Carotene (provitamin A)', 'Calciferol (vitamin D)'], { explanation: 'HB slide 41.' })),
    ask(order('c4-04', 'chain-breaking', 'Order the antioxidant relay, from the lipid radical back to NAD(P)H.', ['Vitamin E neutralises the lipid peroxyl radical', 'Vitamin C regenerates vitamin E', 'Glutathione regenerates vitamin C', 'Enzymes regenerate glutathione using NAD(P)H'], { explanation: '2026 slides 22, 30.' })),
    ask(mcq('c4-03', 'antioxidant-action', 'Transferrin and caeruloplasmin act as antioxidants by…', 'Binding transition metals that would catalyse radical formation', ['Scavenging superoxide in the plasma', 'Breaking lipid peroxidation chains in membranes', 'Making glutathione in the red cells'], { explanation: 'HB slides 39, 43.' })),
    recall('r4-01', 'antioxidant-action', 'Describe the four ways antioxidants act, with an example of each.', [
      'Chain breaking: α-tocopherol traps radicals in the lipid phase.',
      'Reducing ROS concentration: glutathione.',
      'Scavenging initiating radicals: SOD removes superoxide in the aqueous phase.',
      'Chelating transition metals: transferrin, lactoferrin, ferritin (iron); caeruloplasmin, albumin (copper).',
    ], hb([39])),
  ],
  'free-radicals-and-oxygen-toxicity-5': [
    ask(mcq('c5-04', 'cause-or-consequence', 'In most diseases, according to the 2026 lecture, oxidative stress is…', 'A consequence of the disease', ['The single original cause of the disease process', 'Absent, because antioxidant levels always rise to match', 'Found in cancer only, and never in any other disease'], { explanation: '2026 slide 35: increased reactive species probably accompany tissue injury in most diseases, but are usually a consequence, not the cause.', skill: 'misconception' })),
    ask(mcq('c5-01', 'ros-cancer', 'At which stage do free radicals activate proto-oncogenes and inactivate tumour suppressor genes?', 'Initiation', ['Promotion', 'Progression', 'Metastasis'], { explanation: 'HB slide 59.' })),
    learn('p53 cuts both ways', ['After mild stress, normal p53 switches on antioxidant genes and lowers ROS, so mutations are prevented or repaired. After severe, irreparable damage it switches on pro-oxidant genes, raising ROS to kill the cell. Mutant p53 does neither, so mutations accumulate. Oxidation of its cysteines can inactivate p53.'], { sourceRefs: sg([46, 47]) }),
    learn('HIV', ['H₂O₂ crosses membranes and promotes viral gene expression; oxidative stress activates NF-κB, increasing HIV replication; ROS and cytokines feed each other.'], { sourceRefs: hb([54]) }),
    ask(mcq('c5-02', 'ros-transplant', 'Which drug improves myocardial contractility in cardiopulmonary bypass by blocking a radical source?', 'Allopurinol (xanthine oxidase inhibitor)', ['Deferoxamine (iron-chelating agent)', 'Methotrexate (folate antagonist)', 'Nitrofurantoin (urinary antibacterial)'], { explanation: 'HB slides 65, 67.', clinical: true })),
    ask(mcq('c5-03', 'ros-transplant', 'Which is an oxidative biomarker?', 'Malondialdehyde (MDA)', ['Catalase activity in the red cells', 'GSH/GSSG ratio', 'Superoxide dismutase'], { explanation: 'HB slide 64.' })),
    ask(mcq('c5-05', 'oxidative-biomarkers', 'Which is a biomarker of oxidative damage to proteins?', 'Carbonyl formation', ['Isoprostanes', 'Deoxyribose breakdown products', 'Cholesterol oxidation products'], { explanation: '2026 slide 53: isoprostanes and cholesterol oxidation products mark lipid damage; deoxyribose breakdown products mark DNA damage.' })),
    recall('r5-01', 'ros-hiv-pregnancy', 'Explain how oxidative stress may contribute to diabetic embryopathy.', [
      'Swings between maternal hyper- and hypoglycaemia change glucose supply to the fetus; ketone bodies and branched-chain amino acids alter embryonic nutrition.',
      'Later, a high glucose load speeds electron flow through the mitochondrial chain, increasing radical leakage in embryonic tissue.',
      'The radicals (with lipid peroxidation) cause malformations; keeping blood glucose normal is key to prevention.',
    ], hb([56, 57])),
  ],
  'free-radicals-and-oxygen-toxicity-6': [
    ask(mcq('c6-01', 'atherosclerosis-ros', 'Which of these readily oxidises LDL in the artery wall?', 'ONOOH (protonated peroxynitrite)', ['Superoxide, on its own', 'Hydrogen peroxide, on its own', 'Nitric oxide, on its own'], { explanation: '2026 slide 41: O₂·⁻, H₂O₂ and NO· cannot oxidise LDL directly; ONOOH readily does.' })),
    learn('From LDL to plaque', ['Endothelial dysfunction lets LDL into the wall, where it is oxidised. Oxidised LDL raises VCAM-1 and ICAM-1 and activates NF-κB, so monocytes come in, become macrophages and then foam cells, which release cytokines. Matrix metalloproteinases from activated phagocytes are implicated in plaque rupture and thrombosis.'], { sourceRefs: sg([40, 41, 42]) }),
    ask(order('c6-02', 'iri-mechanism', 'Order the events that make radicals in ischaemia–reperfusion.', ['During ischaemia, hypoxanthine builds up and xanthine oxidase forms', 'Reperfusion restores oxygen', 'Xanthine oxidase makes superoxide and H₂O₂', 'Released iron and copper turn them into hydroxyl radicals'], { explanation: '2026 slide 43.' })),
    ask(mcq('c6-03', 'obesity-diabetes-ros', 'Why are pancreatic β-cells particularly vulnerable to oxidative damage?', 'Low expression of antioxidant enzymes', ['They carry GLUT4 transporters on their surface', 'They make a great deal of insulin every day', 'They take up very little glucose from the blood'], { explanation: '2026 slide 50.' })),
    ask(mcq('c6-04', 'neurodegeneration-ros', 'Which inclusions form in Parkinson’s disease when misfolded proteins overwhelm the ubiquitin–proteasome system?', 'Lewy body-like inclusions of α-synuclein', ['Neurofibrillary tangles of the protein tau', 'Plaques of aggregated amyloid-β peptide', 'Glycogen granules within the dopamine neurons'], { explanation: '2026 slide 49: tau tangles and amyloid-β belong to Alzheimer’s disease.' })),
    ask(mcq('c6-05', 'ageing-theory', 'Who proposed in 1956 that ageing results from cumulative damage by free radicals?', 'Denham Harman', ['Henry Fenton', 'Fritz Haber', 'Joseph Weiss'], { explanation: '2026 slide 51.' })),
    recall('r6-01', 'iri-mechanism', 'Explain how ischaemia followed by reperfusion damages the heart.', [
      'During ischaemia ATP is broken down to hypoxanthine, and xanthine dehydrogenase is converted (by –SH oxidation or Ca²⁺-stimulated proteolysis) to xanthine oxidase.',
      'Anaerobic metabolism acidifies the cell; the Na⁺/H⁺ and Na⁺/Ca²⁺ exchangers then overload the cell and its mitochondria with Ca²⁺.',
      'On reperfusion xanthine oxidase uses the returning O₂ to make superoxide and H₂O₂; released iron and copper turn these into ·OH.',
      'ROS rise further, the mitochondrial permeability transition pore opens and cytochrome c is released, so cells die.',
    ], sg([43, 44])),
  ],
};

type ReadingExtras = { estimatedMinutes: number; xp: number; highYield: string[]; confusions: LessonConfusion[] };

export const readingExtras: Record<string, ReadingExtras> = {
  'free-radicals-and-oxygen-toxicity-1': {
    estimatedMinutes: 11,
    xp: 25,
    highYield: ['Free radical = unpaired electron.', 'ROS includes non-radicals (H₂O₂, HOCl); all oxygen radicals are ROS, not all ROS are radicals.', 'Mitochondrial complexes I and III are the major source.', 'Respiratory burst: 70–90% of O₂ → superoxide.'],
    confusions: [
      { confusion: 'All ROS are free radicals.', clarification: 'ROS also include non-radical oxygen derivatives such as H₂O₂ and HOCl (HB slide 6; 2026 slides 4, 7).' },
      { confusion: 'Free radicals are always harmful, so the aim is to remove them all.', clarification: 'At physiological levels they defend against microbes, signal (H₂O₂) and regulate vascular tone (NO·); antioxidants keep a balance (2026 slides 54, 56).' },
    ],
  },
  'free-radicals-and-oxygen-toxicity-2': {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Radicals form by gaining or losing one electron, or homolytic fission.', 'Fenton: H₂O₂ + Fe²⁺ → ·OH.', 'Haber–Weiss: O₂·⁻ + H₂O₂ → ·OH.', 'NO· + O₂·⁻ → ONOO⁻; ONOOH → ·OH + ·NO₂.'],
    confusions: [{ confusion: 'Hydrogen peroxide is the most damaging species.', clarification: 'It is not very reactive; its danger is as the source of the hydroxyl radical (HB slide 35).' }],
  },
  'free-radicals-and-oxygen-toxicity-3': {
    estimatedMinutes: 14,
    xp: 25,
    highYield: ['PUFAs are most vulnerable; lipids are hit earliest.', 'Initiation → propagation → termination.', 'Guanine is the most oxidisable base: 8-hydroxyguanine is mutagenic.', 'Methionine → methionine sulphoxide (reversible).'],
    confusions: [{ confusion: 'Proteins are more susceptible to radicals than membrane lipids.', clarification: 'Proteins and nucleic acids are less susceptible than PUFAs (HB slide 13); lipids are affected earliest (2026 slide 33).' }],
  },
  'free-radicals-and-oxygen-toxicity-4': {
    estimatedMinutes: 16,
    xp: 25,
    highYield: ['SOD → H₂O₂; catalase and GPx remove it.', 'GPx is a selenoprotein.', 'Vitamin E → vitamin C → glutathione → NAD(P)H relay.', 'G6PD supplies the NADPH that keeps glutathione reduced.'],
    confusions: [{ confusion: 'SOD turns superoxide into water.', clarification: 'SOD makes H₂O₂; catalase and glutathione peroxidase then remove it (HB slides 40, 47).' }],
  },
  'free-radicals-and-oxygen-toxicity-5': {
    estimatedMinutes: 15,
    xp: 25,
    highYield: ['In most diseases oxidative stress is a consequence, not the cause.', 'Radicals act at initiation, promotion and progression.', 'p53: antioxidant after mild stress, pro-oxidant after severe damage.', 'Allopurinol blocks xanthine oxidase in reperfusion.'],
    confusions: [
      { confusion: 'All pregnant women need antioxidant supplements.', clarification: 'Antioxidant activity rises naturally; there is no evidence supplements are needed in normal pregnancy (HB slide 51).' },
      { confusion: 'p53 only ever lowers ROS.', clarification: 'After severe or extended stress it switches on pro-oxidant genes, raising ROS to eliminate damaged cells (2026 slide 47).' },
    ],
  },
  'free-radicals-and-oxygen-toxicity-6': {
    estimatedMinutes: 13,
    xp: 25,
    highYield: ['ONOOH, not O₂·⁻, H₂O₂ or NO· alone, oxidises LDL directly.', 'IRI: hypoxanthine + xanthine oxidase + returning O₂ → O₂·⁻, H₂O₂, then ·OH.', 'β-cells have low antioxidant enzymes.', 'Harman (1956): the free radical theory of ageing.'],
    confusions: [{ confusion: 'All the damage of a heart attack happens while the artery is blocked.', clarification: 'Restoring blood flow adds injury of its own: returning O₂ lets xanthine oxidase and damaged mitochondria make a burst of reactive species (2026 slides 43–44).' }],
  },
};
