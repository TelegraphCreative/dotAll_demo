//
// Number Input Spinners
//

export default class spinners {
	constructor(){
		
		// # Elements
		var Spinner_group = document.querySelectorAll('.spinner-group'),
				spinner_decr = '.spinner__decr',
				spinner_incr = '.spinner__incr',
				spinner = '.spinner';

		// # Loop
		Array.prototype.slice.call(Spinner_group).forEach(function (element, index) {
			
			// ## Elements
			var Decr = element.querySelector(spinner_decr),
					Incr = element.querySelector(spinner_incr),
					Spinner = element.querySelector(spinner);
			
			// ## Behavior: Decrease
			Decr.addEventListener('click', function(){
				var cur_val = parseFloat(Spinner.value);

				if (cur_val >= 1) {
					Spinner.value = cur_val-1;
				}
			});

			// ## Behavior: Increase
			Incr.addEventListener('click', function(){
				var cur_val = parseFloat(Spinner.value),
						max_val = parseFloat(Spinner.getAttribute('max'));

				if (cur_val < max_val) {
					Spinner.value = cur_val+1
				}
			});
		});

	}
}