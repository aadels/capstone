$(document).ready(function () {
  var topoffset = 43;

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height & width
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.bldgpic').css('width', wwidth * .25);

  $(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.bldgpic').css('width', wwidth * .25);
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

  /*highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#community').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

     if (windowpos > $('#housing').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

         if (windowpos > $('#oxford').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

         if (windowpos > $('#business').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

    if (windowpos > $('#attractions').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#attractions"]').addClass('active');
    } windowpos

  }); //window scroll*/
  
  //set up ScrollMagic

  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  // Animation will be ignored and replaced by scene value in this example

  var flufftween = TweenMax.staggerFromTo('#community .smpic', 4, 
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
  var flufftween2 = TweenMax.staggerFromTo('#community .smpic', 5, 
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
    var fluffguytween = TweenMax.staggerFromTo('#community .lgpic', .5, 
    { 
      left: 1800
    }, 
    {
      left: 800,
      delay: .5,
      ease: Cubic.easeOut
    }
  );

    var fluffdancertween = TweenMax.staggerFromTo('#community .lgpic2', .5, 
    { 
      left: -1800
    }, 
    {
      left: -400,
      delay: 2,
      ease: Cubic.easeOut
    }
  );

    /*establish current slide index at start
var leftPositionStart;
var leftPositionEnd;


//animate slides in accordance with buttons pressed in navigation
buttonBritney.addEventListener("click", function() {
leftPositionStart = -25;
TweenLite.to(slideContainer, 2, {left:leftPosition + "%"});
}, false);*/

var rightPositionStart;

rightPositionStart = 150;
rightPositionEnd1 = 75;
rightPositionEnd2 = 50;
rightPositionEnd3 = 25;
rightPositionEnd4 = 0;

    var buildingtween1 = TweenMax.staggerFromTo('#business .bldgpic1', .5, 
    { 
      right:rightPositionStart + "%" 
    }, 
    {
      right:rightPositionEnd1 + "%",
      delay: 1,
      ease: Cubic.easeOut
    }
  );

    var buildingtween2 = TweenMax.staggerFromTo('#business .bldgpic2', 1, 
    { 
      right:rightPositionStart + "%"

    }, 
    {
      right:rightPositionEnd2 + "%",
      delay: 1,

      ease: Cubic.easeOut
    }
  );

    var buildingtween3 = TweenMax.staggerFromTo('#business .bldgpic3', 1.5, 
    { 
      right:rightPositionStart + "%"
    }, 
    {
      right:rightPositionEnd3 + "%",
      delay: 1,
      ease: Cubic.easeOut
    }
  );

    var buildingtween4 = TweenMax.staggerFromTo('#business .bldgpic4', 2, 
    { 
      right:rightPositionStart + "%"
    }, 
    {
      right:rightPositionEnd4 + "%",
      delay: 1,
      ease: Cubic.easeOut
    }
  );
  

 
  // Create the Scene and trigger when visible
  
  var scene1a = new ScrollScene({triggerElement: '#community', duration: 1000}) 
    .setTween(flufftween)
    .addTo(controller);

  var scene1b = new ScrollScene({triggerElement: "#community", duration: 8000})
    .setPin("#community")
    .setTween(fluffguytween)
    .addTo(controller);

  var scene1c = new ScrollScene({triggerElement: '#community', duration: 8000}) 
    .setTween(fluffdancertween)
    .addTo(controller);

  var scene1d = new ScrollScene({triggerElement: '#community', duration: 8000}) 
    .setTween(flufftween2)
    .addTo(controller);

  var scene2a = new ScrollScene({triggerElement: '#business', duration: 8000}) 
    .setPin("#business")
    .setTween(buildingtween1)
    .addTo(controller);

  var scene2b = new ScrollScene({triggerElement: '#business', duration: 7000}) 
    .setTween(buildingtween2)
    .addTo(controller);

  var scene2c = new ScrollScene({triggerElement: '#business', duration: 6000}) 
    .setTween(buildingtween3)
    .addTo(controller);

  var scene2d = new ScrollScene({triggerElement: '#business', duration: 5000}) 
    .setTween(buildingtween4)
    .addTo(controller);

    // parallax
    var parallaxController = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onEnter", duration: $(window).height()*2}
  });
  
  var parallaxscene1 = new ScrollScene({triggerElement: "#housing"})
    .setTween(TweenMax.from("#housing > div", 1, {top: "-80%", ease: Linear.easeNone}))
    .addTo(parallaxController)
    .addIndicators({zindex: 1, suffix: "1"});

  var parallaxscene2 = new ScrollScene({triggerElement: "#maps"})
    .setTween(TweenMax.from("#maps > div", 1, {top: "-80%", ease: Linear.easeNone}))
    .addTo(parallaxController) 
    .addIndicators({zindex: 1, suffix: "2"}); 

   
}); //on load