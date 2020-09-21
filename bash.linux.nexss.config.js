let languageConfig = Object.assign({}, require("./bash.win32.nexss.config"));

let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  bash: {
    install: `${sudo}apt update 
${sudo}apt install bash`,
    command: "bash",
    args: "<file>",
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
const distName = dist();

// TODO: Later to cleanup this config file !!
switch (distName) {
  default:
    languageConfig.compilers.bash.install = replaceCommandByDist(
      languageConfig.compilers.bash.install
    );
    break;
}

module.exports = languageConfig;
