//прелоадер
$(window).load(function() {
    $('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
    $('#before-load').fadeOut().end().delay(400).fadeOut('slow');
});
$(document).ready(function(){
    //прокрутка логотипа
    setInterval(function(){
        setTimeout(function(){
            $('.logo').addClass('flip');
        },5000);
        $('.logo').removeClass('flip');
    },10000);
    // дергается телефон на контактах
    setInterval(function(){
        setTimeout(function(){
            $('.phoneNum').addClass('tada');
        },2000);
            $('.phoneNum').removeClass('tada');
    },3000);
    //движение патефона на социалках
    setInterval(function(){
        setTimeout(function(){
            $('.socializm').addClass('shake');
        },4500);
        $('.socializm').removeClass('shake');
    },6000);
    //разворачивание и сворачивание описания услуг перед футером
    $('#info').hide("slow");
    $('#more').click(function(){
        $(this).next().slideToggle();
    });
    //динамика при клике на определенные табы
    if($('#tab2').click()){
        $('.vipadLeft').addClass('slideInLeft');
        $('.vipadRight').addClass('slideInRight');
        $('.vipadBottom').addClass('slideInDown');
    } else {
        $('.vipadLeft').removeClass('slideInLeft');
        $('.vipadRight').removeClass('slideInRight');
        $('.vipadBottom').removeClass('zoomIn');
    };
    if($('#tab3').click()){
        $('.col').addClass('animated bounceInUp')
    } else {
        $('.col').removeClass('animated bounceInUp')
    };
    if($("#tab4").click()){
        $('.sotialLinks').addClass('zoomIn')
    } else{
        $('.sotialLinks').removeClass('zoomIn')
    };
});