"use strict";

$(document).ready(function () {


  //  메인 슬라이드 페이드인/아웃
  let index = 1;
  let slide_leng = $(".sec_slide").length;
  let slide_on;
  // console.log(slide_leng);
  $(".sec_slide").eq(0).css("display", "block");
  $(".indi .cir").eq(0).addClass("cir_on");

  function slide_start() {
    slide_on = setInterval(function () {
      slide_on_func(index % slide_leng, (index - 1) % slide_leng);
      index++;
    }, 4000);
  }

  slide_start();

  function slide_on_func(com, out) {
    // slide fadeIn, Out
    $(".sec_slide").eq(com).fadeIn(3000);
    $(".sec_slide").eq(out).fadeOut(2000);

    // 초기화
    $(".indi .cir").removeClass("cir_w");
    $(".menu li a").removeClass("menu_on");
    $(".logo img").attr("src", "../img/logo.png");
      if (com === 2) {
        $(".indi .cir").addClass("cir_w");
        $(".menu li a").addClass("menu_on");
        $(".logo img").attr("src", "../img/logo_w.png");
      } else if (com === 3) {
        $(".menu li a").addClass("menu_on");
      } else {
      }
   // add, remove class .cir of indicator
  $(".indi .cir").removeClass("cir_on");
  $(".indi .cir").eq(com).addClass("cir_on");
  }

  $(".indi .cir").click(function () {
    let indi_index = $(this).index();
    console.log('indi_index : '+indi_index);

    btn_init($('.indi .cir').eq(indi_index));
    $('.sec_slide').fadeOut(2000);
    $('.sec_slide').eq(indi_index).fadeIn(3000);
    // slide_on_func(indi_index, (indi_index - 1));
    
  });
  // btn 클릭 멈춤 
  function btn_init(btnn) {
    $(btnn).css('pointer-events','none');
    setTimeout(function() {
        $(btnn).css('pointer-events','auto');
    },1000);
}
  // sec_slide 호버시 멈춤
  $(".sec_slide").hover(
    function () {
      clearInterval(slide_start);
    },
    function () {
      slide_start();
    }
  );

});
