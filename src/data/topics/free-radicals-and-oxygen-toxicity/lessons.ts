// Biochemistry → Free Radicals and Oxygen Toxicity — the six lessons
// (reading layer). Sources: the Human Biology 2021 deck (hb), Prof Fay's
// deck (fy) and the 2026 deck (sg, added 2026-11-10). References:
// "HB slide 22", "Fay slide 13", "2026 slide 8".
//
// Section order matters: teaching (data/teaching/), textbook pages and notes
// are keyed by section index. When the 2026 deck was added, new sections were
// inserted and those files renumbered; the section-question ids (sL-S-n) keep
// their original numbers.
import type { LessonDraft } from '@/data/topics/build';
import { fy, hb, sg, type ConceptId } from '@/data/topics/free-radicals-and-oxygen-toxicity/sources';
import { interactive, readingExtras } from '@/data/topics/free-radicals-and-oxygen-toxicity/interactive';

type Draft = LessonDraft<ConceptId>;

const lesson1: Draft = {
  id: 'free-radicals-and-oxygen-toxicity-1',
  title: 'Free Radicals and Where They Come From',
  description: 'What a free radical is, the language of reactive species, ROS and oxidative stress, the internal and external sources of free radicals, and why the body also needs them.',
  xp: 25,
  sourceRefs: [...hb([4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16]), ...fy([3, 4, 5, 6, 7, 8]), ...sg([2, 4, 5, 6, 7, 10, 11, 12, 33, 54, 56, 60])],
  objectives: [
    'Define a free radical and explain why it starts chain reactions',
    'Define oxygen toxicity, ROS, oxidative stress and oxidative damage',
    'Tell radical from non-radical reactive species, and name the families of reactive species',
    'List cellular, internal and external sources of free radicals',
    'Explain how ischaemia–reperfusion and the respiratory burst produce radicals',
    'Give the useful roles of reactive species in the body',
  ],
  chunks: [
    {
      title: 'Why free radicals matter',
      kind: 'overview',
      paragraphs: [
        'The body makes free radicals all the time, from its own processes, from toxins, radiation or poor digestion, and from disease. Normally it copes, but if antioxidants are lacking or production is excessive, cells are damaged. Some researchers see free radical damage behind almost every disease: ageing, cancer, impaired immunity, cardiovascular disease, arthritis, Alzheimer’s and Parkinson’s disease (HB slide 4; Fay slide 3).',
        'Disease itself makes free radicals: infection, inflammation, ischaemia–reperfusion, diabetes, cancer and many other diseases are associated with oxidative stress, and toxins or radiation add to the excess (2026 slide 6).',
      ],
      notes: [{ kind: 'annotation', text: 'Speaker notes on HB slide 4 (inadequate antioxidants at the core of disease; life arising from radical reactions) were added to the deck and are not quizzed.' }],
      sourceRefs: [...hb([4]), ...fy([3]), ...sg([6])],
    },
    {
      title: 'What a free radical is',
      kind: 'definitions',
      paragraphs: [
        'A free radical is any species capable of independent existence with one or more unpaired electrons — a highly reactive entity with a single unpaired electron in its outer orbit. It is unstable and tries to become stable by accepting or donating an electron (HB slides 5–6; 2026 slide 4).',
        'Two radicals that meet neutralise each other. But a radical that reacts with a stable molecule makes a new radical, so radicals drive autocatalytic chain reactions that propagate damage (HB slide 5; Fay slide 7).',
        'The 2026 lecture speaks of reactive species (RS) in general: reactive oxygen, nitrogen, chlorine, bromine, iron and sulphur species. Radical RS carry unpaired electrons and start oxidative chain reactions directly; non-radical RS have none but add to oxidative stress indirectly or by generating radicals. So all oxygen radicals are ROS, but not all ROS are oxygen radicals: H₂O₂ and peroxynitrite are reactive species that are not free radicals (2026 slides 4, 7).',
      ],
      terms: [
        { term: 'Oxygen toxicity', meaning: 'The overall toxic effect of oxidative free radical species at cellular level (HB). The 2026 deck: cell and tissue injury caused by excess oxygen, through oxygen radicals that overwhelm the antioxidant defences.' },
        { term: 'Reactive oxygen species (ROS)', meaning: 'A collective term for oxygen-centred radicals and some non-radical oxygen derivatives such as H₂O₂ and HOCl (and peroxynitrite from NO). The 2026 deck: species derived from O₂ that are more reactive than O₂ itself — oxidising agents, or easily turned into radicals.' },
        { term: 'Oxidative stress', meaning: 'The overall effect of oxidative species in causing tissue injury or disease (HB). The 2026 deck: an imbalance between ROS generation and their detoxification, which impairs the repair of damage.' },
        { term: 'Oxidative damage', meaning: 'The damage to biomolecules caused by reactive species attacking the constituents of living organisms (2026 deck).' },
      ],
      keyPoints: [
        'ROS have very short half-lives; they arise normally from oxygen metabolism and have roles in cell signalling, but rise sharply under environmental stress (HB slide 11).',
        'Examples of free radicals in the 2026 deck: superoxide (O₂·⁻) and the hydroxyl radical (·OH) among the reactive oxygen species; nitric oxide (NO·) and nitrogen dioxide (NO₂·) among the reactive nitrogen species (slide 11).',
      ],
      sourceRefs: [...hb([5, 6, 8, 11, 12]), ...fy([4, 7]), ...sg([4, 5, 7, 11])],
    },
    {
      title: 'Sources',
      kind: 'classification',
      paragraphs: [
        'Potential cellular sources include the mitochondria, peroxisomes, endoplasmic reticulum, cytoplasm, lysosomes, nucleus and DNA (HB slide 7).',
        'The 2026 deck maps them in one cell (slide 10): the respiratory chain and oxidases in the mitochondrion; cytochrome P450, cytochrome b5 and Ero1p in the endoplasmic reticulum; oxidases in the peroxisome; xanthine oxidase, catecholamines and flavins in the cytoplasm; cyclooxygenase, lipoxygenase and NADPH oxidase (Nox4) at the lipid bilayer; an electron transport system in the lysosome; and Fe²⁺ and Cu⁺ driving the Fenton reaction.',
      ],
      table: {
        columns: ['Internal', 'External'],
        rows: [
          ['Mitochondria (oxidation of food)', 'Cigarette smoke'],
          ['Phagocytes', 'Pollutants, mineral dust'],
          ['Xanthine oxidase', 'Radiation (splits water), UV light'],
          ['Iron and other transition metals', 'Drugs, pesticides, anaesthetics, solvents (e.g. nitrofurantoin, adriamycin, methotrexate)'],
          ['Arachidonate pathways, peroxisomes', 'Ozone'],
          ['Exercise, inflammation, ischaemia–reperfusion', 'Stress, fever, glucocorticoids, hyperthyroidism'],
        ],
      },
      keyPoints: [
        'Normal respiration gives superoxide, H₂O₂, HOCl and NO; free transition metals (Fe²⁺, Cu⁺) behave as radicals (HB slide 14).',
        'Radicals also form by autoxidation (catecholamines, haemoglobin, myoglobin, reduced cytochrome c, thiols) and enzymatic oxidation (xanthine oxidase, prostaglandin synthase, lipoxygenase, aldehyde oxidase) (HB slide 16).',
        'The 2026 deck groups them simply: endogenous — mitochondrial respiration, enzymatic reactions and immune-cell activation; exogenous — UV radiation, ionising radiation, tobacco smoke, pollution, and chemicals and drugs (slide 11).',
        'The mitochondrial electron transport chain is the major source of ROS in aerobic cells: during oxidative phosphorylation electrons leak from complexes I and III and react with oxygen to form superoxide (2026 slide 60).',
        'Enzymes: xanthine oxidase makes superoxide and hydrogen peroxide; the cytochrome P450 system makes free radicals during drug metabolism and detoxification; nitric oxide synthase makes NO, which can react to form other reactive nitrogen species (2026 slide 60).',
        'The endoplasmic reticulum and peroxisomes make ROS as part of normal function, usually in smaller amounts; fatty acid oxidation in peroxisomes produces hydrogen peroxide (2026 slide 60).',
      ],
      sourceRefs: [...hb([7, 9, 14, 16]), ...fy([5, 6, 8]), ...sg([10, 11, 12, 60])],
    },
    {
      title: 'Ischaemia–reperfusion and the respiratory burst',
      kind: 'mechanism',
      paragraphs: [
        'During ischaemia xanthine and xanthine oxidase rise greatly, while the antioxidants superoxide dismutase and glutathione peroxidase are lost — so radicals flood the tissue when blood returns (HB slide 10).',
        'In the respiratory burst, phagocytes consume large amounts of oxygen during phagocytosis; 70–90% of it becomes superoxide (HB slide 16).',
        'Activated neutrophils and macrophages make ROS to kill pathogens: NADPH oxidase produces superoxide, which goes on to hydrogen peroxide and then hypochlorous acid. This is beneficial in infection but harmful if it is excessive or chronic (2026 slide 60). The 2026 lecture treats ischaemia–reperfusion injury as a disease of its own; its full mechanism is in Lesson 6.',
      ],
      sourceRefs: [...hb([10, 16]), ...sg([60])],
    },
    {
      title: 'Not all bad: the useful side of reactive species',
      kind: 'overview',
      paragraphs: [
        'Free radicals, especially ROS and reactive nitrogen species, are not harmful by nature. At physiological levels they do useful work, which is the subject of redox biology (2026 slide 54):',
      ],
      steps: [
        { label: 'Host defence', detail: 'Neutrophils use superoxide and HOCl in the respiratory burst to kill microbes.' },
        { label: 'Cell signalling and redox regulation', detail: 'Hydrogen peroxide acts as a second messenger.' },
        { label: 'Vascular tone', detail: 'Nitric oxide (NO·) regulates the tone of blood vessels.' },
      ],
      keyPoints: [
        'The effect depends on the amount: low concentrations of H₂O₂ activate MAPK signalling and promote cell survival, whereas high concentrations induce apoptosis — ROS have concentration-dependent effects (2026 slide 33).',
        'ROS arise normally from oxygen metabolism and have roles in cell signalling (HB slide 11).',
        'So antioxidants help maintain redox balance; they do not eliminate ROS completely (2026 slide 56).',
      ],
      sourceRefs: [...hb([11]), ...sg([33, 54, 56])],
    },
  ],
  summary: [
    'Free radical: one or more unpaired electrons; unstable; starts chain reactions with non-radicals.',
    'ROS: oxygen radicals plus non-radicals (H₂O₂, HOCl). All oxygen radicals are ROS; not all ROS are radicals. Reactive species also include nitrogen, chlorine, bromine, iron and sulphur species.',
    'Oxidative stress: tissue injury from oxidative species; an imbalance between ROS made and removed.',
    'Internal: mitochondria (complexes I and III — the major source), phagocytes (NADPH oxidase), xanthine oxidase, cytochrome P450, NOS, transition metals, inflammation, ischaemia–reperfusion. External: smoke, radiation, UV, drugs, ozone.',
    'Ischaemia: ↑xanthine oxidase, ↓SOD and glutathione peroxidase. Respiratory burst: 70–90% of O₂ → superoxide.',
    'Useful roles: host defence, H₂O₂ as a second messenger, NO and vascular tone — the effect depends on the concentration.',
  ],
};

