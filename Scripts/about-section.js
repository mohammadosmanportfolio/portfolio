document.addEventListener("DOMContentLoaded", function() {
    const sectionPlaceholders = document.querySelectorAll(".section-component");

    sectionPlaceholders.forEach(placeholder => {
        // Fetch the section template
        fetch("../Components/about-section.html")
            .then(response => response.text())
            .then(data => {
                placeholder.innerHTML = data;

                // Get dynamic content from data attributes
                const sectionTitle = placeholder.dataset.title || "Default Title";
                const sectionParagraph = placeholder.dataset.paragraph || "Default paragraph text.";
                const sectionImageSrc = placeholder.dataset.imageSrc || "default-image.jpg";

                // Insert dynamic content into the component
                placeholder.querySelector(".component-title").textContent = sectionTitle;
                placeholder.querySelector(".component-text").textContent = sectionParagraph;
                placeholder.querySelector(".component-image").src = sectionImageSrc;
            })
            .catch(error => console.error("Error loading section:", error));
    });
});
