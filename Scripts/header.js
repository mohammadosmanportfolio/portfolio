/*

// Function to load the header component
function loadHeader() {
    fetch("../Components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-component").innerHTML = data;

            // Any custom header JS logic can go here if needed
        })
        .catch(error => console.error("Error loading header:", error));
}

// Load the header when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", loadHeader);

*/

function loadHeader() {
    fetch('../Components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-component').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

document.addEventListener("DOMContentLoaded", loadHeader);
