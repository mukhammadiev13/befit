// preloader

document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('loader-done'));
        {
            preloader.classList.add('loader-done');
        }
    }, 1000);
};

// Swipers

var swiperContent = new Swiper('.content-swiper .swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    simulateTouch: false,
    allowTouchMove: false,
    navigation: {
        nextEl: '.content-swiper .swiper-button-next',
        prevEl: '.content-swiper .swiper-button-prev',
    },
});

var swiperContentMobile = new Swiper('.content-swiper__mobile .swiper-container', {
    spaceBetween: 10,
});

var bonusesSwiperItems = new Swiper('.bonuses-swiper__items .swiper-container', {
    spaceBetween: 10,
});

var myOrdersSwiper = new Swiper('.my-orders__swiper .swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
        nextEl: '.my-orders__swiper .swiper-button-next',
        prevEl: '.my-orders__swiper .swiper-button-prev',
    },
    breakpoints: {
        576: {
            simulateTouch: false,
            allowTouchMove: false,
        },
        575: {
            simulateTouch: true,
            allowTouchMove: true,
        }
    }
});

var orderAddSwiper = new Swiper('.order-add__swiper .swiper-container',{
    navigation: {
        nextEl: '.order-add__swiper .swiper-button-next',
        prevEl: '.order-add__swiper .swiper-button-prev',
    },
    breakpoints: {
        1025: {
            spaceBetween: 70,
            slidesPerView: 3,
            loop: true,
        },
        1024: {
            spaceBetween: 50,
            slidesPerView: 2,
        },
        575: {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: false,
        },
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: false,
        },
    },
});

var swiperModal = new Swiper('.modal-swiper .swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.modal-swiper .swiper-button-next',
        prevEl: '.modal-swiper .swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    breakpoints: {
        1025: {
            spaceBetween: 70,
            slidesPerView: 3,
            loop: true,
        },
        1024: {
            spaceBetween: 50,
            slidesPerView: 2,
        },
        575: {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: false,
        },
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: false,
        },
    },
});


//Header-fixed

window.onscroll = function showHeader() {
    var header = document.querySelector('.header-bottom');
    var headerMobile = document.querySelector('.header-mobile');

    if (window.pageYOffset > 150) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }

    if (window.pageYOffset > 150) {
        headerMobile.classList.add('header__fixed');
    } else {
        headerMobile.classList.remove('header__fixed');
    }
};


$(document).ready(function (e) {

    // Tab general

    $('.tab__button [data-tab]:first').addClass('tab-active');
    $('.tab__tab').hide();
    $('.tab__tab:first').show();

    $('.tab__button [data-tab]').click(function (e) {
        $('.tab__button [data-tab]').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('.tab__tab').hide();

        let activeTab = $(this).attr('data-tab');
        $(activeTab).fadeIn(300);

        if ($(window).width() <= 768) {
            e.preventDefault();

            let id = $(this).attr('data-tab'),
                top = $(id).offset().top;
            $('html, body').animate({scrollTop: top - 125}, 800);
        }

        return false;
    });

    // Tab-2

    $('.tab__button-2 [data-tab]:first').addClass('tab-2-active');
    $('.tab__tab-2').hide();
    $('.tab__tab-2:first').show();

    $('.tab__button-2 [data-tab]').click(function (e) {
        $('.tab__button-2 [data-tab]').removeClass('tab-2-active');
        $(this).addClass('tab-2-active');
        $('.tab__tab-2').hide();

        let activeTab = $(this).attr('data-tab');
        $(activeTab).fadeIn(300);

        if ($(window).width() <= 768) {
            e.preventDefault();

            let id = $(this).attr('data-tab'),
                top = $(id).offset().top;
            $('html, body').animate({scrollTop: top - 125}, 800);
        }

        return false;
    });

    // Tab-3

    $('.tab__button-3 [data-tab]:first').addClass('tab-2-active');
    $('.tab__tab-3').hide();
    $('.tab__tab-3:first').show();

    $('.tab__button-3 [data-tab]').click(function (e) {
        $('.tab__button-3 [data-tab]').removeClass('tab-2-active');
        $(this).addClass('tab-2-active');
        $('.tab__tab-3').hide();

        let activeTab = $(this).attr('data-tab');
        $(activeTab).fadeIn(300);

        if ($(window).width() <= 768) {
            e.preventDefault();

            let id = $(this).attr('data-tab'),
                top = $(id).offset().top;
            $('html, body').animate({scrollTop: top - 125}, 800);
        }

        return false;
    });


    // Hamburger

    $('.hamburger').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('hamburger-active');
        $('.header .mobile-navbar').toggleClass('mobile-navbar-active');
        $('.overlay').toggleClass('overlay-active');
    });

    // open-list

    $('.sidebar-left').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('sidebar-left-active');
    });

    // options btn

    $('.options-btn').on('click', function (e) {
        $(this).toggleClass('options-btn-active');
        $('.options-popup').toggleClass('options-popup-active');
    });

    // arrow active

    $('.arrow').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('arrow-active');
        $(this).parent().parent().toggleClass('drop-list-active');
    });

    // chartPie

    $(function () {
        $('.chart-green').easyPieChart({
            size: 140,
            barColor: '#53D500',
            scaleColor: false,
            lineWidth: 5,
            trackColor: '#DBDFE4',
            lineCap: 'circle',
            animate: 2000,
        });
        $('.chart-red').easyPieChart({
            size: 140,
            barColor: '#FC5733',
            scaleColor: false,
            lineWidth: 5,
            trackColor: '#DBDFE4',
            lineCap: 'circle',
            animate: 2000,
        });
    });

    // bootstrap tooltip

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});