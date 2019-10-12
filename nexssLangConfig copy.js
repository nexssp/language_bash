module.exports = {
  description: "Bash",
  type: "script",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "bash",
  extension: ".sh",
  errors: {
    "Uncaught Error: Class '(.*?)'": {
      win32: "nexss install ahk <package>",
      darwin: "nexss install ahk <package>",
      linux: "nexss install ahk <package>"
    }
  },
  url: ""
};
