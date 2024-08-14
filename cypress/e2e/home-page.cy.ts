describe('check a11y on home page', () => {
  it('should run a11y test', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.wait(300)

    cy.url().should('include', '/resource');
    cy.checkA11y();
  })
})
