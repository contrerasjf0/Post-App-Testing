'use strict'

const { intersects } = require("semver")

describe('Test post view', () => {
  before(() => {
    cy.exc('npm run test:clean')
    cy.fixture('user.json').as('userData')
    cy.visit('/login')

    cy.get('@userData')
      .then((userData) => {
        cy.createUser(userData)
        cy.visit('/dasboard')
        cy.wait(3000)
      })
  })

  it('Create post', () =>  {
    cy.get('@userData')
      .then((userData) => {
        cy.get('textarea').type(Cypress.env('postContent'))
        cy.contains('button', 'Crear').as('botonCrear')
        cy.get('@botonCrear').should('be.enabled')
        cy.get('@botonCrear').click()

        cy.contains('.col h5', userData.name).should('be.visible')
        cy.contains('p', Cypress.env('postContent')).should('be.visible')
      })
  })
})
