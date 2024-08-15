describe('check angular material example error state', () => {
  beforeEach(()=>{
    cy.visit('https://v16.material.angular.io/components/form-field/examples')
    cy.injectAxe()
    cy.wait(300)
    // close cookie prompt
    cy.get(`button:contains("Ok, Got it")`).click()
  })

  it(' should type valid email into example form and check a11y', () => {

    cy.get('#mat-input-2')
      .focus()
      .type('pat@example.com')
      .blur();

    cy.wait(300);
    cy.checkA11y();
  })

  it('should type invalid email into example form and check a11y', () => {

    cy.get('#mat-input-2')
      .focus()
      .type('pat@@example')
      .blur();

    cy.wait(300);
    cy.checkA11y();
  })
});

