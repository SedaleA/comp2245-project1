document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.querySelector(".newsletter form");
  const emailInput = document.querySelector("#email");
  const messageDiv = document.querySelector(".message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    //check for empty email or invalid format
    if (email === "") {
      messageDiv.textContent = "Please enter a valid email address";
      messageDiv.style.color = "red";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      messageDiv.style.color = "green";
    }
  });
});
