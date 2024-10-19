// Function to load the footer component
function loadFooter() {
    fetch("../Components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-component").innerHTML = data;

            // Once the footer is loaded, update the year dynamically
            const yearSpan = document.getElementById("current-year");
            yearSpan.textContent = new Date().getFullYear();
        })
        .catch(error => console.error("Error loading footer:", error));
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadFooter);