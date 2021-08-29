$(document).ready(function () {
  //top button
  $(".top").click(function () {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });

  //footer
  $(".f_mid_sub li a").hover(
    function () {
      $(this).css({
        fontWeight: "bold",
        color: "rgb(156,32,51)",
      });
    },
    function () {
      $(this).css({
        fontWeight: "normal",
        color: "#333",
      });
    }
  );
  $(".main_menu").hover(
    function () {
      $(this).children(".sub_menu").stop().slideDown();
    },
    function () {
      $(this).children(".sub_menu").stop().slideUp();
    }
  );

  $(".sub_menu li").hover(
    function () {
      $(this).children("a").css({
        color: "rgb(156,32,51)",
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
        color: "#fff",
      });
    }
  );

  // 스크롤 바

  // $(".sec").each(function (e) {
  //     $(this).on("mousewheel DOMMouseScroll", function (e) {
  //         e.preventDefault();
  //         if (!event) {
  //             event = window.event;
  //         }
  //         if (event.wheelDelta) {
  //             direction = event.wheelDelta / 120;
  //             if(window.opera) direction = -direction;
  //         }
  //         else if(event.detail){
  //             direction = -event.detail / $('.sec').length;
  //         }

  //         var nextPos;
  //         var s_top = $(window).scrollTop();
  //         var w_height = $(window).height();
  //         var d_height = $(document).height();
  //         if (direction < 0) {
  //             if($(this).next().length > 0) {
  //                 nextPos = $(this).next().offset().top;
  //             }
  //         }
  //         else {
  //             if($($(this).prev()).length > 0) {
  //                 nextPos = $(this).prev().offset().top;
  //             }
  //         }
  //         $("html,body").stop().animate({ scrollTop: nextPos }, 500);
  //     });
  // });
  var direction;
  var event = Event;
  $(window).each(function (e) {
    $(".sec").on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      if (!event) {
        event = window.event;
      }
      if (event.wheelDelta) {
        direction = event.wheelDelta / 120;
        if (window.opera) direction = -direction;
      } else if (event.detail) {
        direction = -event.detail / $(".sec").length;
      }

      var nextPos;
      var s_top = $(window).scrollTop();
      var w_height = $(window).height();
      var d_height = $(document).height();
      if (direction < 0) {
        if ($(this).next().length > 0) {
          nextPos = $(this).next().offset().top;
        }
      } else {
        if ($($(this).prev()).length > 0) {
          nextPos = $(this).prev().offset().top;
        }
      }
      $("html,body").stop().animate({ scrollTop: nextPos }, 500);
      var wheel_count = event.wheeldata;
      console.log(wheel_count + " : count");
      console.log(direction + " : direction");
    });
  });

  $(".sec2_part").hover(
    function () {
      $(this).children(".sec2_part_hover").css({
        transform: "translateX(0)",
      });
    },
    function () {
      $(this).children(".sec2_part_hover").css({
        transform: "translateX(-100%)",
      });
    }
  );

  // slide line
  var index = 0;
  var bgimgL = $(".bg_img").length;
  $(".bg_img").eq(0).css("display", "block");

  setInterval(function () {
    $(".bg_img")
      .eq(index % bgimgL)
      .fadeIn();
    $(".bg_img")
      .eq((index - 1) % bgimgL)
      .fadeOut();
    index++;
  }, 4000);

  // sec2 scroll
  $(window).scroll(function () {
    var sec2_top = $(".sec2").offset().top;
    var sc_top = $(window).scrollTop();

    if (sec2_top == sc_top) {
      $(".sec2_t").css({
        transform: "translateY(0)",
        transition: "all .2s",
      });
    }
  });
  // sec4 scroll
  $(window).scroll(function () {
    var sec2_top = $(".sec2").offset().top;
    var sc_top = $(window).scrollTop();

    if (sec2_top == sc_top) {
      $(".sec2_t").css({
        transform: "translateY(0)",
        transition: "all .2s",
      });
    }
  });

  // ham_menu
  var tog = true;
  $(".ham").click(function () {
    if (tog) {
      $(".ham_menu").animate(
        {
          right: 0,
        },
        500
      );
      tog = false;
    } else {
      $(".ham_menu").animate(
        {
          right: "-220px",
        },
        500
      );
      tog = true;
    }
  });

  // ham_main_menu
  $(".ham_main_menu").hover(
    function () {
      $(this).children(".ham_sub_menu").stop().slideDown();
      $(this).children("a").css({
        fontWeight: "bold",
        fontSize: "17px",
      });
    },
    function () {
      $(this).children(".ham_sub_menu").stop().slideUp();
      $(this).children("a").css("background", "transparent");
      $(this).children("a").css({
        fontWeight: "normal",
        fontSize: "15px",
      });
    }
  );
});
