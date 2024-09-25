document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    if (email && password) {
        alert('Admin login successful!');
    } else {
        alert('Please fill in all fields.');
    }
});