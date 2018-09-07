export default class toggleTarget{
	constructor(el) {
		this.el = el;
		var target = el.getAttribute('data-target'),
				Target = document.querySelector('.'+target),
				Cover = document.querySelector('[data-module="togglesClose"]'),
				c = 'active'

		el.addEventListener('click', function(){
			// # Open Menu
			if (!el.classList.contains(c)) {
				el.classList.add(c);
				Target.classList.add(c)
				setTimeout(function() {
        	Cover.classList.add(c);
        }, 100);
			} 

			// # Close Menu
			else {
				el.classList.remove(c);
				Target.classList.remove(c);
				Cover.classList.remove(c);
			}
		})

	}
}