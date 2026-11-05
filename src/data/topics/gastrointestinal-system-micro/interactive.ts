// Anatomy → Gastrointestinal System (microanatomy): each lesson's interactive layer.
import type { LessonConfusion } from '@/data/lesson-types';
import { ask, learn, match, mcq, order, recall, type InteractiveDraft } from '@/data/topics/build';
import { gm, TOPIC_ID, type ConceptId } from '@/data/topics/gastrointestinal-system-micro/sources';

type Steps = InteractiveDraft<ConceptId>[];
const L = (n: number) => `${TOPIC_ID}-${n}`;

export const interactive: Record<string, Steps> = {
  [L(1)]: [
    ask(mcq('i1-01', 'oral-mucosa', 'Before you read: which oral mucosa covers the gums and hard palate?', 'Masticatory mucosa', ['Lining mucosa', 'Specialised mucosa', 'Olfactory mucosa'], { explanation: 'Slide 20.', skill: 'prediction' })),
    learn('Built for its job', ['Mucosa that moves (cheeks, floor of mouth) is non-keratinised and flexible; mucosa that takes chewing forces (gums, hard palate) is keratinised and tightly bound.'], { sourceRefs: gm([18, 20]) }),
    ask(match('i1-02', 'oral-mucosa', 'Match each site to its type of mucosa:', [['Inner cheek', 'Lining'], ['Gingiva', 'Masticatory'], ['Dorsum of tongue', 'Specialised']], { explanation: 'Slides 18, 20, 25.' })),
    ask(order('i1-03', 'lip', 'Order the surfaces of the lip from inside the mouth outwards:', ['Mucous surface', 'Red vermilion zone', 'Skin surface'], { explanation: 'Slides 28–30.' })),
    learn('Why lips are red', ['The vermilion has very thin epithelium over connective tissue rich in capillaries, so blood shows through.'], { sourceRefs: gm([30]) }),
    recall('r1-01', 'lip', 'Describe the vermilion zone of the lip.', ['Transition between oral mucosa and skin.', 'Very thin stratified squamous keratinised epithelium; no salivary or sweat glands; kept moist by saliva.', 'Connective tissue rich in sensory nerves and capillaries, giving the pink colour.'], gm([30])),
  ],
  [L(2)]: [
    ask(mcq('i2-01', 'papillae', 'Before you read: which papillae have no taste buds?', 'Filiform', ['Fungiform', 'Circumvallate', 'Foliate'], { explanation: 'Slide 44.', skill: 'prediction' })),
    learn('Three planes', ['The tongue’s muscle fibres run in three planes at right angles, which makes it so flexible and precise.'], { sourceRefs: gm([36]) }),
    ask(match('i2-02', 'papillae', 'Match each papilla to its feature:', [['Filiform', 'Keratinised, mechanical only'], ['Fungiform', 'Red spots near the tip'], ['Circumvallate', 'Moat with von Ebner’s glands'], ['Foliate', 'Lateral furrows']], { explanation: 'Slides 44–53.' })),
    ask(match('i2-03', 'taste-transduction', 'Match each taste to how it is detected:', [['Salty', 'Na⁺ channels'], ['Sweet', 'T1R2 + T1R3'], ['Umami', 'T1R1 + T1R3'], ['Bitter', 'T2R receptors']], { explanation: 'Slides 63–67.' })),
    learn('Stem cells', ['Basal cells at the base of each taste bud replace the gustatory and supporting cells.'], { sourceRefs: gm([61]) }),
    recall('r2-01', 'taste-buds', 'Name the cells of a taste bud and their features.', ['Neuroepithelial (gustatory) cells: most numerous, microvilli, synapse with nerves.', 'Supporting cells: fewer, do not synapse.', 'Basal cells: stem cells for the other two.'], gm([59, 60, 61])),
  ],
  [L(3)]: [
    ask(mcq('i3-01', 'teeth', 'Before you read: which cells make enamel?', 'Ameloblasts', ['Odontoblasts', 'Cementoblasts', 'Osteoblasts'], { explanation: 'Slide 71.', skill: 'prediction' })),
    learn('Hardest to softest', ['Enamel (96–98% mineral) is harder than dentin (70%), which is harder than cementum (about 45–50%).'], { sourceRefs: gm([71, 74, 76]) }),
    ask(order('i3-02', 'salivary-structure', 'Order the ducts from the acinus outwards:', ['Intercalated duct', 'Striated duct', 'Interlobular duct', 'Main excretory duct'], { explanation: 'Slides 86, 87.' })),
    ask(match('i3-03', 'major-salivary', 'Match each gland to its secretion:', [['Parotid', 'Purely serous'], ['Submandibular', 'Mixed, mainly serous'], ['Sublingual', 'Mixed, mainly mucous']], { explanation: 'Slides 92, 98, 105.' })),
    learn('Hypotonic saliva', ['Striated ducts pump out Na⁺ and Cl⁻ and add K⁺ and HCO₃⁻, so saliva ends up hypotonic.'], { sourceRefs: gm([86]) }),
    recall('r3-01', 'tonsils', 'List the parts of Waldeyer’s ring and where each lies.', ['Two palatine tonsils, between the palatoglossal and palatopharyngeal arches.', 'Two tubal tonsils behind the auditory tube openings; the pharyngeal tonsil in the nasopharynx roof.', 'The lingual tonsil at the base of the tongue.'], gm([118, 120, 121, 122, 123])),
  ],
  [L(4)]: [
    ask(mcq('i4-01', 'git-wall', 'Before you read: where does the myenteric plexus lie?', 'Between the two muscle layers', ['In the lamina propria of the mucosa', 'In the serosa', 'In the epithelium'], { explanation: 'Slide 138.', skill: 'prediction' })),
    learn('One plan', ['The whole tube from oesophagus to anus has four coats: mucosa, submucosa, muscularis externa, and serosa or adventitia.'], { sourceRefs: gm([129]) }),
    ask(order('i4-02', 'git-wall', 'Order the coats from the lumen outwards:', ['Mucosa', 'Submucosa', 'Muscularis externa', 'Serosa or adventitia'], { explanation: 'Slide 129.' })),
    ask(match('i4-03', 'stomach-regions', 'Match each region to its pits and glands:', [['Cardia', 'Short pits, short glands'], ['Fundus and body', 'Short pits, long glands'], ['Pylorus', 'Long pits, short glands']], { explanation: 'Slides 174–178.' })),
    learn('Fried egg', ['Parietal cells are pale-pink with a central nucleus like a fried egg; chief cells are blue and full of RER.'], { sourceRefs: gm([173]) }),
    recall('r4-01', 'oesophagus', 'Describe the oesophagus.', ['Muscular tube 25–30 cm, cricoid to the stomach at T11, through the diaphragm at T10.', 'Stratified squamous non-keratinised epithelium; mucous glands in the submucosa.', 'Skeletal muscle above, smooth below (textbook); adventitia.'], gm([158, 275, 276])),
  ],
  [L(5)]: [
    ask(mcq('i5-01', 'si-regions', 'Before you read: which part of the small intestine has Brunner’s glands?', 'Duodenum', ['Jejunum', 'Terminal ileum', 'Caecum'], { explanation: 'Slide 213.', skill: 'prediction' })),
    learn('Three ways to add surface', ['Plicae circulares (mucosa + submucosa), villi (epithelium + lamina propria) and microvilli all increase the absorptive area.'], { sourceRefs: gm([187, 188, 202]) }),
    ask(match('i5-02', 'si-regions', 'Match each feature to its segment:', [['Brunner’s glands', 'Duodenum'], ['Prominent plicae circulares', 'Jejunum'], ['Peyer’s patches', 'Ileum']], { explanation: 'Slides 215, 221, 224.' })),
    ask(order('i5-03', 'rectum-anal', 'Order the zones of the anal canal from above down:', ['Colorectal zone', 'Anal transitional zone', 'Squamous zone'], { explanation: 'Slide 267.' })),
    learn('Appendix clue', ['A ring of lymphatic nodules all round the wall is the single most characteristic feature of the appendix.'], { sourceRefs: gm([255]) }),
    recall('r5-01', 'git-junctions', 'List the epithelium along the tract.', ['Oesophagus: stratified squamous non-keratinised.', 'Stomach: simple columnar; intestines: simple columnar with brush border and goblet cells.', 'Anal canal: stratified squamous non-keratinised; anus: stratified squamous keratinised.'], gm([275])),
  ],
  [L(6)]: [
    ask(mcq('i6-01', 'liver-lobules', 'Before you read: which zone of the liver acinus dies first in hypoxia?', 'Zone 3', ['Zone 1', 'Zone 2', 'All zones equally'], { explanation: 'Slide 320.', skill: 'prediction' })),
    learn('Opposite flows', ['Blood flows from the portal triads to the central vein; bile flows the other way, from hepatocytes to the bile duct in the triad.'], { sourceRefs: gm([290, 323]) }),
    ask(match('i6-02', 'liver-lobules', 'Match each unit to what it emphasises:', [['Classic lobule', 'Blood flow to the central vein'], ['Portal lobule', 'Bile secretion'], ['Liver acinus', 'Zones of blood supply']], { explanation: 'Slide 289.' })),
    ask(order('i6-03', 'biliary-tree', 'Order the biliary tree:', ['Bile canaliculi', 'Canals of Hering', 'Interlobular bile ducts', 'Hepatic ducts', 'Common bile duct'], { explanation: 'Slide 322.' })),
    learn('No glands', ['The gallbladder’s crypts look like glands in section, but there are no glands except at the neck.'], { sourceRefs: gm([333]) }),
    recall('r6-01', 'pancreas', 'How do you recognise the pancreas?', ['Serous acini with pale centroacinar cells.', 'Ducts: intercalated, intralobular, interlobular, main duct of Wirsung — no striated ducts.', 'Pale islets of Langerhans with α, β and δ cells.'], gm([340, 346])),
  ],
};

