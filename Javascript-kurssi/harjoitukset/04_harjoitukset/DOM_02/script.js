/*
Käytä HTML-tiedostoa, jossa on <input>-kenttä, <button> ja <ul>-lista, jonka ID on fruitList.
Kirjoita JavaScript-koodi, joka:
- Hakee arvon input-kentästä, kun painiketta klikataan.
- Luo uuden <li>-elementin ja asettaa sen tekstisisällöksi input-kentän arvon.
- Lisää <li>-elementin listaan.
- Tyhjentää input-kentän hedelmän lisäämisen jälkeen.
*/
document.getElementById("addFruitBtn").addEventListener("click", function () {
  const fruit = document.getElementById("fruitInput");

  const listItem = document.createElement("li");
  listItem.textContent = fruit.value;

  document.getElementById("fruitList").appendChild(listItem);
  fruit.value = "";
});

// sama mutta funktio erikseen
function addFruit() {
  const fruit = document.getElementById("fruitInput");

  const listItem = document.createElement("li");
  listItem.textContent = fruit.value;

  document.getElementById("fruitList").appendChild(listItem);
  fruit.value = "";
}

document.getElementById("addFruitBtn").addEventListener("click", addFruit);
// lisätään tähän toinen funktiokutsu, joka reagoi enterin painamiseen
document
  .getElementById("fruitInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Eneter") {
      addFruit();
    }
  });

// vaihtoehtoinen tapa

document.getElementById("addFruitBtn").addEventListener("click", function () {
  const fruit = document.getElementById("fruitInput");
  if (fruit.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = fruit.value;

    document.getElementById("fruitList").appendChild(listItem);
    fruit.value = "";
  }
});

// alla kopio githubista
// Tälle tehtävällä on useampi vastausvaihtoehto.

// Yksinkertainen vaihtoehto 1 - varsinainen tehtäväanto

document.getElementById("addButton").addEventListener("click", function () {
  const fruit = document.getElementById("fruitInput");

  const listItem = document.createElement("li");
  listItem.textContent = fruit.value;

  document.getElementById("fruitList").appendChild(listItem);
  fruit.value = "";
});

// Yksinkertainen vaihtoehto 2 - varsinainen tehtäväanto

function lisaaHedelma() {
  const fruit = document.getElementById("fruitInput");

  const listItem = document.createElement("li");
  listItem.textContent = fruit.value;

  document.getElementById("fruitList").appendChild(listItem);
  fruit.value = "";
}

document.getElementById("addButton").addEventListener("click", lisaaHedelma);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Jos ei haluta lisätä tyhjiä listaelementtejä, lisätään if-lause
// Vaihtoehto 1

document.getElementById("addButton").addEventListener("click", function () {
  const fruit = document.getElementById("fruitInput");

  // jos tekstikenttä ei ole tyhjä, toteutetaan elementin lisääminen
  if (fruit.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = fruit.value;

    document.getElementById("fruitList").appendChild(listItem);
    fruit.value = "";
  }
});

// Vaihtoehto 2

function lisaaHedelma() {
  const fruit = document.getElementById("fruitInput");

  // jos tekstikenttä ei ole tyhjä, toteutetaan elementin lisääminen
  if (fruit.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = fruit.value;

    document.getElementById("fruitList").appendChild(listItem);
    fruit.value = "";
  }
}

document.getElementById("addButton").addEventListener("click", lisaaHedelma);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Jos halutaan lisätä toiminto, jossa hedelmä voidaan lisätään myös enteriä painamalla

function lisaaHedelma() {
  const fruit = document.getElementById("fruitInput");

  // jos tekstikenttä ei ole tyhjä, toteutetaan elementin lisääminen
  if (fruit.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = fruit.value;

    document.getElementById("fruitList").appendChild(listItem);
    fruit.value = "";
  }
}

document.getElementById("addButton").addEventListener("click", lisaaHedelma);
// Lisätään tähän toinen funktiokutsu, joka reagoi enterin painamiseen
document
  .getElementById("fruitInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      lisaaHedelma();
    }
  });
