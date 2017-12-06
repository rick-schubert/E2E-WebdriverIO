import assert from "assert"
import DetailPage from "../../pageObjects/detail.page"
import ProductPage from "../../pageObjects/product.page"
import Basket from "../../pageObjects/basket.page"

const addtobasket = function () {
    
    this.Given(/^I select a random product from the returned list$/, () => {
        DetailPage.selectProduct()
        assert.ok(ProductPage.isProductPage())
    })

    this.Given(/^I change the product quantity$/, () => {
        ProductPage.selectAvailableSize()
        ProductPage.changeQuant()
    })

    this.When(/^I add the selected product to the basket$/, () => {
        ProductPage.addToBag()
    })

    this.Then(/^I should see the product added to the basket$/, () => {
        ProductPage.isAddedToBag()
    })

    this.Then(/^I should see the selected quantity for the product$/, () => {
        ProductPage.goToBag()
        assert.ok(Basket.checkQuantInBag(1))
    })

}

module.exports = addtobasket