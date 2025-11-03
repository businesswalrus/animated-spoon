#!/bin/bash

# Script to validate all state pages are loading correctly

BASE_URL="http://localhost:5001/chapters"
STATES=(
  "alabama" "alaska" "arizona" "arkansas" "california"
  "colorado" "connecticut" "delaware" "florida" "georgia"
  "hawaii" "idaho" "illinois" "indiana" "iowa"
  "kansas" "kentucky" "louisiana" "maine" "maryland"
  "massachusetts" "michigan" "minnesota" "mississippi" "missouri"
  "montana" "nebraska" "nevada" "new-hampshire" "new-jersey"
  "new-mexico" "new-york" "north-carolina" "north-dakota" "ohio"
  "oklahoma" "oregon" "pennsylvania" "rhode-island" "south-carolina"
  "south-dakota" "tennessee" "texas" "utah" "vermont"
  "virginia" "washington" "west-virginia" "wisconsin" "wyoming"
)

echo "Validating all 50 state pages..."
echo "================================"

SUCCESS_COUNT=0
FAIL_COUNT=0
FAILED_STATES=()

for state in "${STATES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/${state}")
  if [ "$STATUS" = "200" ]; then
    echo "✅ ${state}: SUCCESS"
    ((SUCCESS_COUNT++))
  else
    echo "❌ ${state}: FAILED (Status: ${STATUS})"
    ((FAIL_COUNT++))
    FAILED_STATES+=("${state}")
  fi
done

echo "================================"
echo "Results:"
echo "  ✅ Successful: ${SUCCESS_COUNT}/50"
echo "  ❌ Failed: ${FAIL_COUNT}/50"

if [ ${FAIL_COUNT} -gt 0 ]; then
  echo ""
  echo "Failed states:"
  for state in "${FAILED_STATES[@]}"; do
    echo "  - ${state}"
  done
  exit 1
else
  echo ""
  echo "🎉 All 50 state pages are rendering successfully!"
fi