document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'MhdYanwar' && password === 'student-nf23') {
        window.location.href = 'succes.html'; // Navigate to the success page
    } else {
        alert('Invalid username or password.');
    }
});