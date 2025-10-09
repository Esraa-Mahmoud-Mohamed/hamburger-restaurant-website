
document.addEventListener("click", function (e) {
  const navbarCollapse = document.querySelector("#navbarNav");
  const overlay = document.querySelector(".navbar-overlay");
  const toggler = document.querySelector(".navbar-toggler");

  // If overlay exists and is visible
  if (navbarCollapse.classList.contains("show")) {
    // Check if the click is *outside* the navbar or overlay
    if (
      !navbarCollapse.contains(e.target) &&
      !toggler.contains(e.target)
    ) {
      // Close the navbar
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      bsCollapse.hide();
    }
  }
});



document.addEventListener("DOMContentLoaded", function () {
  // Detect if we're on login or signup page
  const path = window.location.pathname;

  // Select the right-icons container
  const rightIcons = document.querySelector(".right-icons");
  console.log("rightIcons:", rightIcons);

  if (path.includes("login.html") || path.includes("signup.html")) {
    // Hide the original right icons
    if (rightIcons) rightIcons.style.setProperty("display", "none", "important");

    // Create a new container for login/signup buttons
    const authButtons = document.createElement("div");
    authButtons.classList.add("auth-buttons", "d-flex", "gap-2");

    authButtons.innerHTML = `
      <a href="login.html" class="btn btn-outline px-3">Login</a>
      <a href="signup.html" class="btn btn-primary px-3">Sign Up</a>
    `;

    // Append them to navbar (for example, before closing .navbar-collapse)
    const navbar = document.querySelector(".container-fluid");
    if (navbar) navbar.appendChild(authButtons);
  }
});



