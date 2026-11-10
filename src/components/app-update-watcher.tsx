import { usePathname } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Interactive } from '@/components/ui/interactive';
import { Sheet } from '@/components/ui/sheet';
import { Text } from '@/components/ui/text';
import { type ThemeColors } from '@/constants/theme';
import { applyAppUpdate, BUILT_WITH_NOTES, requestUpdateCheck, setAppUpdate, UPDATE_CHECK_EVENT, useAppUpdate } from '@/data/app-update';
import { FALLBACK_NOTE, noteDay, notesSince, parseUpdateNotes, type UpdateNote } from '@/data/app-update-rules';
import { useTheme, useThemedStyles } from '@/hooks/use-theme';

// New versions, installed when the learner chooses (owner, 2026-11-10: the app was updated many
// times a day, and reloading by itself each time was annoying). This compares the running version
// (its entry script) with the live site's soon after opening, whenever the app comes back to the
// screen, and every few minutes. When a new version is out it shows "Update ready" with what is new
// (public/whats-new.json) and two buttons, Update now and Later; on a lesson, quiz or battle page it
// shows only a small chip, so nothing gets in the way. Nothing reloads the app but "Update now".
// "Later" lasts for this visit: the learner can still update from Settings → Help → App updates, and
// the next time the app is opened afresh it starts on the newest version anyway.

const ENTRY = /\/_expo\/static\/js\/web\/entry-[a-f0-9]+\.js/;
const EVERY_MS = 5 * 60_000;
/** Pages where a popup would interrupt: only the chip there. */
const BUSY = /^\/(learn\/(quiz|lesson|hb-lesson|hb-practice|review|apex|mock-exam|spotter|label|simulation)|social\/battle|games\/|onboarding|login)/;
const LATER_KEY = 'grateapex_update_later';

function runningEntry() {
  if (typeof document === 'undefined') return null;
  for (const script of Array.from(document.scripts)) {
    const match = ENTRY.exec(script.src);
    if (match) return match[0];
  }
  return null;
}

async function liveEntry() {
  const response = await fetch(`/?version-check=${Date.now()}`, { cache: 'no-store' });
  if (!response.ok) return null;
  return ENTRY.exec(await response.text())?.[0] ?? null;
}

async function liveNotes(): Promise<UpdateNote[]> {
  const response = await fetch(`/whats-new.json?t=${Date.now()}`, { cache: 'no-store' });
  return response.ok ? parseUpdateNotes(await response.json()) : [];
}

// "Later" is remembered for this visit only (the tab), so the next visit can ask again.
const readLater = () => {
  try { return typeof sessionStorage === 'undefined' ? false : sessionStorage.getItem(LATER_KEY) === '1'; } catch { return false; }
};
const saveLater = () => {
  try { sessionStorage.setItem(LATER_KEY, '1'); } catch { /* private window: this visit only */ }
};

export function AppUpdateWatcher() {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const pathname = usePathname();
  const update = useAppUpdate();
  const [open, setOpen] = useState(false);
  const [later, setLater] = useState(readLater);
  const busyRef = useRef(false);
  const laterRef = useRef(later);
  const shownFor = useRef<string | null>(null);
  useEffect(() => {
    busyRef.current = BUSY.test(pathname);
  }, [pathname]);
  useEffect(() => {
    laterRef.current = later;
  }, [later]);

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;
    const current = runningEntry();
    if (!current) return; // development server: nothing to compare
    let stopped = false;
    let running = false;
    const check = async (asked = false) => {
      if (stopped || running || (!asked && document.visibilityState !== 'visible')) return;
      running = true;
      if (asked) setAppUpdate({ checking: true });
      try {
        const live = await liveEntry();
        if (!live || live === current) return;
        const notes = notesSince(await liveNotes().catch(() => []), BUILT_WITH_NOTES);
        setAppUpdate({ ready: true, notes, version: live });
        // The popup once per version, never on a busy page, and not again after "Later" this visit.
        if (!busyRef.current && !laterRef.current && shownFor.current !== live) {
          shownFor.current = live;
          setOpen(true);
        }
      } catch {
        // offline: try again later
      } finally {
        running = false;
        if (asked) setAppUpdate({ checking: false });
      }
    };
    const onVisible = () => { void check(); };
    const onAsked = () => { void check(true); };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    window.addEventListener('pageshow', onVisible);
    window.addEventListener('online', onVisible);
    window.addEventListener(UPDATE_CHECK_EVENT, onAsked);
    const timer = setInterval(() => void check(), EVERY_MS);
    // Soon after opening (an installed app may resume an old copy), and whenever it comes back.
    const first = setTimeout(() => void check(), 2_500);
    return () => {
      stopped = true;
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
      window.removeEventListener('pageshow', onVisible);
      window.removeEventListener('online', onVisible);
      window.removeEventListener(UPDATE_CHECK_EVENT, onAsked);
      clearInterval(timer);
      clearTimeout(first);
    };
  }, []);

  const chooseLater = () => {
    saveLater();
    setLater(true);
    setOpen(false);
  };

  return (
    <>
      {update.ready && !open && !later ? (
        <Interactive onPress={() => setOpen(true)} accessibilityRole="button" accessibilityLabel="Update ready. See what is new" style={styles.chip}>
          <Icon name="download" size={15} color={colors.primaryText} />
          <Text style={styles.chipText}>Update ready</Text>
          <Text style={styles.chipLink}>What’s new</Text>
        </Interactive>
      ) : null}
      <UpdateSheet visible={open} onLater={chooseLater} />
    </>
  );
}

