// login page functions
// toggle password mechanism
function togglePassword() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
///opt inputs
function otpTransition() {
  const otpInputs = document.querySelectorAll(".otp-input");

  otpInputs.forEach((input) => {
    if (input) {
      otpInputs[0].focus();
    }

    if (input.value.length <= 0) {
      input.textContent = "-";
    }

    input.addEventListener("keyup", (e) => {
      if (e.key === "Backspace") {
        input.previousElementSibling?.focus();
      } else {
        input.nextElementSibling?.focus();
      }
    });
  });
}
otpTransition();

/////////////////////////
// sidebar menu toggle
const sidebar = document.getElementById("sidebar-container");

function collapseSidebar() {
  sidebar.classList.toggle("collapsed");
}

///////////////////////////
// show/hide options box
function showOptions() {
  document.querySelector(".options-list").classList.toggle("hide");
}

// Define the breakpoint for small screens
const smallScreenBreakpoint = 1024; // Adjust as needed

// add/remove collapsed class based on screen size
function handleScreenSize() {
  if (window.innerWidth <= smallScreenBreakpoint) {
    sidebar.classList.add("collapsed");
  } else {
    sidebar.classList.remove("collapsed"); // Remove if screen is larger
  }
}

// Initial call to set the class on page load
handleScreenSize();

// Add an event listener to update the class on window resize
window.addEventListener("resize", handleScreenSize);
