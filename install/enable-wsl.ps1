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


Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

