/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

localStorage.setItem("message", "Hello, LocalStorage!");
const hello = localStorage.getItem("message");
console.log(hello);

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

const userSettings = { theme: "dark", language: "English" };
let userSettingsJSON = JSON.stringify(userSettings);
localStorage.setItem("userSettings", userSettingsJSON);
let storedUserSettingsJSON = localStorage.getItem("userSettings");
let storedUserSettings = JSON.parse(storedUserSettingsJSON);
console.log(storedUserSettings.theme);

// mudar example
localStorage.setItem("userSettings", JSON.stringify(userSettings));
console.log(JSON.parse(localStorage.getItem("userSettings")).theme);

/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/

let favoriteBooks = [
  { title: "Sinuhe egyptiläinen", author: "Mika Waltari" },
  { title: "Taru sormusten herrasta", author: "J.R.R. Tolkien" },
  { title: "Ylpeys ja ennakkoluulo", author: "Jane Austen" },
];

let favoriteBooksJSON = JSON.stringify(favoriteBooks);
localStorage.setItem("favoriteBooks", favoriteBooksJSON);
let localFavoriteBooksJSON = localStorage.getItem("favoriteBooks");
let localFavoriteBooks = JSON.parse(localFavoriteBooksJSON);
console.log(localFavoriteBooks[0].title);
console.log(localFavoriteBooks[1].title);
console.log(localFavoriteBooks[2].title);

// mudar example
/*
localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const books = JSON.parse(localStorage.getItem("books"));
books.forEach((book) => {
  console.log(book.title);
});
*/

/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/

/*
function saveToLocalStorage(key, object) {
  const objectJSON = JSON.stringify(key, object);
  localStorage.setItem(key, objectJSON);
}
const animal = { name: "Spot", species: "dog" };
saveToLocalStorage(animal);
console.log(`${animal.name} is a ${animal.species}`);
*/
// mudar inspired style attempt
const saveToLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};
saveToLocalStorage("books", favoriteBooks);
console.log(JSON.parse(localStorage.getItem("books")));

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  try {
    // yrittää ajaa tätä
    console.log(JSON.parse(value));
    return JSON.parse(value);
    // jos tuottaa virheen
  } catch (error) {
    // se siirtty tähän
    console.log(value);
    return value;
  }
};
getFromLocalStorage("books");
getFromLocalStorage("message");

/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

let userProfile = {
  username: "exampleUser",
  email: "user@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};
saveToLocalStorage("profile", userProfile);
getFromLocalStorage("profile");

userProfile.preferences.theme = "dark";

saveToLocalStorage("profile", userProfile);
getFromLocalStorage("profile");

/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

const shoppingList = {
  items: ["maito", "leipä", "juusto", "omena"],
};
saveToLocalStorage("shoppingList", shoppingList);

const addItemToList = (item) => {
  const list = getFromLocalStorage("shoppingList");
  list.items.push(item);
  saveToLocalStorage("shoppingList", list);
  console.log(list);
};
addItemToList("mätitahna");

/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

let counter = { count: 0 };
saveToLocalStorage("counter", counter);
const incrementCounter = () => {
  let inc = getFromLocalStorage("counter"); // hakee olion "counter"
  inc.count++; // ksvatta yhdellä
  saveToLocalStorage("counter", inc); // tallentaa sen
  console.log(inc.count);
};
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();

/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/

const tasks = [
  { id: 1, description: "Vie roskat", completed: false },
  { id: 2, description: "Tee kotitehtävät", completed: false },
  { id: 3, description: "Käy kaupassa", completed: false },
];

saveToLocalStorage("tasks", tasks);
const markTaskComplete = (taskId) => {
  let tasks = getFromLocalStorage("tasks");
  let task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
  }
  saveToLocalStorage("tasks", tasks);
  console.log(tasks);
};

markTaskComplete(2);

/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
