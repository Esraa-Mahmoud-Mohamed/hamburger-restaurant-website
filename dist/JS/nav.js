
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
