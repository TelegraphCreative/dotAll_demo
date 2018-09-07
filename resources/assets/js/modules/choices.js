//
// Choices 
//
export default class choices {
  constructor(el) {

	    var Choices = require("../vendor/choices.js");
	    this.el = el;

	    const choicesDefault = new Choices(el, {
	    	searchEnabled: false,
	    	shouldSort: false
	    });

	}
}