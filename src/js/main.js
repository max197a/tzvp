$(document).ready(function() {
  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);

  ////////////
  // READY - triggered when PJAX DONE
  ////////////

  // single time initialization
  // legacySupport();
  initaos();
  var easingSwing = [0.02, 0.01, 0.47, 1];

  function pageReady() {
    // initSmoothScroll();
  }

  // this is a master function which should have all functionality
  pageReady();

  //////////
  // COMMON
  //////////

  function initaos() {
    AOS.init();
  }

  // header scroll
  _window.on(
    "scroll",
    throttle(function() {
      var scroll = _window.scrollTop();
      var headerHeight = $(".header").height();
      var heroHeight = $(".firstscreen").height();

      if (scroll > headerHeight) {
        $(".header").addClass("is-fixed-start");
      } else {
        $(".header").removeClass("is-fixed-start");
      }
      if (scroll >= heroHeight - headerHeight / 1) {
        $(".header").addClass("is-fixed");
        $(".back-to-top").addClass("is-active");
      } else {
        $(".header").removeClass("is-fixed");
        $(".back-to-top").removeClass("is-active");
      }
    }, 25)
  );

  // Prevent # behavior
  _document
    .on("click", '[href="#"]', function(e) {
      e.preventDefault();
    })
    .on("click", 'a[href^="#section"]', function(e) {
      // section scroll
      var el = $(this).attr("href");
      scrollToSection($(el));
      $("body").removeClass("is-fixed");
      $("html").removeClass("is-fixed");
      $(".header__list").removeClass("is-active");
      $("[js-hamburger]").removeClass("is-active");
      return false;
    });

  function scrollToSection(el) {
    var headerHeight = $(".header").height();
    var targetScroll = el.offset().top - 60;
    // document.scrollingElement || document.documentElement

    TweenLite.to(window, 1, {
      scrollTo: { y: targetScroll, autoKill: false },
      ease: easingSwing
    });
  }
});
