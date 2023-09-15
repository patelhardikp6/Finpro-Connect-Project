
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your authentication logic.
    // For this basic example, we'll just alert the entered values.
    alert(`Username: ${username}\nPassword: ${password}`);
});