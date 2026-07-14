#!/usr/bin/env bash

set -euo pipefail

CRATES=("mathsys" "libutils" "active-reporting" "bytediff" "cachetypes" "constrangeiter" "ebnftobnf" "issuing" "locks" "stack-array" "systemio" "systemstd")

printf "%-20s %15s\n" "crate" "monthly downloads"
printf "%-20s %15s\n" "--------------------" "---------------"

total=0

for crate in "${CRATES[@]}"; do
    downloads=$(curl -fsSL \
        -H "User-Agent: download-counter-script" \
        "https://crates.io/api/v1/crates/${crate}" \
        | jq '.crate.recent_downloads')

    monthly=$(awk "BEGIN { printf \"%.0f\", ${downloads}/3 }")

    printf "%-20s %15s\n" "$crate" "$monthly"

    total=$((total + monthly))
done

printf "%-20s %15s\n" "--------------------" "---------------"
printf "%-20s %15s\n" "total" "$total"
