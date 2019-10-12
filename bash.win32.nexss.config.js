let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Bash";
languageConfig.description =
  "Bash is the GNU Project's shell. Bash is the Bourne Again SHell. Bash is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh).";
languageConfig.url = "https://www.gnu.org/software/bash/";
languageConfig.extensions = [".sh"];
languageConfig.builders = {};
languageConfig.compilers = {
  bash: {
    install: "enable-wsl.ps1",
    command: "bash",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.bash.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
