const buses = [
    {
        busName: "AS Express 101",
        route: "Chennai - Bangalore",
        driver: "Ramesh",
        city: "Chennai"
    },
    {
        busName: "AS Express 102",
        route: "Chennai - Madurai",
        driver: "Suresh",
        city: "Chennai"
    },
    {
        busName: "AS Deluxe 201",
        route: "Bangalore - Mysore",
        driver: "Kumar",
        city: "Bangalore"
    },
    {
        busName: "AS Express 202",
        route: "Bangalore - Chennai",
        driver: "Arun",
        city: "Bangalore"
    },
    {
        busName: "AS Travels 301",
        route: "Madurai - Coimbatore",
        driver: "Vijay",
        city: "Madurai"
    },
    {
        busName: "AS Superfast 302",
        route: "Coimbatore - Chennai",
        driver: "Raj",
        city: "Coimbatore"
    },
    {
        busName: "AS Express 401",
        route: "Hyderabad - Chennai",
        driver: "Prakash",
        city: "Hyderabad"
    },
    {
        busName: "AS Deluxe 402",
        route: "Chennai - Hyderabad",
        driver: "Manoj",
        city: "Chennai"
    }
];

const busContainer = document.getElementById("busContainer");
const searchBox = document.getElementById("searchBox");
const cityFilter = document.getElementById("cityFilter");
const noResults = document.getElementById("noResults");


// Display buses
function displayBuses(busList) {

    busContainer.innerHTML = "";

    if (busList.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    busList.forEach(function(bus) {

        const card = document.createElement("div");
        card.classList.add("bus-card");

        const icon = document.createElement("div");
        icon.classList.add("bus-icon");
        icon.textContent = "🚌";

        const name = document.createElement("h2");
        name.textContent = bus.busName;

        const route = document.createElement("p");
        route.innerHTML =
            "<span class='label'>Route:</span> " + bus.route;

        const driver = document.createElement("p");
        driver.innerHTML =
            "<span class='label'>Driver:</span> " + bus.driver;

        const city = document.createElement("p");
        city.innerHTML =
            "<span class='label'>City:</span> " + bus.city;

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(route);
        card.appendChild(driver);
        card.appendChild(city);

        busContainer.appendChild(card);
    });
}


// Load cities into dropdown
function loadCities() {

    const cities = buses.map(function(bus) {
        return bus.city;
    });

    const uniqueCities = [...new Set(cities)];

    uniqueCities.forEach(function(city) {

        const option = document.createElement("option");

        option.value = city;
        option.textContent = city;

        cityFilter.appendChild(option);
    });
}


// Filter buses
function filterBuses() {

    const searchText = searchBox.value.toLowerCase();
    const selectedCity = cityFilter.value;

    const filteredBuses = buses.filter(function(bus) {

        const matchesSearch =
            bus.busName.toLowerCase().includes(searchText) ||
            bus.route.toLowerCase().includes(searchText);

        const matchesCity =
            selectedCity === "all" ||
            bus.city === selectedCity;

        return matchesSearch && matchesCity;
    });

    displayBuses(filteredBuses);
}


// Search event
searchBox.addEventListener("input", function() {
    filterBuses();
});


// City filter event
cityFilter.addEventListener("change", function() {
    filterBuses();
});


// Initialize application
function init() {
    loadCities();
    displayBuses(buses);
}

init();
