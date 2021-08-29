$(document).ready(function () {
  var index = 1;
  var slide_n = $(".slide_img").length;
  var time = 1000;
  var timer = time + 2000;
  var slide_st;

  $(".slide_img").eq(0).css("display", "block");
  $(".cir").eq(0).css("background", "rgba(16,4,121,0.5)");

  // 좌 클릭
  $(".left").click(function () {
    btn_init(".left");
    index--;
    btn_click((index - 1) % slide_n, index % slide_n);
  });

  // 우 클릭
  $(".right").click(function () {
    btn_init(".right");
    btn_click(index % slide_n, (index - 1) % slide_n);
    index++;
  });

  // 좌우 버튼 클릭
  function btn_click(com, out) {
    $(".slide_img").eq(com).fadeIn();
    $(".slide_img").eq(out).fadeOut();

    $(".cir").eq(com).css({
      background: "rgba(16,4,121,0.5)",
    });
    $(".cir").eq(out).css({
      background: "rgba(255,255,255,0.5)",
    });
  }

  // 인디케이터 클릭
  $(".cir").click(function () {
    var cir_index = $(this).index();
    console.log(cir_index);

    $(".slide_img").fadeOut();
    $(".slide_img").eq(cir_index).fadeIn();

    // 버튼컬러변경
    $(".cir").css({
      background: "rgba(255,255,255,0.5)",
    });
    $(".cir").eq(cir_index).css({
      background: "rgba(16,4,121,0.5)",
    });

    index = cir_index + 1;
  });

  // 좌우 버튼 동작멈춤
  function btn_init(btnn) {
    $(btnn).css("pointer-events", "none");
    setTimeout(function () {
      $(btnn).css("pointer-events", "auto");
    }, 1000);
  }
  slide_start();

  // 마우스 호버시 멈춤
  $(".slide_img").hover(
    function () {
      clearInterval(slide_st);
    },
    function () {
      slide_start();
    }
  );

  // 슬라이드 시작
  function slide_start() {
    slide_st = setInterval(function () {
      $(".right").trigger("click");
    }, timer);
  }

  // 모달
  $("#c_btn").click(function () {
    $(".modal").hide();
    $(".modal_bg").hide();

    $("body").css({
      overflow: "visible",
    });
  });
});
