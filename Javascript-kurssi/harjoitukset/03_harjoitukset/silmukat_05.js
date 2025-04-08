// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
function calculateAverageUntilZero() {
  let sum = 0;
  let count = 0;
  while (true) {
    let input = prompt("Give numbers until you input 0");
    let number = Number(input);
    if (number === 0) {
      break;
    }
    sum += number;
    count++;
  }
  let average = sum / count;

  console.log(`The average of the inputted number is ${average}`);
}

calculateAverageUntilZero();
