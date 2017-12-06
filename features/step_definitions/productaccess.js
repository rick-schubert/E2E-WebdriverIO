import assert from "assert"
import DetailPage from "../../pageObjects/detail.page"

const productaccess = function () {

    this.Then(/^I should be taken to the product detail page$/, () => {
        assert.ok(DetailPage.searchUrlWasApplied("skirt"))
        assert.ok(DetailPage.checkTitle("skirt"))
        assert.ok(DetailPage.filterButtonExists())
    })

}

module.exports = productaccess