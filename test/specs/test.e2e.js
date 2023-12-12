import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import SignUpPage from '../pageobjects/signup.page.js';
import BankAccountsPage from '../pageobjects/bankaccounts.page.js';
import CreateBankAccountPage from '../pageobjects/createbankaccount.page.js';
import UserSettingsPage from '../pageobjects/usersettings.page.js';
import TransactionNewPage from '../pageobjects/transactionnew.page.js';
import { randomUserName, randomPassword, randomFirstName, randomLastName, randomThreeSymbolsPassword, randomBankName, invalidBankName, randomBankRoutingNumber, invalidBankRoutingNumber, randomBankAccountNumber, invalidBankAccountNumber, invalidEmail, invalidPhoneNumber, randomAmount, randomDescription } from "./../helper/randomvars.js"

const userName = 'Tavares_Barrows';
const userPassword = 's3cret';
const userFirstName = 'Arely';

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
    await expect(HomePage.userFullName).toHaveTextContaining(userFirstName);
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

describe('Bank Account block', () => {
  it('Test case #1-9 New bank account creating', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnBankAccounts();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts');
    // Step 2
    await BankAccountsPage.clickOnCreateBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts/new');
    // Step 3
    await CreateBankAccountPage.setBankNameInput(randomBankName);
    await expect(CreateBankAccountPage.inputBankName).toHaveValue(randomBankName);
    // Step 4
    await CreateBankAccountPage.setRoutingNumberInput(randomBankRoutingNumber);
    await expect(CreateBankAccountPage.inputBankRoutingNumber).toHaveValue(randomBankRoutingNumber);
    // Step 5
    await CreateBankAccountPage.setBankAccountNumberInput(randomBankAccountNumber);
    await expect(CreateBankAccountPage.inputBankAccountNumber).toHaveValue(randomBankAccountNumber);
    await expect(CreateBankAccountPage.saveBtn).toBeEnabled();
    // Step 6
    await CreateBankAccountPage.clickOnSaveBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts');
    await expect(BankAccountsPage.bankAccountsList).toHaveTextContaining(randomBankName);
  })

  it('Test case #1-10 Bank account creating with invalid bank name', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnBankAccounts();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts');
    // Step 2
    await BankAccountsPage.clickOnCreateBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts/new');
    // Step 3
    await CreateBankAccountPage.setBankNameInput(invalidBankName);
    await expect(CreateBankAccountPage.inputBankName).toHaveValue(invalidBankName);
    await expect(CreateBankAccountPage.bankNameWarning).toBeDisplayed();
    await expect(CreateBankAccountPage.bankNameWarning).toHaveText('Must contain at least 5 characters');
    // Step 4
    await CreateBankAccountPage.setRoutingNumberInput(randomBankRoutingNumber);
    await expect(CreateBankAccountPage.inputBankRoutingNumber).toHaveValue(randomBankRoutingNumber);
    // Step 5
    await CreateBankAccountPage.setBankAccountNumberInput(randomBankAccountNumber);
    await expect(CreateBankAccountPage.inputBankAccountNumber).toHaveValue(randomBankAccountNumber);
    await expect(CreateBankAccountPage.saveBtn).toBeDisabled();
  })

  it('Test case #1-11 Bank account creating with invalid routing number', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnBankAccounts();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts');
    // Step 2
    await BankAccountsPage.clickOnCreateBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts/new');
    // Step 3
    await CreateBankAccountPage.setBankNameInput(randomBankName);
    await expect(CreateBankAccountPage.inputBankName).toHaveValue(randomBankName);
    // Step 4
    await CreateBankAccountPage.setRoutingNumberInput(invalidBankRoutingNumber);
    await expect(CreateBankAccountPage.inputBankRoutingNumber).toHaveValue(invalidBankRoutingNumber);
    await expect(CreateBankAccountPage.routingNumberWarning).toBeDisplayed();
    await expect(CreateBankAccountPage.routingNumberWarning).toHaveText('Must contain a valid routing number');
    // Step 5
    await CreateBankAccountPage.setBankAccountNumberInput(randomBankAccountNumber);
    await expect(CreateBankAccountPage.inputBankAccountNumber).toHaveValue(randomBankAccountNumber);
    await expect(CreateBankAccountPage.saveBtn).toBeDisabled();
  })

  it('Test case #1-12 Bank account creating with invalid account number', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnBankAccounts();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts');
    // Step 2
    await BankAccountsPage.clickOnCreateBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/bankaccounts/new');
    // Step 3
    await CreateBankAccountPage.setBankNameInput(randomBankName);
    await expect(CreateBankAccountPage.inputBankName).toHaveValue(randomBankName);
    // Step 4
    await CreateBankAccountPage.setRoutingNumberInput(randomBankRoutingNumber);
    await expect(CreateBankAccountPage.inputBankRoutingNumber).toHaveValue(randomBankRoutingNumber);
    // Step 5
    await CreateBankAccountPage.setBankAccountNumberInput(invalidBankAccountNumber);
    await expect(CreateBankAccountPage.inputBankAccountNumber).toHaveValue(invalidBankAccountNumber);
    await expect(CreateBankAccountPage.accountNumberWarning).toBeDisplayed();
    await expect(CreateBankAccountPage.accountNumberWarning).toHaveText('Must contain at least 9 digits');
    await expect(CreateBankAccountPage.saveBtn).toBeDisabled();
  })
})

