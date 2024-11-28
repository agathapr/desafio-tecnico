const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ghxoyp",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});