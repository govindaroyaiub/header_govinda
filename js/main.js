function parallaxEffectColor(){
  let planet = document.getElementById('planet1');
  let big_island = document.getElementById('big_island');
  let small_island_left = document.getElementById('small_island_left');
  let small_island = document.getElementById('small_island');
  let middle_island = document.getElementById('middle_island');
  let planet2 = document.getElementById('planet2');
  let grass = document.getElementById('grass');
  let cloud1 = document.getElementById('cloud1');
  let cloud2 = document.getElementById('cloud2');
  let sun = document.getElementById('sun');
  let header_text = document.getElementById('header__text');
  let small_flower = document.getElementById('small_flower');
  let big_flower = document.getElementById('big_flower');
  let value = window.scrollY;


  planet.style.marginLeft = value * -0.2 + 'px';
  big_island.style.marginBottom = value * 0.1 + 'px';
  small_island.style.marginBottom = value * 0.01 + 'px';
  small_island_left.style.marginBottom = value * 0.05 + 'px';
  middle_island.style.marginBottom = value * 0.05 + 'px';
  planet2.style.marginLeft = value * 0.2 + 'px';
  // color_cloud.style.marginLeft  = value * -0.25 + 'px';
  // planet2.style.marginBottom  = value * -0.05 + 'px';
  planet2.style.transform = "rotateY(20deg)";
  header_text.style.marginTop = value * 0.45 + 'px';
  grass.style.marginTop = value * -0.09 + 'px';
  sun.style.marginBottom = value * 0.3 + 'px';
}

function parallaxEffectBlackAndWhite(){
  let planetBW = document.getElementById('planet1BW');
  let big_islandBW = document.getElementById('big_islandBW');
  let small_island_leftBW = document.getElementById('small_island_leftBW');
  let small_islandBW = document.getElementById('small_islandBW');
  let middle_islandBW = document.getElementById('middle_islandBW');
  let planet2BW = document.getElementById('planet2BW');
  let grassBW = document.getElementById('grassBW');
  let cloud1BW = document.getElementById('cloud1BW');
  let cloud2BW = document.getElementById('cloud2BW');
  let sunBW = document.getElementById('sunBW');
  let small_flowerBW = document.getElementById('small_flowerBW');
  let big_flowerBW = document.getElementById('big_flowerBW');
  let value = window.scrollY;


  planetBW.style.marginLeft = value * -0.2 + 'px';
  big_islandBW.style.marginBottom = value * 0.1 + 'px';
  small_islandBW.style.marginBottom = value * 0.01 + 'px';
  small_island_leftBW.style.marginBottom = value * 0.05 + 'px';
  middle_islandBW.style.marginBottom = value * 0.05 + 'px';
  planet2BW.style.marginLeft = value * 0.2 + 'px';
  // color_cloud.style.marginLeft  = value * -0.25 + 'px';
  // planet2.style.marginBottom  = value * -0.05 + 'px';
  planet2BW.style.transform = "rotateY(20deg)";
  grassBW.style.marginTop = value * -0.09 + 'px';
  sunBW.style.marginBottom = value * 0.3 + 'px';
}

function headerAnimations(){
  let tHeader = gsap.timeline({})

  tHeader
    .add('head')
    .to('.header__paralax', {
      duration: 0,
      ease: "none",
      onComplete: cloudAnimation
    }, 'head')

    .add('flow', '+=2')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: '3deg',
      ease: "none"
    }, 'flow')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: '3deg',
      ease: "none"
    }, 'flow')

    .add('flow2')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: '-3deg',
      ease: "none"
    }, 'flow2')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: '-3deg',
      ease: "none"
    }, 'flow2')

    .add('flow3')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: 0,
      ease: "none"
    }, 'flow3')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: 0,
      ease: "none"
    }, 'flow3')

    .add('flow4')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: '3deg',
      ease: "none"
    }, 'flow4')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: '3deg',
      ease: "none"
    }, 'flow4')

    .add('flow5')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: '-3deg',
      ease: "none"
    }, 'flow5')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: '-3deg',
      ease: "none"
    }, 'flow5')

    .add('flow6')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: 0,
      ease: "none"
    }, 'flow6')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: 0,
      ease: "none"
    }, 'flow6')

    .add('flow7')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: '3deg',
      ease: "none"
    }, 'flow7')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: '3deg',
      ease: "none"
    }, 'flow7')

    .add('flow8')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: '-3deg',
      ease: "none"
    }, 'flow8')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: '-3deg',
      ease: "none"
    }, 'flow8')

    .add('flow9')
    .to(small_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "46% 100%",
      rotationZ: 0,
      ease: "none"
    }, 'flow9')
    .to(big_flower, {
      duration: 2,
      opacity: 1,
      transformOrigin: "42% 100%",
      rotationZ: 0,
      ease: "none"
    }, 'flow9')


  function cloudAnimation() {
    let tHeader2 = gsap.timeline({})
    tHeader2
      .to('#cloud2', {
        duration: 30,
        x: 150,
        ease: "none"
      }, "+=1")
  }
}

