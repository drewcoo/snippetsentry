const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8ukm9o',
  e2e: {
    baseUrl: 'https://beta.snippetsentry.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // I should put these in env vars later
    email: 'drewcoo@gmail.com',
    password: '5PB5Si@eNfgZLL',
  },
});
