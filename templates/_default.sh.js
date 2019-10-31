// additional info for templates like copy extra libraries.
// in this case library needs JSON
const config = {
  files: [],
  commands: { all: ["scoop install jq", "scoop update jq"] },
  repos: []
};

module.exports = config;