const lesson2: Draft = {
  id: 'free-radicals-and-oxygen-toxicity-2',
  title: 'How Free Radicals Form and React, and the Major ROS',
  description: 'How radicals form, the ways they react with each other and with non-radicals, the biologically important species including nitric oxide and peroxynitrite, and the Fenton and Haber–Weiss reactions.',
  xp: 25,
  sourceRefs: [...hb([15, 21, 34, 35, 36, 37, 69]), ...fy([8, 9, 10]), ...sg([7, 8, 9, 11, 13, 14, 41, 59])],
  objectives: [
    'Explain how radicals form by losing or gaining one electron, and by homolytic fission',
    'Explain what happens when a radical meets a radical or a non-radical',
    'Describe the ways a radical can react with a non-radical',
    'Name the biologically significant free radicals and ROS',
    'Describe superoxide, hydrogen peroxide, singlet oxygen, the hydroxyl and peroxyl radicals, nitric oxide and peroxynitrite',
    'Write the Fenton and Haber–Weiss reactions and explain the role of transition metals',
    'Describe the four-electron reduction of oxygen',
  ],
  chunks: [
    {
      title: 'How radicals form',
      kind: 'mechanism',
      paragraphs: [
        'A radical forms when a non-radical loses a single electron, leaving behind an unpaired electron and a positive charge (X − e⁻ → X·⁺, a radical cation), or gains a single electron (Y + e⁻ → Y·⁻, a radical anion) (2026 slide 8).',
        'Radicals also form by homolytic fission, when a covalent bond breaks so that each partner keeps one of its two electrons. Radiolysis of water by ionising radiation works this way: one electron goes to the oxygen and one to the hydrogen, giving a hydrogen radical (H·: one proton, one electron, no charge) and a hydroxyl radical (·OH: nine protons, nine electrons — four pairs and one unpaired — no charge) (2026 slide 8).',
      ],
      terms: [
        { term: 'Radical cation', meaning: 'Formed when a non-radical loses one electron: it has an unpaired electron and a positive charge.' },
        { term: 'Radical anion', meaning: 'Formed when a molecule gains one electron; superoxide is oxygen that has gained one.' },
        { term: 'Homolytic fission', meaning: 'A covalent bond breaks evenly, each atom keeping one electron, so two radicals form.' },
      ],
      sourceRefs: sg([8]),
    },
    {
      title: 'How radicals react',
      kind: 'mechanism',
      paragraphs: [
        'Reactivity depends on the radical and what it meets. Two radicals can pair their electrons into a covalent bond — superoxide and nitric oxide give peroxynitrite (ONOO⁻). Most superoxide in the body undergoes dismutation, non-enzymatically or by SOD, to hydrogen peroxide and oxygen (HB slide 15; Fay slide 9; 2026 slides 7, 59).',
        'Most molecules are not radicals, so a radical usually meets a non-radical — starting a chain reaction that makes new radicals. Attack on membranes or lipoproteins starts lipid peroxidation (e.g. atherosclerosis); attack on DNA causes mutation (HB slide 21; Fay slide 10).',
        'When a free radical reacts with a non-radical, a new radical results. The 2026 lecture gives the ways this can happen (slides 13–14):',
      ],
      steps: [
        { label: 'Adding on', detail: 'The radical adds on to another molecule: X· + Y → [X–Y]·. For example, ·OH adds to position 8 of the guanine ring in DNA; the first product is a radical.' },
        { label: 'Reducing agent', detail: 'The radical gives its electron away: X· + Y → X⁺ + Y·⁻. The recipient then has an unpaired electron.' },
        { label: 'Oxidising agent', detail: 'The radical takes a single electron from a non-radical. The hydroxyl radical oxidises the sedative drug promethazine (PR) to a radical cation: PR + ·OH → PR·⁺ + OH⁻.' },
        { label: 'Hydrogen abstraction', detail: 'The radical removes a hydrogen atom from a C–H (or N–H) bond. H· has only one electron, so an unpaired electron is left on the carbon (or nitrogen): ·OH takes H· from a fatty-acid side-chain, forming water.' },
      ],
      notes: [{ kind: 'clarified', text: 'HB slide 15 and Fay slide 9 write the example as “O₂·⁻ + NO₂· → ONOO⁻ (peroxynitrite)”. The 2026 deck (slides 7, 59) and the reference textbook (Halliwell and Gutteridge: NO· + O₂·⁻ → ONOO⁻) give nitric oxide, not nitrogen dioxide, as superoxide’s partner.' }],
      sourceRefs: [...hb([15, 21]), ...fy([9, 10]), ...sg([7, 13, 14, 59])],
    },
    {
      title: 'Biologically significant species',
      kind: 'classification',
      table: {
        columns: ['Species', 'Name'],
        rows: [
          ['O₂·⁻', 'Superoxide radical'],
          ['·OH', 'Hydroxyl radical'],
          ['ROO·', 'Peroxyl radical'],
          ['H₂O₂', 'Hydrogen peroxide'],
          ['¹O₂', 'Singlet oxygen'],
          ['NO·', 'Nitric oxide'],
          ['ONOO⁻', 'Peroxynitrite'],
          ['RS·', 'Thiyl radical'],
          ['HOCl', 'Hypochlorous acid'],
        ],
      },
      keyPoints: [
        'Other examples: trichloromethyl (CCl₃·) and alkoxyl (RO·) radicals (Fay slide 8).',
        'Peroxynitrite and H₂O₂ are reactive species but not free radicals (2026 slide 7).',
      ],
      sourceRefs: [...hb([34]), ...fy([8]), ...sg([7, 11])],
    },
    {
      title: 'The major ROS',
      kind: 'definitions',
      terms: [
        { term: 'Superoxide (O₂·⁻)', meaning: 'O₂ reduced by one electron. Its main source is electron leakage from the mitochondrial electron transport chain. Not very damaging itself, but central because other species form from it. It also forms by autoxidation and non-enzymatic electron transfer, and with the help of enzymes such as cyclooxygenase, lipoxygenase, xanthine oxidase and NADPH oxidase.' },
        { term: 'Hydrogen peroxide (H₂O₂)', meaning: '2O₂·⁻ + 2H⁺ → H₂O₂ + O₂, catalysed by SOD. Not a radical and not very reactive, but the main source of hydroxyl radicals in the presence of transition metals. It readily diffuses across membranes and is harmful to cells even at 10 µM.' },
        { term: 'Singlet oxygen (¹O₂)', meaning: 'Formed by energy input (radiation), peroxidases, lipoxygenases or the respiratory burst; involved in photo-oxygenation, red cell damage in G6PD deficiency, photoageing, lens ageing and carcinogenesis.' },
        { term: 'Hydroxyl radical (·OH)', meaning: 'Extremely reactive; attacks most biomolecules — carbohydrates, lipids and proteins — and can cause serious harm. Made by the Fenton reaction, the Haber–Weiss reaction and the decomposition of peroxynitrite.' },
        { term: 'Peroxyl radical (ROO·)', meaning: 'Formed when radicals react with lipids and nucleobases; it starts fatty-acid peroxidation and may promote tumour growth. Protonated superoxide, the perhydroxyl radical (HOO·), is the simplest peroxyl radical: about 0.3% of the superoxide in the cytoplasm of a typical cell is in this form.' },
      ],
      notes: [{ kind: 'clarified', text: '2026 slide 59 says the hydroxyl radical “reacts strongly with inorganic molecules such as carbohydrates, lipids, and proteins”. Carbohydrates, lipids and proteins are organic molecules; the point is that ·OH attacks the cell’s biomolecules.' }],
      sourceRefs: [...hb([35, 36, 37]), ...sg([59])],
    },
    {
      title: 'Making the hydroxyl radical',
      kind: 'pathway',
      steps: [
        { label: 'Fenton reaction', detail: 'H₂O₂ + Fe²⁺ → ·OH + OH⁻ + Fe³⁺. Copper does the same: Cu⁺ + H₂O₂ → Cu²⁺ + ·OH + OH⁻.' },
        { label: 'Haber–Weiss reaction', detail: 'O₂·⁻ + H₂O₂ → O₂ + ·OH + OH⁻, with a metal catalyst.' },
      ],
      paragraphs: [
        'Transition metals (Fe²⁺, Cu⁺) act as redox catalysts that generate true free radicals from non-radical precursors. The reduced metal (Mⁿ) makes ·OH from H₂O₂ in the Fenton reaction and is itself oxidised (Mⁿ⁺¹); in the Haber–Weiss reaction superoxide reduces it back, giving O₂, so the metal keeps cycling (2026 slide 9).',
        'Each oxygen molecule we breathe is reduced to water by four electrons added one at a time: O₂ → superoxide → hydrogen peroxide → hydroxyl radical → water. So where there is life there are oxidants (HB slides 37, 69).',
      ],
      sourceRefs: [...hb([37, 69]), ...sg([9, 59])],
    },
    {
      title: 'Nitric oxide and peroxynitrite',
      kind: 'definitions',
      paragraphs: [
        'Nitric oxide (NO·) is made by nitric oxide synthase (NOS), which converts L-arginine into L-citrulline. There are three isoforms: neuronal (nNOS), endothelial (eNOS) and inducible (iNOS). Soluble in both water and lipid, NO· diffuses easily through the cytoplasm and plasma membrane. It controls enzyme activity and takes part in redox regulation by nitrosylating proteins, and it stimulates protein kinases and guanylate cyclase in blood vessels (2026 slide 59).',
        'Making NO· and superoxide together is dangerous: they react at once to form peroxynitrite (ONOO⁻). Peroxynitrite is lipid-soluble and about as reactive as hypochlorous acid. With a proton it becomes ONOOH (ONOO⁻ + H⁺ ⇌ ONOOH), which splits into two radicals: ONOOH → ·OH + ·NO₂. Peroxynitrite also forms highly reactive, toxic nitroso-peroxo-carboxylates (ONOOCO₂⁻) (2026 slides 7, 59).',
      ],
      keyPoints: ['In atherosclerosis ONOOH readily oxidises LDL, which superoxide, H₂O₂ and NO· cannot do directly (2026 slide 41; Lesson 6).'],
      sourceRefs: sg([7, 11, 41, 59]),
    },
  ],
  summary: [
    'Radicals form by losing or gaining one electron, or by homolytic fission (radiolysis of water → H· + ·OH).',
    'Radical + radical → covalent bond (O₂·⁻ + NO· → ONOO⁻). Radical + non-radical → a new radical (adding on, giving or taking an electron, abstracting H·) and chain reactions.',
    'Significant species: O₂·⁻, ·OH, ROO·, H₂O₂, ¹O₂, NO·, ONOO⁻, RS·, HOCl.',
    'Superoxide: from mitochondrial leakage; parent of the others. H₂O₂: not a radical; crosses membranes; source of ·OH with metals.',
    'Fenton: H₂O₂ + Fe²⁺ (or Cu⁺) → ·OH. Haber–Weiss: O₂·⁻ + H₂O₂ → ·OH. The metals are redox catalysts.',
    'O₂ + 4 e⁻ stepwise → O₂·⁻ → H₂O₂ → ·OH → H₂O.',
    'NO· + O₂·⁻ → ONOO⁻; ONOOH → ·OH + ·NO₂.',
  ],
};

