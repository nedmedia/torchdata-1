// remap jQuery to $
(function($) {


    /* trigger when page is ready */
    $(document).ready(function() {

        $('#nav-icon1').click(function() {
            $(this).toggleClass('open');
            $("nav").slideToggle("slow", function() {});
        });


        var width = $(window).width();
        if (width <= 780) {
            $('button#mobilemenu, nav a').click(function(){
                $('nav').slideToggle('fast');
            });        
        }            
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
                        }, 1000, function() {
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


        // SWIPE APPS
        $("a.estiloa").click(function() {
            $(this).addClass("active");
            $("img.estiloa").addClass("active");
            $("a.estilob").removeClass("active");
            $("img.estilob").removeClass("active");
        });

        $("a.estilob").click(function() {
            $(this).addClass("active");
            $("img.estilob").addClass("active");
            $("a.estiloa").removeClass("active");
            $("img.estiloa").removeClass("active");
        });



    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if(scroll >= 100) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });


    /* optional triggers

    $(window).load(function() {
    	
    });

    $(window).resize(function() {
    	
    });

    */


})(window.jQuery);