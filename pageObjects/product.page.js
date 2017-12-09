import Page from "./parent.page"


class ProductPage extends Page {

    constructor() {
        super()
        this.availableSize = ".ProductSizes-item:not(.is-outOfStock)"
        this.quantityOption = "#productQuantity > option"
        this.addToBagButton = ".AddToBag"
        this.addToBagModal = ".AddToBag-modal"
        this.viewBagButton = ".AddToBagConfirm-viewBag"
        this.continueButton = ".MiniBag-continueButton"
    }
        
    selectAvailableSize () {
        browser.waitForVisible(this.availableSize)
        browser.click(this.availableSize)
    }
    
    changeQuant () {
        browser.waitForVisible(this.quantityOption)
        browser.click(this.quantityOption)
    }
    
    addToBag () {
        browser.waitForVisible(this.addToBagButton)
        browser.click(this.addToBagButton)
    }

    isAddedToBag () {
        return browser.waitForVisible(this.addToBagModal)
    }
        
    goToBag () {
        browser.waitForVisible(this.viewBagButton)
        browser.click(this.viewBagButton)
        browser.waitForVisible(this.continueButton)
    }
    
    isProductPage() {
        return browser.waitForVisible(this.addToBagButton)
    }

}

export default new ProductPage()