describe('home page', () => {

  beforeEach('visits localhost',()=>{
    cy.visit('http://localhost:3000')
  })

  it('getting by element with command clean up', () => {
    cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress')
  })

  it('testing list of features on dt tag with eq()', () =>{
    cy.get("dt").eq(2).contains('Free and Open Source')
  })
})