import Page from "./parent.page"

class HomePage extends Page {
    
    access () {
        browser.url('/')
    }
    
    hasLogo () {
        return browser.isVisible('.BrandLogo-img')
    }
    
    searchRandomProd (product) {
        browser.waitForVisible(".Header-searchIcon")
        browser.click(".Header-searchIcon")
        browser.waitForVisible(".SearchBar-queryInput")
        browser.setValue(".SearchBar-queryInput", product)
        browser.waitForVisible(".SearchBar-iconParent")        
        browser.click(".SearchBar-iconParent")
    }
    
    productExists () {
        return browser.waitForExist(".ProductImages-image ", 7000)
    }

}

export default new HomePage()