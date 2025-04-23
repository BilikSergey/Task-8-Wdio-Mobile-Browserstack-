exports.config = {
  user: process.env.BROWSERSTACK_USER, 
  key: process.env.BROWSERSTACK_KEY,
  
  updateJob: false,
  specs: ["../test/specs/**.e2e.js"],
  exclude: [],

  capabilities: [
    {
      project: "First Webdriverio Android Project",
      build: "Webdriverio Android",
      name: "first_test",
      device: "Samsung Galaxy S22",
      os_version: "12.0",
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
