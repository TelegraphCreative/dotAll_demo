//
// Main Menu
//

export default class mainMenu {
  constructor(el) {
    //
    // Imports
    //
    // var Velocity = require('velocity-animate');

    //
    // # Elements
    //
    this.el = el;
    var Drop_Toggle = el.querySelectorAll('.drop__toggle'),
        List_Toggles = el.querySelectorAll('.drop-menu__toggle-list'),
        Body = document.querySelector('body'),
        c = 'active',
        c2 = 'menu-open';

    
    //
    // # Events
    //
    document.addEventListener("click", function(evt) {  

        // ## Dropdowns Drawers
        Array.prototype.slice.call(Drop_Toggle).forEach(function (element) {
            var This_ = element,
                This_Parent = This_.parentNode,
                targetElement = evt.target;  // clicked element
            do {
                if (targetElement == This_) {
                    // Open Drop (clicked inside)
                    evt.preventDefault();
                    if (!This_Parent.classList.contains(c)) {
                        This_Parent.classList.add(c);
                    } else {
                        This_Parent.classList.remove(c);
                    }
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);

            // Close Drop (clicked outside)
            This_Parent.classList.remove(c);
        });
    });


  
    // ## List Toggles
    Array.prototype.slice.call(List_Toggles).forEach(function (element) {
        element.addEventListener("click", function(evt) {
            var This_List = element.nextSibling.nextSibling;
            console.log(This_List)
            if (!This_List.classList.contains(c)) {
                element.classList.add(c);
                This_List.classList.add(c);
            } else {
                element.classList.remove(c);
                This_List.classList.remove(c);
            }
        });
    });
  }
}