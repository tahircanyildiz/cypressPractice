describe('Temel Komutlar', () => {
    it('Temel Komutlar cy.visit Kullanimi', () => {
        cy.visit('https://example.cypress.io/commands')
    });
    it('Temel Komutlar cy.title Kullanimi', () => {
        cy.title().should('eq',"cypress.io") //title tam eşitse
        cy.title().should('include',"cypress.io") //title içinde cypress 
        cy.title().should('contains',"cypress.io") //title içinde cypres 
    });
    it('Temel Komutlar cy.url ve cy.location Kullanimi', () => {
        cy.url().should('eq',"https://example.cypress.io/commands")

        cy.location('pathname').should('eq',"https://example.cypress.io/commands")  // gidilen pathi doğrulamış oluruz.
        cy.location('protocol').should('eq',"https")  // gidilen protocol oluruz.
        cy.location('hostname').should('include',"cypress.io")  //içeriyorsa

    });

    it('Temel Komutlar cy.get Kullanimi', () => {
        cy.get("#button")
        cy.get('#button').as('deneme')
        cy.get('a[href="example.cypress.io"]').click()     
    });

    it('Temel Komutlar cy.log Kullanimi', () => {
        cy.log('temel komut cy.log kullanimi')
    });
 
});