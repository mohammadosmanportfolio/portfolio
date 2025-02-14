document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const successMessage = document.getElementById("success-container");

    // Function to show success message and hide form temporarily
    const displaySuccess = () => {
        // Hide the form and show the success message
        loginForm.style.display = "none";
        successMessage.style.display = "block"; // Make success message visible

        // After 3 seconds, reset form, hide success message, and show the form again
        setTimeout(() => {
            loginForm.reset(); // Reset form fields
            successMessage.style.display = "none"; // Hide success message
            loginForm.style.display = "flex"; // Show the form again
        }, 5000); // 5000ms = 5 seconds
    };

    // Event listener for form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission
        displaySuccess();   // Call displaySuccess function
    });
});
