const vehicleSelect = document.getElementById('vehicleSelect');
const vehicleImage = document.getElementById('vehicleImage');
const reservationHalfDay = document.getElementById('reservationHalfDay');
const reservationFullDay = document.getElementById('reservationFullDay');
const walkInHalfDay = document.getElementById('walkInHalfDay');
const walkInFullDay = document.getElementById('walkInFullDay');

fetch('data/prices.json')
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
            const selectedVehicle = data.find(vehicle => vehicle['option#'] === selectedOption);
            if (selectedVehicle) {
                vehicleImage.src = 'images/' + selectedVehicle.image; // Adjust path accordingly
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