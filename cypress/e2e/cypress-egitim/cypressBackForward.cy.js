describe('Back Forward Kullanimi', () => {
    it('cypress.io sayfasında ileri geri', () => {
        cy.visit('https://www.cypress.io/')
   

    cy.get('nav > div > ul > li:nth-child(5) > a').click()
    cy.title().should('eq', "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

   cy.go("back") // geri dön
   cy.title().should('eq', "Testing Frameworks for Javascript | Write, Run, Debug | Cypress")

   cy.go("forward") // ileri git
   cy.title().should('eq', "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")

   cy.go(-1) // geri dön
   cy.title().should('eq', "Testing Frameworks for Javascript | Write, Run, Debug | Cypress")

   cy.go(1) // ileri git
   cy.title().should('eq', "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")
});



});