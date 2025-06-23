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

    const messages = ["Invalid/empty username", "Invalid/empty password", "invalid/empty email"]
if(username.length <3)
{
  messages[0] = "Username name cannot be less than 3 character"
  isValid = false
}
    
if(password.length <8)
{
  messages[0] = "Password length must be greater than 8"
  isValid = false
}
    
if(!email.includes("@") && !email.includes("."))
{
  isValid = false
  messages[2] = "Invalid email address"
}
    
if(isValid) 
{
  feedBackDiv.style.display = "block"
  feedbackDiv.textContent = "Registration successful!"
}
if(!isValid)  {
feedBackDiv.style.display = "block"
  feedBackDiv.style.display = "block"
  const err_msg = messages.join("<br>")
  feedbackDiv.innerHTML = err_msg
  feedbackDiv.style.color ="#dc3545"
}
   
  });
});

