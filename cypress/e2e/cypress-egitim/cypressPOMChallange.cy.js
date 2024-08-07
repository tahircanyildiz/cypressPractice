import { slowCypressDown } from "cypress-slow-down";
import {LoginPage} from "../../pageObjectModel/loginPage";
const loginpage=new LoginPage()

const positiveUser = {
    email: 'tahir@gmail.com',
    password: 'tahir123'
};
const negativeUser = {
    email: 'tahir',
    password: 'tahir123'
};
slowCypressDown()
describe('POM Challenge denemesi ', () => {

    it('POM Deneme pozitif', () => {

        loginpage.ac()
        loginpage.getEmailField().type(positiveUser.email)
        loginpage.getPasswordField().type(positiveUser.password)
        loginpage.getLoginButton().click()


    });
    it('POM Deneme negatif', () => {

        loginpage.ac()
        loginpage.getEmailField().type(negativeUser.email)
        loginpage.getPasswordField().type(negativeUser.password)
        loginpage.getLoginButton().click()


    });
});