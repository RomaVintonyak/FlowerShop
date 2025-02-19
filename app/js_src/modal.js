jQuery(document).ready(function () {
   "use script";
   /*MODAL WINDOW*/
   /*modal open*/
   $("._byePosition").on("click", function (event) {
      event.preventDefault();
      $(".modal").addClass("modal__open");
      $("body").css({ "overflow": "hidden" });
   });
   /*modal close*/
   $("._modalClose").on("click", function (event) {
      event.preventDefault();
      $(".modal").removeClass("modal__open");
      $("body").removeAttr("style");
      //reset input
      $("#titleFlowers").val("");
      $("#descriptionFlowers").val("");
      $("#priceFlowers").val("");
   });
   $(".modal__mask").on("click", function () {
      $(".modal").removeClass("modal__open");
      $("body").removeAttr("style");
      //reset input
      $("#shopingForm").trigger("reset");
   });
   $(".modal__body").on("click", function (event) {
      event.stopPropagation();
   });




   /*active style to label in contact form*/
   var nameField = $("#name");
   nameField.blur(function () {
      var nameFieldData = $(this).val();
      if (nameFieldData.length >= 1) {
         $("#lebelName").css({
            "font-size": "1.2rem",
            "top": "-2.7rem"
         });
      } else {
         $("#lebelName").removeAttr("style");
      }
   });
   var surnameField = $("#surname");
   surnameField.blur(function () {
      var surnameFieldData = $(this).val();
      if (surnameFieldData.length >= 1) {
         $("#lebelSurname").css({
            "font-size": "1.2rem",
            "top": "-2.7rem"
         });
      } else {
         $("#lebelSurname").removeAttr("style");
      }
   });
   var phoneField = $("#phone");
   phoneField.blur(function () {
      var phoneFieldData = $(this).val();
      if (phoneFieldData.length >= 1) {
         $("#labelPhone").css({
            "font-size": "1.2rem",
            "top": "-2.7rem"
         });
      } else {
         $("#labelPhone").removeAttr("style");
      }
   });
   var messageField = $("#message");
   messageField.blur(function () {
      var messageFieldData = $(this).val();
      if (messageFieldData.length >= 1) {
         $("#labelMessage").css({
            "font-size": "1.2rem",
            "top": "-3.5rem"
         });
      } else {
         $("#labelMessage").removeAttr("style");
      }
   });
});