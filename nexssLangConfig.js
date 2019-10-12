const { ProgrammingLanguage } = require("../../lib/programmingLanguage");
const pl = new ProgrammingLanguage(".sh");
pl.add("title", "bash");
pl.add("description", `bash`);
pl.add("packageManager", {
  win32: "scoop install",
  linux: "apt-get install",
  darwin: "brew install"
});

pl.add("url", "https://en.wikipedia.org/wiki/Bash_(Unix_shell)");
pl.addError("line .*: (.*?): command not found", {
  win32: "scoop install <package>",
  darwin: "apt-get install <package>",
  linux: "brew install <package>"
});

pl.addHelp("executeCommandLine", "bash");
pl.addHelp("InteractiveShell", "bash");

module.exports = pl.data;