document.addEventListener('readystatechange', function () {
  parallaxEffectColor();
  parallaxEffectBlackAndWhite();
  if (document.readyState === 'complete') {
    // Hide the loading overlay and show the content
    document.getElementById('loader').style.display = 'none';
    document.getElementById('allContents').style.display = 'block';
    $('.header__masking').addClass('mask-layer-animation');
    headerAnimations();
  }
});

$(window).scroll(function () {
  parallaxEffectColor();
  parallaxEffectBlackAndWhite();
});


// Swiper

var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "cube", //add(make slider cube
  grabCursor: true, //add(grab cursor
  speed: 1500,
  autoplay: {
    delay: 17000,
    disableOnInteraction: false
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If you need pagination
  on: {
    slideChange: function () {
      const index_currentSlide = this.realIndex;
      var row1;
      var row2;
      var row3;
      var row4;

      if (index_currentSlide === 0) {
        row1 = '';
        row1 = row1 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
        row1 = row1 + '<span class="loaderSwipe"></span>';
        row1 = row1 + '</div>';
        $('#slide1').html(row1);
        setTimeout(slide1, 1500);
      } else if (index_currentSlide === 1) {
        row2 = '';
        row2 = row2 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
        row2 = row2 + '<span class="loaderSwipe"></span>';
        row2 = row2 + '</div>';
        $('#slide2').html(row2);
        setTimeout(slide2, 1500);
      } else if (index_currentSlide === 2) {
        row3 = '';
        row3 = row3 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
        row3 = row3 + '<span class="loaderSwipe"></span>';
        row3 = row3 + '</div>';
        $('#slide3').html(row3);
        setTimeout(slide3, 1500);
      } else if (index_currentSlide === 3) {
        row4 = '';
        row4 = row4 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
        row4 = row4 + '<span class="loaderSwipe"></span>';
        row4 = row4 + '</div>';
        $('#slide4').html(row4);
        setTimeout(slide4, 1500);
      } else {
        alert('something went wrong');
      }

      function slide1() {
        row1 = row1 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/1/index.html" frameborder="0" width="300" height="250"></iframe>';
        $('#slide1').html(row1);
      }

      function slide2() {
        row2 = row2 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/2/index.html" frameborder="0" width="300" height="250"></iframe>';
        $('#slide2').html(row2);
      }

      function slide3() {
        row3 = row3 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/3/index.html" frameborder="0" width="300" height="250"></iframe>';
        $('#slide3').html(row3);
      }

      function slide4() {
        row4 = row4 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/4/index.html" frameborder="0" width="300" height="250"></iframe>';
        $('#slide4').html(row4);
      }
    },
  },
});




// Devider Animation

var clientDevider = gsap.timeline({
  scrollTrigger: {
    trigger: ".client",
    start: "top 19%",
    // end: "top center",
    // markers: true,
    toggleActions: "restart none none none",
  }
})

