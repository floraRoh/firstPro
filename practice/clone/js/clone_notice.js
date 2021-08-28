$(document).ready(function(){

    function com_css(fr_css) {
        $(fr_css).hover(function(){
            $(fr_css).css({
                background:"#ddd",
                fontWeight:"bold"
            });
        },function(){
            $(fr_css).css({
                background:"#fff",
                fontWeight:"normal"
            });
        }); 
    }

    
});

