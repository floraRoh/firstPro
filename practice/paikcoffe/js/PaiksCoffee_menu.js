$(document).ready(function () {
  $(".slide img").eq(0).css({ left: 0 });
  $(".cir").eq(0).css("background", "rgba(0,0,0,0.5)");

  var index = 1;
  var slide_n = $(".slide img").length;
  var c_slide;
  var timer = 1000;
  var in_time = timer + 2000;

  $("#btn_r").click(function () {
    init();

    slide_top(index % slide_n, "100%", (index - 1) % slide_n, "-100%");
    index++;
  });

  ///////////////// 왼쪽 클릭 //////////////////////
  $("#btn_l").click(function () {
    init();
    index--;
    slide_top((index - 1) % slide_n, "-100%", index % slide_n, "100%");
  });

  slide_start();

  function slide_start() {
    c_slide = setInterval(function () {
      $("#btn_r").trigger("click");
    }, in_time);
  }

  // 호버시 슬라이드 정지
  $(".slide img").hover(
    function () {
      clearInterval(c_slide);
    },
    function () {
      slide_start();
    }
  );

  function init() {
    $(".arrow").css("pointer-events", "none");
    setTimeout(function () {
      $(".arrow").css("pointer-events", "auto");
    }, timer);
  }

  function slide_top(come, come_p, out, out_p) {
    $(".slide img")
      .eq(come)
      .css({
        left: come_p,
      })
      .animate(
        {
          left: 0,
        },
        timer
      );
    $(".slide img").eq(out).animate(
      {
        left: out_p,
      },
      timer
    );

    $(".cir").eq(come).css({
      background: "rgba(0,0,0,0.5)",
    });
    $(".cir").eq(out).css({
      background: "rgba(255,255,255,0.5)",
    });
  }

  ////////////////////////////////////////
  // 메뉴 마우스오버
  $(".main_menu, .sub_menu").mouseover(function () {
    $(".sub_menu").stop().slideDown();
    $(".fake_sub").stop().slideDown();
  });
  $(".sub_menu > li").mouseover(function () {
    $(this).css("background", "gold");
    $(this).parent().parent().css({
      background: "#0e347e",
    });
    $(this).parent().prev().css({
      color: "#fff",
    });
  });

  $(".main_menu").mouseout(function () {
    $(".sub_menu").stop().slideUp();
    $(".fake_sub").stop().slideUp();
  });
  $(".sub_menu > li").mouseout(function () {
    $(this).css("background", "#fff");
    $(this).parent().parent().css({ background: "#fff" });
    $(this).parent().prev().css({
      color: "#222328",
    });
  });

  // top button
  $(".top a").click(function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var pos = $(href).offset().top;

    $("html,body").animate(
      {
        scrollTop: pos,
      },
      500
    );
  });
});
