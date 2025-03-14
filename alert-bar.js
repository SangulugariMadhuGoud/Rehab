// Function to load the alert bar dynamically
function loadAlertBar() {
    fetch("alert-bar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data); // Insert alert bar at the top
        })
        .then(() => {
            // Attach event listeners after loading
            document.getElementById("apply-form").addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent page reload

                let name = document.getElementById("name").value;
                let email = document.getElementById("email").value;
                let phone = document.getElementById("phone").value;

                alert(`Application submitted!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);

                closeForm(); // Close the form
            });
        })
        .catch(error => console.error("Error loading alert bar:", error));
}

// Function to open the pop-up form
function openForm() {
    document.getElementById("popup-form").style.display = "block";
}

// Function to close the pop-up form
function closeForm() {
    document.getElementById("popup-form").style.display = "none";
}

// Load alert bar when the page loads
document.addEventListener("DOMContentLoaded", loadAlertBar);
