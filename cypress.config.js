const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ab2fty',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
