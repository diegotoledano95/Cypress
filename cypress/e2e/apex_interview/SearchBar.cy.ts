import { test_data } from '../../fixtures/testData'

describe('Search Bar',() => {
    beforeEach('visits page', () =>{
        cy.visit(test_data.page_url)
    })

    it('first search', () =>{
        cy.get('email-input').type('diego@subform.com')
        cy.get('submit-button').click()
        cy.get('success-message').should('exist')
    })
})