import { v4 as uuidv4 } from 'uuid'

describe('manage users', () => {
  beforeEach(() => {
    cy.login()
  })


  describe('add', () => {
    beforeEach(() => {
      cy.visit('/app/client/users')
      cy.get('#button-addNewUser').click()
    })

    it('empty user', () => {
      cy.get('[data-testid="save-user"] > .v-btn__content').click()

      cy.get('#textfield-adduser-firstname-messages > .v-messages > .v-messages__message').contains('This field is required').should('exist')
      cy.get('#textfield-adduser-lastname-messages > .v-messages > .v-messages__message').contains('This field is required').should('exist')
      cy.get('#textfield-adduser-email-messages > .v-messages > .v-messages__message').contains('This field is required').should('exist')
    })

    it('random name and email', () => {
      let uuid = uuidv4()
      cy.get('#textfield-adduser-firstname').type(uuid)
      cy.get('#textfield-adduser-lastname').type(uuid)
      cy.get('#textfield-adduser-email').type(`drewcoo+${uuid}@gmail.com`)

      cy.get('[data-testid="save-user"] > .v-btn__content').click()

      cy.get('[data-testid="toast-body"]').contains('User added successfully').should('exist')
    })

    it('admin', () => {
      let uuid = uuidv4()
      cy.get('#checkbox-adduser-admin').click()
      cy.get('#textfield-adduser-firstname').type(uuid)
      cy.get('#textfield-adduser-lastname').type(uuid)
      cy.get('#textfield-adduser-email').type(`drewcoo+${uuid}@gmail.com`)

      cy.get('[data-testid="save-user"] > .v-btn__content').click()

      cy.get('[data-testid="toast-body"]').contains('User added successfully').should('exist')

      // search for it, verify that it's admin
      cy.get('#input-v-3').type(uuid)
      cy.get('[data-testid="user-name-in-list"] > .v-btn__content').click()
      cy.get('#checkbox-modifyuser-admin').should('be.checked')
    })

    it('email an invite', () => {
      let uuid = uuidv4()
      cy.get('#checkbox-v-26').click()
      cy.get('#textfield-adduser-firstname').type(uuid)
      cy.get('#textfield-adduser-lastname').type(uuid)
      cy.get('#textfield-adduser-email').type(`drewcoo+${uuid}@gmail.com`)

      cy.get('[data-testid="save-user"] > .v-btn__content').click()

      cy.get('[data-testid="toast-body"]').contains('User added successfully').should('exist')

      // with more time, I'd also check the email account with an IMAP library
    })
  })
})
