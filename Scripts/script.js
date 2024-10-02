let currentIndex = 0;

function moveSlide(direction) {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    // Loop back the slider when reaching the end
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}



let currentYear = new Date().getFullYear();
myYear = document.getElementById('myYear');
console.log(currentYear);
myYear.innerHTML = ". "+currentYear+" .";



document.addEventListener("DOMContentLoaded", function () {
    // Get all buttons
    const aboutButton = document.getElementById("aboutButton");
    const domiciliaryButton = document.getElementById("domiciliaryButton");
    const supportedButton = document.getElementById("supportedButton");

    // Get the slider elements
    const slides = document.querySelectorAll(".My_inside_slider");

    // Function to show the selected slide
    function showSlide(selectedSlideId) {
        slides.forEach(slide => {
            if (slide.id === selectedSlideId) {
                slide.classList.add("active"); // Show the selected slide with animation
            } else {
                slide.classList.remove("active"); // Hide other slides
            }
        });
    }

    // Event listeners for buttons
    aboutButton.addEventListener("click", function() {
        showSlide("about_us");
    });

    domiciliaryButton.addEventListener("click", function() {
        showSlide("Domiciliary_care");
    });

    supportedButton.addEventListener("click", function() {
        showSlide("Supported_living");
    });

    // Initialize the first slide as visible
    showSlide("about_us");
});
