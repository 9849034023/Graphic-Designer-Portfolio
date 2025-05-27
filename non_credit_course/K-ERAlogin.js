document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('ri-eye-off-line');
    });

    const loginForm = document.getElementById('login-form');

    // Handle login form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Retrieve stored users array from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Debug logs (remove in production)
        console.log("Users in Storage:", users);

        // Check if user exists and credentials match
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
            alert("Login Successful!");
            localStorage.setItem('currentUser', JSON.stringify(user)); // Set the logged-in user
            window.location.href = "K-ERAprofile.html"; // Redirect to profile page
        } else {
            alert("Wrong Credentials. Please Enter The Correct Info or contact the Admin.");
        }
    });
    
    // Optional: If you have a password update functionality, update the stored password in localStorage
    const updatePasswordForm = document.getElementById('update-password-form'); // Assuming you have a form for this
    if (updatePasswordForm) {
        updatePasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('update-username').value.trim();
            const newPassword = document.getElementById('new-password').value.trim();

            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Find user and update their password
            const userIndex = users.findIndex((u) => u.username === username);
            if (userIndex !== -1) {
                users[userIndex].password = newPassword;
                localStorage.setItem('users', JSON.stringify(users));
                alert("Password updated successfully!");
            } else {
                alert("User not found.");
            }
        });
    }
});
