# Owner requests still to do (saved 2026-10-12)

Continue these in order; deploy (Vercel production + GitHub master, merge/legacy-integration, share branch) after each one.

1. **Profile "About"** — learners write a short about line (e.g. "just a chill guy") on their profile; others see it on the profile card and profile page. `users/{uid}.bio` (≤160 chars, already allowed by the rules) is read by `getPublicProfile`; add the editor (You page / Settings).
2. **Follow requests like Instagram/Snapchat** — a notification for every new follower / follow request with a **Follow back / Accept** button in the bell and on Connect.
3. **Past question bank from content/HB1 first semester** — the bank page `/learn/past-questions` lists the original past papers; add new papers transcribed from `content/HB1 first semester/*/Questions` (only questions whose answers are given in the source).
4. **Lessons from content/** — the rest of HB2 Biochemistry (amino acid metabolism, fatty acid metabolism, free radicals, immunology, nucleic acids, endocrine), HB2 Physiology (cardiovascular, CNS, endocrinology, GI, renal, reproductive, respiratory, special senses), then HB1 Semester 1 courses. One topic at a time, deploy each.
5. **Images in lessons** — add images from the lecture slides (or freely licensed ones from the web, with credit) that match the concepts.
6. Check the Study page sections on phones and the "Your progress" row heights.

Owner-dependent (unchanged): paste `docs/firestore-rules-to-paste.txt` in the Firebase console; read-only admin key for the legacy progress repair (`docs/legacy-progress-repair-plan.md`); account deletion and voice calls on hold.

## Messaging like WhatsApp (owner request 2026-10-12)
Phase 1 (chats): reply (swipe to reply), reactions with who reacted, forward, copy, delete for me / for everyone, star, pin, photos and documents, report, typing indicator, search in chat.
Phase 2 (groups): WhatsApp-style group creation (name, picture, description, admins, add/remove members, invite links, announcements-only), group chats with the same message features, reply privately, @mentions.
Phase 3: comments with replies and reactions; edit sent messages (needs a rules change: chats/{cid}/messages update of `text`); broadcast lists; polls; chat list search, pin/archive/mute chats, unread counts; voice note speed 1×/1.5×/2× and waveform; stickers/GIFs; formatting (*bold*, _italic_, ~strike~, ```mono```); stories replies; notification controls per chat; disappearing messages; calls stay on hold (owner).
Past question bank from content/HB1 first semester: text extracted to scratchpad (BIOL CHEM nucleic acids MCQs has no answer key in the file; check each file for answers before adding).

## Update 2026-10-12 (evening)

Done and live: group chats, swipe to reply (messages and comments, phones), weekly XP in leagues, seen stories (grey ring, unviewed first), phone-friendly "Your learning this week", Instagram-style opened posts (phone and web).

Still to do:
- Messaging Phase 3: edit messages (needs a rules change), polls, stickers/GIFs, formatting, voice-note speed and waveform, chat pin/archive/mute and unread counts, group admins and picture (rules), story replies, per-chat notification settings. Calls stay on hold.
- Comment likes and threaded "View replies" (comments only support @replies for now; real threads need a rules change).
- Past question bank from content/HB1 first semester (only questions with given answers).
- Explore feature guide: add messaging, groups, friend streaks, stories, the new post view.
- Legacy progress repair: waiting for the owner's read-only admin key.
- Lessons and slide images (the other session is working on these).

## Next up (asked 2026-10-12, not started)

- Post visibility: the writer chooses "Everyone" or "Friends" for each post. To be truly private this must be enforced by the Firestore rules (a `visibility` field the read rule checks against mutual follows), so it needs a rules addition the owner pastes.
- Stories like WhatsApp: choose who can view (everyone / friends / hand-picked people, needs the same kind of rule), hide someone's stories (mute, device only, no rules needed), and archive your own stories after 24 hours (needs the rules to let the owner keep and read old stories).

## Requests of 2026-11-02 (8-point list)

Done and live: (1) typed answers accept other forms (units, number words, spelling, ranges, list order — `src/data/typed-answer-forms.ts`); (2) course practice ends on the full results page; (3) study aids spaced out with bullets and numbers; (4) past questions "By topic" ask how many (20/30/50/all); (5) figure numbers and "What to notice" notes on all 142 reading pictures (`src/data/illustration-notes.ts`); (6) References at the end of every lesson (`src/data/lesson-references.ts`); (8, first topic) Free Radicals now 30 questions per lesson.

Still to do, in this order (owner's choices):
- **8. More questions — thinnest topics first, to about 30 per lesson**, from the lesson's own lecture text, citing slides, wrong options as long as the right one (`tests/question-option-lengths.test.mjs`), then rebuild the battle bank. Next: Amino Acid Metabolism (9 lessons, ~13 each), Nucleic Acids (14, ~13), Immunology (10, ~14), Reproductive Physiology (10, ~14), Special Senses (10, ~13); then Endocrinology, GI Physiology, CNS (~18–22).
- **7. HB1 lessons** (live database `lessonContent`, read by every HB1 student): one course at a time. Save a backup of the current lessons first, write the improved version from `C:\Users\User\OneDrive\Desktop\HUMAN BIOLOGY\HB1`, show it to the owner, publish only after the owner's OK. The service account is in `.env` (`FIREBASE_SERVICE_ACCOUNT`). Ask which course first.
