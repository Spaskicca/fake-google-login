document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // спира изпращането
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = "Невалидна парола. Опитайте отново.";
    errorMessage.style.display = "block";
  });
  