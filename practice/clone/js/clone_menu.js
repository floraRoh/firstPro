$(document).ready(function(){
    $('.main_menu').hover(function(){
        $(this).children('.sub_menu').stop().slideDown();
    },function(){
        $(this).children('.sub_menu').stop().slideUp();
    });


    var s_menu = $('.header_bot').offset().top;
    
    $(window).scroll(function(){
    
        var s_top = $(window).scrollTop();
    
        if(s_top >= s_menu){
            $('.header_bot').addClass('header_fixed');
            $('.ham_menu').css({
                top:"80px",
            });
        }else{
            $('.header_bot').removeClass('header_fixed');
            $('.ham_menu').css({
                top:"110px",
            });
        }
    });

    var  true_false = true;
    $('.ham').click(function(){

        if(true_false){
            $('#line_t').removeClass('h_line1_ro');
            $('#line_m').removeClass('h_line2_ro');
            $('#line_b').removeClass('h_line3_ro');

            $('#line_t').addClass('h_line1');
            $('#line_m').addClass('h_line2');
            $('#line_b').addClass('h_line3');

            $('.ham_menu').fadeIn(300);

            true_false = false;
        }else{
            $('#line_t').removeClass('h_line1');
            $('#line_m').removeClass('h_line2');
            $('#line_b').removeClass('h_line3');
            
            $('#line_t').addClass('h_line1_ro');
            $('#line_m').addClass('h_line2_ro');
            $('#line_b').addClass('h_line3_ro');
            true_false = true;

            $('.ham_menu').fadeOut(300);
        }
    });

    // main_img slide
    $('.main_img').eq(0).css('left','0');
    $('.indi_cir').eq(0).css('background','rgba(255,255,255,0.5)');
    
    var slide_n = $('.main_img').length;
    var index = 1;
    var start_slide;

    $('.left').click(function(){
        index--;
        btn_init('.left');
        interval_slide((index - 1) % slide_n,'-100%',index % slide_n, '100%');
    });
    $('.right').click(function(){
        btn_init('.right');
        interval_slide(index % slide_n,'100%',(index - 1) % slide_n, '-100%');
        index++;
    });

    function interval_slide (com,comp,out,outp) {

        $('.main_img').eq(com).css({
            left:comp
        }).animate({
            left:0
        },1000); 
        
        $('.main_img').eq(out).animate({
            left:outp
        },1000);
        
        // indi 컬러변경
        $('.indi_cir').eq(com).css({
            background:'rgba(255,255,255,0.5)'
        });
        $('.indi_cir').eq(out).css({
            background:'rgba(0,0,0,0.5)'
        });
        
    }

    function s_slide () {
        start_slide = setInterval(function(){
            $('.right').trigger('click');
        },3000);
    }

    s_slide();

    $('.main_banner').hover(function(){
        clearInterval(start_slide);
    },function(){
        s_slide();
    });

    function btn_init(btnn) {
        $(btnn).css('pointer-events','none');
        setTimeout(function() {
            $(btnn).css('pointer-events','auto');
        },1000);
    }

    $('.indi_cir').click(function(){
        var indi_index = $(this).index();
        btn_init('.left');
        btn_init('.right');
        interval_slide(indi_index,'100%',(indi_index - 1) % slide_n, '-100%');
    
        index = indi_index + 1;
        
    });

});