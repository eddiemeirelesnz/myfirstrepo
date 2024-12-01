// script.js
function toggleDetails(projectId) {
    const details = document.querySelector(`#${projectId} .details`);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}

// Handle form submission
document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
