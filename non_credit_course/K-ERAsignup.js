document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const signupForm = document.querySelector("form");

    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        togglePassword.classList.toggle("ri-eye-off-line");
    });

    toggleConfirmPassword.addEventListener("click", () => {
        const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
        confirmPassword.setAttribute("type", type);
        toggleConfirmPassword.classList.toggle("ri-eye-off-line");
    });

    // Handle sign-up form submission
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        // Validate passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Save user data in localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some((u) => u.username === username || u.email === email);

        if (userExists) {
            alert("User with this username or email already exists.");
        } else {
            const newUser = { fullName, email, username, password };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("currentUser", JSON.stringify(newUser));
            alert("Sign-up successful!");
            signupForm.reset();
            window.location.href = "K-ERAprofile.html";
        }
    });
});
 // Check if there's any saved data in localStorage and populate the form
 document.addEventListener("DOMContentLoaded", () => {
    const fullname = localStorage.getItem("fullname");
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");

    if (fullname) {
        document.getElementById("fullname").value = fullname;
    }
    if (email) {
        document.getElementById("email").value = email;
    }
    if (username) {
        document.getElementById("username").value = username;
    }
});

// Save form data when the form is submitted
document.getElementById("signup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;

    // Store the data in localStorage
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);

    // You can proceed with the signup process (sending data to your server)
    console.log("Form submitted with:", { fullname, email, username });
});