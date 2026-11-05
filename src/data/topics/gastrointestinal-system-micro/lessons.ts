// Anatomy → Gastrointestinal System (microanatomy) — the six lessons (reading layer).
// Source: the "Microscopic Anatomy GIT" lecture deck (gm in sources.ts).
import type { LessonDraft } from '@/data/topics/build';
import { interactive, readingExtras } from '@/data/topics/gastrointestinal-system-micro/interactive';
import { gm, type ConceptId } from '@/data/topics/gastrointestinal-system-micro/sources';

type Draft = LessonDraft<ConceptId>;

const lesson1: Draft = {
  id: 'gastrointestinal-system-micro-1',
  title: 'The Oral Cavity, Oral Mucosa and Lips',
  description: 'The parts and functions of the digestive system, the regions of the oral cavity, the three kinds of oral mucosa and how they are keratinised, and the histology of the lip.',
  xp: 25,
  sourceRefs: gm([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 18, 19, 20, 24, 25, 26, 28, 29, 30, 31]),
  objectives: [
    'List the parts and functions of the digestive system',
    'Describe the vestibule and oral cavity proper and their boundaries',
    'Compare lining, masticatory and specialised oral mucosa',
    'Distinguish orthokeratinised, parakeratinised and non-keratinised epithelium',
    'Describe the three surfaces of the lip',
  ],
  chunks: [
    {
      title: 'The digestive system',
      kind: 'overview',
      paragraphs: [
        'The digestive system is the alimentary canal — mouth, pharynx, oesophagus, stomach, small intestine and large intestine — with its accessory organs: tongue, teeth, salivary glands, pancreas, liver and gallbladder (slide 3).',
        'It moves water and food along the canal, secretes enzymes and hormones, digests and absorbs nutrients, and eliminates what cannot be digested. The alimentary mucosa is the surface through which substances enter the body; its jobs are secretion, absorption, acting as a barrier, and immune protection (slide 4).',
      ],
      sourceRefs: gm([3, 4]),
    },
    {
      title: 'The oral cavity',
      kind: 'structure',
      paragraphs: [
        'The oral cavity contains the tongue, teeth and their supporting structures, and receives the major salivary glands (parotid, submandibular, sublingual) and the minor ones (buccal, labial, lingual, palatine) (slides 5, 6). Tonsils — palatine, tubal, pharyngeal and lingual — guard its back (slide 7).',
        'It has two parts. The vestibule lies between the teeth and gums and the lips and cheeks; the oral cavity proper lies inside the teeth. They communicate only at the retromolar region. The mouth matters for chewing, tasting, speech and facial expression (slide 8).',
        'The cavity proper is bounded in front and at the sides by the teeth and gums, above by the palate, and below by the tongue and the mucosa supported by the geniohyoid and mylohyoid muscles. Behind, it opens into the oropharynx through the oropharyngeal isthmus (fauces) (slide 9). Its main structures are the lips, teeth, tongue, oral mucosa and salivary glands (slide 10).',
      ],
      terms: [
        { term: 'Vestibule', meaning: 'The space between the teeth and gums and the lips and cheeks.' },
        { term: 'Fauces', meaning: 'The oropharyngeal isthmus, the opening from the mouth into the oropharynx.' },
      ],
      sourceRefs: gm([5, 6, 7, 8, 9, 10]),
    },
    {
      title: 'Oral mucosa',
      kind: 'classification',
      paragraphs: ['The oral cavity is lined by a mucous membrane of stratified squamous epithelium (keratinised or not), a lamina propria and, in places, a submucosa (slide 15). There are three types (slides 16, 17):'],
      table: {
        columns: ['Type', 'Epithelium and features', 'Where'],
        rows: [
          ['Lining mucosa', 'Stratified squamous non-keratinised; fewer, shorter papillae so it moves with the muscle beneath; variable thickness; a distinct submucosa except under the tongue', 'Inner lips and cheeks, floor of mouth, soft palate, under-surface of the tongue, alveolar mucosa'],
          ['Masticatory mucosa', 'Stratified squamous keratinised or parakeratinised; long, numerous epithelial ridges and connective tissue papillae; submucosa present except in the midline of the hard palate', 'Gingiva (gums) and hard palate'],
          ['Specialised mucosa', 'Keratinised or parakeratinised; carries papillae and taste buds; linked to taste', 'Dorsum and lateral borders of the tongue'],
        ],
      },
      keyPoints: [
        'Fordyce spots (granules) are sebaceous glands with no hair follicle, sometimes found in the submucosa beside the corner of the mouth and in the cheeks opposite the molars (slide 19).',
        'Orthokeratinised: flat surface squames that stain bright pink with eosin and have no nuclei. Parakeratinised: the surface stains for keratin but keeps shrunken (pyknotic) nuclei, cytoplasm less eosinophilic, keratohyalin granules fewer; most common in the gingiva. Parakeratinisation of the skin can go with diseases such as psoriasis (slides 20, 23, 24).',
      ],
      terms: [
        { term: 'Parakeratinised', meaning: 'Keratinised epithelium whose surface cells keep their shrunken nuclei.' },
        { term: 'Masticatory mucosa', meaning: 'The tough, keratinised mucosa of the gums and hard palate that takes chewing forces.' },
      ],
      sourceRefs: gm([15, 16, 18, 19, 20, 23, 24, 25]),
    },
    {
      title: 'The lip',
      kind: 'structure',
      paragraphs: [
        'The upper and lower lips surround the mouth opening and have a muscular core of orbicularis oris (skeletal muscle), giving the mobility needed for eating, speech and other communication. The upper lip is separated from the cheek by the nasolabial groove and the lower lip from the chin by the labiomental groove. The lips meet at the labial commissures; the philtrum is the groove between the nose and the upper lip’s vermilion border; labial frenula are bands of tissue in the vestibule (slides 11–13, 26).',
      ],
      table: {
        columns: ['Surface', 'Features (slides 28–30)'],
        rows: [
          ['Inner (mucous) surface', 'Lining mucosa: thick stratified squamous non-keratinised epithelium; many minor labial salivary glands'],
          ['Red vermilion zone', 'The transition between mucosa and skin; very thin keratinised stratified squamous epithelium; no salivary or sweat glands, so it is kept moist by saliva from the tongue; connective tissue rich in sensory nerves and capillaries, whose blood gives the pink colour'],
          ['Outer surface', 'Thin skin (epidermis and dermis) with sweat glands and many hair follicles with sebaceous glands'],
        ],
      },
      keyPoints: ['Epithelial pegs project into the connective tissue in both skin and mucosa; the core is skeletal muscle mixed with fibroelastic connective tissue, and the mucocutaneous junction separates inner and outer lip (slides 30–32).'],
      terms: [{ term: 'Vermilion zone', meaning: 'The red part of the lip between skin and oral mucosa.' }],
      sourceRefs: gm([11, 12, 13, 26, 27, 28, 29, 30, 31]),
    },
  ],
  summary: [
    'Alimentary mucosa: secretion, absorption, barrier, immune protection.',
    'Lining (non-keratinised, mobile), masticatory (keratinised/parakeratinised: gums, hard palate), specialised (papillae, taste).',
    'Lip: inner mucosa with labial glands; vermilion with thin keratinised epithelium, no glands, rich capillaries; outer skin.',
  ],
};

