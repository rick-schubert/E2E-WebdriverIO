import Page from "./parent.page"


class Basket extends Page {

    constructor () {
        super()
        this.deleteText = ".OrderProducts-deleteText"
        this.deleteButton = ".OrderProducts-deleteButton"
        this.modalButton = ".OrderProducts-modal > button"
        this.emptyBag = ".MiniBag-emptyBag"
    }
        
    checkQuantInBag (quant) {
        console.log(quant)
        let quantDisplayed = browser.getText(".OrderProducts-label")
        quantDisplayed = quantDisplayed[0].slice(0, 1)
        return quantDisplayed == quant
    }

    removefromBag () {
        browser.waitForVisible(this.deleteText)
        browser.click(this.deleteText)
        browser.waitForVisible(this.deleteButton)
        browser.click(this.deleteButton)
        browser.waitForVisible(this.modalButton)
        browser.click(this.modalButton) 
    }

    isBasketEmpty () {
        return browser.isVisible(".MiniBag-emptyBag")
    }

}

export default new Basket()