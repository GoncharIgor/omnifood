$(document).ready(() => {

    /*sticky navigator to appear*/
    $('.section-features').waypoint((direction) => {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px' // to appear after 100vh - 60px
    });


    /*scroll on buttons*/
    $('#btn-hungry').click(() => {
        $('html, body').animate({scrollTop: $('#plans').offset().top}, 1000); //scroll to the top op plans element with speed of 1 sec
    });

    $('#btn-show-more').click(() => {
        $('html, body').animate({scrollTop: $('#features').offset().top}, 1000); //scroll to the top op plans element with speed of 1 sec
    });

    /*navigation scrolling*/
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
                let target = $(this.hash);
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
                        const $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });


    /*animations on scroll*/
    $('.features-row').waypoint((direction) => {
        $('.features-row').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.app-screen').waypoint((direction) => {
        $('.app-screen').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.first-plan').waypoint((direction) => {
        $('.first-plan').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /*mobile navigation*/
    $('.mobile-nav-icon').click(function () {
        const nav = $('.main-nav');
        const icon = document.querySelector('.mobile-nav-icon ion-icon');

        if (icon.getAttribute('name') === 'menu-outline') {
            icon.setAttribute('name', 'close');
        } else {
            icon.setAttribute('name', 'menu-outline');
        }

        nav.slideToggle(200); // time for animation
    });
});
