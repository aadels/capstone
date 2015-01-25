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

    if (windowpos > $('#westminster').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

     if (windowpos > $('#picadilly').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

         if (windowpos > $('#cambridge').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

         if (windowpos > $('#oxford').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

         if (windowpos > $('#victoria').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
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
      left: 800,
      ease: Back.easeOut
    }
  );

  var flufftween = TweenMax.staggerFromTo('#westminster .smpic', 1, 
    { 
      opacity: 0, 
      scale: 0
    }, 
    {
      delay: 1,
      opacity: 1, 
      scale: 1,
      ease: Back.easeOut
    }
  );  
    var fluffguytween = TweenMax.staggerFromTo('#westminster .lgpic', .5, 
    { 
      left: 1500
    }, 
    {
      left: 800,
      delay: 1,
      ease: Cubic.easeOut
    }
  );
    var fluffdancertween = TweenMax.staggerFromTo('#westminster .lgpic2', .5, 
    { 
      left: -1800
    }, 
    {
      left: -400,
      delay: 3,
      ease: Cubic.easeOut
    }
  );
 
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({triggerElement: '#attractions', duration: 200}) 
    .setTween(attractionstween)
    .addTo(controller);

  var scene2 = new ScrollScene({triggerElement: "#westminster", duration: 8000})
    .setPin("#westminster")
    .setTween(flufftween)
    .setTween(fluffguytween)
    .addTo(controller);

  var scene3 = new ScrollScene({triggerElement: '#westminster', duration: 8000}) 
    .setTween(fluffdancertween)
    .addTo(controller);
   
}); //on load