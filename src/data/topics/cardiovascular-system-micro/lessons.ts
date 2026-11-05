// Anatomy → Cardiovascular System (microanatomy) — the four lessons (reading layer).
// Source: the "Cardiovascular System (Micro)" lecture deck (cm in sources.ts).
import type { LessonDraft } from '@/data/topics/build';
import { interactive, readingExtras } from '@/data/topics/cardiovascular-system-micro/interactive';
import { cm, type ConceptId } from '@/data/topics/cardiovascular-system-micro/sources';

type Draft = LessonDraft<ConceptId>;

const lesson1: Draft = {
  id: 'cardiovascular-system-micro-1',
  title: 'The Heart Wall, Valves and Conducting System',
  description: 'What the blood vascular system is made of and does, the layers of the heart wall, the heart valves and the cells that start and spread the heartbeat.',
  xp: 25,
  sourceRefs: cm([2, 10, 11, 13, 14, 15, 16, 18, 19]),
  objectives: [
    'List the parts and functions of the blood vascular system',
    'Describe the endocardium, subendocardium, myocardium and epicardium',
    'Describe the atrioventricular and semilunar valves',
    'Trace the conducting system from the SA node to the Purkinje fibres and describe Purkinje fibres',
  ],
  chunks: [
    {
      title: 'The blood vascular system',
      kind: 'overview',
      paragraphs: [
        'The blood vascular system is made of the heart, arteries, veins and capillaries (slide 2). It carries oxygen and nutrients to the tissues, takes carbon dioxide and waste products away from them, and carries hormones from where they are made to their target cells (slide 10).',
        'The heart is a four-chambered pump of two atria, which receive blood, and two ventricles, which discharge it, inside a fibroserous sac, the pericardium (slide 11). It receives sympathetic nerves from the upper thoracic spinal cord and parasympathetic nerves through the vagus nerves; these change the rate of the heartbeat but do not start it (slide 13).',
      ],
      terms: [
        { term: 'Pericardium', meaning: 'The fibroserous sac around the heart.' },
        { term: 'Atria', meaning: 'The two receiving chambers of the heart.' },
      ],
      sourceRefs: cm([2, 10, 11, 13]),
    },
    {
      title: 'The layers of the heart wall',
      kind: 'structure',
      steps: [
        { label: 'Endocardium', detail: 'Lines the lumen of the heart: simple squamous epithelium (endothelium) (slide 14).' },
        { label: 'Subendocardium', detail: 'Connective tissue under it, with veins, nerves and the Purkinje fibres (slide 14).' },
        { label: 'Myocardium', detail: 'Layers of cardiac muscle cells arranged in a spiral; contracts to drive blood into the arteries (slide 14).' },
        { label: 'Epicardium', detail: 'The outermost layer and the visceral layer of the pericardium: a mesothelium (simple squamous epithelium) over fibroelastic connective tissue holding nerves, coronary vessels and fat (slide 15).' },
      ],
      terms: [
        { term: 'Endocardium', meaning: 'The inner lining of the heart: endothelium on a thin connective tissue layer.' },
        { term: 'Epicardium', meaning: 'The outer layer of the heart wall, the visceral layer of serous pericardium.' },
        { term: 'Mesothelium', meaning: 'The simple squamous epithelium covering serous membranes.' },
      ],
      keyPoints: ['Purkinje fibres run in the subendocardium; coronary vessels and fat lie in the epicardium.'],
      sourceRefs: cm([14, 15]),
    },
    {
      title: 'The heart valves',
      kind: 'comparison',
      table: {
        columns: ['Valve', 'Where', 'Cusps'],
        rows: [
          ['Right atrioventricular (tricuspid)', 'Right atrium → right ventricle', '3 interlocking cusps'],
          ['Left atrioventricular (bicuspid, mitral)', 'Left atrium → left ventricle', '2 interlocking cusps'],
          ['Pulmonary and aortic (semilunar)', 'Pulmonary trunk and aorta', '3 cusps each'],
        ],
      },
      paragraphs: ['The atrioventricular valves stop ventricular blood flowing back (regurgitating) into the atria (slides 16, 18).'],
      terms: [{ term: 'Regurgitation', meaning: 'Backward flow of blood through a valve.' }],
      sourceRefs: cm([16, 18]),
    },
    {
      title: 'The conducting system',
      kind: 'pathway',
      steps: [
        { label: 'SA node', detail: 'Starts the heartbeat; in the superior wall of the right atrium near the opening of the superior vena cava (slide 18).' },
        { label: 'AV node', detail: 'Receives the impulse from the atria (slide 19).' },
        { label: 'AV bundle (of His)', detail: 'A band of conducting tissue running from the AV node into the interventricular septum, where it divides into two branches (slide 19).' },
        { label: 'Purkinje fibres', detail: 'The continuation of the branches: large, modified cardiac muscle cells (slide 19).' },
      ],
      terms: [
        { term: 'SA node', meaning: 'Sinoatrial node, the pacemaker of the heart.' },
        { term: 'Purkinje fibres', meaning: 'Large modified cardiac muscle cells that spread the impulse through the ventricles.' },
      ],
      sourceRefs: cm([18, 19]),
    },
  ],
  summary: [
    'Blood vascular system: heart, arteries, capillaries, veins; carries O₂, nutrients, CO₂, wastes and hormones.',
    'Heart wall: endocardium (endothelium) → subendocardium (Purkinje fibres) → myocardium (spiral cardiac muscle) → epicardium (mesothelium, coronary vessels, fat).',
    'Tricuspid 3 cusps, mitral 2, semilunar 3 each.',
    'SA node → AV node → bundle of His → two branches → Purkinje fibres.',
  ],
};

