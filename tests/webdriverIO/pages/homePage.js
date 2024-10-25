import basePage from './basePage'

class homePage extends Page {

    get username() { return $('#username') }
    get password() { return $('#password') }
    get submitBtn() { return $('form button[type="submit"]') }
    get flash() { return $('#flash') }
    get headerLinks() { return $$('#header a') }

    open() {
        super.open(baseUrl)
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new LoginPage()