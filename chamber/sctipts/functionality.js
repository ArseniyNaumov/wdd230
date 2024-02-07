// SLIDE CONTAINER CODE
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    const slideWidth = slides[0].offsetWidth;
    document.querySelector('.slider').style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

// HAMBURGER MENU CODE
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

/* WHEATHER CODE*/