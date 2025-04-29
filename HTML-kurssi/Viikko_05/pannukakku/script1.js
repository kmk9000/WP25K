// Add event listeners directly with inline functions or a named function
document.getElementById("type").addEventListener("change", updatePrice);
document.querySelectorAll(".topping").forEach(function (topping) {
  topping.addEventListener("change", updatePrice);
});
document.querySelectorAll(".extra").forEach(function (extra) {
  extra.addEventListener("change", updatePrice);
});

// Update price function
function updatePrice() {
  // Get selected pancake base price
  let total = parseFloat(document.getElementById("type").value);

  // Add 1€ for each checked topping
  document.querySelectorAll(".topping").forEach(function (topping) {
    if (topping.checked) {
      total += 1; // Add 1€ for each topping
    }
  });

  // Add price of each selected extra (2€ or 3€)
  document.querySelectorAll(".extra").forEach(function (extra) {
    if (extra.checked) {
      total += parseFloat(extra.value); // Add extra price (2€ or 3€)
    }
  });

  // Update price display
  document.getElementById("totalPriceDisplay").textContent = total + "€";
  document.getElementById("totalPrice").textContent = total + "€";
}
