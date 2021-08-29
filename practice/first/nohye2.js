$(document).ready(function () {
  // scroll 효과
  var history_top = $(".history").offset().top - 160;
  var work_top = $(".work_banner").offset().top - 160;
  var contact_top = $(".contact_banner").offset().top;

  $(window).resize(function () {
    var w_width = $(window).width();
    if (w_width >= 768) {
      $(".ham_menu").slideUp(400);
    }
  });
  $(window).scroll(function () {
    var s_top = $(window).scrollTop();
    if (s_top >= 100) {
      $(".header").addClass("header_fixed");
      $(".menu li").css("color", "#fff");
      $(".logo").css({
        background: "url('img/logo_w.png')",
      });
      $(".ham_line").css("background", "#ddd");
    } else {
      $(".header").removeClass("header_fixed");
      $(".menu li").css("color", "#222328");
      $(".logo").css("background", 'url("img/logo.png")');
      $(".ham_line").css("background", "#222328");
    }

    if (s_top >= work_top + 100) {
      $(".work").css({
        opacity: "1",
        transform: "translateY(0)",
      });
    }
    if (s_top >= history_top - 150) {
      $(".his_bot").css({
        opacity: "1",
        transform: "translateY(0)",
      });
    }
  });

  $(".logo").click(function () {
    s_topp(0);
  });
  $("#history").click(function () {
    s_topp(history_top);
    console.log("menu" + history_top);
  });
  $("#port").click(function () {
    s_topp(work_top);
    console.log("menu" + work_top);
  });
  $("#conta").click(function () {
    s_topp(contact_top);
  });

  $("#h_history").click(function () {
    s_topp(history_top - 70);
    console.log(history_top - 70);
  });
  $("#h_port").click(function () {
    s_topp(work_top - 70);
    console.log(work_top - 70);
  });
  $("#h_conta").click(function () {
    s_topp(contact_top);
  });

  function s_topp(h_top) {
    $("html,body").animate(
      {
        scrollTop: h_top,
      },
      800
    );
  }

  // ham_click
  var t_f = true;
  $(".ham").click(function () {
    if (t_f) {
      $(".ham_menu").slideDown(400);
      t_f = false;
    } else {
      $(".ham_menu").slideUp(400);
      t_f = true;
    }
  });
  // work_ img 이동
  $(".work_line a").hover(
    function () {
      var h = $(this).children("img").height();
      var hh = $(this).height();
      var tmp = h - hh;

      $(this)
        .children("img")
        .css({
          transform: "translateY(-" + tmp + "px)",
          transition: "all .8s",
        });
    },
    function () {
      $(this).children("img").css({
        transform: "translateY(0)",
      });
    }
  );
});
