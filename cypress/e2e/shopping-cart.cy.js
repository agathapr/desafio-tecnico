describe('Carrinho de compras', () => {
    beforeEach('', () => {
      cy.visit('/')
      cy.login('standard_user', 'secret_sauce')
      cy.get('[data-test="title"]').should('be.visible')
    })
  
    it('Verificar se produto foi adicionado corretamente ao carrinho', () => {
      const productName = 'Sauce Labs Backpack'
      const productId = 'sauce-labs-backpack'
      cy.addToCart(productId)
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.contains(productName).should('be.visible')
    })

    it('Verificar se produto foi removido corretamente do carrinho', () => {
      const productName = 'Sauce Labs Bike Light'
      const productId = 'sauce-labs-bike-light'
      cy.addToCart(productId)
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.removeFromCart(productId)
      cy.contains(productName).should('not.exist')
    })

    it('Checkout com informações válidas', () => {
      const productId = 'sauce-labs-bolt-t-shirt'
      cy.addToCart(productId)
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.fillCheckoutInformation('Test', 'User', '111111')
      cy.contains('Checkout: Overview').should('be.visible')
    })

    it('Checkout com informações inválidas', () => {
      const productId = 'sauce-labs-bolt-t-shirt'
      cy.addToCart(productId)
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="continue"]').click()
      cy.get('.error-message-container').should('be.visible')
    })

    it('Verificar soma de valor do carrinho e frete', () => {
      const productId = 'sauce-labs-backpack'
      const secondProductId = 'sauce-labs-bike-light'
      const productPrice = 29.99
      const secondProductPrice = 9.99
      cy.addToCart(productId)
      cy.addToCart(secondProductId)
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.fillCheckoutInformation('Test', 'User', '111111')
      cy.get('[data-test="tax-label"]').invoke('text').then((taxText) => { 
        const taxPrice = parseFloat(taxText.replace('Tax: $', ''))
        const totalPrice = taxPrice + productPrice + secondProductPrice
        cy.get('[data-test="total-label"]').should('have.text', `Total: $${totalPrice}`)
      })
    })

    it('Verificar finalização da compra', () => {
      const productId = 'sauce-labs-backpack'
      cy.addToCart(productId)
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.fillCheckoutInformation('Test', 'User', '111111')
      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="back-to-products"]').should('be.visible')
    })
})