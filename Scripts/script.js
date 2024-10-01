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



// // Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//     // Get all buttons
//     const aboutButton = document.getElementById("aboutButton");
//     const domiciliaryButton = document.getElementById("domiciliaryButton");
//     const supportedButton = document.getElementById("supportedButton");

//     // Get the slider elements
//     const slides = document.querySelectorAll(".My_inside_slider");

//     // Function to show the selected slide
//     function showSlide(selectedSlideId) {
//         slides.forEach(slide => {
//             if (slide.id === selectedSlideId) {
//                 slide.style.display = "block"; // Show the selected slide
//             } else {
//                 slide.style.display = "none"; // Hide other slides
//             }
//         });
//     }

//     // Event listeners for buttons
//     aboutButton.addEventListener("click", function() {
//         showSlide("about_us");
//     });

//     domiciliaryButton.addEventListener("click", function() {
//         showSlide("Domiciliary_care");
//     });

//     supportedButton.addEventListener("click", function() {
//         showSlide("Supported_living");
//     });

//     // Initialize the first slide as visible
//     showSlide("about_us");
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll('.my_button button');
//     const sliders = document.querySelectorAll('.My_inside_slider');

//     buttons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             sliders.forEach(slider => {
//                 slider.classList.remove('active');
//                 slider.classList.add('inactive');
//             });
//             sliders[index].classList.remove('inactive');
//             sliders[index].classList.add('active');
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.my_button button');
    const sliders = document.querySelectorAll('.My_inside_slider');
    let currentIndex = 0;

    function switchSlide(newIndex) {
        if (newIndex !== currentIndex) {
            sliders[currentIndex].classList.remove('active');
            sliders[currentIndex].classList.add('previous');
            sliders[newIndex].classList.remove('previous');
            sliders[newIndex].classList.add('active');
            currentIndex = newIndex;
        }
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switchSlide(index);
        });
    });
});


