// Replies to stories, like Instagram and WhatsApp status (owner, 2026-10-31): a reply or a
// quick reaction to a friend's story arrives in your private chat with them, as a message
// carrying a small preview of the story (share kind 'story': its picture, or a text story's
// words and colour). Chats are between friends who follow each other, so only friends can
// reply; the deployed rules already allow it.
import { sendChatMessage } from '@/data/chat';
import { type CommunityStory, getOrCreateFriendConversation } from '@/data/community';
import { poster } from '@/lib/media-urls';
import { announceMessage } from '@/lib/web-push';
import { auth } from '@/lib/firebase';

export const STORY_REACTIONS = ['❤️', '🔥', '😂', '😮', '👏'] as const;
export const STORY_REPLY_MAX = 500;

/** Sends a reply (or a reaction) to a friend's story into your chat with them. */
export async function replyToStory(story: CommunityStory, authorId: string, text: string): Promise<void> {
  const me = auth.currentUser?.uid;
  if (!me) throw new Error('Please sign in again.');
  const body = text.trim().slice(0, STORY_REPLY_MAX);
  if (!body) throw new Error('Write a reply first.');
  const chatId = await getOrCreateFriendConversation(authorId);
  const img = story.media_url ? (story.media_type === 'video' ? poster(story.media_url) : story.media_url) : undefined;
  await sendChatMessage(chatId, body, {
    share: {
      kind: 'story',
      uid: authorId,
      username: story.author_name ?? null,
      id: story.id,
      text: (story.body ?? '').slice(0, 200) || (story.media_type === 'video' ? 'Video' : story.media_url ? 'Photo' : 'Story'),
      ...(img ? { img } : {}),
      ...(!img && story.bg ? { bg: story.bg } : {}),
    },
  });
  void announceMessage(chatId, authorId);
}
