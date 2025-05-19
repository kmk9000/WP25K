console.log("Hello, world! Welcome to my static website.");
/*
const menuButton = document.querySelector(".menu-button");
const menuOptions = document.querySelector(".menu-options");

menuButton.addEventListener("click", () => {
  if (
    menuOptions.style.display === "none" ||
    menuOptions.style.display === ""
  ) {
    menuOptions.style.display = "block"; // Show the options
  } else {
    menuOptions.style.display = "none"; // Hide the options
  }
});

// Optional: Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !menuOptions.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    menuOptions.style.display = "none";
  }
});
*/
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
