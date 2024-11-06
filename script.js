// script.js

// Function to show a welcome message when the button on the home page is clicked
function showMessage() {
    const message = document.getElementById('message');
    message.textContent = "Thanks for visiting! Enjoy exploring our purple world!";
}

// Function to handle downloads
function handleDownload(resourceName) {
    alert(`You are downloading ${resourceName}`);
}

// Adding event listeners for download links if on the download page
document.addEventListener("DOMContentLoaded", function () {
    const downloadLinks = document.querySelectorAll(".downloads a");
    downloadLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default download action for demo
            const resourceName = link.textContent;
            handleDownload(resourceName);
        });
    });
});

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const darkModeButton = document.getElementById("dark-mode-toggle");
    darkModeButton.textContent = document.body.classList.contains("dark-mode")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
}

// Add dark mode toggle button to the home page
document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.createElement("button");
    darkModeButton.id = "dark-mode-toggle";
    darkModeButton.textContent = "Switch to Dark Mode";
    darkModeButton.style = "position: fixed; top: 20px; right: 20px; padding: 10px 15px; background-color: #9f5cf2; color: white; border: none; border-radius: 5px; cursor: pointer;";
    darkModeButton.addEventListener("click", toggleDarkMode);
    document.body.appendChild(darkModeButton);
});
