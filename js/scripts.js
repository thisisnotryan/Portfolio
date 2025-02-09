// Dynamically load jQuery
var script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
script.type = "text/javascript";  // Ensure this is treated as JS
script.onload = function() {
    // This function runs once jQuery is loaded
    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $(".navbar").addClass("sticky");
                $(".goTop").fadeIn();
            } else {
                $(".navbar").removeClass("sticky");
                $(".goTop").fadeOut();
            }
        });

        $(".goTop").click(function(){
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });

        $('.menu-toggler').click(function(){
            $(this).toggleClass("active");
            $(".navbar-menu").toggleClass("active");
        });

        $('.navbar-menu a').click(function(){
            $(".menu-toggler").removeClass("active");
            $(".navbar-menu").removeClass("active");
        });

        var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");
        
        if(cursor && cursor2) {
            document.addEventListener("mousemove", function(e){
                cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
            });
        }

        const slides = document.querySelectorAll('.slide');
        const next = document.querySelector('#next');
        const prev = document.querySelector('#prev');
        const intervalTime = 5000;
        let slideInterval;

        const nextSlide = () => {
            const current = document.querySelector('.current');
            current.classList.remove('current');

            if(current.nextElementSibling) {
                current.nextElementSibling.classList.add('current');
            } else {
                slides[0].classList.add('current');
            }
        };

        const prevSlide = () => {
            const current = document.querySelector('.current');
            current.classList.remove('current');

            if(current.previousElementSibling) {
                current.previousElementSibling.classList.add('current');
            } else {
                slides[slides.length - 1].classList.add('current');
            }
        };

        if(next) {
            next.addEventListener('click', e => {
                nextSlide();
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            });
        }

        if(prev) {
            prev.addEventListener('click', e => {
                prevSlide();
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            });
        }

        slideInterval = setInterval(nextSlide, intervalTime);
    });
};

// Append the jQuery script to the document body
document.body.appendChild(script);
