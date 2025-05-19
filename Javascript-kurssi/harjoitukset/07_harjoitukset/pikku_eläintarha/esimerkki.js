let animals = [
  { name: "kettu", type: "nisäkäs" },
  { name: "karhu", type: "nisäkäs" },
  { name: "kotka", type: "lintu" },
  { name: "kilpikonna", type: "matelija" },
  { name: "sammakko", type: "sammakkoeläin" },
  { name: "lohi", type: "kala" },
  { name: "papukaija", type: "lintu" },
  { name: "hai", type: "kala" },
  { name: "miekkavalas", type: "nisäkäs" },
];

// DOMs
const animalList = document.getElementById("animalList");
const addButton = document.getElementById("addAnimal");
const newNameInput = document.getElementById("newAnimalName");
const newTypeSelect = document.getElementById("newAnimalType");
const filterSelect = document.getElementById("filterType");
const sortButton = document.getElementById("sortAnimals");
const searchInput = document.getElementById("searchAnimal");

function renderList() {
  animalList.innerHTML = "";

  // taulukko, johon suodatetaan eläimet
  let filterType = filterSelect.value; // erillinen muuttuja tässä, jotta aiemmat DOM:t pysyvät johdonmukaisina
  let filtered = [];
  let searchTerm = searchInput.value.trim().toLowerCase;

  for (let i = 0; i < animals.length; i++) {
    const a = animals[i];
    // jos toinen ehdoista täyttyy, silmukan kierros päätty tähän
    if (filterType !== "kaikki" && a.type !== filterType) {
      continue;
    }

    if (a.name.toLocaleLowerCase().includes(searchTerm)) {
      continue;
    }

    //jos tapahtui "continue", tätä ei suoriteta
    filtered.push(a); // lisää eläimen filtered taulukkoon
  }

  // näytetään vain suodatetut eläimet
  filtered.forEach((animal) => {
    let li = document.createElement("li"); // luodaan lista

    li.innerHTML = `<span class="animal-name"> ${animal.name} </span> <span class="animal-type"> ${animal.type} </span>`; // laittaa ne omiin span elementteihin ja antaa niille luokat, jotta niitä ei käsitellä
    animalList.appendChild(li); // lisää listaan uuden osan
  });

  addButton.addEventListener("click", (event) => {
    event.preventDefault(); // hyvä käytää lomakkeita varten, vaikka nyt meillä ei olekaan lomaketta/formia eikä sitä tekniseseti tarvita
    let name = newNameInput.value.trim().toLowerCase();
    let type = newTypeSelect.value.toLowerCase();

    if (name) {
      animals.push({ name, type });
      newNameInput.value = ""; // ei lisää tyhjää nimeä
      renderList();
    }
  });
}

// laitaa aakkosjärjestykseen
sortButton.addEventListener("click", () => {
  animals.sort((a, b) => a.name.localeCompare(b.name));
  renderList();
});

filterSelect.addEventListener("change", renderList);
searchInput.addEventListener("input", renderList);
renderList();
