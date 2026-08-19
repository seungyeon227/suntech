// header scroll
$(window).on('scroll', function () {
    $('#header').toggleClass('active', $(window).scrollTop() > 0);
});