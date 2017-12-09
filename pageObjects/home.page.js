import Page from "./parent.page"


class HomePage extends Page {

    constructor () {
        super()
        this.searchIcon = ".Header-searchIcon"
        this.searchBar = ".SearchBar-queryInput"
        this.searchGoButton = ".SearchBar-iconParent"
    }
    
    access () {
        browser.url('/')
    }
    
    hasLogo () {
        return browser.isVisible('.BrandLogo-img')
    }
    
    searchRandomProd (product) {
        browser.waitForVisible(this.searchIcon)
        browser.click(this.searchIcon)
        browser.waitForVisible(this.searchBar)
        browser.setValue(this.searchBar, product)
        browser.waitForVisible(this.searchGoButton)        
        browser.click(this.searchGoButton)
    }
    
    productExists () {
        return browser.waitForExist(this.productImage)
    }

}

export default new HomePage()