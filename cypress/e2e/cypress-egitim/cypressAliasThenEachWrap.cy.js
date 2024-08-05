describe('Alias, Then, Each, Wrap', () => {
    it('Kullanim Ornegi', () => {
        let itemlength
        cy.visit('https://shopist.io/')
        cy.viewport('macbook-16')


        cy.get('.navbar-section a').as('NavbarMenus') //Alias örnek
        cy.get('@NavbarMenus')
        .then(($el) => {  //then örnek
            itemlength = $el.length
        })
        .each(($el, index) => {  //each örnek
            // cy.log($el.text())
            cy.get('@NavbarMenus').should('be.visible')
            cy.log('Navbar Menu ' + index + ": " + $el.text())

            if ($el.text().includes('Cart')) {
                cy.wrap($el).click() // wrap örnek
            }
        })
    });
});