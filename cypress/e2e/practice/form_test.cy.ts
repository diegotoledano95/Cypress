import {  } from "module";

describe('subscription form test',() => {
    beforeEach('visits local host', () =>{
        cy.visit('http://localhost:3000')
    })

    it('successful subscription to form with correct email', () =>{
        cy.getByData('email-input').type('diego@subform.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist')
    })

    it('error message from subscription with bad email', () =>{
        cy.getByData('email-input').type('diego')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })

    it.only('error message already subscribed email', () =>{
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message').should('exist')
    })
})