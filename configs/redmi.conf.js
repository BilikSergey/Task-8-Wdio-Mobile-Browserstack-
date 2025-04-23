exports.config = {
  user: process.env.BROWSERSTACK_USERNAME, 
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: ["../test/specs/**.e2e.js"],
  exclude: [],

  capabilities: [
    {
      project: "First Webdriverio Android Project",
      build: "Webdriverio Android",
      name: "first_test",
      device: "Xiaomi Redmi Note 11",
      os_version: "11.0",
      app: "android_demo_app",
      "browserstack.debug": true,
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 50000,
  },
};
