console.log("Hello, world! Welcome to my static website.");

const menuButton = document.querySelector(".menu-button");
const menuOptions = document.querySelector(".menu-options");

menuButton.addEventListener("click", () => {
  if (
    menuOptions.style.display === "none" ||
    menuOptions.style.display === ""
  ) {
    menuOptions.style.display = "block"; // Show the options
    setTimeout(() => {
      menuOptions.style.opacity = "1";
      menuOptions.style.transform = "translateY(0)";
    }, 0);
  } else {
    menuOptions.style.opacity = "0";
    menuOptions.style.transform = "translateY(-10px)";
    setTimeout(() => {
      menuOptions.style.display = "none";
    }, 300);
  }
});

// Optional: Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !menuOptions.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    menuOptions.style.opacity = "0";
    menuOptions.style.transform = "translateY(-10px)";
    setTimeout(() => {
      menuOptions.style.display = "none";
    }, 300);
  }
});

// Dark theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const toggleIcon = themeToggle.querySelector(".toggle-icon");
const toggleText = themeToggle.querySelector("span:not(.toggle-icon)");

// Check for saved theme preference or use preferred color scheme
const currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleIcon.textContent = "☀️";
  toggleText.textContent = "Light Mode";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  toggleIcon.textContent = isDark ? "☀️" : "🌙";
  toggleText.textContent = isDark ? "Light Mode" : "Dark Mode";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
const backToTopBtn = document.getElementById("backToTopBtn");

// back button
// show the button when scrolled down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
