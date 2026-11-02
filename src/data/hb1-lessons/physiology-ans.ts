// Physiology 1 → The Autonomic Nervous System. From "LECTURE 8 ans.pptx" (Physiology 1
// theory, HB1). Explanations are in our own words; facts are the lecture's. The bank already
// has "Topic Review — Autonomic Nervous System" (set rv1, 16 questions); this lesson practises
// it too, and its own quiz asks the other facts.
import type { Hb1Lesson } from '@/data/hb1-lessons';

export const physiologyAns: Hb1Lesson = {
  id: 'physiology-ans',
  order: 7.5, // lecture 8, before blood and the CVS
  title: 'The Autonomic Nervous System',
  summary: 'Lecture 8 · The involuntary motor system: two-neuron pathways, the sympathetic (thoracolumbar) and parasympathetic (craniosacral) divisions, dual innervation, transmitters and receptors',
  minutes: 14,
  source: 'LECTURE 8 ans.pptx (Physiology 1)',
  quizId: 'ans',
  quizName: 'Quiz · Autonomic Nervous System (lesson)',
  pastSets: ['rv1'],
  sections: [
    {
      id: 'ans-overview',
      title: 'What the autonomic nervous system does',
      kicker: 'The involuntary nervous system',
      blocks: [
        { k: 'p', x: 'The <b>autonomic nervous system (ANS)</b> is the involuntary part of the peripheral nervous system. It regulates <b>smooth muscle, cardiac muscle, certain glands</b> and the <b>visceral organs</b> — the work that goes on without your deciding it.', lede: 1 },
        { k: 'p', x: 'It has <b>visceral sensory (afferent)</b> neurons bringing information in and <b>visceral motor (efferent)</b> neurons carrying commands out, and it is steered by centres in the brain, mainly the <b>hypothalamus</b> and the <b>medulla oblongata</b>.' },
        { k: 'h', x: 'Two neurons in series', l: 3 },
        { k: 'p', x: 'Unlike a somatic motor nerve, which runs straight from the spinal cord to skeletal muscle, every autonomic motor pathway uses <b>two neurons</b>:' },
        { k: 'step', n: '1', title: 'Preganglionic neuron', blocks: [{ k: 'p', x: 'Cell body in the <b>CNS</b>; axon runs out to an <b>autonomic ganglion</b>.' }] },
        { k: 'step', n: '2', title: 'Postganglionic neuron', blocks: [{ k: 'p', x: 'Cell body in the <b>ganglion</b>; axon runs directly to the <b>effector</b>.' }] },
        { k: 'p', x: 'The motor part has two divisions: the <b>sympathetic</b> (adrenergic) and the <b>parasympathetic</b> (cholinergic).' },
      ],
    },
    {
      id: 'ans-sympathetic',
      title: 'The sympathetic division',
      kicker: '“Fight or flight” — thoracolumbar',
      blocks: [
        { k: 'p', x: 'Sympathetic preganglionic cell bodies lie in the <b>intermediolateral horn</b> of the spinal cord in all <b>12 thoracic</b> segments and the <b>first two or three lumbar</b> segments — hence its other name, the <b>thoracolumbar</b> division. Their axons leave the CNS to synapse in ganglia of three kinds:', lede: 1 },
        { k: 'cards', items: [
          { title: 'Paravertebral ganglia (sympathetic chain)', blocks: [{ k: 'p', x: 'Axons leave in the ventral root, part from the somatic fibres through the <b>white ramus communicans</b>, and enter a chain of ganglia beside the spinal cord. There they synapse at the same level — postganglionic fibres rejoin the spinal nerve through the <b>gray rami</b> — or travel up or down the chain first, e.g. to the <b>superior, middle and inferior cervical</b> ganglia or ganglia below L2.' }] },
          { title: 'Prevertebral (collateral) ganglia', blocks: [{ k: 'p', x: 'Some axons pass through the chain without synapsing, into the abdomen: the <b>celiac, aorticorenal, renal, superior mesenteric</b> and <b>inferior mesenteric</b> ganglia, about halfway between the CNS and the effector.' }] },
          { title: 'Chromaffin cells (adrenal medulla)', blocks: [{ k: 'p', x: 'A third set synapses directly on the adrenal medulla. Its chromaffin cells share the embryonic origin of neural tissue and act as <b>modified postganglionic neurons</b>; their secretions travel in the blood to all sympathetic effectors.' }] },
        ] },
        { k: 'p', x: 'Because the ganglia lie near the spinal cord, sympathetic preganglionic axons are <b>short</b>. One may synapse with <b>20 or more</b> postganglionic neurons — <b>divergence</b> — so sympathetic responses are <b>widespread</b>. Preganglionic axons are <b>myelinated</b>; postganglionic axons are <b>unmyelinated</b>. Sympathetic fibres supply the skin (blood vessels and sweat glands), the head, the thoracic viscera and the abdominal and pelvic viscera.' },
      ],
    },
    {
      id: 'ans-parasympathetic',
      title: 'The parasympathetic division',
      kicker: '“Rest and digest” — craniosacral',
      blocks: [
        { k: 'p', x: 'Parasympathetic preganglionic cell bodies lie in <b>brainstem nuclei</b> and the lateral grey horns of sacral segments <b>S2–S4</b> — the <b>craniosacral</b> division.', lede: 1 },
        { k: 'ul', items: [
          '<b>Cranial outflow:</b> myelinated preganglionic axons in four cranial nerves — <b>oculomotor (III), facial (VII), glossopharyngeal (IX) and vagus (X)</b>. More than <b>75%</b> of all parasympathetic fibres run in the vagus. They supply the head, thorax and abdomen.',
          '<b>Sacral outflow:</b> axons join to form the <b>pelvic nerves</b>, which supply the <b>descending colon</b> and the <b>genitourinary system</b>.',
          'Preganglionic axons run to <b>terminal (intramural) ganglia</b> very close to or inside the wall of the organ, so they are <b>long</b>.',
          'Each synapses with only <b>4 or 5</b> postganglionic neurons, all supplying one effector, so effects are <b>localised</b>.',
        ] },
        { k: 'table', head: ['', 'Sympathetic', 'Parasympathetic'], rows: [
          { c: ['Outflow', 'Thoracolumbar (T1–L2/L3)', 'Craniosacral (III, VII, IX, X; S2–S4)'] },
          { c: ['Ganglia', 'Near the spinal cord (chain, collateral)', 'Near or in the organ (intramural)'] },
          { c: ['Preganglionic axon', 'Short', 'Long'] },
          { c: ['Divergence', '1 to 20 or more', '1 to 4 or 5'] },
          { c: ['Effects', 'Widespread', 'Localised'] },
        ] },
      ],
    },
    {
      id: 'ans-innervation',
      title: 'Single and dual innervation',
      kicker: 'Who supplies what',
      blocks: [
        { k: 'ul', items: [
          '<b>Sympathetic only:</b> sweat glands, arrector (erector) pili muscles, adipose cells, the kidneys and most blood vessels.',
          '<b>Parasympathetic only:</b> the lacrimal glands.',
          '<b>Dual innervation</b> (most effectors): the two divisions may be <b>antagonistic, complementary or cooperative</b>.',
        ] },
        { k: 'p', x: 'The <b>hypothalamus</b> regulates the balance — the <b>tone</b> — of sympathetic versus parasympathetic activity.' },
      ],
    },
    {
      id: 'ans-transmitters',
      title: 'Transmitters and receptors',
      kicker: 'ACh, noradrenaline and their receptors',
      blocks: [
        { k: 'table', head: ['Neuron', 'Main transmitter', 'Co-transmitters'], rows: [
          { c: ['All preganglionic (both divisions)', 'Acetylcholine (ACh)', 'Neuropeptides giving slow excitatory postsynaptic potentials'] },
          { c: ['Parasympathetic postganglionic', 'ACh (some nitric oxide, or both)', 'VIP, CGRP, somatostatin, opioid peptides'] },
          { c: ['Sympathetic postganglionic (most)', 'Noradrenaline (NE)', 'ATP, neuropeptide Y, galanin'] },
          { c: ['Sympathetic postganglionic to most sweat glands and a few skeletal-muscle vessels', 'ACh', '—'] },
          { c: ['Adrenal medulla', 'Adrenaline (epinephrine)', '—'] },
        ] },
        { k: 'table', head: ['Site', 'Receptor'], rows: [
          { c: ['All autonomic ganglia', '<b>Nicotinic</b> ACh receptors (5 subtypes)'] },
          { c: ['Parasympathetic effectors', '<b>Muscarinic</b> ACh receptors (5 subtypes)'] },
          { c: ['Sympathetic cholinergic effectors (sweat glands, some muscle vessels)', 'Muscarinic'] },
          { c: ['Most sympathetic effectors', '<b>Adrenergic</b>: α1, α2, β1, β2'] },
        ] },
        { k: 'box', title: 'Check yourself', tone: 'recall', blocks: [{ k: 'p', x: 'Sweating is a sympathetic response, yet atropine (a muscarinic blocker) stops it. Why? The sympathetic fibres to most sweat glands release <b>ACh</b> onto <b>muscarinic</b> receptors.' }] },
      ],
    },
  ],
  extras: {
    facts: [
      { h: 'Key points to remember', lines: [
        'ANS: involuntary; controls smooth and cardiac muscle, glands and viscera; steered by the hypothalamus and medulla.',
        'Two neurons: preganglionic (CNS → ganglion) and postganglionic (ganglion → effector).',
        'Sympathetic: thoracolumbar (T1–L2/3), short preganglionic, 1 : 20+ divergence, widespread; white rami in, gray rami out.',
        'Parasympathetic: craniosacral (III, VII, IX, X; S2–S4), >75% in the vagus, intramural ganglia, long preganglionic, localised.',
        'Sympathetic only: sweat glands, pili muscles, fat, kidneys, most vessels. Parasympathetic only: lacrimal glands.',
        'Preganglionic: ACh → nicotinic. Parasympathetic post: ACh → muscarinic. Sympathetic post: NE → α/β (sweat glands: ACh → muscarinic). Adrenal medulla: adrenaline.',
      ] },
    ],
  },
  quiz: [
    ['The autonomic nervous system regulates', 'Smooth muscle, cardiac muscle, glands and visceral organs', ['Skeletal muscles used in voluntary movement', 'Only the special senses of sight, hearing, taste and smell', 'Only the sensory receptors of the skin'], 'Slide 1.', 'Overview'],
    ['Which brain centres mainly influence the ANS?', 'The hypothalamus and medulla oblongata', ['The cerebellum and the basal ganglia of the cerebrum', 'The occipital lobe and thalamus', 'The hippocampus and amygdala'], 'Slides 1–2.', 'Overview'],
    ['Where is the cell body of the postganglionic neuron?', 'In the autonomic ganglion', ['In the brainstem', 'In the effector organ itself', 'In the dorsal root ganglion'], 'Slide 2: its axon extends directly to the effector.', 'Overview'],
    ['The sympathetic division is also called the', 'Thoracolumbar division', ['Craniosacral division', 'Somatic division', 'Enteric (intramural) division'], 'Slides 4–5.', 'Sympathetic'],
    ['Sympathetic preganglionic fibres leave the spinal nerve to enter the chain through the', 'White ramus communicans', ['Gray ramus communicans', 'Dorsal root of the spinal nerve', 'Pelvic nerve'], 'Slide 7. Postganglionic fibres re-enter the spinal nerve via the gray rami (slide 8).', 'Sympathetic'],
    ['Postganglionic sympathetic fibres re-enter the spinal nerves through the', 'Gray rami', ['White rami', 'Ventral roots', 'Vagus nerve'], 'Slide 8.', 'Sympathetic'],
    ['Where do the prevertebral (collateral) ganglia lie?', 'About halfway between the CNS and the effector', ['Inside the wall of the effector organ', 'Inside the spinal cord grey matter', 'Next to the spinal cord, in a long paravertebral chain'], 'Slide 9.', 'Sympathetic'],
    ['Why are sympathetic preganglionic axons relatively short?', 'Their ganglia lie close to the spinal cord', ['Their ganglia lie inside the effector organs', 'They are unmyelinated and conduct slowly', 'They synapse with only one postganglionic neuron'], 'Slide 11.', 'Sympathetic'],
    ['Which sympathetic axons are unmyelinated?', 'Postganglionic axons', ['Preganglionic axons', 'Both pre- and postganglionic', 'Neither; all are myelinated'], 'Slides 11–12.', 'Sympathetic'],
    ['Parasympathetic preganglionic cell bodies lie in brainstem nuclei and', 'Sacral segments S2–S4', ['All 12 thoracic segments', 'The first three lumbar segments', 'The cervical segments C1–C4'], 'Slide 15.', 'Parasympathetic'],
    ['The sacral parasympathetic fibres form the pelvic nerves, which supply the', 'Descending colon and genitourinary system', ['Heart and lungs', 'Salivary, lacrimal and other glands of the head', 'Sweat glands of the skin'], 'Slide 16.', 'Parasympathetic'],
    ['Parasympathetic terminal (intramural) ganglia are located', 'Very close to or within the wall of the organ', ['In a chain beside the vertebral column', 'Halfway between the CNS and the organ', 'Inside the adrenal medulla'], 'Slide 16.', 'Parasympathetic'],
    ['A parasympathetic preganglionic axon synapses with about', '4 or 5 postganglionic neurons', ['20 or more postganglionic neurons', 'Only 1 postganglionic neuron', 'Several hundred postganglionic neurons'], 'Slide 17: so parasympathetic effects are localised.', 'Parasympathetic'],
    ['Adipose cells and the kidneys receive', 'Only sympathetic innervation', ['Only parasympathetic innervation', 'Dual innervation', 'No autonomic innervation'], 'Slide 19.', 'Innervation'],
    ['When an effector has dual innervation, the two divisions may act', 'Antagonistically, complementarily or cooperatively', ['Only antagonistically, never together', 'Only cooperatively, never against each other', 'Only through hormones, never by nerves'], 'Slide 19.', 'Innervation'],
    ['What do the neuropeptide co-transmitters of preganglionic neurons do?', 'Mediate slow excitatory postsynaptic potentials', ['Block cholinergic transmission at the ganglion', 'Act only on skeletal muscle receptors', 'Replace acetylcholine completely'], 'Slide 21: they facilitate cholinergic transmission.', 'Transmitters'],
    ['Besides ACh, some parasympathetic postganglionic neurons use', 'Nitric oxide', ['Noradrenaline', 'Adrenaline', 'Dopamine'], 'Slide 21.', 'Transmitters'],
    ['Which is a co-transmitter of parasympathetic postganglionic neurons?', 'Vasoactive intestinal peptide (VIP)', ['Neuropeptide Y (NPY)', 'Galanin, a neuropeptide', 'Adrenaline (epinephrine)'], 'Slide 21. NPY and galanin go with noradrenaline (slide 22).', 'Transmitters'],
    ['What does the adrenal medulla secrete?', 'Adrenaline (epinephrine)', ['Acetylcholine', 'Nitric oxide', 'Vasoactive intestinal peptide'], 'Slide 22.', 'Transmitters'],
    ['The receptors at parasympathetic effectors are', 'Muscarinic ACh receptors', ['Nicotinic ACh receptors', 'α-Adrenergic receptors only', 'β-Adrenergic receptors (β1 and β2)'], 'Slide 23.', 'Receptors'],
    ['Most sympathetic effectors have which receptors?', 'Adrenergic (α1, α2, β1, β2)', ['Muscarinic ACh receptors', 'Nicotinic ACh receptors', 'Opioid peptide receptors'], 'Slide 23.', 'Receptors'],
  ],
};
