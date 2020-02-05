if grep -q Microsoft /proc/version; then
  printf "NEXSS/ok:Linux on Windows\n\r" >&2
else
  printf "NEXSS/ok:Native Linux\n" >&2
fi