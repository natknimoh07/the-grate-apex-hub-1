import { useEffect } from 'react';

import { ScrollViewStyleReset } from 'expo-router/html';

// Web metadata for every page. Expo Router renders this into the exported
// HTML shell, so the browser tab / window title shows the product name
// ("GrAte Apex Hub") instead of falling back to the development URL.
//
// `ScrollViewStyleReset` is kept so scrolling behaves like the app.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, interactive-widget=resizes-content"
        />
        <meta name="google-site-verification" content="YHt2O8ioXYB-QlB7eNscJYZUh50rlZy0x3iPxYkN6r8" />
        {/* No static <title> here on purpose: Expo Router's static export
            emits its own empty <title> first, and browsers use the FIRST one
            they find, which is what caused the tab to show "localhost:8081".
            The correct title is applied on the client by <TitleSync /> below,
            and the social/preview metadata lives in the head. */}
        <meta
          name="description"
          content="GrAte Apex Hub — the learning and social app for medical students: every course in your class, practice and Apex Challenges, leagues, and a community to study with."
        />

        {/* Open Graph / social preview */}
        <meta property="og:title" content="GrAte Apex Hub" />
        <meta
          property="og:description"
          content="The learning and social app for medical students."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="GrAte Apex Hub" />

        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/grateapex-192-v2.png" />
        <link rel="apple-touch-icon" href="/icons/grateapex-192-v2.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="GrAte Apex Hub" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Keep the theme colour in sync with the splash screen */}
        <meta name="theme-color" content="#1436B8" />

        {/* The display font (Manrope) is added after start-up by
            lib/web-fonts.ts, so it can never block the first paint. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Vercel Web Analytics (visitors and page views; switch it on in Vercel → Analytics).
            The script is served by Vercel itself, so nothing is installed. */}
        <script dangerouslySetInnerHTML={{ __html: 'window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };' }} />
        <script defer src="/_vercel/insights/script.js" />

        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        <script dangerouslySetInnerHTML={{ __html: bootWatch }} />
      </head>
      <body>
        {/* Expo Router injects its own empty <title> ahead of anything in
            this file when statically exporting, so the browser would fall
            back to showing the URL. Setting it here guarantees the tab reads
            "GrAte Apex Hub" in both development and the exported build. */}
        <TitleSync />
        {children}
      </body>
    </html>
  );
}

// Keeps document.title pinned to the product name on the client.
function TitleSync() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = 'GrAte Apex Hub';
    const onInstallPrompt = (event: Event) => {
      event.preventDefault();
      (window as Window & { grateapexInstallPrompt?: Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> } }).grateapexInstallPrompt = event as Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };
      window.dispatchEvent(new Event('grateapex-install-prompt'));
    };
    window.addEventListener('beforeinstallprompt', onInstallPrompt);

    // Safety net: if a browser still zoomed in on a field, snap back to 100%
    // once the keyboard closes (and undo the page scroll it left behind).
    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);
    let resetTimer: ReturnType<typeof setTimeout> | undefined;
    const onFocusOut = (event: FocusEvent) => {
      if (!isField(event.target)) return;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        if (isField(document.activeElement)) return;
        const vv = window.visualViewport;
        if (vv && vv.scale > 1.001) {
          const meta = document.querySelector('meta[name="viewport"]');
          const original = meta?.getAttribute('content');
          if (meta && original) {
            meta.setAttribute('content', `${original}, maximum-scale=1`);
            setTimeout(() => meta.setAttribute('content', original), 300);
          }
        }
        if (window.scrollX !== 0 || (window.scrollY !== 0 && document.documentElement.scrollHeight <= window.innerHeight + 1)) {
          window.scrollTo(0, 0);
        }
      }, 120);
    };
    document.addEventListener('focusout', onFocusOut);
    if (!('serviceWorker' in navigator)) {
      return () => {
        window.removeEventListener('beforeinstallprompt', onInstallPrompt);
        document.removeEventListener('focusout', onFocusOut);
        clearTimeout(resetTimer);
      };
    }

    const wasControlled = Boolean(navigator.serviceWorker.controller);
    let reloadingForUpdate = false;
    const onControllerChange = () => {
      if (!wasControlled || reloadingForUpdate) return;
      reloadingForUpdate = true;
      window.location.reload();
    };
    const checkForUpdate = () => {
      if (document.visibilityState !== 'visible') return;
      void navigator.serviceWorker.getRegistration()
        .then((registration) => registration?.update())
        .catch(() => undefined);
    };

    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
    document.addEventListener('visibilitychange', checkForUpdate);
    void navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
      .then((registration) => registration.update())
      .catch(() => undefined);

    return () => {
      window.removeEventListener('beforeinstallprompt', onInstallPrompt);
      document.removeEventListener('focusout', onFocusOut);
      clearTimeout(resetTimer);
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
      document.removeEventListener('visibilitychange', checkForUpdate);
    };
  }, []);

  return null;
}

