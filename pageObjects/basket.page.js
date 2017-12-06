import Page from "./parent.page"

class Basket extends Page {
        
    checkQuantInBag (quant) {
        console.log(quant)
        let quantDisplayed = browser.getText(".OrderProducts-label")
        quantDisplayed = quantDisplayed[0].slice(0, 1)
        return quantDisplayed == quant
    }

    removefromBag () {
        browser.waitForVisible(".OrderProducts-deleteText")
        browser.click(".OrderProducts-deleteText")
        browser.waitForVisible(".OrderProducts-deleteButton")
        browser.click(".OrderProducts-deleteButton")
        browser.waitForVisible(".OrderProducts-modal > button")
        browser.click(".OrderProducts-modal > button") 
    }

    isBasketEmpty () {
        return browser.isVisible(".MiniBag-emptyBag")
    }

}

export default new Basket()