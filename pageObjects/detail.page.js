import { config } from "./../wdio.conf.js"
import Page from "./parent.page"

class DetailPage extends Page {
        
    productExists () {
        return browser.waitForExist(".ProductImages-image ", 7000)
    }

    searchUrlWasApplied (product) {
        return browser.getUrl() == `${config.baseUrl}/search/?q=${decodeURIComponent(product)}`
    }

    selectProduct () {
        browser.waitForVisible(".ProductImages-image")
        browser.click(".ProductImages-image")
    }

    filterButtonExists () {
        return browser.waitForVisible(".Filters-refineButton")
    }

    checkTitle (product) {
        return browser.getText(".PlpHeader-title").trim().toLowerCase() === product.trim().toLowerCase()
    }
}

export default new DetailPage()