clientDevider
  .add('clD')
  .to(".client__devider--middle", {
    duration: 0.7,
    scale: 1,
    opacity: 1,
    ease: 'power2.out'
  }, 'clD')

  .to(".client__devider--left, .client__devider--right", {
    duration: 0.1,
    opacity: 1
  }, 'clD')

  .add('cLR')

  .to(".client__devider--leftOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

  .to(".client__devider--rightOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

// clientDevider
// .add('clD')
// .to(".client__devider--middle", {
//   duration: 0.7,
//   y: 0,
//   opacity: 1,
//   ease: 'power2.in'
// }, 'clD')

// .to(".client__devider--middle", {
//   duration: 0,
//   rotation: 0,
//   borderRadius: 0,
//   height: 5
// })

// .to(".client__devider--middle", {
//   duration: 0.3,
//   width: '100%',
//   borderRadius: '100%',

// })

// .to(".client__devider--left", {
//   duration: 1,
//   width: "48%",
// }, 'clD+=0.3')

// .to(".client__devider--right", {
//   duration: 1,
//   width: "48%",
// }, 'clD+=0.3')


var displayAdDevider = gsap.timeline({
  scrollTrigger: {
    trigger: ".displayAd",
    start: "top 0%",
    // end: "top center",
    // markers: true,
    toggleActions: "restart none none none",
  }
})

displayAdDevider
  .add('clD')
  .to(".displayAd__devider--middle", {
    duration: 0.7,
    scale: 1,
    opacity: 1,
    ease: 'power2.out'
  }, 'clD')

  .to(".displayAd__devider--left, .displayAd__devider--right", {
    duration: 0.1,
    opacity: 1
  }, 'clD')

  .add('cLR')

  .to(".displayAd__devider--leftOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

  .to(".displayAd__devider--rightOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

// displayAdDevider
// .add('clD')
// .to(".displayAd__devider--middle", {
//   duration: 0.7,
//   y: 0,
//   opacity: 1,
//   ease: 'power2.in'
// }, 'clD')

// .to(".displayAd__devider--middle", {
//   duration: 0,
//   rotation: 0,
//   borderRadius: 0,
//   height: 5
// })

// .to(".displayAd__devider--middle", {
//   duration: 0.3,
//   width: '100%',
//   borderRadius: '100%',

// })




var dynamicAdDevider = gsap.timeline({
  scrollTrigger: {
    trigger: ".dynamicAd",
    start: "top 0%",
    // end: "top center",
    // markers: true,
    toggleActions: "restart none none none",
  }
})

dynamicAdDevider
  .add('clD')
  .to(".dynamicAd__devider--middle", {
    duration: 0.7,
    scale: 1,
    opacity: 1,
    ease: 'power2.out'
  }, 'clD')

  .to(".dynamicAd__devider--left, .dynamicAd__devider--right", {
    duration: 0.1,
    opacity: 1
  }, 'clD')

  .add('cLR')

  .to(".dynamicAd__devider--leftOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

  .to(".dynamicAd__devider--rightOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

// dynamicAdDevider
// .add('clD')
// .to(".dynamicAd__devider--middle", {
//   duration: 0.7,
//   y: 0,
//   opacity: 1,
//   ease: 'power2.in'
// }, 'clD')

// .to(".dynamicAd__devider--middle", {
//   duration: 0,
//   rotation: 0,
//   borderRadius: 0,
//   height: 5
// })

// .to(".dynamicAd__devider--middle", {
//   duration: 0.3,
//   width: '100%',
//   borderRadius: '100%',

// })



var weboramaAdDevider = gsap.timeline({
  scrollTrigger: {
    trigger: ".weboramaAd",
    start: "top 0%",
    // end: "top center",
    // markers: true,
    toggleActions: "restart none none none",
  }
})

weboramaAdDevider
  .add('clD')
  .to(".weboramaAd__devider--middle", {
    duration: 0.7,
    scale: 1,
    opacity: 1,
    ease: 'power2.out'
  }, 'clD')

  .to(".weboramaAd__devider--left, .weboramaAd__devider--right", {
    duration: 0.1,
    opacity: 1
  }, 'clD')

  .add('cLR')

  .to(".weboramaAd__devider--leftOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

  .to(".weboramaAd__devider--rightOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

// weboramaAdDevider
// .add('clD')
// .to(".weboramaAd__devider--middle", {
//   duration: 0.7,
//   y: 0,
//   opacity: 1,
//   ease: 'power2.in'
// }, 'clD')

// .to(".weboramaAd__devider--middle", {
//   duration: 0,
//   rotation: 0,
//   borderRadius: 0,
//   height: 5
// })

// .to(".weboramaAd__devider--middle", {
//   duration: 0.3,
//   width: '100%',
//   borderRadius: '100%',

// })




var platformDevider = gsap.timeline({
  scrollTrigger: {
    trigger: ".platform",
    start: "top 18%",
    // end: "top center",
    // markers: true,
    toggleActions: "restart none none none",
  }
})

platformDevider
  .add('clD')
  .to(".platform__devider--middle", {
    duration: 0.7,
    scale: 1,
    opacity: 1,
    ease: 'power2.out'
  }, 'clD')

  .to(".platform__devider--left, .platform__devider--right", {
    duration: 0.1,
    opacity: 1
  }, 'clD')

  .add('cLR')

  .to(".platform__devider--leftOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

  .to(".platform__devider--rightOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

// platformDevider
// .add('clD')
// .to(".platform__devider--middle", {
//   duration: 0.7,
//   y: 0,
//   opacity: 1,
//   ease: 'power2.in'
// }, 'clD')

// .to(".platform__devider--middle", {
//   duration: 0,
//   rotation: 0,
//   borderRadius: 0,
//   height: 5
// })

// .to(".platform__devider--middle", {
//   duration: 0.3,
//   width: '100%',
//   borderRadius: '100%',

// })




var aboutDevider = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 18%",
    // end: "top center",
    // markers: true,
    toggleActions: "restart none none none",
  }
})

aboutDevider
  .add('clD')
  .to(".about__devider--middle", {
    duration: 0.7,
    scale: 1,
    opacity: 1,
    ease: 'power2.out'
  }, 'clD')

  .to(".about__devider--left, .about__devider--right", {
    duration: 0.1,
    opacity: 1
  }, 'clD')

  .add('cLR')

  .to(".about__devider--leftOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

  .to(".about__devider--rightOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

// aboutDevider
// .add('clD')
// .to(".about__devider--middle", {
//   duration: 0.7,
//   y: 0,
//   opacity: 1,
//   ease: 'power2.in'
// }, 'clD')

// .to(".about__devider--middle", {
//   duration: 0,
//   rotation: 0,
//   borderRadius: 0,
//   height: 5
// })

// .to(".about__devider--middle", {
//   duration: 0.3,
//   width: '100%',
//   borderRadius: '100%',

// })


var quoteDevider = gsap.timeline({
  scrollTrigger: {
    trigger: ".quote",
    start: "top 40%",
    // end: "top center",
    // markers: true,
    toggleActions: "restart none none none",
  }
})

quoteDevider
  .add('clD')
  .to(".quote__devider--middle", {
    duration: 0.7,
    scale: 1,
    opacity: 1,
    ease: 'power2.out'
  }, 'clD')

  .to(".quote__devider--left, .quote__devider--right", {
    duration: 0.1,
    opacity: 1
  }, 'clD')

  .add('cLR')

  .to(".quote__devider--leftOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

  .to(".quote__devider--rightOverlay", {
    duration: 0.6,
    width: '0%',
    ease: 'power2.out'
  }, 'cLR')

// quoteDevider
// .add('clD')
// .to(".quote__devider--middle", {
//   duration: 0.7,
//   y: 0,
//   opacity: 1,
//   ease: 'power2.in'
// }, 'clD')

// .to(".quote__devider--middle", {
//   duration: 0,
//   rotation: 0,
//   borderRadius: 0,
//   height: 5
// })

// .to(".quote__devider--middle", {
//   duration: 0.3,
//   width: '100%',
//   borderRadius: '100%',

// })

// var shadowAdDevider = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".shadowAd",
//     start: "top 0%",
//     toggleActions: "restart none none none",
//   }
// })

// shadowAdDevider
// .add('clD')
// .to(".shadowAd__devider--middle", {
//   duration: 0.3,
//   scale: 1,
// }, 'clD')

// .to(".shadowAd__devider--left", {
//   duration: 1,
//   width: "48%",
// }, 'clD+=0.3')

// .to(".shadowAd__devider--right", {
//   duration: 1,
//   width: "48%",
// }, 'clD+=0.3')



gsap.registerPlugin(ScrollTrigger);

// Work Horizontal Animation

const allImage = document.querySelector('.work__imageWrap--item');
const imgWidth = 336 + 20;
const imageQuantity = 11;

let allImageWidth = imgWidth * imageQuantity;

let amountToScroll = allImageWidth - window.innerWidth;

// console.log(allImageWidth);
// console.log(amountToScroll);
// console.log(window.innerWidth);

// gsap.to(allImage, {
//     x: -amountToScroll,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".work",
//         start: "top 0px",
//         // end: "bottom 20px",
//         // snap: 0.3,
//         pin: true,
//         scrub: 1,
//     }
// })

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Ads Section Snap Animation 




var tl = gsap.timeline({})

tl
  .to('.displayAd', {
    delay: 0.1,
    scrollTrigger: {
      trigger: ".displayAd",
      // snap: 0.5,
      // markers: true,
      // scrub: 1
    },
    ease: 'expo.out'
  })

  .to('.dynamicAd', {
    scrollTrigger: {
      trigger: ".dynamicAd",
      // snap: 0.5,
      // markers: true,
      // scrub: 1
    },
    ease: 'expo.out'
  })

  .to('.shadowAd', {
    scrollTrigger: {
      trigger: ".shadowAd",
      // snap: 0.5,
      // scrub: 1
    },
    ease: 'expo.out'
  })


gsap.from(".displayAd__head", {
  x: '20%',
  y: '15%',
  stagger: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".displayAd",
    start: "top center",
    // end: "top 30vh",
    // scrub: true,
    toggleActions: "play none none none",
  },

});

var dynamicTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dynamicAd",
    start: "top center",
    end: "top center",
    // scrub: true,
    toggleActions: "play none none none",
  }
})

dynamicTl
  .from(".dynamicAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  // gsap.from(".dynamicAd__head", {


  // });
  .to(".dynamicAd__images--one__dot", {
    duration: 0.3,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2.out'
  })
  .to(".dynamicAd__ams--arrow", {
    duration: 0.2,
    opacity: 1,
    ease: 'power2.out'
  }, '-=0.1')
  .to(".dynamicAd__ams--pic", {
    duration: 0.4,
    opacity: 1,
    rotationY: 0,
    ease: 'power2.inOut'
  }, '-=0.1')

  .to(".dynamicAd__images--two__dot", {
    duration: 0.3,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.1')
  .to(".dynamicAd__rot--arrow", {
    duration: 0.2,
    opacity: 1,
    ease: 'power2.out'
  }, '-=0.1')
  .to(".dynamicAd__rot--pic", {
    duration: 0.4,
    opacity: 1,
    rotationY: 0,
    ease: 'power2.inOut'
  }, '-=0.1')

  .to(".dynamicAd__images--three__dot", {
    duration: 0.3,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.1')
  .to(".dynamicAd__den--arrow", {
    duration: 0.2,
    opacity: 1,
    ease: 'power2.out'
  }, '-=0.1')
  .to(".dynamicAd__den--pic", {
    duration: 0.4,
    opacity: 1,
    rotationY: 0,
    ease: 'power2.inOut'
  }, '-=0.1')





let video = document.querySelector('.weboramaAd__bg--content');

video.pause();

function videoPlayPause() {
  if (!video.play()) {
    video.play()
  } else {
    video.play()
  }
}

var weboramaAdTl = gsap.timeline({

  scrollTrigger: {
    trigger: ".weboramaAd",
    start: "top center",
    // end: "top 30vh",
    // scrub: true,
    toggleActions: "restart none none none",
  }
})

weboramaAdTl
  .to(".weboramaAd__head", {
    x: 0,
    y: 0,
    stagger: 0.2,
    opacity: 1,
    onComplete: videoPlayPause
  })

  .to(".weboramaAd__devices", {
    stagger: 0.2,
    opacity: 1
  })



var screenWidth = window.innerWidth;


console.log(screenWidth)

var shadowAdTl = gsap.timeline({

  scrollTrigger: {
    trigger: ".shadowAd",
    start: "top center",
    // end: "top 30vh",
    // scrub: true,
    // toggleActions: "restart none none none",
  }
})

if (screenWidth > 1600) {



  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '94%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-5%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '45%'
    }, 'sc2')

} else if (screenWidth > 1400 && screenWidth <= 1600) {


  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '92%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-6%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '44%'
    }, 'sc2')

} else if (screenWidth > 1200 && screenWidth <= 1400) {


  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '94%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-6%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '44%'
    }, 'sc2')

} else if (screenWidth > 1025 && screenWidth <= 1200) {


  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '92%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-7.4%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '42.5%'
    }, 'sc2')

} else if (screenWidth > 900 && screenWidth <= 1025) {


  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '95%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-5%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '45%'
    }, 'sc2')

} else if (screenWidth > 575 && screenWidth <= 900) {


  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '91%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-8%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '42%'
    }, 'sc2')

} else if (screenWidth > 100 && screenWidth <= 575) {


  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '91%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-8%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '42%'
    }, 'sc2')
} else {

  shadowAdTl
    .from(".shadowAd__head", {
      duration: 0.5,
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
      duration: 0.5,
      width: '100%'
    }, 'sc0')
    .to(".scroller", {
      duration: 0.5,
      left: '95%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
      duration: 1,
      width: '0%'
    }, 'sc1')
    .to(".scroller", {
      duration: 1,
      left: '-5%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
      duration: 0.5,
      width: '50%'
    }, 'sc2')
    .to(".scroller", {
      duration: 0.5,
      left: '45%'
    }, 'sc2')
}


