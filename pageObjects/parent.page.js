export default class Page {
	// Currently, this class does nothing. I included it to demonstrate heritance
	// which is possible with ES6 modules.
	constructor() {
		this.title = 'My Page';
	}

	open(path) {
		browser.url(path);
	}
}