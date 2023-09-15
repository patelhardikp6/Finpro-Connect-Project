document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here, you can implement your own logic, such as sending the data to a server or displaying a confirmation message.
    // For demonstration purposes, we'll log the input values to the console.
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
});