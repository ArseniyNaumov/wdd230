const baseURL = "https://arseniynaumov.github.io/wdd230/";
const linksURL = "https://arseniynaumov.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    let output = "";
    // Loop through each week
    weeks.forEach((week) => {
        // Get the week string and links object
        const weekString = week.week;
        const links = week.links;
        // Loop through each link
        links.forEach((link) => {
            // Create an HTML anchor tag with the link details
            output += <a href="${link.url}">${link.title}</a>;
        })
    })
}
