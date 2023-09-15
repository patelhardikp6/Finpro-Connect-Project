document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const userType = document.getElementById('userType').value;
        const name = document.getElementById('name').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic form validation (you can enhance this)
        if (name === '' || phoneNumber === '' || address === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            // You can perform further actions here, like sending the data to the server.
            alert(`User Type: ${userType}\nName: ${name}\nPhone: ${phoneNumber}\nAddress: ${address}\nEmail: ${email}`);
        }
    });
});