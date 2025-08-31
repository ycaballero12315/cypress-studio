/// <reference types="Cypress"/>
beforeEach('init test test', ()=>{
    cy.visit('https://example.cypress.io')
})
describe('template spec', () => {
  it('passes', () => {
    cy.get(':nth-child(4) .home-list :nth-child(1) ul :nth-child(2) a').click();
    cy.get('#query-btn').click();
    cy.get('#query-btn').click();
    cy.get('[href="/cypress-api"]').click();
    cy.get('h1').should('have.text', 'Cypress API');
    cy.get('.navbar-brand').should('have.text', 'cypress.io');
    cy.get('.navbar-brand').click();
  })
})