import Page from "./parent.page"

class ProductPage extends Page {
        
    selectAvailableSize () {
        browser.waitForVisible(".ProductSizes-item:not(.is-outOfStock)")
        browser.click(".ProductSizes-item:not(.is-outOfStock)")
    }
    
    changeQuant () {
        browser.waitForVisible("#productQuantity > option")
        browser.click("#productQuantity > option")
    }
    
    addToBag () {
        browser.waitForVisible(".AddToBag")
        browser.click(".AddToBag")
    }

    isAddedToBag () {
        return browser.waitForVisible(".AddToBag-modal")
    }
        
    goToBag () {
        browser.waitForVisible(".AddToBagConfirm-viewBag")
        browser.click(".AddToBagConfirm-viewBag")
        browser.waitForVisible(".MiniBag-continueButton")
    }
    
    isProductPage() {
        return browser.waitForVisible(".AddToBag")
    }

}

export default new ProductPage()