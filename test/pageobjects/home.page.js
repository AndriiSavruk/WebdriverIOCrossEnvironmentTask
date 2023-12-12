import { $ } from '@wdio/globals'

class HomePage {

    get userFullName () {
        return $('h6[data-test="sidenav-user-full-name"]');
    }

    get logoutLink () {
        return $('div[data-test="sidenav-signout"]');
    }

    get onboardingWindow () {
        return $('div[data-test="user-onboarding-dialog-title"]');
    }

    get bankAccountsLink () {
        return $('a[data-test="sidenav-bankaccounts"]');
    }

    get userSettingsLink () {
        return $('a[data-test="sidenav-user-settings"]');
    }

    get newTransactionBtn () {
        return $('a[data-test="nav-top-new-transaction"]');
    }

    async clickOnLogout () {
        await this.logoutLink.click();
    }

    async clickOnBankAccounts () {
        await this.bankAccountsLink.click();
    }

    async clickOnMyAccount () {
        await this.userSettingsLink.click();
    }

    async clickOnNewTransactionBtn () {
        await this.newTransactionBtn.click();
    }
}

export default new HomePage();