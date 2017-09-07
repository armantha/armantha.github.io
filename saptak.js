$(document).ready(function() {
    $('#dispic').animate({top: '+=100'},3000);

    $('h1').animate({top : '+=175'},3000);

	$('.saptak').mouseenter(function() {
        $('.saptak').fadeTo('fast',1);
});
    $('.saptak').mouseleave(function() {
        $('.saptak').fadeTo('fast',0.5);
    });

    $('.perpendi').mouseenter(function() {
        $('.perpendi').fadeTo('fast',1);
});
    $('.perpendi').mouseleave(function() {
        $('.perpendi').fadeTo('fast',0.5);
    });

    $('.toddle').mouseenter(function() {
        $('.toddle').fadeTo('fast',1);
});
    $('.toddle').mouseleave(function() {
        $('.toddle').fadeTo('fast',0.5);
    });

    $('.blinker').mouseenter(function() {
        $('.blinker').fadeTo('fast',1);
});
    $('.blinker').mouseleave(function() {
        $('.blinker').fadeTo('fast',0.5);
    });

});