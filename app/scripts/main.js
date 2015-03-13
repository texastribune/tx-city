'use strict';

$(window).load(function() {
  // Menu
  var $menuButton = $('#menu-button');
  var $menuNav = $('#menu');

  $menuButton.on('click', function(e) {
    e.preventDefault();

    if ($menuNav.hasClass('menu-open')) {
      $menuButton.removeClass('x');
    } else {
      $menuButton.addClass('x');
    }

    $menuNav.toggleClass('menu-open');
  });
});

//sets nav to sticky at certain height
$(window).scroll(function () {
  var navHeight = $('.masthead .menu-container').height();
  if( $(window).scrollTop() > navHeight && !($('#menu').hasClass('sticky'))){
    $('#menu').addClass('sticky');
  } else if ($(window).scrollTop() < navHeight){
    $('#menu').removeClass('sticky');
  }
});
