//
// WEAT, Built by Telegraph
//

// ## Lazysizes (Images)
require("./vendor/lazysizes.js");

// ## On Call Imports (called with `data-module` attr. as needed)
import './modules'

// ## Smooth Scroll
import smooth from './modules/smoothScroll';
smooth();

// ## SVG 4 Everybody
var svg4everybody = require("./vendor/svg4everybody.min.js");
svg4everybody({
	polyfill: true // polyfill <use> elements for External Content
});

// ## If IE 11
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if(isIE11){

	document.querySelector('html').classList.add('is-ie11');
}

console.log('WEAT, Built by Telegraph');