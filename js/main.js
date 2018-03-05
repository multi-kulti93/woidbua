// hide hero text at the beginning
$(".hero__container").css({ 'opacity': '0', 'margin-bottom': '200px' });

// hide carousel text at the beginning
$(".carousel-caption").hide();

$(document).ready(function () {

    // fade in the hero text
    $(".hero__container").animate({
        'opacity': "1",
        'margin-bottom': "0px"
    }, 2000);

    // fade hero and set background for menu on mobile view
    $('#navbarHeaderCollapsable').on('show.bs.collapse', function (e) {
        $('.hero').fadeTo(500, 0.5);
        $('#navbarHeader').css('backgroundColor', 'black');
    });

    $('#navbarHeaderCollapsable').on('hide.bs.collapse', function (e) {
        $('.hero').fadeTo(500, 1);
        $('#navbarHeader').css('backgroundColor', 'transparent');
    });

    // show carousel text on hover
    $("#carouselNahfeldscanner").on("mouseover", function () {
        $(this).find(".carousel-caption").fadeIn();
    });
    $("#carouselNahfeldscanner").on("mouseleave", function () {
        $(this).find(".carousel-caption").fadeOut();
    });
    $("#carouselRechnungsprogramm").on("mouseover", function () {
        $(this).find(".carousel-caption").fadeIn();
    });
    $("#carouselRechnungsprogramm").on("mouseleave", function () {
        $(this).find(".carousel-caption").fadeOut();
    });
    $("#carouselProgWiki").on("mouseover", function () {
        $(this).find(".carousel-caption").fadeIn();
    });
    $("#carouselProgWiki").on("mouseleave", function () {
        $(this).find(".carousel-caption").fadeOut();
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[href^="#carousel"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
})