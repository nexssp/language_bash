let languageConfig = Object.assign({}, require("./bash.win32.nexss.config"));
languageConfig.compilers = {
  bash: {
    install: `sudo apt update && sudo apt install bash`,
    command: "bash",
    args: "<file>",
    help: ``,
  },
};
languageConfig.languagePackageManagers = {
  scoop: {
    installation: `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`,
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "apt list --installed",
    search: "apt-cache search",
    install: "apt install",
    uninstall: "apt uninstall",
    help: "apt --help",
    version: "apt --version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "apt",
  },
};

module.exports = languageConfig;