const lesson2: Draft = {
  id: 'gastrointestinal-system-micro-2',
  title: 'The Tongue and Taste',
  description: 'The muscle and surface of the tongue, the four kinds of lingual papillae, the structure and cells of taste buds, and how each of the five tastes is detected.',
  xp: 25,
  sourceRefs: gm([36, 37, 38, 44, 46, 48, 53, 56, 59, 60, 61, 63, 64, 65, 66, 67, 68]),
  objectives: [
    'Describe the muscle of the tongue and its dorsal surface',
    'Compare the four types of lingual papillae',
    'Describe taste buds and their three cell types',
    'Explain how salty, sour, sweet, bitter and umami are detected',
  ],
  chunks: [
    {
      title: 'The tongue',
      kind: 'structure',
      paragraphs: [
        'The tongue is a muscular organ projecting into the mouth from its floor, built of extrinsic and intrinsic lingual muscles. Its skeletal muscle is mixed with glands (a musculoglandular look), and the fibres run in three planes at right angles, which gives the tongue great flexibility and precision (slide 36).',
        'The dorsum has an anterior two-thirds and a posterior third separated by the V-shaped sulcus terminalis. At its apex is the foramen caecum, the remnant of the place where the floor of the embryonic pharynx pushed out to form the thyroid gland (slide 37). In front of the sulcus the dorsum is covered by lingual papillae, which with their taste buds make up the specialised mucosa (slide 38).',
      ],
      terms: [
        { term: 'Sulcus terminalis', meaning: 'The V-shaped groove dividing the anterior two-thirds from the posterior third of the tongue.' },
        { term: 'Foramen caecum', meaning: 'A pit at the apex of the sulcus terminalis, marking the origin of the thyroid.' },
      ],
      sourceRefs: gm([36, 37, 38]),
    },
    {
      title: 'Lingual papillae',
      kind: 'comparison',
      table: {
        columns: ['Papilla', 'Shape and location', 'Epithelium and taste buds (slides 44–55)'],
        rows: [
          ['Filiform', 'Smallest and most numerous; conical, elongated; over the whole anterior dorsum, tips pointing backwards', 'Highly keratinised; no taste buds; purely mechanical'],
          ['Fungiform', 'Mushroom-shaped; on the dorsum, most numerous near the tip', 'Taste buds on their dorsal surface; thin non-keratinised epithelium lets them show as red spots in young children'],
          ['Circumvallate', 'Large, dome-shaped; 8–12 just in front of the sulcus terminalis', 'Each surrounded by a moat lined with taste buds; von Ebner’s (serous lingual) glands empty into the base of the moat'],
          ['Foliate', 'Shallow longitudinal furrows on the lateral edge of the anterior two-thirds', 'Their taste buds degenerate soon after the second year'],
        ],
      },
      paragraphs: ['The lecture sets an assignment: for each papilla give its location, shape, function and where its taste buds lie (slide 68).'],
      terms: [{ term: 'Von Ebner’s glands', meaning: 'Serous lingual glands that flush the moats of circumvallate papillae.' }],
      sourceRefs: gm([38, 44, 46, 48, 53, 68]),
    },
    {
      title: 'Taste buds',
      kind: 'structure',
      paragraphs: [
        'Taste buds are found on fungiform, foliate and circumvallate papillae. They are oval, pale-staining bodies that span the full thickness of the epithelium and open at the surface through a small taste pore (slide 56).',
      ],
      table: {
        columns: ['Cell', 'Features (slides 59–61)'],
        rows: [
          ['Neuroepithelial (gustatory, sensory) cells', 'Most numerous; reach from the basal lamina to the taste pore; tapered tip with microvilli; synapse with nerve fibres'],
          ['Supporting (sustentacular) cells', 'Fewer; also reach from basal lamina to pore; do not synapse with nerves'],
          ['Basal cells', 'Small cells at the base; stem cells for the other two'],
        ],
      },
      terms: [{ term: 'Taste pore', meaning: 'The small opening at the surface through which dissolved substances reach the taste cells.' }],
      sourceRefs: gm([56, 59, 60, 61]),
    },
    {
      title: 'How the five tastes are detected',
      kind: 'mechanism',
      paragraphs: ['Taste cells respond to five basic tastes: sweet, salty, bitter, sour and umami. Salty and sour work through ion channels; bitter, sweet and umami through G protein–coupled receptors coded by the T1R and T2R genes (slide 63).'],
      table: {
        columns: ['Taste', 'Mechanism (slides 64–67)'],
        rows: [
          ['Salty', 'Na⁺ from table salt enters through Na⁺ channels, depolarises the cell, Ca²⁺ flows in and neurotransmitter is released onto the gustatory nerve'],
          ['Sour', 'H⁺ from acids blocks K⁺ channels and enters through Na⁺ channels, depolarising the cell; Ca²⁺ is activated and impulses follow'],
          ['Bitter', 'About 30 T2R receptors; the G protein activates phospholipase C (“phosphatase C” on the slide), raising inositol 1,4,5-trisphosphate; Na⁺ depolarisation and Ca²⁺ influx generate the impulse'],
          ['Sweet', 'A receptor of two subunits, T1R2 and T1R3'],
          ['Umami', 'T1R1 + T1R3, responding to amino acids such as L-glutamate and aspartate (in tomatoes, cheese, meat); monosodium glutamate, added to foods and in soy sauce, stimulates it'],
        ],
      },
      notes: [{ kind: 'check', text: 'Slide 64 names the enzyme “phosphatase C”; the enzyme that makes IP₃ is phospholipase C.' }],
      sourceRefs: gm([63, 64, 65, 66, 67]),
    },
  ],
  summary: [
    'Tongue: skeletal muscle in three planes with glands; sulcus terminalis; foramen caecum (thyroid origin).',
    'Filiform: keratinised, no taste buds. Fungiform: tip, taste buds. Circumvallate: 8–12, moat, von Ebner’s glands. Foliate: lateral, taste buds lost after age 2.',
    'Taste bud cells: gustatory (synapse), supporting, basal (stem).',
    'Salty and sour: channels. Sweet (T1R2+T1R3), umami (T1R1+T1R3), bitter (T2R): G proteins.',
  ],
};

