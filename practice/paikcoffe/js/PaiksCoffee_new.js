$(document).ready(function(){

           
    $(window).scroll(function(){
        var n_top = $('.new_1').offset().top;
        var n2_top = $('.new_2').offset().top;
        var n3_top = $('.top_seller').offset().top - 100;
        var s_top = $(window).scrollTop() + 500; 
        
        console.log(s_top);
        console.log("n_top"+n_top);

        if(s_top >= n_top && s_top <= n2_top){
            $('.new_1_fl, .new_1_fr').css({
                transform:"translateX(0)",
                transition:"all .8s"
            });
        }else if(s_top >= n2_top && s_top <= n3_top){
            $('.new_2_fl, .new_2_fr').css({
                transform:"translateX(0)",
                transition:"all .8s"
            });
        }else{
            $('.top_seller').css({
                transform:"translateY(0)",
                transition:"all .8s",
                opacity:"1"
            });
        }
    });

});
