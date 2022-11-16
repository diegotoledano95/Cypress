describe('home page', () => {

  beforeEach('visits localhost',()=>{
    cy.visit('http://localhost:3000')
    })
  context('Hero section', () => {
    it('getting by element with command clean up', () => {
      cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress')
    })

    it('testing list of features on dt tag with eq()', () =>{
      cy.get("dt").eq(2).contains('Free and Open Source')
    })
  })
  context('Courses section', () => {

    it.only('Testing first course', () =>{
      cy.getByData('course-0').find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it.only('Testing second course', () =>{
      cy.getByData('course-1').find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it.only('Testing third course', () =>{
      cy.getByData('course-2').find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})