$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout:7000,
        autoplayHoverPause:7000,
    });
});

$('.mobile-btn').on('click', function() {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__menu').toggleClass('show-menu');
    $('.header__link').toggleClass('show-link');
})

$('.header__menu nav a').on('click', function() {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__menu').removeClass(show-menu);
    $('.header__link').tremoveClass('show-link');
})
