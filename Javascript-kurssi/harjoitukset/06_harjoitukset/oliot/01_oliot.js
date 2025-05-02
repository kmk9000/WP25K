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
function createBook([title, author, yearPublished, genres]) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}
createBook("Lord of the Flies", "William Golding", "1954", "Romanticism");

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

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

// Kirjoita koodisi tähän

/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

// Kirjoita koodisi tähän

/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

// Kirjoita koodisi tähän

/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

// Kirjoita koodisi tähän

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

// Kirjoita koodisi tähän

/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

// Kirjoita koodisi tähän
