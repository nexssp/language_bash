// additional info for templates like copy extra libraries.

let config;
// in this case library needs JSON
if (process.platform === "win32") {
  config = {
    files: [],
    commands: ["scoop install jq", "scoop update jq"],
    repos: [],
  };
} else {
  config = {
    files: [],
    commands: [process.replacePMByDistro("apt-get install -y jq")],
    repos: [],
  };
}

module.exports = config;
