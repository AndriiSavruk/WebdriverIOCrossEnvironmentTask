import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

const randomUserName = Math.random().toString(5).substring(2);
const randomPassword = Math.random().toString(5).substring(2);

describe('Login block', () => {
    it('Test case #1-1 Login with valid credentials', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.setUserNameInput('Tavares_Barrows');
    await expect(LoginPage.inputUserName).toHaveValue('Tavares_Barrows');
    // Step 2
    await LoginPage.setPasswordInput('s3cret');
    await expect(LoginPage.inputPassword).toHaveValue('s3cret');
    await expect(LoginPage.inputPassword).toHaveAttribute('type','password');
    // Step 3
    await LoginPage.clickOnBtnSignIn();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/');
    await expect(HomePage.userFullName).toHaveText('Arely K');
    })

    it('Test case #1-2 Login with invalid password', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.setUserNameInput('Tavares_Barrows');
    await expect(LoginPage.inputUserName).toHaveValue('Tavares_Barrows');
    // Step 2
    await LoginPage.setPasswordInput(randomPassword);
    await expect(LoginPage.inputPassword).toHaveValue(randomPassword);
    await expect(LoginPage.inputPassword).toHaveAttribute('type','password');
    // Step 3
    await LoginPage.clickOnBtnSignIn();
    await expect(LoginPage.warningMessage).toBeDisplayed();
    await expect(LoginPage.warningMessage).toHaveText('Username or password is invalid');
    })

    it('Test case #1-3 Login with invalid credentials', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.setUserNameInput(randomUserName);
    await expect(LoginPage.inputUserName).toHaveValue(randomUserName);
    // Step 2
    await LoginPage.setPasswordInput(randomPassword);
    await expect(LoginPage.inputPassword).toHaveValue(randomPassword);
    await expect(LoginPage.inputPassword).toHaveAttribute('type','password');
    // Step 3
    await LoginPage.clickOnBtnSignIn();
    await expect(LoginPage.warningMessage).toBeDisplayed();
    await expect(LoginPage.warningMessage).toHaveText('Username or password is invalid');
    })

    it('Test case #1-4 Logout', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.login('Tavares_Barrows','s3cret');
    await expect(browser).toHaveUrl('http://localhost:3000/');
    // Step 2
    await HomePage.clickOnLogout();
    await expect(browser).toHaveUrl('http://localhost:3000/signin');
    })
})

