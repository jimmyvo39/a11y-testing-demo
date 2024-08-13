describe('The Home Page', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.injectAxe()
    cy.wait(500)
  })

  it('run a11y', () => {
    cy.checkA11y();
  })
})
