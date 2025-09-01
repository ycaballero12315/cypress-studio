import 'cypress-real-events'
Cypress.Commands.add('writer', (selector, text) => {
  cy.get(selector, { timeout: 5000 }).should('exist').clear().type(text);
  cy.wait(500);
});

Cypress.Commands.add('myclick', (selector) => {
  cy.get(selector).realClick();
  cy.wait(500);
});

