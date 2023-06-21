$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    $(".navbar").addClass("nav-scrolled");
  } else {
    $(".navbar").removeClass("nav-scrolled");
  }
});