describe('User Settings Block', () => {
  it('Test case #1-13 User first name changing', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnMyAccount();
    await expect(browser).toHaveUrl('http://localhost:3000/user/settings');
    // Step 2
    await UserSettingsPage.setFirstNameInput(randomFirstName);
    await expect(UserSettingsPage.inputFirstName).toHaveValue(randomFirstName);
    // Step 3
    await UserSettingsPage.clickOnSaveBtn();
    await expect(UserSettingsPage.userFullName).toHaveTextContaining(randomFirstName);
    // Changing first name back
    await UserSettingsPage.setFirstNameInput(userFirstName);
    await UserSettingsPage.clickOnSaveBtn();
  })

  it('Test case #1-14 User first and last name changing with empty fields', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnMyAccount();
    await expect(browser).toHaveUrl('http://localhost:3000/user/settings');
    // Step 2
    await UserSettingsPage.clearFirstNameInput();
    await expect(UserSettingsPage.firstNameWarning).toBeDisplayed();
    await expect(UserSettingsPage.firstNameWarning).toHaveText('Enter a first name');
    await expect(UserSettingsPage.saveBtn).toBeDisabled();
    // Step 3
    await UserSettingsPage.clearLastNameInput();
    await expect(UserSettingsPage.lastNameWarning).toBeDisplayed();
    await expect(UserSettingsPage.lastNameWarning).toHaveText('Enter a last name');
    await expect(UserSettingsPage.saveBtn).toBeDisabled();
  })

  it('Test case #1-15 User email changing with invalid data', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnMyAccount();
    await expect(browser).toHaveUrl('http://localhost:3000/user/settings');
    // Step 2
    await UserSettingsPage.clearEmailInput();
    await expect(UserSettingsPage.emailWarning).toBeDisplayed();
    await expect(UserSettingsPage.emailWarning).toHaveText('Enter an email address');
    await expect(UserSettingsPage.saveBtn).toBeDisabled();
    // Step 3
    await UserSettingsPage.setEmailInput(invalidEmail);
    await expect(UserSettingsPage.inputEmail).toHaveValue(invalidEmail);
    await expect(UserSettingsPage.emailWarning).toBeDisplayed();
    await expect(UserSettingsPage.emailWarning).toHaveText('Must contain a valid email address');
    await expect(UserSettingsPage.saveBtn).toBeDisabled();
  })

  it('Test case #1-16 User phone number changing with invalid data', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnMyAccount();
    await expect(browser).toHaveUrl('http://localhost:3000/user/settings');
    // Step 2
    await UserSettingsPage.clearPhoneNumberInput();
    await expect(UserSettingsPage.phoneNumberWarning).toBeDisplayed();
    await expect(UserSettingsPage.phoneNumberWarning).toHaveText('Enter a phone number');
    await expect(UserSettingsPage.saveBtn).toBeDisabled();
    // Step 3
    await UserSettingsPage.setPhoneNumberInput(invalidPhoneNumber);
    await expect(UserSettingsPage.inputPhoneNumber).toHaveValue(invalidPhoneNumber);
    await expect(UserSettingsPage.phoneNumberWarning).toBeDisplayed();
    await expect(UserSettingsPage.phoneNumberWarning).toHaveText('Phone number is not valid');
    await expect(UserSettingsPage.saveBtn).toBeDisabled();
  })
})

