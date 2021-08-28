$(document).ready(function(){

    $('#t1').click(function(){
        fade_n('.t_store','.t_ins','.t_coffee','.t_pran','.t_comp');
   });
   $('#t2').click(function(){
        event.preventDefault();
        fade_n('.t_ins','.t_store','.t_coffee','.t_pran','.t_comp');
    });
    $('#t3').click(function(){
        fade_n('.t_coffee','.t_ins','.t_store','.t_pran','.t_comp');
    });
    $('#t4').click(function(){
        fade_n('.t_pran','.t_ins','.t_coffee','.f_store','.t_comp');
    });
    $('#t5').click(function(){
        fade_n('.t_comp','.t_ins','.t_coffee','.t_pran','.t_store');
    });
    
    function fade_n (fn1,fn2,fn3,fn4,fn5) {
        event.preventDefault();
        $(fn1).fadeIn();
        $(fn2).fadeOut();
        $(fn3).fadeOut();
        $(fn4).fadeOut();
        $(fn5).fadeOut();
    }

});
