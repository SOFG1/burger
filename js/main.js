$(function () {
    //////////////////// Header scroll (active) /////////////////////////
    $(document).on("scroll", function () {
        const header = $("header");
        if (window.innerWidth > 1000) {
            if (window.scrollY > 120) {
                header.addClass("header__active");
            } else if (window.scrollY < 120) {
                header.removeClass("header__active");
            }
        } else {
            if (window.scrollY > 40) {
                header.addClass("header__active");
            } else if (window.scrollY < 40) {
                header.removeClass("header__active");
            }
        }
    });




    ////////////////////// Header Burger and Nav Bar //////////////////////////
    const burger = $(".header__burger");
    const headerNav = $(".header__nav");
    const headerItem = $(".header__nav-item");
    // Nav bar open / close
    burger.click(function () {
        burger.toggleClass("header__burger-active");
        headerNav.toggleClass("header__nav-active");
    });

    headerItem.click(function () {
        headerNav.removeClass("header__nav-active");
        burger.removeClass("header__burger-active");
    });




    ////////////// Header nav links (smooth scroll) //////////////////////
    $("[data-scroll]").on("click", function (e) {
        e.preventDefault();
        var blockId = $(this).attr("data-scroll");
        var blockOffset = $(blockId).offset().top;
        $("html, body").animate({ scrollTop: blockOffset - 100 }, 900);
    });




    ///////////////// Events slider (SLICK Carousel) //////////////////////
    var slider = $("#eventsCarousel")
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });



    ///////////////////// Offers blocks animation /////////////////////////
    const offersBlock1 = $(".offers__block-first");
    const offersBlock2 = $(".offers__block-second");
    const offersBlock3 = $(".offers__block-third");
    const offers = $("#offers");

    $(document).on("scroll load resize", function () {
        var offersPos = offers.offset().top + $(window).height() / 5;
        var windowBottom = $(window).scrollTop() + $(window).height();
        if (windowBottom > offersPos) {
            offersBlock1.addClass("offers__block-active");
            offersBlock2.addClass("offers__block-active");
            offersBlock3.addClass("offers__block-active");
        } else {
            offersBlock1.removeClass("offers__block-active");
            offersBlock2.removeClass("offers__block-active");
            offersBlock3.removeClass("offers__block-active");
        }
    });


    /////////////////////// Reservation effect ///////////////////////// 
    const reserve = $("#reserve");
    const reserveBurger = $(".reserve__bg-burger");
    const reserveBottle = $(".reserve__bg-bottle");
    const reservePlate = $(".reserve__bg-plate");
    var reservePos = reserve.offset().top + $(window).height() / 3.33;

    $(document).on("scroll load resize", function () {
        var windowBottom2 = $(window).scrollTop() + $(window).height();
        if (windowBottom2 > reservePos) {
            reserve.css("opacity", "1");
            reserveBurger.addClass("reserve__bg-active");
            reserveBottle.addClass("reserve__bg-active");
            reservePlate.addClass("reserve__bg-active");
        } else {
            reserve.css("opacity", "0");
            reserveBurger.removeClass("reserve__bg-active");
            reserveBottle.removeClass("reserve__bg-active");
            reservePlate.removeClass("reserve__bg-active");
        }
    });


});