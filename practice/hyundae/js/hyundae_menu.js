$(document).ready(function () {
  $(".menu").hover(
    function () {
      $(".sub_menu,.fake_sub").stop().slideDown();
    },
    function () {
      $(".sub_menu,.fake_sub").stop().slideUp();
    }
  );

  $(".sub_menu li").hover(
    function () {
      $(this).children("a").css({
        color: "#333",
        fontWeight: "bold",
      });
      $(this).parent().prev("a").css({
        color: "#333",
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
      $(this).children("a").css("background", "rgb(156,32,51)");
      $(this).children("a").css("background", "rgb(255,255,255,0.2)");
      $(this).children("a").css({
        fontWeight: "bold",
      });
    },
    function () {
      $(this).children(".ham_sub_menu").stop().slideUp();
      $(this).children("a").css("background", "transparent");
      $(this).children("a").css({
        fontWeight: "normal",
      });
    }
  );

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
});
