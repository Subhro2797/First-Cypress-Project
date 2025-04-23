export class LoginPage{
    urlvisit(){
        cy.fixture('testData').then((data) => {
            // Using the baseURL from testData.json
            cy.visit(data.baseURL + '/#/auth'); 
        });
        
    }
    getInputField(){
      return cy.get('input[type="text"]');
    }
    
    typeCode(code){
        //cy.get('input[type="text"]')
        this.getInputField()
          .click()
          .clear()
          .type(code);
    }
    clickSubmit(){
        cy.get('button[aria-label="Submit"]').click();
    }
    // captureErrorMessage(code){
    //     cy.get('[class^="p-toast"]')
    //       .should('exist')
    //       .within(() => {
    //         if (code.length < 6) {
    //             cy.get('.p-toast-summary')
    //             .should('have.text', 'Double-check your authentication code');
    //             cy.get('.p-toast-detail')
    //             .should('have.text', 'You should have received your authentication code from your provided and it consists of 6 digits');
    //           //cy.contains('Double-check your authentication code').should('be.visible');
    //           //cy.contains('You should have received your authentication code from your provided and it consists of 6 digits').should('be.visible');
    //         } else if(code.length == 6) {
    //             cy.get('.p-toast-summary')
    //             .should('have.text', 'Authentication failed');
    //             cy.get('.p-toast-detail')
    //             .should('have.text', 'Your code does not match an existing user. Please try again');
                
    //           //cy.contains('Authentication failed').should('be.visible');
    //           //cy.contains('Your code does not match an existing user.Please try again').should('be.visible');
    //         }
    //       });
    // }

    captureErrorMessage(code){
      cy.get('[class^="p-toast"]').first().within(() => {
          if (code.length < 6) {
              cy.get('.p-toast-summary')
                .should('have.text', 'Double-check your authentication code');
              cy.get('.p-toast-detail')
                .should('not.be.empty')
                .should('contain.text', 'You should have received your authentication code from your provided and it consists of 6 digits');
          } else if(code.length == 6) {
              cy.get('.p-toast-summary')
                .should('have.text', 'Authentication failed');
              cy.get('.p-toast-detail')
                .should('have.text', 'Your code does not match an existing user. Please try again');
          }
      });
  }
  
    
}