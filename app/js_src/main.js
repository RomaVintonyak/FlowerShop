jQuery(document).ready(function () {
  "use script";
  /*burger btn*/
  $(".burger__btn").on("click", function () {
    $(this).toggleClass("burger__btn--active");
    $(".menu").toggleClass("menu__open");
  });
  /*lightbox*/
  lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'albumLabel': "Зображення %1 із %2",
    'disableScrolling': true
  });
  /*fixed header*/
  var headerHeight = $("#header").height();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= headerHeight) {
      $("#header").addClass("header__fixed");
    } else {
      $("#header").removeClass("header__fixed");
    }
  });
  /*backtop btn*/
  var introH = $(".intro").height();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= (introH || 800)) {
      $(".backtop").addClass("backtop__active");
    } else {
      $(".backtop").removeClass("backtop__active");
    }
  });
  $(".backtop").on("click", function () {
    $("html, body").animate({
      scrollTop: 0,
    }, 1000, "swing");
  });

});