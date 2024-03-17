//WEATHER CODE using API from https://api.openweathermap.org
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');// this line was troubleshooted with ChatGPT
const captionDesc = document.querySelector('figcaption');
async function apiFetch() {
    const apiKey = 'b762dd22fc236e01b76f3061c1f87dd8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Spring,US&units=imperial&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();// this line was troubleshooted with ChatGPT
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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;// this line was troubleshooted with ChatGPT
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);// this line was troubleshooted with ChatGPT
    captionDesc.textContent = `${desc}`;
}
apiFetch();
