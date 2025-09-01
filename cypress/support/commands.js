
Cypress.Commands.add('writer', (selector, text) => {
  cy.get(selector, { timeout: 5000 }).should('exist').clear().type(text);
  cy.wait(500); // Ajustable según la respuesta del sitio
});

