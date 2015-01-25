$(function() {
  var topoffset = 43;

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }) //on resize


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  //highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#hotelinfo').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#hotelinfo"]').addClass('active');
    } //windowpos

    if (windowpos > $('#rooms').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

    if (windowpos > $('#dining').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#dining"]').addClass('active');
    } //windowpos

    if (windowpos > $('#events').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#events"]').addClass('active');
    } //windowpos

    if (windowpos > $('#attractions').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#attractions"]').addClass('active');
    } //windowpos

  }); //window scroll
  
  //set up ScrollMagic

  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  // Animation will be ignored and replaced by scene value in this example
  var attractionstween = TweenMax.staggerFromTo('#attractions .lgpic', .5, 
    { 
      left: -700
    }, 
    {
      left: 700,
      ease: Back.easeOut
    }
  );
    var westminstertween = TweenMax.staggerFromTo('#westminster .lgpic', 2, 
    { 
      left: -700
    }, 
    {
      left: 700,
      ease: Back.easeOut
    }
  );
  
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({triggerElement: '#attractions', duration: 200}) 
    .setTween(attractionstween)
    .addTo(controller);

  var scene2 = new ScrollScene({triggerElement: "#westminster", duration: 2400})
          .setPin("#westminster")
          .setTween(westminstertween)
          .addTo(controller);

  /*var scene3 = new ScrollScene({triggerElement: '#westminster', duration: 500}) 
    .setTween(westminstertween)
    .addTo(controller);

  // show indicators (requires debug extension)
  //scene.addIndicators();*/
   
}); //on load