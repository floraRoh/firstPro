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
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    freeMode: true,
    breakpoints : { 
      1920 : {
        slidesPerView : 5,
        slidesPerGroup: 5,
      },
      1024 : {
        slidesPerView : 3,
        slidesPerGroup: 3,
      },
      780 : {
        slidesPerView : 2,
        slidesPerGroup: 2,
      },
      0 : {
        slidesPerView : 1,
        slidesPerGroup: 1,
      },
    },
  });
});
