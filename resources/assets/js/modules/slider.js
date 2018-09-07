//
// Flickity Sliders w/ Progress Indicators
//
export default class slider {
  constructor() {

    var Flickity = require('flickity');
    // var ProgressBar = require('./progress.js');
    
    document.addEventListener('DOMContentLoaded', function () {
      // --------------------------------------------------------------------------
      // # Photo Galleries 

      var pg_sliders = [],
        // slideIndicators = [],
        slideNext = [],
        slidePrev = [],
        pg_slider = '.slider',
        pg_slides = '.js-slider',
        autoPlayDur = 6000;
        // slideNext = document.querySelectorAll('.js_next'),
        // slidePrev = document.querySelectorAll('.js_prev');

      // # Loop Sliders
      Array.prototype.slice.call(document.querySelectorAll(pg_slider)).forEach(function (element, index) {

        // ## Get stuff
        var thisSlider = element.querySelector(pg_slides);
            // thisIndicator = element.querySelector('#slide_timer_indicator');

        // ## Flickity 
        pg_sliders[index] = new Flickity(thisSlider, {
          cellAlign: 'left',
          imagesLoaded: true,
          wrapAround: true,
          autoPlay: autoPlayDur,
          pauseAutoPlayOnHover: true,
          pageDots: true,
          prevNextButtons: false
        });

        // // ## Indicators
        // slideIndicators[index] = new ProgressBar.Circle(thisIndicator, {
        //   strokeWidth: 6,
        //   easing: 'easeInOut',
        //   duration: 1400,
        //   color: '#F34147',
        //   trailColor: 'transparent',
        //   trailWidth: 3,
        //   svgStyle: null,
        //   duration: 5000
        // });

        // // ### Start Indicator
        // slideIndicators[index].set(0);
        // slideIndicators[index].animate(1);

        // // ### Update Indicator on Slide Change
        // pg_sliders[index].on( 'scroll', function() {
        //   slideIndicators[index].set(0);
        //   slideIndicators[index].animate(1);
        // });

        // // ### Interactions: Slider Arrows
        // slideNext[index].addEventListener('click', function(){
        //   pg_sliders[index].next();
        // });

        // slidePrev[index].addEventListener('click', function(){
        //   pg_sliders[index].previous();
        // });

        // ### Interactions: Slider Hover
        // mouseover 
        element.addEventListener('mouseover', function(e) {
          pg_sliders[index].pausePlayer();
          // slideIndicators[index].stop();
        }); 
        
        // mouseout
        element.addEventListener('mouseout', function(e) {
          pg_sliders[index].unpausePlaye
          // slideIndicators[index].animate(1);
        });

      });

    });

  }
}