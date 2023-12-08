import { $ } from '@wdio/globals'

class LoginPage {
    
    get inputUserName () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSignIn () {
        return $('button[data-test="signin-submit"]');
    }

    get warningMessage () {
        return $('div[data-test="signin-error"]')
    }

    async login (username, password) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

    async setUserNameInput (value) {
        await this.inputUserName.setValue(value)
    }

    async setPasswordInput(value) {
        await this.inputPassword.setValue(value)
    }

    async clickOnBtnSignIn () {
        await this.btnSignIn.click();
    }

}

export default new LoginPage();
