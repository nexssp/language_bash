# Bash - Nexss PROGRAMMER 2.0 Notes

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## WSL (Windows Subsystem Linux)

You may need to enable WSL (Windows Subsystem Linux):

```ps1
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

## Check Windows Or Linux

```sh
if grep -q Microsoft /proc/version; then
  printf "NEXSS/ok:Linux on Windows\n\r" >&2
else
  printf "NEXSS/ok:Native Linux\n" >&2
fi
```

## Change to Windows Folder on Bash

```sh
cdw() { cd "$(wslpath "$1")"; }
myFolder="c:\\windows\\system32\\"
cwd $myFolder # Will translate change dir without errors "not found"
```

## Json - jq

```sh
nexss sh install jq

# pretty print json
curl 'https://api.github.com/repos/stedolan/jq/commits?per_page=5' | jq '.'

# extract first record
curl 'https://api.github.com/repos/stedolan/jq/commits?per_page=5' | jq '.[0]'

# selected fields curl and then
jq '.[0] | {message: .commit.message, name: .commit.committer.name}'

# rest of the commits
jq '.[] | {message: .commit.message, name: .commit.committer.name}'

# stream with collect [....]
jq '[.[] | {message: .commit.message, name: .commit.committer.name}]'

# select command

jq '.data[]  | select(.DOMAIN == "domain2") | .DOMAINID'

# more here:
https://stedolan.github.io/jq/tutorial/
```

## Examples

String Literals

```sh
echo $'\'single quote phrase\' "double quote phrase"'
```

```sh
# Escape Stings - Found here: https://stackoverflow.com/questions/2854655/command-to-escape-a-string-in-bash
printf "%q" "hello\world" | someprog

printf -v var "%q\n" "hello\world"
echo "$var"
# hello\\world

string="Hello\ world"
echo ${string//\\/\\\\} | someprog
```

```sh
# Adds 2 jsons together
echo {"key1":"var1","key2":"var2"} {"kkk":"vvv","key2":"22222"} | jq -s add

# 1,23
echo '["a","b","c"]' | jq '.[]'

echo '[1,2,3]' | jq "length

```
