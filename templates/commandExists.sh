command_exists() {
  command -v "$1" >/dev/null 2>&1;
}

if command_exists winpty; then
    # https://github.com/rprichard/winpty
    winpty node "$basedir/test.js" "$@"
    exit 0
else
    >&2 echo 'there is no winpty'
    exit 1
fi