const lesson2: Draft = {
  id: 'cardiovascular-system-micro-2',
  title: 'Arteries',
  description: 'The three tunics of the arterial wall and how elastic arteries, muscular arteries, small arteries, arterioles and metarterioles differ.',
  xp: 25,
  sourceRefs: cm([21, 24, 26, 27, 31, 33, 34, 35, 39, 41, 43, 45]),
  objectives: [
    'Name the three tunics of an artery',
    'List the types of artery with their sizes',
    'Describe the wall of an elastic artery and of a muscular artery',
    'Describe small arteries, arterioles and metarterioles, and what precapillary sphincters do',
  ],
  chunks: [
    {
      title: 'The arterial wall',
      kind: 'structure',
      paragraphs: ['Arteries carry blood away from the heart to organs and tissues. Their walls have three layers (tunicae): the tunica intima (inner), tunica media (middle) and tunica adventitia (outer) (slide 21).'],
      table: {
        columns: ['Type', 'Size'],
        rows: [
          ['Elastic (conducting) arteries', 'Large: the aorta and its major branches'],
          ['Muscular (distributing) arteries', 'Medium: most named arteries'],
          ['Arterioles', '10–100 µm'],
          ['Metarterioles', 'About 8 µm'],
        ],
      },
      terms: [
        { term: 'Tunica intima', meaning: 'The inner layer: endothelium and subendothelial connective tissue.' },
        { term: 'Tunica media', meaning: 'The middle layer: smooth muscle and elastic tissue.' },
        { term: 'Tunica adventitia', meaning: 'The outer connective tissue layer.' },
      ],
      sourceRefs: cm([21, 24]),
    },
    {
      title: 'Elastic arteries',
      kind: 'structure',
      paragraphs: [
        'Elastic (conducting) arteries are the large ones: the aorta and its major branches. They smooth out the changes in blood pressure with each heartbeat. Small vessels (vasa vasorum) and nerves lie in their adventitia and media (slide 26).',
        'Their walls have many sheets of elastic lamellae. The intima has endothelium, subendothelial connective tissue and an inconspicuous internal elastic membrane; the media has many layers of smooth muscle separated by elastic lamellae (slide 27). Thick concentric sheets of elastic membrane in the media, the fenestrated membranes, give elastic arteries their character, and vasa vasorum supply the wall (slide 31).',
      ],
      terms: [
        { term: 'Vasa vasorum', meaning: '“Vessels of the vessels”: small vessels supplying the wall of a large vessel.' },
        { term: 'Fenestrated membranes', meaning: 'Thick concentric sheets of elastic tissue with openings, in the media of elastic arteries.' },
      ],
      sourceRefs: cm([26, 27, 31]),
    },
    {
      title: 'Muscular and small arteries',
      kind: 'comparison',
      paragraphs: [
        'Muscular (distributing) arteries carry blood to the organs and include most named arteries; they are medium-sized, smaller than elastic arteries but larger than arterioles (slide 33). Their intima has endothelium and a prominent internal elastic lamina; the media is thick, with layers of smooth muscle; larger ones have an external elastic lamina at the border with the adventitia, which contains vasa vasorum (slide 34). They have more smooth muscle and less elastin in the media than elastic arteries (slide 35).',
        'Small arteries may have up to eight layers of smooth muscle in the media; the intima has an internal elastic membrane and ordinary endothelium, and the adventitia is a thin, ill-defined sheath (slide 39).',
      ],
      terms: [{ term: 'Internal elastic lamina', meaning: 'A wavy band of elastic tissue between intima and media, prominent in muscular arteries.' }],
      sourceRefs: cm([33, 34, 35, 39]),
    },
    {
      title: 'Arterioles and metarterioles',
      kind: 'regulation',
      paragraphs: [
        'Arterioles (10–100 µm, less than 0.1 mm) are the smallest, terminal arteries and regulate blood pressure. The lumen is narrow; its diameter usually equals the wall thickness (slide 41). The adventitia is scanty, the media has up to two layers of smooth muscle, and the intima is just endothelium, basal lamina and scant connective tissue (slide 43).',
        'Metarterioles (about 8 µm) arise from arterioles and give rise to capillaries. Incomplete rings of smooth muscle surround them, and single smooth muscle cells at the start of capillaries form precapillary sphincters; when these constrict, blood cannot enter the capillary bed (slide 45).',
      ],
      terms: [{ term: 'Precapillary sphincter', meaning: 'A smooth muscle cell around the origin of a capillary that controls flow into it.' }],
      sourceRefs: cm([41, 43, 45]),
    },
  ],
  summary: [
    'Tunica intima, media, adventitia.',
    'Elastic arteries: aorta and big branches; many elastic lamellae and fenestrated membranes; damp pressure swings.',
    'Muscular arteries: most named arteries; thick muscular media, prominent internal elastic lamina, external elastic lamina in larger ones.',
    'Small arteries: up to 8 muscle layers. Arterioles: 10–100 µm, up to 2 layers, lumen ≈ wall thickness. Metarterioles ~8 µm with precapillary sphincters.',
  ],
};

