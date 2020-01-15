# Nexss PROGRAMMER 2.0.0 - Bash
# Default template for JSON Data
# This works also on Windows (WSL - Windows Subsystem Linux)

# !Important
# Remeber to change CRLF to LF (Windows to Unix)
# In VSCode you can mae it from bottom status bar
# Click on CRLF and change it to LF.

# For JSON in bash is good to use
# https://stedolan.github.io/jq/download/

# STDIN

NexssStdin=`cat`
# Modify Data
NexssStdout=$(echo "$NexssStdin"|jq ".HelloFromBash = \"$BASH_VERSION\"")

# STDOUT
echo $NexssStdout>&1