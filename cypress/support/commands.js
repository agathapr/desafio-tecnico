Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
});
Cypress.Commands.add('addToCart', (product) => {
    cy.get(`[data-test="add-to-cart-${product}"]`).click()
});
Cypress.Commands.add('removeFromCart', (product) => {
    cy.get(`[data-test="remove-${product}"]`).click()
})
Cypress.Commands.add('fillCheckoutInformation', (firstName, lastName, postalCode) => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(postalCode)
    cy.get('[data-test="continue"]').click()
})