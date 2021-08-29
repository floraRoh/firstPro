$(document).ready(function () {
  $(".sub_menu li").hover(
    function () {
      $(this).children("a").css({
        color: "#fff",
        fontWeight: "bold",
      });
      $(this).parent().prev("a").css({
        color: "rgb(156,32,51)",
      });
    },
    function () {
      $(this).children("a").css({
        color: "#fff",
        fontWeight: "normal",
      });
      $(this).parent().prev("a").css({
        color: "#333",
      });
    }
  );

  $(window).scroll(function () {
    var s_top = $(window).scrollTop() + 400;
    var sec_top = $(".sec").offset().top;
    if (s_top > sec_top) {
      $(".sec_img1, .sec_img2").css({
        transform: "translateX(0)",
      });
    }
  });
});
