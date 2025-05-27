document.addEventListener('DOMContentLoaded', function () {
    // References to elements
    const togglePassword = document.getElementById('togglePassword');
    const toggleNewPassword = document.getElementById('toggleNewPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const currentPassword = document.getElementById('current-password');
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');
    const passwordMismatchMessage = document.getElementById('password-mismatch-message');
    const updateProfileBtn = document.getElementById('update-profile');
    const passwordForm = document.getElementById('password-form');
    const profilePic = document.getElementById('profile-pic');
    const displayProfilePic = document.getElementById('display-profile-pic');
    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');
    const displayUsername = document.getElementById('display-username');
    const logoutBtn = document.createElement('button');

    // Toggle password visibility
    function togglePasswordVisibility(inputField, toggleIcon) {
        const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
        inputField.setAttribute('type', type);
        toggleIcon.classList.toggle('ri-eye-off-line');
    }

    togglePassword.addEventListener('click', () => togglePasswordVisibility(currentPassword, togglePassword));
    toggleNewPassword.addEventListener('click', () => togglePasswordVisibility(newPassword, toggleNewPassword));
    toggleConfirmPassword.addEventListener('click', () => togglePasswordVisibility(confirmPassword, toggleConfirmPassword));

    // Profile data population from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('profile-name').value = currentUser.fullName || '';
        document.getElementById('profile-username').value = currentUser.username || '';
        document.getElementById('email').value = currentUser.email || '';
        displayName.textContent = currentUser.fullName || '';
        displayEmail.textContent = currentUser.email || '';
        displayUsername.textContent = currentUser.username || '';

        // Display the stored profile picture
        const storedProfilePic = localStorage.getItem('profile-pic');
        if (storedProfilePic) {
            profilePic.src = storedProfilePic;
            displayProfilePic.src = storedProfilePic;
        }
    } else {
        alert('Please log in to view your profile!');
        window.location.href = 'K-ERAlogin.html';
    }

    // Handle profile picture upload
    document.getElementById('photo').addEventListener('change', function (event) {
        const photo = event.target.files[0];
        if (photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64Image = e.target.result;
                localStorage.setItem('profile-pic', base64Image); // Save to localStorage
                profilePic.src = base64Image; // Update image element
                displayProfilePic.src = base64Image;
            };
            reader.readAsDataURL(photo);
        }
    });

    // Update profile data
    updateProfileBtn.addEventListener('click', function () {
        const updatedEmail = document.getElementById('email').value;
        if (currentUser) {
            currentUser.email = updatedEmail;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        alert('Profile updated successfully!');
        window.location.href = 'kera.html';
    });

    // Password update
    passwordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const currentPasswordValue = currentPassword.value;
        const newPasswordValue = newPassword.value;
        const confirmPasswordValue = confirmPassword.value;

        if (currentPasswordValue !== currentUser.password) {
            errorMessage.style.display = 'block';
            return;
        }

        if (newPasswordValue !== confirmPasswordValue) {
            passwordMismatchMessage.style.display = 'block';
            return;
        }

        currentUser.password = newPasswordValue;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        alert('Password updated successfully!');
        window.location.href = 'kera.html';
    });
// Log Out functionality
logoutBtn.textContent = 'Log Out';
logoutBtn.style.marginTop = '20px';
logoutBtn.style.padding = '10px 20px';
logoutBtn.style.background = 'linear-gradient(135deg, #FFCC00, #FF0066)';
logoutBtn.style.color = 'white';
logoutBtn.style.border = 'none';
logoutBtn.style.cursor = 'pointer';
logoutBtn.style.display = 'block';  // Makes the button a block element
logoutBtn.style.marginLeft = 'auto';  // Centers the button horizontally
logoutBtn.style.marginRight = 'auto'; // Centers the button horizontally
logoutBtn.style.textAlign = 'center';  // Centers the text inside the button
logoutBtn.style.borderRadius='5px';
logoutBtn.style.fontSize='20px';
logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('profile-pic');
    alert('You have been logged out.');
    window.location.href = 'K-ERAlogin.html';
});
document.querySelector('.profile-container').appendChild(logoutBtn);

});
