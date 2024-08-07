 class LoginPage {
  

   get getEmailField() {
        return cy.get('input[data-qa="login-email"]');
    }

   get getPasswordField() {
        return cy.get('input[data-qa="login-password"]');
    }

   get getLoginButton() {
        return cy.get('button[data-qa="login-button"]');
    }
}
export default new LoginPage()