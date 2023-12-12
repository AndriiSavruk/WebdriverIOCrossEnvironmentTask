import { $ } from '@wdio/globals'

class TransactionNewPage {

    get usersList () {
        return $('ul[data-test="users-list"]');
    }

    get firstUser () {
        return this.usersList.$$('//*[@id="root"]/div/main/div[2]/div/div/div[2]/ul/li[1]')[0];
    }

    get firstUserName () {
        return $('//*[@id="root"]/div/main/div[2]/div/div/div[2]/ul/li[1]/div[2]/span');
    }

    get paymentForm () {
        return $('//*[@id="root"]/div/main/div[2]/div/div/div[2]');
    }

    get amountInput () {
        return $('#amount');
    }

    get descriptionInput () {
        return $('#transaction-create-description-input');
    }

    get payBtn () {
        return $('button[data-test="transaction-create-submit-payment"]');
    }

    get requestBtn () {
        return $('button[data-test="transaction-create-submit-request"]');
    }

    get transactionConfirmation () {
        return $('//*[@id="root"]/div/main/div[2]/div/div/div[2]/div[2]/div/div/h2');
    }

    get accountBalance () {
        return $('h6[data-test="sidenav-user-balance"]');
    }

    get amountWarning () {
        return $('#transaction-create-amount-input-helper-text');
    }

    get descriptionWarning () {
        return $('#transaction-create-description-input-helper-text');
    }

    async clickOnTheFirstUser() {
        await this.firstUser.click();
    }

    async setAmountInput(value) {
        await this.amountInput.setValue(value);
    }

    async setDescriptionInput(value) {
        await this.descriptionInput.setValue(value);
    }

    async clickOnPayBtn() {
        await this.payBtn.click();
    }

    async clickOnRequestBtn() {
        await this.requestBtn.click();
    }

    async numberOfAccountBalance() {
        const num = (await this.accountBalance).getText();
        return Number(num);
    }

    async clickOnAmountInput() {
        (await this.amountInput).click();
    }
    async clickOnDescriptionInput() {
        await this.descriptionInput.click();
    }

}

export default new TransactionNewPage();