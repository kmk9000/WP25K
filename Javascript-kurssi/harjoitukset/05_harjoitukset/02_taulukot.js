// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
arrayLength = myAlphabet.length;
console.log(arrayLength);

/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/
// Kirjoita funktiosi tähän
function myAlphabetLength() {
  console.log("Taulukon pituus on", arrayLength);
  if (arrayLength >= 5) {
    console.log("Taulukon pituus on riittävä");
  } else {
    console.log("Taulukon pituus on liian lyhyt.");
  }
}
myAlphabetLength();

// toinen tapa
let ans = arrayLength >= 5 ? "Riittävä" : "Ei riittävä";
console.log("Mudarin vastaus:", ans);

// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
planets.forEach(function (planet, index) {
  console.log(planet, index);
});
/*
Tulosta jokainen planeetta planets-taulukosta ja sen indeksi.
Odotettu tulos:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän
planets.forEach(function (planet, index) {
  console.log(`Planeetta: ${planet}, Indeksi: ${index}`);
});

// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];

mixedValues.forEach((mixedVal, index) => {
  console.log(`Object: ${mixedVal}, Index: ${index}, Type: ${typeof mixedVal}`);
});
/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän

// Harjoitus 4: Tulosta jokainen myArr-taulukon alkio ilman silmukkaa
let myArr = [1, "Koira", 3.14, false];

/*
Tulosta jokainen alkio myArr-taulukosta ilman silmukan käyttöä.
Odotettu tulos: 1, "Koira", 3.14, false
*/
// Kirjoita koodisi tähän
console.log(myArr[0], myArr[1], myArr[2], myArr[3]); // mudar says: don't do this!

// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];
/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
// Kirjoita koodisi tähän

let yhteiset = elainvarasto1.filter((elain) => elainvarasto2.includes(elain));
yhteiset.forEach((elain) => console.log(`Yhteinen laji: ${elain}`));

// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta
let animalNames = ["Leijona", "Tiikeri", "Panda"];
/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/
// Kirjoita koodisi tähän
animalNames.forEach((name) => {
  let letters = name.split("").join(", ");
  console.log(`Kirjaimet sanassa ${name}: ${letters}`);
});

// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
/*
Suodata ja tulosta vain positiiviset arvot temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita koodisi tähän
let positiveTemps = [...temperatures].filter((temp) => temp > 0);
console.log("positive temps are:", positiveTemps);
/*
Kirjoita funktio getPositiveTemperatures, joka palauttaa uuden taulukon,
joka sisältää vain lämpötilat, jotka ovat suurempia kuin 0 temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita funktiosi tähän

// Harjoitus 8: Etsi "Kettu":n indeksi zooAnimals-taulukosta
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
/*
Etsi ja tallenna "Kettu":n indeksi zooAnimals-taulukosta.
Odotettu tulos: "Kettu:n indeksi: 3"
*/
// Kirjoita koodisi tähän
let foxIndex = zooAnimals.indexOf("Kettu");
console.log(`Ketun indeksi on: ${foxIndex}`);

// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1
*/
// Kirjoita koodisi tähän
const findAnimal = (animal) => {
  let animalIndex = zooAnimals.indexOf(animal);
  if ((animalIndex = -1)) {
    console.log(`${animal} ei ole eläintarhassa`);
    console.log(animalIndex);
  }
};
findAnimal("Pingviini");

// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
// Kirjoita koodisi tähän
let giraffeIndex = zooAnimals.indexOf("Kirahvi");
//jos löytyy
if (giraffeIndex !== -1) {
  // jos giraffeIndex ei ole -1, niin suoritetaan
  zooAnimals[giraffeIndex] = "Alpakka"; // haetaan [giraffeIndex]
}
console.log(zooAnimals);

// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];
/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
// Kirjoita koodisi tähän
let sortedAnimals = [...safariAnimals].sort();
console.log(sortedAnimals);

// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
// Kirjoita koodisi tähän
let reversedAnimals = [...sortedAnimals].reverse();
console.log(reversedAnimals);

// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
// Kirjoita koodisi tähän
let isTiger = safariAnimals.includes("Tiikeri");
console.log(isTiger);

// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];
/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
// Kirjoita koodisi tähän
let jonnaIndex = [];
attendees.forEach((name, index) => {
  if (name == "Jonna") {
    jonnaIndex.push(index);
  }
});
console.log("Jonnan paikat indeksissä: ", jonnaIndex);

// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
// Kirjoita koodisi tähän
let upperCase = [...attendees].map((name) => name.toUpperCase());
console.log(upperCase);

// Harjoitus 16: Yhdistä forestAnimals- ja farmAnimals-taulukot
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];

/*
Yhdistä forestAnimals ja farmAnimals uuteen taulukkoon.
Odotettu tulos: ["Peura", "Karhu", "Susi", "Hevonen", "Lammas", "Vuohi"]
*/
// Kirjoita koodisi tähän
let allAnimals = forestAnimals.concat(farmAnimals);
console.log(allAnimals);
// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];

/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/
// Kirjoita koodisi tähän
let newArray = birdSpecies.slice(1, -1);
console.log(newArray);

// Harjoitus 18: Käytä `splice`:a poistaaksesi ja korvataksesi arvoja numbers-taulukossa
let numbers = [10, 20, 30, 40, 50];
/*
Käytä splice-metodia poistamaan "30" ja korvaamaan se arvoilla "25" ja "27".
Odotettu tulos: [10, 20, 25, 27, 40, 50]
*/
// Kirjoita koodisi tähän
numbers.splice(2, 1, 25, 27);
console.log(numbers);

// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
let prices = [5, 10, 15, 20];
/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
// Kirjoita funktiosi tähän
let increasedPrices = prices.map((price) => price * 1.1);
console.log(increasedPrices);

// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];

/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
// Kirjoita funktiosi tähän
let longwords = words.filter((word) => word.length > 5);
console.log(longwords);
