  $(document).ready(function($) {
  var topoffset = 43;

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height & width
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.75height').css('height', wheight * .75);
  $('.panelpic').css('width', wwidth * .25);

  $(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.75height').css('height', wheight * .75);
  $('.panelpic').css('width', wwidth * .25);

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
  
//init controller for Fluff and Building Tweens
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

//Create tweens
  
  //community page tweens
  var flufftween = TweenMax.staggerFromTo('#community .smpic', 4, 
    { 
      left: 800,
      opacity: 0 
    }, 
    {
      delay: 1,
      left: 800,
      opacity: 1, 
      ease: Back.easeOut
    }
  );

  var flufftween2 = TweenMax.staggerFromTo('#community .smpic', 5, 
    { 
      left: 1000,
      opacity: 1 
    }, 
    {
      left: 1000,
      delay: 25,
      opacity: 0, 
      ease: Back.easeOut
    }
  );  
  
  var fluffguytween = TweenMax.staggerFromTo('#community .lgpic', .5, 
    { 
      left: 2600
    }, 
    {
      left: 1000,
      delay: .5,
      ease: Cubic.easeOut
    }
  );

  var fluffdancertween = TweenMax.staggerFromTo('#community .lgpic2', .5, 
    { 
      left: -4000
    }, 
    {
      left: -300,
      delay: 2,
      ease: Cubic.easeOut
    }
  );

  ////Create scenes, set pins, trigger when images are visible, and add to controller
  var scene1a = new ScrollScene({triggerElement: '#community', duration: 1000}) 
    .setTween(flufftween)
    .addTo(controller);

  var scene1b = new ScrollScene({triggerElement: "#community", duration: 10000})
    .setPin("#community")
    .setTween(fluffguytween)
    .addTo(controller);

  var scene1c = new ScrollScene({triggerElement: '#community', duration: 8000}) 
    .setTween(fluffdancertween)
    .addTo(controller);

  var scene1d = new ScrollScene({triggerElement: '#community', duration: 9000}) 
    .setTween(flufftween2)
    .addTo(controller);

  /*business tweens variables
  establish current slide index at start*/
  var rightPositionStart;
  var leftPositionStart;
  var rightPositionEnd1;
  var rightPositionEnd2;
  var rightPositionEnd3;
  var rightPositionEnd4;
  var leftPositionEnd1;
  var leftPositionEnd2;
  var leftPositionEnd3;
  var leftPositionEnd4;

  rightPositionStart = 150;
  rightPositionEnd1 = 75;
  rightPositionEnd2 = 50;
  rightPositionEnd3 = 25;
  rightPositionEnd4 = 0;

  leftPositionStart = 125;
  leftPositionEnd1 = -50;


   //business tweens
    var colortween1 = TweenMax.staggerFromTo('#business #red', 7, 
    { 
      opacity: 0
    }, 
    {
      opacity: .75,
      delay: 2,
    }
  );
  var buildingtween1 = TweenMax.staggerFromTo('#business #mural', 3, 
    { 
      right:rightPositionStart + "%" 
    }, 
    {
      right:rightPositionEnd1 + "%",
      delay: 11,
      ease: Cubic.easeOut
    }
  );

  var buildingtween2 = TweenMax.staggerFromTo('#business #scatv', 4, 
    { 
      right:rightPositionStart + "%"

    }, 
    {
      right:rightPositionEnd2 + "%",
      delay: 11,
      ease: Cubic.easeOut
    }
  );

  var buildingtween3 = TweenMax.staggerFromTo('#business #mamagina', 5, 
    { 
      right:rightPositionStart + "%"
    }, 
    {
      right:rightPositionEnd3 + "%",
      delay: 11,
      ease: Cubic.easeOut
    }
  );

  var buildingtween4 = TweenMax.staggerFromTo('#business #grooves', 10, 
    { 
      right:rightPositionStart + "%"
    }, 
    {
      right:rightPositionEnd4 + "%",
      delay: 11,
      ease: Cubic.easeOut
    }
  );

    var colortween2 = TweenMax.staggerFromTo('#business #greyblue', 15, 
    { 
      left:leftPositionStart + "%" 
    }, 
    {
      left:leftPositionEnd1 + "%",
      delay: 20,
      ease: Cubic.easeOut
    }
  );
  
  //Create scenes, set pins, trigger when images are visible, and add to controller
  var scene2 = new ScrollScene({triggerElement: '#business', duration: 70000}) 
    .setPin("#business")
    .addTo(controller);

  var scene2a = new ScrollScene({triggerElement: '#business', duration: 6000}) 
    .setTween(colortween1)
    .addTo(controller);

  var scene2b = new ScrollScene({triggerElement: '#business', duration: 9000}) 
    .setTween(buildingtween1)
    .addTo(controller);

  var scene2c = new ScrollScene({triggerElement: '#business', duration: 8000}) 
    .setTween(buildingtween2)
    .addTo(controller);

  var scene2d = new ScrollScene({triggerElement: '#business', duration: 7000}) 
    .setTween(buildingtween3)
    .addTo(controller);

  var scene2e = new ScrollScene({triggerElement: '#business', duration: 6000}) 
    .setTween(buildingtween4)
    .addTo(controller);

  var scene2f = new ScrollScene({triggerElement: '#business', duration: 40000}) 
    .setTween(colortween2)
    .addTo(controller);


/*Create Parallax controller
  var parallaxController = new ScrollMagic({
    globalSceneOptions: {
    triggerHook: "onEnter", duration: wheight *2}
  });
  
  //Create Parallax Tweens, 
  /*var parallaxtween1 = TweenMax.from("#housing > div", 1, 
    {top: "-80%", ease: Linear.easeNone}
  );

  var parallaxtween2 = TweenMax.from("#maps > div", 1, 
    {top: "-80%", ease: Linear.easeNone}
  );

  //Create scenes and add to controller
  var parallaxscene1 = new ScrollScene({triggerElement: "#housing"})
    .setTween(parallaxtween1)
    .addTo(parallaxController)
    .addIndicators({zindex: 1, suffix: "1"});

  var parallaxscene2 = new ScrollScene({triggerElement: "#maps"})
    .setTween(parallaxtween2)
    .addTo(parallaxController) 
    .addIndicators({zindex: 1, suffix: "2"}); */

    //other parallax tween setup

  // init controller
  var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

  new ScrollScene({triggerElement: "#housing"})
    .setTween(TweenMax.from("#housing > div", 1, {top: "-80%", ease: Linear.easeNone}))
    .addTo(controller);
    //.addIndicators({zindex: 1, suffix: "1"});

  new ScrollScene({triggerElement: "#maps"})
    .setTween(TweenMax.from("#maps > div", 1, {top: "-80%", ease: Linear.easeNone}))
    .addTo(controller);
    //.addIndicators({zindex: 1, suffix: "2"});
  
}); //on load