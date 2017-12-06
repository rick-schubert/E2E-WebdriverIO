import assert from "assert"
import HomePage from "../../pageObjects/home.page"
import DetailPage from "../../pageObjects/detail.page"


const searchforproduct = function () {

    this.When(/^I search for a random product$/, () => {
        HomePage.searchRandomProd("skirt")
        DetailPage.productExists()
    })

    this.Then(/^the product listing page should display a list of products$/, () => {
        assert.ok(DetailPage.productExists())
    })
    
}

module.exports = searchforproduct