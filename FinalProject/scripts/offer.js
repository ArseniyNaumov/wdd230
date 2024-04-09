document.addEventListener('DOMContentLoaded', function () {
    const vehicleSelect = document.getElementById('vehicleSelect');
    const vehicleImage = document.getElementById('vehicleImage');
    const reservationHalfDay = document.getElementById('reservationHalfDay');
    const reservationFullDay = document.getElementById('reservationFullDay');
    const walkInHalfDay = document.getElementById('walkInHalfDay');
    const walkInFullDay = document.getElementById('walkInFullDay');

    fetch('data/prices.json') // Adjusted path to prices.json
        .then(response => response.json())
        .then(data => {
            data.forEach(vehicle => {
                const option = document.createElement('option');
                option.text = vehicle['make&Model'];
                option.value = vehicle['option#'];
                vehicleSelect.appendChild(option);
            });

            vehicleSelect.addEventListener('change', function () {
                const selectedOption = this.value;
                const imageLinks = {
                    "1": "../images/item1.webp",
                    "2": "../images/item2.webp",
                    "3": "../images/item3.webp",
                    "4": "../images/item4.webp",
                    "5": "../images/item5.webp",
                    "6": "../images/item6.webp",
                };
                if (selectedOption in imageLinks) {
                    vehicleImage.src = imageLinks[selectedOption];
                }
                const selectedVehicle = data.find(vehicle => vehicle['option#'] === selectedOption);
                if (selectedVehicle) {
                    /*vehicleImage.src = selectedVehicle.image;    THIS LINE REFUSED TO WORK*/
                    reservationHalfDay.textContent = selectedVehicle.reservation[0].halfDay;
                    reservationFullDay.textContent = selectedVehicle.reservation[0].fullDay;
                    walkInHalfDay.textContent = selectedVehicle.walkIn[0].halfDay;
                    walkInFullDay.textContent = selectedVehicle.walkIn[0].fullDay;
                }
            });

            // Trigger change event to display the details of the first vehicle by default
            vehicleSelect.dispatchEvent(new Event('change'));
        })
        .catch(error => console.error('Error fetching data:', error));
});