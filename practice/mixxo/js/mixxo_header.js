$(document).ready(function () {
  // top button
  $(".top_btn").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
  // 메뉴 슬라이드
  $(".main_menu").mouseenter(function () {
    $(this).children(".sub_menu").fadeIn();
  });
  $(".main_menu").mouseleave(function () {
    $(this).children(".sub_menu").fadeOut();
  });
});
