"use strict";

function share_face() {
  window.open(
    "https://www.facebook.com/login.php?u=http://hyewon.pe.kr/sub/clone-daejeon-sub.htm"
  );
}

function share_kakao() {
  kakao.init("f956ede45bc735618bb63abc8b36d7f0");
  kakao.Link.sendTalkLink({
    label: "노혜원 포트폴리오의 대전광역시 코로나 현황 ",
    image: {
      src: "http://hyewon.pe.kr/img/logo%20(1).png",
      width: "250",
      height: "100",
    },
    webButton: {
      text: "링크부분에 보일 글",
      url: "http://hyewon.pe.kr/",
    },
  });
}

$(document).ready(function() {
    let n_href = window.location.pathname;
    console.log(n_href);
    if(n_href == '/html/clone-daejeon-sub2.html') {
        $('header ul.btn li:nth-child(3)').addClass('back_yellow');
    }else if(n_href == '/html/clone-daejeon-sub.html') {
        $('header ul.btn li:nth-child(1)').addClass('back_yellow');
    }else{

    }

});