describe('Before After Kullanimi', () => {
    before(() => {
        cy.log('Before Kullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });

    after(() => {
        cy.log('After Kullanimi icin bir ornek')
    });

    it('Basligi dogrula', () => {
        cy.title().should('eq', "Automation Exercise")
    });
});

describe('Before Aftereach Kullanimi', () => {
    beforeEach(() => {
        cy.log('BeforeEach Kullanimi - Cypress Test')
        cy.visit('https://automationexercise.com/')
    });
 
    afterEach(() => {
        cy.log('AfterEach Kullanimi icin bir ornek')
    });

    it('Basligi dogrula', () => {
        cy.title().should('eq', "Automation Exercise")
    });

    it('url dogrula', () => {
        cy.url().should('include', "automation")
    });

    it('hostname dogrula', () => {
        cy.location('hostname').should('include', "automation")
    });
});