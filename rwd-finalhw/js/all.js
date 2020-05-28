$(document).ready(function () {
    
    $('.jq-scrolltop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var target_top = $(target).offset().top;
        $('html, body').animate({ scrollTop: target_top }, 1500);
    });

        /* gotop*/
        $('.gotop a').click(function(event){
        event.preventDefault();
        $('html,body').animate({
        scrollTop:0
        },2000);
        });  
        /*banner animation*/
        $(".jq-banner").on("mouseover", function () {
            $(".jq-banner-title").toggleClass('animate__animated animate__rubberBand')
        });
        $(".jq-banner").on("mouseout", function () {
            $(".jq-banner-title").removeClass('animate__animated animate__rubberBand')
        });
        /*alert*/
        $('.showmenu').on('click', function (e) {
            e.preventDefault();
            $('.menu').slideToggle(1000);
        }); 
        /*heart*/
        $('.fa-heart').click(function () {
            $(this).toggleClass('far').toggleClass('fas');
        });
});