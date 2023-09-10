const form = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
    if (passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        e.preventDefault();
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match.');
        e.preventDefault();
    }
});

