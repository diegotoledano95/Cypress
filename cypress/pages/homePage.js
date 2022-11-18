class homePage{

    elements = {
        searchbar: () => cy.get('#mainSearchbar'),
        errorMessage: ()=> cy.get('.o-nullproduct-title-query')
    }

    typeSearch(product){
        this.elements.searchbar().type(product).should('be.visible').type('{enter}')
    }

    clearSearch(){
        this.elements.searchbar().clear()
    }

    checkUrl(url){
        cy.url().should('eq', url);
    }

    checkResult1(number,product){
        cy.get('h5').eq(number).contains(product)
    }

    checkResult2(number){
        cy.get('h5').eq(number).then(x => {
            expect(x.text()).to.have.string("Chaleco");
          });
    }

    nullProductMessage(product){
        cy.get('.o-nullproduct-title-query').should('be.visible').contains(`Lo sentimos, no encontramos nada para `+'"'+product+'"')
    }

}

module.exports = new homePage()