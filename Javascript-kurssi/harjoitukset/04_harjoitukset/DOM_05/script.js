function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Change the background to a random color
function changeBackground() {
  document.body.style.backgroundColor = getRandomColor();
}

// Change the text color based on user input
  document.getElementById("updateColor").addEventListener("click", () => {
    const color = document.getElementById("textColor").value;
    document.getElementById("textToChange").style.color = color;
  });