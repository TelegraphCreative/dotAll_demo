export default class togglesClose {
	constructor(el) {

		// # Elements
		var Toggles = document.querySelectorAll('[data-module="toggleDrop"]'),
				Menu = document.querySelector('.main-menu-bar'),
				Cover = document.querySelector('[data-module="togglesClose"]'),
				ToggleTarget = document.querySelector('[data-module="toggleTarget"]'),
				c = 'active';
				this.el = el;

		// # Action
		el.addEventListener("click", function(){
			if (el.classList.contains(c)) {

				// Close Toggles
	  		Array.prototype.slice.call(Toggles).forEach(function (toggle) {
					toggle.parentNode.classList.remove(c);
				});
				
				// Close Main Menu
				Menu.classList.remove(c);
				Cover.classList.remove(c);
				ToggleTarget.classList.remove(c);
			}

    })

	}
}
    