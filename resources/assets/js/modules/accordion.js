//
// Accordion
//

export default class accordion {
	constructor(){
		
		// # Elements
		var Item = document.querySelectorAll('.js-accordion-item'),
				toggle = '.js-accordion-toggle',
				header = '.item__header',
				content = '.item__content',
				c =  'active';

		// # Loop
		Array.prototype.slice.call(Item).forEach(function (element, index) {
			
			// ## Elements
			var Toggle = element.querySelector(toggle),
					Header = element.querySelector(header),
					Content = element.querySelector(content);
			
			// ## Behavior: Click Toggle
			Toggle.addEventListener('click', function(){

				// ### State: Active
				if (!element.classList.contains(c)) {
					element.classList.add(c);
				} 
				// ### State: Inactive
				else {
					element.classList.remove(c);
				}
				
			});

		});

	}
}