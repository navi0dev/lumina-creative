document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.createElement("p");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Validate inputs
        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        if (!emailInput.value.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        // Display success message
        successMessage.textContent = "Thank you for your message! We'll get back to you soon.";
        successMessage.style.color = "green";
        form.appendChild(successMessage);

        // Clear input fields
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    });
});
