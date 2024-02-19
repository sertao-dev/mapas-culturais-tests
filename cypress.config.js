const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://redesign.testes.map.as',
    setupNodeEvents(on, config) {

    },
  },
});
