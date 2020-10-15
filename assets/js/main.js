$(document).ready(function(){


    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
    });

        $("#footer-fixed-closs-btn").click(function(){
            $(".fixed-bottom").hide();
        });

});