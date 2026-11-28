#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ZIP="$ROOT/source/Z-Anatomy.zip"
# Optional local archive override (e.g. the ZIP provided by the project owner).
if [[ -n "${ZANATOMY_ZIP:-}" ]]; then ZIP="$ZANATOMY_ZIP"; fi
URL="https://raw.githubusercontent.com/Z-Anatomy/Models-of-human-anatomy/master/Z-Anatomy.zip"
SHA256="e029688545627bd0214b269e1063143abb580aad72b2c2445d6d8a9a0d9da736"
mkdir -p "$ROOT/source"
if [[ ! -f "$ZIP" ]]; then
  echo "Downloading pinned Z-Anatomy source archive (~87 MB)..."
  curl -L --fail --retry 3 "$URL" -o "$ZIP"
fi
printf '%s  %s\n' "$SHA256" "$ZIP" | sha256sum -c -
mkdir -p "$ROOT/source/unpacked"
unzip -o "$ZIP" -d "$ROOT/source/unpacked" >/dev/null
BLEND="$(find "$ROOT/source/unpacked" -type f -name 'Startup.blend' -print -quit)"
if [[ -z "$BLEND" ]]; then
  echo "Startup.blend was not found in the archive" >&2
  exit 2
fi
printf '%s\n' "$BLEND" > "$ROOT/source/BLEND_PATH"
echo "Source verified and unpacked: $BLEND"
