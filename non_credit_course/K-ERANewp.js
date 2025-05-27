document.addEventListener("DOMContentLoaded", function () {
    const resetForm = document.getElementById("reset-password-form");
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");
    const oldPassword = localStorage.getItem("password"); // Assuming old password is stored

    // Toggle visibility of password fields
    togglePasswordIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            const targetId = icon.getAttribute("data-target");
            const targetInput = document.getElementById(targetId);

            if (targetInput.type === "password") {
                targetInput.type = "text";
                icon.classList.remove("ri-eye-off-line");
                icon.classList.add("ri-eye-line");
            } else {
                targetInput.type = "password";
                icon.classList.remove("ri-eye-line");
                icon.classList.add("ri-eye-off-line");
            }
        });
    });

    // Handle form submission
    resetForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const newPassword = document.getElementById("new-password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        if (newPassword === oldPassword) {
            alert("New password cannot be the same as the old password.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Save the new password
        localStorage.setItem("password", newPassword);
        alert("Your password has been reset successfully!");
        window.location.href = "K-ERAlogin.html"; // Redirect to login page
    });
});
