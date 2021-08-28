$(document).ready(function(){

    $('.cont_bot_box').eq(0).css('left','0');
    var index = 1;

    var cont_inter = setInterval(function(){
        $('.cont_bot_box').eq(index % 2).css('left','100%').animate({
            left:"0"
        },2000);
        $('.cont_bot_box').eq((index - 1) % 2).animate({
            left:"-100%"
        },2000);
        index++;
    },4500);

    $('.cont_bot_box').hover(function(){
        clearInterval(cont_inter);
        
    },function(){
        cont_inter;
    });


    // scroll 효과
    var h1_top = $('.cont:nth-child(1)').offset().top;
    var h2_top = $('.cont:nth-child(2)').offset().top;
    var h3_top = $('.cont:nth-child(2)').height() + h2_top;

    $(window).scroll(function(){
        
        var s_top = $(window).scrollTop() + 500;
    // console.log("s_top: " + s_top + " ,h1_top: " +h1_top +" , h2_top: " + h2_top + " ,h3_top: " +h3_top);
    
        if( s_top >= h1_top && s_top <= h2_top){
            $('.c_img').eq(0).css({
                transform:"scale(1)",
                transition:"all 1s"
            });
        }else if(s_top >= h2_top && s_top <= h3_top){ 
            $('.c_img').eq(1).css({
                transform:"scale(1)",
                transition:"all 1s"
            });
        }else if(s_top >= h3_top){
            $('.c_img').eq(2).css({
                transform:"scale(1)",
                transition:"all 1s"
            });
        }else {}

        
    });
});