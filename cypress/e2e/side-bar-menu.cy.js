describe('Página lateral', () => {
    beforeEach('', () => {
      cy.visit("/")
      cy.login('standard_user', 'secret_sauce')
      cy.get('[data-test="title"]').should('be.visible')
    })
  
    it('Fazer logout', () => {
      cy.get('[id="react-burger-menu-btn"]').click()
      cy.get('[data-test="logout-sidebar-link"]').click()
      cy.get('[data-test="login-button"]').click().should('be.visible')
    })
  })