import assert from "assert"
import DetailPage from "../../pageObjects/detail.page"
import ProductPage from "../../pageObjects/product.page"
import Basket from "../../pageObjects/basket.page"


const removefrombasket = function () {

    this.Then(/^I add a random product to the basket$/, () => {
        DetailPage.selectProduct()
        ProductPage.isProductPage()
        ProductPage.selectAvailableSize()
        ProductPage.changeQuant()
        ProductPage.addToBag()
        ProductPage.isAddedToBag()        
    })
    
    this.When(/^I open the basket and remove the added product$/, () => {
        ProductPage.goToBag()
        Basket.removefromBag()
    })

    this.Then(/^my basket should be empty$/, () => {
        assert.ok(Basket.isBasketEmpty())
    })
}

module.exports = removefrombasket