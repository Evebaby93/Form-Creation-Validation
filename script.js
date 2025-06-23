document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback")
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault()
    let valid = true;
    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value.trim()
    const email = document.getElementById("email").value.trim()

    let isValid = true

    const messages = []
if(username.length <3)
{
  messages.push("Username name cannot be less than 3 character")
  isValid = false
}
    
if(password.length <8)
{
  messages.push("Password length must be greater than 8")
  isValid = false
}
    
if(!email.includes("@") && !email.includes("."))
{
  isValid = false
  messages.push("Invalid email address")
}
     feedbackDiv.style.display = "block"
if(isValid) 
{
 
  feedbackDiv.textContent = "Registration successful!"
}
if(!isValid)  {

  const err_msg = messages.join("<br>")
  feedbackDiv.innerHTML = err_msg
  feedbackDiv.style.color ="#dc3545"
}
   
  });
});

