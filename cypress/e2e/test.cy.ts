describe('navigate and check a11y', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.injectAxe()
    cy.wait(500)
  })

  it('run a11y test on home page', () => {
    cy.url().should('include', '/resource');
    cy.checkA11y();
  })

  it('click issue page button and run a11y test', () => {
    cy.get('button:contains("Page with Issues")').click();
    cy.wait(500);

    cy.url().should('include', '/with-issues');
    cy.checkA11y();
  })

  it('click non issue page button and and run a11y test', () => {
    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Enter')
    cy.wait(500);

    cy.url().should('include', '/without-issues');
    cy.checkA11y();
  })

})
