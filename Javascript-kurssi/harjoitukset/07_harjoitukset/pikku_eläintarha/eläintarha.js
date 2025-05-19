class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const animals = [
  { name: "Kettu", type: "Nisäkäs" },
  { name: "Karhu", type: "Nisäkäs" },
  { name: "Kissa", type: "Nisäkäs" },
  { name: "Lohi", type: "Kala" },
  { name: "Papukaija", type: "Lintu" },
  { name: "Rupikonna", type: "Sammakkoeläin" },
  { name: "Sisilisko", type: "Matelija" },
  { name: "Kameleontti", type: "Matelija" },
];

// what DOMs do I need?
const animalListElement = document.getElementById("animalList");
const searchInput = document.getElementById("searchAnimal");
const filterSelect = document.getElementById("filterType");
const sortButton = document.getElementById("sortAnimals");
const newAnimalNameInput = document.getElementById("newAnimalName");
const newAnimalTypeSelect = document.getElementById("newAnimalType");
const addAnimalButton = document.getElementById("addAnimal");

// eventlisteners I need for the DOMs
addAnimalButton.addEventListener("click", addAnimal);
sortButton.addEventListener("click", sortAnimalsAlphabetically);
searchInput.addEventListener("input", filterAnimals);
filterSelect.addEventListener("change", filterAnimals);

function displayAnimals(animalArray) {
  animalListElement.innerHTML = ""; // clears current list

  animalArray.forEach((animal) => {
    const li = document.createElement("li");
    li.textContent = `${animal.name} (${animal.type})`;
    animalListElement.appendChild(li);
  });
  renderList();
}

function addAnimal() {
  const name = newAnimalNameInput.value.trim();
  const type = newAnimalTypeSelect.value;

  if (name) {
    const capitalizedName =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const newAnimal = new Animal(capitalizedName, type);
    animals.push(newAnimal);
    newAnimalNameInput.value = "";
    displayAnimals(animals);
  }
}

function sortAnimalsAlphabetically() {
  animals.sort((a, b) => a.name.localeCompare(b.name, "fi"));
  displayAnimals(animals);
}

function filterAnimals() {
  const filteredAnimals = animals.filter((animal) => {
    const nameMatch = animal.name
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());
    const typeMatch =
      filterSelect.value === "Kaikki" || animal.type === filterSelect.value;
    return nameMatch && typeMatch;
  });

  displayAnimals(filteredAnimals);
}
