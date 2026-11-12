// What the textbook pages (data/textbook-refs/organology.ts) add, in our own words.
import type { TextbookNotes } from '@/data/textbook-notes/types';
import { LESSON_PAGES, lessonIdOf } from '@/data/topics/organology/pages';

const at = (n: 1 | 2 | 3 | 4 | 5, title: string) => LESSON_PAGES[n].findIndex((page) => page.title === title);

export const notes: TextbookNotes = {
  [lessonIdOf(2)]: {
    [at(2, 'The Wall of a Blood Vessel')]:
      "Gray's adds how the three tunics differ between vessel types. Arteries are grouped into classes by how much smooth muscle and elastic tissue their tunica media holds: the largest are rich in elastic fibres, smaller ones are mainly muscular. In veins the media is thin and the lumen wide, and veins of the limbs below the level of the heart often have paired valves that keep blood moving towards the heart.",
    [at(2, 'Serosa or Adventitia?')]:
      "Gray's describes the peritoneum as one layer of mesothelial cells on a thin bed of connective tissue, the abdominal counterpart of the pleura and the serous pericardium. Organs slung from the wall on a mesentery are intraperitoneal and wear the visceral peritoneum as their outer covering; organs lying between the parietal peritoneum and the wall, such as the kidneys and ureters, are retroperitoneal. Normally the viscera fill the abdomen, so the peritoneal cavity is only a potential space in which two serous surfaces slide.",
  },
  [lessonIdOf(3)]: {
    [at(3, 'The Trachea')]:
      "Gray's points out which way the cartilage faces: each C-shaped ring is open at the back, where the wall is mainly smooth muscle, so the trachea is rigid in front and at the sides but can give a little behind, next to the oesophagus. The lowest ring forms the carina, a ridge between the openings of the two main bronchi.",
  },
  [lessonIdOf(4)]: {
    [at(4, 'The Heart')]:
      "Gray's shows the heart's outer layer in its setting: the visceral layer of serous pericardium that covers the heart is its epicardium, and it turns back at the great vessels to become the parietal layer lining the fibrous sac. Between the two lies the pericardial cavity with a thin film of fluid, so the epicardium is a true serosa, the outer coat expected of an organ inside a body cavity.",
  },
};
