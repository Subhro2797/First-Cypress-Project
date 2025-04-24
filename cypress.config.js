const {allureCypress} = require("allure-cypress/reporter");
const {defineConfig} = require("cypress");




module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsdir: "allure-results",
      });
      return config;
    },
    screenshotOnRunFailure: true,
    video: true, 

  },
//   reporter: 'mochawesome',
//   reporterOptions: {
//     reportDir: 'cypress/reports/mochawesome',
//     overwrite: false,
//     html: true, // make sure this is set to true if you want an HTML report
//     json: true,
// }


});
