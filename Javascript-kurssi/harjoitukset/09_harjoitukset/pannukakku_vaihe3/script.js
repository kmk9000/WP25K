document.addEventListener("DOMContentLoaded", function () {
  // Those variables are optional
  const form = document.getElementById("pancakeForm");
  const totalPriceBanner = document.getElementById("totalPrice");
  const totalPriceDisplay = document.getElementById("totalPriceDisplay");
  const seeOrderButton = document.getElementById("seeOrder");
  const summaryText = document.getElementById("summaryText");
  const typeSelect = document.getElementById("type");

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
    // lisätään loppusummaan jokaisesta täytteestä 1€
    // length on indeksin pituus, jos siellä on vain 1 valittu, pituus on 1 jne.
    total += toppings.length * 1;

    // haetaan lisukkeet listaan ja käsitellään lista. lisätään valittujen hinta
    let extraChoices = document.querySelectorAll(".extra");
    extraChoices.forEach((checkbox) => {
      if (checkbox.checked) {
        total = total + parseFloat(checkbox.getAttribute("data-price"));
      }
    });

    // haetaan kuljetuksen arvo ja lisätään hinta (hinta voi olla nolla)
    let delivery = document.querySelector("input[name='delivery']:checked");
    total += parseFloat(delivery.getAttribute("data-price"));

    // muotoillaan kokonaishinta desimaali luvuksi
    let formattedTotal = total.toFixed(0) + "€";
    totalPriceBanner.textContent = formattedTotal;
    totalPriceDisplay.textContent = formattedTotal;
  }

  // olio, joka sisältää tilauksen tiedot.
  class SavedOrder {
    constructor(
      id,
      customerName,
      selectedPancake,
      toppings,
      extras,
      deliveryMethod,
      totalPrice,
      status
    ) {
      this.id = id;
      this.customerName = customerName;
      this.selectedPancake = selectedPancake;
      this.toppings = toppings;
      this.extras = extras;
      this.deliveryMethod = deliveryMethod;
      this.totalPrice = totalPrice;
      this.status = status;
    }
  }

  seeOrderButton.addEventListener("click", function () {
    // haetaan tilaajan nimi
    const customerName = document.getElementById("customerName").value.trim();
    const selectedType = typeSelect.options[typeSelect.selectedIndex];
    const delivery = document
      .querySelector("input[name=delivery]:checked")
      .parentElement.textContent.trim();
    const totalPrice = totalPriceDisplay.textContent;
    const status = "Pending";

    // luo yksilöllinen ID ja yhdistä tiedot siihen
    const newOrder = new SavedOrder(
      Date.now().toString().trim(),
      customerName,
      selectedType.value,
      [...toppings],
      [...extras],
      delivery,
      totalPrice,
      status
    );

    // näytetään tilauksen tiedot
    let summary = `<strong>Customer:</strong> ${
      customerName || "(No Name)"
    }<br>`;
    summary += `Type: ${selectedType.value}<br>`;
    summary += `Toppings: ${
      toppings.length > 0 ? toppings.join(", ") : "No toppings"
    }<br>`;
    summary += `Extras: ${
      extras.length > 0 ? extras.join(", ") : "No extras"
    }<br>`;
    summary += `Delivery: ${delivery}<br>`;
    summary += `Total price: ${totalPriceDisplay.textContent}`;
    summaryText.innerHTML = summary;

    // Lisää olio orders-taulukkoon. Tallenna orders localStorageen, jotta tiedot säilyvät sivun päivityksen jälkeen
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
  });
});
