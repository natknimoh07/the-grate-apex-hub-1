// Cell Structure → Light Microscopy Techniques and Electron Microscopy. From "2025 BIOL 151 CELL
// STRUCTURE.pdf" (Prof. W. G. Akanwariwiak), pages 97–188. Rewrites the original database
// lesson cellstruct-02 (same id, so progress is kept). Checked 2026-11-04; teaching text in our
// own words. Practises Quiz 2.
import type { Hb1Lesson } from '@/data/hb1-lessons';
import { numberFigures, ostxMicro } from '@/data/hb1-lessons/pictures';

export const cellstructTechniques: Hb1Lesson = {
  id: 'cellstruct-02',
  order: 2,
  title: 'Light Microscopy Techniques and Electron Microscopy',
  summary: 'Brightfield, darkfield, phase-contrast, ultraviolet and fluorescence microscopy (epifluorescence, the dichroic mirror, immunofluorescence); the electron microscope (wavelength of electrons, TEM and SEM) compared with the light microscope; preparing specimens: fixation, dehydration and embedding, sectioning with microtomes, and staining for light (H and E, basic and acidic dyes) and electron microscopy (uranium, lead, osmium; positive and negative staining)',
  minutes: 32,
  source: '2025 BIOL 151 CELL STRUCTURE.pdf (pages 97–188)',
  quizId: 'cste',
  quizName: 'Quiz · Light Microscopy Techniques and Electron Microscopy (lesson)',
  pastSets: ['s2'],
  sections: numberFigures([
    {
      id: 'te-light',
      title: 'Ways of getting contrast with light',
      kicker: 'Brightfield, darkfield, phase contrast',
      blocks: [
        { k: 'p', x: 'Living cells are nearly <b>colourless and transparent</b>, and the eye sees only differences in <b>colour</b> (wavelength) or <b>brightness</b> (amplitude). Each technique below is a different trick for creating contrast.' },
        { k: 'h', x: 'Brightfield microscopy', l: 3 },
        { k: 'p', x: 'The substage condenser gathers lamp light into a <b>cone</b> focused on the specimen. A specimen shows only if it changes the speed and path of light (its <b>refractive index and opacity</b>) enough to make contrast. If its refractive index is close to the medium’s, it is <b>invisible</b>. So specimens need natural contrast or <b>staining</b>, which usually <b>kills</b> them: brightfield cannot show transparent living cells or thin unstained material well.' },
        { k: 'h', x: 'Darkfield microscopy', l: 3 },
        ostxMicro('m02-03-darkfield.jpg', 700, 665, 'In darkfield, an opaque light stop in the condenser blocks the direct light; only light scattered by the specimen enters the objective.', 'So the specimen shines brightly on a black background.'),
        { k: 'ul', items: [
          'A cheap modification of a brightfield microscope: a <b>darkfield condenser</b> with an <b>opaque disc</b>.',
          'Only light <b>reflected or scattered off the specimen</b> enters the objective: the specimen appears <b>light on a dark background</b>.',
          'For <b>live, unstained</b> organisms that are invisible in brightfield, cannot be stained by standard methods, or are distorted by staining (e.g. yeast, spirochaetes such as <i>Treponema</i>, tissue-culture smears, water-borne single cells).',
          'Shows particles <b>below the resolution limit</b> (even 40 nm gold particles) as points of light, but it is <b>poor for large objects</b> and shows little internal detail.',
        ] },
        { k: 'h', x: 'Phase-contrast microscopy', l: 3 },
        { k: 'p', x: 'Light passing through a cell is <b>diffracted</b>, and the diffracted rays are slightly <b>retarded</b> (their phase shifted) compared with the background rays, by an amount that depends on the specimen’s thickness and refractive index. The eye cannot see phase, so the image has little contrast.' },
        ostxMicro('m02-03-phasecontr.jpg', 868, 794, 'In a phase-contrast microscope, an annular ring in the condenser and a phase plate in the objective turn phase differences into brightness differences.', 'Direct (background) and diffracted (specimen) rays pass through different parts of the phase plate and then interfere.'),
        { k: 'ul', items: [
          'An <b>annulus</b> below the stage and a <b>phase plate</b> in the objective <b>further retard the diffracted rays</b>.',
          'When the two sets of rays <b>interfere</b>, the bigger phase difference becomes a bigger fall in <b>amplitude (brightness)</b>: the background stays bright, parts of the specimen turn dark.',
          'Widely used to study <b>living cells and tissues</b>: cell movement, nuclear changes, cytoplasmic streaming, especially with <b>time-lapse</b> photography. Resolution is still limited by the wavelength of visible light.',
        ] },
        ostxMicro('m02-03-pcimage.jpg', 900, 374, 'The same unstained squamous epithelial cells in brightfield (left) and phase contrast (right).', 'In brightfield only highly refractive parts (membrane, nucleus) show; phase contrast reveals the whole cell.'),
      ],
    },
    {
      id: 'te-uv',
      title: 'Ultraviolet and fluorescence microscopy',
      kicker: 'Shorter wavelengths, glowing dyes',
      blocks: [
        { k: 'cards', items: [
          { title: 'Ultraviolet microscope', blocks: [{ k: 'ul', items: [
            'UV light has a shorter wavelength, so it roughly <b>doubles the resolution</b> of white-light microscopy.',
            'Uses specimens that absorb UV naturally, or are stained to, and re-emit it as longer, visible wavelengths.',
            'Drawbacks: UV <b>does not pass through glass</b>, so expensive <b>quartz lenses</b> are needed; UV is <b>invisible</b> and <b>damages the eye</b>, so a <b>camera</b> or <b>fluorescent screen</b> must be used.',
          ] }] },
          { title: 'Fluorescence microscope', blocks: [{ k: 'ul', items: [
            'A light microscope with extra parts. Fluorescent molecules <b>absorb one wavelength and emit a longer one</b>: an electron jumps to a higher energy level, then falls back, releasing light (and heat).',
            'Some structures fluoresce naturally (<b>autofluorescence</b>, e.g. chromosomes); others are stained with <b>fluorochromes</b>.',
            'Filters let only the excitation light in and only the <b>emitted wavelength</b> out, so the dye <b>glows on a dark background</b>.',
          ] }] },
        ] },
        ostxMicro('m02-01-fluorescen.jpg', 492, 353, 'Endothelial cells stained with three fluorescent dyes: nuclei blue (DAPI), microtubules green, actin filaments red.', 'Each dye marks one structure; the rest of the cell stays dark.'),
        { k: 'box', title: 'Epifluorescence and the dichroic mirror', tone: 'formula', blocks: [{ k: 'p', x: 'In most fluorescence microscopes the <b>objective does two jobs</b>: it focuses the <b>excitation</b> light onto the sample, and collects the <b>emitted</b> fluorescence. Excitation and emission both travel through the objective: <b>epifluorescence</b>. A <b>dichroic mirror</b> separates the two light paths (reflecting the excitation light down and letting the longer-wavelength emission through), so the image is free of background glare.' }] },
        { k: 'term', name: 'Immunofluorescence', def: 'Antibodies against a particular protein are linked to a fluorescent dye such as <b>fluorescein</b> and applied to cells; only structures containing that protein glow. Widely used in microbiology to identify organisms.' },
      ],
    },
    {
      id: 'te-em',
      title: 'Electron microscopy',
      kicker: 'TEM and SEM',
      blocks: [
        { k: 'p', x: 'Matter has a <b>wave–particle dual nature</b>, so moving electrons behave as waves whose wavelength shrinks as their speed (accelerating voltage V) rises:' },
        { k: 'box', title: 'λ = √(1.5/V) nm', tone: 'formula', blocks: [{ k: 'p', x: 'At <b>60 kV</b>, λ ≈ <b>0.005 nm</b>, about 100 000 times shorter than green light. In theory this gives enormous resolution, but in practice it is limited by <b>poor specimen contrast</b> and the <b>imperfect electromagnetic lenses</b> (and by specimen preparation). Real instruments resolve about <b>0.2–0.3 nm</b>.' }] },
        ostxMicro('m02-03-temvslight.jpg', 802, 678, 'A TEM (left) focuses an electron beam with electromagnets, much as a light microscope (right) focuses light with glass lenses.', 'Same plan: source, condenser, specimen, objective, projector; but magnets, a vacuum and a screen.'),
        { k: 'h', x: 'Transmission electron microscope (TEM)', l: 3 },
        { k: 'ul', items: [
          'A heated, pin-shaped <b>cathode</b> (electron gun) emits electrons; a <b>high voltage</b> (50–150 kV) at the anode accelerates them down a column kept under <b>high vacuum</b>.',
          '<b>Electromagnetic coils</b> act as lenses: a condenser focuses the beam onto an <b>ultrathin section</b>.',
          'Electrons are scattered according to the <b>electron density</b> (atomic mass) of the specimen. Biological material (C, H, N, O: low atomic numbers) gives <b>weak contrast</b>, hence heavy-metal stains.',
          'An objective and a <b>projector</b> lens enlarge the image onto a <b>fluorescent screen</b> or film. Useful magnification about <b>300 000×</b>; shows internal structure in 2-D.',
        ] },
        ostxMicro('m02-03-elmicschem.jpg', 900, 532, 'The components of a transmission (left) and a scanning (right) electron microscope.', 'TEM electrons pass through the sample to a screen; SEM electrons are scanned over the surface and detectors collect the electrons that bounce off.'),
        { k: 'h', x: 'Scanning electron microscope (SEM)', l: 3 },
        { k: 'ul', items: [
          'Looks at the <b>surface</b> of a solid specimen (pollen, cells, metals, polymers).',
          'Great <b>depth of field</b>: much of the sample in focus at once, giving striking <b>3-D-looking</b> images.',
          'Magnification up to about <b>100 000×</b> (20 000× typical) against about 2000× for light microscopes; resolution usually about <b>10 nm</b> (better with field-emission SEM).',
        ] },
        { k: 'table', head: ['Feature', 'Light microscope', 'Electron microscope'], rows: [
          { c: ['Radiation', '<b>Visible light</b>, about 390–760 nm', '<b>Electrons</b>, λ a few thousandths of a nm'] },
          { c: ['Lenses', '<b>Glass</b>', '<b>Electromagnets</b>'] },
          { c: ['Source', 'Tungsten or quartz-halogen lamp', 'High-voltage tungsten filament (electron gun)'] },
          { c: ['Best resolution', 'About <b>200–240 nm</b>', 'About <b>0.2 nm</b>'] },
          { c: ['Maximum magnification', 'About 1000–1500× (2000× with oil)', 'About <b>300 000–500 000×</b>'] },
          { c: ['Image', 'In colour; living cells possible', '<b>Monochrome</b>; specimens dead, in a vacuum'] },
        ] },
        { k: 'box', title: 'Check this slide', tone: 'red', blocks: [{ k: 'p', x: 'The comparison table writes “390 nm (red) – 760 nm”. Visible light runs from about <b>390 nm (violet)</b> to <b>760 nm (red)</b>; red is the long end.' }] },
      ],
    },
    {
      id: 'te-prep',
      title: 'Preparing specimens',
      kicker: 'Fix, embed, section, stain',
      blocks: [
        { k: 'step', n: '1', title: 'Fixation', blocks: [
          { k: 'p', x: 'Rapid <b>killing and preservation</b> of tissue, “the fundamental basis of all histological work”: it prevents <b>autolysis</b> and bacterial or fungal attack, and toughens the tissue for later steps.' },
          { k: 'ul', items: [
            '<b>Physical</b>: plunge into <b>liquid nitrogen (−196 °C)</b>, freezing so fast that no damaging <b>ice crystals</b> form; this preserves structure and <b>enzyme activity</b>. But frozen tissue is fixed only while frozen; warmed, it autolyses, so permanent frozen sections must be chemically fixed too.',
            '<b>Chemical</b>: chemicals that stabilise <b>proteins and lipids</b>. Light microscopy: acetic acid, alcohol, acetone, mercuric chloride, chromic acid, <b>formaldehyde</b>. Electron microscopy (no obscuring precipitates): <b>formaldehyde and glutaraldehyde</b> (fix proteins), <b>osmium tetroxide and potassium permanganate</b> (fix lipids).',
          ] },
        ] },
        { k: 'step', n: '2', title: 'Dehydration and embedding', blocks: [
          { k: 'p', x: 'Water must go: in the EM it would destroy the <b>vacuum</b>, and soft tissue must be supported to be cut. <b>Dehydrate</b> through increasing ethanol (e.g. 70% → 90% → absolute), <b>clear</b> with a wax solvent (<b>xylene</b>), then <b>infiltrate</b> with molten <b>paraffin wax</b>. For EM, use <b>epoxy resin</b> (e.g. <b>Araldite</b>) with propylene oxide in place of xylene, then bake to polymerise.' },
          { k: 'p', x: 'Thick plant sections can simply be sandwiched in <b>raw carrot</b> or unripe pawpaw; wax allows thinner sections; resin is rigid enough for <b>ultrathin</b> EM sections.' },
        ] },
        { k: 'step', n: '3', title: 'Sectioning', blocks: [
          { k: 'p', x: 'Electrons penetrate poorly: a thick specimen scatters them all and gives a poor, low-contrast image. A <b>microtome</b> (specimen holder, sharp edge, thickness control) cuts sections:' },
          { k: 'table', head: ['', 'Light microscopy', 'Electron microscopy'], rows: [
            { c: ['Thickness', '<b>1–20 µm</b> (1000–20 000 nm)', '<b>50–100 nm</b> (ultrathin)'] },
            { c: ['Embedding', 'Paraffin wax', 'Epoxy resin (Araldite)'] },
            { c: ['Knife', '<b>Steel</b> razor', '<b>Glass or diamond</b> (ultramicrotome)'] },
            { c: ['Mounted on', 'Glass slide', '<b>Copper grid</b>'] },
          ] },
          { k: 'p', x: 'Frozen specimens are cut in a microtome kept in a freezer at about −20 °C (a cryostat).' },
        ] },
        { k: 'step', n: '4', title: 'Staining for light microscopy', blocks: [
          { k: 'p', x: 'Sections are almost transparent, so they are stained, mostly with aromatic <b>dyes from the textile industry</b>. Some (toluidine blue) colour everything; specific stains work by <b>charge</b>:' },
          { k: 'table', head: ['Stain type', 'Charge of coloured group', 'Binds', 'Examples'], rows: [
            { c: ['<b>Basic</b>', '<b>Cationic (+)</b>', 'Acidic, negative molecules: <b>nucleic acids</b> in the nucleus (blue/purple)', '<b>Haematoxylin</b>, crystal violet, methylene blue, safranin, basic fuchsin'] },
            { c: ['<b>Acidic</b>', '<b>Anionic (−)</b>', 'Basic groups, mostly in the <b>cytoplasm</b> (red/pink)', '<b>Eosin</b>, nigrosine, picric acid, acid fuchsin, India ink'] },
          ] },
          { k: 'p', x: '<b>Haematoxylin and eosin (H and E)</b> together are the routine stain for most animal tissues.' },
        ] },
        { k: 'step', n: '5', title: 'Staining for electron microscopy', blocks: [
          { k: 'p', x: 'EM stains give <b>contrast, not colour</b>: elements of <b>high atomic number</b> raise electron density, so stained parts look dark (<b>electron-dense</b>).' },
          { k: 'ul', items: [
            '<b>Uranium</b> (uranyl acetate) binds mainly <b>nucleic acids and proteins</b>; <b>lead</b> binds <b>lipids and membranes</b> (deck’s statement); <b>osmium</b> stains membranes, lipids and nucleic acids.',
            '<b>Positive staining</b>: the structure itself is made dark. <b>Uranium + lead double staining is to EM what H and E is to light microscopy.</b>',
            '<b>Negative staining</b>: heavy-metal salts (<b>potassium phosphotungstate</b>, uranyl acetate, ammonium molybdate) make the <b>background</b> dense; the stain dries round the specimen, which appears <b>bright on a dark background</b>.',
          ] },
        ] },
        { k: 'box', title: 'Strictly speaking', tone: 'gold', blocks: [{ k: 'p', x: 'The deck links positive staining to isolated organelles, membranes, <b>viruses and ribosomes</b>. In practice, small particles such as <b>viruses and ribosomes</b> are classically examined by <b>negative staining</b>, which outlines their shape; positive staining is used mainly on sections.' }] },
        { k: 'box', title: 'Lesson summary', tone: 'recall', blocks: [{ k: 'ul', items: [
          'Brightfield needs contrast or stain; darkfield: opaque disc, bright specimen on dark background; phase contrast: annulus + phase plate turn phase into brightness, for living cells.',
          'UV: double resolution, quartz lenses, camera. Fluorescence: absorb short, emit long; dichroic mirror; immunofluorescence with fluorescein.',
          'Electron λ = √(1.5/V) nm; TEM: thin sections, internal detail, 0.2 nm; SEM: surfaces, depth of field, 3-D look.',
          'Fix (liquid N₂ or chemicals; glutaraldehyde/OsO₄ for EM) → dehydrate in alcohol → clear in xylene → embed in wax or resin → section (steel vs glass/diamond knife) → stain (H and E; uranium + lead).',
        ] }] },
      ],
    },
  ]),
  quiz: [
    ['In brightfield, a specimen is invisible if its refractive index', 'Matches the medium around it', ['Is much higher than glass', 'Is lower than that of air', 'Changes with every colour used'], 'No contrast is produced.', 'Brightfield'],
    ['A drawback of staining for brightfield is that it', 'Usually kills the cells', ['Lowers the magnification', 'Needs a vacuum chamber', 'Requires quartz lenses'], 'So living cells cannot be seen well.', 'Brightfield'],
    ['A darkfield condenser contains', 'An opaque disc', ['A phase plate', 'A dichroic mirror', 'A quartz prism'], 'It blocks direct light.', 'Darkfield'],
    ['In darkfield, the specimen appears', 'Bright on a dark background', ['Dark on a bright background', 'Green on a black background', 'In natural colours only'], 'Only scattered light enters.', 'Darkfield'],
    ['Darkfield is ideal for', 'Live, unstained microorganisms', ['Thick, opaque tissue blocks', 'Ultrathin resin sections', 'Large whole organs'], 'E.g. spirochaetes, yeast.', 'Darkfield'],
    ['Phase-contrast microscopy converts phase differences into', 'Differences in brightness', ['Differences in colour', 'Scattering of electrons', 'Emitted fluorescent light'], 'Via interference.', 'Phase contrast'],
    ['The phase-contrast microscope has an annulus and a', 'Phase plate', ['Light stop disc', 'Dichroic mirror', 'Copper grid'], 'In the objective.', 'Phase contrast'],
    ['Phase contrast is especially useful for', 'Living cells and tissues', ['Polished metal surfaces', 'Frozen dead tissue', 'Single atoms'], 'Often with time-lapse.', 'Phase contrast'],
    ['UV microscopes need quartz lenses because UV', 'Cannot pass through glass', ['Melts ordinary glass', 'Is too long a wavelength', 'Is absorbed by oil only'], 'Quartz transmits UV.', 'UV'],
    ['Compared with white light, UV roughly', 'Doubles the resolution', ['Halves the resolution', 'Has no effect on resolution', 'Triples the magnification'], 'Shorter wavelength.', 'UV'],
    ['A fluorescent molecule absorbs light and emits', 'A longer wavelength', ['A shorter wavelength', 'The same wavelength', 'Only heat, no light'], 'E.g. UV in, visible out.', 'Fluorescence'],
    ['In epifluorescence, the objective lens', 'Both excites and collects', ['Only collects the emission', 'Only filters the lamp light', 'Is replaced by a mirror'], 'Both paths go through it.', 'Fluorescence'],
    ['The excitation and emission paths are separated by a', 'Dichroic mirror', ['Phase plate', 'Opaque disc', 'Condenser annulus'], 'It reflects one, passes the other.', 'Fluorescence'],
    ['Antibodies tagged with fluorescein are used in', 'Immunofluorescence', ['Negative staining', 'Phase-contrast imaging', 'Darkfield illumination'], 'They mark specific proteins.', 'Fluorescence'],
    ['The wavelength of electrons accelerated at 60 kV is about', '0.005 nm', ['0.5 nm', '5 nm', '500 nm'], 'λ = √(1.5/V) nm.', 'Electron microscopy'],
    ['EM resolution is limited mainly by', 'Lens quality and specimen contrast', ['The colour of the electron beam', 'The brightness of the tungsten lamp', 'The refractive index of the oil'], 'Not by wavelength.', 'Electron microscopy'],
    ['Lenses in an electron microscope are', 'Electromagnets', ['Quartz glass', 'Oil-filled glass', 'Diamond crystals'], 'Coils make magnetic fields.', 'Electron microscopy'],
    ['The EM column is kept under a vacuum because', 'Air would scatter the electrons', ['It keeps the cells alive longer', 'It cools the specimen down', 'It adds colour to the image'], 'Electrons penetrate poorly.', 'Electron microscopy'],
    ['Biological specimens give weak EM contrast because they are mostly', 'Low atomic number elements', ['Heavy metal atoms like lead', 'Highly ordered crystals', 'Strongly magnetic material'], 'C, H, N, O.', 'Electron microscopy'],
    ['The best resolution of a modern TEM is about', '0.2 nm', ['200 nm', '2 µm', '20 nm'], '0.2–0.3 nm.', 'Electron microscopy'],
    ['The SEM is mainly used to view', 'Surfaces in 3-D', ['Internal thin sections', 'Living swimming cells', 'Fluorescent dyes'], 'Large depth of field.', 'Electron microscopy'],
    ['Liquid nitrogen fixation works by', 'Freezing too fast for ice crystals', ['Coagulating proteins chemically', 'Dissolving all the lipids out', 'Staining the nucleic acids'], 'At −196 °C.', 'Preparation'],
    ['Fixatives used for lipids in electron microscopy are', 'Osmium tetroxide and KMnO₄', ['Acetone and glacial acetic acid', 'Ethanol and xylene', 'Eosin and haematoxylin'], 'Glutaraldehyde fixes proteins.', 'Preparation'],
    ['Before paraffin embedding, alcohol is replaced by', 'Xylene', ['Water', 'Glycerol', 'Formalin'], 'Clearing.', 'Preparation'],
    ['Ultrathin sections for EM are about', '50–100 nm thick', ['1–20 µm thick', '1–2 mm thick', '0.1–0.5 nm thick'], 'Cut with glass or diamond knives.', 'Preparation'],
    ['EM sections are mounted on', 'A copper grid', ['A glass slide', 'Filter paper', 'A quartz cuvette'], 'Light sections go on glass.', 'Preparation'],
    ['Haematoxylin is a basic stain that colours', 'Nucleic acids in the nucleus', ['Basic groups in the cytoplasm', 'Lipid droplets only', 'Cellulose walls of plants'], 'Its coloured group is cationic.', 'Staining'],
    ['Eosin is an acidic stain that colours', 'The cytoplasm', ['The nucleus', 'The chromosomes', 'The nucleolus'], 'Red/pink.', 'Staining'],
    ['The EM equivalent of H and E is double staining with', 'Uranium and lead', ['Eosin and nigrosine', 'Crystal violet and iodine', 'Osmium and glycerol'], 'Positive staining.', 'Staining'],
    ['In negative staining the specimen appears', 'Bright on a dark background', ['Dark on a bright background', 'Coloured red and blue', 'Invisible until heated'], 'The stain fills the background.', 'Staining'],
  ],
};
