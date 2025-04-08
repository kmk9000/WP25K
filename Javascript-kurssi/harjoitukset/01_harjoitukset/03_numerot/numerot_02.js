// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.

// Esimerkki - älä muokkaa
// console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"

function fahrenheitToCelsius1(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let roundedCelsius = parseFloat(celsius.toFixed(1));
  return roundedCelsius;
}

function fahrenheitToCelsius2(fahr) {
  let tmp = ((fahr - 32) * 5) / 9;
  return tmp.toFixed(1);
}

function fahrenheitToCelsius3(fahr) {
  return (((fahr - 32) * 5) / 9).toFixed(1);
}

console.log(fahrenheitToCelsius1(21));
console.log(fahrenheitToCelsius2(21));
console.log(fahrenheitToCelsius3(21));
