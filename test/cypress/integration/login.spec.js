'use strict'

describe('Login tests', () => {
  it('Should yield the login page', () => {
    cy.visit('/login')
  })

  it('should sign up a user', () => {
    cy.visit('/login')
    cy.contains('Crear una cuenta').click()
    cy.get('#name').type('User tester')
    cy.get('#title').type('Company tester')
    cy.get('#email2').type('test@test.io')
    cy.get('#password2').type('qwerty123')
    cy.contains('.button', 'Registrarse').click()
    cy.wait(3000)
  })

  it('should sign in an user', () => {
    cy.visit('/login')
    cy.get('#email1').type('test@test.io')
    cy.get('#password1').type('qwerty123')
    cy.contains('.button', 'Ingresar').click()
    cy.wait(3000)
  })
})
