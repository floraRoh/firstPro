$(document).ready(function () {
  // main_img
  var index = 1;
  var fade_n = $(".img").length;
  var fade_start;
  $(".img").eq(0).css("display", "block");
  $(".btn_indi").eq(0).children("a").css("color", "gold");

  // img fade setInterval
  function fade_s() {
    fade_start = setInterval(function () {
      $(".img")
        .eq(index % fade_n)
        .fadeIn();
      $(".img")
        .eq((index - 1) % fade_n)
        .fadeOut();
      index++;
    }, 3000);
  }

  fade_s();

  // img 호버시
  $(".img").hover(
    function () {
      clearInterval(fade_start);
    },
    function () {
      fade_s();
    }
  );
});
