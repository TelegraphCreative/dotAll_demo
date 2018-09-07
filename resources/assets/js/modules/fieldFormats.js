//
// Format Fields
//
export default class fieldFormats {
	constructor(el){
		this.el = el;
		var SmoothScroll = require("../vendor/cleave.js");
		var cleave_card = new Cleave(el, {
		    creditCard: true
		});
	}
}