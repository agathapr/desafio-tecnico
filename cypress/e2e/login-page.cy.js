describe('Página de login', () => {
    beforeEach('', () => {
      cy.visit("https://www.saucedemo.com");
      cy.contains('Swag Labs').should('be.visible')
    })

    it('Login com credenciais válidas', () => {
      cy.login('standard_user', 'secret_sauce')
      cy.get('[data-test="title"]').should('be.visible')
    })

    it('Login com senha inválida', () => {
      cy.login('standard_user', 'wrong_password')
      cy.get('[data-test="error"]').should('be.visible')
    })

    it('Tentativa de login sem inserir usuário', () => {
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('be.visible')
    })

    it('Tentativa de login sem inserir senha', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('be.visible')
    })
  })