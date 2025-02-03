$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
           $(".navbar").addClass("sticky");
           $(".goTop").fadeIn();
       }
        else{
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });
    
    $(".goTop").click(function(){scroll(0,0)});
    
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
    document.addEventListener("mousemove",function(e){
       cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
    
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    const auto = true;
    const intervalTime = 5000;
    let slideInterval;
    
    const nextSlide = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // Check for next slide
        if(current.nextElementSibling) {
            // Add current to next sibling
            current.nextElementSibling.classList.add('current');
            } else {
                // Add current to start
                slides[0].classList.add('current');
            }
            setTimeout(() => current.classList.remove('current'));
    }
    
    const prevSlide = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // Check for prev slide
        if(current.previousElementSibling) {
            // Add current to prev sibling
            current.previousElementSibling.classList.add('current');
            } else {
                // Add current to last
                slides[slides.length - 1].classList.add('current');
            }
            setTimeout(() => current.classList.remove('current'));
    }
    
    // Button events
    next.addEventListener('click', e => {
        nextSlide();
        if(auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    });
    
    prev.addEventListener('click', e => {
        prevSlide();
        if(auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    });
    
    // Auto slide
    if(auto) {
        // Run next slide at interval time
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    
});



