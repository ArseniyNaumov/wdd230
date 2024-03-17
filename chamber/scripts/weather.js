//WINDSHIELD FACTOR CALCULATOR CODE
function calculateAndDisplay() {
    // Get input values
    var temperatureInput = document.getElementById("temperature").value;
    var windSpeedInput = document.getElementById("windSpeed").value;

    // Convert input values to numbers
    var temperature = parseFloat(temperatureInput);
    var windSpeed = parseFloat(windSpeedInput);

    // Check if input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill factor using the formula
        var windChillFactor = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChillFactor = windChillFactor.toFixed(2); // Round to 2 decimal places
        document.getElementById("windChillOutput").textContent = "Wind Chill Factor: " + windChillFactor;
    } else {
        // Display "N/A" if input values do not meet requirements
        document.getElementById("windChillOutput").textContent = "N/A";
    }
}
