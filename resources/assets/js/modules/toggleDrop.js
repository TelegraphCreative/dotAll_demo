//
// Toggle Drop
//

export default class toggleDrop {
  constructor(el) {

  	// # Structure:
  	// ul
  	//   li > a[data-module="toggleDrop"].drop__toggle > ul > li*2 > a

    // # Elements
    this.el = el;
    var c = 'active',
    		Cover = document.querySelector('[data-module="togglesClose"]'),
    		Toggles = document.querySelectorAll('[data-module="toggleDrop"]');

    // # Dropdown
    el.addEventListener("click", function(evt) {

    		evt.preventDefault();

    		var This_Parent = el.parentNode;

	      if (!This_Parent.classList.contains(c)) {
		      	// Close other (all) Toggles
				  	Array.prototype.slice.call(Toggles).forEach(function (toggle) {
							toggle.parentNode.classList.remove(c);
						});
	          This_Parent.classList.add(c);
	          setTimeout(function() {
	          	Cover.classList.add(c);
	          }, 100);
	          
	      } else {
	          This_Parent.classList.remove(c);
	          Cover.classList.remove(c);
	      }

	      


    });

  }
}