const lesson3: Draft = {
  id: 'cardiovascular-system-micro-3',
  title: 'Capillaries',
  description: 'The structure of capillaries and their endothelial cells, the three types of capillary, pericytes, and arteriovenous shunts.',
  xp: 25,
  sourceRefs: cm([49, 50, 51, 52, 54, 56, 58, 60, 61, 63, 65, 66, 68]),
  objectives: [
    'Describe the size, structure and function of a capillary',
    'Describe the features of capillary endothelial cells',
    'Compare continuous, fenestrated and sinusoidal capillaries and say where each is found',
    'Describe pericytes and arteriovenous shunts',
  ],
  chunks: [
    {
      title: 'What a capillary is',
      kind: 'structure',
      paragraphs: [
        'Capillaries are about 8–10 µm across and usually less than 1 mm long. They are selectively permeable, exchanging oxygen, carbon dioxide, metabolites, nutrients, wastes, signalling molecules and hormones between blood and tissues (slide 49). They form capillary beds between arterioles and venules; each is a single layer of endothelial cells rolled into a tube, surrounded by a basal lamina and occasional pericytes (slide 50).',
      ],
      steps: [
        { label: 'Shape', detail: 'Nucleated, polygonal cells with very thin (attenuated) cytoplasm (slide 51).' },
        { label: 'Organelles', detail: 'Golgi complex, ribosomes, mitochondria, some rough ER (slide 51).' },
        { label: 'Filaments', detail: 'Intermediate filaments of desmin, vimentin or both around the nucleus, for support (slide 51).' },
        { label: 'Junctions', detail: 'Mostly tight junctions (fasciae occludentes), with some desmosomes and gap junctions (slide 52).' },
        { label: 'Vesicles', detail: 'Characteristic pinocytotic vesicles; the lumen may admit only one red cell at a time (slide 52).' },
      ],
      terms: [
        { term: 'Pericyte', meaning: 'A contractile cell wrapped around a capillary, sharing its basal lamina.' },
        { term: 'Fasciae occludentes', meaning: 'Band-like tight junctions between endothelial cells.' },
      ],
      sourceRefs: cm([49, 50, 51, 52]),
    },
    {
      title: 'Three types of capillary',
      kind: 'classification',
      paragraphs: ['Capillaries are classified by the structure of their endothelial cells and whether the basal lamina is continuous: continuous (somatic), fenestrated (visceral) and sinusoidal (sinusoids) (slide 54).'],
      table: {
        columns: ['', 'Continuous', 'Fenestrated', 'Sinusoidal (discontinuous)'],
        rows: [
          ['Where', 'Muscle, lung, CNS', 'Endocrine glands, gallbladder, kidney, intestinal tract', 'Liver, spleen, bone marrow'],
          ['Wall', 'Unbroken endothelium with occluding junctions; only molecules under 10,000 daltons pass between cells', 'Pores (fenestrations) 80–100 nm across; pinocytotic vesicles', 'Wide, irregular; gaps between cells; basal lamina partly or wholly absent'],
          ['Special cells', 'Pericytes in some', '—', 'Kupffer cells and Ito cells (liver)'],
        ],
      },
      terms: [{ term: 'Fenestration', meaning: 'A pore through the endothelial cell of a fenestrated capillary.' }],
      sourceRefs: cm([54, 56, 60, 65, 66]),
    },
    {
      title: 'Continuous capillaries and pericytes',
      kind: 'structure',
      paragraphs: [
        'Continuous capillaries, in muscle, lung and the CNS, show occluding junctions in cross-section and let only small molecules (under 10,000 daltons) pass between the endothelial cells (slide 56).',
        'In some continuous capillaries, pericytes lie with the endothelium. They are contractile, controlled by nitric oxide from the endothelial cells, and they support and stabilise the capillary through physical and chemical signalling with the endothelium (slide 58).',
      ],
      sourceRefs: cm([56, 58]),
    },
    {
      title: 'Fenestrated capillaries',
      kind: 'structure',
      paragraphs: [
        'Fenestrated capillaries are found in endocrine glands and where fluid and metabolites are absorbed: the gallbladder, kidney and intestinal tract. Their fenestrations, 80–100 nm across, give channels through the wall, and they have pinocytotic vesicles (slide 60).',
        'A fenestration may be closed by a thin, non-membranous diaphragm which, seen from the lumen, looks like a cartwheel with a central thickening and 14 wedge-shaped gaps. It comes from the glycocalyx that lined the pinocytotic vesicle the fenestration may have formed from (slide 61). In the gut and gallbladder, fenestrations are few and the wall thicker when no absorption is happening; during absorption the wall thins and fenestrations and vesicles increase quickly (slide 63).',
      ],
      notes: [{ kind: 'clarified', text: 'Histology textbooks give fenestrations as about 60–80 nm (Ross & Pawlina); the lecture gives 80–100 nm. Learn the lecture’s figure for its exam.' }],
      sourceRefs: cm([60, 61, 63]),
    },
    {
      title: 'Sinusoids and arteriovenous shunts',
      kind: 'structure',
      paragraphs: [
        'Sinusoidal (discontinuous) capillaries, in the liver, spleen and bone marrow, are wider and more irregular than other capillaries, and their structure varies from organ to organ (slide 65). In the liver they are associated with Kupffer cells (stellate sinusoidal macrophages) and vitamin A–storing Ito cells (hepatic stellate cells); in the spleen the endothelial cells are spindle-shaped with gaps between them; the basal lamina may be partly or completely absent (slide 66).',
        'Arteriovenous (AV) shunts let blood bypass capillaries by joining arteries directly to veins. They are common in the skin of the fingertips, nose and lips and in the erectile tissue of the penis and clitoris, and they help regulate body temperature at the surface (slide 68).',
      ],
      terms: [
        { term: 'Kupffer cells', meaning: 'Macrophages lining the liver sinusoids.' },
        { term: 'Ito cells', meaning: 'Hepatic stellate cells that store vitamin A.' },
      ],
      sourceRefs: cm([65, 66, 68]),
    },
  ],
  summary: [
    'Capillaries: 8–10 µm, < 1 mm long; one layer of endothelium + basal lamina + occasional pericytes.',
    'Continuous (muscle, lung, CNS; < 10,000 Da); fenestrated (endocrine, gallbladder, kidney, gut; 80–100 nm pores, cartwheel diaphragm with 14 gaps); sinusoids (liver, spleen, marrow; gaps, absent basal lamina).',
    'Pericytes: contractile, controlled by endothelial NO, stabilise capillaries.',
    'AV shunts: fingertips, nose, lips, erectile tissue; thermoregulation.',
  ],
};

