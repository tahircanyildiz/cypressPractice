describe('POM Custom Commands Challange', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login')
    });
    it('Custom Commands Kullanim Ornek Invalid Username Valid Password', () => {
        cy.loginchallange('deneme@abc.com', 'denemeParola')
    });
    

    it('Custom Commands Kullanim Ornek Valid Username Invalid Pass', () => {
        cy.loginchallange('deneme@gmail.com', 'denemeParola2')
    });
})
