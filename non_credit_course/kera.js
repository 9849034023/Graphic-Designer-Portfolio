document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    togglePassword.addEventListener('click', function(e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('ri-eye-off-line');
    });

    toggleConfirmPassword.addEventListener('click', function(e) {
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
        this.classList.toggle('ri-eye-off-line');
    });
});

function performSearch() {
    const query = document.getElementById("search-bar").value;
    if (query) {
        console.log("Searching for:", query);
    } else {
        alert("Please enter a search term.");
    }
}

let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000);
}

showSlides();

document.addEventListener('DOMContentLoaded', function() {
    fetch('K-ERAnav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });

    fetch('K-ERAfooter.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
});
window.addEventListener("scroll", () => {
    const overlay = document.querySelector(".brand-overlay");
    if (window.scrollY > 100) {
        overlay.classList.add("hidden");
    } else {
        overlay.classList.remove("hidden");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.brand-overlay');
    const socialIcons = document.querySelectorAll('.social-icon');
    let lastScrollTop = 0;
    let isOverlayRemoved = false;

    // Function to disable/enable social icons
    function toggleSocialIcons(disable) {
        socialIcons.forEach(icon => {
            icon.style.pointerEvents = disable ? "none" : "auto";
        });
    }

    // Function to handle overlay visibility
    function handleOverlayVisibility(scrollY) {
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollY / (documentHeight - window.innerHeight)) * 100;

        if (scrollY < lastScrollTop) { // Scrolling up
            if (isOverlayRemoved) {
                document.body.appendChild(overlay); // Re-add overlay to the DOM
                isOverlayRemoved = false;
                overlay.style.display = "block"; // Make it visible again
                toggleSocialIcons(true);  // Disable social icons while the overlay is visible
            }
        } else { // Scrolling down
            if (scrollPercentage > 10 && !isOverlayRemoved) {
                overlay.remove(); // Completely remove the overlay from the DOM
                isOverlayRemoved = true;
                toggleSocialIcons(false);  // Enable social icons again
            }
        }

        lastScrollTop = scrollY <= 0 ? 0 : scrollY; // For Mobile or negative scrolling
    }

  
    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY;
        handleOverlayVisibility(scrollY);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("form");

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validate passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Create a user object
        const user = { fullName, email, username, password };

        // Save to LocalStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some((u) => u.username === username || u.email === email);

        if (userExists) {
            alert("User with this username or email already exists.");
        } else {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Sign-up successful! You can now log in.");
            signupForm.reset();
        }
    });
});
