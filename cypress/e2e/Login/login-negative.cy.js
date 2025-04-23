/// <reference types="cypress" />
//import cypress from "cypress";
//import { LoginPage } from "../../pages/LoginPage";
import {LoginPage} from "../../support/pages/LoginPage"
const { it } = require("mocha");

describe("Unsuccessful Login", () => {
    let loginData;
    let login;
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        //loading the data before the webpage loads
        cy.fixture('testData').then((data) => {
            loginData = data;
            login = new LoginPage();
        });
    });
    it("test invalid login codes", () => {
        cy.wrap(loginData).should('have.property', 'code');
        Object.entries(loginData.code.inValidCode).forEach(([index, invalidCode]) => {
                login = new LoginPage();
                login.urlvisit();
                login.typeCode(invalidCode);
                login.clickSubmit();
                login.captureErrorMessage(invalidCode);
                cy.wait(2000);
                
        });
    })
    it("Login without filling the code", () => {
        //visiting the URL
        login.urlvisit();
        //cliking the submit button
        login.clickSubmit();
    })

    it("Logs in with valid credentials, including leading and trailing spaces in password", () => {
        //const login = new LoginPage();
        login.urlvisit();
        cy.get('input[type="text"]').should('be.visible').then(() => {
            cy.wrap(loginData).should('have.property', 'code');
            // Test with leading and trailing spaces in the password
            const passwordWithSpaces = "  " + loginData.code.validCode + "  ";  // Adding spaces before and after the code 
            login.typeCode(passwordWithSpaces);// Enter password with leading/trailing spaces
            login.clickSubmit();

        });
    });
    // it('should handle network failure while logging in', () => {
    //     // First, visit the page normally (without intercepting page load requests)
    //     login = new LoginPage();
    //     login.urlvisit();
      
    //     // It intercepts all network requests and simulate a network error for any subsequent requests
    //     cy.intercept('**', { forceNetworkError: true }).as('networkFailure');
        
    //     // Fill in the form (for example, filling out a username and password)
        
    //     cy.get('input[type="text"]').should('be.visible').then(() => {
    //         cy.wrap(loginData).should('have.property', 'code');    
    //         login.typeCode(loginData.code.validCode);
    //         login.clickSubmit();
    //         // Wait for the network request to be intercepted
    //         cy.wait('@networkFailure');
      
    //         // Assert that an error message related to no internet connection is shown
    //         cy.contains('No internet connection').should('be.visible');  // Adjust the message as per your app's behavior
    //     })
      
        
      
    //     // Optionally, assert that the submit button is either disabled or the form is not submitted
    //     //cy.get('button[type="submit"]').should('be.disabled');
    //   });
      

    afterEach(() => {
        login = new LoginPage();
        login.getInputField().clear();
        cy.clearCookies();
        cy.clearLocalStorage();
        //cy.log('One  finished');
      });
    

})