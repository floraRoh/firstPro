$(document).ready(function () {
  // 게시판 페이드인,아웃
  $("#media_total").click(function () {
    event.preventDefault();
    media_fade(
      ".section_wrap_1",
      ".section_wrap_2",
      ".section_wrap_3",
      ".section_wrap_4",
      ".section_wrap_5"
    );

    media_re();
    media_font("#media_total");
  });
  $("#media_best").click(function () {
    event.preventDefault();
    media_fade(
      ".section_wrap_2",
      ".section_wrap_1",
      ".section_wrap_3",
      ".section_wrap_4",
      ".section_wrap_5"
    );

    media_re();
    media_font("#media_best");
  });
  $("#media_screen").click(function () {
    event.preventDefault();
    media_fade(
      ".section_wrap_3",
      ".section_wrap_1",
      ".section_wrap_2",
      ".section_wrap_4",
      ".section_wrap_5"
    );

    media_re();
    media_font("#media_screen");
  });
  $("#media_video").click(function () {
    event.preventDefault();
    media_fade(
      ".section_wrap_4",
      ".section_wrap_1",
      ".section_wrap_2",
      ".section_wrap_3",
      ".section_wrap_5"
    );

    media_re();
    media_font("#media_video");
  });
  $("#media_comp").click(function () {
    event.preventDefault();
    media_fade(
      ".section_wrap_5",
      ".section_wrap_1",
      ".section_wrap_2",
      ".section_wrap_3",
      ".section_wrap_4"
    );

    media_re();
    media_font("#media_comp");
  });
  function media_fade(media1, media2, media3, media4, media5) {
    $(media1).fadeIn();
    $(media2).fadeOut();
    $(media3).fadeOut();
    $(media4).fadeOut();
    $(media5).fadeOut();
  }

  function media_re() {
    $(".m_t_title").children().children("a").css("color", "#111");
    $(".m_t_title").children("p").css("background", "#fff");
  }

  function media_font(fon) {
    $(fon).css("background", "#111");
    $(fon).children("a").css("color", "#fff");
  }
});
