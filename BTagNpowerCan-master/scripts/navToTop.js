//http://jsfiddle.net/5n5MA/2/
var fixmeTop = $('nav').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('nav').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {
        $('nav').css({
            position: 'relative'
        });
    }
});