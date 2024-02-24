

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
if (!localStorage.getItem("numVisits-ls")) {
    localStorage.setItem("numVisits-ls", 0);
}//this is the line  ChatGPT advised to have, since my Google Chrome refused to create the variable "numVisits-ls" on his own in Local Storage
let numVisits = Number(localStorage.getItem("numVisits-ls"));
const visitsDisplay = document.querySelector(".visits");
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "1st! Welcome! 🥳";
}
numVisits++;//this is the line I ommitted and ChatGPT helped me realize I needed this to function properly
localStorage.setItem("numVisits-ls", numVisits);