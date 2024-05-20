const { defineConfig } = require('cypress');
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    experimentalSessionAndOrigin: true,
    baseUrl: 'http://www.google.com',
    //projectId: 'your-id',
    retries: 3,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    failOnStatusCode: false
  },
});