"use strict";

$(window).scroll(() => {
  const w_w = $(window).innerWidth();
  let sTop = $(window).scrollTop();
  let prTop = $("section.pr").offset().top;

  if (sTop > 50) {
    $("header .email, header .memo").addClass("slide");
  } else {
    $("header .email, header .memo").removeClass("slide");
  }

  if (sTop > prTop - 300 && w_w > 720) {
    $("section.pr .slide-text").addClass("slide");
  } else {
    $("section.pr .slide-text").removeClass("slide");
  }
});

$(function () {
  // 작업물 슬라이드
  let pageSwiper = new Swiper("#workSlide", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
  });
});
