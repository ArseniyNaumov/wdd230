// HAMBURGER MENU CODE
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
console.log("this file is linked");






// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




// Dark Mode
const modeSwitch = document.getElementById("modeSwitch");

modeSwitch.addEventListener("change", function () {
    const isChecked = this.checked;
    if (isChecked) {
        document.body.style.backgroundColor = "#0e0906";
        document.h2.style.color = "#ff9b28";
        alert("Dark mode is on");
    } else {
        document.body.style.backgroundColor = "#FAF8EA";
        document.h2.style.color = "#CE6E00";
        alert("Dark mode is off");
    }
});





