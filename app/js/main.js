$(function () {

    //_______slider_______

    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: 3000,

    });

    // _________slicknav_______

    $('.mobile-menu').slicknav({
        appendTo: '.header-items__top',
        label: '',

    });
});

