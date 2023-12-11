import { $ } from '@wdio/globals'

class SignUpPage {

    get inputFirstName () {
        return $('#firstName');
    }

    get inputLastName () {
        return $('#lastName');
    }

    get inputUserName () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputConfirmPassword () {
        return $('#confirmPassword');
    }

    get signUpBtn () {
        return $('button[data-test="signup-submit"]');
    }

    get passwordWarning () {
        return $('#password-helper-text');
    }

    get confirmPasswordWarning () {
        return $('#confirmPassword-helper-text');
    }

    get signInLink () {
        return $('//*[@id="root"]/div/main/div[1]/form/div[6]/div/a');
    }

    async setFirstNameInput (value) {
        await this.inputFirstName.setValue(value);
    }

    async setLastNameInput (value) {
        await this.inputLastName.setValue(value);
    }

    async setUserNameInput (value) {
        await this.inputUserName.setValue(value);
    }

    async setUserPassword (value) {
        await this.inputPassword.setValue(value);
    }

    async setConfirmPassword (value) {
        await this.inputConfirmPassword.setValue(value);
    }

    async clickOnSignUpBtn () {
        await this.signUpBtn.click();
    }

    async clickOnSignInLink () {
        await this.signInLink.click();
    }
}

export default new SignUpPage();