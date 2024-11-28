const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ab2fty',
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
