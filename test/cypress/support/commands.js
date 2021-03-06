// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('CreateUser', (userData) => {
  cy.contains('Crear una cuenta').click()
  cy.get('#name').type(userData)
  cy.get('#title').type(userData)
  cy.get('#email2').type(userData)
  cy.get('#password2').type(userData)
  cy.contains('.button', 'Registrarse').click()
  cy.wait(3000)
  cy.get('.error-msg').should('not.exist')

})

Cypress.Commands.add('LoginUser', (userName, password) => {
  cy.get('#email1').type(userName)
  cy.get('#password1').type(password)
  cy.contains('.button', 'Ingresar').click()
  cy.wait(3000)
})
