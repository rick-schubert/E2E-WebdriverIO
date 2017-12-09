import { config } from "./../wdio.conf.js"
import Page from "./parent.page"


class DetailPage extends Page {

    constructor () {
        super()
        this.refineButton = ".Filters-refineButton"
        this.searchTitle = ".PlpHeader-title"
    }
        
    productExists () {
        return browser.waitForExist(this.productImage)
    }

    searchUrlWasApplied (product) {
        return browser.getUrl() == `${config.baseUrl}/search/?q=${decodeURIComponent(product)}`
    }

    selectProduct () {
        browser.waitForVisible(this.productImage)
        browser.click(this.productImage)
    }

    filterButtonExists () {
        return browser.waitForVisible(this.refineButton)
    }

    checkTitle (product) {
        return browser.getText(".PlpHeader-title").trim().toLowerCase() === product.trim().toLowerCase()
    }
}

export default new DetailPage()