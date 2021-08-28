$(document).ready(function(){
       
        var s_top = $(window).scrollTop() + 500;
        var h_top = $('.main_banner').height();
        var b_top = $('.content').offset().top;
        var l_top = $('.business').offset().top;
        
    $(window).scroll(function(){
        var s_top = $(window).scrollTop() + 400;
        var h_top = $('.main_banner').height();
        var b_top = $('.content').offset().top + 300;
        var l_top = $('.business').offset().top;

        function delay_time(com) {
            $(com).css({
                transform:"translateY(0)",
                opacity:"1",
                transition:"all .8s"
            });
        }

        if(s_top >= h_top && s_top <= b_top){
            // con
            delay_time('.con');
        }
        else if(s_top >= b_top && s_top <= l_top){
             // business
             delay_time('.business_box');

        }
        else if(s_top >= l_top){
            //contact
            delay_time('.contact');
        }else{

        }
    });
});

