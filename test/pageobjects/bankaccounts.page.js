import { $ } from '@wdio/globals'

class BankAccountsPage {

    get createBtn () {
        return $('a[data-test="bankaccount-new"]');
    }

    get bankAccountsList () {
        return $('ul[data-test="bankaccount-list"]');
    }

    async clickOnCreateBtn () {
        await this.createBtn.click();
    }
}

export default new BankAccountsPage();