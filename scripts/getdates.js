

// CURRENT YEAR
let currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;


// LAST MODIFIED
let currentDate = new Date();
document.getElementById('lastModified').textContent = "Last Modified: " + currentDate;


//HAMBURGER MENU
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); // Toggle the 'open' class on the navigation element
    hamButton.classList.toggle('open'); // Toggle the 'open' class on the hamButton element
});


//NUMBER OF VISITS
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "1st!  Welcome!🥳";
}