// The blue start-up screen stays until the app's script has downloaded and started
// (about 3.6 MB, downloaded again after every update). On a slow connection that took a
// minute with nothing on screen, so learners thought the app was stuck (owner, 2026-11-04).
// Plain script, independent of the app: after 8 s it says what is happening; after 45 s,
// or when the download fails, it offers Try again and Repair (which clears the saved app,
// not the saved study material); a browser too old for the app is told to update.
// The app calls window.__grateapexBooted() once it runs (app/_layout.tsx).
const bootWatch = `
(function () {
  var started = false;
  var shown = '';
  window.__grateapexBooted = function () {
    started = true;
    var note = document.getElementById('boot-note');
    if (note) note.remove();
  };
  var TEXT = {
    slow: ['Loading GrAte Apex…', 'The first open after an update downloads the app. On mobile data this can take a minute.', false],
    stuck: ['Still loading?', 'Check your connection, then try again. If it keeps stopping here, repair the app (your study downloads are kept).', true],
    failed: ['The app could not be downloaded.', 'Check your connection, then try again.', true],
    old: ['This browser is too old for GrAte Apex.', 'Update your browser (in Edge or Chrome: Settings → About), then open the app again.', true]
  };
  function show(kind) {
    if (started || !document.body || shown === 'failed' || shown === 'old') return;
    shown = kind;
    var note = document.getElementById('boot-note');
    if (!note) {
      note = document.createElement('div');
      note.id = 'boot-note';
      note.setAttribute('role', 'status');
      note.style.cssText = 'position:fixed;left:16px;right:16px;bottom:48px;z-index:2147483000;margin:0 auto;max-width:420px;text-align:center;color:#fff;font:15px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;';
      document.body.appendChild(note);
    }
    var text = TEXT[kind];
    note.innerHTML = '<div style="font-weight:600;margin-bottom:4px"></div><div style="opacity:.9"></div>' +
      (text[2] ? '<div style="margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
        '<button data-act="reload" style="border:0;border-radius:10px;padding:10px 18px;background:#fff;color:#1436B8;font:600 15px system-ui,sans-serif;cursor:pointer">Try again</button>' +
        (kind === 'old' ? '' : '<button data-act="repair" style="border:1px solid #fff;border-radius:10px;padding:10px 18px;background:transparent;color:#fff;font:600 15px system-ui,sans-serif;cursor:pointer">Repair the app</button>') +
        '</div>' : '');
    note.children[0].textContent = text[0];
    note.children[1].textContent = text[1];
    note.onclick = function (event) {
      var act = event.target && event.target.getAttribute && event.target.getAttribute('data-act');
      if (act === 'reload') location.reload();
      if (act === 'repair') repair();
    };
  }
  // Removes the saved app (service worker and its app cache), keeping the offline study cache.
  function repair() {
    var jobs = [];
    try {
      if (navigator.serviceWorker) jobs.push(navigator.serviceWorker.getRegistrations().then(function (list) { return Promise.all(list.map(function (r) { return r.unregister(); })); }));
      if (window.caches) jobs.push(caches.keys().then(function (names) { return Promise.all(names.filter(function (n) { return n.indexOf('grateapex-pwa-') === 0; }).map(function (n) { return caches.delete(n); })); }));
    } catch (e) {}
    Promise.all(jobs).catch(function () {}).then(function () { location.reload(); });
  }
  setTimeout(function () { show('slow'); }, 8000);
  setTimeout(function () { show('stuck'); }, 45000);
  window.addEventListener('error', function (event) {
    if (started) return;
    var target = event.target;
    if (target && target.tagName === 'SCRIPT' && /\\/_expo\\//.test(target.src || '')) show('failed');
    else if (event.error && event.error.name === 'SyntaxError') show('old');
  }, true);
})();
`;

// Shown for a split second before the app paints (and behind the intro).
// Matches the Apex field so there is no flash of a different colour.
const responsiveBackground = `
body {
  background-color: #1436B8;
}
html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
/* iOS Safari zooms the whole page when a field under 16px is focused, and
   leaves it zoomed after the keyboard closes. Touch screens get 16px fields;
   touch-action stops double-tap zoom without blocking pinch-zoom. */
@media (pointer: coarse) {
  input, textarea, select {
    font-size: 16px !important;
  }
  html, body, button, a, [role="button"] {
    touch-action: manipulation;
  }
}
`;
