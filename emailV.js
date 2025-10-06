let form = document.querySelector(".form");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // clear old messages
  document.querySelector("#emailmsg").textContent = "";
  document.querySelector("#passmsg").textContent = "";
  document.querySelector("#Rmssg").textContent = "";
  email.style.border = "";
  pass.style.border = "";

  // regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // test values
  let emailans = emailRegex.test(email.value);
  let passans = passRegex.test(pass.value);

  let isvalid = true;

  if (!emailans) {
    document.querySelector("#emailmsg").textContent = "❌ Invalid Email Format";
    email.style.border = "2px solid red";
    isvalid = false;
  }

  if (!passans) {
    document.querySelector("#passmsg").textContent =
      "❌ Must contain letters, numbers, and min 8 chars";
    pass.style.border = "2px solid red";
    isvalid = false;
  }

  if (isvalid) {
    document.querySelector("#Rmssg").textContent = "✅ Login Successful!";
    document.querySelector("#Rmssg").style.color = "lightgreen";
    email.style.border = "2px solid lightgreen";
    pass.style.border = "2px solid lightgreen";
  } else {
    document.querySelector("#Rmssg").style.color = "red";
  }
});
