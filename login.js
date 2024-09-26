function validateCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'Administrator') {
        redirectToURL();
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        errorMessage.style.display = 'block';
    }
}

function redirectToURL() {
    const targetURL = 'https://example.com'; // Change this to your desired URL
    window.location.href = targetURL;
}
