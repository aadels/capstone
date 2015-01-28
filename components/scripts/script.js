$(document).ready(function () {
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
      left: -25vw
    }, 
    {
      left: 75vw,
      ease: Back.easeOut
    }
  );

  var flufftween = TweenMax.staggerFromTo('#westminster .smpic', 4, 
    { 
      left: 400,
      opacity: 0, 
      scale: 1
    }, 
    {
      delay: 1,
      left: 400,
      opacity: 1, 
      scale: 1,
      ease: Back.easeOut
    }
);
  var flufftween2 = TweenMax.staggerFromTo('#westminster .smpic', 5, 
    { 
      left: 400,
      opacity: 1, 
      scale: 1
    }, 
    {
      left: 400,
      delay: 25,
      opacity: 0, 
      scale: 1,
      ease: Back.easeOut
    }
);  
    var fluffguytween = TweenMax.staggerFromTo('#westminster .lgpic', .5, 
    { 
      left: 1800
    }, 
    {
      left: 800,
      delay: .5,
      ease: Cubic.easeOut
    }
  );
    var fluffdancertween = TweenMax.staggerFromTo('#westminster .lgpic2', .5, 
    { 
      left: -1800
    }, 
    {
      left: -400,
      delay: 2,
      ease: Cubic.easeOut
    }
  );

    var buildingtween1 = TweenMax.staggerFromTo('#victoria .bldgpic1', .5, 
    { 
      left: -1800
    }, 
    {
      left: 1390,
      delay: 1,
      ease: Cubic.easeOut
    }
  );
  var buildingtween2 = TweenMax.staggerFromTo('#victoria .bldgpic2', 1, 
    { 
      left: -1800
    }, 
    {
      left: 991,
      delay: 2,
      ease: Cubic.easeOut
    }
  );
  var buildingtween3 = TweenMax.staggerFromTo('#victoria .bldgpic3', 1.5, 
    { 
      left: -1800
    }, 
    {
      left: 592,
      delay: 3,
      ease: Cubic.easeOut
    }
  );

    var buildingtween4 = TweenMax.staggerFromTo('#victoria .bldgpic4', 2, 
    { 
      left: -1800
    }, 
    {
      left: 193,
      delay: 4,
      ease: Cubic.easeOut
    }
  );


 
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({triggerElement: '#attractions', duration: 200}) 
    .setTween(attractionstween)
    .addTo(controller);
  
  var scene1a = new ScrollScene({triggerElement: '#westminster', duration: 1000}) 
    .setTween(flufftween)
    .addTo(controller);

  var scene1b = new ScrollScene({triggerElement: "#westminster", duration: 8000})
    .setPin("#westminster")
    .setTween(fluffguytween)
    .addTo(controller);

  var scene1c = new ScrollScene({triggerElement: '#westminster', duration: 8000}) 
    .setTween(fluffdancertween)
    .addTo(controller);

  var scene1d = new ScrollScene({triggerElement: '#westminster', duration: 8000}) 
    .setTween(flufftween2)
    .addTo(controller);

  var scene2a = new ScrollScene({triggerElement: '#victoria', duration: 8000}) 
    .setPin("#victoria")
    .setTween(buildingtween1)
    .addTo(controller);

  var scene2b = new ScrollScene({triggerElement: '#victoria', duration: 7000}) 
    .setTween(buildingtween2)
    .addTo(controller);

  var scene2c = new ScrollScene({triggerElement: '#victoria', duration: 6000}) 
    .setTween(buildingtween3)
    .addTo(controller);

  var scene2d = new ScrollScene({triggerElement: '#victoria', duration: 5000}) 
    .setTween(buildingtween4)
    .addTo(controller);

    // parallax
    var parallaxController = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onEnter", duration: $(window).height()*2}
  });
  
  var parallaxscene1 = new ScrollScene({triggerElement: "#picadilly"})
    .setTween(TweenMax.from("#picadilly > div", 1, {top: "-80%", ease: Linear.easeNone}))
    .addTo(parallaxController)
    .addIndicators({zindex: 1, suffix: "1"});

  var parallaxscene2 = new ScrollScene({triggerElement: "#oxford"})
    .setTween(TweenMax.from("#oxford > div", 1, {top: "-80%", ease: Linear.easeNone}))
    .addTo(parallaxController) 
    .addIndicators({zindex: 1, suffix: "2"}); 

   
}); //on load