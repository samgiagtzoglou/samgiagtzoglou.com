$(window).scroll(function() {
    if ($(".navbar").offset().top > 200) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".nav-icon").addClass("nav-icon-show");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".nav-icon").removeClass("nav-icon-show");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
