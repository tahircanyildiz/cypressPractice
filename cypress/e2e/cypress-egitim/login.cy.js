describe('Login Test', () => {
    const user = {
        username: 'test',
        password: 'test123'
    };
    it('Kayit Ol ve Giris Yap', () => {
        // Giriş sayfasına git
        cy.visit("https://todopurposeless.netlify.app/");

        //kayıt ol
        cy.get('div#auth span').click();
        cy.get('input#register-username').type(user.username);
        cy.get('input#register-password').type(user.password);
        cy.get('div#register > button').click();

        //giriş yap
        cy.get('input#login-username').type(user.username);
        cy.get('input#login-password').type(user.password);
        cy.get('div#auth > button').click();

        // to-do ekle
        cy.get("input#new-todo").type("first todo");
        cy.get("div#todo-app div.todo-input.todo-item > button > i").click();
        cy.get("input#new-todo").type("second todo");
        cy.get("div#todo-app div.todo-input.todo-item > button > i").click();
    });


});