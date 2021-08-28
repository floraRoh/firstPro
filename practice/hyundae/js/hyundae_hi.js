$(document).ready(function(){
    $('.sub_menu li').hover(function(){
        $(this).children('a').css({
            color:"#fff",
            fontWeight:"bold"
        });
        $(this).parent().prev('a').css({
            color:"rgb(156,32,51)"
        });
    },function(){
        $(this).children('a').css({
            color:"#fff",
            fontWeight:"normal"
        });
        $(this).parent().prev('a').css({
            color:"#333"
        });
    });

  
});