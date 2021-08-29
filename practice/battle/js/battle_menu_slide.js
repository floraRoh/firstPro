$(document).ready(function () {
  // menu slide
  $(".menu").hover(
    function () {
      $(".sub_menu").stop().slideDown();
      $(".fake_sub").stop().slideDown();
    },
    function () {
      $(".sub_menu").stop().slideUp();
      $(".fake_sub").stop().slideUp();
    }
  );

  $(".sub_menu li").hover(
    function () {
      $(this).children("a").css({
        color: "gold",
        textDecoration: "underline",
      });
      $(".sub_menu li").parent().prev("a").css({
        opacity: "0.5",
      });
      $(this).parent().prev("a").css({
        opacity: "1",
      });
    },
    function () {
      $(this).children("a").css({
        color: "#fff",
        textDecoration: "none",
      });
      $(".sub_menu li").parent().prev("a").css({
        opacity: "1",
      });
    }
  );

  // header scroll
  var h_top = $(".header").offset().top;
  $(window).scroll(function () {
    var w_scroll = $(window).scrollTop();
    if (w_scroll >= h_top) {
      $(".header").addClass("fixed");
      $(".header_size").css("width", "90%");
    } else {
      $(".header").removeClass("fixed");
      $(".header_size").css("width", "80%");
    }
  });

  // game_start
  var x = 0;
  var game;

  $(".game_start").hover(
    function () {
      game = setInterval(function () {
        $(".game_start").css({
          backgroundPosition: "0px -" + x + "px",
        });
        x += 91;
        console.log(x);
        console.log("1");
        if (x == 2912) {
          x = 0;
        }
      }, 20);
    },
    function () {
      clearInterval(game);
    }
  );
});
