$(document).ready(function(){
    
    var count = true;
    $('.qn').click(function(){
        if(count){
            $(this).next('.na').stop().slideDown(300);
            $(this).children('.qna_img').text("∧");
            count = false;
        }else{
            $(this).next('.na').stop().slideUp(300);
            $(this).children('.qna_img').text("∨");
            count = true;
        }
    });
});