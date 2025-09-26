#!/usr/bin/env bash
set -euo pipefail

# -------- Config / Inputs --------
PROJECT_ROOT="${PROJECT_ROOT:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"
: "${FIGMA_TOKEN:?FIGMA_TOKEN is required (generate in Figma Settings → Personal access tokens with files:read)}"
: "${FIGMA_FILE_KEY:?FIGMA_FILE_KEY is required (copy from the file URL after /file/ or /design/)}"

OUT_DIR="$PROJECT_ROOT/design"
OUT_FILE="$OUT_DIR/figma-live.json"
TMP_FILE="$OUT_FILE.tmp"
ME_TMP="$(mktemp)"

cleanup() {
  rm -f "$TMP_FILE" "$ME_TMP"
}

trap cleanup EXIT

# -------- Token hygiene --------
len1=$(echo -n "$FIGMA_TOKEN" | wc -c | tr -d ' ')
len2=$(printf "%s" "$FIGMA_TOKEN" | wc -c | tr -d ' ')
if [[ "$len1" -ne "$len2" ]]; then
  echo "Warning: FIGMA_TOKEN appears to have a trailing newline; trimming…" >&2
  FIGMA_TOKEN="$(printf "%s" "$FIGMA_TOKEN")"
  len1=$(echo -n "$FIGMA_TOKEN" | wc -c | tr -d ' ')
fi
if [[ "$len1" -eq 0 ]]; then
  echo "Error: FIGMA_TOKEN is empty." >&2
  exit 2
fi

# -------- Paths --------
mkdir -p "$OUT_DIR"

# -------- Sanity: whoami on Figma --------
set +e
me_http_code=$(curl -sS -w '%{http_code}' -o "$ME_TMP" \
  -H "X-Figma-Token: $FIGMA_TOKEN" \
  https://api.figma.com/v1/me)
curl_status=$?
set -e

if [[ $curl_status -ne 0 || "$me_http_code" != "200" ]]; then
  echo "Error: Token invalid or expired. Regenerate with files:read scope." >&2
  exit 3
fi

acc_email="unknown"
if command -v jq >/dev/null 2>&1; then
  acc_email=$(jq -r '.email // empty' "$ME_TMP")
elif command -v python3 >/dev/null 2>&1; then
  acc_email=$(python3 - "$ME_TMP" <<'PY'
import json
import sys

path = sys.argv[1]
try:
    with open(path, 'r', encoding='utf-8') as handle:
        data = json.load(handle)
    print(data.get('email', ''))
except Exception:
    pass
PY
)
fi

if [[ -z "${acc_email// }" ]]; then
  acc_email=$(grep -o '"email"[[:space:]]*:[[:space:]]*"[^"]*"' "$ME_TMP" | head -n1 | sed 's/.*"email"[[:space:]]*:[[:space:]]*"//;s/"$//' || true)
fi

if [[ -z "${acc_email// }" ]]; then
  acc_email="unknown"
fi

acc_email=${acc_email//$'\r'/}
acc_email=${acc_email//$'\n'/}

echo "✓ Token valid. Using account: $acc_email"

# -------- File key check --------
if [[ ${#FIGMA_FILE_KEY} -lt 10 ]]; then
  echo "Error: FIGMA_FILE_KEY looks wrong ('$FIGMA_FILE_KEY'). Copy the 22-char key from the file URL." >&2
  exit 4
fi

# -------- Fetch with guarded retries --------
URL="https://api.figma.com/v1/files/${FIGMA_FILE_KEY}"
rm -f "$TMP_FILE"
set +e
http_code=$(curl -sS -w '%{http_code}' -o "$TMP_FILE" \
  -H "X-Figma-Token: $FIGMA_TOKEN" \
  --retry 2 --retry-delay 1 --retry-connrefused \
  "$URL")
curl_status=$?
set -e

if [[ $curl_status -ne 0 ]]; then
  echo "Error: Failed to contact Figma (curl status $curl_status)." >&2
  exit 5
fi

if [[ "$http_code" == "401" ]]; then
  echo "Error: Unauthorized. Token missing files:read scope or expired." >&2
  exit 6
elif [[ "$http_code" == "403" ]]; then
  echo "Error: Forbidden. Token valid but this account has no access to the file. Invite this email to the file." >&2
  exit 7
elif [[ "$http_code" != "200" ]]; then
  echo "Error: Unexpected error: HTTP $http_code" >&2
  exit 8
fi

# -------- Integrity checks --------
mv "$TMP_FILE" "$OUT_FILE"
filesize=$(wc -c < "$OUT_FILE" | tr -d ' ')
if [[ "$filesize" -lt 1000000 ]]; then
  echo "Warning: file is smaller than expected, may be an error payload." >&2
fi

if command -v jq >/dev/null 2>&1; then
  name=$(jq -r '.name // empty' "$OUT_FILE")
  lm=$(jq -r '.lastModified // empty' "$OUT_FILE")
  dtype=$(jq -r '.document.type // empty' "$OUT_FILE")
  if [[ "$dtype" != "DOCUMENT" ]]; then
    echo "Warning: JSON does not look like a standard Figma document (document.type=$dtype)." >&2
  fi
  echo "✓ Saved to $OUT_FILE"
  echo "✓ File name: ${name:-unknown}"
  echo "✓ Last modified: ${lm:-unknown}"
else
  echo "✓ Saved to $OUT_FILE"
fi
