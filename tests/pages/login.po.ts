import { expect, Page } from '@playwright/test';
import _default, { users } from '../../config/default';
  
  export default class Login {
    page: Page;
    
    constructor(page: Page) {
      this.page = page;
     
    }
  
 //Locators
    loginBtn(){
      return (this.page.getByText('Login'));
    }
        emailInputField() {
      return this.page.getByLabel('Email address');
    }
    passwordlInputField() {
      return this.page.getByLabel('Password');
    }
    forgotPasswordLink() {
      return this.page.getByText('Forgot password?');
    }
    continueBtn() {
      return this.page.getByRole('button', {name: 'Continue'});
    }
    resendEmailBtn() {
      return this.page.getByRole('button', {name: 'Resend email'});
    }
    passwordResetConfirmation(){
      return this.page.getByText('Check your Email');
    }
    incorrectLoginMessage() {
      return this.page.locator('#error-element-password');
    }

    //Actions
    async clickLogin(){
      await this.page.getByRole('button', { name: 'Continue' }).click();
    }
    async clickSignout(){
      await this.page.getByRole('button', { name: 'Sign Out' }).click();
    }

    async gotoLogin() {
      await this.page.goto('/');
      await this.page.getByText('Login').click();
    }
    async newLogin(email: string, password: string) {
      await this.emailInputField().fill(email);
      await this.passwordlInputField().fill(password);
      await this.continueBtn().click();
     }
    async Auth(){
      await this.gotoLogin();
      await this.newLogin(users.adminUser.email, users.adminUser.password);
    }
 
     async assertloginFieldsVisible() {
       await expect (this.emailInputField()).toBeVisible();
       await expect (this.passwordlInputField()).toBeVisible();
       await expect (this.continueBtn()).toBeVisible();
     }
     async assertincorrectLoginMessage(message: string) {
      await expect (this.incorrectLoginMessage()).toHaveText(message);
     }
     async performPasswordReset(email: string) {
      await this.forgotPasswordLink().click();
      await this.emailInputField().fill(email);
      await this.continueBtn().click();
     }
      async assertPasswordReset() {
      await expect(this.passwordResetConfirmation()).toBeVisible();
      await expect(this.resendEmailBtn()).toBeEnabled();
     }

     
}
