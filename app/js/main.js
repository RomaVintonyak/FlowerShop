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
});