const lesson3: Draft = {
  id: 'free-radicals-and-oxygen-toxicity-3',
  title: 'How Free Radicals Damage Cells',
  description: 'Lipid peroxidation, protein damage, DNA damage and what becomes of it, ROS as signals through NF-κB, and why oxidised LDL is atherogenic.',
  xp: 25,
  sourceRefs: [...hb([13, 17, 18, 19, 22, 23, 24, 25, 26, 27, 29, 32, 33]), ...fy([11, 12, 13, 14, 15]), ...sg([13, 16, 17, 18, 19, 20, 21, 23, 24, 33, 36, 37, 38, 41])],
  objectives: [
    'List the mechanisms of free radical toxicity',
    'Describe initiation, propagation and termination of lipid peroxidation',
    'Explain why PUFAs are vulnerable and what lipid peroxides do to membranes',
    'Describe how reactive species damage proteins, and why thiols and methionine are targets',
    'Describe oxidative damage to DNA, why its repair can fail, and the outcomes of base damage',
    'List the ways oxidised LDL promotes atherosclerosis',
  ],
  chunks: [
    {
      title: 'Mechanisms of toxicity',
      kind: 'classification',
      paragraphs: ['Radicals — also called oxidants — injure cell and organelle membranes by oxidation (HB slide 17). The mechanisms (HB slide 13; Fay slide 11):'],
      steps: [
        { label: 'Lipid peroxidation', detail: 'Membrane PUFAs are readily attacked.' },
        { label: 'Protein damage', detail: 'Cross-linking and fragmentation; oxidation of cysteine and methionine; altered enzymes and receptors. Proteins and nucleic acids are less susceptible than PUFAs.' },
        { label: 'DNA damage', detail: 'Strand breaks and mutations.' },
        { label: 'Covalent binding of xenobiotics' },
        { label: 'Altered calcium homeostasis' },
      ],
      keyPoints: [
        'DNA injury may be lethal (cell death, removal by phagocytes) or sublethal (increased permeability, toxicity, mutation) (HB slide 18).',
        'ROS also act as signals, for example through NF-κB — transcription factors for immunity, inflammation, apoptosis and proliferation — which may link them to disease (HB slide 19).',
        'Lipids are the biomolecules affected earliest during oxidative stress (2026 slide 33).',
        'In disease (2026 slide 36): oxidised amino acid residues change protein structure, causing fragmentation and cross-linking, loss of function and aggregates; lipid peroxidation disrupts the bilayer, costs the cell its integrity and makes reactive aldehydes that damage other molecules; DNA attack gives base changes (e.g. 8-hydroxydeoxyguanosine), strand breaks and mutations that can lead to cancer.',
      ],
      sourceRefs: [...hb([13, 17, 18, 19]), ...fy([11]), ...sg([33, 36])],
    },
    {
      title: 'Lipid peroxidation',
      kind: 'pathway',
      paragraphs: [
        'Lipid peroxidation is the oxidative degradation of lipids with C=C double bonds: radicals “steal” electrons from membrane lipids. PUFAs are most affected, because the methylene (–CH₂–) groups between their double bonds have especially reactive hydrogens — a double bond weakens the C–H bonds next to it (HB slides 22, 29).',
        'In the 2026 lecture (slides 18–21) the targets are membrane lipids and proteins. Peroxidation is initiated by addition of a reactive species to a lipid or, more usually, by abstraction of a hydrogen atom from a methylene group, which leaves a carbon-centred radical. Removal of H· can happen at several places in the chain. The carbon radical can stabilise itself by molecular rearrangement into a conjugated diene, and it reacts with O₂ to form a peroxyl (peroxy) radical: R· + O₂ → ROO· (also written RO₂·). The peroxyl radical takes H· from an adjacent fatty-acid side-chain, giving a lipid hydroperoxide (ROOH) and a new carbon radical that reacts with O₂ in turn, so the chain continues.',
      ],
      steps: [
        { label: 'Initiation', detail: 'A radical abstracts a hydrogen from a PUFA side-chain: LH + X· → L· + XH, leaving an unpaired electron on carbon. Inhibited by tocopherols, mannitol and formate.' },
        { label: 'Propagation', detail: 'The carbon radical reacts fast with O₂: L· + O₂ → LOO· (peroxyl). The peroxyl radical attacks another side-chain: LOO· + LH → L· + LOOH.' },
        { label: 'Accumulation', detail: 'Lipid peroxides build up and make the membrane leaky to ions — Ca²⁺ influx and altered pH.' },
        { label: 'Termination', detail: 'Radicals combine into non-radical products: LOO· + LOO·, L· + LOO·, L· + L· (e.g. stable dimers).' },
      ],
      keyPoints: [
        'Lipid peroxidation is an indicator of oxidative stress. Phototherapy may cause haemolysis this way, and end-products such as malondialdehyde form DNA adducts with deoxyadenosine and deoxyguanosine — mutagenic and carcinogenic (HB slide 24).',
        'Peroxyl radicals have other reactions too: they oxidise cholesterol, attack membrane proteins, and two peroxyl radicals can react together to form singlet oxygen (¹O₂) — the Russell mechanism. Singlet oxygen can also react directly with the lipid to give the hydroperoxide (2026 slide 18).',
      ],
      notes: [
        { kind: 'clarified', text: 'Slide 21 runs two ideas together: “The RO₂· combines with the H· that it abstracts to give a lipid hydroperoxide (ROOH), which result when a peroxyl radical attacks another double bond in the same fatty-acid residue.” In the reference textbook (Halliwell and Gutteridge, the deck’s own source), the hydroperoxide comes from the H· taken from a neighbouring chain; attack on another double bond of the same fatty acid gives cyclic peroxides instead.' },
        { kind: 'clarified', text: 'On 2026 slide 18, “O₂H” under the last structure is the lipid’s hydroperoxide group (–OOH), which is not a free radical. The hydroperoxyl radical noted beside it (HO₂·) is protonated superoxide (slide 59).' },
      ],
      sourceRefs: [...hb([17, 22, 23, 24, 25, 29]), ...fy([12, 13]), ...sg([18, 19, 20, 21])],
    },
    {
      title: 'Protein damage',
      kind: 'mechanism',
      paragraphs: ['Reactive species damage proteins in several ways (2026 slides 23–24):'],
      steps: [
        { label: 'Thiol oxidation', detail: 'Thiol (–SH) groups, as in cysteine, are easily oxidised by reactive species.' },
        { label: 'Methionine oxidation', detail: 'The thioether linkage of methionine (–CH₂–CH₂–S–CH₃) is readily oxidised by ·OH, ¹O₂, HOCl, HOBr and ONOOH to methionine sulphoxide; methionine sulphoxide reductases can reverse it.' },
        { label: 'Methionine as a sink', detail: 'Methionine residues on the surface of proteins can act as “sinks” that soak up reactive species.' },
        { label: 'Secondary damage', detail: 'Secondary products of lipid peroxidation (MDA and HNE) and glycation/glycoxidation also damage proteins.' },
      ],
      keyPoints: [
        'Damaged proteins work poorly: receptors, antibodies, signal transduction proteins, enzymes, and structural and transport proteins can all be impaired (2026 slide 24).',
        'Increased levels of oxidative protein damage in vivo have been associated with multiple diseases, including cancer (2026 slide 23).',
      ],
      sourceRefs: sg([23, 24, 36]),
    },
    {
      title: 'DNA damage',
      kind: 'mechanism',
      paragraphs: [
        'Hydroxyl radicals generated near DNA attack purine and pyrimidine bases. Guanine becomes 8-hydroxyguanine, a mutagenic lesion, or ring-opened guanine, which halts DNA replication (Fay slide 14; HB slide 26).',
        'A study of estradiol catechols found that copper-dependent oxidation generates ROS that damage DNA; the damage seemed to come from localised singlet oxygen or a bound reactive species rather than free hydroxyl radicals (HB slides 26–27; Fay slide 15).',
        'The 2026 lecture: reactive species damage DNA directly, by strand breakage and by chemical modification of the bases or of 2-deoxyribose. Guanine is the base most susceptible to oxidation, giving 8-hydroxydeoxyguanosine (8-OHdG) — ·OH adds to position 8 of its ring. The biological significance depends on the extent of the damage, where it is in the genome and how fast it can be repaired (2026 slides 13, 16).',
      ],
      sourceRefs: [...hb([26, 27]), ...fy([14, 15]), ...sg([13, 16])],
    },
    {
      title: 'What happens to damaged DNA',
      kind: 'mechanism',
      paragraphs: [
        'Repair itself can fail: reactive species damage the polymerases and repair enzymes; damaged polymerases replicate DNA inaccurately; and a rise in intracellular free Ca²⁺ activates nucleases that cleave DNA (2026 slide 17).',
        'The 2026 figure (slide 37) follows one chemically altered base — a cytosine deaminated to uracil, giving a U·G mismatch — down four routes:',
      ],
      steps: [
        { label: '1. Accurate repair', detail: 'Excision repair or mismatch repair restores the original C·G pair.' },
        { label: '2. Copied as it is', detail: 'Replication reads the uracil as thymine, so a daughter cell gets an A·T pair in place of G·C (a transition at C/G).' },
        { label: '3. Base removed', detail: 'Uracil DNA glycosylase (UNG) removes the uracil, leaving a gap in the base. Replication across it can insert any base (transitions or transversions at C/G); if apurinic/apyrimidinic endonuclease 1 (APE1) cuts there and there are nicks on both strands, a double-strand break (DSB) results.' },
        { label: '4. Mismatch repair gone wrong', detail: 'MSH2–MSH6 (MutS homologues 2 and 6) and exonuclease I remove a stretch around the mismatch; error-prone polymerases filling it can add mutations at C/G and A/T, and a gap opposite a gap or nick gives a DSB.' },
      ],
      keyPoints: [
        'Types of DNA damage the repair machinery meets (2026 slide 38): point mutations (replication errors, deamination), microsatellite variation (polymerase slippage), depurination (heat), alkylation (alkylating agents), thymine dimers (UV irradiation) and strand breaks (X-irradiation).',
        'Double-strand breaks are repaired by non-homologous end joining (NHEJ) or homology-directed repair (HDR) (2026 slide 38).',
      ],
      sourceRefs: sg([17, 37, 38]),
    },
    {
      title: 'Oxidised LDL and atherosclerosis',
      kind: 'clinical',
      steps: [
        { label: 'Foam cells', detail: 'Taken up avidly by macrophages, enriching them in cholesteryl ester.' },
        { label: 'Attracts and traps cells', detail: 'Chemotactic for monocytes and T cells; inhibits macrophage motility.' },
        { label: 'Cytotoxic', detail: 'And makes LDL aggregate, increasing uptake further.' },
        { label: 'Alters the artery', detail: 'Induces MCP-1, CSF, IL-1 and endothelial adhesion molecules (the 2026 deck names VCAM-1 and ICAM-1, which recruit monocytes); tissue factor (coagulation); impairs coronary vasomotor function.' },
        { label: 'Switches on genes', detail: 'Activates NF-κB and other redox-sensitive transcription factors (2026 slide 41).' },
        { label: 'Immunogenic', detail: 'Elicits autoantibodies and reactive T cells.' },
      ],
      keyPoints: ['Activated monocytes and macrophages make O₂·⁻, H₂O₂ and possibly NO·, but none of these can oxidise LDL directly; ONOOH readily does (2026 slide 41). The whole disease process is in Lesson 6.'],
      sourceRefs: [...hb([32, 33]), ...sg([41])],
    },
  ],
  summary: [
    'Toxicity: lipid peroxidation, protein damage, DNA damage, xenobiotic binding, altered Ca²⁺. Lipids are affected earliest.',
    'Lipid peroxidation: initiation (H abstraction) → propagation (L· + O₂ → LOO·; LOO· + LH → LOOH + L·) → accumulation (leaky membranes) → termination. Conjugated dienes form; two peroxyl radicals can make ¹O₂ (Russell mechanism).',
    'Malondialdehyde forms DNA adducts. Tocopherols inhibit initiation.',
    'Proteins: thiols and methionine (→ methionine sulphoxide, reversible) are oxidised; MDA and HNE damage proteins; receptors, enzymes, antibodies and transporters fail.',
    'DNA: strand breaks, base and deoxyribose damage; guanine most susceptible (8-OHdG). Repair fails when polymerases and repair enzymes are damaged or Ca²⁺ activates nucleases.',
    'Oxidised LDL: foam cells, chemotaxis, cytotoxicity, VCAM-1/ICAM-1, NF-κB, tissue factor, autoantibodies.',
  ],
};

