const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e//*.cy.js',
    supportFile: 'cypress/support/e2e.js', // <-- Isso carrega o commands.js
    baseUrl: 'http://localhost:3000' // ou a URL da sua aplicação
  },
})