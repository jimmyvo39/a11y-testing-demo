import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    baseUrl: 'http://localhost:4200',
  },
  env: {},
});
