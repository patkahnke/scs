$(function() {

  $(".btn-login").click(function() {
      $(".btn-login").toggleClass("dropdown-toggle");
  });

  $(".btn-login-dropdown").click(function() {
      $(".btn-login").toggleClass("dropdown-toggle");
  });

  $(".btn-card").parent().hover(function() {
    $(this).children('.expandable').removeClass("collapsed-button");
  }, function() {
    $(this).children('.expandable').addClass("collapsed-button");
  }
);

});
