// Anatomy → Cardiovascular System (microanatomy): each lesson's interactive layer.
import type { LessonConfusion } from '@/data/lesson-types';
import { ask, learn, match, mcq, order, recall, type InteractiveDraft } from '@/data/topics/build';
import { cm, TOPIC_ID, type ConceptId } from '@/data/topics/cardiovascular-system-micro/sources';

type Steps = InteractiveDraft<ConceptId>[];
const L = (n: number) => `${TOPIC_ID}-${n}`;

export const interactive: Record<string, Steps> = {
  [L(1)]: [
    ask(mcq('i1-01', 'heart-layers', 'Before you read: in which layer of the heart wall do the Purkinje fibres run?', 'Subendocardium', ['Epicardium', 'Myocardium only', 'Fibrous pericardium'], { explanation: 'Slide 14.', skill: 'prediction' })),
    learn('Four layers, inside out', ['Endocardium (endothelium), subendocardium (veins, nerves, Purkinje fibres), myocardium (spiral cardiac muscle) and epicardium (mesothelium over fibroelastic tissue with coronary vessels and fat).'], { sourceRefs: cm([14, 15]) }),
    ask(order('i1-02', 'heart-layers', 'Order the layers of the heart wall from the lumen outwards:', ['Endocardium', 'Subendocardium', 'Myocardium', 'Epicardium'], { explanation: 'Slides 14–15.' })),
    learn('Valves', ['Tricuspid: 3 cusps; mitral (bicuspid): 2; aortic and pulmonary semilunar valves: 3 cusps each. The AV valves stop blood flowing back into the atria.'], { sourceRefs: cm([16, 18]) }),
    ask(match('i1-03', 'heart-valves', 'Match each valve to its number of cusps:', [['Tricuspid', 'Three interlocking cusps'], ['Mitral', 'Two interlocking cusps'], ['Aortic', 'Three semilunar cusps']], { explanation: 'Slides 16, 18.' })),
    ask(order('i1-04', 'heart-conduction', 'Order the conducting system:', ['SA node', 'AV node', 'Bundle of His', 'Purkinje fibres'], { explanation: 'Slides 18–19.' })),
    recall('r1-01', 'heart-layers', 'Describe the epicardium.', ['The outermost layer of the heart and the visceral layer of the pericardium.', 'Mesothelium (simple squamous epithelium) on the surface.', 'Fibroelastic connective tissue beneath, with nerves, coronary vessels and fat.'], cm([15])),
  ],
  [L(2)]: [
    ask(mcq('i2-01', 'elastic-arteries', 'Before you read: what is most typical of the media of the aorta?', 'Many sheets of elastic lamellae', ['Up to two layers of smooth muscle', 'A single thin elastic membrane', 'Longitudinal muscle bundles only'], { explanation: 'Slides 27, 31.', skill: 'prediction' })),
    learn('Three kinds of wall', ['Elastic arteries are built to stretch and recoil; muscular arteries to distribute and adjust flow; arterioles to set resistance and blood pressure.'], { sourceRefs: cm([24, 26, 33, 41]) }),
    ask(mcq('i2-02', 'arterioles', 'In an arteriole, the diameter of the lumen is about:', 'Equal to the thickness of the wall', ['About ten times the thickness of the wall', 'Half the wall thickness', 'Too small for any cell to pass'], { explanation: 'Slide 41.' })),
    ask(match('i2-03', 'artery-tunics', 'Match each vessel to its size:', [['Arteriole', '10–100 µm'], ['Metarteriole', 'About 8 µm'], ['Elastic artery', 'The aorta and its main branches']], { explanation: 'Slide 24.' })),
    learn('Sphincters at the gate', ['Single smooth muscle cells at the start of capillaries (precapillary sphincters) can shut off a capillary bed.'], { sourceRefs: cm([45]) }),
    recall('r2-01', 'muscular-arteries', 'Compare the walls of elastic and muscular arteries.', ['Elastic: many elastic lamellae and fenestrated membranes in the media; inconspicuous internal elastic membrane.', 'Muscular: thick media of smooth muscle with less elastin; prominent internal elastic lamina; external elastic lamina in larger ones.', 'Both have vasa vasorum in the adventitia.'], cm([27, 31, 34, 35])),
  ],
  [L(3)]: [
    ask(mcq('i3-01', 'sinusoids', 'Before you read: which capillaries may have no basal lamina at all?', 'Sinusoidal capillaries', ['Continuous capillaries', 'Fenestrated capillaries', 'Lymphatic capillaries of the gut'], { explanation: 'Slide 66.', skill: 'prediction' })),
    learn('Classified by the wall', ['Continuous: unbroken endothelium. Fenestrated: pores through the cells. Sinusoidal: gaps between cells and a patchy basal lamina.'], { sourceRefs: cm([54]) }),
    ask(match('i3-02', 'capillary-structure', 'Match each capillary type to a site:', [['Continuous', 'Central nervous system'], ['Fenestrated', 'Endocrine glands'], ['Sinusoidal', 'Bone marrow']], { explanation: 'Slides 56, 60, 65.' })),
    ask(mcq('i3-03', 'continuous-capillaries', 'What controls the contraction of pericytes?', 'Nitric oxide from endothelial cells', ['Adrenaline from the adrenal medulla', 'Acetylcholine from the vagus', 'Histamine from mast cells'], { explanation: 'Slide 58.' })),
    learn('Shunts', ['Arteriovenous shunts in the fingertips, nose, lips and erectile tissue send blood straight from arteries to veins, helping control heat loss.'], { sourceRefs: cm([68]) }),
    recall('r3-01', 'fenestrated-capillaries', 'Describe the diaphragm of a fenestration.', ['Thin and non-membranous, across the opening.', 'Cartwheel-like from the lumen: a central thickening and 14 wedge-shaped gaps.', 'Derived from the glycocalyx of the pinocytotic vesicle the fenestration formed from.'], cm([61])),
  ],
  [L(4)]: [
    ask(mcq('i4-01', 'veins-small', 'Before you read: where do white cells leave the blood in inflammation?', 'Postcapillary venules', ['Arterioles', 'Metarterioles', 'Large veins near the heart'], { explanation: 'Slide 71.', skill: 'prediction' })),
    learn('Veins in four sizes', ['Venules → small veins (< 1 mm) → medium veins (up to 10 mm, with valves) → large veins (> 10 mm).'], { sourceRefs: cm([70, 72, 73, 81]) }),
    ask(mcq('i4-02', 'large-veins', 'The thickest layer of a large vein is the:', 'Tunica adventitia', ['Tunica media', 'Tunica intima', 'Internal elastic membrane'], { explanation: 'Slide 86.' })),
    ask(match('i4-03', 'atypical-vessels', 'Match each atypical vessel to its feature:', [['Dural venous sinus', 'No smooth muscle'], ['Coronary artery', 'Very thick circular muscle in the media'], ['Great saphenous vein', 'Longitudinal muscle bundles in intima and adventitia']], { explanation: 'Slides 88, 90, 91.' })),
    learn('Lymph', ['Blind-ended lymphatic capillaries, more permeable than blood capillaries, take up protein-rich tissue fluid; it passes through lymph nodes to the thoracic duct or right lymphatic trunk.'], { sourceRefs: cm([92, 93, 94]) }),
    recall('r4-01', 'medium-veins', 'Describe the three tunics of a medium vein.', ['Intima: endothelium, basal lamina, thin subendothelial layer, sometimes a thin internal elastic membrane.', 'Media: thinner than in a medium artery; circular smooth muscle with collagen and elastic fibres.', 'Adventitia: usually thicker than the media; collagen and elastic networks.'], cm([77, 78, 79])),
  ],
};

