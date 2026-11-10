// Settings → Privacy → Blocked people (security audit, 2026-11-10). Blocks are kept in the
// database now (data/community.ts → blockCommunityUser), so they follow the learner to every
// device; this list is where one can be undone.
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { List, ListRow } from '@/components/ui/list';
import { Text } from '@/components/ui/text';
import { type ThemeColors } from '@/constants/theme';
import { blockedLearners, unblockCommunityUser } from '@/data/community';
import { useThemedStyles } from '@/hooks/use-theme';
import { db } from '@/lib/firebase';

type Blocked = { uid: string; name: string };

export function BlockedPeople() {
  const styles = useThemedStyles(createStyles);
  const [people, setPeople] = useState<Blocked[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void blockedLearners().then(async (ids) => {
      const list = await Promise.all([...ids].slice(0, 50).map(async (uid) => {
        const profile = await getDoc(doc(db, 'users', uid)).catch(() => null);
        const data = profile?.data();
        const name = typeof data?.username === 'string' ? `@${data.username}` : typeof data?.displayName === 'string' ? data.displayName : 'A learner';
        return { uid, name };
      }));
      if (!cancelled) setPeople(list);
    }).catch(() => { if (!cancelled) setPeople([]); });
    return () => {
      cancelled = true;
    };
  }, []);

  async function unblock(uid: string) {
    setBusy(uid);
    setError(null);
    try {
      await unblockCommunityUser(uid);
      setPeople((list) => (list ?? []).filter((person) => person.uid !== uid));
    } catch {
      setError('That did not work. Please try again.');
    } finally {
      setBusy(null);
    }
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>Blocked people</Text>
      <Text style={styles.description}>
        People you block can’t follow you, comment on or like your posts, see your stories or send you notifications, on any device.
      </Text>
      {people === null ? null : people.length === 0 ? (
        <Text style={styles.description}>You haven’t blocked anyone.</Text>
      ) : (
        <List accessibilityLabel="Blocked people">
          {people.map((person) => (
            <ListRow
              key={person.uid}
              title={person.name}
              trailing={<Button label="Unblock" size="sm" variant="secondary" loading={busy === person.uid} disabled={busy !== null} onPress={() => void unblock(person.uid)} accessibilityLabel={`Unblock ${person.name}`} />}
            />
          ))}
        </List>
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    wrap: { gap: 6, marginTop: 12 },
    label: { fontSize: 15, fontWeight: '600', color: colors.text },
    description: { fontSize: 13, lineHeight: 18, color: colors.textSecondary },
    error: { fontSize: 13, color: colors.error },
  });
}
