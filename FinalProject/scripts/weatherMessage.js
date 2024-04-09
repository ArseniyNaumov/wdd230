
window.onload = function () {


    const closeButton = document.getElementById('closeButton');
    const message = document.getElementById('message');
    const isClosed = localStorage.getItem('isClosed');
    if (!isClosed) {
        message.classList.remove('hidden');
    }
    closeButton.addEventListener('click', function () {
        message.classList.add('hidden');

        localStorage.setItem('isClosed', 'true');
    });
};

const apiKey = 'b762dd22fc236e01b76f3061c1f87dd8';
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=20.42&lon=-86.92&exclude=minutely,hourly,daily&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const forecast = data.daily.temp.max;
        document.getElementById('weatherMessage').innerHTML = `It can get as hot as ${forecast}&#x2109; today on Cozumel Island! <br>Wear hat, keep hydrated and use sunscreen!`;
        alert('worked');
    })
    .catch(error => {
        alert('error fetching temerature');
    });