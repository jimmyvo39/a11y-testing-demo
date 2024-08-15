describe('check a11y on home page', () => {
  it('should run a11y test', () => {
    cy.visit('/')   // Load the page in the Cypress browser
    cy.injectAxe()      // Attach the Axe engine to the DOM
    cy.wait(300)    // Perform accessibility checks on the DOM

    cy.url().should('include', '/resource');
    cy.checkA11y();
  })
})