type ReadingExtras = { estimatedMinutes: number; xp: number; highYield: string[]; confusions: LessonConfusion[] };

export const readingExtras: Record<string, ReadingExtras> = {
  [L(1)]: {
    estimatedMinutes: 10,
    xp: 25,
    highYield: ['Lining: non-keratinised; masticatory: gums + hard palate; specialised: tongue dorsum.', 'Parakeratinised = keratin with pyknotic nuclei; common in gingiva.', 'Vermilion: no glands, rich capillaries.'],
    confusions: [{ confusion: 'The vermilion zone has its own salivary glands.', clarification: 'It has no salivary or sweat glands; saliva from the tongue keeps it moist (slide 30).' }],
  },
  [L(2)]: {
    estimatedMinutes: 10,
    xp: 25,
    highYield: ['Filiform: keratinised, no taste buds.', 'Circumvallate: 8–12, in front of the sulcus terminalis, von Ebner’s glands.', 'Bitter: T2R; sweet: T1R2+T1R3; umami: T1R1+T1R3.'],
    confusions: [{ confusion: 'Filiform papillae carry most taste buds.', clarification: 'Filiform papillae have no taste buds; they are mechanical only (slide 44).' }],
  },
  [L(3)]: {
    estimatedMinutes: 14,
    xp: 25,
    highYield: ['Enamel 96–98% mineral (ameloblasts); dentin 70% (odontoblasts).', 'Striated ducts make saliva hypotonic.', 'Parotid purely serous; sublingual mainly mucous.'],
    confusions: [{ confusion: 'Mucous glands have prominent striated ducts.', clarification: 'Mucous glands have poor intercalated ducts and no striated ducts (slide 114).' }],
  },
  [L(4)]: {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Serosa = mesothelium + CT; adventitia = CT only.', 'Rugae accommodate filling, not extra surface.', 'Fundus: long glands, parietal + chief; pylorus: long pits, G cells.'],
    confusions: [{ confusion: 'Rugae increase the stomach’s surface area.', clarification: 'They let it expand as it fills; they do not increase surface area (slide 168).' }],
  },
  [L(5)]: {
    estimatedMinutes: 14,
    xp: 25,
    highYield: ['Duodenum: Brunner’s; ileum: Peyer’s.', 'Colon: taeniae, haustra, many goblet cells; turnover 6 days.', 'Anal transitional zone: site of colorectal cancer.'],
    confusions: [{ confusion: 'The rectum has taeniae coli.', clarification: 'Taeniae are on the caecum and colon only; the rectum, anal canal and appendix have none (slide 247).' }],
  },
  [L(6)]: {
    estimatedMinutes: 14,
    xp: 25,
    highYield: ['Zone 1 periportal: first to get O₂, last to die. Zone 3: first to die, first fat.', 'Canals of Hering: regenerative cells.', 'Pancreas: no striated ducts; gallbladder holds ~50 ml.'],
    confusions: [{ confusion: 'Bile flows towards the central vein.', clarification: 'Bile flows to the periphery (portal triad), opposite to blood (slide 323).' }],
  },
};
