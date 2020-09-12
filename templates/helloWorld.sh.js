// additional info for templates like copy extra libraries.

const { platform } = require("os");

let config;
// in this case library needs JSON
if (process.platform === "win32") {
  config = {
    files: [],
    commands: ["scoop install jq", "scoop update jq"],
    repos: [],
  };
} else {
  const {
    replaceCommandByDist,
  } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
  config = {
    files: [],
    commands: [replaceCommandByDist("apt-get install -y jq")],
    repos: [],
  };
}

module.exports = config;
