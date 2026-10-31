import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Interactive } from '@/components/ui/interactive';
import { Pill } from '@/components/ui/pill';
import { Sheet } from '@/components/ui/sheet';
import { Text, TextInput } from '@/components/ui/text';
import { Radius, Type, type ThemeColors } from '@/constants/theme';
import { makePoll, type Poll, type PollDef, type PollHost, POLL_LIMITS, pollPercent, useLivePostPoll, useMyPollVote, votePoll } from '@/data/polls';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

// A poll in the feed or a chat, like WhatsApp: tap an option to vote (tap it again to
// take the vote back; several options in a "select one or more" poll). Bars show the
// share of voters; in a visible poll "View votes" shows who picked what.
export function PollCard({ host, poll, nameOf, compact = false }: { host: PollHost; poll: Poll; nameOf?: (uid: string) => string | null; compact?: boolean }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [mine, setMine] = useMyPollVote(host, poll);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [votesOpen, setVotesOpen] = useState(false);
  const picked = mine ?? [];
  const voted = picked.length > 0;

  async function choose(index: number) {
    if (busy) return;
    const next = poll.multi ? (picked.includes(index) ? picked.filter((item) => item !== index) : [...picked, index]) : picked.includes(index) ? [] : [index];
    const before = mine;
    setMine(next);
    setBusy(true);
    setError(null);
    try {
      setMine(await votePoll(host, next));
    } catch (caught) {
      setMine(before ?? []);
      setError(caught instanceof Error ? caught.message : 'Your vote could not be saved.');
    } finally {
      setBusy(false);
    }
  }

  const voterName = (uid: string) => nameOf?.(uid) || poll.names[uid] || 'A learner';
  return (
    <View style={[styles.card, compact && styles.cardCompact]}>
      <View style={styles.head}>
        <Icon name="chart" size={16} color={colors.primaryText} />
        <Text style={styles.kicker}>POLL</Text>
        {poll.anon ? <Pill label="Anonymous" tone="neutral" /> : null}
      </View>
      <Text style={styles.question}>{poll.q}</Text>
      <Text style={styles.hint}>{poll.multi ? 'Select one or more' : 'Select one'}{poll.anon ? ' · nobody sees who voted' : ' · votes show your name'}</Text>
      <View style={styles.options} accessibilityRole={poll.multi ? undefined : 'radiogroup'}>
        {poll.opts.map((option, index) => {
          const on = picked.includes(index);
          const percent = pollPercent(poll, index);
          return (
            <Interactive
              key={index}
              onPress={() => void choose(index)}
              disabled={busy}
              accessibilityRole={poll.multi ? 'checkbox' : 'radio'}
              accessibilityState={{ checked: on, disabled: busy }}
              accessibilityLabel={`${option}. ${poll.counts[index] ?? 0} vote${poll.counts[index] === 1 ? '' : 's'}`}
              style={({ hovered }) => [styles.option, on && styles.optionOn, hovered && styles.optionHover]}
            >
              <View style={styles.optionRow}>
                <View style={[poll.multi ? styles.box : styles.radio, on && styles.markOn]}>{on ? <Icon name="check" size={11} color={colors.onPrimary} strokeWidth={3} /> : null}</View>
                <Text style={styles.optionText}>{option}</Text>
                {voted || poll.total ? <Text style={styles.count}>{poll.counts[index] ?? 0}</Text> : null}
              </View>
              {voted || poll.total ? (
                <View style={styles.track}>
                  <View style={[styles.fill, on && styles.fillOn, { width: `${percent}%` }]} />
                </View>
              ) : null}
            </Interactive>
          );
        })}
      </View>
      <View style={styles.foot}>
        <Text style={styles.hint}>{poll.total} vote{poll.total === 1 ? '' : 's'}{busy ? ' · saving…' : ''}</Text>
        {!poll.anon && poll.total > 0 ? <Button label="View votes" size="sm" variant="ghost" onPress={() => setVotesOpen(true)} /> : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Sheet visible={votesOpen} onClose={() => setVotesOpen(false)} title="Poll votes" subtitle={poll.q} footer={null}>
        <ScrollView style={styles.votes}>
          {poll.opts.map((option, index) => {
            const people = Object.entries(poll.voters ?? {}).filter(([, picks]) => picks.includes(index)).map(([uid]) => voterName(uid));
            return (
              <View key={index} style={styles.voteGroup}>
                <Text style={styles.voteOption}>{option} · {people.length}</Text>
                {people.length ? people.map((name, i) => <Text key={i} style={styles.voteName}>{name}</Text>) : <Text style={styles.hint}>No votes yet.</Text>}
              </View>
            );
          })}
        </ScrollView>
      </Sheet>
    </View>
  );
}

/** Write a poll: the question, 2–12 options, one or several answers, visible or anonymous votes. */
export function PollComposer({ visible, onClose, onSend, where }: { visible: boolean; onClose: () => void; onSend: (poll: PollDef) => Promise<void>; where: string }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [multi, setMulti] = useState(false);
  const [anon, setAnon] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function reset() {
    setQuestion('');
    setOptions(['', '']);
    setMulti(false);
    setAnon(false);
    setError(null);
  }

  async function send() {
    if (busy) return;
    setError(null);
    let poll: PollDef;
    try {
      poll = makePoll(question, options, multi, anon);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Check the poll.');
      return;
    }
    setBusy(true);
    try {
      await onSend(poll);
      reset();
      onClose();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'The poll could not be sent.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <Sheet visible={visible} onClose={onClose} title="Create a poll" subtitle={`Sent to ${where}.`}>
      <View style={styles.composer}>
        <TextInput value={question} onChangeText={setQuestion} maxLength={POLL_LIMITS.question} placeholder="Ask a question" placeholderTextColor={colors.textTertiary} accessibilityLabel="Poll question" style={styles.input} />
        <Text style={styles.label}>Options</Text>
        {options.map((option, index) => (
          <View key={index} style={styles.optionInputRow}>
            <TextInput
              value={option}
              onChangeText={(text) => setOptions((list) => list.map((item, i) => (i === index ? text : item)))}
              maxLength={POLL_LIMITS.option}
              placeholder={`Option ${index + 1}`}
              placeholderTextColor={colors.textTertiary}
              accessibilityLabel={`Option ${index + 1}`}
              style={[styles.input, styles.flex]}
            />
            {options.length > POLL_LIMITS.minOptions ? (
              <Interactive onPress={() => setOptions((list) => list.filter((_, i) => i !== index))} accessibilityRole="button" accessibilityLabel={`Remove option ${index + 1}`} style={styles.remove}>
                <Icon name="close" size={16} color={colors.textSecondary} />
              </Interactive>
            ) : null}
          </View>
        ))}
        {options.length < POLL_LIMITS.maxOptions ? <Button label="Add an option" size="sm" variant="ghost" onPress={() => setOptions((list) => [...list, ''])} /> : null}
        <ToggleRow label="Allow more than one answer" on={multi} onPress={() => setMulti((value) => !value)} />
        <ToggleRow label="Anonymous: nobody sees who voted" on={anon} onPress={() => setAnon((value) => !value)} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <View style={styles.actions}>
          <Button label="Send poll" size="sm" onPress={() => void send()} loading={busy} disabled={busy} />
          <Button label="Cancel" size="sm" variant="ghost" onPress={onClose} />
        </View>
      </View>
    </Sheet>
  );
}

function ToggleRow({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  return (
    <Interactive onPress={onPress} accessibilityRole="checkbox" accessibilityState={{ checked: on }} accessibilityLabel={label} style={styles.toggle}>
      <View style={[styles.box, on && styles.markOn]}>{on ? <Icon name="check" size={11} color={colors.onPrimary} strokeWidth={3} /> : null}</View>
      <Text style={styles.toggleText}>{label}</Text>
    </Interactive>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    card: { gap: 8, padding: 14, borderRadius: Radius.lg, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, minWidth: 240, maxWidth: 420 },
    cardCompact: { padding: 12 },
    head: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    kicker: { ...Type.overline, color: colors.primaryText, flex: 1 },
    question: { fontSize: 16, lineHeight: 22, fontWeight: '700', color: colors.text },
    hint: { fontSize: 12, color: colors.textSecondary },
    options: { gap: 8, marginTop: 2 },
    option: { gap: 6, paddingVertical: 9, paddingHorizontal: 10, borderRadius: Radius.md, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surfaceMuted },
    optionOn: { borderColor: colors.primary, backgroundColor: colors.primarySubtle },
    optionHover: { borderColor: colors.primaryBorder },
    optionRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    optionText: { flex: 1, fontSize: 14, lineHeight: 19, color: colors.text },
    count: { fontSize: 13, fontWeight: '700', color: colors.textSecondary },
    radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: colors.borderStrong, alignItems: 'center', justifyContent: 'center' },
    box: { width: 20, height: 20, borderRadius: 5, borderWidth: 2, borderColor: colors.borderStrong, alignItems: 'center', justifyContent: 'center' },
    markOn: { backgroundColor: colors.primary, borderColor: colors.primary },
    track: { height: 5, borderRadius: 3, backgroundColor: colors.border, overflow: 'hidden' },
    fill: { height: 5, borderRadius: 3, backgroundColor: colors.textTertiary },
    fillOn: { backgroundColor: colors.primary },
    foot: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, minHeight: 32 },
    error: { fontSize: 13, color: colors.error },
    votes: { maxHeight: 420 },
    voteGroup: { gap: 4, paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
    voteOption: { fontSize: 14, fontWeight: '700', color: colors.text },
    voteName: { fontSize: 14, color: colors.textSecondary },
    composer: { gap: 10 },
    label: { ...Type.caption, fontWeight: '700', color: colors.textSecondary },
    input: { minHeight: 42, borderWidth: 1, borderColor: colors.borderStrong, borderRadius: Radius.md, backgroundColor: colors.surfaceSunken, paddingHorizontal: 12, color: colors.text, fontSize: 14 },
    optionInputRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    flex: { flex: 1 },
    remove: { padding: 8 },
    toggle: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 6 },
    toggleText: { flex: 1, fontSize: 14, color: colors.text },
    actions: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginTop: 4 },
  });
}

/** A feed post's poll, kept live while it is on screen. */
export function PostPoll({ postId, poll, nameOf }: { postId: string; poll: Poll; nameOf?: (uid: string) => string | null }) {
  const live = useLivePostPoll(postId, poll);
  return <PollCard host={{ host: 'post', postId }} poll={live ?? poll} nameOf={nameOf} />;
}
