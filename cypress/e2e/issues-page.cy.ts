describe('check a11y on issues page', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.injectAxe()
    cy.wait(300)
  })

  it('should click `with-issues` page button and run a11y test', () => {
    // go to issues page
    cy.get('button:contains("Page with Issues")').click();
    // wait for page to render
    cy.wait(300);

    cy.url().should('include', '/with-issues');
    cy.checkA11y();
  })

  it('should click `with-issues` page button, open accordion and run a11y test', () => {
    cy.get('button:contains("Page with Issues")').click();
    cy.wait(300);

    cy.get('mat-expansion-panel-header').click();
    cy.wait(300);

    cy.checkA11y();
  })

})
