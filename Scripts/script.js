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
myYear.innerHTML = ". " + currentYear + " .";



document.addEventListener("DOMContentLoaded", function () {
    // Get all buttons
    const aboutButton = document.getElementById("aboutButton");
    const domiciliaryButton = document.getElementById("domiciliaryButton");
    const supportedButton = document.getElementById("supportedButton");

    // Get the slider elements
    const slides = document.querySelectorAll(".My_inside_slider");

    // Function to reset button colors
    function resetButtonColors() {
        aboutButton.style.backgroundColor = '';
        aboutButton.style.color = 'black';
        domiciliaryButton.style.backgroundColor = '';
        domiciliaryButton.style.color = 'black';
        supportedButton.style.backgroundColor = '';
        supportedButton.style.color = 'black';
    }

    // Function to show the selected slide and change button color
    function showSlide(selectedSlideId, clickedButton) {
        slides.forEach(slide => {
            if (slide.id === selectedSlideId) {
                slide.classList.add("active"); // Show the selected slide with animation
            } else {
                slide.classList.remove("active"); // Hide other slides
            }
        });

        // Reset button colors and set the clicked button to blue
        resetButtonColors();
        clickedButton.style.backgroundColor = 'aquamarine';
        clickedButton.style.color = 'white'; // Set text color to white for better contrast
    }

    // Event listeners for buttons
    aboutButton.addEventListener("click", function () {
        showSlide("about_us", aboutButton);
    });

    domiciliaryButton.addEventListener("click", function () {
        showSlide("Domiciliary_care", domiciliaryButton);
    });

    supportedButton.addEventListener("click", function () {
        showSlide("Supported_living", supportedButton);
    });

    // Initialize the first slide as visible and the first button as blue
    showSlide("about_us", aboutButton);
});
