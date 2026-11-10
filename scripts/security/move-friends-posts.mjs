// Friends-only posts written before 2026-11-10 still carry their words in the post itself,
// which every signed-in learner can list. This moves each one's title, text and pictures to
// posts/{id}/private/content (only the author and friends can open it) and leaves an empty
// shell, as new friends-only posts are written (src/data/private-posts.ts).
// Run it only AFTER the 2026-11-10 rules are published (before that, friends can't open the
// private part either). See scripts/security/_store.mjs for how to run it.
import { APPLY, connect } from './_store.mjs';

const { db, FieldValue } = connect();
const posts = (await db.collection('posts').where('visibility', '==', 'friends').get()).docs;
const waiting = posts.filter((post) => {
  const d = post.data();
  return String(d.title ?? '') || String(d.body ?? '') || Array.isArray(d.media);
});
console.log(`${posts.length} friends-only posts; ${waiting.length} still have their words in the open list.`);
if (!APPLY) {
  console.log('Counts only. Add --apply to move them.');
  process.exit(0);
}
let moved = 0;
for (const post of waiting) {
  const d = post.data();
  const content = { title: String(d.title ?? ''), body: String(d.body ?? '') };
  if (Array.isArray(d.media) && d.media.length) content.media = d.media;
  // The private part first, then the shell: if a step fails, run the script again.
  const existing = await db.doc(`posts/${post.id}/private/content`).get();
  if (!existing.exists) await db.doc(`posts/${post.id}/private/content`).set(content, { exists: false });
  await db.doc(`posts/${post.id}`).update({ title: '', body: '', media: FieldValue.delete() });
  moved += 1;
}
console.log(`Moved ${moved} posts.`);
