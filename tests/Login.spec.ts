import { test } from "./fixtures/rootpages";
import _default, { message, users } from "../config/default";
import { expect } from "@playwright/test";

  test('should not allow a user to login with incorrect email and password', async ({ login }) => {
    await login.gotoLogin();
    await login.newLogin(users.unregisteredUser.email, users.unregisteredUser.password);
    await login.assertincorrectLoginMessage(message.warningText.InvalidEmailorPassword);
});
  test('should not allow a user to login with blank email and password', async ({ login }) => {
    await login.gotoLogin();
    await login.newLogin('', '')
    await login.assertloginFieldsVisible();
});
test('should be able to logout', async ({ global, login }) => {
    await login.gotoLogin();
    await login.newLogin(users.adminUser.email, users.adminUser.password);
    await expect (global.addBtn()).toBeEnabled();
    await login.clickSignout();
    await expect (login.loginBtn()).toBeEnabled();
});
  test('should NOT allow a user to reset his password with blank email address', async ({ login }) => {
    await login.gotoLogin();
    await login.performPasswordReset('');
    await expect (login.continueBtn()).toBeEnabled();
});  
  test('should allow a user to reset his password', async ({ login }) => {
    await login.gotoLogin();
    await login.performPasswordReset(users.adminUser.email);
    await login.assertPasswordReset();
});  

