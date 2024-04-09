async function getWeatherData() {
    const apiKey = 'b762dd22fc236e01b76f3061c1f87dd8';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&appid=${apiKey}&units=imperial`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        alert('Error fetching weather data:');
    }
}
async function getWeatherData2() {
    const apiKey2 = 'b762dd22fc236e01b76f3061c1f87dd8';
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.94&appid=${apiKey2}&units=imperial`; // Corrected apiKey2
    try {
        const response = await fetch(apiUrl2); // Corrected apiUrl2
        const data = await response.json();
        return data;
    } catch (error) {
        alert('Error fetching weather data:');
    }
}
async function displayWeather() {
    const weatherBlock = document.getElementById('weatherBlock');
    const weatherData = await getWeatherData();
    const weatherData2 = await getWeatherData2();
    const currentTemperature = weatherData.main.temp;
    const currentHumidity = weatherData.main.humidity;

    const tomorrowTimestamp = new Date().setDate(new Date().getDate() + 1); // Calculate timestamp for tomorrow
    const nextDayForecast = weatherData2.list.find(entry => {
        const entryTimestamp = new Date(entry.dt_txt).getTime();
        return entryTimestamp >= tomorrowTimestamp; // Find the first forecast entry for tomorrow or later
    });

    const NextDayTemperature = nextDayForecast ? nextDayForecast.main.temp : "N/A";

    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('weather-info');
    weatherInfo.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${currentTemperature}°F</p>
        <p>Humidity: ${currentHumidity}%</p>
        <p>Description: ${weatherData.weather[0].description}</p>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="Weather Icon">
        <h2>Weather for Tomorrow</h2>
        <p>Temperature: ${NextDayTemperature}°F</p>`;
    weatherBlock.appendChild(weatherInfo);
}
displayWeather();
//alert("test");