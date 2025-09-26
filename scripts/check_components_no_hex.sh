#!/usr/bin/env bash
set -euo pipefail

TARGET_DIR="${CHECK_PATH:-src/components/Navbar}"

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "✓ No navbar directory to scan (skipped $TARGET_DIR)"
  exit 0
fi

if rg -n --no-heading -P "(?<![0-9a-zA-Z])#[0-9A-Fa-f]{3,6}(?![0-9A-Fa-f])" "$TARGET_DIR" 2>/dev/null; then
  echo "Error: Hardcoded hex color detected in $TARGET_DIR. Use design tokens instead." >&2
  exit 1
fi

echo "✓ No hardcoded hex colors in $TARGET_DIR"
