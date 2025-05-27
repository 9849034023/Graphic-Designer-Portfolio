document.getElementById('navbar').innerHTML = fetch('K-ERAnav.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});

document.getElementById('footer').innerHTML = fetch('K-ERAfooter.html')
.then(response => response.text())
.then(data => {
   document.getElementById('footer').innerHTML = data;
 });
// Add this to your K-ERAnav-footer.js or include it directly in your HTML file

// Retrieve and display user data on page load
window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const profileElement = document.querySelector('#user-profile'); // Update selector based on your profile section

  if (username && email && profileElement) {
      profileElement.innerHTML = `
          <h2>Welcome, ${username}</h2>
          <p>Email: ${email}</p>
      `;
  }
});

// Example signup form logic (adjust based on your actual form structure)
document.querySelector('#signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#signup-username').value;
  const email = document.querySelector('#signup-email').value;

  if (username && email) {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      alert('Signup successful!');
      location.reload(); // Refresh to display updated profile
  }
});


