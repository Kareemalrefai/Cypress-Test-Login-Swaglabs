const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false,
    specPattern:['cypress/integration/example/standrd-user.js',
                  'cypress/integration/example/problem_user.js',
                'cypress/integration/example/locked_out_user.js']
  },
});
