// DARK MODE CODE
const modeSwitch = document.getElementById("modeSwitch");
const h2Element = document.querySelector("h2");
modeSwitch.addEventListener("change", function () {
    const isChecked = this.checked;
    if (isChecked) {
        document.body.style.backgroundColor = "#0e0906";
        h2Element.style.color = "#ff9b28";
        h2Element.style.textShadow = '-1px 1px 0 #FAF8EA';
    } else {
        document.body.style.backgroundColor = "#FAF8EA";
        h2Element.style.color = "#CE6E00";
        h2Element.style.textShadow = '-2px 2px 0 #25160B';
    }
});