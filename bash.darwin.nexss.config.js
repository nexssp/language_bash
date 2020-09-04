let languageConfig = Object.assign({}, require("./bash.win32.nexss.config"));
languageConfig.compilers = {
  bash: {
    install: `brew install bash`,
    command: "bash",
    args: "<file>",
    help: ``,
  },
};
languageConfig.languagePackageManagers = {
  apt: {
    installation: `installed`,
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "apt list --installed",
    search: "apt-cache search",
    install: "apt install",
    uninstall: "apt uninstall",
    help: "apt --help",
    version: "apt --version",
    init: () => {},
    else: "apt",
  },
};

module.exports = languageConfig;
