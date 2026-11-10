// Security fixes of 2026-11-10: friends-only posts keep their words out of the open post list,
// bell notes carry ids the rules can check, blocks are kept in the database, and the server
// leaves undiscoverable learners out of search. The rules themselves are checked on the local
// emulator by tests/rules/security.rules-test.mjs.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const { isFriendsShell, splitFriendsPost, withPrivateWords } = await import('@/data/private-posts');
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

describe('friends-only posts', () => {
  const post = { board: 'general', title: 'Study group tonight', body: 'Study group tonight at 7', authorUid: 'u1', visibility: 'friends', media: [{ t: 'image', url: 'https://res.cloudinary.com/x/a.jpg' }] };

  it('puts the words and pictures in the private part and leaves an empty shell', () => {
    const { shell, content } = splitFriendsPost(post);
    assert.equal(shell.title, '');
    assert.equal(shell.body, '');
    assert.ok(!('media' in shell));
    assert.equal(shell.authorUid, 'u1');
    assert.equal(shell.visibility, 'friends');
    assert.deepEqual(content, { title: post.title, body: post.body, media: post.media });
    assert.ok(isFriendsShell(shell));
  });

  it('puts the words back for someone allowed to see them', () => {
    const { shell, content } = splitFriendsPost(post);
    assert.deepEqual(withPrivateWords(shell, content), { ...post });
    assert.equal(withPrivateWords(shell, null), shell);
  });

  it('only treats empty friends-only posts as shells', () => {
    assert.ok(!isFriendsShell(post), 'an older friends-only post still has its words');
    assert.ok(!isFriendsShell({ ...post, title: '', body: '', media: undefined, visibility: 'everyone' }));
    assert.ok(!isFriendsShell(null));
  });

  it('every way of posting goes through writePost', () => {
    const source = read('src/data/community.ts');
    assert.ok(!/setDoc\(ref, \{\s*board: 'general'/.test(source.replace(/\r/g, '')), 'a post is written without writePost');
    assert.match(source, /async function writePost/);
    assert.match(source, /visiblePostData\(item\.id, item\.data\(\)\)/);
  });
});

describe('bell notes and blocking', () => {
  it('names the follow, comment and reply it is about (checked by the rules)', () => {
    const community = read('src/data/community.ts');
    assert.match(community, /`reply_\$\{postId\}_\$\{commentId\}`/);
    assert.match(community, /`comment_\$\{postId\}_\$\{commentId\}`/);
    assert.match(community, /`like_\$\{postId\}_\$\{me\.uid\}`/);
    assert.match(read('src/data/social.ts'), /'notifications', `follow_\$\{me\}`/);
  });

  it('keeps blocks in the database and offers a way to undo them', () => {
    const community = read('src/data/community.ts');
    assert.match(community, /doc\(db, 'blocks', `\$\{uid\}_\$\{blockedId\}`\)/);
    assert.match(community, /export async function unblockCommunityUser/);
    assert.match(read('src/app/settings.tsx'), /<BlockedPeople \/>/);
  });

  it('every rule the app now relies on is in firestore.rules', () => {
    const rules = read('firestore.rules');
    for (const piece of ['match /blocks/{id}', 'match /private/{part}', 'function notificationOk', 'function blockedBy', 'function loginIsMine']) {
      assert.ok(rules.includes(piece), `${piece} is missing`);
    }
  });

  it('push alerts and battles check blocks on the server', () => {
    assert.match(read('api/push.mjs'), /blocks\/\$\{uid\}_\$\{sender\}/);
    assert.match(read('api/battle.mjs'), /blocks\/\$\{opponentUid\}_\$\{uid\}/);
  });
});

describe('privacy settings and search', () => {
  it('search leaves out learners who turned off "Let students find me"', () => {
    assert.match(read('api/learners.mjs'), /if \(!discoverable\) continue;/);
  });

  it('switches that do nothing are not offered', () => {
    const settings = read('src/app/settings.tsx');
    for (const unused of ["setPrivacyPreference('profileVisibility'", "setPrivacyPreference('messagingPermission'", "setPrivacyPreference('friendRequestPermission'"]) {
      assert.ok(!settings.includes(unused), `${unused} is offered but never applied`);
    }
    assert.ok(!settings.includes('Privacy filtering is being applied'));
  });
});

describe('secrets stay out of files Expo reads', () => {
  it('the server key is never expected in .env or .env.local', () => {
    assert.ok(!read('scripts/run-reminders.mjs').includes('--env-file=.env.local'));
    assert.match(read('scripts/security/_store.mjs'), /--env-file=\.env\.server/);
  });
});
