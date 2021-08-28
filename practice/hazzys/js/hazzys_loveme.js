$(document).ready(function(){
    
    var c_top = $('.cont_top').offset().top;
    var c_b_top = $('.cont_bot').offset().top;
    console.log(c_top);
    $(window).scroll(function(){

        var s_top = $(window).scrollTop() + 500;    

        if(s_top >= c_top  && s_top <= c_b_top){
            $('.cont_top').css({
                transform:"translateY(0)",
                transition:"all 1s",
                opacity:"1"
            });
        }else if(s_top >= c_b_top){
            $('.cont_bot').css({
                transform:"translateY(0)",
                transition:"all 1s",
                opacity:"1"
            });
        }
    })
});