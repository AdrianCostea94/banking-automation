const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    retries: {
      runMode: 1,
      openMode: 2
    }
  },
});
