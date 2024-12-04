// Select the input fields and the login button
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const dummyLogin = document.getElementsByClassName("dummy-login"); 
const dummyEmail = document.getElementById("email");
const dummyPass = document.getElementById("password");

// Function to check if both fields are filled
function checkInputs() {
    if (usernameInput.value !== "" && passwordInput.value !== "") {
        loginBtn.disabled = false; // Enable the login button
    } else {
        loginBtn.disabled = true; // Disable the login button
    }
}


// Call the function to check inputs whenever the user types
usernameInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

// Login button click event
loginBtn.addEventListener("click", function () {
    const email = usernameInput.value;
    const password = passwordInput.value;

    // Check if the credentials match
    if (email === "user.aftab@gmail.com" && password === "Aftab@1234") {
        window.location.href = "welcome.html"; // Redirect to welcome.html
    } else {
        alert("Incorrect email or password. Please try again.");
    }
});

// Disable the button initially until the inputs are filled
loginBtn.disabled = true;