// script.js
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slideshow-image");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }

  slides[slideIndex].style.display = "block"; // Show the current slide
}

// Call the showSlide function every few seconds to create the slideshow effect
setInterval(() => changeSlide(1), 3000); // Change slide every 3 seconds (adjust as needed)