const lesson3: Draft = {
  id: 'gastrointestinal-system-micro-3',
  title: 'Teeth, Salivary Glands and Tonsils',
  description: 'The hard tissues and pulp of the tooth and the cells that make them, the secretory cells and duct system of salivary glands, the three major salivary glands compared, and the tonsillar ring.',
  xp: 25,
  sourceRefs: gm([70, 71, 72, 73, 74, 76, 77, 78, 79, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 96, 98, 102, 104, 105, 106, 114, 115, 116, 118, 119, 120, 121, 122, 123]),
  objectives: [
    'Describe enamel, dentin, cementum and pulp and the cells that make each',
    'Describe serous and mucous cells, demilunes, the duct system and myoepithelial cells',
    'Compare the parotid, submandibular and sublingual glands',
    'Name the parts of Waldeyer’s ring and where each lies',
  ],
  chunks: [
    {
      title: 'The tooth',
      kind: 'structure',
      paragraphs: [
        'Teeth sit in the maxilla and mandible. Each has a crown above the gum, a root buried in the alveolus, and a neck where they meet. A core of specialised connective tissue, the pulp, is covered by three calcified tissues: dentin (the most abundant), enamel and cementum (slide 70).',
      ],
      table: {
        columns: ['Tissue', 'Made by', 'Features (slides 71–78)'],
        rows: [
          ['Enamel', 'Ameloblasts of the enamel organ', '96–98% calcium hydroxyapatite; hard, thin, translucent, acellular; covers the crown; about 2.5 mm thick; ends at the cementoenamel junction; rods 4 µm wide by 8 µm high; lines of Retzius may record rhythmic growth'],
          ['Dentin', 'Odontoblasts, throughout life', 'The bulk of crown and root; 70% hydroxyapatite, 30% type I collagen and proteoglycans; odontoblast processes run in dentinal tubules, their cell bodies line the pulp'],
          ['Cementum', 'Cementoblasts, throughout life', 'Thin, bone-like, about as hard as bone; 45–50% hydroxyapatite and 50–55% collagen, GAGs, proteoglycans and water; avascular; its canaliculi do not interconnect; cementoblasts line its surface next to the periodontal ligament'],
          ['Pulp', '—', 'Loose connective tissue in the central pulp cavity, very vascular and rich in nerves, which enter at the apical foramen; the cavity follows the shape of the tooth'],
        ],
      },
      keyPoints: [
        'Acid from bacteria can decalcify enamel, the start of dental caries; fluoride in water, toothpaste and mouthwash reduces caries. The enamel organ comes from the ectoderm of the mouth, starting as a horseshoe-shaped band of proliferating epithelium (slide 73).',
        'Visible enamel above the gum is the clinical crown; the whole enamel-covered part is the anatomical crown (slide 71).',
        'The way a tooth is held in its socket allows slight natural movement, which is the basis of orthodontics to straighten teeth and correct malocclusion (slide 79).',
      ],
      notes: [{ kind: 'check', text: 'Slide 76 gives cementum as 45–50% mineral; slide 77 says 65%. Ross & Pawlina give 45–50%.' }],
      terms: [
        { term: 'Ameloblast', meaning: 'The cell that makes enamel; lost once the tooth erupts.' },
        { term: 'Odontoblast', meaning: 'The cell that makes and maintains dentin.' },
        { term: 'Cementoblast', meaning: 'The cell that makes cementum on the root.' },
      ],
      sourceRefs: gm([70, 71, 72, 73, 74, 76, 77, 78, 79]),
    },
    {
      title: 'How a salivary gland is built',
      kind: 'structure',
      paragraphs: [
        'Many small intrinsic glands moisten the mouth; the large extrinsic glands — parotid, submandibular and sublingual — pour saliva through ducts in large amounts, intermittently, under nervous stimulation set off by thermal, mechanical, chemical or smell stimuli (slides 81–83).',
        'Serous cells make a watery secretion with proteins, electrolytes, salivary amylase and lysozyme. Mucous cells make mucin, which becomes mucus when hydrated. In H&E sections mucous acini often have a cap of serous cells, the serous demilunes, now thought to be an artefact of traditional fixation (slide 84). The slide asks you to look up xerostomia (dry mouth).',
      ],
      table: {
        columns: ['Duct', 'Features (slides 86, 87)'],
        rows: [
          ['Intercalated', 'Lead from the acini; paler, low simple cuboidal; secrete HCO₃⁻'],
          ['Striated', 'Simple columnar with basal striations (infolded membrane around long mitochondria); remove Na⁺ and Cl⁻ and add K⁺ and HCO₃⁻, turning isotonic saliva hypotonic; unique to salivary glands; larger in serous glands'],
          ['Interlobular', 'Formed by fusion of intralobular ducts; stratified cuboidal or columnar; join into the main excretory duct'],
        ],
      },
      keyPoints: [
        'The acinus with its intercalated and striated ducts is the salivon, the functional unit (slide 87).',
        'Myoepithelial cells lie between the basement membrane and the acinar and intercalated duct cells and contract to squeeze out the secretion (slide 88).',
        'Serous glands have well-developed intercalated and striated ducts that modify the secretion; mucous glands, whose secretion is not modified, have poor intercalated ducts and no striated ducts (slides 86, 114).',
        'Minor salivary glands lie in the oral submucosa and open directly by short ducts; they are named by site: buccal, labial, lingual, palatine (slide 115).',
      ],
      terms: [
        { term: 'Serous demilune', meaning: 'A cap of serous cells on a mucous acinus in routine sections.' },
        { term: 'Salivon', meaning: 'An acinus with its intercalated and striated ducts.' },
      ],
      sourceRefs: gm([81, 82, 83, 84, 86, 87, 88, 114, 115]),
    },
    {
      title: 'The three major salivary glands',
      kind: 'comparison',
      table: {
        columns: ['', 'Parotid', 'Submandibular', 'Sublingual'],
        rows: [
          ['Position', 'Largest; below and in front of the ear (infratemporal region)', 'Submandibular triangle, along the body of the mandible', 'Smallest; below the tongue, in front of the submandibular'],
          ['Duct', 'Stensen’s duct, opening at the parotid papilla opposite the upper 2nd molar', 'Wharton’s duct, opening at the sublingual caruncle beside the lingual frenulum (floor of mouth behind the lower incisors)', 'Several small ducts, some into the submandibular duct, others straight into the mouth'],
          ['Secretion', 'Purely serous', 'Mixed, mainly serous; most mucous units capped by demilunes', 'Mixed, mainly mucous; most units purely mucous, a few with demilunes'],
          ['Ducts inside', 'Many intercalated; well-developed intercalated and striated ducts', 'Intercalated and striated ducts present', 'Few intercalated ducts; striated ducts rare'],
        ],
      },
      paragraphs: [
        'All three are paired, compound tubuloalveolar glands with a fibrous capsule. In the parotid, septa from the capsule divide it into lobules and carry blood vessels, fat cells and interlobular ducts (slides 90, 92, 98, 105, 106).',
      ],
      keyPoints: ['Pleomorphic adenoma is a benign salivary tumour: 85% in the parotid, 5% in the submandibular and 10% in the minor glands (slide 91).'],
      sourceRefs: gm([89, 90, 91, 92, 96, 97, 98, 102, 104, 105, 106]),
    },
    {
      title: 'The tonsillar ring',
      kind: 'structure',
      paragraphs: [
        'Tonsils are clusters of lymphatic nodules around the back openings of the mouth and nose. Six of them form Waldeyer’s ring of immune protection at the shared entrance to the digestive and respiratory tracts (slides 116–119).',
      ],
      table: {
        columns: ['Tonsil', 'Where (slides 120–123)'],
        rows: [
          ['Palatine tonsils (2)', 'Either side of the entrance to the oropharynx, between the palatoglossal and palatopharyngeal arches'],
          ['Tubal tonsils (2)', 'Lateral walls of the nasopharynx, behind the openings of the auditory tubes'],
          ['Pharyngeal tonsil (adenoid)', 'Roof of the nasopharynx'],
          ['Lingual tonsil', 'Base of the tongue, on its upper surface'],
        ],
      },
      sourceRefs: gm([116, 118, 119, 120, 121, 122, 123]),
    },
  ],
  summary: [
    'Enamel (ameloblasts, 96–98% mineral), dentin (odontoblasts, 70%), cementum (cementoblasts, 45–50%, avascular); pulp with vessels via the apical foramen.',
    'Intercalated ducts add HCO₃⁻; striated ducts remove NaCl and make saliva hypotonic; myoepithelial cells expel it.',
    'Parotid: serous, Stensen’s duct. Submandibular: mixed mainly serous, Wharton’s duct. Sublingual: mixed mainly mucous.',
    'Waldeyer’s ring: 2 palatine, 2 tubal, 1 pharyngeal, 1 lingual tonsil.',
  ],
};

