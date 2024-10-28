export default class basePage {
    constructor() {
        this.title = 'KoolIT',
        this.baseUrl = "www.koolit.nl"
    }

    open(path) {
        await browser.url(path)
    }

}