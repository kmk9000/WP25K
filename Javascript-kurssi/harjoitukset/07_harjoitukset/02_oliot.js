/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = { temperature: 21, humidity: "80%", condition: "rainy" };
const weather2 = { temperature: 21, humidity: "80%", condition: "sunny" };
function rainyDay(day) {
  if (day.condition == "rainy") {
    console.log("Take an umbrella!");
  } else if (day.condition == "sunny") {
    console.log("Put on suncscreen!");
  } else {
    console.log("Have fun!");
  }
}
rainyDay(weather);
rainyDay(weather2);

/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart = {
  products: [
    { name: "Tea", price: 6.99, quantity: 4 },
    { name: "Bread", price: 4.75, quantity: 2 },
    { name: "Eggs", price: 2.99, quantity: 3 },
  ],
};
function cartSum(cart) {
  let total = 0;
  for (const product of cart.products) {
    total += product.price * product.quantity;
  }
  return total.toFixed(2);
}
console.log("Total price:", cartSum(shoppingCart), "€");

// Mudar example that doesn't work for some reason. I must have copied somethign wrong
/*
function calculateTotal(cart) {
  let total = 0;
  cart.map((item) => {
    total += item.price * item.quantity;
  });
  return total;
}
console.log("Total:", calculateTotal(shoppingCart));
*/

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

const restaurants = [
  { name: "Le Place", cuisineType: "French", rating: 3 },
  { name: "Himalayan Excellence", cuisineType: "Nepalese", rating: 4 },
  { name: "Omakase", cuisineType: "Japanese", rating: 5 },
];
let goodRatings = restaurants.filter((r) => r.rating >= 4);
console.log("Good resturants:", goodRatings);

// mudar example
const topRated = (list) => {
  return list.filter((r) => {
    r.rating >= 4;
  });
};
console.log(topRated(restaurants));

/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAccount = {
  accountHolder: "James",
  balance: 1000,
  transactions: [-200, 150, -50, 300],
};
const finalBalance = (account) => {
  let total = account.balance;
  account.transactions.map((t) => {
    total += t;
  });
  return total;
};

// oma eka yritys
/*
function finalBalance(account) {
  let total = account.balance;
  for (const transaction of account.transactions) {
    total += transaction;
    return total;
  }
}*/
console.log("Your final balance:", finalBalance(bankAccount));

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
  { name: "Tammy", scores: [6, 8, 6, 9], averageScore: null },
  { name: "Timmy", scores: [5, 7, 7, 9], averageScore: null },
  { name: "Tommy", scores: [9, 8, 8, 9], averageScore: null },
];
function calcAverage(studentList) {
  for (const student of studentList) {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;
    student.averageScore = average;
  }
}
calcAverage(students);
console.log("Students with their averages:", students);

// Mudarin nuolifunktio
const calcWithMap = (students) => {
  students.forEach((student) => {
    let total = 0;
    // loopataan kunkin opiskelijan "score"
    student.scores.map((score) => {
      // lasketaan summa
      total += score;
    });
    // päivitetään keskiarvo
    student.averageScore = total / student.scores.length;
  });
};
calcWithMap(students);
console.log(students);

/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/

const courses = [
  { courseName: "Intro to BS", instructor: "Tommi", studentsEnrolled: 33 },
  {
    courseName: "Hypergeometric Calculators",
    instructor: "Timo",
    studentsEnrolled: 28,
  },
  {
    courseName:
      "Existentialism: How to be philosophical about how nothing matters",
    instructor: "Thomas",
    studentsEnrolled: 31,
  },
];
const printLargeCourse = (courses) => {
  courses.map((course) => {
    if (course.studentsEnrolled >= 30) {
      console.log(course.courseName);
    }
  });
};
printLargeCourse(courses);

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

const pet = { species: "Dog", name: "Rekku", isVaccinated: false };

const checkVaccination = (pet) => {
  return pet.isVaccinated ? "Vaccinated" : "Not vaccinated";
};
console.log(checkVaccination(pet));

/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

const city = {
  name: "Helsinki",
  population: 1300000,
  landmark: "Tuomoikirkko",
};

const checkCitySize = (city) => {
  if (city.population > 1000000) {
    console.log("This is a big city");
  }
};
checkCitySize(city);

/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

