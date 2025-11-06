document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.querySelector(".newsletter form");
  const emailInput = document.querySelector("#email");
  const messageDiv = document.querySelector(".message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    //check for empty email or invalid format
    if (email === "" || !isValidEmail) {
      messageDiv.textContent = "Please enter a valid email address";
      messageDiv.style.color = "red";
    } else {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      messageDiv.style.color = "green";
    }
  });
});
