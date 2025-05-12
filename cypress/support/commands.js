// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//-
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('#input-v-2').type(Cypress.env('email'))
  cy.get('#input-v-4').type(Cypress.env('password'))
  cy.get(':nth-child(2) > .v-btn').click()
  cy.url().should('contain','/dashboard')
})
