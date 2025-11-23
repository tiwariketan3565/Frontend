const form = document.getElementById("signupForm");

const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("userEmail");
const passInput = document.getElementById("userPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }
});

emailInput.addEventListener("input", function () {
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Email must include '@'";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }
});

passInput.addEventListener("input", function () {
  let password = passInput.value;

  if (password.length !== 8) {
    passwordError.textContent = "Password must be exactly 8 characters";
    passInput.classList.add("invalid");
    passInput.classList.remove("valid");
  } else if (!password.match(/[!@#$%^&*]/)) {
    passwordError.textContent = "Must include at least one special character (!@#$%^&*)";
    passInput.classList.add("invalid");
    passInput.classList.remove("valid");
  } else {
    passwordError.textContent = "";
    passInput.classList.remove("invalid");
    passInput.classList.add("valid");
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (
    nameInput.classList.contains("valid") &&
    emailInput.classList.contains("valid") &&
    passInput.classList.contains("valid")
  ) {
    alert("Form Submitted Successfully!");
  } else {
    alert("Please fix the errors before submitting.");
  }
});
