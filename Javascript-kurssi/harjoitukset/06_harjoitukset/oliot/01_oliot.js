/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

// Kirjoita koodisi tähän
const library = [
  {
    title: "Hitchiker's Guide to the Universe",
    author: "Douglas Adams",
    yearPublished: 1979,
  },
  {
    title: "Eloquent JavaScript, 4th Edition",
    author: "Haverbeke, Marjin",
    yearPublished: 2024,
  },
  { title: "Guards! Guards!", author: "Terry Pratchett", yearPublished: 1989 },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

// Kirjoita koodisi tähän
console.log("First book's name:", library[0].title);
library[1].yearPublished = 2025; // this edits the year
console.log("Second book's publishing year:", library[1].yearPublished);
console.log("Second book's name:", library[1].title);
console.log("Third book's name:", library[2].title);
// can't do something like title.author.yearPublished
// need to refer to library index every time
console.log(
  "Second book info:",
  library[1].title,
  library[1].author,
  library[1].yearPublished
);
/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/

// Kirjoita koodisi tähän
library[0].genres = ["Satire", "Comedy"];
console.log(library[0]);

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

// Kirjoita koodisi tähän
class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}
const newBook = new Book("Lord of the Rings", "J.R.R. Tolkien", "1968", [
  "Fantasy",
  "Adventure",
]);
library.push(newBook);
console.log(`The new book's (LOTR) genres are: ${newBook.genres}`);

/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/

// Kirjoita koodisi tähän
/*function createBook([title, author, yearPublished, genres]) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}
  createBook("Lord of the Flies", "William Golding", "1954", "Romanticism");*/
function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

const newerBook = createBook(
  "Lord of the Flies",
  "William Golding",
  "1954",
  "Romanticism"
);
console.log("Luotu kirja:", newerBook);

/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/

// Kirjoita koodisi tähän

/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

// Kirjoita koodisi tähän
const students = [
  { name: "Timmy", age: 17, grade: 88 },
  { name: "Tommy", age: 34, grade: 93 },
  { name: "Tammy", age: 28, grade: 70 },
  { name: "Bob", age: 21, grade: 95 },
];
// suodatetaan hyvät opiskelijat
let goodGrades = students.filter((student) => student.grade > 90);
// tulostetaan hyvien opiskelijoiden pelkät nimet
goodGrades.forEach((topStudent) => {
  console.log("Top students:", topStudent.name);
});
/*
ketjutus:
students
.filter((student) => student.grade > 90)
.forEach((topStudent) => console.log(topStudent.name))
*/

/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  isElectric: true,
};

if (car.isElectric) {
  console.log("This car is eco-friendly!");
} else {
  console.log("This car runs on fuel.");
}
if (car.year > 2020) {
  console.log("Auto on uusi!");
} else {
  console.log("Auto on vanha.");
}
// vaihtoehto ehtolauseelle
car.isElectric
  ? console.log("This car is eco-friendly!")
  : console.log("This car runs on fuel.");
// vaihtoehto ehtolauseelle & tulostamiselle
console.log(car.isElectric ? "sähköauto" : "polttomoottoriauto");

// Kirjoita koodisi tähän
/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

// Kirjoita koodisi tähän
const movies = [
  { title: "Inception", director: "Nolan", rating: 8.8 },
  { title: "The Room", director: "Wiseau", rating: 3.7 },
  { title: "Parasite", director: "Bong", rating: 8.6 },
  { title: "The Godfather", director: "Coppola", rating: 9.2 },
];
let highRatedMovie = movies.filter((movies) => movies.rating > 8);
console.log("Good movies:", highRatedMovie);

for (const goodMovies of movies) {
  if (goodMovies.rating > 8) {
    console.log("Good movie:", goodMovies.title);
  }
}

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

// Kirjoita koodisi tähän
const carList = [
  { brand: "Volvo", model: "240", year: 1985 },
  { brand: "Toyota", model: "Corolla", year: 1992 },
  { brand: "Ford", model: "Model T", year: 1927 },
];

function findOldestCar(cars) {
  if (cars.length === 0) {
    return null; // ilman tätä ohjelma kaatuu, jos taulukko on tyhjä
  }
  // Aloitetaan ensimmäisestä
  let oldest = cars[0];

  // Käydään läpi loput ja vertaa niitä edelliseen
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].year < oldest.year) {
      oldest = cars[i];
    }
  }

  return oldest;
}
console.log("The oldest car is:", findOldestCar(carList));

// vaihtoehtoisesti voit käyttää taulukon reduce()-metodia
function findOldestCar2(cars) {
  return cars.reduce((oldest, current) =>
    current.year < oldest.year ? current : oldest
  );
}
console.log("Vanhin auto on:", findOldestCar2(carList));

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

// Kirjoita koodisi tähän
const userProfiles = [
  { username: "Tommi", email: "tommi@email.com", isAdmin: true },
  { username: "Tiina", email: "tiina@email.com", isAdmin: false },
  { username: "Saana", email: "saana@email.com", isAdmin: true },
  { username: "Mikko", email: "mikko@email.com", isAdmin: false },
];
let areAdmins = userProfiles.filter((user) => user.isAdmin);
console.log(areAdmins);

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

// Kirjoita koodisi tähän
const orders = [
  { orderId: 123, customerName: "Tommi", totalAmount: 300, status: "pending" },
  {
    orderId: 134,
    customerName: "Tiina",
    totalAmount: 450,
    status: "completed",
  },
  {
    orderId: 432,
    customerName: "Saana",
    totalAmount: 77,
    status: "completed",
  },
  {
    orderId: 825,
    customerName: "Mikko",
    totalAmount: 123,
    status: "completed",
  },
];
const readyOrders = orders.filter(
  (readiness) => readiness.status === "completed"
);
console.log("Ready orders:", readyOrders);

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

// Kirjoita koodisi tähän
const smartphone = {
  brand: "Samsung",
  model: "S24",
  batteryLife: "72 hours",
  is5GEnabled: true,
};
function check5g(phone) {
  if ((phone.is5GEnabled = true)) {
    console.log("This phone supports 5G!");
  } else console.log("This phone does not support 5G.");
}
check5g(smartphone);

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

// Kirjoita koodisi tähän
const fox = { name: "Foxy", age: 3, habitat: "forest" };
function youngFox() {
  if (fox.age < 3) {
    console.log("This fox is young");
  } else {
    console.log("This fox is an adult");
  }
}
youngFox(fox);
/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

// Kirjoita koodisi tähän
const employees = [
  { name: "Tommi", position: "Coder", salary: 3900 },
  { name: "Tiina", position: "Lead designer", salary: 4100 },
  { name: "Mikko", position: "Writer", salary: 3700 },
  { name: "Saana", position: "Art designer", salary: 3700 },
];
function salarySum(workers) {
  let total = 0;
  for (const pay of workers) {
    total += pay.salary;
  }
  return total;
}
console.log("The total sum of salaries is:", salarySum(employees));
