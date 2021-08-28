$(document).ready(function(){
    
    $(window).scroll(function(){
        var w_top = $(window).scrollTop();
        if(w_top >= 250){
            $('.busi_0').children('div').css({
                transform:"translateX(0)",
                transition:"all .8s"
            });

            $('.busi_img').css({
                transform:"scale(1)",
                transition:"all .8s"
            });
        }
    });
});