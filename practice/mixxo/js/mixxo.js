$(document).ready(function(){

    $('.slide_img').eq(0).css('left','0');
    $('.cir').eq(0).css('background','rgba(255,255,255,0.5)');

    // 슬라이드
    var s_slide;
    var index = 1;
    var slide_n = $('.slide_img').length;
    var time = 1000;
    var timer = time + 2000;

    $('.slide').hover(function(){
        clearInterval(s_slide);
    },function(){
        slide_start();
    });

    slide_start();
    function slide_start() {

        s_slide = setInterval(function(){
            $('.cir').eq(index % slide_n).css('background','rgba(255,255,255,0.5)');
            $('.cir').eq((index - 1) % slide_n).css('background','rgba(0,0,0,0.4)');
            
            $('.slide_img').eq(index % slide_n).css('left','100%').animate({
                left:"0"
            },time);
            $('.slide_img').eq((index - 1) % slide_n).animate({
                left:"-100%"
            },time);
            index++;
            
        },timer);
    }

    $('.cir').click(function(){
        var cir_index = $(this).index();
        
        $('.slide_img').eq(cir_index).css('left','100%').animate({
            left:"0"
        },time);
        $('.slide_img').eq(index - 1).animate({
            left:"-100%"
        },time);

        $('.cir').css('background','rgba(0,0,0,0.4)');
        $('.cir').eq(cir_index).css('background','rgba(255,255,255,0.5)');

        index = cir_index + 1;
    });  

    // best style
    $('.clothing').click(function(){
        $(this).parent().siblings('.best_line').show();
        $(this).parent().siblings('.tab_accessory').hide();
        $(this).parent().siblings('.tab_mixxo').hide();
    });
    $('.accessory').click(function(){
        $(this).parent().siblings('.best_line').hide();
        $(this).parent().siblings('.tab_accessory').show();
        $(this).parent().siblings('.tab_mixxo').hide();
    });
    $('.mixxom').click(function(){
        $(this).parent().siblings('.best_line').hide();
        $(this).parent().siblings('.tab_accessory').hide();
        $(this).parent().siblings('.tab_mixxo').show();
    });
    // NEW ARRIVAL
    $('.clothing1').click(function(){
        $(this).parent().siblings('.new_arr').show();
        $(this).parent().siblings('.new_acc').hide();
        $(this).parent().siblings('.new_mim').hide();
    });
    $('.accessory1').click(function(){
        $(this).parent().siblings('.new_arr').hide();
        $(this).parent().siblings('.new_acc').show();
        $(this).parent().siblings('.new_mim').hide();
    });
    $('.mixxom1').click(function(){
        $(this).parent().siblings('.new_arr').hide();
        $(this).parent().siblings('.new_acc').hide();
        $(this).parent().siblings('.new_mim').show();
    });
    
    
});