jQuery(document).ready(function ($) {



    // our work slider //
    jQuery(".latest-news").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        autoplay: false,
        responsiveClass: true,
        navText: ["<img src='../images/pre-arrow.png'>", "<img src='../images/next-arrow.png''>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            }
        }
    });

    //hotbids
    jQuery(".owl-hot-bids").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        nav: false,
        autoplay: true,
        responsiveClass: true,
        // navText: ["<img src='../images/pre-arrow.png'>", "<img src='../images/next-arrow.png''>"],
        responsive: {
            0: {
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true,
                responsiveClass: true,
            },
            600: {
                loop: true,
                margin: 0,
                items: 2,
                autoplay: true,
                responsiveClass: true,
                // navText: ["<img src='images/road-map-before.png'>", "<img src='images/road-map-after.png''>"],
            },
            1000: {
                loop: true,
                dots: false,
                margin: 0,
                items: 4,
                autoplay: false,
                responsiveClass: true,
                // navText: ["<img src='images/road-map-before.png'>", "<img src='images/road-map-after.png''>"],
            }
        }
    });

    //features slider
    jQuery(".owl-mobile-tabs").owlCarousel({

        loop: false,
        margin: 10,
        items: 3,
        center: false,
        dots: false,

        autoplay: false,
        responsiveClass: true,
        // navText: ["<img src='images/pre-arrow.png'>", "<img src='images/next-arrow.png''>"],
        responsive: {
            400: {

                loop: false,
                margin: 10,
                items: 4,
                center: false,
                autoplay: false,
                responsiveClass: true,
            },
            600: {
                loop: true,
                margin: 10,
                items: 5,
                autoplay: false,
                responsiveClass: true,
            },
            1000: {
                loop: true,
                dots: true,
                margin: 10,
                items: 4,
                center: false,
                nav: false,
                autoplay: false,
                responsiveClass: true,
                // navText: ["<img src='images/features-arrow.png'>", "<img src='images/features-next.png''>"],
            }
        }
    });

    //top seller slider
    //hotbids
    jQuery(".owl-sellers").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        nav: false,
        autoplay: true,
        responsiveClass: true,
        // navText: ["<img src='../images/pre-arrow.png'>", "<img src='../images/next-arrow.png''>"],
        responsive: {
            0: {
                loop: true,
                margin: 0,
                items: 2,
                autoplay: true,
                responsiveClass: true,
            },
            390: {
                loop: true,
                margin: 0,
                items: 2,
                autoplay: true,
                responsiveClass: true,
                // navText: ["<img src='images/road-map-before.png'>", "<img src='images/road-map-after.png''>"],
            },
            655: {
                loop: true,
                margin: 0,
                items: 3,
                autoplay: true,
                responsiveClass: true,
                // navText: ["<img src='images/road-map-before.png'>", "<img src='images/road-map-after.png''>"],
            },
            600: {
                loop: true,
                margin: 0,
                items: 2,
                autoplay: true,
                responsiveClass: true,
                // navText: ["<img src='images/road-map-before.png'>", "<img src='images/road-map-after.png''>"],
            },
            1000: {
                loop: true,
                dots: false,
                margin: 0,
                items: 4,
                autoplay: false,
                responsiveClass: true,
                // navText: ["<img src='images/road-map-before.png'>", "<img src='images/road-map-after.png''>"],
            }
        }
    });

    //select option



    // =========== navigation animation ============//
    jQuery(".navi-icon").click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".c-mask").fadeToggle();
        jQuery(".navigation-holder").toggleClass("open-menu");
    });
    jQuery(".c-mask").click(function () {
        jQuery(this).fadeOut();
        jQuery(".navi-icon").removeClass("open");
        jQuery(".navigation-holder").removeClass("open-menu");
    });
    jQuery("ul.navigation li a").click(function () {
        jQuery(".navi-icon").removeClass("open");
        jQuery(".navigation-holder").removeClass("open-menu");
        jQuery(".c-mask").fadeOut();
    });

    // ========== smooth scroll to section ========== //
    jQuery(".smooth-scroll").on('click', function (e) {
        e.preventDefault();
        var target = jQuery(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: (jQuery(target).offset().top) - 70
        }, 1000);
    });

    jQuery(window).scroll(function () {
        var scrollDistance = jQuery(window).scrollTop() + 110;
        jQuery('.page-section').each(function (i) {
            if (jQuery(this).position().top <= scrollDistance) {
                jQuery('ul.navigation li a').removeClass('active');
                jQuery('ul.navigation li a').eq(i).addClass('active');
            }
        });
    }).scroll();


    // =========== fixed header =============== //
    var s = jQuery(".header-holder");
    var pos = s.position();
    jQuery(window).scroll(function () {
        var windowpos = jQuery(window).scrollTop();
        if (windowpos >= pos.top & windowpos >= 5) {
            s.addClass("sticky-header");
        } else {
            s.removeClass("sticky-header");
        }
    });

    // ======= portfolio sections ========//
    jQuery(".portfolio").each(function () {
        jQuery(this).hover(function () {
            jQuery(this).find(".portfolio-detail-inner").css({
                "height": "auto",
                "transition": "all 0.5s",
                "top": "10px",
                "-webkit-transform": "translateY(30px)",
                "-ms-transform": "translateY(30px)",
                "transform": "translateY(30px)",
            });

        },
            function () {
                jQuery(this).find(".portfolio-detail-inner").css({
                    "height": "120px",
                    "transition": "all 0.5s",
                    "top": "50%",
                    "-webkit-transform": "translateY(-50%)",
                    "-ms-transform": "translateY(-50%)",
                    "transform": "translateY(-50%)",
                });
            }
        )
    });

    // open options
    jQuery('.open-options').click(function () {
        jQuery('.options-holder').fadeToggle();
    });

    jQuery('.open-options-mobile').click(function () {
        jQuery('.options-holderr').fadeToggle();
    });


    // jQuery(document).ready(function() {
    //     jQuery('.options-holder').each(function() {
    //         jQuery(this).on('click', function() {
    //             var btn = jQuery(this).find('.options-holder');
    //             jQuery(btn).fadeToggle();
    //         })
    //     })
    // })

    // success message after form submit //
    var emailCount = jQuery(".emailcount").html();

    if (emailCount == 1) {
        jQuery('html, body').animate({
            scrollTop: (jQuery("#contact").offset().top) - 95
        }, 1000);
        $(".success-message").fadeIn();
    }
    //listing button 
    jQuery(document).ready(function () {
        jQuery('.opening-dots').each(function () {
            jQuery(this).on('click', function () {
                var btn = jQuery(this).find('.reportbtn');
                jQuery(btn).fadeToggle();
            })
        })
    })
    $("#hide").click(function () {
        $("p").hide();
    });


});

/*console.log("checking..:",$(".chain-container .button").length);
$(".chain-container .button").click(function(){
  alert("The paragraph was clicked.");
}); */
//timer
/*
function updateTimer() {
    future = Date.parse("sept 2, 2020 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =

        '<div>' + h + '<span>h</span></div>' +
        '<div>' + m + '<span>m</span></div>' +
        '<div>' + s + '<span>s</span></div>';

}
setInterval('updateTimer()', 1000);*/