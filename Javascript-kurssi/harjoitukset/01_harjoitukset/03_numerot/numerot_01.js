// Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.
function convertNumberToString(number) {
  return String(number);
}

function convertStringToNumber(string) {
  return Number.parseInt(string, 10);
}

// Esimerkki - älä muokkaa
console.log(convertNumberToString(42)); // haluttu vastaus: "42"
console.log(convertNumberToString(97)); // haluttu vastaus: "97"
console.log(convertNumberToString(11)); // haluttu vastaus: "11"

console.log(convertStringToNumber("42")); // haluttu vastaus: 42
console.log(convertStringToNumber("97")); // haluttu vastaus: 97
console.log(convertStringToNumber("11")); // haluttu vastaus: 11
