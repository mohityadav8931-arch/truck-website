// MOBILE MENU

function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("show");

}


// TRUCK FILTER

function filterTruck(status, button) {

    const cards = document.querySelectorAll(".truck-card");

    const buttons = document.querySelectorAll(".filter");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");


    cards.forEach(card => {

        if (status === "all") {

            card.style.display = "block";

        } else {

            if (card.dataset.status === status) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        }

    });

}


// SEARCH TRUCK

function searchTruck() {

    const search = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".truck-card");


    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// TRUCK DETAILS

function showDetails(truckName) {

    alert(
        "Truck: " + truckName +
        "\n\nYahan tum future me complete truck details, " +
        "driver information, route aur documents add kar sakte ho."
    );

}