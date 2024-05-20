const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
    },
    experimentalSessionAndOrigin: true,
    baseUrl: //'https://staging.ernestatech.com',
    projectId: //'1p9bba',
    retries: 3,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    failOnStatusCode: false
  },
});