/** The "Update ready" popup: what is new, then Update now or Later. */
function UpdateSheet({ visible, onLater }: { visible: boolean; onLater: () => void }) {
  const styles = useThemedStyles(createStyles);
  const update = useAppUpdate();
  return (
    <Sheet
      visible={visible}
      onClose={onLater}
      title="Update ready"
      subtitle="A new version of GrAte Apex Hub is ready. Here is what is new."
      footer={
        <View style={styles.footer}>
          <Button label="Later" variant="ghost" onPress={onLater} />
          <Button label="Update now" onPress={applyAppUpdate} />
        </View>
      }
    >
      <WhatsNewList notes={update.notes} />
      <Text style={styles.small}>Updating restarts the app, which takes a few seconds. Finish any quiz first so you keep your place.</Text>
    </Sheet>
  );
}

function WhatsNewList({ notes }: { notes: readonly UpdateNote[] }) {
  const styles = useThemedStyles(createStyles);
  if (!notes.length) return <Text style={styles.point}>{FALLBACK_NOTE}</Text>;
  return (
    <View style={styles.notes}>
      {notes.map((note) => (
        <View key={note.id} style={styles.note}>
          <View style={styles.noteHead}>
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text style={styles.noteDate}>{noteDay(note.date)}</Text>
          </View>
          {note.points.map((point, i) => (
            <View key={i} style={styles.pointRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={[styles.point, styles.flex]}>{point}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

/** Settings → Help → App updates: whether a new version is ready, Update now, Check now, and what is new. */
export function AppUpdatesRow() {
  const styles = useThemedStyles(createStyles);
  const colors = useTheme();
  const update = useAppUpdate();
  const [history, setHistory] = useState(false);
  const [checked, setChecked] = useState(false);
  const wasChecking = useRef(false);
  useEffect(() => {
    if (wasChecking.current && !update.checking) setChecked(true);
    wasChecking.current = update.checking;
  }, [update.checking]);
  const web = Platform.OS === 'web';
  return (
    <View style={styles.row}>
      <Icon name={update.ready ? 'download' : 'check'} size={18} color={colors.primaryText} />
      <View style={styles.flex}>
        <Text style={styles.rowLabel}>{update.ready ? 'A new version is ready' : 'App updates'}</Text>
        <Text style={styles.rowText}>
          {update.ready
            ? `${update.notes.length ? `New: ${update.notes.map((note) => note.title).join(', ')}.` : FALLBACK_NOTE} Update when it suits you: the app restarts in a few seconds.`
            : checked
              ? 'You are on the latest version.'
              : 'The app never restarts by itself for an update: when a new version is out, you choose when to install it.'}
        </Text>
        <View style={styles.rowActions}>
          {update.ready ? <Button label="Update now" size="sm" onPress={applyAppUpdate} /> : web ? <Button label={update.checking ? 'Checking…' : 'Check now'} size="sm" variant="secondary" disabled={update.checking} onPress={requestUpdateCheck} /> : null}
          <Button label="What’s new" size="sm" variant="ghost" onPress={() => setHistory(true)} />
        </View>
      </View>
      <Sheet visible={history} onClose={() => setHistory(false)} title="What’s new" subtitle={update.ready ? 'In the new version' : 'Recent updates to GrAte Apex Hub'}>
        <WhatsNewList notes={update.ready ? update.notes : BUILT_WITH_NOTES.slice(0, 5)} />
      </Sheet>
    </View>
  );
}

function createStyles(colors: ThemeColors) {
  return StyleSheet.create({
    flex: { flex: 1, minWidth: 0 },
    chip: { position: 'absolute', top: 12, alignSelf: 'center', zIndex: 60, flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999, backgroundColor: colors.surfaceElevated, borderWidth: 1, borderColor: colors.border, boxShadow: `0px 8px 24px ${colors.shadowStrong}` },
    chipText: { fontSize: 13.5, fontWeight: '600', color: colors.text },
    chipLink: { fontSize: 13.5, fontWeight: '600', color: colors.primaryText },
    footer: { flexDirection: 'row', justifyContent: 'flex-end', gap: 10 },
    notes: { gap: 14, marginBottom: 12 },
    note: { gap: 4 },
    noteHead: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 },
    noteTitle: { flex: 1, fontSize: 15, fontWeight: '600', color: colors.text },
    noteDate: { fontSize: 12.5, color: colors.textTertiary },
    pointRow: { flexDirection: 'row', gap: 8 },
    bullet: { fontSize: 14, lineHeight: 21, color: colors.primaryText },
    point: { fontSize: 14, lineHeight: 21, color: colors.textSecondary },
    small: { fontSize: 12.5, lineHeight: 18, color: colors.textTertiary, marginTop: 4 },
    row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 12 },
    rowLabel: { fontSize: 15, fontWeight: '600', color: colors.text },
    rowText: { fontSize: 13.5, lineHeight: 19, color: colors.textSecondary, marginTop: 2 },
    rowActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 10 },
  });
}
