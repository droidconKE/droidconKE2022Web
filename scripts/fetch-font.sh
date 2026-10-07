#!/usr/bin/env bash
#
# Fetch the licensed Rauschen B web font from the private repo
# (droidconKE/private-fonts) into public/fonts/ (gitignored), so the brand
# font is never committed to this PUBLIC repo. Runs before dev/build.
#
# Degrades gracefully: with no access the build continues using the CSS
# fallback font, so external contributors are never blocked.
#
# Auth resolution order:
#   1. FONT_REPO_TOKEN env var      (build / CI environments)
#   2. FONT_REPO_TOKEN in .env      (local dev)
#   3. `gh auth token`              (a developer's existing GitHub login)
#   4. none -> skip, use fallback font

FONT_REPO="droidconKE/private-fonts"
FONT_SRC="fonts/Rauschen-BBook.woff2"
DEST="public/fonts/Rauschen-BBook.woff2"

# Already fetched? skip (set FONT_FORCE=1 to re-download).
if [ -f "$DEST" ] && [ -z "${FONT_FORCE:-}" ]; then
  echo "✓ Brand font already present ($DEST) — skipping fetch."
  exit 0
fi

# 1) env var  2) .env file  3) gh login
TOKEN="${FONT_REPO_TOKEN:-}"
if [ -z "$TOKEN" ] && [ -f .env ]; then
  TOKEN="$(grep -E '^[[:space:]]*FONT_REPO_TOKEN=' .env | tail -n1 | cut -d= -f2- | tr -d '\r' | xargs)"
fi
if [ -z "$TOKEN" ] && command -v gh >/dev/null 2>&1; then
  TOKEN="$(gh auth token 2>/dev/null || true)"
fi

if [ -z "$TOKEN" ]; then
  echo "⚠️  No font access (FONT_REPO_TOKEN / .env / gh login all unset)."
  echo "    Building with the CSS fallback font — set FONT_REPO_TOKEN to use the brand font."
  exit 0
fi

mkdir -p "$(dirname "$DEST")"
HTTP="$(curl -sSL -w '%{http_code}' \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/vnd.github.raw" \
  "https://api.github.com/repos/$FONT_REPO/contents/$FONT_SRC" \
  -o "$DEST" 2>/dev/null)"

if [ "$HTTP" = "200" ] && [ -s "$DEST" ]; then
  echo "✓ Fetched Rauschen B brand font → $DEST"
else
  echo "⚠️  Could not fetch brand font (HTTP ${HTTP:-?}). Using fallback font."
  rm -f "$DEST"
fi
exit 0
