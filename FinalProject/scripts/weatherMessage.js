
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
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&units=imperial&appid=b762dd22fc236e01b76f3061c1f87dd8`
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const forecast = data.main.temp_max;
        document.getElementById('degreeValue').innerHTML = `${forecast}`;
    })
    .catch(error => {
        alert('error fetching temerature');
    });