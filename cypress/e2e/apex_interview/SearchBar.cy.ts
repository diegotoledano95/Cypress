import { testData } from '../../fixtures/testData'
import homePage from '../../pages/homePage'

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

    it.skip('should search product', () =>{
        homePage.typeSearch(testData.firstProduct);
        cy.url().should('eq', testData.firstSearchUrl);
        homePage.checkResult1(0, testData.firstProduct);
        homePage.checkResult1(1, testData.firstProduct);
        homePage.checkResult1(2, testData.firstProduct);
        homePage.checkResult1(3, testData.firstProduct);
        homePage.clearSearch();
    });

    it.skip('API response', () =>{

        cy.querySearch(testData.firstProduct).then((response)=>{
            expect(response.body.mainContent.records[0]._t).to.contain(testData.firstProduct);          
        })
    });

    it.skip('should notify product does not exist', () =>{

        homePage.typeSearch(testData.not_found_string);
        homePage.nullProductMessage(testData.not_found_string);
        homePage.clearSearch()
    });

    it('brand, ph characteristics and model search', () =>{

        homePage.typeSearch(testData.secondProduct);
        homePage.checkUrl(testData.secondSearchUrl)
        homePage.checkResult2(0)
        homePage.clearSearch()
    });
})