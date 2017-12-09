export default class Page {
	// Heritance allows me to share 1 selector across 2 different page objects.
	constructor() {
	    this.productImage = ".ProductImages-image "
	}

	open(path) {
		browser.url(path)
	}
}