//
// Choices 
//


export default class choices {
  constructor(el) {

		var Choices = require("../vendor/choices.js");
		this.el = el;

    const choicesAsLinks = new Choices(el, {
    	searchEnabled: false,
    	shouldSort: false,
    	shouldSortItems: false
    });

		choicesAsLinks.passedElement.addEventListener('choice', function(event) {
		  window.location.href=event.detail.choice.value
		}, false);

	}
}