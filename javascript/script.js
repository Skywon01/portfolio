document.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) { // Change à partir de 50px de scroll
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500, 'swing', function () {
                window.location.hash = target;
            });
        }
    });
});