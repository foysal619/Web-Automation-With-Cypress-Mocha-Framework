const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
      config.specPattern = [
        "cypress/e2e/LoginTest.cy.js",
        "cypress/e2e/MakeAppointment.cy.js",
      ];
      return config;
    },
  },
});
