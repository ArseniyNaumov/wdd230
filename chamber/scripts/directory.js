//DIRECTORY GENERATION CODE (uses data/members.json)
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