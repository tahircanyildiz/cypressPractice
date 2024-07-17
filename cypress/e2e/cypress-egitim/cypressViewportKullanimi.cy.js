describe('Viewport Kullanimi', () => {
    it('viewport with numbers', () => {
        cy.viewport(1200, 1000)
        cy.visit('https://shopist.io/')
    });

});