// Toggle forms
document.getElementById("switch-to-signup").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("form-title").textContent = "Sign Up";
  });
  
  document.getElementById("switch-to-login").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("form-title").textContent = "Login";
  });
  
  // Utility: Email validation
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // LOGIN Validation
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
  
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
    const emailError = document.getElementById("login-email-error");
    const passError = document.getElementById("login-password-error");
  
    emailError.textContent = "";
    passError.textContent = "";
  
    if (!isValidEmail(email.value)) {
      emailError.textContent = "Please enter a valid email address";
      valid = false;
    }
  
    if (password.value.length < 6) {
      passError.textContent = "Password must be at least 6 characters";
      valid = false;
    }
  
    if (valid) alert("Login successful!");
  });
  
  // SIGNUP Validation
  document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
  
    const name = document.getElementById("signup-name");
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const confirm = document.getElementById("confirm-password");
  
    const nameError = document.getElementById("signup-name-error");
    const emailError = document.getElementById("signup-email-error");
    const passError = document.getElementById("signup-password-error");
    const confirmError = document.getElementById("confirm-password-error");
  
    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";
  
    if (name.value.trim().length < 3) {
      nameError.textContent = "Name must be at least 3 characters";
      valid = false;
    }
  
    if (!isValidEmail(email.value)) {
      emailError.textContent = "Invalid email format";
      valid = false;
    }
  
    if (password.value.length < 6) {
      passError.textContent = "Password must be at least 6 characters";
      valid = false;
    }
  
    if (password.value !== confirm.value) {
      confirmError.textContent = "Passwords do not match";
      valid = false;
    }
  
    if (valid) alert("Signup successful!");
  });
  