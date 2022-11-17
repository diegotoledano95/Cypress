/// <reference types="cypress" />
/// <reference types="node" />

declare namespace Cypress {
    interface Chainable {
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
  }
