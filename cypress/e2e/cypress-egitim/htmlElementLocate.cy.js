describe('Cypress Locator', () => {
    it('html Element Locate Etme', () => {
        cy.get('#user-name') // id locate
        cy.get('.login-box') // class locate
        cy.get('input[name:"user-name"]') // attribute locate
        cy.get('a:contains("Login")')
        cy.get('a').contains("Login")
        cy.contains("Login")  // son 3 satır aynı işlevi görüyor

        
    });
});