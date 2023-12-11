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

    async clickOnLogout () {
        await this.logoutLink.click();
    }
}

export default new HomePage();