let transactions = [
  { type: "credit", amount: 1200 },
  { type: "debit", amount: 3200 },
  { type: "debit", amount: 2500 },
  { type: "credit", amount: 2700 },
];
function calculateTransactionBalance(transactions) {
  let balance = 0;
  transactions.map((t) => {
    if (t.type == "credit") {
      balance += t.amount;
    } else if (t.type == "debit") {
      balance -= t.amount;
    }
  });
  return balance;
}
console.log("Final balance:", calculateTransactionBalance(transactions));

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

const foxPack = {
  foxes: [
    {
      name: "Fenna",
      age: 3,
      furColor: "red",
    },
    {
      name: "Luka",
      age: 5,
      furColor: "silver",
    },
    {
      name: "Mira",
      age: 2,
      furColor: "white",
    },
    {
      name: "Amber",
      age: 1,
      furColor: "orange",
    },
  ],
};
const filterAges = (pack) => {
  return pack.foxes.filter((fox) => fox.age < 2);
};
console.log(filterAges(foxPack));

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/

const gameCharacter = {
  name: "Arin",
  level: 7,
  health: 85,
  inventory: ["sword", "shield", "healing potion"],
};
const fullInventory = (gc) => {
  console.log(gc.inventory);
  console.log(gc.inventory.join(", "));
};
fullInventory(gameCharacter);

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employees = [
  {
    name: "Anna",
    role: "Developer",
    workingHours: 41,
  },
  {
    name: "Mikko",
    role: "Designer",
    workingHours: 35,
  },
  {
    name: "Sara",
    role: "Project Manager",
    workingHours: 38,
  },
];

const workingTooDamnMuch = (e) => {
  if (e.workingHours > 40) {
    console.log(e.name);
  }
};

console.log("Who works too much?");
employees.forEach(workingTooDamnMuch);

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

const musicAlbums = [
  {
    title: "Random Access Memories",
    artist: "Daft Punk",
    releaseYear: 2013,
  },
  {
    title: "Back to Black",
    artist: "Amy Winehouse",
    releaseYear: 2006,
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    releaseYear: 1973,
  },
];
const albumsAfter2000 = (ry) => {
  if (ry.releaseYear > 2000) {
    console.log(ry);
  }
};
musicAlbums.forEach(albumsAfter2000);

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

const cars = [
  {
    brand: "Toyota",
    model: "Corolla",
    horsepower: 132,
  },
  {
    brand: "Ford",
    model: "Mustang",
    horsepower: 450,
  },
  {
    brand: "Tesla",
    model: "Model 3",
    horsepower: 283,
  },
];

// Mudar example
const getMostHorsePower = (cars) => {
  // käytettään säilyttämään haluttu auto
  let largest;
  // käytetään vertailemaan hevosvoimia
  let measurement = 0;
  cars.map((car) => {
    // jos löytyy auto suuremmalla hevosvoimalla kuin entinen suurin
    if (car.horsepower > measurement) {
      // päivitä hevosvoima ja vahvin auto
      measurement = car.horsepower;
      largest = car;
    }
  });
  return largest;
};
console.log("This car has the most horsepower:", findMaxHorsePower(cars));

// reduce method, maybe a bit too advanced for now
function findMaxHorsePower(horsepower) {
  return horsepower.reduce((maxHorsepower, currentHorsepower) => {
    return currentHorsepower.horsepower > maxHorsepower.horsepower
      ? currentHorsepower
      : maxHorsepower;
  });
}
console.log("This car has the most horsepower:", findMaxHorsePower(cars));

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/

const airports = [
  {
    name: "Heathrow Airport",
    country: "United Kingdom",
    flightsPerDay: 1300,
  },
  {
    name: "Helsinki-Vantaa Airport",
    country: "Finland",
    flightsPerDay: 350,
  },
  {
    name: "Los Angeles International Airport",
    country: "United States",
    flightsPerDay: 1500,
  },
];

const getMostFlights = (planes) => {
  // käytettään säilyttämään haluttu auto
  let largest;
  // käytetään vertailemaan hevosvoimia
  let measurement = 0;
  planes.map((plane) => {
    // jos löytyy auto suuremmalla hevosvoimalla kuin entinen suurin
    if (plane.flightsPerDay > measurement) {
      // päivitä hevosvoima ja vahvin auto
      measurement = plane.flightsPerDay;
      largest = plane;
    }
  });
  return largest;
};
console.log(
  "This car has the most horsepoweThe plane that flies the most:r:",
  getMostFlights(airports)
);
