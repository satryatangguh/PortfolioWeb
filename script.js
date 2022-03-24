$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 30) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /* slide-up script */
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        /* applying again smooth scroll on menu items click */
        $('html').css("scrollBehavior", "smooth");
    });

    /* toggle menu navbar */
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });




    /* typing text animation script */
    var runningText = new Typed(".typing", {
        strings: ["Web Designer", "Web Developer", "Freelancer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});