const lesson4: Draft = {
  id: 'gastrointestinal-system-micro-4',
  title: 'The Wall of the Tract, Oesophagus and Stomach',
  description: 'The four coats shared by the whole alimentary canal, the histology of the oesophagus, the three histological regions of the stomach, and the cells of the gastric glands.',
  xp: 25,
  sourceRefs: gm([126, 127, 129, 138, 149, 158, 164, 166, 168, 169, 173, 174, 176, 178, 179]),
  objectives: [
    'Describe the four coats of the alimentary canal',
    'Describe the oesophagus and how its muscle changes along its length',
    'Name the histological regions of the stomach and their glands',
    'Describe parietal, chief, mucous and G cells',
  ],
  chunks: [
    {
      title: 'The four coats',
      kind: 'structure',
      paragraphs: ['After the mouth, the tube is the oesophagus, stomach, small intestine and large intestine, all built on the same plan of four coats (slides 127, 129):'],
      table: {
        columns: ['Coat', 'Make-up'],
        rows: [
          ['Mucosa', 'Epithelium; lamina propria of loose connective tissue with glands, vessels and lymphoid tissue; muscularis mucosae, a thin smooth muscle layer (textbook)'],
          ['Submucosa', 'Dense irregular connective tissue with larger vessels, lymphatics and the submucosal (Meissner’s) plexus; glands in the oesophagus and duodenum (textbook)'],
          ['Muscularis externa', 'Inner circular and outer longitudinal smooth muscle with the myenteric (Auerbach’s) plexus between them (slide 138)'],
          ['Serosa or adventitia', 'The outermost layer: serosa = mesothelium (simple squamous) on loose connective tissue; adventitia = loose connective tissue with vessels, nerves and fat (slide 138)'],
        ],
      },
      notes: [{ kind: 'textbook', text: 'The lecture shows the mucosa and submucosa on labelled micrographs (slides 132–156); their make-up is filled in from Ross & Pawlina.' }],
      terms: [
        { term: 'Muscularis mucosae', meaning: 'The thin smooth muscle layer at the base of the mucosa.' },
        { term: 'Myenteric (Auerbach’s) plexus', meaning: 'Nerve plexus between the two layers of the muscularis externa; controls peristalsis.' },
      ],
      sourceRefs: gm([127, 129, 132, 138, 154, 155, 156]),
    },
    {
      title: 'The oesophagus',
      kind: 'structure',
      paragraphs: [
        'The oesophagus is a muscular tube 25–30 cm long joining the pharynx to the stomach. It starts at the lower border of the cricoid cartilage, passes through the neck and mediastinum, pierces the diaphragm at T10 and enters the stomach at T11 (slide 158).',
        'Its lining is stratified squamous non-keratinised epithelium (slide 275). Its submucosa has mucous oesophageal glands proper, seen even near the gastro-oesophageal junction (slide 276). In textbooks, the muscularis externa is skeletal in the upper third, mixed in the middle third and smooth in the lower third, and the oesophagus has an adventitia except for its short abdominal part, which has a serosa.',
      ],
      keyPoints: [
        'The lecture asks you to read about achalasia, failure of the lower oesophageal sphincter to relax (slide 149).',
        'Review question (slide 164): which is NOT true of the oesophagus — its upper quarter has skeletal muscle; its lower half has no skeletal muscle; it has numerous mucous glands; its muscularis mucosae is poorly defined? In textbooks the muscularis mucosae is a distinct, well-developed layer, so the last statement is the false one.',
      ],
      notes: [{ kind: 'textbook', text: 'The muscle distribution and adventitia are from Ross & Pawlina; the lecture shows them only on micrographs.' }],
      terms: [{ term: 'Achalasia', meaning: 'Failure of the lower oesophageal sphincter to relax, so food cannot pass easily into the stomach.' }],
      sourceRefs: gm([149, 150, 158, 163, 164, 275, 276]),
    },
    {
      title: 'Regions of the stomach',
      kind: 'comparison',
      paragraphs: [
        'Histologically the stomach is divided by the type of gland in its mucosa, not by position: the cardia near the oesophageal opening (cardiac glands), the fundic region — fundus and body, the largest part (fundic or gastric glands) — and the pylorus before the pyloric sphincter (pyloric glands) (slide 166).',
        'Rugae are folds of mucosa and submucosa. They do not increase the surface area but let the stomach expand as it fills. At higher power the surface is dotted with openings, the gastric pits or foveolae, into which the glands open (slides 168, 169).',
      ],
      table: {
        columns: ['Region', 'Pits and glands', 'Main cells (slides 174–179)'],
        rows: [
          ['Cardia', 'Short pits, short glands', 'Mostly mucous cells; parietal and chief cells rare'],
          ['Fundus and body', 'Short pits, long glands', 'Numerous parietal and chief cells'],
          ['Pylorus', 'Deep (long) pits, short coiled or tubular glands', 'Many mucous cells and G cells (endocrine); parietal and chief cells rare'],
        ],
      },
      terms: [
        { term: 'Rugae', meaning: 'Folds of gastric mucosa and submucosa that flatten as the stomach fills.' },
        { term: 'Gastric pits (foveolae)', meaning: 'Surface openings into which the gastric glands empty.' },
      ],
      sourceRefs: gm([165, 166, 168, 169, 174, 176, 178, 179]),
    },
    {
      title: 'Cells of the gastric glands',
      kind: 'definitions',
      table: {
        columns: ['Cell', 'Appearance', 'Product'],
        rows: [
          ['Parietal (oxyntic)', '“Fried-egg” look: eosinophilic cytoplasm round a central nucleus (slide 173)', 'HCl and intrinsic factor (textbook)'],
          ['Chief (zymogenic)', 'Basal nucleus; basophilic cytoplasm full of RER and secretory granules (slide 173)', 'Pepsinogen (slide 173); gastric lipase (textbook)'],
          ['Mucous neck and surface mucous cells', 'Pale, mucin-filled', 'Mucus and bicarbonate that protect the lining (textbook)'],
          ['G cells (enteroendocrine)', 'Mainly in the pyloric glands (slide 178)', 'Gastrin (textbook)'],
        ],
      },
      notes: [{ kind: 'check', text: 'Slide 173 describes the parietal cell’s “basophilic, peripherally located nucleus”; textbooks place its nucleus centrally (the “fried egg”).' }],
      terms: [
        { term: 'Parietal cell', meaning: 'Eosinophilic gastric gland cell that secretes HCl and intrinsic factor.' },
        { term: 'Chief cell', meaning: 'Basophilic gastric gland cell that secretes pepsinogen.' },
      ],
      sourceRefs: gm([173, 178]),
    },
  ],
  summary: [
    'Four coats: mucosa (epithelium, lamina propria, muscularis mucosae), submucosa, muscularis externa (inner circular, outer longitudinal, myenteric plexus), serosa or adventitia.',
    'Oesophagus: 25–30 cm, cricoid to T11; stratified squamous non-keratinised; mucous glands in the submucosa.',
    'Cardia: short pits and glands, mucous. Fundus/body: short pits, long glands, parietal + chief. Pylorus: long pits, short glands, mucous + G cells.',
    'Parietal: eosinophilic, HCl. Chief: basophilic, pepsinogen.',
  ],
};

