import { $ } from '@wdio/globals'

class HomePage {

    get userFullName () {
        return $('h6[data-test="sidenav-user-full-name"]');
    }

    get logoutLink () {
        return $('div[data-test="sidenav-signout"]');
    }

    async clickOnLogout () {
        await this.logoutLink.click();
    }
}

export default new HomePage();