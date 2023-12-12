import { $ } from '@wdio/globals'
import { Key } from 'webdriverio'

class UserSettingsPage {

    get inputFirstName () {
        return $('#user-settings-firstName-input');
    }

    get inputLastName () {
        return $('#user-settings-lastName-input')
    }

    get inputEmail () {
        return $('#user-settings-email-input')
    }

    get inputPhoneNumber () {
        return $('#user-settings-phoneNumber-input')
    }

    get saveBtn () {
        return $('button[data-test="user-settings-submit"]')
    }

    get firstNameWarning () {
        return $('#user-settings-firstName-input-helper-text')
    }

    get lastNameWarning () {
        return $('#user-settings-lastName-input-helper-text')
    }

    get emailWarning () {
        return $('#user-settings-email-input-helper-text')
    }

    get phoneNumberWarning () {
        return $('#user-settings-phoneNumber-input-helper-text')
    }

    get userFullName () {
        return $('h6[data-test="sidenav-user-full-name"]');
    }

    async clickOnSaveBtn () {
        await this.saveBtn.click();
    }

    async setFirstNameInput (value) {
        await this.inputFirstName.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Backspace]);
        await this.inputFirstName.setValue(value);
    }

    async clearFirstNameInput () {
        await this.inputFirstName.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Backspace]);
    }

    async clearLastNameInput () {
        await this.inputLastName.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Backspace]);
    }

    async clearEmailInput () {
        await this.inputEmail.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Backspace]);
    }

    async setEmailInput (value) {
        await this.inputEmail.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Backspace]);
        await this.inputEmail.setValue(value);
    }

    async clearPhoneNumberInput () {
        await this.inputPhoneNumber.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Backspace]);
    }

    async setPhoneNumberInput (value) {
        await this.inputPhoneNumber.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Backspace]);
        await this.inputPhoneNumber.setValue(value);
    }
}

export default new UserSettingsPage();