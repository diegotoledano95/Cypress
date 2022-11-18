class homePage{

    elements = {
        searchbar: () => cy.get('#mainSearchbar'),
        searchBtn: () => cy.get('.input-group-text'),
        errorMessage: ()=> cy.get('.o-nullproduct-title-query')
    }

    typeSearch(product){
        this.elements.searchbar().type(product).type('{enter}')
    }

    clickSearch(){
        this.elements.searchBtn().click()
    }

}

module.exports = new homePage()