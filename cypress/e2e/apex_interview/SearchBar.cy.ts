import { testDataSearch } from '../../fixtures/testData'
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

    it('should search product', () =>{
        homePage.typeSearch(testDataSearch.firstProduct);
        homePage.checkUrl(testDataSearch.firstSearchUrl)
        cy.url().should('eq', testDataSearch.firstSearchUrl);
        homePage.checkResult1(0, testDataSearch.firstProduct);
        homePage.checkResult1(1, testDataSearch.firstProduct);
        homePage.checkResult1(2, testDataSearch.firstProduct);
        homePage.checkResult1(3, testDataSearch.firstProduct);
        homePage.clearSearch();
    });

    it('API response', () =>{

        cy.querySearch(testDataSearch.firstProduct).then((response)=>{
            expect(response.body.mainContent.records[0]._t).to.contain(testDataSearch.firstProduct);          
        })
    });

    it('should notify product does not exist', () =>{

        homePage.typeSearch(testDataSearch.not_found_string);
        homePage.nullProductMessage(testDataSearch.not_found_string);
        homePage.clearSearch()
    });

    it('brand, ph characteristics and model search', () =>{

        homePage.typeSearch(testDataSearch.secondProduct);
        homePage.checkUrl(testDataSearch.secondSearchUrl)
        homePage.checkResult2(0)
        homePage.clearSearch()
    });
})