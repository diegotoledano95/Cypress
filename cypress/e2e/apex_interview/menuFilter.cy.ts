import { testDataMenu } from '../../fixtures/testData'
import filterMenu from '../../pages/filterMenu'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Search Bar',() => {

    beforeEach('Visits Home Page', () =>{
        cy.visit(('/'),{
            headers:{
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/0.18.0" 
            }
        })
    })

    it('get to menu page', () =>{
        filterMenu.getToMenu()
        filterMenu.checkUrl(testDataMenu.menuUrl)
        filterMenu.setPrices(testDataMenu.firstPrice,testDataMenu.secondPrice)
        filterMenu.setSize()
        filterMenu.setBrand()
    });

    
})