# 📌 Project Name
Cypress Automation Testing Project

# Project Description
>This project marks my journey into the world of test automation, where I began learning Cypress, a popular JavaScript-based testing framework. As part of my exploration into automated testing, I started working on my first Cypress project, applying the concepts I learned to create robust and efficient test cases.

---

## 🚀 Tech Stack

- [Cypress](https://www.cypress.io/)
- JavaScript
- Mocha (Test Runner)
- Git

---


## Run Cypress Test Runner
npx cypress open


## Run Cypress Test Runner in headless mode

npx cypress run

## Report Generation Information with Mocha
1. How to install Mocha Report Generator
--> npm install mochaawesome --save-dev

2. How to show the version of Mochaawesome
--> npm show mochawesome version

3. Run Cypress Test in headful mode
>npx cypress run --e2e --headed --reporter mochawesome

## Report Generation with Allure
1. Remove or disable the Mocha Reporter
> In your cypress.config.js or cypress.config.mjs file, remove or comment out the reporter and reporterOptions fields that refer to Mochawesome
2. Use Allure Plugin Properly
> Make sure your config file include the Alluge plugin like this ->
  // cypress.config.mjs
import { defineConfig } from "cypress";
import { allureWriter } from "allure-cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});

OR, 

// cypress.config.js
const { defineConfig } = require("cypress");
const { allureWriter } = require("allure-cypress/reporter")

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});

3. Install Allure CLI 
> npm install -g allure-commandline --save-dev

4. Generate the Allure Report
> Once the test runs and the Allure results are generated in allure-results, use the following command
allure generate allure-results --clean -o allure-report
allure open allure-report

This will generate the HTML report and open it in your browser.



## 📚 Resources

- [Cypress Documentation](https://www.cypress.io/docs/)
- [Mochawesome Report Generation](https://www.npmjs.com/package/mochawesome)

## ✍️ Author

- **Subhro Saha**  
  - GitHub: [@Subhro2797](https://github.com/Subhro2797)  
  - LinkedIn: [Subhro Saha](https://www.linkedin.com/in/subhrosaha/)  
  - Email: subhro271197@gmail.com

Feel free to reach out for collaboration, questions, or suggestions!
