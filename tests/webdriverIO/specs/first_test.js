const assert = require('assert')

//make url a variable to be able to test against localhost and against live version


describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
        return expect(title).to.equal('WebdriverIP · Next-gen WebDriver test framework for Node.js')
    })
})



//Test resizing page to check change in element, header change

//Check ppc slidedeck can be slided via button, dot and picture

//Check ppc slidedeck can be played automatically

//Check hover on about me images provides information/text

//Check contact page contains right email and contains the floating cabbage

//Open and close each project on the projects page