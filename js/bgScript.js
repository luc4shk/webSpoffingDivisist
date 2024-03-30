document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    setInterval(nextSlide, 5000);

    function nextSlide() {
        slides[currentSlide].style.opacity = "0";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = "1";
    }
});