const lesson4: Draft = {
  id: 'cardiovascular-system-micro-4',
  title: 'Veins, Atypical Vessels and Lymphatics',
  description: 'Venules and small, medium and large veins with their tunics and valves; coronary arteries, dural venous sinuses and the great saphenous vein; and lymphatic vessels.',
  xp: 25,
  sourceRefs: cm([70, 71, 72, 73, 74, 77, 78, 79, 81, 82, 84, 86, 88, 89, 90, 91, 92, 93, 94]),
  objectives: [
    'List the four types of vein by size',
    'Describe venules and why inflammation causes oedema there',
    'Describe the tunics of medium and large veins and the role of venous valves',
    'Describe the atypical vessels named in the lecture',
    'Describe lymphatic capillaries and vessels and the course of lymph',
  ],
  chunks: [
    {
      title: 'Venules and small veins',
      kind: 'classification',
      paragraphs: [
        'The coats of veins are less distinct than those of arteries. Veins are grouped by size into venules, small veins, medium veins and large veins (slide 70).',
        'Venules, divided into postcapillary and muscular venules, receive blood from capillaries and can be as small as 0.1 mm. The junctions between endothelial cells of postcapillary venules are the loosest in the microvasculature, so white cells migrate out here during inflammation, causing oedema (slide 71). Small veins are under 1 mm and continue from muscular venules (slide 72).',
      ],
      terms: [{ term: 'Postcapillary venule', meaning: 'The first venule after a capillary bed; the main site where white cells leave the blood.' }],
      sourceRefs: cm([70, 71, 72]),
    },
    {
      title: 'Medium veins',
      kind: 'structure',
      paragraphs: ['Medium veins are most of the named veins, usually run with arteries and are up to 10 mm across, e.g. the radial, tibial and popliteal veins (slide 73). They have valves, most numerous in the lower limbs, which stop blood flowing back under gravity (slide 74).'],
      table: {
        columns: ['Tunic', 'Medium vein'],
        rows: [
          ['Intima', 'Endothelium and basal lamina, a thin subendothelial layer with occasional smooth muscle cells; sometimes a thin internal elastic membrane'],
          ['Media', 'Thinner than in a medium artery: several layers of circular smooth muscle with collagen and elastic fibres; sometimes longitudinal muscle just under the adventitia'],
          ['Adventitia', 'Usually thicker than the media: collagen and networks of elastic fibres'],
        ],
      },
      sourceRefs: cm([73, 74, 77, 78, 79]),
    },
    {
      title: 'Large veins',
      kind: 'structure',
      paragraphs: [
        'Large veins are more than 10 mm across, e.g. the superior and inferior venae cavae, subclavian veins and hepatic portal vein. The media is relatively thin and the adventitia relatively thick (slide 81).',
        'The intima has endothelium, basal lamina, a little subendothelial connective tissue and some smooth muscle; there is no clear border with the media, so it is hard to say which layer muscle near the endothelium belongs to (slide 82). The media is thin, with circular smooth muscle, collagen and some fibroblasts (slide 84). The adventitia, the thickest layer, has collagen, elastic fibres, fibroblasts and longitudinal smooth muscle (slide 86).',
      ],
      sourceRefs: cm([81, 82, 84, 86]),
    },
    {
      title: 'Atypical blood vessels',
      kind: 'clinical',
      steps: [
        { label: 'Coronary arteries', detail: 'Medium-sized muscular arteries from the proximal ascending aorta, on the surface of the heart; their walls are thicker than comparable limb arteries because of a lot of circular smooth muscle in the media (slide 88). Atherosclerosis narrowing them reduces blood and oxygen to the heart muscle and causes ischaemic heart disease (slide 89).' },
        { label: 'Dural venous sinuses', detail: 'Venous channels in the cranial cavity: broad spaces within the dura mater, lined by endothelium and without smooth muscle (slide 90).' },
        { label: 'Great saphenous vein', detail: 'The long subcutaneous vein of the lower limb, from the foot to the femoral vein. Thick circular muscle in the media, many longitudinal muscle bundles in the intima and adventitia, and a thin, poorly developed internal elastic membrane (slide 91).' },
      ],
      terms: [{ term: 'Ischaemic heart disease', meaning: 'Heart damage from too little blood and oxygen to the myocardium, usually from coronary atherosclerosis.' }],
      sourceRefs: cm([88, 89, 90, 91]),
    },
    {
      title: 'Lymphatic vessels',
      kind: 'pathway',
      paragraphs: [
        'Lymphatic vessels are thin-walled, one-way channels with valves that collect excess interstitial fluid and return it to the bloodstream. Lymphatic capillaries, the smallest, begin blind-ended and are plentiful in loose connective tissue such as the lamina propria (slide 92). They are more permeable than blood capillaries and collect protein-rich tissue fluid (slide 93).',
      ],
      steps: [
        { label: 'Lymphatic capillaries', detail: 'Blind-ended; tissue fluid that enters becomes lymph (slides 92, 94).' },
        { label: 'Lymphatic vessels', detail: 'Formed as the capillaries join (slide 93).' },
        { label: 'Lymph nodes', detail: 'Lymph passes through them and meets cells of the immune system (slide 94).' },
        { label: 'Thoracic duct and right lymphatic trunk', detail: 'The thoracic duct, the largest, empties into veins on the left; the right lymphatic trunk is the other main channel (slide 93).' },
      ],
      terms: [{ term: 'Lymph', meaning: 'Tissue fluid once it has entered a lymphatic vessel.' }],
      sourceRefs: cm([92, 93, 94]),
    },
  ],
  summary: [
    'Veins: venules, small (< 1 mm), medium (≤ 10 mm, valves, most named veins), large (> 10 mm).',
    'Postcapillary venules: loosest junctions; leucocytes leave here in inflammation → oedema.',
    'Medium vein: thin media, adventitia thicker than media. Large vein: thin media, thickest adventitia with longitudinal muscle.',
    'Coronary arteries: thick muscular media; dural sinuses: no smooth muscle; great saphenous: thick muscle, longitudinal bundles.',
    'Lymphatics: blind-ended, more permeable, valves; thoracic duct (left) and right lymphatic trunk.',
  ],
};

export const lessons: Draft[] = [lesson1, lesson2, lesson3, lesson4].map((lesson) => ({
  ...lesson,
  ...readingExtras[lesson.id],
  interactive: interactive[lesson.id],
}));
