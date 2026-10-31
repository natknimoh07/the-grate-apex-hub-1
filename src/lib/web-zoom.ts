import { Dimensions } from 'react-native';

// Settings → Font size and zoom → App zoom (web). The page is zoomed with CSS `zoom`
// on <html>, but React Native Web reads the window size from the browser, which
// ignores CSS zoom: at 125% the app laid itself out for a window 25% wider than the
// room it had, so pages ran off the side and desktop layouts showed on narrow screens
// (owner, 2026-10-31: "the font zoom settings seem to be glitching"). Here every
// window size React Native reports is divided by the zoom, so layouts fit again.
let zoom = 1;
const corrected = new WeakSet<object>();
let listening = false;

function correct(window: { width: number; height: number } | undefined) {
  if (!window || corrected.has(window)) return;
  corrected.add(window);
  if (zoom === 1) return;
  window.width = Math.round(window.width / zoom);
  window.height = Math.round(window.height / zoom);
}

/** Zooms the web app to `percent` and makes React Native's window size match it. */
export function applyWebZoom(percent: number) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  const next = Number.isFinite(percent) && percent > 0 ? percent / 100 : 1;
  if (!listening) {
    listening = true;
    // Runs with every size React Native Web measures (each one is a new object).
    Dimensions.addEventListener('change', ({ window: size }) => correct(size));
  }
  if (next === zoom && document.documentElement.style.zoom === String(next)) return;
  zoom = next;
  document.documentElement.style.zoom = String(next);
  // Measure again now (React Native Web listens to the visual viewport's resize).
  const target: EventTarget = window.visualViewport ?? window;
  target.dispatchEvent(new Event('resize'));
}
