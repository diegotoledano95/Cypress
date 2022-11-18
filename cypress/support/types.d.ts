/// <reference types="cypress" />
/// <reference types="node" />

declare namespace Cypress {
    interface Chainable {
      querySearch(operationVariables: any): Chainable<any>;
    }
  }