const lesson5: Draft = {
  id: 'gastrointestinal-system-micro-5',
  title: 'The Intestines and the Anal Canal',
  description: 'How the small intestine increases its surface, how to tell duodenum, jejunum and ileum apart, the large intestine and appendix, the rectum and anal canal, and the junctions where the lining changes.',
  xp: 25,
  sourceRefs: gm([182, 183, 187, 188, 196, 202, 213, 215, 216, 221, 224, 231, 235, 236, 239, 244, 245, 246, 247, 248, 255, 259, 260, 261, 262, 263, 265, 267, 271, 273, 274, 275, 276, 277]),
  objectives: [
    'Describe villi, microvilli and plicae circulares',
    'Distinguish the duodenum, jejunum and ileum',
    'Describe the large intestine, taeniae coli, haustra and the appendix',
    'Describe the rectum and the three zones of the anal canal',
    'List the junctions of the tract and the epithelial changes at each',
  ],
  chunks: [
    {
      title: 'The small intestine',
      kind: 'structure',
      paragraphs: [
        'The small intestine is the main site of absorption and the longest part of the tract, about 6 m (5–8 m), from the pylorus to the ileocaecal junction: duodenum about 25 cm, jejunum 2.5 m (two-fifths) and ileum 3.5 m (three-fifths) (slides 182, 183).',
        'Villi are finger-like folds of epithelium and lamina propria that cover the whole inner surface; they become fewer from duodenum to ileum and have no glands in their lamina propria. Their epithelial cells carry microvilli, seen as a striated (brush) border, which further increase the absorptive surface. Plicae circulares are larger folds of mucosa and submucosa (slides 187, 188, 196, 202).',
        'The muscularis externa has inner circular and outer longitudinal smooth muscle with Auerbach’s plexus between, producing segmentation and peristalsis (slide 216).',
      ],
      terms: [
        { term: 'Villus', meaning: 'A finger-like fold of epithelium and lamina propria.' },
        { term: 'Plica circularis', meaning: 'A circular fold of mucosa and submucosa.' },
        { term: 'Crypts of Lieberkühn', meaning: 'Intestinal glands opening between the villi.' },
      ],
      sourceRefs: gm([182, 183, 187, 188, 196, 199, 202, 216]),
    },
    {
      title: 'Duodenum, jejunum and ileum',
      kind: 'comparison',
      table: {
        columns: ['Feature', 'Duodenum', 'Jejunum', 'Ileum'],
        rows: [
          ['Villi and crypts', 'Yes', 'Yes', 'Yes'],
          ['Epithelium', 'Simple columnar with goblet cells', 'Simple columnar with goblet cells', 'Simple columnar with goblet cells'],
          ['Brunner’s glands', 'Present', 'Absent', 'Absent'],
          ['Plicae circulares', '—', 'Prominent', '—'],
          ['Peyer’s patches', 'Absent', 'Absent', 'Present'],
        ],
      },
      paragraphs: ['Brunner’s glands are branched tubuloalveolar mucous glands in the submucosa of the duodenum. They secrete alkaline glycoproteins and bicarbonate, which neutralise acid chyme from the stomach and give the right pH for pancreatic enzymes (slides 213, 215).'],
      terms: [
        { term: 'Brunner’s glands', meaning: 'Duodenal submucosal glands secreting alkaline mucus.' },
        { term: 'Peyer’s patches', meaning: 'Aggregated lymphoid nodules in the ileum.' },
      ],
      sourceRefs: gm([205, 213, 214, 215, 221, 224]),
    },
    {
      title: 'The large intestine and appendix',
      kind: 'structure',
      paragraphs: [
        'The large intestine is the caecum, vermiform appendix, colon (ascending, transverse, descending, sigmoid), rectum and anal canal (slide 231). In the caecum and colon the outer longitudinal muscle is gathered into three bands, the taeniae coli, with only a very thin sheet between them; the rectum, anal canal and appendix have none. Bundles from the taeniae penetrate the circular layer irregularly, forming sacculations, the haustra coli. Small fatty projections of the serosa are the omental appendices (slides 235, 236, 247). The muscle produces segmentation and peristalsis (slide 235).',
        'Goblet cells are more numerous than in the small intestine; their mucus lubricates the increasingly solid contents. Absorptive and goblet cells turn over every 6 days, enteroendocrine cells up to every 4 weeks (slide 239). The submucosa is standard, and there may be an adventitia or serosa (slide 248).',
      ],
      table: {
        columns: ['Special layer', 'Features (slides 244–246)'],
        rows: [
          ['Collagen table', 'A thick layer (up to 5 µm) of collagen and proteoglycans between the epithelial basal lamina and that of the fenestrated venous capillaries; helps regulate water and electrolyte transport'],
          ['Basement membrane', 'A non-cellular protein–polysaccharide layer (lamina rara) separating epithelium from connective tissue'],
          ['Pericryptal fibroblast sheath', 'Dividing fibroblasts just beneath the base of the glands, next to the epithelial stem cells (in small and large intestine); they differentiate and migrate upwards; their fate is unknown, but they are thought to resemble macrophages'],
        ],
      },
      keyPoints: [
        'The appendix has a uniform layer of longitudinal muscle (no taeniae) and, most characteristically, a ring of lymphatic nodules round its circumference. In many adults its structure is lost and replaced by fibrous scar; thick mucus or stool entering from the caecum may cause appendicitis (slides 255, 257).',
        'The caecum is a blind pouch just beyond the ileocaecal valve, with the appendix as its finger-like extension; its histology is like the colon (slide 259).',
      ],
      terms: [
        { term: 'Taeniae coli', meaning: 'Three bands of longitudinal muscle on the caecum and colon.' },
        { term: 'Haustra', meaning: 'Sacculations of the colon wall between the taeniae.' },
      ],
      sourceRefs: gm([231, 235, 236, 239, 244, 245, 246, 247, 248, 251, 255, 257, 259]),
    },
    {
      title: 'The rectum and anal canal',
      kind: 'structure',
      paragraphs: [
        'The rectum is the dilated end of the canal, 10–15 cm long. Its mucosa is like the colon’s, with many goblet-cell-rich glands, and it has an adventitia. It is recognised by 3–4 semilunar transverse rectal folds (Houston’s valves), formed by the inner circular muscle, which support the weight of faeces and stop it pressing on the anus and causing an urge to defecate. The circular muscle thickens to form the internal anal sphincter (slides 260–263). Its features: no taeniae coli, no ring of lymphatic nodules, and transverse rectal folds (slide 265).',
        'The anal canal, about 4 cm long, runs from the upper surface of the pelvic diaphragm to the anus, where its lining continues with the skin (slide 271).',
      ],
      table: {
        columns: ['Zone', 'Lining (slide 267)'],
        rows: [
          ['Colorectal (upper third)', 'Simple columnar, mostly goblet cells, with many anal glands'],
          ['Anal transitional (middle third)', 'Simple columnar → stratified columnar → stratified squamous non-keratinised; site of colorectal cancer; the muscularis mucosae ends about here'],
          ['Squamous (lower third)', 'Stratified squamous keratinised, continuous with perianal skin'],
        ],
      },
      keyPoints: [
        'Anal glands reach into the submucosa and even the muscularis externa. Around the anus are large apocrine circumanal glands that secrete an oily fluid; there are a few sebaceous glands distally but no sweat glands (slides 267, 273).',
      ],
      sourceRefs: gm([254, 260, 261, 262, 263, 265, 266, 267, 268, 271, 273]),
    },
    {
      title: 'Junctions of the tract',
      kind: 'comparison',
      paragraphs: [
        'The lining changes abruptly at four junctions: gastro-oesophageal, gastroduodenal, ileocaecal and anorectal. Along the tract the epithelium is: oesophagus stratified squamous non-keratinised; stomach simple columnar; small and large intestine simple columnar with a brush border and goblet cells; anal canal stratified squamous non-keratinised; anus stratified squamous keratinised (slides 274, 275).',
        'At the gastro-oesophageal junction the stratified squamous epithelium changes suddenly to simple columnar mucus-secreting gastric epithelium; oesophageal glands may be seen in the submucosa (slide 276).',
        'At the anorectal junction the simple columnar lining changes to stratified squamous non-keratinised. Rectal glands are shorter and farther apart than in the colon; the muscularis mucosae and glands end near the anal valves; the lamina propria is replaced by dense irregular connective tissue low in the canal. The internal anal sphincter (smooth) gives way lower down to the external anal sphincter (skeletal), with the levator ani outside it (slide 277).',
      ],
      sourceRefs: gm([274, 275, 276, 277, 278]),
    },
  ],
  summary: [
    'Small intestine ~6 m; villi + microvilli + plicae increase surface; crypts of Lieberkühn.',
    'Duodenum: Brunner’s glands. Jejunum: prominent plicae. Ileum: Peyer’s patches.',
    'Colon: many goblet cells, taeniae, haustra, collagen table; appendix: ring of lymphoid nodules, uniform muscle.',
    'Anal canal: colorectal (columnar) → transitional → squamous (keratinised); internal sphincter smooth, external skeletal.',
  ],
};

