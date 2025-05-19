/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const student = { name: "Tom", age: 17, grade: 8 };
const stringifiedStudent = JSON.stringify(student);
console.log(stringifiedStudent);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

const parsedStudent = JSON.parse(stringifiedStudent);
console.log(parsedStudent);

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const classroom = [
  { name: "Maija Meikäläinen", age: 20, grade: 5 },
  { name: "Matti Virtanen", age: 22, grade: 4 },
  { name: "Liisa Koskinen", age: 19, grade: 5 },
  { name: "Antti Nieminen", age: 21, grade: 3 },
];

const classroomJSON = JSON.stringify(classroom);
console.log(classroomJSON);

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/

const classroomUNJASON = JSON.parse(classroomJSON);
console.log(classroomUNJASON);

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/

const weatherReport = { temperature: 33, humidity: "45%", conditions: "Sunny" };
const weatherJSON = JSON.stringify(weatherReport);
const weatherCondition = JSON.parse(weatherJSON);
console.log("The weather condition is", weatherCondition.conditions);

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.3,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    rating: 8.9,
  },
  {
    title: "Lost in Translation",
    director: "Sofia Coppola",
    rating: 7.8,
  },
];
const parsedMovies = JSON.parse(JSON.stringify(movies));
parsedMovies.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/

function filterHighRatedMovies() {
  const highRatedMovies = parsedMovies.filter((movie) => movie.rating > 8);
  return highRatedMovies;
}

console.log("High rated movies table:", filterHighRatedMovies());

// laura example, here you input the jsonString in the parameter
function filterHighRatedMovies2(jsonString) {
  const arr = JSON.parse(jsonString);
  return arr.filter((movie) => movie.rating > 8);
}
console.log(
  "High rated movies table:",
  filterHighRatedMovies2(JSON.stringify(movies))
);

/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const shoppingCart = {
  items: [
    { name: "omena", price: 1.5 },
    { name: "maito", price: 2.2 },
    { name: "leipä", price: 3.0 },
    { name: "banaani", price: 0.75 },
  ],
};
const stringifiedCart = JSON.stringify(shoppingCart);
console.log(stringifiedCart);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

function totalCartValue(jsonString) {
  const cart = JSON.parse(jsonString);
  let total = 0;
  for (const item of cart.items) {
    total += item.price;
  }
  return total;
}
console.log(
  "Your groceries cost a total of:",
  totalCartValue(stringifiedCart),
  "€"
);

// laura example
function totalCartValue1(jsonString) {
  const cart = JSON.parse(jsonString);
  let sum = 0;
  cart.items.forEach((item) => {
    sum += item.price;
  });
  return sum;
}
console.log(
  "Your groceries cost a total of:",
  totalCartValue1(stringifiedCart),
  "€"
);

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

const gameProgress = { level: 12, score: 100, livesRemaining: 3 };
const JsonProgress = JSON.stringify(gameProgress);
console.log(JsonProgress);
const gameProgress2 = JSON.parse(JsonProgress);
gameProgress2.score += 55;
console.log("updated score is", gameProgress2);
