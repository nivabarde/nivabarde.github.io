document.getElementById('startupForm').addEventListener('submit', function(e) {
  // For frontend only: prevent form submission and show a message
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thank you for registering your startup! (Demo message)";
});