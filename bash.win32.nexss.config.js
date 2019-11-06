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
languageConfig.languagePackageManagers = {
  scoop: {
    installation: `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`,
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "scoop list",
    search: "scoop search",
    install: "scoop install",
    uninstall: "scoop uninstall",
    help: "scoop --help",
    version: "scoop --version",
    init: () => {
      require("child_process").execSync("vcpkg integrate project");
      console.log("initialized vcpkg project.");
    },
    // if command not found in specification
    // run directly on package manager
    else: "vcpkg"
  }
};

module.exports = languageConfig;
