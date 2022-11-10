const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1550,
  viewportHeight: 900,
  e2e: {
    baseUrl: "https://telnyx.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})