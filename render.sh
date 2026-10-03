#!/usr/bin/env bash
# 사용법: ./render.sh templates/cover.html previews/out.png "series=talk&no=1"  [width] [height]
set -e
cd "$(dirname "$0")"
TPL="$1"; OUT="$2"; Q="${3:-}"; W="${4:-1080}"; H="${5:-1350}"
URL="file://$PWD/$TPL"; [ -n "$Q" ] && URL="$URL?$Q"
CHROME="${CHROME:-$(command -v google-chrome || echo "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")}"
PROFILE=$(mktemp -d); "$CHROME" --headless=new --user-data-dir="$PROFILE" --disk-cache-size=1 --disable-gpu --no-sandbox --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=$W,$H --virtual-time-budget=5000 --screenshot="$OUT" "$URL" 2>/dev/null >/dev/null
rm -rf "$PROFILE"; echo "rendered $OUT"