const lesson4: Draft = {
  id: 'free-radicals-and-oxygen-toxicity-4',
  title: 'Antioxidants',
  description: 'What antioxidants are and the principles of antioxidant defence, the antioxidant enzymes, how red cells are protected, the antioxidant vitamins working as a team against lipid peroxidation, and dietary sources.',
  xp: 25,
  sourceRefs: [...hb([38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50]), ...fy([24, 25, 27]), ...sg([3, 4, 22, 26, 27, 28, 29, 30, 31, 32, 56, 57, 61])],
  objectives: [
    'Define an antioxidant and a good antioxidant',
    'Describe the four modes of antioxidant action and the general principles of antioxidant defence',
    'State what SOD, catalase and glutathione peroxidase do, and their cofactors',
    'Describe how NADPH and glutathione protect red cells',
    'Describe the actions of vitamin E, β-carotene and vitamin C, and how they work together with glutathione',
    'State what GPx4 and PON1 do',
    'Name preventive (metal-binding) antioxidants and dietary sources',
  ],
  chunks: [
    {
      title: 'What antioxidants are',
      kind: 'definitions',
      paragraphs: [
        'Antioxidants protect against harmful oxygen-derived radicals. An antioxidant is a molecule stable enough to donate an electron to a radical and neutralise it. The body has its own (in vivo) antioxidants and we can add more from outside; normally radicals and antioxidants are balanced. Serum antioxidant activity is measured as % inhibition of lipid peroxidation in a standard brain homogenate (HB slides 38, 47).',
        'A good antioxidant is relatively unreactive as a radical, is repaired rapidly and decays to harmless products. When the balance breaks — more radicals or fewer antioxidants — oxidative stress results (HB slide 50).',
        'The 2026 lecture defines an antioxidant more broadly: any substance that delays, prevents or removes oxidative damage to a target molecule. Antioxidants help maintain redox balance; they do not eliminate ROS completely (2026 slides 4, 56).',
      ],
      sourceRefs: [...hb([38, 47, 50]), ...fy([24]), ...sg([4, 56])],
    },
    {
      title: 'Modes of action',
      kind: 'classification',
      steps: [
        { label: 'Chain breaking', detail: 'α-Tocopherol, in the lipid phase, traps radicals.' },
        { label: 'Reducing ROS', detail: 'Glutathione.' },
        { label: 'Scavenging initiating radicals', detail: 'SOD, in the aqueous phase, removes superoxide.' },
        { label: 'Chelating transition metals', detail: 'Transferrin, lactoferrin and ferritin hold iron; caeruloplasmin and albumin hold copper.' },
      ],
      keyPoints: [
        'Preventive antioxidants are binding proteins that keep free ions bound (transferrin for Fe, caeruloplasmin for Cu); scavenger (chain-breaking) antioxidants break the radical chain (HB slide 43).',
        'Largely extracellular: transferrin, lactoferrin, caeruloplasmin, haemopexin, haptoglobin. Both inside and outside cells: α-tocopherol. GSH, urate, α-tocopherol and ascorbate react directly with radicals, non-catalytically (HB slide 47).',
      ],
      sourceRefs: hb([39, 43, 46, 47]),
    },
    {
      title: 'Principles of antioxidant defence',
      kind: 'classification',
      paragraphs: [
        'The 2026 lecture sets out the general principles of defence (slides 26–28). The simplest is to minimise exposure to oxygen: food manufacturers seal foods under nitrogen or in vacuum packs, or coat them with wax, and the lecture gives stem cells as an example in the body. Beyond that:',
      ],
      steps: [
        { label: 'Catalytic removal', detail: 'Enzymes remove reactive species: superoxide dismutase and catalase.' },
        { label: 'Controlling formation', detail: 'Uncoupling proteins, and the assembly of electron carriers into complexes that make it hard for electrons to escape to O₂.' },
        { label: 'Keeping pro-oxidants unavailable', detail: 'Proteins that limit the availability of iron ions, copper ions or haem: transferrins, albumin, metallothionein.' },
        { label: 'Protecting biomolecules in other ways', detail: 'For example chaperones, and proteins that coat DNA.' },
        { label: 'Physical quenchers', detail: 'Singlet oxygen is quenched by carotenoids (lycopene, β-carotene, lutein).' },
        { label: 'Sacrificial agents', detail: 'Molecules that react with reactive species first, so these do not attack more important biomolecules: GSH, α-tocopherol, ascorbate.' },
        { label: 'Cytoprotective products', detail: 'Some reactions of reactive species with biomolecules give protective products, such as nitro-fatty acids and some end-products of lipid peroxidation (4-HNE), acting through Nrf2.' },
        { label: 'Compartmentalisation', detail: 'Keeping reactants apart, e.g. iron ions away from H₂O₂.' },
      ],
      notes: [{ kind: 'lecturer', text: 'Slide 27 sets questions for discussion (their answers are not on the slides): how exercise acts as a powerful antioxidant; why β-carotene can become a pro-oxidant at high O₂ tension; why antioxidant defences are not 100% effective; and why nitro-fatty acids and 4-HNE are cytoprotective (Nrf2).' }],
      sourceRefs: sg([26, 27, 28]),
    },
    {
      title: 'Antioxidant enzymes',
      kind: 'comparison',
      table: {
        columns: ['Enzyme', 'Acts on', 'Reaction', 'Notes'],
        rows: [
          ['Superoxide dismutase (SOD)', 'Superoxide', 'O₂·⁻ → H₂O₂', 'MnSOD (mitochondrial), CuZnSOD (cytoplasmic), extracellular SOD (EC-SOD; HB calls it CuSOD)'],
          ['Catalase', 'H₂O₂', '2H₂O₂ → 2H₂O + O₂', 'Blood, bone marrow, mucous membranes, kidney, liver'],
          ['Glutathione peroxidase', 'H₂O₂ and lipid peroxides', 'Removes both, using GSH (→ GSSG)', 'A selenoprotein; cytosol and mitochondria; red cells'],
          ['Glutathione reductase', 'GSSG', 'GSSG → 2 GSH, using NADPH', 'Keeps glutathione reduced'],
          ['Peroxiredoxin, with thioredoxin reductase', 'H₂O₂', 'H₂O₂ → H₂O; thioredoxin is regenerated with NADPH', 'Part of the 2026 deck’s antioxidant enzyme system'],
        ],
      },
      keyPoints: [
        'Selenium, copper, manganese and zinc are needed by these enzymes, so dietary shortage of these minerals weakens enzymatic defence (HB slide 48; Fay slide 25).',
        'The 2026 figure (slide 28) shows the antioxidant enzyme system as six enzymes: SOD, catalase, glutathione peroxidase, glutathione reductase, thioredoxin reductase and peroxiredoxin. Non-enzymatic antioxidants — vitamins A, C and E, flavonoids, carotenoids and glutathione — turn free radicals into non-radicals.',
      ],
      sourceRefs: [...hb([40, 48]), ...fy([24, 25]), ...sg([28])],
    },
    {
      title: 'Protecting red cells: NADPH and glutathione',
      kind: 'pathway',
      paragraphs: [
        'Red cells carry oxygen on iron, so they need strong defences (2026 slide 29). Oxyhaemoglobin can release superoxide and become methaemoglobin, which methaemoglobin reductases (MR) turn back into haemoglobin using NADH (or NADPH).',
      ],
      steps: [
        { label: 'Superoxide', detail: 'Superoxide dismutase (CuZnSOD) turns it into H₂O₂.' },
        { label: 'Hydrogen peroxide', detail: 'Removed three ways: catalase (CAT; → ½O₂ + H₂O), glutathione peroxidase (GPx, using GSH → GSSG) and peroxiredoxins (via thioredoxin and thioredoxin reductase).' },
        { label: 'Glutathione recycled', detail: 'Glutathione reductase (GR) turns GSSG back into GSH, using NADPH.' },
        { label: 'NADPH supplied', detail: 'By the pentose phosphate pathway (PPP), whose glucose 6-phosphate dehydrogenase (G6PD) turns glucose 6-phosphate into 6-phosphoglucono-δ-lactone.' },
      ],
      keyPoints: [
        'The same cycle is on 2026 slide 3: GSH donates electrons to reduce H₂O₂ to water (glutathione peroxidase) and to reduce oxidised cysteine residues (–S–S–) of enzymes and other proteins back to –SH, reactivating them; GSSG is reduced back to GSH by NADPH.',
        'In mitochondria (2026 slide 3) superoxide forms when partly reduced ubiquinone (Q) passes an electron to O₂; SOD makes H₂O₂, glutathione peroxidase removes it, and nicotinamide nucleotide transhydrogenase supplies NADPH.',
        'Singlet oxygen is involved in red cell damage in G6PD deficiency (HB slide 36).',
      ],
      sourceRefs: [...sg([3, 29]), ...hb([36])],
    },
    {
      title: 'Vitamins and other antioxidants',
      kind: 'comparison',
      table: {
        columns: ['Vitamin', 'Solubility', 'Action'],
        rows: [
          ['α-Tocopherol (vitamin E)', 'Fat', 'Breaks lipid peroxidation (an inhibitor of it in vivo; also used to protect plastics); scavenges lipid peroxides, O₂·⁻ and ·OH'],
          ['β-Carotene', 'Fat', 'Scavenges ·OH, O₂·⁻ and peroxyl radicals; prevents oxidation of vitamin A; binds transition metals'],
          ['Ascorbic acid (vitamin C)', 'Water', 'Scavenges O₂·⁻, HO₂·, peroxyl radicals, ·OH and H₂O₂; neutralises neutrophil oxidants; helps regenerate vitamin E'],
        ],
      },
      keyPoints: [
        'Other antioxidants: glutathione, CoQ10, uric acid, albumin. Drugs: xanthine oxidase inhibitors (allopurinol), “NADPH inhibitors” (adenosine, Ca²⁺ channel blockers), and inhibitors of iron redox cycling (deferoxamine, apotransferrin) (HB slide 45).',
        'Humans lack L-gulonolactone oxidase, so vitamin C comes from the diet only. Good sources: oranges, lemons, guava, berries, mango, broccoli and peppers (2026 slide 32).',
        'Carotenoids include lycopene; urate (uric acid), bilirubin and dietary polyphenols are also antioxidants (2026 slides 28, 31).',
      ],
      sourceRefs: [...hb([41, 44, 45]), ...sg([28, 31, 32])],
    },
    {
      title: 'Stopping lipid peroxidation: antioxidants as a team',
      kind: 'mechanism',
      paragraphs: [
        'Vitamin E (α-tocopherol) is a radical-scavenging antioxidant: it reacts with the lipid peroxyl radical (LO₂·) before that radical can attack a lipid (LH) to make a lipid hydroperoxide (LOOH) and a new lipid radical (L·). In the 2026 figure (slide 22) the rate constant for this chain inhibition is about 10⁶, against about 10² for chain propagation, so vitamin E wins easily.',
        'Vitamin E then becomes a radical itself (E·, the α-tocopheroxyl radical). Vitamin C (ascorbate) or ubiquinol can reduce it back to vitamin E. Otherwise E· may attack LH or LOOH, restarting chain oxidation; react with another LO₂· to form an adduct; or react with a second E· to form a dimer, a stable non-radical product (2026 slide 22).',
        'The antioxidants act synergistically, passing the electron along a chain (2026 slide 30):',
      ],
      steps: [
        { label: 'Vitamin E', detail: 'Neutralises lipid radicals in the membrane, becoming the α-tocopheroxyl radical.' },
        { label: 'Vitamin C', detail: 'Ascorbate regenerates α-tocopherol, becoming dehydroascorbate (DHA).' },
        { label: 'Glutathione', detail: 'GSH regenerates ascorbate from DHA, becoming GSSG.' },
        { label: 'Enzymes and NAD(P)H', detail: 'GSSG is enzymatically regenerated to GSH using NAD(P)H.' },
      ],
      keyPoints: [
        'GPx4 (glutathione peroxidase 4) uses GSH to reduce lipid hydroperoxides (LOOH) to harmless lipid alcohols (LOH), preventing iron-mediated lipid peroxidation: otherwise Fe²⁺ turns LOOH into alkoxyl radicals (LO·), leading to ferroptosis. RSL3 (Ras-selective lethal 3) and withaferin A inhibit GPx4 (2026 slide 22).',
        'PON1, one of the paraoxonases (PON), hydrolyses lipid hydroperoxides and prevents oxidative alteration of LDL (2026 slide 22).',
      ],
      sourceRefs: sg([22, 30]),
    },
    {
      title: 'Sources',
      kind: 'definitions',
      paragraphs: [
        'Antioxidants come as medicines (vitamins A, C, E; cystine, glutathione, methionine; selenium, zinc) and in food: green and yellow vegetables, turmeric, garlic, grapes, tea, berries, carrots, spinach, broccoli, red meat, kidney and liver (HB slide 42).',
        'Phytochemicals: carotenoids (carrots, tomatoes, greens, mangoes, spinach, legumes, nuts) and polyphenolic flavonoids (berries, green tea, apples, chocolate, red grapes) (HB slide 49; Fay slide 27).',
        'We can minimise the effects of free radicals by eating fresh fruits and vegetables, which supplement the body’s own antioxidant systems. They provide dietary antioxidants (vitamins C and E, carotenoids, polyphenols) and micronutrients such as selenium and zinc that the antioxidant enzymes need (2026 slide 57). Natural phenolic compounds (2026 slide 61):',
      ],
      table: {
        columns: ['Compound (group)', 'Source', 'Action'],
        rows: [
          ['Quercetin (flavonoid)', 'Onions, apples, berries', 'Scavenges free radicals; inhibits NF-κB'],
          ['Catechins (flavonoid)', 'Green tea', 'Chelate metal ions; enhance SOD and catalase activity'],
          ['Anthocyanins (flavonoid)', 'Berries, red cabbage', 'Scavenge free radicals; modulate the Nrf2 pathway'],
          ['Caffeic acid (phenolic acid)', 'Coffee, certain fruits', 'Scavenges free radicals; inhibits ROS production'],
          ['Ferulic acid (phenolic acid)', 'Grains, vegetables', 'Scavenges free radicals; enhances glutathione peroxidase'],
          ['Tannins', 'Tea, wine, various fruits', 'Scavenge free radicals; complex with metal ions'],
          ['Resveratrol (polyphenol)', 'Grapes, red wine', 'Neutralises free radicals; chelates metal ions; activates Nrf2'],
          ['Curcumin (polyphenol)', 'Turmeric', 'Scavenges free radicals; inhibits ROS production; modulates NF-κB and Nrf2'],
        ],
      },
      sourceRefs: [...hb([42, 49]), ...fy([27]), ...sg([57, 61])],
    },
  ],
  summary: [
    'Antioxidant: donates an electron to neutralise a radical; good ones are unreactive, quickly repaired, decay harmlessly. 2026: anything that delays, prevents or removes oxidative damage. The aim is redox balance, not zero ROS.',
    'Modes: chain breaking (vitamin E), reducing ROS (GSH), scavenging (SOD), chelating metals (transferrin, ferritin, caeruloplasmin, albumin).',
    'Principles: minimise O₂ exposure, catalytic removal, control formation, bind metals, protect biomolecules, quench ¹O₂, sacrifice, cytoprotective products, compartmentalise.',
    'SOD: O₂·⁻ → H₂O₂ (Mn, CuZn, extracellular forms). Catalase: H₂O₂ → H₂O + O₂. Glutathione peroxidase (Se): H₂O₂ and lipid peroxides. Glutathione reductase, thioredoxin reductase, peroxiredoxin.',
    'Red cells: NADPH from the pentose phosphate pathway (G6PD) keeps glutathione reduced.',
    'Vitamin E and β-carotene (fat-soluble); vitamin C (water-soluble, from the diet only). Relay: vitamin E → vitamin C → GSH → NAD(P)H.',
    'GPx4: LOOH → LOH (prevents ferroptosis). PON1 protects LDL. Se, Cu, Mn, Zn are needed for enzymatic defence.',
  ],
};