describe('Transactions block', () => {

  it('Test case #1-17 Payment transaction creating', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnNewTransactionBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/transaction/new');
    await expect(TransactionNewPage.usersList).toBeDisplayed();
    const firstUserName = await TransactionNewPage.firstUserName.getText();
    // Step 2
    await TransactionNewPage.clickOnTheFirstUser();
    await expect(TransactionNewPage.paymentForm).toBeDisplayed();
    await expect(TransactionNewPage.paymentForm).toHaveTextContaining(firstUserName);
    // Step 3
    await TransactionNewPage.setAmountInput(randomAmount);
    await expect(TransactionNewPage.amountInput).toHaveValue('$'+randomAmount);
    // Step 4
    await TransactionNewPage.setDescriptionInput(randomDescription);
    await expect(TransactionNewPage.descriptionInput).toHaveValue(randomDescription);
    await expect(TransactionNewPage.payBtn).toBeEnabled();
    const startBalance = await TransactionNewPage.numberOfAccountBalance();
    // Step 5
    await TransactionNewPage.clickOnPayBtn();
    await expect(TransactionNewPage.transactionConfirmation).toHaveText('Paid $'+randomAmount+'.00 for '+randomDescription);
    const endBalance = await TransactionNewPage.numberOfAccountBalance();
    await expect(endBalance).toEqual(startBalance-randomAmount);
  })

  it('Test case #1-18 Request transaction creating', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnNewTransactionBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/transaction/new');
    await expect(TransactionNewPage.usersList).toBeDisplayed();
    const firstUserName = await TransactionNewPage.firstUserName.getText();
    // Step 2
    await TransactionNewPage.clickOnTheFirstUser();
    await expect(TransactionNewPage.paymentForm).toBeDisplayed();
    await expect(TransactionNewPage.paymentForm).toHaveTextContaining(firstUserName);
    // Step 3
    await TransactionNewPage.setAmountInput(randomAmount);
    await expect(TransactionNewPage.amountInput).toHaveValue('$'+randomAmount);
    // Step 4
    await TransactionNewPage.setDescriptionInput(randomDescription);
    await expect(TransactionNewPage.descriptionInput).toHaveValue(randomDescription);
    await expect(TransactionNewPage.requestBtn).toBeEnabled();
    const startBalance = await TransactionNewPage.numberOfAccountBalance();
    // Step 5
    await TransactionNewPage.clickOnRequestBtn();
    await expect(TransactionNewPage.transactionConfirmation).toHaveText('Requested $'+randomAmount+'.00 for '+randomDescription);
    const endBalance = await TransactionNewPage.numberOfAccountBalance();
    await expect(endBalance).toEqual(startBalance);
  })

  it('Test case #1-19 Transaction creating with empty amount field', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnNewTransactionBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/transaction/new');
    await expect(TransactionNewPage.usersList).toBeDisplayed();
    const firstUserName = await TransactionNewPage.firstUserName.getText();
    // Step 2
    await TransactionNewPage.clickOnTheFirstUser();
    await expect(TransactionNewPage.paymentForm).toBeDisplayed();
    await expect(TransactionNewPage.paymentForm).toHaveTextContaining(firstUserName);
    // Step 3
    await TransactionNewPage.setDescriptionInput(randomDescription);
    await expect(TransactionNewPage.descriptionInput).toHaveValue(randomDescription);
    await expect(TransactionNewPage.amountWarning).toBeDisplayed();
    await expect(TransactionNewPage.amountWarning).toHaveText('Please enter a valid amount');
    await expect(TransactionNewPage.payBtn).toBeDisabled();
    await expect(TransactionNewPage.requestBtn).toBeDisabled();
  })

  it('Test case #1-20 Transaction creating with empty note field', async () => {
    // Precondition
    await browser.reloadSession();
    await browser.url(`/signin`);
    await LoginPage.login(userName,userPassword);
    // Step 1
    await HomePage.clickOnNewTransactionBtn();
    await expect(browser).toHaveUrl('http://localhost:3000/transaction/new');
    await expect(TransactionNewPage.usersList).toBeDisplayed();
    const firstUserName = await TransactionNewPage.firstUserName.getText();
    // Step 2
    await TransactionNewPage.clickOnTheFirstUser();
    await expect(TransactionNewPage.paymentForm).toBeDisplayed();
    await expect(TransactionNewPage.paymentForm).toHaveTextContaining(firstUserName);
    // Step 3
    await TransactionNewPage.setAmountInput(randomAmount);
    await expect(TransactionNewPage.amountInput).toHaveValue('$'+randomAmount);
    // Step 4
    await TransactionNewPage.clickOnDescriptionInput();
    await TransactionNewPage.clickOnAmountInput();
    await expect(TransactionNewPage.descriptionWarning).toBeDisplayed();
    await expect(TransactionNewPage.descriptionWarning).toHaveText('Please enter a note');
    await expect(TransactionNewPage.payBtn).toBeDisabled();
    await expect(TransactionNewPage.requestBtn).toBeDisabled();
  })
})

