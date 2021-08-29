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
      $("#btn_right").trigger("click");
    }, 2000);
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
  // 좌우버튼 클릭
  $("#btn_left").click(function () {
    btn_init("#btn_left");
    index--;
    btn_click((index - 1) % fade_n, index % fade_n);
  });
  $("#btn_right").click(function () {
    btn_init("#btn_right");
    btn_click(index % fade_n, (index - 1) % fade_n);
    index++;
  });

  function btn_click(com, out) {
    $(".img").eq(com).fadeIn();
    $(".img").eq(out).fadeOut();

    $(".btn_indi").eq(com).children("a").css({
      color: "gold",
    });
    $(".btn_indi").eq(out).children("a").css({
      color: "#fff",
    });
  }

  // main_nav hover
  $(".main_nav p").hover(
    function () {
      $(this).children("a").css("color", "gold");
    },
    function () {
      $(this).children("a").css("color", "#fff");
    }
  );
  // 좌우버튼동작멈춤
  function btn_init(btnn) {
    $(btnn).css("pointer-events", "none");
    setTimeout(function () {
      $(btnn).css("pointer-events", "auto");
    }, 1000);
  }

  // 인디케이터 클릭시
  $(".btn_indi").click(function () {
    var indi_index = $(this).index();
    console.log(indi_index);

    $(".img").fadeOut();
    $(".img").eq(indi_index).fadeIn();

    $(".btn_indi").children("a").css({
      color: "#fff",
    });
    $(".btn_indi").eq(indi_index).children("a").css({
      color: "gold",
    });

    index = indi_index + 1;
  });

  // 대회소식
  var c_index = 1;
  var slide_n = $(".com_img").length;
  $(".com_img").eq(0).css("left", "0");

  setInterval(function () {
    $(".com_img")
      .eq(c_index % slide_n)
      .css("left", "100%")
      .animate(
        {
          left: "0",
        },
        1000
      );
    $(".com_img")
      .eq((c_index - 1) % slide_n)
      .animate(
        {
          left: "-100%",
        },
        1000
      );
    c_index++;
  }, 2000);

  // 추천영상 버튼
  var y_index = 1;
  $("#btn_you_right").click(function () {
    btn_you(y_index % 2, "100%", (y_index - 1) % 2, "-100%");
    y_index++;
  });
  $("#btn_you_left").click(function () {
    y_index--;
    btn_you((y_index - 1) % 2, "-100%", y_index % 2, "100%");
  });

  function btn_you(com, comp, out, outp) {
    $(".youtu_box").eq(com).css("left", comp).animate(
      {
        left: "0",
      },
      1000
    );
    $(".youtu_box").eq(out).animate(
      {
        left: outp,
      },
      1000
    );
  }

  $("#btn_c_modal").click(function () {
    $(".modal").hide();
  });
});
