$(document).ready(function () {
    $(".hero__container").animate({
        'opacity': "0",
    }, 0).animate({
        'opacity': "1"
    }, 2000);

    $('#navbarHeaderCollapsable').on('show.bs.collapse', function (e) {
        $('.hero').fadeTo(500, 0.5);
        $('#navbarHeader').css('backgroundColor', 'black');
    });

    $('#navbarHeaderCollapsable').on('hide.bs.collapse', function (e) {
        $('.hero').fadeTo(500, 1);
        $('#navbarHeader').css('backgroundColor', 'transparent');
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
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