const lesson5: Draft = {
  id: 'free-radicals-and-oxygen-toxicity-5',
  title: 'Free Radicals in Disease',
  description: 'Oxidative stress in ageing, cancer and atherosclerosis; cause or consequence; p53 and lung cancer; HIV, pregnancy and diabetic embryopathy, Down syndrome, transplantation, and how oxidative stress is measured.',
  xp: 25,
  sourceRefs: [...hb([31, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67]), ...fy([18, 19, 20, 21, 22, 23, 26]), ...sg([35, 45, 46, 47, 48, 53, 62, 63])],
  objectives: [
    'List diseases linked to free radical chain reactions',
    'Explain why oxidative stress accompanies most diseases, and why it is usually a consequence rather than the cause',
    'Explain how free radicals contribute to the stages of carcinogenesis and how antioxidants may protect',
    'Describe the antioxidant and pro-oxidant roles of p53 and the oxidative path to lung cancer',
    'Explain the links between ROS and HIV',
    'Describe antioxidant status in pregnancy and diabetic embryopathy',
    'Explain the role of xanthine oxidase in transplant reperfusion injury',
    'Name antioxidant and oxidative biomarkers, including markers of damage to lipids, DNA and proteins',
  ],
  chunks: [
    {
      title: 'Oxidative stress and disease',
      kind: 'clinical',
      paragraphs: [
        'Excess radicals and oxidative stress harm proteins, lipids and DNA and can cause necrosis or apoptosis; ageing speeds up and degenerative diseases — cancer, atherosclerosis, Alzheimer’s, arthritis — become more likely (HB slide 52).',
        'Chain reactions are linked to carcinogenesis, reperfusion injury of the heart, shock-related injury, arteriosclerosis, rheumatoid arthritis, adult respiratory disease, diabetes, obesity and lipid disorders (HB slide 31).',
        'Cancer: endogenous radical reactions, like those of ionising radiation, may cause tumours; the correlation between fat and oil intake and deaths from leukaemia and cancers of the breast, ovary and rectum over 55 may reflect lipid peroxidation. Atherosclerosis may come from radical reactions of dietary lipids in the artery wall, producing peroxides that injure the endothelium (HB slide 53; Fay slide 19).',
      ],
      sourceRefs: [...hb([31, 52, 53]), ...fy([18, 19])],
    },
    {
      title: 'Cause or consequence?',
      kind: 'clinical',
      paragraphs: [
        'Free radicals and other reactive species are involved in human disease, and increased RS formation is not unusual: it probably accompanies tissue injury in most, if not all, human diseases. Some disorders are probably caused by oxidative stress (cancer can sometimes be), but in most diseases oxidative stress is a consequence, not the cause (2026 slide 35).',
        'Why tissue injury causes oxidative stress: injury from ischaemia–reperfusion, heat, trauma, freezing, exercise to excess, toxins, radiation or infection sets off several processes (2026 slide 62):',
      ],
      steps: [
        { label: 'Phagocytes', detail: 'Activated and recruited by DAMPs and PAMPs, they produce more O₂·⁻, H₂O₂, NO·, HOCl and ONOO⁻.' },
        { label: 'Calcium', detail: 'Raised intracellular Ca²⁺ stimulates calpains, Ca²⁺-dependent nucleases and Ca²⁺/calmodulin-dependent nitric oxide synthases (more NO·, more ONOO⁻). Phospholipase A₂ releases arachidonic acid for prostaglandin and leukotriene synthesis and for lipid peroxidation.' },
        { label: 'Peroxide-forming enzymes', detail: 'Lipoxygenase and cyclooxygenase make peroxides, which break down to peroxyl and alkoxyl radicals that spread damage to lipids, proteins and DNA.' },
        { label: 'Metal ions', detail: 'Fe²⁺ and Cu²⁺ released from storage sites convert H₂O₂ to ·OH and break down lipid peroxides; metal ions from damaged cells do the same outside the cells.' },
        { label: 'Haem proteins', detail: 'Myoglobin, haemoglobin and cytochromes released from cells react with peroxides and, if peroxide is in excess, release Fe²⁺ and haem; they can also scavenge NO·.' },
        { label: 'Weaker defences', detail: 'Intracellular or extracellular levels of GSH or ascorbate fall.' },
        { label: 'Xanthine oxidase', detail: 'Xanthine dehydrogenase is converted to xanthine oxidase in some tissues, XO released from damaged cells can bind vascular endothelium, and hypoxanthine rises.' },
        { label: 'Mitochondria', detail: 'Damaged mitochondria leak more electrons to form O₂·⁻ and release cytochrome c.' },
      ],
      sourceRefs: sg([35, 62]),
    },
    {
      title: 'Carcinogenesis',
      kind: 'pathway',
      paragraphs: ['Early on, a transformed cell can revert if the immune system detects and corrects it. Otherwise it passes through initiation, promotion and progression (HB slide 58).'],
      steps: [
        { label: 'Initiation', detail: 'Radicals (from radiation, xenobiotics, inflammatory cells, respiration) damage DNA — mutagenesis and clastogenesis — activating proto-oncogenes and inactivating tumour suppressor genes.' },
        { label: 'Promotion', detail: 'Radicals activate procarcinogens and tumour promoters → premalignant cell.' },
        { label: 'Progression', detail: 'Dysregulation, greater autonomy, less dependence on growth factors → clinical cancer.' },
      ],
      keyPoints: [
        'Antioxidants can repair at each stage. They protect lipids and enzymes and slow radical generation (preventing initiation); later they deactivate genotoxins and tumour promoters and maintain gap junctions and membrane stability (HB slides 61–63).',
        'Most epidemiological data suggest supplementing vitamins A, E, C, β-carotene and selenium lowers the incidence of various cancers (HB slide 63).',
        'Initiation is an irreversible genetic change, for example from chemicals or reactive species such as ·OH reacting directly with DNA. Some genetic damage by radiation comes from DNA absorbing the energy directly, but much is mediated by ·OH (2026 slide 46).',
      ],
      sourceRefs: [...hb([58, 59, 61, 62, 63]), ...sg([46])],
    },
    {
      title: 'Cancer: p53 and the lung',
      kind: 'clinical',
      paragraphs: [
        'The tumour suppressor p53 has both antioxidant and pro-oxidant roles (2026 slide 47), and it can itself be inactivated by oxidation of its cysteine residues (slide 46):',
      ],
      steps: [
        { label: 'No stress or mild, reversible damage', detail: 'Normal p53 switches on antioxidant genes, lowering ROS, so mutations are prevented or repaired and cells grow normally.' },
        { label: 'Extended stress or irreparable damage', detail: 'Abundant p53 switches on pro-oxidant genes, raising ROS, so cells with mutations are eliminated (cell death).' },
        { label: 'Mutant p53', detail: 'It does neither; ROS rise unchecked and mutations accumulate — tumorigenesis.' },
      ],
      keyPoints: [
        'Lung carcinogenesis (2026 slide 48): exogenous sources (tobacco smoke, infections, environmental smoke, occupational and domestic exposure) and endogenous ones (the respiratory chain, xanthine oxidase and P450 oxidase, the cyclooxygenase pathway) raise the oxidant burden and deplete the defences. The resulting oxidative stress causes protein and lipid peroxidation, sequesters neutrophils and macrophages, and activates NF-κB and AP-1, whose pro-inflammatory cytokines (interleukins, TNF-α) bring more oxidants and chronic inflammation. DNA damage and mutation, loss of repair (impaired repair proteins) and inhibition of apoptosis then lead through initiation, promotion, proliferation and transformation to lung cancer.',
        'ROS and RNS in cancer (2026 slide 63): direct DNA damage (mutations such as 8-OHdG), activation of NF-κB and MAPKs, HIF-1 stabilisation and genomic instability; in the tumour microenvironment (hypoxia, inflammation, high metabolic activity) they promote angiogenesis, invasion, metastasis and immune evasion, with more VEGF and MMPs; in metastasis they drive epithelial–mesenchymal transition (loss of cell–cell adhesion, more migration); and they help tumours evade immunity by killing cytotoxic T cells and NK cells and recruiting immunosuppressive cells (Tregs, MDSCs).',
      ],
      notes: [{ kind: 'annotation', text: 'The speaker notes on 2026 slide 47 (a legend from the source figure) explain the three panels in more detail; they are not quizzed.' }],
      sourceRefs: sg([46, 47, 48, 63]),
    },
    {
      title: 'HIV',
      kind: 'clinical',
      paragraphs: [
        'H₂O₂ crosses membranes easily and promotes viral gene expression. Oxidative stress increases HIV replication by activating NF-κB. At the infection site ROS stress tissue and induce pro-inflammatory cytokines (inflammatory injury), and cytokines in turn release ROS and activate HIV (HB slide 54; Fay slides 20–21).',
        'People living with HIV have about 30% lower glutathione, and lower SOD and glutathione peroxidase; glutathione supplementation reduced HIV expression in infected cells, and oral vitamin C has helped in HIV, hepatitis, influenza and infectious mononucleosis (HB slide 55).',
      ],
      notes: [{ kind: 'annotation', text: 'Speaker notes explaining cytokines and SOD on these slides were added to the decks and are not quizzed.' }],
      sourceRefs: [...hb([54, 55]), ...fy([20, 21, 22])],
    },
    {
      title: 'Pregnancy, diabetic embryopathy and Down syndrome',
      kind: 'clinical',
      paragraphs: [
        'Pregnancy increases radical production (stress, rapid fetal growth), and antioxidant activity rises progressively — serum tocopherol, glutathione peroxidase, caeruloplasmin and transferrin. There is no evidence that antioxidants need to be given in normal pregnancy, but drugs that generate radicals should be avoided (HB slide 51).',
        'In poorly controlled diabetes, oxidative stress may contribute to fetal malformations: swings in glucose, ketone bodies and branched-chain amino acids, and later a glucose load accelerating mitochondrial electron flow and radical leakage in embryonic tissue. Keeping blood glucose normal is key (HB slides 56–57).',
        'Radicals, a hallmark of ageing, increase with maternal age and may play a role in Down syndrome; antioxidants may help prevent it (HB slide 58).',
      ],
      sourceRefs: hb([51, 56, 57, 58]),
    },
    {
      title: 'Transplantation and measurement',
      kind: 'clinical',
      paragraphs: [
        'Organs for transplant suffer long hypoxia, and ischaemia–reperfusion injury can occur in liver, kidney and heart, triggered by xanthine oxidase. Allopurinol (a xanthine oxidase inhibitor) improves myocardial contractility in cardiopulmonary bypass; SOD reduced acute renal failure in renal transplants; SOD, catalase and allopurinol preserved organ function in ischaemia. In the US antioxidant therapy before bypass and kidney transplant has become routine (HB slides 65–67; Fay slides 23, 26).',
        'The 2026 lecture’s question on transplantation (slide 45) points the same way: xanthine oxidase may trigger post-ischaemic injury in a transplanted organ and so contribute to its rejection, and transfusion of older stored blood can cause adverse effects through accumulated reactive species, oxidative damage to the red cells and pro-inflammatory responses in the recipient. Ischaemia–reperfusion injury is not limited to transplanted organs; it also follows heart attacks and strokes (Lesson 6).',
      ],
      table: {
        columns: ['Antioxidant biomarkers', 'Oxidative biomarkers'],
        rows: [
          ['Total antioxidant potential, SOD, total glutathione', 'Malondialdehyde (MDA)'],
          ['Glutathione peroxidase and reductase, GSH/GSSG ratio', 'Hydrogen peroxide'],
          ['Catalase', 'Total nitric oxide'],
        ],
      },
      sourceRefs: [...hb([64, 65, 66, 67]), ...fy([23, 26]), ...sg([45])],
    },
    {
      title: 'Biomarkers of oxidative damage',
      kind: 'classification',
      paragraphs: ['The 2026 lecture lists “biomarkers” of oxidative stress or reactive species by the molecule damaged (slide 53):'],
      table: {
        columns: ['Target', 'Biomarkers'],
        rows: [
          ['Lipid', 'Peroxides; cholesterol oxidation products; halogenated or nitrated lipids; MDA, HNE and other aldehydes; isoprostanes and related products'],
          ['DNA', 'Oxidised, nitrated, deaminated, chlorinated or brominated bases in cells and urine; aldehyde–DNA base adducts in cells and urine; deoxyribose breakdown products'],
          ['Protein', '–SH oxidation; carbonyl formation; aldehyde adducts; oxidation products of tyr, trp, his, met, lys, leu, ileu, val, cys, pro, phe, ser, thr; nitrated, chlorinated or brominated tyrosine, trp, phe; protein peroxides and hydroxides'],
        ],
      },
      sourceRefs: sg([53]),
    },
  ],
  summary: [
    'Oxidative stress speeds ageing and degenerative disease: cancer, atherosclerosis, Alzheimer’s, arthritis, diabetes.',
    'Increased RS accompany tissue injury in most diseases; usually a consequence, sometimes (e.g. some cancers) a cause.',
    'Carcinogenesis: initiation (DNA damage; much radiation damage via ·OH) → promotion → progression; antioxidants can repair at each stage.',
    'p53: antioxidant genes after mild stress, pro-oxidant genes to kill badly damaged cells; mutant p53 → mutations accumulate. Oxidised cysteines inactivate p53.',
    'HIV: H₂O₂ and NF-κB increase replication; lower glutathione, SOD and GPx in AIDS.',
    'Pregnancy raises antioxidant activity; diabetic embryopathy linked to oxidative stress — keep glucose normal.',
    'Transplant reperfusion injury via xanthine oxidase; allopurinol, SOD, catalase protect. Stored blood accumulates reactive species.',
    'Biomarkers: SOD, glutathione, GPx, catalase, GSH/GSSG; MDA, H₂O₂, NO. Damage markers: isoprostanes and aldehydes (lipid), oxidised bases (DNA), carbonyls and –SH oxidation (protein).',
  ],
};

