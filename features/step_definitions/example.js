import assert from "assert"
import HomePage from "../../pageObjects/home.page"

const example = function () {
    
    this.When(/^I am on the landing page$/, () => {
        HomePage.access()
    })

    this.Then(/^I can see logo in navigation bar$/, () => {
        assert.ok(HomePage.hasLogo())
    })

}

module.exports = example