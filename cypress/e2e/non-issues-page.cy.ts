describe('check a11y on check a11y on issues page issues page', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.injectAxe()
    cy.wait(300)
  })

  it('should keyboard navigate to `without-issues` page button and run a11y test', () => {

    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Enter')
    cy.wait(300);

    cy.url().should('include', '/without-issues');

    cy.get('mat-expansion-panel-header').click();
    cy.wait(300);

    cy.checkA11y();
  })
})
