document.getElementById("nappi").addEventListener("click", function () {
  document.getElementById("tekstiOutput").textContent =
    document.getElementById("tekstiInput").value;
});

// ylempi tekee samaa kuin alempi

function showInput() {
  // asetetaan muuttujan arvo silloin, kun nappia on painettu
  const userInput = document.getElementById("tekstiInput").value;
  // korvataan olemassa oleva teksti muuttujan arvolla
  document.getElementById("tekstiOutput").textContent = userInput;
}

// kutsutaan funktiota, kun nappia on painettu
document.getElementById("nappi").addEventListener("click", showInput);