const lesson6: Draft = {
  id: 'gastrointestinal-system-micro-6',
  title: 'The Liver, Gallbladder and Pancreas',
  description: 'The capsule, lobes and development of the liver, its three functional units (classic lobule, portal lobule, acinus), the biliary tree, hepatitis and jaundice, the gallbladder wall, and the exocrine and endocrine pancreas.',
  xp: 25,
  sourceRefs: gm([282, 283, 284, 285, 287, 289, 290, 294, 297, 300, 302, 317, 318, 320, 321, 322, 323, 324, 325, 327, 328, 330, 333, 340, 346]),
  objectives: [
    'Describe the liver’s capsule, lobes and origin',
    'Compare the classic lobule, portal lobule and liver acinus',
    'Explain the zones of the acinus and their clinical meaning',
    'Trace the biliary tree',
    'Describe hepatitis A, B and C and jaundice',
    'Describe the wall of the gallbladder and the pancreas',
  ],
  chunks: [
    {
      title: 'The liver',
      kind: 'structure',
      paragraphs: [
        'The liver is the largest gland and largest internal organ, about 1.5 kg (2.5% of adult body weight), in the right upper and part of the left upper quadrant, protected by the ribs (slides 283, 284).',
        'It is wrapped in a fibrous capsule (Glisson’s capsule) covered by visceral peritoneum, except where it touches the diaphragm or other organs. Septa from the capsule divide it into right, left, caudate and quadrate lobes, which are divided further into lobules (slides 284–286).',
        'The liver develops as an endodermal outgrowth of the foregut at the site of the future duodenum, the hepatic diverticulum, whose cells multiply into hepatocytes arranged in liver cords (slide 287). Hepatocytes are polyhedral (slide 294). Blood leaves through three hepatic veins, formed from sublobular veins that collect from the central veins, and drains into the IVC (slide 300).',
      ],
      terms: [{ term: 'Glisson’s capsule', meaning: 'The fibrous capsule of the liver.' }],
      sourceRefs: gm([283, 284, 285, 286, 287, 294, 300]),
    },
    {
      title: 'Three ways to divide the liver',
      kind: 'comparison',
      table: {
        columns: ['Unit', 'Shape and centre', 'What it shows (slides 289–321)'],
        rows: [
          ['Classic lobule', 'Roughly hexagonal, a central vein in the middle, portal triads at the corners', 'The path blood follows: from the portal triad (hepatic artery, portal vein) through sinusoids to the central vein; bile and lymph flow the other way, to the triads'],
          ['Portal lobule', 'Triangle joining 3 neighbouring central veins, a portal triad in the middle', 'The exocrine function: bile flows from near the central veins towards the bile duct in the triad'],
          ['Liver acinus (of Rappaport)', 'Diamond (lozenge); long axis between 2 central veins, short axis between 2 portal areas', 'Blood flow and its zones; explains patterns of damage, regeneration and toxicity'],
        ],
      },
      paragraphs: ['A periportal space (of Mall) between the portal canal and the outermost hepatocytes is where lymph forms in the liver (slide 297).'],
      steps: [
        { label: 'Zone 1 (periportal)', detail: 'Closest to the portal triad (periphery of the classic lobule); richest blood supply. First to receive oxygen, nutrients and toxins, first to change after bile duct blockage, last to die when circulation fails and first to regenerate (slides 302, 320, 321).' },
        { label: 'Zone 2 (intermediate)', detail: 'Between the two (slide 302).' },
        { label: 'Zone 3 (pericentral)', detail: 'Closest to the central vein. First to die in hypoxia or poor perfusion (centrilobular necrosis) and first to accumulate fat; last to respond to toxins and bile stasis (slides 302, 320, 321).' },
      ],
      terms: [
        { term: 'Portal triad', meaning: 'A branch of the hepatic artery, portal vein and bile duct together.' },
        { term: 'Centrilobular necrosis', meaning: 'Death of zone 3 cells around the central vein when perfusion falls.' },
      ],
      sourceRefs: gm([289, 290, 297, 302, 317, 318, 320, 321]),
    },
    {
      title: 'The biliary tree',
      kind: 'pathway',
      paragraphs: ['Bile flows towards the periphery of the classic lobule, opposite to the blood (slide 323). The pathway (slide 322):'],
      steps: [
        { label: 'Bile canaliculi', detail: 'Expanded spaces between neighbouring hepatocytes that take the first flow of bile to the edge of the lobule (slide 324).' },
        { label: 'Canals of Hering', detail: 'Bile ductules of modified hepatocytes and low cuboidal cholangiocytes; their cells can regenerate liver cells and duct cells, and even half the liver removed can grow back to 1.5 kg (slide 324).' },
        { label: 'Interlobular bile ducts', detail: 'In the portal areas; one layer of cuboidal cholangiocytes with short microvilli and a single long primary cilium that monitors bile flow and composition (slide 325).' },
        { label: 'Right and left hepatic ducts', detail: 'Stratified cholangiocyte epithelium; leave at the porta hepatis (slide 325) and join as the common hepatic duct.' },
        { label: 'Cystic and common bile ducts', detail: 'The cystic duct links the gallbladder; with the common hepatic duct it forms the common bile duct (slide 322).' },
      ],
      sourceRefs: gm([322, 323, 324, 325]),
    },
    {
      title: 'Hepatitis and jaundice',
      kind: 'clinical',
      table: {
        columns: ['Condition', 'Features (slides 327, 328)'],
        rows: [
          ['Hepatitis A (infectious)', 'Faecal–oral; short incubation (2–6 weeks); usually not fatal but may cause jaundice'],
          ['Hepatitis B (serum)', 'Blood and blood products; long incubation (6 weeks–5 months); worse outcomes: cirrhosis, jaundice, death'],
          ['Hepatitis C', 'Most transfusion-related hepatitis; associated with hepatocellular carcinoma'],
          ['Jaundice (icterus)', 'Excess blood bilirubin with yellow skin and sclera; hereditary, or from haemolysis (haemolytic), liver dysfunction, or blocked bile passages (obstructive)'],
        ],
      },
      paragraphs: ['Hepatitis is inflammation of the liver, usually viral but sometimes toxic (slide 327).'],
      sourceRefs: gm([327, 328]),
    },
    {
      title: 'The gallbladder',
      kind: 'structure',
      paragraphs: [
        'The gallbladder holds about 50 ml and concentrates and stores bile. Cholecystokinin from endocrine cells of the small intestine makes it contract and release bile into the duodenum (slide 330).',
      ],
      table: {
        columns: ['Layer', 'Features (slide 333)'],
        rows: [
          ['Mucosa', 'Simple columnar epithelium on a lamina propria of loose connective tissue with lymphoid tissue; temporary folds (like irregular villi) that flatten when it is full; deep crypts (diverticula) between them, which look like glands — but there are no glands except at the neck'],
          ['Fibromuscular layer', 'Smooth muscle in loose connective tissue rich in elastic fibres (no muscularis mucosae or submucosa)'],
          ['Perimuscular connective tissue', 'Blood vessels, lymphatics and nerves'],
          ['Serosa', 'Where it faces the peritoneal cavity'],
        ],
      },
      sourceRefs: gm([330, 333]),
    },
    {
      title: 'The pancreas',
      kind: 'structure',
      paragraphs: [
        'The exocrine pancreas is a serous gland of acini. Its ducts start inside the acini as centroacinar cells, then run intercalated ducts → intralobular ducts → interlobular ducts → the main pancreatic duct (of Wirsung). There are no striated ducts, which helps tell it from the parotid (slide 340).',
        'The endocrine pancreas is the islets of Langerhans, pale clusters among the acini, with α cells, β cells and δ (delta) cells (slide 346). In textbooks α cells make glucagon, β cells insulin and δ cells somatostatin; the acini make digestive enzymes and the ducts add bicarbonate under secretin.',
      ],
      terms: [
        { term: 'Centroacinar cells', meaning: 'Pale duct cells that start the duct system inside a pancreatic acinus.' },
        { term: 'Islets of Langerhans', meaning: 'Endocrine cell clusters of the pancreas.' },
      ],
      sourceRefs: gm([340, 341, 346]),
    },
  ],
  summary: [
    'Liver 1.5 kg; Glisson’s capsule; 4 lobes; from the foregut endoderm; drains by 3 hepatic veins.',
    'Classic lobule (blood → central vein), portal lobule (bile → triad), acinus (zones 1–3; zone 3 dies first in hypoxia).',
    'Canaliculi → canals of Hering → bile ducts → hepatic ducts → common hepatic → + cystic = common bile duct.',
    'Gallbladder: no muscularis mucosae or submucosa, glands only at the neck. Pancreas: centroacinar cells, no striated ducts, islets (α, β, δ).',
  ],
};

export const lessons: Draft[] = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6].map((lesson) => ({
  ...lesson,
  ...readingExtras[lesson.id],
  interactive: interactive[lesson.id],
}));
