// Friends-only posts (security audit, 2026-11-10). Every signed-in learner can list the
// posts collection (the feed can't be filtered by friendship), so a friends-only post is
// written as an empty shell there, and its words and pictures go to
// posts/{id}/private/content, which the rules let only the author and their friends open
// (firestore.rules → posts → private). Older friends-only posts still carry their words in
// the post itself until scripts/security/move-friends-posts.mjs moves them.
// Pure, so tests/private-posts.test.mjs can check it.

export const PRIVATE_PART = 'content';

/** The fields that only friends may see. */
const PRIVATE_FIELDS = ['title', 'body', 'media'] as const;

type PostData = Record<string, unknown>;

/** True for a friends-only post written the new way: its words are in its private content. */
export function isFriendsShell(data: PostData | null | undefined): boolean {
  if (!data || data.visibility !== 'friends') return false;
  return !String(data.title ?? '') && !String(data.body ?? '') && !Array.isArray(data.media);
}

/** A new friends-only post as its shell (for the open list) and its private content. */
export function splitFriendsPost(post: PostData): { shell: PostData; content: PostData } {
  const shell: PostData = { ...post, title: '', body: '' };
  delete shell.media;
  const content: PostData = { title: post.title, body: post.body };
  if (Array.isArray(post.media) && post.media.length) content.media = post.media;
  return { shell, content };
}

/** The post as shown: its shell with the private words put back. */
export function withPrivateWords(shell: PostData, words: PostData | null | undefined): PostData {
  if (!words) return shell;
  const merged: PostData = { ...shell };
  for (const field of PRIVATE_FIELDS) if (field in words) merged[field] = words[field];
  return merged;
}
