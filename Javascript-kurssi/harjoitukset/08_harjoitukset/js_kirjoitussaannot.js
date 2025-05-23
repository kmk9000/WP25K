/* Tehtävä 1: Käytä \"strict mode\" -tilaa

Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/

function task1() {
  "use strict";
  try {
    variable = 10;
  } catch (error) {
    console.log("Strict mode -error:", error.message);
  } finally {
    console.log("function executed");
  } // "finally" shows that the function finished running
}

task1();

/* Tehtävä 2: Muuttujien oikea julistus

Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
Yritä muuttaa vakion arvoa ja ota virhe kiinni.
*/

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;
  try {
    currentUsers += 10; // järjestyksellä try blokin sisällä on merkitystä, jos MAX_USERS olisi ensin, se lopettaisi koodin siihen
    MAX_USERS++;
  } catch (error) {
    console.log("ERROR!! Variable can't be changed.", error.message);
  }
  console.log("MAX_USERS:", MAX_USERS);
  console.log("currentUsers:", currentUsers);
}
task2();

/* Tehtävä 3: Luo objekti ja tulosta se

Luo objekti `userProfile`, jossa kentät:
- name
- email
- isAdmin
Tulosta objekti konsoliin.
*/

class UserProfile {
  constructor(name, email, isAdmin) {
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}

function task3() {
  const user1 = new UserProfile("Pekka", "pekka@hotmail.com", true);
  console.log(user1);
}
task3();

/* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen

Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
*/

function calculateArea(width, height) {
  return width * height;
}
console.log("Area of 5x10 is", calculateArea(5, 10));

/* Tehtävä 5: Vältä taikalukuja

Määritä vakio `DISCOUNT = 0.1`.
Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  return price - price * DISCOUNT;
}
console.log(applyDiscount(100));

/* Tehtävä 6: Kirjoita hyödyllisiä kommentteja

Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
Lisää funktioon kommentti, joka selittää sen tarkoituksen.
*/
/**
 * @param name käyttäjän nimi
 * @return Tervehtii käyttäjää nimellä
 */
function greetUser(name) {
  return `Hello, ${name}!`; // greets user
}
console.log(greetUser("Kalle"));

/* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi

Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.

Ennen:
function f(n){return n<0 ? 'negative' : 'positive';}
*/

function checkIfPositiveNumber(number) {
  if (number < 0) {
    return "negative";
  } else {
    return "positive";
  }
}
console.log("Number is", checkIfPositiveNumber(8));

/* Tehtävä 8: Korjaa koodin muotoilu

Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.

Ennen:
let x=10; function example(){console.log(x);}
*/

function example() {
  let x = 10;
  console.log(x);
}

example();
