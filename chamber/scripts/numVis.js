//NUMBER OF VISITS TRACKING CODE
displayVisitMessage();
function displayVisitMessage() {
    let lastVisit = localStorage.getItem('lastVisit');
    let currentDate = new Date();
    let visitsDisplay = document.querySelector(".visits");
    if (!lastVisit) {
        visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        let timeDiff = currentDate.getTime() - new Date(lastVisit).getTime();
        let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        if (daysDiff < 1) {
            visitsDisplay.textContent = "Back so soon! Awesome!";
        } else {
            let message = (daysDiff === 1) ? "day" : "days";
            visitsDisplay.textContent = "You last visited " + daysDiff + " " + message + " ago.";
        }
    }
    localStorage.setItem('lastVisit', currentDate.toISOString());
}