# Bash - Nexss PROGRAMMER 2.0 Notes

## WSL (Windows Subsystem Linux)

You may need to enable WSL (Windows Subsystem Linux):

```ps1
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

## Json - jq

```sh
scoop install jq

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
