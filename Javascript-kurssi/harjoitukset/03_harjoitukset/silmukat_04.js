// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
function countEvenNumbers() {
  let count = 0;
  for (let i = 1; i <= 20; i++) {
    let input = prompt(parseFloat("Anna 20 lukua:"));
    let number = Number(input);
    if (number % 2 === 0) {
      count++;
    }
  }
  console.log(`You entered ${count} even numbers out of 20`);
}
countEvenNumbers();
