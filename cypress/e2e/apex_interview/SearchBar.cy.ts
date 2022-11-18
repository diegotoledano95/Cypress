import { testData } from '../../fixtures/testData'
import homePage from '../../pages/homePage'

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
        homePage.typeSearch(testData.firstProduct)

        //cy.querySearch('iPhone 12')

        cy.intercept(' https://www.liverpool.com.mx/getSearchFacadeService?s=iPhone 12', (response)=>{
            console.log(response);
            expect(response.body.mainContent.records[0]._t).to.have('iPhone 12');
        })
    })
})