

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
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


//NUMBER OF VISITS
if (!localStorage.getItem("numVisits-ls")) {
    localStorage.setItem("numVisits-ls", 0);
}//this is the switch ChatGPT advised to have, since my Google Chrome refused to create the variable "numVisits-ls" on his own in Local Storage
let numVisits = Number(localStorage.getItem("numVisits-ls"));
const visitsDisplay = document.querySelector(".visits");
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "1st! Welcome! 🥳";
}
numVisits++;//this is the line I ommitted and ChatGPT helped me realize I needed this to function properly
localStorage.setItem("numVisits-ls", numVisits);

//WEATHER API
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.65&units=imperial&appid=b762dd22fc236e01b76f3061c1f87dd8`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());

        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon.substring(0, 3)}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();