// gsap.to('.weboramaAd', { duration: 2, scrollTo: 250 });
// var t3 = gsap.timeline({})

// .to('.workflow__reveal--content', {
//     scrollTrigger: {
//         trigger: ".workflow",
//         start: "bottom 30px",
//         // snap: 0.5,
//         // scrub: 1
//     },
//     height: b,
//     ease: 'expo.out',

// })

gsap.to(".header__text", {
  backgroundPosition: "100% -10%",
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    // end: "bottom center",
    scrub: true,
    // markers: true,
    toggleActions: "restart none none none",
  }
});


gsap.to(".displayAd__heading", {
  backgroundPosition: "100% 100%",
  scrollTrigger: {
    trigger: ".displayAd",
    start: "top 70vh",
    end: "top -50vh",
    scrub: true,
    toggleActions: "restart none none none",
  }
});


gsap.to(".dynamicAd__heading", {
  backgroundPosition: "100% 30%",
  scrollTrigger: {
    trigger: ".dynamicAd",
    start: "top 70vh",
    end: "top -500px",
    scrub: true,
    toggleActions: "restart none none none",
  }
});


gsap.to(".weboramaAd__heading", {
  backgroundPosition: "100% -35%",
  scrollTrigger: {
    trigger: ".weboramaAd",
    start: "top 90vh",
    end: "top -500px",
    scrub: true,
    toggleActions: "restart none none none",
  }
});




