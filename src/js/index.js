let email = document.getElementById("regEmail");
let error = document.querySelector("#regEmail + .error");

email.addEventListener("input", () => {

   if (email.validity.valid) {
       error.innerHTML = "";
       error.className = "error";
   }
   else {
       error.innerHTML = "Email is invalid";
       error.className = "error active";
   }

}, false);

let comPass = document.getElementById("comPassword");
let pass = document.getElementById("regPassword");
let passError = document.querySelector("#comPassword + .error")

comPass.addEventListener("input", () => {

    if (pass.value === comPass.value) {
        passError.innerHTML = "";
        passError.className = "error";
    }
    else {
        passError.innerHTML = "Passwords do not match";
        passError.className = "error active";
    }

}, false);


