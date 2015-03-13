'use strict';

// Set element height based on height of reference element
function sliderHeight() {
  var maxHeight = Math.max.apply(null, $('div.slidesjs-slide').map(function (){
    return $(this).height();
  }).get());
  $('.slidesjs-container').css('height', maxHeight + 16);
  $('.slidesjs-control').css('height', maxHeight + 32);
}
$(window).load(function() {
  $('.flexslider').flexslider({
    slideshow: false,
    prevText: ' ',
    nextText: ' '
  });
});
// Reset heights/positions on window resize
$(window).resize(function() {
  sliderHeight();
});

$(window).on( 'orientationchange', function() {
  sliderHeight();
});
