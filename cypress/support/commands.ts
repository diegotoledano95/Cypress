/// <reference types="cypress" />

Cypress.Commands.add('querySearch', (search) => {    
    return cy.request({
      url: 'https://www.liverpool.com.mx/getSearchFacadeService',
      method:'GET',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'axios/0.18.0'
      },
      qs: {
        s: search
      },
      failOnStatusCode: false
    });
  });