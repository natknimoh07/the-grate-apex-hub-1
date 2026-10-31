# HB1 topic review (owner, 2026-10-31): lectures in the HB1 folder that the
# question banks covered thinly got a "Topic review" set, written only from
# that lecture's own slides/notes (file named on each set). Each question:
# (question, right answer, [three wrong answers], explanation, topic).
# Run: python3 scripts/hb1-review/new-sets.py   (idempotent: replaces its sets)
import json, hashlib, os

ROOT = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'curriculum')

SETS = {
 'entomology': [{
  'id': 'rv1', 'name': 'Topic Review — Blackflies, Fleas, IVM and Malaria Control',
  'source': '7. BLACKFLIES.pptx; 12. Ectoparasitic Insects Fleas and Lice.pptx; 3. IVM.pptx; Roll back malaria.pdf; BED NETS.pdf',
  'qs': [
   ('Blackflies belong to which family?', 'Simuliidae', ['Psychodidae', 'Ceratopogonidae', 'Culicidae'], 'Blackflies are Diptera, suborder Nematocera, family Simuliidae (e.g. Simulium damnosum).', 'Blackflies'),
   ('Which feature describes the adult blackfly?', 'A small, stout body with a humped back', ['A long, slender body with scaled wings', 'A flattened body with no wings at all', 'A large body with a long, rigid proboscis'], 'Adults are small (about 1.5 mm), stout and humpbacked, with blade-like piercing mouthparts.', 'Blackflies'),
   ('How do the eyes of female and male blackflies differ?', 'Females are dichoptic; males are holoptic', ['Females are holoptic; males are dichoptic', 'Both sexes are holoptic', 'Both sexes are dichoptic'], 'In females the eyes are separate (dichoptic); in males they meet (holoptic).', 'Blackflies'),
   ('Which blackflies bite?', 'Only the females, which suck blood', ['Only the males, which suck blood', 'Both sexes, equally often', 'Neither; adults feed only on nectar'], 'Only females bite; males feed on nectar.', 'Blackflies'),
   ('Where do blackfly larvae develop?', 'In swift-flowing, well-aerated streams', ['In still, stagnant pools of water', 'In damp soil under leaf litter', 'In salt-water lagoons along the coast'], 'Larvae need fast-flowing, well-oxygenated water such as rapids and torrents.', 'Blackflies'),
   ('How does a blackfly larva hold its place in the stream?', 'With a posterior hook circlet and silk', ['With suckers on all six of its thoracic legs', 'By burrowing deep into the stream-bed mud', 'By floating on the surface film of the water'], 'Larvae are sedentary: a posterior hook sucker and silk holdfasts anchor them; they feed with cephalic fans.', 'Blackflies'),
   ('What does the blackfly pupa have that is used to identify the species?', 'Its filamentous respiratory gills', ['Its long, segmented antennae', 'The colour of its eggs', 'The pattern of scales on its wings'], 'The length, shape and number of the pupal respiratory gills are used for identification.', 'Blackflies'),
   ('Why are blackflies difficult to control over a whole region?', 'Adults can fly 60–200 km', ['Adults live for about fifteen years', 'Larvae survive drying out for years', 'Eggs are laid only inside houses'], 'Their long flight range means flies can re-invade from far away, which affects control programmes.', 'Blackflies'),
   ('Which disease do blackflies transmit?', 'Onchocerciasis (river blindness)', ['Lymphatic filariasis', 'Trypanosomiasis (sleeping sickness)', 'Leishmaniasis'], 'Blackflies are the only vector of Onchocerca volvulus.', 'Blackflies'),
   ('How long do adult Onchocerca worms live in man?', 'About 15 years', ['About 2 years', 'About 6 months', 'About 60 years'], 'Adult worms live about 15 years; this is why the control programme had to run for 20 years.', 'Blackflies'),
   ('How is onchocerciasis diagnosed, according to the lecture?', 'A skin snip incubated in saline', ['A thick blood film taken at midnight', 'A stool examination for eggs', 'An urine sample after exercise'], 'Microfilariae emerge from a skin snip incubated in saline.', 'Blackflies'),
   ('Which drug has been distributed in Ghana for onchocerciasis?', 'Ivermectin', ['Chloroquine', 'Praziquantel', 'Albendazole'], 'Over 100 million ivermectin tablets have been given out since the OCP began.', 'Blackflies'),
   ('Which blackfly stage is the most vulnerable to control?', 'The larva', ['The adult', 'The egg', 'The pupa'], 'Larvae are killed with larvicides (e.g. Abate, an organophosphate; Bacillus thuringiensis) applied upstream.', 'Blackflies'),
   ('The name Siphonaptera (fleas) means', 'The sucking wingless insects', ['The jumping blood insects', 'The flattened skin insects', 'The burrowing biting insects'], 'From the Greek siphon + apteron: sucking, wingless.', 'Fleas'),
   ('Fleas are flattened in which direction?', 'Laterally (from side to side)', ['Dorso-ventrally (from top to bottom)', 'They are not flattened at all', 'Antero-posteriorly (front to back)'], 'Fleas are small, laterally flattened, wingless insects with large hind legs for jumping.', 'Fleas'),
   ('What makes a flea pupa leave its cocoon?', 'Vibration from a host (or CO₂)', ['A rise in daylight hours', 'Heavy rain soaking the cocoon', 'The death of the previous host'], 'Pupae can stay dormant for months and emerge in response to a stimulus such as vibration.', 'Fleas'),
   ('Tunga penetrans (the jigger flea) causes which condition?', 'Tungiasis', ['Myiasis', 'Pediculosis', 'Scabies'], 'Fertilised females burrow into the skin, usually of the feet, causing tungiasis.', 'Fleas'),
   ('Which flea transmits bubonic plague and murine typhus?', 'The oriental rat flea, Xenopsylla cheopis', ['The common human flea, Pulex irritans', 'The domestic cat flea, Ctenocephalides felis', 'The sand jigger flea, Tunga penetrans'], 'The oriental rat flea carries both to humans.', 'Fleas'),
   ('The dog flea is medically important as', 'An intermediate host of the dog tapeworm', ['The main vector of bubonic plague to man', 'The cause of tungiasis in human feet', 'The vector of myxomatosis in wild rabbits'], 'Ctenocephalides canis is the intermediate host for the dog tapeworm.', 'Fleas'),
   ('What is neosomy, seen in sticktight fleas such as Tunga?', 'Growth of a new body form without a moult', ['Loss of all the legs after the first blood meal', 'Laying the eggs inside the host gut lining', 'Changing to a new host at every life stage'], 'Neosomy is enlargement or new cuticle formed without a moult, as the embedded female swells.', 'Fleas'),
   ('Integrated vector management (IVM) is best described as', 'A rational decision-making process for the best use of resources against vectors', ['A single insecticide sprayed across the whole country every year', 'Treating every patient with drugs instead of controlling the vectors', 'A programme run only by trained health workers, without the community'], 'IVM aims to improve efficacy, cost-effectiveness, ecological soundness and sustainability of vector control.', 'IVM'),
   ('What is the main objective of IVM?', 'Reducing vector-borne disease by preventing and interrupting its transmission', ['Wiping out every insect species living in and around the area', 'Increasing the sale and local production of insecticides', 'Moving whole communities away from all rivers and water bodies'], 'The main objective is to reduce mortality and morbidity from vector-borne diseases.', 'IVM'),
   ('Diverting mosquitoes from people to cattle is called', 'Zooprophylaxis', ['Zoonosis', 'Larviciding', 'Space spraying'], 'Re-locating or introducing cattle can divert many mosquitoes from man.', 'IVM'),
   ('Indoor residual spraying of walls is useful against', 'Anopheles, but not Aedes', ['Aedes, but not Anopheles', 'Neither Anopheles nor Aedes', 'Only blackflies and midges'], 'Residual wall spraying works against Anopheles species, not Aedes.', 'IVM'),
   ('What is the advantage of space spraying (aerosols)?', 'Its effect is immediate', ['It lasts for many months', 'It needs no equipment at all', 'It is welcomed by every household'], 'Space spraying is applied in and around houses and acts immediately, but needs special equipment.', 'IVM'),
   ('How long does a skin repellent usually protect for?', 'About 30 minutes to 1 hour', ['About 2 to 3 days after use', 'About 1 to 2 weeks after use', 'About 6 to 12 months'], 'Repellents evaporate quickly; they do not kill insects and act for a short time.', 'IVM'),
   ('Which is the first stage of the IVM process?', 'Situation analysis (survey)', ['Evaluation of the results', 'Monitoring of progress', 'Implementation of control'], 'Survey/situation analysis → planning → implementation → monitoring → evaluation.', 'IVM'),
   ('In IVM, evaluation is', 'An independent assessment of how far the objectives are being achieved', ['Regular feedback to the stakeholders on day-to-day progress', 'The first survey of the vectors, done before any planning', 'Choosing which insecticide to buy for the coming season'], 'Monitoring gives regular feedback; evaluation is the in-depth, independent assessment.', 'IVM'),
   ('Which organisations founded the Roll Back Malaria partnership in 1998?', 'WHO, the World Bank, UNICEF and UNDP', ['WHO, UNESCO, the IMF and the Red Cross', 'The Global Fund, PMI, UNITAID and the Gates Foundation', 'The African Union, ECOWAS, WHO and UNICEF'], 'RBM was founded by WHO, the World Bank, UNICEF and UNDP.', 'Roll Back Malaria'),
   ('What was Roll Back Malaria’s original pledge?', 'To halve deaths from malaria by 2010', ['To eliminate malaria worldwide by 2000', 'To vaccinate every child in Africa by 2005', 'To end all mosquito breeding by 2015'], 'The pledge was to halve malaria deaths by 2010; African heads of state endorsed it at Abuja in 2000.', 'Roll Back Malaria'),
   ('Which threats to Roll Back Malaria’s gains does the reading describe?', 'Insecticide resistance in mosquitoes and artemisinin resistance in parasites', ['Too many bed nets and far too much donor funding', 'A malaria vaccine that replaced all of the other tools', 'The complete disappearance of Anopheles from Africa'], 'Resistance to insecticides and to artemisinin (Mekong region), and uncertain funding, threaten progress.', 'Roll Back Malaria'),
   ('By how much did ITNs reduce deaths of children under 5 from all causes in African trials?', 'About 20%', ['About 2%', 'About 50%', 'About 90%'], 'Community-wide trials showed about a 20% fall in all-cause child deaths.', 'Bed nets'),
   ('Which insecticides are approved for treating bed nets?', 'Only pyrethroids', ['Only organophosphates', 'Organochlorines such as DDT', 'Any insecticide sold locally'], 'Only pyrethroids are approved: very low risk to humans, toxic to insects even at low doses.', 'Bed nets'),
   ('For an ITN programme to protect people who do not use a net, coverage must be', 'More than half of the community', ['About one in ten people', 'Only pregnant women and children', 'Only the households near water'], 'With high coverage the mosquito numbers and lifespan fall, protecting everyone.', 'Bed nets'),
  ]}],
 'behavioural': [{
  'id': 'rv1', 'name': 'Topic Review — Memory, Intelligence and Stress',
  'source': 'LECTURE 4 Memory.pptx; Stress for HB1.pptx',
  'qs': [
   ('The three processes of memory are', 'Encoding, storage and retrieval', ['Attention, perception and recall', 'Sensation, rehearsal and forgetting', 'Learning, recognition and relearning'], 'Information is encoded, stored and later retrieved.', 'Memory'),
   ('Remembering the treble-clef notes F, A, C, E as the word “face” uses', 'A semantic code', ['A visual code', 'An acoustic code', 'A procedural code'], 'Using meaning (the word face) is semantic coding.', 'Memory'),
   ('Who proposed the three-stage (information-processing) model of memory?', 'Atkinson and Shiffrin (1968)', ['Endel Tulving and Squire (1972)', 'George Miller and Sperling (1956)', 'L. R. Squire (1987)'], 'Sensory → short-term → long-term memory.', 'Memory'),
   ('Iconic memory holds visual information for about', 'Up to a second', ['About 20 seconds', 'About 5 minutes', 'Several days'], 'Iconic (visual) sensory memory lasts up to a second; echoic about 1–2 seconds.', 'Memory'),
   ('Sperling’s tachistoscope experiment showed that', 'People briefly hold an image of the whole display in sensory memory', ['Short-term memory holds about 7 ± 2 items at any one time', 'Long-term memory has an unlimited capacity for information', 'People recall the start and the end of a list best of all'], 'With a cue tone people reported about 75% of any row, so the whole image was briefly held.', 'Memory'),
   ('The capacity of short-term memory is', '7 plus or minus 2 items', ['3 plus or minus 1 items', '20 plus or minus 5 items', 'Unlimited'], 'George Miller’s “magical number”; chunking lets more information fit.', 'Memory'),
   ('Without rehearsal, short-term memory lasts about', '20 to 30 seconds', ['1 to 2 seconds', '5 to 10 minutes', 'Several hours'], 'In the counting-backward experiment, recall was at chance after 18 seconds.', 'Memory'),
   ('Grouping items so they are easier to remember is called', 'Chunking', ['Confabulation', 'Overlearning', 'Encoding failure'], 'Chunking (Miller) saves space in short-term memory.', 'Memory'),
   ('Remembering when you woke up this morning is an example of', 'Episodic memory', ['Semantic memory', 'Procedural memory', 'Sensory memory'], 'Tulving: episodic = personal events; semantic = knowledge of language and facts.', 'Memory'),
   ('Riding a bicycle without consciously recalling how is', 'Procedural memory', ['Episodic memory', 'Semantic memory', 'Iconic memory'], 'Squire: procedural memory needs no conscious recollection (skills).', 'Memory'),
   ('“Remembering” information that was never stored, to fill memory gaps, is', 'Confabulation', ['Chunking', 'Relearning', 'Eidetic memory'], 'Confabulation fills gaps with information that was never stored.', 'Memory'),
   ('Old phone numbers block you from recalling your new number. This is', 'Proactive interference', ['Retroactive interference', 'Encoding failure', 'Motivated forgetting'], 'Proactive: an earlier memory blocks new information; retroactive: new blocks old.', 'Memory'),
   ('Inability to hold on to new information after a brain injury is', 'Anterograde amnesia', ['Retrograde amnesia', 'Infantile amnesia', 'Dissociative amnesia'], 'Anterograde: new information is lost; retrograde: past information is lost.', 'Memory'),
   ('Which brain structure is linked with long-term (declarative) memory?', 'The hippocampus', ['The striatum', 'The cerebellum', 'The reticular formation'], 'Hippocampus and amygdala: declarative memories; striatum: procedural memories.', 'Memory'),
   ('Linking new information to material you already know is', 'Elaborative rehearsal', ['Maintenance rehearsal', 'Spaced practice', 'Recitation'], 'Elaborative rehearsal builds meaning and association; maintenance rehearsal is mere repetition.', 'Memory'),
   ('Spearman’s two-factor theory of intelligence names', 'A general factor (g) and specific abilities (s)', ['Seven separate primary mental abilities', 'Analytical, creative and practical abilities', 'Eight or nine separate multiple intelligences'], 'Spearman (1904): g and s.', 'Intelligence'),
   ('Who proposed seven primary mental abilities?', 'L. L. Thurstone', ['Howard Gardner', 'Robert Sternberg', 'Alfred Binet'], 'Thurstone (1938) found no evidence for a single g.', 'Intelligence'),
   ('Sternberg’s triarchic theory divides intelligence into', 'Analytical, creative and practical thinking', ['Verbal, numerical and spatial abilities', 'A general factor and specific factors', 'Interpersonal and intrapersonal skills'], 'Sternberg (1985): three ways of processing information.', 'Intelligence'),
   ('Hans Selye’s term for the effects of prolonged stress is', 'General adaptation syndrome (GAS)', ['The fight-or-flight reaction', 'Conditioned emotional response', 'Psycho-neuro-immunology (PNI)'], 'GAS signs: shrunken thymus, enlarged adrenals, weight loss and gastric ulcers.', 'Stress'),
   ('Which is a sign of the general adaptation syndrome?', 'Enlarged adrenal glands', ['An enlarged thymus', 'Weight gain', 'Shrunken adrenal glands'], 'Prolonged stress: shrunken thymus, enlarged adrenals, weight loss, gastric ulcers.', 'Stress'),
   ('Stress that protects you and motivates you is called', 'Eustress', ['Distress', 'Strain', 'Burnout'], 'Not all stress is bad: eustress energises, distress harms.', 'Stress'),
   ('Which brain structure is especially involved in the fear response?', 'The amygdala', ['The reticular formation', 'The thalamus', 'The striatum'], 'The amygdala (temporal lobe) handles fear and conditioned emotional responses.', 'Stress'),
   ('Fear of dogs after being bitten by a dog is an example of', 'A conditioned emotional response', ['A universal (innate) emotion', 'A social-situation emotion', 'A cultural display rule of emotion'], 'Learned emotional responses are the basis of phobias.', 'Stress'),
   ('Which of these is a stress-management strategy from the lecture?', 'Keeping good social support networks', ['Taking on more work to keep busy', 'Ignoring what triggers your stress', 'Avoiding sleep to finish every task'], 'Awareness, moderating the response (slow breathing), support networks and balance.', 'Stress'),
  ]}],
 'physiology': [{
  'id': 'rv1', 'name': 'Topic Review — Autonomic Nervous System',
  'source': 'LECTURE 8 ans.pptx',
  'qs': [
   ('An autonomic motor pathway consists of', 'Two neurons in series: preganglionic and postganglionic', ['A single neuron running from the CNS to the effector', 'Three neurons in series with two separate ganglia', 'One neuron that synapses in the dorsal root ganglion'], 'The preganglionic cell body is in the CNS; the postganglionic one is in an autonomic ganglion.', 'Autonomic Nervous System'),
   ('Sympathetic preganglionic cell bodies lie in', 'The intermediolateral horn of T1–L2/L3', ['Brainstem nuclei and cord segments S2–S4', 'The dorsal root ganglia of every segment', 'The ventral (anterior) horn of C1–C8'], 'So the sympathetic division is called thoracolumbar.', 'Autonomic Nervous System'),
   ('The parasympathetic division is also called', 'Craniosacral', ['Thoracolumbar', 'Cervicothoracic', 'Lumbosacral'], 'Preganglionic cell bodies are in brainstem nuclei and S2–S4.', 'Autonomic Nervous System'),
   ('Which cranial nerves carry parasympathetic outflow?', 'III, VII, IX and X', ['II, V, VIII and XI', 'I, III, IV and VI', 'V, VII, XI and XII'], 'Oculomotor, facial, glossopharyngeal and vagus.', 'Autonomic Nervous System'),
   ('What share of parasympathetic fibres is in the vagus nerve?', 'More than 75%', ['Less than 10%', 'About 25 to 30%', 'Exactly 50%'], 'More than 75% of all parasympathetic fibres travel in the vagus.', 'Autonomic Nervous System'),
   ('Which ganglion is a prevertebral (collateral) sympathetic ganglion?', 'The coeliac ganglion', ['The ciliary ganglion', 'The superior cervical ganglion', 'The otic ganglion'], 'Coeliac, aorticorenal, renal, superior and inferior mesenteric ganglia are prevertebral.', 'Autonomic Nervous System'),
   ('The chromaffin cells of the adrenal medulla act as', 'Modified postganglionic sympathetic neurons', ['Modified preganglionic parasympathetic neurons', 'Sensory receptors for blood pressure', 'Ordinary cortical endocrine cells'], 'Preganglionic fibres synapse directly on them; they release their products into the blood.', 'Autonomic Nervous System'),
   ('Why are sympathetic responses widespread?', 'One preganglionic axon synapses with 20 or more postganglionic neurons', ['Each preganglionic axon reaches only a single visceral effector', 'Its ganglia all lie inside the walls of the effector organs', 'Its fibres all travel to the body in the vagus nerve alone'], 'Divergence spreads the response throughout the body.', 'Autonomic Nervous System'),
   ('Parasympathetic preganglionic axons are typically', 'Long, ending in terminal ganglia in or near the organ', ['Short, ending in the paravertebral sympathetic chain', 'Unmyelinated and very short, ending in the cord', 'Absent, because the CNS acts on the organ directly'], 'Terminal (intramural) ganglia lie close to or within the visceral organ, so effects are localised.', 'Autonomic Nervous System'),
   ('Which effector receives only sympathetic innervation?', 'Sweat glands', ['The lacrimal glands', 'The heart', 'The iris'], 'Sweat glands, arrector pili, adipose cells, kidneys and most blood vessels are sympathetic only.', 'Autonomic Nervous System'),
   ('Which effector receives only parasympathetic innervation?', 'The lacrimal glands', ['Sweat glands', 'Arrector pili muscles', 'Most blood vessels'], 'The lecture gives the lacrimal glands as parasympathetic only.', 'Autonomic Nervous System'),
   ('All preganglionic autonomic neurons release', 'Acetylcholine', ['Noradrenaline', 'Adrenaline', 'Nitric oxide'], 'ACh is the main transmitter of every preganglionic neuron.', 'Autonomic Nervous System'),
   ('The receptors at all autonomic ganglia are', 'Nicotinic acetylcholine receptors', ['Muscarinic acetylcholine receptors', 'α1-adrenergic receptors', 'β2-adrenergic receptors'], 'Ganglionic receptors are nicotinic; parasympathetic effectors carry muscarinic receptors.', 'Autonomic Nervous System'),
   ('Sympathetic postganglionic fibres to most sweat glands release', 'Acetylcholine, acting on muscarinic receptors', ['Noradrenaline, acting on α1 receptors', 'Adrenaline, acting on β1 receptors', 'Neuropeptide Y, acting on nicotinic receptors'], 'These are the cholinergic sympathetic exceptions.', 'Autonomic Nervous System'),
   ('Which co-transmitters are released with noradrenaline by sympathetic postganglionic neurons?', 'ATP and neuropeptide Y', ['VIP and CGRP', 'Substance P and glutamate', 'GABA and glycine'], 'NE is released with ATP and peptides such as neuropeptide Y and galanin.', 'Autonomic Nervous System'),
   ('Which brain region regulates the balance of sympathetic and parasympathetic tone?', 'The hypothalamus', ['The cerebellum', 'The basal ganglia', 'The occipital cortex'], 'The ANS is influenced mainly by the hypothalamus and medulla oblongata.', 'Autonomic Nervous System'),
  ]}],
}

def qid(bank, text):
    return 'rv' + hashlib.sha1(f'{bank}:{text}'.encode()).hexdigest()[:8]

for bank, sets in SETS.items():
    path = os.path.join(ROOT, f'{bank}.json')
    data = json.load(open(path, encoding='utf-8'))
    for spec in sets:
        questions = []
        for n, (q, right, wrong, e, topic) in enumerate(spec['qs']):
            options = list(wrong)
            pos = int(hashlib.sha1(q.encode()).hexdigest(), 16) % 4  # spread the answer over A–D
            options.insert(pos, right)
            questions.append({'id': qid(bank, q), 'q': q, 'o': options, 'a': pos, 'e': e, 't': topic, 'src': spec['source']})
        new = {'id': spec['id'], 'name': spec['name'], 'questions': questions}
        data['sets'] = [s for s in data['sets'] if s['id'] != spec['id']] + [new]
    open(path, 'w', encoding='utf-8').write(json.dumps(data, ensure_ascii=False, separators=(',', ':')))
    print(bank, sum(len(s['qs']) for s in sets), 'review questions')
