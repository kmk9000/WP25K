document.addEventListener("DOMContentLoaded", function () {
  const typeSelect = document.getElementById("type");
  const toppingCheckBoxes = document.querySelectorAll(".topping");
  const extraCheckBoxes = document.querySelectorAll(".extra");

  typeSelect.addEventListener("change", updatePrice);
  console.log("type of order change");
  toppingCheckBoxes.forEach((topping) => {
    topping.addEventListener("change", updatePrice);
  });
  extraCheckBoxes.forEach((extra) =>
    extra.addEventListener("change", updatePrice)
  );
});

function updatePrice() {
  const typeSelect = document.getElementById("type");
  const toppingCheckBoxes = document.querySelectorAll(".topping:checked");
  const extraCheckBoxes = document.querySelectorAll(".extra:checked");

  let total = parseFloat(typeSelect.value);

  total += toppingCheckBoxes.length * 1;
  extraCheckBoxes.forEach((extra) => {
    console.log("Extra topping added");
    total += parseFloat(extra.value);
    console.log("Total price for now is: ", total);
  });
  const formattedTotal = total.toFixed(2) + "€";
  document.getElementById(("totalPrice".textContent = formattedTotal));
  document.getElementById(("totalPriceDisplay".textContent = formattedTotal));
}
