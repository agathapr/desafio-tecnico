describe('Página de login', () => {
    beforeEach('', () => {
      cy.visit("https://www.saucedemo.com");
      cy.contains('Swag Labs').should('be.visible')
    })

    it('Login com credenciais válidas', () => {
      cy.login('standard_user', 'secret_sauce')
      cy.contains('Products').should('be.visible')
    })

    it('Login com senha inválida', () => {
      cy.login('standard_user', 'wrong_password')
      cy.contains('Epic sadface: Username and password do not match any user in this service')
        .should('be.visible')
    })

    it('Tentativa de login sem inserir usuário', () => {
      cy.get('[data-test="login-button"]').click()
      cy.contains('Epic sadface: Username is required')
        .should('be.visible')
    })

    it('Tentativa de login sem inserir senha', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="login-button"]').click()
      cy.contains('Epic sadface: Password is required')
        .should('be.visible')
    })
  })