gsap.to(".shadowAd__heading", {
  backgroundPosition: "100% -5%",
  scrollTrigger: {
    trigger: ".shadowAd",
    start: "top 90vh",
    end: "top -500px",
    scrub: true,
    toggleActions: "restart none none none",
  }
})




// Video Button Control






// const revealDiv = document.querySelector('.workflow__reveal--content');

// let revealDivheight = revealDiv.clientHeight;
// let reveal = revealDivheight - window.innerHeight;

// console.log(revealDivheight)
// console.log(reveal)


// let amountToScrolld = allImageWidth - window.innerWidth;



// $(document).ready(function(){

//     var content = $('.workflow__reveal--content');
//     var contentHeight = content.height();

//     $(window).scroll(function(){

//         var scrollTop = $(this).scrollTop();
//         // if((scrollTop > 1000)) {
//             content.height(contentHeight - scrollTop);
//         // }
//     });
// });


// Weborama Devices

let apto = document.getElementById('apto');
let interstial = document.getElementById('interstial');
let swipeCubeWeb = document.getElementById('swipeCubeWeb');

let videoOne = document.querySelector('.video-one');
let videoTwo = document.querySelector('.video-two');
let videoThree = document.querySelector('.video-three');


apto.addEventListener('click', function () {
  videoOne.style.display = "block";
  videoTwo.style.display = "none";
  videoThree.style.display = "none";

  apto.style.background = "linear-gradient(41deg, rgb(243 202 199), rgb(125 145 171))";
  interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
  swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";

  // apto.style.color = "#ffffff";
  // interstial.style.color = "#000000"
  // swipeCubeWeb.style.color = "#000000"

  videoOne.currentTime = 0;

})

