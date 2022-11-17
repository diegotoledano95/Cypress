describe('subscription form test',() => {
    beforeEach('visits local host', () =>{
        cy.visit('http://localhost:3000')
    })

    it('successful subscription to form with correct email', () =>{
        cy.get('email-input').type('diego@subform.com')
        cy.get('submit-button').click()
        cy.get('success-message').should('exist')
    })

    it('error message from subscription with bad email', () =>{
        cy.get('email-input').type('diego')
        cy.get('submit-button').click()
        cy.get('success-message').should('not.exist')
    })

    it.only('error message already subscribed email', () =>{
        cy.get('email-input').type('john@example.com')
        cy.get('submit-button').click()
        cy.get('server-error-message').should('exist')
    })
})