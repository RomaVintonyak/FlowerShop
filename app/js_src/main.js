jQuery(document).ready(function () {
  "use script";
  /*burger btn*/
  $(".burger__btn").on("click", function(){
    $(this).toggleClass("burger__btn--active");
    $(".menu").toggleClass("menu__open");
  });
});