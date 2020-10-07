let languageConfig = Object.assign({}, require("./bash.win32.nexss.config"));

const distName = process.distro;
const version = process.distroVersion;
const sudo = process.sudo;

languageConfig.compilers = {
  bash: {
    install: `${sudo}apt update 
${sudo}apt install bash`,
    command: "bash",
    args: "<file>",
    help: ``,
  },
};

languageConfig.compilers.bash.install = process.replacePMByDistro(
  languageConfig.compilers.bash.install
);

languageConfig.languagePackageManagers = {
  apt: {
    installation: `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`,
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: process.replacePMByDistro("apt list --installed"),
    search: process.replacePMByDistro("apt search"),
    install: process.replacePMByDistro("apt install -y"),
    uninstall: process.replacePMByDistro("apt remove -y"),
    help: process.replacePMByDistro("apt help"),
    version: process.replacePMByDistro("apt install -y"),
    init: () => {
      // require("child_process").execSync("vcpkg integrate project");
      // console.log("initialized vcpkg project.");
    },
  },
};

module.exports = languageConfig;
