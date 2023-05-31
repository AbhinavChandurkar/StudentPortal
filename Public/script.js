document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const errorMessage = document.getElementById("error-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const email = form.email.value;
      const password = form.password.value;
  
      // Send login request to the server
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
        .then(response => {
          if (response.ok) {
            // Login successful, redirect to dashboard or desired page
            window.location.href = "/Dashboard";
          } else {
            // Login failed, display error message
            response.text().then(errorMessageText => {
              errorMessage.textContent = errorMessageText;
            });
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
  });
  