interstial.addEventListener('click', function () {
  videoOne.style.display = "none";
  videoTwo.style.display = "block";
  videoThree.style.display = "none";

  apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
  interstial.style.background = "linear-gradient(41deg, rgb(243 202 199), rgb(125 145 171))";
  swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";

  // apto.style.color = "#000000";
  // interstial.style.color = "#ffffff"
  // swipeCubeWeb.style.color = "#000000"

  videoTwo.currentTime = 0;

})

swipeCubeWeb.addEventListener('click', function () {
  videoOne.style.display = "none";
  videoTwo.style.display = "none";
  videoThree.style.display = "block";

  apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
  interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
  swipeCubeWeb.style.background = "linear-gradient(41deg, rgb(243 202 199), rgb(125 145 171))";

  // apto.style.color = "#000000";
  // interstial.style.color = "#000000"
  // swipeCubeWeb.style.color = "#ffffff"
  videoThree.currentTime = 0;

})









let active = false;

let selectOne = document.getElementById('shadowAd__select--one');
let selectTwo = document.getElementById('shadowAd__select--two');
let selectThree = document.getElementById('shadowAd__select--three');

var beforeOne = document.getElementsByClassName('before_1');
var afterOne = document.getElementsByClassName('after_1');

var beforeTwo = document.getElementsByClassName('before_2');
var afterTwo = document.getElementsByClassName('after_2');

var beforeThree = document.getElementsByClassName('before_3');
var afterThree = document.getElementsByClassName('after_3');



selectOne.addEventListener('click', function () {

  beforeOne[0].style.display = "block";
  afterOne[0].style.display = "block";
  beforeTwo[0].style.display = "none";
  afterTwo[0].style.display = "none";
  beforeThree[0].style.display = "none";
  afterThree[0].style.display = "none";

  selectOne.style.background = "linear-gradient(41deg, rgb(243 202 199), rgb(125 145 171))";
  selectTwo.style.background = "#fff";
  selectThree.style.background = "#fff";

  // selectOne.style.color = "#fff";
  // selectTwo.style.color = "black";
  // selectThree.style.color = "black";

  selectOne.style.border = 'none';
  selectTwo.style.border = "1px solid #000";
  selectThree.style.border = "1px solid #000";




  document.querySelector(".after_1").style.width = "50%";
  document.querySelector(".scroller").style.left = "45%";

});

selectTwo.addEventListener('click', function () {

  beforeOne[0].style.display = "none";
  afterOne[0].style.display = "none";
  beforeTwo[0].style.display = "block";
  afterTwo[0].style.display = "block";
  beforeThree[0].style.display = "none";
  afterThree[0].style.display = "none";

  selectOne.style.background = "#fff";
  selectTwo.style.background = "linear-gradient(41deg, rgb(243 202 199), rgb(125 145 171))";
  selectThree.style.background = "#fff";

  // selectOne.style.color = "black";
  // selectTwo.style.color = "#fff";
  // selectThree.style.color = "black";

  selectOne.style.border = '1px solid #000';
  selectTwo.style.border = "none";
  selectThree.style.border = "1px solid #000";

  document.querySelector(".after_2").style.width = "50%";
  document.querySelector(".scroller").style.left = "45%";
});

selectThree.addEventListener('click', function () {

  beforeOne[0].style.display = "none";
  afterOne[0].style.display = "none";
  beforeTwo[0].style.display = "none";
  afterTwo[0].style.display = "none";
  beforeThree[0].style.display = "block";
  afterThree[0].style.display = "block";

  selectOne.style.background = "#fff";
  selectTwo.style.background = "#fff";
  selectThree.style.background = "linear-gradient(41deg, rgb(243 202 199), rgb(125 145 171))";

  // selectOne.style.color = "black";
  // selectTwo.style.color = "black";
  // selectThree.style.color = "#fff";

  selectOne.style.border = '1px solid #000';
  selectTwo.style.border = "1px solid #000";
  selectThree.style.border = "none";

  document.querySelector(".after_3").style.width = "50%";
  document.querySelector(".scroller").style.left = "45%";
});



// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector(".scroller").addEventListener("mousedown", function () {
  active = true;
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector(".scroller").classList.add("scrolling");
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener("mouseup", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});
document.body.addEventListener("mouseleave", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});

// Let's figure out where their mouse is at
document.body.addEventListener("mousemove", function (e) {
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector(".wrapper").getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x) {

  var beforeOne = document.getElementsByClassName('before_1');
  var afterOne = document.getElementsByClassName('after_1');

  var beforeTwo = document.getElementsByClassName('before_2');
  var afterTwo = document.getElementsByClassName('after_2');

  var beforeThree = document.getElementsByClassName('before_3');
  var afterThree = document.getElementsByClassName('after_3');

  window.onload = function (e) {
    if (screenWidth > 1600) {

      document.querySelector(".after_1").style.width = "50%";
      document.querySelector(".scroller").style.left = "45%";
    } else if (screenWidth > 1200 && screenWidth <= 1600) {

      document.querySelector(".after_1").style.width = "50%";
      document.querySelector(".scroller").style.left = "44%";
    } else if (screenWidth > 1025 && screenWidth <= 1200) {
      document.querySelector(".after_1").style.width = "50%";
      document.querySelector(".scroller").style.left = "42.5%";
    } else if (screenWidth > 900 && screenWidth <= 1025) {
      document.querySelector(".after_1").style.width = "50%";
      document.querySelector(".scroller").style.left = "45%";
    } else if (screenWidth > 575 && screenWidth <= 900) {
      document.querySelector(".after_1").style.width = "50%";
      document.querySelector(".scroller").style.left = "42%";
    } else if (screenWidth > 100 && screenWidth <= 575) {
      document.querySelector(".after_1").style.width = "50%";
      document.querySelector(".scroller").style.left = "42%";
    } else {
      document.querySelector(".after_1").style.width = "50%";
      document.querySelector(".scroller").style.left = "45%";
    }

  }

  if (beforeOne[0].clientWidth > 0 || afterOne[0].clientWidth > 0) {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector(".wrapper").offsetWidth)
    );

    document.querySelector(".after_1").style.width = transform + "px";
    document.querySelector(".scroller").style.left = transform - 25 + "px";
  }

  if (beforeTwo[0].clientWidth > 0 || afterTwo[0].clientWidth > 0) {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector(".wrapper").offsetWidth)
    );
    document.querySelector(".after_2").style.width = transform + "px";
    document.querySelector(".scroller").style.left = transform - 25 + "px";
  }
  if (beforeThree[0].clientWidth > 0 || afterThree[0].clientWidth > 0) {
    let transform = Math.max(
      0,
      Math.min(x, document.querySelector(".wrapper").offsetWidth)
    );
    document.querySelector(".after_3").style.width = transform + "px";
    document.querySelector(".scroller").style.left = transform - 25 + "px";
  }



}

// Let's set our opening state based off the width,
// we want to show a bit of both images so the user can see what's going on
scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector(".scroller").addEventListener("touchstart", function () {
  active = true;
  document.querySelector(".scroller").classList.add("scrolling");
});
document.body.addEventListener("touchend", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});
document.body.addEventListener("touchcancel", function () {
  active = false;
  document.querySelector(".scroller").classList.remove("scrolling");
});










gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable)

gsap.set('.box', {
  yPercent: -50,
})

const STAGGER = 0.1
const DURATION = 1
const OFFSET = 0
const BOXES = gsap.utils.toArray('.box')

const LOOP = gsap.timeline({
  paused: true,
  repeat: -1,
  ease: 'none',
})

const SHIFTS = [...BOXES, ...BOXES, ...BOXES]

SHIFTS.forEach((BOX, index) => {
  const BOX_TL = gsap
    .timeline()
    .set(BOX, {
      xPercent: 250,
      rotateY: -50,
      opacity: 0,
      scale: 0.5,
    })
    // Opacity && Scale
    .to(
      BOX, {
        opacity: 1,
        scale: 1,
        duration: 0.1,
      },
      0
    )
    .to(
      BOX, {
        opacity: 0,
        scale: 0.5,
        duration: 0.1,
      },
      0.9
    )
    // Panning
    .fromTo(
      BOX, {
        xPercent: 250,
      }, {
        xPercent: -350,
        duration: 1,
        immediateRender: false,
        ease: 'power1.inOut',
      },
      0
    )
    // Rotations
    .fromTo(
      BOX, {
        rotateY: -50,
      }, {
        rotateY: 50,
        immediateRender: false,
        duration: 1,
        ease: 'power4.inOut',
      },
      0
    )
    // Scale && Z
    .to(
      BOX, {
        z: 100,
        scale: 1.25,
        duration: 0.1,
        repeat: 1,
        yoyo: true,
      },
      0.4
    )

    .fromTo(
      BOX, {
        zIndex: 1,
      }, {
        zIndex: BOXES.length,
        repeat: 1,
        yoyo: true,
        ease: 'none',
        duration: 0.5,
        immediateRender: false,
      },
      0
    )
  LOOP.add(BOX_TL, index * STAGGER)


  // console.log(BOX.firstChild)

})

