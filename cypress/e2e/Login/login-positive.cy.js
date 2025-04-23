/// <reference types="cypress" />
import {LoginPage} from "../../support/pages/LoginPage"
const { it } = require("mocha");

describe("Successful Login", () => {
    let loginData;
    let login;
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.fixture('testData').then((data) => {
            loginData = data;
            login = new LoginPage();
        });
    });
    it("the Prime Health Focus logo is visible", () => {
        login.urlvisit();
        cy.get('img[alt="logo"]').should('be.visible');
    })
    it("Logs in with valid credentials", () => {
        login.urlvisit();
        cy.get('input[type="text"]').should('be.visible').then(() => {
            cy.wrap(loginData).should('have.property', 'code');    
            login.typeCode(loginData.code.validCode);
            login.clickSubmit();
            //cy.pause();
            //cy.get("body").debug();
            login.captureErrorMessage(loginData.code.validCode);
        })
    });

    afterEach(() => {
        login.getInputField().clear();
        cy.clearCookies();
        cy.clearLocalStorage();
        //cy.log('One  finished');
      });

})