const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 960,
  chromeWebSecurity : false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://portalcovid-ee0f6.web.app',
    testIsolation : false
  },
  
});
