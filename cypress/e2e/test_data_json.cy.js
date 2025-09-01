/// <reference types="Cypress" />

describe('Studio Cypress', () => {
let data 

  beforeEach('Connection to Institutoweb Login', () => {
    cy.visit('https://institutoweb.com.ar/elm/login.html')
    cy.fixture('./aleatory_user') 
    .then(elm =>{ 
        data = elm 
    })
  })

  it('Login element', () => {
    
    data.forEach((data) =>{
        
          cy.get('#tuusuario').type(data.user);
          cy.get('#tuclave').type(data.pass);
          cy.get('#tumail').type(data.email);

          cy.get(':nth-child(8)').click();

          cy.get('h3').should('have.text', 'Corret!');
          cy.get('#volver').click();
    })   
  })

})