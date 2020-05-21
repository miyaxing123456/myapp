$(document).ready(function () {

    $('.menu').click(function() {
        $('.overlay').toggleClass('anim');
        $(this).addClass('open');
        event.stopPropagation();
    });

    $('.open').click(function(){
        $('.overlay').toggleClass('reverse-animation');
        event.stopPropagation();
    });
    $("body").click(function(){
        $('.overlay').removeClass('reverse-animation');
        $('.overlay').removeClass('anim');
    })
});