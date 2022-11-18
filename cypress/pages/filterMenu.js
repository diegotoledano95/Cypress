class filterMenu{
    getToMenu(){
        cy.contains('Categorías').should('be.visible').click()
        cy.contains('Electrónica').should('be.visible').trigger('mouseover')
        cy.contains('Pantallas').should('be.visible').click()
    }

    checkUrl(url){
        cy.url().should('eq', url);
    }

    setBrand(){
        cy.get('input[id="brand-SAMSUNG"]').click()
    }

    setSize(){
        cy.get('input[id="variants.normalizedSize-55 pulgadas"]').click()

    }

    setPrices(minPrice, maxPrice){
        cy.get('input[id="min-price-filter"]').type(minPrice)
        cy.get('input[id="max-price-filter"]').type(maxPrice)
        cy.get('.a-price__filterButton').click()
    }
}

module.exports = new filterMenu