$(document).ready(function(){
// 햄버거 나오기 
    var hamberg = true;
    $('.ham').click(function(){
        if(hamberg) {
            $('#line-t').removeClass('line-t-ro');
            $('#line-m').removeClass('line-m-ro');
            $('#line-b').removeClass('line-b-ro');

            $('#line-t').addClass('line-t');
            $('#line-m').addClass('line-m');
            $('#line-b').addClass('line-b');

            $('.ham_menu').css({
                right:"0"
            });

            hamberg = false;
        }else{
            $('#line-t').removeClass('line-t');
            $('#line-m').removeClass('line-m');
            $('#line-b').removeClass('line-b');

            $('#line-t').addClass('line-t-ro');
            $('#line-m').addClass('line-m-ro');
            $('#line-b').addClass('line-b-ro');

            $('.ham_menu').css({
                right:"-170px"
            });
            
            hamberg = true;
        }
    });


    // 햄버거 메뉴
    $('.ham_menu li').hover(function(){
        $(this).css({
            background:"rgba(0,0,0,0.4)"
        });
    },function(){
        $(this).css({
            background:'transparent'
        });
    });
    // home 으로 돌아가기
    $('.btn_top a').click(function() {
        event.preventDefault();
        var pos = $($(this).attr('href')).offset().top;
        
        $('html,body').animate({
            scrollTop : pos
        },500);
    });


    // 메뉴 페이드인아웃
    $('.menu').mouseenter(function(){
        $('.sub_menu, .fake_sub').stop().slideDown();
    });
    $('.menu').mouseleave(function(){
        $('.sub_menu, .fake_sub').stop().slideUp();
    });

    $('.sub_menu li').mouseenter(function(){
        $(this).css({
            background:"rgba(0,0,0,0.4)"
        });
        $(this).parent().prev('a').css({
            color:"red"
        });
    });
    $('.sub_menu li').mouseleave(function(){
        $(this).css({
            background:"#0b2575"
        });
        $(this).parent().prev('a').css({
            color:"#222328"
        });
    });    
});