const lesson6: Draft = {
  id: 'free-radicals-and-oxygen-toxicity-6',
  title: 'Oxidative Stress in Heart Disease, Diabetes, the Brain and Ageing',
  description: 'From the 2026 lecture: how reactive species drive atherosclerosis and ischaemia–reperfusion injury, their part in obesity and diabetes, Alzheimer’s and Parkinson’s disease, and the free radical theory of ageing.',
  xp: 25,
  sourceRefs: sg([39, 40, 41, 42, 43, 44, 45, 49, 50, 51, 52, 54, 55, 63, 64, 65]),
  objectives: [
    'Describe how oxidised LDL and reactive species drive the steps of atherosclerosis',
    'Explain how ischaemia and reperfusion generate ROS through xanthine oxidase, calcium overload and the mitochondria',
    'Explain the links between obesity, diabetes and oxidative stress, and why β-cells are vulnerable',
    'Describe how oxidative stress contributes to Alzheimer’s and Parkinson’s disease',
    'State Harman’s free radical theory of ageing and the ways reactive species may affect lifespan',
  ],
  chunks: [
    {
      title: 'Atherosclerosis',
      kind: 'clinical',
      paragraphs: [
        'Atherosclerosis begins with impairment of the function of the vascular endothelium. LDL entering the vessel wall undergoes oxidation, and the foam cell becomes the hallmark of the arterial lesion. Foam cells secrete pro-inflammatory cytokines that amplify the local inflammatory response, and activated mononuclear phagocytes, by producing matrix metalloproteinases, are implicated in the thrombotic complications (2026 slide 40).',
        'Oxidised LDL (Lesson 3) increases the expression of the adhesion molecules VCAM-1 (vascular cell adhesion molecule) and ICAM-1 (intercellular adhesion molecule) in the endothelium, promoting monocyte recruitment, and activates NF-κB and other redox-sensitive transcription factors. Activated monocytes and macrophages produce O₂·⁻, H₂O₂ and possibly NO·; these cannot oxidise LDL directly, but ONOOH readily does (2026 slide 41).',
      ],
      steps: [
        { label: 'Initial steps', detail: 'Blood monocytes (and T cells) adhere to the activated endothelium and move into the intima; monocytes mature into macrophages, take up lipid and become foam cells (2026 slide 42, Fig. 1).' },
        { label: 'Lesion progression', detail: 'Smooth muscle cells migrate in and divide, with collagen; macrophages die (apoptotic bodies), cholesterol crystals appear and small vessels (vasa vasorum) grow into the plaque (2026 slide 42, Fig. 2).' },
        { label: 'Rupture', detail: 'The fibrous cap can rupture; a thrombus of platelets forms and may block an essential coronary or cerebral artery (2026 slide 43).' },
      ],
      table: {
        columns: ['Disease', 'Mechanism', 'Species', 'Effects'],
        rows: [
          ['Atherosclerosis', 'Endothelial dysfunction, oxidation of LDL, inflammation', 'O₂·⁻, NO·, ONOO⁻', 'Endothelial damage, oxLDL, foam cells, plaque instability'],
          ['Hypertension', 'Endothelial dysfunction, higher vascular resistance, altered renal function', 'O₂·⁻, ROS', 'Impaired vasodilation, sodium retention, more blood volume'],
          ['Heart failure', 'Cardiomyocyte damage, mitochondrial dysfunction, fibrosis', 'ROS, O₂·⁻', 'Cardiomyocyte apoptosis, less ATP, myocardial fibrosis'],
          ['Myocardial infarction', 'Ischaemia–reperfusion injury', 'ROS, O₂·⁻', 'Mitochondrial dysfunction, inflammation, oxidative damage to cardiomyocytes'],
        ],
      },
      terms: [
        { term: 'Foam cell', meaning: 'A macrophage filled with lipid from oxidised LDL; the hallmark of the arterial lesion.' },
        { term: 'Oxidised LDL', meaning: 'LDL oxidised in the artery wall (e.g. by ONOOH); it recruits monocytes and is taken up by macrophages.' },
      ],
      notes: [{ kind: 'annotation', text: 'The speaker notes on slide 42 (legends from the source figures) describe the two panels in more detail; they are not quizzed.' }],
      sourceRefs: sg([40, 41, 42, 43, 63]),
    },
    {
      title: 'Ischaemia–reperfusion injury',
      kind: 'pathway',
      paragraphs: [
        'Ischaemia damages the heart or brain by depriving it of oxygen and nutrients, for example when an atherosclerotic lesion ruptures and the thrombosis blocks an essential coronary or cerebral artery. Restoring the blood supply adds injury of its own: reperfusion (2026 slide 43). How the radicals arise (the slide 43 figure):',
      ],
      steps: [
        { label: 'ATP is broken down', detail: 'Deprived of oxygen, the tissue breaks ATP → ADP → AMP → adenosine; deamination gives inosine, and hypoxanthine accumulates.' },
        { label: 'The enzyme changes', detail: 'Xanthine dehydrogenase becomes xanthine oxidase, by oxidation of its –SH groups and/or proteolysis by Ca²⁺-stimulated proteinases.' },
        { label: 'Reperfusion restores O₂', detail: 'Xanthine oxidase now oxidises hypoxanthine to xanthine and urate using O₂, producing O₂·⁻ and H₂O₂.' },
        { label: 'Hydroxyl radicals', detail: 'Iron and copper ions released by ischaemic and reperfusion tissue injury turn these into ·OH.' },
      ],
      keyPoints: [
        'Inside the cell (2026 slide 44): in the ischaemic state O₂ and ATP fall; anaerobic metabolism (glucose → pyruvate → lactate) acidifies the cell; the Na⁺/H⁺ exchanger brings in Na⁺, and the Na⁺/Ca²⁺ exchanger then brings in Ca²⁺, which overloads the mitochondria. In the reperfusion state O₂ and ATP rise, ROS increase, the mitochondrial permeability transition pore (mPTP) opens and cytochrome c is released.',
        'Xanthine oxidase may trigger post-ischaemic injury in transplanted organs and contribute to their rejection (2026 slide 45; Lesson 5).',
      ],
      terms: [
        { term: 'Ischaemia', meaning: 'Loss of blood supply, depriving a tissue of oxygen and nutrients.' },
        { term: 'Reperfusion injury', meaning: 'Further damage when blood and oxygen return to an ischaemic tissue, from a burst of reactive species.' },
      ],
      notes: [{ kind: 'annotation', text: 'The speaker notes on slides 43–44 (legends from the source figures: how xanthine dehydrogenase passes electrons to NAD⁺ until it is converted, and the ion and mitochondrial changes step by step) are not quizzed.' }],
      sourceRefs: sg([43, 44, 45]),
    },
    {
      title: 'Obesity and diabetes',
      kind: 'clinical',
      paragraphs: [
        'Obesity is associated with increased oxidative damage to lipids and proteins. The activity of glutathione S-transferase alpha 4 (GST-A4), an enzyme especially effective in removing 4-HNE and other aldehydes using GSH, decreases. White adipose tissue releases pro-inflammatory cytokines — IL-1β, IL-6, monocyte chemoattractant protein-1 (MCP-1) and TNF-α — linking obesity with oxidative stress (2026 slide 39).',
        'Oxidative stress contributes to diabetes, and diabetes then causes oxidative stress (2026 slide 54). The links are β-cell dysfunction, insulin resistance and vascular complications (2026 slide 55). Pancreatic β-cells are particularly vulnerable to oxidative damage because of their low expression of antioxidant enzymes (2026 slide 50).',
      ],
      table: {
        columns: ['Condition', 'Mechanism', 'Effects'],
        rows: [
          ['Diabetes mellitus', 'Hyperglycaemia-induced ROS, advanced glycation end products (AGEs), mitochondrial dysfunction', 'Lipid peroxidation, more AGEs, mitochondrial damage, impaired energy production'],
          ['Diabetic neuropathy', 'High ROS, polyol pathway activity, less NADPH and GSH, osmotic damage', 'Lipid peroxidation, damaged neuronal membranes, osmotic damage to nerve cells'],
          ['Diabetic nephropathy', 'ROS in renal cells (superoxide, H₂O₂), inflammation, fibrosis and hypertrophy', 'Glomerular hypertrophy, mesangial expansion, tubulointerstitial fibrosis, NF-κB activation'],
          ['Diabetic retinopathy', 'High ROS, AGEs, activation of HIF-1α and VEGF', 'Retinal endothelial damage, leaky vessels, new retinal vessels, inflammation through RAGE'],
          ['Cardiovascular disease', 'Endothelial damage, LDL oxidation, less nitric oxide (superoxide, H₂O₂)', 'Endothelial dysfunction, oxidised LDL, reduced vasodilation, stiffer vessels'],
        ],
      },
      terms: [{ term: 'AGEs', meaning: 'Advanced glycation end products, formed more in diabetes; they add to oxidative damage.' }],
      notes: [{ kind: 'lecturer', text: 'Slide 51 asks you to think about why the pancreatic β-cell is not better provided with antioxidant defences (no answer on the slides).' }],
      sourceRefs: sg([39, 50, 54, 55, 65]),
    },
    {
      title: 'Alzheimer’s, Parkinson’s and the brain',
      kind: 'clinical',
      paragraphs: [
        'Neurotoxins raise ROS in the brain (2026 slide 49). Oxidative stress with complex I inhibition damages the mitochondria, increasing apoptosis (caspases 3 and 9) and leading to neurodegeneration. It decreases the levels of protective proteins, causing oxidative neuronal cell damage. With neuroinflammation (TNF-α, IL-1β, IL-6, NO, MPO) it leaves misfolded proteins.',
        'The ubiquitin–proteasome system (UPS) fails to handle the misfolded protein, which accumulates in the cytoplasm while protective proteins fall. Inclusions form: Lewy body-like inclusions of α-synuclein in Parkinson’s disease, and aggregates of amyloid-β (Aβ) with neurofibrillary tau tangles in Alzheimer’s disease. Altered neurotrophic function and abnormal neuronal activity end in behavioural imbalance (2026 slide 49).',
      ],
      keyPoints: [
        'A post-mortem Parkinson’s brain showing increased lipid peroxidation and reduced glutathione points most likely to impaired mitochondrial electron transport chain function (2026 slide 50).',
        'Neurodegeneration involves lipid peroxidation, protein misfolding and mitochondrial ROS (2026 slide 55).',
        'Disease table (2026 slide 64): Alzheimer’s — ROS damage, Aβ aggregation and impaired Aβ clearance (ROS, RNS), with impaired autophagy and proteasomal degradation; Parkinson’s — dopamine metabolism, mitochondrial dysfunction, misfolding of α-synuclein and neuroinflammation (hydroxyl radicals, H₂O₂); Huntington’s — disrupted mitochondria, impaired defences and more ROS (superoxide, RNS), damaging motor neurons and axonal transport.',
        'Autoimmune diseases (2026 slide 64): rheumatoid arthritis — oxidative modification of self-antigens forms neo-antigens that activate autoreactive T cells; systemic lupus erythematosus — mitochondrial dysfunction and the type I interferon pathway, with autoantibodies; multiple sclerosis — demyelination, neuroinflammation and mitochondrial dysfunction, with microglia and astrocytes activated.',
      ],
      terms: [{ term: 'Ubiquitin–proteasome system (UPS)', meaning: 'The cell’s system for tagging and destroying misfolded proteins; when it fails they accumulate.' }],
      notes: [{ kind: 'lecturer', text: 'Slide 49 asks you to think about why neurons are particularly vulnerable to oxidative stress (no answer on the slides).' }],
      sourceRefs: sg([49, 50, 55, 64]),
    },
    {
      title: 'Free radicals and ageing',
      kind: 'overview',
      paragraphs: [
        'In 1956 Denham Harman proposed that ageing results from random, cumulative, deleterious damage to tissues by free radicals (2026 slide 51). Reactive species may affect ageing because they (slides 51–52):',
      ],
      steps: [
        { label: '1. Damage', detail: 'Cause oxidative damage to important molecules, impairing cell function.' },
        { label: '2. Lost renewal', detail: 'Promote apoptosis or senescence in cells, especially stem cells, impairing tissue renewal.' },
        { label: '3. Wrong signals', detail: 'Generate inappropriate cell signalling, e.g. activation of the insulin pathway.' },
        { label: '4. Disease', detail: 'Cause, or contribute to, age-related diseases.' },
        { label: '5. Inflammation', detail: 'Promote, or suppress, inflammation.' },
        { label: '6. Hormesis', detail: 'Exert a hormetic effect, raising levels of antioxidants and other defences.' },
        { label: '7. All together', detail: 'Any combination of 1–6.' },
      ],
      keyPoints: ['Genetic or epigenetic changes that affect the rate of ROS production, the levels of antioxidant defences, or the targets of damage or repair systems could have complex, interlinked effects on lifespan and health span (2026 slide 52).'],
      terms: [{ term: 'Hormesis', meaning: 'A small dose of a stressor that strengthens defences: reactive species can raise antioxidant levels.' }],
      sourceRefs: sg([51, 52]),
    },
  ],
  summary: [
    'Atherosclerosis: endothelial dysfunction → LDL oxidised in the wall (ONOOH, not O₂·⁻ or H₂O₂ directly) → VCAM-1/ICAM-1, NF-κB → monocytes → macrophages → foam cells → cytokines, MMPs → plaque rupture and thrombosis.',
    'IRI: ATP → hypoxanthine; xanthine dehydrogenase → xanthine oxidase; reperfusion O₂ → O₂·⁻ and H₂O₂; Fe/Cu → ·OH. Ca²⁺ overload, mPTP opening, cytochrome c release.',
    'Obesity: more lipid and protein damage, less GST-A4, adipose cytokines. Diabetes and oxidative stress cause each other; β-cells have few antioxidant enzymes.',
    'Brain: complex I inhibition, mitochondrial damage, misfolded proteins overwhelm the UPS → Lewy bodies (α-synuclein, PD), Aβ and tau (AD).',
    'Ageing: Harman 1956 — cumulative radical damage; also senescence, signalling, disease, inflammation and hormesis.',
  ],
};

export const lessons: Draft[] = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6].map((lesson) => ({
  ...lesson,
  ...readingExtras[lesson.id],
  interactive: interactive[lesson.id],
}));
