"use strict";

$(document).ready(function () {
  let menu_1 = $(".info_list").offset().top;
  let menu_2 = $(".working_list").offset().top;
  let menu_3 = $(".webs").offset().top;
  let h_height = $("header").attr("height");

  // top 버튼
  $("#top").click(function () {
    menu_click(100);
  });
  $("a").on("click", function () {
    let li_click = $(this).attr("class");
    if (li_click === "menu_info") {
      menu_click(menu_1);
    } else if (li_click === "menu_port") {
      menu_click(menu_2);
    } else if (li_click === "menu_ques") {
      menu_click(menu_3 - 100);
    } else {
    }
  });

  // menu button
  function menu_click(menu_po) {
    $("html, body").animate(
      {
        scrollTop: menu_po - 200,
      },
      800
    );
  }

  // 헤더 슬라이드 내리면 위로 헤더 붙이기 + slide stop
  let h_top = $("header").offset().top + 50;
  $(window).scroll(function () {
    let w_scroll = $(window).scrollTop();
    console.log(w_scroll);
    if (w_scroll > h_top) {
      $("header").addClass("fixed");
      $("header .logo img").attr("src", "../img/logo.png");
      $("#menu_ham li").css("background", "#555555");
    } else {
      $("header").removeClass("fixed");
      $("header .logo img").attr("src", "../img/logo_w.png");
      $("#menu_ham li").css("background", "white");
    }
  });

  // 포폴 사이트 더보기
  let line_list = $("ul.list li").length;
  console.log(line_list);

  if (line_list > 16) {
    $(".list li:nth-child(n+17)").hide();
  }

  let plus_num = 0;
  $(".list_plus").click(function () {
    let aa = $(this).parent().attr("id");
    slide_toggles("#" + aa + " li:nth-child(n+17)");
    //$('#' + aa + ' li:nth-child(n+17)').slideToggle();
    plus_num++;
    console.log(plus_num);
    if (plus_num % 2 === 0) {
      $(this).html("전체보기");
    }
    if (plus_num % 2 === 1) {
      $(this).html("줄이기");
    }
  });

  //   디자인, 코딩 등 페이지 나오기
  $("div.btns button").on("click", function () {
    let btn_b = $(this).attr("class");
    plus_num = 0;

    $("ul.list").fadeOut();
    if (btn_b === "full_btn") {
      $("#full_p li:nth-child(n+17)").hide();
      $("ul.list#full_p").fadeIn();
    } else if (btn_b === "coding_btn") {
      $("#coding_p li:nth-child(n+17)").hide();
      $("ul.list#coding_p").fadeIn();
    } else if (btn_b === "one_btn") {
      $("#one_p li:nth-child(n+17)").hide();
      $("ul.list#one_p").fadeIn();
    } else {
    }
  });

  // menu slide toggle
  $("#menu_ham").click(function () {
    slide_toggles(".menu");
  });
  function slide_toggles(slide_nn) {
    $(slide_nn).slideToggle();
  }
});
