// Getting the current year
let currentYear = new Date().getFullYear();
// Update the content of the 'current-year' span with the current year
document.getElementById('current-year').textContent = currentYear;

// Getting the current date
let currentDate = new Date();
// Update the content of the 'last modifyed' span with the current date
document.getElementById('lastModified').textContent = currentDate;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); // Toggle the 'open' class on the navigation element
    hamButton.classList.toggle('open'); // Toggle the 'open' class on the hamButton element
});
