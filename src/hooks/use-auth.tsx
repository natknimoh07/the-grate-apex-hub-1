import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

import { auth, db } from '@/lib/firebase';
import { samePresenceAside } from '@/lib/presence';
import { setAnalyticsUser } from '@/lib/analytics';
import { needsUsername } from '@/lib/login-identifier';
import { knownMyUsername, noteMyUsername, onMyUsernameFound, PROFILE_COPY_KEY } from '@/lib/my-username';

export interface AuthUser {
  id: string; // for compatibility with code referencing user.id
  uid: string; // Firebase uid
  email: string | null;
  displayName: string | null;
  created_at?: string;
  user_metadata?: Record<string, any>;
  profile?: Record<string, any>;
  /** True once users/{uid} was read (it may not exist yet); false when it could not be read. */
  profileLoaded: boolean;
}

export interface AuthSession {
  user: AuthUser;
}

export interface AuthState {
  session: AuthSession | null;
  user: AuthUser | null;
  loading: boolean;
}

// A copy of the learner's profile on this device (owner, 2026-10-26): when the database can't be
// read — no connection, or the free plan's daily reads used up — the app carries on with the
// last profile it saw instead of an empty one (an empty one has no class, so Study showed
// "Coming soon" and other features hid). Only plain values are kept (no database timestamps).
const PROFILE_KEY = PROFILE_COPY_KEY;

function plainCopy(value: unknown): unknown {
  if (value === null || ['string', 'number', 'boolean'].includes(typeof value)) return value;
  if (Array.isArray(value)) return value.map(plainCopy).filter((item) => item !== undefined);
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      const copy = plainCopy(item);
      if (copy !== undefined) out[key] = copy;
    }
    return out;
  }
  return undefined; // timestamps and other special values
}

function saveProfileCopy(uid: string, given: Record<string, any>) {
  // Never let a read without the username wipe it from the copy (see authUserOf).
  const seen = knownMyUsername(uid);
  const profile = needsUsername(given.username) && seen ? { ...given, username: seen } : given;
  try {
    void AsyncStorage.setItem(PROFILE_KEY + uid, JSON.stringify(plainCopy(profile))).catch(() => {});
  } catch {
    // too large or not storable: skip
  }
}

async function readProfileCopy(uid: string): Promise<Record<string, any> | null> {
  try {
    const saved = JSON.parse((await AsyncStorage.getItem(PROFILE_KEY + uid)) ?? 'null');
    return saved && typeof saved === 'object' ? (saved as Record<string, any>) : null;
  } catch {
    return null;
  }
}

// When the profile can't be read and this device has no copy of it yet, Study would have no class
// and show "Coming soon" (2026-10-26, the free plan's reads used up). Until the profile arrives,
// the app's one class with lessons is assumed — in memory only, never saved to the account.
const ASSUMED_CLASS = { grateapex_academic_selection: { classId: 'HB2', semester: 1 } };
const hasClass = (profile: Record<string, any>) => Boolean(profile.grateapex_academic_selection || profile.classLocked === true);

function authUserOf(firebaseUser: FirebaseUser, given: Record<string, any>, profileLoaded: boolean): AuthUser {
  // Posting, comments and groups use this name without reading the profile again (lib/my-username.ts).
  noteMyUsername(firebaseUser.uid, given.username);
  // A read holding only the start-up fields once sent signed-in learners to "Choose your
  // username" (owner, 2026-11-05). A username is never removed (only changed, which arrives
  // as the new name), so one already seen for this account fills the gap — in memory only.
  const seen = knownMyUsername(firebaseUser.uid);
  const profile = needsUsername(given.username) && seen ? { ...given, username: seen } : given;
  return {
    id: firebaseUser.uid,
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: profile.displayName || profile.username || firebaseUser.displayName || null,
    created_at: firebaseUser.metadata.creationTime,
    user_metadata: {
      ...(!profileLoaded && !hasClass(profile) ? ASSUMED_CLASS : {}),
      ...profile,
      onboarding_completed: profile.onboardingDone === true,
      full_name: profile.displayName || profile.username || firebaseUser.displayName || '',
    },
    profile,
    profileLoaded,
  };
}

