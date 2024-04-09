async function getWeatherData() {
    const apiKey = 'b762dd22fc236e01b76f3061c1f87dd8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}
async function displayWeather() {
    const weatherBlock = document.getElementById('weatherBlock');
    const weatherData = await getWeatherData();
    const currentTemperature = weatherData.main.temp;
    const currentHumidity = weatherData.main.humidity;
    const nextDayForecast = "Forecast Data Here"; // You'll need to adjust this according to the API response
    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('weather-info');
    weatherInfo.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${currentTemperature}°F</p>
        <p>Humidity: ${currentHumidity}%</p>
        <p>Description: ${weatherData.weather[0].description}</p>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="Weather Icon">
        <p>Next Day Forecast: ${nextDayForecast}</p>
    `;
    weatherBlock.appendChild(weatherInfo);
}
displayWeather();