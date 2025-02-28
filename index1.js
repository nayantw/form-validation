document.querySelector(".form-submit").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("cpassword").value;

  const usernameRegex = /^[A-za-z0-9]{3,25}$/;
  const phoneRegex = /^[6-9][\d]{9}$/;
  const emailRegex =
    /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

  document.querySelectorAll(".error").forEach((curElem) => {
    curElem.textContent = "";
  });

  let isValid = true;

  if (!usernameRegex.test(username)) {
    document.getElementById("usernameError").textContent = "username should have 3-25 characters";
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Email not correct";
    isValid = false;
  }

  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "pass error";
    isValid = false;
  }

  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "wrong number";
    isValid = false;
  }

  if (password !== cpassword) {
    document.getElementById("cpasswordError").textContent =
      "Passwords do not match";
    isValid = false;
  }

  // if (isValid) {
  //   let userdata = [];
  //   let formclass = document.getElementsByClassName("form-elem");
  //   Array.from(formclass).forEach((curElem) => userdata.push(curElem.value));
  //   Array.from(formclass).forEach((curElem) => (curElem.textContent = ""));

  //   alert("Registration Sucessful");

  // If everything is valid, show success and collect data
  if (isValid) {
    let userdata = [];
    let formclass = document.getElementsByClassName("form-elem");

    // Collect form data
    Array.from(formclass).forEach((curElem) => userdata.push(curElem.value));

    // Clear the form values (optional)
    Array.from(formclass).forEach((curElem) => (curElem.value = ""));

    // Show success alert
    alert("Registration Successful");
  }
});
