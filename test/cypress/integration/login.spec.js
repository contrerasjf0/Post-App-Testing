'use strict'

describe('Login tests', () => {
  beforeEach(() => {
    cy.fixture('user.json').as('userData')
    cy.visit('/login')
    cy.contains('h1', 'Bienvenido').should('be.visible')
  })

  it('should sign up a user', () => {
    cy.get('@userData').then((userData)=>{
      cy.contains('Crear una cuenta').click()
      cy.get('#name').type('User tester')
      cy.get('#title').type('Company tester')
      cy.get('#email2').type('test@test.io')
      cy.get('#password2').type('qwerty123')
      cy.contains('.button', 'Registrarse').click()
      cy.wait(3000)
      cy.get('.error-msg').should('not.exist')
    })
  })

  it('Must fail the sign in with a non-registered-user', () => {
    cy.get('@userData').then((userData)=>{
      cy.get('#email1').type('non-siggned@user.io')
      cy.get('#password1').type('qwerty123')
      cy.contains('.button', 'Ingresar').click()
      cy.wait(3000)
      cy.get('.error-msg').should('be.visible')
    })
  })

  it('must login a user', () => {
    cy.get('#email1').type('test@test.io')
    cy.get('#password1').type('qwerty123')
    cy.contains('.button', 'Ingresar').click()
    cy.wait(3000)
    cy.contains('a', 'Dashboard').should('be.visible')
  })

  after(() => {
    cy.log('All tests done')
  })

})
