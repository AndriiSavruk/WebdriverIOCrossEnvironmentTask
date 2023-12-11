import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import SignUpPage from '../pageobjects/signup.page.js';

const randomUserName = Math.random().toString(5).substring(2);
const randomPassword = Math.random().toString(5).substring(2);
const randomFirstName = Math.random().toString(5).substring(2);
const randomLastName = Math.random().toString(5).substring(2);
const randomThreeSymbolsPassword = generateRandomString(3);
const userName = 'Tavares_Barrows';
const userPassword = 's3cret';
const userFirstName = 'Arely K';

function generateRandomString (length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

describe('Login block', () => {
    it('Test case #1-1 Login with valid credentials', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.setUserNameInput(userName);
    await expect(LoginPage.inputUserName).toHaveValue(userName);
    // Step 2
    await LoginPage.setPasswordInput(userPassword);
    await expect(LoginPage.inputPassword).toHaveValue(userPassword);
    await expect(LoginPage.inputPassword).toHaveAttribute('type','password');
    // Step 3
    await LoginPage.clickOnBtnSignIn();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/');
    await expect(HomePage.userFullName).toHaveText(userFirstName);
    })

    it('Test case #1-2 Login with invalid password', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.setUserNameInput(userName);
    await expect(LoginPage.inputUserName).toHaveValue(userName);
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
    await LoginPage.login(userName,userPassword);
    await expect(browser).toHaveUrl('http://localhost:3000/');
    // Step 2
    await HomePage.clickOnLogout();
    await expect(browser).toHaveUrl('http://localhost:3000/signin');
    })
})

describe('Sign Up block', () => {
    it('Test case #1-5 Sign up with incorrect password', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.clickOnSignUpLink();
    await LoginPage.clickOnSignUpLink();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/signup');
    // Step 2
    await SignUpPage.setFirstNameInput(randomFirstName);
    await expect(SignUpPage.inputFirstName).toHaveValue(randomFirstName);
    // Step 3
    await SignUpPage.setLastNameInput(randomLastName);
    await expect(SignUpPage.inputLastName).toHaveValue(randomLastName);
    // Step 4
    await SignUpPage.setUserNameInput(randomUserName);
    await expect(SignUpPage.inputUserName).toHaveValue(randomUserName);
    // Step 5
    await SignUpPage.setUserPassword(randomThreeSymbolsPassword);
    await expect(SignUpPage.passwordWarning).toBeDisplayed();
    await expect(SignUpPage.passwordWarning).toHaveText('Password must contain at least 4 characters');
    })

    it('Test case #1-6 Sign up with incorrect password confirm', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.clickOnSignUpLink();
    await LoginPage.clickOnSignUpLink();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/signup');
    // Step 2
    await SignUpPage.setFirstNameInput(randomFirstName);
    await expect(SignUpPage.inputFirstName).toHaveValue(randomFirstName);
    // Step 3
    await SignUpPage.setLastNameInput(randomLastName);
    await expect(SignUpPage.inputLastName).toHaveValue(randomLastName);
    // Step 4
    await SignUpPage.setUserNameInput(randomUserName);
    await expect(SignUpPage.inputUserName).toHaveValue(randomUserName);
    // Step 5
    await SignUpPage.setUserPassword(userPassword);
    await expect(SignUpPage.inputPassword).toHaveValue(userPassword);
    await expect(SignUpPage.inputPassword).toHaveAttribute('type','password');
    // Step 6
    await SignUpPage.setConfirmPassword(randomPassword);
    await expect(SignUpPage.confirmPasswordWarning).toBeDisplayed();
    await expect(SignUpPage.confirmPasswordWarning).toHaveText('Password does not match');
    })

    it('Test case #1-7 Return back to Sign In by link', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.clickOnSignUpLink();
    await LoginPage.clickOnSignUpLink();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/signup');
    // Step 2
    await SignUpPage.clickOnSignInLink();
    await SignUpPage.clickOnSignInLink();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/signin');
    })

    it('Test case #1-8 Sign up and login', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    // Step 1
    await LoginPage.clickOnSignUpLink();
    await LoginPage.clickOnSignUpLink();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/signup');
    // Step 2
    await SignUpPage.setFirstNameInput(randomFirstName);
    await expect(SignUpPage.inputFirstName).toHaveValue(randomFirstName);
    // Step 3
    await SignUpPage.setLastNameInput(randomLastName);
    await expect(SignUpPage.inputLastName).toHaveValue(randomLastName);
    // Step 4
    await SignUpPage.setUserNameInput(randomUserName);
    await expect(SignUpPage.inputUserName).toHaveValue(randomUserName);
    // Step 5
    await SignUpPage.setUserPassword(randomPassword);
    await expect(SignUpPage.inputPassword).toHaveValue(randomPassword);
    await expect(SignUpPage.inputPassword).toHaveAttribute('type','password');
    // Step 6
    await SignUpPage.setConfirmPassword(randomPassword);
    await expect(SignUpPage.inputConfirmPassword).toHaveValue(randomPassword);
    await expect(SignUpPage.inputConfirmPassword).toHaveAttribute('type','password');
    // Step 7
    await SignUpPage.clickOnSignUpBtn();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/signin');
    // Step 8
    await LoginPage.setUserNameInput(randomUserName);
    await expect(LoginPage.inputUserName).toHaveValue(randomUserName);
    // Step 9
    await LoginPage.setPasswordInput(randomPassword);
    await expect(LoginPage.inputPassword).toHaveValue(randomPassword);
    await expect(LoginPage.inputPassword).toHaveAttribute('type','password');
    // Step 10
    await LoginPage.clickOnBtnSignIn();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('http://localhost:3000/');
    await expect(HomePage.onboardingWindow).toBeDisplayed();
    await expect(HomePage.onboardingWindow).toHaveText('Get Started with Real World App');
    })
     
})

