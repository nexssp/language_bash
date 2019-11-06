# Bash - Nexss PROGRAMMER 2.0 Notes

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
