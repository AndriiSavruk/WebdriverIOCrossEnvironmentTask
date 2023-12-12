import { $ } from '@wdio/globals'

class CreateBankAccountPage {

    get inputBankName () {
        return $('#bankaccount-bankName-input');
    }

    get inputBankRoutingNumber () {
        return $('#bankaccount-routingNumber-input');
    }

    get inputBankAccountNumber () {
        return $('#bankaccount-accountNumber-input');
    }

    get saveBtn () {
        return $('button[data-test="bankaccount-submit"]');
    }

    get bankNameWarning () {
        return $('#bankaccount-bankName-input-helper-text');
    }

    get routingNumberWarning () {
        return $('#bankaccount-routingNumber-input-helper-text');
    }

    get accountNumberWarning () {
        return $('#bankaccount-accountNumber-input-helper-text');
    }

    async setBankNameInput (value) {
        await this.inputBankName.setValue(value);
    }

    async setRoutingNumberInput (value) {
        await this.inputBankRoutingNumber.setValue(value);
    }

    async setBankAccountNumberInput (value) {
        await this.inputBankAccountNumber.setValue(value);
    }

    async clickOnSaveBtn () {
        await this.saveBtn.click();
    }
}

export default new CreateBankAccountPage();