type ReadingExtras = { estimatedMinutes: number; xp: number; highYield: string[]; confusions: LessonConfusion[] };

export const readingExtras: Record<string, ReadingExtras> = {
  [L(1)]: {
    estimatedMinutes: 10,
    xp: 25,
    highYield: ['Purkinje fibres: subendocardium.', 'Epicardium = visceral pericardium (mesothelium).', 'Mitral 2 cusps; tricuspid and semilunar 3.'],
    confusions: [{ confusion: 'The vagus nerves start the heartbeat.', clarification: 'They only change its rate; the SA node starts it (slides 13, 18).' }],
  },
  [L(2)]: {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Fenestrated membranes and vasa vasorum: elastic arteries.', 'Prominent internal elastic lamina: muscular arteries.', 'Arteriole: lumen ≈ wall; up to 2 muscle layers.'],
    confusions: [{ confusion: 'Fenestrated membranes are the same as fenestrated capillaries.', clarification: 'Fenestrated membranes are elastic sheets in the media of elastic arteries; fenestrated capillaries have pores in their endothelium (slides 31, 60).' }],
  },
  [L(3)]: {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Continuous: muscle, lung, CNS.', 'Fenestrated: endocrine, gut, gallbladder, kidney.', 'Sinusoid: liver, spleen, marrow.'],
    confusions: [{ confusion: 'Sinusoids are a kind of vein.', clarification: 'They are capillaries: discontinuous, wide and irregular (slide 65).' }],
  },
  [L(4)]: {
    estimatedMinutes: 12,
    xp: 25,
    highYield: ['Postcapillary venules: leucocyte exit, oedema.', 'Valves: medium veins, most in the legs.', 'Large vein: thickest adventitia.'],
    confusions: [{ confusion: 'Veins have a thicker media than arteries of the same size.', clarification: 'The media of a vein is thinner; its adventitia is the thick layer (slides 78, 79, 81).' }],
  },
};
