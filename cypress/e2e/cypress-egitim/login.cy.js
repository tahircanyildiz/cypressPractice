describe('Login Test', () => {
    const user = {
      username: 'user',
      password: 'pass'
    };
  
    it('should login successfully with valid credentials', () => {
      // Giriş sayfasına git
      cy.visit("https://tr-tr.facebook.com/");
      
    //   // Kullanıcı adı ve şifre alanlarını doldur
       cy.get('input#email').type(user.username);
       cy.get('input#pass').type(user.password);
  
      cy.get('input[value="Giriş Yap"]').click();
      cy.visit("https://www.facebook.com/user");
  
    //   // Giriş işleminin başarılı olup olmadığını kontrol et
      cy.url().should('include', '/user');
      

    // it('should display error message on invalid credentials', () => {
    //   // Giriş sayfasına git
    //   cy.visit('/login');
      
    //   // Yanlış kullanıcı adı ve şifre gir
    //   cy.get('input[name=username]').type('wronguser');
    //   cy.get('input[name=password]').type('wrongpassword');
  
    //   // Giriş butonuna tıkla
    //   cy.get('button[type=submit]').click();
  
    //   // Hata mesajının görüntülendiğini kontrol et
    //   cy.get('.error-message').should('contain', 'Geçersiz kullanıcı adı veya şifre');
    //
     });
  });