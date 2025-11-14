#!/usr/bin/env bash
# Simple DNS lookup helper for Service Desk labs.
# Usage: ./check_dns.sh outlook.office365.com

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <hostname>"
  exit 1
fi

TARGET="$1"

echo "=== DNS Lookup ==="
echo "Target: $TARGET"
echo ""

if command -v dig >/dev/null 2>&1; then
  echo "Using 'dig'..."
  dig +short "$TARGET"
elif command -v nslookup >/dev/null 2>&1; then
  echo "Using 'nslookup'..."
  nslookup "$TARGET"
else
  echo "Neither 'dig' nor 'nslookup' is available on this system."
  exit 2
fi

echo ""
echo "DNS check complete."

