// HAMBURGER MENU CODE
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
console.log("this file is linked");

// LAST MODIFIED
let currentDate = new Date();
document.getElementById('lastModified').textContent = "Last Modified: " + currentDate;


// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




// DARK MODE
const modeSwitch = document.getElementById("modeSwitch");
const h2Element = document.querySelector("h2");

modeSwitch.addEventListener("change", function () {
    const isChecked = this.checked;
    if (isChecked) {
        document.body.style.backgroundColor = "#0e0906";
        h2Element.style.color = "#ff9b28";
        h2Element.style.textShadow = '-1px 1px 0 #FAF8EA';
        alert("Dark mode is on");
    } else {
        document.body.style.backgroundColor = "#FAF8EA";
        h2Element.style.color = "#CE6E00";
        h2Element.style.textShadow = '-2px 2px 0 #25160B';

        alert("Dark mode is off");
    }
});


//WINDSHIELD FACTOR
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

//NUMBER OF VISITS
displayVisitMessage();
function displayVisitMessage() {
    let lastVisit = localStorage.getItem('lastVisit');
    let currentDate = new Date();
    let visitsDisplay = document.querySelector(".visits");
    let visitsDisplay2 = document.querySelector(".visits2");
    if (!lastVisit) {
        visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
        visitsDisplay2.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        let timeDiff = currentDate.getTime() - new Date(lastVisit).getTime();
        let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        if (daysDiff < 1) {
            visitsDisplay.textContent = "Back so soon! Awesome!";
            visitsDisplay2.textContent = "Back so soon! Awesome!";
        } else {
            let message = (daysDiff === 1) ? "day" : "days";
            visitsDisplay.textContent = "You last visited " + daysDiff + " " + message + " ago.";
            visitsDisplay2.textContent = "You last visited " + daysDiff + " " + message + " ago.";
        }
    }
    localStorage.setItem('lastVisit', currentDate.toISOString());
}

//JOIN PAGE
document.getElementById("timestamp").value = Date.now();

//DIRECTORY PAGE
document.addEventListener("DOMContentLoaded", function () {
    const dir = document.getElementById("dir");
    const viewToggleSelect = document.getElementById("viewToggleSelect");
    const displayButton = document.getElementById("displayButton");

    displayButton.addEventListener("click", function () {
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => {
                const selectedView = viewToggleSelect.value;
                displayMembers(data, selectedView);
            })
            .catch(error => console.error("Error fetching member data:", error));
    });

    function displayMembers(data, viewType) {
        dir.innerHTML = "";
        if (viewType === "cards") {
            data.forEach(member => {
                const card = document.createElement("div");
                card.classList.add("member-card");
                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <p>Industry: ${member.industry}</p>
                `;
                dir.appendChild(card);
            });
        } else if (viewType === "list") {
            const list = document.createElement("ul");
            data.forEach(member => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <p>Industry: ${member.industry}</p>
                `;
                list.appendChild(listItem);
            });
            dir.appendChild(list);
        }
    }
});