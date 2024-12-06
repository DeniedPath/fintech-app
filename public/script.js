const registerButton = document.querySelector('#register-button');
const loginButton = document.querySelector('#login-button');

registerButton.addEventListener('click', () => {
    // Handle the register button click
    // You can redirect to a registration page or handle the registration process here
    window.location.href = 'register.html'; // Example: Redirect to registration page
});

loginButton.addEventListener('click', () => {
    // Handle the login button click
    // You can redirect to a login page or handle the login process here
    window.location.href = 'login.html'; // Example: Redirect to login page
});