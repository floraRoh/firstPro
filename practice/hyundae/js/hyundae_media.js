$(document).ready(function () {
  $(".sub_menu li").hover(
    function () {
      $(this).children("a").css({
        color: "#fff",
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
        color: "#333",
      });
    }
  );

  // 보도자료 탭
  $(".notice_t_bot_fl p").eq(0).css("background", "rgb(156,32,51)");
  $(".notice_t_bot_fl p").eq(0).children("a").css("color", "#fff");
  $(".notice_box").eq(0).css("display", "block");

  $("#notice_tab1").click(function () {
    event.preventDefault();
    tabb(".notice_box", ".tab1");
    tab_style(".nt", this);
  });
  $("#notice_tab2").click(function () {
    event.preventDefault();
    tabb(".notice_box", ".tab2");
    tab_style(".nt", this);
  });
  $("#notice_tab3").click(function () {
    event.preventDefault();
    tabb(".notice_box", ".tab3");
    tab_style(".nt", this);
  });
  $("#notice_tab4").click(function () {
    event.preventDefault();
    tabb(".notice_box", ".tab4");
    tab_style(".nt", this);
  });
  function tabb(tab_all, tab_show) {
    $(tab_all).hide();
    $(tab_show).show();
  }
  function tab_style(ntt, t_st) {
    $(ntt).css("background", "#fff");
    $(ntt).children("a").css("color", "#333");

    $(t_st).css("background", "rgb(156,32,51)");
    $(t_st).children("a").css("color", "#fff");
  }
});
