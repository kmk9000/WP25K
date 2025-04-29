document.addEventListener("DOMContentLoaded", function () {
  // Those variables are optional
  const form = document.getElementById("pancakeForm");

  const totalPriceBanner = document.getElementById("totalPrice");

  const totalPriceDisplay = document.getElementById("totalPriceDisplay");

  const seeOrderButton = document.getElementById("seeOrder");

  const summaryText = document.getElementById("summaryText");

  // These Arrays are needed
  let toppings = [];
  let extras = [];

  //One event listener for all the form
  form.addEventListener("change", function (event) {
    const target = event.target;
    // checks into which checkbox the lists were added
    if (target.classList.contains("topping")) {
      handleToppings(target);
    } else if (target.classList.contains("extra")) {
      handleExtras(target);
    }
    updatePrice();
  });

  function handleToppings(checkbox) {
    const toppingName = checkbox.parentElement.textContent.trim(); // the label in the html is the parent element
    if (checkbox.checked) {
      toppings.push(toppingName);
    } else {
      toppings = toppings.filter((topping) => topping !== toppingName); // topping could be t
    }
    console.log("toppings:", toppings);
  }
  function handleExtras(checkbox) {
    const extraName = checkbox.parentElement.textContent.trim();
    if (checkbox.checked) {
      extras.push(extraName);
    } else {
      extras = extras.filter((extra) => extra !== extraName); // extra could be t or e or whatever, it doesn't matter as it only takes into consideration what's inside the function
    }
    console.log("extras:", extras);
  }
  function updatePrice() {
    const pancakeType = document.getElementById("type");
    const selectedType = pancakeType.options[pancakeType.selectedIndex];
    let total = parseFloat(selectedType.getAttribute("data-price"));
    totalPriceBanner.textContent = total;
    totalPriceDisplay.textContent = total;
  }
});
