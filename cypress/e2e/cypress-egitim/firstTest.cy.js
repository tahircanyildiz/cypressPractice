describe('first Test', () => {
    it('First Test', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('include','ercise')
        cy.url('eq','https://www.automationexercise.com/')
    });
    it('Second Test', () => {
        cy.visit('https://tahircanyildiz.netlify.app/')

        cy.title().should('eq','Bilimsel Hesap Makinesi')

       
    });
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
    
        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    
        // Get an input, type into it
        cy.get('.action-email').type('fake@email.com')
    
        //  Verify that the value has been updated
        cy.get('.action-email').should('have.value', 'fake@email.com')
      });
});