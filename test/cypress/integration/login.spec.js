'use strict'

describe('Login tests', () => {
  
  before(() => {
    cy.exec('npm run test:clean')
  })

  beforeEach(() => {
    cy.fixture('user.json').as('userData')
    cy.visit('/login')
    cy.contains('h1', 'Bienvenido').should('be.visible')
  })

  it('should sign up a user', () => {
    cy.get('@userData').then((userData) => {
      cy.CreateUser(userData)
    })
  })

  it.skipt('Must fail the sign in with a non-registered-user', () => {
    cy.get('@userData').then((userData) => {
      cy.loginUser('non-siggned@user.io', 'qwerty123')
      cy.get('.error-msg').should('be.visible')
    })
  })

  it('must login a user', () => {
    cy.get('@userData').then((userData) => {
      cy.loginUser(userData.email, userData.password)
      cy.contains('a', 'Dashboard').should('be.visible')
    })
  })

  after(() => {
    cy.log('All tests done')
  })

})
