const { slowCypressDown } = require('cypress-slow-down');

describe('Cypress Session Kullanimi', () => {
    
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {return false})
    });
    beforeEach(() => {
        const username = 'thrcn.yldz1@gmail.com'
        const password = 'tahir1234'
        cy.loginWithSession(username, password)
    });

    const { faker } = require('@faker-js/faker')
    let randomTitle = faker.word.words()
    slowCypressDown()
    it('Siteye git ve bir makale ekle', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('div#main nav > div > ul > li:nth-child(2) > a').click()
        cy.wait(2000)
        cy.get("input[placeholder = 'Article Title']").type(randomTitle)
        cy.get('input[placeholder = "What\'s this article about?"]').type('Udemy Cypress Dersleri')
        cy.get("textarea[placeholder = 'Write your article (in markdown)']").type('Sifirdan ileri seviye Cypress')
        cy.get("input[placeholder = 'Enter tags']").type('cypress')
        cy.contains('Publish Article').click()
        cy.contains('Edit Article').should('be.visible')
    });

    it.skip('Global Feeds\'e git ve dogrula', () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('div.feed-toggle > ul > li:nth-child(2) > a').click()
        cy.get('div:nth-child(1) > a > h1').should('be.visible').and('contain', randomTitle)
    });
});