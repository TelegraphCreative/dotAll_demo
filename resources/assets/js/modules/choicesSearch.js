//
// Choices 
//
export default class choices {
  constructor(el) {

	    var Choices = require("../vendor/choices.js");
	    this.el = el;
	    const choicesAsLinks = new Choices(el, {
	    	searchEnabled: true
	    });

	}
}