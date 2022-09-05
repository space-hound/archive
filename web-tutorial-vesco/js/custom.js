/*************************************************************************************

        SERVICES SECTION
        
*************************************************************************************/

var w0w = function () {
    new WOW().init();
}

/*************************************************************************************

        WORK SECTION
        
*************************************************************************************/

var popup = function () {
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
}

/*************************************************************************************

        TEAM && TESTIMONIAL SECTION
        
*************************************************************************************/

var carousel = function (id, itm) {
    $(id).owlCarousel({
        items: itm,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
}

/*************************************************************************************

        STATS SECTION
        
*************************************************************************************/

var counter = function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    })
}


/*************************************************************************************

        NAV SECTION
        
*************************************************************************************/

var navs = function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
            $('nav').removeClass('vesco-top-nav');
        }
        else{
            $('nav').addClass('vesco-top-nav');
        }
    })
}

var smooth = function(){
    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        
        var section = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 850, "easeInOutExpo");
    });
}

/*************************************************************************************

        GENERAL SECTION
        
*************************************************************************************/

$(function () {
    //animate on scroll
    w0w();

    //pop-up images
    popup();

    //carousel
    carousel('#team-members', 3);
    carousel('#customers-testimonials', 1);

    //counter
    counter();
    
    carousel('#clients-list', 6);
    
    navs();
    
    smooth();
});