const AuthContext = createContext<AuthState>({
  session: null,
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubSnapshot: (() => void) | null = null;
    let retry: ReturnType<typeof setTimeout> | null = null;
    let lastProfile: Record<string, any> | null = null;
    let lastLoaded = false;

    const stopWatching = () => {
      if (unsubSnapshot) {
        unsubSnapshot();
        unsubSnapshot = null;
      }
      if (retry) {
        clearTimeout(retry);
        retry = null;
      }
    };

    const watchProfile = (firebaseUser: FirebaseUser, attempt: number) => {
      // Read live Firestore profile
      const userRef = doc(db, 'users', firebaseUser.uid);
      // Writes made as the app starts (last seen, online…) are merged into the
      // profile and shown at once as a preview holding only those fields, sometimes
      // even marked as from the server. The profile only counts as loaded once a
      // complete copy has arrived (from the server, nothing unconfirmed in it), or
      // the route guard would think the learner has no interface, username or class
      // yet and send them to set it up again.
      let fromServer = false;
      // Until the real profile arrives, what the database gives (often only those start-up
      // fields) is filled in from the device's copy — when the database can't be reached
      // (no connection, or the daily free reads used up) that copy is all there is.
      let copy: Record<string, any> | null = null;
      void readProfileCopy(firebaseUser.uid).then((saved) => {
        copy = saved;
        if (!saved || fromServer || auth.currentUser?.uid !== firebaseUser.uid) return;
        const profile = { ...saved, ...(lastProfile ?? {}) };
        lastProfile = profile;
        setSession({ user: authUserOf(firebaseUser, profile, false) });
        setLoading(false);
      });
      unsubSnapshot = onSnapshot(
        userRef,
        // Also told when a save made here is confirmed (metadata only, no read): the profile
        // often arrived while the start-up "online" save was still waiting, and without this the
        // confirmation never came, so the profile never counted as loaded — no coin balance, the
        // chosen interface not applied (2026-10-31).
        { includeMetadataChanges: true },
        (snap) => {
          if (!snap.metadata.fromCache && !snap.metadata.hasPendingWrites) fromServer = true;
          const profile = fromServer ? snap.data() || {} : { ...(copy ?? {}), ...(snap.data() || {}) };
          attempt = 0;
          // Presence alone changed (written every few minutes while the app is open):
          // keep the same learner, so the whole app doesn't redraw and reload.
          // (Never skip the copy that first makes the profile count as loaded.)
          if (lastProfile && lastLoaded === fromServer && samePresenceAside(lastProfile, profile)) return;
          lastProfile = profile;
          lastLoaded = fromServer;
          if (fromServer && snap.exists()) saveProfileCopy(firebaseUser.uid, profile);
          setSession({ user: authUserOf(firebaseUser, profile, fromServer) });
          setLoading(false);
        },
        () => {
          // The read failed (e.g. a dropped connection while signing in). Until
          // the profile has been read once, carry on with the basic sign-in;
          // either way, listen again shortly (a failed listener never recovers).
          unsubSnapshot = null;
          if (!lastProfile) {
            // The device's copy of the profile, if there is one (still "not loaded", so nothing is
            // set up again from it); otherwise the basic sign-in.
            void readProfileCopy(firebaseUser.uid).then((saved) => {
              if (lastProfile || auth.currentUser?.uid !== firebaseUser.uid) return;
              setSession({ user: authUserOf(firebaseUser, saved ?? {}, false) });
              setLoading(false);
            });
          }
          const wait = Math.min(60_000, 2_000 * 2 ** attempt);
          retry = setTimeout(() => {
            retry = null;
            if (auth.currentUser?.uid === firebaseUser.uid) watchProfile(firebaseUser, attempt + 1);
          }, wait);
        }
      );
    };

    const unsubAuth = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      setAnalyticsUser(firebaseUser?.uid ?? null);
      stopWatching();
      lastProfile = null;
      lastLoaded = false;

      if (!firebaseUser) {
        setSession(null);
        setLoading(false);
        return;
      }

      watchProfile(firebaseUser, 0);
    });

    // A check before "Choose your username" (app/_layout.tsx) found the name this
    // profile was missing: show it, so the learner is not asked for one.
    const unsubFound = onMyUsernameFound((uid) => {
      const firebaseUser = auth.currentUser;
      if (!firebaseUser || firebaseUser.uid !== uid || !lastProfile) return;
      setSession({ user: authUserOf(firebaseUser, lastProfile, lastLoaded) });
    });

    return () => {
      stopWatching();
      unsubAuth();
      unsubFound();
    };
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      session,
      user: session?.user ?? null,
      loading,
    }),
    [session, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  return useContext(AuthContext);
}
