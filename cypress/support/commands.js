Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-test="username"]').type(email);
    cy.get('[data-test="password"]').type(senha);
    cy.get('[data-test="login-button"]').click();
 });