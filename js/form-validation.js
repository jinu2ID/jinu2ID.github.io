// Email regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// ^         = start of string
// [^\s@]+   = one or more chars that are NOT whitespace or @
// @         = literal @ symbol
// [^\s@]+   = one or more chars that are NOT whitespace or @
// \.        = literal dot (backslash escapes the dot)
// [^\s@]+   = one or more chars that are NOT whitespace or @
// $         = end of string
// Result: matches "text@text.text" pattern
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    if (nameInput.value.trim() === "") {
      document.getElementById("name-error").textContent = "Name is required";
      isValid = false;
    } else if (nameInput.value.trim().length < 2) {
      document.getElementById("name-error").textContent = "Name must be at least 2 characters";
      isValid = false;
    } else {
      document.getElementById("name-error").textContent = "";
    }

    if (emailInput.value.trim() === "") {
      document.getElementById("email-error").textContent = "Email is required";
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      document.getElementById("email-error").textContent = "Please enter a valid email";
      isValid = false;
    } else {
      document.getElementById("email-error").textContent = "";
    }

    if (messageInput.value.trim() === "") {
      document.getElementById("message-error").textContent = "Message is required";
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      document.getElementById("message-error").textContent = "Message must be at least 10 characters";
      isValid = false;
    } else {
      document.getElementById("message-error").textContent = "";
    }

    if (isValid) {
      form.submit();
    }
  });
});
