// Textbook pages for each reading section of cardiovascular-physiology (printed page numbers),
// matched to the section's own lecture text: Costanzo Physiology; Guyton and Hall (14th ed.).
// A section only gets a page when the match is strong; sections whose
// lecture content the book does not cover are left without one.
// Added to the sections by buildTopic (see data/textbook-refs/index.ts).
import type { TextbookPages } from '@/data/textbook-refs/types';

export const textbookPages: TextbookPages = {
  "cardiovascular-physiology-1": {
    1: [["guyton-hall-14e", [129]], ["costanzo-physiology", [131, 132]]], // The conducting system
    2: [["guyton-hall-14e", [118, 119, 120]], ["costanzo-physiology", [155, 156, 157]]], // Diastole and atrial systole
    3: [["guyton-hall-14e", [118, 119, 120]], ["costanzo-physiology", [155, 156, 157]]], // Ventricular systole
    4: [["guyton-hall-14e", [122]], ["costanzo-physiology", [149, 150]]], // Volumes in the cycle
    5: [["guyton-hall-14e", [119, 120, 121]], ["costanzo-physiology", [157]]], // Right versus left, inspiration versus expiration
    6: [["guyton-hall-14e", [118, 119, 120]], ["costanzo-physiology", [144]]], // Why a fast heart rate is dangerous
    7: [["guyton-hall-14e", [115, 128, 129]], ["costanzo-physiology", [136, 137]]], // Cardiac action potentials and how they drive the beat (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-2": {
    0: [["costanzo-physiology", [128, 129, 130]]], // The arterial pulse
    1: [["guyton-hall-14e", [282, 283, 284]], ["costanzo-physiology", [155, 156, 157]]], // The jugular venous pulse
    3: [["guyton-hall-14e", [284, 285, 287]], ["costanzo-physiology", [155, 156, 157]]], // Heart sounds
    4: [["guyton-hall-14e", [282, 283, 284]], ["costanzo-physiology", [155, 156, 157]]], // Murmurs and bruits
    5: [["guyton-hall-14e", [160, 185]]], // The pulse in different situations (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-3": {
    0: [["guyton-hall-14e", [123, 124, 125]], ["costanzo-physiology", [149, 150, 151]]], // Cardiac output
    1: [["guyton-hall-14e", [122, 123]], ["costanzo-physiology", [149]]], // Preload, afterload and Starling’s law
    3: [["costanzo-physiology", [145, 146, 147]]], // Contractility
    4: [["costanzo-physiology", [178, 179, 180]]], // Cardiac output in exercise and other states
    5: [["costanzo-physiology", [154]]], // Fick’s principle
    6: [["guyton-hall-14e", [121, 122, 123]], ["costanzo-physiology", [153]]], // Work done by the heart
    7: [["guyton-hall-14e", [256]]], // Measuring cardiac output: dye and thermal dilution (gap-fill 2026-11-14)
    8: [["guyton-hall-14e", [121, 123]], ["costanzo-physiology", [153]]], // Stroke work, efficiency and Laplace’s law in the heart (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-4": {
    0: [["guyton-hall-14e", [188, 189, 190]], ["costanzo-physiology", [117, 118, 119]]], // What moves blood forward
    2: [["guyton-hall-14e", [177, 178, 179]], ["costanzo-physiology", [123, 124]]], // Flow, pressure and resistance
    3: [["guyton-hall-14e", [175, 176]], ["costanzo-physiology", [126]]], // Laminar and turbulent flow
    4: [["costanzo-physiology", [120, 121, 122]]], // Velocity and cross-sectional area
    5: [["guyton-hall-14e", [178, 179]]], // Viscosity
    6: [["guyton-hall-14e", [183, 184]], ["costanzo-physiology", [128, 129, 130]]], // Capacitance and distribution of blood
    7: [["guyton-hall-14e", [185, 186, 187]], ["costanzo-physiology", [128, 129, 130]]], // Arterial blood pressure
    8: [["guyton-hall-14e", [186, 187]]], // Measuring blood pressure
    10: [["guyton-hall-14e", [184, 185]], ["costanzo-physiology", [130]]], // What sets systolic, diastolic and pulse pressure (gap-fill 2026-11-14)
    11: [["guyton-hall-14e", [180]]], // Critical closing pressure, wall tension and aneurysms (gap-fill 2026-11-14)
    12: [["guyton-hall-14e", [174, 175, 256, 350]]], // Measuring organ blood flow (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-5": {
    3: [["guyton-hall-14e", [200, 201, 202]], ["costanzo-physiology", [173]]], // Lymphatic drainage
    4: [["guyton-hall-14e", [189, 190, 191]], ["costanzo-physiology", [184, 185, 186]]], // Venous circulation
    5: [["guyton-hall-14e", [193, 194, 195]], ["costanzo-physiology", [171]]], // How substances cross the capillary wall (gap-fill 2026-11-14)
    6: [["guyton-hall-14e", [188, 189, 190]]], // Venous pressure, posture and the CVP (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-6": {
    1: [["guyton-hall-14e", [209]], ["costanzo-physiology", [173, 174, 175]]], // Autoregulation: the metabolic theory
    2: [["guyton-hall-14e", [208, 209]], ["costanzo-physiology", [174]]], // Autoregulation: the myogenic theory
    3: [["guyton-hall-14e", [214, 215]], ["costanzo-physiology", [175]]], // Systemic control: humoral and nervous
    4: [["guyton-hall-14e", [218, 219, 220]], ["costanzo-physiology", [164, 165, 166]]], // The vasomotor centre
    5: [["guyton-hall-14e", [221, 222]], ["costanzo-physiology", [164, 165, 166]]], // The baroreceptor reflex
    6: [["guyton-hall-14e", [224, 225]]], // Atrial (volume) receptors
    9: [["guyton-hall-14e", [207, 208]], ["costanzo-physiology", [174]]], // Reactive and active hyperaemia (gap-fill 2026-11-14)
    10: [["guyton-hall-14e", [213, 214, 215]], ["costanzo-physiology", [175]]], // Circulating hormones and local agents (gap-fill 2026-11-14)
    11: [["guyton-hall-14e", [224, 225, 226]], ["costanzo-physiology", [169]]], // Chemoreceptor, cardiopulmonary and higher-centre reflexes (gap-fill 2026-11-14)
    12: [["guyton-hall-14e", [229, 230, 231]]], // Short-term versus long-term control of blood pressure (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-7": {
    0: [["guyton-hall-14e", [275, 276]], ["costanzo-physiology", [184, 185, 186]]], // Standing up
    4: [["guyton-hall-14e", [275, 276, 277]], ["costanzo-physiology", [181]]], // Signs of hypovolaemic shock — and why
    5: [["costanzo-physiology", [181, 182]]], // Irreversible shock
    6: [["guyton-hall-14e", [299, 300, 303]], ["costanzo-physiology", [183, 184, 185]]], // Other causes of shock, and syncope
    8: [["guyton-hall-14e", [296, 297, 298]]], // The vicious cycle of irreversible shock (gap-fill 2026-11-14)
    9: [["guyton-hall-14e", [294, 301]]], // The lecture’s question: Hb and haematocrit after a haemorrhage (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-8": {
    0: [["guyton-hall-14e", [776]]], // Cerebral blood supply and the meninges
    1: [["guyton-hall-14e", [779, 783]]], // Cerebrospinal fluid
    4: [["guyton-hall-14e", [778, 779]], ["costanzo-physiology", [174, 175, 176]]], // Cerebral blood flow
    5: [["costanzo-physiology", [174, 175, 176]]], // Coronary circulation
    6: [["costanzo-physiology", [184, 185, 186]]], // Pulmonary circulation
    7: [["guyton-hall-14e", [794]], ["costanzo-physiology", [173]]], // Splanchnic and liver circulation
    10: [["guyton-hall-14e", [780, 783]], ["costanzo-physiology", [114]]], // Supporting the brain, CSF taps and brain fuel (gap-fill 2026-11-14)
    11: [["guyton-hall-14e", [262, 263]], ["costanzo-physiology", [176]]], // Coronary flow through the cardiac cycle (gap-fill 2026-11-14)
    12: [["guyton-hall-14e", [1064, 1065]]], // Fetal circulation and the changes at birth (gap-fill 2026-11-14)
    13: [["guyton-hall-14e", [259, 331, 332, 339]]], // Renal and skeletal muscle circulations (gap-fill 2026-11-14)
    14: [["guyton-hall-14e", [902]]], // Skin blood flow in heat, cold, emotion and shock (gap-fill 2026-11-14)
  },
  "cardiovascular-physiology-9": {
    0: [["guyton-hall-14e", [140, 141]]], // What the ECG records
    4: [["guyton-hall-14e", [157, 158]], ["costanzo-physiology", [142]]], // Cardiac rhythms
    6: [["guyton-hall-14e", [138, 139, 140]]], // Limb leads and Einthoven’s triangle (gap-fill 2026-11-14)
    7: [["guyton-hall-14e", [156, 160, 161]]], // From action potential to ECG; ectopic beats and electrolytes (gap-fill 2026-11-14)
    8: [["guyton-hall-14e", [163, 164, 166, 167]]], // The lecture’s homework: flutter and fibrillation (gap-fill 2026-11-14)
  },
};