const CYCLE_DURATION = STAGGER * BOXES.length
const START_TIME = CYCLE_DURATION + DURATION * 0.5 + OFFSET

const LOOP_HEAD = gsap.fromTo(
  LOOP, {
    totalTime: START_TIME,
  }, {
    totalTime: `+=${CYCLE_DURATION}`,
    duration: 1,
    ease: 'none',
    repeat: -1,
    paused: true,
  }
)

const PLAYHEAD = {
  position: 0,
}

const POSITION_WRAP = gsap.utils.wrap(0, LOOP_HEAD.duration())

const SCRUB = gsap.to(PLAYHEAD, {
  position: 0,
  onUpdate: () => {
    LOOP_HEAD.totalTime(POSITION_WRAP(PLAYHEAD.position))
  },
  paused: true,
  duration: 0.25,
  ease: 'power3',
})

let iteration = 0
const TRIGGER = ScrollTrigger.create({
  start: 0,
  end: '+=2000',
  horizontal: false,
  //   pin: '.boxes',
  onUpdate: self => {
    const SCROLL = self.scroll()
    if (SCROLL > self.end - 1) {
      // Go forwards in time
      WRAP(1, 1)
    } else if (SCROLL < 1 && self.direction < 0) {
      // Go backwards in time
      WRAP(-1, self.end - 1)
    } else {
      const NEW_POS = (iteration + self.progress) * LOOP_HEAD.duration()
      SCRUB.vars.position = NEW_POS
      SCRUB.invalidate().restart()
    }
  },
})

const WRAP = (iterationDelta, scrollTo) => {
  TRIGGER.update()
}

const SNAP = gsap.utils.snap(1 / BOXES.length)

let boxe = document.getElementById('boxe');
const progressToScroll = progress =>
  gsap.utils.clamp(
    1,
    TRIGGER.end - 1,
    gsap.utils.wrap(0, 1, progress) * TRIGGER.end
  )

const scrollToPosition = position => {
  const SNAP_POS = SNAP(position)
  const PROGRESS =
    (SNAP_POS - LOOP_HEAD.duration() * iteration) / LOOP_HEAD.duration()
  const SCROLL = progressToScroll(PROGRESS)
  if (PROGRESS >= 1 || PROGRESS < 0) return WRAP(Math.floor(PROGRESS), SCROLL)
  TRIGGER.scroll(SCROLL)
}

const scrollToPosition2 = position => {
  const SNAP_POS = SNAP(position)
  const PROGRESS =
    (SNAP_POS - LOOP_HEAD.duration() * iteration) / LOOP_HEAD.duration()
  const SCROLL = progressToScroll(PROGRESS)
  if (PROGRESS >= 1 || PROGRESS < 0) return WRAP(Math.floor(PROGRESS), SCROLL)
  TRIGGER.scroll(SCROLL)
}


document.addEventListener('keydown', event => {
  if (event.code === 'ArrowLeft' || event.code === 'KeyA') NEXT()
  if (event.code === 'ArrowRight' || event.code === 'KeyD') PREV()
})

document.querySelector('.boxes').addEventListener('click', e => {
  const BOX = e.target.closest('.box')
  if (BOX) {
    // let TARGET = BOXES.indexOf(BOX)
    let CURRENT = gsap.utils.wrap(
      0,

    )
  }
})



gsap.set('.box', {
  display: 'block'
})

// gsap.set('button', {
//   z: 200,
// })

Draggable.create('.drag-proxy', {
  type: 'x',
  trigger: '.box',
  onPress() {
    this.startOffset = SCRUB.vars.position
  },
  onDrag() {
    SCRUB.vars.position = this.startOffset + (this.startX - this.x) * 0.001
    SCRUB.invalidate().restart() // same thing as we do in the ScrollTrigger's onUpdate

    // var boxOne = document.getElementById('boxe');

    // if(boxOne.firstElementChild.style.transform >= 'translate(-110%, -49%)') {
    //   console.log('true')
    //   boxOne.firstElementChild.style.scale = '1';
    // }
    // console.log('false')

    // console.log(boxOne.firstElementChild.style.transform)

  },
  onDragEnd() {
    // scrollToPosition(SCRUB.vars.position)
  },
})




// })(jQuery);