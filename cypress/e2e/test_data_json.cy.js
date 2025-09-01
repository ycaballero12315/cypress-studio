/// <reference types="Cypress" />

describe('Studio Cypress', () => {
let datas  

  beforeEach('Connection for Institutoweb Login', () => {
    cy.visit('https://institutoweb.com.ar/test/login.html')
    cy.fixture('./aleatory_user')  // conectar con el archivo
    .then(test =>{
        datas = test
    })
  })

  it('Test Login Usuario', () => {
    
    datas.forEach((data) =>{
          cy.writer('#tuusuario', data.user);
          cy.writer('#tuclave', data.pass);
          cy.writer('#tumail', data.email);

          // cy.get(':nth-child(8)').click();
          cy.myclick(':nth-child(8)')
          cy.get('h3').should('have.text', 'Acceso correcto!');
          // cy.get('#volver').click();
          cy.myclick('#volver')

    })   
  })

})